
import {test,expect} from "../../fixtures/Login_Fixture"

test("room booking",async({loginPage,booking_journey_loggedin})=>{
    await loginPage.openTajHotel();
    await loginPage.mobile_Loging_with_Valid_OTP("8074425828");
    await booking_journey_loggedin.booking_initiation();
    await booking_journey_loggedin.makePayment();
    await booking_journey_loggedin.handleBank();
})