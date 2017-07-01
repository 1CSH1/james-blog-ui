import { JamesBlogUiPage } from './app.po';

describe('james-blog-ui App', () => {
  let page: JamesBlogUiPage;

  beforeEach(() => {
    page = new JamesBlogUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
