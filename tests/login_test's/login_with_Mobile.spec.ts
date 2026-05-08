import { test } from "../../fixtures/Login_Fixture";
//import{test} from "@playwright/test"

test("Mobile login with valid OTP @smoke",async({loginPage})=>{
    await loginPage.openTajHotel();
    await loginPage.mobile_Loging_with_Valid_OTP("9948965767");
})
test("Mobile login with invalid OTP @sanity",async({loginPage})=>{
    await loginPage.openTajHotel();
    await loginPage.mobile_login_invalid_OTP("8074425828");
})