"use strict";
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
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Cache = void 0;
var lodash_es_1 = require("lodash-es"),
    group_1 = require("../model/group"),
    Cache = function() {
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
                for (var u = __values(r), p = u.next(); !p.done; p = u.next()) {
                    var s = p.value;
                    s.type !== group_1.Group.TypeRecovery ? (this.groupsByUuid[s.uuid] = s, lodash_es_1.includes([group_1.Group.TypeAdmins, group_1.Group.TypeOwners, group_1.Group.TypeTeamMembers, group_1.Group.TypeSecurity], s.type) && (t[s.type] = s)) : this.recoveryGroup = s
                }
            } catch (r) {
                e = {
                    error: r
                }
            } finally {
                try {
                    p && !p.done && (o = u.return) && o.call(u)
                } finally {
                    if (e) throw e.error
                }
            }
            this.administratorsGroup = t[group_1.Group.TypeAdmins], this.ownersGroup = t[group_1.Group.TypeOwners], this.teamMembersGroup = t[group_1.Group.TypeTeamMembers], this.securityGroup = t[group_1.Group.TypeSecurity]
        }, r.prototype.getGroup = function(r) {
            var e = this.groupsByUuid[r];
            return !e && this.recoveryGroup && this.recoveryGroup.uuid === r ? this.recoveryGroup : e
        }, r.prototype.getGroups = function() {
            return (this.recoveryGroup ? [this.recoveryGroup] : []).concat(lodash_es_1.values(this.groupsByUuid))
        }, r.prototype.getGroupsWithoutRecovery = function() {
            return lodash_es_1.values(this.groupsByUuid)
        }, r
    }();
exports.Cache = Cache;