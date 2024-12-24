const{Builder,By,Key,until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
async function runTest(){
    let driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options())
        .build()
    try{
        await driver.get("https://wwww.google.com");
        await driver.wait(until.titleContains('Google',),1000);
        console.log('TC-1 Passed: Title contents google');
        await dirver.findElement(By.name('q').sendKeys('Selenium',Key.RETURN));
        await driver.wait(until.titleContains('Selenium'),10000);
        console.log('TC-2 Passed: Title Contents Selenium');
    }
    catch(error){
        console.error("Error occured try again ",error);
    }
    finally{
        await driver.quit();
    }
}

runTest()