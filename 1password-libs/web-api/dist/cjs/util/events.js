"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.EventEmitter = void 0;
var EE = function() {
        return function(t, e, n) {
            this.fn = t, this.context = e, this.once = n || !1
        }
    }(),
    EventEmitter = function() {
        function t() {}
        return t.prototype.listeners = function(t) {
            var e = "~" + t;
            if (!this._events || !this._events[e]) return [];
            if (this._events[e].fn) return [this._events[e].fn];
            for (var n = this._events[e].length, s = new Array(n), r = 0; r < n; r++) s[r] = this._events[e][r].fn;
            return s
        }, t.prototype.emit = function(t, e, n, s, r, i) {
            var h = "~" + t;
            if (!this._events || !this._events[h]) return !1;
            var o, f = this._events[h],
                v = arguments.length;
            if ("function" == typeof f.fn) {
                switch (f.once && this.off(t, f.fn, !0), v) {
                    case 1:
                        return f.fn.call(f.context), !0;
                    case 2:
                        return f.fn.call(f.context, e), !0;
                    case 3:
                        return f.fn.call(f.context, e, n), !0;
                    case 4:
                        return f.fn.call(f.context, e, n, s), !0;
                    case 5:
                        return f.fn.call(f.context, e, n, s, r), !0;
                    case 6:
                        return f.fn.call(f.context, e, n, s, r, i), !0
                }
                o = new Array(v - 1);
                for (var c = 1; c < v; c++) o[c - 1] = arguments[c];
                f.fn.apply(f.context, o)
            } else {
                var a = f.length;
                for (c = 0; c < a; c++) switch (f[c].once && this.off(t, f[c].fn, !0), v) {
                    case 1:
                        f[c].fn.call(f[c].context);
                        break;
                    case 2:
                        f[c].fn.call(f[c].context, e);
                        break;
                    case 3:
                        f[c].fn.call(f[c].context, e, n);
                        break;
                    default:
                        if (!o) {
                            o = new Array(v - 1);
                            for (var u = 1; u < v; u++) o[u - 1] = arguments[u]
                        }
                        f[c].fn.apply(f[c].context, o)
                }
            }
            return !0
        }, t.prototype.on = function(t, e, n) {
            var s = new EE(e, n || this),
                r = "~" + t;
            return this._events || (this._events = {}), this._events[r] ? this._events[r].fn ? this._events[r] = [this._events[r], s] : this._events[r].push(s) : this._events[r] = s, this
        }, t.prototype.once = function(t, e, n) {
            var s = new EE(e, n || this, !0),
                r = "~" + t;
            return this._events || (this._events = {}), this._events[r] ? this._events[r].fn ? this._events[r] = [this._events[r], s] : this._events[r].push(s) : this._events[r] = s, this
        }, t.prototype.off = function(t, e, n) {
            var s = "~" + t;
            if (!this._events || !this._events[s]) return this;
            var r = this._events[s],
                i = [];
            if (e && (r.fn && (r.fn !== e || n && !r.once) && i.push(r), !r.fn))
                for (var h = 0, o = r.length; h < o; h++)(r[h].fn !== e || n && !r[h].once) && i.push(r[h]);
            return i.length > 0 ? this._events[s] = 1 === i.length ? i[0] : i : delete this._events[s], this
        }, t.prototype.removeAllListeners = function(t) {
            return this._events ? (t ? delete this._events["~" + t] : this._events = {}, this) : this
        }, t
    }();
exports.EventEmitter = EventEmitter;