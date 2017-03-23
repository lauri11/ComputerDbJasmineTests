let SelectWrapper = require("./SelectWrapper.js");

let AddComputerPage = function () {
    this.pageHeading = element(by.css("#main h1"));
    this.computerNameLabel = element(by.css("label[for='name']"));
    this.computerNameInput = element(by.id("name"));
    this.introducedDateLabel = element(by.css("label[for='introduced']"));
    this.introducedDateInput = element(by.id("introduced"));
    this.discontinuedDateLabel = element(by.css("label[for='discontinued']"));
    this.discontinuedDateInput = element(by.id("discontinued"));
    this.companySelectLabel = element(by.css("label[for='company']"));
    this.companySelect = element(by.id("company"));
    this.createComputerButton = element(by.css("input[value='Create this computer']"));
    this.deleteComputerButton = element(by.css("input[value='Delete this computer']"));
    this.cancelButton = element(by.xpath("//a[@class='btn'][text()='Cancel']"));
    this.computerNameDiv = element(by.xpath("//label[@for='name']/.."));
    let selectWrapper = new SelectWrapper(this.companySelect);

    this.setComputerName = function (computerName) {
        return this.computerNameInput.sendKeys(computerName);
    };

    this.setIntroducedDate = function (introducedDate) {
        return this.introducedDateInput.sendKeys(introducedDate);
    };

    this.setDiscontinuedDate = function (discontinuedDate) {
        return this.discontinuedDateInput.sendKeys(discontinuedDate);
    };

    this.selectCompany = function (companyName) {
        return selectWrapper.selectItemByValue(companyName);
    };

    this.submitNewComputerForm = function () {
        return this.createComputerButton.click();
    };

    this.deleteComputer = function () {
        return this.deleteComputerButton.click();
    };

    this.addNewComputer = function (name, introducedDate, discontinuedDate, company) {
        this.setComputerName(name);
        if (introducedDate) this.setIntroducedDate(introducedDate);
        if (discontinuedDate) this.setDiscontinuedDate(discontinuedDate);
        if (company) this.selectCompany(company);
        this.submitNewComputerForm()
    };

    this.clickCancelButton = function () {
        return this.cancelButton.click();
    };

    this.cancelCreatingComputer = function (name, introducedDate, discontinuedDate, company) {
        this.setComputerName(name);
        if (introducedDate) this.setIntroducedDate(introducedDate);
        if (discontinuedDate) this.setDiscontinuedDate(discontinuedDate);
        if (company) this.selectCompany(company);
        this.clickCancelButton();
    };

    this.getComputerNameDivClass = function () {
        return this.computerNameDiv.getAttribute("class");
    };
};


// class AddComputerPage {
//
//     constructor() {
//         this.pageHeading = element(by.css("#main h1"));
//         this.computerNameLabel = element(by.css("label[for='name']"));
//         this.computerNameInput = element(by.id("name"));
//         this.introducedDateLabel = element(by.css("label[for='introduced']"));
//         this.introducedDateInput = element(by.id("introduced"));
//         this.discontinuedDateLabel = element(by.css("label[for='discontinued']"));
//         this.discontinuedDateInput = element(by.id("discontinued"));
//         this.companySelectLabel = element(by.css("label[for='company']"));
//         this.companySelect = element(by.id("company"));
//         this.createComputerButton = element(by.css("input[value='Create this computer']"));
//         this.deleteComputerButton = element(by.css("input[value='Delete this computer']"));
//         this.cancelButton = element(by.xpath("//a[@class='btn'][text()='Cancel']"));
//         this.computerNameDiv = element(by.xpath("//label[@for='name']/.."));
//         this.selectWrapper = new SelectWrapper(this.companySelect);
//     }
//
//     setComputerName(computerName) {
//         return this.computerNameInput.sendKeys(computerName);
//     }
//
//     setIntroducedDate(introducedDate) {
//         return this.introducedDateInput.sendKeys(introducedDate);
//     }
//
//     setDiscontinuedDate(discontinuedDate) {
//         return this.discontinuedDateInput.sendKeys(discontinuedDate);
//     }
//
//     selectCompany(companyName) {
//         return selectWrapper.selectItemByValue(companyName);
//     }
//
//     submitNewComputerForm() {
//         return this.createComputerButton.click();
//     }
//
//     deleteComputer() {
//         return this.deleteComputerButton.click();
//     }
//
//     addNewComputer(name, introducedDate, discontinuedDate, company) {
//         this.setComputerName(name);
//         if (introducedDate) this.setIntroducedDate(introducedDate);
//         if (discontinuedDate) this.setDiscontinuedDate(discontinuedDate);
//         if (company) this.selectCompany(company);
//         this.submitNewComputerForm()
//     }
//
//     clickCancelButton() {
//         return this.cancelButton.click();
//     }
//
//     cancelCreatingComputer(name, introducedDate, discontinuedDate, company) {
//         this.setComputerName(name);
//         if (introducedDate) this.setIntroducedDate(introducedDate);
//         if (discontinuedDate) this.setDiscontinuedDate(discontinuedDate);
//         if (company) this.selectCompany(company);
//         this.clickCancelButton();
//     }
//
//     getComputerNameDivClass() {
//         return this.computerNameDiv.getAttribute("class");
//     }
// }

module.exports = AddComputerPage;