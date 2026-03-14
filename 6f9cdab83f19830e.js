( () => {
    "use strict";
    var e, r, t, n, a, o = {
        18108(e, r, t) {
            t.d(r, {
                g: () => i
            });
            let n = (e, r) => {
                let t = a(e, r);
                if (t > 0) {
                    let n = o(e, r)
                      , a = (t / e.length + t / r.length + (t - n) / t) / 3;
                    return a < .7 ? a : a + .1 * l(e, r) * (1 - a)
                }
                return 0
            }
              , a = (e, r) => {
                let t = Math.floor(Math.max(e.length, r.length) / 2) - 1
                  , n = []
                  , a = 0;
                for (var o = 0; o < e.length; o++)
                    for (var l = Math.max(0, o - t); l <= Math.min(r.length, o + t); l++)
                        if (e[o] === r[l] && !n[l]) {
                            n[l] = !0,
                            a++;
                            break
                        }
                return a
            }
              , o = (e, r) => {
                let t = Math.floor(Math.max(e.length, r.length) / 2) - 1
                  , n = {
                    a: "",
                    b: ""
                }
                  , a = [];
                for (let o = 0; o < e.length; o++)
                    for (let l = Math.max(0, o - t); l <= Math.min(r.length, o + t); l++)
                        if (e[o] === r[l] && !a[l]) {
                            n.a += e[o],
                            a[l] = !0;
                            break
                        }
                a = [];
                for (let o = 0; o < r.length; o++)
                    for (let l = Math.max(0, o - t); l <= Math.min(e.length, o + t); l++)
                        if (r[o] === e[l] && !a[l]) {
                            n.b += r[o],
                            a[l] = !0;
                            break
                        }
                let o = 0;
                for (let e = 0; e < n.a.length; e++)
                    n.a[e] !== n.b[e] && o++;
                return Math.floor(o / 2)
            }
              , l = (e, r) => {
                let t = 0;
                for (; t < 4; t++)
                    if (e[t] !== r[t])
                        return t;
                return ++t
            }
            ;
            function i(e, r, t) {
                let {caseSensitive: a=!1} = t ?? {};
                return a ? n(e, r) : n(e.toLowerCase(), r.toLowerCase())
            }
        },
        48961(e, r, t) {
            t(321073);
            var n = t(91871)
              , a = t.n(n)
              , o = t(240248)
              , l = t(18108)
              , i = t(379078);
            function s(e) {
                return e.split(",").map(e => e.trim()).filter(e => "" !== e)
            }
            function u(e) {
                return "string" == typeof e ? [e.trim()] : e.map(e => e.trim())
            }
            self.addEventListener("message", e => {
                var r;
                let t, {data: {id: n, searchTerm: f, searchStrings: h, searchType: p, sortType: c, jaroWinklerSearchThreshold: m, maxSearchResults: d}} = e, g = [];
                for (let e of s(f))
                    switch (p) {
                    case i.n.REGEX:
                        g.push(...function(e, r) {
                            let t = RegExp(e, "i");
                            return r.reduce( (e, r, n) => u(r).some(e => t.test(e)) ? [...e, n] : e, [])
                        }(e, h));
                        break;
                    case i.n.FUZZY:
                        g.push(...function(e, r) {
                            return r.reduce( (r, t, n) => u(t).some(r => {
                                let t, n;
                                return t = (0,
                                o.S8)(e),
                                n = (0,
                                o.S8)(r),
                                a()(e, r) || a()(t, r) || a()(t, n)
                            }
                            ) ? [...r, n] : r, [])
                        }(e, h));
                        break;
                    case i.n.JARO_WINKLER:
                        g.push(...function(e, r, t) {
                            return r.reduce( (r, n, a) => Math.max(...u(n).map(r => (0,
                            l.g)(e, r))) >= t ? [...r, a] : r, [])
                        }(e, h, m));
                        break;
                    case i.n.EXACT:
                        g.push(...function(e, r) {
                            return r.reduce( (r, t, n) => u(t).some(r => r.toLocaleLowerCase() === e.toLocaleLowerCase()) ? [...r, n] : r, [])
                        }(e, h))
                    }
                let b = [...new Set(g)];
                c === i.r.JARO_WINKLER && (r = b,
                t = s(f),
                b = r.map(e => {
                    let r = u(h[e]);
                    return {
                        index: e,
                        rank: Math.max(...t.flatMap(e => r.map(r => (0,
                        l.g)(e, r))))
                    }
                }
                ).sort( (e, r) => r.rank - e.rank).map(e => e.index)),
                d > 0 && (b = b.slice(0, d));
                let v = {
                    id: n,
                    foundItemIndexes: b
                };
                self.postMessage(v)
            }
            )
        },
        379078(e, r, t) {
            t.d(r, {
                n: () => o,
                r: () => l
            });
            var n, a, o = ((n = {}).FUZZY = "fuzzy",
            n.EXACT = "exact",
            n.REGEX = "regex",
            n.JARO_WINKLER = "jaro_winkler",
            n), l = ((a = {}).NONE = "none",
            a.JARO_WINKLER = "jaro_winkler",
            a)
        },
        240248(e, r, t) {
            t.d(r, {
                S8: () => n.S8
            });
            var n = t(23339)
        },
        23339(e, r, t) {
            t.d(r, {
                S8: () => n
            }),
            t(621466);
            String.prototype.normalize;
            let n = null == String.prototype.normalize ? e => e : function(e) {
                let r = t(209034)
                  , n = "";
                return [...e.normalize("NFD")].forEach(e => {
                    n += r[e] ?? e
                }
                ),
                n.normalize("NFD").toLocaleLowerCase()
            }
        }
    }, l = {};
    function i(e) {
        var r = l[e];
        if (void 0 !== r)
            return r.exports;
        var t = l[e] = {
            exports: {}
        };
        return o[e].call(t.exports, t, t.exports, i),
        t.exports
    }
    i.m = o,
    i.x = () => {
        var e = i.O(void 0, ["54890", "99564"], () => i(48961));
        return i.O(e)
    }
    ,
    i.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return i.d(r, {
            a: r
        }),
        r
    }
    ,
    i.d = (e, r) => {
        for (var t in r)
            i.o(r, t) && !i.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: r[t]
            })
    }
    ,
    i.f = {},
    i.e = e => Promise.all(Object.keys(i.f).reduce( (r, t) => (i.f[t](e, r),
    r), [])),
    i.u = e => "" + ({
        54890: "4ff5a3ada150a485",
        99564: "ce12540be593d439"
    })[e] + ".js",
    i.g = ( () => {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }
    )(),
    i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r),
    e = [],
    i.O = (r, t, n, a) => {
        if (t) {
            a = a || 0;
            for (var o = e.length; o > 0 && e[o - 1][2] > a; o--)
                e[o] = e[o - 1];
            e[o] = [t, n, a];
            return
        }
        for (var l = 1 / 0, o = 0; o < e.length; o++) {
            for (var [t,n,a] = e[o], s = !0, u = 0; u < t.length; u++)
                (!1 & a || l >= a) && Object.keys(i.O).every(e => i.O[e](t[u])) ? t.splice(u--, 1) : (s = !1,
                a < l && (l = a));
            if (s) {
                e.splice(o--, 1);
                var f = n();
                void 0 !== f && (r = f)
            }
        }
        return r
    }
    ,
    i.p = "/assets/",
    i.rv = () => "1.7.3",
    r = i.x,
    i.x = () => Promise.all([i.e("54890"), i.e("99564")]).then(r),
    t = {
        83450: 1
    },
    i.f.i = (e, r) => {
        t[e] || importScripts(i.p + i.u(e))
    }
    ,
    a = (n = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push.bind(n),
    n.push = e => {
        var [r,n,o] = e;
        for (var l in n)
            i.o(n, l) && (i.m[l] = n[l]);
        for (o && o(i); r.length; )
            t[r.pop()] = 1;
        a(e)
    }
    ,
    i.ruid = "bundler=rspack@1.7.3",
    i.x()
}
)();
//# sourceMappingURL=6f9cdab83f19830e.js.map
