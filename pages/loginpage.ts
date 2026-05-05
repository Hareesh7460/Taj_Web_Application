import {test, expect, Page, Locator} from "@playwright/test"

export class LoginPage{
    readonly page:Page;
    readonly login_joinBtn: Locator;
    readonly loginPopUp_screen: Locator;
    readonly mobileNumber_input: Locator;
    readonly checkBox: Locator;
    readonly continueBtn: Locator;
    readonly countryCode_DD: Locator;
    readonly selectCountryCode: Locator;
    readonly closeBtn: Locator;
    readonly otp_input: Locator;
    readonly incorrectOTP_errorMsg: Locator;
    readonly myaccount: Locator;

    constructor(page:Page){
        this.page = page;
        this.login_joinBtn = page.locator("//span[contains(text(), 'LOGIN / JOIN')]");
        this.loginPopUp_screen = page.locator('//h4[contains(text(),"ALREADY A MEMBER? LOGIN")]');
        this.mobileNumber_input = page.locator('//input[@name="senderMobile"]');
        this.checkBox = page.locator('//input[@type="checkbox"]');
        this.continueBtn = page.locator('//button[contains(text(), "CONTINUE")]');
        this.countryCode_DD = page.locator('//img[@alt="country-flag"]');
        this.selectCountryCode = page.locator('//span[contains(text(),"India")]');
        this.closeBtn = page.locator('//span[contains(text(), "CLOSE")]');
        this.otp_input = page.locator('//input[@type="tel"]');
        this.incorrectOTP_errorMsg = page.locator('//span[contains(text(),"Uh-oh! Incorrect OTP. 2 attempt(s) left")]');
        this.myaccount = page.locator('//a[contains(text(),"MY ACCOUNT")]');
    }
    
    async openTajHotel(){
        await this.page.goto("https://web-preprod1-528v2.tajhotels.com/en-in",{waitUntil:"load"});
    }
    async mobile_Loging_with_Valid_OTP(mobileNumber:string){
        await this.login_joinBtn.first().waitFor({state:"visible", timeout:5000});
        await this.login_joinBtn.first().click();
        await expect(this.loginPopUp_screen).toBeVisible({timeout: 5000});
        await this.mobileNumber_input.fill(mobileNumber);
        await this.checkBox.check();
        await this.continueBtn.click();
        await this.page.waitForTimeout(5000);
        const otp="254265";
        for(let i=0; i<otp.length; i++){
            await this.otp_input.nth(i).fill(otp[i]);
    }
   
}
    async mobile_login_invalid_OTP(mobileNumber:string){
        await this.login_joinBtn.first().waitFor({state:"visible", timeout:5000})
        await this.login_joinBtn.first().click();
        await expect(this.loginPopUp_screen).toBeVisible({timeout: 5000});
        await this.mobileNumber_input.fill(mobileNumber);
        await this.checkBox.check();
        await this.continueBtn.click();
        await this.page.waitForTimeout(3000)
        const invalid_otp="123456";
        const valid_OTP="254265";
        for(let i=0; i<invalid_otp.length; i++){
            await this.otp_input.nth(i).fill(invalid_otp[i])
            if( await this.incorrectOTP_errorMsg.isVisible({timeout: 3000})){
                for(let j=0; j<valid_OTP.length; j++){
                    await this.otp_input.nth(j).fill(valid_OTP[j]);
                }
            }
            
        }
        await this.myaccount.isVisible({timeout: 5000});
    }

}