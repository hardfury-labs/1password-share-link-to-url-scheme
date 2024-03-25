"use strict";
var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, c) {
            function o(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    c(e)
                }
            }

            function a(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    c(e)
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
        var r, n, i, c, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return c = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
            return this
        }), c;

        function a(c) {
            return function(a) {
                return function(c) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (i = 2 & c[0] ? n.return : c[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, c[1])).done) return i;
                        switch (n = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                            case 0:
                            case 1:
                                i = c;
                                break;
                            case 4:
                                return o.label++, {
                                    value: c[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = c[1], c = [0];
                                continue;
                            case 7:
                                c = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                                    o.label = c[1];
                                    break
                                }
                                if (6 === c[0] && o.label < i[1]) {
                                    o.label = i[1], i = c;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(c);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        c = t.call(e, o)
                    } catch (e) {
                        c = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & c[0]) throw c[1];
                    return {
                        value: c[0] ? c[1] : void 0,
                        done: !0
                    }
                }([c, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clearDeviceDSecret = exports.reauthorizeDevice = exports.deleteInactiveDevices = exports.deleteDevice = exports.addDevice = void 0;
var addDevice = function(e, t) {
    return e.post("/api/v1/device", t).then(function() {})
};
exports.addDevice = addDevice;
var deleteDevice = function(e, t, r) {
    return r ? e.delete("/api/v1/device/" + t + "/" + r).then(function() {}) : e.delete("/api/v1/device/" + t).then(function() {})
};
exports.deleteDevice = deleteDevice;
var deleteInactiveDevices = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, e.delete("/api/v1/device/old").then(function() {})]
        })
    })
};
exports.deleteInactiveDevices = deleteInactiveDevices;
var reauthorizeDevice = function(e, t) {
    return e.put("/api/v1/device/" + t + "/reauthorize").then(function() {})
};
exports.reauthorizeDevice = reauthorizeDevice;
var clearDeviceDSecret = function(e, t) {
    return e.delete("/api/v1/device/" + t + "/dsecret").then(function() {})
};
exports.clearDeviceDSecret = clearDeviceDSecret;