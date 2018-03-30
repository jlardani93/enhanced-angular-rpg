import { EnhancedAngularRpgPage } from './app.po';

describe('enhanced-angular-rpg App', () => {
  let page: EnhancedAngularRpgPage;

  beforeEach(() => {
    page = new EnhancedAngularRpgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
