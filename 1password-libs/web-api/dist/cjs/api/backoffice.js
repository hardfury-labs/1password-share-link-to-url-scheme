"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getBackofficeSigningKeysetsForUser = exports.performBackofficeAction = exports.getBackofficeNextInvoice = exports.getBackofficeList = exports.getBackofficeInvoice = exports.getBackoffice = void 0;
var getBackoffice = function(e) {
    return e.get("/api/v1/bo").then(function(e) {
        return e.sections
    })
};
exports.getBackoffice = getBackoffice;
var getBackofficeInvoice = function(e, o) {
    return e.get("/api/v1/bo/invoice/" + o)
};
exports.getBackofficeInvoice = getBackofficeInvoice;
var getBackofficeList = function(e, o, t) {
    return e.get("/api/v1/bo/confirmationlist/" + (o || 0) + "/" + t)
};
exports.getBackofficeList = getBackofficeList;
var getBackofficeNextInvoice = function(e, o) {
    return e.get("/api/v1/bo/customer/" + o + "/nextinvoice")
};
exports.getBackofficeNextInvoice = getBackofficeNextInvoice;
var performBackofficeAction = function(e, o, t) {
    var i = {
        sectionId: o.sectionId,
        subsectionId: o.subsectionId,
        actionId: o.id,
        values: t
    };
    return e.post("/api/v1/bo", i)
};
exports.performBackofficeAction = performBackofficeAction;
var getBackofficeSigningKeysetsForUser = function(e, o) {
    return e.get("/api/v1/bo/user/" + o + "/signingkeysets")
};
exports.getBackofficeSigningKeysetsForUser = getBackofficeSigningKeysetsForUser;