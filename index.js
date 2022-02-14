const axios = require('axios');

class GupshupAPIClient {

  constructor ({API_KEY, APP_NAME, SOURCE_MOBILE_NUMBER}) {
    this.API_KEY = API_KEY;
    this.APP_NAME = APP_NAME;
    this.SOURCE_MOBILE_NUMBER = SOURCE_MOBILE_NUMBER;
    
    this.url = {
      bulkOptIn: `https://api.gupshup.io/sm/api/v1/app/opt/in/${APP_NAME}`,
      getTemplatesList: `https://api.gupshup.io/sm/api/v1/template/list/${APP_NAME}`,
      optInUser: `https://api.gupshup.io/sm/api/v1/app/opt/in/${APP_NAME}`,
      sendTextMessage: 'https://api.gupshup.io/sm/api/v1/msg',
      sendTemplateMessage: 'http://api.gupshup.io/sm/api/v1/template/msg',
    };

    this.config = {
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
        apiKey: this.API_KEY
      }
    };
  };

  getUrlEncodedData = (data) => {
    const resultantData = new URLSearchParams();
    Object.keys(data).forEach(key => {
      resultantData.append(key, typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key]);
    });
    return resultantData;
  };

  getTemplatesList = () => axios.get(this.url.getTemplatesList, this.config);

  markUserOptIn = (userMobileNumber) => {
    const params = this.getUrlEncodedData({
      user: userMobileNumber
    });

    return axios.post(this.url.optInUser, params, this.config);
  };

  markBulkOptIn = (userMobileNumbers) => {
    const params = this.getUrlEncodedData({
      users: userMobileNumbers
    });

    return axios.post(this.url.bulkOptIn, params, this.config);
  };
  
  sendMediaImageMessage = (userMobileNumber, imageUrl, caption) => {
    const params = this.getUrlEncodedData({
      channel: 'whatsapp',
      source: this.SOURCE_MOBILE_NUMBER,
      destination: userMobileNumber,
      'src.name': this.APP_NAME,
      message: {
        type: 'image',
        originalUrl: imageUrl,
        previewUrl: imageUrl,
        caption
      }
    });

    return axios.post(this.url.sendTextMessage, params, this.config);
  };

  sendMediaVideoMessage = (userMobileNumber, videoUrl, caption) => {
    const params = this.getUrlEncodedData({
      channel: 'whatsapp',
      source: this.SOURCE_MOBILE_NUMBER,
      destination: userMobileNumber,
      message: {
        type: 'video',
        url: videoUrl,
        caption
      },
      'src.name': this.APP_NAME
    });

    return axios.post(this.url.sendTextMessage, params, this.config);
  };

  sendTextMessage = (userMobileNumber, message) => {
    const params = this.getUrlEncodedData({
      channel: 'whatsapp',
      source: this.SOURCE_MOBILE_NUMBER,
      destination: userMobileNumber,
      message: {
        type: 'text',
        text: message
      },
      'src.name': this.APP_NAME,
      disablePreview: false
    });

    return axios.post(this.url.sendTextMessage, params, this.config);
  };

  sendTemplateMessage = (userMobileNumber, templateId, templateParams, mediaMessage) => {
    const params = this.getUrlEncodedData({
      source: this.SOURCE_MOBILE_NUMBER,
      destination: userMobileNumber,
      template: {
        id: templateId,
        params: templateParams
      },
      message: mediaMessage
    });

    return axios.post(this.url.sendTemplateMessage, params, this.config);
  };
}

module.exports = {
  GupshupAPIClient,
}
