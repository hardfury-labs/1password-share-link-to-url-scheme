"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, o) {
        void 0 === o && (o = t), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, o) {
        void 0 === o && (o = t), e[o] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    },
    __awaiter = this && this.__awaiter || function(e, r, t, o) {
        return new(t || (t = Promise))(function(u, n) {
            function p(e) {
                try {
                    a(o.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function i(e) {
                try {
                    a(o.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function a(e) {
                var r;
                e.done ? u(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(p, i)
            }
            a((o = o.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, o, u, n, p = {
            label: 0,
            sent: function() {
                if (1 & u[0]) throw u[1];
                return u[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n;

        function i(n) {
            return function(i) {
                return function(n) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; p;) try {
                        if (t = 1, o && (u = 2 & n[0] ? o.return : n[0] ? o.throw || ((u = o.return) && u.call(o), 0) : o.next) && !(u = u.call(o, n[1])).done) return u;
                        switch (o = 0, u && (n = [2 & n[0], u.value]), n[0]) {
                            case 0:
                            case 1:
                                u = n;
                                break;
                            case 4:
                                return p.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                p.label++, o = n[1], n = [0];
                                continue;
                            case 7:
                                n = p.ops.pop(), p.trys.pop();
                                continue;
                            default:
                                if (!(u = (u = p.trys).length > 0 && u[u.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    p = 0;
                                    continue
                                }
                                if (3 === n[0] && (!u || n[1] > u[0] && n[1] < u[3])) {
                                    p.label = n[1];
                                    break
                                }
                                if (6 === n[0] && p.label < u[1]) {
                                    p.label = u[1], u = n;
                                    break
                                }
                                if (u && p.label < u[2]) {
                                    p.label = u[2], p.ops.push(n);
                                    break
                                }
                                u[2] && p.ops.pop(), p.trys.pop();
                                continue
                        }
                        n = r.call(e, p)
                    } catch (e) {
                        n = [6, e], o = 0
                    } finally {
                        t = u = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, i])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getGroupMembersCSV = exports.addRecoveryKeysetToGroup = exports.patchUserMemberships = exports.patchGroupMemberships = exports.updateGroupMembershipRole = exports.deleteMemberFromGroup = exports.markGroupReadyForPurging = exports.deleteGroup = exports.createGroup = exports.updateGroupPermissions = exports.updateGroup = exports.getGroupPubKeys = exports.getGroup = exports.GroupMembership = void 0;
var GroupMembership, t = __importStar(require("io-ts")),
    util_1 = require("../util"),
    util_2 = require("./util");
! function(e) {
    var r;
    ! function(e) {
        e.Manager = "A", e.Member = "R"
    }(r = e.Role || (e.Role = {}));
    var o, u = util_1.fromStringEnum(r, "Role");
    ! function(e) {
        e.Active = "A", e.Deleted = "D", e.Inactive = "I"
    }(o = e.State || (e.State = {}));
    var n = util_1.fromStringEnum(o, "State");
    e.Type = t.readonly(t.type({
        groupUuid: t.string,
        memberUuid: t.string,
        role: u,
        state: n,
        version: t.number
    }), "GroupMembership")
}(GroupMembership = exports.GroupMembership || (exports.GroupMembership = {}));
var attrMaskNames = ["pubkey", "memberships", "vault-access", "activities", "recoverable-ks"],
    getGroup = function(e, r, t) {
        var o = util_2.bitMaskNames(t, attrMaskNames),
            u = o.length > 0 ? "?attrs=" + o.join(",") : "";
        return e.get("/api/v2/group/" + r + u)
    };
exports.getGroup = getGroup;
var getGroupPubKeys = function(e, r) {
    return e.get("/api/v1/group/pubkeys?uuids=" + r.join(","))
};
exports.getGroupPubKeys = getGroupPubKeys;
var updateGroup = function(e, r) {
    var t = "/api/v1/group/" + r.uuid + "/attrs";
    return e.put(t, r).then(function() {})
};
exports.updateGroup = updateGroup;
var updateGroupPermissions = function(e, r, t) {
    var o = "/api/v1/group/" + r + "/permissions",
        u = {
            permissions: t
        };
    return e.put(o, u).then(function() {})
};
exports.updateGroupPermissions = updateGroupPermissions;
var createGroup = function(e, r) {
    return e.post("/api/v1/group", r).then(function() {})
};
exports.createGroup = createGroup;
var deleteGroup = function(e, r) {
    return e.delete("/api/v1/group/" + r).then(function() {})
};
exports.deleteGroup = deleteGroup;
var markGroupReadyForPurging = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, e.post("/api/v1/group/" + r + "/purge")];
                case 1:
                    return t.sent(), [2]
            }
        })
    })
};
exports.markGroupReadyForPurging = markGroupReadyForPurging;
var deleteMemberFromGroup = function(e, r, t) {
    return e.delete("/api/v1/group/" + t + "/person/" + r).then(function() {})
};
exports.deleteMemberFromGroup = deleteMemberFromGroup;
var updateGroupMembershipRole = function(e, r, t, o) {
    return e.patch("/api/v1/group/" + t + "/person/" + r + "/role/" + o).then(function() {})
};
exports.updateGroupMembershipRole = updateGroupMembershipRole;
var patchGroupMemberships = function(e, r, t) {
    return e.patch("/api/v3/group/" + r + "/membership", t).then(function() {})
};
exports.patchGroupMemberships = patchGroupMemberships;
var patchUserMemberships = function(e, r, t) {
    return e.patch("/api/v2/user/" + r + "/membership", t).then(function() {})
};
exports.patchUserMemberships = patchUserMemberships;
var addRecoveryKeysetToGroup = function(e, r) {
    var t = "/api/v1/group/" + r.uuid + "/recoverykeyset";
    return e.put(t, r).then(function() {})
};
exports.addRecoveryKeysetToGroup = addRecoveryKeysetToGroup;
var getGroupMembersCSV = function(e, r) {
    return e.get("/api/v1/group/" + r + "/members/csv")
};
exports.getGroupMembersCSV = getGroupMembersCSV;