import * as t from "io-ts";
import {
    FirewallRuleType,
    FirewallRuleAction,
    FirewallRuleAnonymousType,
    FirewallRuleScopeType
} from "../model/firewall_rules";
import {
    ExceptionType,
    fromStringEnum,
    reportError,
    unsafeDecodeAs,
    withDefault
} from "../util";
export var FirewallRuleScope = t.readonly(t.intersection([t.type({
    type: fromStringEnum(FirewallRuleScopeType, "FirewallRuleScopeType")
}), t.partial({
    uuid: t.string
})]));
export var FirewallRule = t.readonly(t.intersection([t.type({
    type: fromStringEnum(FirewallRuleType, "FirewallRuleType"),
    action: fromStringEnum(FirewallRuleAction, "FirewallRuleAction"),
    value: t.readonly(withDefault(t.array(t.union([fromStringEnum(FirewallRuleAnonymousType, "FirewallRuleAnonymousType"), t.string])), []))
}), t.partial({
    scope: t.readonlyArray(FirewallRuleScope)
})]), "FirewallRule");
export var FirewallRules = t.readonly(t.type({
    rules: t.union([t.readonlyArray(FirewallRule), t.null])
}), "FirewallRules");
export var postFirewallRules = function(e, r) {
    return e.post("/api/v1/firewallrules", r).then(function() {})
};
export var getFirewallRules = function(e) {
    return e.get("/api/v1/firewallrules").then(function(e) {
        if (!e) throw new Error("Server response is empty");
        try {
            return unsafeDecodeAs(FirewallRules)(e)
        } catch (r) {
            return reportError(ExceptionType.ValidationError, [{
                file: "web-api/api/firewall_rules.ts",
                method: "getFirewallRules"
            }]), e
        }
    })
};