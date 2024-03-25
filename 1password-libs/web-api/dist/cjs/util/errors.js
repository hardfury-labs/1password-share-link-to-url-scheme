"use strict";
var __extends = this && this.__extends || function() {
        var r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(r, e) {
                    r.__proto__ = e
                } || function(r, e) {
                    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t])
                })(e, t)
        };
        return function(e, t) {
            function o() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }
    }(),
    __createBinding = this && this.__createBinding || (Object.create ? function(r, e, t, o) {
        void 0 === o && (o = t), Object.defineProperty(r, o, {
            enumerable: !0,
            get: function() {
                return e[t]
            }
        })
    } : function(r, e, t, o) {
        void 0 === o && (o = t), r[o] = e[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(r, e) {
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        })
    } : function(r, e) {
        r.default = e
    }),
    __importStar = this && this.__importStar || function(r) {
        if (r && r.__esModule) return r;
        var e = {};
        if (null != r)
            for (var t in r) "default" !== t && Object.prototype.hasOwnProperty.call(r, t) && __createBinding(e, r, t);
        return __setModuleDefault(e, r), e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isSecretKeyIdOrFormatMismatchedError = exports.SecretKeyIdOrFormatMismatchedError = exports.isSecretKeyMissingError = exports.SecretKeyMissingError = exports.isOldKeyError = exports.isLegacyServerError = exports.isNewServerErrorWithStatus = exports.isNewServerError = exports.isServerError = exports.isClientError = exports.getErrorMessage = exports.getError = exports.ClientError = exports.LegacyServerError = exports.ServerError = void 0;
var t = __importStar(require("io-ts")),
    lodash_es_1 = require("lodash-es"),
    ServerError = function(r) {
        function e(e, t) {
            var o = r.call(this) || this;
            return o.code = e, o.reason = t, o.name = "ServerError", o.message = o.code + (o.reason ? " (" + o.reason + ")" : ""), o
        }
        return __extends(e, r), e.prototype.toString = function() {
            return "ServerError: " + this.message
        }, e
    }(Error);
exports.ServerError = ServerError;
var LegacyServerError = function(r) {
    function e(e, t) {
        var o = r.call(this) || this;
        return o.code = e, o.message = t || "", o.name = "LegacyServerError", o
    }
    return __extends(e, r), e.prototype.toString = function() {
        return "LegacyServerError: " + this.message + " (" + this.code + ")"
    }, e
}(Error);
exports.LegacyServerError = LegacyServerError;
var ClientError = function(r) {
    function e(e, t) {
        var o = r.call(this) || this;
        return o.code = e, o.message = t || "", o.name = "ClientError", o
    }
    return __extends(e, r), e.prototype.toString = function() {
        return "ClientError: " + this.message + " (" + this.code + ")"
    }, e
}(Error);
exports.ClientError = ClientError;
var getError = function(r, e) {
    var t = e ? e + " " + r.message : r.message;
    return exports.isClientError(r) ? new ClientError(r.code, t) : exports.isLegacyServerError(r) ? new LegacyServerError(r.code, t) : exports.isNewServerError(r) ? r : new Error(t)
};
exports.getError = getError;
var errorWithMessage = t.type({
        message: t.string
    }),
    getErrorMessage = function(r) {
        return errorWithMessage.is(r) ? r.message : "An unexpected error occurred"
    };
exports.getErrorMessage = getErrorMessage;
var isClientError = function(r, e) {
    return "ClientError" === r.name && (!e || e === r.code || Array.isArray(e) && lodash_es_1.includes(e, r.code))
};
exports.isClientError = isClientError;
var isServerError = function(r, e, t) {
    return exports.isNewServerError(r, e, t) || exports.isLegacyServerError(r, e)
};
exports.isServerError = isServerError;
var isNewServerError = function(r, e, t) {
    var o = !e || e === r.reason || Array.isArray(e) && lodash_es_1.includes(e, r.reason),
        s = void 0 !== t && t === r.code;
    return "ServerError" === r.name && (o || s)
};
exports.isNewServerError = isNewServerError;
var isNewServerErrorWithStatus = function(r, e) {
    return "ServerError" === r.name && e === r.code
};
exports.isNewServerErrorWithStatus = isNewServerErrorWithStatus;
var isLegacyServerError = function(r, e) {
    return "LegacyServerError" === r.name && (!e || e === r.code || Array.isArray(e) && lodash_es_1.includes(e, r.code))
};
exports.isLegacyServerError = isLegacyServerError;
var isOldKeyError = function(r) {
    return r && "Unsupported JWK algorithm RSA-OAEP-256" === r.message
};
exports.isOldKeyError = isOldKeyError;
var SecretKeyMissingError = function(r) {
    function e(t) {
        var o = r.call(this) || this;
        return o.message = "Secret Key (" + t + ") not found", o.name = e.ERROR_NAME, o
    }
    return __extends(e, r), e.ERROR_NAME = "SecretKeyMissingError", e
}(Error);
exports.SecretKeyMissingError = SecretKeyMissingError;
var isSecretKeyMissingError = function(r) {
    return r.name === SecretKeyMissingError.ERROR_NAME
};
exports.isSecretKeyMissingError = isSecretKeyMissingError;
var SecretKeyIdOrFormatMismatchedError = function(r) {
    function e(t, o, s, n) {
        var i = r.call(this) || this;
        return i.message = "User's Secret Key ID (" + o + ") or format (" + n + ") doesn't match either response's Secret Key ID (" + t + ") or format (" + s + ")", i.name = e.ERROR_NAME, i
    }
    return __extends(e, r), e.ERROR_NAME = "SecretKeyIdOrFormatIsWrong", e
}(Error);
exports.SecretKeyIdOrFormatMismatchedError = SecretKeyIdOrFormatMismatchedError;
var isSecretKeyIdOrFormatMismatchedError = function(r) {
    return r.name === SecretKeyIdOrFormatMismatchedError.ERROR_NAME
};
exports.isSecretKeyIdOrFormatMismatchedError = isSecretKeyIdOrFormatMismatchedError;