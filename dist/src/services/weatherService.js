"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDublinWeatherData = exports.generateLondonWeatherData = void 0;
const faker_1 = require("@faker-js/faker");
const helpers_js_1 = require("../helpers/helpers.js");
const generateLondonWeatherData = () => {
    const generatedWeatherData = {
        city: "London",
        temperature: faker_1.faker.number.int({ min: -15, max: 30 }),
        humidity: faker_1.faker.number.int({ min: 79, max: 86 }),
        wind: faker_1.faker.number.int({ min: 2, max: 78 }),
        rain: faker_1.faker.number.int({ min: 65, max: 75 }),
    };
    (0, helpers_js_1.storeWeatherData)(generatedWeatherData).catch(console.error);
    return generatedWeatherData;
};
exports.generateLondonWeatherData = generateLondonWeatherData;
const generateDublinWeatherData = () => {
    const generatedWeatherData = {
        city: "Dublin",
        temperature: faker_1.faker.number.int({ min: -15, max: 30 }),
        humidity: faker_1.faker.number.int({ min: 79, max: 86 }),
        wind: faker_1.faker.number.int({ min: 2, max: 78 }),
        rain: faker_1.faker.number.int({ min: 65, max: 75 }),
    };
    (0, helpers_js_1.storeWeatherData)(generatedWeatherData).catch(console.error);
    return generatedWeatherData;
};
exports.generateDublinWeatherData = generateDublinWeatherData;
//# sourceMappingURL=weatherService.js.map