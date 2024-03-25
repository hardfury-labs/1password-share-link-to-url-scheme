var __assign = this && this.__assign || function() {
    return (__assign = Object.assign || function(e) {
        for (var r, s = 1, i = arguments.length; s < i; s++)
            for (var t in r = arguments[s]) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
        return e
    }).apply(this, arguments)
};
import * as api from "../api/group";
export function GroupMembershipWithKeyset(e) {
    return __assign(__assign({}, defaultMembershipValues), e)
};
var defaultMembershipValues = {
    role: api.GroupMembership.Role.Member,
    state: api.GroupMembership.State.Active,
    version: 1
};