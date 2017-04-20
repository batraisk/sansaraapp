import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { signInComponent } from './sign-in.component';

describe('signInComponent', () => {
  let component: signInComponent;
  let fixture: ComponentFixture<signInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ signInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(signInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
