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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GupshupAPIClient = void 0;
var axios_1 = require("axios");
var GupshupAPIClient = /** @class */ (function () {
    function GupshupAPIClient(_a) {
        var API_KEY = _a.API_KEY, APP_NAME = _a.APP_NAME, SOURCE_MOBILE_NUMBER = _a.SOURCE_MOBILE_NUMBER, APP_ID = _a.APP_ID;
        var _this = this;
        /**
         *
         * @param {*} data
         * @returns
         */
        this.getUrlEncodedData = function (data) {
            var resultantData = new URLSearchParams();
            Object.keys(data).forEach(function (key) {
                return resultantData.append(key, typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key]);
            });
            return resultantData;
        };
        /**
         *
         * @returns
         */
        this.getTemplatesList = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(this.url.getTemplatesList, this.config)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
        this.getWalletBalance = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(this.url.getWalletBalance, this.config)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
        this.getOptInUsersList = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(this.url.optInUsersList, this.config)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
        this.markRead = function (msgid) { return __awaiter(_this, void 0, void 0, function () {
            var apiUrl, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.APP_ID) {
                            throw new Error('ERROR_NOT_SET_APP_ID');
                        }
                        apiUrl = 'https://api.gupshup.io';
                        url = "".concat(apiUrl, "/wa/app/").concat(this.APP_ID, "/msg/").concat(msgid, "/read");
                        return [4 /*yield*/, axios_1.default.put(url, null, { headers: {
                                    apikey: this.API_KEY,
                                    'Content-Type': 'application/json',
                                } })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.markUserOptIn = function (userMobileNumber) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
                            user: userMobileNumber
                        });
                        return [4 /*yield*/, axios_1.default.post(this.url.optInUser, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.markBulkOptIn = function (userMobileNumbers) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
                            users: userMobileNumbers
                        });
                        return [4 /*yield*/, axios_1.default.post(this.url.bulkOptIn, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.sendMediaImageMessage = function (userMobileNumber, imageUrl, caption) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
                            channel: 'whatsapp',
                            source: this.SOURCE_MOBILE_NUMBER,
                            destination: userMobileNumber,
                            'src.name': this.APP_NAME,
                            message: {
                                type: 'image',
                                originalUrl: imageUrl,
                                previewUrl: imageUrl,
                                caption: caption
                            }
                        });
                        return [4 /*yield*/, axios_1.default.post(this.url.sendTextMessage, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.sendMediaVideoMessage = function (userMobileNumber, videoUrl, caption) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
                            channel: 'whatsapp',
                            source: this.SOURCE_MOBILE_NUMBER,
                            destination: userMobileNumber,
                            message: {
                                type: 'video',
                                url: videoUrl,
                                caption: caption,
                            },
                            'src.name': this.APP_NAME
                        });
                        return [4 /*yield*/, axios_1.default.post(this.url.sendTextMessage, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.sendMediaAudioMessage = function (userMobileNumber, audioUrl) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
                            channel: 'whatsapp',
                            source: this.SOURCE_MOBILE_NUMBER,
                            destination: userMobileNumber,
                            message: {
                                type: 'audio',
                                url: audioUrl,
                            },
                            'src.name': this.APP_NAME
                        });
                        return [4 /*yield*/, axios_1.default.post(this.url.sendTextMessage, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.sendMediaFileMessage = function (userMobileNumber, fileUrl, filename) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
                            channel: 'whatsapp',
                            source: this.SOURCE_MOBILE_NUMBER,
                            destination: userMobileNumber,
                            message: {
                                type: 'file',
                                url: fileUrl,
                                filename: filename,
                            },
                            'src.name': this.APP_NAME
                        });
                        return [4 /*yield*/, axios_1.default.post(this.url.sendTextMessage, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.sendMediaStickerMessage = function (userMobileNumber, stickerUrl) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
                            channel: 'whatsapp',
                            source: this.SOURCE_MOBILE_NUMBER,
                            destination: userMobileNumber,
                            message: {
                                type: 'sticker',
                                url: stickerUrl,
                            },
                            'src.name': this.APP_NAME
                        });
                        return [4 /*yield*/, axios_1.default.post(this.url.sendTextMessage, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.sendTextMessage = function (userMobileNumber, message) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
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
                        return [4 /*yield*/, axios_1.default.post(this.url.sendTextMessage, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.sendLocation = function (userMobileNumber, longitude, latitude, name, address) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
                            channel: 'whatsapp',
                            source: this.SOURCE_MOBILE_NUMBER,
                            destination: userMobileNumber,
                            message: {
                                type: 'location',
                                longitude: longitude,
                                latitude: latitude,
                                name: name,
                                address: address,
                            },
                            'src.name': this.APP_NAME,
                        });
                        return [4 /*yield*/, axios_1.default.post(this.url.sendTextMessage, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.sendContactCard = function (userMobileNumber, contact) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
                            channel: 'whatsapp',
                            source: this.SOURCE_MOBILE_NUMBER,
                            destination: userMobileNumber,
                            message: {
                                type: 'contact',
                                contact: contact,
                            },
                            'src.name': this.APP_NAME,
                        });
                        return [4 /*yield*/, axios_1.default.post(this.url.sendTextMessage, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.sendListMessage = function (userMobileNumber, message) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
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
                        return [4 /*yield*/, axios_1.default.post(this.url.sendTextMessage, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.sendQuickReply = function (userMobileNumber, message) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
                            channel: 'whatsapp',
                            source: this.SOURCE_MOBILE_NUMBER,
                            destination: userMobileNumber,
                            message: {
                                type: 'quick_reply',
                                msgid: message.msgid,
                                content: message.content,
                                options: message.options,
                            },
                            'src.name': this.APP_NAME,
                        });
                        return [4 /*yield*/, axios_1.default.post(this.url.sendTextMessage, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.sendTemplateTextMessage = function (userMobileNumber, templateId, templateParams) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
                            source: this.SOURCE_MOBILE_NUMBER,
                            destination: userMobileNumber,
                            template: {
                                id: templateId,
                                params: templateParams,
                            },
                        });
                        return [4 /*yield*/, axios_1.default.post(this.url.sendTemplateMessage, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.sendTemplateImageMessage = function (userMobileNumber, templateId, templateParams, imageUrl) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
                            source: this.SOURCE_MOBILE_NUMBER,
                            destination: userMobileNumber,
                            template: {
                                id: templateId,
                                params: templateParams,
                            },
                            message: {
                                type: 'image',
                                image: {
                                    link: imageUrl,
                                },
                            },
                        });
                        return [4 /*yield*/, axios_1.default.post(this.url.sendTemplateMessage, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.sendTemplateVideoMessage = function (userMobileNumber, templateId, templateParams, videoUrl) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
                            source: this.SOURCE_MOBILE_NUMBER,
                            destination: userMobileNumber,
                            template: {
                                id: templateId,
                                params: templateParams,
                            },
                            message: {
                                type: 'video',
                                video: {
                                    link: videoUrl,
                                },
                            },
                        });
                        return [4 /*yield*/, axios_1.default.post(this.url.sendTemplateMessage, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.sendTemplateDocumentMessage = function (userMobileNumber, templateId, templateParams, documentUrl, filename) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
                            source: this.SOURCE_MOBILE_NUMBER,
                            destination: userMobileNumber,
                            template: {
                                id: templateId,
                                params: templateParams,
                            },
                            message: {
                                type: 'document',
                                document: {
                                    link: documentUrl,
                                    filename: filename,
                                },
                            },
                        });
                        return [4 /*yield*/, axios_1.default.post(this.url.sendTemplateMessage, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.sendTemplateLocationMessage = function (userMobileNumber, templateId, templateParams, longitude, latitude) { return __awaiter(_this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.getUrlEncodedData({
                            source: this.SOURCE_MOBILE_NUMBER,
                            destination: userMobileNumber,
                            template: {
                                id: templateId,
                                params: templateParams,
                            },
                            message: {
                                type: 'location',
                                location: {
                                    longitude: longitude,
                                    latitude: latitude,
                                },
                            },
                        });
                        return [4 /*yield*/, axios_1.default.post(this.url.sendTemplateMessage, params, this.config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.checkContentType = function (type, contentType) {
            var types = {
                audio: ['audio/aac', 'audio/mp4', 'audio/amr', 'audio/mpeg', 'audio/ogg;codecs=opus'],
                image: ['image/jpeg', 'image/png'],
                video: ['video/mp4', 'video/3gpp'],
            };
            return types[type].includes(contentType.replace(/ /g, ''));
        };
        this.checkSize = function (type, size) {
            var types = {
                image: 5 * 1024 * 1024, // 5mb
                audio: 16 * 1024 * 1024, // 16mb      
                video: 16 * 1024 * 1024, // 16mb
                file: 100 * 1024 * 1024, // 100mb
                sticker: 100 * 1024, // 100kb
            };
            return size > 0 && size < types[type];
        };
        this.API_KEY = API_KEY;
        this.APP_NAME = APP_NAME;
        this.SOURCE_MOBILE_NUMBER = SOURCE_MOBILE_NUMBER;
        this.APP_ID = APP_ID;
        this.url = {
            getTemplatesList: "https://api.gupshup.io/sm/api/v1/template/list/".concat(APP_NAME),
            optInUser: "https://api.gupshup.io/sm/api/v1/app/opt/in/".concat(APP_NAME),
            bulkOptIn: "https://api.gupshup.io/sm/api/v1/app/opt/in/".concat(APP_NAME),
            optInUsersList: "https://api.gupshup.io/sm/api/v1/users/".concat(APP_NAME),
            sendTextMessage: 'https://api.gupshup.io/sm/api/v1/msg',
            sendTemplateMessage: 'http://api.gupshup.io/sm/api/v1/template/msg',
            getWalletBalance: 'https://api.gupshup.io/sm/api/v2/wallet/balance',
            // markRead: `https://api.gupshup.io/wa/app/${APP_ID}/msg/{msgId}/read`,
        };
        this.config = {
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
                apiKey: this.API_KEY
            }
        };
    }
    return GupshupAPIClient;
}());
exports.GupshupAPIClient = GupshupAPIClient;
