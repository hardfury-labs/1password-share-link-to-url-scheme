import * as api from "../api";
import {
    FirewallRule,
    FirewallRules
} from "../api/firewall_rules";
import {
    FirewallRuleType,
    FirewallRuleAction,
    FirewallRuleAnonymousType,
    FirewallRuleScopeType
} from "../model";
import * as parser from "../parser";
export {
    FirewallRules,
    FirewallRule,
    FirewallRuleType,
    FirewallRuleAction,
    FirewallRuleAnonymousType,
    FirewallRuleScopeType
};
export var postFirewallRules = function(e, l) {
    return api.postFirewallRules(e.session, l)
};
export var getFirewallRules = function(e) {
    return api.getFirewallRules(e.session).then(function(e) {
        return parser.parseFirewallRules(e)
    })
};