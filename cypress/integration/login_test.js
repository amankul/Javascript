import { LoginPage } from "./login_page"

const loginObject = new LoginPage()

it('login test', function () {
    
    loginObject.navigate('https://trytestingthis.netlify.app/')
    loginObject.enterUser('test')
    loginObject.enterPass('test')
    loginObject.clickLogin()
    loginObject.checkHeading('Login Successful')
    console.log('TITLE - ' + loginObject.getTitle)

})