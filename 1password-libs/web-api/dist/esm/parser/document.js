var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function o(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, u)
            }
            c((n = n.apply(e, t || [])).next())
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
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function u(a) {
            return function(u) {
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
                }([a, u])
            }
        }
    };
import * as model from "../model";
import * as util from "../util";
export var decryptDocument = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, i, a;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    if (!(r = e.encryptionKey).alg) throw new Error("Missing key algorithm");
                    return n = r.alg, i = model.createSymmetricKey(r.kid), a = {
                        kid: r.kid,
                        enc: r.alg,
                        cty: model.CONTENT_TYPE,
                        iv: e.nonce,
                        data: util.bytesToBase64url(new Uint8Array(t))
                    }, [4, getIntegrityHash(new Uint8Array(t))];
                case 1:
                    if (o.sent() !== util.base64ToBase64url(e.integrityHash)) throw new Error("Integrity hash does not match.");
                    return [4, i.importRawKey(n, util.base64urlToBytes(r.k))];
                case 2:
                    return o.sent(), [2, i.decrypt(a)]
            }
        })
    })
};
export var encryptDocument = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, i, a, o, u;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return [4, (r = model.createSymmetricKey()).generate(model.JWK_ALG_A256GCM)];
                case 1:
                    return n = c.sent(), [4, r.encrypt(new Uint8Array(e))];
                case 2:
                    if (i = c.sent(), a = util.base64urlToBytes(i.data), !i.iv) throw new Error("Missing nonce");
                    return o = {
                        data: a.buffer
                    }, u = {
                        documentId: "",
                        encryptedSize: a.byteLength || 0,
                        encryptionKey: n,
                        fileName: t || ""
                    }, [4, getIntegrityHash(a)];
                case 3:
                    return [2, (o.attributes = (u.integrityHash = c.sent(), u.nonce = i.iv, u.unencryptedSize = e.byteLength || 0, u), o)]
            }
        })
    })
};
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