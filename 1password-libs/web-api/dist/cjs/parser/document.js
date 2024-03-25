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
        return new(r || (r = Promise))(function(i, o) {
            function a(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, u)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
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
                    for (; a;) try {
                        if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = t.call(e, a)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        r = i = 0
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
}), exports.encryptDocument = exports.decryptDocument = void 0;
var model = __importStar(require("../model")),
    util = __importStar(require("../util")),
    decryptDocument = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i, o;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        if (!(r = e.encryptionKey).alg) throw new Error("Missing key algorithm");
                        return n = r.alg, i = model.createSymmetricKey(r.kid), o = {
                            kid: r.kid,
                            enc: r.alg,
                            cty: model.CONTENT_TYPE,
                            iv: e.nonce,
                            data: util.bytesToBase64url(new Uint8Array(t))
                        }, [4, getIntegrityHash(new Uint8Array(t))];
                    case 1:
                        if (a.sent() !== util.base64ToBase64url(e.integrityHash)) throw new Error("Integrity hash does not match.");
                        return [4, i.importRawKey(n, util.base64urlToBytes(r.k))];
                    case 2:
                        return a.sent(), [2, i.decrypt(o)]
                }
            })
        })
    };
exports.decryptDocument = decryptDocument;
var encryptDocument = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, i, o, a, u;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return [4, (r = model.createSymmetricKey()).generate(model.JWK_ALG_A256GCM)];
                case 1:
                    return n = c.sent(), [4, r.encrypt(new Uint8Array(e))];
                case 2:
                    if (i = c.sent(), o = util.base64urlToBytes(i.data), !i.iv) throw new Error("Missing nonce");
                    return a = {
                        data: o.buffer
                    }, u = {
                        documentId: "",
                        encryptedSize: o.byteLength || 0,
                        encryptionKey: n,
                        fileName: t || ""
                    }, [4, getIntegrityHash(o)];
                case 3:
                    return [2, (a.attributes = (u.integrityHash = c.sent(), u.nonce = i.iv, u.unencryptedSize = e.byteLength || 0, u), a)]
            }
        })
    })
};
exports.encryptDocument = encryptDocument;
var getIntegrityHash = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, util.crypto.subtle.digest({
                        name: "SHA-256"
                    }, e)];
                case 1:
                    return t = r.sent(), [2, util.bytesToBase64url(new Uint8Array(t))]
            }
        })
    })
};