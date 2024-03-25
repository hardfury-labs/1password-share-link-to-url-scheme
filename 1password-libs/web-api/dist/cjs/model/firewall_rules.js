"use strict";
var FirewallRuleType, FirewallRuleAction, FirewallRuleAnonymousType, FirewallRuleScopeType;
Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.FirewallRuleScopeType = exports.FirewallRuleAnonymousType = exports.FirewallRuleAction = exports.FirewallRuleType = void 0,
    function(e) {
        e.Country = "country", e.Continent = "continent", e.Ip = "ip", e.Anonymous = "anonymous", e.All = "all"
    }(FirewallRuleType = exports.FirewallRuleType || (exports.FirewallRuleType = {})),
    function(e) {
        e.Allow = "allow", e.Report = "report", e.Challenge = "challenge", e.Deny = "deny", e.Continue = "continue"
    }(FirewallRuleAction = exports.FirewallRuleAction || (exports.FirewallRuleAction = {})),
    function(e) {
        e.Tor = "T", e.Vpn = "V", e.Proxy = "P", e.CloudProvider = "C"
    }(FirewallRuleAnonymousType = exports.FirewallRuleAnonymousType || (exports.FirewallRuleAnonymousType = {})),
    function(e) {
        e.Group = "group", e.Global = "global"
    }(FirewallRuleScopeType = exports.FirewallRuleScopeType || (exports.FirewallRuleScopeType = {}));