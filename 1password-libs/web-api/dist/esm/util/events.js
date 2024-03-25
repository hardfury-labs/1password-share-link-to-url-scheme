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
            var f, o = this._events[h],
                c = arguments.length;
            if ("function" == typeof o.fn) {
                switch (o.once && this.off(t, o.fn, !0), c) {
                    case 1:
                        return o.fn.call(o.context), !0;
                    case 2:
                        return o.fn.call(o.context, e), !0;
                    case 3:
                        return o.fn.call(o.context, e, n), !0;
                    case 4:
                        return o.fn.call(o.context, e, n, s), !0;
                    case 5:
                        return o.fn.call(o.context, e, n, s, r), !0;
                    case 6:
                        return o.fn.call(o.context, e, n, s, r, i), !0
                }
                f = new Array(c - 1);
                for (var v = 1; v < c; v++) f[v - 1] = arguments[v];
                o.fn.apply(o.context, f)
            } else {
                var a = o.length;
                for (v = 0; v < a; v++) switch (o[v].once && this.off(t, o[v].fn, !0), c) {
                    case 1:
                        o[v].fn.call(o[v].context);
                        break;
                    case 2:
                        o[v].fn.call(o[v].context, e);
                        break;
                    case 3:
                        o[v].fn.call(o[v].context, e, n);
                        break;
                    default:
                        if (!f) {
                            f = new Array(c - 1);
                            for (var u = 1; u < c; u++) f[u - 1] = arguments[u]
                        }
                        o[v].fn.apply(o[v].context, f)
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
                for (var h = 0, f = r.length; h < f; h++)(r[h].fn !== e || n && !r[h].once) && i.push(r[h]);
            return i.length > 0 ? this._events[s] = 1 === i.length ? i[0] : i : delete this._events[s], this
        }, t.prototype.removeAllListeners = function(t) {
            return this._events ? (t ? delete this._events["~" + t] : this._events = {}, this) : this
        }, t
    }();
export {
    EventEmitter
};