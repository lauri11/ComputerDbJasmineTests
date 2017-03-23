let MainPage = require("./../pages/MainPage.js"),
    AddComputerPage = require("./../pages/AddComputerPage.js"),
    mainPage = new MainPage(),
    computerPage = new AddComputerPage(),
    testData = {
        pageHeadingText: "Add a computer",
        testComputerName: "ABC",
        testIntroducedDate: "2017-03-09",
        testDiscontinuedDate: "2018-12-12",
        testCompany: "Sony",
        expectedComputerDeletedText: "Done! Computer has been deleted",
        expectedIntroducedDate: "09 Mar 2017",
        expectedDiscontinuedDate: "12 Dec 2018",
        expectedMainPageTitle: "Play sample application — Computer database",
        expectedNameDivErrorClass: "error"
    };

describe('When on an "Add a new computer page", a user', function () {

    beforeEach(function () {
        browser.get("/");
    });

    it('should be able to add a new computer', function () {
        mainPage.navigateToAddNewComputerPage();
        expect(computerPage.pageHeading.getText()).toEqual(testData.pageHeadingText);

        computerPage.addNewComputer(testData.testComputerName, testData.testIntroducedDate, testData.testDiscontinuedDate, testData.testCompany);
        expect(mainPage.titleHeadingText).toEqual(testData.expectedMainPageTitle);
        expect(mainPage.computerNotificationMessageText)
            .toEqual(mainPage.getComputerCreatedMessage(testData.testComputerName));

        mainPage.searchForComputer(testData.testComputerName);
        expect(mainPage.getComputerInfoByNameAndColumn(testData.testComputerName, mainPage.computerTableColumns.introduced))
            .toEqual(testData.expectedIntroducedDate);
        expect(mainPage.getComputerInfoByNameAndColumn(testData.testComputerName, mainPage.computerTableColumns.discontinued))
            .toEqual(testData.expectedDiscontinuedDate);
        expect(mainPage.getComputerInfoByNameAndColumn(testData.testComputerName, mainPage.computerTableColumns.company))
            .toEqual(testData.testCompany);
    });

    it('should be able to delete a newly-created computer', function () {
        mainPage.searchForComputer(testData.testComputerName);
        mainPage.selectComputerByName(testData.testComputerName);
        computerPage.deleteComputer();
        expect(mainPage.computerNotificationMessageText).toEqual(testData.expectedComputerDeletedText);
    });

    it('should be able to cancel creating a new computer', function () {
        mainPage.navigateToAddNewComputerPage();
        computerPage.cancelCreatingComputer(testData.testComputerName, testData.testIntroducedDate, testData.testDiscontinuedDate, testData.testCompany);
        expect(mainPage.addNewComputerButton.isDisplayed()).toBeTruthy();
        expect(mainPage.computerNotificationMessageDiv.isPresent()).toBeFalsy();
    });

    it('should not be able to create a computer without name', function () {
        mainPage.navigateToAddNewComputerPage();
        computerPage.submitNewComputerForm();
        computerPage.getComputerNameDivClass()
            .then(classText => {
                expect(classText.includes(testData.expectedNameDivErrorClass)).toBeTruthy();
            });

    });
});