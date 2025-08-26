import { expect } from "@playwright/test";

export class ShoppingCartPage {

    constructor(page) {
        this.page = page;


        this.removeButtons = page.locator('[translate="REMOVE"]');
        this.shoppinCartEmptyText = page.locator('[translate="Your_shopping_cart_is_empty"][class="roboto-bold ng-scope"]');

        this.checkOutButton = page.locator("#checkOutButton");


    }

    async removeItems() {

        await expect(this.checkOutButton).toBeVisible();
        let items = await this.removeButtons.elementHandles();

        for (const item of items) {
            item.click();
        }

        await this.page.waitForLoadState("load");
        await expect(this.shoppinCartEmptyText).toBeVisible();

    }


}
