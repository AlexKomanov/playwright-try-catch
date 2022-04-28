import { test, expect, Page } from '@playwright/test';



test.describe.only('Try Catch Example', async () => {
    test('example', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();

        try {
            const item = page.locator('[class="inventory_item_name"]');
            let itemsCounter = await item.count();
            for (let index = 0; index < itemsCounter; index++) {
                const itemName = await item.nth(index).innerText();
                if(itemName.includes('bla bla bla')) {
                    await item.nth(index).click();
                    await page.waitForTimeout(5000);
                }
                
            }
            throw new Error(`Element not Found`);
        }
        catch (error) {
            await test.step(`${error}`, async() => {
                throw new Error(error.toString()); 
            })
           
  
        }


    });

});

