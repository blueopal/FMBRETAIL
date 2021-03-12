

import {browser, by, element} from "protractor";
import {basePage} from "../Pages/basePage";
import {PersonalInformationPage} from "../Pages/PersonalInformationPage";
import {CellOTPPage} from "../Pages/CellOTPPage";

const dataObj = require("../Data/enrollmentData");
let personalObj = new PersonalInformationPage();
let baseObj = new basePage();
let cellOtpObj = new CellOTPPage();

describe('Status tracker check', ()=> {


    it('Verify the page URL', async  ()=> {
        await browser.get(dataObj.URLs.targetUrl);
        let url = await baseObj.getCurrentUrl();
        await expect(url).toBe(dataObj.URLs.targetUrl);

    })

    xit("Verify that 'personal information' menu is ACTIVE", async () => {
        await console.log(await baseObj.getAttribute(personalObj.productSelectionEle, "class"));
        expect(await baseObj.getAttribute(personalObj.productSelectionEle, "class")).toContain("bb-step bb-step--active")

    })
    xit("Verify that 'Citizenship Status' menu is INACTIVE at this point", async () => {
        await console.log(await baseObj.getAttribute(personalObj.citizenshipStatusEle, "class"));
        expect(await baseObj.getAttribute(personalObj.citizenshipStatusEle, "class")).toContain("bb-step__inactive");
    })


    it("Enter User information", async () => {

        await personalObj.enterPersonalInfo();
        //expect(await personalObj.nextButtonEle.isEnabled()).toBe(false);
        // await personalObj.clickOnNextButton();
        // expect(await baseObj.getCurrentUrl())
        //      .toBe(dataObj.URLs.anchorDataUrl);
        // console.log(await baseObj.getCurrentUrl())

    })

    it("Verify that user accept terms&conditions", async () => {
        await personalObj.clickOnTermsView();
        await personalObj.clickOnTermsCloseButton();
        await personalObj.clickOnTermsRadioButton();
    })

    it("Verify that user accept privacy statement", async () => {
        await personalObj.clickOnPrivacyView()
        await personalObj.clickOnPrivacyCloseButton();
        await personalObj.clickOnPrivacyRadioButton();
        await personalObj.clickOnNextButton();
        await browser.sleep(3000);
        expect(await baseObj.getText(cellOtpObj.pageHeaderEle)).toBe(dataObj.cellOTPPageData.headerText);
    })

        it("Verify that upon submitting valid phone number, OTP code will be sent", async ()=>{
            await cellOtpObj.enterPhoneNumber(dataObj.personalInfo.phoneNumber);
            await cellOtpObj.clickOnRequestCodeButton();
            expect(await cellOtpObj.codeSentConfirmationTextEle.isPresent()).toBe(true);
            await browser.sleep(60000); //changed sleep from 20 secs to 60 sec for manual verification
        })

        it("Verify that upon entering correct code a user will be able to go to the next step", async ()=>{
           // await cellOtpObj.enterCode();
            await cellOtpObj.clickOnNextButton();
            //expect()


        })

})

