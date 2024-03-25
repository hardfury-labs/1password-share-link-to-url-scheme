"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SecurePathReporter = void 0;
var Either_1 = require("fp-ts/es6/Either"),
    stringify = function(e) {
        return "function" == typeof e ? e.displayName || e.name || "<function " + e.length + ">" : "number" != typeof e || Number.isFinite(e) ? null === e ? "null" : void 0 === e ? "undefined" : "(type: " + typeof e + ")" : Number.isNaN(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity"
    },
    getContextPath = function(e) {
        return e.map(function(e) {
            return e.key + ": " + e.type.name
        }).join("/")
    },
    getMessage = function(e) {
        return void 0 !== e.message ? e.message : "Invalid value " + stringify(e.value) + " supplied to " + getContextPath(e.context)
    },
    failure = function(e) {
        return e.map(getMessage)
    },
    success = function() {
        return ["No errors!"]
    };
exports.SecurePathReporter = {
    report: Either_1.fold(failure, success),
    reportFailure: failure
};