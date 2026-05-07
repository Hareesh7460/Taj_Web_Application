import { test as base } from "@playwright/test";
import { booking } from "../fixtures/Booking_journey_fixture";
import { test_L } from "../fixtures/Login_Fixture";
import { Booking_journey_loggedin } from "../pages/Booking_journey_loggedin";
import { LoginPage } from "../pages/loginpage";

export const test = base.extend({
  ...booking,
  ...test_L,
});
export { expect } from '@playwright/test';