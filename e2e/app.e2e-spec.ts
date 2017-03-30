import { EmilysServiceTrackerPage } from './app.po';

describe('emilys-service-tracker App', () => {
  let page: EmilysServiceTrackerPage;

  beforeEach(() => {
    page = new EmilysServiceTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('aap works!');
  });
});
