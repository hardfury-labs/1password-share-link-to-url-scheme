"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateSignupStep = exports.createSignupStep = void 0;
var createSignupStep = function(e, t) {
    return e.postUnencrypted("/api/v1/signupstep/create", t).then(function(e) {
        return e.uuid
    })
};
exports.createSignupStep = createSignupStep;
var updateSignupStep = function(e, t) {
    return e.postUnencrypted("/api/v1/signupstep/next", t)
};
exports.updateSignupStep = updateSignupStep;