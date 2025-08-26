import { expect } from "@playwright/test";

export class RegistrationPage {

    constructor(page) {
        this.page = page;
        this.userNameField = page.locator('[name="usernameRegisterPage"]');
        this.emailField = page.locator('[name="emailRegisterPage"]');

        this.passwordField = page.locator('[name="passwordRegisterPage"]');
        this.confirmPasswordField = page.locator('[name="confirm_passwordRegisterPage"]')
        this.promoCheckbox = page.locator('[name="allowOffersPromotion"]');
        this.agreeCheckbox = page.locator('[name="i_agree"]');
        this.registerButton = page.locator("#register_btn");

        

        this.existingUserErrorMsg = page.getByText("User name already exists");

        this.charLengtherrorMsg = page.getByText("Incorrect user name or password.");
    }

    async registerUser(usernameValue) {

        await this.userNameField.fill(usernameValue);
        await this.emailField.fill("remya@yopmail.com");
        await this.passwordField.fill("Pass123");
        await this.confirmPasswordField.fill("Pass123");

        await this.promoCheckbox.click();
        await this.agreeCheckbox.click();
        await this.registerButton.click();

        await this.page.waitForLoadState("load");
    }


    async validateErrorMsg () {
        // validating existing user error msg 
    await expect(this.existingUserErrorMsg).toBeVisible();
    }


    async validateUserNameCharlimit(){
        // validate username character length
        await expect(this.charLengtherrorMsg).toBeVisible();
    }
}
