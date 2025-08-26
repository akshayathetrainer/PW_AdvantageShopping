import { test } from "@playwright/test";
import { CommonPages } from "../pages/CommonPages";


let commonPages;
let url = process.env.url;

test.beforeEach(async ({ page }) => {
    commonPages = new CommonPages(page);
});


let testdata = JSON.parse(JSON.stringify(require('./testdata/data.json')));





test("Scenario : Validate add tablets to cart and remove", { tag: ['@tc01', '@regression', '@prod', '@chrome'] }, async () => {

    await test.step("Given I open advantage shopping online website", async () => {
        // write the function to open page and navigate to website
        await commonPages.openSite(url);
    });

    await test.step("when I login to the site", async () => {
        // login using valid credentials
        await commonPages.login(testdata.loginUser, testdata.loginPassword);
        await commonPages.validateLogin();
    });

    await test.step("Then I click on Tablets tab and add a tablet to cart", async () => {
        await commonPages.navigateToTabletsPage();
        await commonPages.tabletsPage.addTabletToCart();
    });

    await test.step("And I navigate to shopping cart page and remove the added item", async () => {
        await commonPages.navigateToShoppingCartPage();
        await commonPages.shoppingCartPage.removeItems();
    });

})
