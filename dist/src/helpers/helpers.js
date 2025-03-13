"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeWeatherData = void 0;
const tslib_1 = require("tslib");
const algosdk_1 = tslib_1.__importDefault(require("algosdk"));
const config_js_1 = require("../config/config.js");
const storeWeatherData = async (data) => {
    try {
        const client = (0, config_js_1.getClient)();
        const account = (0, config_js_1.getAccount)();
        const suggestedParams = await client.getTransactionParams().do();
        const note = algosdk_1.default.encodeObj(data);
        const txn = algosdk_1.default.makePaymentTxnWithSuggestedParamsFromObject({
            sender: account.addr,
            receiver: account.addr, // Sending the transaction to oneself
            amount: 1000, // Minimum amount
            note: note,
            suggestedParams: suggestedParams,
        });
        const signedTxn = txn.signTxn(account.sk);
        const sendTxn = await client.sendRawTransaction(signedTxn).do();
        console.log("Transaction ID:", sendTxn.txid);
    }
    catch (error) {
        console.error("Failed to store weather data:", error);
    }
};
exports.storeWeatherData = storeWeatherData;
//# sourceMappingURL=helpers.js.map