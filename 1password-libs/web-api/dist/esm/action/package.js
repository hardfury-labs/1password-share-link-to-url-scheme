var __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, a) {
            function i(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(i, u)
            }
            s((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, a, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function u(a) {
            return function(u) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (t = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < o[1]) {
                                    i.label = o[1], o = a;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(a);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        a = r.call(e, i)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, u])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, o, a = t.call(e),
            i = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = a.next()).done;) i.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = a.return) && t.call(a)
            } finally {
                if (o) throw o.error
            }
        }
        return i
    },
    __spread = this && this.__spread || function() {
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(__read(arguments[r]));
        return e
    };
import {
    first,
    flatten,
    map
} from "lodash-es";
import * as api from "../api";
import * as model from "../model";
import {
    User
} from "../model";
import * as parser from "../parser";
import {
    errorHandler as eh
} from "../util/error_handler";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    getRecoveryGroup
} from "./group";
import {
    getUserPubKeys
} from "./pub_key";
import {
    getPersonalVault,
    getVaults
} from "./vault";
import {
    patchVaultItems
} from "./vault_item";
var codeLocation = "action/package",
    errorHandler = eh(codeLocation),
    makePromise = mp(codeLocation);
export var processIncomingPackages = function(e) {
    return Promise.resolve().then(function() {
        return e.account && !e.account.hasPackages ? Promise.resolve(void 0) : (console.log("Processing Incoming Packages"), getReceivingVault(e, {
            mustReload: !0
        }).then(function(t) {
            return r = t, api.getIncomingPackages(e.session)
        }).then(function(r) {
            return Promise.all(map(r, function(r) {
                return api.getIncomingPackage(e.session, r.uuid)
            }))
        }).then(function(t) {
            return Promise.all(map(t, function(t) {
                return parser.packageFromAPI(e, r, t, function(r) {
                    return getUserPubKeys(e, r)
                })
            }))
        }).then(function(t) {
            return __awaiter(void 0, void 0, void 0, function() {
                var n, o, a, i, u;
                return __generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return [4, Promise.all(map(t, getValidPackageItem(e, r)))];
                        case 1:
                            return n = s.sent(), o = __read(n.reduce(function(e, r) {
                                var t = __read(e, 2),
                                    n = t[0],
                                    o = t[1];
                                return "string" == typeof r ? [__spread(n, [r]), o] : [n, __spread(o, [r])]
                            }, [
                                [],
                                []
                            ]), 2), a = o[0], i = o[1], a.length > 0 ? [4, api.removePackages(e.session, a)] : [3, 3];
                        case 2:
                            s.sent(), console.warn("Removed " + a.length + " invalid packages"), s.label = 3;
                        case 3:
                            return i.length > 0 ? [4, patchVaultItems(e, i, r)] : [3, 5];
                        case 4:
                            return u = s.sent(), console.log("Processed " + i.length + " package(s)"), [2, u];
                        case 5:
                            return [2, void 0]
                    }
                })
            })
        }));
        var r
    }).catch(errorHandler("processIncomingPackages"))
};
var getValidPackageItem = function(e, r) {
    return function(t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, o, a;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        if (!t.uuid) throw new Error("Really messed up package, missing UUID");
                        return t.item ? (n = t.item.details.documentAttributes) && !n.documentId ? (console.warn("Removing package with no document ID: " + t.uuid), [2, t.uuid]) : (o = t.item, a = o, [4, api.getVaultItemVersion(e.session, r.uuid, o.uuid)]) : (console.warn("Removing package with no item: " + t.uuid), [2, t.uuid]);
                    case 1:
                        return a.itemVersion = i.sent(), [2, o]
                }
            })
        })
    }
};
export var sendPackages = function(e, r, t) {
    return makePromise("sendPackages", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, o, a, i;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        return [4, getRecoveryGroup(e, {
                            attrs: model.Group.Attr.PubKey
                        })];
                    case 1:
                        return n = u.sent(), [4, getUserPubKeys(e, t)];
                    case 2:
                        return o = u.sent(), [4, createPackagesForPeople(e, r, o, n)];
                    case 3:
                        return a = u.sent(), i = a.map(parser.packageToAPI), [4, api.sendPackages(e.session, i)];
                    case 4:
                        return u.sent(), [2, a]
                }
            })
        })
    })
};
var createPackagesForPeople = function(e, r, t, n) {
    return makePromise("createPackagesForPeople", function() {
        var o = e.user;
        if (!o) throw new Error("Missing user");
        var a = flatten(t.map(function(e) {
            return r.map(function(r) {
                return new model.Package(o, e, r).encryptAndSign(n)
            })
        }));
        return Promise.all(a)
    })
};
export var removePackages = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            return t = r.map(function(e) {
                if (!e.uuid) throw new Error("Missing package UUID");
                return e.uuid
            }), [2, api.removePackages(e.session, t)]
        })
    })
};
export var getPackagesForVaultItem = function(e, r) {
    return Promise.resolve().then(function() {
        return api.getPackagesForVaultItem(e.session, r.vault.uuid, r.uuid).then(function(t) {
            return parser.packagesFromAPI(e, r.vault, t, function(r) {
                return getUserPubKeys(e, r)
            })
        })
    }).catch(errorHandler("getPackagesForVaultItem"))
};
export var getReceivingVault = function(e, r) {
    return Promise.resolve().then(function() {
        return e.user && User.isGuest(e.user) ? getVaults(e, {
            mustReload: !0
        }).then(function(e) {
            return first(e)
        }) : getPersonalVault(e, r)
    }).then(function(e) {
        if (!e) throw new Error("Current user does not have a receiving vault");
        return e
    }).catch(errorHandler("getReceivingVault"))
};
export var sendPackage = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2]
        })
    })
};
export var getIncomingPackages = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2]
        })
    })
};
export var getMoreIncomingPackages = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2]
        })
    })
};
export var markPackageAsRead = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.markPackageAsRead(e.session, r)]
        })
    })
};
export var removePackage = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.removePackageV2(e.session, r)]
        })
    })
};