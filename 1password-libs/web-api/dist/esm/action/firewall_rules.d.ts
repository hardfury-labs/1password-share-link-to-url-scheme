import { FirewallRule, FirewallRules } from "../api/firewall_rules";
import * as model from "../model";
import { FirewallRuleType, FirewallRuleAction, FirewallRuleAnonymousType, FirewallRuleScopeType } from "../model";
import { Context } from "./context";
export { FirewallRules, FirewallRule, FirewallRuleType, FirewallRuleAction, FirewallRuleAnonymousType, FirewallRuleScopeType, };
export declare const postFirewallRules: (c: Context, firewallRules: FirewallRules) => Promise<void>;
export declare const getFirewallRules: (c: Context) => Promise<model.FirewallRules>;
