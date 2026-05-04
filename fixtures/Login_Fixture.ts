import {test as base,} from "@playwright/test"
import {LoginPage} from "../pages/loginpage"
export {expect} from "@playwright/test"

type loginFixture ={
    loginPage: LoginPage;

}

export const test= base.extend<loginFixture>({
    loginPage: async({page}, use)=>{
        const loginPage= new LoginPage(page);
        await use(loginPage)
    }
})