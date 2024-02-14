"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var client = new index_1.GupshupAPIClient({
    API_KEY: 'test',
    APP_NAME: 'test',
    SOURCE_MOBILE_NUMBER: 'test',
});
describe('checks', function () {
    it('contentType', function (done) {
        expect(client.checkContentType('audio', 'audio/mpeg')).toBe(true);
        expect(client.checkContentType('video', 'video/mp4')).toBe(true);
        expect(client.checkContentType('image', 'image/jpeg')).toBe(true);
        done();
    });
    it('size', function (done) {
        expect(client.checkSize('audio', 100 * 1024)).toBe(true);
        expect(client.checkSize('video', 100 * 1024)).toBe(true);
        expect(client.checkSize('image', 100 * 1024)).toBe(true);
        expect(client.checkSize('audio', 17 * 1024 * 1024)).toBe(false);
        expect(client.checkSize('video', -1)).toBe(false);
        done();
    });
});
