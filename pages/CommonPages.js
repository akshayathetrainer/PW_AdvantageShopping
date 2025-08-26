import { expect } from "@playwright/test";
import { RegistrationPage } from "./RegistrationPage";
import { TabletsPage } from "./TabletsPage";
import { ShoppingCartPage } from "./ShoppingCartPage";

export class CommonPages {

    constructor(page) {
        this.page = page;
        this.registrationPage = new RegistrationPage(page);
        this.tabletsPage = new TabletsPage(page);
        this.shoppingCartPage = new ShoppingCartPage(page);

        //common locators
        this.userButton = page.locator("#menuUser");
        this.createButton = page.locator('[translate="CREATE_NEW_ACCOUNT"]');
        this.accountDetailsHeader = page.locator('[translate="ACCOUNT_DETAILS"]');

        // login locators
        this.userNameField = page.locator('[name="username"]');
        this.passwordField = page.locator('[name="password"]');
        this.signInButton = page.locator('#sign_in_btn');
        this.loggedInUserIcon = page.locator('.hi-user.containMiniTitle.ng-binding');

        //tablets locators
        this.tabletText = page.locator('#tabletsTxt');
        this.tabletHeader = page.locator(".categoryTitle.roboto-regular.sticky.ng-binding");

        //shopping cart page locators
        this.menuCartButton = page.locator('#menuCart');
        this.checkOutButton = page.locator('[id="checkOutButton"]');

    }

    //function to open the webpage
    async openSite(url) {
        await this.page.goto(url);
        await this.page.waitForLoadState();
    }

    //navigate to register page
    async navigateRegistrationPage() {
        await this.userButton.click();
        await this.createButton.click();
        await expect(this.accountDetailsHeader).toBeVisible();
    }

    //login with credentials passed in parameters
    async login(username, password) {
        await this.userButton.click();
        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.signInButton.click();
    }

    async validateLogin() {
        // validating if we are logged in 
        await expect(this.loggedInUserIcon).toBeVisible();
    }


    //navigate to Tablets page
    async navigateToTabletsPage() {
        await this.tabletText.click();
        await expect(this.tabletHeader).toBeVisible();
    }

    //navigate to Shopping cart page
    async navigateToShoppingCartPage() {
        await this.menuCartButton.click();
       await expect(this.checkOutButton).toBeVisible();
    }

}