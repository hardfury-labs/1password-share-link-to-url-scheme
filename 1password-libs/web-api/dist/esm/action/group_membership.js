var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var i in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(i, o) {
            function u(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                var r;
                e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(u, a)
            }
            s((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, i, o, u = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function a(o) {
            return function(a) {
                return function(o) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (t = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return u.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    u.label = o[1];
                                    break
                                }
                                if (6 === o[0] && u.label < i[1]) {
                                    u.label = i[1], i = o;
                                    break
                                }
                                if (i && u.label < i[2]) {
                                    u.label = i[2], u.ops.push(o);
                                    break
                                }
                                i[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        o = r.call(e, u)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        t = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, a])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, i, o = t.call(e),
            u = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = o.next()).done;) u.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = o.return) && t.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return u
    };
import {
    chunk,
    keyBy,
    zipWith
} from "lodash-es";
import * as api from "../api";
import * as model from "../model";
import * as util from "../util";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    invalidateCache
} from "./context";
import {
    getActiveKeysetForGroup,
    getGroup
} from "./group";
import {
    getUserPubKeys
} from "./pub_key";
var codeLocation = "action/group_membership",
    makePromise = mp(codeLocation),
    MEMBERSHIPS_BATCH_SIZE = 100;
export var deleteMemberFromGroup = function(e, r, t) {
    return makePromise("deleteMemberFromGroup", function() {
        var n = util.getValidUserUuid(r),
            i = util.getValidGroupUuid(t);
        return api.deleteMemberFromGroup(e.session, n, i).then(function() {
            return invalidateCache(e)
        })
    })
};
export var deleteGroupMembership = function(e, r) {
    return deleteMemberFromGroup(e, r.memberUuid, r.groupUuid)
};
export var createGroupMembership = function(e, r, t, n) {
    return makePromise("createGroupMembership", function() {
        return getActiveKeysetForGroup(e, t).then(function(e) {
            return t.createMembership(e, r, n)
        })
    })
};
export var updateGroupMembershipRole = function(e, r) {
    return makePromise("updateGroupMembershipRole", function() {
        return api.updateGroupMembershipRole(e.session, r.memberUuid, r.groupUuid, r.role).then(function() {
            return invalidateCache(e)
        })
    })
};
export var updateGroupMemberships = function(e, r) {
    return makePromise("updateGroupMemberships", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, n, i, o, u, a;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return t = r.add, n = r.remove, i = r.group, t.length + n.length === 0 ? (console.warn("updateGroupMemberships aborted, no changes"), [2]) : [4, getGroup(e, i)];
                    case 1:
                        return o = s.sent(), [4, getActiveKeysetForGroup(e, o)];
                    case 2:
                        return u = s.sent(), a = function(r) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var n, i;
                                return __generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, getUserPubKeys(e, t.map(function(e) {
                                                return e.uuid
                                            }))];
                                        case 1:
                                            return n = o.sent(), i = keyBy(n, "uuid"), [2, Promise.all(r.map(function(e) {
                                                return __awaiter(void 0, void 0, void 0, function() {
                                                    var r, t;
                                                    return __generator(this, function(n) {
                                                        switch (n.label) {
                                                            case 0:
                                                                if (void 0 === (r = i[e.uuid])) throw new Error("updateGroupMemberships: userPubKey undefined");
                                                                return t = {
                                                                    memberUuid: e.uuid
                                                                }, [4, getMembershipKeyset(u, r)];
                                                            case 1:
                                                                return [2, (t.keyset = n.sent(), t.role = e.role || api.GroupMembership.Role.Member, t)]
                                                        }
                                                    })
                                                })
                                            }))]
                                    }
                                })
                            })
                        }, [4, zipWith(chunk(t, MEMBERSHIPS_BATCH_SIZE), chunk(n, MEMBERSHIPS_BATCH_SIZE), function(e, r) {
                            return {
                                add: e && a(e) || [],
                                remove: r && r.map(util.getValidUserUuid) || []
                            }
                        }).reduce(function(r, t) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var n;
                                return __generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, r];
                                        case 1:
                                            return i.sent(), [4, t.add];
                                        case 2:
                                            return n = i.sent(), [2, api.patchGroupMemberships(e.session, o.uuid, __assign(__assign({}, t), {
                                                add: n
                                            }))]
                                    }
                                })
                            })
                        }, Promise.resolve())];
                    case 3:
                        return s.sent(), o.hasPermission(model.Permission.Recover) && e.account && (e.account.hasRecoveryMembers = !0), invalidateCache(e), [2]
                }
            })
        })
    })
};
export var updateUserMemberships = function(e, r) {
    return makePromise("updateUserMemberships", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, n, i, o, u, a, s;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        return t = r.add, n = r.remove, i = r.user, t.length + n.length === 0 ? (console.warn("updateUserMemberships aborted, no changes"), [2]) : (o = util.getValidUserUuid(i), [4, getUserPubKeys(e, [o])]);
                    case 1:
                        if (u = __read.apply(void 0, [c.sent(), 1]), !(a = u[0]) || a.uuid !== o) throw new Error("Missing user's public key.");
                        return s = function(r) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var t;
                                return __generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, getGroup(e, r.uuid)];
                                        case 1:
                                            return t = n.sent(), [2, createGroupMembership(e, a, t, {
                                                role: r.role || api.GroupMembership.Role.Member
                                            })]
                                    }
                                })
                            })
                        }, [4, zipWith(chunk(t, MEMBERSHIPS_BATCH_SIZE), chunk(n, MEMBERSHIPS_BATCH_SIZE), function(e, r) {
                            return {
                                add: e && e.map(s) || [],
                                remove: r && r.map(util.getValidGroupUuid) || []
                            }
                        }).reduce(function(r, t) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var n;
                                return __generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, r];
                                        case 1:
                                            return i.sent(), [4, Promise.all(t.add)];
                                        case 2:
                                            return n = i.sent(), [2, api.patchUserMemberships(e.session, o, __assign(__assign({}, t), {
                                                add: n
                                            }))]
                                    }
                                })
                            })
                        }, Promise.resolve())];
                    case 2:
                        return c.sent(), invalidateCache(e), [2]
                }
            })
        })
    })
};
var getMembershipKeyset = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, model.getImportedPubKey(r.pubKey)];
                case 1:
                    return t = n.sent(), [2, e.encryptWithKey(t)]
            }
        })
    })
};