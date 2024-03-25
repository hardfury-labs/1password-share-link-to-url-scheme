"use strict";
var _a, __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, n) {
        void 0 === n && (n = t), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, n) {
        void 0 === n && (n = t), e[n] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    },
    __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, i) {
            function a(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(a, s)
            }
            c((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function s(i) {
            return function(s) {
                return function(i) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = r.call(e, a)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reportError = exports.ExceptionType = exports.SeverityLevel = void 0;
var SeverityLevel, ExceptionType, Either_1 = require("fp-ts/Either"),
    config = __importStar(require("./config")),
    BUGSNAG_URL = "https://notify.bugsnag.com",
    BUGSNAG_PAYLOAD_VERSION = "5";
! function(e) {
    e.Error = "error", e.Warning = "warning", e.Info = "info"
}(SeverityLevel = exports.SeverityLevel || (exports.SeverityLevel = {})),
function(e) {
    e[e.SurveyError = 0] = "SurveyError", e[e.ValidationError = 1] = "ValidationError"
}(ExceptionType = exports.ExceptionType || (exports.ExceptionType = {}));
var exceptionMap = ((_a = {})[ExceptionType.SurveyError] = {
        severityLevel: SeverityLevel.Error,
        exception: {
            errorClass: "SurveyError"
        }
    }, _a[ExceptionType.ValidationError] = {
        severityLevel: SeverityLevel.Error,
        exception: {
            errorClass: "ValidationError"
        }
    }, _a),
    reportError = function(e, r, t, n, o) {
        return void 0 === r && (r = []), __awaiter(void 0, void 0, void 0, function() {
            var i, a, s, c, u, l;
            return __generator(this, function(p) {
                switch (p.label) {
                    case 0:
                        i = t ? {
                            id: t
                        } : void 0, a = exceptionMap[e].severityLevel, s = exceptionMap[e].exception, c = "c26bc2231cbc0d8d3ff8a786309867fd", n && (u = n.decode(o), Either_1.isRight(u) ? s = n.encode(u.right) : console.error("reportError failed to decode", u.left)), p.label = 1;
                    case 1:
                        return p.trys.push([1, 3, , 4]), [4, fetch(BUGSNAG_URL, {
                            method: "POST",
                            headers: {
                                "Bugsnag-Payload-Version": BUGSNAG_PAYLOAD_VERSION,
                                "Content-Type": "application/json",
                                "Bugsnag-Api-Key": c
                            },
                            referrerPolicy: "no-referrer",
                            body: JSON.stringify({
                                payloadVersion: BUGSNAG_PAYLOAD_VERSION,
                                notifier: {
                                    name: "Bugsnag B5Client",
                                    version: "1.0",
                                    url: "https://app.bugsnag.com/agilebits/b5-web-client/"
                                },
                                events: [{
                                    exceptions: [__assign(__assign({}, s), {
                                        stacktrace: r.map(function(e) {
                                            var r;
                                            return __assign(__assign({}, e), {
                                                lineNumber: null !== (r = e.lineNumber) && void 0 !== r ? r : 0
                                            })
                                        }),
                                        type: "browserjs"
                                    })],
                                    severity: a,
                                    user: i,
                                    app: {
                                        version: config.serverVersion,
                                        releaseStage: config.env
                                    },
                                    device: {
                                        id: config.device.uuid,
                                        browserName: config.device.name,
                                        browserVersion: config.device.model,
                                        osName: config.device.osName,
                                        osVersion: config.device.osVersion
                                    }
                                }]
                            })
                        })];
                    case 2:
                        return p.sent(), [3, 4];
                    case 3:
                        return l = p.sent(), console.error("Error reporting error to bugsnag: " + String(l)), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })
    };
exports.reportError = reportError;