import { DiryPage } from './app.po';

describe('diry App', function() {
  let page: DiryPage;

  beforeEach(() => {
    page = new DiryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
