let MainPage = require("./../pages/MainPage.js"),
    AddComputerPage = require("./../pages/AddComputerPage.js"),
    mainPage = new MainPage(),
    computerPage = new AddComputerPage(),
    testData = {
        computerOne: "AA",
        computerTwo: "A",
        computerThree: "AAA",
        computerFour: "0",
        computerFive: "-1"
    };

describe('When adding a new computer, a user t', function () {

    beforeEach(function () {
        browser.get("/");
    });

    it('should see a correct ordering in computers table on a main page', function () {
        mainPage.navigateToAddNewComputerPage();
        computerPage.addNewComputer(testData.computerOne);
        expect(mainPage.computerNotificationMessageText)
            .toEqual(mainPage.getComputerCreatedMessage(testData.computerOne));
        expect(mainPage.getComputerNameLinkByName(testData.computerOne).isDisplayed()).toBeTruthy();

        mainPage.navigateToAddNewComputerPage();
        computerPage.addNewComputer(testData.computerTwo);
        expect(mainPage.computerNotificationMessageText)
            .toEqual(mainPage.getComputerCreatedMessage(testData.computerTwo));
        expect(mainPage.getComputerNameLinkByName(testData.computerTwo).isDisplayed()).toBeTruthy();
        mainPage.getComputerNameBeforeGivenOne(testData.computerOne).getText()
            .then(actualPreviousComputerName => {
                expect(actualPreviousComputerName).toEqual(testData.computerTwo)
            });

        mainPage.navigateToAddNewComputerPage();
        computerPage.addNewComputer(testData.computerThree);
        expect(mainPage.computerNotificationMessageText)
            .toEqual(mainPage.getComputerCreatedMessage(testData.computerThree));
        expect(mainPage.getComputerNameLinkByName(testData.computerThree).isDisplayed()).toBeTruthy();
        mainPage.getComputerNameNextToGivenOne(testData.computerOne).getText()
            .then(actualNextComputerName => {
                expect(actualNextComputerName).toEqual(testData.computerThree);
            });

        mainPage.navigateToAddNewComputerPage();
        computerPage.addNewComputer(testData.computerFour);
        expect(mainPage.computerNotificationMessageText)
            .toEqual(mainPage.getComputerCreatedMessage(testData.computerFour));
        expect(mainPage.getComputerNameLinkByName(testData.computerFour).isDisplayed()).toBeTruthy();
        mainPage.getComputerNameBeforeGivenOne(testData.computerTwo).getText()
            .then(actualPreviousComputerName => {
                expect(actualPreviousComputerName).toEqual(testData.computerFour);
            });

        mainPage.navigateToAddNewComputerPage();
        computerPage.addNewComputer(testData.computerFive);
        expect(mainPage.computerNotificationMessageText)
            .toEqual(mainPage.getComputerCreatedMessage(testData.computerFive));
        expect(mainPage.getComputerNameLinkByName(testData.computerFive).isDisplayed()).toBeTruthy();
        mainPage.getComputerNameBeforeGivenOne(testData.computerFour).getText()
            .then(actualPreviousComputerName => {
                expect(actualPreviousComputerName).toEqual(testData.computerFive);
            });
    });

    it('delete previously-created computers', function () {
        mainPage.searchForComputer(testData.computerOne);
        mainPage.selectComputerByName(testData.computerOne);
        computerPage.deleteComputer();

        mainPage.searchForComputer(testData.computerTwo);
        mainPage.selectComputerByName(testData.computerTwo);
        computerPage.deleteComputer();

        mainPage.searchForComputer(testData.computerThree);
        mainPage.selectComputerByName(testData.computerThree);
        computerPage.deleteComputer();

        mainPage.searchForComputer(testData.computerFour);
        mainPage.selectComputerByName(testData.computerFour);
        computerPage.deleteComputer();

        mainPage.searchForComputer(testData.computerFive);
        mainPage.selectComputerByName(testData.computerFive);
        computerPage.deleteComputer();
    });
});