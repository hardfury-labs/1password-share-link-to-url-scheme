var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var i in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(i, a) {
            function s(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function o(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var r;
                e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(s, o)
            }
            u((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, i, a, s = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function o(a) {
            return function(o) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (t = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                        switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                            case 0:
                            case 1:
                                i = a;
                                break;
                            case 4:
                                return s.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                    s.label = a[1];
                                    break
                                }
                                if (6 === a[0] && s.label < i[1]) {
                                    s.label = i[1], i = a;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(a);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        a = r.call(e, s)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        t = i = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, o])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, i, a = t.call(e),
            s = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = a.next()).done;) s.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = a.return) && t.call(a)
            } finally {
                if (i) throw i.error
            }
        }
        return s
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
import {
    assign,
    compact,
    isEmpty,
    keyBy
} from "lodash-es";
import * as api from "../api";
import {
    User
} from "../model";
import * as model from "../model";
import * as parser from "../parser";
import * as util from "../util";
import {
    debouncePromise,
    makePromise as mp
} from "../util/make_promise";
import {
    invalidateCache
} from "./context";
import {
    getTeamMembersGroup
} from "./group";
import {
    findDecryptedKeyset
} from "./keyset";
import {
    getUserPubKeys,
    mergeInPubKeys
} from "./pub_key";
import * as cache from "./request_cache";
import {
    getEveryoneVault,
    getVault
} from "./vault";
var codeLocation = "action/user",
    makePromise = mp(codeLocation),
    DEFAULT_USER_API_BATCH_SIZE = 15,
    userCache = cache.create();
export var updateUser = function(e, r) {
    return makePromise("updateUser", function() {
        var t = r || e.user;
        return t ? api.updateUser(e.session, parser.personToAPI(t)) : Promise.reject(new Error("Missing user"))
    })
};
export var findCachedUser = function(e, r) {
    return userCache.getEntry(e.id, r)
};
export var setCachedUsers = function(e, r) {
    userCache = userCache.withOnlyEntries(e.id, keyBy(r, "uuid"))
};
export var clearUserCache = function() {
    userCache = cache.create()
};
export var clearUserCacheForContext = function(e) {
    userCache = userCache.withoutContext(e.id)
};
export var setActiveUser = function(e, r) {
    var t;
    userCache = userCache.withEntries(e.id, ((t = {})[r.uuid] = r, t))
};
var defaultGetPersonOptions = {
    attrs: model.Person.Attr.None,
    mustReload: !1
};
export var getPerson = function(e, r, t) {
    return makePromise("getPerson", function() {
        var n = util.getValidUserUuid(r);
        if (!n) throw new Error("Invalid user reference");
        var i = __assign(__assign({}, defaultGetPersonOptions), t),
            a = i.attrs,
            s = i.mustReload ? void 0 : userCache.getEntry(e.id, n, {
                attrMask: a
            });
        return s && s.hasAttrMask(a) ? s : debouncePromise([codeLocation, "getPerson", e.id, n, a], function() {
            return api.getUser(e.session, n, a).then(function(r) {
                var t = Date.now();
                return Promise.all([parser.parsePerson(e, r, a, s), t])
            }).then(function(r) {
                var t, i = __read(r, 2),
                    s = i[0],
                    o = i[1];
                return userCache = userCache.withEntries(e.id, ((t = {})[n] = s, t), {
                    attrMask: a,
                    timestamp: o
                }), s
            })
        })
    })
};
var getUsersWithPubKeys = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, getUserPubKeys(e, r)];
                case 1:
                    return t = n.sent(), [2, mergeInPubKeys(r, t)]
            }
        })
    })
};
export var confirmUsers = function(e, r, t) {
    return makePromise("confirmUsers", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return isEmpty(r) ? [2] : e.account && e.account.hasFeature.members ? e.account.teamMembersGroup ? [4, confirmWithTeamMembersGroup(e, r, t)] : [3, 2] : [3, 5];
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
                        return invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
                }
            })
        })
    })
};
var CONFIRM_BATCH_SIZE = 25,
    confirmWithTeamMembersGroup = function(e, r, t) {
        return makePromise("confirmWithTeamMembersGroup", function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var n, i;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, getTeamMembersGroup(e)];
                        case 1:
                            return n = a.sent(), i = function(r) {
                                return __awaiter(void 0, void 0, void 0, function() {
                                    var i, a, s;
                                    return __generator(this, function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, getUsersWithPubKeys(e, r)];
                                            case 1:
                                                return i = o.sent(), a = i.filter(function(e) {
                                                    return "R" === e.type
                                                }), [4, addMembersToGroup(e, a, n)];
                                            case 2:
                                                return s = o.sent(), t ? [4, confirmWithGroupMembershipsAndVaults(e, i, s, t)] : [3, 4];
                                            case 3:
                                                return o.sent(), [3, 6];
                                            case 4:
                                                return [4, confirmWithGroupMemberships(e, i, s)];
                                            case 5:
                                                o.sent(), o.label = 6;
                                            case 6:
                                                return [2, []]
                                        }
                                    })
                                })
                            }, [4, util.batchChain(i, CONFIRM_BATCH_SIZE, r)];
                        case 2:
                            return a.sent(), [2]
                    }
                })
            })
        })
    },
    addMembersToGroup = function(e, r, t) {
        return makePromise("addMembersToGroup", function() {
            if (!t.activeKeysetUuid) throw new Error("Missing group's active keyset UUID.");
            var n = findDecryptedKeyset(e, t.activeKeysetUuid);
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
            var n = compact(r.map(util.getValidUserUuid));
            return api.confirmUsersWithMemberships(e.session, n, t)
        })
    },
    confirmWithGroupMembershipsAndVaults = function(e, r, t, n) {
        return makePromise("confirmWithGroupMembershipsAndVaults", function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var i, a, s, o, u, c, l, f, m, d, h, v, p;
                return __generator(this, function(_) {
                    switch (_.label) {
                        case 0:
                            i = compact(r.map(function(e) {
                                return util.getValidUserUuid(e.uuid)
                            })), a = util.mapObject(function(e) {
                                return e.uuid
                            }, function(e) {
                                return e
                            }, r), s = [], _.label = 1;
                        case 1:
                            _.trys.push([1, 7, 8, 9]), o = __values(n), u = o.next(), _.label = 2;
                        case 2:
                            return u.done ? [3, 6] : (c = u.value, [4, getVault(e, c.vaultUuid, {
                                attrs: model.Vault.Attr.All
                            })]);
                        case 3:
                            if (!(l = _.sent())) throw new Error("Missing vault for " + c.vaultUuid);
                            return "R" !== (null === (f = a[c.accessorUuid]) || void 0 === f ? void 0 : f.type) ? [3, 5] : (d = (m = s).push, [4, model.VaultAccess.generate(l, __assign(__assign({}, f), {
                                accessorType: c.accessorType
                            }), {
                                acl: c.acl
                            })]);
                        case 4:
                            d.apply(m, [_.sent()]), _.label = 5;
                        case 5:
                            return u = o.next(), [3, 2];
                        case 6:
                            return [3, 9];
                        case 7:
                            return h = _.sent(), v = {
                                error: h
                            }, [3, 9];
                        case 8:
                            try {
                                u && !u.done && (p = o.return) && p.call(o)
                            } finally {
                                if (v) throw v.error
                            }
                            return [7];
                        case 9:
                            return [2, api.confirmUsersWithMembershipsAndVaultAccessList(e.session, i, t, s)]
                    }
                })
            })
        })
    },
    confirmWithEveryoneVault = function(e, r) {
        return makePromise("confirmWithEveryoneVault", function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var t, n, i, a, s, o;
                return __generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return [4, getEveryoneVault(e, {
                                attrs: model.Vault.Attr.All
                            })];
                        case 1:
                            if (!(t = u.sent())) throw new Error("Missing Everyone vault");
                            return [4, getUsersWithPubKeys(e, r)];
                        case 2:
                            return n = u.sent(), i = n.filter(function(e) {
                                return "R" === e.type
                            }).map(function(e) {
                                return model.VaultAccess.generate(t, __assign(__assign({}, e), {
                                    accessorType: "user"
                                }), {
                                    acl: model.vaultACL.RWE
                                })
                            }), [4, Promise.all(i)];
                        case 3:
                            return a = u.sent(), s = a.map(parser.vaultAccessToAPI), o = compact(n.map(util.getValidUserUuid)), [2, api.confirmUsersWithVaultAccessList(e.session, o, s)]
                    }
                })
            })
        })
    };
export var suspendUsers = function(e, r) {
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
                        return n.sent(), invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
                }
            })
        })
    })
};
export var markAwayForTravel = function(e, r) {
    return makePromise("markAwayForTravel", function() {
        return api.markAwayForTravel(e.session, r.map(util.getValidUserUuid)).then(function() {
            invalidateCache(e), e.nc.emit(util.notification.UsersChanged)
        })
    })
};
export var markBackFromTravel = function(e, r) {
    return makePromise("markBackFromTravel", function() {
        return api.markBackFromTravel(e.session, r.map(util.getValidUserUuid)).then(function() {
            invalidateCache(e), e.nc.emit(util.notification.UsersChanged)
        })
    })
};
export var beginUserRecovery = function(e, r) {
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
                        return n.sent(), invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
                }
            })
        })
    })
};
export var cancelUserRecovery = function(e, r) {
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
                        return n.sent(), invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
                }
            })
        })
    })
};
export var completeUserRecovery = function(e, r) {
    return makePromise("completeUserRecovery", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, n, i;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, getUserPubKeys(e, r)];
                    case 1:
                        return t = a.sent(), n = t.map(function(e) {
                            return e.uuid
                        }), i = function(r) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var i, a;
                                return __generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return [4, api.getRecoverableKeysForPeople(e.session, n)];
                                        case 1:
                                            return i = s.sent(), [4, parser.recoverableKeysForPeopleFromAPI(e, i)];
                                        case 2:
                                            return [4, s.sent().encryptForPeople(t)];
                                        case 3:
                                            return a = s.sent(), [4, api.completeRecovery(e.session, r, a)];
                                        case 4:
                                            return s.sent(), [2, []]
                                    }
                                })
                            })
                        }, [4, util.batchChain(i, DEFAULT_USER_API_BATCH_SIZE, n)];
                    case 2:
                        return a.sent(), invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
                }
            })
        })
    })
};
export var reactivateUsers = function(e, r) {
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
                        return n.sent(), invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
                }
            })
        })
    })
};
export var deleteUsers = function(e, r) {
    return makePromise("deleteUsers", function() {
        var t = r.filter(function(e) {
                return "1" === e.state
            }),
            n = r.filter(function(e) {
                return !User.canBeDeleted(e)
            }),
            i = Promise.resolve();
        return t.length > 0 && (i = i.then(function() {
            return cancelUserRecovery(e, t)
        })), n.length > 0 && (i = i.then(function() {
            return suspendUsers(e, n)
        })), i.then(function() {
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
            invalidateCache(e), e.nc.emit(util.notification.UsersChanged)
        })
    })
};
export var deletePerson = function(e, r, t) {
    return makePromise("deletePerson", function() {
        var n = Promise.resolve();
        return "1" === r.state && (n = n.then(function() {
            return cancelUserRecovery(e, [r])
        })), User.canBeDeleted(r) || (n = n.then(function() {
            return suspendUsers(e, [r])
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
            invalidateCache(e), e.nc.emit(util.notification.UsersChanged)
        })
    })
};
export var changeUserAvatar = function(e, r, t) {
    var n = __assign(__assign({}, parser.personToAPI(r)), {
        imageId: t
    });
    return api.changeUserAvatar(e.session, n)
};
export var changeUserName = function(e, r, t) {
    return makePromise("changeUserName", function() {
        var n = assign(parser.personToAPI(r), {
            name: t
        });
        return api.changeUserName(e.session, n)
    }).then(function() {
        invalidateCache(e), e.nc.emit(util.notification.UsersChanged)
    })
};
export var getRecoveryDetails = function(e, r, t) {
    return makePromise("getRecoveryDetails", function() {
        return api.getRecoveryDetails(e.session, r, t)
    })
};
export var prepProvisionUser = function(e, r, t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var i, a, s, o, u, c, l;
        return __generator(this, function(f) {
            switch (f.label) {
                case 0:
                    return i = {
                        email: r,
                        secretKey: model.SecretKey.generate(),
                        password: util.generateUUID()
                    }, a = new model.OldUser(__assign(__assign({}, i), {
                        uuid: n,
                        name: t,
                        language: (null === (l = e.user) || void 0 === l ? void 0 : l.language) || "en",
                        newsletterPrefs: 0
                    })), [4, model.Auth.generate(i)];
                case 1:
                    return s = f.sent(), u = (o = Promise).all, [4, a.deriveMasterKey()];
                case 2:
                    return c = [f.sent()], [4, a.generateNewKeyset()];
                case 3:
                    return [4, u.apply(o, [c.concat([f.sent()])])];
                case 4:
                    return f.sent(), [2, {
                        user: a,
                        userAuth: s
                    }]
            }
        })
    })
};