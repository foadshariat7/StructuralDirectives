import { StructuralDirectivesPage } from './app.po';

describe('structural-directives App', () => {
  let page: StructuralDirectivesPage;

  beforeEach(() => {
    page = new StructuralDirectivesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
