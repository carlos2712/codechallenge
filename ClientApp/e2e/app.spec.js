describe('Code challenge protractor', function () {
  it('should add a todo', function () {
    browser.get('https://localhost:5001/');


    var EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf(element(by.id('currentNews')), 30000, "News did not load"));

    const news10 =  element.all(by.css('.list-group-item'));
    expect(news10.count()).toEqual(10);

    element(by.id('selecInput')).sendKeys("Top 20");
    browser.wait(EC.presenceOf(element(by.id('currentNews')), 30000, "News did not load"));
    const news20 =  element.all(by.css('.list-group-item'));
    expect(news20.count()).toEqual(20);

  });
});
