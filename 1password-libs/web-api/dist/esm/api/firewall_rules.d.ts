import * as t from "io-ts";
import { FirewallRuleType, FirewallRuleAction, FirewallRuleScopeType } from "../model/firewall_rules";
import { Session } from "./session";
export declare const FirewallRuleScope: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    type: t.Type<FirewallRuleScopeType, FirewallRuleScopeType, unknown>;
}>, t.PartialC<{
    uuid: t.StringC;
}>]>>;
export declare type FirewallRuleScope = t.TypeOf<typeof FirewallRuleScope>;
export declare const FirewallRule: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    type: t.Type<FirewallRuleType, FirewallRuleType, unknown>;
    action: t.Type<FirewallRuleAction, FirewallRuleAction, unknown>;
    value: t.ReadonlyC<t.Type<string[], string[], unknown>>;
}>, t.PartialC<{
    scope: t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        type: t.Type<FirewallRuleScopeType, FirewallRuleScopeType, unknown>;
    }>, t.PartialC<{
        uuid: t.StringC;
    }>]>>>;
}>]>>;
export declare type FirewallRule = t.TypeOf<typeof FirewallRule>;
export declare const FirewallRules: t.ReadonlyC<t.TypeC<{
    rules: t.UnionC<[t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        type: t.Type<FirewallRuleType, FirewallRuleType, unknown>;
        action: t.Type<FirewallRuleAction, FirewallRuleAction, unknown>;
        value: t.ReadonlyC<t.Type<string[], string[], unknown>>;
    }>, t.PartialC<{
        scope: t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            type: t.Type<FirewallRuleScopeType, FirewallRuleScopeType, unknown>;
        }>, t.PartialC<{
            uuid: t.StringC;
        }>]>>>;
    }>]>>>, t.NullC]>;
}>>;
export declare type FirewallRules = t.TypeOf<typeof FirewallRules>;
export declare const postFirewallRules: (s: Session, firewallRules: FirewallRules) => Promise<void>;
export declare const getFirewallRules: (s: Session) => Promise<FirewallRules>;
