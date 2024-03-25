"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
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
        return new(r || (r = Promise))(function(s, o) {
            function i(e) {
                try {
                    a(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    a(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                var t;
                e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, u)
            }
            a((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, s, o, i = {
            label: 0,
            sent: function() {
                if (1 & s[0]) throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function u(o) {
            return function(u) {
                return function(o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, n && (s = 2 & o[0] ? n.return : o[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, o[1])).done) return s;
                        switch (n = 0, s && (o = [2 & o[0], s.value]), o[0]) {
                            case 0:
                            case 1:
                                s = o;
                                break;
                            case 4:
                                return i.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(s = (s = i.trys).length > 0 && s[s.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                                    i.label = o[1];
                                    break
                                }
                                if (6 === o[0] && i.label < s[1]) {
                                    i.label = s[1], s = o;
                                    break
                                }
                                if (s && i.label < s[2]) {
                                    i.label = s[2], i.ops.push(o);
                                    break
                                }
                                s[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        o = t.call(e, i)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        r = s = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, u])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.signOut = exports.extendSession = exports.submitNewUserAuth = exports.enableMFAWithAuth = exports.verifyMFA = exports.VerifyMFAResponse = exports.verifyAuth = exports.VerifyAuthResponse = exports.MFAResponse = exports.CodeResponse = exports.MustEnableResponse = exports.WebAuthnResponse = exports.DuoResponse = exports.TOTPResponse = exports.DSecretProxyResponse = exports.DSecretResponse = exports.postAuth = exports.SRPResponse = exports.startAuth = exports.StartAuthResponse = exports.AuthParams = void 0;
var t = __importStar(require("io-ts")),
    util_1 = require("../util"),
    util = __importStar(require("../util")),
    mfa_1 = require("./mfa");
exports.AuthParams = t.type({
    method: t.string,
    alg: t.string,
    iterations: t.number,
    salt: t.string
}), exports.StartAuthResponse = t.intersection([t.type({
    status: t.string
}), t.partial({
    sessionID: t.string,
    accountKeyFormat: t.string,
    accountKeyUuid: t.string,
    userAuth: exports.AuthParams,
    newDomain: t.string,
    newHost: t.string,
    newEmail: t.string
})]);
var startAuth = function(e, t) {
    var r = {
        headers: {
            "X-AgileBits-Client": util.config.clientDescriptor
        }
    };
    return e.post("/api/v3/auth/start", t, r).then(function(e) {
        if (!e) throw new Error("Server response is empty");
        return util_1.unsafeDecodeAs(exports.StartAuthResponse)(e)
    })
};
exports.startAuth = startAuth, exports.SRPResponse = t.type({
    sessionID: t.string,
    userB: t.string
});
var postAuth = function(e, t, r) {
    return e.post("/api/v1/auth", {
        sessionID: t,
        userA: r
    }).then(function(e) {
        if (!e) throw new Error("Server response is empty");
        return util_1.unsafeDecodeAs(exports.SRPResponse)(e)
    })
};
exports.postAuth = postAuth, exports.DSecretResponse = t.type({
    enabled: t.boolean
}), exports.DSecretProxyResponse = t.type({
    enabled: t.boolean
}), exports.TOTPResponse = t.type({
    enabled: t.boolean,
    digits: t.number
}), exports.DuoResponse = t.intersection([t.type({
    enabled: t.boolean,
    host: t.string,
    sigRequest: t.string
}), t.partial({
    authURL: t.string
})], "DuoResponse"), exports.WebAuthnResponse = t.type({
    enabled: t.boolean,
    keyHandles: t.array(t.string),
    challenge: t.string
}), exports.MustEnableResponse = t.intersection([t.type({
    enabled: t.boolean,
    availableTypes: util_1.withDefault(t.array(util_1.fromStringEnum(mfa_1.MFAType, "MFAType")), [])
}), t.partial({
    webAuthnChallenge: t.string
})]), exports.CodeResponse = t.readonly(t.type({
    enabled: t.boolean,
    digits: util_1.withDefault(t.number, 0),
    methods: t.array(t.string)
})), exports.MFAResponse = t.partial({
    dsecret: exports.DSecretResponse,
    dsecretProxy: exports.DSecretProxyResponse,
    totp: exports.TOTPResponse,
    duo: exports.DuoResponse,
    webAuthn: exports.WebAuthnResponse,
    mustEnable: exports.MustEnableResponse,
    code: exports.CodeResponse
}), exports.VerifyAuthResponse = t.intersection([t.type({
    notifier: t.string
}), t.partial({
    accountUuid: t.string,
    userUuid: t.string,
    serverVerifyHash: t.string,
    mfa: exports.MFAResponse
})]);
var verifyAuth = function(e, t) {
    return e.post("/api/v2/auth/verify", t).then(function(e) {
        if (!e) throw new Error("Server response is empty");
        try {
            return util_1.unsafeDecodeAs(exports.VerifyAuthResponse)(e)
        } catch (t) {
            return util_1.reportError(util_1.ExceptionType.ValidationError, [{
                file: "web-api/api/auth.ts",
                method: "verifyAuth"
            }]), e
        }
    })
};
exports.verifyAuth = verifyAuth, exports.VerifyMFAResponse = t.partial({
    dsecret: t.string
});
var verifyMFA = function(e, t) {
    return e.post("/api/v1/auth/mfa", t).then(function(e) {
        if (!e) throw new Error("Server response is empty");
        return util_1.unsafeDecodeAs(exports.VerifyMFAResponse)(e)
    })
};
exports.verifyMFA = verifyMFA;
var enableMFAWithAuth = function(e, t) {
    return e.post("/api/v1/auth/mfa/enable", t).then(function(e) {
        if (!e) throw new Error("Server response is empty");
        return util_1.unsafeDecodeAs(exports.VerifyMFAResponse)(e)
    })
};
exports.enableMFAWithAuth = enableMFAWithAuth;
var submitNewUserAuth = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, e.post("/api/v1/user/auth", t).then(function() {})]
        })
    })
};
exports.submitNewUserAuth = submitNewUserAuth;
var extendSession = function(e) {
    return e.put("/api/v1/session/touch").then(function() {})
};
exports.extendSession = extendSession;
var signOut = function(e) {
    return e.put("/api/v1/session/signout").then(function() {})
};
exports.signOut = signOut;