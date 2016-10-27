import { NgGraphqlFullstackPage } from './app.po';

describe('ng-graphql-fullstack App', function() {
  let page: NgGraphqlFullstackPage;

  beforeEach(() => {
    page = new NgGraphqlFullstackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
