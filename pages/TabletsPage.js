import { expect } from "@playwright/test";

export class TabletsPage {

    constructor(page){
        this.page = page;

        this.buyNowButton = page.locator('[name="buy_now"]');
        this.addToCartButton = page.locator('[name="save_to_cart"]');
       
    }

    //function to add a Tablet to cart
    async addTabletToCart () {
        await this.buyNowButton.click();
        await this.addToCartButton.click();
    }

}