"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const protractor_1 = require("protractor");
const basePage_1 = require("./basePage");
class HomePage extends basePage_1.basePage {
    constructor() {
        //Locators-Elements
        super(...arguments);
        this.checkingAccountEle = protractor_1.element(protractor_1.by.linkText("Checking"));
        this.pageHeaderEle = protractor_1.element(protractor_1.by.css("h1.page-header"));
    }
    //Methods(actions)
    async clickOnNext() {
        this.click(this.checkingAccountEle);
        await this.click(this.checkingAccountEle);
    }
    async getPageHeaderText() {
        return await this.getText(this.pageHeaderEle);
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlcy9Ib21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSwyQ0FBc0Q7QUFDdEQseUNBQW9DO0FBSXBDLE1BQWEsUUFBUyxTQUFRLG1CQUFRO0lBQXRDO1FBQ0ksbUJBQW1COztRQUduQix1QkFBa0IsR0FBaUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsa0JBQWEsR0FBaUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQWVwRSxDQUFDO0lBYkcsa0JBQWtCO0lBRWxCLEtBQUssQ0FBQyxXQUFXO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2QyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELEtBQUssQ0FBQyxpQkFBaUI7UUFDcEIsT0FBTyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FJSjtBQXBCRCw0QkFvQkMifQ==