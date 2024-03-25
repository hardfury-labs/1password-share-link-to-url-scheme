"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, n) {
        void 0 === n && (n = t), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, n) {
        void 0 === n && (n = t), e[n] = r[t]
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
    __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, i) {
            function u(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(u, a)
            }
            s((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, i, u = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function a(i) {
            return function(a) {
                return function(i) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (t = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return u.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    u.label = i[1];
                                    break
                                }
                                if (6 === i[0] && u.label < o[1]) {
                                    u.label = o[1], o = i;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(i);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        i = r.call(e, u)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, a])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, o, i = t.call(e),
            u = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = i.next()).done;) u.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = i.return) && t.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return u
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateUserMemberships = exports.updateGroupMemberships = exports.updateGroupMembershipRole = exports.createGroupMembership = exports.deleteGroupMembership = exports.deleteMemberFromGroup = void 0;
var lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    util = __importStar(require("../util")),
    make_promise_1 = require("../util/make_promise"),
    context_1 = require("./context"),
    group_1 = require("./group"),
    pub_key_1 = require("./pub_key"),
    codeLocation = "action/group_membership",
    makePromise = make_promise_1.makePromise(codeLocation),
    MEMBERSHIPS_BATCH_SIZE = 100,
    deleteMemberFromGroup = function(e, r, t) {
        return makePromise("deleteMemberFromGroup", function() {
            var n = util.getValidUserUuid(r),
                o = util.getValidGroupUuid(t);
            return api.deleteMemberFromGroup(e.session, n, o).then(function() {
                return context_1.invalidateCache(e)
            })
        })
    };
exports.deleteMemberFromGroup = deleteMemberFromGroup;
var deleteGroupMembership = function(e, r) {
    return exports.deleteMemberFromGroup(e, r.memberUuid, r.groupUuid)
};
exports.deleteGroupMembership = deleteGroupMembership;
var createGroupMembership = function(e, r, t, n) {
    return makePromise("createGroupMembership", function() {
        return group_1.getActiveKeysetForGroup(e, t).then(function(e) {
            return t.createMembership(e, r, n)
        })
    })
};
exports.createGroupMembership = createGroupMembership;
var updateGroupMembershipRole = function(e, r) {
    return makePromise("updateGroupMembershipRole", function() {
        return api.updateGroupMembershipRole(e.session, r.memberUuid, r.groupUuid, r.role).then(function() {
            return context_1.invalidateCache(e)
        })
    })
};
exports.updateGroupMembershipRole = updateGroupMembershipRole;
var updateGroupMemberships = function(e, r) {
    return makePromise("updateGroupMemberships", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, n, o, i, u, a;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return t = r.add, n = r.remove, o = r.group, t.length + n.length === 0 ? (console.warn("updateGroupMemberships aborted, no changes"), [2]) : [4, group_1.getGroup(e, o)];
                    case 1:
                        return i = s.sent(), [4, group_1.getActiveKeysetForGroup(e, i)];
                    case 2:
                        return u = s.sent(), a = function(r) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var n, o;
                                return __generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, pub_key_1.getUserPubKeys(e, t.map(function(e) {
                                                return e.uuid
                                            }))];
                                        case 1:
                                            return n = i.sent(), o = lodash_es_1.keyBy(n, "uuid"), [2, Promise.all(r.map(function(e) {
                                                return __awaiter(void 0, void 0, void 0, function() {
                                                    var r, t;
                                                    return __generator(this, function(n) {
                                                        switch (n.label) {
                                                            case 0:
                                                                if (void 0 === (r = o[e.uuid])) throw new Error("updateGroupMemberships: userPubKey undefined");
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
                        }, [4, lodash_es_1.zipWith(lodash_es_1.chunk(t, MEMBERSHIPS_BATCH_SIZE), lodash_es_1.chunk(n, MEMBERSHIPS_BATCH_SIZE), function(e, r) {
                            return {
                                add: e && a(e) || [],
                                remove: r && r.map(util.getValidUserUuid) || []
                            }
                        }).reduce(function(r, t) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var n;
                                return __generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, r];
                                        case 1:
                                            return o.sent(), [4, t.add];
                                        case 2:
                                            return n = o.sent(), [2, api.patchGroupMemberships(e.session, i.uuid, __assign(__assign({}, t), {
                                                add: n
                                            }))]
                                    }
                                })
                            })
                        }, Promise.resolve())];
                    case 3:
                        return s.sent(), i.hasPermission(model.Permission.Recover) && e.account && (e.account.hasRecoveryMembers = !0), context_1.invalidateCache(e), [2]
                }
            })
        })
    })
};
exports.updateGroupMemberships = updateGroupMemberships;
var updateUserMemberships = function(e, r) {
    return makePromise("updateUserMemberships", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, n, o, i, u, a, s;
            return __generator(this, function(p) {
                switch (p.label) {
                    case 0:
                        return t = r.add, n = r.remove, o = r.user, t.length + n.length === 0 ? (console.warn("updateUserMemberships aborted, no changes"), [2]) : (i = util.getValidUserUuid(o), [4, pub_key_1.getUserPubKeys(e, [i])]);
                    case 1:
                        if (u = __read.apply(void 0, [p.sent(), 1]), !(a = u[0]) || a.uuid !== i) throw new Error("Missing user's public key.");
                        return s = function(r) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var t;
                                return __generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, group_1.getGroup(e, r.uuid)];
                                        case 1:
                                            return t = n.sent(), [2, exports.createGroupMembership(e, a, t, {
                                                role: r.role || api.GroupMembership.Role.Member
                                            })]
                                    }
                                })
                            })
                        }, [4, lodash_es_1.zipWith(lodash_es_1.chunk(t, MEMBERSHIPS_BATCH_SIZE), lodash_es_1.chunk(n, MEMBERSHIPS_BATCH_SIZE), function(e, r) {
                            return {
                                add: e && e.map(s) || [],
                                remove: r && r.map(util.getValidGroupUuid) || []
                            }
                        }).reduce(function(r, t) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var n;
                                return __generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, r];
                                        case 1:
                                            return o.sent(), [4, Promise.all(t.add)];
                                        case 2:
                                            return n = o.sent(), [2, api.patchUserMemberships(e.session, i, __assign(__assign({}, t), {
                                                add: n
                                            }))]
                                    }
                                })
                            })
                        }, Promise.resolve())];
                    case 2:
                        return p.sent(), context_1.invalidateCache(e), [2]
                }
            })
        })
    })
};
exports.updateUserMemberships = updateUserMemberships;
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