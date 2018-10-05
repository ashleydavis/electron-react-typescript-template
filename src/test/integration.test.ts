import { Selector } from 'testcafe';

fixture('Electron test')
    .page('./ts-build/index.html');

test('My first test', async t => {
    /*
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');

    const articleHeader = await Selector('.result-content').find('h1');

    // Obtain the text of the article header
    await t.expect(headerText).eql("Thank you, John Smith!");
    */

    console.log("my test!");
});