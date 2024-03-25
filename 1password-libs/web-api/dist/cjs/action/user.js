"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var s in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
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
        return new(t || (t = Promise))(function(s, i) {
            function a(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function o(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                var r;
                e.done ? s(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(a, o)
            }
            u((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, s, i, a = {
            label: 0,
            sent: function() {
                if (1 & s[0]) throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function o(i) {
            return function(o) {
                return function(i) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, n && (s = 2 & i[0] ? n.return : i[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, i[1])).done) return s;
                        switch (n = 0, s && (i = [2 & i[0], s.value]), i[0]) {
                            case 0:
                            case 1:
                                s = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < s[1]) {
                                    a.label = s[1], s = i;
                                    break
                                }
                                if (s && a.label < s[2]) {
                                    a.label = s[2], a.ops.push(i);
                                    break
                                }
                                s[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = r.call(e, a)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        t = s = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, o])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, s, i = t.call(e),
            a = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = i.next()).done;) a.push(n.value)
        } catch (e) {
            s = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = i.return) && t.call(i)
            } finally {
                if (s) throw s.error
            }
        }
        return a
    },
    __values = this && this.__values || function(e) {
        var r = "function" == typeof Symbol && Symbol.iterator,
            t = r && e[r],
            n = 0;
        if (t) return t.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.prepProvisionUser = exports.getRecoveryDetails = exports.changeUserName = exports.changeUserAvatar = exports.deletePerson = exports.deleteUsers = exports.reactivateUsers = exports.completeUserRecovery = exports.cancelUserRecovery = exports.beginUserRecovery = exports.markBackFromTravel = exports.markAwayForTravel = exports.suspendUsers = exports.confirmUsers = exports.getPerson = exports.setActiveUser = exports.clearUserCacheForContext = exports.clearUserCache = exports.setCachedUsers = exports.findCachedUser = exports.updateUser = void 0;
var lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    model_1 = require("../model"),
    model = __importStar(require("../model")),
    parser = __importStar(require("../parser")),
    util = __importStar(require("../util")),
    make_promise_1 = require("../util/make_promise"),
    context_1 = require("./context"),
    group_1 = require("./group"),
    keyset_1 = require("./keyset"),
    pub_key_1 = require("./pub_key"),
    cache = __importStar(require("./request_cache")),
    vault_1 = require("./vault"),
    codeLocation = "action/user",
    makePromise = make_promise_1.makePromise(codeLocation),
    DEFAULT_USER_API_BATCH_SIZE = 15,
    userCache = cache.create(),
    updateUser = function(e, r) {
        return makePromise("updateUser", function() {
            var t = r || e.user;
            return t ? api.updateUser(e.session, parser.personToAPI(t)) : Promise.reject(new Error("Missing user"))
        })
    };
exports.updateUser = updateUser;
var findCachedUser = function(e, r) {
    return userCache.getEntry(e.id, r)
};
exports.findCachedUser = findCachedUser;
var setCachedUsers = function(e, r) {
    userCache = userCache.withOnlyEntries(e.id, lodash_es_1.keyBy(r, "uuid"))
};
exports.setCachedUsers = setCachedUsers;
var clearUserCache = function() {
    userCache = cache.create()
};
exports.clearUserCache = clearUserCache;
var clearUserCacheForContext = function(e) {
    userCache = userCache.withoutContext(e.id)
};
exports.clearUserCacheForContext = clearUserCacheForContext;
var setActiveUser = function(e, r) {
    var t;
    userCache = userCache.withEntries(e.id, ((t = {})[r.uuid] = r, t))
};
exports.setActiveUser = setActiveUser;
var defaultGetPersonOptions = {
        attrs: model.Person.Attr.None,
        mustReload: !1
    },
    getPerson = function(e, r, t) {
        return makePromise("getPerson", function() {
            var n = util.getValidUserUuid(r);
            if (!n) throw new Error("Invalid user reference");
            var s = __assign(__assign({}, defaultGetPersonOptions), t),
                i = s.attrs,
                a = s.mustReload ? void 0 : userCache.getEntry(e.id, n, {
                    attrMask: i
                });
            return a && a.hasAttrMask(i) ? a : make_promise_1.debouncePromise([codeLocation, "getPerson", e.id, n, i], function() {
                return api.getUser(e.session, n, i).then(function(r) {
                    var t = Date.now();
                    return Promise.all([parser.parsePerson(e, r, i, a), t])
                }).then(function(r) {
                    var t, s = __read(r, 2),
                        a = s[0],
                        o = s[1];
                    return userCache = userCache.withEntries(e.id, ((t = {})[n] = a, t), {
                        attrMask: i,
                        timestamp: o
                    }), a
                })
            })
        })
    };
exports.getPerson = getPerson;
var getUsersWithPubKeys = function(e, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, pub_key_1.getUserPubKeys(e, r)];
                    case 1:
                        return t = n.sent(), [2, pub_key_1.mergeInPubKeys(r, t)]
                }
            })
        })
    },
    confirmUsers = function(e, r, t) {
        return makePromise("confirmUsers", function() {
            return __awaiter(void 0, void 0, void 0, function() {
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return lodash_es_1.isEmpty(r) ? [2] : e.account && e.account.hasFeature.members ? e.account.teamMembersGroup ? [4, confirmWithTeamMembersGroup(e, r, t)] : [3, 2] : [3, 5];
                        case 1:
                            return n.sent(), [3, 4];
                        case 2:
                            return [4, confirmWithEveryoneVault(e, r)];
                        case 3:
                            n.sent(), n.label = 4;
                        case 4:
                            return [3, 6];
                        case 5:
                            throw new Error("Cannot confirm members for this account");
                        case 6:
                            return context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
                    }
                })
            })
        })
    };
exports.confirmUsers = confirmUsers;
var CONFIRM_BATCH_SIZE = 25,
    confirmWithTeamMembersGroup = function(e, r, t) {
        return makePromise("confirmWithTeamMembersGroup", function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var n, s;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, group_1.getTeamMembersGroup(e)];
                        case 1:
                            return n = i.sent(), s = function(r) {
                                return __awaiter(void 0, void 0, void 0, function() {
                                    var s, i, a;
                                    return __generator(this, function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, getUsersWithPubKeys(e, r)];
                                            case 1:
                                                return s = o.sent(), i = s.filter(function(e) {
                                                    return "R" === e.type
                                                }), [4, addMembersToGroup(e, i, n)];
                                            case 2:
                                                return a = o.sent(), t ? [4, confirmWithGroupMembershipsAndVaults(e, s, a, t)] : [3, 4];
                                            case 3:
                                                return o.sent(), [3, 6];
                                            case 4:
                                                return [4, confirmWithGroupMemberships(e, s, a)];
                                            case 5:
                                                o.sent(), o.label = 6;
                                            case 6:
                                                return [2, []]
                                        }
                                    })
                                })
                            }, [4, util.batchChain(s, CONFIRM_BATCH_SIZE, r)];
                        case 2:
                            return i.sent(), [2]
                    }
                })
            })
        })
    },
    addMembersToGroup = function(e, r, t) {
        return makePromise("addMembersToGroup", function() {
            if (!t.activeKeysetUuid) throw new Error("Missing group's active keyset UUID.");
            var n = keyset_1.findDecryptedKeyset(e, t.activeKeysetUuid);
            if (!n) throw new Error("Could not find group's active keyset.");
            return Promise.all(r.map(function(e) {
                return t.createMembership(n, e, {
                    role: api.GroupMembership.Role.Member
                })
            }))
        })
    },
    confirmWithGroupMemberships = function(e, r, t) {
        return makePromise("confirmWithGroupMemberships", function() {
            var n = lodash_es_1.compact(r.map(util.getValidUserUuid));
            return api.confirmUsersWithMemberships(e.session, n, t)
        })
    },
    confirmWithGroupMembershipsAndVaults = function(e, r, t, n) {
        return makePromise("confirmWithGroupMembershipsAndVaults", function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var s, i, a, o, u, c, l, d, _, f, v, h, p;
                return __generator(this, function(m) {
                    switch (m.label) {
                        case 0:
                            s = lodash_es_1.compact(r.map(function(e) {
                                return util.getValidUserUuid(e.uuid)
                            })), i = util.mapObject(function(e) {
                                return e.uuid
                            }, function(e) {
                                return e
                            }, r), a = [], m.label = 1;
                        case 1:
                            m.trys.push([1, 7, 8, 9]), o = __values(n), u = o.next(), m.label = 2;
                        case 2:
                            return u.done ? [3, 6] : (c = u.value, [4, vault_1.getVault(e, c.vaultUuid, {
                                attrs: model.Vault.Attr.All
                            })]);
                        case 3:
                            if (!(l = m.sent())) throw new Error("Missing vault for " + c.vaultUuid);
                            return "R" !== (null === (d = i[c.accessorUuid]) || void 0 === d ? void 0 : d.type) ? [3, 5] : (f = (_ = a).push, [4, model.VaultAccess.generate(l, __assign(__assign({}, d), {
                                accessorType: c.accessorType
                            }), {
                                acl: c.acl
                            })]);
                        case 4:
                            f.apply(_, [m.sent()]), m.label = 5;
                        case 5:
                            return u = o.next(), [3, 2];
                        case 6:
                            return [3, 9];
                        case 7:
                            return v = m.sent(), h = {
                                error: v
                            }, [3, 9];
                        case 8:
                            try {
                                u && !u.done && (p = o.return) && p.call(o)
                            } finally {
                                if (h) throw h.error
                            }
                            return [7];
                        case 9:
                            return [2, api.confirmUsersWithMembershipsAndVaultAccessList(e.session, s, t, a)]
                    }
                })
            })
        })
    },
    confirmWithEveryoneVault = function(e, r) {
        return makePromise("confirmWithEveryoneVault", function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var t, n, s, i, a, o;
                return __generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return [4, vault_1.getEveryoneVault(e, {
                                attrs: model.Vault.Attr.All
                            })];
                        case 1:
                            if (!(t = u.sent())) throw new Error("Missing Everyone vault");
                            return [4, getUsersWithPubKeys(e, r)];
                        case 2:
                            return n = u.sent(), s = n.filter(function(e) {
                                return "R" === e.type
                            }).map(function(e) {
                                return model.VaultAccess.generate(t, __assign(__assign({}, e), {
                                    accessorType: "user"
                                }), {
                                    acl: model.vaultACL.RWE
                                })
                            }), [4, Promise.all(s)];
                        case 3:
                            return i = u.sent(), a = i.map(parser.vaultAccessToAPI), o = lodash_es_1.compact(n.map(util.getValidUserUuid)), [2, api.confirmUsersWithVaultAccessList(e.session, o, a)]
                    }
                })
            })
        })
    },
    suspendUsers = function(e, r) {
        return makePromise("suspendUsers", function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var t;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return t = function(r) {
                                return __awaiter(void 0, void 0, void 0, function() {
                                    return __generator(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, api.suspendUsers(e.session, r)];
                                            case 1:
                                                return t.sent(), [2, []]
                                        }
                                    })
                                })
                            }, [4, util.batchChain(t, DEFAULT_USER_API_BATCH_SIZE, r.map(util.getValidUserUuid))];
                        case 1:
                            return n.sent(), context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
                    }
                })
            })
        })
    };
exports.suspendUsers = suspendUsers;
var markAwayForTravel = function(e, r) {
    return makePromise("markAwayForTravel", function() {
        return api.markAwayForTravel(e.session, r.map(util.getValidUserUuid)).then(function() {
            context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged)
        })
    })
};
exports.markAwayForTravel = markAwayForTravel;
var markBackFromTravel = function(e, r) {
    return makePromise("markBackFromTravel", function() {
        return api.markBackFromTravel(e.session, r.map(util.getValidUserUuid)).then(function() {
            context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged)
        })
    })
};
exports.markBackFromTravel = markBackFromTravel;
var beginUserRecovery = function(e, r) {
    return makePromise("beginUserRecovery", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var t;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return t = function(r) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                return __generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, api.beginRecovery(e.session, r)];
                                        case 1:
                                            return t.sent(), [2, []]
                                    }
                                })
                            })
                        }, [4, util.batchChain(t, DEFAULT_USER_API_BATCH_SIZE, r.map(util.getValidUserUuid))];
                    case 1:
                        return n.sent(), context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
                }
            })
        })
    })
};
exports.beginUserRecovery = beginUserRecovery;
var cancelUserRecovery = function(e, r) {
    return makePromise("cancelUserRecovery", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var t;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return t = function(r) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                return __generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, api.cancelRecovery(e.session, r)];
                                        case 1:
                                            return t.sent(), [2, []]
                                    }
                                })
                            })
                        }, [4, util.batchChain(t, DEFAULT_USER_API_BATCH_SIZE, r.map(util.getValidUserUuid))];
                    case 1:
                        return n.sent(), context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
                }
            })
        })
    })
};
exports.cancelUserRecovery = cancelUserRecovery;
var completeUserRecovery = function(e, r) {
    return makePromise("completeUserRecovery", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, n, s;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, pub_key_1.getUserPubKeys(e, r)];
                    case 1:
                        return t = i.sent(), n = t.map(function(e) {
                            return e.uuid
                        }), s = function(r) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var s, i;
                                return __generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, api.getRecoverableKeysForPeople(e.session, n)];
                                        case 1:
                                            return s = a.sent(), [4, parser.recoverableKeysForPeopleFromAPI(e, s)];
                                        case 2:
                                            return [4, a.sent().encryptForPeople(t)];
                                        case 3:
                                            return i = a.sent(), [4, api.completeRecovery(e.session, r, i)];
                                        case 4:
                                            return a.sent(), [2, []]
                                    }
                                })
                            })
                        }, [4, util.batchChain(s, DEFAULT_USER_API_BATCH_SIZE, n)];
                    case 2:
                        return i.sent(), context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
                }
            })
        })
    })
};
exports.completeUserRecovery = completeUserRecovery;
var reactivateUsers = function(e, r) {
    return makePromise("reactivateUsers", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var t;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return t = function(r) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                return __generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, api.reactivateUsers(e.session, r)];
                                        case 1:
                                            return t.sent(), [2, []]
                                    }
                                })
                            })
                        }, [4, util.batchChain(t, DEFAULT_USER_API_BATCH_SIZE, r.map(util.getValidUserUuid))];
                    case 1:
                        return n.sent(), context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
                }
            })
        })
    })
};
exports.reactivateUsers = reactivateUsers;
var deleteUsers = function(e, r) {
    return makePromise("deleteUsers", function() {
        var t = r.filter(function(e) {
                return "1" === e.state
            }),
            n = r.filter(function(e) {
                return !model_1.User.canBeDeleted(e)
            }),
            s = Promise.resolve();
        return t.length > 0 && (s = s.then(function() {
            return exports.cancelUserRecovery(e, t)
        })), n.length > 0 && (s = s.then(function() {
            return exports.suspendUsers(e, n)
        })), s.then(function() {
            return util.batchChain(function(r) {
                return __awaiter(void 0, void 0, void 0, function() {
                    return __generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, api.deleteUsers(e.session, r)];
                            case 1:
                                return t.sent(), [2, []]
                        }
                    })
                })
            }, DEFAULT_USER_API_BATCH_SIZE, r.map(function(e) {
                return e.uuid
            }))
        }).then(function() {
            context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged)
        })
    })
};
exports.deleteUsers = deleteUsers;
var deletePerson = function(e, r, t) {
    return makePromise("deletePerson", function() {
        var n = Promise.resolve();
        return "1" === r.state && (n = n.then(function() {
            return exports.cancelUserRecovery(e, [r])
        })), model_1.User.canBeDeleted(r) || (n = n.then(function() {
            return exports.suspendUsers(e, [r])
        })), n.then(function() {
            return __awaiter(void 0, void 0, void 0, function() {
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, api.deletePerson(e.session, r.uuid, t)];
                        case 1:
                            return [2, n.sent()]
                    }
                })
            })
        }).then(function() {
            context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged)
        })
    })
};
exports.deletePerson = deletePerson;
var changeUserAvatar = function(e, r, t) {
    var n = __assign(__assign({}, parser.personToAPI(r)), {
        imageId: t
    });
    return api.changeUserAvatar(e.session, n)
};
exports.changeUserAvatar = changeUserAvatar;
var changeUserName = function(e, r, t) {
    return makePromise("changeUserName", function() {
        var n = lodash_es_1.assign(parser.personToAPI(r), {
            name: t
        });
        return api.changeUserName(e.session, n)
    }).then(function() {
        context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged)
    })
};
exports.changeUserName = changeUserName;
var getRecoveryDetails = function(e, r, t) {
    return makePromise("getRecoveryDetails", function() {
        return api.getRecoveryDetails(e.session, r, t)
    })
};
exports.getRecoveryDetails = getRecoveryDetails;
var prepProvisionUser = function(e, r, t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var s, i, a, o, u, c, l;
        return __generator(this, function(d) {
            switch (d.label) {
                case 0:
                    return s = {
                        email: r,
                        secretKey: model.SecretKey.generate(),
                        password: util.generateUUID()
                    }, i = new model.OldUser(__assign(__assign({}, s), {
                        uuid: n,
                        name: t,
                        language: (null === (l = e.user) || void 0 === l ? void 0 : l.language) || "en",
                        newsletterPrefs: 0
                    })), [4, model.Auth.generate(s)];
                case 1:
                    return a = d.sent(), u = (o = Promise).all, [4, i.deriveMasterKey()];
                case 2:
                    return c = [d.sent()], [4, i.generateNewKeyset()];
                case 3:
                    return [4, u.apply(o, [c.concat([d.sent()])])];
                case 4:
                    return d.sent(), [2, {
                        user: i,
                        userAuth: a
                    }]
            }
        })
    })
};
exports.prepProvisionUser = prepProvisionUser;