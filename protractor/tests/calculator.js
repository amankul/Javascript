describe("demo calculator tests", function() {
  //each it block is a test case

  it("addition test", function() {
    browser.get("http://juliemr.github.io/protractor-demo/.");

    element(by.model("first")).sendKeys("2"); //ng-model

    element(by.model("second")).sendKeys("3");

    element(by.css('[ng-click="doAddition()"]')).click();

    let result = element(by.cssContainingText(".ng-binding", "5"));

    expect(result).toEqual("5");
  });
});
