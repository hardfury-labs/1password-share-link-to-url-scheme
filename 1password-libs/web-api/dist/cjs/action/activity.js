"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, i, r) {
        void 0 === r && (r = i), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
                return t[i]
            }
        })
    } : function(e, t, i, r) {
        void 0 === r && (r = i), e[r] = t[i]
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
            for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && __createBinding(t, e, i);
        return __setModuleDefault(t, e), t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFilteredActivities = void 0;
var api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    getFilteredActivities = function(e, t, i, r) {
        return api.getFilteredActivities(e.session, t, i, r).then(function(e) {
            return e ? e.map(model.Activity.fromApi) : []
        }, function(e) {
            throw console.error("getFilteredActivities failed:", e), e
        })
    };
exports.getFilteredActivities = getFilteredActivities;