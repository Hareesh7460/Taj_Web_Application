import{Locator, Page, test,expect} from "@playwright/test"

export class Booking_journey_loggedin{
    readonly page:Page;
    readonly bookStayBtn: Locator;
    readonly searchBox: Locator;
    readonly hotelOption: Locator;
    readonly checkRatesBtn: Locator;
    readonly standardRate: Locator;
    //readonly price: Locator;
    readonly selectBtn: Locator;
    //readonly confirmPrice: Locator;
    readonly checkbox: Locator;

    constructor(page:Page){
        this.page = page;
        this.bookStayBtn = page.getByRole('button', { name: 'BOOK A STAY' });
        this.searchBox = page.getByRole('textbox', { name: 'Find a Hotel or Destination' });
        this.hotelOption = page.getByText('Taj Lands End, Mumbai');
        this.checkRatesBtn = page.getByRole('button', { name: 'Check rates' });
        this.standardRate = page.locator('//span[contains(text(),"STANDARD RATE")]');
        //this.price = page.getByText('₹ 25,000').first();
        this.selectBtn = page.getByRole('button', { name: 'SELECT' }).nth(1);
        //this.confirmPrice = page.getByText('₹ 25,000.00').nth(1);
        this.checkbox = page.getByRole('checkbox');
    }

    async booking_initiation(){
        await this.bookStayBtn.first().click();
        await this.searchBox.isVisible({timeout: 5000});
        await this.searchBox.fill("Taj Lands End, Mumbai");
        await this.hotelOption.click();
        await this.checkRatesBtn.click();
        await this.page.waitForLoadState("load")
        const standardratescount= await this.standardRate.count();
        const standardratesfirst=  this.standardRate.first();
        //await expect(standardratesfirst).toBeVisible({timeout: 10000});
        //await expect(this.price).toBeVisible({timeout: 10000});
        await this.selectBtn.click();
        //await expect(this.confirmPrice).toBeVisible({timeout: 10000});
        await this.page.waitForTimeout(5000)
        await this.checkbox.click();
        await this.page.waitForTimeout(5000);
    }
  //    async makePayment() {
  //   const frame = this.page.frameLocator('iframe[name="HyperServices"]');
  //   await frame.getByText('Preferred PaymentCredit /').click();
  //   await frame.getByText('Credit / Debit Card', { exact: true }).click();
  //   await frame.getByRole('radio', { name: 'Bank of USA Credit Card' }).click();
  //   await frame.locator('#10000177').click();
  //   await frame.getByRole('textbox', { name: 'C V V' }).fill('234');
  //   await frame.getByRole('button', { name: 'PROCEED TO PAY' }).click();
  // }


 async handlePayment() {
      const frame = this.page.frameLocator('iframe[name="HyperServices"]');
    // Saved cards locator
    const savedCards = frame.locator('//div[@class="linearLayout"]/img[@alt="circular radio button"]');

    // Count saved cards
    const cardCount = await savedCards.count();

    if (cardCount > 0) {

        console.log(`Saved cards found: ${cardCount}`);

        // Select first saved card
        await savedCards.first().click();

    } else {

        console.log('No saved cards found. Adding new card.');

        // Click Add New Card
        await frame.locator('//article[contains(text(),"Add new card")]').click();

        // Enter card details
        await frame.locator('//input[@placeholder="Enter card number here"]')
            .fill('4111111111111111');

        await frame.locator('//input[@placeholder="MM/YY"]')
            .fill('12/30');

        await frame.locator('//input[@placeholder="CVV"]')
            .fill('123');

    }

    // Proceed to pay
    await frame.locator('//article[contains(text(),"PROCEED TO PAY ")]').click();
}
  async handleBank() {
    //await this.page.goto('https://stgsimulator.ccavenue.com/bank-simulator/process-request');
    await this.page.getByRole('button', { name: 'Send Response' }).click();
    
  }

}