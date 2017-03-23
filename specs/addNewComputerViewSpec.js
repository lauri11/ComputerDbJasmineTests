let MainPage = require("./../pages/MainPage.js"),
    AddComputerPage = require("./../pages/AddComputerPage.js"),
    mainPage = new MainPage(),
    computerPage = new AddComputerPage(),
    validationData = {
        expectedComputerNameLabel: "Computer name",
        expectedIntroducedDateLabelText: "Introduced date",
        expectedDiscontinuedDateLabel: "Discontinued date",
        expectedCompanyLabelText: "Company"
    };

describe('New Computer page', function () {

    beforeEach(function () {
        browser.get("/computers/new");
    });

    it('should have an "Add a computer" title', function () {
        browser.get("/");
        mainPage.navigateToAddNewComputerPage();
        expect(computerPage.pageHeading.getText()).toEqual("Add a computer");
    });

    it('should have a "Computer name" labeled input displayed', function () {
        expect(computerPage.computerNameLabel.getText()).toEqual(validationData.expectedComputerNameLabel);
        expect(computerPage.computerNameInput.isDisplayed()).toBeTruthy();
    });

    it('should have a "Introduced date" labeled input displayed', function () {
        expect(computerPage.introducedDateLabel.getText()).toEqual(validationData.expectedIntroducedDateLabelText);
        expect(computerPage.introducedDateInput.isDisplayed()).toBeTruthy();
    });

    it('should have a "Discontinued date" labeled input displayed', function () {
        expect(computerPage.discontinuedDateLabel.getText()).toEqual(validationData.expectedDiscontinuedDateLabel);
        expect(computerPage.discontinuedDateInput.isDisplayed()).toBeTruthy();
    });

    it('should have a "Company" labeled select displayed', function () {
        expect(computerPage.companySelectLabel.getText()).toEqual(validationData.expectedCompanyLabelText);
        expect(computerPage.companySelect.isDisplayed()).toBeTruthy();
    });

    it('should have a "Create this computer" button displayed', function () {
        expect(computerPage.createComputerButton.isDisplayed()).toBeTruthy();
    });

    it('should have a "Cancel" button displayed', function () {
        expect(computerPage.cancelButton.isDisplayed()).toBeTruthy();
    });
});