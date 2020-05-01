(function(window, document) {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var l;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this);

    function ea(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function r(a) {
        if (!(a instanceof Array)) {
            a = ea(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var fa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ha;
    if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ja = {
                    Fb: !0
                },
                ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.Fb;
                break a
            } catch (a) {}
            ia = !1
        }
        ha = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var la = ha;

    function t(a, b) {
        a.prototype = fa(b.prototype);
        a.prototype.constructor = a;
        if (la) la(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c]
    }

    function ma(a, b) {
        if (b) {
            var c = da;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    var na = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    ma("Object.assign", function(a) {
        return a || na
    });
    ma("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    var u = this || self;

    function oa() {}

    function w(a) {
        a.Pa = void 0;
        a.g = function() {
            return a.Pa ? a.Pa : a.Pa = new a
        }
    }

    function pa(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function qa(a) {
        var b = pa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ra(a) {
        return "function" == pa(a)
    }

    function sa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ta(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function ua(a, b) {
        a = a.split(".");
        var c = u;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function va(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var wa;

    function xa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function x(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }

    function ya(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function za(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Aa(a, b, c) {
        var d = c;
        x(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ba(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Da(a, b) {
        var c = 0;
        x(a, function(d, e, f) {
            b.call(void 0, d, e, f) && ++c
        }, void 0);
        return c
    }

    function Ea(a, b) {
        b = Fa(a, b, void 0);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Fa(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    }

    function Ga(a, b) {
        return 0 <= xa(a, b)
    }

    function Ha(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ia(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ja(a, b) {
        a.sort(b || Ka)
    }

    function Ka(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function La(a) {
        if (!arguments.length) return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    };

    function Ma(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Na(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Oa(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Pa(a) {
        var b = Qa,
            c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b)) return !1;
        return !0
    }

    function Ra(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }
    var Sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function y(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Sa.length; f++) c = Sa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function Ta(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    var Ua = /&/g,
        Va = /</g,
        Wa = />/g,
        Xa = /"/g,
        Ya = /'/g,
        Za = /\x00/g,
        $a = /[\x00&<>"']/;

    function z(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }

    function ab(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var A;
    a: {
        var bb = u.navigator;
        if (bb) {
            var cb = bb.userAgent;
            if (cb) {
                A = cb;
                break a
            }
        }
        A = ""
    }

    function B(a) {
        return -1 != A.indexOf(a)
    };

    function db() {
        return B("Safari") && !(eb() || B("Coast") || B("Opera") || B("Edge") || B("Edg/") || B("OPR") || B("Firefox") || B("FxiOS") || B("Silk") || B("Android"))
    }

    function eb() {
        return (B("Chrome") || B("CriOS")) && !B("Edge")
    };

    function fb(a) {
        $a.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Ua, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Va, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Wa, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Xa, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Ya, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Za, "&#0;")));
        return a
    }

    function gb() {
        return "opacity".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }

    function hb(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function ib(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function jb(a) {
        jb[" "](a);
        return a
    }
    jb[" "] = oa;

    function kb(a, b) {
        try {
            return jb(a[b]), !0
        } catch (c) {}
        return !1
    }

    function lb(a, b) {
        var c = mb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var nb = B("Opera"),
        C = B("Trident") || B("MSIE"),
        ob = B("Edge"),
        pb = B("Gecko") && !(z(A, "WebKit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"),
        qb = z(A, "WebKit") && !B("Edge"),
        rb = qb && B("Mobile");

    function sb() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }
    var tb;
    a: {
        var ub = "",
            vb = function() {
                var a = A;
                if (pb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (ob) return /Edge\/([\d\.]+)/.exec(a);
                if (C) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (qb) return /WebKit\/(\S+)/.exec(a);
                if (nb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();vb && (ub = vb ? vb[1] : "");
        if (C) {
            var wb = sb();
            if (null != wb && wb > parseFloat(ub)) {
                tb = String(wb);
                break a
            }
        }
        tb = ub
    }
    var xb = tb,
        mb = {};

    function yb(a) {
        return lb(a, function() {
            for (var b = 0, c = Ta(String(xb)).split("."), d = Ta(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    b = ab(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || ab(0 == g[2].length, 0 == h[2].length) || ab(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var zb;
    if (u.document && C) {
        var Ab = sb();
        zb = Ab ? Ab : parseInt(xb, 10) || void 0
    } else zb = void 0;
    var Bb = zb;
    var Cb = {},
        Db = null;
    var Eb = 0,
        Fb = 0;

    function Gb() {
        this.a = []
    }
    Gb.prototype.length = function() {
        return this.a.length
    };

    function Hb(a, b) {
        for (; 127 < b;) a.a.push(b & 127 | 128), b >>>= 7;
        a.a.push(b)
    }

    function Ib(a, b) {
        a.a.push(b >>> 0 & 255);
        a.a.push(b >>> 8 & 255);
        a.a.push(b >>> 16 & 255);
        a.a.push(b >>> 24 & 255)
    };

    function Jb() {
        this.b = [];
        this.a = new Gb
    }

    function Kb(a, b, c) {
        if (null != c) {
            Hb(a.a, 8 * b);
            a = a.a;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
            Eb = b;
            Fb = d;
            c = Eb;
            for (b = Fb; 0 < b || 127 < c;) a.a.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
            a.a.push(c)
        }
    };

    function Lb() {}
    var Mb = "function" == typeof Uint8Array,
        Nb = [];

    function Ob(a) {
        var b = a.c + a.f;
        a.a[b] || (a.b = a.a[b] = {})
    }

    function Pb(a, b) {
        if (b < a.c) {
            b += a.f;
            var c = a.a[b];
            return c === Nb ? a.a[b] = [] : c
        }
        if (a.b) return c = a.b[b], c === Nb ? a.b[b] = [] : c
    }

    function Qb(a, b) {
        a = Pb(a, b);
        return null == a ? 0 : a
    }

    function Rb(a, b, c) {
        0 !== c ? b < a.c ? a.a[b + a.f] = c : (Ob(a), a.b[b] = c) : b < a.c ? a.a[b + a.f] = null : (Ob(a), delete a.b[b]);
        return a
    }

    function Sb(a) {
        if (a.h)
            for (var b in a.h) {
                var c = a.h[b];
                if ("array" == pa(c))
                    for (var d = 0; d < c.length; d++) c[d] && Sb(c[d]);
                else c && Sb(c)
            }
    }
    Lb.prototype.toString = function() {
        Sb(this);
        return this.a.toString()
    };
    var Tb;
    Tb = ["av.key", "js", "20200429"].slice(-1)[0];
    var D = document,
        E = window;
    var Ub = Ma(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            u.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function Vb(a) {
        return a ? a.passive && Ub() ? a : a.capture || !1 : !1
    }

    function Wb(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Vb(d)), !0) : !1
    }

    function Xb(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, Vb(void 0))
    };
    var Yb = !C || 9 <= Number(Bb),
        Zb = C || nb || qb;

    function F(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    F.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    F.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    F.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function G(a, b) {
        this.width = a;
        this.height = b
    }
    G.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    G.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    G.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    G.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function $b(a) {
        return a ? new ac(H(a)) : wa || (wa = new ac)
    }

    function bc() {
        var a = document;
        a.getElementsByClassName ? a = a.getElementsByClassName("GoogleActiveViewContainer")[0] : (a = document, a = a.querySelectorAll && a.querySelector ? a.querySelector(".GoogleActiveViewContainer") : cc(a, "*", "GoogleActiveViewContainer", void 0)[0] || null);
        return a || null
    }

    function cc(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && Ga(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }

    function dc(a, b) {
        Na(b, function(c, d) {
            c && "object" == typeof c && c.kc && (c = c.jc());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : ec.hasOwnProperty(d) ? a.setAttribute(ec[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var ec = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function fc(a) {
        var b = a.scrollingElement ? a.scrollingElement : qb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return C && yb("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft, b.scrollTop) : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function gc(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function hc(a, b, c) {
        var d = arguments,
            e = document,
            f = String(d[0]),
            g = d[1];
        if (!Yb && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', fb(g.name), '"');
            if (g.type) {
                f.push(' type="', fb(g.type), '"');
                var h = {};
                y(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = ic(e, f);
        g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : dc(f, g));
        2 < d.length && jc(e, f, d);
        return f
    }

    function jc(a, b, c) {
        function d(g) {
            g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !qa(f) || sa(f) && 0 < f.nodeType ? d(f) : x(kc(f) ? Ia(f) : f, d)
        }
    }

    function ic(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function H(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function lc(a) {
        try {
            return a.contentWindow || (a.contentDocument ? gc(a.contentDocument) : null)
        } catch (b) {}
        return null
    }

    function kc(a) {
        if (a && "number" == typeof a.length) {
            if (sa(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (ra(a)) return "function" == typeof a.item
        }
        return !1
    }

    function mc(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function ac(a) {
        this.a = a || u.document || document
    };

    function nc() {
        return B("iPad") || B("Android") && !B("Mobile") || B("Silk")
    };
    var oc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function pc(a) {
        try {
            return !!a && null != a.location.href && kb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function qc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function rc(a) {
        var b = [];
        qc(a, function(c, d) {
            b.push(d)
        });
        return b
    }

    function sc() {
        var a = tc;
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    var uc = {
        fc: 1,
        ic: 2,
        ec: 3
    };

    function I() {
        this.O = this.O;
        this.ra = this.ra
    }
    I.prototype.O = !1;
    I.prototype.X = function() {
        return this.O
    };
    I.prototype.B = function() {
        this.O || (this.O = !0, this.V())
    };
    I.prototype.V = function() {
        if (this.ra)
            for (; this.ra.length;) this.ra.shift()()
    };
    /*
     Copyright (c) Microsoft Corporation. All rights reserved.
     Licensed under the Apache License, Version 2.0 (the "License"); you may not use
     this file except in compliance with the License. You may obtain a copy of the
     License at http://www.apache.org/licenses/LICENSE-2.0

     THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
     KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
     WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
     MERCHANTABLITY OR NON-INFRINGEMENT.

     See the Apache Version 2.0 License for specific language governing permissions
     and limitations under the License.
    */
    function vc(a) {
        this.methodName = a
    }
    var wc = new vc(15),
        xc = new vc(5);

    function yc(a, b) {
        return b[a.methodName] || function() {}
    };

    function zc() {
        this.b = function(a, b) {
            return void 0 === b ? !1 : b
        };
        this.a = function() {}
    }

    function Ac(a, b, c) {
        a.b = function(d, e) {
            return yc(xc, b)(d, e, c)
        };
        a.a = function() {
            yc(wc, b)(c)
        }
    }
    w(zc);

    function Bc(a) {
        var b = void 0 === b ? !1 : b;
        return zc.g().b(a, b)
    };

    function J(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }

    function Cc(a) {
        return a.right - a.left
    }

    function Dc(a) {
        return a.bottom - a.top
    }

    function Ec(a) {
        return new J(a.top, a.right, a.bottom, a.left)
    }
    J.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    J.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    J.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Fc(a, b, c) {
        b instanceof F ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
        return a
    };

    function Gc(a) {
        a = void 0 === a ? u : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    };

    function Hc(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        c && (d.referrerPolicy = "no-referrer");
        d.src = b;
        a.google_image_requests.push(d)
    }

    function Ic(a) {
        if (Jc()) Hc(window, a, !0);
        else {
            var b = u.document;
            if (b.body) {
                var c = b.getElementById("goog-srcless-iframe");
                c || (c = ic((new ac(b)).a, "IFRAME"), c.style.display = "none", c.id = "goog-srcless-iframe", b.body.appendChild(c));
                b = c
            } else b = null;
            b && b.contentWindow && Hc(b.contentWindow, a, !0)
        }
    }
    var Jc = Ma(function() {
        return "referrerPolicy" in u.document.createElement("img")
    });
    var Kc = {};

    function Lc(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        C && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function Mc(a, b) {
        var c = new F(0, 0),
            d = gc(H(a));
        if (!kb(d, "parent")) return c;
        do {
            if (d == b) {
                var e = a,
                    f = H(e);
                var g = new F(0, 0);
                var h = f ? H(f) : document;
                h = !C || 9 <= Number(Bb) || "CSS1Compat" == $b(h).a.compatMode ? h.documentElement : h.body;
                e != h && (e = Lc(e), f = fc($b(f).a), g.x = e.left + f.x, g.y = e.top + f.y)
            } else g = Lc(a), g = new F(g.left, g.top);
            c.x += g.x;
            c.y += g.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };

    function Nc(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function Oc() {
        var a = D.documentElement,
            b = K();
        try {
            if (D.createEvent) {
                var c = D.createEvent("CustomEvent");
                c.initCustomEvent("osd_load", !0, !0, "");
                a.dispatchEvent(c)
            } else if (Nc(b.CustomEvent)) {
                var d = new b.CustomEvent("osd_load", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: ""
                });
                a.dispatchEvent(d)
            } else if (Nc(b.Event)) {
                var e = new Event("osd_load", {
                    bubbles: !0,
                    cancelable: !0
                });
                a.dispatchEvent(e)
            }
        } catch (f) {}
    }

    function Pc() {
        var a = K();
        return "complete" === a.document.readyState || !!a.google_onload_fired
    }
    var Qc = !!window.google_async_iframe_id,
        Rc = Qc && window.parent || window;

    function K() {
        if (Qc && !pc(Rc)) {
            var a = "." + D.domain;
            try {
                for (; 2 < a.split(".").length && !pc(Rc);) D.domain = a = a.substr(a.indexOf(".") + 1), Rc = window.parent
            } catch (b) {}
            pc(Rc) || (Rc = window)
        }
        return Rc
    };

    function Sc(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                if (void 0 === c ? 0 : c) var f = (new G(e.innerWidth, e.innerHeight)).round();
                else {
                    var g = (e || window).document,
                        h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body;
                    f = (new G(h.clientWidth, h.clientHeight)).round()
                }
                d = f
            } catch (q) {
                d = new G(-12245933, -12245933)
            }
            a = d;
            var p = fc($b(b.document).a);
            if (-12245933 == a.width) {
                var m = a.width;
                var k = new J(m, m, m, m)
            } else k = new J(p.y, p.x + a.width, p.y + a.height, p.x);
            return k
        } catch (q) {
            return new J(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var Tc = {
        NONE: 0,
        Tb: 1
    };

    function Uc() {
        this.m = 0;
        this.c = !1;
        this.b = -1;
        this.a = !1;
        this.f = 0
    }
    Uc.prototype.isVisible = function() {
        return this.a ? .3 <= this.m : .5 <= this.m
    };
    var L = {
            Xa: 0,
            Vb: 1
        },
        Vc = {
            Xa: 0,
            ac: 1,
            bc: 2
        },
        Wc = {
            Xa: 0,
            Sb: 1,
            Ub: 2
        },
        Xc = {
            668123728: 0,
            668123729: 1
        },
        Yc = {
            NONE: 0,
            cc: 1,
            Wb: 2
        },
        Zc = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        };

    function $c() {
        this.a = null;
        this.f = !1;
        this.b = null
    }

    function M(a) {
        a.f = !0;
        return a
    }

    function ad(a, b) {
        a.b && x(b, function(c) {
            c = a.b[c];
            void 0 !== c && a.c(c)
        })
    }

    function bd(a) {
        $c.call(this);
        this.h = a
    }
    t(bd, $c);
    bd.prototype.c = function(a) {
        var b;
        if (!(b = null !== this.a)) {
            a: {
                b = this.h;
                for (c in b)
                    if (b[c] == a) {
                        var c = !0;
                        break a
                    }
                c = !1
            }
            b = !c
        }
        b || (this.a = a)
    };

    function cd() {
        $c.call(this)
    }
    t(cd, $c);
    cd.prototype.c = function(a) {
        null === this.a && "number" === typeof a && (this.a = a)
    };

    function dd() {
        this.a = {};
        this.b = {}
    }

    function N(a, b, c) {
        a.a[b] || (a.a[b] = new bd(c));
        return a.a[b]
    }

    function ed(a, b, c) {
        (a = a.a[b]) && a.c(c)
    }

    function O(a, b) {
        var c = a.b;
        if (null !== c && b in c) return a.b[b];
        if (a = a.a[b]) return a.a
    }

    function fd(a) {
        var b = {},
            c = Oa(a.a, function(d) {
                return d.f
            });
        Na(c, function(d, e) {
            d = void 0 !== a.b[e] ? String(a.b[e]) : d.f && null !== d.a ? String(d.a) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }

    function gd(a, b) {
        b = b.split("&");
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c].split("="),
                e = d[0];
            d = 1 < d.length ? parseInt(d[1], 10) : 1;
            isNaN(d) || (e = a.a[e]) && e.c(d)
        }
        return b.join("&")
    }

    function hd(a, b) {
        x(Ra(a.a), function(c) {
            return ad(c, b)
        })
    }

    function id(a, b) {
        b && "string" === typeof b && (b = b.match(/[&;?]eid=([^&;]+)/)) && 2 === b.length && (b = decodeURIComponent(b[1]).split(","), b = za(b, function(c) {
            return Number(c)
        }), hd(a, b))
    };
    var jd = !C && !db();

    function kd(a, b) {
        if (/-[a-z]/.test(b)) return null;
        if (jd && a.dataset) {
            if (!(!B("Android") || eb() || B("Firefox") || B("FxiOS") || B("Opera") || B("Silk") || b in a.dataset)) return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + hb(b))
    }

    function ld(a, b) {
        return /-[a-z]/.test(b) ? !1 : jd && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + hb(b)) : !!a.getAttribute("data-" + hb(b))
    };

    function md() {
        this.a = this.b = null;
        this.c = "no"
    };

    function nd(a, b) {
        this.b = (void 0 === a ? 0 : a) || 0;
        this.a = (void 0 === b ? "" : b) || ""
    }

    function od(a) {
        return !!a.b || !!a.a
    }
    nd.prototype.toString = function() {
        return this.b + (this.a ? "-" : "") + this.a
    };

    function P() {}
    P.prototype.a = function() {
        return 0
    };
    P.prototype.c = function() {
        return 0
    };
    P.prototype.f = function() {
        return 0
    };
    P.prototype.b = function() {
        return 0
    };

    function pd() {
        if (!qd()) throw Error();
    }
    t(pd, P);

    function qd() {
        return !(!E || !E.performance)
    }
    pd.prototype.a = function() {
        return qd() && E.performance.now ? E.performance.now() : P.prototype.a.call(this)
    };
    pd.prototype.c = function() {
        return qd() && E.performance.memory ? E.performance.memory.totalJSHeapSize || 0 : P.prototype.c.call(this)
    };
    pd.prototype.f = function() {
        return qd() && E.performance.memory ? E.performance.memory.usedJSHeapSize || 0 : P.prototype.f.call(this)
    };
    pd.prototype.b = function() {
        return qd() && E.performance.memory ? E.performance.memory.jsHeapSizeLimit || 0 : P.prototype.b.call(this)
    };

    function rd() {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[D.visibilityState || D.webkitVisibilityState || D.mozVisibilityState || ""] || 0
    };

    function sd() {}
    sd.prototype.isVisible = function() {
        return 1 === rd()
    };
    var td = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function ud() {
        var a = u,
            b = [],
            c = null;
        do {
            var d = a;
            if (pc(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else e = c, c = null;
            b.push(new vd(e || "", d));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
        d = u;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.ob = !0);
        return b
    }

    function wd(a, b) {
        this.a = a;
        this.b = b
    }

    function vd(a, b, c) {
        this.url = a;
        this.s = b;
        this.ob = !!c;
        this.depth = null
    };

    function xd() {
        this.c = "&";
        this.f = !1;
        this.b = {};
        this.h = 0;
        this.a = []
    }

    function yd(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function zd(a, b, c, d, e) {
        var f = [];
        qc(a, function(g, h) {
            (g = Ad(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Ad(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Ad(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(zd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Bd(a, b, c, d) {
        a.a.push(b);
        a.b[b] = yd(c, d)
    }

    function Cd(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Dd(a) - c.length;
        if (0 > d) return "";
        a.a.sort(function(k, q) {
            return k - q
        });
        c = null;
        for (var e = "", f = 0; f < a.a.length; f++)
            for (var g = a.a[f], h = a.b[g], p = 0; p < h.length; p++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var m = zd(h[p], a.c, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        b += m;
                        e = a.c;
                        break
                    }
                    a.f && (e = d, m[e - 1] == a.c && --e, b += m.substr(0, e), e = a.c, d = 0);
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function Dd(a) {
        var b = 1,
            c;
        for (c in a.b) b = c.length > b ? c.length : b;
        return 3997 - b - a.c.length - 1
    };

    function Ed() {
        this.b = new sd;
        this.a = qd() ? new pd : new P
    }
    Ed.prototype.setInterval = function(a, b) {
        return E.setInterval(a, b)
    };
    Ed.prototype.clearInterval = function(a) {
        E.clearInterval(a)
    };
    Ed.prototype.setTimeout = function(a, b) {
        return E.setTimeout(a, b)
    };
    Ed.prototype.clearTimeout = function(a) {
        E.clearTimeout(a)
    };

    function Fd(a) {
        Q();
        var b = K() || E;
        Hc(b, a, !1)
    }
    w(Ed);

    function Gd() {}

    function Q() {
        var a = Gd.g();
        if (!a.a) {
            if (!E) throw Error("Context has not been set and window is undefined.");
            a.a = Ed.g()
        }
        return a.a
    }
    w(Gd);

    function Hd(a) {
        this.h = null;
        a || (a = []);
        this.f = -1;
        this.a = a;
        a: {
            if (a = this.a.length) {
                --a;
                var b = this.a[a];
                if (!(null === b || "object" != typeof b || Array.isArray(b) || Mb && b instanceof Uint8Array)) {
                    this.c = a - -1;
                    this.b = b;
                    break a
                }
            }
            this.c = Number.MAX_VALUE
        }
    }
    va(Hd, Lb);

    function Id(a) {
        this.f = a;
        this.a = -1;
        this.b = this.c = 0
    }

    function Jd(a, b) {
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
            if (-1 < a.a) return b.apply(null, r(d));
            try {
                return a.a = a.f.a.a(), b.apply(null, r(d))
            } finally {
                a.c += a.f.a.a() - a.a, a.a = -1, a.b += 1
            }
        }
    };

    function Kd(a, b) {
        this.b = a;
        this.c = b;
        this.a = new Id(a)
    };

    function R() {
        this.h = void 0;
        this.c = this.l = 0;
        this.i = -1;
        this.a = new dd;
        M(N(this.a, "mv", Yc)).b = void 0 === Zc ? null : Zc;
        N(this.a, "omid", L);
        M(N(this.a, "epoh", L));
        M(N(this.a, "epph", L));
        M(N(this.a, "umt", L)).b = void 0 === Xc ? null : Xc;
        M(N(this.a, "phel", L));
        M(N(this.a, "phell", L));
        M(N(this.a, "oseid", uc));
        var a = this.a;
        a.a.sloi || (a.a.sloi = new cd);
        M(a.a.sloi);
        M(N(this.a, "xdi", L));
        M(N(this.a, "amp", L));
        M(N(this.a, "prf", L));
        M(N(this.a, "gtx", L));
        M(N(this.a, "mvp_lv", L));
        M(N(this.a, "eocm", L));
        M(N(this.a, "pnl", Vc));
        this.j = new Kd(Q(), this.a);
        this.b = null;
        this.f = !1
    }

    function Ld() {
        return R.g().j
    }
    w(R);

    function Md() {
        var a = "https:";
        E && E.location && "http:" === E.location.protocol && (a = "http:");
        this.b = a;
        this.a = .01;
        this.c = Math.random()
    }

    function Nd(a, b, c, d, e) {
        if ((d ? a.c : Math.random()) < (e || a.a)) try {
            if (c instanceof xd) var f = c;
            else f = new xd, qc(c, function(h, p) {
                var m = f,
                    k = m.h++;
                h = yd(p, h);
                m.a.push(k);
                m.b[k] = h
            });
            var g = Cd(f, a.b, "/pagead/gen_204?id=" + b + "&");
            g && Fd(g)
        } catch (h) {}
    };

    function Od(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Pd = null;

    function Qd() {
        var a = u.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }

    function Rd() {
        var a = void 0 === a ? u : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Sd(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var S = u.performance,
        Td = !!(S && S.mark && S.measure && S.clearMarks),
        Ud = Ma(function() {
            var a;
            if (a = Td) {
                var b;
                if (null === Pd) {
                    Pd = "";
                    try {
                        a = "";
                        try {
                            a = u.top.location.hash
                        } catch (c) {
                            a = u.location.hash
                        }
                        a && (Pd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Pd;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Vd() {
        var a = K();
        this.b = [];
        this.c = a || u;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.a = Ud() || (null != b ? b : 1 > Math.random())
    }

    function Wd(a) {
        a && S && Ud() && (S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Vd.prototype.start = function(a, b) {
        if (!this.a) return null;
        var c = Rd() || Qd();
        a = new Sd(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        S && Ud() && S.mark(b);
        return a
    };

    function Xd() {
        var a = Yd;
        this.i = Zd;
        this.h = "jserror";
        this.f = !0;
        this.b = null;
        this.j = this.c;
        this.a = void 0 === a ? null : a
    }

    function $d(a, b, c) {
        return Jd(Ld().a, function() {
            try {
                if (a.a && a.a.a) {
                    var d = a.a.start(b.toString(), 3);
                    var e = c();
                    var f = a.a,
                        g = d;
                    if (f.a && "number" === typeof g.value) {
                        var h = Rd() || Qd();
                        g.duration = h - g.value;
                        var p = "goog_" + g.label + "_" + g.uniqueId + "_end";
                        S && Ud() && S.mark(p);
                        !f.a || 2048 < f.b.length || f.b.push(g)
                    }
                } else e = c()
            } catch (m) {
                f = a.f;
                try {
                    Wd(d), f = a.j(b, new ae(be(m)), void 0, void 0)
                } catch (k) {
                    a.c(217, k)
                }
                if (!f) throw m;
            }
            return e
        })()
    }

    function ce(a, b) {
        var c = de;
        return Jd(Ld().a, function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            return $d(c, a, function() {
                return b.apply(void 0, e)
            })
        })
    }
    Xd.prototype.c = function(a, b, c, d, e) {
        e = e || this.h;
        try {
            var f = new xd;
            f.f = !0;
            Bd(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new ae(be(b)));
            b.msg && Bd(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.b) try {
                this.b(g)
            } catch (v) {}
            if (d) try {
                d(g)
            } catch (v) {}
            b = [g];
            f.a.push(3);
            f.b[3] = b;
            var h = ud(),
                p = new vd(u.location.href, u, !1);
            b = null;
            var m = h.length - 1;
            for (d = m; 0 <= d; --d) {
                var k = h[d];
                !b && td.test(k.url) && (b = k);
                if (k.url && !k.ob) {
                    p = k;
                    break
                }
            }
            k = null;
            var q = h.length && h[m].url;
            0 != p.depth && q && (k = h[m]);
            var n = new wd(p, k);
            n.b && Bd(f, 4, "top", n.b.url || "");
            Bd(f, 5, "url", n.a.url || "");
            Nd(this.i, e, f, !1, c)
        } catch (v) {
            try {
                Nd(this.i, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: be(v),
                    url: n && n.a.url
                }, !1, c)
            } catch (Ca) {}
        }
        return this.f
    };

    function be(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    }

    function ae(a) {
        Od.call(this, Error(a), {
            message: a
        })
    }
    t(ae, Od);
    var Zd, de, Yd = new Vd;

    function ee() {
        var a = K();
        a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (a = Yd, a.a = !1, a.b != a.c.google_js_reporting_queue && (Ud() && x(a.b, Wd), a.b.length = 0))
    }(function() {
        Zd = new Md;
        de = new Xd;
        var a = K();
        a && a.document && ("complete" == a.document.readyState ? ee() : Yd.a && Wb(a, "load", function() {
            ee()
        }))
    })();

    function fe(a) {
        de.b = function(b) {
            x(a, function(c) {
                c(b)
            })
        }
    }

    function ge(a, b) {
        return $d(de, a, b)
    }

    function he(a, b) {
        return ce(a, b)
    }

    function ie(a, b) {
        Nd(Zd, a, b, "jserror" != a, void 0)
    }

    function je(a, b, c, d) {
        de.c(a, b, c, d)
    };
    var ke = Date.now(),
        le = -1,
        me = -1,
        ne = !1;

    function T() {
        return Date.now() - ke
    }

    function oe() {
        var a = R.g().h,
            b = 0 <= me ? T() - me : -1,
            c = ne ? T() - le : -1;
        if (947190542 == a) return 100;
        if (79463069 == a) return 200;
        a = [2E3, 4E3];
        var d = [250, 500, 1E3];
        je(637, Error(), .001);
        var e = b; - 1 != c && c < b && (e = c);
        for (b = 0; b < a.length; ++b)
            if (e < a[b]) {
                var f = d[b];
                break
            }
        void 0 === f && (f = d[a.length]);
        return f
    };

    function pe(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, pc(a) && (c = a, b = d);
        return {
            s: c,
            level: b
        }
    };
    var Qa = {
        Rb: "addEventListener",
        Xb: "getMaxSize",
        Yb: "getScreenSize",
        Zb: "getState",
        $b: "getVersion",
        hc: "removeEventListener",
        dc: "isViewable"
    };

    function qe(a) {
        var b = a !== a.top,
            c = a.top === pe(a).s,
            d = -1,
            e = 0;
        if (b && c && a.top.mraid) {
            d = 3;
            var f = a.top.mraid
        } else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
        f && (f.IS_GMA_SDK || (e = 2), Pa(function(g) {
            return ra(f[g])
        }) || (e = 1));
        return {
            G: f,
            va: e,
            Ob: d
        }
    };

    function re(a) {
        a = Gc(a);
        return !(!a || !a.observeIntersection)
    }

    function se(a) {
        return (a = a.document) && ra(a.elementFromPoint)
    };
    if (D && D.URL) {
        var te, tc = D.URL;
        te = !!tc && 0 < sc().length;
        de.f = !te
    }

    function ue(a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        c = ce(d, c);
        Wb(a, b, c, {
            capture: e
        });
        return c
    }

    function ve(a) {
        var b = ["IMG", "FRAME", "IFRAME"];
        return Ba(b, function(c) {
            return a.nodeName == String(c)
        }) ? [a] : Aa(b, function(c, d) {
            return c.concat(Ia((a || document).getElementsByTagName(String(d))))
        }, [])
    }

    function we(a, b) {
        if (a) {
            var c = 0,
                d = null;
            a = ve(a);
            for (var e = 0; e < a.length; e++) {
                var f = !1;
                d = a[e];
                switch (d.nodeName) {
                    case "IMG":
                        var g = d;
                        if (g.complete || g.naturalWidth) f = !0;
                        break;
                    case "FRAME":
                    case "IFRAME":
                        g = d;
                        try {
                            if (g.readyState) f = "complete" == g.readyState;
                            else {
                                var h = g.contentWindow || g.contentDocument;
                                h.document && (h = h.document);
                                f = h && h.readyState ? "complete" == h.readyState : !1
                            }
                        } catch (p) {
                            f = !1
                        }
                }
                f || (c++, ue(d, "load", function() {
                    c--;
                    c || b(null)
                }, 130))
            }
            a = d = null;
            !c && b(null)
        }
    };

    function xe(a) {
        var b = [];
        Na(a, function(c, d) {
            d = encodeURIComponent(d);
            "string" === typeof c && (c = encodeURIComponent(c));
            b.push(d + "=" + c)
        });
        b.push("24=" + Date.now());
        return b.join("\n")
    };
    var ye = 0;

    function ze(a) {
        var b = Math.pow(10, 2);
        return Math.floor(a * b) / b
    }

    function Ae(a, b) {
        try {
            ye++, b.postMessage(a, "*")
        } catch (c) {}
    }

    function Be(a, b) {
        b && (a(b), b.frames && x(b.frames, function(c) {
            Be(a, c)
        }))
    }

    function Ce(a) {
        return new J(a.top, a.right, a.bottom, a.left)
    }

    function De() {
        var a = Q().b;
        return 0 === rd() ? -1 : a.isVisible() ? 0 : 1
    }

    function Ee(a) {
        return [a.top, a.left, a.bottom, a.right].join("-")
    }

    function Fe(a, b, c) {
        if (b && a)
            if (c && 0 < c.length)
                for (c = ya(c, function(e) {
                        var f = e.parent && e.parent !== e;
                        return e === E.top || f
                    }), a = ea(c), c = a.next(); !c.done; c = a.next()) Ae(b, c.value);
            else {
                c = [];
                var d = lc(a);
                d && c.push(d);
                if (0 === c.length) try {
                    c = za(cc(document, "IFRAME".toString().toLowerCase(), void 0, a), function(e) {
                        return lc(e)
                    })
                } catch (e) {}
                a = ea(c);
                for (c = a.next(); !c.done; c = a.next()) {
                    c = c.value;
                    try {
                        b && Be(ta(Ae, b), c)
                    } catch (e) {}
                }
            }
    }

    function Ge(a, b, c) {
        try {
            var d = xe(b);
            Fe(a, d, c)
        } catch (e) {}
    };

    function He() {
        var a = A;
        return a ? Ba("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
            return z(a, b)
        }) || z(a, "OMI/") && !z(a, "XiaoMi/") ? !0 : z(a, "Presto") && z(a, "Linux") && !z(a, "X11") && !z(a, "Android") && !z(a, "Mobi") : !1
    }

    function Ie() {
        var a = A;
        return z(a, "AppleTV") || z(a, "Apple TV") || z(a, "CFNetwork") || z(a, "tvOS")
    }

    function Je() {
        var a = A;
        return z(a, "sdk_google_atv_x86") || z(a, "Android TV")
    };

    function U() {
        this.b = !pc(E.top);
        this.A = !this.b || re(E);
        this.i = nc() || !nc() && (B("iPod") || B("iPhone") || B("Android") || B("IEMobile"));
        var a = ud();
        a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(oc)[3] || null) ? decodeURI(a) : a) || "" : "";
        this.domain = a;
        this.a = new J(0, 0, 0, 0);
        this.j = new G(0, 0);
        this.h = new G(0, 0);
        this.c = new J(0, 0, 0, 0);
        this.l = new F(0, 0);
        this.w = this.o = !1;
        this.f = !(!E || !qe(E).G);
        Ke(this)
    }

    function Le(a, b) {
        b && b.screen && (a.j = new G(b.screen.width, b.screen.height))
    }

    function Me(a, b) {
        var c = a.a ? new G(Cc(a.a), Dc(a.a)) : new G(0, 0);
        b = void 0 === b ? E : b;
        null !== b && b != b.top && (b = b.top);
        var d = 0,
            e = 0;
        try {
            var f = b.document,
                g = f.body,
                h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
            else {
                var p = h.scrollHeight,
                    m = h.scrollWidth,
                    k = h.offsetHeight,
                    q = h.offsetWidth;
                h.clientHeight != k && (p = g.scrollHeight, m = g.scrollWidth, k = g.offsetHeight, q = g.offsetWidth);
                p > c.height ? p > k ? (d = p, e = m) : (d = k, e = q) : p < k ? (d = p, e = m) : (d = k, e = q)
            }
            var n = new G(e, d)
        } catch (v) {
            n = new G(-12245933, -12245933)
        }
        a.h = n
    }

    function Ke(a) {
        E && E.document && (a.c = Sc(!1, E, a.i), a.a = Sc(!0, E, a.i), Me(a, E), Le(a, E))
    }

    function Ne() {
        if (U.g().w) return !0;
        var a = Q().b.isVisible(),
            b = 0 === rd();
        return a || b
    }
    w(U);
    var Oe = new J(0, 0, 0, 0);

    function Pe(a, b) {
        b = Qe(b);
        return 0 === b ? 0 : Qe(a) / b
    }

    function Qe(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }

    function Re(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b) return !0;
            try {
                a: {
                    var d = void 0;
                    if (Zb && !(C && yb("9") && !yb("10") && u.SVGElement && a instanceof u.SVGElement) && (d = a.parentElement)) {
                        var e = d;
                        break a
                    }
                    d = a.parentNode;e = sa(d) && 1 == d.nodeType ? d : null
                }
                if (a = e || a) {
                    var f = H(a),
                        g = f && gc(f),
                        h = g && g.frameElement;
                    h && (a = h)
                }
            }
            catch (p) {
                break
            }
        }
        return !1
    }

    function Se(a, b, c) {
        if (!a || !b) return !1;
        b = Fc(Ec(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        var d = K();
        pc(d.top) && d.top && d.top.document && (d = d.top);
        if (!se(d)) return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = H(c)) && b.defaultView && b.defaultView.frameElement) && Re(b, a);
        d = a === c;
        a = !d && a && mc(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function Te(a, b, c, d) {
        return U.g().b ? !1 : 0 >= Cc(a) || 0 >= Dc(a) ? !0 : c && d ? ge(208, function() {
            return Se(a, b, c)
        }) : !1
    };

    function Ue(a, b, c) {
        var d = new J(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.c = b;
        this.a = d;
        this.b = c
    };

    function Ve(a, b, c, d, e, f, g) {
        this.j = a;
        this.i = b;
        this.c = c;
        this.a = d;
        this.h = e;
        this.b = f;
        this.f = g
    };

    function We(a) {
        this.c = a;
        this.b = 0;
        this.a = null
    }
    We.prototype.cancel = function() {
        Q().clearTimeout(this.a);
        this.a = null
    };

    function Xe(a) {
        var b = Q();
        a.a = b.setTimeout(Jd(Ld().a, he(143, function() {
            a.b++;
            a.c.Ab()
        })), oe())
    };

    function V(a, b, c) {
        this.s = a;
        this.O = void 0 === c ? "na" : c;
        this.f = [];
        this.o = !1;
        this.c = new Ue(-1, !0, this);
        this.a = this;
        this.i = b;
        this.w = this.l = !1;
        this.D = "uk";
        this.F = !1;
        this.j = !0
    }
    l = V.prototype;
    l.Z = function() {
        return !1
    };
    l.Oa = function() {
        return this.o = !0
    };
    l.W = function() {
        return this.a.D
    };
    l.fa = function() {
        return this.a.w
    };

    function Ye(a, b, c) {
        if (!a.w || (void 0 === c ? 0 : c)) a.w = !0, a.D = b, a.i = 0, a.a != a || Ze(a)
    }
    l.u = function() {
        return this.a.O
    };
    l.L = function() {
        return this.a.ib()
    };
    l.ib = function() {
        return {}
    };
    l.M = function() {
        return this.a.i
    };

    function $e(a, b) {
        Ga(a.f, b) || (a.f.push(b), b.ea(a.a), b.R(a.c), b.S() && (a.l = !0))
    }
    l.Sa = function() {
        var a = U.g();
        a.a = Sc(!0, this.s, a.i)
    };
    l.Ta = function() {
        Le(U.g(), this.s)
    };
    l.tb = function() {
        Me(U.g(), this.s)
    };
    l.ub = function() {
        var a = U.g();
        a.c = Sc(!1, this.s, a.i)
    };
    l.Ma = function() {
        return this.c.a
    };

    function af(a) {
        a = a.a;
        a.Ta();
        a.Sa();
        a.ub();
        a.tb();
        a.c.a = a.Ma()
    }
    l.Ab = function() {};

    function bf(a) {
        a.l = a.f.length ? Ba(a.f, function(b) {
            return b.S()
        }) : !1
    }

    function cf(a) {
        var b = Ia(a.f);
        x(b, function(c) {
            c.R(a.c)
        })
    }

    function Ze(a) {
        var b = Ia(a.f);
        x(b, function(c) {
            c.ea(a.a)
        });
        a.a != a || cf(a)
    }
    l.ea = function(a) {
        var b = this.a;
        this.a = a.M() >= this.i ? a : this;
        b !== this.a ? (this.j = this.a.j, Ze(this)) : this.j !== this.a.j && (this.j = this.a.j, Ze(this))
    };
    l.R = function(a) {
        if (a.b === this.a) {
            var b = this.c,
                c = this.l;
            if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.c == a.c) b = b.a, c = a.a, c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
            this.c = a;
            !c && cf(this)
        }
    };
    l.S = function() {
        return this.l
    };
    l.B = function() {
        this.F = !0
    };
    l.X = function() {
        return this.F
    };

    function df(a, b, c, d) {
        this.c = a;
        this.a = new J(0, 0, 0, 0);
        this.l = new J(0, 0, 0, 0);
        this.b = b;
        this.D = c;
        this.F = d;
        this.C = !1;
        this.timestamp = -1;
        this.h = new Ve(b.c, this.a, new J(0, 0, 0, 0), 0, 0, T(), 0)
    }
    l = df.prototype;
    l.Aa = function() {
        return !0
    };
    l.H = function() {};
    l.La = function() {
        if (this.c) {
            var a = this.c,
                b = this.b.a.s;
            try {
                try {
                    var c = Ce(a.getBoundingClientRect())
                } catch (m) {
                    c = new J(0, 0, 0, 0)
                }
                var d = c.right - c.left,
                    e = c.bottom - c.top,
                    f = Mc(a, b),
                    g = f.x,
                    h = f.y;
                var p = new J(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
            } catch (m) {
                p = Ec(Oe)
            }
            this.a = p
        }
    };
    l.bb = function() {
        this.l = this.b.c.a
    };
    l.P = function() {
        this.La();
        this.h = new Ve(this.b.c, this.a, this.h.c, this.h.a, this.h.h, T(), this.h.f)
    };
    l.B = function() {
        if (!this.X()) {
            var a = this.b,
                b = a.f,
                c = xa(b, this);
            0 <= c && Array.prototype.splice.call(b, c, 1);
            a.l && this.S() && bf(a);
            this.H();
            this.C = !0
        }
    };
    l.X = function() {
        return this.C
    };
    l.L = function() {
        return this.b.L()
    };
    l.M = function() {
        return this.b.M()
    };
    l.W = function() {
        return this.b.W()
    };
    l.fa = function() {
        return this.b.fa()
    };
    l.ea = function() {};
    l.R = function() {
        this.P()
    };
    l.S = function() {
        return this.F
    };

    function ef(a) {
        this.h = !1;
        this.a = a;
        this.f = oa
    }
    l = ef.prototype;
    l.M = function() {
        return this.a.M()
    };
    l.W = function() {
        return this.a.W()
    };
    l.fa = function() {
        return this.a.fa()
    };
    l.create = function(a, b, c) {
        var d = null;
        this.a && (d = this.wa(a, b, c), $e(this.a, d));
        return d
    };
    l.Ra = function() {
        return this.Y()
    };
    l.Y = function() {
        return !1
    };
    l.mb = function(a) {
        return this.a.Oa() ? ($e(this.a, this), this.f = a, !0) : !1
    };
    l.ea = function(a) {
        0 == a.M() && this.f(a.W(), this)
    };
    l.R = function() {};
    l.S = function() {
        return !1
    };
    l.B = function() {
        this.h = !0
    };
    l.X = function() {
        return this.h
    };
    l.L = function() {
        return {}
    };

    function ff(a, b, c) {
        this.c = void 0 === c ? 0 : c;
        this.b = a;
        this.a = null == b ? "" : b
    }

    function gf(a) {
        switch (Math.trunc(a.c)) {
            case -16:
                return -16;
            case -8:
                return -8;
            case 0:
                return 0;
            case 8:
                return 8;
            case 16:
                return 16;
            default:
                return 16
        }
    }

    function hf(a, b) {
        return a.c < b.c ? !0 : a.c > b.c ? !1 : a.b < b.b ? !0 : a.b > b.b ? !1 : typeof a.a < typeof b.a ? !0 : typeof a.a > typeof b.a ? !1 : a.a < b.a
    };

    function jf() {
        this.c = 0;
        this.a = [];
        this.b = !1
    }
    jf.prototype.add = function(a, b, c) {
        ++this.c;
        a = new ff(a, b, c);
        this.a.push(new ff(a.b, a.a, a.c + this.c / 4096));
        this.b = !0;
        return this
    };

    function kf(a, b) {
        x(b.a, function(c) {
            a.add(c.b, c.a, gf(c))
        })
    }

    function lf(a, b) {
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        qc(b, function(e, f) {
            d && void 0 === e || a.add(f, e, c)
        })
    }

    function mf(a) {
        var b = nf;
        a.b && (Ja(a.a, function(c, d) {
            return hf(d, c) ? 1 : hf(c, d) ? -1 : 0
        }), a.b = !1);
        return Aa(a.a, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    };

    function nf(a) {
        var b = a.b;
        a = a.a;
        return "" === a ? b : "boolean" === typeof a ? a ? b : "" : "array" == pa(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Ga(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };

    function of (a) {
        var b = void 0 === b ? !0 : b;
        this.a = new jf;
        void 0 !== a && kf(this.a, a);
        b && this.a.add("v", Tb, -16)
    } of .prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = mf(this.a);
        0 < b.length && (a += "?" + b);
        return a
    };

    function pf(a) {
        var b = [],
            c = [];
        Na(a, function(d, e) {
            if (!(e in Object.prototype) && "undefined" != typeof d) switch ("array" == pa(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                    b.unshift(d);
                    break;
                case "req":
                case "url":
                case "referrer":
                case "iframe_loc":
                    c.push(d);
                    break;
                default:
                    b.push(d)
            }
        });
        return b.concat(c)
    }

    function qf() {
        if (Tb && "unreleased" !== Tb) return Tb
    };

    function rf() {
        this.a = 0
    }
    w(rf);

    function sf(a) {
        this.o = a;
        this.l = !1
    }
    sf.prototype.i = function(a, b) {
        this.a = a;
        this.b = b
    };

    function tf() {
        sf.call(this, "capability")
    }
    t(tf, sf);
    tf.prototype.j = function() {
        return !0
    };
    tf.prototype.h = function() {
        var a = {};
        return a.b_name = this.a.U, a.v_name = this.b.U, a
    };

    function uf() {
        sf.call(this, "diff")
    }
    t(uf, sf);
    uf.prototype.j = function() {
        return !(.02 >= Math.abs(this.b.m - this.a.m))
    };
    uf.prototype.h = function() {
        var a = {};
        return a.b_name = this.a.U, a.v_name = this.b.U, a.b_vp_off = JSON.stringify(this.a.I), a.v_vp_off = JSON.stringify(this.b.I), a.b_vp_sz = JSON.stringify(this.a.Wa), a.v_vp_sz = JSON.stringify(this.b.Wa), a.b_exp = this.a.m, a.v_exp = this.b.m, a.efp_occ = this.a.Db, a.sbv = this.a.ha, a
    };

    function vf() {
        sf.call(this, "capt");
        this.f = [];
        this.c = []
    }
    t(vf, sf);
    vf.prototype.i = function(a, b) {
        sf.prototype.i.call(this, a, b);
        20 <= this.c.length || (this.f.push(a.m), this.c.push(b.m))
    };
    vf.prototype.j = function() {
        return 20 === this.c.length
    };
    vf.prototype.h = function() {
        var a = wf(this.f, this.c),
            b = xf(this.f, this.c),
            c = {};
        return c.b_name = this.a.U, c.v_name = this.b.U, c.b_exp = this.f.join(","), c.v_exp = this.c.join(","), c.diff = a, c.diff_buckets = b, c
    };

    function wf(a, b) {
        return Da(La(a, b), function(c) {
            return c[0] !== c[1]
        })
    }

    function xf(a, b) {
        function c(d) {
            return .25 * Math.floor(d / .25)
        }
        return wf(za(a, c), za(b, c))
    };

    function yf(a, b, c, d, e) {
        e = void 0 === e ? [new tf, new uf, new vf] : e;
        I.call(this);
        this.a = a.wa(b, c, this.S());
        this.a.Aa();
        this.c = e;
        this.b = d
    }
    t(yf, I);
    yf.prototype.V = function() {
        this.a && (this.a.H(), this.a.B())
    };

    function zf(a, b, c) {
        x(a.c, function(d) {
            var e = a.b;
            if (!d.l && (d.i(b, c), d.j())) {
                d.l = !0;
                var f = d.h(),
                    g = new jf;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.o);
                d = rf.g();
                g.add("i", d.a++);
                g.add("adk", e);
                lf(g, f);
                e = new of (g);
                var h = void 0 === h ? 4E3 : h;
                e = e.toString();
                /&v=[^&]+/.test(e) || (e = (f = qf()) ? e + "&v=" + encodeURIComponent(f) : e);
                e = e.substring(0, h);
                Fd(e)
            }
        })
    }
    yf.prototype.R = function() {};
    yf.prototype.ea = function() {};
    yf.prototype.S = function() {
        return !1
    };

    function Af() {
        this.a = this.b = this.c = 0
    }

    function Bf(a, b, c, d) {
        b && (a.c += c, a.b += c, a.a = Math.max(a.a, a.b));
        if (void 0 === d ? !b : d) a.b = 0
    };
    var Cf = [1, .75, .5, .3, 0];

    function Df(a) {
        this.a = a = void 0 === a ? Cf : a;
        this.b = za(this.a, function() {
            return new Af
        })
    }

    function Ef(a) {
        return Ff(a, function(b) {
            return b.c
        }, !1)
    }

    function Gf(a) {
        return Ff(a, function(b) {
            return b.a
        }, !0)
    }

    function Hf(a, b, c, d, e, f) {
        var g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.a.length; f++) {
            var h = a.a[f],
                p = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            Bf(a.b[f], g && p, e, !g || h)
        }
    }

    function Ff(a, b, c) {
        a = za(a.b, function(d) {
            return b(d)
        });
        return c ? a : If(a)
    }

    function If(a) {
        return za(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    };

    function Jf() {
        this.a = new Df;
        this.c = new Af;
        this.b = -1;
        this.f = new Df([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
    }

    function W(a) {
        return 1E3 <= a.c.a
    };
    var Kf = new J(0, 0, 0, 0);

    function Lf(a, b, c) {
        I.call(this);
        this.Qb = Ec(Kf);
        this.c = new Jf;
        this.ma = -2;
        this.Cb = -1;
        this.ka = b;
        this.ja = null;
        this.K = !1;
        this.I = null;
        this.ba = -1;
        this.sa = c;
        this.Eb = this.Ia = oa;
        this.b = new md;
        this.b.b = a;
        this.b.a = a;
        this.o = !1;
        this.i = {
            Ca: null,
            Ba: null
        };
        this.ca = !0;
        this.F = null;
        this.Ha = !1;
        R.g().l++;
        this.f = new Uc;
        this.Bb = this.ua = -1;
        this.Ga = 0;
        this.$ = -1;
        this.a = null;
        this.Ka = new J(0, 0, 0, 0);
        this.wb = !1;
        a = this.h = new dd;
        N(a, "od", Tc);
        M(N(a, "opac", L));
        M(N(a, "sbeos", L));
        M(N(a, "prf", L));
        M(N(a, "mwt", L));
        N(a, "iogeo", L);
        M(N(a, "osddt", L));
        M(N(a, "nrl", L));
        M(N(a, "nrls", Wc));
        (a = this.b.b) && a.getAttribute && ld(a, "googleAvInapp") && (U.g().f = !0);
        1 == this.sa ? ed(this.h, "od", 1) : ed(this.h, "od", 0)
    }
    t(Lf, I);
    l = Lf.prototype;
    l.V = function() {
        Mf(this);
        this.F && this.F.B();
        this.a && this.a.B();
        delete this.c;
        delete this.Ia;
        delete this.Eb;
        delete this.b.b;
        delete this.b.a;
        delete this.i;
        delete this.F;
        delete this.a;
        delete this.h;
        I.prototype.V.call(this)
    };

    function Nf(a) {
        return a.a ? a.a.a : a.Qb
    }
    l.za = function(a) {
        var b = R.g();
        "string" === typeof a && 0 != a.length && gd(b.a, a)
    };
    l.sb = function() {
        return !1
    };
    l.T = function() {
        this.K = !0
    };
    l.ya = function() {
        return this.K
    };
    l.Ua = function() {
        this.f.m = 0
    };

    function Of(a, b) {
        if (a.a) {
            if (b.u() === a.a.u()) return;
            a.a.B();
            a.a = null
        }
        b = b.create(a.b.a, a.h, a.sb());
        if (b = null != b && b.Aa() ? b : null) a.a = b
    }

    function Pf(a, b, c) {
        if (a.a) {
            a.a.P();
            var d = a.a.h,
                e = d.j,
                f = e.a;
            if (null != d.c) {
                var g = d.i;
                a.I = new F(g.left - f.left, g.top - f.top);
                a.Ka = d.c
            }
            f = a.ha() ? Math.max(d.a, d.h) : d.a;
            g = {};
            null !== e.volume && (g.volume = e.volume);
            e = 1 === O(a.h, "osddt");
            "exc" == a.a.u() && (e = !0);
            "nis" == a.a.u() && (e = !0);
            "gsv" == a.a.u() && (e = !0);
            "nio" == a.a.u() && (e = !0);
            "geo" == a.a.u() && (e = !0);
            "aio" == a.a.u() && (e = !0);
            e ? (a.ja && -1 != a.ka && -1 !== d.b && -1 !== a.ja.b ? (e = d.b - a.ja.b, e = 1E4 < e ? 0 : e) : e = 0, a.ja = d, a.Da(f, b, c, !1, g, e, d.f)) : (-1 == a.ka ? e = 0 : (e = b - a.ka, e = 1E4 < e ? 0 : e), a.Da(f, b, c, !1, g, e, d.f))
        }
    }

    function Qf(a) {
        if (a.ya() && a.F) {
            var b = 1 == O(a.h, "od"),
                c = U.g().a,
                d = a.F,
                e = new G(Cc(c), Dc(c));
            c = a.ha();
            a = {
                U: a.a ? a.a.u() : "ns",
                I: a.I,
                Wa: e,
                ha: c,
                m: a.f.m,
                Db: b
            };
            if (b = d.a) {
                b.P();
                e = b.h;
                var f = e.j.a,
                    g = null,
                    h = null;
                null != e.c && f && (g = e.i, g = new F(g.left - f.left, g.top - f.top), h = new G(f.right - f.left, f.bottom - f.top));
                c = {
                    U: b.u(),
                    I: g,
                    Wa: h,
                    ha: c,
                    Db: !1,
                    m: c ? Math.max(e.a, e.h) : e.a
                }
            } else c = null;
            c && zf(d, a, c)
        }
    }
    l.Da = function(a, b, c, d, e, f, g) {
        this.o || (this.ya() && (e = new Uc, e.c = c, e.b = De(), e.m = 0 === this.ba && 1 === O(this.h, "opac") ? 0 : a, e.a = this.ga(), e.f = g, a = this.c, g = this.f, d = d && this.f.m >= (this.ga() ? .3 : .5), a.b = Math.max(a.b, e.m), Hf(a.f, e.f, g.f, e.c, f, d), Hf(a.a, e.m, g.m, e.c, f, d), d = d || g.a != e.a ? g.isVisible() && e.isVisible() : g.isVisible(), g = !e.isVisible() || e.c, Bf(a.c, d, f, g), this.ka = b, 0 < e.m && (-1 === this.ua && (this.ua = b), this.Bb = b), -1 == this.Cb && W(this.c) && (this.Cb = b), -2 == this.ma && (this.ma = Qe(Nf(this)) ? e.m : -1), this.f = e, c && (this.f.m = 0)), this.Ia(this))
    };
    l.ga = function() {
        return !1
    };
    l.ha = function() {
        return this.wb || this.Ha
    };

    function Rf(a) {
        a.b.a && (a.i.Ca = ue(a.b.a, "mouseover", function() {
            a.$ = T()
        }, 149), a.i.Ba = ue(a.b.a, "mouseout", function() {
            var b = T(); - 1 == a.$ || b < a.$ || (a.Ga += b - a.$);
            a.$ = -1
        }, 150))
    }

    function Mf(a) {
        a.b.a && (a.i.Ca && (Xb(a.b.a, "mouseover", a.i.Ca), a.i.Ca = null), a.i.Ba && (Xb(a.b.a, "mouseout", a.i.Ba), a.i.Ba = null))
    };

    function Sf() {
        Tf(this)
    }

    function Tf(a) {
        !a.a && ra(E.Goog_AdSense_getAdAdapterInstance) && (a.a = Goog_AdSense_getAdAdapterInstance());
        !a.b && ra(E.Goog_Common_getAdAdapterInstance) && (a.b = Goog_Common_getAdAdapterInstance());
        !a.c && bc() && (a.c = !0)
    }

    function Uf(a, b, c, d) {
        Tf(a);
        var e = U.g().o;
        a.a && a.a.getNewBlocks(b, e);
        a.b && a.b.getNewBlocks(b, e);
        a.c && !c() && (d(!0), b(bc(), "", 13, !0))
    }

    function Vf(a) {
        Tf(a);
        return (a.a ? a.a.numBlocks() : 0) + (a.b ? a.b.numBlocks() : 0) + (a.c ? 1 : 0)
    }

    function Wf(a) {
        Tf(a);
        return a.a ? a.a.getOseId() : a.b ? a.b.getOseId() : 0
    };

    function Xf(a) {
        return db() ? (a = (a = H(a)) && gc(a), !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0])) : !0
    };
    var Yf = "StopIteration" in u ? u.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function Zf() {}
    Zf.prototype.next = function() {
        throw Yf;
    };
    Zf.prototype.Ya = function() {
        return this
    };

    function $f(a) {
        if (a instanceof Zf) return a;
        if ("function" == typeof a.Ya) return a.Ya(!1);
        if (qa(a)) {
            var b = 0,
                c = new Zf;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw Yf;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function ag(a, b) {
        if (qa(a)) try {
            x(a, b, void 0)
        } catch (c) {
            if (c !== Yf) throw c;
        } else {
            a = $f(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== Yf) throw c;
            }
        }
    }

    function bg(a, b) {
        var c = 1;
        ag(a, function(d) {
            c = b.call(void 0, c, d)
        });
        return c
    }

    function cg(a, b) {
        var c = $f(a);
        a = new Zf;
        a.next = function() {
            var d = c.next();
            if (b.call(void 0, d, void 0, c)) return d;
            throw Yf;
        };
        return a
    }

    function dg(a) {
        var b = $f(a);
        a = new Zf;
        var c = 100;
        a.next = function() {
            if (0 < c--) return b.next();
            throw Yf;
        };
        return a
    };

    function eg(a, b) {
        this.c = b;
        this.b = null == a;
        this.a = a
    }
    t(eg, Zf);
    eg.prototype.next = function() {
        if (this.b) throw Yf;
        var a = this.a || null;
        this.b = null == a;
        var b;
        if (b = a) {
            b = this.c;
            if (kb(a, "parentElement") && null != a.parentElement && a != a.parentElement) var c = a.parentElement;
            else if (b) {
                var d = void 0 === d ? Xf : d;
                if (d(a)) try {
                    var e = H(a),
                        f = e && gc(e),
                        g = f && f.frameElement;
                    c = null == g ? null : g
                } catch (h) {
                    c = null
                } else c = null
            } else c = null;
            b = c
        }
        this.a = b;
        return a
    };

    function fg(a) {
        var b = 1;
        a = dg(new eg(a, !0));
        a = cg(a, function() {
            return 0 < b
        });
        return bg(a, function(c, d) {
            var e = 1;
            if (kb(d, "style") && d.style) {
                var f = parseFloat;
                a: {
                    var g = H(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                if (!g) {
                    g = d.style[gb()];
                    if ("undefined" !== typeof g) d = g;
                    else {
                        g = d.style;
                        var h = Kc.opacity;
                        if (!h) {
                            var p = gb();
                            h = p;
                            void 0 === d.style[p] && (p = (qb ? "Webkit" : pb ? "Moz" : C ? "ms" : nb ? "O" : null) + ib(p), void 0 !== d.style[p] && (h = p));
                            Kc.opacity = h
                        }
                        d = g[h] || ""
                    }
                    g = d
                }
                f = f(g);
                "number" !== typeof f || isNaN(f) || (e = f)
            }
            return b = c * e
        })
    };

    function gg(a, b, c, d, e, f, g) {
        f = void 0 === f ? oa : f;
        g = void 0 === g ? [] : g;
        Lf.call(this, c, d, e);
        this.C = b;
        this.Fa = this.l = 0;
        this.pb = null;
        this.lb = this.fb = "";
        this.gb = [];
        this.hb = [];
        this.ab = this.jb = "";
        this.vb = !1;
        this.w = 4;
        this.yb = !1;
        this.aa = [];
        this.J = this.j = "";
        this.xb = this.cb = this.rb = !1;
        this.ia = 0;
        this.da = this.qb = De();
        this.oa = 0;
        this.Pb = f;
        this.zb = !1;
        this.na = this.Ea = this.Ja = this.ta = this.A = -1;
        this.D = {};
        this.qa = g;
        hg(this, this.b.b);
        this.C && "string" === typeof this.C && (a = this.C.match(/fa=([^&;]+)/)) && 2 == a.length && a[1] == (30).toString() && (this.Ha = !0);
        id(R.g().a, this.C)
    }
    t(gg, Lf);

    function ig(a, b, c) {
        return (a = String(a[b] || kd(a, c) || "")) ? a.split("|") : []
    }

    function hg(a, b) {
        if (b) {
            if (0 == a.l)
                if (a.b.b) {
                    var c = a.b.b._adk_;
                    c || (c = (c = kd(a.b.b, "googleAvAdk")) && !/[^0-9]/.test(c) ? parseInt(c, 10) : 0)
                } else c = 0;
            else c = a.l;
            a.l = c;
            "" == a.fb && (a.fb = String(b._avi_ || ""));
            "" == a.lb && (a.lb = b._avihost_ ? String(b._avihost_) : "pagead2.googlesyndication.com");
            a.gb.length || (a.gb = ig(b, "_avicxn_", "googleAvCxn"));
            a.hb.length || (a.hb = ig(b, "_avieoscxn_", "googleEOSAvCxn"));
            "" == a.jb && (a.jb = String(b._aviextcxn_ || kd(b, "googleAvExtCxn") || ""));
            "" == a.ab && (a.ab = String(b._cid_ || ""));
            a.vb || (a.vb = !!b._imm_ || ld(b, "googleAvImmediate"));
            "" == a.J && (a.J = String(b._cvu_ || kd(b, "googleAvCpmav") || ""));
            "" == a.j && (a.j = String(kd(b, "googleAvBtr") || ""));
            a.za(String(b._avm_ || kd(b, "googleAvMetadata") || ""))
        }
    }
    l = gg.prototype;
    l.V = function() {
        delete this.aa;
        delete this.qa;
        Lf.prototype.V.call(this)
    };

    function jg(a, b, c) {
        x(a.qa, function(d) {
            return d.a(a, c, b)
        })
    }
    l.ya = function() {
        return this.K && !(1 == this.oa || 3 == this.oa)
    };
    l.Ua = function() {
        Lf.prototype.Ua.call(this);
        this.Ka = new J(0, 0, 0, 0)
    };
    l.T = function() {
        this.K || (this.Ja = Qd(), kg(this, !1, this.ma), null != this.j && "" != this.j && (Ic(this.j), this.j = ""));
        Lf.prototype.T.call(this);
        lg(this)
    };

    function lg(a) {
        if (a.K && u == u.top) {
            var b = u.pageYOffset;
            null != b && (a.na = Math.max(b, a.na));
            jg(a, 4, {})
        }
    }

    function mg(a) {
        return new nd(a.l, a.pb)
    }
    l.za = function(a) {
        if ("string" === typeof a && 0 != a.length) {
            var b = new dd,
                c = R.g();
            N(b, "omid", L);
            gd(b, a);
            b = O(b, "omid");
            null !== b && (c.a.b.omid = b);
            a = gd(this.h, a);
            c = a.split("&");
            for (b = 0; b < c.length; b++) {
                var d = c[b];
                "ts=0" == d ? this.ca = !1 : 0 == d.lastIndexOf("la=", 0) ? (d = d.split("=")[1], "0" == d ? this.ia = 2 : "1" == d && (this.ia = 1)) : 0 == d.lastIndexOf("cr=", 0) ? "1" == d.split("=")[1] && (this.wb = !0) : "adf=1" == d && (this.zb = !0)
            }
            this.f.a = this.ga();
            Lf.prototype.za.call(this, a)
        }
    };
    l.Da = function(a, b, c, d, e, f, g) {
        var h = W(this.c),
            p = Math.floor(100 * this.f.m);
        this.ia = 242500 <= Qe(Nf(this)) ? 1 : 2;
        Lf.prototype.Da.call(this, a, b, c, d, e, f, g); - 1 == this.da && -1 != this.f.b ? this.da = this.f.b : 0 == this.da && 1 == this.f.b && (this.da = 1);
        a = W(this.c);
        b = Math.floor(100 * this.f.m);
        (!h && a || b != p) && kg(this, a, b);
        try {
            this.ba = fg(this.b.a)
        } catch (m) {}
        lg(this)
    };
    l.ga = function() {
        return rb ? !1 : 1 == this.ia
    };

    function ng(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {},
            f = U.g(),
            g = fd(a.h),
            h = f.l,
            p = Nf(a);
        g.p = [p.top + h.y, p.left + h.x, p.bottom + h.y, p.right + h.x];
        h = a.c;
        g.tos = Ef(h.a);
        g.mtos = Gf(h.a);
        g.mcvt = h.c.a;
        g.rs = a.sa;
        (p = 5 == a.sa) || (g.ht = a.Ga);
        0 <= a.ua && (g.tfs = a.ua, g.tls = a.Bb);
        g.mc = ze(h.b);
        g.lte = ze(a.ma);
        g.bas = a.qb;
        g.bac = a.da;
        f.b && (g["if"] = a.o ? 0 : 1);
        g.met = a.b.c;
        p && a.C && (g.req = encodeURIComponent(a.C).substring(0, 100));
        a.xb && (g.ci = "1");
        a.ga() && (g.la = "1");
        a.Ha && (g.pa = "1");
        g.avms = a.a ? a.a.u() : "ns";
        a.a && y(g, a.a.L());
        0 != a.oa && (g.md = a.oa);
        g.btr = null != a.j && "" != a.j ? 1 : 0;
        g.lm = a.w;
        y(g, og(a));
        d && y(g, d);
        g.adk = a.l;
        a.zb && a.Fa && (g.adf = a.Fa);
        d = a.o;
        f = R.g();
        !c && d && f.b && (c = f.b);
        c && (g.r = c);
        0 === a.ba && (g.invis = 1);
        c = pf(g).join("&");
        e[3] = c;
        e[11] = d;
        e[29] = R.g().c;
        e[0] = b;
        e[7] = a.f.m;
        e[9] = Ee(a.Ka);
        e[28] = a.sa;
        e[32] = a.a ? a.a.u() : "ns";
        e[5] = W(a.c) && 4 != a.w;
        e[13] = Gf(a.c.a).join(",");
        e[18] = 0 == Qe(Nf(a));
        null != a.I && (e[20] = a.I.y, e[21] = a.I.x);
        b = U.g();
        null != b.c && (e[22] = Cc(b.c), e[23] = Dc(b.c));
        null != b.a && (e[30] = Cc(b.a), e[31] = Dc(b.a), e[38] = Ee(b.a));
        c = b.l;
        g = Nf(a);
        e[37] = Ee(new J(g.top + c.y, g.right + c.x, g.bottom + c.y, g.left + c.x));
        b.h && (b = b.h, e[39] = b.width + "-" + b.height); - 1 != a.ba && (e[25] = a.ba);
        if (a = mg(a)) a.b && (e[4] = a.b), a.a && (e[12] = a.a);
        return e
    }

    function og(a) {
        var b = a.A;
        var c = a.A;
        c = -1 == c || a.ta < c ? -1 : a.ta - c;
        var d = -1 == a.A || a.Ja < a.A ? -1 : a.Ja - a.A,
            e = pg(a),
            f = {};
        return f.rst = 0 < b ? b : void 0, f.dlt = 0 <= c ? c : void 0, f.rpt = 0 <= d ? d : void 0, f.isd = 0 <= a.Ea ? a.Ea : void 0, f.msd = 0 <= a.na ? a.na : void 0, f.ext = e ? e : void 0, f
    }

    function pg(a) {
        return a.D && 0 < rc(a.D).length ? encodeURIComponent(za(rc(a.D), function(b) {
            return b + "=" + a.D[b]
        }).join("&")) : null
    }

    function qg(a, b) {
        b && qc(b, function(c, d) {
            null == c ? delete a.D[d] : a.D[d] = c
        })
    }

    function kg(a, b, c) {
        if (b = a.Pb(b, c)) qg(a, b), jg(a, 3, {})
    }
    l.sb = function() {
        return !1
    };

    function rg(a, b, c, d) {
        df.call(this, a, b, c, d)
    }
    t(rg, df);
    rg.prototype.nb = function(a) {
        return Te(a, this.l, this.c, 1 == O(this.D, "od"))
    };
    rg.prototype.P = function() {
        if (1 === O(this.D, "osddt")) this.timestamp = T();
        else {
            var a = this.b.c;
            this.timestamp = -1 === a.time ? T() : a.time
        }
        this.La();
        this.bb();
        a = this.a;
        var b = this.l;
        a = a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom ? new J(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left)) : new J(0, 0, 0, 0);
        b = a.top >= a.bottom || a.left >= a.right ? new J(0, 0, 0, 0) : a;
        a = this.b.c;
        var c = 0,
            d = 0,
            e = 0;
        0 < (this.a.bottom - this.a.top) * (this.a.right - this.a.left) && (this.nb(b) ? b = new J(0, 0, 0, 0) : (c = U.g().j, e = new J(0, c.height, c.width, 0), c = Pe(b, this.a), d = Pe(b, U.g().a), e = Pe(b, e)));
        b = b.top >= b.bottom || b.left >= b.right ? new J(0, 0, 0, 0) : Fc(b, -this.a.left, -this.a.top);
        this.h = new Ve(a, this.a, b, c, d, this.timestamp, e)
    };
    rg.prototype.u = function() {
        return this.b.u()
    };

    function sg(a) {
        var b = [];
        tg(new ug, a, b);
        return b.join("")
    }

    function ug() {}

    function tg(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), tg(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), vg(d, c), c.push(":"), tg(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    vg(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var wg = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        xg = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function vg(a, b) {
        b.push('"', a.replace(xg, function(c) {
            var d = wg[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), wg[c] = d);
            return d
        }), '"')
    };

    function yg() {
        this.key = "goog_adspeed";
        this.c = [3, 4];
        this.b = null
    }
    yg.prototype.a = function(a, b, c) {
        if (!Ga(this.c, c) || !od(mg(a))) return !1;
        c = {};
        c = (c[0] = this.key, c[40] = sg(og(a)), c);
        var d;
        if (d = this.b) a: {
            d = this.b;
            for (var e in d)
                if (!(e in c) || d[e] !== c[e]) {
                    d = !1;
                    break a
                }
            for (var f in c)
                if (!(f in d)) {
                    d = !1;
                    break a
                }
            d = !0
        }
        if (d) return !1;
        this.b = c;
        e = {};
        y(e, c, b);
        return zg(a, {
            Va: {},
            Qa: e
        })
    };

    function Ag() {
        this.key = "goog_update_data";
        this.b = 0;
        this.c = !1
    }
    Ag.prototype.a = function(a, b, c) {
        if (c != this.b || !od(mg(a))) return !1;
        c = 1 == a.w;
        var d = W(a.c),
            e = {},
            f = {};
        b = {
            Qa: (e[0] = this.key, e[40] = sg(og(a)), e),
            Va: Object.assign({}, b, (f.r = b.r, f))
        };
        if (c) return d && !this.c ? (this.c = d, zg(a, b)) : !1;
        this.c = d;
        return zg(a, b)
    };

    function Bg(a) {
        Ag.call(this, a);
        this.key = "goog_image_request";
        this.b = 2
    }
    t(Bg, Ag);

    function Cg(a) {
        Ag.call(this, a);
        this.key = "goog_image_request";
        this.b = 1
    }
    t(Cg, Ag);
    Cg.prototype.a = function(a, b, c) {
        var d = !a.cb;
        if (W(a.c) && a.ca || d) {
            if (b = Ag.prototype.a.call(this, a, b, c))
                if (W(a.c) || (a.cb = !0), W(a.c) || a.ca) a.ca = !1;
            return b
        }
        return !1
    };

    function Dg() {
        this.b = [];
        this.a = []
    }

    function Eg(a) {
        return Ea(X.a, function(b) {
            b = mg(b);
            return a.a || b.a ? a.a == b.a : a.b || b.b ? a.b == b.b : !1
        })
    }

    function Fg(a) {
        var b = X;
        return a ? Ea(b.a, function(c) {
            return c.b.b == a
        }) : null
    }

    function Gg(a) {
        return Ea(a.a, function() {
            return !1
        })
    }

    function Hg() {
        var a = X;
        return 0 == a.b.length ? a.a : 0 == a.a.length ? a.b : Ha(a.a, a.b)
    }

    function Ig() {
        var a = X;
        a.b = [];
        a.a = []
    }

    function Jg(a, b) {
        a = a.a;
        var c = Fa(a, function(d) {
            return d == b
        });
        return -1 != c ? (a.splice(c, 1), b.a && b.a.H(), b.B(), !0) : !1
    }

    function Kg(a) {
        var b = X;
        if (Jg(b, a)) {
            a = function() {
                return null
            };
            a = function() {
                return Gg(b)
            };
            for (var c = a(); c; c = a()) Jg(b, c)
        }
    }
    w(Dg);
    var X = Dg.g();

    function Lg() {
        this.a = this.b = null
    }

    function Mg(a, b) {
        function c(d, e) {
            b(d, e)
        }
        if (null == a.b) return !1;
        a.a = Ea(a.b, function(d) {
            return null != d && d.Ra()
        });
        a.a && (a.a.mb(c) ? af(a.a.a) : b(a.a.a.W(), a.a));
        return null != a.a
    }
    w(Lg);

    function Ng(a) {
        a = Og(a);
        ef.call(this, a.length ? a[a.length - 1] : new V(E, 0));
        this.c = a;
        this.b = null
    }
    t(Ng, ef);
    l = Ng.prototype;
    l.u = function() {
        return (this.b ? this.b : this.a).u()
    };
    l.L = function() {
        return (this.b ? this.b : this.a).L()
    };
    l.M = function() {
        return (this.b ? this.b : this.a).M()
    };
    l.mb = function(a) {
        var b = !1;
        x(this.c, function(c) {
            c.Oa() && (b = !0)
        });
        b && (this.f = a, $e(this.a, this));
        return b
    };
    l.B = function() {
        x(this.c, function(a) {
            a.B()
        });
        ef.prototype.B.call(this)
    };
    l.Ra = function() {
        return Ba(this.c, function(a) {
            return a.Z()
        })
    };
    l.Y = function() {
        return Ba(this.c, function(a) {
            return a.Z()
        })
    };
    l.wa = function(a, b, c) {
        return new rg(a, this.a, b, c)
    };
    l.R = function(a) {
        this.b = a.b
    };

    function Og(a) {
        if (!a.length) return [];
        a = ya(a, function(c) {
            return null != c && c.Z()
        });
        for (var b = 1; b < a.length; b++) $e(a[b - 1], a[b]);
        return a
    };

    function Pg(a, b, c, d) {
        df.call(this, a, b, c, d);
        this.w = this.o = null
    }
    t(Pg, rg);
    l = Pg.prototype;
    l.Aa = function() {
        var a = this;
        this.w || (this.w = T());
        if (ge(298, function() {
                return a.A()
            })) return !0;
        Ye(this.b, "msf");
        return !1
    };

    function Qg(a, b) {
        try {
            if (b.length) {
                a.o || (a.o = T());
                var c = Rg(b),
                    d = Mc(a.c, a.b.a.s),
                    e = d.x,
                    f = d.y;
                a.a = new J(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                var g = Ce(c.intersectionRect);
                a.l = Fc(g, a.a.left - g.left, a.a.top - g.top)
            }
        } catch (h) {
            a.H(), je(299, h)
        }
    }

    function Rg(a) {
        return Aa(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    }
    l.La = function() {};
    l.nb = function() {
        return !1
    };
    l.bb = function() {};
    l.L = function() {
        var a = {};
        return Object.assign(this.b.L(), (a.niot_obs = this.w, a.niot_cbk = this.o, a))
    };
    var Sg = {
        threshold: [0, .3, .5, .75, 1]
    };

    function Tg(a, b, c, d) {
        Pg.call(this, a, b, c, d);
        this.i = this.j = this.f = null
    }
    t(Tg, Pg);
    Tg.prototype.u = function() {
        return "nio"
    };
    Tg.prototype.H = function() {
        if (this.f && this.c) try {
            this.f.unobserve(this.c), this.j ? (this.j.unobserve(this.c), this.j = null) : this.i && (this.i.disconnect(), this.i = null)
        } catch (a) {}
    };

    function Ug(a) {
        return a.f && a.f.takeRecords ? a.f.takeRecords() : []
    }
    Tg.prototype.A = function() {
        var a = this;
        if (!this.c) return !1;
        var b = this.c,
            c = this.b.a.s,
            d = Ld().a;
        this.f = new c.IntersectionObserver(Jd(d, function(e) {
            return Qg(a, e)
        }), Sg);
        d = Jd(d, function() {
            a.f.unobserve(b);
            a.f.observe(b);
            Qg(a, Ug(a))
        });
        c.ResizeObserver ? (this.j = new c.ResizeObserver(d), this.j.observe(b)) : c.MutationObserver && (this.i = new u.MutationObserver(d), this.i.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        this.f.observe(b);
        Qg(this, Ug(this));
        return !0
    };
    Tg.prototype.P = function() {
        var a = Ug(this);
        0 < a.length && Qg(this, a);
        Pg.prototype.P.call(this)
    };

    function Vg(a) {
        a = void 0 === a ? E : a;
        ef.call(this, new V(a, 2))
    }
    t(Vg, ef);
    Vg.prototype.u = function() {
        return "nio"
    };
    Vg.prototype.Y = function() {
        var a = A;
        return a && 0 <= a.toLowerCase().indexOf("cobalt") ? !1 : !U.g().f && null != this.a.a.s.IntersectionObserver
    };
    Vg.prototype.wa = function(a, b, c) {
        return new Tg(a, this.a, b, c)
    };

    function Wg() {
        var a = Xg();
        V.call(this, E.top, a, "geo")
    }
    t(Wg, V);
    Wg.prototype.Ma = function() {
        return U.g().a
    };
    Wg.prototype.Z = function() {
        var a = Xg();
        this.i !== a && (this.a != this && a > this.a.i && (this.a = this, Ze(this)), this.i = a);
        return 2 == a
    };

    function Xg() {
        R.g();
        var a = U.g();
        return a.b || a.f ? 0 : 2
    }
    w(Wg);
    var Yg = {},
        Zg = (Yg[1] = function() {
            return new Vg
        }, Yg[2] = function() {
            return new Ng([Wg.g()])
        }, Yg);

    function $g() {
        this.a = null;
        this.b = Zg
    }

    function ah() {
        var a = $g.g();
        a: {
            var b = O(R.g().a, "mv");
            if (null != b && (b = a.b[b]) && (b = b()) && b.Y()) break a;b = null
        }
        a.a = b
    }
    w($g);

    function bh() {
        this.done = !1;
        this.a = {
            $a: 0,
            Za: 0,
            lc: 0,
            eb: 0,
            xa: -1,
            Hb: 0,
            Gb: 0,
            Ib: 0
        };
        this.j = null;
        this.h = this.l = !1;
        this.i = "";
        this.b = null;
        this.o = 0;
        this.c = new We(this)
    }

    function ch(a) {
        var b = Y;
        if (!b.l) {
            b.l = !0;
            if (a) {
                a = Hg();
                for (var c, d = 0; d < a.length; ++d) c = a[d], c.b.a && Rf(c)
            }
            dh(b, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return b.f.apply(b, r(f))
            });
            b.f()
        }
    }
    bh.prototype.Ab = function() {
        eh(this, Hg(), !1)
    };

    function fh() {
        var a = $g.g();
        null != a.a && a.a.a && af(a.a.a);
        a = Lg.g();
        null != a.a && a.a.a ? af(a.a.a) : Ke(U.g())
    }

    function eh(a, b, c) {
        if (!a.done)
            if (a.c.cancel(), 0 == b.length) a.h = !1;
            else {
                a.b = null;
                try {
                    fh();
                    var d = T(),
                        e = R.g();
                    e.i = d;
                    if (null != Lg.g().a)
                        for (e = 0; e < b.length; e++) Pf(b[e], d, c);
                    else ie(a.i, {
                        strategy_not_selected: 1,
                        bin: e.c
                    });
                    for (d = 0; d < b.length; d++) Qf(b[d]);
                    ++a.a.eb;
                    gh(a)
                } finally {
                    c ? x(b, function(f) {
                        return f.Ua()
                    }) : Xe(a.c)
                }
            }
    }

    function dh(a, b) {
        if (!a.j) {
            b = ce(142, b);
            Q();
            var c;
            D.visibilityState ? c = "visibilitychange" : D.mozVisibilityState ? c = "mozvisibilitychange" : D.webkitVisibilityState && (c = "webkitvisibilitychange");
            c && Wb(D, c, b, {
                capture: !1
            }) && (a.j = b)
        }
    }
    bh.prototype.f = function() {
        var a = Ne(),
            b = T();
        a ? (ne || (le = b, x(X.b, function(c) {
            return c.c.i(b, !c.j())
        })), ne = !0) : (this.o = hh(this, b), ne = !1, x(X.b, function(c) {
            c.ya() && c.c.h(b)
        }));
        this.h = !0;
        eh(this, Hg(), !a)
    };

    function ih(a) {
        return !!(Date && a && a.screen && a.document && a.document.body && a.document.body.getBoundingClientRect)
    }

    function jh(a, b, c) {
        if (!a.b || c) {
            c = b.document;
            var d = 0 <= me ? T() - me : -1,
                e = T(); - 1 == a.a.xa && (d = e);
            var f = U.g(),
                g = R.g(),
                h = fd(g.a),
                p = Hg();
            try {
                if (0 < p.length) {
                    var m = f.a;
                    m && (h.bs = [Cc(m), Dc(m)]);
                    var k = f.h;
                    k && (h.ps = [k.width, k.height]);
                    b.screen && (h.ss = [b.screen.width, b.screen.height])
                } else h.url = encodeURIComponent(b.location.href.substring(0, 512)), c.referrer && (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
                h.tt = d;
                h.pt = me;
                h.bin = g.c;
                void 0 !== b.google_osd_load_pub_page_exp && (h.olpp = b.google_osd_load_pub_page_exp);
                h.deb = [1, a.a.$a, a.a.Za, a.a.eb, a.a.xa, ye, a.c.b, a.a.Hb, a.a.Gb, a.a.Ib].join("-");
                h.tvt = hh(a, e);
                f.f && (h.inapp = 1);
                if (null !== b && b != b.top) {
                    0 < p.length && (h.iframe_loc = encodeURIComponent(b.location.href.substring(0, 512)));
                    var q = f.c;
                    h.is = [Cc(q), Dc(q)]
                }
            } catch (Ca) {
                h.error = 1
            }
            a.b = h
        }
        b = a.b;
        a = {};
        for (var n in b) a[n] = b[n];
        n = Ld();
        var v;
        if (1 == O(n.c, "prf")) {
            b = new Hd;
            m = n.a;
            k = 0; - 1 < m.a && (k = m.f.a.a() - m.a);
            b = Rb(b, 1, m.c + k);
            m = n.a;
            b = Rb(b, 5, -1 < m.a ? m.b + 1 : m.b);
            b = Rb(b, 2, n.b.a.f());
            b = Rb(b, 3, n.b.a.c());
            b = Rb(b, 4, n.b.a.b());
            n = {};
            m = new Jb;
            k = Pb(b, 1);
            k = null == k ? k : +k;
            k = null == k ? 0 : k;
            if (0 !== k && (q = k, null != q)) {
                Hb(m.a, 9);
                k = m.a;
                d = q;
                d = (q = 0 > d ? 1 : 0) ? -d : d;
                if (0 === d) Fb = 0 < 1 / d ? 0 : 2147483648, Eb = 0;
                else if (isNaN(d)) Fb = 2147483647, Eb = 4294967295;
                else if (1.7976931348623157E308 < d) Fb = (q << 31 | 2146435072) >>> 0, Eb = 0;
                else if (2.2250738585072014E-308 > d) d /= Math.pow(2, -1074), Fb = (q << 31 | d / 4294967296) >>> 0, Eb = d >>> 0;
                else {
                    e = d;
                    c = 0;
                    if (2 <= e)
                        for (; 2 <= e && 1023 > c;) c++, e /= 2;
                    else
                        for (; 1 > e && -1022 < c;) e *= 2, c--;
                    d *= Math.pow(2, -c);
                    Fb = (q << 31 | c + 1023 << 20 | 1048576 * d & 1048575) >>> 0;
                    Eb = 4503599627370496 * d >>> 0
                }
                Ib(k, Eb);
                Ib(k, Fb)
            }
            k = Qb(b, 2);
            0 !== k && null != k && Kb(m, 2, k);
            k = Qb(b, 3);
            0 !== k && null != k && Kb(m, 3, k);
            k = Qb(b, 4);
            0 !== k && null != k && Kb(m, 4, k);
            k = Qb(b, 5);
            if (0 !== k && null != k && null != k)
                if (Hb(m.a, 40), b = m.a, 0 <= k) Hb(b, k);
                else {
                    for (q = 0; 9 > q; q++) b.a.push(k & 127 | 128), k >>= 7;
                    b.a.push(1)
                }
            b = new Uint8Array(m.a.length());
            q = m.b;
            c = q.length;
            for (d = k = 0; d < c; d++) e = q[d], b.set(e, k), k += e.length;
            q = m.a;
            c = q.a;
            q.a = [];
            b.set(c, k);
            m.b = [b];
            void 0 === v && (v = 0);
            if (!Db)
                for (Db = {}, m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], q = 0; 5 > q; q++)
                    for (c = m.concat(k[q].split("")), Cb[q] = c, d = 0; d < c.length; d++) e = c[d], void 0 === Db[e] && (Db[e] = d);
            v = Cb[v];
            m = [];
            for (k = 0; k < b.length; k += 3) f = b[k], g = (q = k + 1 < b.length) ? b[k + 1] : 0, e = (c = k + 2 < b.length) ? b[k + 2] : 0, d = f >> 2, f = (f & 3) << 4 | g >> 4, g = (g & 15) << 2 | e >> 6, e &= 63, c || (e = 64, q || (g = 64)), m.push(v[d], v[f], v[g] || "", v[e] || "");
            v = (n.pf = m.join(""), n)
        } else v = {};
        y(a, v);
        return a
    }

    function kh() {
        x(Hg(), function(a) {
            if (a.b.b) {
                var b = a.l || 0,
                    c = $g.g();
                if (b = c.a ? new yf(c.a, a.b.a, a.h, b) : null) a.F = b
            }
        })
    }

    function lh() {
        var a = Lg.g();
        if (null != a.a) {
            var b = a.a;
            x(Hg(), function(c) {
                return Of(c, b)
            })
        }
    }

    function gh(a) {
        "osd" == a.i && x(X.a, function(b) {
            var c = {};
            jg(b, 0, (c.r = void 0, c))
        })
    }

    function hh(a, b) {
        a = a.o;
        ne && (a += b - le);
        return a
    }

    function mh(a) {
        return (a = a.match(/[&\?;](?:dc_)?adk=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function nh(a) {
        return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function oh() {
        var a = Y;
        var b = void 0 === b ? function() {
            return {}
        } : b;
        de.h = "av-js";
        Zd.a = .01;
        fe([function(c) {
            var d = R.g(),
                e = {};
            y(c, (e.bin = d.c, e.type = "error", e), fd(d.a), jh(a, E), b());
            if (d = qf()) e = {}, y(c, (e.v = encodeURIComponent(d), e))
        }])
    }

    function ph(a) {
        var b = new qh;
        switch (a) {
            case 0:
            case 5:
                return [];
            default:
                return a = 4 === R.g().c, [new Ag(b), new Cg(b), new Bg(b)].concat(r(a ? [] : [new yg]))
        }
    }
    w(bh);
    var Y = bh.g();

    function qh() {}

    function zg(a, b) {
        var c = b || {};
        b = void 0 === c.Va ? {} : c.Va;
        c = void 0 === c.Qa ? {} : c.Qa;
        var d = c.r,
            e = b[0],
            f = jh(Y, K(), !1),
            g = {};
        y(g, f, b);
        b = {};
        y(b, ng(a, e, d, g), c);
        Ge(a.b.b, b, a.aa);
        return !0
    };

    function rh(a, b, c, d) {
        Pg.call(this, a, b, c, d);
        this.f = function() {
            return null
        }
    }
    t(rh, Pg);
    rh.prototype.u = function() {
        return "aio"
    };
    rh.prototype.H = function() {
        if (this.f) try {
            this.f()
        } catch (a) {}
    };
    rh.prototype.A = function() {
        var a = this;
        if (!this.c) return !1;
        this.f = Gc(this.b.a.s).observeIntersection(Jd(Ld().a, function(b) {
            return Qg(a, b)
        }));
        return !0
    };

    function sh(a) {
        a = void 0 === a ? E : a;
        ef.call(this, new V(a, 2))
    }
    t(sh, ef);
    sh.prototype.u = function() {
        return "aio"
    };
    sh.prototype.Ra = function() {
        return U.g().b && this.Y()
    };
    sh.prototype.Y = function() {
        return !U.g().f && re(this.a.a.s)
    };
    sh.prototype.wa = function(a, b, c) {
        return new rh(a, this.a, b, c)
    };

    function th() {
        V.call(this, E, 2, "iem")
    }
    t(th, V);
    l = th.prototype;
    l.Ma = function() {
        function a(n, v) {
            return !!b.s.document.elementFromPoint(n, v)
        }
        var b = this,
            c = new J(0, this.s.innerWidth || this.s.width, this.s.innerHeight || this.s.height, 0),
            d = fc(document),
            e = Math.floor(c.left - d.x),
            f = Math.floor(c.top - d.y),
            g = Math.floor(c.right - d.x),
            h = Math.floor(c.bottom - d.y);
        c = a(e, f);
        d = a(g, h);
        if (c && d) return new J(f, g, h, e);
        var p = a(g, f),
            m = a(e, h);
        if (c) h = Z(f, h, function(n) {
            return a(e, n)
        }), g = Z(e, g, function(n) {
            return a(n, f)
        });
        else if (p) h = Z(f, h, function(n) {
            return a(g, n)
        }), e = Z(g, e, function(n) {
            return a(n, f)
        });
        else if (m) f = Z(h, f, function(n) {
            return a(e, n)
        }), g = Z(e, g, function(n) {
            return a(n, h)
        });
        else if (d) f = Z(h, f, function(n) {
            return a(g, n)
        }), e = Z(g, e, function(n) {
            return a(n, h)
        });
        else {
            var k = Math.floor((e + g) / 2),
                q = Math.floor((f + h) / 2);
            if (!a(k, q)) return new J(0, 0, 0, 0);
            f = Z(q, f, function(n) {
                return a(k, n)
            });
            h = Z(q, h, function(n) {
                return a(k, n)
            });
            e = Z(k, e, function(n) {
                return a(n, q)
            });
            g = Z(k, g, function(n) {
                return a(n, q)
            })
        }
        return new J(f, g, h, e)
    };

    function Z(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e == a || e == b) break;
            c(e) ? a = e : b = e
        }
        return a
    }
    l.Z = function() {
        return U.g().b && C && yb(8) && se(this.s)
    };
    l.Sa = function() {};
    l.Ta = function() {};
    l.tb = function() {};
    l.ub = function() {};
    w(th);

    function uh() {
        V.call(this, E, 2, "mraid");
        this.J = 0;
        this.A = this.C = !1;
        this.h = null;
        this.b = qe(this.s);
        this.c.a = new J(0, 0, 0, 0);
        this.K = !1
    }
    t(uh, V);
    l = uh.prototype;
    l.Z = function() {
        return null != this.b.G
    };
    l.ib = function() {
        var a = {};
        this.J && (a.mraid = this.J);
        this.C && (a.mlc = 1);
        a.mtop = this.b.Ob;
        this.h && (a.mse = this.h);
        this.K && (a.msc = 1);
        a.mcp = this.b.va;
        return a
    };
    l.N = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        try {
            return this.b.G[a].apply(this.b.G, c)
        } catch (e) {
            je(538, e, .01, function(f) {
                f.method = a
            })
        }
    };

    function vh(a, b, c) {
        a.N("addEventListener", b, c)
    }
    l.Oa = function() {
        var a = this;
        if (this.o) return !this.fa();
        this.o = !0;
        if (2 === this.b.va) return this.h = "ng", Ye(this, "w"), !1;
        if (1 === this.b.va) return this.h = "mm", Ye(this, "w"), !1;
        U.g().w = !0;
        this.s.document.readyState && "complete" == this.s.document.readyState ? wh(this) : ue(this.s, "load", function() {
            Q().setTimeout(he(292, function() {
                return wh(a)
            }), 100)
        }, 292);
        return !0
    };

    function wh(a) {
        R.g().f = !!a.N("isViewable");
        vh(a, "viewableChange", xh);
        "loading" === a.N("getState") ? vh(a, "ready", yh) : zh(a)
    }

    function zh(a) {
        "string" === typeof a.b.G.AFMA_LIDAR ? (a.C = !0, Ah(a)) : (a.b.va = 3, a.h = "nc", Ye(a, "w"))
    }

    function Ah(a) {
        a.A = !1;
        var b = 1 == O(R.g().a, "rmmt"),
            c = !!a.N("isViewable");
        (b ? !c : 1) && Q().setTimeout(he(524, function() {
            a.A || (Bh(a), je(540, Error()), a.h = "mt", Ye(a, "w"))
        }), 500);
        Ch(a);
        vh(a, a.b.G.AFMA_LIDAR, Dh)
    }

    function Ch(a) {
        var b = 1 == O(R.g().a, "sneio"),
            c = void 0 !== a.b.G.AFMA_LIDAR_EXP_1,
            d = void 0 !== a.b.G.AFMA_LIDAR_EXP_2;
        (b = b && d) && (a.b.G.AFMA_LIDAR_EXP_2 = !0);
        c && (a.b.G.AFMA_LIDAR_EXP_1 = !b)
    }

    function Bh(a) {
        a.N("removeEventListener", a.b.G.AFMA_LIDAR, Dh);
        a.C = !1
    }
    l.Sa = function() {
        var a = U.g(),
            b = Eh(this, "getMaxSize");
        a.a = new J(0, b.width, b.height, 0)
    };
    l.Ta = function() {
        U.g().j = Eh(this, "getScreenSize")
    };

    function Eh(a, b) {
        if ("loading" === a.N("getState")) return new G(-1, -1);
        b = a.N(b);
        if (!b) return new G(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new G(-1, -1) : new G(a, b)
    }
    l.B = function() {
        Bh(this);
        V.prototype.B.call(this)
    };

    function yh() {
        try {
            var a = uh.g();
            a.N("removeEventListener", "ready", yh);
            zh(a)
        } catch (b) {
            je(541, b)
        }
    }

    function Dh(a, b) {
        try {
            var c = uh.g();
            c.A = !0;
            var d = a ? new J(a.y, a.x + a.width, a.y + a.height, a.x) : new J(0, 0, 0, 0);
            var e = T(),
                f = Ne();
            var g = new Ue(e, f, c);
            g.a = d;
            g.volume = b;
            c.R(g)
        } catch (h) {
            je(542, h)
        }
    }

    function xh(a) {
        var b = R.g(),
            c = uh.g();
        a && !b.f && (b.f = !0, c.K = !0, c.h && Ye(c, "w", !0))
    }
    w(uh);

    function Fh(a) {
        return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
    };
    var Gh = ["FRAME", "IMG", "IFRAME"],
        Hh = /^[01](px)?$/;

    function Ih(a, b) {
        var c = !0,
            d = !1,
            e;
        c = void 0 === c ? !0 : c;
        d = void 0 === d ? !1 : d;
        var f = void 0 === f ? !1 : f;
        if (a = "string" === typeof a ? document.getElementById(a) : a) {
            e || (e = function(Ca, Uh, Vh) {
                Ca.addEventListener(Uh, Vh)
            });
            for (var g = !1, h = function(Ca) {
                    g || (g = !0, b(Ca))
                }, p, m, k = 0; k < Gh.length; ++k)
                if (Gh[k] == a.tagName) {
                    m = 3;
                    p = [a];
                    break
                }
            p || (p = a.querySelectorAll(Gh.join(",")), m = 2);
            var q = 0;
            a = !1;
            for (k = 0; k < p.length; k++) {
                var n = p[k];
                if (f || !("IMG" != n.tagName || !n.complete || n.naturalWidth && n.naturalHeight ? Hh.test(n.getAttribute("width")) && Hh.test(n.getAttribute("height")) : 1)) {
                    if ("IMG" == n.tagName) var v = n.naturalWidth && n.naturalHeight ? !0 : !1;
                    else try {
                        v = "complete" === (n.readyState ? n.readyState : n.contentWindow && n.contentWindow.document && n.contentWindow.document.readyState) ? !0 : !1
                    } catch (Ca) {
                        v = void 0 === d ? !1 : d
                    }
                    v ? a = !0 : (q++, e(n, "load", function() {
                        q--;
                        q || h(m)
                    }))
                }
            }
            p = null;
            if (0 === q && !a && "complete" === u.document.readyState) m = 5;
            else if (q || !a) {
                e(u, "load", function() {
                    h(4)
                });
                return
            }
            c && h(m)
        }
    };

    function Jh() {}
    w(Jh);

    function Kh() {}
    w(Kh);

    function Lh() {
        this.b = null;
        this.f = this.i = this.c = this.h = !1;
        Mh(this);
        oh()
    }

    function Nh() {
        var a = void 0,
            b = 4;
        if (void 0 === a) {
            var c = void 0 === c ? u : c;
            a = c.ggeac || (c.ggeac = {})
        }
        b = void 0 === b ? 0 : b;
        Jh.g();
        b = void 0 === b ? 0 : b;
        Ac(zc.g(), a, b);
        Kh.g();
        zc.g().a();
        b = R.g();
        Bc(160) && ed(b.a, "gtx", 1)
    }
    l = Lh.prototype;
    l.Mb = function(a) {
        this.h = a
    };
    l.kb = function() {
        Oh(this);
        Q().clearTimeout(this.b);
        this.b = null;
        me = T();
        Ph(this)
    };

    function Oh(a) {
        R.g().c = 1;
        if (!(0 < me)) {
            try {
                if (!Qh(a)) return;
                fh();
                Rh(a)
            } catch (b) {}
            a.b = Q().setTimeout(he(129, function() {
                return Oh(a)
            }), 250)
        }
    }
    l.Nb = function(a, b, c, d, e, f, g, h, p) {
        var m = this;
        f = void 0 === f ? !1 : f;
        h = void 0 === h ? -1 : h;
        p = void 0 === p ? -1 : p;
        if (ih(E)) {
            var k = new gg(E, b, a, -1, c, g);
            k.qa = ph(k.w);
            e = R.g();
            0 < h && -1 == k.A && (k.A = h);
            0 <= p && (k.Ea = p);
            k.Ia = function(q) {
                for (var n = [], v = 0; v < arguments.length; ++v) n[v] = arguments[v];
                return m.Jb.apply(m, r(n))
            };
            k.Eb = function(q) {
                for (var n = [], v = 0; v < arguments.length; ++v) n[v] = arguments[v];
                return m.Na.apply(m, r(n))
            };
            13 != c && (k.l = mh(b), k.pb = Fh(b), k.Fa = nh(b));
            f && (k.xb = !0);
            ed(e.a, "oseid", Wf(this.a));
            X.a.push(k);
            ++Y.a.Za;
            e.b ? this.Na(k, e.b) : ((b = Lg.g().a) && Of(k, b), Ph(this), e.b || (d ? (Sh(k), k.T()) : a && (Bc(314) ? Ih(a, function() {
                k.X() || (Sh(k), k.T())
            }) : we(a, function() {
                k.X() || (Sh(k), k.T())
            })), Y.h || Y.f()))
        }
    };

    function Rh(a) {
        Th(a);
        Uf(a.a, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Nb.apply(a, r(c))
        }, function() {
            return a.h
        }, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Mb.apply(a, r(c))
        })
    }

    function Wh(a) {
        R.g();
        var b = [th.g(), uh.g()],
            c = [Wg.g()];
        return [new Ng(b), new Vg(a), new sh(a), new Ng(c)]
    }

    function Ph(a) {
        if (!a.f) {
            a.f = !0;
            try {
                var b = K(),
                    c = U.g();
                R.g().h = 947190542;
                if (Qh(a)) {
                    Y.a.$a = Vf(a.a);
                    var d = Lg.g();
                    if (null == d.b) {
                        var e = Wh(b);
                        d.b = e
                    }
                    if (Mg(d, function(g) {
                            return Xh(a, g)
                        })) {
                        if (!Y.done) {
                            lh();
                            c.o = !0;
                            Rh(a);
                            var f;
                            (f = U.g().f || z(A, "CrKey") || z(A, "PlayStation") || z(A, "Roku") || He() || z(A, "Xbox") || Ie() || Je()) || (Q(), f = 0 !== rd());
                            f ? (ah(), kh(), Yh(a), Oc()) : Xh(a, "pv")
                        }
                    } else Xh(a, "i")
                } else Zh(a, "c")
            } catch (g) {
                throw Xh(a, "x"), Ig(), g;
            }
        }
    }

    function Yh(a) {
        if (-1 == Y.a.xa) {
            K();
            var b = 2 == Wf(a.a);
            ch(b);
            Q().setTimeout(he(131, function() {
                Zh(a, "t")
            }), 36E5);
            Y.a.xa = T() - me
        }
    }

    function Xh(a, b) {
        R.g().b = b;
        for (var c = ea(X.a), d = c.next(); !d.done; d = c.next()) d.value.o = !0;
        Zh(a, b, !1)
    }

    function Zh(a, b, c) {
        c = void 0 === c ? !0 : c;
        if (!Y.done) {
            Y.c.cancel();
            a.a || (a.a = new Sf);
            if (2 == Wf(a.a) || a.c)
                for (a = X.a, c && 0 < a.length && eh(Y, a, !0), c = ea(a), a = c.next(); !a.done; a = c.next()) {
                    a = a.value;
                    var d = {};
                    jg(a, 1, (d.r = b, d));
                    a.a && a.a.H()
                }
            Y.done = !0
        }
    }

    function Qh(a) {
        if (!ih(K())) return !1;
        var b = new Sf;
        if (!(b.a || b.b || b.c)) return !1;
        a.a = b;
        return !0
    }
    l.Na = function(a, b) {
        a.o = !0;
        var c = {};
        jg(a, 2, (c.r = b, c));
        a.a && a.a.H()
    };
    l.Jb = function(a) {
        a && W(a.c) && (0 >= Qe(Nf(a)) ? 0 : null != a.J && null != a.J.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i) && !a.rb) && (Ic(a.J), a.rb = !0)
    };

    function $h(a, b) {
        if (b && b.data && b.source) {
            var c = b.data;
            if ("string" !== typeof c) var d = null;
            else {
                d = {};
                c = c.split("\n");
                for (var e = 0; e != c.length; ++e) {
                    var f = c[e],
                        g = f.indexOf("=");
                    if (!(0 >= g)) {
                        var h = Number(f.substr(0, g));
                        f = f.substr(g + 1);
                        switch (h) {
                            case 36:
                            case 26:
                            case 15:
                            case 8:
                            case 11:
                            case 16:
                            case 5:
                            case 18:
                                f = "true" == f;
                                break;
                            case 4:
                            case 33:
                            case 6:
                            case 25:
                            case 28:
                            case 29:
                            case 24:
                            case 31:
                            case 30:
                            case 23:
                            case 22:
                            case 7:
                            case 21:
                            case 20:
                                f = Number(f);
                                break;
                            case 19:
                            case 3:
                                if (ra(decodeURIComponent)) try {
                                    f = decodeURIComponent(f)
                                } catch (p) {
                                    throw Error("Error: URI malformed: " + f);
                                }
                        }
                        d[h] = f
                    }
                }
                d = d[0] ? d : null
            }
            if (c = d)
                if (e = c[0], Ga("goog_creative_loaded goog_dom_content_loaded goog_listener_status goog_provide_mode goog_request_monitoring goog_stop_monitoring".split(" "), e) && (d = Eg(new nd(c[4], c[12]))))
                    if (h = c[33], 0 < h && -1 == d.ta && (d.ta = h), "goog_stop_monitoring" === e) Kg(d);
                    else if ((c[35] || "goog_creative_loaded" === e) && d.T(), Ga(d.aa, b.source) || d.aa.push(b.source), "goog_request_monitoring" === e || !d.yb)
                if (d.yb = !0, void 0 !== c[16] && (d.ca = !!c[16]), c[19] && d.za(c[19]), void 0 !== c[6]) {
                    b = c[6];
                    c = ai(b, d.w);
                    if (c != d.w) {
                        if (5 == c) {
                            d.o = !0;
                            Kg(d);
                            return
                        }
                        d.w = c;
                        d.qa = ph(c)
                    }
                    4 == b && d.T();
                    b = U.g();
                    c = ng(d, "goog_acknowledge_monitoring");
                    c[8] = b.b;
                    c[36] = b.A;
                    Ge(d.b.b, c, d.aa);
                    b = R.g();
                    d.o && b.b ? (a.Na(d, b.b), Kg(d)) : a.c = !0
                }
        }
    }

    function Sh(a) {
        if (a && od(mg(a))) {
            var b = ng(a, "goog_get_mode");
            Ge(a.b.b, b)
        }
    }

    function Th(a) {
        if (!a.i) {
            ue(E, "message", function(c) {
                return $h(a, c)
            }, 132);
            var b = bi().contentWindow;
            b && ue(b, "message", function(c) {
                return $h(a, c)
            }, 132);
            a.i = !0
        }
    }

    function ci(a) {
        ue(K(), "unload", function() {
            Zh(a, "u")
        }, 133)
    }

    function ai(a, b) {
        return Ea([5, 2, 4, 3, 1, 0], function(c) {
            return c === a || c === b
        }) || 0
    }
    l.Kb = function(a) {
        (a = Fg(a)) && Kg(a)
    };
    l.Lb = function(a, b) {
        a && b && sa(a) && 1 == a.nodeType && sa(b) && 1 == b.nodeType && (a = Fg(a)) && (K(), Mf(a), a.b.a = b, Rf(a), hg(a, b), a.a && (a = a.a, a.H(), a.c = b, a.Aa(), a.P()))
    };

    function bi() {
        var a = hc("IFRAME", {
            id: "google_osd_static_frame_" + Math.floor(1E13 * Math.random()),
            name: "google_osd_static_frame"
        });
        a.style.display = "none";
        a.style.width = "0px";
        a.style.height = "0px";
        E.document.body.appendChild(a);
        return a
    }

    function Mh(a) {
        ua("Goog_Osd_UnloadAdBlock", he(134, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Kb.apply(a, r(c))
        }));
        ua("Goog_Osd_UpdateElementToMeasure", he(135, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Lb.apply(a, r(c))
        }))
    };
    ge(155, function() {
        Nh();
        var a = new Lh;
        Y.i = "osd";
        ci(a);
        Pc() ? a.kb() : (Oh(a), ue(K(), "load", function() {
            Q().setTimeout(he(153, function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                return a.kb.apply(a, r(c))
            }), 100)
        }, 154))
    });
}).call(this, this, this.document);