export var FirewallRuleType;
! function(e) {
    e.Country = "country", e.Continent = "continent", e.Ip = "ip", e.Anonymous = "anonymous", e.All = "all"
}(FirewallRuleType || (FirewallRuleType = {}));
export var FirewallRuleAction;
! function(e) {
    e.Allow = "allow", e.Report = "report", e.Challenge = "challenge", e.Deny = "deny", e.Continue = "continue"
}(FirewallRuleAction || (FirewallRuleAction = {}));
export var FirewallRuleAnonymousType;
! function(e) {
    e.Tor = "T", e.Vpn = "V", e.Proxy = "P", e.CloudProvider = "C"
}(FirewallRuleAnonymousType || (FirewallRuleAnonymousType = {}));
export var FirewallRuleScopeType;
! function(e) {
    e.Group = "group", e.Global = "global"
}(FirewallRuleScopeType || (FirewallRuleScopeType = {}));