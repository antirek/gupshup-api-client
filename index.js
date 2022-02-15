const axios = require('axios');

class GupshupAPIClient {
  constructor ({API_KEY, APP_NAME, SOURCE_MOBILE_NUMBER}) {
    this.API_KEY = API_KEY;
    this.APP_NAME = APP_NAME;
    this.SOURCE_MOBILE_NUMBER = SOURCE_MOBILE_NUMBER;

    this.url = {
      getTemplatesList: `https://api.gupshup.io/sm/api/v1/template/list/${APP_NAME}`,
      optInUser: `https://api.gupshup.io/sm/api/v1/app/opt/in/${APP_NAME}`,
      bulkOptIn: `https://api.gupshup.io/sm/api/v1/app/opt/in/${APP_NAME}`,
      sendTextMessage: 'https://api.gupshup.io/sm/api/v1/msg',
      sendTemplateMessage: 'http://api.gupshup.io/sm/api/v1/template/msg',
      getWalletBalance: 'https://api.gupshup.io/sm/api/v2/wallet/balance',
    };

    this.config = {
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
        apiKey: this.API_KEY
      }
    };
  };

  /**
   * 
   * @param {*} data 
   * @returns 
   */
  getUrlEncodedData = (data) => {
    const resultantData = new URLSearchParams();
    Object.keys(data).forEach(key => {
      resultantData.append(key, typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key]);
    });
    return resultantData;
  };

  /**
   * 
   * @returns 
   */
  getTemplatesList = async () => await axios.get(this.url.getTemplatesList, this.config);

  getWalletBalance = async () => await axios.get(this.url.getWalletBalance, this.config);

  markUserOptIn = async (userMobileNumber) => {
    const params = this.getUrlEncodedData({
      user: userMobileNumber
    });

    return await axios.post(this.url.optInUser, params, this.config);
  };

  markBulkOptIn = async (userMobileNumbers) => {
    const params = this.getUrlEncodedData({
      users: userMobileNumbers
    });

    return await axios.post(this.url.bulkOptIn, params, this.config);
  };

  sendMediaImageMessage = async (userMobileNumber, imageUrl, caption) => {
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

    return await axios.post(this.url.sendTextMessage, params, this.config);
  };

  sendMediaVideoMessage = async (userMobileNumber, videoUrl, caption) => {
    const params = this.getUrlEncodedData({
      channel: 'whatsapp',
      source: this.SOURCE_MOBILE_NUMBER,
      destination: userMobileNumber,
      message: {
        type: 'video',
        url: videoUrl,
        caption,
      },
      'src.name': this.APP_NAME
    });

    return await axios.post(this.url.sendTextMessage, params, this.config);
  };

  sendMediaAudioMessage = async (userMobileNumber, audioUrl) => {
    const params = this.getUrlEncodedData({
      channel: 'whatsapp',
      source: this.SOURCE_MOBILE_NUMBER,
      destination: userMobileNumber,
      message: {
        type: 'audio',
        url: audioUrl,
      },
      'src.name': this.APP_NAME
    });

    return await axios.post(this.url.sendTextMessage, params, this.config);
  };

  sendMediaFileMessage = async (userMobileNumber, fileUrl, filename) => {
    const params = this.getUrlEncodedData({
      channel: 'whatsapp',
      source: this.SOURCE_MOBILE_NUMBER,
      destination: userMobileNumber,
      message: {
        type: 'file',
        url: fileUrl,
        filename,
      },
      'src.name': this.APP_NAME
    });

    return await axios.post(this.url.sendTextMessage, params, this.config);
  };
  
  sendMediaStickerMessage = async (userMobileNumber, stickerUrl) => {
    const params = this.getUrlEncodedData({
      channel: 'whatsapp',
      source: this.SOURCE_MOBILE_NUMBER,
      destination: userMobileNumber,
      message: {
        type: 'sticker',
        url: stickerUrl,
      },
      'src.name': this.APP_NAME
    });

    return await axios.post(this.url.sendTextMessage, params, this.config);
  };

  sendTextMessage = async (userMobileNumber, message) => {
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

    return await axios.post(this.url.sendTextMessage, params, this.config);
  };

  sendTemplateMessage = async (userMobileNumber, templateId, templateParams, mediaMessage) => {
    const params = this.getUrlEncodedData({
      source: this.SOURCE_MOBILE_NUMBER,
      destination: userMobileNumber,
      template: {
        id: templateId,
        params: templateParams
      },
      message: mediaMessage
    });

    return await axios.post(this.url.sendTemplateMessage, params, this.config);
  };
}

module.exports = {
  GupshupAPIClient,
}
