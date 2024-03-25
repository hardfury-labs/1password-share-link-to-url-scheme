"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, i, r) {
        void 0 === r && (r = i), Object.defineProperty(t, r, {
            enumerable: !0,
            get: function() {
                return e[i]
            }
        })
    } : function(t, e, i, r) {
        void 0 === r && (r = i), t[r] = e[i]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(t, e) {
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        })
    } : function(t, e) {
        t.default = e
    }),
    __importStar = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && __createBinding(e, t, i);
        return __setModuleDefault(e, t), e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Device = void 0;
var Device, t = __importStar(require("io-ts")),
    util_1 = require("../util");
! function(e) {
    e.Type = t.intersection([t.type({
        uuid: t.string,
        clientName: t.string,
        clientVersion: t.string
    }), t.partial({
        name: t.string,
        model: t.string,
        osName: t.string,
        osVersion: t.string,
        userAgent: t.string,
        lastAuthIP: t.string,
        avatar: t.string,
        locationCity: t.string,
        locationCountry: t.string,
        locationCountryCode: t.string,
        state: t.string,
        createdAt: t.string,
        updatedAt: t.string,
        lastAuthAt: t.string,
        fromDeviceInit: t.boolean
    })], "Device");
    e.isInactive = function(t) {
        var e = Date.now() - 5184e6;
        return !!t.lastAuthAt && util_1.getTime(t.lastAuthAt) < e
    }, e.compareAuthDates = function(t, e) {
        return util_1.getTime(e.lastAuthAt) - util_1.getTime(t.lastAuthAt)
    }
}(Device = exports.Device || (exports.Device = {}));