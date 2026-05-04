import { test,expect } from "../../fixtures/Login_Fixture";
import { LoginPage } from "../../pages/loginpage";

test("Login with Mobile Number",async({loginPage})=>{
    await loginPage.openTajHotel();
    await loginPage.loginwithMobileNumber("9948965767");
})