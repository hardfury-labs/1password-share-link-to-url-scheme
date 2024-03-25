var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var s in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(s, i) {
            function o(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
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
                })).then(o, a)
            }
            u((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, s, i, o = {
            label: 0,
            sent: function() {
                if (1 & s[0]) throw s[1];
                return s[1]
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
                    for (; o;) try {
                        if (t = 1, n && (s = 2 & i[0] ? n.return : i[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, i[1])).done) return s;
                        switch (n = 0, s && (i = [2 & i[0], s.value]), i[0]) {
                            case 0:
                            case 1:
                                s = i;
                                break;
                            case 4:
                                return o.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(s = (s = o.trys).length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < s[1]) {
                                    o.label = s[1], s = i;
                                    break
                                }
                                if (s && o.label < s[2]) {
                                    o.label = s[2], o.ops.push(i);
                                    break
                                }
                                s[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = r.call(e, o)
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
                }([i, a])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, s, i = t.call(e),
            o = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = i.next()).done;) o.push(n.value)
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
        return o
    };
import * as api from "../api";
import {
    MFAResponse,
    DSecretResponse,
    DSecretProxyResponse,
    TOTPResponse,
    WebAuthnResponse,
    MustEnableResponse,
    CodeResponse,
    DuoResponse
} from "../api/auth";
import * as internal from "../internal";
import * as model from "../model";
import * as util from "../util";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    getAccountWithAttrs,
    getEntireAccount,
    performSignInAccountChecks
} from "./account";
import {
    clearAllCachesForContext
} from "./caches";
import {
    Context
} from "./context";
import {
    generateDSecretHmac
} from "./mfa";
import {
    setUserCookie
} from "./user_cookie";
export {
    MFAResponse,
    DuoResponse,
    DSecretResponse,
    DSecretProxyResponse,
    TOTPResponse,
    WebAuthnResponse,
    CodeResponse,
    MustEnableResponse
};
var codeLocation = "action/auth",
    makePromise = mp(codeLocation),
    OPX_SUPPORTS_SIGN_IN_EVENT = !1;
export var getOpxSupportsSignInEvent = function() {
    return OPX_SUPPORTS_SIGN_IN_EVENT
};
export var setOpxSupportsSignInEvent = function(e) {
    OPX_SUPPORTS_SIGN_IN_EVENT = e
};
export var signIn = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, s, i;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return e.account = void 0, e.userAuth = void 0, e.user = void 0, e.accountOverview = void 0, "muk" in r ? [4, signInWithMukAndSrpX(e, r, t)] : [3, 2];
                case 1:
                    return s = o.sent(), [3, 4];
                case 2:
                    return [4, signInWithMp(e, r, t)];
                case 3:
                    s = o.sent(), o.label = 4;
                case 4:
                    return "verified_session" !== (n = s).type ? [3, 6] : [4, handleSignInSuccess(e, t)];
                case 5:
                    return o.sent(), [2, {
                        type: "verified_context",
                        context: e
                    }];
                case 6:
                    return "email_changed" === n.type ? (i = n.newEmail, [2, signIn(e, __assign(__assign({}, r), {
                        email: i
                    }), t)]) : [2, n];
                case 7:
                    return [2]
            }
        })
    })
};
export var signInWithEmailAndPasswordGetUniverse = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, signIn(e, r, __assign(__assign({}, t), {
                shouldLoadUniverse: !0
            }))]
        })
    })
};
var signInWithMp = function(e, r, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n;
            return __generator(this, function(s) {
                return n = new model.OldUser({
                    email: r.email,
                    password: r.password,
                    secretKey: r.secretKey,
                    uuid: r.uuid
                }), e.user = n, [2, e.session.signin(n, t.allowReauthorization)]
            })
        })
    },
    signInWithMukAndSrpX = function(e, r, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, s, i, o, a, u;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        if (n = r.email, s = r.secretKey, i = r.muk, o = r.srpX, !i.alg) throw new Error("Missing MUK alg.");
                        if (!o) throw new Error("Missing SRP-x.");
                        if (!(a = model.SecretKey.validKeyFromInput(s))) throw new Error("Secret Key is invalid");
                        return u = new model.OldUser({
                            email: n,
                            secretKey: a
                        }), e.user = u, [4, e.user.importMasterKey(i.alg, util.base64urlToBytes(i.k))];
                    case 1:
                        return c.sent(), [2, e.session.signin(u, t.allowReauthorization, o)]
                }
            })
        })
    };
export var completeMFASignInWithTOTP = function(e, r, t, n) {
    return makePromise("completeMFASignInWithTOTP", function() {
        return e.session.verifyMFA({
            type: t,
            code: r
        })
    }).then(function(r) {
        return r.dsecret && e.user && (e.user.dSecret = r.dsecret), handleSignInSuccess(e, n)
    }).catch(function(r) {
        return getNewSessionForMfaReAttempt(e, r)
    })
};
export var completeMFASignInWithDSecretProxy = function(e, r, t, n) {
    return makePromise("completeMFASignInWithDSecretProxy", function() {
        return e.session.verifyMFA({
            type: "dSecretProxy",
            dshmac: r,
            deviceUuid: t
        })
    }).then(function(r) {
        return r.dsecret && e.user && (e.user.dSecret = r.dsecret), handleSignInSuccess(e, n)
    }).catch(function(r) {
        return getNewSessionForMfaReAttempt(e, r)
    })
};
export var completeMFASignInWithWebAuthn = function(e, r, t) {
    return makePromise("completeMFASignInWithWebAuthn", function() {
        return e.session.verifyMFA({
            type: "webAuthn",
            data: r
        })
    }).then(function(r) {
        return r.dsecret && e.user && (e.user.dSecret = r.dsecret), handleSignInSuccess(e, t)
    }).catch(function(r) {
        return getNewSessionForMfaReAttempt(e, r)
    })
};
export var completeMFASignInWithDSecret = function(e, r, t) {
    return makePromise("completeMFASignInWithDSecret", function() {
        e.user && (e.user.dSecret = r);
        var t = generateDSecretHmac(r, e.session.sessionID);
        return e.session.verifyMFA({
            type: "dSecret",
            dshmac: t
        })
    }).then(function() {
        return handleSignInSuccess(e, t)
    }).catch(function(r) {
        return util.errors.isClientError(r, 110) && e.user && (e.user.dSecret = void 0), getNewSessionForMfaReAttempt(e, r)
    })
};
export var completeMFASignInWithDuo = function(e, r, t) {
    return makePromise("completeMFASignInWithDuo", function() {
        return e.session.verifyMFA(r)
    }).then(function() {
        return handleSignInSuccess(e, t)
    }).catch(function(r) {
        return getNewSessionForMfaReAttempt(e, r)
    })
};
export var completeMFASignInWithEnable = function(e, r, t) {
    return makePromise("completeMFASignInWithEnable", function() {
        return e.session.enableMFAWithAuth(r)
    }).then(function(r) {
        return r.dsecret && e.user && (e.user.dSecret = r.dsecret), handleSignInSuccess(e, t)
    }).catch(function(r) {
        return getNewSessionForMfaReAttempt(e, r)
    })
};
var getNewSessionForMfaReAttempt = function(e, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (!e.session || !e.session.auth || !e.user) throw new Error("Missing auth or user data.");
                        return t = e.session.auth.srpX, [4, e.session.signin(e.user, !1, t)];
                    case 1:
                        if ("mfa_required" === n.sent().type) throw r;
                        return [2]
                }
            })
        })
    },
    handleSignInSuccess = function(e, r) {
        return makePromise("handleSignInSuccess", function() {
            var t = e.user;
            if (!t) return Promise.reject(new Error("Missing user"));
            var n = t.secretKey && model.SecretKey.asReadableString(t.secretKey);
            return (r.shouldLoadUniverse ? getEntireAccount(e, ["groups"]) : getAccountWithAttrs(e, ["me", "me.memberships", "user-flags", "account-flags", "billing", "tier", "promotions"])).then(function(n) {
                return performSignInAccountChecks(e, n, t, r.translators)
            }).then(function() {
                return r.shouldLoadUniverse ? addSigningKeysIfNeeded(e) : Promise.resolve()
            }).then(function() {
                if (!e.session.serverConfig) throw new Error("Missing server config");
                e.notifier.connect(e.session.serverConfig.notifier)
            }).then(function() {
                if (e.nc.emit(util.notification.SignedIn), OPX_SUPPORTS_SIGN_IN_EVENT && e.account && n && t.password && !r.suppressClientNotifications) {
                    var s = {
                        accountKey: n,
                        accountUuid: e.account.uuid,
                        domain: e.account.urlHost(e.config.server),
                        email: t.email,
                        masterPassword: t.password,
                        userUuid: t.uuid,
                        deviceIsPublic: r.isDesignatedAsPublic ? "true" : "false"
                    };
                    util.config.device && util.config.device.fromDeviceInit && t.dSecret && (s.dSecret = t.dSecret), r.authOnly && (console.log("handleSignInSuccess with authOnly"), s.authOnly = !0);
                    var i = function() {
                        console.log("handleSignInSuccess dispatching B5SignInSucceeded event"), document.dispatchEvent(new CustomEvent("B5SignInSucceeded", {
                            bubbles: !1,
                            cancelable: !1,
                            detail: s
                        }))
                    };
                    r.authOnly ? setUserCookie(e).catch(function(e) {
                        console.error("Setting account cookie failed.", e)
                    }).then(function() {
                        i()
                    }).catch(function() {}) : i()
                }
                t.password = void 0
            })
        })
    },
    addSigningKeysIfNeeded = function(e) {
        return makePromise("addSigningKeysIfNeeded", function() {
            var r = e.user;
            if (!r) throw new Error("Missing user.");
            var t = r.activeKeyset;
            if (!t) throw new Error("Missing user's active keyset.");
            if (!t.hasSigningKeys()) return console.log("Generating signing keys"), t.generateSigningKeys().then(function() {
                return r.encryptActiveKeysetWithMasterKey()
            }).then(function(r) {
                return internal.migrateKeyset(e.session, r)
            }).then(function() {
                console.log("Successfully added signing keys")
            })
        })
    };
export var signOut = function(e) {
    return makePromise("signOut", function() {
        return clearAllCachesForContext(e), api.signOut(e.session).catch(function(e) {
            console.error("signout failed:", e)
        }).then(function() {
            e.nc.emit(util.notification.SignedOut)
        })
    })
};
export var initialize = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, s;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    if (1 !== r) throw new Error("Invalid API version");
                    if (!(t && t.accountKey && t.email && t.masterKey && t.masterKey.alg && t.masterKey.k && t.serverConfig && t.serverConfig.notifier && t.sessionKey && t.sessionKey.k && t.sessionKey.kid)) throw new Error("Invalid details object");
                    if (!(n = model.SecretKey.validKeyFromInput(t.accountKey))) throw new Error("Invalid Secret Key");
                    e.user = new model.OldUser({
                        email: t.email,
                        secretKey: n
                    }), i.label = 1;
                case 1:
                    return i.trys.push([1, 5, , 6]), [4, e.user.importMasterKey(t.masterKey.alg, util.base64urlToBytes(t.masterKey.k))];
                case 2:
                    return i.sent(), [4, e.session.initialize({
                        rawSessionKey: util.base64urlToBytes(t.sessionKey.k),
                        requestID: t.requestID,
                        serverConfig: t.serverConfig,
                        sessionID: t.sessionKey.kid
                    })];
                case 3:
                    return i.sent(), [4, getEntireAccount(e, ["groups"])];
                case 4:
                    if (i.sent(), !e.session.serverConfig) throw new Error("Missing server config");
                    return e.notifier.connect(e.session.serverConfig.notifier), e.nc.emit(util.notification.SessionInitialized), [2, e];
                case 5:
                    throw s = i.sent(), e.nc.emit(util.notification.SessionInitError, s), s;
                case 6:
                    return [2]
            }
        })
    })
};
export var getInitializationExportFromNewContext = function(e) {
    return makePromise("getInitializationExportFromNewContext", function() {
        return createNewContext(e).then(function(e) {
            var r = e.user;
            if (!r) return Promise.reject(new Error("Missing user"));
            var t = r.secretKey && model.SecretKey.asReadableString(r.secretKey);
            if (!t) return Promise.reject(new Error("Missing Secret Key"));
            if (!r.masterKey || !r.masterKey.jwk) return Promise.reject(new Error("Missing master key"));
            if (!e.session.sessionKey || !e.session.sessionKey.jwk) return Promise.reject(new Error("Missing session key"));
            if (!e.session.serverConfig) throw new Error("Missing server config");
            return Promise.resolve({
                accountKey: t,
                email: r.email,
                masterKey: r.masterKey.jwk,
                requestID: e.session.requestID,
                serverConfig: {
                    notifier: e.session.serverConfig.notifier
                },
                sessionKey: e.session.sessionKey.jwk
            })
        })
    })
};
export var createNewContext = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, t, n, s, i, o, a, u;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    if (r = new Context(e.config), !(t = e.user)) throw new Error("Missing current user");
                    if (r.user = new model.OldUser({
                            email: t.email,
                            secretKey: t.secretKey,
                            uuid: t.uuid
                        }), r.user.dSecret = t.dSecret, r.user.masterKey = t.masterKey, !e.session || !e.session.auth) throw new Error("Auth info not available.");
                    return n = e.session.auth.srpX, [4, r.session.signin(r.user, !1, n)];
                case 1:
                    if ("mfa_required" !== (s = c.sent()).type) return [3, 4];
                    if (i = s.details, !(null === (a = i.dsecret) || void 0 === a ? void 0 : a.enabled)) return [3, 3];
                    if (!(o = null === (u = r.user) || void 0 === u ? void 0 : u.dSecret)) throw new Error("No dSecret available.");
                    return [4, r.session.verifyMFA({
                        type: "dSecret",
                        dshmac: generateDSecretHmac(o, r.session.sessionID)
                    })];
                case 2:
                    return c.sent(), [3, 4];
                case 3:
                    throw new Error("Unable to complete MFA, dSecret option not available.");
                case 4:
                    return [2, r]
            }
        })
    })
};
export var getMukSrpXCredentials = function(e) {
    if (e.isSignedIn() && (void 0 !== e.user && void 0 !== e.user.secretKey && void 0 !== e.user.masterKey && void 0 !== e.user.masterKey.jwk && e.session.auth)) return {
        email: e.user.email,
        muk: e.user.masterKey.jwk,
        secretKey: model.SecretKey.asReadableString(e.user.secretKey),
        srpX: e.session.auth.srpX
    }
};
export var updateLocalCredentials = function(e, r) {
    var t = r.currentPassword,
        n = r.newPassword,
        s = r.generateNewSecretKey,
        i = void 0 !== s && s,
        o = r.generateNewKeyset,
        a = void 0 !== o && o;
    return __awaiter(void 0, void 0, void 0, function() {
        var r, s, o, u, c, l, d;
        return __generator(this, function(f) {
            switch (f.label) {
                case 0:
                    if (!e.user) throw new Error("Active user is missing");
                    if (r = e.user, !e.user.secretKey) throw new Error("Active user is missing secretKey");
                    if (!n && !i && !a) throw new Error("Nothing to do");
                    s = {
                        oldSecretKey: e.user.secretKey,
                        oldMasterKey: e.user.masterKey,
                        oldActiveKeyset: e.user.activeKeyset,
                        oldUserAuth: e.userAuth
                    }, f.label = 1;
                case 1:
                    return f.trys.push([1, 6, , 7]), [4, verifyMasterPassword(e, t)];
                case 2:
                    return f.sent(), o = i ? model.SecretKey.generate() : s.oldSecretKey, r.secretKey = o, r.password = n, u = e, [4, model.Auth.generate({
                        email: r.email,
                        password: n,
                        secretKey: o
                    })];
                case 3:
                    return u.userAuth = f.sent(), c = [r.deriveMasterKey()], a && c.push(r.generateNewKeyset()), [4, Promise.all(c)];
                case 4:
                    return f.sent(), [4, r.encryptActiveKeysetWithMasterKey()];
                case 5:
                    return l = f.sent(), r.password = void 0, [2, [l, s]];
                case 6:
                    throw d = f.sent(), rollBackAuth(e, r, s), d;
                case 7:
                    return [2]
            }
        })
    })
};
export var changeMasterPassword = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n, s;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, updateLocalCredentials(e, r)];
                case 1:
                    return t = __read.apply(void 0, [i.sent(), 2]), n = t[0], s = t[1], [4, postUpdatedCredentials(e, n, s)];
                case 2:
                    return i.sent(), [2]
            }
        })
    })
};
export var postUpdatedCredentials = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, s, i, o, a;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    if (!e.user) throw new Error("Active user is missing");
                    n = e.user, u.label = 1;
                case 1:
                    if (u.trys.push([1, 3, , 4]), !(s = e.userAuth)) throw new Error("User's auth info is missing");
                    if (i = {
                            email: n.email,
                            auth: model.Auth.getForUpload(s),
                            activeKeyset: r
                        }, !(o = n.secretKey)) throw new Error("Missing user's Secret Key");
                    return o.id !== t.oldSecretKey.id && (i.accountKeyFormat = o.format, i.accountKeyUuid = o.id), n.archivedKeysets.length > 0 && (i.archivedKeyset = n.archivedKeysets[0]), [4, api.submitNewUserAuth(e.session, i)];
                case 2:
                    return [2, u.sent()];
                case 3:
                    throw a = u.sent(), rollBackAuth(e, n, t), a;
                case 4:
                    return [2]
            }
        })
    })
};
var rollBackAuth = function(e, r, t) {
    r.password = void 0, r.masterKey = t.oldMasterKey, r.activeKeyset = t.oldActiveKeyset, r.secretKey = t.oldSecretKey, e.userAuth = t.oldUserAuth
};
export var verifyMasterPassword = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n, s, i, o, a;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    if (!(t = e.user)) throw new Error("User is missing");
                    if (n = t.masterKey, t.password = r, !n || !n.jwk) throw new Error("Missing current master key");
                    if (s = n.jwk, i = n.derivation, !s.alg) throw new Error("Key algorithm is missing");
                    u.label = 1;
                case 1:
                    return u.trys.push([1, 3, , 4]), [4, t.deriveMasterKey(i)];
                case 2:
                    if (o = u.sent(), t.password = void 0, !o.jwk || o.jwk.k !== s.k) throw new util.errors.ClientError(102, "Incorrect Master Password");
                    return [3, 4];
                case 3:
                    throw a = u.sent(), t.masterKey = n, t.password = void 0, a;
                case 4:
                    return [2]
            }
        })
    })
};
export var beginChangeEmail = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, api.beginChangeEmail(e.session, r)];
                case 1:
                    return t.sent(), [2]
            }
        })
    })
};
export var promptConfirmChangeEmail = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 3]), [4, api.promptConfirmChangeEmail(e.session)];
                case 1:
                    return t.sent(), [3, 3];
                case 2:
                    throw r = t.sent(), console.error("[promptConfirmChangeEmail] Failed to send email change token:", r), r;
                case 3:
                    return [2]
            }
        })
    })
};
export var completeChangeEmail = function(e, r, t, n) {
    return makePromise("completeChangeEmail", function() {
        if (!e.user) throw new Error("User is missing");
        var s = e.user,
            i = s.email,
            o = e.userAuth,
            a = s.masterKey,
            u = s.activeKeyset;
        return verifyMasterPassword(e, t).then(function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var n;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return s.email = r, s.password = t, s.secretKey ? (n = e, [4, model.Auth.generate({
                                email: r,
                                password: t,
                                secretKey: s.secretKey
                            })]) : [2, Promise.reject(new Error("Missing Secret Key"))];
                        case 1:
                            return n.userAuth = i.sent(), [2, s.deriveMasterKey()]
                    }
                })
            })
        }).then(function() {
            return s.encryptActiveKeysetWithMasterKey()
        }).then(function(t) {
            if (!e.userAuth) throw new Error("User's auth info is missing");
            var s = {
                email: r,
                auth: model.Auth.getForUpload(e.userAuth),
                activeKeyset: t
            };
            return api.completeChangeEmail(e.session, s, n)
        }).then(function() {
            s.password = void 0
        }).catch(function(r) {
            throw s.email = i, s.masterKey = a, s.activeKeyset = u, s.password = void 0, e.userAuth = o, r
        })
    })
};
export var deleteDevice = function(e, r, t) {
    return api.deleteDevice(e.session, r.uuid, t)
};
export var deleteInactiveDevices = function(e) {
    return api.deleteInactiveDevices(e.session)
};
export var clearDeviceDSecret = function(e, r) {
    return api.clearDeviceDSecret(e.session, r.uuid)
};