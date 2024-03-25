var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, s = arguments.length; t < s; t++)
                for (var i in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, r, t, s) {
        return new(t || (t = Promise))(function(i, n) {
            function o(e) {
                try {
                    u(s.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function a(e) {
                try {
                    u(s.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function u(e) {
                var r;
                e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(o, a)
            }
            u((s = s.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, s, i, n, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n;

        function a(n) {
            return function(a) {
                return function(n) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (t = 1, s && (i = 2 & n[0] ? s.return : n[0] ? s.throw || ((i = s.return) && i.call(s), 0) : s.next) && !(i = i.call(s, n[1])).done) return i;
                        switch (s = 0, i && (n = [2 & n[0], i.value]), n[0]) {
                            case 0:
                            case 1:
                                i = n;
                                break;
                            case 4:
                                return o.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, s = n[1], n = [0];
                                continue;
                            case 7:
                                n = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                    o.label = n[1];
                                    break
                                }
                                if (6 === n[0] && o.label < i[1]) {
                                    o.label = i[1], i = n;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(n);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        n = r.call(e, o)
                    } catch (e) {
                        n = [6, e], s = 0
                    } finally {
                        t = i = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, a])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var s, i, n = t.call(e),
            o = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(s = n.next()).done;) o.push(s.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                s && !s.done && (t = n.return) && t.call(n)
            } finally {
                if (i) throw i.error
            }
        }
        return o
    };
import {
    merge,
    trimStart
} from "lodash-es";
import * as Qwest from "qwest";
import * as sjcl from "sjcl";
import * as api from "../api";
import * as model from "../model";
import * as util from "../util";
import {
    makePromise as mp
} from "../util/make_promise";
var codeLocation = "action/Session",
    makePromise = mp(codeLocation),
    MAC_URI_VERSION = "v1",
    HMAC_KEY_DATA = "He never wears a Mac, in the pouring rain. Very strange.",
    SESSION_REFRESH_INTERVAL = 6e5,
    SESSION_TTL = 21e5,
    logRequestStart = function(e) {
        var r = ["⬆️ " + e.httpMethod + " " + e.url, "Session: " + e.sessionId, "Request: " + e.requestId];
        console.log(r.join("\n"))
    },
    logRequestComplete = function(e, r, t) {
        var s = ["✅ " + e.httpMethod + " " + e.url, "Session: " + e.sessionId, "Request: " + e.requestId, "Time: " + Math.round(r - e.start) + " ms", "number" == typeof t && "Bytes: " + t];
        console.log(s.filter(function(e) {
            return "string" == typeof e
        }).join("\n"))
    },
    logRequestError = function(e, r, t) {
        var s = ["❌ (" + t + ") " + e.httpMethod + " " + e.url, "Session: " + e.sessionId, "Request: " + e.requestId, "Time: " + Math.round(r - e.start) + " ms"];
        console.log(s.join("\n"))
    },
    Session = function() {
        function e(r, t) {
            var s = this;
            this.clearSessionKey = function() {
                s._sessionKey = void 0
            }, this.refreshSession = function() {
                if (s.isSignedIn && s._lastRequest) {
                    var e = Date.now() - s._lastRequest;
                    e > SESSION_TTL ? s.nc.emit(util.notification.SessionExpired) : e > SESSION_REFRESH_INTERVAL && api.extendSession(s).catch(function(e) {})
                }
            }, this.setSessionID = function(e) {
                s._sessionID = e
            }, this.setLanguage = function(e) {
                merge(s._options, {
                    headers: {
                        "Accept-Language": e
                    }
                })
            }, this.importSessionKey = function(r) {
                return makePromise("importSessionKey", function() {
                    var t = model.createSymmetricKey(s._sessionID);
                    return t.importRawKey(model.JWK_ALG_A256GCM, r).then(function() {
                        return s._sessionKey = t, t.jwk ? (s._sessionHMAC = e.createSessionHMAC(t.jwk.k), Promise.resolve(void 0)) : Promise.reject(new Error("Missing JWK"))
                    })
                })
            }, this.calculateClientVerifyHash = function(e, r) {
                var t = sjcl.hash.sha256.hash(e),
                    s = sjcl.hash.sha256.hash(r),
                    i = sjcl.bitArray.concat(t, s),
                    n = sjcl.hash.sha256.hash(i),
                    o = new Uint8Array(sjcl.codec.bytes.fromBits(n));
                return util.bytesToBase64url(o)
            }, this.clientVerifyHash = function() {
                var e = s._secretKeyId,
                    r = s._sessionID;
                return e && r ? s.calculateClientVerifyHash(e, r) : ""
            }, this.calculateServerVerifyHash = function(e, r) {
                var t = sjcl.hash.sha256.hash(e),
                    s = sjcl.hash.sha256.hash(r),
                    i = sjcl.bitArray.concat(s, t),
                    n = sjcl.hash.sha256.hash(i),
                    o = new Uint8Array(sjcl.codec.bytes.fromBits(n));
                return util.bytesToBase64url(o)
            }, this.serverVerifyHash = function() {
                var e = s.clientVerifyHash(),
                    r = s._sessionID;
                return e && r ? s.calculateServerVerifyHash(e, r) : ""
            }, this.createMACHeaderValueForRequest = function(r, t) {
                return __awaiter(s, void 0, void 0, function() {
                    var s, i;
                    return __generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (!this._sessionHMAC) throw new Error("Missing session HMAC");
                                if (!this._sessionID) throw new Error("Missing session ID");
                                if (!this._requestId) throw new Error("Missing request ID");
                                return s = this._requestId++, i = e.getMACMessage(this._sessionID, r, t, s), [4, e.createMACHeaderValue(i, s, this._sessionHMAC)];
                            case 1:
                                return [2, [n.sent(), s]]
                        }
                    })
                })
            }, this._request = function(e, r, t, i, n) {
                return __awaiter(s, void 0, void 0, function() {
                    var s, o, a, u, c, h, l, d, f, _, y, p, m;
                    return __generator(this, function(v) {
                        switch (v.label) {
                            case 0:
                                return s = "/" === t[0] ? "https://" + this._host + t : t, o = new URL(s).host, a = "accounts." + util.getServerDomainFromAccountDomain(this._host), u = o === this._host || o === a, c = "", h = merge({}, this._options, n), l = h.headers || {}, this._sessionID && u ? this._sessionKey ? [4, this.createMACHeaderValueForRequest(r, s)] : [3, 2] : [3, 3];
                            case 1:
                                d = __read.apply(void 0, [v.sent(), 2]), f = d[0], _ = d[1], c = _, l["X-AgileBits-MAC"] = f, v.label = 2;
                            case 2:
                                l["X-AgileBits-Session-ID"] = this._sessionID, h = __assign(__assign({}, h), {
                                    headers: l
                                }), v.label = 3;
                            case 3:
                                return e && this._sessionKey && i ? [4, this._sessionKey.encrypt(util.json2ab(i))] : [3, 5];
                            case 4:
                                return p = v.sent(), [3, 6];
                            case 5:
                                p = i, v.label = 6;
                            case 6:
                                return y = p, this.isSignedIn && (this._lastRequest = Date.now()), m = {
                                    httpMethod: r,
                                    url: t,
                                    sessionId: this._sessionID || "[none]",
                                    requestId: c || util.generateRandomID(8),
                                    start: performance.now()
                                }, logRequestStart(m), [2, Qwest.map(r, s, y, h).then(this._handleQwestResponse(m), this._handleQwestError(m))]
                        }
                    })
                })
            }, this.encrypt = function(e) {
                return makePromise("encrypt", function() {
                    return s._sessionKey ? s._sessionKey.encrypt(util.json2ab(e)) : Promise.reject(new Error("Missing session key"))
                })
            }, this._handleQwestResponse = function(e) {
                return function(r, t) {
                    var i = performance.now();
                    return s._sessionKey && t && t.enc ? s._sessionKey.decrypt(t).then(function(r) {
                        return r.byteLength || (r = new Uint8Array(r)), logRequestComplete(e, i, r.byteLength), JSON.parse(util.ab2str(r))
                    }).catch(function(e) {
                        throw console.error("Failed to decrypt response", e), e
                    }) : (logRequestComplete(e, i), Promise.resolve(t))
                }
            }, this._handleQwestError = function(e) {
                return function(r, t, i) {
                    var n, o, a;
                    if (logRequestError(e, performance.now(), t.status), i && i.reason) throw new util.errors.ServerError(t.status, i.reason);
                    if (0 === t.status) throw new util.errors.ClientError(105, "The request took too long. Check your Internet connection and try again.");
                    if (429 === t.status) {
                        var u = t.getResponseHeader("X-Rate-Limit-Retry-In"),
                            c = u ? Number.parseInt(u, 10) : void 0,
                            h = new util.errors.ServerError(429);
                        throw h.waitLength = c, h
                    }
                    if (445 === t.status) throw new util.errors.ServerError(t.status, "deprecated");
                    try {
                        if (i && i.errorCode && i.errorMessage) a = new util.errors.LegacyServerError(i.errorCode, i.errorMessage);
                        else if ("arraybuffer" === t.responseType) {
                            var l = util.ab2str(i);
                            if (/<\?xml/.test(l) && DOMParser) {
                                var d = null === (o = null === (n = (new DOMParser).parseFromString(l, "text/xml").querySelectorAll("Message")[0]) || void 0 === n ? void 0 : n.childNodes[0]) || void 0 === o ? void 0 : o.nodeValue;
                                d && (a = new util.errors.LegacyServerError(900, d))
                            } else a = new util.errors.LegacyServerError(900, l)
                        }
                        if (!a) {
                            if (!t.status) throw r ? "string" == typeof r ? new Error(r) : r : i ? new Error("Empty qwest error (" + r + "), server error code (" + i.errorCode + "), and/or message (" + i.errorMessage + ")") : new Error("Empty qwest error (" + r + ") and response (" + JSON.stringify(i) + ")");
                            a = new util.errors.ServerError(t.status)
                        }
                        util.errors.isServerError(a, 102, 401) && s.isSignedIn && s.nc.emit(util.notification.SessionExpired)
                    } catch (e) {
                        throw console.error("Unknown error", e), new util.errors.LegacyServerError(900, e.message)
                    }
                    throw a
                }
            }, this._startAuth = function(e, r) {
                return __awaiter(s, void 0, void 0, function() {
                    var t, s, i, n, o, a;
                    return __generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                if (!util.config.device) throw new Error("Missing device identifier");
                                if (!e.secretKey) throw new Error("Missing Secret Key");
                                return this._sessionKey && console.warn("SessionKey already exist, will reset sessionKey and sessionID"), t = e.secretKey, s = util.config.device, this._requestId = 0, this._sessionHMAC = void 0, this.setSessionID(void 0), this._sessionKey = void 0, i = {
                                    email: e.email,
                                    skFormat: t.format,
                                    skid: t.id,
                                    deviceUuid: s.uuid,
                                    userUuid: e.uuid
                                }, [4, api.startAuth(this, i)];
                            case 1:
                                return (n = u.sent()).newHost ? [2, {
                                    type: "domain_changed",
                                    newHost: n.newHost
                                }] : n.newEmail ? [2, {
                                    type: "email_changed",
                                    newEmail: n.newEmail
                                }] : "device-not-registered" !== n.status ? [3, 4] : (this.setSessionID(n.sessionID), [4, api.addDevice(this, s)]);
                            case 2:
                                return u.sent(), o = {
                                    email: e.email,
                                    skFormat: t.format,
                                    skid: t.id,
                                    deviceUuid: s.uuid,
                                    userUuid: e.uuid
                                }, [4, api.startAuth(this, o)];
                            case 3:
                                return a = u.sent(), [2, this._handleStartAuthResponse(a, e)];
                            case 4:
                                return "device-deleted" !== n.status ? [3, 8] : r ? (this.setSessionID(n.sessionID), [4, api.reauthorizeDevice(this, s.uuid)]) : [3, 7];
                            case 5:
                                return u.sent(), o = {
                                    email: e.email,
                                    skFormat: t.format,
                                    skid: t.id,
                                    deviceUuid: s.uuid,
                                    userUuid: e.uuid
                                }, [4, api.startAuth(this, o)];
                            case 6:
                                return a = u.sent(), [2, this._handleStartAuthResponse(a, e)];
                            case 7:
                                throw new util.errors.ClientError(106, "This device has been deauthorized. Sign in again to reauthorize it.");
                            case 8:
                                return [2, this._handleStartAuthResponse(n, e)]
                        }
                    })
                })
            }, this._handleStartAuthResponse = function(e, r) {
                return __awaiter(s, void 0, void 0, function() {
                    return __generator(this, function(t) {
                        if (!e.accountKeyFormat) throw new Error("Invalid response, missing accountKeyFormat");
                        if (!e.accountKeyUuid) throw new Error("Invalid response, missing accountKeyUuid");
                        if (!e.sessionID) throw new Error("Invalid response, missing sessionID");
                        if (!e.userAuth) throw new Error("Invalid response, missing userAuth");
                        if (!r.secretKey) throw new util.errors.SecretKeyMissingError(e.accountKeyUuid);
                        if (r.secretKey.id !== e.accountKeyUuid || r.secretKey.format !== e.accountKeyFormat) throw new util.errors.SecretKeyIdOrFormatMismatchedError(e.accountKeyUuid, r.secretKey.id, e.accountKeyFormat, r.secretKey.format);
                        return [2, {
                            type: "auth_success",
                            secretKey: r.secretKey,
                            sessionID: e.sessionID,
                            authParams: e.userAuth
                        }]
                    })
                })
            }, this._performSrpExchange = function(e) {
                return makePromise("_performSRPExchange", function() {
                    return __awaiter(s, void 0, void 0, function() {
                        var r, t, s, i, n;
                        return __generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    if (!(r = this._sessionID)) throw new Error("Missing session ID");
                                    return t = model.Auth.generateA(e), s = t.bigA, i = t.littleA, [4, api.postAuth(this, r, s)];
                                case 1:
                                    return n = o.sent(), [2, model.Auth.computeRawKey({
                                        auth: e,
                                        littleA: i,
                                        bigA: s,
                                        bigB: n.userB,
                                        sessionId: r
                                    })]
                            }
                        })
                    })
                })
            }, this.initialize = function(e) {
                return __awaiter(s, void 0, void 0, function() {
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return this._isVerified = !0, this.setSessionID(e.sessionID), this._serverConfig = e.serverConfig, this._requestId = e.requestID, [4, this.importSessionKey(e.rawSessionKey)];
                            case 1:
                                return r.sent(), [2]
                        }
                    })
                })
            }, this.signin = function(e, r, t) {
                return __awaiter(s, void 0, void 0, function() {
                    var s, i, n;
                    return __generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return this._isVerified = !1, [4, this._startAuth(e, r)];
                            case 1:
                                return "auth_success" !== (s = o.sent()).type ? [2, s] : (this.setSessionID(s.sessionID), e.secretKey = s.secretKey, t ? (this._auth = {
                                    srpX: t,
                                    params: s.authParams
                                }, [3, 5]) : [3, 2]);
                            case 2:
                                return e.password ? (i = this, [4, model.Auth.generateWithParams({
                                    email: e.email,
                                    password: e.password,
                                    secretKey: e.secretKey
                                }, s.authParams)]) : [3, 4];
                            case 3:
                                return i._auth = o.sent(), [3, 5];
                            case 4:
                                throw new Error("Missing password or srpX");
                            case 5:
                                return this._secretKeyId = s.secretKey.id, this._requestId = 1, [4, this._performSrpExchange(this._auth)];
                            case 6:
                                return n = o.sent(), [4, this.importSessionKey(n)];
                            case 7:
                                return o.sent(), [2, this.verify()]
                        }
                    })
                })
            }, this.verify = function() {
                return __awaiter(s, void 0, void 0, function() {
                    var e, r, t, s, i;
                    return __generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (!this._sessionID) return [2, Promise.reject(new Error("Missing session ID"))];
                                e = this.clientVerifyHash(), r = this.serverVerifyHash(), t = {
                                    sessionID: this._sessionID,
                                    clientVerifyHash: e,
                                    client: util.config.clientDescriptor
                                }, util.config.device.name && (t.device = util.config.device), n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, api.verifyAuth(this, t)];
                            case 2:
                                if ((s = n.sent()).serverVerifyHash !== r) throw new util.errors.ClientError(900, "Failed to verify server.");
                                return this._serverConfig = s, s.mfa ? [2, {
                                    type: "mfa_required",
                                    details: s.mfa
                                }] : (this._isVerified = !0, [2, {
                                    type: "verified_session",
                                    session: this
                                }]);
                            case 3:
                                if (i = n.sent(), this._isVerified = !1, util.errors.isServerError(i, 102, 401)) throw new util.errors.ClientError(103, "Invalid email or password");
                                throw i;
                            case 4:
                                return [2]
                        }
                    })
                })
            }, this.verifyMFA = function(e) {
                return makePromise("verifyMFA", function() {
                    if (!s._sessionID) return Promise.reject(new Error("Missing session ID"));
                    var r = {
                        sessionID: s._sessionID,
                        client: util.config.clientDescriptor
                    };
                    switch (e.type) {
                        case "dSecret":
                            r.dsecret = {
                                dshmac: e.dshmac
                            };
                            break;
                        case "dSecretProxy":
                            r.dsecretProxy = {
                                deviceUuid: e.deviceUuid,
                                dshmac: e.dshmac
                            };
                            break;
                        case "totp":
                            r.totp = {
                                code: e.code
                            };
                            break;
                        case "email":
                            r.code = {
                                code: e.code
                            };
                            break;
                        case "webAuthn":
                            r.webAuthn = e.data;
                            break;
                        case "duo":
                            r.duo = {
                                sigResponse: e.sigResponse
                            };
                            break;
                        case "duov4":
                            r.duov4 = {
                                code: e.code
                            }
                    }
                    return api.verifyMFA(s, r).then(function(e) {
                        return s._isVerified = !0, Promise.resolve(e)
                    }).catch(function(e) {
                        return s._isVerified = !1, util.errors.isServerError(e, 102, 401) ? Promise.reject(new util.errors.ClientError(110, "MFA authentication failed")) : Promise.reject(e)
                    })
                })
            }, this.enableMFAWithAuth = function(e) {
                return makePromise("enableMFAWithAuth", function() {
                    return __awaiter(s, void 0, void 0, function() {
                        var r, t, s;
                        return __generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (!this._sessionID) throw new Error("Missing session ID");
                                    r = {
                                        sessionID: this._sessionID,
                                        client: util.config.clientDescriptor,
                                        mfa: e
                                    }, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, api.enableMFAWithAuth(this, r)];
                                case 2:
                                    return t = i.sent(), this._isVerified = !0, [2, t];
                                case 3:
                                    if (s = i.sent(), this._isVerified = !1, util.errors.isServerError(s, 102, 401)) throw new util.errors.ClientError(110, "MFA authentication failed");
                                    throw s;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                })
            }, this.get = function(e, r, t) {
                return s._request(!0, "GET", e, r, t)
            }, this.post = function(e, r, t) {
                return s._request(!0, "POST", e, r, t)
            }, this.postUnencrypted = function(e, r, t) {
                return s._request(!1, "POST", e, r, t)
            }, this.put = function(e, r, t) {
                return s._request(!0, "PUT", e, r, t)
            }, this.patch = function(e, r, t) {
                return s._request(!0, "PATCH", e, r, t)
            }, this.delete = function(e, r, t) {
                return s._request(!0, "DELETE", e, r, t)
            }, this._host = r, this.nc = new util.events.EventEmitter, this._options = {
                dataType: "json",
                responseType: "json",
                cache: !1,
                attempts: 1
            }, this._isVerified = !1, this._requestId = 0, this._sessionHMAC = void 0, this.setSessionID(void 0), this._sessionKey = void 0, this._secretKeyId = void 0, this.setLanguage(t)
        }
        return Object.defineProperty(e.prototype, "auth", {
            get: function() {
                return this._auth
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "requestID", {
            get: function() {
                return this._requestId
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "sessionID", {
            get: function() {
                return this._sessionID || ""
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "sessionKey", {
            get: function() {
                return this._sessionKey
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "serverConfig", {
            get: function() {
                return this._serverConfig
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isSignedIn", {
            get: function() {
                return !!this._sessionKey && this._isVerified
            },
            enumerable: !1,
            configurable: !0
        }), e.createSessionHMAC = function(e) {
            return util.deriveHmacSha256(e, HMAC_KEY_DATA)
        }, e.getMACMessage = function(e, r, t, s) {
            var i = new URL(t);
            return [e, r.toUpperCase(), i.hostname + "/" + trimStart(i.pathname, "/") + "?" + trimStart(i.search, "?"), MAC_URI_VERSION, s].join("|")
        }, e.createMACHeaderValue = function(e, r, t) {
            return __awaiter(void 0, void 0, void 0, function() {
                var s, i;
                return __generator(this, function(n) {
                    return s = new Uint8Array(sjcl.codec.bytes.fromBits(t.encrypt(e))), i = util.bytesToBase64url(s.subarray(0, 12)), [2, [MAC_URI_VERSION, r, i].join("|")]
                })
            })
        }, e
    }();
export {
    Session
};