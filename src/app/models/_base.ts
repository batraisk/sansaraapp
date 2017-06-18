export function Alias(alias: string, blocked: boolean = true) {
  return function (target: Object, propertyKey: string | symbol) {
    target.constructor['_alias'] = target['constructor']['_alias'] || [];
    target.constructor['_alias'].push({ key: propertyKey, value: alias, blocked: blocked });
  }
}

export class Base {

  private _errors: Object = {};

  set errors(value: Object) {
    this._errors = {};

    let alias = this.constructor['_alias'];
    let keys: string[] = Object.keys(value);

    keys.forEach(key => {
      let field = alias.find(x => x.value === key);

      if (field) {
        this._errors[field.value] = value[key];
      }
    });
  }

  get errors(): Object {
    return this._errors;
  }

  public clearErrors(fieldName?: string) {
    if (fieldName) {
      this._errors[fieldName] = void(0);
    } else {
      this._errors = {};
    }
  }

  public serialize(): any {
    let newObj = {};
    let alias = this.constructor['_alias'];

    alias.forEach(item => {
      if (this[item['key']] instanceof Base) {
        newObj[item['value']] = this[item['key']].serialize();
      } else {
        newObj[item['value']] = this[item['key']];
      }
    });

    return newObj;
  }

  public deserialize(response: Object): void {

    this.constructor['_alias']
        .filter(x => x.blocked)
        .forEach(item => {
          if (response[item['value']]) {
            this[item['key']] = response[item['value']];
          }
        });
  }

  public equals(copy): boolean {
    return JSON.stringify(this) !== JSON.stringify(copy);
  }
}
