import { MapIt2Page } from './app.po';

describe('map-it-2 App', function() {
  let page: MapIt2Page;

  beforeEach(() => {
    page = new MapIt2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
