"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, l, t) {
        void 0 === t && (t = l), Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return r[l]
            }
        })
    } : function(e, r, l, t) {
        void 0 === t && (t = l), e[t] = r[l]
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
            for (var l in e) "default" !== l && Object.prototype.hasOwnProperty.call(e, l) && __createBinding(r, e, l);
        return __setModuleDefault(r, e), r
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFirewallRules = exports.postFirewallRules = exports.FirewallRuleScopeType = exports.FirewallRuleAnonymousType = exports.FirewallRuleAction = exports.FirewallRuleType = exports.FirewallRule = exports.FirewallRules = void 0;
var api = __importStar(require("../api")),
    firewall_rules_1 = require("../api/firewall_rules");
Object.defineProperty(exports, "FirewallRule", {
    enumerable: !0,
    get: function() {
        return firewall_rules_1.FirewallRule
    }
}), Object.defineProperty(exports, "FirewallRules", {
    enumerable: !0,
    get: function() {
        return firewall_rules_1.FirewallRules
    }
});
var model_1 = require("../model");
Object.defineProperty(exports, "FirewallRuleType", {
    enumerable: !0,
    get: function() {
        return model_1.FirewallRuleType
    }
}), Object.defineProperty(exports, "FirewallRuleAction", {
    enumerable: !0,
    get: function() {
        return model_1.FirewallRuleAction
    }
}), Object.defineProperty(exports, "FirewallRuleAnonymousType", {
    enumerable: !0,
    get: function() {
        return model_1.FirewallRuleAnonymousType
    }
}), Object.defineProperty(exports, "FirewallRuleScopeType", {
    enumerable: !0,
    get: function() {
        return model_1.FirewallRuleScopeType
    }
});
var parser = __importStar(require("../parser")),
    postFirewallRules = function(e, r) {
        return api.postFirewallRules(e.session, r)
    };
exports.postFirewallRules = postFirewallRules;
var getFirewallRules = function(e) {
    return api.getFirewallRules(e.session).then(function(e) {
        return parser.parseFirewallRules(e)
    })
};
exports.getFirewallRules = getFirewallRules;