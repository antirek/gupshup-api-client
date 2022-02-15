# gupshup-api-client

Unofficial Gupshup API client

[Gupshup.io](https://gupshup.io)

[Gupshup group in Telegram](https://t.me/ru_gupshup)

[Gupshup Whatsapp API docs](https://www.gupshup.io/developer/docs/bot-platform/guide/whatsapp-api-documentation)


`````javascript
const {GupshupAPIClient} = require('gupshup-api-client');

const client = new GupshupAPIClient({
    API_KEY: 'XXXXX',
    APP_NAME: 'XXXXX',
    SOURCE_MOBILE_NUMBER: 'XXXXXX',
});

async function run () {
    // const response = await client.getTemplatesList();
    // const response = await client.getWalletBalance();
    const response = await client.sendTextMessage('79135292926', 'привет');s
    console.log(response.data);
}

(run)();
`````
