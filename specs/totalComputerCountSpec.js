let MainPage = require("./../pages/MainPage.js"),
    AddComputerPage = require("./../pages/AddComputerPage.js"),
    mainPage = new MainPage(),
    computerPage = new AddComputerPage(),
    testData = {
        testComputerName: "ABC",
        testIntroducedDate: "2017-03-09",
        testDiscontinuedDate: "2018-12-12",
        testCompany: "Sony",
        expectedComputerAddedText: "Done! Computer ABC has been created",
        expectedComputerDeletedText: "Done! Computer has been deleted",
        expectedMainPageTitle: "Play sample application — Computer database"
    };

describe('When adding a new computer, a user k', function () {

    beforeEach(function () {
        browser.get("/");
    });

    it('should see a correct total number of computers displayed', function () {
        let initialComputerTotal = mainPage.totalComputersNumber;

        mainPage.navigateToAddNewComputerPage();
        computerPage.addNewComputer(testData.testComputerName, testData.testIntroducedDate, testData.testDiscontinuedDate, testData.testCompany);
        mainPage.totalComputersNumber
            .then(currentComputerTotal => {
                return initialComputerTotal.then(initialComputerTotalValue => {
                    currentComputerTotal = currentComputerTotal.replace(",", "");
                    initialComputerTotalValue = initialComputerTotalValue.replace(",", "");
                    expect(parseInt(currentComputerTotal) - parseInt(initialComputerTotalValue)).toEqual(1);
                });
            });

        let initialComputerTotalAfterAdd = mainPage.totalComputersNumber;
        mainPage.navigateToAddNewComputerPage();
        computerPage.setComputerName(testData.testComputerName);
        computerPage.setIntroducedDate(testData.testIntroducedDate);
        computerPage.setDiscontinuedDate(testData.testDiscontinuedDate);
        computerPage.selectCompany(testData.testCompany);
        computerPage.clickCancelButton();

        mainPage.totalComputersNumber
            .then(currentTotalValue => {
                return initialComputerTotalAfterAdd.then(initialTotalValue => {
                    currentTotalValue = currentTotalValue.replace(",", "");
                    initialTotalValue = initialTotalValue.replace(",", "");
                    expect(parseInt(currentTotalValue) - parseInt(initialTotalValue)).toEqual(0);
                });
            });
    });
});