"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const basePage_1 = require("../Pages/basePage");
const PersonalInformationPage_1 = require("../Pages/PersonalInformationPage");
const CellOTPPage_1 = require("../Pages/CellOTPPage");
const dataObj = require("../Data/enrollmentData");
let personalObj = new PersonalInformationPage_1.PersonalInformationPage();
let baseObj = new basePage_1.basePage();
let cellOtpObj = new CellOTPPage_1.CellOTPPage();
describe('Status tracker check', () => {
    it('Verify the page URL', async () => {
        await protractor_1.browser.get(dataObj.URLs.targetUrl);
        let url = await baseObj.getCurrentUrl();
        await expect(url).toBe(dataObj.URLs.targetUrl);
    });
    xit("Verify that 'personal information' menu is ACTIVE", async () => {
        await console.log(await baseObj.getAttribute(personalObj.productSelectionEle, "class"));
        expect(await baseObj.getAttribute(personalObj.productSelectionEle, "class")).toContain("bb-step bb-step--active");
    });
    xit("Verify that 'Citizenship Status' menu is INACTIVE at this point", async () => {
        await console.log(await baseObj.getAttribute(personalObj.citizenshipStatusEle, "class"));
        expect(await baseObj.getAttribute(personalObj.citizenshipStatusEle, "class")).toContain("bb-step__inactive");
    });
    it("Enter User information", async () => {
        await personalObj.enterPersonalInfo();
        //expect(await personalObj.nextButtonEle.isEnabled()).toBe(false);
        // await personalObj.clickOnNextButton();
        // expect(await baseObj.getCurrentUrl())
        //      .toBe(dataObj.URLs.anchorDataUrl);
        // console.log(await baseObj.getCurrentUrl())
    });
    it("Verify that user accept terms&conditions", async () => {
        await personalObj.clickOnTermsView();
        await personalObj.clickOnTermsCloseButton();
        await personalObj.clickOnTermsRadioButton();
    });
    it("Verify that user accept privacy statement", async () => {
        await personalObj.clickOnPrivacyView();
        await personalObj.clickOnPrivacyCloseButton();
        await personalObj.clickOnPrivacyRadioButton();
        await personalObj.clickOnNextButton();
        await protractor_1.browser.sleep(3000);
        expect(await baseObj.getText(cellOtpObj.pageHeaderEle)).toBe(dataObj.cellOTPPageData.headerText);
    });
    it("Verify that upon submitting valid phone number, OTP code will be sent", async () => {
        await cellOtpObj.enterPhoneNumber(dataObj.personalInfo.phoneNumber);
        await cellOtpObj.clickOnRequestCodeButton();
        expect(await cellOtpObj.codeSentConfirmationTextEle.isPresent()).toBe(true);
        await protractor_1.browser.sleep(20000);
    });
    it("Verify that upon entering correct code a user will be able to go to the next step", async () => {
        // await cellOtpObj.enterCode();
        await cellOtpObj.clickOnNextButton();
        //expect()
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5yb2xsbWVudFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TcGVjcy9FbnJvbGxtZW50U3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDJDQUFnRDtBQUNoRCxnREFBMkM7QUFDM0MsOEVBQXlFO0FBQ3pFLHNEQUFpRDtBQUVqRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUNsRCxJQUFJLFdBQVcsR0FBRyxJQUFJLGlEQUF1QixFQUFFLENBQUM7QUFDaEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFDN0IsSUFBSSxVQUFVLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFbkMsUUFBUSxDQUFDLHNCQUFzQixFQUFFLEdBQUUsRUFBRTtJQUdqQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDakMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksR0FBRyxHQUFHLE1BQU0sT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRW5ELENBQUMsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLG1EQUFtRCxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2hFLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDeEYsTUFBTSxDQUFDLE1BQU0sT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUVySCxDQUFDLENBQUMsQ0FBQTtJQUNGLEdBQUcsQ0FBQyxpRUFBaUUsRUFBRSxLQUFLLElBQUksRUFBRTtRQUM5RSxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxPQUFPLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLE1BQU0sQ0FBQyxNQUFNLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDakgsQ0FBQyxDQUFDLENBQUE7SUFHRixFQUFFLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFcEMsTUFBTSxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN0QyxrRUFBa0U7UUFDbEUseUNBQXlDO1FBQ3pDLHdDQUF3QztRQUN4QywwQ0FBMEM7UUFDMUMsNkNBQTZDO0lBRWpELENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDBDQUEwQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3RELE1BQU0sV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDckMsTUFBTSxXQUFXLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUM1QyxNQUFNLFdBQVcsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDJDQUEyQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3ZELE1BQU0sV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDdEMsTUFBTSxXQUFXLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUM5QyxNQUFNLFdBQVcsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQzlDLE1BQU0sV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdEMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JHLENBQUMsQ0FBQyxDQUFBO0lBRUUsRUFBRSxDQUFDLHVFQUF1RSxFQUFFLEtBQUssSUFBRyxFQUFFO1FBQ2xGLE1BQU0sVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEUsTUFBTSxVQUFVLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUM1QyxNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsMkJBQTJCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxtRkFBbUYsRUFBRSxLQUFLLElBQUcsRUFBRTtRQUMvRixnQ0FBZ0M7UUFDL0IsTUFBTSxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNyQyxVQUFVO0lBR2QsQ0FBQyxDQUFDLENBQUE7QUFFVixDQUFDLENBQUMsQ0FBQSJ9