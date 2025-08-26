import { RestAPI } from "../utils/RestAPI";
import { request } from "@playwright/test";


export class CommonAPICalls {
    constructor () {
        this.restApiCall = new RestAPI();
    }

    async loginAPI(url, email, password, userName){
        const apiContext = await request.newContext();
        return await this.restApiCall.loginAPICall(apiContext, url, email, password, userName)
    }
}