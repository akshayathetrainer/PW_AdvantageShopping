import {test} from "@playwright/test";
import { CommonAPICalls } from "../pages/CommonAPICalls";

let commonAPICalls;

test.beforeEach(async () => {
    commonAPICalls = new CommonAPICalls();
});

let restUrl = process.env.restUrl;


test.describe("Run login tests from api", { annotation: {
    type : 'api',
    description : 'this is a test for login API'
},
    tag : ['@api',]}, async () => {


        // call login api and verify if its successful

        test("Post API call validation of Login API", async () =>{
            let token = await commonAPICalls.loginAPI(restUrl, "remya@yopmail.com", "Pass123", "4FRWI");
            console.log(token)
        })


    })