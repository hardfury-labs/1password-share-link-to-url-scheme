export declare enum FirewallRuleType {
    Country = "country",
    Continent = "continent",
    Ip = "ip",
    Anonymous = "anonymous",
    All = "all"
}
export declare enum FirewallRuleAction {
    Allow = "allow",
    Report = "report",
    Challenge = "challenge",
    Deny = "deny",
    Continue = "continue"
}
export declare enum FirewallRuleAnonymousType {
    Tor = "T",
    Vpn = "V",
    Proxy = "P",
    CloudProvider = "C"
}
export declare enum FirewallRuleScopeType {
    Group = "group",
    Global = "global"
}
export interface FirewallRuleScope {
    readonly type: FirewallRuleScopeType;
    readonly uuid?: string;
}
export interface FirewallRule {
    type: FirewallRuleType;
    scope?: readonly FirewallRuleScope[];
    value: readonly (string | FirewallRuleAnonymousType)[];
    action: FirewallRuleAction;
}
export interface FirewallGroupRule {
    readonly rules: FirewallRule[];
    readonly groupUuid: string;
}
export interface FirewallRules {
    readonly globalRules: FirewallRule[];
    readonly groupRules: FirewallGroupRule[];
}
