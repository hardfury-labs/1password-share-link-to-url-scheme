"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
        void 0 === o && (o = r), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, o) {
        void 0 === o && (o = r), e[o] = t[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
        return __setModuleDefault(t, e), t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.requestAccountDeletion = exports.getSupportAccountsList = exports.requestSupportEmail = void 0;
var api = __importStar(require("../api/support")),
    make_promise_1 = require("../util/make_promise"),
    codeLocation = "action/support",
    makePromise = make_promise_1.makePromise(codeLocation),
    requestSupportEmail = function(e, t) {
        return makePromise("requestSupportEmail", function() {
            return api.requestSupportEmail(e.session, t)
        })
    };
exports.requestSupportEmail = requestSupportEmail;
var getSupportAccountsList = function(e, t, r) {
    return makePromise("getSupportAccountsList", function() {
        return api.getSupportAccountsList(e.session, t, r)
    })
};
exports.getSupportAccountsList = getSupportAccountsList;
var requestAccountDeletion = function(e, t, r, o) {
    return makePromise("requestAccountDeletion", function() {
        return api.requestAccountDeletion(e.session, t, r, o)
    })
};
exports.requestAccountDeletion = requestAccountDeletion;