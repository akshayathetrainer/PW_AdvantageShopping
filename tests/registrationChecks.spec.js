import { test } from "@playwright/test";
import { CommonPages } from "../pages/CommonPages";
import { Helper } from "../utils/Helper";


let commonPages, helper;
let url = process.env.url;
let userName;


test.describe("Registration page tests", 
    {tag: ['@tc01', '@negativeTC', '@prod' ]}, 
    async () => {

    test.beforeAll(async () => {
        helper = new Helper();
        userName = helper.randomTextGenerator(5);
    })

    test.beforeEach(async ({ page }) => {
        commonPages = new CommonPages(page);
    });


    test("Scenario : Validate registration page is successful", {tag: ['@tc01', '@regression', '@prod', '@chrome']}, async () => {

        await test.step("Given I open advantage shopping online website", async () => {
            // write the function to open page and navigate to website
            await commonPages.openSite(url);
        });

        await test.step("when I Register with valid credentials", async () => {
            // navigate to registration page
            await commonPages.navigateRegistrationPage();

            // registration function, pass the data for registration
            await commonPages.registrationPage.registerUser(userName);

        })

        await test.step("then I validate login is successful", async () => {
            //validate logged in user
            await commonPages.validateLogin();
        })

    });


    test("Scenario : Validate registration page is failing due to existing user", {tag: ['@tc02', '@negativeTC', '@prod' ]}, async () => {

        await test.step("Given I open advantage shopping online website", async () => {
            // write the function to open page and navigate to website
            await commonPages.openSite(url);
        });

        await test.step("when I Register with valid credentials", async () => {
            // navigate to registration page
            await commonPages.navigateRegistrationPage();

            // registration function, pass the data for registration
            await commonPages.registrationPage.registerUser(userName);

        })

        await test.step("then I validate existing user error message", async () => {
            //validate logged in user
            await commonPages.registrationPage.validateErrorMsg();
        })

    });

    test("Validate error message on userName field length", async () => {

        await test.step("Given I open advantage shopping website", async () => {
            //write the function name and perform steps in its respective pages
            await commonPages.openSite(url);
        });

        await test.step("When I provide the right credentials to register", async () => {
            await commonPages.navigateRegistrationPage();
            userName = helper.randomTextGenerator(16);
            await commonPages.registrationPage.registerUser(userName);
        });

        await test.step("Then validate if you are sugccessfully regsitered", async () => {
            await commonPages.registrationPage.validateUserNameCharlimit();
        });

    });

});