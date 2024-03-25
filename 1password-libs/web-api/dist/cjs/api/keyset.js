"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getKeysets = void 0;
var getKeysets = function(e) {
    return e.get("/api/v2/account/keysets")
};
exports.getKeysets = getKeysets;