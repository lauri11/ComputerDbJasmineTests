let MainPage = require("./../pages/MainPage.js"),
    page = new MainPage();

describe('Main page layout', function () {
    let testData = {
        expectedTitle: "Play sample application — Computer database",
        expectedComputersTableTitles: ["Computer name", "Introduced", "Discontinued", "Company"]
    };

    beforeEach(function () {
        browser.get("/");
    });

    it('should have correct app name in the header', function () {
        expect(page.titleHeadingText).toEqual(testData.expectedTitle);
    });

    it('should have positive number as "Total number of computers"', function () {
        expect(page.isNumericTotalComputersNumber()).toBeTruthy();
    });

    it('should have filter input displayed', function () {
        expect(page.filterInput.isDisplayed()).toBeTruthy();
    });

    it('should have filter button', function () {
        expect(page.filterButton.isDisplayed()).toBeTruthy();
    });

    it('should have "Add new computer" button', function () {
        expect(page.addNewComputerButton.isDisplayed()).toBeTruthy();
    });

    it('should have a table with "Name, Introduced/Discontinued Date, Company" computerTableColumns', function () {
        expect(page.computersTable.isDisplayed()).toBeTruthy();
        expect(page.computerTableColumnTextList).toEqual(testData.expectedComputersTableTitles);
    });

    it('should have pagination', function () {
        expect(page.paginationUl.isDisplayed()).toBeTruthy();
        expect(page.isDisabledPreviousPagination()).toBe(true);
        expect(page.nextPaginationLink.isEnabled()).toBe(true);
        expect(page.isValidCurrentPaginationLinkDisplayText()).toBe(true);
    });
});