class MainPage {
    constructor() {
        this.titleHeading = element(by.css("header.topbar a"));
        this.totalNumberHeading = element(by.css("#main h1"));
        this.currentPaginationLinkTextPattern = /Displaying\s\d+\sto\s\d+\sof\s\d+/;
        this.filterInput = element(by.id("searchbox"));
        this.computersTableHeadingList = $$("table[class*='computers'] th");
        this.filterButton = element(by.id("searchsubmit"));
        this.addNewComputerButton = element(by.id("add"));
        this.computersTable = element(by.css("table[class*='computers zebra-striped']"));
        this.paginationUl = element(by.css("#pagination ul"));
        this.previousPaginationLink = element(by.css("#pagination li[class*='prev']"));
        this.nextPaginationLink = element(by.css("#pagination li.next"));
        this.currentPaginationLink = element(by.css("#pagination li.current a"));
        this.computerNotificationMessageDiv = element(by.css("div[class='alert-message warning']"));
        this.computerTableColumns = {
            computerName: 0,
            introduced: 1,
            discontinued: 2,
            company: 3
        };
    }

    navigateToAddNewComputerPage() {
        return this.addNewComputerButton.click();
    }

    getComputerNameLinkByName(computerName) {
        return element(by.xpath(`//a[text()='${computerName}']`));
    }

    get titleHeadingText() {
        return this.titleHeading.getText()
            .then((text) => {
                return text.trim();
            });
    }

    get totalComputersNumber() {
        return this.totalNumberHeading.getText()
            .then((text) => {
                return text.trim().split(" ")[0];
            });
    }

    isNumericTotalComputersNumber() {
        return this.totalComputersNumber
            .then((text) => {
                return this.isNumeric(text);
            });
    }

    get computerTableColumnTextList() {
        return this.computersTableHeadingList.reduce((acc, element) => {
            return element.getText()
                .then(text => {
                    acc.push(text);
                    return acc;
                });
        }, []);
    }


    isDisabledPreviousPagination() {
        return this.previousPaginationLink.getAttribute("class")
            .then(attributeString => {
                return attributeString.includes("disabled");
            });
    }

    getCurrentPaginationLinkDisplayRange() {
        return this.currentPaginationLink.getText()
            .then(fullText => {
                let a = fullText.match(/\d+\sto\s\d+/)[0].split(" ");
                return a[a.length - 1];
            });
    }

    isValidCurrentPaginationLinkDisplayText() {
        return this.currentPaginationLink.getText()
            .then(text => {
                return this.currentPaginationLinkTextPattern.test(text);
            });
    };

    get computerNotificationMessageText() {
        return this.computerNotificationMessageDiv.getText()
            .then(text => {
                return text.trim();
            });
    };

    selectComputerByName(computerName) {
        let computerLinkByNameXpath = `//a[text()='${computerName}']`;
        return element.all(by.xpath(computerLinkByNameXpath)).first().click();
    };

    searchForComputer(computerName) {
        return this.filterInput.sendKeys(computerName)
            .then(() => {
                return browser.actions()
                    .sendKeys(protractor.Key.ENTER).perform();
            });
    }

    getComputerInfoByNameAndColumn(computerName, tableColumn) {
        return element(by.xpath(`//a[text()='${computerName}']`)).all(by.xpath("./../../td")).get(tableColumn).getText()
            .then(text => {
                return text.trim();
            });
    }

    getComputerNameNextToGivenOne(computerName) {
        return element(by.xpath(`//td/a[text()='${computerName}']/../../following-sibling::tr[1]//a`));
    }

    getComputerNameBeforeGivenOne(computerName) {
        return element(by.xpath(`//td/a[text()='${computerName}']/../../preceding-sibling::tr[1]//a`));
    };

    getComputerCreatedMessage(computerName) {
        return `Done! Computer ${computerName} has been created`;
    }

    isNumeric(num) {
        return !isNaN(num)
    }
}

module.exports = MainPage;