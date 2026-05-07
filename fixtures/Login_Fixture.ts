import {test as base,} from "@playwright/test"
import {LoginPage} from "../pages/loginpage"
import { Booking_journey_loggedin } from "../pages/Booking_journey_loggedin"
export {expect} from "@playwright/test"


type loginFixture ={
    loginPage: LoginPage;
    booking_journey_loggedin: Booking_journey_loggedin;

}

export const test= base.extend<loginFixture>({
    loginPage: async({page}, use)=>{
        const loginPage= new LoginPage(page);
        await use(loginPage)
    },
    booking_journey_loggedin: async({page},use)=>{
        const booking_journey_loggedin= new Booking_journey_loggedin(page);
        await use(booking_journey_loggedin)
    }

})