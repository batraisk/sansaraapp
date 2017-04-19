import { SansaraappPage } from './app.po';

describe('sansaraapp App', () => {
  let page: SansaraappPage;

  beforeEach(() => {
    page = new SansaraappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
