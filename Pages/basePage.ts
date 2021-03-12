
import { ElementFinder, protractor, browser, element, by } from "protractor";
import notEmpty = jasmine.notEmpty;



export class basePage {

    EC = protractor.ExpectedConditions;

    async waitForElement(element){
        await browser.wait(this.EC.visibilityOf(element), 15000, 'Element didnot found');
    }

    async click(element: ElementFinder) {

        await browser.wait(await this.EC.presenceOf(element), 15000, "Element is not clickable)");
        await element.click();
    }

    async sendKeys(element: ElementFinder, text: string) {
        await this.waitForElement(element);
        await element.sendKeys(text);

    }

    async getText(element: ElementFinder): Promise<string> {
        await this.waitForElement(element);
        let txt: string;
        return txt = await element.getText();
    }

    // async selectFromDropdownUsingVisibleText(element: ElementFinder, selectionText: string) {
    //     await this.waitForElement(element);
    //     await element.click();
    //
    //     // WebElement dropdownElement = DriverWrapper.getDriver().findElement(locator);
    //     // Select dropdown = new Select(dropdownElement);
    //     // dropdown.selectByVisibleText(selectThis);
    // }

    async getTitle(): Promise<string> {
        return browser.getTitle();
    }

    async getCurrentUrl(): Promise<string> {
        await browser.wait(await this.EC.urlContains("http"), 15000);
        return browser.getCurrentUrl();
    }

    async verifyAndCloseAlert(text: string) {

        browser.wait(this.EC.alertIsPresent(), 6000, "Alert not found");
        let alert = await browser.switchTo().alert();
        let alertText = await alert.getText();
        browser.sleep(2000);
        expect(alertText).toContain(text);
        await alert.accept();
    }

    async getAttribute(element:ElementFinder, attribute:string):Promise<string>{
        await this.waitForElement(element);
        let txt: string;
        return txt = await element.getAttribute(attribute);
    }

}


