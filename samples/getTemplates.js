const {GupshupAPIClient} = require('../dist');

const {
  API_KEY,
  APP_NAME,
  SOURCE_MOBILE_NUMBER,
} = require('./_config');

const client = new GupshupAPIClient({
  API_KEY,
  APP_NAME,
  SOURCE_MOBILE_NUMBER,
});

async function run () {
  const response = await client.getTemplatesList();
  
  // const response = await client.getWalletBalance();

  // const response = await client.sendTextMessage('79135292926', 'привет');

  /*
  const response = await client.sendMediaImageMessage(
    '79135292926', 
    'https://docs.microsoft.com/ru-ru/windows/apps/design/controls/images/image-licorice.jpg',
    'картинка',
  );
  */

  console.log(response.data);
}

(run)();
