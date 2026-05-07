import{Locator, Page, test,expect} from "@playwright/test"

export class Booking_journey_loggedin{
    readonly page:Page;
    readonly bookStayBtn: Locator;
    readonly searchBox: Locator;
    readonly hotelOption: Locator;
    readonly checkRatesBtn: Locator;
    readonly standardRate: Locator;
    readonly price: Locator;
    readonly selectBtn: Locator;
    readonly confirmPrice: Locator;
    readonly checkbox: Locator;

    constructor(page:Page){
        this.page = page;
        this.bookStayBtn = page.getByRole('button', { name: 'BOOK A STAY' });
        this.searchBox = page.getByRole('textbox', { name: 'Find a Hotel or Destination' });
        this.hotelOption = page.getByText('Taj Lands End, Mumbai');
        this.checkRatesBtn = page.getByRole('button', { name: 'Check rates' });
        this.standardRate = page.getByText('STANDARD RATE').first();
        this.price = page.getByText('₹ 25,000').first();
        this.selectBtn = page.getByRole('button', { name: 'SELECT' }).nth(1);
        this.confirmPrice = page.getByText('₹ 25,000.00').nth(1);
        this.checkbox = page.getByRole('checkbox');
    }

    async booking_initiation(){
        await this.bookStayBtn.first().click();
        await this.searchBox.isVisible({timeout: 5000});
        await this.searchBox.fill("Taj Lands End, Mumbai");
        await this.hotelOption.click();
        await this.checkRatesBtn.click();
        await this.page.waitForLoadState("load")
        await expect(this.standardRate).toBeVisible({timeout: 5000});
        await expect(this.price).toBeVisible({timeout: 5000});
        await this.selectBtn.click();
        await expect(this.confirmPrice).toBeVisible({timeout: 5000});
        await this.checkbox.check();
        await this.page.waitForLoadState("networkidle")
    }
     async makePayment() {
    const frame = this.page.frameLocator('iframe[name="HyperServices"]');
    await frame.getByText('Preferred PaymentCredit /').click();
    await frame.getByText('Credit / Debit Card', { exact: true }).click();
    await frame.getByRole('radio', { name: 'Bank of USA Credit Card' }).click();
    await frame.locator('#10000177').click();
    await frame.getByRole('textbox', { name: 'C V V' }).fill('234');
    await frame.getByRole('button', { name: 'PROCEED TO PAY' }).click();
  }

  async handleBank() {
    await this.page.goto('https://stgsimulator.ccavenue.com/bank-simulator/process-request');
    await this.page.getByRole('button', { name: 'Send Response' }).click();
  }

}