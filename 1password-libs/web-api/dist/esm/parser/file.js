var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function a(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, c)
            }
            u((n = n.apply(e, t || [])).next())
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
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function c(o) {
            return function(c) {
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
                }([o, c])
            }
        }
    };
import * as model from "../model";
import * as util from "../util";
export var decryptFile = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, i;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    if (!(r = e.encryptionKey).alg) throw new Error("Missing key algorithm");
                    return n = {
                        kid: r.kid,
                        enc: r.alg,
                        cty: model.CONTENT_TYPE,
                        iv: e.nonce,
                        data: util.bytesToBase64url(new Uint8Array(t))
                    }, [4, (i = model.createSymmetricKey(r.kid)).importRawKey(r.alg, util.base64urlToBytes(r.k))];
                case 1:
                    return o.sent(), [2, i.decrypt(n)]
            }
        })
    })
};
export var encryptFile = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r, n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, (t = model.createSymmetricKey()).generate(model.JWK_ALG_A256GCM)];
                case 1:
                    return i.sent(), [4, t.encrypt(new Uint8Array(e))];
                case 2:
                    if (r = i.sent(), n = util.base64urlToBytes(r.data), !r.iv) throw new Error("Missing iv");
                    if (!t.jwk) throw new Error("No encryption key.");
                    return [2, {
                        data: n.buffer,
                        attributes: {
                            fileId: "",
                            encryptionKey: t.jwk,
                            nonce: r.iv
                        }
                    }]
            }
        })
    })
};