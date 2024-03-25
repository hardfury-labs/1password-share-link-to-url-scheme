"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Preference = void 0;
var bit_set_1 = require("./bit_set"),
    p = bit_set_1.BitSet.fromHex;
exports.Preference = {
    TravelMode: p("000000001"),
    WelcomeMessageDismissed: p("000000002"),
    ReviewBannerDismissed: p("000000004"),
    TrashArchiveRenameAcknowledged: p("000000008"),
    EKitDownloaded: p("000000010")
};