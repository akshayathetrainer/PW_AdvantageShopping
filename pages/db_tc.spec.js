import {test, expect} from "@playwright/test";
const {runQuery} = require('SqlDB_connect.js');

test("Use DB and run a query ", async({page}) => {
    const users = await runQuery('Select * from employee where empName= ?', ["John"]);

    await page.goto("https://google.com")
    await page.fill(".username", users[0].username);
    


})