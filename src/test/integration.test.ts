import { Selector } from 'testcafe';

fixture `Electron test`;

test('Main page', async t => {
    const body = Selector('body');
    await t.expect(body.innerText).contains("TypeScript baby!");
});