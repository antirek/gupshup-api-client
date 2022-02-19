"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
class GupshupAPIClient {
    constructor({ API_KEY, APP_NAME, SOURCE_MOBILE_NUMBER }) {
        /**
         *
         * @param {*} data
         * @returns
         */
        this.getUrlEncodedData = (data) => {
            const resultantData = new URLSearchParams();
            Object.keys(data).forEach((key) => {
                return resultantData.append(key, typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key]);
            });
            return resultantData;
        };
        /**
         *
         * @returns
         */
        this.getTemplatesList = () => __awaiter(this, void 0, void 0, function* () { return yield axios.get(this.url.getTemplatesList, this.config); });
        this.getWalletBalance = () => __awaiter(this, void 0, void 0, function* () { return yield axios.get(this.url.getWalletBalance, this.config); });
        this.markUserOptIn = (userMobileNumber) => __awaiter(this, void 0, void 0, function* () {
            const params = this.getUrlEncodedData({
                user: userMobileNumber
            });
            return yield axios.post(this.url.optInUser, params, this.config);
        });
        this.markBulkOptIn = (userMobileNumbers) => __awaiter(this, void 0, void 0, function* () {
            const params = this.getUrlEncodedData({
                users: userMobileNumbers
            });
            return yield axios.post(this.url.bulkOptIn, params, this.config);
        });
        this.sendMediaImageMessage = (userMobileNumber, imageUrl, caption) => __awaiter(this, void 0, void 0, function* () {
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
            return yield axios.post(this.url.sendTextMessage, params, this.config);
        });
        this.sendMediaVideoMessage = (userMobileNumber, videoUrl, caption) => __awaiter(this, void 0, void 0, function* () {
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
            return yield axios.post(this.url.sendTextMessage, params, this.config);
        });
        this.sendMediaAudioMessage = (userMobileNumber, audioUrl) => __awaiter(this, void 0, void 0, function* () {
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
            return yield axios.post(this.url.sendTextMessage, params, this.config);
        });
        this.sendMediaFileMessage = (userMobileNumber, fileUrl, filename) => __awaiter(this, void 0, void 0, function* () {
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
            return yield axios.post(this.url.sendTextMessage, params, this.config);
        });
        this.sendMediaStickerMessage = (userMobileNumber, stickerUrl) => __awaiter(this, void 0, void 0, function* () {
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
            return yield axios.post(this.url.sendTextMessage, params, this.config);
        });
        this.sendTextMessage = (userMobileNumber, message) => __awaiter(this, void 0, void 0, function* () {
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
            return yield axios.post(this.url.sendTextMessage, params, this.config);
        });
        this.sendTemplateMessage = (userMobileNumber, templateId, templateParams, mediaMessage) => __awaiter(this, void 0, void 0, function* () {
            const params = this.getUrlEncodedData({
                source: this.SOURCE_MOBILE_NUMBER,
                destination: userMobileNumber,
                template: {
                    id: templateId,
                    params: templateParams
                },
                message: mediaMessage
            });
            return yield axios.post(this.url.sendTemplateMessage, params, this.config);
        });
        this.sendLocation = (userMobileNumber, longitude, latitude, name, address) => __awaiter(this, void 0, void 0, function* () {
            const params = this.getUrlEncodedData({
                channel: 'whatsapp',
                source: this.SOURCE_MOBILE_NUMBER,
                destination: userMobileNumber,
                message: {
                    type: 'location',
                    longitude,
                    latitude,
                    name,
                    address,
                },
                'src.name': this.APP_NAME,
            });
            return yield axios.post(this.url.sendTextMessage, params, this.config);
        });
        this.sendContactCard = (userMobileNumber, contact) => __awaiter(this, void 0, void 0, function* () {
            const params = this.getUrlEncodedData({
                channel: 'whatsapp',
                source: this.SOURCE_MOBILE_NUMBER,
                destination: userMobileNumber,
                message: {
                    type: 'contact',
                    contact,
                },
                'src.name': this.APP_NAME,
            });
            return yield axios.post(this.url.sendTextMessage, params, this.config);
        });
        this.sendListMessages = (userMobileNumber, message) => __awaiter(this, void 0, void 0, function* () {
            const params = this.getUrlEncodedData({
                channel: 'whatsapp',
                source: this.SOURCE_MOBILE_NUMBER,
                destination: userMobileNumber,
                message: {
                    type: 'list',
                    title: message.title,
                    body: message.body,
                    msgid: message.msgid,
                    globalButtons: message.globalButtons,
                    items: message.items,
                },
                'src.name': this.APP_NAME,
            });
            return yield axios.post(this.url.sendTextMessage, params, this.config);
        });
        this.checkContentType = (type, contentType) => {
            const types = {
                audio: ['audio/aac', 'audio/mp4', 'audio/amr', 'audio/mpeg', 'audio/ogg;codecs=opus'],
                image: ['image/jpeg', 'image/png'],
                video: ['video/mp4', 'video/3gpp'],
            };
            return types[type].includes(contentType.replace(/ /g, ''));
        };
        this.checkSize = (type, size) => {
            const types = {
                image: 5 * 1024 * 1024,
                audio: 16 * 1024 * 1024,
                video: 16 * 1024 * 1024,
                file: 100 * 1024 * 1024,
                sticker: 100 * 1024, // 100kb
            };
            return size > 0 && size < types[type];
        };
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
    }
    
}
module.exports = {
    GupshupAPIClient,
};
