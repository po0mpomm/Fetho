window.MOTIONPAGE_FRONT = {
    version: "2.5.3"
};
document.addEventListener("DOMContentLoaded", () => (document.body.style.visibility = "inherit"));;
var LottiePlayer = function(t) {
    "use strict";
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

    function e(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }
    var i = {
        exports: {}
    };
    ! function(t, e) {
        "undefined" != typeof navigator && (t.exports = function() {
            var t = "http://www.w3.org/2000/svg",
                i = "",
                s = !1,
                a = -999999,
                r = function(t) {
                    s = !!t
                },
                n = function() {
                    return s
                },
                o = function(t) {
                    i = t
                },
                h = function() {
                    return i
                };

            function l(t) {
                return document.createElement(t)
            }

            function p(t, e) {
                var i, s, a = t.length;
                for (i = 0; i < a; i += 1)
                    for (var r in s = t[i].prototype) Object.prototype.hasOwnProperty.call(s, r) && (e.prototype[r] = s[r])
            }

            function d(t) {
                function e() {}
                return e.prototype = t, e
            }
            var f = function() {
                    function t(t) {
                        this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                    }
                    return t.prototype = {
                            addAudio: function(t) {
                                this.audios.push(t)
                            },
                            pause: function() {
                                var t, e = this.audios.length;
                                for (t = 0; t < e; t += 1) this.audios[t].pause()
                            },
                            resume: function() {
                                var t, e = this.audios.length;
                                for (t = 0; t < e; t += 1) this.audios[t].resume()
                            },
                            setRate: function(t) {
                                var e, i = this.audios.length;
                                for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
                            },
                            createAudio: function(t) {
                                return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                                    src: [t]
                                }) : {
                                    isPlaying: !1,
                                    play: function() {
                                        this.isPlaying = !0
                                    },
                                    seek: function() {
                                        this.isPlaying = !1
                                    },
                                    playing: function() {},
                                    rate: function() {},
                                    setVolume: function() {}
                                }
                            },
                            setAudioFactory: function(t) {
                                this.audioFactory = t
                            },
                            setVolume: function(t) {
                                this._volume = t, this._updateVolume()
                            },
                            mute: function() {
                                this._isMuted = !0, this._updateVolume()
                            },
                            unmute: function() {
                                this._isMuted = !1, this._updateVolume()
                            },
                            getVolume: function() {
                                return this._volume
                            },
                            _updateVolume: function() {
                                var t, e = this.audios.length;
                                for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                            }
                        },
                        function() {
                            return new t
                        }
                }(),
                m = function() {
                    function t(t, e) {
                        var i, s = 0,
                            a = [];
                        switch (t) {
                            case "int16":
                            case "uint8c":
                                i = 1;
                                break;
                            default:
                                i = 1.1
                        }
                        for (s = 0; s < e; s += 1) a.push(i);
                        return a
                    }

                    function e(e, i) {
                        return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
                    }
                    return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? e : t
                }();

            function c(t) {
                return Array.apply(null, {
                    length: t
                })
            }
            var u = !0,
                g = null,
                v = "",
                y = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                b = Math.pow,
                _ = Math.sqrt,
                k = Math.floor,
                w = Math.min,
                S = 150,
                A = Math.PI / 180,
                D = .5519;

            function P(t, e, i, s) {
                this.type = t, this.currentTime = e, this.totalTime = i, this.direction = s < 0 ? -1 : 1
            }

            function C(t, e) {
                this.type = t, this.direction = e < 0 ? -1 : 1
            }

            function T(t, e, i, s) {
                this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = s < 0 ? -1 : 1
            }

            function E(t, e, i) {
                this.type = t, this.firstFrame = e, this.totalFrames = i
            }

            function F(t, e) {
                this.type = t, this.target = e
            }

            function x(t, e) {
                this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
            }

            function M(t) {
                this.type = "configError", this.nativeError = t
            }
            var I, L = (I = 0, function() {
                return v + "__lottie_element_" + (I += 1)
            });

            function O(t, e, i) {
                var s, a, r, n, o, h, l, p;
                switch (h = i * (1 - e), l = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = i * (1 - (1 - o) * e), n % 6) {
                    case 0:
                        s = i, a = p, r = h;
                        break;
                    case 1:
                        s = l, a = i, r = h;
                        break;
                    case 2:
                        s = h, a = i, r = p;
                        break;
                    case 3:
                        s = h, a = l, r = i;
                        break;
                    case 4:
                        s = p, a = h, r = i;
                        break;
                    case 5:
                        s = i, a = h, r = l
                }
                return [s, a, r]
            }

            function R(t, e, i) {
                var s, a = Math.max(t, e, i),
                    r = Math.min(t, e, i),
                    n = a - r,
                    o = 0 === a ? 0 : n / a,
                    h = a / 255;
                switch (a) {
                    case r:
                        s = 0;
                        break;
                    case t:
                        s = e - i + n * (e < i ? 6 : 0), s /= 6 * n;
                        break;
                    case e:
                        s = i - t + 2 * n, s /= 6 * n;
                        break;
                    case i:
                        s = t - e + 4 * n, s /= 6 * n
                }
                return [s, o, h]
            }

            function V(t, e) {
                var i = R(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), O(i[0], i[1], i[2])
            }

            function N(t, e) {
                var i = R(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), O(i[0], i[1], i[2])
            }

            function z(t, e) {
                var i = R(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), O(i[0], i[1], i[2])
            }
            var j = function() {
                    var t, e, i = [];
                    for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
                    return function(t, e, s) {
                        return t < 0 && (t = 0), e < 0 && (e = 0), s < 0 && (s = 0), "#" + i[t] + i[e] + i[s]
                    }
                }(),
                B = function(t) {
                    u = !!t
                },
                q = function() {
                    return u
                },
                W = function(t) {
                    g = t
                },
                $ = function() {
                    return g
                },
                H = function(t) {
                    S = t
                },
                G = function() {
                    return S
                },
                X = function(t) {
                    v = t
                };

            function U(e) {
                return document.createElementNS(t, e)
            }

            function Y(t) {
                return Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Y(t)
            }
            var Z = function() {
                    var t, e, i = 1,
                        s = [],
                        a = {
                            onmessage: function() {},
                            postMessage: function(e) {
                                t({
                                    data: e
                                })
                            }
                        },
                        r = {
                            postMessage: function(t) {
                                a.onmessage({
                                    data: t
                                })
                            }
                        };

                    function o(e) {
                        if (window.Worker && window.Blob && n()) {
                            var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                                    type: "text/javascript"
                                }),
                                s = URL.createObjectURL(i);
                            return new Worker(s)
                        }
                        return t = e, a
                    }

                    function h() {
                        e || ((e = o((function(t) {
                            function e() {
                                function t(e, i) {
                                    var n, o, h, l, p, d, f = e.length;
                                    for (o = 0; o < f; o += 1)
                                        if ("ks" in (n = e[o]) && !n.completed) {
                                            if (n.completed = !0, n.hasMask) {
                                                var m = n.masksProperties;
                                                for (l = m.length, h = 0; h < l; h += 1)
                                                    if (m[h].pt.k.i) r(m[h].pt.k);
                                                    else
                                                        for (d = m[h].pt.k.length, p = 0; p < d; p += 1) m[h].pt.k[p].s && r(m[h].pt.k[p].s[0]), m[h].pt.k[p].e && r(m[h].pt.k[p].e[0])
                                            }
                                            0 === n.ty ? (n.layers = s(n.refId, i), t(n.layers, i)) : 4 === n.ty ? a(n.shapes) : 5 === n.ty && c(n)
                                        }
                                }

                                function e(e, i) {
                                    if (e) {
                                        var a = 0,
                                            r = e.length;
                                        for (a = 0; a < r; a += 1) 1 === e[a].t && (e[a].data.layers = s(e[a].data.refId, i), t(e[a].data.layers, i))
                                    }
                                }

                                function i(t, e) {
                                    for (var i = 0, s = e.length; i < s;) {
                                        if (e[i].id === t) return e[i];
                                        i += 1
                                    }
                                    return null
                                }

                                function s(t, e) {
                                    var s = i(t, e);
                                    return s ? s.layers.__used ? JSON.parse(JSON.stringify(s.layers)) : (s.layers.__used = !0, s.layers) : null
                                }

                                function a(t) {
                                    var e, i, s;
                                    for (e = t.length - 1; e >= 0; e -= 1)
                                        if ("sh" === t[e].ty)
                                            if (t[e].ks.k.i) r(t[e].ks.k);
                                            else
                                                for (s = t[e].ks.k.length, i = 0; i < s; i += 1) t[e].ks.k[i].s && r(t[e].ks.k[i].s[0]), t[e].ks.k[i].e && r(t[e].ks.k[i].e[0]);
                                    else "gr" === t[e].ty && a(t[e].it)
                                }

                                function r(t) {
                                    var e, i = t.i.length;
                                    for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                                }

                                function n(t, e) {
                                    var i = e ? e.split(".") : [100, 100, 100];
                                    return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                                }
                                var o, h = function() {
                                        var t = [4, 4, 14];

                                        function e(t) {
                                            var e = t.t.d;
                                            t.t.d = {
                                                k: [{
                                                    s: e,
                                                    t: 0
                                                }]
                                            }
                                        }

                                        function i(t) {
                                            var i, s = t.length;
                                            for (i = 0; i < s; i += 1) 5 === t[i].ty && e(t[i])
                                        }
                                        return function(e) {
                                            if (n(t, e.v) && (i(e.layers), e.assets)) {
                                                var s, a = e.assets.length;
                                                for (s = 0; s < a; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                            }
                                        }
                                    }(),
                                    l = (o = [4, 7, 99], function(t) {
                                        if (t.chars && !n(o, t.v)) {
                                            var e, i = t.chars.length;
                                            for (e = 0; e < i; e += 1) {
                                                var s = t.chars[e];
                                                s.data && s.data.shapes && (a(s.data.shapes), s.data.ip = 0, s.data.op = 99999, s.data.st = 0, s.data.sr = 1, s.data.ks = {
                                                    p: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    s: {
                                                        k: [100, 100],
                                                        a: 0
                                                    },
                                                    a: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    r: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    o: {
                                                        k: 100,
                                                        a: 0
                                                    }
                                                }, t.chars[e].t || (s.data.shapes.push({
                                                    ty: "no"
                                                }), s.data.shapes[0].it.push({
                                                    p: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    s: {
                                                        k: [100, 100],
                                                        a: 0
                                                    },
                                                    a: {
                                                        k: [0, 0],
                                                        a: 0
                                                    },
                                                    r: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    o: {
                                                        k: 100,
                                                        a: 0
                                                    },
                                                    sk: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    sa: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    ty: "tr"
                                                })))
                                            }
                                        }
                                    }),
                                    p = function() {
                                        var t = [5, 7, 15];

                                        function e(t) {
                                            var e = t.t.p;
                                            "number" == typeof e.a && (e.a = {
                                                a: 0,
                                                k: e.a
                                            }), "number" == typeof e.p && (e.p = {
                                                a: 0,
                                                k: e.p
                                            }), "number" == typeof e.r && (e.r = {
                                                a: 0,
                                                k: e.r
                                            })
                                        }

                                        function i(t) {
                                            var i, s = t.length;
                                            for (i = 0; i < s; i += 1) 5 === t[i].ty && e(t[i])
                                        }
                                        return function(e) {
                                            if (n(t, e.v) && (i(e.layers), e.assets)) {
                                                var s, a = e.assets.length;
                                                for (s = 0; s < a; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                            }
                                        }
                                    }(),
                                    d = function() {
                                        var t = [4, 1, 9];

                                        function e(t) {
                                            var i, s, a, r = t.length;
                                            for (i = 0; i < r; i += 1)
                                                if ("gr" === t[i].ty) e(t[i].it);
                                                else if ("fl" === t[i].ty || "st" === t[i].ty)
                                                if (t[i].c.k && t[i].c.k[0].i)
                                                    for (a = t[i].c.k.length, s = 0; s < a; s += 1) t[i].c.k[s].s && (t[i].c.k[s].s[0] /= 255, t[i].c.k[s].s[1] /= 255, t[i].c.k[s].s[2] /= 255, t[i].c.k[s].s[3] /= 255), t[i].c.k[s].e && (t[i].c.k[s].e[0] /= 255, t[i].c.k[s].e[1] /= 255, t[i].c.k[s].e[2] /= 255, t[i].c.k[s].e[3] /= 255);
                                                else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                                        }

                                        function i(t) {
                                            var i, s = t.length;
                                            for (i = 0; i < s; i += 1) 4 === t[i].ty && e(t[i].shapes)
                                        }
                                        return function(e) {
                                            if (n(t, e.v) && (i(e.layers), e.assets)) {
                                                var s, a = e.assets.length;
                                                for (s = 0; s < a; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                            }
                                        }
                                    }(),
                                    f = function() {
                                        var t = [4, 4, 18];

                                        function e(t) {
                                            var i, s, a;
                                            for (i = t.length - 1; i >= 0; i -= 1)
                                                if ("sh" === t[i].ty)
                                                    if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                                                    else
                                                        for (a = t[i].ks.k.length, s = 0; s < a; s += 1) t[i].ks.k[s].s && (t[i].ks.k[s].s[0].c = t[i].closed), t[i].ks.k[s].e && (t[i].ks.k[s].e[0].c = t[i].closed);
                                            else "gr" === t[i].ty && e(t[i].it)
                                        }

                                        function i(t) {
                                            var i, s, a, r, n, o, h = t.length;
                                            for (s = 0; s < h; s += 1) {
                                                if ((i = t[s]).hasMask) {
                                                    var l = i.masksProperties;
                                                    for (r = l.length, a = 0; a < r; a += 1)
                                                        if (l[a].pt.k.i) l[a].pt.k.c = l[a].cl;
                                                        else
                                                            for (o = l[a].pt.k.length, n = 0; n < o; n += 1) l[a].pt.k[n].s && (l[a].pt.k[n].s[0].c = l[a].cl), l[a].pt.k[n].e && (l[a].pt.k[n].e[0].c = l[a].cl)
                                                }
                                                4 === i.ty && e(i.shapes)
                                            }
                                        }
                                        return function(e) {
                                            if (n(t, e.v) && (i(e.layers), e.assets)) {
                                                var s, a = e.assets.length;
                                                for (s = 0; s < a; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                            }
                                        }
                                    }();

                                function m(i) {
                                    i.__complete || (d(i), h(i), l(i), p(i), f(i), t(i.layers, i.assets), e(i.chars, i.assets), i.__complete = !0)
                                }

                                function c(t) {
                                    0 === t.t.a.length && t.t.p
                                }
                                var u = {};
                                return u.completeData = m, u.checkColors = d, u.checkChars = l, u.checkPathProperties = p, u.checkShapes = f, u.completeLayers = t, u
                            }
                            if (r.dataManager || (r.dataManager = e()), r.assetLoader || (r.assetLoader = function() {
                                    function t(t) {
                                        var e = t.getResponseHeader("content-type");
                                        return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === Y(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                                    }

                                    function e(e, i, s, a) {
                                        var r, n = new XMLHttpRequest;
                                        try {
                                            n.responseType = "json"
                                        } catch (t) {}
                                        n.onreadystatechange = function() {
                                            if (4 === n.readyState)
                                                if (200 === n.status) r = t(n), s(r);
                                                else try {
                                                    r = t(n), s(r)
                                                } catch (t) {
                                                    a && a(t)
                                                }
                                        };
                                        try {
                                            n.open(["G", "E", "T"].join(""), e, !0)
                                        } catch (t) {
                                            n.open(["G", "E", "T"].join(""), i + "/" + e, !0)
                                        }
                                        n.send()
                                    }
                                    return {
                                        load: e
                                    }
                                }()), "loadAnimation" === t.data.type) r.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                r.dataManager.completeData(e), r.postMessage({
                                    id: t.data.id,
                                    payload: e,
                                    status: "success"
                                })
                            }), (function() {
                                r.postMessage({
                                    id: t.data.id,
                                    status: "error"
                                })
                            }));
                            else if ("complete" === t.data.type) {
                                var i = t.data.animation;
                                r.dataManager.completeData(i), r.postMessage({
                                    id: t.data.id,
                                    payload: i,
                                    status: "success"
                                })
                            } else "loadData" === t.data.type && r.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                r.postMessage({
                                    id: t.data.id,
                                    payload: e,
                                    status: "success"
                                })
                            }), (function() {
                                r.postMessage({
                                    id: t.data.id,
                                    status: "error"
                                })
                            }))
                        }))).onmessage = function(t) {
                            var e = t.data,
                                i = e.id,
                                a = s[i];
                            s[i] = null, "success" === e.status ? a.onComplete(e.payload) : a.onError && a.onError()
                        })
                    }

                    function l(t, e) {
                        var a = "processId_" + (i += 1);
                        return s[a] = {
                            onComplete: t,
                            onError: e
                        }, a
                    }

                    function p(t, i, s) {
                        h();
                        var a = l(i, s);
                        e.postMessage({
                            type: "loadAnimation",
                            path: t,
                            fullPath: window.location.origin + window.location.pathname,
                            id: a
                        })
                    }

                    function d(t, i, s) {
                        h();
                        var a = l(i, s);
                        e.postMessage({
                            type: "loadData",
                            path: t,
                            fullPath: window.location.origin + window.location.pathname,
                            id: a
                        })
                    }

                    function f(t, i, s) {
                        h();
                        var a = l(i, s);
                        e.postMessage({
                            type: "complete",
                            animation: t,
                            id: a
                        })
                    }
                    return {
                        loadAnimation: p,
                        loadData: d,
                        completeAnimation: f
                    }
                }(),
                J = function() {
                    var t = function() {
                        var t = l("canvas");
                        t.width = 1, t.height = 1;
                        var e = t.getContext("2d");
                        return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                    }();

                    function e() {
                        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                    }

                    function i() {
                        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                    }

                    function s(t, e, i) {
                        var s = "";
                        if (t.e) s = t.p;
                        else if (e) {
                            var a = t.p; - 1 !== a.indexOf("images/") && (a = a.split("/")[1]), s = e + a
                        } else s = i, s += t.u ? t.u : "", s += t.p;
                        return s
                    }

                    function a(t) {
                        var e = 0,
                            i = setInterval(function() {
                                (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
                            }.bind(this), 50)
                    }

                    function r(e) {
                        var i = s(e, this.assetsPath, this.path),
                            a = U("image");
                        y ? this.testImageLoaded(a) : a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", function() {
                            r.img = t, this._imageLoaded()
                        }.bind(this), !1), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", i), this._elementHelper.append ? this._elementHelper.append(a) : this._elementHelper.appendChild(a);
                        var r = {
                            img: a,
                            assetData: e
                        };
                        return r
                    }

                    function n(e) {
                        var i = s(e, this.assetsPath, this.path),
                            a = l("img");
                        a.crossOrigin = "anonymous", a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", function() {
                            r.img = t, this._imageLoaded()
                        }.bind(this), !1), a.src = i;
                        var r = {
                            img: a,
                            assetData: e
                        };
                        return r
                    }

                    function o(t) {
                        var e = {
                                assetData: t
                            },
                            i = s(t, this.assetsPath, this.path);
                        return Z.loadData(i, function(t) {
                            e.img = t, this._footageLoaded()
                        }.bind(this), function() {
                            e.img = {}, this._footageLoaded()
                        }.bind(this)), e
                    }

                    function h(t, e) {
                        var i;
                        this.imagesLoadedCb = e;
                        var s = t.length;
                        for (i = 0; i < s; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
                    }

                    function p(t) {
                        this.path = t || ""
                    }

                    function d(t) {
                        this.assetsPath = t || ""
                    }

                    function f(t) {
                        for (var e = 0, i = this.images.length; e < i;) {
                            if (this.images[e].assetData === t) return this.images[e].img;
                            e += 1
                        }
                        return null
                    }

                    function m() {
                        this.imagesLoadedCb = null, this.images.length = 0
                    }

                    function c() {
                        return this.totalImages === this.loadedAssets
                    }

                    function u() {
                        return this.totalFootages === this.loadedFootagesCount
                    }

                    function g(t, e) {
                        "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                    }

                    function v() {
                        this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = a.bind(this), this.createFootageData = o.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                    }
                    return v.prototype = {
                        loadAssets: h,
                        setAssetsPath: d,
                        setPath: p,
                        loadedImages: c,
                        loadedFootages: u,
                        destroy: m,
                        getAsset: f,
                        createImgData: n,
                        createImageData: r,
                        imageLoaded: e,
                        footageLoaded: i,
                        setCacheType: g
                    }, v
                }();

            function K() {}
            K.prototype = {
                triggerEvent: function(t, e) {
                    if (this._cbs[t])
                        for (var i = this._cbs[t], s = 0; s < i.length; s += 1) i[s](e)
                },
                addEventListener: function(t, e) {
                    return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                        function() {
                            this.removeEventListener(t, e)
                        }.bind(this)
                },
                removeEventListener: function(t, e) {
                    if (e) {
                        if (this._cbs[t]) {
                            for (var i = 0, s = this._cbs[t].length; i < s;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, s -= 1), i += 1;
                            this._cbs[t].length || (this._cbs[t] = null)
                        }
                    } else this._cbs[t] = null
                }
            };
            var Q = function() {
                    function t(t) {
                        for (var e, i = t.split("\r\n"), s = {}, a = 0, r = 0; r < i.length; r += 1) 2 === (e = i[r].split(":")).length && (s[e[0]] = e[1].trim(), a += 1);
                        if (0 === a) throw new Error;
                        return s
                    }
                    return function(e) {
                        for (var i = [], s = 0; s < e.length; s += 1) {
                            var a = e[s],
                                r = {
                                    time: a.tm,
                                    duration: a.dr
                                };
                            try {
                                r.payload = JSON.parse(e[s].cm)
                            } catch (i) {
                                try {
                                    r.payload = t(e[s].cm)
                                } catch (t) {
                                    r.payload = {
                                        name: e[s].cm
                                    }
                                }
                            }
                            i.push(r)
                        }
                        return i
                    }
                }(),
                tt = function() {
                    function t(t) {
                        this.compositions.push(t)
                    }
                    return function() {
                        function e(t) {
                            for (var e = 0, i = this.compositions.length; e < i;) {
                                if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                                e += 1
                            }
                            return null
                        }
                        return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                    }
                }(),
                et = {},
                it = function(t, e) {
                    et[t] = e
                };

            function st(t) {
                return et[t]
            }

            function at() {
                if (et.canvas) return "canvas";
                for (var t in et)
                    if (et[t]) return t;
                return ""
            }

            function rt(t) {
                return rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, rt(t)
            }
            var nt = function() {
                this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = L(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = q(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = tt(), this.imagePreloader = new J, this.audioController = f(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new P("drawnFrame", 0, 0, 0), this.expressionsPlugin = $()
            };
            p([K], nt), nt.prototype.setParams = function(t) {
                (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                var e = "svg";
                t.animType ? e = t.animType : t.renderer && (e = t.renderer);
                var i = st(e);
                this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), Z.loadAnimation(t.path, this.configAnimation, this.onSetupError))
            }, nt.prototype.onSetupError = function() {
                this.trigger("data_failed")
            }, nt.prototype.setupAnimation = function(t) {
                Z.completeAnimation(t, this.configAnimation)
            }, nt.prototype.setData = function(t, e) {
                e && "object" !== rt(e) && (e = JSON.parse(e));
                var i = {
                        wrapper: t,
                        animationData: e
                    },
                    s = t.attributes;
                i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "", i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : at() || "canvas";
                var a = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
                "false" === a ? i.loop = !1 : "true" === a ? i.loop = !0 : "" !== a && (i.loop = parseInt(a, 10));
                var r = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : !s.getNamedItem("bm-autoplay") || s.getNamedItem("bm-autoplay").value;
                i.autoplay = "false" !== r, i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "", "false" === (s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), i.path ? this.setParams(i) : this.trigger("destroy")
            }, nt.prototype.includeLayers = function(t) {
                t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                var e, i, s = this.animationData.layers,
                    a = s.length,
                    r = t.layers,
                    n = r.length;
                for (i = 0; i < n; i += 1)
                    for (e = 0; e < a;) {
                        if (s[e].id === r[i].id) {
                            s[e] = r[i];
                            break
                        }
                        e += 1
                    }
                if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                    for (a = t.assets.length, e = 0; e < a; e += 1) this.animationData.assets.push(t.assets[e]);
                this.animationData.__complete = !1, Z.completeAnimation(this.animationData, this.onSegmentComplete)
            }, nt.prototype.onSegmentComplete = function(t) {
                this.animationData = t;
                var e = $();
                e && e.initExpressions(this), this.loadNextSegment()
            }, nt.prototype.loadNextSegment = function() {
                var t = this.animationData.segments;
                if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                var e = t.shift();
                this.timeCompleted = e.time * this.frameRate;
                var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                this.segmentPos += 1, Z.loadData(i, this.includeLayers.bind(this), function() {
                    this.trigger("data_failed")
                }.bind(this))
            }, nt.prototype.loadSegments = function() {
                this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
            }, nt.prototype.imagesLoaded = function() {
                this.trigger("loaded_images"), this.checkLoaded()
            }, nt.prototype.preloadImages = function() {
                this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
            }, nt.prototype.configAnimation = function(t) {
                if (this.renderer) try {
                    this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = Q(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                } catch (t) {
                    this.triggerConfigError(t)
                }
            }, nt.prototype.waitForFontsLoaded = function() {
                this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
            }, nt.prototype.checkLoaded = function() {
                if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                    this.isLoaded = !0;
                    var t = $();
                    t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                        this.trigger("DOMLoaded")
                    }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                }
            }, nt.prototype.resize = function(t, e) {
                var i = "number" == typeof t ? t : void 0,
                    s = "number" == typeof e ? e : void 0;
                this.renderer.updateContainerSize(i, s)
            }, nt.prototype.setSubframe = function(t) {
                this.isSubframeEnabled = !!t
            }, nt.prototype.gotoFrame = function() {
                this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
            }, nt.prototype.renderFrame = function() {
                if (!1 !== this.isLoaded && this.renderer) try {
                    this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                } catch (t) {
                    this.triggerRenderFrameError(t)
                }
            }, nt.prototype.play = function(t) {
                t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
            }, nt.prototype.pause = function(t) {
                t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
            }, nt.prototype.togglePause = function(t) {
                t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
            }, nt.prototype.stop = function(t) {
                t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
            }, nt.prototype.getMarkerData = function(t) {
                for (var e, i = 0; i < this.markers.length; i += 1)
                    if ((e = this.markers[i]).payload && e.payload.name === t) return e;
                return null
            }, nt.prototype.goToAndStop = function(t, e, i) {
                if (!i || this.name === i) {
                    var s = Number(t);
                    if (isNaN(s)) {
                        var a = this.getMarkerData(t);
                        a && this.goToAndStop(a.time, !0)
                    } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                    this.pause()
                }
            }, nt.prototype.goToAndPlay = function(t, e, i) {
                if (!i || this.name === i) {
                    var s = Number(t);
                    if (isNaN(s)) {
                        var a = this.getMarkerData(t);
                        a && (a.duration ? this.playSegments([a.time, a.time + a.duration], !0) : this.goToAndStop(a.time, !0))
                    } else this.goToAndStop(s, e, i);
                    this.play()
                }
            }, nt.prototype.advanceTime = function(t) {
                if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                    var e = this.currentRawFrame + t * this.frameModifier,
                        i = !1;
                    e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                }
            }, nt.prototype.adjustSegment = function(t, e) {
                this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
            }, nt.prototype.setSegment = function(t, e) {
                var i = -1;
                this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
            }, nt.prototype.playSegments = function(t, e) {
                if (e && (this.segments.length = 0), "object" === rt(t[0])) {
                    var i, s = t.length;
                    for (i = 0; i < s; i += 1) this.segments.push(t[i])
                } else this.segments.push(t);
                this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
            }, nt.prototype.resetSegments = function(t) {
                this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
            }, nt.prototype.checkSegments = function(t) {
                return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
            }, nt.prototype.destroy = function(t) {
                t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
            }, nt.prototype.setCurrentRawFrameValue = function(t) {
                this.currentRawFrame = t, this.gotoFrame()
            }, nt.prototype.setSpeed = function(t) {
                this.playSpeed = t, this.updaFrameModifier()
            }, nt.prototype.setDirection = function(t) {
                this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
            }, nt.prototype.setLoop = function(t) {
                this.loop = t
            }, nt.prototype.setVolume = function(t, e) {
                e && this.name !== e || this.audioController.setVolume(t)
            }, nt.prototype.getVolume = function() {
                return this.audioController.getVolume()
            }, nt.prototype.mute = function(t) {
                t && this.name !== t || this.audioController.mute()
            }, nt.prototype.unmute = function(t) {
                t && this.name !== t || this.audioController.unmute()
            }, nt.prototype.updaFrameModifier = function() {
                this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
            }, nt.prototype.getPath = function() {
                return this.path
            }, nt.prototype.getAssetsPath = function(t) {
                var e = "";
                if (t.e) e = t.p;
                else if (this.assetsPath) {
                    var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
                } else e = this.path, e += t.u ? t.u : "", e += t.p;
                return e
            }, nt.prototype.getAssetData = function(t) {
                for (var e = 0, i = this.assets.length; e < i;) {
                    if (t === this.assets[e].id) return this.assets[e];
                    e += 1
                }
                return null
            }, nt.prototype.hide = function() {
                this.renderer.hide()
            }, nt.prototype.show = function() {
                this.renderer.show()
            }, nt.prototype.getDuration = function(t) {
                return t ? this.totalFrames : this.totalFrames / this.frameRate
            }, nt.prototype.updateDocumentData = function(t, e, i) {
                try {
                    this.renderer.getElementByPath(t).updateDocumentData(e, i)
                } catch (t) {}
            }, nt.prototype.trigger = function(t) {
                if (this._cbs && this._cbs[t]) switch (t) {
                    case "enterFrame":
                        this.triggerEvent(t, new P(t, this.currentFrame, this.totalFrames, this.frameModifier));
                        break;
                    case "drawnFrame":
                        this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                        break;
                    case "loopComplete":
                        this.triggerEvent(t, new T(t, this.loop, this.playCount, this.frameMult));
                        break;
                    case "complete":
                        this.triggerEvent(t, new C(t, this.frameMult));
                        break;
                    case "segmentStart":
                        this.triggerEvent(t, new E(t, this.firstFrame, this.totalFrames));
                        break;
                    case "destroy":
                        this.triggerEvent(t, new F(t, this));
                        break;
                    default:
                        this.triggerEvent(t)
                }
                "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new P(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new T(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new C(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new E(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new F(t, this))
            }, nt.prototype.triggerRenderFrameError = function(t) {
                var e = new x(t, this.currentFrame);
                this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
            }, nt.prototype.triggerConfigError = function(t) {
                var e = new M(t, this.currentFrame);
                this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
            };
            var ot = function() {
                    var t = {},
                        e = [],
                        i = 0,
                        s = 0,
                        a = 0,
                        r = !0,
                        n = !1;

                    function o(t) {
                        for (var i = 0, a = t.target; i < s;) e[i].animation === a && (e.splice(i, 1), i -= 1, s -= 1, a.isPaused || f()), i += 1
                    }

                    function h(t, i) {
                        if (!t) return null;
                        for (var a = 0; a < s;) {
                            if (e[a].elem === t && null !== e[a].elem) return e[a].animation;
                            a += 1
                        }
                        var r = new nt;
                        return m(r, t), r.setData(t, i), r
                    }

                    function p() {
                        var t, i = e.length,
                            s = [];
                        for (t = 0; t < i; t += 1) s.push(e[t].animation);
                        return s
                    }

                    function d() {
                        a += 1, C()
                    }

                    function f() {
                        a -= 1
                    }

                    function m(t, i) {
                        t.addEventListener("destroy", o), t.addEventListener("_active", d), t.addEventListener("_idle", f), e.push({
                            elem: i,
                            animation: t
                        }), s += 1
                    }

                    function c(t) {
                        var e = new nt;
                        return m(e, null), e.setParams(t), e
                    }

                    function u(t, i) {
                        var a;
                        for (a = 0; a < s; a += 1) e[a].animation.setSpeed(t, i)
                    }

                    function g(t, i) {
                        var a;
                        for (a = 0; a < s; a += 1) e[a].animation.setDirection(t, i)
                    }

                    function v(t) {
                        var i;
                        for (i = 0; i < s; i += 1) e[i].animation.play(t)
                    }

                    function y(t) {
                        var o, h = t - i;
                        for (o = 0; o < s; o += 1) e[o].animation.advanceTime(h);
                        i = t, a && !n ? window.requestAnimationFrame(y) : r = !0
                    }

                    function b(t) {
                        i = t, window.requestAnimationFrame(y)
                    }

                    function _(t) {
                        var i;
                        for (i = 0; i < s; i += 1) e[i].animation.pause(t)
                    }

                    function k(t, i, a) {
                        var r;
                        for (r = 0; r < s; r += 1) e[r].animation.goToAndStop(t, i, a)
                    }

                    function w(t) {
                        var i;
                        for (i = 0; i < s; i += 1) e[i].animation.stop(t)
                    }

                    function S(t) {
                        var i;
                        for (i = 0; i < s; i += 1) e[i].animation.togglePause(t)
                    }

                    function A(t) {
                        var i;
                        for (i = s - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
                    }

                    function D(t, e, i) {
                        var s, a = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                            r = a.length;
                        for (s = 0; s < r; s += 1) i && a[s].setAttribute("data-bm-type", i), h(a[s], t);
                        if (e && 0 === r) {
                            i || (i = "svg");
                            var n = document.getElementsByTagName("body")[0];
                            n.innerText = "";
                            var o = l("div");
                            o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), n.appendChild(o), h(o, t)
                        }
                    }

                    function P() {
                        var t;
                        for (t = 0; t < s; t += 1) e[t].animation.resize()
                    }

                    function C() {
                        !n && a && r && (window.requestAnimationFrame(b), r = !1)
                    }

                    function T() {
                        n = !0
                    }

                    function E() {
                        n = !1, C()
                    }

                    function F(t, i) {
                        var a;
                        for (a = 0; a < s; a += 1) e[a].animation.setVolume(t, i)
                    }

                    function x(t) {
                        var i;
                        for (i = 0; i < s; i += 1) e[i].animation.mute(t)
                    }

                    function M(t) {
                        var i;
                        for (i = 0; i < s; i += 1) e[i].animation.unmute(t)
                    }
                    return t.registerAnimation = h, t.loadAnimation = c, t.setSpeed = u, t.setDirection = g, t.play = v, t.pause = _, t.stop = w, t.togglePause = S, t.searchAnimations = D, t.resize = P, t.goToAndStop = k, t.destroy = A, t.freeze = T, t.unfreeze = E, t.setVolume = F, t.mute = x, t.unmute = M, t.getRegisteredAnimations = p, t
                }(),
                ht = function() {
                    var t = {};
                    t.getBezierEasing = i;
                    var e = {};

                    function i(t, i, s, a, r) {
                        var n = r || ("bez_" + t + "_" + i + "_" + s + "_" + a).replace(/\./g, "p");
                        if (e[n]) return e[n];
                        var o = new v([t, i, s, a]);
                        return e[n] = o, o
                    }
                    var s = 4,
                        a = .001,
                        r = 1e-7,
                        n = 10,
                        o = 11,
                        h = 1 / (o - 1),
                        l = "function" == typeof Float32Array;

                    function p(t, e) {
                        return 1 - 3 * e + 3 * t
                    }

                    function d(t, e) {
                        return 3 * e - 6 * t
                    }

                    function f(t) {
                        return 3 * t
                    }

                    function m(t, e, i) {
                        return ((p(e, i) * t + d(e, i)) * t + f(e)) * t
                    }

                    function c(t, e, i) {
                        return 3 * p(e, i) * t * t + 2 * d(e, i) * t + f(e)
                    }

                    function u(t, e, i, s, a) {
                        var o, h, l = 0;
                        do {
                            (o = m(h = e + (i - e) / 2, s, a) - t) > 0 ? i = h : e = h
                        } while (Math.abs(o) > r && ++l < n);
                        return h
                    }

                    function g(t, e, i, a) {
                        for (var r = 0; r < s; ++r) {
                            var n = c(e, i, a);
                            if (0 === n) return e;
                            e -= (m(e, i, a) - t) / n
                        }
                        return e
                    }

                    function v(t) {
                        this._p = t, this._mSampleValues = l ? new Float32Array(o) : new Array(o), this._precomputed = !1, this.get = this.get.bind(this)
                    }
                    return v.prototype = {
                        get: function(t) {
                            var e = this._p[0],
                                i = this._p[1],
                                s = this._p[2],
                                a = this._p[3];
                            return this._precomputed || this._precompute(), e === i && s === a ? t : 0 === t ? 0 : 1 === t ? 1 : m(this._getTForX(t), i, a)
                        },
                        _precompute: function() {
                            var t = this._p[0],
                                e = this._p[1],
                                i = this._p[2],
                                s = this._p[3];
                            this._precomputed = !0, t === e && i === s || this._calcSampleValues()
                        },
                        _calcSampleValues: function() {
                            for (var t = this._p[0], e = this._p[2], i = 0; i < o; ++i) this._mSampleValues[i] = m(i * h, t, e)
                        },
                        _getTForX: function(t) {
                            for (var e = this._p[0], i = this._p[2], s = this._mSampleValues, r = 0, n = 1, l = o - 1; n !== l && s[n] <= t; ++n) r += h;
                            var p = r + (t - s[--n]) / (s[n + 1] - s[n]) * h,
                                d = c(p, e, i);
                            return d >= a ? g(t, p, e, i) : 0 === d ? p : u(t, r, r + h, e, i)
                        }
                    }, t
                }(),
                lt = function() {
                    function t(t) {
                        return t.concat(c(t.length))
                    }
                    return {
                        double: t
                    }
                }(),
                pt = function(t, e, i) {
                    var s = 0,
                        a = t,
                        r = c(a);

                    function n() {
                        return s ? r[s -= 1] : e()
                    }

                    function o(t) {
                        s === a && (r = lt.double(r), a *= 2), i && i(t), r[s] = t, s += 1
                    }
                    return {
                        newElement: n,
                        release: o
                    }
                },
                dt = function() {
                    function t() {
                        return {
                            addedLength: 0,
                            percents: m("float32", G()),
                            lengths: m("float32", G())
                        }
                    }
                    return pt(8, t)
                }(),
                ft = function() {
                    function t() {
                        return {
                            lengths: [],
                            totalLength: 0
                        }
                    }

                    function e(t) {
                        var e, i = t.lengths.length;
                        for (e = 0; e < i; e += 1) dt.release(t.lengths[e]);
                        t.lengths.length = 0
                    }
                    return pt(8, t, e)
                }();

            function mt() {
                var t = Math;

                function e(t, e, i, s, a, r) {
                    var n = t * s + e * a + i * r - a * s - r * t - i * e;
                    return n > -.001 && n < .001
                }

                function i(i, s, a, r, n, o, h, l, p) {
                    if (0 === a && 0 === o && 0 === p) return e(i, s, r, n, h, l);
                    var d, f = t.sqrt(t.pow(r - i, 2) + t.pow(n - s, 2) + t.pow(o - a, 2)),
                        m = t.sqrt(t.pow(h - i, 2) + t.pow(l - s, 2) + t.pow(p - a, 2)),
                        c = t.sqrt(t.pow(h - r, 2) + t.pow(l - n, 2) + t.pow(p - o, 2));
                    return (d = f > m ? f > c ? f - m - c : c - m - f : c > m ? c - m - f : m - f - c) > -1e-4 && d < 1e-4
                }
                var s = function(t, e, i, s) {
                    var a, r, n, o, h, l, p = G(),
                        d = 0,
                        f = [],
                        m = [],
                        c = dt.newElement();
                    for (n = i.length, a = 0; a < p; a += 1) {
                        for (h = a / (p - 1), l = 0, r = 0; r < n; r += 1) o = b(1 - h, 3) * t[r] + 3 * b(1 - h, 2) * h * i[r] + 3 * (1 - h) * b(h, 2) * s[r] + b(h, 3) * e[r], f[r] = o, null !== m[r] && (l += b(f[r] - m[r], 2)), m[r] = f[r];
                        l && (d += l = _(l)), c.percents[a] = h, c.lengths[a] = d
                    }
                    return c.addedLength = d, c
                };

                function a(t) {
                    var e, i = ft.newElement(),
                        a = t.c,
                        r = t.v,
                        n = t.o,
                        o = t.i,
                        h = t._length,
                        l = i.lengths,
                        p = 0;
                    for (e = 0; e < h - 1; e += 1) l[e] = s(r[e], r[e + 1], n[e], o[e + 1]), p += l[e].addedLength;
                    return a && h && (l[e] = s(r[e], r[0], n[e], o[0]), p += l[e].addedLength), i.totalLength = p, i
                }

                function r(t) {
                    this.segmentLength = 0, this.points = new Array(t)
                }

                function n(t, e) {
                    this.partialLength = t, this.point = e
                }
                var o, h = (o = {}, function(t, i, s, a) {
                    var h = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + s[0] + "_" + s[1] + "_" + a[0] + "_" + a[1]).replace(/\./g, "p");
                    if (!o[h]) {
                        var l, p, d, f, m, u, g, v = G(),
                            y = 0,
                            k = null;
                        2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + s[0], t[1] + s[1]) && e(t[0], t[1], i[0], i[1], i[0] + a[0], i[1] + a[1]) && (v = 2);
                        var w = new r(v);
                        for (d = s.length, l = 0; l < v; l += 1) {
                            for (g = c(d), m = l / (v - 1), u = 0, p = 0; p < d; p += 1) f = b(1 - m, 3) * t[p] + 3 * b(1 - m, 2) * m * (t[p] + s[p]) + 3 * (1 - m) * b(m, 2) * (i[p] + a[p]) + b(m, 3) * i[p], g[p] = f, null !== k && (u += b(g[p] - k[p], 2));
                            y += u = _(u), w.points[l] = new n(u, g), k = g
                        }
                        w.segmentLength = y, o[h] = w
                    }
                    return o[h]
                });

                function l(t, e) {
                    var i = e.percents,
                        s = e.lengths,
                        a = i.length,
                        r = k((a - 1) * t),
                        n = t * e.addedLength,
                        o = 0;
                    if (r === a - 1 || 0 === r || n === s[r]) return i[r];
                    for (var h = s[r] > n ? -1 : 1, l = !0; l;)
                        if (s[r] <= n && s[r + 1] > n ? (o = (n - s[r]) / (s[r + 1] - s[r]), l = !1) : r += h, r < 0 || r >= a - 1) {
                            if (r === a - 1) return i[r];
                            l = !1
                        }
                    return i[r] + (i[r + 1] - i[r]) * o
                }

                function p(e, i, s, a, r, n) {
                    var o = l(r, n),
                        h = 1 - o;
                    return [t.round(1e3 * (h * h * h * e[0] + (o * h * h + h * o * h + h * h * o) * s[0] + (o * o * h + h * o * o + o * h * o) * a[0] + o * o * o * i[0])) / 1e3, t.round(1e3 * (h * h * h * e[1] + (o * h * h + h * o * h + h * h * o) * s[1] + (o * o * h + h * o * o + o * h * o) * a[1] + o * o * o * i[1])) / 1e3]
                }
                var d = m("float32", 8);

                function f(e, i, s, a, r, n, o) {
                    r < 0 ? r = 0 : r > 1 && (r = 1);
                    var h, p = l(r, o),
                        f = l(n = n > 1 ? 1 : n, o),
                        m = e.length,
                        c = 1 - p,
                        u = 1 - f,
                        g = c * c * c,
                        v = p * c * c * 3,
                        y = p * p * c * 3,
                        b = p * p * p,
                        _ = c * c * u,
                        k = p * c * u + c * p * u + c * c * f,
                        w = p * p * u + c * p * f + p * c * f,
                        S = p * p * f,
                        A = c * u * u,
                        D = p * u * u + c * f * u + c * u * f,
                        P = p * f * u + c * f * f + p * u * f,
                        C = p * f * f,
                        T = u * u * u,
                        E = f * u * u + u * f * u + u * u * f,
                        F = f * f * u + u * f * f + f * u * f,
                        x = f * f * f;
                    for (h = 0; h < m; h += 1) d[4 * h] = t.round(1e3 * (g * e[h] + v * s[h] + y * a[h] + b * i[h])) / 1e3, d[4 * h + 1] = t.round(1e3 * (_ * e[h] + k * s[h] + w * a[h] + S * i[h])) / 1e3, d[4 * h + 2] = t.round(1e3 * (A * e[h] + D * s[h] + P * a[h] + C * i[h])) / 1e3, d[4 * h + 3] = t.round(1e3 * (T * e[h] + E * s[h] + F * a[h] + x * i[h])) / 1e3;
                    return d
                }
                return {
                    getSegmentsLength: a,
                    getNewSegment: f,
                    getPointInSegment: p,
                    buildBezierData: h,
                    pointOnLine2D: e,
                    pointOnLine3D: i
                }
            }
            var ct = mt();

            function ut(t) {
                return bt(t) || yt(t) || vt(t) || gt()
            }

            function gt() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function vt(t, e) {
                if (t) {
                    if ("string" == typeof t) return _t(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _t(t, e) : void 0
                }
            }

            function yt(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
            }

            function bt(t) {
                if (Array.isArray(t)) return _t(t)
            }

            function _t(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
                return s
            }

            function kt(t, e, i) {
                return t * (1 - i) + e * i
            }

            function wt(t, e, i) {
                return [kt(t[0], e[0], i), kt(t[1], e[1], i)]
            }

            function St(t, e) {
                return t.map((function(t, i) {
                    return t + (e[i] || 0)
                }))
            }

            function At(t, e) {
                return t.map((function(t, i) {
                    return t - (e[i] || 0)
                }))
            }

            function Dt(t) {
                var e = Math.hypot.apply(Math, ut(t));
                return e > Number.EPSILON ? t.map((function(t) {
                    return t / e
                })) : t
            }

            function Pt(t, e, i, s, a) {
                var r = [t, St(t, e), St(s, i), s],
                    n = Ct(r, a),
                    o = Ct(n, a),
                    h = At(o[1], o[0]),
                    l = Math.hypot.apply(Math, ut(h));
                if (l > Number.EPSILON) return h.map((function(t) {
                    return t / l
                }));
                var p = At(n[2], n[0]),
                    d = Math.hypot.apply(Math, ut(p));
                if (d > Number.EPSILON) return p.map((function(t) {
                    return t / d
                }));
                var f = At(n[1], n[0]),
                    m = Math.hypot.apply(Math, ut(f));
                return m > Number.EPSILON ? f.map((function(t) {
                    return t / m
                })) : Dt(At(r[3], r[0]))
            }

            function Ct(t, e) {
                for (var i = [], s = 0; s < t.length - 1; s += 1) i.push(wt(t[s], t[s + 1], e));
                return i
            }
            var Tt = a,
                Et = Math.abs;

            function Ft(t, e) {
                var i, s = this.offsetTime;
                "multidimensional" === this.propType && (i = m("float32", this.pv.length));
                for (var a, r, n, o, h, l, p, d, f, c = e.lastIndex, u = c, g = this.keyframes.length - 1, v = !0; v;) {
                    if (a = this.keyframes[u], r = this.keyframes[u + 1], u === g - 1 && t >= r.t - s) {
                        a.h && (a = r), c = 0;
                        break
                    }
                    if (r.t - s > t) {
                        c = u;
                        break
                    }
                    u < g - 1 ? u += 1 : (c = 0, v = !1)
                }
                n = this.keyframesMetadata[u] || {};
                var y, b = r.t - s,
                    _ = a.t - s;
                if (a.to) {
                    n.bezierData || (n.bezierData = ct.buildBezierData(a.s, r.s || a.e, a.to, a.ti));
                    var k = n.bezierData;
                    if (t >= b || t < _) {
                        var w = t >= b ? k.points.length - 1 : 0;
                        for (h = k.points[w].point.length, o = 0; o < h; o += 1) i[o] = k.points[w].point[o]
                    } else {
                        n.__fnct ? f = n.__fnct : (f = ht.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, n.__fnct = f), l = f((t - _) / (b - _));
                        var S = a.s,
                            A = r.s || a.e;
                        if (l > 1)
                            for (var D = Pt(a.s, a.to, a.ti, r.s || a.e, 1), P = k.segmentLength * (l - 1), C = 0; C < A.length; C += 1) i[C] = A[C] + D[C] * P;
                        else if (l < 0)
                            for (var T = Pt(a.s, a.to, a.ti, r.s || a.e, 0), E = k.segmentLength * l, F = 0; F < S.length; F += 1) i[F] = S[F] + T[F] * E;
                        else {
                            var x, M = k.segmentLength * l,
                                I = e.lastFrame < t && e._lastKeyframeIndex === u ? e._lastAddedLength : 0;
                            for (d = e.lastFrame < t && e._lastKeyframeIndex === u ? e._lastPoint : 0, v = !0, p = k.points.length; v;) {
                                if (I += k.points[d].partialLength, 0 === M || 0 === l || d === k.points.length - 1) {
                                    for (h = k.points[d].point.length, o = 0; o < h; o += 1) i[o] = k.points[d].point[o];
                                    break
                                }
                                if (M >= I && M < I + k.points[d + 1].partialLength) {
                                    for (x = (M - I) / k.points[d + 1].partialLength, h = k.points[d].point.length, o = 0; o < h; o += 1) i[o] = k.points[d].point[o] + (k.points[d + 1].point[o] - k.points[d].point[o]) * x;
                                    break
                                }
                                d < p - 1 ? d += 1 : v = !1
                            }
                            e._lastPoint = d, e._lastAddedLength = I - k.points[d].partialLength, e._lastKeyframeIndex = u
                        }
                    }
                } else {
                    var L, O, R, V, N;
                    if (g = a.s.length, y = r.s || a.e, this.sh && 1 !== a.h) t >= b ? (i[0] = y[0], i[1] = y[1], i[2] = y[2]) : t <= _ ? (i[0] = a.s[0], i[1] = a.s[1], i[2] = a.s[2]) : Mt(i, xt(It(a.s), It(y), (t - _) / (b - _)));
                    else
                        for (u = 0; u < g; u += 1) 1 !== a.h && (t >= b ? l = 1 : t < _ ? l = 0 : (a.o.x.constructor === Array ? (n.__fnct || (n.__fnct = []), n.__fnct[u] ? f = n.__fnct[u] : (L = void 0 === a.o.x[u] ? a.o.x[0] : a.o.x[u], O = void 0 === a.o.y[u] ? a.o.y[0] : a.o.y[u], R = void 0 === a.i.x[u] ? a.i.x[0] : a.i.x[u], V = void 0 === a.i.y[u] ? a.i.y[0] : a.i.y[u], f = ht.getBezierEasing(L, O, R, V).get, n.__fnct[u] = f)) : n.__fnct ? f = n.__fnct : (L = a.o.x, O = a.o.y, R = a.i.x, V = a.i.y, f = ht.getBezierEasing(L, O, R, V).get, a.keyframeMetadata = f), l = f((t - _) / (b - _)))), y = r.s || a.e, N = 1 === a.h ? a.s[u] : a.s[u] + (y[u] - a.s[u]) * l, "multidimensional" === this.propType ? i[u] = N : i = N
                }
                return e.lastIndex = c, i
            }

            function xt(t, e, i) {
                var s, a, r, n, o, h = [],
                    l = t[0],
                    p = t[1],
                    d = t[2],
                    f = t[3],
                    m = e[0],
                    c = e[1],
                    u = e[2],
                    g = e[3];
                return (a = l * m + p * c + d * u + f * g) < 0 && (a = -a, m = -m, c = -c, u = -u, g = -g), 1 - a > 1e-6 ? (s = Math.acos(a), r = Math.sin(s), n = Math.sin((1 - i) * s) / r, o = Math.sin(i * s) / r) : (n = 1 - i, o = i), h[0] = n * l + o * m, h[1] = n * p + o * c, h[2] = n * d + o * u, h[3] = n * f + o * g, h
            }

            function Mt(t, e) {
                var i = e[0],
                    s = e[1],
                    a = e[2],
                    r = e[3],
                    n = Math.atan2(2 * s * r - 2 * i * a, 1 - 2 * s * s - 2 * a * a),
                    o = Math.asin(2 * i * s + 2 * a * r),
                    h = Math.atan2(2 * i * r - 2 * s * a, 1 - 2 * i * i - 2 * a * a);
                t[0] = n / A, t[1] = o / A, t[2] = h / A
            }

            function It(t) {
                var e = t[0] * A,
                    i = t[1] * A,
                    s = t[2] * A,
                    a = Math.cos(e / 2),
                    r = Math.cos(i / 2),
                    n = Math.cos(s / 2),
                    o = Math.sin(e / 2),
                    h = Math.sin(i / 2),
                    l = Math.sin(s / 2);
                return [o * h * n + a * r * l, o * r * n + a * h * l, a * h * n - o * r * l, a * r * n - o * h * l]
            }

            function Lt() {
                var t = this.comp.renderedFrame - this.offsetTime,
                    e = this.keyframes[0].t - this.offsetTime,
                    i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                if (!(t === this._caching.lastFrame || this._caching.lastFrame !== Tt && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
                    this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                    var s = this.interpolateValue(t, this._caching);
                    this.pv = s
                }
                return this._caching.lastFrame = t, this.pv
            }

            function Ot(t) {
                var e;
                if ("unidimensional" === this.propType) e = t * this.mult, Et(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
                else
                    for (var i = 0, s = this.v.length; i < s;) e = t[i] * this.mult, Et(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0), i += 1
            }

            function Rt() {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                    if (this.lock) this.setVValue(this.pv);
                    else {
                        var t;
                        this.lock = !0, this._mdf = this._isFirstFrame;
                        var e = this.effectsSequence.length,
                            i = this.kf ? this.pv : this.data.k;
                        for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                        this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
            }

            function Vt(t) {
                this.effectsSequence.push(t), this.container.addDynamicProperty(this)
            }

            function Nt(t, e, i, s) {
                this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = Rt, this.setVValue = Ot, this.addEffect = Vt
            }

            function zt(t, e, i, s) {
                var a;
                this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                var r = e.k.length;
                for (this.v = m("float32", r), this.pv = m("float32", r), this.vel = m("float32", r), a = 0; a < r; a += 1) this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
                this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = Rt, this.setVValue = Ot, this.addEffect = Vt
            }

            function jt(t, e, i, s) {
                this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                    lastFrame: Tt,
                    lastIndex: 0,
                    value: 0,
                    _lastKeyframeIndex: -1
                }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.v = Tt, this.pv = Tt, this._isFirstFrame = !0, this.getValue = Rt, this.setVValue = Ot, this.interpolateValue = Ft, this.effectsSequence = [Lt.bind(this)], this.addEffect = Vt
            }

            function Bt(t, e, i, s) {
                var a;
                this.propType = "multidimensional";
                var r, n, o, h, l = e.k.length;
                for (a = 0; a < l - 1; a += 1) e.k[a].to && e.k[a].s && e.k[a + 1] && e.k[a + 1].s && (r = e.k[a].s, n = e.k[a + 1].s, o = e.k[a].to, h = e.k[a].ti, (2 === r.length && (r[0] !== n[0] || r[1] !== n[1]) && ct.pointOnLine2D(r[0], r[1], n[0], n[1], r[0] + o[0], r[1] + o[1]) && ct.pointOnLine2D(r[0], r[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === r.length && (r[0] !== n[0] || r[1] !== n[1] || r[2] !== n[2]) && ct.pointOnLine3D(r[0], r[1], r[2], n[0], n[1], n[2], r[0] + o[0], r[1] + o[1], r[2] + o[2]) && ct.pointOnLine3D(r[0], r[1], r[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (e.k[a].to = null, e.k[a].ti = null), r[0] === n[0] && r[1] === n[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === r.length || r[2] === n[2] && 0 === o[2] && 0 === h[2]) && (e.k[a].to = null, e.k[a].ti = null));
                this.effectsSequence = [Lt.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.getValue = Rt, this.setVValue = Ot, this.interpolateValue = Ft, this.frameId = -1;
                var p = e.k[0].s.length;
                for (this.v = m("float32", p), this.pv = m("float32", p), a = 0; a < p; a += 1) this.v[a] = Tt, this.pv[a] = Tt;
                this._caching = {
                    lastFrame: Tt,
                    lastIndex: 0,
                    value: m("float32", p)
                }, this.addEffect = Vt
            }
            var qt = function() {
                function t(t, e, i, s, a) {
                    var r;
                    if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
                        if ("number" == typeof e.k[0]) r = new zt(t, e, s, a);
                        else switch (i) {
                            case 0:
                                r = new jt(t, e, s, a);
                                break;
                            case 1:
                                r = new Bt(t, e, s, a)
                        } else r = new Nt(t, e, s, a);
                    return r.effectsSequence.length && a.addDynamicProperty(r), r
                }
                return {
                    getProp: t
                }
            }();

            function Wt() {}
            Wt.prototype = {
                addDynamicProperty: function(t) {
                    -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                },
                iterateDynamicProperties: function() {
                    var t;
                    this._mdf = !1;
                    var e = this.dynamicProperties.length;
                    for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                },
                initDynamicPropertyContainer: function(t) {
                    this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                }
            };
            var $t = function() {
                function t() {
                    return m("float32", 2)
                }
                return pt(8, t)
            }();

            function Ht() {
                this.c = !1, this._length = 0, this._maxLength = 8, this.v = c(this._maxLength), this.o = c(this._maxLength), this.i = c(this._maxLength)
            }
            Ht.prototype.setPathData = function(t, e) {
                this.c = t, this.setLength(e);
                for (var i = 0; i < e;) this.v[i] = $t.newElement(), this.o[i] = $t.newElement(), this.i[i] = $t.newElement(), i += 1
            }, Ht.prototype.setLength = function(t) {
                for (; this._maxLength < t;) this.doubleArrayLength();
                this._length = t
            }, Ht.prototype.doubleArrayLength = function() {
                this.v = this.v.concat(c(this._maxLength)), this.i = this.i.concat(c(this._maxLength)), this.o = this.o.concat(c(this._maxLength)), this._maxLength *= 2
            }, Ht.prototype.setXYAt = function(t, e, i, s, a) {
                var r;
                switch (this._length = Math.max(this._length, s + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                    case "v":
                        r = this.v;
                        break;
                    case "i":
                        r = this.i;
                        break;
                    case "o":
                        r = this.o;
                        break;
                    default:
                        r = []
                }(!r[s] || r[s] && !a) && (r[s] = $t.newElement()), r[s][0] = t, r[s][1] = e
            }, Ht.prototype.setTripleAt = function(t, e, i, s, a, r, n, o) {
                this.setXYAt(t, e, "v", n, o), this.setXYAt(i, s, "o", n, o), this.setXYAt(a, r, "i", n, o)
            }, Ht.prototype.reverse = function() {
                var t = new Ht;
                t.setPathData(this.c, this._length);
                var e = this.v,
                    i = this.o,
                    s = this.i,
                    a = 0;
                this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, !1), a = 1);
                var r, n = this._length - 1,
                    o = this._length;
                for (r = a; r < o; r += 1) t.setTripleAt(e[n][0], e[n][1], s[n][0], s[n][1], i[n][0], i[n][1], r, !1), n -= 1;
                return t
            }, Ht.prototype.length = function() {
                return this._length
            };
            var Gt = function() {
                function t() {
                    return new Ht
                }

                function e(t) {
                    var e, i = t._length;
                    for (e = 0; e < i; e += 1) $t.release(t.v[e]), $t.release(t.i[e]), $t.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                    t._length = 0, t.c = !1
                }

                function i(t) {
                    var e, i = s.newElement(),
                        a = void 0 === t._length ? t.v.length : t._length;
                    for (i.setLength(a), i.c = t.c, e = 0; e < a; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                    return i
                }
                var s = pt(4, t, e);
                return s.clone = i, s
            }();

            function Xt() {
                this._length = 0, this._maxLength = 4, this.shapes = c(this._maxLength)
            }
            Xt.prototype.addShape = function(t) {
                this._length === this._maxLength && (this.shapes = this.shapes.concat(c(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
            }, Xt.prototype.releaseShapes = function() {
                var t;
                for (t = 0; t < this._length; t += 1) Gt.release(this.shapes[t]);
                this._length = 0
            };
            var Ut = function() {
                    var t = {
                            newShapeCollection: a,
                            release: r
                        },
                        e = 0,
                        i = 4,
                        s = c(i);

                    function a() {
                        return e ? s[e -= 1] : new Xt
                    }

                    function r(t) {
                        var a, r = t._length;
                        for (a = 0; a < r; a += 1) Gt.release(t.shapes[a]);
                        t._length = 0, e === i && (s = lt.double(s), i *= 2), s[e] = t, e += 1
                    }
                    return t
                }(),
                Yt = function() {
                    var t = -999999;

                    function e(t, e, i) {
                        var s, a, r, n, o, h, l, p, d, f = i.lastIndex,
                            m = this.keyframes;
                        if (t < m[0].t - this.offsetTime) s = m[0].s[0], r = !0, f = 0;
                        else if (t >= m[m.length - 1].t - this.offsetTime) s = m[m.length - 1].s ? m[m.length - 1].s[0] : m[m.length - 2].e[0], r = !0;
                        else {
                            for (var c, u, g, v = f, y = m.length - 1, b = !0; b && (c = m[v], !((u = m[v + 1]).t - this.offsetTime > t));) v < y - 1 ? v += 1 : b = !1;
                            if (g = this.keyframesMetadata[v] || {}, f = v, !(r = 1 === c.h)) {
                                if (t >= u.t - this.offsetTime) p = 1;
                                else if (t < c.t - this.offsetTime) p = 0;
                                else {
                                    var _;
                                    g.__fnct ? _ = g.__fnct : (_ = ht.getBezierEasing(c.o.x, c.o.y, c.i.x, c.i.y).get, g.__fnct = _), p = _((t - (c.t - this.offsetTime)) / (u.t - this.offsetTime - (c.t - this.offsetTime)))
                                }
                                a = u.s ? u.s[0] : c.e[0]
                            }
                            s = c.s[0]
                        }
                        for (h = e._length, l = s.i[0].length, i.lastIndex = f, n = 0; n < h; n += 1)
                            for (o = 0; o < l; o += 1) d = r ? s.i[n][o] : s.i[n][o] + (a.i[n][o] - s.i[n][o]) * p, e.i[n][o] = d, d = r ? s.o[n][o] : s.o[n][o] + (a.o[n][o] - s.o[n][o]) * p, e.o[n][o] = d, d = r ? s.v[n][o] : s.v[n][o] + (a.v[n][o] - s.v[n][o]) * p, e.v[n][o] = d
                    }

                    function i() {
                        var e = this.comp.renderedFrame - this.offsetTime,
                            i = this.keyframes[0].t - this.offsetTime,
                            s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                            a = this._caching.lastFrame;
                        return a !== t && (a < i && e < i || a > s && e > s) || (this._caching.lastIndex = a < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                    }

                    function s() {
                        this.paths = this.localShapeCollection
                    }

                    function a(t, e) {
                        if (t._length !== e._length || t.c !== e.c) return !1;
                        var i, s = t._length;
                        for (i = 0; i < s; i += 1)
                            if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                        return !0
                    }

                    function r(t) {
                        a(this.v, t) || (this.v = Gt.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                    }

                    function n() {
                        if (this.elem.globalData.frameId !== this.frameId)
                            if (this.effectsSequence.length)
                                if (this.lock) this.setVValue(this.pv);
                                else {
                                    var t, e;
                                    this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                    var i = this.effectsSequence.length;
                                    for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
                                    this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                        else this._mdf = !1
                    }

                    function o(t, e, i) {
                        this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                        var a = 3 === i ? e.pt.k : e.ks.k;
                        this.v = Gt.clone(a), this.pv = Gt.clone(this.v), this.localShapeCollection = Ut.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = s, this.effectsSequence = []
                    }

                    function h(t) {
                        this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                    }

                    function l(e, a, r) {
                        this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === r ? a.pt.k : a.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                        var n = this.keyframes[0].s[0].i.length;
                        this.v = Gt.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n), this.pv = Gt.clone(this.v), this.localShapeCollection = Ut.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = s, this._caching = {
                            lastFrame: t,
                            lastIndex: 0
                        }, this.effectsSequence = [i.bind(this)]
                    }
                    o.prototype.interpolateShape = e, o.prototype.getValue = n, o.prototype.setVValue = r, o.prototype.addEffect = h, l.prototype.getValue = n, l.prototype.interpolateShape = e, l.prototype.setVValue = r, l.prototype.addEffect = h;
                    var d = function() {
                            var t = D;

                            function e(t, e) {
                                this.v = Gt.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = Ut.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = qt.getProp(t, e.p, 1, 0, this), this.s = qt.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                            }
                            return e.prototype = {
                                reset: s,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                },
                                convertEllToPath: function() {
                                    var e = this.p.v[0],
                                        i = this.p.v[1],
                                        s = this.s.v[0] / 2,
                                        a = this.s.v[1] / 2,
                                        r = 3 !== this.d,
                                        n = this.v;
                                    n.v[0][0] = e, n.v[0][1] = i - a, n.v[1][0] = r ? e + s : e - s, n.v[1][1] = i, n.v[2][0] = e, n.v[2][1] = i + a, n.v[3][0] = r ? e - s : e + s, n.v[3][1] = i, n.i[0][0] = r ? e - s * t : e + s * t, n.i[0][1] = i - a, n.i[1][0] = r ? e + s : e - s, n.i[1][1] = i - a * t, n.i[2][0] = r ? e + s * t : e - s * t, n.i[2][1] = i + a, n.i[3][0] = r ? e - s : e + s, n.i[3][1] = i + a * t, n.o[0][0] = r ? e + s * t : e - s * t, n.o[0][1] = i - a, n.o[1][0] = r ? e + s : e - s, n.o[1][1] = i + a * t, n.o[2][0] = r ? e - s * t : e + s * t, n.o[2][1] = i + a, n.o[3][0] = r ? e - s : e + s, n.o[3][1] = i - a * t
                                }
                            }, p([Wt], e), e
                        }(),
                        f = function() {
                            function t(t, e) {
                                this.v = Gt.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = qt.getProp(t, e.ir, 0, 0, this), this.is = qt.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = qt.getProp(t, e.pt, 0, 0, this), this.p = qt.getProp(t, e.p, 1, 0, this), this.r = qt.getProp(t, e.r, 0, A, this), this.or = qt.getProp(t, e.or, 0, 0, this), this.os = qt.getProp(t, e.os, 0, .01, this), this.localShapeCollection = Ut.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                            }
                            return t.prototype = {
                                reset: s,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                },
                                convertStarToPath: function() {
                                    var t, e, i, s, a = 2 * Math.floor(this.pt.v),
                                        r = 2 * Math.PI / a,
                                        n = !0,
                                        o = this.or.v,
                                        h = this.ir.v,
                                        l = this.os.v,
                                        p = this.is.v,
                                        d = 2 * Math.PI * o / (2 * a),
                                        f = 2 * Math.PI * h / (2 * a),
                                        m = -Math.PI / 2;
                                    m += this.r.v;
                                    var c = 3 === this.data.d ? -1 : 1;
                                    for (this.v._length = 0, t = 0; t < a; t += 1) {
                                        i = n ? l : p, s = n ? d : f;
                                        var u = (e = n ? o : h) * Math.cos(m),
                                            g = e * Math.sin(m),
                                            v = 0 === u && 0 === g ? 0 : g / Math.sqrt(u * u + g * g),
                                            y = 0 === u && 0 === g ? 0 : -u / Math.sqrt(u * u + g * g);
                                        u += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(u, g, u - v * s * i * c, g - y * s * i * c, u + v * s * i * c, g + y * s * i * c, t, !0), n = !n, m += r * c
                                    }
                                },
                                convertPolygonToPath: function() {
                                    var t, e = Math.floor(this.pt.v),
                                        i = 2 * Math.PI / e,
                                        s = this.or.v,
                                        a = this.os.v,
                                        r = 2 * Math.PI * s / (4 * e),
                                        n = .5 * -Math.PI,
                                        o = 3 === this.data.d ? -1 : 1;
                                    for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                        var h = s * Math.cos(n),
                                            l = s * Math.sin(n),
                                            p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                            d = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                        h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * r * a * o, l - d * r * a * o, h + p * r * a * o, l + d * r * a * o, t, !0), n += i * o
                                    }
                                    this.paths.length = 0, this.paths[0] = this.v
                                }
                            }, p([Wt], t), t
                        }(),
                        m = function() {
                            function t(t, e) {
                                this.v = Gt.newElement(), this.v.c = !0, this.localShapeCollection = Ut.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = qt.getProp(t, e.p, 1, 0, this), this.s = qt.getProp(t, e.s, 1, 0, this), this.r = qt.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                            }
                            return t.prototype = {
                                convertRectToPath: function() {
                                    var t = this.p.v[0],
                                        e = this.p.v[1],
                                        i = this.s.v[0] / 2,
                                        s = this.s.v[1] / 2,
                                        a = w(i, s, this.r.v),
                                        r = a * (1 - D);
                                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - s + a, t + i, e - s + a, t + i, e - s + r, 0, !0), this.v.setTripleAt(t + i, e + s - a, t + i, e + s - r, t + i, e + s - a, 1, !0), 0 !== a ? (this.v.setTripleAt(t + i - a, e + s, t + i - a, e + s, t + i - r, e + s, 2, !0), this.v.setTripleAt(t - i + a, e + s, t - i + r, e + s, t - i + a, e + s, 3, !0), this.v.setTripleAt(t - i, e + s - a, t - i, e + s - a, t - i, e + s - r, 4, !0), this.v.setTripleAt(t - i, e - s + a, t - i, e - s + r, t - i, e - s + a, 5, !0), this.v.setTripleAt(t - i + a, e - s, t - i + a, e - s, t - i + r, e - s, 6, !0), this.v.setTripleAt(t + i - a, e - s, t + i - r, e - s, t + i - a, e - s, 7, !0)) : (this.v.setTripleAt(t - i, e + s, t - i + r, e + s, t - i, e + s, 2), this.v.setTripleAt(t - i, e - s, t - i, e - s + r, t - i, e - s, 3))) : (this.v.setTripleAt(t + i, e - s + a, t + i, e - s + r, t + i, e - s + a, 0, !0), 0 !== a ? (this.v.setTripleAt(t + i - a, e - s, t + i - a, e - s, t + i - r, e - s, 1, !0), this.v.setTripleAt(t - i + a, e - s, t - i + r, e - s, t - i + a, e - s, 2, !0), this.v.setTripleAt(t - i, e - s + a, t - i, e - s + a, t - i, e - s + r, 3, !0), this.v.setTripleAt(t - i, e + s - a, t - i, e + s - r, t - i, e + s - a, 4, !0), this.v.setTripleAt(t - i + a, e + s, t - i + a, e + s, t - i + r, e + s, 5, !0), this.v.setTripleAt(t + i - a, e + s, t + i - r, e + s, t + i - a, e + s, 6, !0), this.v.setTripleAt(t + i, e + s - a, t + i, e + s - a, t + i, e + s - r, 7, !0)) : (this.v.setTripleAt(t - i, e - s, t - i + r, e - s, t - i, e - s, 1, !0), this.v.setTripleAt(t - i, e + s, t - i, e + s - r, t - i, e + s, 2, !0), this.v.setTripleAt(t + i, e + s, t + i - r, e + s, t + i, e + s, 3, !0)))
                                },
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                },
                                reset: s
                            }, p([Wt], t), t
                        }();

                    function c(t, e, i) {
                        var s;
                        return 3 === i || 4 === i ? s = (3 === i ? e.pt : e.ks).k.length ? new l(t, e, i) : new o(t, e, i) : 5 === i ? s = new m(t, e) : 6 === i ? s = new d(t, e) : 7 === i && (s = new f(t, e)), s.k && t.addDynamicProperty(s), s
                    }

                    function u() {
                        return o
                    }

                    function g() {
                        return l
                    }
                    var v = {};
                    return v.getShapeProp = c, v.getConstructorFunction = u, v.getKeyframedConstructorFunction = g, v
                }(),
                Zt = function() {
                    var t = Math.cos,
                        e = Math.sin,
                        i = Math.tan,
                        s = Math.round;

                    function a() {
                        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                    }

                    function r(i) {
                        if (0 === i) return this;
                        var s = t(i),
                            a = e(i);
                        return this._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function n(i) {
                        if (0 === i) return this;
                        var s = t(i),
                            a = e(i);
                        return this._t(1, 0, 0, 0, 0, s, -a, 0, 0, a, s, 0, 0, 0, 0, 1)
                    }

                    function o(i) {
                        if (0 === i) return this;
                        var s = t(i),
                            a = e(i);
                        return this._t(s, 0, a, 0, 0, 1, 0, 0, -a, 0, s, 0, 0, 0, 0, 1)
                    }

                    function h(i) {
                        if (0 === i) return this;
                        var s = t(i),
                            a = e(i);
                        return this._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function l(t, e) {
                        return this._t(1, e, t, 1, 0, 0)
                    }

                    function p(t, e) {
                        return this.shear(i(t), i(e))
                    }

                    function d(s, a) {
                        var r = t(a),
                            n = e(a);
                        return this._t(r, n, 0, 0, -n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function f(t, e, i) {
                        return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                    }

                    function c(t, e, i, s, a, r, n, o, h, l, p, d, f, m, c, u) {
                        return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = s, this.props[4] = a, this.props[5] = r, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = d, this.props[12] = f, this.props[13] = m, this.props[14] = c, this.props[15] = u, this
                    }

                    function u(t, e, i) {
                        return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                    }

                    function g(t, e, i, s, a, r, n, o, h, l, p, d, f, m, c, u) {
                        var g = this.props;
                        if (1 === t && 0 === e && 0 === i && 0 === s && 0 === a && 1 === r && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === d) return g[12] = g[12] * t + g[15] * f, g[13] = g[13] * r + g[15] * m, g[14] = g[14] * p + g[15] * c, g[15] *= u, this._identityCalculated = !1, this;
                        var v = g[0],
                            y = g[1],
                            b = g[2],
                            _ = g[3],
                            k = g[4],
                            w = g[5],
                            S = g[6],
                            A = g[7],
                            D = g[8],
                            P = g[9],
                            C = g[10],
                            T = g[11],
                            E = g[12],
                            F = g[13],
                            x = g[14],
                            M = g[15];
                        return g[0] = v * t + y * a + b * h + _ * f, g[1] = v * e + y * r + b * l + _ * m, g[2] = v * i + y * n + b * p + _ * c, g[3] = v * s + y * o + b * d + _ * u, g[4] = k * t + w * a + S * h + A * f, g[5] = k * e + w * r + S * l + A * m, g[6] = k * i + w * n + S * p + A * c, g[7] = k * s + w * o + S * d + A * u, g[8] = D * t + P * a + C * h + T * f, g[9] = D * e + P * r + C * l + T * m, g[10] = D * i + P * n + C * p + T * c, g[11] = D * s + P * o + C * d + T * u, g[12] = E * t + F * a + x * h + M * f, g[13] = E * e + F * r + x * l + M * m, g[14] = E * i + F * n + x * p + M * c, g[15] = E * s + F * o + x * d + M * u, this._identityCalculated = !1, this
                    }

                    function v(t) {
                        var e = t.props;
                        return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
                    }

                    function y() {
                        return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                    }

                    function b(t) {
                        for (var e = 0; e < 16;) {
                            if (t.props[e] !== this.props[e]) return !1;
                            e += 1
                        }
                        return !0
                    }

                    function _(t) {
                        var e;
                        for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                        return t
                    }

                    function k(t) {
                        var e;
                        for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                    }

                    function w(t, e, i) {
                        return {
                            x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                            y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                            z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                        }
                    }

                    function S(t, e, i) {
                        return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                    }

                    function A(t, e, i) {
                        return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                    }

                    function D(t, e, i) {
                        return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                    }

                    function P() {
                        var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                            e = this.props[5] / t,
                            i = -this.props[1] / t,
                            s = -this.props[4] / t,
                            a = this.props[0] / t,
                            r = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                            n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                            o = new Zt;
                        return o.props[0] = e, o.props[1] = i, o.props[4] = s, o.props[5] = a, o.props[12] = r, o.props[13] = n, o
                    }

                    function C(t) {
                        return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                    }

                    function T(t) {
                        var e, i = t.length,
                            s = [];
                        for (e = 0; e < i; e += 1) s[e] = C(t[e]);
                        return s
                    }

                    function E(t, e, i) {
                        var s = m("float32", 6);
                        if (this.isIdentity()) s[0] = t[0], s[1] = t[1], s[2] = e[0], s[3] = e[1], s[4] = i[0], s[5] = i[1];
                        else {
                            var a = this.props[0],
                                r = this.props[1],
                                n = this.props[4],
                                o = this.props[5],
                                h = this.props[12],
                                l = this.props[13];
                            s[0] = t[0] * a + t[1] * n + h, s[1] = t[0] * r + t[1] * o + l, s[2] = e[0] * a + e[1] * n + h, s[3] = e[0] * r + e[1] * o + l, s[4] = i[0] * a + i[1] * n + h, s[5] = i[0] * r + i[1] * o + l
                        }
                        return s
                    }

                    function F(t, e, i) {
                        return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
                    }

                    function x(t, e) {
                        if (this.isIdentity()) return t + "," + e;
                        var i = this.props;
                        return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                    }

                    function M() {
                        for (var t = 0, e = this.props, i = "matrix3d(", a = 1e4; t < 16;) i += s(e[t] * a) / a, i += 15 === t ? ")" : ",", t += 1;
                        return i
                    }

                    function I(t) {
                        var e = 1e4;
                        return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? s(t * e) / e : t
                    }

                    function L() {
                        var t = this.props;
                        return "matrix(" + I(t[0]) + "," + I(t[1]) + "," + I(t[4]) + "," + I(t[5]) + "," + I(t[12]) + "," + I(t[13]) + ")"
                    }
                    return function() {
                        this.reset = a, this.rotate = r, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = d, this.shear = l, this.scale = f, this.setTransform = c, this.translate = u, this.transform = g, this.multiply = v, this.applyToPoint = w, this.applyToX = S, this.applyToY = A, this.applyToZ = D, this.applyToPointArray = F, this.applyToTriplePoints = E, this.applyToPointStringified = x, this.toCSS = M, this.to2dCSS = L, this.clone = _, this.cloneFromProps = k, this.equals = b, this.inversePoints = T, this.inversePoint = C, this.getInverseMatrix = P, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = m("float32", 16), this.reset()
                    }
                }();

            function Jt(t) {
                return Jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Jt(t)
            }
            var Kt = {};

            function Qt(t) {
                o(t)
            }

            function te() {
                ot.searchAnimations()
            }

            function ee(t) {
                B(t)
            }

            function ie(t) {
                X(t)
            }

            function se(t) {
                return ot.loadAnimation(t)
            }

            function ae(t) {
                if ("string" == typeof t) switch (t) {
                    case "high":
                        H(200);
                        break;
                    default:
                    case "medium":
                        H(50);
                        break;
                    case "low":
                        H(10)
                } else !isNaN(t) && t > 1 && H(t)
            }

            function re() {
                return "undefined" != typeof navigator
            }

            function ne(t, e) {
                "expressions" === t && W(e)
            }

            function oe(t) {
                switch (t) {
                    case "propertyFactory":
                        return qt;
                    case "shapePropertyFactory":
                        return Yt;
                    case "matrix":
                        return Zt;
                    default:
                        return null
                }
            }

            function he() {
                "complete" === document.readyState && (clearInterval(ce), te())
            }

            function le(t) {
                for (var e = pe.split("&"), i = 0; i < e.length; i += 1) {
                    var s = e[i].split("=");
                    if (decodeURIComponent(s[0]) == t) return decodeURIComponent(s[1])
                }
                return null
            }
            Kt.play = ot.play, Kt.pause = ot.pause, Kt.setLocationHref = Qt, Kt.togglePause = ot.togglePause, Kt.setSpeed = ot.setSpeed, Kt.setDirection = ot.setDirection, Kt.stop = ot.stop, Kt.searchAnimations = te, Kt.registerAnimation = ot.registerAnimation, Kt.loadAnimation = se, Kt.setSubframeRendering = ee, Kt.resize = ot.resize, Kt.goToAndStop = ot.goToAndStop, Kt.destroy = ot.destroy, Kt.setQuality = ae, Kt.inBrowser = re, Kt.installPlugin = ne, Kt.freeze = ot.freeze, Kt.unfreeze = ot.unfreeze, Kt.setVolume = ot.setVolume, Kt.mute = ot.mute, Kt.unmute = ot.unmute, Kt.getRegisteredAnimations = ot.getRegisteredAnimations, Kt.useWebWorker = r, Kt.setIDPrefix = ie, Kt.__getFactory = oe, Kt.version = "5.12.2";
            var pe = "",
                de = document.getElementsByTagName("script"),
                fe = de.length - 1,
                me = de[fe] || {
                    src: ""
                };
            pe = me.src ? me.src.replace(/^[^\?]+\??/, "") : "", le("renderer");
            var ce = setInterval(he, 100);
            try {
                "object" !== Jt(e) && (window.bodymovin = Kt)
            } catch (t) {}

            function ue(t) {
                for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", s = "normal", a = e.length, r = 0; r < a; r += 1) switch (e[r].toLowerCase()) {
                    case "italic":
                        s = "italic";
                        break;
                    case "bold":
                        i = "700";
                        break;
                    case "black":
                        i = "900";
                        break;
                    case "medium":
                        i = "500";
                        break;
                    case "regular":
                    case "normal":
                        i = "400";
                        break;
                    case "light":
                    case "thin":
                        i = "200"
                }
                return {
                    style: s,
                    weight: t.fWeight || i
                }
            }
            var ge = function() {
                var t = 5e3,
                    e = {
                        w: 0,
                        size: 0,
                        shapes: [],
                        data: {
                            shapes: []
                        }
                    },
                    i = [];
                i = i.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                var s = 127988,
                    a = 917631,
                    r = 917601,
                    n = 917626,
                    o = 65039,
                    h = 8205,
                    p = 127462,
                    d = 127487,
                    f = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

                function m(t) {
                    var e, i = t.split(","),
                        s = i.length,
                        a = [];
                    for (e = 0; e < s; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && a.push(i[e]);
                    return a.join(",")
                }

                function c(t, e) {
                    var i = l("span");
                    i.setAttribute("aria-hidden", !0), i.style.fontFamily = e;
                    var s = l("span");
                    s.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(s), document.body.appendChild(i);
                    var a = s.offsetWidth;
                    return s.style.fontFamily = m(t) + ", " + e, {
                        node: s,
                        w: a,
                        parent: i
                    }
                }

                function u() {
                    var e, i, s, a = this.fonts.length,
                        r = a;
                    for (e = 0; e < a; e += 1) this.fonts[e].loaded ? r -= 1 : "n" === this.fonts[e].fOrigin || 0 === this.fonts[e].origin ? this.fonts[e].loaded = !0 : (i = this.fonts[e].monoCase.node, s = this.fonts[e].monoCase.w, i.offsetWidth !== s ? (r -= 1, this.fonts[e].loaded = !0) : (i = this.fonts[e].sansCase.node, s = this.fonts[e].sansCase.w, i.offsetWidth !== s && (r -= 1, this.fonts[e].loaded = !0)), this.fonts[e].loaded && (this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent), this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));
                    0 !== r && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                }

                function g(t, e) {
                    var i, s = document.body && e ? "svg" : "canvas",
                        a = ue(t);
                    if ("svg" === s) {
                        var r = U("text");
                        r.style.fontSize = "100px", r.setAttribute("font-family", t.fFamily), r.setAttribute("font-style", a.style), r.setAttribute("font-weight", a.weight), r.textContent = "1", t.fClass ? (r.style.fontFamily = "inherit", r.setAttribute("class", t.fClass)) : r.style.fontFamily = t.fFamily, e.appendChild(r), i = r
                    } else {
                        var n = new OffscreenCanvas(500, 500).getContext("2d");
                        n.font = a.style + " " + a.weight + " 100px " + t.fFamily, i = n
                    }

                    function o(t) {
                        return "svg" === s ? (i.textContent = t, i.getComputedTextLength()) : i.measureText(t).width
                    }
                    return {
                        measureText: o
                    }
                }

                function v(t, e) {
                    if (t) {
                        if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                        if (!document.body) return this.isLoaded = !0, t.list.forEach((function(t) {
                            t.helper = g(t), t.cache = {}
                        })), void(this.fonts = t.list);
                        var i, s = t.list,
                            a = s.length,
                            r = a;
                        for (i = 0; i < a; i += 1) {
                            var n, o, h = !0;
                            if (s[i].loaded = !1, s[i].monoCase = c(s[i].fFamily, "monospace"), s[i].sansCase = c(s[i].fFamily, "sans-serif"), s[i].fPath) {
                                if ("p" === s[i].fOrigin || 3 === s[i].origin) {
                                    if ((n = document.querySelectorAll('style[f-forigin="p"][f-family="' + s[i].fFamily + '"], style[f-origin="3"][f-family="' + s[i].fFamily + '"]')).length > 0 && (h = !1), h) {
                                        var p = l("style");
                                        p.setAttribute("f-forigin", s[i].fOrigin), p.setAttribute("f-origin", s[i].origin), p.setAttribute("f-family", s[i].fFamily), p.type = "text/css", p.innerText = "@font-face {font-family: " + s[i].fFamily + "; font-style: normal; src: url('" + s[i].fPath + "');}", e.appendChild(p)
                                    }
                                } else if ("g" === s[i].fOrigin || 1 === s[i].origin) {
                                    for (n = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), o = 0; o < n.length; o += 1) - 1 !== n[o].href.indexOf(s[i].fPath) && (h = !1);
                                    if (h) {
                                        var d = l("link");
                                        d.setAttribute("f-forigin", s[i].fOrigin), d.setAttribute("f-origin", s[i].origin), d.type = "text/css", d.rel = "stylesheet", d.href = s[i].fPath, document.body.appendChild(d)
                                    }
                                } else if ("t" === s[i].fOrigin || 2 === s[i].origin) {
                                    for (n = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), o = 0; o < n.length; o += 1) s[i].fPath === n[o].src && (h = !1);
                                    if (h) {
                                        var f = l("link");
                                        f.setAttribute("f-forigin", s[i].fOrigin), f.setAttribute("f-origin", s[i].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", s[i].fPath), e.appendChild(f)
                                    }
                                }
                            } else s[i].loaded = !0, r -= 1;
                            s[i].helper = g(s[i], e), s[i].cache = {}, this.fonts.push(s[i])
                        }
                        0 === r ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                    } else this.isLoaded = !0
                }

                function y(t) {
                    if (t) {
                        var e;
                        this.chars || (this.chars = []);
                        var i, s, a = t.length,
                            r = this.chars.length;
                        for (e = 0; e < a; e += 1) {
                            for (i = 0, s = !1; i < r;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (s = !0), i += 1;
                            s || (this.chars.push(t[e]), r += 1)
                        }
                    }
                }

                function b(t, i, s) {
                    for (var a = 0, r = this.chars.length; a < r;) {
                        if (this.chars[a].ch === t && this.chars[a].style === i && this.chars[a].fFamily === s) return this.chars[a];
                        a += 1
                    }
                    return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", t, i, s)), e
                }

                function _(t, e, i) {
                    var s = this.getFontByName(e),
                        a = t;
                    if (!s.cache[a]) {
                        var r = s.helper;
                        if (" " === t) {
                            var n = r.measureText("|" + t + "|"),
                                o = r.measureText("||");
                            s.cache[a] = (n - o) / 100
                        } else s.cache[a] = r.measureText(t) / 100
                    }
                    return s.cache[a] * i
                }

                function k(t) {
                    for (var e = 0, i = this.fonts.length; e < i;) {
                        if (this.fonts[e].fName === t) return this.fonts[e];
                        e += 1
                    }
                    return this.fonts[0]
                }

                function w(t) {
                    var e = 0,
                        i = t.charCodeAt(0);
                    if (i >= 55296 && i <= 56319) {
                        var s = t.charCodeAt(1);
                        s >= 56320 && s <= 57343 && (e = 1024 * (i - 55296) + s - 56320 + 65536)
                    }
                    return e
                }

                function S(t, e) {
                    var i = t.toString(16) + e.toString(16);
                    return -1 !== f.indexOf(i)
                }

                function A(t) {
                    return t === h
                }

                function D(t) {
                    return t === o
                }

                function P(t) {
                    var e = w(t);
                    return e >= p && e <= d
                }

                function C(t) {
                    return P(t.substr(0, 2)) && P(t.substr(2, 2))
                }

                function T(t) {
                    return -1 !== i.indexOf(t)
                }

                function E(t, e) {
                    var i = w(t.substr(e, 2));
                    if (i !== s) return !1;
                    var o = 0;
                    for (e += 2; o < 5;) {
                        if ((i = w(t.substr(e, 2))) < r || i > n) return !1;
                        o += 1, e += 2
                    }
                    return w(t.substr(e, 2)) === a
                }

                function F() {
                    this.isLoaded = !0
                }
                var x = function() {
                    this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                };
                x.isModifier = S, x.isZeroWidthJoiner = A, x.isFlagEmoji = C, x.isRegionalCode = P, x.isCombinedCharacter = T, x.isRegionalFlag = E, x.isVariationSelector = D, x.BLACK_FLAG_CODE_POINT = s;
                var M = {
                    addChars: y,
                    addFonts: v,
                    getCharData: b,
                    getFontByName: k,
                    measureText: _,
                    checkLoadedFonts: u,
                    setIsLoaded: F
                };
                return x.prototype = M, x
            }();

            function ve(t) {
                this.animationData = t
            }

            function ye(t) {
                return new ve(t)
            }

            function be() {}
            ve.prototype.getProp = function(t) {
                return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
            }, be.prototype = {
                initRenderable: function() {
                    this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                },
                addRenderableComponent: function(t) {
                    -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                },
                removeRenderableComponent: function(t) {
                    -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                },
                prepareRenderableFrame: function(t) {
                    this.checkLayerLimits(t)
                },
                checkTransparency: function() {
                    this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                },
                checkLayerLimits: function(t) {
                    this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                },
                renderRenderable: function() {
                    var t, e = this.renderableComponents.length;
                    for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                },
                sourceRectAtTime: function() {
                    return {
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100
                    }
                },
                getLayerSize: function() {
                    return 5 === this.data.ty ? {
                        w: this.data.textData.width,
                        h: this.data.textData.height
                    } : {
                        w: this.data.width,
                        h: this.data.height
                    }
                }
            };
            var _e, ke = (_e = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            }, function(t) {
                return _e[t] || ""
            });

            function we(t, e, i) {
                this.p = qt.getProp(e, t.v, 0, 0, i)
            }

            function Se(t, e, i) {
                this.p = qt.getProp(e, t.v, 0, 0, i)
            }

            function Ae(t, e, i) {
                this.p = qt.getProp(e, t.v, 1, 0, i)
            }

            function De(t, e, i) {
                this.p = qt.getProp(e, t.v, 1, 0, i)
            }

            function Pe(t, e, i) {
                this.p = qt.getProp(e, t.v, 0, 0, i)
            }

            function Ce(t, e, i) {
                this.p = qt.getProp(e, t.v, 0, 0, i)
            }

            function Te(t, e, i) {
                this.p = qt.getProp(e, t.v, 0, 0, i)
            }

            function Ee() {
                this.p = {}
            }

            function Fe(t, e) {
                var i, s = t.ef || [];
                this.effectElements = [];
                var a, r = s.length;
                for (i = 0; i < r; i += 1) a = new xe(s[i], e), this.effectElements.push(a)
            }

            function xe(t, e) {
                this.init(t, e)
            }

            function Me() {}

            function Ie() {}

            function Le(t, e, i) {
                this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
            }

            function Oe(t, e, i) {
                this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
                var s = this.globalData.getAssetsPath(this.assetData);
                this.audio = this.globalData.audioController.createAudio(s), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? qt.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }, this.lv = qt.getProp(this, t.au && t.au.lv ? t.au.lv : {
                    k: [100]
                }, 1, .01, this)
            }

            function Re() {}
            p([Wt], xe), xe.prototype.getValue = xe.prototype.iterateDynamicProperties, xe.prototype.init = function(t, e) {
                var i;
                this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                var s, a = this.data.ef.length,
                    r = this.data.ef;
                for (i = 0; i < a; i += 1) {
                    switch (s = null, r[i].ty) {
                        case 0:
                            s = new we(r[i], e, this);
                            break;
                        case 1:
                            s = new Se(r[i], e, this);
                            break;
                        case 2:
                            s = new Ae(r[i], e, this);
                            break;
                        case 3:
                            s = new De(r[i], e, this);
                            break;
                        case 4:
                        case 7:
                            s = new Te(r[i], e, this);
                            break;
                        case 10:
                            s = new Pe(r[i], e, this);
                            break;
                        case 11:
                            s = new Ce(r[i], e, this);
                            break;
                        case 5:
                            s = new Fe(r[i], e);
                            break;
                        default:
                            s = new Ee(r[i])
                    }
                    s && this.effectElements.push(s)
                }
            }, Me.prototype = {
                checkMasks: function() {
                    if (!this.data.hasMask) return !1;
                    for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                        if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                        t += 1
                    }
                    return !1
                },
                initExpressions: function() {},
                setBlendMode: function() {
                    var t = ke(this.data.bm);
                    (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                },
                initBaseData: function(t, e, i) {
                    this.globalData = e, this.comp = i, this.data = t, this.layerId = L(), this.data.sr || (this.data.sr = 1), this.effectsManager = new Fe(this.data, this, this.dynamicProperties)
                },
                getType: function() {
                    return this.type
                },
                sourceRectAtTime: function() {}
            }, Ie.prototype = {
                initFrame: function() {
                    this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                },
                prepareProperties: function(t, e) {
                    var i, s = this.dynamicProperties.length;
                    for (i = 0; i < s; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                },
                addDynamicProperty: function(t) {
                    -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                }
            }, Le.prototype.prepareFrame = function() {}, p([be, Me, Ie], Le), Le.prototype.getBaseElement = function() {
                return null
            }, Le.prototype.renderFrame = function() {}, Le.prototype.destroy = function() {}, Le.prototype.initExpressions = function() {}, Le.prototype.getFootageData = function() {
                return this.footageData
            }, Oe.prototype.prepareFrame = function(t) {
                if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    this._currentTime = e
                }
                this._volume = this.lv.v[0];
                var i = this._volume * this._volumeMultiplier;
                this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i))
            }, p([be, Me, Ie], Oe), Oe.prototype.renderFrame = function() {
                this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
            }, Oe.prototype.show = function() {}, Oe.prototype.hide = function() {
                this.audio.pause(), this._isPlaying = !1
            }, Oe.prototype.pause = function() {
                this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
            }, Oe.prototype.resume = function() {
                this._canPlay = !0
            }, Oe.prototype.setRate = function(t) {
                this.audio.rate(t)
            }, Oe.prototype.volume = function(t) {
                this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
            }, Oe.prototype.getBaseElement = function() {
                return null
            }, Oe.prototype.destroy = function() {}, Oe.prototype.sourceRectAtTime = function() {}, Oe.prototype.initExpressions = function() {}, Re.prototype.checkLayers = function(t) {
                var e, i, s = this.layers.length;
                for (this.completeLayers = !0, e = s - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                this.checkPendingElements()
            }, Re.prototype.createItem = function(t) {
                switch (t.ty) {
                    case 2:
                        return this.createImage(t);
                    case 0:
                        return this.createComp(t);
                    case 1:
                        return this.createSolid(t);
                    case 3:
                    default:
                        return this.createNull(t);
                    case 4:
                        return this.createShape(t);
                    case 5:
                        return this.createText(t);
                    case 6:
                        return this.createAudio(t);
                    case 13:
                        return this.createCamera(t);
                    case 15:
                        return this.createFootage(t)
                }
            }, Re.prototype.createCamera = function() {
                throw new Error("You're using a 3d camera. Try the html renderer.")
            }, Re.prototype.createAudio = function(t) {
                return new Oe(t, this.globalData, this)
            }, Re.prototype.createFootage = function(t) {
                return new Le(t, this.globalData, this)
            }, Re.prototype.buildAllItems = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1) this.buildItem(t);
                this.checkPendingElements()
            }, Re.prototype.includeLayers = function(t) {
                var e;
                this.completeLayers = !1;
                var i, s = t.length,
                    a = this.layers.length;
                for (e = 0; e < s; e += 1)
                    for (i = 0; i < a;) {
                        if (this.layers[i].id === t[e].id) {
                            this.layers[i] = t[e];
                            break
                        }
                        i += 1
                    }
            }, Re.prototype.setProjectInterface = function(t) {
                this.globalData.projectInterface = t
            }, Re.prototype.initItems = function() {
                this.globalData.progressiveLoad || this.buildAllItems()
            }, Re.prototype.buildElementParenting = function(t, e, i) {
                for (var s = this.elements, a = this.layers, r = 0, n = a.length; r < n;) a[r].ind == e && (s[r] && !0 !== s[r] ? (i.push(s[r]), s[r].setAsParent(), void 0 !== a[r].parent ? this.buildElementParenting(t, a[r].parent, i) : t.setHierarchy(i)) : (this.buildItem(r), this.addPendingElement(t))), r += 1
            }, Re.prototype.addPendingElement = function(t) {
                this.pendingElements.push(t)
            }, Re.prototype.searchExtraCompositions = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1)
                    if (t[e].xt) {
                        var s = this.createComp(t[e]);
                        s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
                    }
            }, Re.prototype.getElementById = function(t) {
                var e, i = this.elements.length;
                for (e = 0; e < i; e += 1)
                    if (this.elements[e].data.ind === t) return this.elements[e];
                return null
            }, Re.prototype.getElementByPath = function(t) {
                var e, i = t.shift();
                if ("number" == typeof i) e = this.elements[i];
                else {
                    var s, a = this.elements.length;
                    for (s = 0; s < a; s += 1)
                        if (this.elements[s].data.nm === i) {
                            e = this.elements[s];
                            break
                        }
                }
                return 0 === t.length ? e : e.getElementByPath(t)
            }, Re.prototype.setupGlobalData = function(t, e) {
                this.globalData.fontManager = new ge, this.globalData.slotManager = ye(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                    w: t.w,
                    h: t.h
                }
            };
            var Ve = function() {
                    var t = [0, 0];

                    function e(t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }

                    function i(e) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                var i;
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    var s, a;
                                    if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (s = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (s = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (s = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        s = [], a = [];
                                        var r = this.px,
                                            n = this.py;
                                        r._caching.lastFrame + r.offsetTime <= r.keyframes[0].t ? (s[0] = r.getValueAtTime((r.keyframes[0].t + .01) / i, 0), s[1] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), a[0] = r.getValueAtTime(r.keyframes[0].t / i, 0), a[1] = n.getValueAtTime(n.keyframes[0].t / i, 0)) : r._caching.lastFrame + r.offsetTime >= r.keyframes[r.keyframes.length - 1].t ? (s[0] = r.getValueAtTime(r.keyframes[r.keyframes.length - 1].t / i, 0), s[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), a[0] = r.getValueAtTime((r.keyframes[r.keyframes.length - 1].t - .01) / i, 0), a[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0)) : (s = [r.pv, n.pv], a[0] = r.getValueAtTime((r._caching.lastFrame + r.offsetTime - .01) / i, r.offsetTime), a[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime))
                                    } else s = a = t;
                                    this.v.rotate(-Math.atan2(s[1] - a[1], s[0] - a[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    }

                    function s() {
                        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    }

                    function a() {}

                    function r(t) {
                        this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                    }

                    function n(t, e, i) {
                        if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Zt, this.pre = new Zt, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = qt.getProp(t, e.p.x, 0, 0, this), this.py = qt.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = qt.getProp(t, e.p.z, 0, 0, this))) : this.p = qt.getProp(t, e.p || {
                                k: [0, 0, 0]
                            }, 1, 0, this), e.rx) {
                            if (this.rx = qt.getProp(t, e.rx, 0, A, this), this.ry = qt.getProp(t, e.ry, 0, A, this), this.rz = qt.getProp(t, e.rz, 0, A, this), e.or.k[0].ti) {
                                var s, a = e.or.k.length;
                                for (s = 0; s < a; s += 1) e.or.k[s].to = null, e.or.k[s].ti = null
                            }
                            this.or = qt.getProp(t, e.or, 1, A, this), this.or.sh = !0
                        } else this.r = qt.getProp(t, e.r || {
                            k: 0
                        }, 0, A, this);
                        e.sk && (this.sk = qt.getProp(t, e.sk, 0, A, this), this.sa = qt.getProp(t, e.sa, 0, A, this)), this.a = qt.getProp(t, e.a || {
                            k: [0, 0, 0]
                        }, 1, 0, this), this.s = qt.getProp(t, e.s || {
                            k: [100, 100, 100]
                        }, 1, .01, this), e.o ? this.o = qt.getProp(t, e.o, 0, .01, t) : this.o = {
                            _mdf: !1,
                            v: 1
                        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                    }

                    function o(t, e, i) {
                        return new n(t, e, i)
                    }
                    return n.prototype = {
                        applyToMatrix: e,
                        getValue: i,
                        precalculateMatrix: s,
                        autoOrient: a
                    }, p([Wt], n), n.prototype.addDynamicProperty = r, n.prototype._addDynamicProperty = Wt.prototype.addDynamicProperty, {
                        getTransformProperty: o
                    }
                }(),
                Ne = {
                    TRANSFORM_EFFECT: "transformEFfect"
                };

            function ze() {}

            function je(t, e, i) {
                this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                var s, a, r = this.globalData.defs,
                    n = this.masksProperties ? this.masksProperties.length : 0;
                this.viewData = c(n), this.solidPath = "";
                var o, l, p, d, f, m, u = this.masksProperties,
                    g = 0,
                    v = [],
                    y = L(),
                    b = "clipPath",
                    _ = "clip-path";
                for (s = 0; s < n; s += 1)
                    if (("a" !== u[s].mode && "n" !== u[s].mode || u[s].inv || 100 !== u[s].o.k || u[s].o.x) && (b = "mask", _ = "mask"), "s" !== u[s].mode && "i" !== u[s].mode || 0 !== g ? p = null : ((p = U("rect")).setAttribute("fill", "#ffffff"), p.setAttribute("width", this.element.comp.data.w || 0), p.setAttribute("height", this.element.comp.data.h || 0), v.push(p)), a = U("path"), "n" === u[s].mode) this.viewData[s] = {
                        op: qt.getProp(this.element, u[s].o, 0, .01, this.element),
                        prop: Yt.getShapeProp(this.element, u[s], 3),
                        elem: a,
                        lastPath: ""
                    }, r.appendChild(a);
                    else {
                        var k;
                        if (g += 1, a.setAttribute("fill", "s" === u[s].mode ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero"), 0 !== u[s].x.k ? (b = "mask", _ = "mask", m = qt.getProp(this.element, u[s].x, 0, null, this.element), k = L(), (d = U("filter")).setAttribute("id", k), (f = U("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), d.appendChild(f), r.appendChild(d), a.setAttribute("stroke", "s" === u[s].mode ? "#000000" : "#ffffff")) : (f = null, m = null), this.storedData[s] = {
                                elem: a,
                                x: m,
                                expan: f,
                                lastPath: "",
                                lastOperator: "",
                                filterId: k,
                                lastRadius: 0
                            }, "i" === u[s].mode) {
                            l = v.length;
                            var w = U("g");
                            for (o = 0; o < l; o += 1) w.appendChild(v[o]);
                            var S = U("mask");
                            S.setAttribute("mask-type", "alpha"), S.setAttribute("id", y + "_" + g), S.appendChild(a), r.appendChild(S), w.setAttribute("mask", "url(" + h() + "#" + y + "_" + g + ")"), v.length = 0, v.push(w)
                        } else v.push(a);
                        u[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
                            elem: a,
                            lastPath: "",
                            op: qt.getProp(this.element, u[s].o, 0, .01, this.element),
                            prop: Yt.getShapeProp(this.element, u[s], 3),
                            invRect: p
                        }, this.viewData[s].prop.k || this.drawPath(u[s], this.viewData[s].prop.v, this.viewData[s])
                    }
                for (this.maskElement = U(b), n = v.length, s = 0; s < n; s += 1) this.maskElement.appendChild(v[s]);
                g > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(_, "url(" + h() + "#" + y + ")"), r.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
            }
            ze.prototype = {
                initTransform: function() {
                    var t = new Zt;
                    this.finalTransform = {
                        mProp: this.data.ks ? Ve.getTransformProperty(this, this.data.ks, this) : {
                            o: 0
                        },
                        _matMdf: !1,
                        _localMatMdf: !1,
                        _opMdf: !1,
                        mat: t,
                        localMat: t,
                        localOpacity: 1
                    }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                },
                renderTransform: function() {
                    if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                        var t, e = this.finalTransform.mat,
                            i = 0,
                            s = this.hierarchy.length;
                        if (!this.finalTransform._matMdf)
                            for (; i < s;) {
                                if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                    this.finalTransform._matMdf = !0;
                                    break
                                }
                                i += 1
                            }
                        if (this.finalTransform._matMdf)
                            for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < s; i += 1) e.multiply(this.hierarchy[i].finalTransform.mProp.v)
                    }
                    this.localTransforms && !this.finalTransform._matMdf || (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
                },
                renderLocalTransform: function() {
                    if (this.localTransforms) {
                        var t = 0,
                            e = this.localTransforms.length;
                        if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                            for (; t < e;) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
                        if (this.finalTransform._localMatMdf) {
                            var i = this.finalTransform.localMat;
                            for (this.localTransforms[0].matrix.clone(i), t = 1; t < e; t += 1) {
                                var s = this.localTransforms[t].matrix;
                                i.multiply(s)
                            }
                            i.multiply(this.finalTransform.mat)
                        }
                        if (this.finalTransform._opMdf) {
                            var a = this.finalTransform.localOpacity;
                            for (t = 0; t < e; t += 1) a *= .01 * this.localTransforms[t].opacity;
                            this.finalTransform.localOpacity = a
                        }
                    }
                },
                searchEffectTransforms: function() {
                    if (this.renderableEffectsManager) {
                        var t = this.renderableEffectsManager.getEffects(Ne.TRANSFORM_EFFECT);
                        if (t.length) {
                            this.localTransforms = [], this.finalTransform.localMat = new Zt;
                            var e = 0,
                                i = t.length;
                            for (e = 0; e < i; e += 1) this.localTransforms.push(t[e])
                        }
                    }
                },
                globalToLocal: function(t) {
                    var e = [];
                    e.push(this.finalTransform);
                    for (var i, s = !0, a = this.comp; s;) a.finalTransform ? (a.data.hasMask && e.splice(0, 0, a.finalTransform), a = a.comp) : s = !1;
                    var r, n = e.length;
                    for (i = 0; i < n; i += 1) r = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - r[0], t[1] - r[1], 0];
                    return t
                },
                mHelper: new Zt
            }, je.prototype.getMaskProperty = function(t) {
                return this.viewData[t].prop
            }, je.prototype.renderFrame = function(t) {
                var e, i = this.element.finalTransform.mat,
                    s = this.masksProperties.length;
                for (e = 0; e < s; e += 1)
                    if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                        var a = this.storedData[e].expan;
                        this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + h() + "#" + this.storedData[e].filterId + ")")), a.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                    }
            }, je.prototype.getMaskelement = function() {
                return this.maskElement
            }, je.prototype.createLayerSolidPath = function() {
                var t = "M0,0 ";
                return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
            }, je.prototype.drawPath = function(t, e, i) {
                var s, a, r = " M" + e.v[0][0] + "," + e.v[0][1];
                for (a = e._length, s = 1; s < a; s += 1) r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
                if (e.c && a > 1 && (r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== r) {
                    var n = "";
                    i.elem && (e.c && (n = t.inv ? this.solidPath + r : r), i.elem.setAttribute("d", n)), i.lastPath = r
                }
            }, je.prototype.destroy = function() {
                this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
            };
            var Be, qe = function() {
                    var t = {};

                    function e(t, e) {
                        var i = U("filter");
                        return i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
                    }

                    function i() {
                        var t = U("feColorMatrix");
                        return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                    }
                    return t.createFilter = e, t.createAlphaToLuminanceFilter = i, t
                }(),
                We = (Be = {
                    maskType: !0,
                    svgLumaHidden: !0,
                    offscreenCanvas: "undefined" != typeof OffscreenCanvas
                }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (Be.maskType = !1), /firefox/i.test(navigator.userAgent) && (Be.svgLumaHidden = !1), Be),
                $e = {},
                He = "filter_result_";

            function Ge(t) {
                var e, i, s = "SourceGraphic",
                    a = t.data.ef ? t.data.ef.length : 0,
                    r = L(),
                    n = qe.createFilter(r, !0),
                    o = 0;
                for (this.filters = [], e = 0; e < a; e += 1) {
                    i = null;
                    var l = t.data.ef[e].ty;
                    $e[l] && (i = new(0, $e[l].effect)(n, t.effectsManager.effectElements[e], t, He + o, s), s = He + o, $e[l].countsAsEffect && (o += 1)), i && this.filters.push(i)
                }
                o && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + h() + "#" + r + ")")), this.filters.length && t.addRenderableComponent(this)
            }

            function Xe(t, e, i) {
                $e[t] = {
                    effect: e,
                    countsAsEffect: i
                }
            }

            function Ue() {}

            function Ye() {}

            function Ze() {}

            function Je(t, e, i) {
                this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = {
                    top: 0,
                    left: 0,
                    width: this.assetData.w,
                    height: this.assetData.h
                }
            }

            function Ke(t, e) {
                this.elem = t, this.pos = e
            }

            function Qe() {}
            Ge.prototype.renderFrame = function(t) {
                var e, i = this.filters.length;
                for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
            }, Ge.prototype.getEffects = function(t) {
                var e, i = this.filters.length,
                    s = [];
                for (e = 0; e < i; e += 1) this.filters[e].type === t && s.push(this.filters[e]);
                return s
            }, Ue.prototype = {
                initRendererElement: function() {
                    this.layerElement = U("g")
                },
                createContainerElements: function() {
                    this.matteElement = U("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                    var t = null;
                    if (this.data.td) {
                        this.matteMasks = {};
                        var e = U("g");
                        e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
                    } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                    if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                        var i = U("clipPath"),
                            s = U("path");
                        s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                        var a = L();
                        if (i.setAttribute("id", a), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
                            var r = U("g");
                            r.setAttribute("clip-path", "url(" + h() + "#" + a + ")"), r.appendChild(this.layerElement), this.transformedElement = r, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                        } else this.layerElement.setAttribute("clip-path", "url(" + h() + "#" + a + ")")
                    }
                    0 !== this.data.bm && this.setBlendMode()
                },
                renderElement: function() {
                    this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
                },
                destroyBaseElement: function() {
                    this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                },
                getBaseElement: function() {
                    return this.data.hd ? null : this.baseElement
                },
                createRenderableComponents: function() {
                    this.maskManager = new je(this.data, this, this.globalData), this.renderableEffectsManager = new Ge(this), this.searchEffectTransforms()
                },
                getMatte: function(t) {
                    if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                        var e, i, s, a, r = this.layerId + "_" + t;
                        if (1 === t || 3 === t) {
                            var n = U("mask");
                            n.setAttribute("id", r), n.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (s = U("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(s), this.globalData.defs.appendChild(n), We.maskType || 1 !== t || (n.setAttribute("mask-type", "luminance"), e = L(), i = qe.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(qe.createAlphaToLuminanceFilter()), (a = U("g")).appendChild(s), n.appendChild(a), a.setAttribute("filter", "url(" + h() + "#" + e + ")"))
                        } else if (2 === t) {
                            var o = U("mask");
                            o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
                            var l = U("g");
                            o.appendChild(l), e = L(), i = qe.createFilter(e);
                            var p = U("feComponentTransfer");
                            p.setAttribute("in", "SourceGraphic"), i.appendChild(p);
                            var d = U("feFuncA");
                            d.setAttribute("type", "table"), d.setAttribute("tableValues", "1.0 0.0"), p.appendChild(d), this.globalData.defs.appendChild(i);
                            var f = U("rect");
                            f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + h() + "#" + e + ")"), l.appendChild(f), (s = U("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(s), We.maskType || (o.setAttribute("mask-type", "luminance"), i.appendChild(qe.createAlphaToLuminanceFilter()), a = U("g"), l.appendChild(f), a.appendChild(this.layerElement), l.appendChild(a)), this.globalData.defs.appendChild(o)
                        }
                        this.matteMasks[t] = r
                    }
                    return this.matteMasks[t]
                },
                setMatte: function(t) {
                    this.matteElement && this.matteElement.setAttribute("mask", "url(" + h() + "#" + t + ")")
                }
            }, Ye.prototype = {
                initHierarchy: function() {
                    this.hierarchy = [], this._isParent = !1, this.checkParenting()
                },
                setHierarchy: function(t) {
                    this.hierarchy = t
                },
                setAsParent: function() {
                    this._isParent = !0
                },
                checkParenting: function() {
                    void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                }
            }, p([be, d({
                initElement: function(t, e, i) {
                    this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                },
                hide: function() {
                    this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                },
                show: function() {
                    this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                renderInnerContent: function() {},
                prepareFrame: function(t) {
                    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                },
                destroy: function() {
                    this.innerElem = null, this.destroyBaseElement()
                }
            })], Ze), p([Me, ze, Ue, Ye, Ie, Ze], Je), Je.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData);
                this.innerElem = U("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
            }, Je.prototype.sourceRectAtTime = function() {
                return this.sourceRect
            }, Qe.prototype = {
                addShapeToModifiers: function(t) {
                    var e, i = this.shapeModifiers.length;
                    for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
                },
                isShapeInAnimatedModifiers: function(t) {
                    for (var e = 0, i = this.shapeModifiers.length; e < i;)
                        if (this.shapeModifiers[e].isAnimatedWithShape(t)) return !0;
                    return !1
                },
                renderModifiers: function() {
                    if (this.shapeModifiers.length) {
                        var t, e = this.shapes.length;
                        for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                        for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                    }
                },
                searchProcessedElement: function(t) {
                    for (var e = this.processedElements, i = 0, s = e.length; i < s;) {
                        if (e[i].elem === t) return e[i].pos;
                        i += 1
                    }
                    return 0
                },
                addProcessedElement: function(t, e) {
                    for (var i = this.processedElements, s = i.length; s;)
                        if (i[s -= 1].elem === t) return void(i[s].pos = e);
                    i.push(new Ke(t, e))
                },
                prepareFrame: function(t) {
                    this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                }
            };
            var ti = function() {
                var t = {},
                    e = {};

                function i(t, i) {
                    e[t] || (e[t] = i)
                }

                function s(t, i, s) {
                    return new e[t](i, s)
                }
                return t.registerModifier = i, t.getModifier = s, t
            }();

            function ei() {}
            ei.prototype.initModifierProperties = function() {}, ei.prototype.addShapeToModifier = function() {}, ei.prototype.addShape = function(t) {
                if (!this.closed) {
                    t.sh.container.addDynamicProperty(t.sh);
                    var e = {
                        shape: t.sh,
                        data: t,
                        localShapeCollection: Ut.newShapeCollection()
                    };
                    this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                }
            }, ei.prototype.init = function(t, e) {
                this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = a, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }, ei.prototype.processKeys = function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
            }, p([Wt], ei);
            var ii = {
                    1: "butt",
                    2: "round",
                    3: "square"
                },
                si = {
                    1: "miter",
                    2: "round",
                    3: "bevel"
                };

            function ai(t, e, i) {
                this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
                for (var s = 0, a = t.length; s < a;) {
                    if (t[s].mProps.dynamicProperties.length) {
                        this._isAnimated = !0;
                        break
                    }
                    s += 1
                }
            }

            function ri(t, e) {
                this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = U("path"), this.msElem = null
            }

            function ni(t, e, i, s) {
                var a;
                this.elem = t, this.frameId = -1, this.dataProps = c(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = m("float32", e.length ? e.length - 1 : 0), this.dashoffset = m("float32", 1), this.initDynamicPropertyContainer(s);
                var r, n = e.length || 0;
                for (a = 0; a < n; a += 1) r = qt.getProp(t, e[a].v, 0, 0, this), this.k = r.k || this.k, this.dataProps[a] = {
                    n: e[a].n,
                    p: r
                };
                this.k || this.getValue(!0), this._isAnimated = this.k
            }

            function oi(t, e, i) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = qt.getProp(t, e.o, 0, .01, this), this.w = qt.getProp(t, e.w, 0, null, this), this.d = new ni(t, e.d || {}, "svg", this), this.c = qt.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
            }

            function hi(t, e, i) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = qt.getProp(t, e.o, 0, .01, this), this.c = qt.getProp(t, e.c, 1, 255, this), this.style = i
            }

            function li(t, e, i) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i
            }

            function pi(t, e, i) {
                this.data = e, this.c = m("uint8c", 4 * e.p);
                var s = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                this.o = m("float32", s), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(i), this.prop = qt.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
            }

            function di(t, e, i) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
            }

            function fi(t, e, i) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = qt.getProp(t, e.w, 0, null, this), this.d = new ni(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
            }

            function mi() {
                this.it = [], this.prevViewData = [], this.gr = U("g")
            }

            function ci(t, e, i) {
                this.transform = {
                    mProps: t,
                    op: e,
                    container: i
                }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
            }
            ai.prototype.setAsAnimated = function() {
                this._isAnimated = !0
            }, ri.prototype.reset = function() {
                this.d = "", this._mdf = !1
            }, ni.prototype.getValue = function(t) {
                if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                    var e = 0,
                        i = this.dataProps.length;
                    for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                }
            }, p([Wt], ni), p([Wt], oi), p([Wt], hi), p([Wt], li), pi.prototype.comparePoints = function(t, e) {
                for (var i = 0, s = this.o.length / 2; i < s;) {
                    if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
                    i += 1
                }
                return !0
            }, pi.prototype.checkCollapsable = function() {
                if (this.o.length / 2 != this.c.length / 4) return !1;
                if (this.data.k.k[0].s)
                    for (var t = 0, e = this.data.k.k.length; t < e;) {
                        if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                        t += 1
                    } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                return !0
            }, pi.prototype.getValue = function(t) {
                if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                    var e, i, s, a = 4 * this.data.p;
                    for (e = 0; e < a; e += 1) i = e % 4 == 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
                    if (this.o.length)
                        for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1) i = e % 2 == 0 ? 100 : 1, s = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== s && (this.o[e - 4 * this.data.p] = s, this._omdf = !t);
                    this._mdf = !t
                }
            }, p([Wt], pi), di.prototype.initGradientData = function(t, e, i) {
                this.o = qt.getProp(t, e.o, 0, .01, this), this.s = qt.getProp(t, e.s, 1, null, this), this.e = qt.getProp(t, e.e, 1, null, this), this.h = qt.getProp(t, e.h || {
                    k: 0
                }, 0, .01, this), this.a = qt.getProp(t, e.a || {
                    k: 0
                }, 0, A, this), this.g = new pi(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
            }, di.prototype.setGradientData = function(t, e) {
                var i = L(),
                    s = U(1 === e.t ? "linearGradient" : "radialGradient");
                s.setAttribute("id", i), s.setAttribute("spreadMethod", "pad"), s.setAttribute("gradientUnits", "userSpaceOnUse");
                var a, r, n, o = [];
                for (n = 4 * e.g.p, r = 0; r < n; r += 4) a = U("stop"), s.appendChild(a), o.push(a);
                t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + h() + "#" + i + ")"), this.gf = s, this.cst = o
            }, di.prototype.setGradientOpacity = function(t, e) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var i, s, a, r = U("mask"),
                        n = U("path");
                    r.appendChild(n);
                    var o = L(),
                        l = L();
                    r.setAttribute("id", l);
                    var p = U(1 === t.t ? "linearGradient" : "radialGradient");
                    p.setAttribute("id", o), p.setAttribute("spreadMethod", "pad"), p.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                    var d = this.stops;
                    for (s = 4 * t.g.p; s < a; s += 2)(i = U("stop")).setAttribute("stop-color", "rgb(255,255,255)"), p.appendChild(i), d.push(i);
                    n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + h() + "#" + o + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", ii[t.lc || 2]), n.setAttribute("stroke-linejoin", si[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = p, this.ms = r, this.ost = d, this.maskId = l, e.msElem = n
                }
            }, p([Wt], di), p([di, Wt], fi);
            var ui = function(t, e, i, s) {
                    if (0 === e) return "";
                    var a, r = t.o,
                        n = t.i,
                        o = t.v,
                        h = " M" + s.applyToPointStringified(o[0][0], o[0][1]);
                    for (a = 1; a < e; a += 1) h += " C" + s.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + s.applyToPointStringified(n[a][0], n[a][1]) + " " + s.applyToPointStringified(o[a][0], o[a][1]);
                    return i && e && (h += " C" + s.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
                },
                gi = function() {
                    var t = new Zt,
                        e = new Zt;

                    function i(t) {
                        switch (t.ty) {
                            case "fl":
                                return n;
                            case "gf":
                                return h;
                            case "gs":
                                return o;
                            case "st":
                                return l;
                            case "sh":
                            case "el":
                            case "rc":
                            case "sr":
                                return r;
                            case "tr":
                                return s;
                            case "no":
                                return a;
                            default:
                                return null
                        }
                    }

                    function s(t, e, i) {
                        (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                    }

                    function a() {}

                    function r(i, s, a) {
                        var r, n, o, h, l, p, d, f, m, c, u = s.styles.length,
                            g = s.lvl;
                        for (p = 0; p < u; p += 1) {
                            if (h = s.sh._mdf || a, s.styles[p].lvl < g) {
                                for (f = e.reset(), m = g - s.styles[p].lvl, c = s.transformers.length - 1; !h && m > 0;) h = s.transformers[c].mProps._mdf || h, m -= 1, c -= 1;
                                if (h)
                                    for (m = g - s.styles[p].lvl, c = s.transformers.length - 1; m > 0;) f.multiply(s.transformers[c].mProps.v), m -= 1, c -= 1
                            } else f = t;
                            if (n = (d = s.sh.paths)._length, h) {
                                for (o = "", r = 0; r < n; r += 1)(l = d.shapes[r]) && l._length && (o += ui(l, l._length, l.c, f));
                                s.caches[p] = o
                            } else o = s.caches[p];
                            s.styles[p].d += !0 === i.hd ? "" : o, s.styles[p]._mdf = h || s.styles[p]._mdf
                        }
                    }

                    function n(t, e, i) {
                        var s = e.style;
                        (e.c._mdf || i) && s.pElem.setAttribute("fill", "rgb(" + k(e.c.v[0]) + "," + k(e.c.v[1]) + "," + k(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("fill-opacity", e.o.v)
                    }

                    function o(t, e, i) {
                        h(t, e, i), l(t, e, i)
                    }

                    function h(t, e, i) {
                        var s, a, r, n, o, h = e.gf,
                            l = e.g._hasOpacity,
                            p = e.s.v,
                            d = e.e.v;
                        if (e.o._mdf || i) {
                            var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                            e.style.pElem.setAttribute(f, e.o.v)
                        }
                        if (e.s._mdf || i) {
                            var m = 1 === t.t ? "x1" : "cx",
                                c = "x1" === m ? "y1" : "cy";
                            h.setAttribute(m, p[0]), h.setAttribute(c, p[1]), l && !e.g._collapsable && (e.of.setAttribute(m, p[0]), e.of.setAttribute(c, p[1]))
                        }
                        if (e.g._cmdf || i) {
                            s = e.cst;
                            var u = e.g.c;
                            for (r = s.length, a = 0; a < r; a += 1)(n = s[a]).setAttribute("offset", u[4 * a] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * a + 1] + "," + u[4 * a + 2] + "," + u[4 * a + 3] + ")")
                        }
                        if (l && (e.g._omdf || i)) {
                            var g = e.g.o;
                            for (r = (s = e.g._collapsable ? e.cst : e.ost).length, a = 0; a < r; a += 1) n = s[a], e.g._collapsable || n.setAttribute("offset", g[2 * a] + "%"), n.setAttribute("stop-opacity", g[2 * a + 1])
                        }
                        if (1 === t.t)(e.e._mdf || i) && (h.setAttribute("x2", d[0]), h.setAttribute("y2", d[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", d[0]), e.of.setAttribute("y2", d[1])));
                        else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(p[0] - d[0], 2) + Math.pow(p[1] - d[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.s._mdf || e.e._mdf || e.h._mdf || e.a._mdf || i) {
                            o || (o = Math.sqrt(Math.pow(p[0] - d[0], 2) + Math.pow(p[1] - d[1], 2)));
                            var v = Math.atan2(d[1] - p[1], d[0] - p[0]),
                                y = e.h.v;
                            y >= 1 ? y = .99 : y <= -1 && (y = -.99);
                            var b = o * y,
                                _ = Math.cos(v + e.a.v) * b + p[0],
                                k = Math.sin(v + e.a.v) * b + p[1];
                            h.setAttribute("fx", _), h.setAttribute("fy", k), l && !e.g._collapsable && (e.of.setAttribute("fx", _), e.of.setAttribute("fy", k))
                        }
                    }

                    function l(t, e, i) {
                        var s = e.style,
                            a = e.d;
                        a && (a._mdf || i) && a.dashStr && (s.pElem.setAttribute("stroke-dasharray", a.dashStr), s.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])), e.c && (e.c._mdf || i) && s.pElem.setAttribute("stroke", "rgb(" + k(e.c.v[0]) + "," + k(e.c.v[1]) + "," + k(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (s.pElem.setAttribute("stroke-width", e.w.v), s.msElem && s.msElem.setAttribute("stroke-width", e.w.v))
                    }
                    return {
                        createRenderFunction: i
                    }
                }();

            function vi(t, e, i) {
                this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
            }

            function yi(t, e, i, s, a, r) {
                this.o = t, this.sw = e, this.sc = i, this.fc = s, this.m = a, this.p = r, this._mdf = {
                    o: !0,
                    sw: !!e,
                    sc: !!i,
                    fc: !!s,
                    m: !0,
                    p: !0
                }
            }

            function bi(t, e) {
                this._frameId = a, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                    ascent: 0,
                    boxWidth: this.defaultBoxWidth,
                    f: "",
                    fStyle: "",
                    fWeight: "",
                    fc: "",
                    j: "",
                    justifyOffset: "",
                    l: [],
                    lh: 0,
                    lineWidths: [],
                    ls: "",
                    of: "",
                    s: "",
                    sc: "",
                    sw: 0,
                    t: 0,
                    tr: 0,
                    sz: 0,
                    ps: null,
                    fillColorAnim: !1,
                    strokeColorAnim: !1,
                    strokeWidthAnim: !1,
                    yOffset: 0,
                    finalSize: 0,
                    finalText: [],
                    finalLineHeight: 0,
                    __complete: !1
                }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
            }
            p([Me, ze, Ue, Qe, Ye, Ie, Ze], vi), vi.prototype.initSecondaryElement = function() {}, vi.prototype.identityMatrix = new Zt, vi.prototype.buildExpressionInterface = function() {}, vi.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
            }, vi.prototype.filterUniqueShapes = function() {
                var t, e, i, s, a = this.shapes.length,
                    r = this.stylesList.length,
                    n = [],
                    o = !1;
                for (i = 0; i < r; i += 1) {
                    for (s = this.stylesList[i], o = !1, n.length = 0, t = 0; t < a; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(s) && (n.push(e), o = e._isAnimated || o);
                    n.length > 1 && o && this.setShapesAsAnimated(n)
                }
            }, vi.prototype.setShapesAsAnimated = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1) t[e].setAsAnimated()
            }, vi.prototype.createStyleElement = function(t, e) {
                var i, s = new ri(t, e),
                    a = s.pElem;
                return "st" === t.ty ? i = new oi(this, t, s) : "fl" === t.ty ? i = new hi(this, t, s) : "gf" === t.ty || "gs" === t.ty ? (i = new("gf" === t.ty ? di : fi)(this, t, s), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), a.setAttribute("mask", "url(" + h() + "#" + i.maskId + ")"))) : "no" === t.ty && (i = new li(this, t, s)), "st" !== t.ty && "gs" !== t.ty || (a.setAttribute("stroke-linecap", ii[t.lc || 2]), a.setAttribute("stroke-linejoin", si[t.lj || 2]), a.setAttribute("fill-opacity", "0"), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = ke(t.bm)), this.stylesList.push(s), this.addToAnimatedContents(t, i), i
            }, vi.prototype.createGroupElement = function(t) {
                var e = new mi;
                return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = ke(t.bm)), e
            }, vi.prototype.createTransformElement = function(t, e) {
                var i = Ve.getTransformProperty(this, t, this),
                    s = new ci(i, i.o, e);
                return this.addToAnimatedContents(t, s), s
            }, vi.prototype.createShapeElement = function(t, e, i) {
                var s = 4;
                "rc" === t.ty ? s = 5 : "el" === t.ty ? s = 6 : "sr" === t.ty && (s = 7);
                var a = new ai(e, i, Yt.getShapeProp(this, t, s, this));
                return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
            }, vi.prototype.addToAnimatedContents = function(t, e) {
                for (var i = 0, s = this.animatedContents.length; i < s;) {
                    if (this.animatedContents[i].element === e) return;
                    i += 1
                }
                this.animatedContents.push({
                    fn: gi.createRenderFunction(t),
                    element: e,
                    data: t
                })
            }, vi.prototype.setElementStyles = function(t) {
                var e, i = t.styles,
                    s = this.stylesList.length;
                for (e = 0; e < s; e += 1) - 1 !== i.indexOf(this.stylesList[e]) || this.stylesList[e].closed || i.push(this.stylesList[e])
            }, vi.prototype.reloadShapes = function() {
                var t;
                this._isFirstFrame = !0;
                var e = this.itemsData.length;
                for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                this.renderModifiers()
            }, vi.prototype.searchShapes = function(t, e, i, s, a, r, n) {
                var o, h, l, p, d, f, m = [].concat(r),
                    c = t.length - 1,
                    u = [],
                    g = [];
                for (o = c; o >= 0; o -= 1) {
                    if ((f = this.searchProcessedElement(t[o])) ? e[o] = i[f - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) f ? e[o].style.closed = t[o].hd : e[o] = this.createStyleElement(t[o], a), t[o]._render && e[o].style.pElem.parentNode !== s && s.appendChild(e[o].style.pElem), u.push(e[o].style);
                    else if ("gr" === t[o].ty) {
                        if (f)
                            for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
                        else e[o] = this.createGroupElement(t[o]);
                        this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, a + 1, m, n), t[o]._render && e[o].gr.parentNode !== s && s.appendChild(e[o].gr)
                    } else "tr" === t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], s)), p = e[o].transform, m.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], m, a)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (f ? (d = e[o]).closed = !1 : ((d = ti.getModifier(t[o].ty)).init(this, t[o]), e[o] = d, this.shapeModifiers.push(d)), g.push(d)) : "rp" === t[o].ty && (f ? (d = e[o]).closed = !0 : (d = ti.getModifier(t[o].ty), e[o] = d, d.init(this, t, o, e), this.shapeModifiers.push(d), n = !1), g.push(d));
                    this.addProcessedElement(t[o], o + 1)
                }
                for (c = u.length, o = 0; o < c; o += 1) u[o].closed = !0;
                for (c = g.length, o = 0; o < c; o += 1) g[o].closed = !0
            }, vi.prototype.renderInnerContent = function() {
                var t;
                this.renderModifiers();
                var e = this.stylesList.length;
                for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
            }, vi.prototype.renderShape = function() {
                var t, e, i = this.animatedContents.length;
                for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
            }, vi.prototype.destroy = function() {
                this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
            }, yi.prototype.update = function(t, e, i, s, a, r) {
                this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                var n = !1;
                return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, n = !0), this.fc !== s && (this.fc = s, this._mdf.fc = !0, n = !0), this.m !== a && (this.m = a, this._mdf.m = !0, n = !0), !r.length || this.p[0] === r[0] && this.p[1] === r[1] && this.p[4] === r[4] && this.p[5] === r[5] && this.p[12] === r[12] && this.p[13] === r[13] || (this.p = r, this._mdf.p = !0, n = !0), n
            }, bi.prototype.defaultBoxWidth = [0, 0], bi.prototype.copyData = function(t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, bi.prototype.setCurrentData = function(t) {
                t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
            }, bi.prototype.searchProperty = function() {
                return this.searchKeyframes()
            }, bi.prototype.searchKeyframes = function() {
                return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
            }, bi.prototype.addEffect = function(t) {
                this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
            }, bi.prototype.getValue = function(t) {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var e = this.currentData,
                        i = this.keysIndex;
                    if (this.lock) this.setCurrentData(this.currentData);
                    else {
                        var s;
                        this.lock = !0, this._mdf = !1;
                        var a = this.effectsSequence.length,
                            r = t || this.data.d.k[this.keysIndex].s;
                        for (s = 0; s < a; s += 1) r = i !== this.keysIndex ? this.effectsSequence[s](r, r.t) : this.effectsSequence[s](this.currentData, r.t);
                        e !== r && this.setCurrentData(r), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }
            }, bi.prototype.getKeyframeValue = function() {
                for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e);) i += 1;
                return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
            }, bi.prototype.buildFinalText = function(t) {
                for (var e, i, s = [], a = 0, r = t.length, n = !1, o = !1, h = ""; a < r;) n = o, o = !1, e = t.charCodeAt(a), h = t.charAt(a), ge.isCombinedCharacter(e) ? n = !0 : e >= 55296 && e <= 56319 ? ge.isRegionalFlag(t, a) ? h = t.substr(a, 14) : (i = t.charCodeAt(a + 1)) >= 56320 && i <= 57343 && (ge.isModifier(e, i) ? (h = t.substr(a, 2), n = !0) : h = ge.isFlagEmoji(t.substr(a, 4)) ? t.substr(a, 4) : t.substr(a, 2)) : e > 56319 ? (i = t.charCodeAt(a + 1), ge.isVariationSelector(e) && (n = !0)) : ge.isZeroWidthJoiner(e) && (n = !0, o = !0), n ? (s[s.length - 1] += h, n = !1) : s.push(h), a += h.length;
                return s
            }, bi.prototype.completeTextData = function(t) {
                t.__complete = !0;
                var e, i, s, a, r, n, o, h = this.elem.globalData.fontManager,
                    l = this.data,
                    p = [],
                    d = 0,
                    f = l.m.g,
                    m = 0,
                    c = 0,
                    u = 0,
                    g = [],
                    v = 0,
                    y = 0,
                    b = h.getFontByName(t.f),
                    _ = 0,
                    k = ue(b);
                t.fWeight = k.weight, t.fStyle = k.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
                var w, S = t.tr / 1e3 * t.finalSize;
                if (t.sz)
                    for (var A, D, P = !0, C = t.sz[0], T = t.sz[1]; P;) {
                        A = 0, v = 0, i = (D = this.buildFinalText(t.t)).length, S = t.tr / 1e3 * t.finalSize;
                        var E = -1;
                        for (e = 0; e < i; e += 1) w = D[e].charCodeAt(0), s = !1, " " === D[e] ? E = e : 13 !== w && 3 !== w || (v = 0, s = !0, A += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(D[e], b.fStyle, b.fFamily), _ = s ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(D[e], t.f, t.finalSize), v + _ > C && " " !== D[e] ? (-1 === E ? i += 1 : e = E, A += t.finalLineHeight || 1.2 * t.finalSize, D.splice(e, E === e ? 1 : 0, "\r"), E = -1, v = 0) : (v += _, v += S);
                        A += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && T < A ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = D, i = t.finalText.length, P = !1)
                    }
                v = -S, _ = 0;
                var F, x = 0;
                for (e = 0; e < i; e += 1)
                    if (s = !1, 13 === (w = (F = t.finalText[e]).charCodeAt(0)) || 3 === w ? (x = 0, g.push(v), y = v > y ? v : y, v = -2 * S, a = "", s = !0, u += 1) : a = F, h.chars ? (o = h.getCharData(F, b.fStyle, h.getFontByName(t.f).fFamily), _ = s ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(a, t.f, t.finalSize), " " === F ? x += _ + S : (v += _ + S + x, x = 0), p.push({
                            l: _,
                            an: _,
                            add: m,
                            n: s,
                            anIndexes: [],
                            val: a,
                            line: u,
                            animatorJustifyOffset: 0
                        }), 2 == f) {
                        if (m += _, "" === a || " " === a || e === i - 1) {
                            for ("" !== a && " " !== a || (m -= _); c <= e;) p[c].an = m, p[c].ind = d, p[c].extra = _, c += 1;
                            d += 1, m = 0
                        }
                    } else if (3 == f) {
                    if (m += _, "" === a || e === i - 1) {
                        for ("" === a && (m -= _); c <= e;) p[c].an = m, p[c].ind = d, p[c].extra = _, c += 1;
                        m = 0, d += 1
                    }
                } else p[d].ind = d, p[d].extra = 0, d += 1;
                if (t.l = p, y = v > y ? v : y, g.push(v), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                else switch (t.boxWidth = y, t.j) {
                    case 1:
                        t.justifyOffset = -t.boxWidth;
                        break;
                    case 2:
                        t.justifyOffset = -t.boxWidth / 2;
                        break;
                    default:
                        t.justifyOffset = 0
                }
                t.lineWidths = g;
                var M, I, L, O, R = l.a;
                n = R.length;
                var V = [];
                for (r = 0; r < n; r += 1) {
                    for ((M = R[r]).a.sc && (t.strokeColorAnim = !0), M.a.sw && (t.strokeWidthAnim = !0), (M.a.fc || M.a.fh || M.a.fs || M.a.fb) && (t.fillColorAnim = !0), O = 0, L = M.s.b, e = 0; e < i; e += 1)(I = p[e]).anIndexes[r] = O, (1 == L && "" !== I.val || 2 == L && "" !== I.val && " " !== I.val || 3 == L && (I.n || " " == I.val || e == i - 1) || 4 == L && (I.n || e == i - 1)) && (1 === M.s.rn && V.push(O), O += 1);
                    l.a[r].s.totalChars = O;
                    var N, z = -1;
                    if (1 === M.s.rn)
                        for (e = 0; e < i; e += 1) z != (I = p[e]).anIndexes[r] && (z = I.anIndexes[r], N = V.splice(Math.floor(Math.random() * V.length), 1)[0]), I.anIndexes[r] = N
                }
                t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
            }, bi.prototype.updateDocumentData = function(t, e) {
                e = void 0 === e ? this.keysIndex : e;
                var i = this.copyData({}, this.data.d.k[e].s);
                i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this)
            }, bi.prototype.recalculate = function(t) {
                var e = this.data.d.k[t].s;
                e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
            }, bi.prototype.canResizeFont = function(t) {
                this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
            }, bi.prototype.setMinimumFontSize = function(t) {
                this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
            };
            var _i = function() {
                var t = Math.max,
                    e = Math.min,
                    i = Math.floor;

                function s(t, e) {
                    this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = qt.getProp(t, e.s || {
                        k: 0
                    }, 0, 0, this), this.e = "e" in e ? qt.getProp(t, e.e, 0, 0, this) : {
                        v: 100
                    }, this.o = qt.getProp(t, e.o || {
                        k: 0
                    }, 0, 0, this), this.xe = qt.getProp(t, e.xe || {
                        k: 0
                    }, 0, 0, this), this.ne = qt.getProp(t, e.ne || {
                        k: 0
                    }, 0, 0, this), this.sm = qt.getProp(t, e.sm || {
                        k: 100
                    }, 0, 0, this), this.a = qt.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                }

                function a(t, e, i) {
                    return new s(t, e)
                }
                return s.prototype = {
                    getMult: function(s) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var a = 0,
                            r = 0,
                            n = 1,
                            o = 1;
                        this.ne.v > 0 ? a = this.ne.v / 100 : r = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                        var h = ht.getBezierEasing(a, r, n, o).get,
                            l = 0,
                            p = this.finalS,
                            d = this.finalE,
                            f = this.data.sh;
                        if (2 === f) l = h(l = d === p ? s >= d ? 1 : 0 : t(0, e(.5 / (d - p) + (s - p) / (d - p), 1)));
                        else if (3 === f) l = h(l = d === p ? s >= d ? 0 : 1 : 1 - t(0, e(.5 / (d - p) + (s - p) / (d - p), 1)));
                        else if (4 === f) d === p ? l = 0 : (l = t(0, e(.5 / (d - p) + (s - p) / (d - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
                        else if (5 === f) {
                            if (d === p) l = 0;
                            else {
                                var m = d - p,
                                    c = -m / 2 + (s = e(t(0, s + .5 - p), d - p)),
                                    u = m / 2;
                                l = Math.sqrt(1 - c * c / (u * u))
                            }
                            l = h(l)
                        } else 6 === f ? (d === p ? l = 0 : (s = e(t(0, s + .5 - p), d - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * s / (d - p))) / 2), l = h(l)) : (s >= i(p) && (l = t(0, e(s - p < 0 ? e(d, 1) - (p - s) : d - s, 1))), l = h(l));
                        if (100 !== this.sm.v) {
                            var g = .01 * this.sm.v;
                            0 === g && (g = 1e-8);
                            var v = .5 - .5 * g;
                            l < v ? l = 0 : (l = (l - v) / g) > 1 && (l = 1)
                        }
                        return l * this.a.v
                    },
                    getValue: function(t) {
                        this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                            i = this.o.v / e,
                            s = this.s.v / e + i,
                            a = this.e.v / e + i;
                        if (s > a) {
                            var r = s;
                            s = a, a = r
                        }
                        this.finalS = s, this.finalE = a
                    }
                }, p([Wt], s), {
                    getTextSelectorProp: a
                }
            }();

            function ki(t, e, i) {
                var s = {
                        propType: !1
                    },
                    a = qt.getProp,
                    r = e.a;
                this.a = {
                    r: r.r ? a(t, r.r, 0, A, i) : s,
                    rx: r.rx ? a(t, r.rx, 0, A, i) : s,
                    ry: r.ry ? a(t, r.ry, 0, A, i) : s,
                    sk: r.sk ? a(t, r.sk, 0, A, i) : s,
                    sa: r.sa ? a(t, r.sa, 0, A, i) : s,
                    s: r.s ? a(t, r.s, 1, .01, i) : s,
                    a: r.a ? a(t, r.a, 1, 0, i) : s,
                    o: r.o ? a(t, r.o, 0, .01, i) : s,
                    p: r.p ? a(t, r.p, 1, 0, i) : s,
                    sw: r.sw ? a(t, r.sw, 0, 0, i) : s,
                    sc: r.sc ? a(t, r.sc, 1, 0, i) : s,
                    fc: r.fc ? a(t, r.fc, 1, 0, i) : s,
                    fh: r.fh ? a(t, r.fh, 0, 0, i) : s,
                    fs: r.fs ? a(t, r.fs, 0, .01, i) : s,
                    fb: r.fb ? a(t, r.fb, 0, .01, i) : s,
                    t: r.t ? a(t, r.t, 0, 0, i) : s
                }, this.s = _i.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
            }

            function wi(t, e, i) {
                this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = c(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                    alignment: {}
                }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
            }

            function Si() {}
            wi.prototype.searchProperties = function() {
                var t, e, i = this._textData.a.length,
                    s = qt.getProp;
                for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new ki(this._elem, e, this);
                this._textData.p && "m" in this._textData.p ? (this._pathData = {
                    a: s(this._elem, this._textData.p.a, 0, 0, this),
                    f: s(this._elem, this._textData.p.f, 0, 0, this),
                    l: s(this._elem, this._textData.p.l, 0, 0, this),
                    r: s(this._elem, this._textData.p.r, 0, 0, this),
                    p: s(this._elem, this._textData.p.p, 0, 0, this),
                    m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this)
            }, wi.prototype.getMeasures = function(t, e) {
                if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                    this._isFirstFrame = !1;
                    var i, s, a, r, n, o, h, l, p, d, f, m, c, u, g, v, y, b, _, k = this._moreOptions.alignment.v,
                        w = this._animatorsData,
                        S = this._textData,
                        A = this.mHelper,
                        D = this._renderType,
                        P = this.renderedLetters.length,
                        C = t.l;
                    if (this._hasMaskedPath) {
                        if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                            var T, E = _.v;
                            for (this._pathData.r.v && (E = E.reverse()), n = {
                                    tLength: 0,
                                    segments: []
                                }, r = E._length - 1, v = 0, a = 0; a < r; a += 1) T = ct.buildBezierData(E.v[a], E.v[a + 1], [E.o[a][0] - E.v[a][0], E.o[a][1] - E.v[a][1]], [E.i[a + 1][0] - E.v[a + 1][0], E.i[a + 1][1] - E.v[a + 1][1]]), n.tLength += T.segmentLength, n.segments.push(T), v += T.segmentLength;
                            a = r, _.v.c && (T = ct.buildBezierData(E.v[a], E.v[0], [E.o[a][0] - E.v[a][0], E.o[a][1] - E.v[a][1]], [E.i[0][0] - E.v[0][0], E.i[0][1] - E.v[0][1]]), n.tLength += T.segmentLength, n.segments.push(T), v += T.segmentLength), this._pathData.pi = n
                        }
                        if (n = this._pathData.pi, o = this._pathData.f.v, f = 0, d = 1, l = 0, p = !0, u = n.segments, o < 0 && _.v.c)
                            for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), d = (c = u[f = u.length - 1].points).length - 1; o < 0;) o += c[d].partialLength, (d -= 1) < 0 && (d = (c = u[f -= 1].points).length - 1);
                        m = (c = u[f].points)[d - 1], g = (h = c[d]).partialLength
                    }
                    r = C.length, i = 0, s = 0;
                    var F, x, M, I, L, O = 1.2 * t.finalSize * .714,
                        R = !0;
                    M = w.length;
                    var j, B, q, W, $, H, G, X, U, Y, Z, J, K = -1,
                        Q = o,
                        tt = f,
                        et = d,
                        it = -1,
                        st = "",
                        at = this.defaultPropsArray;
                    if (2 === t.j || 1 === t.j) {
                        var rt = 0,
                            nt = 0,
                            ot = 2 === t.j ? -.5 : -1,
                            ht = 0,
                            lt = !0;
                        for (a = 0; a < r; a += 1)
                            if (C[a].n) {
                                for (rt && (rt += nt); ht < a;) C[ht].animatorJustifyOffset = rt, ht += 1;
                                rt = 0, lt = !0
                            } else {
                                for (x = 0; x < M; x += 1)(F = w[x].a).t.propType && (lt && 2 === t.j && (nt += F.t.v * ot), (L = w[x].s.getMult(C[a].anIndexes[x], S.a[x].s.totalChars)).length ? rt += F.t.v * L[0] * ot : rt += F.t.v * L * ot);
                                lt = !1
                            }
                        for (rt && (rt += nt); ht < a;) C[ht].animatorJustifyOffset = rt, ht += 1
                    }
                    for (a = 0; a < r; a += 1) {
                        if (A.reset(), W = 1, C[a].n) i = 0, s += t.yOffset, s += R ? 1 : 0, o = Q, R = !1, this._hasMaskedPath && (d = et, m = (c = u[f = tt].points)[d - 1], g = (h = c[d]).partialLength, l = 0), st = "", Z = "", U = "", J = "", at = this.defaultPropsArray;
                        else {
                            if (this._hasMaskedPath) {
                                if (it !== C[a].line) {
                                    switch (t.j) {
                                        case 1:
                                            o += v - t.lineWidths[C[a].line];
                                            break;
                                        case 2:
                                            o += (v - t.lineWidths[C[a].line]) / 2
                                    }
                                    it = C[a].line
                                }
                                K !== C[a].ind && (C[K] && (o += C[K].extra), o += C[a].an / 2, K = C[a].ind), o += k[0] * C[a].an * .005;
                                var pt = 0;
                                for (x = 0; x < M; x += 1)(F = w[x].a).p.propType && ((L = w[x].s.getMult(C[a].anIndexes[x], S.a[x].s.totalChars)).length ? pt += F.p.v[0] * L[0] : pt += F.p.v[0] * L), F.a.propType && ((L = w[x].s.getMult(C[a].anIndexes[x], S.a[x].s.totalChars)).length ? pt += F.a.v[0] * L[0] : pt += F.a.v[0] * L);
                                for (p = !0, this._pathData.a.v && (o = .5 * C[0].an + (v - this._pathData.f.v - .5 * C[0].an - .5 * C[C.length - 1].an) * K / (r - 1), o += this._pathData.f.v); p;) l + g >= o + pt || !c ? (y = (o + pt - l) / h.partialLength, B = m.point[0] + (h.point[0] - m.point[0]) * y, q = m.point[1] + (h.point[1] - m.point[1]) * y, A.translate(-k[0] * C[a].an * .005, -k[1] * O * .01), p = !1) : c && (l += h.partialLength, (d += 1) >= c.length && (d = 0, u[f += 1] ? c = u[f].points : _.v.c ? (d = 0, c = u[f = 0].points) : (l -= h.partialLength, c = null)), c && (m = h, g = (h = c[d]).partialLength));
                                j = C[a].an / 2 - C[a].add, A.translate(-j, 0, 0)
                            } else j = C[a].an / 2 - C[a].add, A.translate(-j, 0, 0), A.translate(-k[0] * C[a].an * .005, -k[1] * O * .01, 0);
                            for (x = 0; x < M; x += 1)(F = w[x].a).t.propType && (L = w[x].s.getMult(C[a].anIndexes[x], S.a[x].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? L.length ? o += F.t.v * L[0] : o += F.t.v * L : L.length ? i += F.t.v * L[0] : i += F.t.v * L));
                            for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && ($ = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (G = [t.fc[0], t.fc[1], t.fc[2]]), x = 0; x < M; x += 1)(F = w[x].a).a.propType && ((L = w[x].s.getMult(C[a].anIndexes[x], S.a[x].s.totalChars)).length ? A.translate(-F.a.v[0] * L[0], -F.a.v[1] * L[1], F.a.v[2] * L[2]) : A.translate(-F.a.v[0] * L, -F.a.v[1] * L, F.a.v[2] * L));
                            for (x = 0; x < M; x += 1)(F = w[x].a).s.propType && ((L = w[x].s.getMult(C[a].anIndexes[x], S.a[x].s.totalChars)).length ? A.scale(1 + (F.s.v[0] - 1) * L[0], 1 + (F.s.v[1] - 1) * L[1], 1) : A.scale(1 + (F.s.v[0] - 1) * L, 1 + (F.s.v[1] - 1) * L, 1));
                            for (x = 0; x < M; x += 1) {
                                if (F = w[x].a, L = w[x].s.getMult(C[a].anIndexes[x], S.a[x].s.totalChars), F.sk.propType && (L.length ? A.skewFromAxis(-F.sk.v * L[0], F.sa.v * L[1]) : A.skewFromAxis(-F.sk.v * L, F.sa.v * L)), F.r.propType && (L.length ? A.rotateZ(-F.r.v * L[2]) : A.rotateZ(-F.r.v * L)), F.ry.propType && (L.length ? A.rotateY(F.ry.v * L[1]) : A.rotateY(F.ry.v * L)), F.rx.propType && (L.length ? A.rotateX(F.rx.v * L[0]) : A.rotateX(F.rx.v * L)), F.o.propType && (L.length ? W += (F.o.v * L[0] - W) * L[0] : W += (F.o.v * L - W) * L), t.strokeWidthAnim && F.sw.propType && (L.length ? H += F.sw.v * L[0] : H += F.sw.v * L), t.strokeColorAnim && F.sc.propType)
                                    for (X = 0; X < 3; X += 1) L.length ? $[X] += (F.sc.v[X] - $[X]) * L[0] : $[X] += (F.sc.v[X] - $[X]) * L;
                                if (t.fillColorAnim && t.fc) {
                                    if (F.fc.propType)
                                        for (X = 0; X < 3; X += 1) L.length ? G[X] += (F.fc.v[X] - G[X]) * L[0] : G[X] += (F.fc.v[X] - G[X]) * L;
                                    F.fh.propType && (G = L.length ? z(G, F.fh.v * L[0]) : z(G, F.fh.v * L)), F.fs.propType && (G = L.length ? V(G, F.fs.v * L[0]) : V(G, F.fs.v * L)), F.fb.propType && (G = L.length ? N(G, F.fb.v * L[0]) : N(G, F.fb.v * L))
                                }
                            }
                            for (x = 0; x < M; x += 1)(F = w[x].a).p.propType && (L = w[x].s.getMult(C[a].anIndexes[x], S.a[x].s.totalChars), this._hasMaskedPath ? L.length ? A.translate(0, F.p.v[1] * L[0], -F.p.v[2] * L[1]) : A.translate(0, F.p.v[1] * L, -F.p.v[2] * L) : L.length ? A.translate(F.p.v[0] * L[0], F.p.v[1] * L[1], -F.p.v[2] * L[2]) : A.translate(F.p.v[0] * L, F.p.v[1] * L, -F.p.v[2] * L));
                            if (t.strokeWidthAnim && (U = H < 0 ? 0 : H), t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * $[0]) + "," + Math.round(255 * $[1]) + "," + Math.round(255 * $[2]) + ")"), t.fillColorAnim && t.fc && (Z = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), this._hasMaskedPath) {
                                if (A.translate(0, -t.ls), A.translate(0, k[1] * O * .01 + s, 0), this._pathData.p.v) {
                                    b = (h.point[1] - m.point[1]) / (h.point[0] - m.point[0]);
                                    var dt = 180 * Math.atan(b) / Math.PI;
                                    h.point[0] < m.point[0] && (dt += 180), A.rotate(-dt * Math.PI / 180)
                                }
                                A.translate(B, q, 0), o -= k[0] * C[a].an * .005, C[a + 1] && K !== C[a + 1].ind && (o += C[a].an / 2, o += .001 * t.tr * t.finalSize)
                            } else {
                                switch (A.translate(i, s, 0), t.ps && A.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                    case 1:
                                        A.translate(C[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[a].line]), 0, 0);
                                        break;
                                    case 2:
                                        A.translate(C[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[a].line]) / 2, 0, 0)
                                }
                                A.translate(0, -t.ls), A.translate(j, 0, 0), A.translate(k[0] * C[a].an * .005, k[1] * O * .01, 0), i += C[a].l + .001 * t.tr * t.finalSize
                            }
                            "html" === D ? st = A.toCSS() : "svg" === D ? st = A.to2dCSS() : at = [A.props[0], A.props[1], A.props[2], A.props[3], A.props[4], A.props[5], A.props[6], A.props[7], A.props[8], A.props[9], A.props[10], A.props[11], A.props[12], A.props[13], A.props[14], A.props[15]], J = W
                        }
                        P <= a ? (I = new yi(J, U, Y, Z, st, at), this.renderedLetters.push(I), P += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[a], this.lettersChangedFlag = I.update(J, U, Y, Z, st, at) || this.lettersChangedFlag)
                    }
                }
            }, wi.prototype.getValue = function() {
                this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
            }, wi.prototype.mHelper = new Zt, wi.prototype.defaultPropsArray = [], p([Wt], wi), Si.prototype.initElement = function(t, e, i) {
                this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new bi(this, t.t, this.dynamicProperties), this.textAnimator = new wi(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
            }, Si.prototype.prepareFrame = function(t) {
                this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
            }, Si.prototype.createPathShape = function(t, e) {
                var i, s, a = e.length,
                    r = "";
                for (i = 0; i < a; i += 1) "sh" === e[i].ty && (s = e[i].ks.k, r += ui(s, s.i.length, !0, t));
                return r
            }, Si.prototype.updateDocumentData = function(t, e) {
                this.textProperty.updateDocumentData(t, e)
            }, Si.prototype.canResizeFont = function(t) {
                this.textProperty.canResizeFont(t)
            }, Si.prototype.setMinimumFontSize = function(t) {
                this.textProperty.setMinimumFontSize(t)
            }, Si.prototype.applyTextPropertiesToMatrix = function(t, e, i, s, a) {
                switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                    case 1:
                        e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                        break;
                    case 2:
                        e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
                }
                e.translate(s, a, 0)
            }, Si.prototype.buildColor = function(t) {
                return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
            }, Si.prototype.emptyProp = new yi, Si.prototype.destroy = function() {}, Si.prototype.validateText = function() {
                (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
            };
            var Ai = {
                shapes: []
            };

            function Di(t, e, i) {
                this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
            }

            function Pi(t, e, i) {
                this.initElement(t, e, i)
            }

            function Ci(t, e, i) {
                this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
            }

            function Ti() {}

            function Ei() {}

            function Fi(t, e, i) {
                this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? c(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? qt.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function xi(t, e) {
                this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = U("svg");
                var i = "";
                if (e && e.title) {
                    var s = U("title"),
                        a = L();
                    s.setAttribute("id", a), s.textContent = e.title, this.svgElement.appendChild(s), i += a
                }
                if (e && e.description) {
                    var r = U("desc"),
                        n = L();
                    r.setAttribute("id", n), r.textContent = e.description, this.svgElement.appendChild(r), i += " " + n
                }
                i && this.svgElement.setAttribute("aria-labelledby", i);
                var o = U("defs");
                this.svgElement.appendChild(o);
                var h = U("g");
                this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    contentVisibility: e && e.contentVisibility || "visible",
                    progressiveLoad: e && e.progressiveLoad || !1,
                    hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                    viewBoxOnly: e && e.viewBoxOnly || !1,
                    viewBoxSize: e && e.viewBoxSize || !1,
                    className: e && e.className || "",
                    id: e && e.id || "",
                    focusable: e && e.focusable,
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "100%",
                        height: e && e.filterSize && e.filterSize.height || "100%",
                        x: e && e.filterSize && e.filterSize.x || "0%",
                        y: e && e.filterSize && e.filterSize.y || "0%"
                    },
                    width: e && e.width,
                    height: e && e.height,
                    runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    defs: o,
                    renderConfig: this.renderConfig
                }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
            }

            function Mi() {}

            function Ii() {}

            function Li(t, e, i, s, a) {
                var r = e.container.globalData.renderConfig.filterSize,
                    n = e.data.fs || r;
                t.setAttribute("x", n.x || r.x), t.setAttribute("y", n.y || r.y), t.setAttribute("width", n.width || r.width), t.setAttribute("height", n.height || r.height), this.filterManager = e;
                var o = U("feGaussianBlur");
                o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", s + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
                var h = U("feOffset");
                h.setAttribute("dx", "25"), h.setAttribute("dy", "0"), h.setAttribute("in", s + "_drop_shadow_1"), h.setAttribute("result", s + "_drop_shadow_2"), this.feOffset = h, t.appendChild(h);
                var l = U("feFlood");
                l.setAttribute("flood-color", "#00ff00"), l.setAttribute("flood-opacity", "1"), l.setAttribute("result", s + "_drop_shadow_3"), this.feFlood = l, t.appendChild(l);
                var p = U("feComposite");
                p.setAttribute("in", s + "_drop_shadow_3"), p.setAttribute("in2", s + "_drop_shadow_2"), p.setAttribute("operator", "in"), p.setAttribute("result", s + "_drop_shadow_4"), t.appendChild(p);
                var d = this.createMergeNode(s, [s + "_drop_shadow_4", a]);
                t.appendChild(d)
            }

            function Oi(t, e, i, s) {
                t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                var a = U("feGaussianBlur");
                a.setAttribute("result", s), t.appendChild(a), this.feGaussianBlur = a
            }
            return p([Me, ze, Ue, Ye, Ie, Ze, Si], Di), Di.prototype.createContent = function() {
                this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = U("text"))
            }, Di.prototype.buildTextContents = function(t) {
                for (var e = 0, i = t.length, s = [], a = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (s.push(a), a = "") : a += t[e], e += 1;
                return s.push(a), s
            }, Di.prototype.buildShapeData = function(t, e) {
                if (t.shapes && t.shapes.length) {
                    var i = t.shapes[0];
                    if (i.it) {
                        var s = i.it[i.it.length - 1];
                        s.s && (s.s.k[0] = e, s.s.k[1] = e)
                    }
                }
                return t
            }, Di.prototype.buildNewText = function() {
                var t, e;
                this.addDynamicProperty(this);
                var i = this.textProperty.currentData;
                this.renderedLetters = c(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
                var s = this.globalData.fontManager.getFontByName(i.f);
                if (s.fClass) this.layerElement.setAttribute("class", s.fClass);
                else {
                    this.layerElement.setAttribute("font-family", s.fFamily);
                    var a = i.fWeight,
                        r = i.fStyle;
                    this.layerElement.setAttribute("font-style", r), this.layerElement.setAttribute("font-weight", a)
                }
                this.layerElement.setAttribute("aria-label", i.t);
                var n, o = i.l || [],
                    h = !!this.globalData.fontManager.chars;
                e = o.length;
                var l = this.mHelper,
                    p = "",
                    d = this.data.singleShape,
                    f = 0,
                    m = 0,
                    u = !0,
                    g = .001 * i.tr * i.finalSize;
                if (!d || h || i.sz) {
                    var v, y = this.textSpans.length;
                    for (t = 0; t < e; t += 1) {
                        if (this.textSpans[t] || (this.textSpans[t] = {
                                span: null,
                                childSpan: null,
                                glyph: null
                            }), !h || !d || 0 === t) {
                            if (n = y > t ? this.textSpans[t].span : U(h ? "g" : "text"), y <= t) {
                                if (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = n, h) {
                                    var b = U("g");
                                    n.appendChild(b), this.textSpans[t].childSpan = b
                                }
                                this.textSpans[t].span = n, this.layerElement.appendChild(n)
                            }
                            n.style.display = "inherit"
                        }
                        if (l.reset(), d && (o[t].n && (f = -g, m += i.yOffset, m += u ? 1 : 0, u = !1), this.applyTextPropertiesToMatrix(i, l, o[t].line, f, m), f += o[t].l || 0, f += g), h) {
                            var _;
                            if (1 === (v = this.globalData.fontManager.getCharData(i.finalText[t], s.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)).t) _ = new Fi(v.data, this.globalData, this);
                            else {
                                var k = Ai;
                                v.data && v.data.shapes && (k = this.buildShapeData(v.data, i.finalSize)), _ = new vi(k, this.globalData, this)
                            }
                            if (this.textSpans[t].glyph) {
                                var w = this.textSpans[t].glyph;
                                this.textSpans[t].childSpan.removeChild(w.layerElement), w.destroy()
                            }
                            this.textSpans[t].glyph = _, _._debug = !0, _.prepareFrame(0), _.renderFrame(), this.textSpans[t].childSpan.appendChild(_.layerElement), 1 === v.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")")
                        } else d && n.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                    }
                    d && n && n.setAttribute("d", p)
                } else {
                    var S = this.textContainer,
                        A = "start";
                    switch (i.j) {
                        case 1:
                            A = "end";
                            break;
                        case 2:
                            A = "middle";
                            break;
                        default:
                            A = "start"
                    }
                    S.setAttribute("text-anchor", A), S.setAttribute("letter-spacing", g);
                    var D = this.buildTextContents(i.finalText);
                    for (e = D.length, m = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t].span || U("tspan")).textContent = D[t], n.setAttribute("x", 0), n.setAttribute("y", m), n.style.display = "inherit", S.appendChild(n), this.textSpans[t] || (this.textSpans[t] = {
                        span: null,
                        glyph: null
                    }), this.textSpans[t].span = n, m += i.finalLineHeight;
                    this.layerElement.appendChild(S)
                }
                for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
                this._sizeChanged = !0
            }, Di.prototype.sourceRectAtTime = function() {
                if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                    this._sizeChanged = !1;
                    var t = this.layerElement.getBBox();
                    this.bbox = {
                        top: t.y,
                        left: t.x,
                        width: t.width,
                        height: t.height
                    }
                }
                return this.bbox
            }, Di.prototype.getValue = function() {
                var t, e, i = this.textSpans.length;
                for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
            }, Di.prototype.renderInnerContent = function() {
                if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                    var t, e;
                    this._sizeChanged = !0;
                    var i, s, a, r = this.textAnimator.renderedLetters,
                        n = this.textProperty.currentData.l;
                    for (e = n.length, t = 0; t < e; t += 1) n[t].n || (i = r[t], s = this.textSpans[t].span, (a = this.textSpans[t].glyph) && a.renderFrame(), i._mdf.m && s.setAttribute("transform", i.m), i._mdf.o && s.setAttribute("opacity", i.o), i._mdf.sw && s.setAttribute("stroke-width", i.sw), i._mdf.sc && s.setAttribute("stroke", i.sc), i._mdf.fc && s.setAttribute("fill", i.fc))
                }
            }, p([Je], Pi), Pi.prototype.createContent = function() {
                var t = U("rect");
                t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
            }, Ci.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0)
            }, Ci.prototype.renderFrame = function() {}, Ci.prototype.getBaseElement = function() {
                return null
            }, Ci.prototype.destroy = function() {}, Ci.prototype.sourceRectAtTime = function() {}, Ci.prototype.hide = function() {}, p([Me, ze, Ye, Ie], Ci), p([Re], Ti), Ti.prototype.createNull = function(t) {
                return new Ci(t, this.globalData, this)
            }, Ti.prototype.createShape = function(t) {
                return new vi(t, this.globalData, this)
            }, Ti.prototype.createText = function(t) {
                return new Di(t, this.globalData, this)
            }, Ti.prototype.createImage = function(t) {
                return new Je(t, this.globalData, this)
            }, Ti.prototype.createSolid = function(t) {
                return new Pi(t, this.globalData, this)
            }, Ti.prototype.configAnimation = function(t) {
                this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                var e = this.globalData.defs;
                this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                var i = U("clipPath"),
                    s = U("rect");
                s.setAttribute("width", t.w), s.setAttribute("height", t.h), s.setAttribute("x", 0), s.setAttribute("y", 0);
                var a = L();
                i.setAttribute("id", a), i.appendChild(s), this.layerElement.setAttribute("clip-path", "url(" + h() + "#" + a + ")"), e.appendChild(i), this.layers = t.layers, this.elements = c(t.layers.length)
            }, Ti.prototype.destroy = function() {
                var t;
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                var e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                this.elements.length = 0, this.destroyed = !0, this.animationItem = null
            }, Ti.prototype.updateContainerSize = function() {}, Ti.prototype.findIndexByInd = function(t) {
                var e = 0,
                    i = this.layers.length;
                for (e = 0; e < i; e += 1)
                    if (this.layers[e].ind === t) return e;
                return -1
            }, Ti.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && 99 !== this.layers[t].ty) {
                    e[t] = !0;
                    var i = this.createItem(this.layers[t]);
                    if (e[t] = i, $() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
                        var s = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                        if (-1 === s) return;
                        if (this.elements[s] && !0 !== this.elements[s]) {
                            var a = e[s].getMatte(this.layers[t].tt);
                            i.setMatte(a)
                        } else this.buildItem(s), this.addPendingElement(i)
                    }
                }
            }, Ti.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) {
                    var t = this.pendingElements.pop();
                    if (t.checkParenting(), t.data.tt)
                        for (var e = 0, i = this.elements.length; e < i;) {
                            if (this.elements[e] === t) {
                                var s = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                                    a = this.elements[s].getMatte(this.layers[e].tt);
                                t.setMatte(a);
                                break
                            }
                            e += 1
                        }
                }
            }, Ti.prototype.renderFrame = function(t) {
                if (this.renderedFrame !== t && !this.destroyed) {
                    var e;
                    null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                    var i = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                    if (this.globalData._mdf)
                        for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                }
            }, Ti.prototype.appendElementInPos = function(t, e) {
                var i = t.getBaseElement();
                if (i) {
                    for (var s, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (s = this.elements[a].getBaseElement()), a += 1;
                    s ? this.layerElement.insertBefore(i, s) : this.layerElement.appendChild(i)
                }
            }, Ti.prototype.hide = function() {
                this.layerElement.style.display = "none"
            }, Ti.prototype.show = function() {
                this.layerElement.style.display = "block"
            }, p([Me, ze, Ye, Ie, Ze], Ei), Ei.prototype.initElement = function(t, e, i) {
                this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
            }, Ei.prototype.prepareFrame = function(t) {
                if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                    if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                    }
                    var i, s = this.elements.length;
                    for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
                }
            }, Ei.prototype.renderInnerContent = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
            }, Ei.prototype.setElements = function(t) {
                this.elements = t
            }, Ei.prototype.getElements = function() {
                return this.elements
            }, Ei.prototype.destroyElements = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
            }, Ei.prototype.destroy = function() {
                this.destroyElements(), this.destroyBaseElement()
            }, p([Ti, Ei, Ue], Fi), Fi.prototype.createComp = function(t) {
                return new Fi(t, this.globalData, this)
            }, p([Ti], xi), xi.prototype.createComp = function(t) {
                return new Fi(t, this.globalData, this)
            }, p([ei], Mi), Mi.prototype.initModifierProperties = function(t, e) {
                this.s = qt.getProp(t, e.s, 0, .01, this), this.e = qt.getProp(t, e.e, 0, .01, this), this.o = qt.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
            }, Mi.prototype.addShapeToModifier = function(t) {
                t.pathsData = []
            }, Mi.prototype.calculateShapeEdges = function(t, e, i, s, a) {
                var r = [];
                e <= 1 ? r.push({
                    s: t,
                    e: e
                }) : t >= 1 ? r.push({
                    s: t - 1,
                    e: e - 1
                }) : (r.push({
                    s: t,
                    e: 1
                }), r.push({
                    s: 0,
                    e: e - 1
                }));
                var n, o, h = [],
                    l = r.length;
                for (n = 0; n < l; n += 1) {
                    var p, d;
                    (o = r[n]).e * a < s || o.s * a > s + i || (p = o.s * a <= s ? 0 : (o.s * a - s) / i, d = o.e * a >= s + i ? 1 : (o.e * a - s) / i, h.push([p, d]))
                }
                return h.length || h.push([0, 0]), h
            }, Mi.prototype.releasePathsData = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1) ft.release(t[e]);
                return t.length = 0, t
            }, Mi.prototype.processShapes = function(t) {
                var e, i, s, a;
                if (this._mdf || t) {
                    var r = this.o.v % 360 / 360;
                    if (r < 0 && (r += 1), (e = this.s.v > 1 ? 1 + r : this.s.v < 0 ? 0 + r : this.s.v + r) > (i = this.e.v > 1 ? 1 + r : this.e.v < 0 ? 0 + r : this.e.v + r)) {
                        var n = e;
                        e = i, i = n
                    }
                    e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
                } else e = this.sValue, i = this.eValue;
                var o, h, l, p, d, f = this.shapes.length,
                    m = 0;
                if (i === e)
                    for (a = 0; a < f; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = !0, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
                else if (1 === i && 0 === e || 0 === i && 1 === e) {
                    if (this._mdf)
                        for (a = 0; a < f; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = !0
                } else {
                    var c, u, g = [];
                    for (a = 0; a < f; a += 1)
                        if ((c = this.shapes[a]).shape._mdf || this._mdf || t || 2 === this.m) {
                            if (h = (s = c.shape.paths)._length, d = 0, !c.shape._mdf && c.pathsData.length) d = c.totalShapeLength;
                            else {
                                for (l = this.releasePathsData(c.pathsData), o = 0; o < h; o += 1) p = ct.getSegmentsLength(s.shapes[o]), l.push(p), d += p.totalLength;
                                c.totalShapeLength = d, c.pathsData = l
                            }
                            m += d, c.shape._mdf = !0
                        } else c.shape.paths = c.localShapeCollection;
                    var v, y = e,
                        b = i,
                        _ = 0;
                    for (a = f - 1; a >= 0; a -= 1)
                        if ((c = this.shapes[a]).shape._mdf) {
                            for ((u = c.localShapeCollection).releaseShapes(), 2 === this.m && f > 1 ? (v = this.calculateShapeEdges(e, i, c.totalShapeLength, _, m), _ += c.totalShapeLength) : v = [
                                    [y, b]
                                ], h = v.length, o = 0; o < h; o += 1) {
                                y = v[o][0], b = v[o][1], g.length = 0, b <= 1 ? g.push({
                                    s: c.totalShapeLength * y,
                                    e: c.totalShapeLength * b
                                }) : y >= 1 ? g.push({
                                    s: c.totalShapeLength * (y - 1),
                                    e: c.totalShapeLength * (b - 1)
                                }) : (g.push({
                                    s: c.totalShapeLength * y,
                                    e: c.totalShapeLength
                                }), g.push({
                                    s: 0,
                                    e: c.totalShapeLength * (b - 1)
                                }));
                                var k = this.addShapes(c, g[0]);
                                if (g[0].s !== g[0].e) {
                                    if (g.length > 1)
                                        if (c.shape.paths.shapes[c.shape.paths._length - 1].c) {
                                            var w = k.pop();
                                            this.addPaths(k, u), k = this.addShapes(c, g[1], w)
                                        } else this.addPaths(k, u), k = this.addShapes(c, g[1]);
                                    this.addPaths(k, u)
                                }
                            }
                            c.shape.paths = u
                        }
                }
            }, Mi.prototype.addPaths = function(t, e) {
                var i, s = t.length;
                for (i = 0; i < s; i += 1) e.addShape(t[i])
            }, Mi.prototype.addSegment = function(t, e, i, s, a, r, n) {
                a.setXYAt(e[0], e[1], "o", r), a.setXYAt(i[0], i[1], "i", r + 1), n && a.setXYAt(t[0], t[1], "v", r), a.setXYAt(s[0], s[1], "v", r + 1)
            }, Mi.prototype.addSegmentFromArray = function(t, e, i, s) {
                e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), s && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
            }, Mi.prototype.addShapes = function(t, e, i) {
                var s, a, r, n, o, h, l, p, d = t.pathsData,
                    f = t.shape.paths.shapes,
                    m = t.shape.paths._length,
                    c = 0,
                    u = [],
                    g = !0;
                for (i ? (o = i._length, p = i._length) : (i = Gt.newElement(), o = 0, p = 0), u.push(i), s = 0; s < m; s += 1) {
                    for (h = d[s].lengths, i.c = f[s].c, r = f[s].c ? h.length : h.length + 1, a = 1; a < r; a += 1)
                        if (c + (n = h[a - 1]).addedLength < e.s) c += n.addedLength, i.c = !1;
                        else {
                            if (c > e.e) {
                                i.c = !1;
                                break
                            }
                            e.s <= c && e.e >= c + n.addedLength ? (this.addSegment(f[s].v[a - 1], f[s].o[a - 1], f[s].i[a], f[s].v[a], i, o, g), g = !1) : (l = ct.getNewSegment(f[s].v[a - 1], f[s].v[a], f[s].o[a - 1], f[s].i[a], (e.s - c) / n.addedLength, (e.e - c) / n.addedLength, h[a - 1]), this.addSegmentFromArray(l, i, o, g), g = !1, i.c = !1), c += n.addedLength, o += 1
                        }
                    if (f[s].c && h.length) {
                        if (n = h[a - 1], c <= e.e) {
                            var v = h[a - 1].addedLength;
                            e.s <= c && e.e >= c + v ? (this.addSegment(f[s].v[a - 1], f[s].o[a - 1], f[s].i[0], f[s].v[0], i, o, g), g = !1) : (l = ct.getNewSegment(f[s].v[a - 1], f[s].v[0], f[s].o[a - 1], f[s].i[0], (e.s - c) / v, (e.e - c) / v, h[a - 1]), this.addSegmentFromArray(l, i, o, g), g = !1, i.c = !1)
                        } else i.c = !1;
                        c += n.addedLength, o += 1
                    }
                    if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), c > e.e) break;
                    s < m - 1 && (i = Gt.newElement(), g = !0, u.push(i), o = 0)
                }
                return u
            }, Ii.prototype = {
                createMergeNode: function(t, e) {
                    var i, s, a = U("feMerge");
                    for (a.setAttribute("result", t), s = 0; s < e.length; s += 1)(i = U("feMergeNode")).setAttribute("in", e[s]), a.appendChild(i), a.appendChild(i);
                    return a
                }
            }, p([Ii], Li), Li.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                        var e = this.filterManager.effectElements[0].p.v;
                        this.feFlood.setAttribute("flood-color", j(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                    }
                    if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                        var i = this.filterManager.effectElements[3].p.v,
                            s = (this.filterManager.effectElements[2].p.v - 90) * A,
                            a = i * Math.cos(s),
                            r = i * Math.sin(s);
                        this.feOffset.setAttribute("dx", a), this.feOffset.setAttribute("dy", r)
                    }
                }
            }, Oi.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = .3,
                        i = this.filterManager.effectElements[0].p.v * e,
                        s = this.filterManager.effectElements[1].p.v,
                        a = 3 == s ? 0 : i,
                        r = 2 == s ? 0 : i;
                    this.feGaussianBlur.setAttribute("stdDeviation", a + " " + r);
                    var n = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                    this.feGaussianBlur.setAttribute("edgeMode", n)
                }
            }, it("svg", xi), ti.registerModifier("tm", Mi), Xe(25, Li, !0), Xe(29, Oi, !0), Kt
        }())
    }(i, i.exports);
    var s = e(i.exports);
    const a = [/^https?:\/\/(.*[^.]\.)?lottielab\.com$/],
        r = {
            v: "5.7.5",
            fr: 100,
            ip: 0,
            op: 300,
            w: 300,
            h: 225,
            nm: "Comp 1",
            ddd: 0,
            assets: [],
            layers: [],
            markers: []
        };
    class n {
        constructor(t, e, i) {
            this.root = t, this.initialize(e, i)
        }
        _initWithAnimation(t, e, i) {
            this._animation = s.loadAnimation({
                container: e,
                renderer: "svg",
                autoplay: !1,
                animationData: t,
                rendererSettings: {
                    preserveAspectRatio: i
                }
            })
        }
        initialize(t, e) {
            this.destroy();
            const i = document.createElement("div");
            if (i.style.width = "100%", i.style.height = "100%", "string" == typeof t) {
                if (this.loadingSrc === t) return Promise.resolve();
                this.loadingSrc = t;
                const s = new XMLHttpRequest;
                s.open("GET", t, !0);
                try {
                    a.some((e => new URL(t).origin.match(e))) && s.setRequestHeader("X-Lottie-Player", "@lottielab/lottie-player 1.1.3")
                } catch (t) {}
                return new Promise(((a, r) => {
                    s.onload = () => {
                        if (this.loadingSrc !== t) return a();
                        try {
                            if (200 === s.status) {
                                if (!s.response) return r(new Error(`Failed to load Lottie file ${t}: Empty response`));
                                const n = JSON.parse(s.response);
                                return this._initWithAnimation(n, i, e), this.root.innerHTML = "", this.root.appendChild(i), a()
                            } {
                                let e = s.responseText;
                                return e.length > 300 && (e = e.slice(0, 300) + "... (truncated)"), r(new Error(`Failed to load Lottie file ${t}: HTTP ${s.status} ${s.statusText}\nResponse:\n${e}`))
                            }
                        } catch (e) {
                            return e.message && (e.message = `Failed to load Lottie file ${t}: ${e.message}`), r(e)
                        } finally {
                            this.loadingSrc = void 0
                        }
                    }, s.onerror = () => {
                        this.loadingSrc = void 0, r(new Error(`Failed to load Lottie file ${t}: Network error`))
                    }, s.send()
                }))
            }
            return this._initWithAnimation(null != t ? t : r, i, e), this.root.innerHTML = "", this.root.appendChild(i), this.loadingSrc = void 0, Promise.resolve()
        }
        get frameRate() {
            return this._animation ? this._animation.frameRate : 0
        }
        get duration() {
            return this._animation ? this._animation.getDuration(!1) : 0
        }
        get durationFrames() {
            return this._animation ? this._animation.getDuration(!0) : 0
        }
        get animation() {
            return this._animation
        }
        get animationData() {
            var t;
            const e = null === (t = this._animation) || void 0 === t ? void 0 : t.animationData;
            if (e !== r) return e
        }
        renderFrame(t) {
            const e = Math.max(0, Math.min(this.durationFrames - 1e-6, t * this.frameRate));
            this._animation.goToAndStop(e, !0)
        }
        get currentTime() {
            return this._animation.currentFrame / this.frameRate
        }
        get currentFrame() {
            return this._animation.currentFrame
        }
        destroy() {
            this._animation && this._animation.destroy(), this.root.innerHTML = ""
        }
    }

    function o(t, e, i) {
        var s, a, r, n;
        return null == t ? e : null == e ? t : "number" == typeof t ? "number" != typeof e ? i > .5 ? e : t : (1 - i) * t + i * e : Array.isArray(t) || t instanceof Float32Array ? Array.isArray(e) || e instanceof Float32Array ? t.map(((t, s) => {
            var a;
            return o(t, null !== (a = e[s]) && void 0 !== a ? a : t, i)
        })) : i > .5 ? e : t : "i" in t && "v" in t && "o" in t && "object" == typeof e && "i" in e && "v" in e && "o" in e ? {
            closed: t.closed && e.closed,
            i: o(t.i, e.i, i),
            o: o(t.o, e.o, i),
            v: o(t.v, e.v, i),
            length: Math.max(null !== (s = t.length) && void 0 !== s ? s : 0, null !== (a = e.length) && void 0 !== a ? a : 0),
            _length: Math.max(null !== (r = t._length) && void 0 !== r ? r : 0, null !== (n = e._length) && void 0 !== n ? n : 0)
        } : i > .5 ? e : t
    }
    class h {
        constructor(t) {
            var e;
            this.ops = [], this.lottie = t;
            const i = t.renderer,
                s = new WeakSet;
            (null !== (e = null == i ? void 0 : i.elements) && void 0 !== e ? e : []).forEach((t => this.attach(t, s)))
        }
        attachToProp(t) {
            var e;
            const i = this,
                s = t;
            if (!(null === (e = t.effectsSequence) || void 0 === e ? void 0 : e.length)) return;
            const a = [];
            for (let e = 0; e < 8; e++) a[e] = {
                _caching: structuredClone(t._caching),
                propType: s.propType,
                offsetTime: s.offsetTime,
                keyframes: s.keyframes,
                keyframesMetadata: s.keyframesMetadata,
                sh: s.sh,
                pv: structuredClone(s.pv)
            };
            t.addEffect((function(e) {
                const r = i.ops.slice(-8);
                t.interpolateShape && null == e && (e = structuredClone(s.pv));
                for (let n = 0; n < r.length; n++) {
                    const h = r[n],
                        l = a[n];
                    !l._caching && t._caching && (l._caching = structuredClone(t._caching)), !l.keyframes && s.keyframes && (l.keyframes = s.keyframes), !l.keyframesMetadata && s.keyframesMetadata && (l.keyframesMetadata = s.keyframesMetadata);
                    const p = Math.min(Math.max(Math.round(h.time * i.lottie.frameRate), 0), i.lottie.getDuration(!0) - 1e-5);
                    try {
                        let i;
                        l.offsetTime = t.offsetTime, t.interpolateValue ? (l._caching.lastFrame >= p && (l._caching._lastKeyframeIndex = -1, l._caching.lastIndex = 0), i = t.interpolateValue.call(l, p, l._caching), l.pv = i) : t.interpolateShape ? (l._caching.lastIndex = l._caching.lastFrame < p ? l._caching.lastIndex : 0, t.interpolateShape.call(l, p, l.pv, l._caching), i = l.pv) : i = 0, l._caching.lastFrame = p, e = o(e, i, h.strength)
                    } catch (t) {
                        console.warn("[@lottielab/lottie-player:morph]", t)
                    }
                }
                return e
            }))
        }
        attach(t, e = new WeakSet) {
            if (!e.has(t) && "object" == typeof t && null != t)
                if (e.add(t), t.interpolateShape || t.interpolateValue || t.addEffect || t.effectsSequence) this.attachToProp(t);
                else
                    for (const i of Object.values(t)) this.attach(i, e)
        }
        detach() {}
    }
    class l {
        constructor() {
            this.listeners = []
        }
        addListener(t) {
            this.listeners.push(t)
        }
        removeListener(t) {
            this.listeners = this.listeners.filter((e => e !== t))
        }
        hasListeners() {
            return this.listeners.length > 0
        }
        removeAllListeners() {
            this.listeners = []
        }
        emit(t) {
            for (const e of this.listeners) e(t)
        }
    }
    class p {
        constructor(t, e, i, s) {
            this.animationFrame = void 0, this.onFrameBound = this.onFrame.bind(this), this.timeMultiplier = 1, this.timeEvent = new l, this.renderer = new n(t, e, s), this._state = {
                time: 0,
                lottie: this.renderer.animationData
            }, i && (this.animationFrame = requestAnimationFrame(this.onFrameBound), this.driver = i)
        }
        initialize(t, e) {
            return this.renderer.initialize(t, e).then((() => {
                void 0 === this.animationFrame && (this.animationFrame = requestAnimationFrame(this.onFrameBound)), this.advanceToNow(), this._state.lottie = this.renderer.animationData, this.refresh()
            })).catch((t => {
                this._state.lottie = void 0
            }))
        }
        get state() {
            return this._state
        }
        refresh() {
            var t;
            null === (t = this.morphing) || void 0 === t || t.detach(), this.morphing = void 0, this.setState(this.state)
        }
        setState(t) {
            var e, i, s, a;
            const r = this._state.time !== t.time;
            if (this._state = t, r && this.renderer.renderFrame(t.time), t.morphs) {
                if (!this.morphing && this.renderer.animation && (this.morphing = new h(this.renderer.animation)), this.morphing) {
                    const s = this.morphing.ops.length !== t.morphs.length || this.morphing.ops.some(((e, i) => {
                        const s = t.morphs[i];
                        return !s || e.time !== s.time || e.strength !== s.strength
                    }));
                    this.morphing.ops = t.morphs, s && (null === (i = null === (e = this.renderer.animation) || void 0 === e ? void 0 : e.renderer) || void 0 === i || i.renderFrame(null))
                }
            } else this.morphing && this.morphing.ops.length > 0 && (this.morphing.ops = [], null === (a = null === (s = this.renderer.animation) || void 0 === s ? void 0 : s.renderer) || void 0 === a || a.renderFrame(null))
        }
        set state(t) {
            if (this.driver) throw new Error("Cannot set state directly when using a driver");
            this.setState(t)
        }
        get driver() {
            return this._driver
        }
        set driver(t) {
            this.prevClock = void 0, void 0 === this.animationFrame && t ? this.animationFrame = requestAnimationFrame(this.onFrameBound) : void 0 === this.animationFrame || t || (cancelAnimationFrame(this.animationFrame), this.animationFrame = void 0), this._driver = t, (null == t ? void 0 : t.advance) && this.setState(t.advance(this._state, 0))
        }
        get clock() {
            if (void 0 === this.prevTime) return 0;
            const t = this.prevTime,
                e = (null === performance || void 0 === performance ? void 0 : performance.now()) || (new Date).getTime();
            return (t + (e - (this.prevRealTime || e))) / 1e3
        }
        get duration() {
            return this.renderer.duration
        }
        get durationInFrames() {
            return this.renderer.durationFrames
        }
        get frameRate() {
            return this.renderer.frameRate
        }
        get animation() {
            return this.renderer.animation
        }
        get animationData() {
            return this.renderer.animationData
        }
        get currentTime() {
            return this.renderer.currentTime
        }
        get currentFrame() {
            return this.renderer.currentFrame
        }
        advanceToNow() {
            var t;
            const e = this.clock,
                i = void 0 !== this.prevClock ? e - this.prevClock : 0;
            if ((null === (t = this.driver) || void 0 === t ? void 0 : t.advance) && i > 0) {
                this._state.lottie = this.renderer.animationData;
                const t = i * this.timeMultiplier;
                this.setState(this.driver.advance(this._state, i * this.timeMultiplier)), this.timeEvent.emit({
                    playhead: this.currentTime,
                    clock: this.clock,
                    elapsed: t
                }), this.renderer.renderFrame(this._state.time)
            }
            this.prevClock = e
        }
        destroy() {
            var t;
            this.animationFrame && (cancelAnimationFrame(this.animationFrame), this.animationFrame = void 0), null === (t = this.morphing) || void 0 === t || t.detach(), this.renderer.destroy()
        }
        onFrame(t) {
            this.prevTime = t, this.prevRealTime = (null === performance || void 0 === performance ? void 0 : performance.now()) || (new Date).getTime(), this.advanceToNow(), this.animationFrame = requestAnimationFrame(this.onFrameBound)
        }
    }

    function d(t) {
        return t ? t.fr : 100
    }
    class f {
        constructor() {
            this.playing = !0, this.time = 0, this.speed = 1, this.direction = 1, this._loop = !0, this._loopsRemaining = 1 / 0, this.loopEvent = new l, this.finishEvent = new l
        }
        get effectiveSegment() {
            var t;
            return this.segment ? this.segment : [0, null !== (t = this._duration) && void 0 !== t ? t : 0]
        }
        globalTimeToSegmentTime(t) {
            const [e, i] = this.effectiveSegment;
            return Math.min(Math.max(t - e, 0), i - e)
        }
        segmentTimeToGlobalTime(t) {
            const [e] = this.effectiveSegment;
            return e + t
        }
        advance(t, e, i) {
            const {
                lottie: s
            } = t;
            if (this._fps = d(s), this._duration = function(t) {
                    return t ? (t.op - t.ip) / d(t) : 0
                }(s), !this.playing) return {
                time: this.time,
                lottie: s
            };
            const a = this.globalTimeToSegmentTime(this.time);
            let r;
            r = a + e * this.speed * this.direction;
            const n = [];
            if (this.durationOfSegment > 0) {
                const t = Math.abs(Math.floor(r / this.durationOfSegment)),
                    e = this.durationOfSegment - a;
                for (let i = 0; i < t; i++) {
                    this._loopsRemaining--;
                    const t = e + i * this.durationOfSegment;
                    if (!(this._loopsRemaining > 0)) {
                        n.push({
                            type: "finish",
                            relativeTime: t
                        }), r = Math.max(0, Math.min(r, this.durationOfSegment)), this._loopsRemaining = 0, this.playing = !1;
                        break
                    }
                    n.push({
                        type: "loop",
                        relativeTime: t
                    }), r >= this.durationOfSegment ? r -= this.durationOfSegment : r += this.durationOfSegment
                }
            } else r = 0, n.push({
                type: "loop",
                relativeTime: 0
            });
            const o = this.segmentTimeToGlobalTime(r);
            if (this.time = o, n.length > 0) {
                null != i && i.push(...n);
                for (const t of n) "loop" === t.type ? this.loopEvent.emit(void 0) : "finish" === t.type && this.finishEvent.emit(void 0)
            }
            return {
                time: o,
                lottie: s
            }
        }
        play() {
            this.playing = !0
        }
        pause() {
            this.playing = !1
        }
        stop() {
            this.playing = !1, this.seek(0), this.loop = this._loop
        }
        seek(t) {
            this.time = t
        }
        seekToFrame(t) {
            this.time = t / this.frameRate
        }
        loopBetween(t, e) {
            this.segment = [t, e]
        }
        loopBetweenFrames(t, e) {
            this.segment = [t / this.frameRate, e / this.frameRate]
        }
        get loop() {
            return this._loop
        }
        set loop(t) {
            this._loop = t, this._loopsRemaining = "number" == typeof t ? t : t ? 1 / 0 : 1
        }
        get currentTime() {
            return this.time
        }
        get currentFrame() {
            return this.time * this.frameRate
        }
        get timeInSegment() {
            return this.globalTimeToSegmentTime(this.time)
        }
        set timeInSegment(t) {
            this.time = this.segmentTimeToGlobalTime(t)
        }
        get frameInSegment() {
            return this.timeInSegment * this.frameRate
        }
        get frameRate() {
            var t;
            return null !== (t = this._fps) && void 0 !== t ? t : 100
        }
        get duration() {
            var t;
            return null !== (t = this._duration) && void 0 !== t ? t : 0
        }
        get durationFrames() {
            return this.duration * this.frameRate
        }
        get durationOfSegment() {
            const [t, e] = this.effectiveSegment;
            return e - t
        }
        get animation() {
            throw new Error("This is just a driver and implements ILottie for clarity; you shouldn't directly call this function")
        }
        get animationData() {
            throw new Error("This is just a driver and implements ILottie for clarity; you shouldn't directly call this function")
        }
        toInteractive() {
            throw new Error("This is just a driver and implements ILottie for clarity; you shouldn't directly call this function")
        }
        toPlayback() {}
        on(t, e) {
            throw new Error("This is just a driver and implements ILottie for clarity; you shouldn't directly call this function")
        }
        off(t, e) {
            throw new Error("This is just a driver and implements ILottie for clarity; you shouldn't directly call this function")
        }
    }

    function m(t) {
        switch (t.event) {
            case "finish":
                return "finish";
            case "click":
            case "mouseDown":
            case "mouseUp":
            case "mouseEnter":
            case "mouseLeave":
                return t.target ? `${t.event}:${t.target}` : t.event;
            case "custom":
                return "custom:" + t.name
        }
    }
    var c = Object.freeze({
        __proto__: null,
        eventToString: m
    });

    function u(t) {
        throw new Error(`Unexpected ${t.name} at position ${t.position}.`)
    }
    const g = (() => {
        const t = [{
            name: "number",
            lbp: 2,
            detect: t => /^([1-9]\d*|0)(\.\d*)?$/.test(t),
            nud: (t, e) => ({
                type: 0,
                value: parseFloat(e.value)
            })
        }, {
            name: "identifier",
            lbp: 2,
            detect: t => /^[_a-zA-Z][_a-zA-Z0-9]*(\.[a-zA-Z]+)*$/.test(t),
            nud: (t, e) => ({
                type: 1,
                name: e.value
            })
        }, {
            name: "^",
            lbp: 9,
            led: (t, e) => ({
                type: 3,
                operator: "^",
                left: e,
                right: t.parse(8)
            })
        }, {
            name: "!",
            lbp: 10,
            nud: t => ({
                type: 2,
                operator: "!",
                operand: t.parse(10)
            })
        }, {
            name: "conditional-operator",
            detect: t => "?" == t,
            lbp: 3,
            led: (t, e) => {
                const i = t.parse(2),
                    s = t.pop();
                ":" != s.name && u(s);
                return {
                    type: 4,
                    condition: e,
                    thenBranch: i,
                    elseBranch: t.parse(2)
                }
            }
        }, {
            name: "(",
            lbp: 11,
            nud: t => {
                const e = t.parse(1),
                    i = t.pop();
                return ")" != i.name && u(i), e
            },
            led: (t, e, i) => {
                1 != e.type && u(i);
                const s = [];
                if (")" == t.peek().name) t.pop();
                else
                    for (;;) {
                        s.push(t.parse(1));
                        const e = t.pop();
                        if (")" == e.name) break;
                        "," != e.name && u(e)
                    }
                return {
                    type: 5,
                    name: e.name,
                    operands: s
                }
            }
        }, {
            name: "end of input",
            lbp: 0
        }];
        for (const e of ["+", "-"]) t.push({
            name: e,
            lbp: 7,
            nud: t => ({
                type: 2,
                operator: e,
                operand: t.parse(7)
            }),
            led: (t, i) => ({
                type: 3,
                operator: e,
                left: i,
                right: t.parse(7)
            })
        });
        const e = [
            ["*", 8],
            ["/", 8],
            ["<", 6],
            ["<=", 6],
            [">", 6],
            [">=", 6],
            ["==", 6],
            ["&&", 5],
            ["||", 4]
        ];
        for (const [i, s] of e) t.push({
            name: i,
            lbp: s,
            led: (t, e) => ({
                type: 3,
                operator: i,
                left: e,
                right: t.parse(s)
            })
        });
        for (const e of [",", ")", ":"]) t.push({
            name: e,
            lbp: 1
        });
        return t
    })();

    function v(t) {
        const e = function(t) {
            const e = /^\s*$/,
                i = t.split(/([+\-*/^(),?:!]|<=|>=|==|>(?!=)|<(?!=)|\|\||&&|\s+)/g);
            i.push("end of input");
            let s = 0;
            const a = [];
            for (const t of i) {
                if (!g.some((e => {
                        var i;
                        if ((null !== (i = e.detect) && void 0 !== i ? i : t => t == e.name)(t)) return a.push(Object.assign(Object.assign({}, e), {
                            value: t,
                            position: s
                        })), !0
                    })) && !e.test(t)) throw new Error(`Invalid token ${t} at position ${s}`);
                s += t.length
            }
            return a
        }(t);
        let i = 0;
        const s = {
            peek: () => e[i],
            pop: () => e[i++],
            parse: t => {
                let e = s.pop();
                e.nud || u(e);
                let i = e.nud(s, e);
                for (; s.peek().lbp > t;) e = s.pop(), e.led || u(e), i = e.led(s, i, e);
                return i
            }
        };
        return s.parse(0)
    }
    const y = Math;

    function b(t) {
        throw new Error(`Symbol ${t} is not defined and not a built in symbol.`)
    }

    function _(t, e) {
        var i, s;
        switch (t.type) {
            case 0:
                return t.value;
            case 1:
                {
                    const s = t.name,
                        a = null !== (i = e[s]) && void 0 !== i ? i : y[s];
                    if (null == a && b(s), "boolean" != typeof a && "number" != typeof a) throw new Error(`Symbol ${s} is a function and must be used in a function call.`);
                    return a
                }
            case 2:
                {
                    const i = _(t.operand, e);
                    return function(t, e) {
                        switch (t) {
                            case "+":
                                return +e;
                            case "-":
                                return -e;
                            case "!":
                                return !e
                        }
                    }(t.operator, i)
                }
            case 3:
                {
                    const i = _(t.left, e),
                        s = _(t.right, e);
                    return function(t, e, i) {
                        switch (t) {
                            case "+":
                                return e + i;
                            case "-":
                                return e - i;
                            case "*":
                                return e * i;
                            case "/":
                                return e / i;
                            case "^":
                                return Math.pow(e, i);
                            case "<":
                                return e < i;
                            case "<=":
                                return e <= i;
                            case ">":
                                return e > i;
                            case ">=":
                                return e >= i;
                            case "==":
                                return e == i;
                            case "&&":
                                return e && i;
                            case "||":
                                return e || i
                        }
                    }(t.operator, i, s)
                }
            case 4:
                {
                    const i = _(t.condition, e);
                    return _(i ? t.thenBranch : t.elseBranch, e)
                }
            case 5:
                {
                    const i = t.name,
                        a = null !== (s = e[i]) && void 0 !== s ? s : y[i];
                    if (null == a && b(i), "function" != typeof a) throw new Error(`Symbol ${i} has value ${a} and is not callable.`);
                    if (a.length != t.operands.length) throw new Error(`Expected ${a.length} operands for ${i}, received ${t.operands.length}`);
                    const r = t.operands.map((t => _(t, e)));
                    return a.apply(null, r)
                }
        }
    }
    const k = {
        time: 0,
        "time.diff": 0,
        playhead: 0,
        "playhead.progress": 0,
        "playhead.abs": 0,
        "mouse.x": 0,
        "mouse.y": 0,
        "mouse.progress.x": 0,
        "mouse.progress.y": 0,
        "mouse.abs.x": 0,
        "mouse.abs.y": 0,
        "mouse.buttons.left": !1,
        "mouse.buttons.right": !1,
        "mouse.buttons.middle": !1
    };

    function w(t, e) {
        const i = Object.assign({}, t);
        for (const t in e) {
            if (!/^[a-zA-Z_][a-zA-Z0-9_.]*$/.test(t)) continue;
            const s = e[t];
            "object" == typeof s && "x" in s && "y" in s && "number" == typeof s.x && "number" == typeof s.y ? (i[t + ".x"] = s.x, i[t + ".y"] = s.y) : i[t] = "number" == typeof s || "boolean" == typeof s ? s : 0
        }
        return i
    }

    function S(t, e) {
        return function(t, e) {
            return function(t, e) {
                return t.reduce(((t, i, s) => ({
                    x: t.x + e[s] * i.x,
                    y: t.y + e[s] * i.y
                })), {
                    x: 0,
                    y: 0
                })
            }(function(t) {
                return [t.start, t.controlPoint1, t.controlPoint2, t.end]
            }(t), [Math.pow(1 - e, 3), 3 * Math.pow(1 - e, 2) * e, 3 * (1 - e) * Math.pow(e, 2), Math.pow(e, 3)])
        }(function(t) {
            return {
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 1,
                    y: 1
                },
                controlPoint1: t.o,
                controlPoint2: t.i
            }
        }(t), e).y
    }

    function A(t, e) {
        try {
            const i = v(t);
            return t => {
                try {
                    return +_(i, t)
                } catch (t) {
                    return e
                }
            }
        } catch (t) {
            return () => e
        }
    }

    function D(t) {
        var e;
        const i = new f;
        i.segment = t.segment, i.loop = null === (e = t.loop) || void 0 === e || e, t.direction && (i.direction = "forward" === t.direction ? 1 : -1);
        const s = {
            driver: i
        };
        return "number" == typeof t.speed ? i.speed = t.speed : "string" == typeof t.speed && (s.speedControl = A(t.speed, 1)), t.playhead && (s.playheadControl = A(t.playhead, 0)), s
    }

    function P(t, e, i, s, a, r) {
        var n, o;
        const h = t.playback,
            l = Object.assign(Object.assign({}, a), {
                time: s,
                "time.diff": i,
                playhead: h.driver.timeInSegment,
                "playhead.progress": h.driver.durationOfSegment > 0 ? h.driver.timeInSegment / h.driver.durationOfSegment : 0,
                "playhead.abs": h.driver.currentTime
            });
        h.speedControl && (h.driver.speed = h.speedControl(a));
        const p = h.driver.advance(e, i, r);
        h.playheadControl && (p.time = h.playheadControl(l) * h.driver.durationOfSegment + (null !== (o = null === (n = h.driver.segment) || void 0 === n ? void 0 : n[0]) && void 0 !== o ? o : 0));
        const d = function(t, e, i) {
            var s, a;
            if (!t.morphing) return;
            const r = null !== (a = null === (s = t.def.morphing) || void 0 === s ? void 0 : s.timeRemap) && void 0 !== a ? a : "proportional";
            let n;
            const o = e.morphs ? e.morphs[e.morphs.length - 1].time : e.time;
            switch (r) {
                case "proportional":
                    n = C(o, t.def.segment, t.morphing.other.def.segment);
                    break;
                case "wrap":
                    n = T(o, t.def.segment, t.morphing.other.def.segment);
                    break;
                case "clamp":
                    n = E(o, t.def.segment, t.morphing.other.def.segment);
                    break;
                default:
                    return void console.warn(`[@lottielab/lottie-player:interactive] Unknown timeRemap: ${r}`)
            }
            return {
                time: n,
                strength: "number" == typeof t.morphing.strength ? t.morphing.strength : t.morphing.strength(i)
            }
        }(t, p, a);
        return d && (p.morphs = [d]), p
    }

    function C(t, e, i, s = 1) {
        const a = e[1] - e[0],
            r = i[1] - i[0];
        let n = a > 0 ? (t - e[0]) / a : 0;
        return n = Math.min(1, Math.max(0, n)) * s, i[0] + n * r
    }

    function T(t, e, i) {
        const s = i[1] - i[0],
            a = t - e[0],
            r = i[0] + (s > 0 ? a % (i[1] - i[0]) : 0);
        return Math.min(i[1], Math.max(i[0], r))
    }

    function E(t, e, i) {
        const s = t - e[0] + i[0];
        return Math.min(i[1], Math.max(i[0], s))
    }

    function F(t, e, i, s, a, r = !0, n = 8) {
        var o;
        let h = e.next ? P(e.next, t, i, s, a) : t;
        if (e && e.def.duration) {
            let l;
            l = "state" === e.prev.type ? P(e.prev, t, i, s, a) : F(t, e.prev, i, s, a, !1, n - 1), r && (e.progress += i / e.def.duration), e.progress = Math.min(1, e.progress);
            let p = e.progress;
            if (e.def.easing && (p = S(e.def.easing, p)), 1 === p) h = Object.assign(Object.assign({}, l), {
                morphs: t.morphs,
                time: h.time
            });
            else if (n > 0) {
                const e = h.time;
                h = Object.assign({}, l), h.morphs = (null !== (o = h.morphs) && void 0 !== o ? o : []).concat([{
                    time: e,
                    strength: p
                }]), t.morphs && t.morphs.length > 0 && (h.morphs = [...t.morphs, {
                    time: h.time,
                    strength: 1 - h.morphs[0].strength
                }], h.time = t.time)
            } else h = Object.assign(Object.assign({}, l), {
                time: p > .5 ? h.time : l.time
            })
        } else e.def.duration || console.warn("[@lottielab/lottie-player:interactive] Transition duration of 0/unset is not expected here");
        return h
    }
    class x {
        constructor(t) {
            this.builtinVariables = Object.assign({}, k), this.userVariables = {}, this.variables = {}, this.clock = 0, this.transitionStartEvent = new l, this.transitionEndEvent = new l, this._definition = t;
            const e = t.states[t.initialState];
            if (!e) throw new Error(`Initial state ${t.initialState} does not exist`);
            this.enterState(e)
        }
        setupMorphingForCurrentState(t) {
            (null == t ? void 0 : t.force) && (this.state.morphing = void 0);
            const e = this.state.def;
            if (e.morphing && !this.state.morphing) {
                const t = this._definition.states[e.morphing.otherState];
                t ? this.state.morphing = {
                    other: {
                        type: "state",
                        def: t,
                        playback: D(t)
                    },
                    strength: "number" == typeof e.morphing.strength ? e.morphing.strength : A(e.morphing.strength, 0)
                } : console.warn(`[@lottielab/lottie-player:interactivity] State '${e.morphing.otherState}' to morph with does not exist`)
            } else !e.morphing && this.state.morphing && (this.state.morphing = void 0)
        }
        enterState(t) {
            const e = D(t);
            this.state = {
                type: "state",
                def: t,
                playback: e,
                remainingDuration: t.duration
            }, this.setupMorphingForCurrentState({
                force: !0
            })
        }
        getCurrentState() {
            return this.state
        }
        goToState(t, e) {
            const i = this.state,
                s = i.def.segment;
            this.transition && this.transitionEndEvent.emit({
                from: this.transition.from,
                to: this.state.def,
                transition: this.transition.def
            });
            const a = this.state.playback.driver.time;
            this.enterState(t), e = null != e ? e : {
                startAt: "start"
            }, this.transitionStartEvent.emit({
                from: i.def,
                to: t,
                transition: e
            });
            const r = t.segment;
            switch (null == e ? void 0 : e.startAt) {
                case "start":
                case void 0:
                    this.state.playback.driver.time = r[0];
                    break;
                case "end":
                    this.state.playback.driver.time = r[1];
                    break;
                case "proportional":
                    this.state.playback.driver.time = C(a, s, r);
                    break;
                case "wrap":
                    this.state.playback.driver.time = T(a, s, r);
                    break;
                case "clamp":
                    this.state.playback.driver.time = E(a, s, r);
                    break;
                default:
                    console.warn(`[@lottielab/lottie-player:interactive] Unknown startAt value in ttransition: ${e.startAt}`)
            }
            if (e.duration) {
                const t = this.transition ? Object.assign(Object.assign({}, this.transition), {
                    next: i
                }) : i;
                this.transition = {
                    type: "transition",
                    prev: t,
                    progress: 0,
                    def: e,
                    from: i.def
                }
            } else this.transition = void 0, this.transitionEndEvent.emit({
                from: i.def,
                to: t,
                transition: e
            })
        }
        get definition() {
            return this._definition
        }
        set definition(t) {
            var e;
            const i = null === (e = Object.entries(this._definition.states).find((([t, e]) => e === this.state.def))) || void 0 === e ? void 0 : e[0];
            if (this._definition = t, i && this._definition.states[i]) this.enterState(t.states[i]);
            else {
                if (!t.states[t.initialState]) throw this.enterState({
                    segment: [0, 0],
                    loop: !1,
                    speed: 1,
                    direction: "forward"
                }), new Error(`Initial state ${t.initialState} does not exist`);
                const e = this.state.playback.driver.time;
                this.enterState(t.states[t.initialState]), this.state.playback.driver.time = e, this.transition = void 0
            }
        }
        updateVariables(t) {
            this.builtinVariables = Object.assign(Object.assign({}, this.builtinVariables), t), this.variables = w(this.builtinVariables, this.userVariables)
        }
        setUserVariables(t) {
            this.userVariables = t, this.variables = w(this.builtinVariables, this.userVariables)
        }
        handle(t) {
            var e;
            const i = null === (e = this.state.def.on) || void 0 === e ? void 0 : e[m(t)];
            if (!i) return;
            const s = this._definition.states[i.goTo];
            s ? this.goToState(s, i) : console.warn(`[@lottielab/lottie-player:interactive] State ${i.goTo} does not exist`)
        }
        getEffectiveState(t) {
            return "state" === t.type || t.progress < 1 ? t : t.next ? t.next : this.state
        }
        applyTransition(t, e, i) {
            let s = t;
            return this.transition && (s = F(t, this.transition, e, i, this.variables), this.transition.progress >= 1 ? (this.transitionEndEvent.emit({
                from: this.transition.from,
                to: this.state.def,
                transition: this.transition.def
            }), this.transition = void 0) : this.transition.prev = this.getEffectiveState(this.transition.prev)), s
        }
        advance(t, e) {
            let i = Object.assign({}, t);
            const s = this.clock += e;
            this.setupMorphingForCurrentState();
            const a = [];
            if (void 0 === this.state.remainingDuration) i = P(this.state, Object.assign(Object.assign({}, t), {
                morphs: void 0
            }), e, s, this.variables, a);
            else {
                const r = this.state.remainingDuration;
                if (r > 0) {
                    const n = Math.min(r, e);
                    this.state.remainingDuration -= n, i = P(this.state, Object.assign(Object.assign({}, t), {
                        morphs: void 0
                    }), n, s, this.variables, a), this.state.remainingDuration <= 0 && (this.state.remainingDuration = 0, this.handle({
                        event: "finish"
                    }))
                }
            }
            for (const t of a) "finish" === t.type && this.handle({
                event: "finish"
            });
            return i = this.applyTransition(i, e, s), i
        }
        get currentTime() {
            return this.state.playback.playheadControl ? this.state.playback.playheadControl(this.variables) : this.state.playback.driver.currentTime
        }
        get currentFrame() {
            return this.currentTime / this.state.playback.driver.frameRate
        }
    }
    const M = "ll-enclosing-rect";

    function I(t, e, i) {
        return Math.min(Math.max(t, e), i)
    }
    class L {
        attachContinuousListeners(t) {
            const e = e => {
                var i;
                const s = t.getBoundingClientRect();
                null === (i = this.handler) || void 0 === i || i.updateVariables({
                    "mouse.x": e.clientX - s.left,
                    "mouse.y": e.clientY - s.top,
                    "mouse.abs.x": e.clientX,
                    "mouse.abs.y": e.clientY,
                    "mouse.progress.x": I((e.clientX - s.left) / s.width, 0, 1),
                    "mouse.progress.y": I((e.clientY - s.top) / s.height, 0, 1)
                })
            };
            window.addEventListener("mousemove", e), this.disposers.push((() => window.removeEventListener("mousemove", e)));
            const i = t => {
                var e;
                null === (e = this.handler) || void 0 === e || e.updateVariables({
                    "mouse.buttons.left": 0 != (1 & t.buttons),
                    "mouse.buttons.right": 0 != (2 & t.buttons),
                    "mouse.buttons.middle": 0 != (4 & t.buttons)
                })
            };
            window.addEventListener("mousedown", i), this.disposers.push((() => window.removeEventListener("mousedown", i)));
            const s = () => {
                var t;
                null === (t = this.handler) || void 0 === t || t.updateVariables({
                    "mouse.buttons.left": !1,
                    "mouse.buttons.right": !1,
                    "mouse.buttons.middle": !1
                })
            };
            window.addEventListener("mouseup", s), this.disposers.push((() => window.removeEventListener("mouseup", s)))
        }
        attachListener(t, e, i) {
            let s;
            switch (i) {
                case "click":
                    s = "click";
                    break;
                case "mouseEnter":
                    s = "mouseenter";
                    break;
                case "mouseLeave":
                    s = "mouseleave";
                    break;
                case "mouseDown":
                    s = "mousedown";
                    break;
                case "mouseUp":
                    s = "mouseup";
                    break;
                default:
                    throw new Error("InteractiveEventDispatcher: not a DOM event: " + i)
            }
            const a = t => {
                var s, a;
                e === M ? null === (s = this.handler) || void 0 === s || s.handle({
                    event: i
                }) : null === (a = this.handler) || void 0 === a || a.handle({
                    event: i,
                    target: null != e ? e : void 0
                })
            };
            t.addEventListener(s, a), this.disposers.push((() => {
                t.removeEventListener(s, a)
            }))
        }
        constructor(t, e = []) {
            var i, s;
            this.container = t, this.disposers = [], this.currentClickableClassNames = [];
            const a = t.querySelector("svg"),
                r = null !== (s = null === (i = null == a ? void 0 : a.getAttribute("viewBox")) || void 0 === i ? void 0 : i.split(" ").map((t => parseFloat(t)))) && void 0 !== s ? s : [1200, 900],
                n = null == a ? void 0 : a.querySelector("svg > g"),
                o = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            [
                ["x", "0"],
                ["y", "0"],
                ["width", r[2].toString()],
                ["height", r[3].toString()],
                ["fill", "transparent"],
                ["pointer-events", "bounding-box"],
                ["class", M]
            ].forEach((([t, e]) => {
                o.setAttribute(t, e)
            })), null == n || n.insertBefore(o, n.firstChild), this.disposers.push((() => o.remove()));
            const h = new Set;
            for (const t of [M].concat(e)) {
                h.has(t) && console.warn(`[@lottielab/lottie-player:interactive] Duplicate class name ${t} in reactivity event dispatcher`), h.add(t);
                const e = t === M ? n : this.container.querySelector(`.${t}`);
                if (e)
                    for (const i of ["click", "mouseDown", "mouseUp", "mouseEnter", "mouseLeave"]) this.attachListener(e, t, i);
                else console.warn(`[@lottielab/lottie-player:interactive] Could not find element with class name ${t}`)
            }
            this.attachContinuousListeners(o)
        }
        setClickableClassNames(t) {
            const e = (t, e) => {
                const i = "full" === t ? this.container : this.container.querySelector(`.${t}`);
                i && (i.style.cursor = e)
            };
            this.currentClickableClassNames.forEach((t => e(t, "initial"))), this.currentClickableClassNames = t, t.forEach((t => e(t, "pointer")))
        }
        destroy() {
            this.setClickableClassNames([]), this.disposers.forEach((t => t()))
        }
    }
    var O;
    t.EasingPresets = void 0, (O = t.EasingPresets || (t.EasingPresets = {})).Linear = {
        i: {
            x: .75,
            y: .75
        },
        o: {
            x: .25,
            y: .25
        }
    }, O.Natural = {
        o: {
            x: .4,
            y: 0
        },
        i: {
            x: .8,
            y: 1
        }
    }, O.BounceIn = {
        o: {
            x: .8,
            y: 0
        },
        i: {
            x: .5,
            y: 1.5
        }
    }, O.BounceOut = {
        o: {
            x: .5,
            y: -.5
        },
        i: {
            x: .2,
            y: 1
        }
    }, O.Accelerate = {
        o: {
            x: .42,
            y: 0
        },
        i: {
            x: 1,
            y: 1
        }
    }, O.SlowDown = {
        o: {
            x: 0,
            y: 0
        },
        i: {
            x: .58,
            y: 1
        }
    };
    class R {
        constructor(t) {
            this.onUpdate = t, this.variables = {}
        }
        set(t, e) {
            this.variables[t] = e, this.onUpdate(this.variables)
        }
        get(t) {
            return this.variables[t]
        }
        delete(t) {
            delete this.variables[t], this.onUpdate(this.variables)
        }
        clear() {
            this.variables = {}, this.onUpdate(this.variables)
        }
    }
    class V {
        constructor(t, e) {
            this._transitionStartEvent = new l, this._transitionEndEvent = new l, this._userProvidedDefinition = {
                set: !1
            }, this._rootElement = t, this._lottie = e;
            const i = this.effectiveDefinition();
            this._driver = new x(i), this._dispatcher = new L(this._rootElement, this.getObservedClassNames(i)), this._dispatcher.setClickableClassNames(this.getClickableClassNames()), this._dispatcher.handler = this._driver;
            this._driver.transitionStartEvent.addListener((t => {
                this._transitionStartEvent.emit(this.translateTransitionEvent(t)), this._dispatcher.setClickableClassNames(this.getClickableClassNames())
            })), this._driver.transitionEndEvent.addListener((t => this._transitionEndEvent.emit(this.translateTransitionEvent(t)))), this.inputs = new R((t => this._driver.setUserVariables(t)))
        }
        get definition() {
            var t, e;
            return this._userProvidedDefinition.set ? this._userProvidedDefinition.value : null === (e = null === (t = this._lottie) || void 0 === t ? void 0 : t.metadata) || void 0 === e ? void 0 : e.lottielabInteractivity
        }
        set definition(t) {
            this._userProvidedDefinition = {
                set: !0,
                value: t
            }, this.updateReactivity()
        }
        get state() {
            const t = this._driver.getCurrentState().def,
                e = this.lookupStateName(t);
            return Object.assign(Object.assign({}, t), {
                name: null != e ? e : "<custom>"
            })
        }
        set state(t) {
            this._driver.goToState(this.findState(t))
        }
        goToState(t, e) {
            this._driver.goToState(this.findState(t), e)
        }
        hasUserProvidedDefinition() {
            return this._userProvidedDefinition.set
        }
        resetDefinition() {
            this._userProvidedDefinition = {
                set: !1
            }, this.updateReactivity()
        }
        on(t, e) {
            switch (t) {
                case "transitionstart":
                    this._transitionStartEvent.addListener(e);
                    break;
                case "transitionend":
                    this._transitionEndEvent.addListener(e)
            }
        }
        off(t, e) {
            switch (t) {
                case "transitionstart":
                    this._transitionStartEvent.removeListener(e);
                    break;
                case "transitionend":
                    this._transitionEndEvent.removeListener(e)
            }
        }
        trigger(t) {
            this._driver.handle({
                event: "custom",
                name: t
            })
        }
        _destroy() {
            var t;
            null === (t = this._dispatcher) || void 0 === t || t.destroy()
        }
        _getDriver() {
            return this._driver
        }
        translateTransitionEvent(t) {
            var e, i;
            return {
                from: Object.assign(Object.assign({}, t.from), {
                    name: null !== (e = this.lookupStateName(t.from)) && void 0 !== e ? e : "<custom>"
                }),
                to: Object.assign(Object.assign({}, t.to), {
                    name: null !== (i = this.lookupStateName(t.to)) && void 0 !== i ? i : "<custom>"
                }),
                transition: t.transition
            }
        }
        effectiveDefinition() {
            var t;
            const e = this._lottie ? this._lottie.op / this._lottie.fr : 0;
            return null !== (t = this.definition) && void 0 !== t ? t : {
                __version: "v1",
                initialState: "default",
                states: {
                    default: {
                        segment: [0, e]
                    }
                }
            }
        }
        lookupStateName(t) {
            var e;
            return null === (e = Object.entries(this.effectiveDefinition().states).find((([e, i]) => i === t))) || void 0 === e ? void 0 : e[0]
        }
        findState(t) {
            let e;
            if (e = "string" == typeof t ? this.effectiveDefinition().states[t] : t, !t) throw new Error(`State ${t} not found`);
            return e
        }
        getObservedClassNames(t) {
            return t ? [...new Set(Object.values(t.states).flatMap((t => {
                var e;
                return Object.keys(null !== (e = t.on) && void 0 !== e ? e : {})
            })).flatMap((t => {
                const [e, i] = t.split(":");
                return "custom" !== e && i ? [i] : []
            })))] : []
        }
        getClickableClassNames() {
            var t;
            return [...new Set(Object.keys(null !== (t = this.state.on) && void 0 !== t ? t : {}).flatMap((t => {
                const [e, i] = t.split(":");
                return ["click", "mouseDown", "mouseUp"].includes(e) ? i ? [i] : ["full"] : []
            })))]
        }
        updateReactivity() {
            var t;
            const e = this.effectiveDefinition();
            this._driver.definition = e, null === (t = this._dispatcher) || void 0 === t || t.destroy(), this._dispatcher = new L(this._rootElement, this.getObservedClassNames(e)), this._dispatcher.handler = this._driver
        }
    }
    class N {
        constructor(t, e, i, s) {
            this.timeEvent = new l, this.timeEventListener = t => {
                "playback" === this._impl.type ? this.timeEvent.emit(t) : this.timeEvent.emit(Object.assign(Object.assign({}, t), {
                    playhead: this.currentTime
                }))
            }, this.root = t, this._renderer = new p(t, e, void 0, s);
            const a = new f;
            i ? a.play() : a.pause(), this._impl = {
                type: "playback",
                driver: a
            }, this._renderer.driver = a, this.initialize(e, i, s)
        }
        initialize(t, e, i) {
            return this._renderer.timeEvent.removeListener(this.timeEventListener), this._renderer.initialize(t, i).then((() => {
                var t, i, s;
                if (this._renderer.timeEvent.addListener(this.timeEventListener), (null === (t = this.interactivity) || void 0 === t ? void 0 : t.hasUserProvidedDefinition()) || function(t) {
                        var e, i;
                        return !!(null === (e = null == t ? void 0 : t.metadata) || void 0 === e ? void 0 : e.lottielabInteractivity) && "v1" === (null === (i = null == t ? void 0 : t.metadata) || void 0 === i ? void 0 : i.lottielabInteractivity.__version)
                    }(this._renderer.animationData)) {
                    const t = null === (i = this.interactivity) || void 0 === i ? void 0 : i.hasUserProvidedDefinition(),
                        e = null === (s = this.interactivity) || void 0 === s ? void 0 : s.definition;
                    this.destroyImpl(), this.createInteractiveImpl(), t && (this.interactivity.definition = e)
                } else this.interactivity && this.toPlayback();
                e ? this.play() : this.pause()
            }))
        }
        destroyImpl() {
            "interactive" === this._impl.type && this._impl.interactivity._destroy()
        }
        createPlaybackImpl() {
            this._impl = {
                type: "playback",
                driver: new f
            }, this._renderer.driver = this._impl.driver, this._updateTimeMultiplier()
        }
        createInteractiveImpl() {
            this._impl = {
                type: "interactive",
                interactivity: new V(this.root, this._renderer.animationData),
                playback: {
                    direction: 1,
                    speed: 1,
                    playing: !0
                }
            }, this._renderer.driver = this._impl.interactivity._getDriver(), this._updateTimeMultiplier()
        }
        toInteractive() {
            "interactive" !== this._impl.type && (this.destroyImpl(), this.createInteractiveImpl())
        }
        toPlayback() {
            "playback" !== this._impl.type && (this.destroyImpl(), this.createPlaybackImpl())
        }
        destroy() {
            this.destroyImpl(), this._renderer.timeEvent.removeListener(this.timeEventListener), this._renderer.destroy(), this.root.innerHTML = ""
        }
        get interactivity() {
            return "interactive" === this._impl.type ? this._impl.interactivity : void 0
        }
        _updateTimeMultiplier() {
            "playback" === this._impl.type ? this._renderer.timeMultiplier = 1 : this._impl.playback.playing ? this._renderer.timeMultiplier = this._impl.playback.speed * this._impl.playback.direction : this._renderer.timeMultiplier = 0
        }
        play() {
            "playback" === this._impl.type ? this._impl.driver.play() : (this._impl.playback.playing = !0, this._updateTimeMultiplier())
        }
        stop() {
            "playback" === this._impl.type ? this._impl.driver.stop() : this.pause()
        }
        pause() {
            "playback" === this._impl.type ? this._impl.driver.pause() : (this._impl.playback.playing = !1, this._updateTimeMultiplier())
        }
        seek(t) {
            "playback" === this._impl.type ? (this._impl.driver.seek(t), this._renderer.advanceToNow()) : console.warn("[@lottielab/lottie-player] Cannot seek an interactive Lottie")
        }
        seekToFrame(t) {
            "playback" === this._impl.type ? (this._impl.driver.seekToFrame(t), this._renderer.advanceToNow()) : console.warn("[@lottielab/lottie-player] Cannot seek an interactive Lottie")
        }
        loopBetween(t, e) {
            "playback" === this._impl.type ? this._impl.driver.loopBetween(t, e) : console.warn("[@lottielab/lottie-player] Cannot loop an interactive Lottie")
        }
        loopBetweenFrames(t, e) {
            "playback" === this._impl.type ? this._impl.driver.loopBetweenFrames(t, e) : console.warn("[@lottielab/lottie-player] Cannot loop an interactive Lottie")
        }
        on(t, e) {
            switch (t) {
                case "loop":
                    if ("interactive" === this._impl.type) throw new Error("Cannot listen to 'loop' event on an interactive Lottie");
                    this._impl.driver.loopEvent.addListener(e);
                    break;
                case "finish":
                    if ("interactive" === this._impl.type) throw new Error("Cannot listen to 'finish' event on an interactive Lottie");
                    this._impl.driver.finishEvent.addListener(e);
                case "time":
                    this.timeEvent.addListener(e)
            }
        }
        off(t, e) {
            switch (t) {
                case "time":
                    this.timeEvent.removeListener(e);
                    break;
                case "loop":
                    if ("interactive" === this._impl.type) return;
                    this._impl.driver.loopEvent.removeListener(e);
                    break;
                case "finish":
                    if ("interactive" === this._impl.type) return;
                    this._impl.driver.finishEvent.removeListener(e)
            }
        }
        get playing() {
            return "playback" === this._impl.type ? this._impl.driver.playing : this._impl.playback.playing
        }
        set playing(t) {
            "playback" === this._impl.type ? this._impl.driver.playing = t : (this._impl.playback.playing = t, this._updateTimeMultiplier())
        }
        get loop() {
            return "playback" === this._impl.type && this._impl.driver.loop
        }
        set loop(t) {
            "playback" === this._impl.type ? this._impl.driver.loop = t : console.warn("[@lottielab/lottie-player] Cannot set loop on an interactive Lottie")
        }
        get currentTime() {
            switch (this._impl.type) {
                case "playback":
                    return this._impl.driver.currentTime;
                case "interactive":
                    return this._impl.interactivity._getDriver().currentTime
            }
        }
        set currentTime(t) {
            this.seek(t)
        }
        get currentFrame() {
            switch (this._impl.type) {
                case "playback":
                    return this._impl.driver.currentFrame;
                case "interactive":
                    return this._impl.interactivity._getDriver().currentFrame
            }
        }
        set currentFrame(t) {
            this.seekToFrame(t)
        }
        get frameRate() {
            return this._renderer.frameRate
        }
        get duration() {
            return this._renderer.duration
        }
        get durationFrames() {
            return this._renderer.durationInFrames
        }
        get direction() {
            return "playback" === this._impl.type ? this._impl.driver.direction : this._impl.playback.direction
        }
        set direction(t) {
            "playback" === this._impl.type ? this._impl.driver.direction = t : (this._impl.playback.direction = t, this._updateTimeMultiplier())
        }
        get speed() {
            return "playback" === this._impl.type ? this._impl.driver.speed : this._impl.playback.speed
        }
        set speed(t) {
            "playback" === this._impl.type ? this._impl.driver.speed = t : (this._impl.playback.speed = t, this._updateTimeMultiplier())
        }
        get animation() {
            return this._renderer.animation
        }
        get animationData() {
            return this._renderer.animationData
        }
    }

    function z(t) {
        console.warn("[@lottielab/lottie-player/web]", "string" == typeof t ? new Error(t) : t)
    }
    class j extends HTMLElement {
        static get observedAttributes() {
            return ["src", "loop", "speed", "direction", "preserveAspectRatio"]
        }
        constructor() {
            super(), this.loadEvent = new CustomEvent("load", {
                bubbles: !0,
                cancelable: !1
            }), this.attachShadow({
                mode: "open"
            });
            const t = document.createElement("style"),
                e = document.createElement("div");
            e.style.width = "100%", e.style.height = "100%", this.shadowRoot.appendChild(t), this.shadowRoot.appendChild(e), this.lottie = new N(e), this.updateStyles()
        }
        updateStyles() {
            const [t, e] = this.intrinsicSize;
            this.shadowRoot.querySelector("style").textContent = `\n      :host { display: inline-block; width: ${t}px; height: ${e}px; }\n    `
        }
        get intrinsicSize() {
            return this.lottie.animationData ? [this.lottie.animationData.w, this.lottie.animationData.h] : [300, 225]
        }
        attributeChangedCallback(t, e, i) {
            var s;
            if (e !== i) switch (t) {
                case "src":
                    try {
                        this.lottie.initialize(i, !("false" === this.getAttribute("autoplay")), null !== (s = this.getAttribute("preserveAspectRatio")) && void 0 !== s ? s : void 0).then((() => this.dispatchEvent(this.loadEvent))).catch((t => {
                            z(t), this.dispatchEvent(new CustomEvent("error", {
                                bubbles: !0,
                                cancelable: !1,
                                detail: t
                            }))
                        })).finally((() => this.updateStyles()))
                    } catch (t) {
                        z(t), this.dispatchEvent(new CustomEvent("error", {
                            bubbles: !0,
                            cancelable: !1,
                            detail: t
                        }))
                    }
                    break;
                case "loop":
                    this.lottie.loop = this.convertLoopAttribute(i);
                    break;
                case "direction":
                    this.lottie.direction = this.convertDirectionAttribute(i);
                    break;
                case "speed":
                    const t = parseFloat(i);
                    isNaN(t) ? (z(`Invalid speed value: ${i}`), this.lottie.speed = 1) : this.lottie.speed = parseFloat(i)
            }
        }
        convertLoopAttribute(t) {
            switch (t) {
                case "true":
                case "":
                    return !0;
                case "false":
                    return !1;
                default:
                    const e = +t;
                    return isNaN(e) ? (z(`Invalid loop value: ${t}`), !0) : e < 0 ? (z(`Invalid loop value (negative): ${t}`), !0) : (Math.floor(e) !== e && z(`Non-integer loop values are not supported: ${t}`), Math.round(e))
            }
        }
        convertDirectionAttribute(t) {
            if (["normal", "forwards"].includes(t)) return 1;
            if (["reverse", "backwards"].includes(t)) return -1;
            const e = +t;
            return isNaN(e) ? (z(`Invalid direction value: ${t}`), 1) : 1 === e || -1 === e ? e : (z(`Invalid direction value: ${t}`), 1)
        }
        disconnectedCallback() {
            this.lottie.destroy()
        }
        play() {
            this.lottie.play()
        }
        stop() {
            this.lottie.stop()
        }
        pause() {
            this.lottie.pause()
        }
        seek(t) {
            this.lottie.seek(t)
        }
        seekToFrame(t) {
            this.lottie.seekToFrame(t)
        }
        loopBetween(t, e) {
            this.lottie.loopBetween(1e3 * t, 1e3 * e)
        }
        loopBetweenFrames(t, e) {
            this.lottie.loopBetweenFrames(t, e)
        }
        toInteractive() {
            this.lottie.toInteractive()
        }
        toPlayback() {
            this.lottie.toPlayback()
        }
        on(t, e) {
            switch (t) {
                case "time":
                case "loop":
                case "finish":
                    this.lottie.on(t, e)
            }
        }
        off(t, e) {
            this.lottie.off(t, e)
        }
        get playing() {
            return this.lottie.playing
        }
        set playing(t) {
            this.lottie.playing = t
        }
        get loop() {
            return this.lottie.loop
        }
        set loop(t) {
            this.lottie.loop = t
        }
        get currentTime() {
            return this.lottie.currentTime
        }
        set currentTime(t) {
            this.lottie.currentTime = t
        }
        get currentFrame() {
            return this.lottie.currentFrame
        }
        set currentFrame(t) {
            this.lottie.currentFrame = t
        }
        get frameRate() {
            return this.lottie.frameRate
        }
        get duration() {
            return this.lottie.duration
        }
        get durationFrames() {
            return this.lottie.durationFrames
        }
        get direction() {
            return this.lottie.direction
        }
        set direction(t) {
            this.lottie.direction = t
        }
        get speed() {
            return this.lottie.speed
        }
        set speed(t) {
            this.lottie.speed = t
        }
        get animation() {
            return this.lottie.animation
        }
        get animationData() {
            return this.lottie.animationData
        }
        get interactivity() {
            return this.lottie.interactivity
        }
    }
    return "undefined" == typeof window || window.customElements.get("lottie-player") || window.customElements.define("lottie-player", j), t.default = j, t.interactivity = c, Object.defineProperty(t, "__esModule", {
        value: !0
    }), t
}({});

;
(function() {
    let loaded = false;

    function loadDeferredJS() {
        if (loaded) return;
        loaded = true;
        document.querySelectorAll('script[data-delay]').forEach(s => {
            let n = document.createElement('script');
            n.src = s.dataset.delay;
            n.defer = true;
            document.body.appendChild(n);
        });
    }
    ['scroll', 'mousemove', 'touchstart'].forEach(e =>
        window.addEventListener(e, loadDeferredJS, {
            once: true
        })
    );
})();;
/*!
 * GSAP 3.13.0
 * https://gsap.com
 * 
 * @license Copyright 2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";

    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function r(t) {
        return "string" == typeof t
    }

    function s(t) {
        return "function" == typeof t
    }

    function t(t) {
        return "number" == typeof t
    }

    function u(t) {
        return void 0 === t
    }

    function v(t) {
        return "object" == typeof t
    }

    function w(t) {
        return !1 !== t
    }

    function x() {
        return "undefined" != typeof window
    }

    function y(t) {
        return s(t) || r(t)
    }

    function P(t) {
        return (i = yt(t, ot)) && ze
    }

    function Q(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function R(t, e) {
        return !e && console.warn(t)
    }

    function S(t, e) {
        return t && (ot[t] = e) && i && (i[t] = e) || ot
    }

    function T() {
        return 0
    }

    function ea(t) {
        var e, r, i = t[0];
        if (v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = gt.length; r-- && !gt[r].targetTest(i););
            e = gt[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Zt(t[r], e))) || t.splice(r, 1);
        return t
    }

    function fa(t) {
        return t._gsap || ea(Ot(t))[0]._gsap
    }

    function ga(t, e, r) {
        return (r = t[e]) && s(r) ? t[e]() : u(r) && t.getAttribute && t.getAttribute(e) || r
    }

    function ha(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function ia(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function ja(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }

    function ka(t, e) {
        var r = e.charAt(0),
            i = parseFloat(e.substr(2));
        return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
    }

    function la(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
        return i < r
    }

    function ma() {
        var t, e, r = dt.length,
            i = dt.slice(0);
        for (ct = {}, t = dt.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function na(t) {
        return !!(t._initted || t._startAt || t.add)
    }

    function oa(t, e, r, i) {
        dt.length && !L && ma(), t.render(e, r, i || !!(L && e < 0 && na(t))), dt.length && !L && ma()
    }

    function pa(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t
    }

    function qa(t) {
        return t
    }

    function ra(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function ua(t, e) {
        for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? ua(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }

    function va(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i
    }

    function wa(t) {
        var e = t.parent || I,
            r = t.keyframes ? function _setKeyframeDefaults(i) {
                return function(t, e) {
                    for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
                }
            }($(t.keyframes)) : ra;
        if (w(t.inherit))
            for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function ya(t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var a, s = t[i];
        if (n)
            for (a = e[n]; s && s[n] > a;) s = s._prev;
        return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e
    }

    function za(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev,
            a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function Aa(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
    }

    function Ba(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function Da(t, e, r, i) {
        return t._startAt && (L ? t._startAt.revert(ht) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
    }

    function Fa(t) {
        return t._repeat ? Tt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function Ha(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function Ia(t) {
        return t._end = ja(t._start + (t._tDur / Math.abs(t._ts || t._rts || U) || 0))
    }

    function Ja(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = ja(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ia(t), r._dirty || Ba(r, t)), t
    }

    function Ka(t, e) {
        var r;
        if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Ha(t.rawTime(), e), (!e._dur || Mt(0, e.totalDuration(), r) - e._tTime > U) && e.render(r, !0)), Ba(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -U
        }
    }

    function La(e, r, i, n) {
        return r.parent && Aa(r), r._start = ja((t(i) ? i : i || e !== I ? xt(e, i, r) : e._time) + r._delay), r._end = ja(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), ya(e, r, "_first", "_last", e._sort ? "_start" : 0), bt(r) || (e._recent = r), n || Ka(e, r), e._ts < 0 && Ja(e, e._tTime), e
    }

    function Ma(t, e) {
        return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }

    function Na(t, e, r, i, n) {
        return Wt(t, e, n), t._initted ? !r && t._pt && !L && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Rt.frame ? (dt.push(t), t._lazy = [n, i], 1) : void 0 : 1
    }

    function Sa(t, e, r, i) {
        var n = t._repeat,
            a = ja(e) || 0,
            s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i && Ja(t, t._tTime = t._tDur * s), t.parent && Ia(t), r || Ba(t.parent, t), t
    }

    function Ta(t) {
        return t instanceof Qt ? Ba(t) : Sa(t, t._dur)
    }

    function Wa(e, r, i) {
        var n, a, s = t(r[1]),
            o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
            u = r[o];
        if (s && (u.duration = r[1]), u.parent = i, e) {
            for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = w(a.vars.inherit) && a.parent;
            u.immediateRender = w(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
        }
        return new Jt(r[0], u, r[1 + o])
    }

    function Xa(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function Za(t, e) {
        return r(t) && (e = st.exec(t)) ? e[1] : ""
    }

    function ab(t, e) {
        return t && v(t) && "length" in t && (!e && !t.length || t.length - 1 in t && v(t[0])) && !t.nodeType && t !== h
    }

    function db(r) {
        return r = Ot(r)[0] || R("Invalid scope") || {},
            function(t) {
                var e = r.current || r.nativeElement || r;
                return Ot(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r)
            }
    }

    function eb(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }

    function fb(t) {
        if (s(t)) return t;
        var p = v(t) ? t : {
                each: t
            },
            _ = Yt(p.ease),
            m = p.from || 0,
            g = parseFloat(p.base) || 0,
            y = {},
            e = 0 < m && m < 1,
            T = isNaN(m) || e,
            b = p.axis,
            w = m,
            x = m;
        return r(m) ? w = x = {
                center: .5,
                edges: .5,
                end: 1
            }[m] || 0 : !e && T && (w = m[0], x = m[1]),
            function(t, e, r) {
                var i, n, a, s, o, u, h, l, f, d = (r || p).length,
                    c = y[d];
                if (!c) {
                    if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, N])[1])) {
                        for (h = -N; h < (h = r[f++].getBoundingClientRect().left) && f < d;);
                        f < d && f--
                    }
                    for (c = y[d] = [], i = T ? Math.min(f, d) * w - .5 : m % f, n = f === N ? 0 : T ? d * x / f - .5 : m / f | 0, l = N, u = h = 0; u < d; u++) a = u % f - i, s = n - (u / f | 0), c[u] = o = b ? Math.abs("y" === b ? s : a) : G(a * a + s * s), h < o && (h = o), o < l && (l = o);
                    "random" === m && eb(c), c.max = h - l, c.min = l, c.v = d = (parseFloat(p.amount) || parseFloat(p.each) * (d < f ? d - 1 : b ? "y" === b ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), c.b = d < 0 ? g - d : g, c.u = Za(p.amount || p.each) || 0, _ = _ && d < 0 ? jt(_) : _
                }
                return d = (c[t] - c.min) / c.max || 0, ja(c.b + (_ ? _(d) : d) * c.v) + c.u
            }
    }

    function gb(i) {
        var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
        return function(e) {
            var r = ja(Math.round(parseFloat(e) / i) * i * n);
            return (r - r % 1) / n + (t(e) ? 0 : Za(e))
        }
    }

    function hb(h, e) {
        var l, f, r = $(h);
        return !r && v(h) && (l = r = h.radius || N, h.values ? (h = Ot(h.values), (f = !t(h[0])) && (l *= l)) : h = gb(h.increment)), Xa(e, r ? s(h) ? function(t) {
            return f = h(t), Math.abs(f - t) <= l ? f : t
        } : function(e) {
            for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = N, o = 0, u = h.length; u--;)(r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && (s = r, o = u);
            return o = !l || s <= l ? h[o] : e, f || o === e || t(e) ? o : o + Za(e)
        } : gb(h))
    }

    function ib(t, e, r, i) {
        return Xa($(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return $(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }

    function mb(e, r, t) {
        return Xa(t, function(t) {
            return e[~~r(t)]
        })
    }

    function pb(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + ib(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
        return s + t.substr(a, t.length - a)
    }

    function sb(t, e, r) {
        var i, n, a, s = t.labels,
            o = N;
        for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a
    }

    function ub(t) {
        return Aa(t), t.scrollTrigger && t.scrollTrigger.kill(!!L), t.progress() < 1 && Pt(t, "onInterrupt"), t
    }

    function xb(t) {
        if (t)
            if (t = !t.name && t.default || t, x() || t.headless) {
                var e = t.name,
                    r = s(t),
                    i = e && !r && t.init ? function() {
                        this._props = []
                    } : t,
                    n = {
                        init: T,
                        render: ue,
                        add: Vt,
                        kill: de,
                        modifier: he,
                        rawVars: 0
                    },
                    a = {
                        targetTest: 0,
                        get: 0,
                        getSetter: ie,
                        aliases: {},
                        register: 0
                    };
                if (Ft(), t !== i) {
                    if (pt[e]) return;
                    ra(i, ra(va(t, n), a)), yt(i.prototype, yt(n, va(t, a))), pt[i.prop = e] = i, t.targetTest && (gt.push(i), ft[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                S(e, i), t.register && t.register(ze, i, ge)
            } else Ct.push(t)
    }

    function Ab(t, e, r) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * St + .5 | 0
    }

    function Bb(e, r, i) {
        var n, a, s, o, u, h, l, f, d, c, p = e ? t(e) ? [e >> 16, e >> 8 & St, e & St] : 0 : Dt.black;
        if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Dt[e]) p = Dt[e];
            else if ("#" === e.charAt(0)) {
                if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & St, p & St, parseInt(e.substr(7), 16) / 255];
                p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & St, e & St]
            } else if ("hsl" === e.substr(0, 3))
                if (p = c = e.match(tt), r) {
                    if (~e.indexOf("=")) return p = e.match(et), i && p.length < 4 && (p[3] = 1), p
                } else o = +p[0] % 360 / 360, u = p[1] / 100, n = 2 * (h = p[2] / 100) - (a = h <= .5 ? h * (u + 1) : h + u - h * u), 3 < p.length && (p[3] *= 1), p[0] = Ab(o + 1 / 3, n, a), p[1] = Ab(o, n, a), p[2] = Ab(o - 1 / 3, n, a);
            else p = e.match(tt) || Dt.transparent;
            p = p.map(Number)
        }
        return r && !c && (n = p[0] / St, a = p[1] / St, s = p[2] / St, h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2, l === f ? o = u = 0 : (d = l - f, u = .5 < h ? d / (2 - l - f) : d / (l + f), o = l === n ? (a - s) / d + (a < s ? 6 : 0) : l === a ? (s - n) / d + 2 : (n - a) / d + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * u + .5), p[2] = ~~(100 * h + .5)), i && p.length < 4 && (p[3] = 1), p
    }

    function Cb(t) {
        var r = [],
            i = [],
            n = -1;
        return t.split(zt).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e), i.push(n += e.length + 1)
        }), r.c = i, r
    }

    function Db(t, e, r) {
        var i, n, a, s, o = "",
            u = (t + o).match(zt),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
                return (t = Bb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (a = Cb(t), (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(zt, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(zt)).length - 1; l < s; l++) o += n[l] + u[l];
        return o + n[s]
    }

    function Gb(t) {
        var e, r = t.join(" ");
        if (zt.lastIndex = 0, zt.test(r)) return e = Et.test(r), t[1] = Db(t[1], e), t[0] = Db(t[0], e, Cb(t[1])), !0
    }

    function Pb(t) {
        var e = (t + "").split("("),
            r = Lt[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Bt, "").trim() : +i, s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(pa)) : Lt._CE && It.test(t) ? Lt._CE("", t) : r
    }

    function Rb(t, e) {
        for (var r, i = t._first; i;) i instanceof Qt ? Rb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Rb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    }

    function Tb(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }), void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return ha(t, function(t) {
            for (var e in Lt[t] = ot[t] = a, Lt[n = t.toLowerCase()] = r, a) Lt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Lt[t + "." + e] = a[e]
        }), a
    }

    function Ub(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function Vb(r, t, e) {
        function Lm(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * K((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1,
            n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
            a = n / q * (Math.asin(1 / i) || 0),
            s = "out" === r ? Lm : "in" === r ? function(t) {
                return 1 - Lm(1 - t)
            } : Ub(Lm);
        return n = q / n, s.config = function(t, e) {
            return Vb(r, t, e)
        }, s
    }

    function Wb(e, r) {
        function Tm(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Tm : "in" === e ? function(t) {
            return 1 - Tm(1 - t)
        } : Ub(Tm);
        return t.config = function(t) {
            return Wb(e, t)
        }, t
    }
    var F, L, l, I, h, n, a, i, o, f, d, c, p, _, m, g, b, M, k, O, A, C, D, z, E, B, j, Y, X = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        Z = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        N = 1e8,
        U = 1 / N,
        q = 2 * Math.PI,
        V = q / 4,
        W = 0,
        G = Math.sqrt,
        H = Math.cos,
        K = Math.sin,
        J = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        $ = Array.isArray,
        tt = /(?:-?\.?\d|\.)+/gi,
        et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        nt = /[+-]=-?[.\d]+/,
        at = /[^,'"\[\]\s]+/gi,
        st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        ot = {},
        ut = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        ht = {
            suppressEvents: !0,
            kill: !1
        },
        lt = {
            suppressEvents: !0
        },
        ft = {},
        dt = [],
        ct = {},
        pt = {},
        _t = {},
        mt = 30,
        gt = [],
        vt = "",
        yt = function _merge(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        Tt = function _animationCycle(t, e) {
            var r = Math.floor(t = ja(t / e));
            return t && r === t ? r - 1 : r
        },
        bt = function _isFromOrFromStart(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        wt = {
            _start: 0,
            endTime: T,
            totalDuration: T
        },
        xt = function _parsePosition(t, e, i) {
            var n, a, s, o = t.labels,
                u = t._recent || wt,
                h = t.duration() >= N ? u.endTime(!1) : t._dur;
            return r(e) && (isNaN(e) || e in o) ? (a = e.charAt(0), s = "%" === e.substr(-1), n = e.indexOf("="), "<" === a || ">" === a ? (0 <= n && (e = e.replace(/=/, "")), ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = h), o[e]) : (a = parseFloat(e.charAt(n - 1) + e.substr(n + 1)), s && i && (a = a / 100 * ($(i) ? i[0] : i).totalDuration()), 1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a)) : null == e ? h : +e
        },
        Mt = function _clamp(t, e, r) {
            return r < t ? t : e < r ? e : r
        },
        kt = [].slice,
        Ot = function toArray(t, e, i) {
            return l && !e && l.selector ? l.selector(t) : !r(t) || i || !n && Ft() ? $(t) ? function _flatten(t, e, i) {
                return void 0 === i && (i = []), t.forEach(function(t) {
                    return r(t) && !e || ab(t, 1) ? i.push.apply(i, Ot(t)) : i.push(t)
                }) || i
            }(t, i) : ab(t) ? kt.call(t, 0) : t ? [t] : [] : kt.call((e || a).querySelectorAll(t), 0)
        },
        At = function mapRange(e, t, r, i, n) {
            var a = t - e,
                s = i - r;
            return Xa(n, function(t) {
                return r + ((t - e) / a * s || 0)
            })
        },
        Pt = function _callback(t, e, r) {
            var i, n, a, s = t.vars,
                o = s[e],
                u = l,
                h = t._ctx;
            if (o) return i = s[e + "Params"], n = s.callbackScope || t, r && dt.length && ma(), h && (l = h), a = i ? o.apply(n, i) : o.call(n), l = u, a
        },
        Ct = [],
        St = 255,
        Dt = {
            aqua: [0, St, St],
            lime: [0, St, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, St],
            navy: [0, 0, 128],
            white: [St, St, St],
            olive: [128, 128, 0],
            yellow: [St, St, 0],
            orange: [St, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [St, 0, 0],
            pink: [St, 192, 203],
            cyan: [0, St, St],
            transparent: [St, St, St, 0]
        },
        zt = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Dt) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Et = /hsl[a]?\(/,
        Rt = (k = Date.now, O = 500, A = 33, C = k(), D = C, E = z = 1e3 / 240, g = {
            time: 0,
            frame: 0,
            tick: function tick() {
                Al(!0)
            },
            deltaRatio: function deltaRatio(t) {
                return b / (1e3 / (t || 60))
            },
            wake: function wake() {
                o && (!n && x() && (h = n = window, a = h.document || {}, ot.gsap = ze, (h.gsapVersions || (h.gsapVersions = [])).push(ze.version), P(i || h.GreenSockGlobals || !h.gsap && h || {}), Ct.forEach(xb)), m = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, p && g.sleep(), _ = m || function(t) {
                    return setTimeout(t, E - 1e3 * g.time + 1 | 0)
                }, c = 1, Al(2))
            },
            sleep: function sleep() {
                (m ? cancelAnimationFrame : clearTimeout)(p), c = 0, _ = T
            },
            lagSmoothing: function lagSmoothing(t, e) {
                O = t || 1 / 0, A = Math.min(e || 33, O)
            },
            fps: function fps(t) {
                z = 1e3 / (t || 240), E = 1e3 * g.time + z
            },
            add: function add(n, t, e) {
                var a = t ? function(t, e, r, i) {
                    n(t, e, r, i), g.remove(a)
                } : n;
                return g.remove(n), B[e ? "unshift" : "push"](a), Ft(), a
            },
            remove: function remove(t, e) {
                ~(e = B.indexOf(t)) && B.splice(e, 1) && e <= M && M--
            },
            _listeners: B = []
        }),
        Ft = function _wake() {
            return !c && Rt.wake()
        },
        Lt = {},
        It = /^[\d.\-M][\d.\-,\s]/,
        Bt = /["']/g,
        jt = function _invertEase(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        Yt = function _parseEase(t, e) {
            return t && (s(t) ? t : Lt[t] || Pb(t)) || e
        };

    function Al(t) {
        var e, r, i, n, a = k() - D,
            s = !0 === t;
        if ((O < a || a < 0) && (C += a - A), (0 < (e = (i = (D += a) - C) - E) || s) && (n = ++g.frame, b = i - 1e3 * g.time, g.time = i /= 1e3, E += e + (z <= e ? 4 : z - e), r = 1), s || (p = _(Al)), r)
            for (M = 0; M < B.length; M++) B[M](i, b, n, t)
    }

    function jn(t) {
        return t < Y ? j * t * t : t < .7272727272727273 ? j * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? j * (t -= 2.25 / 2.75) * t + .9375 : j * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ha("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Tb(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), Lt.Linear.easeNone = Lt.none = Lt.Linear.easeIn, Tb("Elastic", Vb("in"), Vb("out"), Vb()), j = 7.5625, Y = 1 / 2.75, Tb("Bounce", function(t) {
        return 1 - jn(1 - t)
    }, jn), Tb("Expo", function(t) {
        return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
    }), Tb("Circ", function(t) {
        return -(G(1 - t * t) - 1)
    }), Tb("Sine", function(t) {
        return 1 === t ? 1 : 1 - H(t * V)
    }), Tb("Back", Wb("in"), Wb("out"), Wb()), Lt.SteppedEase = Lt.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) {
                return ((i * Mt(0, .99999999, t) | 0) + n) * r
            }
        }
    }, Z.ease = Lt["quad.out"], ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return vt += t + "," + t + "Params,"
    });
    var Xt, Zt = function GSCache(t, e) {
            this.id = W++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : ga, this.set = e ? e.getSetter : ie
        },
        Nt = ((Xt = Animation.prototype).delay = function delay(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, Xt.duration = function duration(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, Xt.totalDuration = function totalDuration(t) {
            return arguments.length ? (this._dirty = 0, Sa(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, Xt.totalTime = function totalTime(t, e) {
            if (Ft(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (Ja(this, t), !r._dp || r.parent || Ka(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && La(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === U || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), oa(this, t, e)), this
        }, Xt.time = function time(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Fa(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, Xt.totalProgress = function totalProgress(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : 0 <= this.rawTime() && this._initted ? 1 : 0
        }, Xt.progress = function progress(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Fa(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : 0 < this.rawTime() ? 1 : 0
        }, Xt.iteration = function iteration(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Tt(this._tTime, r) + 1 : 1
        }, Xt.timeScale = function timeScale(t, e) {
            if (!arguments.length) return this._rts === -U ? 0 : this._rts;
            if (this._rts === t) return this;
            var r = this.parent && this._ts ? Ha(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -U ? 0 : this._rts, this.totalTime(Mt(-Math.abs(this._delay), this.totalDuration(), r), !1 !== e), Ia(this),
                function _recacheAncestors(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this)
        }, Xt.paused = function paused(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ft(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== U && (this._tTime -= U)))), this) : this._ps
        }, Xt.startTime = function startTime(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || La(e, this, t - this._delay), this
            }
            return this._start
        }, Xt.endTime = function endTime(t) {
            return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, Xt.rawTime = function rawTime(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ha(e.rawTime(t), this) : this._tTime : this._tTime
        }, Xt.revert = function revert(t) {
            void 0 === t && (t = lt);
            var e = L;
            return L = t, na(this) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), L = e, this
        }, Xt.globalTime = function globalTime(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (Math.abs(e._ts) || 1), e = e._dp;
            return !this.parent && this._sat ? this._sat.globalTime(t) : r
        }, Xt.repeat = function repeat(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ta(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, Xt.repeatDelay = function repeatDelay(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, Ta(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, Xt.yoyo = function yoyo(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, Xt.seek = function seek(t, e) {
            return this.totalTime(xt(this, t), w(e))
        }, Xt.restart = function restart(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, w(e)), this._dur || (this._zTime = -U), this
        }, Xt.play = function play(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, Xt.reverse = function reverse(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, Xt.pause = function pause(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, Xt.resume = function resume() {
            return this.paused(!1)
        }, Xt.reversed = function reversed(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -U : 0)), this) : this._rts < 0
        }, Xt.invalidate = function invalidate() {
            return this._initted = this._act = 0, this._zTime = -U, this
        }, Xt.isActive = function isActive() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - U))
        }, Xt.eventCallback = function eventCallback(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, Xt.then = function then(t) {
            var i = this;
            return new Promise(function(e) {
                function Eo() {
                    var t = i.then;
                    i.then = null, s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
                }
                var r = s(t) ? t : qa;
                i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Eo() : i._prom = Eo
            })
        }, Xt.kill = function kill() {
            ub(this)
        }, Animation);

    function Animation(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Sa(this, +t.duration, 1, 1), this.data = t.data, l && (this._ctx = l).data.push(this), c || Rt.wake()
    }
    ra(Nt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -U,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Qt = function(i) {
        function Timeline(t, e) {
            var r;
            return void 0 === t && (t = {}), (r = i.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = w(t.sortChildren), I && La(t.parent || I, _assertThisInitialized(r), e), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && Ma(_assertThisInitialized(r), t.scrollTrigger), r
        }
        _inheritsLoose(Timeline, i);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r) {
            return Wa(0, arguments, this), this
        }, e.from = function from(t, e, r) {
            return Wa(1, arguments, this), this
        }, e.fromTo = function fromTo(t, e, r, i) {
            return Wa(2, arguments, this), this
        }, e.set = function set(t, e, r) {
            return e.duration = 0, e.parent = this, wa(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Jt(t, e, xt(this, r), 1), this
        }, e.call = function call(t, e, r) {
            return La(this, Jt.delayedCall(0, t, e), r)
        }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Jt(t, r, xt(this, n)), this
        }, e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
            return r.runBackwards = 1, wa(r).immediateRender = w(r.immediateRender), this.staggerTo(t, e, r, i, n, a, s)
        }, e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
            return i.startAt = r, wa(i).immediateRender = w(i.immediateRender), this.staggerTo(t, e, i, n, a, s, o)
        }, e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, c, p, _ = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                v = t <= 0 ? 0 : ja(t),
                y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (this !== I && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
                if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                    if (c = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                    if (i = ja(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(d = ja(v / o))) && s === d && (i = g, s--), g < i && (i = g)), d = Tt(this._tTime, o), !_ && this._tTime && d !== s && this._tTime - d * o - this._dur <= 0 && (d = s), c && 1 & s && (i = g - i, p = 1), s !== d && !this._lock) {
                        var T = c && 1 & d,
                            b = T === (c && 1 & s);
                        if (s < d && (T = !T), _ = T ? 0 : v % g ? g : v, this._lock = 1, this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Pt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (g = this._dur, m = this._tDur, b && (this._lock = 2, _ = T ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                        Rb(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                        var i;
                        if (e < r)
                            for (i = t._first; i && i._start <= r;) {
                                if ("isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if ("isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, ja(_), ja(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && v && !e && !d && (Pt(this, "onStart"), this._tTime !== v)) return this;
                if (_ <= i && 0 <= t)
                    for (n = this._first; n;) {
                        if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = -U);
                                break
                            }
                        }
                        n = a
                    } else {
                        n = this._last;
                        for (var w = t < 0 ? t : i; n;) {
                            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(t, e, r);
                                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r || L && na(n)), i !== this._time || !this._ts && !u) {
                                    h = 0, a && (v += this._zTime = w ? -U : U);
                                    break
                                }
                            }
                            n = a
                        }
                    }
                if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -U)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, Ia(this), this.render(t, e, r);
                this._onUpdate && !e && Pt(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || Aa(this, 1), e || t < 0 && !_ || !v && !_ && m || (Pt(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, e.add = function add(e, i) {
            var n = this;
            if (t(i) || (i = xt(this, i, e)), !(e instanceof Nt)) {
                if ($(e)) return e.forEach(function(t) {
                    return n.add(t, i)
                }), this;
                if (r(e)) return this.addLabel(e, i);
                if (!s(e)) return this;
                e = Jt.delayedCall(0, e)
            }
            return this !== e ? La(this, e, i) : this
        }, e.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -N);
            for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Jt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n
        }, e.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, e.remove = function remove(t) {
            return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (t.parent === this && za(this, t), t === this._recent && (this._recent = this._last), Ba(this))
        }, e.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ja(Rt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, e.addLabel = function addLabel(t, e) {
            return this.labels[t] = xt(this, e), this
        }, e.removeLabel = function removeLabel(t) {
            return delete this.labels[t], this
        }, e.addPause = function addPause(t, e, r) {
            var i = Jt.delayedCall(0, e || T, r);
            return i.data = "isPause", this._hasPause = 1, La(this, i, xt(this, t))
        }, e.removePause = function removePause(t) {
            var e = this._first;
            for (t = xt(this, t); e;) e._start === t && "isPause" === e.data && Aa(e), e = e._next
        }, e.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) Ut !== i[n] && i[n].kill(t, e);
            return this
        }, e.getTweensOf = function getTweensOf(e, r) {
            for (var i, n = [], a = Ot(e), s = this._first, o = t(r); s;) s instanceof Jt ? la(s._targets, a) && (o ? (!Ut || s._initted && s._ts) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s) : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i), s = s._next;
            return n
        }, e.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r, i = this,
                n = xt(i, t),
                a = e.startAt,
                s = e.onStart,
                o = e.onStartParams,
                u = e.immediateRender,
                h = Jt.to(i, ra({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || U,
                    onStart: function onStart() {
                        if (i.pause(), !r) {
                            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                            h._dur !== t && Sa(h, t, 0, 1).render(h._time, !0, !0), r = 1
                        }
                        s && s.apply(h, o || [])
                    }
                }, e));
            return u ? h.render(0) : h
        }, e.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, ra({
                startAt: {
                    time: xt(this, t)
                }
            }, r))
        }, e.recent = function recent() {
            return this._recent
        }, e.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time), sb(this, xt(this, t))
        }, e.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time), sb(this, xt(this, t), 1)
        }, e.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + U)
        }, e.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in a) a[i] >= r && (a[i] += t);
            return Ba(this)
        }, e.invalidate = function invalidate(t) {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(t), e = e._next;
            return i.prototype.invalidate.call(this, t)
        }, e.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Ba(this)
        }, e.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0,
                a = this,
                s = a._last,
                o = N;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, La(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Sa(a, a === I && a._time > n ? a._time : n, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, Timeline.updateRoot = function updateRoot(t) {
            if (I._ts && (oa(I, Ha(t, I)), f = Rt.frame), Rt.frame >= mt) {
                mt += X.autoSleep || 120;
                var e = I._first;
                if ((!e || !e._ts) && X.autoSleep && Rt._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Rt.sleep()
                }
            }
        }, Timeline
    }(Nt);
    ra(Qt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function bc(t, e, i, n, a, o) {
        var u, h, l, f;
        if (pt[t] && !1 !== (u = new pt[t]).init(a, u.rawVars ? e[t] : function _processVars(t, e, i, n, a) {
                if (s(t) && (t = Gt(t, a, e, i, n)), !v(t) || t.style && t.nodeType || $(t) || J(t)) return r(t) ? Gt(t, a, e, i, n) : t;
                var o, u = {};
                for (o in t) u[o] = Gt(t[o], a, e, i, n);
                return u
            }(e[t], n, a, o, i), i, n, o) && (i._pt = h = new ge(i._pt, a, t, 0, 1, u.render, u, 0, u.priority), i !== d))
            for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--;) l[u._props[f]] = h;
        return u
    }

    function hc(t, r, e, i) {
        var n, a, s = r.ease || i || "power1.inOut";
        if ($(r)) a = e[t] || (e[t] = []), r.forEach(function(t, e) {
            return a.push({
                t: e / (r.length - 1) * 100,
                v: t,
                e: s
            })
        });
        else
            for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({
                t: parseFloat(t),
                v: r[n],
                e: s
            })
    }
    var Ut, qt, Vt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
            s(n) && (n = n(a || 0, t, o));
            var d, c = t[e],
                p = "get" !== i ? i : s(c) ? l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : c,
                _ = s(c) ? l ? re : te : $t;
            if (r(n) && (~n.indexOf("random(") && (n = pb(n)), "=" === n.charAt(1) && (!(d = ka(p, n) + (Za(p) || 0)) && 0 !== d || (n = d))), !f || p !== n || qt) return isNaN(p * n) || "" === n ? (c || e in t || Q(e, n), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, d, c, p, _ = new ge(this._pt, t, e, 0, 1, oe, null, n),
                    m = 0,
                    g = 0;
                for (_.b = r, _.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = pb(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, _._pt = {
                    _next: _._pt,
                    p: f || 1 === g ? f : ",",
                    s: d,
                    c: "=" === l.charAt(1) ? ka(d, l) - d : parseFloat(l) - d,
                    m: h && h < 4 ? Math.round : 0
                }, m = it.lastIndex);
                return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || c) && (_.e = 0), this._pt = _
            }.call(this, t, e, p, n, _, h || X.stringFilter, l)) : (d = new ge(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof c ? se : ne, 0, _), l && (d.fp = l), u && d.modifier(u, this, t), this._pt = d)
        },
        Wt = function _initTween(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, c, p, _, m = t.vars,
                g = m.ease,
                v = m.startAt,
                y = m.immediateRender,
                T = m.lazy,
                b = m.onUpdate,
                x = m.runBackwards,
                M = m.yoyoEase,
                k = m.keyframes,
                O = m.autoRevert,
                A = t._dur,
                P = t._startAt,
                C = t._targets,
                S = t.parent,
                D = S && "nested" === S.data ? S.vars.targets : C,
                z = "auto" === t._overwrite && !F,
                E = t.timeline;
            if (!E || k && g || (g = "none"), t._ease = Yt(g, Z.ease), t._yEase = M ? jt(Yt(!0 === M ? g : M, Z.ease)) : 0, M && t._yoyo && !t._repeat && (M = t._yEase, t._yEase = t._ease, t._ease = M), t._from = !E && !!m.runBackwards, !E || k && !m.stagger) {
                if (p = (l = C[0] ? fa(C[0]).harness : 0) && m[l.prop], i = va(m, ft), P && (P._zTime < 0 && P.progress(1), e < 0 && x && y && !O ? P.render(-1, !0) : P.revert(x && A ? ht : ut), P._lazy = 0), v) {
                    if (Aa(t._startAt = Jt.set(C, ra({
                            data: "isStart",
                            overwrite: !1,
                            parent: S,
                            immediateRender: !0,
                            lazy: !P && w(T),
                            startAt: null,
                            delay: 0,
                            onUpdate: b && function() {
                                return Pt(t, "onUpdate")
                            },
                            stagger: 0
                        }, v))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (L || !y && !O) && t._startAt.revert(ht), y && A && e <= 0 && r <= 0) return void(e && (t._zTime = e))
                } else if (x && A && !P)
                    if (e && (y = !1), a = ra({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: y && !P && w(T),
                            immediateRender: y,
                            stagger: 0,
                            parent: S
                        }, i), p && (a[l.prop] = p), Aa(t._startAt = Jt.set(C, a)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (L ? t._startAt.revert(ht) : t._startAt.render(-1, !0)), t._zTime = e, y) {
                        if (!e) return
                    } else _initTween(t._startAt, U, U);
                for (t._pt = t._ptCache = 0, T = A && w(T) || T && !A, n = 0; n < C.length; n++) {
                    if (h = (o = C[n])._gsap || ea(C)[n]._gsap, t._ptLookup[n] = d = {}, ct[h.id] && dt.length && ma(), c = D === C ? n : D.indexOf(o), l && !1 !== (f = new l).init(o, p || i, t, c, D) && (t._pt = s = new ge(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                            d[t] = s
                        }), f.priority && (u = 1)), !l || p)
                        for (a in i) pt[a] && (f = bc(a, i, t, c, o, D)) ? f.priority && (u = 1) : d[a] = s = Vt.call(t, o, a, "get", i[a], c, D, 0, m.stringFilter);
                    t._op && t._op[n] && t.kill(o, t._op[n]), z && t._pt && (Ut = t, I.killTweensOf(o, d, t.globalTime(e)), _ = !t.parent, Ut = 0), t._pt && T && (ct[h.id] = 1)
                }
                u && _e(t), t._onInit && t._onInit(t)
            }
            t._onUpdate = b, t._initted = (!t._op || t._pt) && !_, k && e <= 0 && E.render(N, !0, !0)
        },
        Gt = function _parseFuncOrString(t, e, i, n, a) {
            return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? pb(t) : t
        },
        Ht = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Kt = {};
    ha(Ht + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Kt[t] = 1
    });
    var Jt = function(E) {
        function Tween(e, r, i, n) {
            var a;
            "number" == typeof r && (i.duration = r, r = i, i = null);
            var s, o, u, h, l, f, d, c, p = (a = E.call(this, n ? r : wa(r)) || this).vars,
                _ = p.duration,
                m = p.delay,
                g = p.immediateRender,
                T = p.stagger,
                b = p.overwrite,
                x = p.keyframes,
                M = p.defaults,
                k = p.scrollTrigger,
                O = p.yoyoEase,
                A = r.parent || I,
                P = ($(e) || J(e) ? t(e[0]) : "length" in r) ? [e] : Ot(e);
            if (a._targets = P.length ? ea(P) : R("GSAP target " + e + " not found. https://gsap.com", !X.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, x || T || y(_) || y(m)) {
                if (r = a.vars, (s = a.timeline = new Qt({
                        data: "nested",
                        defaults: M || {},
                        targets: A && "nested" === A.data ? A.vars.targets : P
                    })).kill(), s.parent = s._dp = _assertThisInitialized(a), s._start = 0, T || y(_) || y(m)) {
                    if (h = P.length, d = T && fb(T), v(T))
                        for (l in T) ~Ht.indexOf(l) && ((c = c || {})[l] = T[l]);
                    for (o = 0; o < h; o++)(u = va(r, Kt)).stagger = 0, O && (u.yoyoEase = O), c && yt(u, c), f = P[o], u.duration = +Gt(_, _assertThisInitialized(a), o, f, P), u.delay = (+Gt(m, _assertThisInitialized(a), o, f, P) || 0) - a._delay, !T && 1 === h && u.delay && (a._delay = m = u.delay, a._start += m, u.delay = 0), s.to(f, u, d ? d(o, f, P) : 0), s._ease = Lt.none;
                    s.duration() ? _ = m = 0 : a.timeline = 0
                } else if (x) {
                    wa(ra(s.vars.defaults, {
                        ease: "none"
                    })), s._ease = Yt(x.ease || r.ease || "none");
                    var C, S, D, z = 0;
                    if ($(x)) x.forEach(function(t) {
                        return s.to(P, t, ">")
                    }), s.duration();
                    else {
                        for (l in u = {}, x) "ease" === l || "easeEach" === l || hc(l, x[l], u, x.easeEach);
                        for (l in u)
                            for (C = u[l].sort(function(t, e) {
                                    return t.t - e.t
                                }), o = z = 0; o < C.length; o++)(D = {
                                ease: (S = C[o]).e,
                                duration: (S.t - (o ? C[o - 1].t : 0)) / 100 * _
                            })[l] = S.v, s.to(P, D, z), z += D.duration;
                        s.duration() < _ && s.to({}, {
                            duration: _ - s.duration()
                        })
                    }
                }
                _ || a.duration(_ = s.duration())
            } else a.timeline = 0;
            return !0 !== b || F || (Ut = _assertThisInitialized(a), I.killTweensOf(P), Ut = 0), La(A, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (g || !_ && !x && a._start === ja(A._time) && w(g) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent)
            }(_assertThisInitialized(a)) && "nested" !== A.data) && (a._tTime = -U, a.render(Math.max(0, -m) || 0)), k && Ma(_assertThisInitialized(a), k), a
        }
        _inheritsLoose(Tween, E);
        var e = Tween.prototype;
        return e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = this._time,
                c = this._tDur,
                p = this._dur,
                _ = t < 0,
                m = c - U < t && !_ ? c : t < U ? 0 : t;
            if (p) {
                if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _ || this._lazy) {
                    if (i = m, l = this.timeline, this._repeat) {
                        if (s = p + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * s + t, e, r);
                        if (i = ja(m % s), m === c ? (a = this._repeat, i = p) : (a = ~~(o = ja(m / s))) && a === o ? (i = p, a--) : p < i && (i = p), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = Tt(this._tTime, s), i === d && !r && this._initted && a === o) return this._tTime = m, this;
                        a !== o && (l && this._yEase && Rb(l, u), this.vars.repeatRefresh && !u && !this._lock && i !== s && this._initted && (this._lock = r = 1, this.render(ja(s * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Na(this, _ ? t : i, r, e, m)) return this._tTime = 0, this;
                        if (!(d === this._time || r && this.vars.repeatRefresh && a !== o)) return this;
                        if (p !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), !d && m && !e && !o && (Pt(this, "onStart"), this._tTime !== m)) return this;
                    for (n = this._pt; n;) n.r(h, n.d), n = n._next;
                    l && l.render(t < 0 ? t : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Da(this, t, 0, r), Pt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Pt(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (_ && !this._onUpdate && Da(this, t, 0, !0), !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || Aa(this, 1), e || _ && !d || !(m || d || u) || (Pt(this, m === c ? "onComplete" : "onReverseComplete", !0), !this._prom || m < c && 0 < this.timeScale() || this._prom()))
                }
            } else ! function _renderZeroDurationTween(t, e, r, i) {
                var n, a, s, o = t.ratio,
                    u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                        var e = t.parent;
                        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                    }(t) && (t._initted || !bt(t)) || (t._ts < 0 || t._dp._ts < 0) && !bt(t)) ? 0 : 1,
                    h = t._rDelay,
                    l = 0;
                if (h && t._repeat && (l = Mt(0, t._tDur, e), a = Tt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== Tt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || L || i || t._zTime === U || !e && t._zTime) {
                    if (!t._initted && Na(t, e, i, r, l)) return;
                    for (s = t._zTime, t._zTime = e || (r ? U : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
                    e < 0 && Da(t, e, 0, !0), t._onUpdate && !r && Pt(t, "onUpdate"), l && t._repeat && !r && t.parent && Pt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && Aa(t, 1), r || L || (Pt(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, r);
            return this
        }, e.targets = function targets() {
            return this._targets
        }, e.invalidate = function invalidate(t) {
            return t && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), E.prototype.invalidate.call(this, t)
        }, e.resetTo = function resetTo(t, e, r, i, n) {
            c || Rt.wake(), this._ts || this.play();
            var a, s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || Wt(this, s), a = this._ease(s / this._dur),
                function _updatePropTweens(t, e, r, i, n, a, s, o) {
                    var u, h, l, f, d = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!d)
                        for (d = t._ptCache[e] = [], l = t._ptLookup, f = t._targets.length; f--;) {
                            if ((u = l[f][e]) && u.d && u.d._pt)
                                for (u = u.d._pt; u && u.p !== e && u.fp !== e;) u = u._next;
                            if (!u) return qt = 1, t.vars[e] = "+=0", Wt(t, s), qt = 0, o ? R(e + " not eligible for reset") : 1;
                            d.push(u)
                        }
                    for (f = d.length; f--;)(u = (h = d[f])._pt || h).s = !i && 0 !== i || n ? u.s + (i || 0) + a * u.c : i, u.c = r - u.s, h.e && (h.e = ia(r) + Za(h.e)), h.b && (h.b = u.s + Za(h.b))
                }(this, t, e, r, i, a, s, n) ? this.resetTo(t, e, r, i, 1) : (Ja(this, 0), this.parent || ya(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, e.kill = function kill(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ub(this) : this.scrollTrigger && this.scrollTrigger.kill(!!L), this;
            if (this.timeline) {
                var i = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Ut && !0 !== Ut.vars.overwrite)._first || ub(this), this.parent && i !== this.timeline.totalDuration() && Sa(this, this._dur * this.timeline._tDur / i, 0, 1), this
            }
            var n, a, s, o, u, h, l, f = this._targets,
                d = t ? Ot(t) : f,
                c = this._ptLookup,
                p = this._pt;
            if ((!e || "all" === e) && function _arraysMatch(t, e) {
                    for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                    return r < 0
                }(f, d)) return "all" === e && (this._pt = 0), ub(this);
            for (n = this._op = this._op || [], "all" !== e && (r(e) && (u = {}, ha(e, function(t) {
                    return u[t] = 1
                }), e = u), e = function _addAliasesToVars(t, e) {
                    var r, i, n, a, s = t[0] ? fa(t[0]).harness : 0,
                        o = s && s.aliases;
                    if (!o) return e;
                    for (i in r = yt({}, e), o)
                        if (i in r)
                            for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                    return r
                }(f, e)), l = f.length; l--;)
                if (~d.indexOf(f[l]))
                    for (u in a = c[l], "all" === e ? (n[l] = e, o = a, s = {}) : (s = n[l] = n[l] || {}, o = e), o)(h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || za(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
            return this._initted && !this._pt && p && ub(this), this
        }, Tween.to = function to(t, e, r) {
            return new Tween(t, e, r)
        }, Tween.from = function from(t, e) {
            return Wa(1, arguments)
        }, Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }, Tween.fromTo = function fromTo(t, e, r) {
            return Wa(2, arguments)
        }, Tween.set = function set(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
        }, Tween.killTweensOf = function killTweensOf(t, e, r) {
            return I.killTweensOf(t, e, r)
        }, Tween
    }(Nt);
    ra(Jt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), ha("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Jt[r] = function() {
            var t = new Qt,
                e = kt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
        }
    });

    function pc(t, e, r) {
        return t.setAttribute(e, r)
    }

    function xc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var $t = function _setterPlain(t, e, r) {
            return t[e] = r
        },
        te = function _setterFunc(t, e, r) {
            return t[e](r)
        },
        re = function _setterFuncWithParam(t, e, r, i) {
            return t[e](i.fp, r)
        },
        ie = function _getSetter(t, e) {
            return s(t[e]) ? te : u(t[e]) && t.setAttribute ? pc : $t
        },
        ne = function _renderPlain(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        se = function _renderBoolean(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        oe = function _renderComplexString(t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        ue = function _renderPropTweens(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        he = function _addPluginModifier(t, e, r, i) {
            for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
        },
        de = function _killPropTweensOf(t) {
            for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? za(this, i, "_pt") : i.dep || (e = 1), i = r;
            return !e
        },
        _e = function _sortPropTweensByPriority(t) {
            for (var e, r, i, n, a = t._pt; a;) {
                for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
            }
            t._pt = i
        },
        ge = (PropTween.prototype.modifier = function modifier(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = xc, this.m = t, this.mt = r, this.tween = e
        }, PropTween);

    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || ne, this.d = s || this, this.set = o || $t, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }
    ha(vt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ft[t] = 1
    }), ot.TweenMax = ot.TweenLite = Jt, ot.TimelineLite = ot.TimelineMax = Qt, I = new Qt({
        sortChildren: !1,
        defaults: Z,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), X.stringFilter = Gb;

    function Fc(t) {
        return (be[t] || Me).map(function(t) {
            return t()
        })
    }

    function Gc() {
        var t = Date.now(),
            o = [];
        2 < t - Oe && (Fc("matchMediaInit"), Te.forEach(function(t) {
            var e, r, i, n, a = t.queries,
                s = t.conditions;
            for (r in a)(e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && (s[r] = e, n = 1);
            n && (t.revert(), i && o.push(t))
        }), Fc("matchMediaRevert"), o.forEach(function(e) {
            return e.onMatch(e, function(t) {
                return e.add(null, t)
            })
        }), Oe = t, Fc("matchMedia"))
    }
    var ve, Te = [],
        be = {},
        Me = [],
        Oe = 0,
        Ae = 0,
        Pe = ((ve = Context.prototype).add = function add(t, i, n) {
            function Iw() {
                var t, e = l,
                    r = a.selector;
                return e && e !== a && e.data.push(a), n && (a.selector = db(n)), l = a, t = i.apply(a, arguments), s(t) && a._r.push(t), l = e, a.selector = r, a.isReverted = !1, t
            }
            s(t) && (n = i, i = t, t = s);
            var a = this;
            return a.last = Iw, t === s ? Iw(a, function(t) {
                return a.add(null, t)
            }) : t ? a[t] = Iw : Iw
        }, ve.ignore = function ignore(t) {
            var e = l;
            l = null, t(this), l = e
        }, ve.getTweens = function getTweens() {
            var e = [];
            return this.data.forEach(function(t) {
                return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof Jt && !(t.parent && "nested" === t.parent.data) && e.push(t)
            }), e
        }, ve.clear = function clear() {
            this._r.length = this.data.length = 0
        }, ve.kill = function kill(i, t) {
            var n = this;
            if (i ? function() {
                    for (var t, e = n.getTweens(), r = n.data.length; r--;) "isFlip" === (t = n.data[r]).data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function(t) {
                        return e.splice(e.indexOf(t), 1)
                    }));
                    for (e.map(function(t) {
                            return {
                                g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                                t: t
                            }
                        }).sort(function(t, e) {
                            return e.g - t.g || -1 / 0
                        }).forEach(function(t) {
                            return t.t.revert(i)
                        }), r = n.data.length; r--;)(t = n.data[r]) instanceof Qt ? "nested" !== t.data && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : t instanceof Jt || !t.revert || t.revert(i);
                    n._r.forEach(function(t) {
                        return t(i, n)
                    }), n.isReverted = !0
                }() : this.data.forEach(function(t) {
                    return t.kill && t.kill()
                }), this.clear(), t)
                for (var e = Te.length; e--;) Te[e].id === this.id && Te.splice(e, 1)
        }, ve.revert = function revert(t) {
            this.kill(t || {})
        }, Context);

    function Context(t, e) {
        this.selector = e && db(e), this.data = [], this._r = [], this.isReverted = !1, this.id = Ae++, t && this.add(t)
    }
    var Ce, Se = ((Ce = MatchMedia.prototype).add = function add(t, e, r) {
        v(t) || (t = {
            matches: t
        });
        var i, n, a, s = new Pe(0, r || this.scope),
            o = s.conditions = {};
        for (n in l && !s.selector && (s.selector = l.selector), this.contexts.push(s), e = s.add("onMatch", e), s.queries = t) "all" === n ? a = 1 : (i = h.matchMedia(t[n])) && (Te.indexOf(s) < 0 && Te.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Gc) : i.addEventListener("change", Gc));
        return a && e(s, function(t) {
            return s.add(null, t)
        }), this
    }, Ce.revert = function revert(t) {
        this.kill(t || {})
    }, Ce.kill = function kill(e) {
        this.contexts.forEach(function(t) {
            return t.kill(e, !0)
        })
    }, MatchMedia);

    function MatchMedia(t) {
        this.contexts = [], this.scope = t, l && l.data.push(this)
    }
    var De = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
                return xb(t)
            })
        },
        timeline: function timeline(t) {
            return new Qt(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return I.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, n) {
            r(i) && (i = Ot(i)[0]);
            var a = fa(i || {}).get,
                s = e ? qa : pa;
            return "native" === e && (e = ""), i ? t ? s((pt[t] && pt[t].get || a)(i, t, e, n)) : function(t, e, r) {
                return s((pt[t] && pt[t].get || a)(i, t, e, r))
            } : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = Ot(r)).length) {
                var n = r.map(function(t) {
                        return ze.quickSetter(t, e, i)
                    }),
                    a = n.length;
                return function(t) {
                    for (var e = a; e--;) n[e](t)
                }
            }
            r = r[0] || {};
            var s = pt[e],
                o = fa(r),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = s ? function(t) {
                    var e = new s;
                    d._pt = 0, e.init(r, i ? t + i : t, d, 0, [r]), e.render(1, e), d._pt && ue(1, d)
                } : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        quickTo: function quickTo(t, i, e) {
            function ay(t, e, r) {
                return n.resetTo(i, t, e, r)
            }
            var r, n = ze.to(t, ra(((r = {})[i] = "+=0.1", r.paused = !0, r.stagger = 0, r), e || {}));
            return ay.tween = n, ay
        },
        isTweening: function isTweening(t) {
            return 0 < I.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Yt(t.ease, Z.ease)), ua(Z, t || {})
        },
        config: function config(t) {
            return ua(X, t || {})
        },
        registerEffect: function registerEffect(t) {
            var i = t.name,
                n = t.effect,
                e = t.plugins,
                a = t.defaults,
                r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.")
            }), _t[i] = function(t, e, r) {
                return n(Ot(t), ra(e || {}, a), r)
            }, r && (Qt.prototype[i] = function(t, e, r) {
                return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r)
            })
        },
        registerEase: function registerEase(t, e) {
            Lt[t] = Yt(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Yt(t, e) : Lt
        },
        getById: function getById(t) {
            return I.getById(t)
        },
        exportRoot: function exportRoot(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Qt(t);
            for (n.smoothChildTiming = w(t.smoothChildTiming), I.remove(n), n._dp = 0, n._time = n._tTime = I._time, r = I._first; r;) i = r._next, !e && !r._dur && r instanceof Jt && r.vars.onComplete === r._targets[0] || La(n, r, r._start - r._delay), r = i;
            return La(I, n, 0), n
        },
        context: function context(t, e) {
            return t ? new Pe(t, e) : l
        },
        matchMedia: function matchMedia(t) {
            return new Se(t)
        },
        matchMediaRefresh: function matchMediaRefresh() {
            return Te.forEach(function(t) {
                var e, r, i = t.conditions;
                for (r in i) i[r] && (i[r] = !1, e = 1);
                e && t.revert()
            }) || Gc()
        },
        addEventListener: function addEventListener(t, e) {
            var r = be[t] || (be[t] = []);
            ~r.indexOf(e) || r.push(e)
        },
        removeEventListener: function removeEventListener(t, e) {
            var r = be[t],
                i = r && r.indexOf(e);
            0 <= i && r.splice(i, 1)
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return $(e) ? mb(e, wrap(0, e.length), t) : Xa(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e,
                    n = 2 * i;
                return $(e) ? mb(e, wrapYoyo(0, e.length - 1), t) : Xa(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: fb,
            random: ib,
            snap: hb,
            normalize: function normalize(t, e, r) {
                return At(t, e, 0, 1, r)
            },
            getUnit: Za,
            clamp: function clamp(e, r, t) {
                return Xa(t, function(t) {
                    return Mt(e, r, t)
                })
            },
            splitColor: Bb,
            toArray: Ot,
            selector: db,
            mapRange: At,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Za(t))
                }
            },
            interpolate: function interpolate(e, i, t, n) {
                var a = isNaN(e + i) ? 0 : function(t) {
                    return (1 - t) * e + t * i
                };
                if (!a) {
                    var s, o, u, h, l, f = r(e),
                        d = {};
                    if (!0 === t && (n = 1) && (t = null), f) e = {
                        p: e
                    }, i = {
                        p: i
                    };
                    else if ($(e) && !$(i)) {
                        for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
                        h--, a = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }, t = i
                    } else n || (e = yt($(e) ? [] : {}, e));
                    if (!u) {
                        for (s in i) Vt.call(d, e, s, "get", i[s]);
                        a = function func(t) {
                            return ue(t, d) || (f ? e.p : e)
                        }
                    }
                }
                return Xa(t, a)
            },
            shuffle: eb
        },
        install: P,
        effects: _t,
        ticker: Rt,
        updateRoot: Qt.updateRoot,
        plugins: pt,
        globalTimeline: I,
        core: {
            PropTween: ge,
            globals: S,
            Tween: Jt,
            Timeline: Qt,
            Animation: Nt,
            getCache: fa,
            _removeLinkedListItem: za,
            reverting: function reverting() {
                return L
            },
            context: function context(t) {
                return t && l && (l.data.push(t), t._ctx = l), l
            },
            suppressOverwrites: function suppressOverwrites(t) {
                return F = t
            }
        }
    };
    ha("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return De[t] = Jt[t]
    }), Rt.add(Qt.updateRoot), d = De.to({}, {
        duration: 0
    });

    function Kc(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }

    function Mc(t, a) {
        return {
            name: t,
            headless: 1,
            rawVars: 1,
            init: function init(t, n, e) {
                e._onInit = function(t) {
                    var e, i;
                    if (r(n) && (e = {}, ha(n, function(t) {
                            return e[t] = 1
                        }), n = e), a) {
                        for (i in e = {}, n) e[i] = a(n[i]);
                        n = e
                    }! function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Kc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, n)
                }
            }
        }
    }
    var ze = De.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s, o;
            for (a in this.tween = r, e) o = t.getAttribute(a) || "", (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a, s.b = o, this._props.push(a)
        },
        render: function render(t, e) {
            for (var r = e._pt; r;) L ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
        }
    }, {
        name: "endArray",
        headless: 1,
        init: function init(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, Mc("roundProps", gb), Mc("modifiers"), Mc("snap", hb)) || De;
    Jt.version = Qt.version = ze.version = "3.13.0", o = 1, x() && Ft();

    function wd(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function xd(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function yd(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function zd(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }

    function Ad(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function Bd(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function Cd(t, e, r) {
        return t.style[e] = r
    }

    function Dd(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function Ed(t, e, r) {
        return t._gsap[e] = r
    }

    function Fd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function Gd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a)
    }

    function Hd(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a)
    }

    function Kd(t, e) {
        var r = this,
            i = this.target,
            n = i.style,
            a = i._gsap;
        if (t in sr && n) {
            if (this.tfm = this.tfm || {}, "transform" === t) return cr.transform.split(",").forEach(function(t) {
                return Kd.call(r, t, e)
            });
            if (~(t = cr[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
                    return r.tfm[t] = Tr(i, t)
                }) : this.tfm[t] = a.x ? a[t] : Tr(i, t), t === _r && (this.tfm.zOrigin = a.zOrigin), 0 <= this.props.indexOf(pr)) return;
            a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(_r, e, "")), t = pr
        }(n || e) && this.props.push(t, e, n[t])
    }

    function Ld(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    }

    function Md() {
        var t, e, r = this.props,
            i = this.target,
            n = i.style,
            a = i._gsap;
        for (t = 0; t < r.length; t += 3) r[t + 1] ? 2 === r[t + 1] ? i[r[t]](r[t + 2]) : i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(lr, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm) a[e] = this.tfm[e];
            a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (t = Ye()) && t.isStart || n[pr] || (Ld(n), a.zOrigin && n[_r] && (n[_r] += " " + a.zOrigin + "px", a.zOrigin = 0, a.renderTransform()), a.uncache = 1)
        }
    }

    function Nd(t, e) {
        var r = {
            target: t,
            props: [],
            revert: Md,
            save: Kd
        };
        return t._gsap || ze.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(t) {
            return r.save(t)
        }), r
    }

    function Pd(t, e) {
        var r = Re.createElementNS ? Re.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Re.createElement(t);
        return r && r.style ? r : Re.createElement(t)
    }

    function Qd(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(lr, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Qd(t, gr(e) || e, 1) || ""
    }

    function Td() {
        (function _windowExists() {
            return "undefined" != typeof window
        })() && window.document && (Ee = window, Re = Ee.document, Fe = Re.documentElement, Ie = Pd("div") || {
            style: {}
        }, Pd("div"), pr = gr(pr), _r = pr + "Origin", Ie.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Xe = !!gr("perspective"), Ye = ze.core.reverting, Le = 1)
    }

    function Ud(t) {
        var e, r = t.ownerSVGElement,
            i = Pd("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = t.cloneNode(!0);
        n.style.display = "block", i.appendChild(n), Fe.appendChild(i);
        try {
            e = n.getBBox()
        } catch (t) {}
        return i.removeChild(n), Fe.removeChild(i), e
    }

    function Vd(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function Wd(e) {
        var r, i;
        try {
            r = e.getBBox()
        } catch (t) {
            r = Ud(e), i = 1
        }
        return r && (r.width || r.height) || i || (r = Ud(e)), !r || r.width || r.x || r.y ? r : {
            x: +Vd(e, ["x", "cx", "x1"]) || 0,
            y: +Vd(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Xd(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Wd(t))
    }

    function Yd(t, e) {
        if (e) {
            var r, i = t.style;
            e in sr && e !== _r && (e = pr), i.removeProperty ? ("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty("--" === r ? e : e.replace(lr, "-$1").toLowerCase())) : i.removeAttribute(e)
        }
    }

    function Zd(t, e, r, i, n, a) {
        var s = new ge(t._pt, e, r, 0, 1, a ? Bd : Ad);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s
    }

    function ae(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = Ie.style,
            f = fr.test(e),
            d = "svg" === t.tagName.toLowerCase(),
            c = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            p = "px" === i,
            _ = "%" === i;
        if (i === h || !u || vr[i] || vr[h]) return u;
        if ("px" === h || p || (u = ae(t, e, r, "px")), o = t.getCTM && Xd(t), (_ || "%" === h) && (sr[e] || ~e.indexOf("adius"))) return n = o ? t.getBBox()[f ? "width" : "height"] : t[c], ia(_ ? u / n * 100 : u / 100 * n);
        if (l[f ? "width" : "height"] = 100 + (p ? h : i), a = "rem" !== i && ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Re && a.appendChild || (a = Re.body), (s = a._gsap) && _ && s.width && f && s.time === Rt.time && !s.uncache) return ia(u / s.width * 100);
        if (!_ || "height" !== e && "width" !== e) !_ && "%" !== h || yr[Qd(a, "display")] || (l.position = Qd(t, "position")), a === t && (l.position = "static"), a.appendChild(Ie), n = Ie[c], a.removeChild(Ie), l.position = "absolute";
        else {
            var m = t.style[e];
            t.style[e] = 100 + i, n = t[c], m ? t.style[e] = m : Yd(t, e)
        }
        return f && _ && ((s = fa(a)).time = Rt.time, s.width = a[c]), ia(p ? n * u / 100 : n && u ? 100 / n * u : 0)
    }

    function ce(t, e, r, i) {
        if (!r || "none" === r) {
            var n = gr(e, t, 1),
                a = n && Qd(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = Qd(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, d, c, p, _, m, g = new ge(this._pt, t.style, e, 0, 1, oe),
            v = 0,
            y = 0;
        if (g.b = r, g.e = i, r += "", "var(--" === (i += "").substring(0, 6) && (i = Qd(t, i.substring(4, i.indexOf(")")))), "auto" === i && (f = t.style[e], t.style[e] = i, i = Qd(t, e) || i, f ? t.style[e] = f : Yd(t, e)), Gb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
            for (; o = rt.exec(i);) d = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === d.charAt(1) && (d = ka(h, d) + m), c = parseFloat(d), _ = d.substr((c + "").length), v = rt.lastIndex - _.length, _ || (_ = _ || X.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = ae(t, e, f, _) || 0), g._pt = {
                _next: g._pt,
                p: p || 1 === y ? p : ",",
                s: h,
                c: c - h,
                m: l && l < 4 || "zIndex" === e ? Math.round : 0
            });
            g.c = v < i.length ? i.substring(v, i.length) : ""
        } else g.r = "display" === e && "none" === i ? Bd : Ad;
        return nt.test(i) && (g.e = 0), this._pt = g
    }

    function ee(t) {
        var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = br[r] || r, e[1] = br[i] || i, e.join(" ")
    }

    function fe(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t,
                s = a.style,
                o = e.u,
                u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], sr[r] && (i = 1, r = "transformOrigin" === r ? _r : pr), Yd(a, r);
            i && (Yd(a, pr), u && (u.svg && a.removeAttribute("transform"), s.scale = s.rotate = s.translate = "none", kr(a, 1), u.uncache = 1, Ld(s)))
        }
    }

    function je(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function ke(t) {
        var e = Qd(t, pr);
        return je(e) ? xr : e.substr(7).match(et).map(ia)
    }

    function le(t, e) {
        var r, i, n, a, s = t._gsap || fa(t),
            o = t.style,
            u = ke(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? xr : u : (u !== xr || t.offsetParent || t === Fe || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && (t.offsetParent || t.getBoundingClientRect().width) || (a = 1, i = t.nextElementSibling, Fe.appendChild(t)), u = ke(t), n ? o.display = n : Yd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Fe.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function me(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap,
            l = n || le(t, !0),
            f = h.xOrigin || 0,
            d = h.yOrigin || 0,
            c = h.xOffset || 0,
            p = h.yOffset || 0,
            _ = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            T = l[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            x = parseFloat(b[1]) || 0;
        r ? l !== xr && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = Wd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - d, h.xOffset = c + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[_r] = "0px 0px", a && (Zd(a, h, "xOrigin", f, w), Zd(a, h, "yOrigin", d, x), Zd(a, h, "xOffset", c, h.xOffset), Zd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
    }

    function pe(t, e, r) {
        var i = Za(e);
        return ia(parseFloat(e) + parseFloat(ae(t, "x", r + "px", i))) + i
    }

    function we(t, e, i, n, a) {
        var s, o, u = 360,
            h = r(a),
            l = parseFloat(a) * (h && ~a.indexOf("rad") ? or : 1) - n,
            f = n + l + "deg";
        return h && ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === s && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === s && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = o = new ge(t._pt, e, i, n, l, xd), o.e = f, o.u = "deg", t._props.push(i), o
    }

    function xe(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }

    function ye(t, e, r) {
        var i, n, a, s, o, u, h, l = xe({}, r._gsap),
            f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[pr] = e, i = kr(r, 1), Yd(r, pr), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[pr], f[pr] = e, i = kr(r, 1), f[pr] = a), sr)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Za(a) !== (h = Za(s)) ? ae(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ge(t._pt, i, n, o, u - o, wd), t._pt.u = h || 0, t._props.push(n));
        xe(i, l)
    }
    var Ee, Re, Fe, Le, Ie, Be, Ye, Xe, Ze = Lt.Power0,
        Ne = Lt.Power1,
        Qe = Lt.Power2,
        Ue = Lt.Power3,
        qe = Lt.Power4,
        Ve = Lt.Linear,
        We = Lt.Quad,
        Ge = Lt.Cubic,
        He = Lt.Quart,
        Ke = Lt.Quint,
        Je = Lt.Strong,
        $e = Lt.Elastic,
        tr = Lt.Back,
        er = Lt.SteppedEase,
        rr = Lt.Bounce,
        ir = Lt.Sine,
        nr = Lt.Expo,
        ar = Lt.Circ,
        sr = {},
        or = 180 / Math.PI,
        ur = Math.PI / 180,
        hr = Math.atan2,
        lr = /([A-Z])/g,
        fr = /(left|right|width|margin|padding|x)/i,
        dr = /[\s,\(]\S/,
        cr = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        pr = "transform",
        _r = pr + "Origin",
        mr = "O,Moz,ms,Ms,Webkit".split(","),
        gr = function _checkPropPrefix(t, e, r) {
            var i = (e || Ie).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(mr[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? mr[n] : "") + t
        },
        vr = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        yr = {
            grid: 1,
            flex: 1
        },
        Tr = function _get(t, e, r, i) {
            var n;
            return Le || Td(), e in cr && "transform" !== e && ~(e = cr[e]).indexOf(",") && (e = e.split(",")[0]), sr[e] && "transform" !== e ? (n = kr(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Or(Qd(t, _r)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = wr[e] && wr[e](t, e, r) || Qd(t, e) || ga(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? ae(t, e, n, r) + r : n
        },
        br = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        wr = {
            clearProps: function clearProps(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var a = t._pt = new ge(t._pt, e, r, 0, 0, fe);
                    return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
                }
            }
        },
        xr = [1, 0, 0, 1, 0, 0],
        Mr = {},
        kr = function _parseTransform(t, e) {
            var r = t._gsap || new Zt(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, T, b, w, x, M, k, O, A, P, C, S, D, z, E, R, F = t.style,
                L = r.scaleX < 0,
                I = "deg",
                B = getComputedStyle(t),
                j = Qd(t, _r) || "0";
            return i = n = a = u = h = l = f = d = c = 0, s = o = 1, r.svg = !(!t.getCTM || !Xd(t)), B.translate && ("none" === B.translate && "none" === B.scale && "none" === B.rotate || (F[pr] = ("none" !== B.translate ? "translate3d(" + (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") + ("none" !== B.scale ? "scale(" + B.scale.split(" ").join(",") + ") " : "") + ("none" !== B[pr] ? B[pr] : "")), F.scale = F.rotate = F.translate = "none"), m = le(t, r.svg), r.svg && (O = r.uncache ? (A = t.getBBox(), j = r.xOrigin - A.x + "px " + (r.yOrigin - A.y) + "px", "") : !e && t.getAttribute("data-svg-origin"), me(t, O || j, !!O || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== xr && (T = m[0], b = m[1], w = m[2], x = m[3], i = M = m[4], n = k = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? hr(b, T) * or : 0, (f = w || x ? hr(w, x) * or + u : 0) && (o *= Math.abs(Math.cos(f * ur))), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (R = m[6], z = m[7], C = m[8], S = m[9], D = m[10], E = m[11], i = m[12], n = m[13], a = m[14], h = (g = hr(R, D)) * or, g && (O = M * (v = Math.cos(-g)) + C * (y = Math.sin(-g)), A = k * v + S * y, P = R * v + D * y, C = M * -y + C * v, S = k * -y + S * v, D = R * -y + D * v, E = z * -y + E * v, M = O, k = A, R = P), l = (g = hr(-w, D)) * or, g && (v = Math.cos(-g), E = x * (y = Math.sin(-g)) + E * v, T = O = T * v - C * y, b = A = b * v - S * y, w = P = w * v - D * y), u = (g = hr(b, T)) * or, g && (O = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), A = M * v + k * y, b = b * v - T * y, k = k * v - M * y, T = O, M = A), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ia(Math.sqrt(T * T + b * b + w * w)), o = ia(Math.sqrt(k * k + R * R)), g = hr(M, k), f = 2e-4 < Math.abs(g) ? g * or : 0, c = E ? 1 / (E < 0 ? -E : E) : 0), r.svg && (O = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !je(Qd(t, pr)), O && t.setAttribute("transform", O))), 90 < Math.abs(f) && Math.abs(f) < 270 && (L ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ia(s), r.scaleY = ia(o), r.rotation = ia(u) + I, r.rotationX = ia(h) + I, r.rotationY = ia(l) + I, r.skewX = f + I, r.skewY = d + I, r.transformPerspective = c + "px", (r.zOrigin = parseFloat(j.split(" ")[2]) || !e && r.zOrigin || 0) && (F[_r] = Or(j)), r.xOffset = r.yOffset = 0, r.force3D = X.force3D, r.renderTransform = r.svg ? zr : Xe ? Dr : Ar, r.uncache = 0, r
        },
        Or = function _firstTwoOnly(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        Ar = function _renderNon3DTransforms(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Dr(t, e)
        },
        Pr = "0deg",
        Cr = "0px",
        Sr = ") ",
        Dr = function _renderCSSTransforms(t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                d = r.skewY,
                c = r.scaleX,
                p = r.scaleY,
                _ = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                T = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== Pr || h !== Pr)) {
                var b, w = parseFloat(h) * ur,
                    x = Math.sin(w),
                    M = Math.cos(w);
                w = parseFloat(l) * ur, b = Math.cos(w), a = pe(g, a, x * b * -v), s = pe(g, s, -Math.sin(w) * -v), o = pe(g, o, M * b * -v + v)
            }
            _ !== Cr && (y += "perspective(" + _ + Sr), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Cr && s === Cr && o === Cr || (y += o !== Cr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Sr), u !== Pr && (y += "rotate(" + u + Sr), h !== Pr && (y += "rotateY(" + h + Sr), l !== Pr && (y += "rotateX(" + l + Sr), f === Pr && d === Pr || (y += "skew(" + f + ", " + d + Sr), 1 === c && 1 === p || (y += "scale(" + c + ", " + p + Sr), g.style[pr] = y || "translate(0, 0)"
        },
        zr = function _renderSVGTransforms(t, e) {
            var r, i, n, a, s, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                d = o.rotation,
                c = o.skewX,
                p = o.skewY,
                _ = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                T = o.xOffset,
                b = o.yOffset,
                w = o.forceCSS,
                x = parseFloat(l),
                M = parseFloat(f);
            d = parseFloat(d), c = parseFloat(c), (p = parseFloat(p)) && (c += p = parseFloat(p), d += p), d || c ? (d *= ur, c *= ur, r = Math.cos(d) * _, i = Math.sin(d) * _, n = Math.sin(d - c) * -m, a = Math.cos(d - c) * m, c && (p *= ur, s = Math.tan(c - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ia(r), i = ia(i), n = ia(n), a = ia(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || M && !~(f + "").indexOf("px")) && (x = ae(g, "x", l, "px"), M = ae(g, "y", f, "px")), (v || y || T || b) && (x = ia(x + v - (v * r + y * n) + T), M = ia(M + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ia(x + u / 100 * s.width), M = ia(M + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + M + ")", g.setAttribute("transform", s), w && (g.style[pr] = s)
        };
    ha("padding,margin,Width,Radius", function(e, r) {
        var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
                return r < 2 ? e + t : "border" + t + e
            });
        wr[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function(t) {
                return Tr(e, t, r)
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), e.init(t, s, n)
        }
    });
    var Er, Rr, Fr, Lr = {
        name: "css",
        register: Td,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, i, n, a) {
            var s, o, u, h, l, f, d, c, p, _, m, g, v, y, T, b, w = this._props,
                x = t.style,
                M = i.vars.startAt;
            for (d in Le || Td(), this.styles = this.styles || Nd(t), b = this.styles.props, this.tween = i, e)
                if ("autoRound" !== d && (o = e[d], !pt[d] || !bc(d, e, i, n, t, a)))
                    if (l = typeof o, f = wr[d], "function" === l && (l = typeof(o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = pb(o)), f) f(this, t, d, o, i) && (T = 1);
                    else if ("--" === d.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(d) + "").trim(), o += "", zt.lastIndex = 0, zt.test(s) || (c = Za(s), p = Za(o)), p ? c !== p && (s = ae(t, d, s, p) + p) : c && (o += c), this.add(x, "setProperty", s, o, n, a, 0, 0, d), w.push(d), b.push(d, 0, x[d]);
            else if ("undefined" !== l) {
                if (M && d in M ? (s = "function" == typeof M[d] ? M[d].call(i, n, t, a) : M[d], r(s) && ~s.indexOf("random(") && (s = pb(s)), Za(s + "") || "auto" === s || (s += X.units[d] || Za(Tr(t, d)) || ""), "=" === (s + "").charAt(1) && (s = Tr(t, d))) : s = Tr(t, d), h = parseFloat(s), (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), u = parseFloat(o), d in cr && ("autoAlpha" === d && (1 === h && "hidden" === Tr(t, "visibility") && u && (h = 0), b.push("visibility", 0, x.visibility), Zd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== d && "transform" !== d && ~(d = cr[d]).indexOf(",") && (d = d.split(",")[0])), m = d in sr)
                    if (this.styles.save(d), "string" === l && "var(--" === o.substring(0, 6) && (o = Qd(t, o.substring(4, o.indexOf(")"))), u = parseFloat(o)), g || ((v = t._gsap).renderTransform && !e.parseTransform || kr(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new ge(this._pt, x, pr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === d) this._pt = new ge(this._pt, v, "scaleY", v.scaleY, (_ ? ka(v.scaleY, _ + u) : u) - v.scaleY || 0, wd), this._pt.u = 0, w.push("scaleY", d), d += "X";
                    else {
                        if ("transformOrigin" === d) {
                            b.push(_r, 0, x[_r]), o = ee(o), v.svg ? me(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Zd(this, v, "zOrigin", v.zOrigin, p), Zd(this, x, d, Or(s), Or(o)));
                            continue
                        }
                        if ("svgOrigin" === d) {
                            me(t, o, 1, y, 0, this);
                            continue
                        }
                        if (d in Mr) {
                            we(this, v, d, h, _ ? ka(h, _ + o) : o);
                            continue
                        }
                        if ("smoothOrigin" === d) {
                            Zd(this, v, "smooth", v.smooth, o);
                            continue
                        }
                        if ("force3D" === d) {
                            v[d] = o;
                            continue
                        }
                        if ("transform" === d) {
                            ye(this, o, t);
                            continue
                        }
                    }
                else d in x || (d = gr(d) || d);
                if (m || (u || 0 === u) && (h || 0 === h) && !dr.test(o) && d in x) u = u || 0, (c = (s + "").substr((h + "").length)) !== (p = Za(o) || (d in X.units ? X.units[d] : c)) && (h = ae(t, d, s, p)), this._pt = new ge(this._pt, m ? v : x, d, h, (_ ? ka(h, _ + u) : u) - h, m || "px" !== p && "zIndex" !== d || !1 === e.autoRound ? wd : zd), this._pt.u = p || 0, c !== p && "%" !== p && (this._pt.b = s, this._pt.r = yd);
                else if (d in x) ce.call(this, t, d, s, _ ? _ + o : o);
                else if (d in t) this.add(t, d, s || t[d], _ ? _ + o : o, n, a);
                else if ("parseTransform" !== d) {
                    Q(d, o);
                    continue
                }
                m || (d in x ? b.push(d, 0, x[d]) : "function" == typeof t[d] ? b.push(d, 2, t[d]()) : b.push(d, 1, s || t[d])), w.push(d)
            }
            T && _e(this)
        },
        render: function render(t, e) {
            if (e.tween._time || !Ye())
                for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
            else e.styles.revert()
        },
        get: Tr,
        aliases: cr,
        getSetter: function getSetter(t, e, r) {
            var i = cr[e];
            return i && i.indexOf(",") < 0 && (e = i), e in sr && e !== _r && (t._gsap.x || Tr(t, "x")) ? r && Be === r ? "scale" === e ? Fd : Ed : (Be = r || {}) && ("scale" === e ? Gd : Hd) : t.style && !u(t.style[e]) ? Cd : ~e.indexOf("-") ? Dd : ie(t, e)
        },
        core: {
            _removeProperty: Yd,
            _getMatrix: le
        }
    };
    ze.utils.checkPrefix = gr, ze.core.getStyleSaver = Nd, Fr = ha((Er = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Rr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        sr[t] = 1
    }), ha(Rr, function(t) {
        X.units[t] = "deg", Mr[t] = 1
    }), cr[Fr[13]] = Er + "," + Rr, ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        cr[e[1]] = Fr[e[0]]
    }), ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        X.units[t] = "px"
    }), ze.registerPlugin(Lr);
    var Ir = ze.registerPlugin(Lr) || ze,
        Br = Ir.core.Tween;
    e.Back = tr, e.Bounce = rr, e.CSSPlugin = Lr, e.Circ = ar, e.Cubic = Ge, e.Elastic = $e, e.Expo = nr, e.Linear = Ve, e.Power0 = Ze, e.Power1 = Ne, e.Power2 = Qe, e.Power3 = Ue, e.Power4 = qe, e.Quad = We, e.Quart = He, e.Quint = Ke, e.Sine = ir, e.SteppedEase = er, e.Strong = Je, e.TimelineLite = Qt, e.TimelineMax = Qt, e.TweenLite = Jt, e.TweenMax = Br, e.default = Ir, e.gsap = Ir;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

;
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 * 
 * @license Copyright 2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function r() {
        return Se || "undefined" != typeof window && (Se = window.gsap) && Se.registerPlugin && Se
    }

    function z(e, t) {
        return ~Ye.indexOf(e) && Ye[Ye.indexOf(e) + 1][t]
    }

    function A(e) {
        return !!~t.indexOf(e)
    }

    function B(e, t, r, n, i) {
        return e.addEventListener(t, r, {
            passive: !1 !== n,
            capture: !!i
        })
    }

    function C(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function F() {
        return Re && Re.isPressed || ze.cache++
    }

    function G(r, n) {
        function ed(e) {
            if (e || 0 === e) {
                i && (Te.history.scrollRestoration = "manual");
                var t = Re && Re.isPressed;
                e = ed.v = Math.round(e) || (Re && Re.iOS ? 1 : 0), r(e), ed.cacheID = ze.cache, t && o("ss", e)
            } else(n || ze.cache !== ed.cacheID || o("ref")) && (ed.cacheID = ze.cache, ed.v = r());
            return ed.v + ed.offset
        }
        return ed.offset = 0, r && ed
    }

    function J(e, t) {
        return (t && t._ctx && t._ctx.selector || Se.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== Se.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }

    function L(t, e) {
        var r = e.s,
            n = e.sc;
        A(t) && (t = Ce.scrollingElement || Me);
        var i = ze.indexOf(t),
            o = n === qe.sc ? 1 : 2;
        ~i || (i = ze.push(t) - 1), ze[i + o] || B(t, "scroll", F);
        var a = ze[i + o],
            s = a || (ze[i + o] = G(z(t, r), !0) || (A(t) ? n : G(function(e) {
                return arguments.length ? t[r] = e : t[r]
            })));
        return s.target = t, a || (s.smooth = "smooth" === Se.getProperty(t, "scrollBehavior")), s
    }

    function M(e, t, i) {
        function Gd(e, t) {
            var r = Le();
            t || n < r - s ? (a = o, o = e, l = s, s = r) : i ? o += e : o = a + (e - a) / (r - l) * (s - l)
        }
        var o = e,
            a = e,
            s = Le(),
            l = s,
            n = t || 50,
            c = Math.max(500, 3 * n);
        return {
            update: Gd,
            reset: function reset() {
                a = o = i ? 0 : o, l = s = 0
            },
            getVelocity: function getVelocity(e) {
                var t = l,
                    r = a,
                    n = Le();
                return !e && 0 !== e || e === o || Gd(e), s === l || c < n - l ? 0 : (o + (i ? r : -r)) / ((i ? n : s) - t) * 1e3
            }
        }
    }

    function N(e, t) {
        return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    }

    function O(e) {
        var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    }

    function P() {
        (Ae = Se.core.globals().ScrollTrigger) && Ae.core && function _integrate() {
            var e = Ae.core,
                r = e.bridge || {},
                t = e._scrollers,
                n = e._proxies;
            t.push.apply(t, ze), n.push.apply(n, Ye), ze = t, Ye = n, o = function _bridge(e, t) {
                return r[e](t)
            }
        }()
    }

    function Q(e) {
        return Se = e || r(), !ke && Se && "undefined" != typeof document && document.body && (Te = window, Me = (Ce = document).documentElement, Ee = Ce.body, t = [Te, Ce, Me, Ee], Se.utils.clamp, Be = Se.core.context || function() {}, Oe = "onpointerenter" in Ee ? "pointer" : "mouse", Pe = E.isTouch = Te.matchMedia && Te.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Te || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, De = E.eventTypes = ("ontouchstart" in Me ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Me ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return i = 0
        }, 500), P(), ke = 1), ke
    }
    var Se, ke, Te, Ce, Me, Ee, Pe, Oe, Ae, t, Re, De, Be, i = 1,
        Ie = [],
        ze = [],
        Ye = [],
        Le = Date.now,
        o = function _bridge(e, t) {
            return t
        },
        n = "scrollLeft",
        a = "scrollTop",
        He = {
            s: n,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: G(function(e) {
                return arguments.length ? Te.scrollTo(e, qe.sc()) : Te.pageXOffset || Ce[n] || Me[n] || Ee[n] || 0
            })
        },
        qe = {
            s: a,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: He,
            sc: G(function(e) {
                return arguments.length ? Te.scrollTo(He.sc(), e) : Te.pageYOffset || Ce[a] || Me[a] || Ee[a] || 0
            })
        };
    He.op = qe, ze.cache = 0;
    var E = (Observer.prototype.init = function init(e) {
        ke || Q(Se) || console.warn("Please gsap.registerPlugin(Observer)"), Ae || P();
        var i = e.tolerance,
            a = e.dragMinimum,
            t = e.type,
            o = e.target,
            r = e.lineHeight,
            n = e.debounce,
            s = e.preventDefault,
            l = e.onStop,
            c = e.onStopDelay,
            u = e.ignore,
            f = e.wheelSpeed,
            d = e.event,
            p = e.onDragStart,
            g = e.onDragEnd,
            h = e.onDrag,
            v = e.onPress,
            b = e.onRelease,
            m = e.onRight,
            y = e.onLeft,
            x = e.onUp,
            _ = e.onDown,
            w = e.onChangeX,
            S = e.onChangeY,
            k = e.onChange,
            T = e.onToggleX,
            E = e.onToggleY,
            R = e.onHover,
            D = e.onHoverEnd,
            I = e.onMove,
            z = e.ignoreCheck,
            Y = e.isNormalizer,
            H = e.onGestureStart,
            q = e.onGestureEnd,
            X = e.onWheel,
            U = e.onEnable,
            W = e.onDisable,
            G = e.onClick,
            V = e.scrollSpeed,
            K = e.capture,
            j = e.allowClicks,
            Z = e.lockAxis,
            $ = e.onLockAxis;

        function gf() {
            return xe = Le()
        }

        function hf(e, t) {
            return (se.event = e) && u && function _isWithin(e, t) {
                for (var r = t.length; r--;)
                    if (t[r] === e || t[r].contains(e)) return !0;
                return !1
            }(e.target, u) || t && he && "touch" !== e.pointerType || z && z(e, t)
        }

        function kf() {
            var e = se.deltaX = O(me),
                t = se.deltaY = O(ye),
                r = Math.abs(e) >= i,
                n = Math.abs(t) >= i;
            k && (r || n) && k(se, e, t, me, ye), r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), w && w(se), T && se.deltaX < 0 != le < 0 && T(se), le = se.deltaX, me[0] = me[1] = me[2] = 0), n && (_ && 0 < se.deltaY && _(se), x && se.deltaY < 0 && x(se), S && S(se), E && se.deltaY < 0 != ce < 0 && E(se), ce = se.deltaY, ye[0] = ye[1] = ye[2] = 0), (ne || re) && (I && I(se), re && (p && 1 === re && p(se), h && h(se), re = 0), ne = !1), oe && !(oe = !1) && $ && $(se), ie && (X(se), ie = !1), ee = 0
        }

        function lf(e, t, r) {
            me[r] += e, ye[r] += t, se._vx.update(e), se._vy.update(t), n ? ee = ee || requestAnimationFrame(kf) : kf()
        }

        function mf(e, t) {
            Z && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y", oe = !0), "y" !== ae && (me[2] += e, se._vx.update(e, !0)), "x" !== ae && (ye[2] += t, se._vy.update(t, !0)), n ? ee = ee || requestAnimationFrame(kf) : kf()
        }

        function nf(e) {
            if (!hf(e, 1)) {
                var t = (e = N(e, s)).clientX,
                    r = e.clientY,
                    n = t - se.x,
                    i = r - se.y,
                    o = se.isDragging;
                se.x = t, se.y = r, (o || (n || i) && (Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a)) && (re = o ? 2 : 1, o || (se.isDragging = !0), mf(n, i))
            }
        }

        function qf(e) {
            return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && H(e, se.isDragging)
        }

        function rf() {
            return (se.isGesturing = !1) || q(se)
        }

        function sf(e) {
            if (!hf(e)) {
                var t = fe(),
                    r = de();
                lf((t - pe) * V, (r - ge) * V, 1), pe = t, ge = r, l && te.restart(!0)
            }
        }

        function tf(e) {
            if (!hf(e)) {
                e = N(e, s), X && (ie = !0);
                var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? Te.innerHeight : 1) * f;
                lf(e.deltaX * t, e.deltaY * t, 0), l && !Y && te.restart(!0)
            }
        }

        function uf(e) {
            if (!hf(e)) {
                var t = e.clientX,
                    r = e.clientY,
                    n = t - se.x,
                    i = r - se.y;
                se.x = t, se.y = r, ne = !0, l && te.restart(!0), (n || i) && mf(n, i)
            }
        }

        function vf(e) {
            se.event = e, R(se)
        }

        function wf(e) {
            se.event = e, D(se)
        }

        function xf(e) {
            return hf(e) || N(e, s) && G(se)
        }
        this.target = o = J(o) || Me, this.vars = e, u = u && Se.utils.toArray(u), i = i || 1e-9, a = a || 0, f = f || 1, V = V || 1, t = t || "wheel,touch,pointer", n = !1 !== n, r = r || parseFloat(Te.getComputedStyle(Ee).lineHeight) || 22;
        var ee, te, re, ne, ie, oe, ae, se = this,
            le = 0,
            ce = 0,
            ue = e.passive || !s && !1 !== e.passive,
            fe = L(o, He),
            de = L(o, qe),
            pe = fe(),
            ge = de(),
            he = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === De[0],
            ve = A(o),
            be = o.ownerDocument || Ce,
            me = [0, 0, 0],
            ye = [0, 0, 0],
            xe = 0,
            _e = se.onPress = function(e) {
                hf(e, 1) || e && e.button || (se.axis = ae = null, te.pause(), se.isPressed = !0, e = N(e), le = ce = 0, se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), B(Y ? o : be, De[1], nf, ue, !0), se.deltaX = se.deltaY = 0, v && v(se))
            },
            we = se.onRelease = function(t) {
                if (!hf(t, 1)) {
                    C(Y ? o : be, De[1], nf, !0);
                    var e = !isNaN(se.y - se.startY),
                        r = se.isDragging,
                        n = r && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)),
                        i = N(t);
                    !n && e && (se._vx.reset(), se._vy.reset(), s && j && Se.delayedCall(.08, function() {
                        if (300 < Le() - xe && !t.defaultPrevented)
                            if (t.target.click) t.target.click();
                            else if (be.createEvent) {
                            var e = be.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, Te, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                        }
                    })), se.isDragging = se.isGesturing = se.isPressed = !1, l && r && !Y && te.restart(!0), re && kf(), g && r && g(se), b && b(se, n)
                }
            };
        te = se._dc = Se.delayedCall(c || .25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), l && l(se)
        }).pause(), se.deltaX = se.deltaY = 0, se._vx = M(0, 50, !0), se._vy = M(0, 50, !0), se.scrollX = fe, se.scrollY = de, se.isDragging = se.isGesturing = se.isPressed = !1, Be(this), se.enable = function(e) {
            return se.isEnabled || (B(ve ? be : o, "scroll", F), 0 <= t.indexOf("scroll") && B(ve ? be : o, "scroll", sf, ue, K), 0 <= t.indexOf("wheel") && B(o, "wheel", tf, ue, K), (0 <= t.indexOf("touch") && Pe || 0 <= t.indexOf("pointer")) && (B(o, De[0], _e, ue, K), B(be, De[2], we), B(be, De[3], we), j && B(o, "click", gf, !0, !0), G && B(o, "click", xf), H && B(be, "gesturestart", qf), q && B(be, "gestureend", rf), R && B(o, Oe + "enter", vf), D && B(o, Oe + "leave", wf), I && B(o, Oe + "move", uf)), se.isEnabled = !0, se.isDragging = se.isGesturing = se.isPressed = ne = re = !1, se._vx.reset(), se._vy.reset(), pe = fe(), ge = de(), e && e.type && _e(e), U && U(se)), se
        }, se.disable = function() {
            se.isEnabled && (Ie.filter(function(e) {
                return e !== se && A(e.target)
            }).length || C(ve ? be : o, "scroll", F), se.isPressed && (se._vx.reset(), se._vy.reset(), C(Y ? o : be, De[1], nf, !0)), C(ve ? be : o, "scroll", sf, K), C(o, "wheel", tf, K), C(o, De[0], _e, K), C(be, De[2], we), C(be, De[3], we), C(o, "click", gf, !0), C(o, "click", xf), C(be, "gesturestart", qf), C(be, "gestureend", rf), C(o, Oe + "enter", vf), C(o, Oe + "leave", wf), C(o, Oe + "move", uf), se.isEnabled = se.isPressed = se.isDragging = !1, W && W(se))
        }, se.kill = se.revert = function() {
            se.disable();
            var e = Ie.indexOf(se);
            0 <= e && Ie.splice(e, 1), Re === se && (Re = 0)
        }, Ie.push(se), Y && A(o) && (Re = se), se.enable(d)
    }, function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
    }(Observer, [{
        key: "velocityX",
        get: function get() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function get() {
            return this._vy.getVelocity()
        }
    }]), Observer);

    function Observer(e) {
        this.init(e)
    }
    E.version = "3.13.0", E.create = function(e) {
        return new E(e)
    }, E.register = Q, E.getAll = function() {
        return Ie.slice()
    }, E.getById = function(t) {
        return Ie.filter(function(e) {
            return e.vars.id === t
        })[0]
    }, r() && Se.registerPlugin(E);

    function Da(e, t, r) {
        var n = ct(e) && ("clamp(" === e.substr(0, 6) || -1 < e.indexOf("max"));
        return (r["_" + t + "Clamp"] = n) ? e.substr(6, e.length - 7) : e
    }

    function Ea(e, t) {
        return !t || ct(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
    }

    function Ga() {
        return Qe = 1
    }

    function Ha() {
        return Qe = 0
    }

    function Ia(e) {
        return e
    }

    function Ja(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function Ka() {
        return "undefined" != typeof window
    }

    function La() {
        return Ne || Ka() && (Ne = window.gsap) && Ne.registerPlugin && Ne
    }

    function Ma(e) {
        return !!~l.indexOf(e)
    }

    function Na(e) {
        return ("Height" === e ? S : Xe["inner" + e]) || Ue["client" + e] || We["client" + e]
    }

    function Oa(e) {
        return z(e, "getBoundingClientRect") || (Ma(e) ? function() {
            return Ot.width = Xe.innerWidth, Ot.height = S, Ot
        } : function() {
            return _t(e)
        })
    }

    function Ra(e, t) {
        var r = t.s,
            n = t.d2,
            i = t.d,
            o = t.a;
        return Math.max(0, (r = "scroll" + n) && (o = z(e, r)) ? o() - Oa(e)()[i] : Ma(e) ? (Ue[r] || We[r]) - Na(n) : e[r] - e["offset" + n])
    }

    function Sa(e, t) {
        for (var r = 0; r < g.length; r += 3) t && !~t.indexOf(g[r + 1]) || e(g[r], g[r + 1], g[r + 2])
    }

    function Ua(e) {
        return "function" == typeof e
    }

    function Va(e) {
        return "number" == typeof e
    }

    function Wa(e) {
        return "object" == typeof e
    }

    function Xa(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    }

    function Ya(e, t) {
        if (e.enabled) {
            var r = e._ctx ? e._ctx.add(function() {
                return t(e)
            }) : t(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    }

    function nb(e) {
        return Xe.getComputedStyle(e)
    }

    function pb(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    }

    function rb(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }

    function sb(e) {
        var t, r = [],
            n = e.labels,
            i = e.duration();
        for (t in n) r.push(n[t] / i);
        return r
    }

    function ub(i) {
        var o = Ne.utils.snap(i),
            a = Array.isArray(i) && i.slice(0).sort(function(e, t) {
                return e - t
            });
        return a ? function(e, t, r) {
            var n;
            if (void 0 === r && (r = .001), !t) return o(e);
            if (0 < t) {
                for (e -= r, n = 0; n < a.length; n++)
                    if (a[n] >= e) return a[n];
                return a[n - 1]
            }
            for (n = a.length, e += r; n--;)
                if (a[n] <= e) return a[n];
            return a[0]
        } : function(e, t, r) {
            void 0 === r && (r = .001);
            var n = o(e);
            return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : o(t < 0 ? e - i : e + i)
        }
    }

    function wb(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }

    function xb(e, t, r, n, i) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!i
        })
    }

    function yb(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function zb(e, t, r) {
        (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
    }

    function Db(e, t) {
        if (ct(e)) {
            var r = e.indexOf("="),
                n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in q ? q[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }

    function Eb(e, t, r, n, i, o, a, s) {
        var l = i.startColor,
            c = i.endColor,
            u = i.fontSize,
            f = i.indent,
            d = i.fontWeight,
            p = Fe.createElement("div"),
            g = Ma(r) || "fixed" === z(r, "pinType"),
            h = -1 !== e.indexOf("scroller"),
            v = g ? We : r,
            b = -1 !== e.indexOf("start"),
            m = b ? l : c,
            y = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return y += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (y += (n === qe ? I : Y) + ":" + (o + parseFloat(f)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = b, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p), p._offset = p["offset" + n.op.d2], X(p, 0, n, b), p
    }

    function Jb() {
        return 34 < at() - st && (T = T || requestAnimationFrame(Z))
    }

    function Kb() {
        v && v.isPressed && !(v.startX > We.clientWidth) || (ze.cache++, v ? T = T || requestAnimationFrame(Z) : Z(), st || V("scrollStart"), st = at())
    }

    function Lb() {
        y = Xe.innerWidth, m = Xe.innerHeight
    }

    function Mb(e) {
        ze.cache++, !0 !== e && (Ke || h || Fe.fullscreenElement || Fe.webkitFullscreenElement || b && y === Xe.innerWidth && !(Math.abs(Xe.innerHeight - m) > .25 * Xe.innerHeight)) || c.restart(!0)
    }

    function Pb() {
        return yb(ne, "scrollEnd", Pb) || Mt(!0)
    }

    function Sb(e) {
        for (var t = 0; t < K.length; t += 5)(!e || K[t + 4] && K[t + 4].query === e) && (K[t].style.cssText = K[t + 1], K[t].getBBox && K[t].setAttribute("transform", K[t + 2] || ""), K[t + 3].uncache = 1)
    }

    function Tb(e, t) {
        var r;
        for (je = 0; je < kt.length; je++) !(r = kt[je]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
        k = !0, t && Sb(t), t || V("revert")
    }

    function Ub(e, t) {
        ze.cache++, !t && rt || ze.forEach(function(e) {
            return Ua(e) && e.cacheID++ && (e.rec = 0)
        }), ct(e) && (Xe.history.scrollRestoration = _ = e)
    }

    function Zb() {
        We.appendChild(w), S = !v && w.offsetHeight || Xe.innerHeight, We.removeChild(w)
    }

    function $b(t) {
        return Je(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e) {
            return e.style.display = t ? "none" : "block"
        })
    }

    function hc(e, t, r, n) {
        if (!e._gsap.swappedIn) {
            for (var i, o = $.length, a = t.style, s = e.style; o--;) a[i = $[o]] = r[i];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[Y] = s[I] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[ft] = rb(e, He) + xt, a[dt] = rb(e, qe) + xt, a[bt] = s[mt] = s.top = s.left = "0", Pt(n), s[ft] = s.maxWidth = r[ft], s[dt] = s.maxHeight = r[dt], s[bt] = r[bt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
        }
    }

    function kc(e) {
        for (var t = ee.length, r = e.style, n = [], i = 0; i < t; i++) n.push(ee[i], r[ee[i]]);
        return n.t = e, n
    }

    function nc(e, t, r, n, i, o, a, s, l, c, u, f, d, p) {
        Ua(e) && (e = e(s)), ct(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Db("0" + e.substr(3), r) : 0));
        var g, h, v, b = d ? d.time() : 0;
        if (d && d.seek(0), isNaN(e) || (e = +e), Va(e)) d && (e = Ne.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), a && X(a, r, n, !0);
        else {
            Ua(t) && (t = t(s));
            var m, y, x, _, w = (e || "0").split(" ");
            v = J(t, s) || We, (m = _t(v) || {}) && (m.left || m.top) || "none" !== nb(v).display || (_ = v.style.display, v.style.display = "block", m = _t(v), _ ? v.style.display = _ : v.style.removeProperty("display")), y = Db(w[0], m[n.d]), x = Db(w[1] || "0", r), e = m[n.p] - l[n.p] - c + y + i - x, a && X(a, x, n, r - x < 20 || a._isStart && 20 < x), r -= r - x
        }
        if (p && (s[p] = e || -.001, e < 0 && (e = 0)), o) {
            var S = e + r,
                k = o._isStart;
            g = "scroll" + n.d2, X(o, S, n, k && 20 < S || !k && (u ? Math.max(We[g], Ue[g]) : o.parentNode[g]) <= S + 1), u && (l = _t(a), u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + xt))
        }
        return d && v && (g = _t(v), d.seek(f), h = _t(v), d._caScrollDist = g[n.p] - h[n.p], e = e / d._caScrollDist * f), d && d.seek(b), d ? e : Math.round(e)
    }

    function pc(e, t, r, n) {
        if (e.parentNode !== t) {
            var i, o, a = e.style;
            if (t === We) {
                for (i in e._stOrig = a.cssText, o = nb(e)) + i || re.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
                a.top = r, a.left = n
            } else a.cssText = e._stOrig;
            Ne.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    }

    function qc(r, e, n) {
        var i = e,
            o = i;
        return function(e) {
            var t = Math.round(r());
            return t !== i && t !== o && 3 < Math.abs(t - i) && 3 < Math.abs(t - o) && (e = t, n && n()), o = i, i = Math.round(e)
        }
    }

    function rc(e, t, r) {
        var n = {};
        n[t.p] = "+=" + r, Ne.set(e, n)
    }

    function sc(c, e) {
        function Hk(e, t, r, n, i) {
            var o = Hk.tween,
                a = t.onComplete,
                s = {};
            r = r || u();
            var l = qc(u, r, function() {
                o.kill(), Hk.tween = 0
            });
            return i = n && i || 0, n = n || e - r, o && o.kill(), t[f] = e, t.inherit = !1, (t.modifiers = s)[f] = function() {
                return l(r + n * o.ratio + i * o.ratio * o.ratio)
            }, t.onUpdate = function() {
                ze.cache++, Hk.tween && Z()
            }, t.onComplete = function() {
                Hk.tween = 0, a && a.call(o)
            }, o = Hk.tween = Ne.to(c, t)
        }
        var u = L(c, e),
            f = "_scroll" + e.p2;
        return (c[f] = u).wheelHandler = function() {
            return Hk.tween && Hk.tween.kill() && (Hk.tween = 0)
        }, xb(c, "wheel", u.wheelHandler), ne.isTouch && xb(c, "touchmove", u.wheelHandler), Hk
    }
    var Ne, s, Xe, Fe, Ue, We, l, c, Je, Ge, Ve, u, Ke, Qe, f, je, d, p, g, Ze, $e, h, v, b, m, y, R, x, _, w, S, k, et, tt, T, rt, nt, it, ot = 1,
        at = Date.now,
        D = at(),
        st = 0,
        lt = 0,
        ct = function _isString(e) {
            return "string" == typeof e
        },
        ut = Math.abs,
        I = "right",
        Y = "bottom",
        ft = "width",
        dt = "height",
        pt = "Right",
        gt = "Left",
        ht = "Top",
        vt = "Bottom",
        bt = "padding",
        mt = "margin",
        yt = "Width",
        H = "Height",
        xt = "px",
        _t = function _getBounds(e, t) {
            var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== nb(e)[f] && Ne.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = e.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        },
        wt = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        St = {
            toggleActions: "play",
            anticipatePin: 0
        },
        q = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        X = function _positionMarker(e, t, r, n) {
            var i = {
                    display: "block"
                },
                o = r[n ? "os2" : "p2"],
                a = r[n ? "p2" : "os2"];
            e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + yt] = 1, i["border" + a + yt] = 0, i[r.p] = t + "px", Ne.set(e, i)
        },
        kt = [],
        Tt = {},
        U = {},
        W = [],
        V = function _dispatch(e) {
            return U[e] && U[e].map(function(e) {
                return e()
            }) || W
        },
        K = [],
        Ct = 0,
        Mt = function _refreshAll(e, t) {
            if (Ue = Fe.documentElement, We = Fe.body, l = [Xe, Fe, Ue, We], !st || e || k) {
                Zb(), rt = ne.isRefreshing = !0, ze.forEach(function(e) {
                    return Ua(e) && ++e.cacheID && (e.rec = e())
                });
                var r = V("refreshInit");
                Ze && ne.sort(), t || Tb(), ze.forEach(function(e) {
                    Ua(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
                }), kt.slice(0).forEach(function(e) {
                    return e.refresh()
                }), k = !1, kt.forEach(function(e) {
                    if (e._subPinOffset && e.pin) {
                        var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                            r = e.pin[t];
                        e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh()
                    }
                }), et = 1, $b(!0), kt.forEach(function(e) {
                    var t = Ra(e.scroller, e._dir),
                        r = "max" === e.vars.end || e._endClamp && e.end > t,
                        n = e._startClamp && e.start >= t;
                    (r || n) && e.setPositions(n ? t - 1 : e.start, r ? Math.max(n ? t : e.start + 1, t) : e.end, !0)
                }), $b(!1), et = 0, r.forEach(function(e) {
                    return e && e.render && e.render(-1)
                }), ze.forEach(function(e) {
                    Ua(e) && (e.smooth && requestAnimationFrame(function() {
                        return e.target.style.scrollBehavior = "smooth"
                    }), e.rec && e(e.rec))
                }), Ub(_, 1), c.pause(), Ct++, Z(rt = 2), kt.forEach(function(e) {
                    return Ua(e.vars.onRefresh) && e.vars.onRefresh(e)
                }), rt = ne.isRefreshing = !1, V("refresh")
            } else xb(ne, "scrollEnd", Pb)
        },
        j = 0,
        Et = 1,
        Z = function _updateAll(e) {
            if (2 === e || !rt && !k) {
                ne.isUpdating = !0, it && it.update(0);
                var t = kt.length,
                    r = at(),
                    n = 50 <= r - D,
                    i = t && kt[0].scroll();
                if (Et = i < j ? -1 : 1, rt || (j = i), n && (st && !Qe && 200 < r - st && (st = 0, V("scrollEnd")), Ve = D, D = r), Et < 0) {
                    for (je = t; 0 < je--;) kt[je] && kt[je].update(0, n);
                    Et = 1
                } else
                    for (je = 0; je < t; je++) kt[je] && kt[je].update(0, n);
                ne.isUpdating = !1
            }
            T = 0
        },
        $ = ["left", "top", Y, I, mt + vt, mt + pt, mt + ht, mt + gt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        ee = $.concat([ft, dt, "boxSizing", "max" + yt, "max" + H, "position", mt, bt, bt + ht, bt + pt, bt + vt, bt + gt]),
        te = /([A-Z])/g,
        Pt = function _setState(e) {
            if (e) {
                var t, r, n = e.t.style,
                    i = e.length,
                    o = 0;
                for ((e.t._gsap || Ne.core.getCache(e.t)).uncache = 1; o < i; o += 2) r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace(te, "-$1").toLowerCase())
            }
        },
        Ot = {
            left: 0,
            top: 0
        },
        re = /(webkit|moz|length|cssText|inset)/i,
        ne = (ScrollTrigger.prototype.init = function init(P, O) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), lt) {
                var A, n, p, R, D, B, I, Y, H, q, N, e, X, F, U, W, G, V, t, K, b, Q, j, m, Z, y, $, x, r, _, w, ee, i, g, te, re, ne, S, o, k = (P = pb(ct(P) || Va(P) || P.nodeType ? {
                        trigger: P
                    } : P, St)).onUpdate,
                    T = P.toggleClass,
                    a = P.id,
                    C = P.onToggle,
                    ie = P.onRefresh,
                    M = P.scrub,
                    oe = P.trigger,
                    ae = P.pin,
                    se = P.pinSpacing,
                    le = P.invalidateOnRefresh,
                    E = P.anticipatePin,
                    s = P.onScrubComplete,
                    h = P.onSnapComplete,
                    ce = P.once,
                    ue = P.snap,
                    fe = P.pinReparent,
                    l = P.pinSpacer,
                    de = P.containerAnimation,
                    pe = P.fastScrollEnd,
                    ge = P.preventOverlaps,
                    he = P.horizontal || P.containerAnimation && !1 !== P.horizontal ? He : qe,
                    ve = !M && 0 !== M,
                    be = J(P.scroller || Xe),
                    c = Ne.core.getCache(be),
                    me = Ma(be),
                    ye = "fixed" === ("pinType" in P ? P.pinType : z(be, "pinType") || me && "fixed"),
                    xe = [P.onEnter, P.onLeave, P.onEnterBack, P.onLeaveBack],
                    _e = ve && P.toggleActions.split(" "),
                    we = "markers" in P ? P.markers : St.markers,
                    Se = me ? 0 : parseFloat(nb(be)["border" + he.p2 + yt]) || 0,
                    ke = this,
                    Te = P.onRefreshInit && function() {
                        return P.onRefreshInit(ke)
                    },
                    Ce = function _getSizeFunc(e, t, r) {
                        var n = r.d,
                            i = r.d2,
                            o = r.a;
                        return (o = z(e, "getBoundingClientRect")) ? function() {
                            return o()[n]
                        } : function() {
                            return (t ? Na(i) : e["client" + i]) || 0
                        }
                    }(be, me, he),
                    Me = function _getOffsetsFunc(e, t) {
                        return !t || ~Ye.indexOf(e) ? Oa(e) : function() {
                            return Ot
                        }
                    }(be, me),
                    Ee = 0,
                    Pe = 0,
                    Oe = 0,
                    Ae = L(be, he);
                if (ke._startClamp = ke._endClamp = !1, ke._dir = he, E *= 45, ke.scroller = be, ke.scroll = de ? de.time.bind(de) : Ae, R = Ae(), ke.vars = P, O = O || P.animation, "refreshPriority" in P && (Ze = 1, -9999 === P.refreshPriority && (it = ke)), c.tweenScroll = c.tweenScroll || {
                        top: sc(be, qe),
                        left: sc(be, He)
                    }, ke.tweenTo = A = c.tweenScroll[he.p], ke.scrubDuration = function(e) {
                        (i = Va(e) && e) ? ee ? ee.duration(e) : ee = Ne.to(O, {
                            ease: "expo",
                            totalProgress: "+=0",
                            inherit: !1,
                            duration: i,
                            paused: !0,
                            onComplete: function onComplete() {
                                return s && s(ke)
                            }
                        }): (ee && ee.progress(1).kill(), ee = 0)
                    }, O && (O.vars.lazy = !1, O._initted && !ke.isReverted || !1 !== O.vars.immediateRender && !1 !== P.immediateRender && O.duration() && O.render(0, !0, !0), ke.animation = O.pause(), (O.scrollTrigger = ke).scrubDuration(M), _ = 0, a = a || O.vars.id), ue && (Wa(ue) && !ue.push || (ue = {
                        snapTo: ue
                    }), "scrollBehavior" in We.style && Ne.set(me ? [We, Ue] : be, {
                        scrollBehavior: "auto"
                    }), ze.forEach(function(e) {
                        return Ua(e) && e.target === (me ? Fe.scrollingElement || Ue : be) && (e.smooth = !1)
                    }), p = Ua(ue.snapTo) ? ue.snapTo : "labels" === ue.snapTo ? function _getClosestLabel(t) {
                        return function(e) {
                            return Ne.utils.snap(sb(t), e)
                        }
                    }(O) : "labelsDirectional" === ue.snapTo ? function _getLabelAtDirection(r) {
                        return function(e, t) {
                            return ub(sb(r))(e, t.direction)
                        }
                    }(O) : !1 !== ue.directional ? function(e, t) {
                        return ub(ue.snapTo)(e, at() - Pe < 500 ? 0 : t.direction)
                    } : Ne.utils.snap(ue.snapTo), g = ue.duration || {
                        min: .1,
                        max: 2
                    }, g = Wa(g) ? Ge(g.min, g.max) : Ge(g, g), te = Ne.delayedCall(ue.delay || i / 2 || .1, function() {
                        var e = Ae(),
                            t = at() - Pe < 500,
                            r = A.tween;
                        if (!(t || Math.abs(ke.getVelocity()) < 10) || r || Qe || Ee === e) ke.isActive && Ee !== e && te.restart(!0);
                        else {
                            var n, i, o = (e - B) / F,
                                a = O && !ve ? O.totalProgress() : o,
                                s = t ? 0 : (a - w) / (at() - Ve) * 1e3 || 0,
                                l = Ne.utils.clamp(-o, 1 - o, ut(s / 2) * s / .185),
                                c = o + (!1 === ue.inertia ? 0 : l),
                                u = ue.onStart,
                                f = ue.onInterrupt,
                                d = ue.onComplete;
                            if (n = p(c, ke), Va(n) || (n = c), i = Math.max(0, Math.round(B + n * F)), e <= I && B <= e && i !== e) {
                                if (r && !r._initted && r.data <= ut(i - e)) return;
                                !1 === ue.inertia && (l = n - o), A(i, {
                                    duration: g(ut(.185 * Math.max(ut(c - a), ut(n - a)) / s / .05 || 0)),
                                    ease: ue.ease || "power3",
                                    data: ut(i - e),
                                    onInterrupt: function onInterrupt() {
                                        return te.restart(!0) && f && f(ke)
                                    },
                                    onComplete: function onComplete() {
                                        ke.update(), Ee = Ae(), O && !ve && (ee ? ee.resetTo("totalProgress", n, O._tTime / O._tDur) : O.progress(n)), _ = w = O && !ve ? O.totalProgress() : ke.progress, h && h(ke), d && d(ke)
                                    }
                                }, e, l * F, i - e - l * F), u && u(ke, A.tween)
                            }
                        }
                    }).pause()), a && (Tt[a] = ke), o = (o = (oe = ke.trigger = J(oe || !0 !== ae && ae)) && oe._gsap && oe._gsap.stRevert) && o(ke), ae = !0 === ae ? oe : J(ae), ct(T) && (T = {
                        targets: oe,
                        className: T
                    }), ae && (!1 === se || se === mt || (se = !(!se && ae.parentNode && ae.parentNode.style && "flex" === nb(ae.parentNode).display) && bt), ke.pin = ae, (n = Ne.core.getCache(ae)).spacer ? U = n.pinState : (l && ((l = J(l)) && !l.nodeType && (l = l.current || l.nativeElement), n.spacerIsNative = !!l, l && (n.spacerState = kc(l))), n.spacer = V = l || Fe.createElement("div"), V.classList.add("pin-spacer"), a && V.classList.add("pin-spacer-" + a), n.pinState = U = kc(ae)), !1 !== P.force3D && Ne.set(ae, {
                        force3D: !0
                    }), ke.spacer = V = n.spacer, r = nb(ae), m = r[se + he.os2], K = Ne.getProperty(ae), b = Ne.quickSetter(ae, he.a, xt), hc(ae, V, r), G = kc(ae)), we) {
                    e = Wa(we) ? pb(we, wt) : wt, q = Eb("scroller-start", a, be, he, e, 0), N = Eb("scroller-end", a, be, he, e, 0, q), t = q["offset" + he.op.d2];
                    var u = J(z(be, "content") || be);
                    Y = this.markerStart = Eb("start", a, u, he, e, t, 0, de), H = this.markerEnd = Eb("end", a, u, he, e, t, 0, de), de && (S = Ne.quickSetter([Y, H], he.a, xt)), ye || Ye.length && !0 === z(be, "fixedMarkers") || (function _makePositionable(e) {
                        var t = nb(e).position;
                        e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
                    }(me ? We : be), Ne.set([q, N], {
                        force3D: !0
                    }), y = Ne.quickSetter(q, he.a, xt), x = Ne.quickSetter(N, he.a, xt))
                }
                if (de) {
                    var f = de.vars.onUpdate,
                        d = de.vars.onUpdateParams;
                    de.eventCallback("onUpdate", function() {
                        ke.update(0, 0, 1), f && f.apply(de, d || [])
                    })
                }
                if (ke.previous = function() {
                        return kt[kt.indexOf(ke) - 1]
                    }, ke.next = function() {
                        return kt[kt.indexOf(ke) + 1]
                    }, ke.revert = function(e, t) {
                        if (!t) return ke.kill(!0);
                        var r = !1 !== e || !ke.enabled,
                            n = Ke;
                        r !== ke.isReverted && (r && (re = Math.max(Ae(), ke.scroll.rec || 0), Oe = ke.progress, ne = O && O.progress()), Y && [Y, H, q, N].forEach(function(e) {
                            return e.style.display = r ? "none" : "block"
                        }), r && (Ke = ke).update(r), !ae || fe && ke.isActive || (r ? function _swapPinOut(e, t, r) {
                            Pt(r);
                            var n = e._gsap;
                            if (n.spacerIsNative) Pt(n.spacerState);
                            else if (e._gsap.swappedIn) {
                                var i = t.parentNode;
                                i && (i.insertBefore(e, t), i.removeChild(t))
                            }
                            e._gsap.swappedIn = !1
                        }(ae, V, U) : hc(ae, V, nb(ae), Z)), r || ke.update(r), Ke = n, ke.isReverted = r)
                    }, ke.refresh = function(e, t, r, n) {
                        if (!Ke && ke.enabled || t)
                            if (ae && e && st) xb(ScrollTrigger, "scrollEnd", Pb);
                            else {
                                !rt && Te && Te(ke), Ke = ke, A.tween && !r && (A.tween.kill(), A.tween = 0), ee && ee.pause(), le && O && (O.revert({
                                    kill: !1
                                }).invalidate(), O.getChildren && O.getChildren(!0, !0, !1).forEach(function(e) {
                                    return e.vars.immediateRender && e.render(0, !0, !0)
                                })), ke.isReverted || ke.revert(!0, !0), ke._subPinOffset = !1;
                                var i, o, a, s, l, c, u, f, d, p, g, h, v, b = Ce(),
                                    m = Me(),
                                    y = de ? de.duration() : Ra(be, he),
                                    x = F <= .01 || !F,
                                    _ = 0,
                                    w = n || 0,
                                    S = Wa(r) ? r.end : P.end,
                                    k = P.endTrigger || oe,
                                    T = Wa(r) ? r.start : P.start || (0 !== P.start && oe ? ae ? "0 0" : "0 100%" : 0),
                                    C = ke.pinnedContainer = P.pinnedContainer && J(P.pinnedContainer, ke),
                                    M = oe && Math.max(0, kt.indexOf(ke)) || 0,
                                    E = M;
                                for (we && Wa(r) && (h = Ne.getProperty(q, he.p), v = Ne.getProperty(N, he.p)); 0 < E--;)(c = kt[E]).end || c.refresh(0, 1) || (Ke = ke), !(u = c.pin) || u !== oe && u !== ae && u !== C || c.isReverted || ((p = p || []).unshift(c), c.revert(!0, !0)), c !== kt[E] && (M--, E--);
                                for (Ua(T) && (T = T(ke)), T = Da(T, "start", ke), B = nc(T, oe, b, he, Ae(), Y, q, ke, m, Se, ye, y, de, ke._startClamp && "_startClamp") || (ae ? -.001 : 0), Ua(S) && (S = S(ke)), ct(S) && !S.indexOf("+=") && (~S.indexOf(" ") ? S = (ct(T) ? T.split(" ")[0] : "") + S : (_ = Db(S.substr(2), b), S = ct(T) ? T : (de ? Ne.utils.mapRange(0, de.duration(), de.scrollTrigger.start, de.scrollTrigger.end, B) : B) + _, k = oe)), S = Da(S, "end", ke), I = Math.max(B, nc(S || (k ? "100% 0" : y), k, b, he, Ae() + _, H, N, ke, m, Se, ye, y, de, ke._endClamp && "_endClamp")) || -.001, _ = 0, E = M; E--;)(u = (c = kt[E]).pin) && c.start - c._pinPush <= B && !de && 0 < c.end && (i = c.end - (ke._startClamp ? Math.max(0, c.start) : c.start), (u === oe && c.start - c._pinPush < B || u === C) && isNaN(T) && (_ += i * (1 - c.progress)), u === ae && (w += i));
                                if (B += _, I += _, ke._startClamp && (ke._startClamp += _), ke._endClamp && !rt && (ke._endClamp = I || -.001, I = Math.min(I, Ra(be, he))), F = I - B || (B -= .01) && .001, x && (Oe = Ne.utils.clamp(0, 1, Ne.utils.normalize(B, I, re))), ke._pinPush = w, Y && _ && ((i = {})[he.a] = "+=" + _, C && (i[he.p] = "-=" + Ae()), Ne.set([Y, H], i)), !ae || et && ke.end >= Ra(be, he)) {
                                    if (oe && Ae() && !de)
                                        for (o = oe.parentNode; o && o !== We;) o._pinOffset && (B -= o._pinOffset, I -= o._pinOffset), o = o.parentNode
                                } else i = nb(ae), s = he === qe, a = Ae(), Q = parseFloat(K(he.a)) + w, !y && 1 < I && (g = {
                                    style: g = (me ? Fe.scrollingElement || Ue : be).style,
                                    value: g["overflow" + he.a.toUpperCase()]
                                }, me && "scroll" !== nb(We)["overflow" + he.a.toUpperCase()] && (g.style["overflow" + he.a.toUpperCase()] = "scroll")), hc(ae, V, i), G = kc(ae), o = _t(ae, !0), f = ye && L(be, s ? He : qe)(), se ? ((Z = [se + he.os2, F + w + xt]).t = V, (E = se === bt ? rb(ae, he) + F + w : 0) && (Z.push(he.d, E + xt), "auto" !== V.style.flexBasis && (V.style.flexBasis = E + xt)), Pt(Z), C && kt.forEach(function(e) {
                                    e.pin === C && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                                }), ye && Ae(re)) : (E = rb(ae, he)) && "auto" !== V.style.flexBasis && (V.style.flexBasis = E + xt), ye && ((l = {
                                    top: o.top + (s ? a - B : f) + xt,
                                    left: o.left + (s ? f : a - B) + xt,
                                    boxSizing: "border-box",
                                    position: "fixed"
                                })[ft] = l.maxWidth = Math.ceil(o.width) + xt, l[dt] = l.maxHeight = Math.ceil(o.height) + xt, l[mt] = l[mt + ht] = l[mt + pt] = l[mt + vt] = l[mt + gt] = "0", l[bt] = i[bt], l[bt + ht] = i[bt + ht], l[bt + pt] = i[bt + pt], l[bt + vt] = i[bt + vt], l[bt + gt] = i[bt + gt], W = function _copyState(e, t, r) {
                                    for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
                                    return i.t = e.t, i
                                }(U, l, fe), rt && Ae(0)), O ? (d = O._initted, $e(1), O.render(O.duration(), !0, !0), j = K(he.a) - Q + F + w, $ = 1 < Math.abs(F - j), ye && $ && W.splice(W.length - 2, 2), O.render(0, !0, !0), d || O.invalidate(!0), O.parent || O.totalTime(O.totalTime()), $e(0)) : j = F, g && (g.value ? g.style["overflow" + he.a.toUpperCase()] = g.value : g.style.removeProperty("overflow-" + he.a));
                                p && p.forEach(function(e) {
                                    return e.revert(!1, !0)
                                }), ke.start = B, ke.end = I, R = D = rt ? re : Ae(), de || rt || (R < re && Ae(re), ke.scroll.rec = 0), ke.revert(!1, !0), Pe = at(), te && (Ee = -1, te.restart(!0)), Ke = 0, O && ve && (O._initted || ne) && O.progress() !== ne && O.progress(ne || 0, !0).render(O.time(), !0, !0), (x || Oe !== ke.progress || de || le || O && !O._initted) && (O && !ve && (O._initted || Oe || !1 !== O.vars.immediateRender) && O.totalProgress(de && B < -.001 && !Oe ? Ne.utils.normalize(B, I, 0) : Oe, !0), ke.progress = x || (R - B) / F === Oe ? 0 : Oe), ae && se && (V._pinOffset = Math.round(ke.progress * j)), ee && ee.invalidate(), isNaN(h) || (h -= Ne.getProperty(q, he.p), v -= Ne.getProperty(N, he.p), rc(q, he, h), rc(Y, he, h - (n || 0)), rc(N, he, v), rc(H, he, v - (n || 0))), x && !rt && ke.update(), !ie || rt || X || (X = !0, ie(ke), X = !1)
                            }
                    }, ke.getVelocity = function() {
                        return (Ae() - D) / (at() - Ve) * 1e3 || 0
                    }, ke.endAnimation = function() {
                        Xa(ke.callbackAnimation), O && (ee ? ee.progress(1) : O.paused() ? ve || Xa(O, ke.direction < 0, 1) : Xa(O, O.reversed()))
                    }, ke.labelToScroll = function(e) {
                        return O && O.labels && (B || ke.refresh() || B) + O.labels[e] / O.duration() * F || 0
                    }, ke.getTrailing = function(t) {
                        var e = kt.indexOf(ke),
                            r = 0 < ke.direction ? kt.slice(0, e).reverse() : kt.slice(e + 1);
                        return (ct(t) ? r.filter(function(e) {
                            return e.vars.preventOverlaps === t
                        }) : r).filter(function(e) {
                            return 0 < ke.direction ? e.end <= B : e.start >= I
                        })
                    }, ke.update = function(e, t, r) {
                        if (!de || r || e) {
                            var n, i, o, a, s, l, c, u = !0 === rt ? re : ke.scroll(),
                                f = e ? 0 : (u - B) / F,
                                d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                                p = ke.progress;
                            if (t && (D = R, R = de ? Ae() : u, ue && (w = _, _ = O && !ve ? O.totalProgress() : d)), E && ae && !Ke && !ot && st && (!d && B < u + (u - D) / (at() - Ve) * E ? d = 1e-4 : 1 === d && I > u + (u - D) / (at() - Ve) * E && (d = .9999)), d !== p && ke.enabled) {
                                if (a = (s = (n = ke.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p, ke.direction = p < d ? 1 : -1, ke.progress = d, a && !Ke && (i = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3, ve && (o = !s && "none" !== _e[i + 1] && _e[i + 1] || _e[i], c = O && ("complete" === o || "reset" === o || o in O))), ge && (s || c) && (c || M || !O) && (Ua(ge) ? ge(ke) : ke.getTrailing(ge).forEach(function(e) {
                                        return e.endAnimation()
                                    })), ve || (!ee || Ke || ot ? O && O.totalProgress(d, !(!Ke || !Pe && !e)) : (ee._dp._time - ee._start !== ee._time && ee.render(ee._dp._time - ee._start), ee.resetTo ? ee.resetTo("totalProgress", d, O._tTime / O._tDur) : (ee.vars.totalProgress = d, ee.invalidate().restart()))), ae)
                                    if (e && se && (V.style[se + he.os2] = m), ye) {
                                        if (a) {
                                            if (l = !e && p < d && u < I + 1 && u + 1 >= Ra(be, he), fe)
                                                if (e || !n && !l) pc(ae, V);
                                                else {
                                                    var g = _t(ae, !0),
                                                        h = u - B;
                                                    pc(ae, We, g.top + (he === qe ? h : 0) + xt, g.left + (he === qe ? 0 : h) + xt)
                                                }
                                            Pt(n || l ? W : G), $ && d < 1 && n || b(Q + (1 !== d || l ? 0 : j))
                                        }
                                    } else b(Ja(Q + j * d));
                                !ue || A.tween || Ke || ot || te.restart(!0), T && (s || ce && d && (d < 1 || !tt)) && Je(T.targets).forEach(function(e) {
                                    return e.classList[n || ce ? "add" : "remove"](T.className)
                                }), !k || ve || e || k(ke), a && !Ke ? (ve && (c && ("complete" === o ? O.pause().totalProgress(1) : "reset" === o ? O.restart(!0).pause() : "restart" === o ? O.restart(!0) : O[o]()), k && k(ke)), !s && tt || (C && s && Ya(ke, C), xe[i] && Ya(ke, xe[i]), ce && (1 === d ? ke.kill(!1, 1) : xe[i] = 0), s || xe[i = 1 === d ? 1 : 3] && Ya(ke, xe[i])), pe && !n && Math.abs(ke.getVelocity()) > (Va(pe) ? pe : 2500) && (Xa(ke.callbackAnimation), ee ? ee.progress(1) : Xa(O, "reverse" === o ? 1 : !d, 1))) : ve && k && !Ke && k(ke)
                            }
                            if (x) {
                                var v = de ? u / de.duration() * (de._caScrollDist || 0) : u;
                                y(v + (q._isFlipped ? 1 : 0)), x(v)
                            }
                            S && S(-u / de.duration() * (de._caScrollDist || 0))
                        }
                    }, ke.enable = function(e, t) {
                        ke.enabled || (ke.enabled = !0, xb(be, "resize", Mb), me || xb(be, "scroll", Kb), Te && xb(ScrollTrigger, "refreshInit", Te), !1 !== e && (ke.progress = Oe = 0, R = D = Ee = Ae()), !1 !== t && ke.refresh())
                    }, ke.getTween = function(e) {
                        return e && A ? A.tween : ee
                    }, ke.setPositions = function(e, t, r, n) {
                        if (de) {
                            var i = de.scrollTrigger,
                                o = de.duration(),
                                a = i.end - i.start;
                            e = i.start + a * e / o, t = i.start + a * t / o
                        }
                        ke.refresh(!1, !1, {
                            start: Ea(e, r && !!ke._startClamp),
                            end: Ea(t, r && !!ke._endClamp)
                        }, n), ke.update()
                    }, ke.adjustPinSpacing = function(e) {
                        if (Z && e) {
                            var t = Z.indexOf(he.d) + 1;
                            Z[t] = parseFloat(Z[t]) + e + xt, Z[1] = parseFloat(Z[1]) + e + xt, Pt(Z)
                        }
                    }, ke.disable = function(e, t) {
                        if (ke.enabled && (!1 !== e && ke.revert(!0, !0), ke.enabled = ke.isActive = !1, t || ee && ee.pause(), re = 0, n && (n.uncache = 1), Te && yb(ScrollTrigger, "refreshInit", Te), te && (te.pause(), A.tween && A.tween.kill() && (A.tween = 0)), !me)) {
                            for (var r = kt.length; r--;)
                                if (kt[r].scroller === be && kt[r] !== ke) return;
                            yb(be, "resize", Mb), me || yb(be, "scroll", Kb)
                        }
                    }, ke.kill = function(e, t) {
                        ke.disable(e, t), ee && !t && ee.kill(), a && delete Tt[a];
                        var r = kt.indexOf(ke);
                        0 <= r && kt.splice(r, 1), r === je && 0 < Et && je--, r = 0, kt.forEach(function(e) {
                            return e.scroller === ke.scroller && (r = 1)
                        }), r || rt || (ke.scroll.rec = 0), O && (O.scrollTrigger = null, e && O.revert({
                            kill: !1
                        }), t || O.kill()), Y && [Y, H, q, N].forEach(function(e) {
                            return e.parentNode && e.parentNode.removeChild(e)
                        }), it === ke && (it = 0), ae && (n && (n.uncache = 1), r = 0, kt.forEach(function(e) {
                            return e.pin === ae && r++
                        }), r || (n.spacer = 0)), P.onKill && P.onKill(ke)
                    }, kt.push(ke), ke.enable(!1, !1), o && o(ke), O && O.add && !F) {
                    var v = ke.update;
                    ke.update = function() {
                        ke.update = v, ze.cache++, B || I || ke.refresh()
                    }, Ne.delayedCall(.01, ke.update), F = .01, B = I = 0
                } else ke.refresh();
                ae && function _queueRefreshAll() {
                    if (nt !== Ct) {
                        var e = nt = Ct;
                        requestAnimationFrame(function() {
                            return e === Ct && Mt(!0)
                        })
                    }
                }()
            } else this.update = this.refresh = this.kill = Ia
        }, ScrollTrigger.register = function register(e) {
            return s || (Ne = e || La(), Ka() && window.document && ScrollTrigger.enable(), s = lt), s
        }, ScrollTrigger.defaults = function defaults(e) {
            if (e)
                for (var t in e) St[t] = e[t];
            return St
        }, ScrollTrigger.disable = function disable(t, r) {
            lt = 0, kt.forEach(function(e) {
                return e[r ? "kill" : "disable"](t)
            }), yb(Xe, "wheel", Kb), yb(Fe, "scroll", Kb), clearInterval(u), yb(Fe, "touchcancel", Ia), yb(We, "touchstart", Ia), wb(yb, Fe, "pointerdown,touchstart,mousedown", Ga), wb(yb, Fe, "pointerup,touchend,mouseup", Ha), c.kill(), Sa(yb);
            for (var e = 0; e < ze.length; e += 3) zb(yb, ze[e], ze[e + 1]), zb(yb, ze[e], ze[e + 2])
        }, ScrollTrigger.enable = function enable() {
            if (Xe = window, Fe = document, Ue = Fe.documentElement, We = Fe.body, Ne && (Je = Ne.utils.toArray, Ge = Ne.utils.clamp, x = Ne.core.context || Ia, $e = Ne.core.suppressOverwrites || Ia, _ = Xe.history.scrollRestoration || "auto", j = Xe.pageYOffset || 0, Ne.core.globals("ScrollTrigger", ScrollTrigger), We)) {
                lt = 1, (w = document.createElement("div")).style.height = "100vh", w.style.position = "absolute", Zb(),
                    function _rafBugFix() {
                        return lt && requestAnimationFrame(_rafBugFix)
                    }(), E.register(Ne), ScrollTrigger.isTouch = E.isTouch, R = E.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), b = 1 === E.isTouch, xb(Xe, "wheel", Kb), l = [Xe, Fe, Ue, We], Ne.matchMedia ? (ScrollTrigger.matchMedia = function(e) {
                        var t, r = Ne.matchMedia();
                        for (t in e) r.add(t, e[t]);
                        return r
                    }, Ne.addEventListener("matchMediaInit", function() {
                        return Tb()
                    }), Ne.addEventListener("matchMediaRevert", function() {
                        return Sb()
                    }), Ne.addEventListener("matchMedia", function() {
                        Mt(0, 1), V("matchMedia")
                    }), Ne.matchMedia().add("(orientation: portrait)", function() {
                        return Lb(), Lb
                    })) : console.warn("Requires GSAP 3.11.0 or later"), Lb(), xb(Fe, "scroll", Kb);
                var e, t, r = We.hasAttribute("style"),
                    n = We.style,
                    i = n.borderTopStyle,
                    o = Ne.core.Animation.prototype;
                for (o.revert || Object.defineProperty(o, "revert", {
                        value: function value() {
                            return this.time(-.01, !0)
                        }
                    }), n.borderTopStyle = "solid", e = _t(We), qe.m = Math.round(e.top + qe.sc()) || 0, He.m = Math.round(e.left + He.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), r || (We.setAttribute("style", ""), We.removeAttribute("style")), u = setInterval(Jb, 250), Ne.delayedCall(.5, function() {
                        return ot = 0
                    }), xb(Fe, "touchcancel", Ia), xb(We, "touchstart", Ia), wb(xb, Fe, "pointerdown,touchstart,mousedown", Ga), wb(xb, Fe, "pointerup,touchend,mouseup", Ha), f = Ne.utils.checkPrefix("transform"), ee.push(f), s = at(), c = Ne.delayedCall(.2, Mt).pause(), g = [Fe, "visibilitychange", function() {
                        var e = Xe.innerWidth,
                            t = Xe.innerHeight;
                        Fe.hidden ? (d = e, p = t) : d === e && p === t || Mb()
                    }, Fe, "DOMContentLoaded", Mt, Xe, "load", Mt, Xe, "resize", Mb], Sa(xb), kt.forEach(function(e) {
                        return e.enable(0, 1)
                    }), t = 0; t < ze.length; t += 3) zb(yb, ze[t], ze[t + 1]), zb(yb, ze[t], ze[t + 2])
            }
        }, ScrollTrigger.config = function config(e) {
            "limitCallbacks" in e && (tt = !!e.limitCallbacks);
            var t = e.syncInterval;
            t && clearInterval(u) || (u = t) && setInterval(Jb, t), "ignoreMobileResize" in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Sa(yb) || Sa(xb, e.autoRefreshEvents || "none"), h = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
            var r = J(e),
                n = ze.indexOf(r),
                i = Ma(r);
            ~n && ze.splice(n, i ? 6 : 2), t && (i ? Ye.unshift(Xe, t, We, t, Ue, t) : Ye.unshift(r, t))
        }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
            kt.forEach(function(e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            })
        }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
            var n = (ct(e) ? J(e) : e).getBoundingClientRect(),
                i = n[r ? ft : dt] * t || 0;
            return r ? 0 < n.right - i && n.left + i < Xe.innerWidth : 0 < n.bottom - i && n.top + i < Xe.innerHeight
        }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
            ct(e) && (e = J(e));
            var n = e.getBoundingClientRect(),
                i = n[r ? ft : dt],
                o = null == t ? i / 2 : t in q ? q[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
            return r ? (n.left + o) / Xe.innerWidth : (n.top + o) / Xe.innerHeight
        }, ScrollTrigger.killAll = function killAll(e) {
            if (kt.slice(0).forEach(function(e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill()
                }), !0 !== e) {
                var t = U.killAll || [];
                U = {}, t.forEach(function(e) {
                    return e()
                })
            }
        }, ScrollTrigger);

    function ScrollTrigger(e, t) {
        s || ScrollTrigger.register(Ne) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), x(this), this.init(e, t)
    }
    ne.version = "3.13.0", ne.saveStyles = function(e) {
        return e ? Je(e).forEach(function(e) {
            if (e && e.style) {
                var t = K.indexOf(e);
                0 <= t && K.splice(t, 5), K.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Ne.core.getCache(e), x())
            }
        }) : K
    }, ne.revert = function(e, t) {
        return Tb(!e, t)
    }, ne.create = function(e, t) {
        return new ne(e, t)
    }, ne.refresh = function(e) {
        return e ? Mb(!0) : (s || ne.register()) && Mt(!0)
    }, ne.update = function(e) {
        return ++ze.cache && Z(!0 === e ? 2 : 0)
    }, ne.clearScrollMemory = Ub, ne.maxScroll = function(e, t) {
        return Ra(e, t ? He : qe)
    }, ne.getScrollFunc = function(e, t) {
        return L(J(e), t ? He : qe)
    }, ne.getById = function(e) {
        return Tt[e]
    }, ne.getAll = function() {
        return kt.filter(function(e) {
            return "ScrollSmoother" !== e.vars.id
        })
    }, ne.isScrolling = function() {
        return !!st
    }, ne.snapDirectional = ub, ne.addEventListener = function(e, t) {
        var r = U[e] || (U[e] = []);
        ~r.indexOf(t) || r.push(t)
    }, ne.removeEventListener = function(e, t) {
        var r = U[e],
            n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }, ne.batch = function(e, t) {
        function Jp(e, t) {
            var r = [],
                n = [],
                i = Ne.delayedCall(o, function() {
                    t(r, n), r = [], n = []
                }).pause();
            return function(e) {
                r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1)
            }
        }
        var r, n = [],
            i = {},
            o = t.interval || .016,
            a = t.batchMax || 1e9;
        for (r in t) i[r] = "on" === r.substr(0, 2) && Ua(t[r]) && "onRefreshInit" !== r ? Jp(0, t[r]) : t[r];
        return Ua(a) && (a = a(), xb(ne, "refresh", function() {
            return a = t.batchMax()
        })), Je(e).forEach(function(e) {
            var t = {};
            for (r in i) t[r] = i[r];
            t.trigger = e, n.push(ne.create(t))
        }), n
    };

    function uc(e, t, r, n) {
        return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    }

    function vc(e, t) {
        !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (E.isTouch ? " pinch-zoom" : "") : "none", e === Ue && vc(We, t)
    }

    function xc(e) {
        var t, r = e.event,
            n = e.target,
            i = e.axis,
            o = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = o._gsap || Ne.core.getCache(o),
            s = at();
        if (!a._isScrollT || 2e3 < s - a._isScrollT) {
            for (; o && o !== We && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !oe[(t = nb(o)).overflowY] && !oe[t.overflowX]);) o = o.parentNode;
            a._isScroll = o && o !== n && !Ma(o) && (oe[(t = nb(o)).overflowY] || oe[t.overflowX]), a._isScrollT = s
        }!a._isScroll && "x" !== i || (r.stopPropagation(), r._gsapAllow = !0)
    }

    function yc(e, t, r, n) {
        return E.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && xc,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function onEnable() {
                return r && xb(Fe, E.eventTypes[0], se, !1, !0)
            },
            onDisable: function onDisable() {
                return yb(Fe, E.eventTypes[0], se, !0)
            }
        })
    }

    function Cc(e) {
        function Gq() {
            return i = !1
        }

        function Jq() {
            o = Ra(p, qe), T = Ge(R ? 1 : 0, o), f && (k = Ge(0, Ra(p, He))), l = Ct
        }

        function Kq() {
            v._gsap.y = Ja(parseFloat(v._gsap.y) + b.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", b.offset = b.cacheID = 0
        }

        function Qq() {
            Jq(), a.isActive() && a.vars.scrollY > o && (b() > o ? a.progress(1) && b(o) : a.resetTo("scrollY", o))
        }
        Wa(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var n, o, l, i, a, c, u, s, f = e.normalizeScrollX,
            t = e.momentum,
            r = e.allowNestedScroll,
            d = e.onRelease,
            p = J(e.target) || Ue,
            g = Ne.core.globals().ScrollSmoother,
            h = g && g.get(),
            v = R && (e.content && J(e.content) || h && !1 !== e.content && !h.smooth() && h.content()),
            b = L(p, qe),
            m = L(p, He),
            y = 1,
            x = (E.isTouch && Xe.visualViewport ? Xe.visualViewport.scale * Xe.visualViewport.width : Xe.outerWidth) / Xe.innerWidth,
            _ = 0,
            w = Ua(t) ? function() {
                return t(n)
            } : function() {
                return t || 2.8
            },
            S = yc(p, e.type, !0, r),
            k = Ia,
            T = Ia;
        return v && Ne.set(v, {
            y: "+=0"
        }), e.ignoreCheck = function(e) {
            return R && "touchmove" === e.type && function ignoreDrag() {
                if (i) {
                    requestAnimationFrame(Gq);
                    var e = Ja(n.deltaY / 2),
                        t = T(b.v - e);
                    if (v && t !== b.v + b.offset) {
                        b.offset = t - b.v;
                        var r = Ja((parseFloat(v && v._gsap.y) || 0) - b.offset);
                        v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", v._gsap.y = r + "px", b.cacheID = ze.cache, Z()
                    }
                    return !0
                }
                b.offset && Kq(), i = !0
            }() || 1.05 < y && "touchstart" !== e.type || n.isGesturing || e.touches && 1 < e.touches.length
        }, e.onPress = function() {
            i = !1;
            var e = y;
            y = Ja((Xe.visualViewport && Xe.visualViewport.scale || 1) / x), a.pause(), e !== y && vc(p, 1.01 < y || !f && "x"), c = m(), u = b(), Jq(), l = Ct
        }, e.onRelease = e.onGestureStart = function(e, t) {
            if (b.offset && Kq(), t) {
                ze.cache++;
                var r, n, i = w();
                f && (n = (r = m()) + .05 * i * -e.velocityX / .227, i *= uc(m, r, n, Ra(p, He)), a.vars.scrollX = k(n)), n = (r = b()) + .05 * i * -e.velocityY / .227, i *= uc(b, r, n, Ra(p, qe)), a.vars.scrollY = T(n), a.invalidate().duration(i).play(.01), (R && a.vars.scrollY >= o || o - 1 <= r) && Ne.to({}, {
                    onUpdate: Qq,
                    duration: i
                })
            } else s.restart(!0);
            d && d(e)
        }, e.onWheel = function() {
            a._ts && a.pause(), 1e3 < at() - _ && (l = 0, _ = at())
        }, e.onChange = function(e, t, r, n, i) {
            if (Ct !== l && Jq(), t && f && m(k(n[2] === t ? c + (e.startX - e.x) : m() + t - n[1])), r) {
                b.offset && Kq();
                var o = i[2] === r,
                    a = o ? u + e.startY - e.y : b() + r - i[1],
                    s = T(a);
                o && a !== s && (u += s - a), b(s)
            }(r || t) && Z()
        }, e.onEnable = function() {
            vc(p, !f && "x"), ne.addEventListener("refresh", Qq), xb(Xe, "resize", Qq), b.smooth && (b.target.style.scrollBehavior = "auto", b.smooth = m.smooth = !1), S.enable()
        }, e.onDisable = function() {
            vc(p, !0), yb(Xe, "resize", Qq), ne.removeEventListener("refresh", Qq), S.kill()
        }, e.lockAxis = !1 !== e.lockAxis, ((n = new E(e)).iOS = R) && !b() && b(1), R && Ne.ticker.add(Ia), s = n._dc, a = Ne.to(n, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: f ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: qc(b, b(), function() {
                    return a.pause()
                })
            },
            onUpdate: Z,
            onComplete: s.vars.onComplete
        }), n
    }
    var ie, oe = {
            auto: 1,
            scroll: 1
        },
        ae = /(input|label|select|textarea)/i,
        se = function _captureInputs(e) {
            var t = ae.test(e.target.tagName);
            (t || ie) && (e._gsapAllow = !0, ie = t)
        };
    ne.sort = function(e) {
        if (Ua(e)) return kt.sort(e);
        var t = Xe.pageYOffset || 0;
        return ne.getAll().forEach(function(e) {
            return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + Xe.innerHeight
        }), kt.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, ne.observe = function(e) {
        return new E(e)
    }, ne.normalizeScroll = function(e) {
        if (void 0 === e) return v;
        if (!0 === e && v) return v.enable();
        if (!1 === e) return v && v.kill(), void(v = e);
        var t = e instanceof E ? e : Cc(e);
        return v && v.target === t.target && v.kill(), Ma(t.target) && (v = t), t
    }, ne.core = {
        _getVelocityProp: M,
        _inputObserver: yc,
        _scrollers: ze,
        _proxies: Ye,
        bridge: {
            ss: function ss() {
                st || V("scrollStart"), st = at()
            },
            ref: function ref() {
                return Ke
            }
        }
    }, La() && Ne.registerPlugin(ne), e.ScrollTrigger = ne, e.default = ne;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

;
window._$W = window;
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin({
        name: "transition",
        init(t, e, r) {
            return this.target = t, this.tween = r, this.reverting = gsap.core.reverting || function() {}, !!t.style
        },
        render(t, {
            target: e,
            tween: r,
            reverting: i
        }) {
            e.style.transition = (1 === r.progress() || !r._time && i()) && "isFromStart" !== r.data ? "" : "unset"
        }
    });
    gsap.defaults({
        duration: 1,
        transition: "unset"
    });
    gsap.config({
        nullTargetWarn: false
    });
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches && document.querySelector(".video-poster")) {
        /* Section 2 animation removed */
        _$W._mp_1765924552 = gsap.timeline({
            scrollTrigger: {
                scrub: 1.5,
                trigger: ".circlebox",
                start: "top 102%",
                end: "top 50%"
            }
        }).to(".circlebox", {
            stagger: {
                from: "start",
                each: 1
            },
            ease: "slow.inOut",
            y: "0px",
            duration: 1.5
        }, 0);
        _$W._mp_1765924554 = gsap.timeline({
            scrollTrigger: {
                scrub: !1,
                trigger: "#service-two",
                start: "clamp(top 50%)",
                end: "bottom 50%",
                toggleActions: "play none none reverse"
            }
        }).to(".service-ring", {
            rotation: -40,
            ease: "power4.inOut"
        }, 0).fromTo(".service-number.two", {
            ease: "slow.inOut",
            autoAlpha: .2
        }, {
            autoAlpha: 1,
            duration: .5
        }, .5);
        _$W._mp_1765924556 = gsap.timeline({
            scrollTrigger: {
                scrub: !1,
                trigger: "#service-three",
                start: "clamp(top 50%)",
                end: "bottom 50%",
                toggleActions: "play none none reverse"
            }
        }).to(".service-ring", {
            rotation: -60,
            ease: "power4.inOut"
        }, 0).fromTo(".service-number.three", {
            ease: "slow.inOut",
            autoAlpha: .2
        }, {
            autoAlpha: 1,
            duration: .5
        }, .5);
        _$W._mp_1765924557 = gsap.timeline({
            scrollTrigger: {
                scrub: !1,
                trigger: "#service-four",
                start: "clamp(top 50%)",
                end: "bottom 50%",
                toggleActions: "play none none reverse"
            }
        }).to(".service-ring", {
            rotation: -80,
            ease: "power4.inOut"
        }, 0).fromTo(".service-number.four", {
            ease: "slow.inOut",
            autoAlpha: .2
        }, {
            autoAlpha: 1,
            duration: .5
        }, .5);
        _$W._mp_1765924558 = gsap.timeline({
            scrollTrigger: {
                scrub: !1,
                trigger: "#service-five",
                start: "clamp(top 50%)",
                end: "bottom 50%",
                toggleActions: "play none none reverse"
            }
        }).to(".service-ring", {
            rotation: -100,
            ease: "power4.inOut"
        }, 0).fromTo(".service-number.five", {
            ease: "slow.inOut",
            autoAlpha: .2
        }, {
            autoAlpha: 1,
            duration: .5
        }, .5);
        _$W._mp_1765924559 = gsap.timeline({
            scrollTrigger: {
                scrub: !1,
                trigger: ".service-boxes",
                start: "top 50%",
                end: "bottom 50%",
                pin: ".service-ring",
                pinSpacing: !1
            }
        });
        if (matchMedia("screen and (min-width: 768px)").matches) {
            _$W._mp_1765924561 = [], gsap.utils.toArray(".service-box").forEach(item => {
                let _n = "_mp_1765924561_" + (_mp_1765924561.length + 1);
                _mp_1765924561.push(_n);
                let _t = gsap.timeline({
                    scrollTrigger: {
                        scrub: 1,
                        trigger: item,
                        start: "clamp(center 50%)",
                        end: "clamp(top 20%)",
                        pin: !0,
                        pinSpacing: !0
                    }
                });
                _$W[_n] = _t
            });
        }
        _$W._mp_1766049946 = gsap.timeline({
            scrollTrigger: {
                scrub: !1,
                trigger: "#service-one",
                start: "clamp(top 50%)",
                end: "top 50%",
                toggleActions: "play none none reverse"
            }
        }).to(".service-ring", {
            rotation: -20,
            ease: "slow.inOut"
        }, 0).fromTo(".service-number.one", {
            ease: "slow.inOut",
            autoAlpha: .2
        }, {
            autoAlpha: 1,
            duration: .5
        }, .5);
        _$W._mp_1766137921_CTX = gsap.context(() => {
            _$W._mp_1766137921 = gsap.timeline().to(".text-rotate h3:first-child", {
                ease: "none",
                repeat: -1,
                xPercent: -33.4,
                duration: 67.4
            }, 0).to(".text-rotate h3:last-child", {
                ease: "none",
                repeat: -1,
                xPercent: 33.4,
                duration: 67.4
            }, 0).pause(), _$W._mp_1766137921_observer = ScrollTrigger.observe({
                target: "window",
                type: "scroll",
                tolerance: 1,
                dragMinimum: 12,
                lockAxis: !0,
                onUp: () => {
                    _$W._mp_1766137921 && (1 === _$W._mp_1766137921.progress() ? _$W._mp_1766137921.reverse() : 0 === _$W._mp_1766137921.progress() || _$W._mp_1766137921.reversed() ? _$W._mp_1766137921.play() : _$W._mp_1766137921.reverse())
                },
                onDown: () => {
                    _$W._mp_1766137921 && (1 > _$W._mp_1766137921.progress() ? _$W._mp_1766137921.play() : _$W._mp_1766137921.restart())
                }
            }), setTimeout(() => {
                var _$W_top;
                return (_$W?.top?.mp_iframe?.scrollTriggerRefreshAll) && _$W.top.mp_iframe.scrollTriggerRefreshAll()
            }, 100)
        });
        if (matchMedia("screen and (min-width: 992px)").matches) {
            _$W._mp_1768159155 = gsap.timeline({
                scrollTrigger: {
                    scrub: !0,
                    trigger: ".work-container",
                    start: "top 90%",
                    end: "bottom"
                }
            }).to(".work-masonry", {
                ease: "none",
                yPercent: -66
            }, 0);
        }
        _$W._mp_1768406414 = gsap.timeline({
            scrollTrigger: {
                scrub: 1.5,
                trigger: ".wnbox",
                start: "top 102%",
                end: "top 50%"
            }
        }).to(".wnbox", {
            stagger: {
                from: "start",
                each: 1
            },
            ease: "slow.inOut",
            y: "0px",
            duration: 1.5
        }, 0);
    }
    _$W._mp_refresher = (t = 0) => {
        ScrollTrigger && setTimeout((() => {
            ScrollTrigger.sort(), ScrollTrigger.getAll().forEach((r) => r.refresh())
        }), t)
    }, addEventListener("load", (() => _mp_refresher(92)));
});;
(function() {
    let loaded = false;

    function loadDeferredJS() {
        if (loaded) return;
        loaded = true;
        document.querySelectorAll('script[data-delay]').forEach(s => {
            let n = document.createElement('script');
            n.src = s.dataset.delay;
            n.defer = true;
            document.body.appendChild(n);
        });
    }
    ['scroll', 'mousemove', 'touchstart'].forEach(e =>
        window.addEventListener(e, loadDeferredJS, {
            once: true
        })
    );
})();