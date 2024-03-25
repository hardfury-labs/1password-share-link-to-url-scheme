var __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, u) {
            function i(e) {
                try {
                    p(n.next(e))
                } catch (e) {
                    u(e)
                }
            }

            function a(e) {
                try {
                    p(n.throw(e))
                } catch (e) {
                    u(e)
                }
            }

            function p(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(i, a)
            }
            p((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, u, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return u = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
            return this
        }), u;

        function a(u) {
            return function(a) {
                return function(u) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (t = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;
                        switch (n = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                            case 0:
                            case 1:
                                o = u;
                                break;
                            case 4:
                                return i.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = u[1], u = [0];
                                continue;
                            case 7:
                                u = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                    i.label = u[1];
                                    break
                                }
                                if (6 === u[0] && i.label < o[1]) {
                                    i.label = o[1], o = u;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(u);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        u = r.call(e, i)
                    } catch (e) {
                        u = [6, e], n = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, a])
            }
        }
    };
import * as t from "io-ts";
import {
    fromStringEnum
} from "../util";
import {
    bitMaskNames
} from "./util";
export var GroupMembership;
! function(e) {
    var r;
    ! function(e) {
        e.Manager = "A", e.Member = "R"
    }(r = e.Role || (e.Role = {}));
    var n, o = fromStringEnum(r, "Role");
    ! function(e) {
        e.Active = "A", e.Deleted = "D", e.Inactive = "I"
    }(n = e.State || (e.State = {}));
    var u = fromStringEnum(n, "State");
    e.Type = t.readonly(t.type({
        groupUuid: t.string,
        memberUuid: t.string,
        role: o,
        state: u,
        version: t.number
    }), "GroupMembership")
}(GroupMembership || (GroupMembership = {}));
var attrMaskNames = ["pubkey", "memberships", "vault-access", "activities", "recoverable-ks"];
export var getGroup = function(e, r, t) {
    var n = bitMaskNames(t, attrMaskNames),
        o = n.length > 0 ? "?attrs=" + n.join(",") : "";
    return e.get("/api/v2/group/" + r + o)
};
export var getGroupPubKeys = function(e, r) {
    return e.get("/api/v1/group/pubkeys?uuids=" + r.join(","))
};
export var updateGroup = function(e, r) {
    var t = "/api/v1/group/" + r.uuid + "/attrs";
    return e.put(t, r).then(function() {})
};
export var updateGroupPermissions = function(e, r, t) {
    var n = "/api/v1/group/" + r + "/permissions",
        o = {
            permissions: t
        };
    return e.put(n, o).then(function() {})
};
export var createGroup = function(e, r) {
    return e.post("/api/v1/group", r).then(function() {})
};
export var deleteGroup = function(e, r) {
    return e.delete("/api/v1/group/" + r).then(function() {})
};
export var markGroupReadyForPurging = function(e, r) {
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
export var deleteMemberFromGroup = function(e, r, t) {
    return e.delete("/api/v1/group/" + t + "/person/" + r).then(function() {})
};
export var updateGroupMembershipRole = function(e, r, t, n) {
    return e.patch("/api/v1/group/" + t + "/person/" + r + "/role/" + n).then(function() {})
};
export var patchGroupMemberships = function(e, r, t) {
    return e.patch("/api/v3/group/" + r + "/membership", t).then(function() {})
};
export var patchUserMemberships = function(e, r, t) {
    return e.patch("/api/v2/user/" + r + "/membership", t).then(function() {})
};
export var addRecoveryKeysetToGroup = function(e, r) {
    var t = "/api/v1/group/" + r.uuid + "/recoverykeyset";
    return e.put(t, r).then(function() {})
};
export var getGroupMembersCSV = function(e, r) {
    return e.get("/api/v1/group/" + r + "/members/csv")
};