"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.requestAccountDeletion = exports.getSupportAccountsList = exports.requestSupportEmail = void 0;
var requestSupportEmail = function(t, e) {
    return t.get("/api/v1/support/start/" + encodeURIComponent(e)).then(function() {})
};
exports.requestSupportEmail = requestSupportEmail;
var getSupportAccountsList = function(t, e, o) {
    return t.get("/api/v1/support/getaccounts/" + encodeURIComponent(e) + "/token/" + o).then(function(t) {
        return t.accounts
    })
};
exports.getSupportAccountsList = getSupportAccountsList;
var requestAccountDeletion = function(t, e, o, n) {
    var u = "email=" + encodeURIComponent(o) + "&token=" + n;
    return t.get("/api/v1/support/senddelete/account/" + e + "?" + u).then(function() {})
};
exports.requestAccountDeletion = requestAccountDeletion;