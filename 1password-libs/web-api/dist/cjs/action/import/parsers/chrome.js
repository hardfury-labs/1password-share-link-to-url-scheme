"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, o) {
        void 0 === o && (o = t), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, o) {
        void 0 === o && (o = t), e[o] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseChromeExport = void 0;
var make_promise_1 = require("../../../util/make_promise"),
    create_login_items_1 = require("./helpers/create_login_items"),
    Csv = __importStar(require("./helpers/parser_helpers")),
    codeLocation = "action/import/chrome",
    makePromise = make_promise_1.makePromise(codeLocation),
    parseChromeExport = function(e, r, t) {
        return makePromise("parseChromeExport", function() {
            var o = Csv.parse(r).parsedData;
            return 0 === o.length ? [] : (o[0] && "name" === o[0][0] && o.shift(), create_login_items_1.createLoginItems(e, o, t))
        })
    };
exports.parseChromeExport = parseChromeExport;