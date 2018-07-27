import { CustomerReviewsPage } from './app.po';

describe('customer-reviews App', function() {
  let page: CustomerReviewsPage;

  beforeEach(() => {
    page = new CustomerReviewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
