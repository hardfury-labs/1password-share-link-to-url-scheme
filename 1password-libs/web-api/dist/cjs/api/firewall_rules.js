"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, l, r, t) {
        void 0 === t && (t = r), Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return l[r]
            }
        })
    } : function(e, l, r, t) {
        void 0 === t && (t = r), e[t] = l[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, l) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: l
        })
    } : function(e, l) {
        e.default = l
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var l = {};
        if (null != e)
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(l, e, r);
        return __setModuleDefault(l, e), l
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFirewallRules = exports.postFirewallRules = exports.FirewallRules = exports.FirewallRule = exports.FirewallRuleScope = void 0;
var t = __importStar(require("io-ts")),
    firewall_rules_1 = require("../model/firewall_rules"),
    util_1 = require("../util");
exports.FirewallRuleScope = t.readonly(t.intersection([t.type({
    type: util_1.fromStringEnum(firewall_rules_1.FirewallRuleScopeType, "FirewallRuleScopeType")
}), t.partial({
    uuid: t.string
})])), exports.FirewallRule = t.readonly(t.intersection([t.type({
    type: util_1.fromStringEnum(firewall_rules_1.FirewallRuleType, "FirewallRuleType"),
    action: util_1.fromStringEnum(firewall_rules_1.FirewallRuleAction, "FirewallRuleAction"),
    value: t.readonly(util_1.withDefault(t.array(t.union([util_1.fromStringEnum(firewall_rules_1.FirewallRuleAnonymousType, "FirewallRuleAnonymousType"), t.string])), []))
}), t.partial({
    scope: t.readonlyArray(exports.FirewallRuleScope)
})]), "FirewallRule"), exports.FirewallRules = t.readonly(t.type({
    rules: t.union([t.readonlyArray(exports.FirewallRule), t.null])
}), "FirewallRules");
var postFirewallRules = function(e, l) {
    return e.post("/api/v1/firewallrules", l).then(function() {})
};
exports.postFirewallRules = postFirewallRules;
var getFirewallRules = function(e) {
    return e.get("/api/v1/firewallrules").then(function(e) {
        if (!e) throw new Error("Server response is empty");
        try {
            return util_1.unsafeDecodeAs(exports.FirewallRules)(e)
        } catch (l) {
            return util_1.reportError(util_1.ExceptionType.ValidationError, [{
                file: "web-api/api/firewall_rules.ts",
                method: "getFirewallRules"
            }]), e
        }
    })
};
exports.getFirewallRules = getFirewallRules;