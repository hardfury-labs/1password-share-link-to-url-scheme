var __values = this && this.__values || function(r) {
    var e = "function" == typeof Symbol && Symbol.iterator,
        o = e && r[e],
        t = 0;
    if (o) return o.call(r);
    if (r && "number" == typeof r.length) return {
        next: function() {
            return r && t >= r.length && (r = void 0), {
                value: r && r[t++],
                done: !r
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
};
import {
    includes,
    values
} from "lodash-es";
import {
    Group
} from "../model/group";
var Cache = function() {
    function r() {
        this.groupsByUuid = {}, this.clearAll()
    }
    return r.prototype.clearAll = function() {
        this.setGroups([])
    }, r.prototype.setGroups = function(r) {
        var e, o;
        this.groupsByUuid = {}, this.recoveryGroup = void 0;
        var t = {};
        try {
            for (var u = __values(r), i = u.next(); !i.done; i = u.next()) {
                var p = i.value;
                p.type !== Group.TypeRecovery ? (this.groupsByUuid[p.uuid] = p, includes([Group.TypeAdmins, Group.TypeOwners, Group.TypeTeamMembers, Group.TypeSecurity], p.type) && (t[p.type] = p)) : this.recoveryGroup = p
            }
        } catch (r) {
            e = {
                error: r
            }
        } finally {
            try {
                i && !i.done && (o = u.return) && o.call(u)
            } finally {
                if (e) throw e.error
            }
        }
        this.administratorsGroup = t[Group.TypeAdmins], this.ownersGroup = t[Group.TypeOwners], this.teamMembersGroup = t[Group.TypeTeamMembers], this.securityGroup = t[Group.TypeSecurity]
    }, r.prototype.getGroup = function(r) {
        var e = this.groupsByUuid[r];
        return !e && this.recoveryGroup && this.recoveryGroup.uuid === r ? this.recoveryGroup : e
    }, r.prototype.getGroups = function() {
        return (this.recoveryGroup ? [this.recoveryGroup] : []).concat(values(this.groupsByUuid))
    }, r.prototype.getGroupsWithoutRecovery = function() {
        return values(this.groupsByUuid)
    }, r
}();
export {
    Cache
};