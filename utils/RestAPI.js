import { expect } from "@playwright/test";

export class RestAPI {


    async loginAPICall(request, url, email, password, userName) {
        
        const response = await request.post(url, {
            data: {
                "email": email,
                "loginPassword": password,
                "loginUser": userName
            },
            
            ignoreHTTPSErrors : true
        });
        console.log(response.status())

        expect(response.status()).toBe(200);
    let result = await response.json();

    console.log(result)

    return (result.statusMessage.token)
    }

}