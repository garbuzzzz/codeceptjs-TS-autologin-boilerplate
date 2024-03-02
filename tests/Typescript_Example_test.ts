Feature('Typescript Example');
const login = codeceptjs.container.support('login');


Scenario.only('test something', async ({ I, loginPage, homePage, login }) => {
  login('admin')
  homePage.goToHome()
  I.printMessage('Helper message')
  loginPage.testMethod('Login Page')
  loginPage.link()
  I.printHelpers()
});
