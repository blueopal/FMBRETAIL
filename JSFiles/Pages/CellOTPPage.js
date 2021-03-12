"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellOTPPage = void 0;
const protractor_1 = require("protractor");
const basePage_1 = require("./basePage");
class CellOTPPage extends basePage_1.basePage {
    constructor() {
        //Locators-Elements
        super(...arguments);
        this.pageHeaderEle = protractor_1.element(protractor_1.by.tagName("h1"));
        this.numberFieldEle = protractor_1.element(protractor_1.by.xpath("//input[@aria-label='Phone Input']"));
        this.requestCodeButtonEle = protractor_1.element(protractor_1.by.xpath("//span[contains(text(), 'Send verification code')]"));
        this.codeInputFieldEle = protractor_1.element(protractor_1.by.xpath("//label[text()='Verification code']"));
        this.resendButtonEle = protractor_1.element(protractor_1.by.xpath("//a[text()='Resend it']"));
        this.continueButtonEle = protractor_1.element(protractor_1.by.xpath("//span[text()='Continue ']"));
        this.codeSentConfirmationTextEle = protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'code has been sent')]"));
    }
    async enterPhoneNumber(phoneNumber) {
        await this.sendKeys(this.numberFieldEle, phoneNumber);
        await protractor_1.browser.sleep(100);
    }
    async clickOnRequestCodeButton() {
        await this.click(this.requestCodeButtonEle);
        await protractor_1.browser.sleep(100);
    }
    async enterCode(code) {
        await this.sendKeys(this.codeInputFieldEle, code);
        await protractor_1.browser.sleep(100);
    }
    async clickOnNextButton() {
        await this.click(this.continueButtonEle);
        await protractor_1.browser.sleep(200);
    }
}
exports.CellOTPPage = CellOTPPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbE9UUFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlcy9DZWxsT1RQUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSwyQ0FBK0Q7QUFDL0QseUNBQW9DO0FBSXBDLE1BQWEsV0FBWSxTQUFRLG1CQUFRO0lBQXpDO1FBQ0ksbUJBQW1COztRQUdwQixrQkFBYSxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RCxtQkFBYyxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLHlCQUFvQixHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxDQUFDO1FBQzdHLHNCQUFpQixHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLG9CQUFlLEdBQWlCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7UUFDN0Usc0JBQWlCLEdBQWdCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDakYsZ0NBQTJCLEdBQWlCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLENBQUM7SUF5QmpILENBQUM7SUFyQkUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQWtCO1FBQ3ZDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFDLFdBQVcsQ0FBRSxDQUFBO1FBQ3BELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFNUIsQ0FBQztJQUVELEtBQUssQ0FBQyx3QkFBd0I7UUFDM0IsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBVztRQUN4QixNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELEtBQUssQ0FBQyxpQkFBaUI7UUFDcEIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUVIO0FBbkNELGtDQW1DQyJ9