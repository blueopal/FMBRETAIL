"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basePage = void 0;
const protractor_1 = require("protractor");
class basePage {
    constructor() {
        this.EC = protractor_1.protractor.ExpectedConditions;
    }
    async waitForElement(element) {
        await protractor_1.browser.wait(this.EC.visibilityOf(element), 15000, 'Element didnot found');
    }
    async click(element) {
        await protractor_1.browser.wait(await this.EC.presenceOf(element), 15000, "Element is not clickable)");
        await element.click();
    }
    async sendKeys(element, text) {
        await this.waitForElement(element);
        await element.sendKeys(text);
    }
    async getText(element) {
        await this.waitForElement(element);
        let txt;
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
    async getTitle() {
        return protractor_1.browser.getTitle();
    }
    async getCurrentUrl() {
        await protractor_1.browser.wait(await this.EC.urlContains("http"), 15000);
        return protractor_1.browser.getCurrentUrl();
    }
    async verifyAndCloseAlert(text) {
        protractor_1.browser.wait(this.EC.alertIsPresent(), 6000, "Alert not found");
        let alert = await protractor_1.browser.switchTo().alert();
        let alertText = await alert.getText();
        protractor_1.browser.sleep(2000);
        expect(alertText).toContain(text);
        await alert.accept();
    }
    async getAttribute(element, attribute) {
        await this.waitForElement(element);
        let txt;
        return txt = await element.getAttribute(attribute);
    }
}
exports.basePage = basePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlcy9iYXNlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyQ0FBNkU7QUFLN0UsTUFBYSxRQUFRO0lBQXJCO1FBRUksT0FBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7SUEwRHZDLENBQUM7SUF4REcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPO1FBQ3hCLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBc0I7UUFFOUIsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBQzFGLE1BQU0sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQXNCLEVBQUUsSUFBWTtRQUMvQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWpDLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLEdBQVcsQ0FBQztRQUNoQixPQUFPLEdBQUcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsNEZBQTRGO0lBQzVGLDBDQUEwQztJQUMxQyw2QkFBNkI7SUFDN0IsRUFBRTtJQUNGLHNGQUFzRjtJQUN0Rix3REFBd0Q7SUFDeEQsbURBQW1EO0lBQ25ELElBQUk7SUFFSixLQUFLLENBQUMsUUFBUTtRQUNWLE9BQU8sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWE7UUFDZixNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0QsT0FBTyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsSUFBWTtRQUVsQyxvQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hFLElBQUksS0FBSyxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QyxJQUFJLFNBQVMsR0FBRyxNQUFNLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQXFCLEVBQUUsU0FBZ0I7UUFDdEQsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksR0FBVyxDQUFDO1FBQ2hCLE9BQU8sR0FBRyxHQUFHLE1BQU0sT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBRUo7QUE1REQsNEJBNERDIn0=