import * as api from "../api";
import * as model from "../model";
/** parseFirewallRules converts the api firewallRule array into
 * global and group rules and returns a model FirewallRules **/
export declare const parseFirewallRules: (firewallRules: api.FirewallRules) => Promise<model.FirewallRules>;
