"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
        return __setModuleDefault(t, e), t
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, s) {
            function o(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function a(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function u(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, a)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, s, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function a(s) {
            return function(a) {
                return function(s) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                        switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                            case 0:
                            case 1:
                                i = s;
                                break;
                            case 4:
                                return o.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = s[1], s = [0];
                                continue;
                            case 7:
                                s = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                    o.label = s[1];
                                    break
                                }
                                if (6 === s[0] && o.label < i[1]) {
                                    o.label = i[1], i = s;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(s);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        s = t.call(e, o)
                    } catch (e) {
                        s = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, a])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, s = r.call(e),
            o = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = s.next()).done;) o.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = s.return) && r.call(s)
            } finally {
                if (i) throw i.error
            }
        }
        return o
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clearDeviceDSecret = exports.deleteInactiveDevices = exports.deleteDevice = exports.completeChangeEmail = exports.promptConfirmChangeEmail = exports.beginChangeEmail = exports.verifyMasterPassword = exports.postUpdatedCredentials = exports.changeMasterPassword = exports.updateLocalCredentials = exports.getMukSrpXCredentials = exports.createNewContext = exports.getInitializationExportFromNewContext = exports.initialize = exports.signOut = exports.completeMFASignInWithEnable = exports.completeMFASignInWithDuo = exports.completeMFASignInWithDSecret = exports.completeMFASignInWithWebAuthn = exports.completeMFASignInWithDSecretProxy = exports.completeMFASignInWithTOTP = exports.signInWithEmailAndPasswordGetUniverse = exports.signIn = exports.setOpxSupportsSignInEvent = exports.getOpxSupportsSignInEvent = exports.MustEnableResponse = exports.CodeResponse = exports.WebAuthnResponse = exports.TOTPResponse = exports.DSecretProxyResponse = exports.DSecretResponse = exports.DuoResponse = exports.MFAResponse = void 0;
var api = __importStar(require("../api")),
    auth_1 = require("../api/auth");
Object.defineProperty(exports, "MFAResponse", {
    enumerable: !0,
    get: function() {
        return auth_1.MFAResponse
    }
}), Object.defineProperty(exports, "DSecretResponse", {
    enumerable: !0,
    get: function() {
        return auth_1.DSecretResponse
    }
}), Object.defineProperty(exports, "DSecretProxyResponse", {
    enumerable: !0,
    get: function() {
        return auth_1.DSecretProxyResponse
    }
}), Object.defineProperty(exports, "TOTPResponse", {
    enumerable: !0,
    get: function() {
        return auth_1.TOTPResponse
    }
}), Object.defineProperty(exports, "WebAuthnResponse", {
    enumerable: !0,
    get: function() {
        return auth_1.WebAuthnResponse
    }
}), Object.defineProperty(exports, "MustEnableResponse", {
    enumerable: !0,
    get: function() {
        return auth_1.MustEnableResponse
    }
}), Object.defineProperty(exports, "CodeResponse", {
    enumerable: !0,
    get: function() {
        return auth_1.CodeResponse
    }
}), Object.defineProperty(exports, "DuoResponse", {
    enumerable: !0,
    get: function() {
        return auth_1.DuoResponse
    }
});
var internal = __importStar(require("../internal")),
    model = __importStar(require("../model")),
    util = __importStar(require("../util")),
    make_promise_1 = require("../util/make_promise"),
    account_1 = require("./account"),
    caches_1 = require("./caches"),
    context_1 = require("./context"),
    mfa_1 = require("./mfa"),
    user_cookie_1 = require("./user_cookie"),
    codeLocation = "action/auth",
    makePromise = make_promise_1.makePromise(codeLocation),
    OPX_SUPPORTS_SIGN_IN_EVENT = !1,
    getOpxSupportsSignInEvent = function() {
        return OPX_SUPPORTS_SIGN_IN_EVENT
    };
exports.getOpxSupportsSignInEvent = getOpxSupportsSignInEvent;
var setOpxSupportsSignInEvent = function(e) {
    OPX_SUPPORTS_SIGN_IN_EVENT = e
};
exports.setOpxSupportsSignInEvent = setOpxSupportsSignInEvent;
var signIn = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i, s;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return e.account = void 0, e.userAuth = void 0, e.user = void 0, e.accountOverview = void 0, "muk" in t ? [4, signInWithMukAndSrpX(e, t, r)] : [3, 2];
                case 1:
                    return i = o.sent(), [3, 4];
                case 2:
                    return [4, signInWithMp(e, t, r)];
                case 3:
                    i = o.sent(), o.label = 4;
                case 4:
                    return "verified_session" !== (n = i).type ? [3, 6] : [4, handleSignInSuccess(e, r)];
                case 5:
                    return o.sent(), [2, {
                        type: "verified_context",
                        context: e
                    }];
                case 6:
                    return "email_changed" === n.type ? (s = n.newEmail, [2, exports.signIn(e, __assign(__assign({}, t), {
                        email: s
                    }), r)]) : [2, n];
                case 7:
                    return [2]
            }
        })
    })
};
exports.signIn = signIn;
var signInWithEmailAndPasswordGetUniverse = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, exports.signIn(e, t, __assign(__assign({}, r), {
                shouldLoadUniverse: !0
            }))]
        })
    })
};
exports.signInWithEmailAndPasswordGetUniverse = signInWithEmailAndPasswordGetUniverse;
var signInWithMp = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n;
            return __generator(this, function(i) {
                return n = new model.OldUser({
                    email: t.email,
                    password: t.password,
                    secretKey: t.secretKey,
                    uuid: t.uuid
                }), e.user = n, [2, e.session.signin(n, r.allowReauthorization)]
            })
        })
    },
    signInWithMukAndSrpX = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, i, s, o, a, u;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        if (n = t.email, i = t.secretKey, s = t.muk, o = t.srpX, !s.alg) throw new Error("Missing MUK alg.");
                        if (!o) throw new Error("Missing SRP-x.");
                        if (!(a = model.SecretKey.validKeyFromInput(i))) throw new Error("Secret Key is invalid");
                        return u = new model.OldUser({
                            email: n,
                            secretKey: a
                        }), e.user = u, [4, e.user.importMasterKey(s.alg, util.base64urlToBytes(s.k))];
                    case 1:
                        return c.sent(), [2, e.session.signin(u, r.allowReauthorization, o)]
                }
            })
        })
    },
    completeMFASignInWithTOTP = function(e, t, r, n) {
        return makePromise("completeMFASignInWithTOTP", function() {
            return e.session.verifyMFA({
                type: r,
                code: t
            })
        }).then(function(t) {
            return t.dsecret && e.user && (e.user.dSecret = t.dsecret), handleSignInSuccess(e, n)
        }).catch(function(t) {
            return getNewSessionForMfaReAttempt(e, t)
        })
    };
exports.completeMFASignInWithTOTP = completeMFASignInWithTOTP;
var completeMFASignInWithDSecretProxy = function(e, t, r, n) {
    return makePromise("completeMFASignInWithDSecretProxy", function() {
        return e.session.verifyMFA({
            type: "dSecretProxy",
            dshmac: t,
            deviceUuid: r
        })
    }).then(function(t) {
        return t.dsecret && e.user && (e.user.dSecret = t.dsecret), handleSignInSuccess(e, n)
    }).catch(function(t) {
        return getNewSessionForMfaReAttempt(e, t)
    })
};
exports.completeMFASignInWithDSecretProxy = completeMFASignInWithDSecretProxy;
var completeMFASignInWithWebAuthn = function(e, t, r) {
    return makePromise("completeMFASignInWithWebAuthn", function() {
        return e.session.verifyMFA({
            type: "webAuthn",
            data: t
        })
    }).then(function(t) {
        return t.dsecret && e.user && (e.user.dSecret = t.dsecret), handleSignInSuccess(e, r)
    }).catch(function(t) {
        return getNewSessionForMfaReAttempt(e, t)
    })
};
exports.completeMFASignInWithWebAuthn = completeMFASignInWithWebAuthn;
var completeMFASignInWithDSecret = function(e, t, r) {
    return makePromise("completeMFASignInWithDSecret", function() {
        e.user && (e.user.dSecret = t);
        var r = mfa_1.generateDSecretHmac(t, e.session.sessionID);
        return e.session.verifyMFA({
            type: "dSecret",
            dshmac: r
        })
    }).then(function() {
        return handleSignInSuccess(e, r)
    }).catch(function(t) {
        return util.errors.isClientError(t, 110) && e.user && (e.user.dSecret = void 0), getNewSessionForMfaReAttempt(e, t)
    })
};
exports.completeMFASignInWithDSecret = completeMFASignInWithDSecret;
var completeMFASignInWithDuo = function(e, t, r) {
    return makePromise("completeMFASignInWithDuo", function() {
        return e.session.verifyMFA(t)
    }).then(function() {
        return handleSignInSuccess(e, r)
    }).catch(function(t) {
        return getNewSessionForMfaReAttempt(e, t)
    })
};
exports.completeMFASignInWithDuo = completeMFASignInWithDuo;
var completeMFASignInWithEnable = function(e, t, r) {
    return makePromise("completeMFASignInWithEnable", function() {
        return e.session.enableMFAWithAuth(t)
    }).then(function(t) {
        return t.dsecret && e.user && (e.user.dSecret = t.dsecret), handleSignInSuccess(e, r)
    }).catch(function(t) {
        return getNewSessionForMfaReAttempt(e, t)
    })
};
exports.completeMFASignInWithEnable = completeMFASignInWithEnable;
var getNewSessionForMfaReAttempt = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (!e.session || !e.session.auth || !e.user) throw new Error("Missing auth or user data.");
                        return r = e.session.auth.srpX, [4, e.session.signin(e.user, !1, r)];
                    case 1:
                        if ("mfa_required" === n.sent().type) throw t;
                        return [2]
                }
            })
        })
    },
    handleSignInSuccess = function(e, t) {
        return makePromise("handleSignInSuccess", function() {
            var r = e.user;
            if (!r) return Promise.reject(new Error("Missing user"));
            var n = r.secretKey && model.SecretKey.asReadableString(r.secretKey);
            return (t.shouldLoadUniverse ? account_1.getEntireAccount(e, ["groups"]) : account_1.getAccountWithAttrs(e, ["me", "me.memberships", "user-flags", "account-flags", "billing", "tier", "promotions"])).then(function(n) {
                return account_1.performSignInAccountChecks(e, n, r, t.translators)
            }).then(function() {
                return t.shouldLoadUniverse ? addSigningKeysIfNeeded(e) : Promise.resolve()
            }).then(function() {
                if (!e.session.serverConfig) throw new Error("Missing server config");
                e.notifier.connect(e.session.serverConfig.notifier)
            }).then(function() {
                if (e.nc.emit(util.notification.SignedIn), OPX_SUPPORTS_SIGN_IN_EVENT && e.account && n && r.password && !t.suppressClientNotifications) {
                    var i = {
                        accountKey: n,
                        accountUuid: e.account.uuid,
                        domain: e.account.urlHost(e.config.server),
                        email: r.email,
                        masterPassword: r.password,
                        userUuid: r.uuid,
                        deviceIsPublic: t.isDesignatedAsPublic ? "true" : "false"
                    };
                    util.config.device && util.config.device.fromDeviceInit && r.dSecret && (i.dSecret = r.dSecret), t.authOnly && (console.log("handleSignInSuccess with authOnly"), i.authOnly = !0);
                    var s = function() {
                        console.log("handleSignInSuccess dispatching B5SignInSucceeded event"), document.dispatchEvent(new CustomEvent("B5SignInSucceeded", {
                            bubbles: !1,
                            cancelable: !1,
                            detail: i
                        }))
                    };
                    t.authOnly ? user_cookie_1.setUserCookie(e).catch(function(e) {
                        console.error("Setting account cookie failed.", e)
                    }).then(function() {
                        s()
                    }).catch(function() {}) : s()
                }
                r.password = void 0
            })
        })
    },
    addSigningKeysIfNeeded = function(e) {
        return makePromise("addSigningKeysIfNeeded", function() {
            var t = e.user;
            if (!t) throw new Error("Missing user.");
            var r = t.activeKeyset;
            if (!r) throw new Error("Missing user's active keyset.");
            if (!r.hasSigningKeys()) return console.log("Generating signing keys"), r.generateSigningKeys().then(function() {
                return t.encryptActiveKeysetWithMasterKey()
            }).then(function(t) {
                return internal.migrateKeyset(e.session, t)
            }).then(function() {
                console.log("Successfully added signing keys")
            })
        })
    },
    signOut = function(e) {
        return makePromise("signOut", function() {
            return caches_1.clearAllCachesForContext(e), api.signOut(e.session).catch(function(e) {
                console.error("signout failed:", e)
            }).then(function() {
                e.nc.emit(util.notification.SignedOut)
            })
        })
    };
exports.signOut = signOut;
var initialize = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    if (1 !== t) throw new Error("Invalid API version");
                    if (!(r && r.accountKey && r.email && r.masterKey && r.masterKey.alg && r.masterKey.k && r.serverConfig && r.serverConfig.notifier && r.sessionKey && r.sessionKey.k && r.sessionKey.kid)) throw new Error("Invalid details object");
                    if (!(n = model.SecretKey.validKeyFromInput(r.accountKey))) throw new Error("Invalid Secret Key");
                    e.user = new model.OldUser({
                        email: r.email,
                        secretKey: n
                    }), s.label = 1;
                case 1:
                    return s.trys.push([1, 5, , 6]), [4, e.user.importMasterKey(r.masterKey.alg, util.base64urlToBytes(r.masterKey.k))];
                case 2:
                    return s.sent(), [4, e.session.initialize({
                        rawSessionKey: util.base64urlToBytes(r.sessionKey.k),
                        requestID: r.requestID,
                        serverConfig: r.serverConfig,
                        sessionID: r.sessionKey.kid
                    })];
                case 3:
                    return s.sent(), [4, account_1.getEntireAccount(e, ["groups"])];
                case 4:
                    if (s.sent(), !e.session.serverConfig) throw new Error("Missing server config");
                    return e.notifier.connect(e.session.serverConfig.notifier), e.nc.emit(util.notification.SessionInitialized), [2, e];
                case 5:
                    throw i = s.sent(), e.nc.emit(util.notification.SessionInitError, i), i;
                case 6:
                    return [2]
            }
        })
    })
};
exports.initialize = initialize;
var getInitializationExportFromNewContext = function(e) {
    return makePromise("getInitializationExportFromNewContext", function() {
        return exports.createNewContext(e).then(function(e) {
            var t = e.user;
            if (!t) return Promise.reject(new Error("Missing user"));
            var r = t.secretKey && model.SecretKey.asReadableString(t.secretKey);
            if (!r) return Promise.reject(new Error("Missing Secret Key"));
            if (!t.masterKey || !t.masterKey.jwk) return Promise.reject(new Error("Missing master key"));
            if (!e.session.sessionKey || !e.session.sessionKey.jwk) return Promise.reject(new Error("Missing session key"));
            if (!e.session.serverConfig) throw new Error("Missing server config");
            return Promise.resolve({
                accountKey: r,
                email: t.email,
                masterKey: t.masterKey.jwk,
                requestID: e.session.requestID,
                serverConfig: {
                    notifier: e.session.serverConfig.notifier
                },
                sessionKey: e.session.sessionKey.jwk
            })
        })
    })
};
exports.getInitializationExportFromNewContext = getInitializationExportFromNewContext;
var createNewContext = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r, n, i, s, o, a, u;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    if (t = new context_1.Context(e.config), !(r = e.user)) throw new Error("Missing current user");
                    if (t.user = new model.OldUser({
                            email: r.email,
                            secretKey: r.secretKey,
                            uuid: r.uuid
                        }), t.user.dSecret = r.dSecret, t.user.masterKey = r.masterKey, !e.session || !e.session.auth) throw new Error("Auth info not available.");
                    return n = e.session.auth.srpX, [4, t.session.signin(t.user, !1, n)];
                case 1:
                    if ("mfa_required" !== (i = c.sent()).type) return [3, 4];
                    if (s = i.details, !(null === (a = s.dsecret) || void 0 === a ? void 0 : a.enabled)) return [3, 3];
                    if (!(o = null === (u = t.user) || void 0 === u ? void 0 : u.dSecret)) throw new Error("No dSecret available.");
                    return [4, t.session.verifyMFA({
                        type: "dSecret",
                        dshmac: mfa_1.generateDSecretHmac(o, t.session.sessionID)
                    })];
                case 2:
                    return c.sent(), [3, 4];
                case 3:
                    throw new Error("Unable to complete MFA, dSecret option not available.");
                case 4:
                    return [2, t]
            }
        })
    })
};
exports.createNewContext = createNewContext;
var getMukSrpXCredentials = function(e) {
    if (e.isSignedIn() && (void 0 !== e.user && void 0 !== e.user.secretKey && void 0 !== e.user.masterKey && void 0 !== e.user.masterKey.jwk && e.session.auth)) return {
        email: e.user.email,
        muk: e.user.masterKey.jwk,
        secretKey: model.SecretKey.asReadableString(e.user.secretKey),
        srpX: e.session.auth.srpX
    }
};
exports.getMukSrpXCredentials = getMukSrpXCredentials;
var updateLocalCredentials = function(e, t) {
    var r = t.currentPassword,
        n = t.newPassword,
        i = t.generateNewSecretKey,
        s = void 0 !== i && i,
        o = t.generateNewKeyset,
        a = void 0 !== o && o;
    return __awaiter(void 0, void 0, void 0, function() {
        var t, i, o, u, c, l, d;
        return __generator(this, function(p) {
            switch (p.label) {
                case 0:
                    if (!e.user) throw new Error("Active user is missing");
                    if (t = e.user, !e.user.secretKey) throw new Error("Active user is missing secretKey");
                    if (!n && !s && !a) throw new Error("Nothing to do");
                    i = {
                        oldSecretKey: e.user.secretKey,
                        oldMasterKey: e.user.masterKey,
                        oldActiveKeyset: e.user.activeKeyset,
                        oldUserAuth: e.userAuth
                    }, p.label = 1;
                case 1:
                    return p.trys.push([1, 6, , 7]), [4, exports.verifyMasterPassword(e, r)];
                case 2:
                    return p.sent(), o = s ? model.SecretKey.generate() : i.oldSecretKey, t.secretKey = o, t.password = n, u = e, [4, model.Auth.generate({
                        email: t.email,
                        password: n,
                        secretKey: o
                    })];
                case 3:
                    return u.userAuth = p.sent(), c = [t.deriveMasterKey()], a && c.push(t.generateNewKeyset()), [4, Promise.all(c)];
                case 4:
                    return p.sent(), [4, t.encryptActiveKeysetWithMasterKey()];
                case 5:
                    return l = p.sent(), t.password = void 0, [2, [l, i]];
                case 6:
                    throw d = p.sent(), rollBackAuth(e, t, i), d;
                case 7:
                    return [2]
            }
        })
    })
};
exports.updateLocalCredentials = updateLocalCredentials;
var changeMasterPassword = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, i;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return [4, exports.updateLocalCredentials(e, t)];
                case 1:
                    return r = __read.apply(void 0, [s.sent(), 2]), n = r[0], i = r[1], [4, exports.postUpdatedCredentials(e, n, i)];
                case 2:
                    return s.sent(), [2]
            }
        })
    })
};
exports.changeMasterPassword = changeMasterPassword;
var postUpdatedCredentials = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i, s, o, a;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    if (!e.user) throw new Error("Active user is missing");
                    n = e.user, u.label = 1;
                case 1:
                    if (u.trys.push([1, 3, , 4]), !(i = e.userAuth)) throw new Error("User's auth info is missing");
                    if (s = {
                            email: n.email,
                            auth: model.Auth.getForUpload(i),
                            activeKeyset: t
                        }, !(o = n.secretKey)) throw new Error("Missing user's Secret Key");
                    return o.id !== r.oldSecretKey.id && (s.accountKeyFormat = o.format, s.accountKeyUuid = o.id), n.archivedKeysets.length > 0 && (s.archivedKeyset = n.archivedKeysets[0]), [4, api.submitNewUserAuth(e.session, s)];
                case 2:
                    return [2, u.sent()];
                case 3:
                    throw a = u.sent(), rollBackAuth(e, n, r), a;
                case 4:
                    return [2]
            }
        })
    })
};
exports.postUpdatedCredentials = postUpdatedCredentials;
var rollBackAuth = function(e, t, r) {
        t.password = void 0, t.masterKey = r.oldMasterKey, t.activeKeyset = r.oldActiveKeyset, t.secretKey = r.oldSecretKey, e.userAuth = r.oldUserAuth
    },
    verifyMasterPassword = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i, s, o, a;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        if (!(r = e.user)) throw new Error("User is missing");
                        if (n = r.masterKey, r.password = t, !n || !n.jwk) throw new Error("Missing current master key");
                        if (i = n.jwk, s = n.derivation, !i.alg) throw new Error("Key algorithm is missing");
                        u.label = 1;
                    case 1:
                        return u.trys.push([1, 3, , 4]), [4, r.deriveMasterKey(s)];
                    case 2:
                        if (o = u.sent(), r.password = void 0, !o.jwk || o.jwk.k !== i.k) throw new util.errors.ClientError(102, "Incorrect Master Password");
                        return [3, 4];
                    case 3:
                        throw a = u.sent(), r.masterKey = n, r.password = void 0, a;
                    case 4:
                        return [2]
                }
            })
        })
    };
exports.verifyMasterPassword = verifyMasterPassword;
var beginChangeEmail = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, api.beginChangeEmail(e.session, t)];
                case 1:
                    return r.sent(), [2]
            }
        })
    })
};
exports.beginChangeEmail = beginChangeEmail;
var promptConfirmChangeEmail = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return r.trys.push([0, 2, , 3]), [4, api.promptConfirmChangeEmail(e.session)];
                case 1:
                    return r.sent(), [3, 3];
                case 2:
                    throw t = r.sent(), console.error("[promptConfirmChangeEmail] Failed to send email change token:", t), t;
                case 3:
                    return [2]
            }
        })
    })
};
exports.promptConfirmChangeEmail = promptConfirmChangeEmail;
var completeChangeEmail = function(e, t, r, n) {
    return makePromise("completeChangeEmail", function() {
        if (!e.user) throw new Error("User is missing");
        var i = e.user,
            s = i.email,
            o = e.userAuth,
            a = i.masterKey,
            u = i.activeKeyset;
        return exports.verifyMasterPassword(e, r).then(function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var n;
                return __generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return i.email = t, i.password = r, i.secretKey ? (n = e, [4, model.Auth.generate({
                                email: t,
                                password: r,
                                secretKey: i.secretKey
                            })]) : [2, Promise.reject(new Error("Missing Secret Key"))];
                        case 1:
                            return n.userAuth = s.sent(), [2, i.deriveMasterKey()]
                    }
                })
            })
        }).then(function() {
            return i.encryptActiveKeysetWithMasterKey()
        }).then(function(r) {
            if (!e.userAuth) throw new Error("User's auth info is missing");
            var i = {
                email: t,
                auth: model.Auth.getForUpload(e.userAuth),
                activeKeyset: r
            };
            return api.completeChangeEmail(e.session, i, n)
        }).then(function() {
            i.password = void 0
        }).catch(function(t) {
            throw i.email = s, i.masterKey = a, i.activeKeyset = u, i.password = void 0, e.userAuth = o, t
        })
    })
};
exports.completeChangeEmail = completeChangeEmail;
var deleteDevice = function(e, t, r) {
    return api.deleteDevice(e.session, t.uuid, r)
};
exports.deleteDevice = deleteDevice;
var deleteInactiveDevices = function(e) {
    return api.deleteInactiveDevices(e.session)
};
exports.deleteInactiveDevices = deleteInactiveDevices;
var clearDeviceDSecret = function(e, t) {
    return api.clearDeviceDSecret(e.session, t.uuid)
};
exports.clearDeviceDSecret = clearDeviceDSecret;