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
}();
import * as t from "io-ts";
import {
    includes
} from "lodash-es";
var ServerError = function(r) {
    function e(e, t) {
        var o = r.call(this) || this;
        return o.code = e, o.reason = t, o.name = "ServerError", o.message = o.code + (o.reason ? " (" + o.reason + ")" : ""), o
    }
    return __extends(e, r), e.prototype.toString = function() {
        return "ServerError: " + this.message
    }, e
}(Error);
export {
    ServerError
};
var LegacyServerError = function(r) {
    function e(e, t) {
        var o = r.call(this) || this;
        return o.code = e, o.message = t || "", o.name = "LegacyServerError", o
    }
    return __extends(e, r), e.prototype.toString = function() {
        return "LegacyServerError: " + this.message + " (" + this.code + ")"
    }, e
}(Error);
export {
    LegacyServerError
};
var ClientError = function(r) {
    function e(e, t) {
        var o = r.call(this) || this;
        return o.code = e, o.message = t || "", o.name = "ClientError", o
    }
    return __extends(e, r), e.prototype.toString = function() {
        return "ClientError: " + this.message + " (" + this.code + ")"
    }, e
}(Error);
export {
    ClientError
};
export var getError = function(r, e) {
    var t = e ? e + " " + r.message : r.message;
    return isClientError(r) ? new ClientError(r.code, t) : isLegacyServerError(r) ? new LegacyServerError(r.code, t) : isNewServerError(r) ? r : new Error(t)
};
var errorWithMessage = t.type({
    message: t.string
});
export var getErrorMessage = function(r) {
    return errorWithMessage.is(r) ? r.message : "An unexpected error occurred"
};
export var isClientError = function(r, e) {
    return "ClientError" === r.name && (!e || e === r.code || Array.isArray(e) && includes(e, r.code))
};
export var isServerError = function(r, e, t) {
    return isNewServerError(r, e, t) || isLegacyServerError(r, e)
};
export var isNewServerError = function(r, e, t) {
    var o = !e || e === r.reason || Array.isArray(e) && includes(e, r.reason),
        n = void 0 !== t && t === r.code;
    return "ServerError" === r.name && (o || n)
};
export var isNewServerErrorWithStatus = function(r, e) {
    return "ServerError" === r.name && e === r.code
};
export var isLegacyServerError = function(r, e) {
    return "LegacyServerError" === r.name && (!e || e === r.code || Array.isArray(e) && includes(e, r.code))
};
export var isOldKeyError = function(r) {
    return r && "Unsupported JWK algorithm RSA-OAEP-256" === r.message
};
var SecretKeyMissingError = function(r) {
    function e(t) {
        var o = r.call(this) || this;
        return o.message = "Secret Key (" + t + ") not found", o.name = e.ERROR_NAME, o
    }
    return __extends(e, r), e.ERROR_NAME = "SecretKeyMissingError", e
}(Error);
export {
    SecretKeyMissingError
};
export var isSecretKeyMissingError = function(r) {
    return r.name === SecretKeyMissingError.ERROR_NAME
};
var SecretKeyIdOrFormatMismatchedError = function(r) {
    function e(t, o, n, s) {
        var i = r.call(this) || this;
        return i.message = "User's Secret Key ID (" + o + ") or format (" + s + ") doesn't match either response's Secret Key ID (" + t + ") or format (" + n + ")", i.name = e.ERROR_NAME, i
    }
    return __extends(e, r), e.ERROR_NAME = "SecretKeyIdOrFormatIsWrong", e
}(Error);
export {
    SecretKeyIdOrFormatMismatchedError
};
export var isSecretKeyIdOrFormatMismatchedError = function(r) {
    return r.name === SecretKeyIdOrFormatMismatchedError.ERROR_NAME
};