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
        return new(r || (r = Promise))(function(i, a) {
            function o(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, s)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, a, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function s(a) {
            return function(s) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                        switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                            case 0:
                            case 1:
                                i = a;
                                break;
                            case 4:
                                return o.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                    o.label = a[1];
                                    break
                                }
                                if (6 === a[0] && o.label < i[1]) {
                                    o.label = i[1], i = a;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(a);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        a = t.call(e, o)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, s])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.browserSupportsWebAuthn = exports.getWebAuthnAssertion = exports.makeWebAuthnCredential = exports.generateDSecretHmac = exports.verifyTotp = exports.getMFAConfig = exports.getMFA = exports.sendMFACode = exports.disableMFA = exports.enableMFA = exports.TOTP_KEY_HANDLE = exports.MFAType = exports.EMAIL_KEY_HANDLE = void 0;
var sjcl = __importStar(require("sjcl")),
    api = __importStar(require("../api")),
    mfa_1 = require("../api/mfa");
Object.defineProperty(exports, "EMAIL_KEY_HANDLE", {
    enumerable: !0,
    get: function() {
        return mfa_1.EMAIL_KEY_HANDLE
    }
}), Object.defineProperty(exports, "MFAType", {
    enumerable: !0,
    get: function() {
        return mfa_1.MFAType
    }
}), Object.defineProperty(exports, "TOTP_KEY_HANDLE", {
    enumerable: !0,
    get: function() {
        return mfa_1.TOTP_KEY_HANDLE
    }
});
var date_1 = require("../parser/date"),
    util = __importStar(require("../util")),
    make_promise_1 = require("../util/make_promise"),
    codeLocation = "action/mfa",
    makePromise = make_promise_1.makePromise(codeLocation),
    enableMFA = function(e, t) {
        return makePromise("enableMFA", function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var r;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, api.enableMFA(e.session, t)];
                        case 1:
                            return r = n.sent(), e.user && (r && r.dsecret && (e.user.dSecret = r.dsecret), e.user.hasMFAEnabled = !0), [2, null !== r && void 0 !== r ? r : void 0]
                    }
                })
            })
        })
    };
exports.enableMFA = enableMFA;
var disableMFA = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return n.trys.push([0, 2, , 3]), [4, api.disableMFA(e.session, t)];
                case 1:
                    return n.sent(), e.user && (e.user.dSecret = void 0, e.user.hasMFAEnabled = !1), [3, 3];
                case 2:
                    throw r = n.sent(), console.error("disableMFA failed: " + r), r;
                case 3:
                    return [2]
            }
        })
    })
};
exports.disableMFA = disableMFA;
var sendMFACode = function(e, t) {
    return makePromise("sendMFACode", function() {
        return api.sendMFACode(e.session, t)
    })
};
exports.sendMFACode = sendMFACode;
var getMFA = function(e) {
    return makePromise("getMFA", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, api.getMFA(e.session)];
                    case 1:
                        return [2, t.sent().map(function(e) {
                            return __assign(__assign({}, e), {
                                createdAt: date_1.dateFromAPI(e.createdAt),
                                updatedAt: date_1.dateFromAPI(e.updatedAt)
                            })
                        })]
                }
            })
        })
    })
};
exports.getMFA = getMFA;
var getMFAConfig = function(e) {
    return makePromise("getMFAConfig", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, api.getMFAConfig(e.session)]
            })
        })
    })
};
exports.getMFAConfig = getMFAConfig;
var verifyTotp = function(e, t) {
    return makePromise("verifyTotp", function() {
        return api.verifyTotp(e.session, t)
    })
};
exports.verifyTotp = verifyTotp;
var generateDSecretHmac = function(e, t) {
    var r = new sjcl.misc.hmac(sjcl.codec.base64url.toBits(e), sjcl.hash.sha256).encrypt(sjcl.codec.base32.toBits(t));
    return sjcl.codec.base64url.fromBits(r).slice(0, 8)
};
exports.generateDSecretHmac = generateDSecretHmac;
var makeWebAuthnCredential = function(e, t, r, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var i, a, o, s, u;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    if (!navigator.credentials || !navigator.credentials.create) throw new Error("Browser does not support WebAuthn.");
                    if (!e.user) throw new Error("Missing user");
                    return i = r.map(function(e) {
                        return {
                            type: "public-key",
                            id: util.base64urlToBytes(e)
                        }
                    }), [4, navigator.credentials.create({
                        publicKey: {
                            challenge: util.base64urlToBytes(n),
                            rp: {
                                id: e.config.server.split(":")[0],
                                name: "1Password"
                            },
                            user: {
                                id: util.str2ab(e.user.uuid),
                                name: e.user.email,
                                displayName: e.user.name
                            },
                            pubKeyCredParams: [{
                                type: "public-key",
                                alg: -7
                            }],
                            timeout: 6e4,
                            attestation: "none",
                            authenticatorSelection: {
                                authenticatorAttachment: "cross-platform",
                                userVerification: "discouraged"
                            },
                            excludeCredentials: i
                        }
                    })];
                case 1:
                    if (!(a = c.sent())) throw new Error("Credential is missing.");
                    return o = a.response, s = o.attestationObject, u = o.clientDataJSON, [2, {
                        type: mfa_1.MFAType.WebAuthn,
                        keyHandle: a.id,
                        keyValue: util.bytesToBase64url(new Uint8Array(s)),
                        keyName: t,
                        webAuthnClientData: util.bytesToBase64url(new Uint8Array(u))
                    }]
            }
        })
    })
};
exports.makeWebAuthnCredential = makeWebAuthnCredential;
var getWebAuthnAssertion = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i, a, o, s, u;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    if (!navigator.credentials || !navigator.credentials.get) throw Error;
                    if (0 === (n = t.map(function(e) {
                            return {
                                type: "public-key",
                                id: util.base64urlToBytes(e)
                            }
                        })).length) throw Error;
                    return [4, navigator.credentials.get({
                        publicKey: {
                            challenge: util.base64urlToBytes(r),
                            rpId: e.config.server.split(":")[0],
                            allowCredentials: n,
                            userVerification: "discouraged",
                            timeout: 6e4
                        }
                    })];
                case 1:
                    if (!(i = c.sent())) throw Error;
                    return a = i.response, o = a.signature, s = a.authenticatorData, u = a.clientDataJSON, [2, {
                        keyHandle: i.id,
                        signature: util.bytesToBase64url(new Uint8Array(o)),
                        authData: util.bytesToBase64url(new Uint8Array(s)),
                        clientData: util.bytesToBase64url(new Uint8Array(u))
                    }]
            }
        })
    })
};
exports.getWebAuthnAssertion = getWebAuthnAssertion;
var browserSupportsWebAuthn = function() {
    return !!(navigator.credentials && navigator.credentials.get && navigator.credentials.create && window.PublicKeyCredential)
};
exports.browserSupportsWebAuthn = browserSupportsWebAuthn;