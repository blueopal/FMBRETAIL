"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalInformationPage = void 0;
const protractor_1 = require("protractor");
const basePage_1 = require("./basePage");
const dataObj = require("../Data/enrollmentData");
class PersonalInformationPage extends basePage_1.basePage {
    constructor() {
        super(...arguments);
        //Locators
        this.firstNameEle = protractor_1.element(protractor_1.by.xpath("//label[text()='First name']//following-sibling::input"));
        this.lastNameEle = protractor_1.element(protractor_1.by.xpath("//label[text()='Last name']//following-sibling::input"));
        this.birthDateEle = protractor_1.element(protractor_1.by.name("date"));
        this.emailEle = protractor_1.element(protractor_1.by.xpath("//input[@type='email']"));
        this.nextButtonEle = protractor_1.element(protractor_1.by.xpath("//span[text()=' Continue ']"));
        this.backButtonEle = protractor_1.element(protractor_1.by.xpath("//span[text()=' Back ']"));
        this.productSelectionEle = protractor_1.element(protractor_1.by.xpath("(//div[text()='Product Selection']//parent::div//parent::div)[1]"));
        this.personalInformationEle = protractor_1.element(protractor_1.by.xpath("(//div[text()='Personal Information']//parent::div//parent::div)[1]"));
        this.citizenshipStatusEle = protractor_1.element(protractor_1.by.xpath("(//div[text()='Citizenship Status']//parent::div)[1]"));
        this.disclosureTextViewEle = protractor_1.element(protractor_1.by.xpath("(//h6[contains(text(), ' you must view and accept')]//following::strong)[1]"));
        this.disclosureTextCloseButtonEle = protractor_1.element((protractor_1.by.xpath("//i[contains(@class,'clear')]")));
        this.disclosureRadioButtonEle = protractor_1.element(protractor_1.by.xpath("//span[text()=' Disclosures ']"));
        this.privacyTextViewEle = protractor_1.element(protractor_1.by.xpath("(//h6[contains(text(), ' you must view and accept')]//following::strong)[2]"));
        this.privacyTextCloseButtonEle = protractor_1.element(protractor_1.by.xpath("//i[contains(@class,'clear')]"));
        this.privacyRadioButtonEle = protractor_1.element(protractor_1.by.xpath("//span[text()=' Privacy Agreement ']"));
    }
    //Actions
    async enterPersonalInfo() {
        await this.sendKeys(this.firstNameEle, dataObj.personalInfo.firstname);
        await this.sendKeys(this.lastNameEle, dataObj.personalInfo.lastname);
        await this.sendKeys(this.birthDateEle, dataObj.personalInfo.dateOfBirth);
        await this.sendKeys(this.emailEle, dataObj.personalInfo.email);
        protractor_1.browser.sleep(1000);
    }
    async clickOnNextButton() {
        await this.click(this.nextButtonEle);
        await protractor_1.browser.sleep(500);
    }
    async clickOnTermsView() {
        await this.click(this.disclosureTextViewEle);
        await protractor_1.browser.sleep(200);
    }
    async clickOnTermsCloseButton() {
        await this.click(this.disclosureTextCloseButtonEle);
        await protractor_1.browser.sleep(200);
    }
    async clickOnTermsRadioButton() {
        await this.click(this.disclosureRadioButtonEle);
        await protractor_1.browser.sleep(200);
    }
    async clickOnPrivacyView() {
        await this.click(this.privacyTextViewEle);
        await protractor_1.browser.sleep(200);
    }
    async clickOnPrivacyCloseButton() {
        await this.click(this.privacyTextCloseButtonEle);
        await protractor_1.browser.sleep(200);
    }
    async clickOnPrivacyRadioButton() {
        await this.click(this.privacyRadioButtonEle);
        await protractor_1.browser.sleep(200);
    }
}
exports.PersonalInformationPage = PersonalInformationPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uYWxJbmZvcm1hdGlvblBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlcy9QZXJzb25hbEluZm9ybWF0aW9uUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBK0Q7QUFDL0QseUNBQW9DO0FBQ3BDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBR2xELE1BQWEsdUJBQXdCLFNBQVEsbUJBQVE7SUFBckQ7O1FBRUksVUFBVTtRQUNWLGlCQUFZLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDLENBQUM7UUFDMUcsZ0JBQVcsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUMsQ0FBQztRQUN4RyxpQkFBWSxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2RCxhQUFRLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDdEUsa0JBQWEsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUNoRixrQkFBYSxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBRTVFLHdCQUFtQixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQyxDQUFBO1FBQzFILDJCQUFzQixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUVBQXFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pJLHlCQUFvQixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQyxDQUFD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