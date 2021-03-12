"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const protractor_1 = require("protractor");
class HomePage {
    constructor() {
        //Locators-Elements
        this.checkingAccountEle = protractor_1.element(protractor_1.by.linkText("Checking"));
        this.pageHeaderEle = protractor_1.element(protractor_1.by.css("h1.page-header"));
    }
    //Methods(actions)
    getPageHeaderText() {
        return this.pageHeaderEle.getText();
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VzL0hvbWVQYWdlLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXNEO0FBR3RELE1BQWEsUUFBUTtJQUFyQjtRQUNJLG1CQUFtQjtRQUVsQix1QkFBa0IsR0FBdUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDMUUsa0JBQWEsR0FBdUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQVUzRSxDQUFDO0lBUkcsa0JBQWtCO0lBQ2xCLGlCQUFpQjtRQUViLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUV4QyxDQUFDO0NBR0o7QUFkRCw0QkFjQyJ9