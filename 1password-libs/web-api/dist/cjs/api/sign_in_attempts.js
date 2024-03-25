"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSignInAttempts = void 0;
var getSignInAttempts = function(t) {
    return t.get("/api/v1/signinattempts")
};
exports.getSignInAttempts = getSignInAttempts;