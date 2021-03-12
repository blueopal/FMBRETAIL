import {browser, by, element, ElementFinder} from "protractor";
import {basePage} from "./basePage";
const dataObj = require("../Data/enrollmentData");


export class PersonalInformationPage extends basePage {

    //Locators
    firstNameEle: ElementFinder = element(by.xpath("//label[text()='First name']//following-sibling::input"));
    lastNameEle: ElementFinder = element(by.xpath("//label[text()='Last name']//following-sibling::input"));
    birthDateEle: ElementFinder = element(by.name("date"));
    emailEle: ElementFinder = element(by.xpath("//input[@type='email']"));
    nextButtonEle: ElementFinder = element(by.xpath("//span[text()=' Continue ']"));
    backButtonEle: ElementFinder = element(by.xpath("//span[text()=' Back ']"));

    productSelectionEle: ElementFinder = element(by.xpath("(//div[text()='Product Selection']//parent::div//parent::div)[1]"))
    personalInformationEle: ElementFinder = element(by.xpath("(//div[text()='Personal Information']//parent::div//parent::div)[1]"));
    citizenshipStatusEle: ElementFinder = element(by.xpath("(//div[text()='Citizenship Status']//parent::div)[1]"));


    disclosureTextViewEle: ElementFinder = element(by.xpath("(//h6[contains(text(), ' you must view and accept')]//following::strong)[1]"));
    disclosureTextCloseButtonEle: ElementFinder = element((by.xpath("//i[contains(@class,'clear')]")));
    disclosureRadioButtonEle: ElementFinder = element(by.xpath("//span[text()=' Disclosures ']"));


    privacyTextViewEle: ElementFinder = element(by.xpath("(//h6[contains(text(), ' you must view and accept')]//following::strong)[2]"));
    privacyTextCloseButtonEle: ElementFinder = element(by.xpath("//i[contains(@class,'clear')]"));
    privacyRadioButtonEle: ElementFinder = element(by.xpath("//span[text()=' Privacy Agreement ']"));


    //Actions
    async enterPersonalInfo() {

        await this.sendKeys(this.firstNameEle, dataObj.personalInfo.firstname);
        await this.sendKeys(this.lastNameEle, dataObj.personalInfo.lastname);
        await this.sendKeys(this.birthDateEle, dataObj.personalInfo.dateOfBirth);
        await this.sendKeys(this.emailEle, dataObj.personalInfo.email);
        browser.sleep(1000)

    }

    async clickOnNextButton() {
        await this.click(this.nextButtonEle);
        await browser.sleep(500);

    }

    async clickOnTermsView() {
        await this.click(this.disclosureTextViewEle);
        await browser.sleep(200);
    }

    async clickOnTermsCloseButton() {
        await this.click(this.disclosureTextCloseButtonEle);
        await browser.sleep(200);
    }

    async clickOnTermsRadioButton() {
        await this.click(this.disclosureRadioButtonEle);
        await browser.sleep(200);
    }

    async clickOnPrivacyView() {
        await this.click(this.privacyTextViewEle);
        await browser.sleep(200);
    }

    async clickOnPrivacyCloseButton() {
        await this.click(this.privacyTextCloseButtonEle);
        await browser.sleep(200);
    }

    async clickOnPrivacyRadioButton() {
        await this.click(this.privacyRadioButtonEle);
        await browser.sleep(200);

    }

}