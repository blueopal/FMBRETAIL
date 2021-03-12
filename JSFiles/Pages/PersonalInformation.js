"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalInformation = void 0;
const protractor_1 = require("protractor");
const basePage_1 = require("./basePage");
const dataObj = require("../Data/enrollmentData");
class PersonalInformation extends basePage_1.basePage {
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
        this.termsRadioButtonEle = protractor_1.element(protractor_1.by.xpath("//span[text()=' Terms & Conditions ']"));
        this.privacyRadioButtonEle = protractor_1.element(protractor_1.by.xpath("//span[text()=' Privacy Agreement ']"));
        this.termsTextViewEle = protractor_1.element(protractor_1.by.xpath("(//span[contains(text(),'Conditions')]//following::strong)[1]"));
        this.termsTextCloseButtonEle = protractor_1.element((protractor_1.by.xpath("//i[contains(@class,'clear')]")));
        this.privacyTextViewEle = protractor_1.element(protractor_1.by.xpath("//span[text()=' Privacy Agreement ']//following::strong"));
        this.privacyTextCloseButtonEle = protractor_1.element(protractor_1.by.xpath("//i[contains(@class,'clear')]"));
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
        await this.click(this.termsTextViewEle);
        await protractor_1.browser.sleep(500);
    }
    async clickOnTermsCloseButton() {
        await this.click(this.termsTextCloseButtonEle);
        await protractor_1.browser.sleep(500);
    }
    async clickOnTermsRadioButton() {
        await this.click(this.termsRadioButtonEle);
        await protractor_1.browser.sleep(500);
    }
    async clickOnPrivacyView() {
        await this.click(this.privacyTextViewEle);
        await protractor_1.browser.sleep(500);
    }
    async clickOnPrivacyCloseButton() {
        await this.click(this.privacyTextCloseButtonEle);
        await protractor_1.browser.sleep(1000);
    }
    async clickOnPrivacyRadioButton() {
        await this.click(this.privacyRadioButtonEle);
        await protractor_1.browser.sleep(500);
    }
}
exports.PersonalInformation = PersonalInformation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uYWxJbmZvcm1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VzL1BlcnNvbmFsSW5mb3JtYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQStEO0FBQy9ELHlDQUFvQztBQUNwQyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUdsRCxNQUFhLG1CQUFvQixTQUFRLG1CQUFRO0lBQWpEOztRQUVJLFVBQVU7UUFDVixpQkFBWSxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQyxDQUFDO1FBQzFHLGdCQUFXLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLENBQUM7UUFDeEcsaUJBQVksR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdkQsYUFBUSxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLGtCQUFhLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDaEYsa0JBQWEsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUU1RSx3QkFBbUIsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUMsQ0FBQTtRQUMxSCwyQkFBc0IsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFFQUFxRSxDQUFDLENBQUMsQ0FBQztRQUNqSSx5QkFBb0IsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUMsQ0FBQztRQUVoSCx3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