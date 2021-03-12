

import {browser, by, element, ElementFinder} from "protractor";
import {basePage} from "./basePage";



export class CellOTPPage extends basePage{
    //Locators-Elements


   pageHeaderEle:ElementFinder = element(by.tagName("h1"));
   numberFieldEle:ElementFinder = element(by.xpath("//input[@aria-label='Phone Input']"));
   requestCodeButtonEle:ElementFinder = element(by.xpath("//span[contains(text(), 'Send verification code')]"));
   codeInputFieldEle:ElementFinder = element(by.xpath("//label[text()='Verification code']"));
   resendButtonEle:ElementFinder = element(by.xpath("//a[text()='Resend it']"));
   continueButtonEle:ElementFinder= element(by.xpath("//span[text()='Continue ']"));
   codeSentConfirmationTextEle:ElementFinder = element(by.xpath("//div[contains(text(),'code has been sent')]"));



   async enterPhoneNumber(phoneNumber:string){
     await this.sendKeys(this.numberFieldEle,phoneNumber,)
      await browser.sleep(100);

   }

   async clickOnRequestCodeButton(){
      await this.click(this.requestCodeButtonEle);
      await browser.sleep(100);
   }

   async enterCode(code:string){
      await this.sendKeys(this.codeInputFieldEle,code);
      await browser.sleep(100);
   }

   async clickOnNextButton(){
      await this.click(this.continueButtonEle);
      await browser.sleep(200);
   }

}