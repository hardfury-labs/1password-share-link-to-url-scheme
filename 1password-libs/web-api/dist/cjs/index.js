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
    },
    __importDefault = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Subscription = exports.Invoice = exports.Card = exports.PartialUser = exports.VaultItem = exports.Vault = exports.User = exports.Group = exports.Account = exports.parser = exports.shared = exports.util = exports.model = exports.api = exports.action = void 0;
var moment_1 = __importDefault(require("moment")),
    sjcl = __importStar(require("sjcl")),
    action = __importStar(require("./action"));
exports.action = action;
var api = __importStar(require("./api"));
exports.api = api;
var model = __importStar(require("./model"));
exports.model = model;
var cryptoTests = __importStar(require("./model/crypto_tests")),
    parser = __importStar(require("./parser"));
exports.parser = parser;
var shared = __importStar(require("./shared"));
exports.shared = shared;
var util = __importStar(require("./util"));
exports.util = util;
var model_1 = require("./model");
Object.defineProperty(exports, "Account", {
    enumerable: !0,
    get: function() {
        return model_1.Account
    }
}), Object.defineProperty(exports, "Group", {
    enumerable: !0,
    get: function() {
        return model_1.Group
    }
}), Object.defineProperty(exports, "User", {
    enumerable: !0,
    get: function() {
        return model_1.User
    }
}), Object.defineProperty(exports, "Vault", {
    enumerable: !0,
    get: function() {
        return model_1.Vault
    }
}), Object.defineProperty(exports, "VaultItem", {
    enumerable: !0,
    get: function() {
        return model_1.VaultItem
    }
});
var api_1 = require("./api");
Object.defineProperty(exports, "PartialUser", {
    enumerable: !0,
    get: function() {
        return api_1.PartialUser
    }
});
var billing_1 = require("./model/billing");
Object.defineProperty(exports, "Card", {
    enumerable: !0,
    get: function() {
        return billing_1.Card
    }
}), Object.defineProperty(exports, "Invoice", {
    enumerable: !0,
    get: function() {
        return billing_1.Invoice
    }
}), Object.defineProperty(exports, "Subscription", {
    enumerable: !0,
    get: function() {
        return billing_1.Subscription
    }
}), "undefined" != typeof window && (window.b5 = {
    action: action,
    api: api,
    model: model,
    util: util,
    shared: shared,
    parser: parser
}, window.sjcl = sjcl, window.moment = moment_1.default), cryptoTests.run().then(console.log);