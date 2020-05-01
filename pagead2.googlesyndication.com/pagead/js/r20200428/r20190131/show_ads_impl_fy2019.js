(function(window, document, location) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var n, q = this || self;

    function ca(a, b, c) {
        a = a.split(".");
        c = c || q;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function ea() {
        if (null === fa) a: {
            var a = q.document;
            if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && ia.test(a)) {
                fa = a;
                break a
            }
            fa = ""
        }
        return fa
    }
    var ia = /^[\w+/_-]+[=]{0,2}$/,
        fa = null;

    function la() {}

    function na(a) {
        a.lb = void 0;
        a.G = function() {
            return a.lb ? a.lb : a.lb = new a
        }
    }

    function oa(a) {
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

    function pa(a) {
        return "array" == oa(a)
    }

    function qa(a) {
        return "function" == oa(a)
    }

    function ra(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function sa(a) {
        return Object.prototype.hasOwnProperty.call(a, ta) && a[ta] || (a[ta] = ++va)
    }
    var ta = "closure_uid_" + (1E9 * Math.random() >>> 0),
        va = 0;

    function wa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function xa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function ya(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ya = wa : ya = xa;
        return ya.apply(null, arguments)
    }

    function za(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Aa() {
        var a = Ba,
            b = u();
        ca("Goog_AdSense_getAdAdapterInstance", a, b)
    }

    function z(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };

    function Ca(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ca);
        else {
            const b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    z(Ca, Error);
    Ca.prototype.name = "CustomError";
    var Da;

    function Ea(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ca.call(this, c + a[d])
    }
    z(Ea, Ca);
    Ea.prototype.name = "AssertionError";

    function Fa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ga(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ha(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ia(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ja(a, b, c) {
        var d = c;
        Ga(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ka(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function La(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    }

    function Ma(a, b) {
        return 0 <= Fa(a, b)
    }

    function Na(a, b) {
        b = Fa(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Oa(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Pa(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Qa(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c],
                e = d,
                f = oa(e);
            if ("array" == f || "object" == f && "number" == typeof e.length) {
                e = a.length || 0;
                f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function Ra(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function Sa(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = Sa.apply(null, Ra(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    }

    function Ta(a, b) {
        b = b || Math.random;
        for (var c = a.length - 1; 0 < c; c--) {
            var d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function Ua() {
        return !1
    }

    function Va() {
        return !0
    }

    function Wa(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function Xa(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Ya(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Za(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function $a(a, b) {
        let c = 0;
        return function(d) {
            q.clearTimeout(c);
            const e = arguments;
            c = q.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function ab(a, b) {
        function c() {
            e = q.setTimeout(d, 63);
            a.apply(b, g)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };

    function bb(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function cb(a) {
        var b = db;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function eb(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function fb(a, b) {
        return null !== a && b in a
    }

    function gb(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    var hb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function ib(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < hb.length; f++) c = hb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var lb = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function mb(a, b) {
        this.l = a === nb && b || "";
        this.m = ob
    }
    mb.prototype.Z = !0;
    mb.prototype.j = function() {
        return this.l
    };

    function pb(a) {
        return a instanceof mb && a.constructor === mb && a.m === ob ? a.l : "type_error:Const"
    }
    var ob = {},
        nb = {};

    function qb(a, b) {
        this.m = a === rb && b || "";
        this.o = sb
    }
    qb.prototype.Z = !0;
    qb.prototype.j = function() {
        return this.m.toString()
    };
    qb.prototype.kb = !0;
    qb.prototype.l = function() {
        return 1
    };

    function tb(a) {
        if (a instanceof qb && a.constructor === qb && a.o === sb) return a.m;
        oa(a);
        return "type_error:TrustedResourceUrl"
    }

    function ub(a, b) {
        var c = pb(a);
        if (!vb.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(wb, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof mb ? pb(d) : encodeURIComponent(String(d))
        });
        return new qb(rb, a)
    }
    var wb = /%{(\w+)}/g,
        vb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        sb = {},
        rb = {};

    function xb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function yb(a, b) {
        if (b) a = a.replace(zb, "&amp;").replace(Cb, "&lt;").replace(Db, "&gt;").replace(Eb, "&quot;").replace(Fb, "&#39;").replace(Gb, "&#0;");
        else {
            if (!Hb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(zb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Cb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Db, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Eb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Fb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Gb, "&#0;"))
        }
        return a
    }
    var zb = /&/g,
        Cb = /</g,
        Db = />/g,
        Eb = /"/g,
        Fb = /'/g,
        Gb = /\x00/g,
        Hb = /[\x00&<>"']/;

    function Ib(a, b) {
        let c = 0;
        a = xb(String(a)).split(".");
        b = xb(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = Jb(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || Jb(0 == e[2].length, 0 == f[2].length) || Jb(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function Jb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Kb(a, b) {
        this.m = a === Lb && b || "";
        this.o = Mb
    }
    Kb.prototype.Z = !0;
    Kb.prototype.j = function() {
        return this.m.toString()
    };
    Kb.prototype.kb = !0;
    Kb.prototype.l = function() {
        return 1
    };

    function Pb(a) {
        if (a instanceof Kb && a.constructor === Kb && a.o === Mb) return a.m;
        oa(a);
        return "type_error:SafeUrl"
    }
    var Qb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
        Rb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Sb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Tb(a) {
        if (a instanceof Kb) return a;
        a = "object" == typeof a && a.Z ? a.j() : String(a);
        Sb.test(a) || (a = "about:invalid#zClosurez");
        return new Kb(Lb, a)
    }

    function Ub(a, b) {
        if (a instanceof Kb) return a;
        a = "object" == typeof a && a.Z ? a.j() : String(a);
        if (b && /^data:/i.test(a)) {
            b = a.replace(/(%0A|%0D)/g, "");
            var c = b.match(Rb);
            c = c && Qb.test(c[1]);
            b = new Kb(Lb, c ? b : "about:invalid#zClosurez");
            if (b.j() == a) return b
        }
        Sb.test(a) || (a = "about:invalid#zClosurez");
        return new Kb(Lb, a)
    }
    var Mb = {},
        Lb = {};

    function Vb() {
        this.l = "";
        this.m = Wb
    }
    Vb.prototype.Z = !0;
    var Wb = {};
    Vb.prototype.j = function() {
        return this.l
    };

    function Xb(a) {
        var b = new Vb;
        b.l = a;
        return b
    }
    var Yb = Xb("");

    function Zb(a) {
        if (a instanceof Kb) return 'url("' + Pb(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof mb) a = pb(a);
        else {
            a = String(a);
            var b = a.replace($b, "$1").replace($b, "$1").replace(ac, "url");
            if (bc.test(b)) {
                if (b = !cc.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && fc(a)
                }
                a = b ? gc(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Ea("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function fc(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    var bc = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        ac = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        $b = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        cc = /\/\*/;

    function gc(a) {
        return a.replace(ac, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
                f = h;
                return k
            });
            b = Tb(d).j();
            return c + f + b + f + e
        })
    };
    var hc;
    a: {
        var ic = q.navigator;
        if (ic) {
            var jc = ic.userAgent;
            if (jc) {
                hc = jc;
                break a
            }
        }
        hc = ""
    }

    function A(a) {
        return -1 != hc.indexOf(a)
    }

    function kc(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function lc() {
        return A("Opera")
    }

    function mc() {
        return A("Trident") || A("MSIE")
    }

    function nc() {
        return A("Firefox") || A("FxiOS")
    }

    function oc() {
        return A("Safari") && !(pc() || A("Coast") || lc() || A("Edge") || A("Edg/") || A("OPR") || nc() || A("Silk") || A("Android"))
    }

    function pc() {
        return (A("Chrome") || A("CriOS")) && !A("Edge")
    }

    function qc() {
        function a(e) {
            var f = La(e, d);
            return c[0 > f ? null : "string" === typeof e ? e.charAt(f) : e[f]] || ""
        }
        var b = hc;
        if (mc()) return rc(b);
        b = kc(b);
        var c = {};
        Ga(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = za(fb, c);
        return lc() ? a(["Version", "Opera"]) : A("Edge") ? a(["Edge"]) : A("Edg/") ? a(["Edg"]) : pc() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
    }

    function rc(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                } else b = "7.0";
                else b = c[1];
        return b
    };

    function sc() {
        this.m = "";
        this.v = tc;
        this.o = null
    }
    sc.prototype.kb = !0;
    sc.prototype.l = function() {
        return this.o
    };
    sc.prototype.Z = !0;
    sc.prototype.j = function() {
        return this.m.toString()
    };

    function uc(a) {
        if (a instanceof sc && a.constructor === sc && a.v === tc) return a.m;
        oa(a);
        return "type_error:SafeHtml"
    }

    function vc(a) {
        if (a instanceof sc) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.kb && (c = a.l());
        return wc(yb(b && a.Z ? a.j() : String(a)), c)
    }
    var xc = /^[a-zA-Z0-9-]+$/,
        yc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        zc = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };

    function Ac(a) {
        function b(f) {
            Array.isArray(f) ? Ga(f, b) : (f = vc(f), e.push(uc(f).toString()), f = f.l(), 0 == d ? d = f : 0 != f && d != f && (d = null))
        }
        var c = vc(Bc),
            d = c.l(),
            e = [];
        Ga(a, b);
        return wc(e.join(uc(c).toString()), d)
    }

    function Cc(a) {
        return Ac(Array.prototype.slice.call(arguments))
    }
    var tc = {};

    function wc(a, b) {
        return Dc(a, b)
    }

    function Dc(a, b) {
        var c = new sc;
        c.m = a;
        c.o = b;
        return c
    }
    Dc("<!DOCTYPE html>", 0);
    var Bc = Dc("", 0);
    Dc("<br>", 0);
    var Ec = Ya(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = uc(Bc);
        return !b.parentElement
    });

    function Fc(a, b) {
        if (Ec())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = uc(b)
    }

    function Gc(a, b) {
        b = b instanceof Kb ? b : Ub(b, /^data:image\//i.test(b));
        a.src = Pb(b)
    }

    function Hc(a, b) {
        a.src = tb(b);
        (b = ea()) && a.setAttribute("nonce", b)
    };

    function Ic(a) {
        return a = yb(a, void 0)
    }

    function Jc(a, b) {
        var c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var d = b ? b.createElement("div") : q.document.createElement("div");
        return a.replace(Kc, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.substr(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = Dc(e + " ", null), Fc(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Kc = /&([^;\s<&]+);?/g,
        Lc = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        Nc = {
            "'": "\\'"
        };

    function Oc(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Pc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Qc(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Rc(a) {
        Rc[" "](a);
        return a
    }
    Rc[" "] = la;

    function Sc(a, b) {
        try {
            return Rc(a[b]), !0
        } catch (c) {}
        return !1
    }

    function Tc(a, b) {
        var c = Uc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Vc = lc(),
        Wc = mc(),
        Xc = A("Edge"),
        Yc = Xc || Wc,
        Zc = A("Gecko") && !(-1 != hc.toLowerCase().indexOf("webkit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        $c = -1 != hc.toLowerCase().indexOf("webkit") && !A("Edge");

    function ad() {
        var a = q.document;
        return a ? a.documentMode : void 0
    }
    var bd;
    a: {
        var cd = "",
            dd = function() {
                var a = hc;
                if (Zc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Xc) return /Edge\/([\d\.]+)/.exec(a);
                if (Wc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if ($c) return /WebKit\/(\S+)/.exec(a);
                if (Vc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();dd && (cd = dd ? dd[1] : "");
        if (Wc) {
            var ed = ad();
            if (null != ed && ed > parseFloat(cd)) {
                bd = String(ed);
                break a
            }
        }
        bd = cd
    }
    var fd = bd,
        Uc = {};

    function gd(a) {
        return Tc(a, function() {
            return 0 <= Ib(fd, a)
        })
    }
    var hd;
    if (q.document && Wc) {
        var id = ad();
        hd = id ? id : parseInt(fd, 10) || void 0
    } else hd = void 0;
    var jd = hd;
    var kd = {},
        ld = null;

    function D() {}
    var md = "function" == typeof Uint8Array;

    function M(a, b, c, d) {
        a.j = null;
        b || (b = []);
        a.I = void 0;
        a.v = -1;
        a.m = b;
        a: {
            if (b = a.m.length) {
                --b;
                var e = a.m[b];
                if (!(null === e || "object" != typeof e || Array.isArray(e) || md && e instanceof Uint8Array)) {
                    a.A = b - a.v;
                    a.o = e;
                    break a
                }
            }
            a.A = Number.MAX_VALUE
        }
        a.D = {};
        if (c)
            for (b = 0; b < c.length; b++) e = c[b], e < a.A ? (e += a.v, a.m[e] = a.m[e] || nd) : (od(a), a.o[e] = a.o[e] || nd);
        if (d && d.length)
            for (b = 0; b < d.length; b++) {
                e = c = void 0;
                for (var f = a, g = d[b], h = 0; h < g.length; h++) {
                    var k = g[h],
                        l = N(f, k);
                    null != l && (e = k, c = l, pd(f, k, void 0))
                }
                e && pd(f, e, c)
            }
    }
    var nd = [];

    function od(a) {
        var b = a.A + a.v;
        a.m[b] || (a.o = a.m[b] = {})
    }

    function N(a, b) {
        if (b < a.A) {
            b += a.v;
            var c = a.m[b];
            return c === nd ? a.m[b] = [] : c
        }
        if (a.o) return c = a.o[b], c === nd ? a.o[b] = [] : c
    }

    function qd(a, b) {
        a = N(a, b);
        return null == a ? a : +a
    }

    function rd(a, b) {
        a = N(a, b);
        return null == a ? a : !!a
    }

    function sd(a, b, c) {
        a = N(a, b);
        return null == a ? c : a
    }

    function td(a, b) {
        a = rd(a, b);
        return null == a ? !1 : a
    }

    function ud(a, b, c) {
        a = qd(a, b);
        return null == a ? c : a
    }

    function pd(a, b, c) {
        b < a.A ? a.m[b + a.v] = c : (od(a), a.o[b] = c);
        return a
    }

    function vd(a, b, c, d) {
        c !== d ? pd(a, b, c) : b < a.A ? a.m[b + a.v] = null : (od(a), delete a.o[b]);
        return a
    }

    function O(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            var d = N(a, c);
            d && (a.j[c] = new b(d))
        }
        return a.j[c]
    }

    function Q(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            for (var d = N(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.j[c] = e
        }
        b = a.j[c];
        b == nd && (b = a.j[c] = []);
        return b
    }

    function wd(a, b, c) {
        a.j || (a.j = {});
        var d = c ? xd(c) : c;
        a.j[b] = c;
        return pd(a, b, d)
    }

    function yd(a, b) {
        a.j || (a.j = {});
        b = b || [];
        for (var c = [], d = 0; d < b.length; d++) c[d] = xd(b[d]);
        a.j[5] = b;
        pd(a, 5, c)
    }

    function xd(a) {
        if (a.j)
            for (var b in a.j) {
                var c = a.j[b];
                if (pa(c))
                    for (var d = 0; d < c.length; d++) c[d] && xd(c[d]);
                else c && xd(c)
            }
        return a.m
    }
    D.prototype.C = md ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            var b;
            void 0 === b && (b = 0);
            if (!ld) {
                ld = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    kd[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        void 0 === ld[h] && (ld[h] = g)
                    }
                }
            }
            b = kd[b];
            c = [];
            for (d = 0; d < this.length; d += 3) {
                var k = this[d],
                    l = (e = d + 1 < this.length) ? this[d + 1] : 0;
                h = (f = d + 2 < this.length) ? this[d + 2] : 0;
                g = k >>
                    2;
                k = (k & 3) << 4 | l >> 4;
                l = (l & 15) << 2 | h >> 6;
                h &= 63;
                f || (h = 64, e || (l = 64));
                c.push(b[g], b[k], b[l] || "", b[h] || "")
            }
            return c.join("")
        };
        try {
            return JSON.stringify(this.m && xd(this), zd)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    } : function() {
        return JSON.stringify(this.m && xd(this), zd)
    };

    function zd(a, b) {
        return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    }

    function Ad(a, b) {
        return new a(b ? JSON.parse(b) : null)
    }
    D.prototype.clone = function() {
        return new this.constructor(Bd(xd(this)))
    };

    function Bd(a) {
        if (Array.isArray(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Bd(d) : d)
            }
            return b
        }
        if (md && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Bd(d) : d);
        return b
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
    var Cd = Wc && !gd("9"),
        Dd = Wc || Vc || $c;

    function Ed(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function Jd(a) {
        return Ja(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function Kd(a) {
        return Jd.apply(null, arguments) / arguments.length
    };

    function Ld(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    n = Ld.prototype;
    n.clone = function() {
        return new Ld(this.x, this.y)
    };
    n.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    n.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    n.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    n.translate = function(a, b) {
        a instanceof Ld ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
        return this
    };
    n.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };

    function Md(a, b) {
        this.width = a;
        this.height = b
    }
    n = Md.prototype;
    n.clone = function() {
        return new Md(this.width, this.height)
    };
    n.aspectRatio = function() {
        return this.width / this.height
    };
    n.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    n.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    n.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    n.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };

    function Nd(a) {
        return a ? new Od(Pd(a)) : Da || (Da = new Od)
    }

    function Qd(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Md(a.clientWidth, a.clientHeight)
    }

    function Rd(a) {
        var b = a.scrollingElement ? a.scrollingElement : $c || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return Wc && gd("10") && a.pageYOffset != b.scrollTop ? new Ld(b.scrollLeft, b.scrollTop) : new Ld(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Sd(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Td(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Ud(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function Pd(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var Vd = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Wd = {
            IMG: " ",
            BR: "\n"
        };

    function Xd(a) {
        if (Cd && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Yd(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Cd || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Yd(a, b, c) {
        if (!(a.nodeName in Vd))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Wd) b.push(Wd[a.nodeName]);
        else
            for (a = a.firstChild; a;) Yd(a, b, c), a = a.nextSibling
    }

    function Zd(a) {
        return $d(a, function(b) {
            return "INS" == b.nodeName && "string" === typeof b.className && Ma(b.className.split(/\s+/), "adsbygoogle")
        })
    }

    function $d(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Od(a) {
        this.j = a || q.document || document
    }

    function ae(a, b) {
        return Td(a.j, b)
    }
    Od.prototype.K = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    Od.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    Od.prototype.l = Ud;
    var be = {
            passive: !0
        },
        ce = Ya(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                q.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function de(a) {
        return a ? a.passive && ce() ? a : a.capture || !1 : !1
    }

    function R(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, de(d)), !0) : !1
    }

    function ee(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, de(d)), !0) : !1
    };

    function fe(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                b.document.body.removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            Hc(f, a);
            "complete" !== b.document.readyState ? R(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };

    function ge(a) {
        const b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.ma}`;
        let c = Promise.resolve(void 0);
        try {
            c = he(b)
        } catch (d) {}
        return c.then(d => {
            if (d) {
                var e = a.ya || d.sodar_query_id;
                if (e && d.bg_hash_basename && d.bg_binary) return {
                    context: a.m,
                    Pc: d.bg_hash_basename,
                    Oc: d.bg_binary,
                    ed: `${a.j}_${a.l}`,
                    ya: e,
                    ma: a.ma
                }
            }
        }, () => {})
    }
    let he = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });

    function ie(a) {
        ge(a).then(b => {
            if (b) {
                var c = window,
                    d = c.GoogleGcLKhOms;
                d && "function" === typeof d.push || (d = c.GoogleGcLKhOms = []);
                d.push({
                    ["_ctx_"]: b.context,
                    ["_bgv_"]: b.Pc,
                    ["_bgp_"]: b.Oc,
                    ["_li_"]: b.ed,
                    ["_jk_"]: b.ya,
                    ["_st_"]: b.ma
                });
                if (d = c.GoogleDX5YKUSk) c.GoogleDX5YKUSk = void 0, d[1]();
                c = ub(new mb(nb, "//tpc.googlesyndication.com/sodar/%{basename}.js"), {
                    basename: "sodar2"
                });
                fe(c)
            }
            return b
        })
    };
    var je = class {
            constructor(a) {
                this.j = a.j;
                this.l = a.l;
                this.m = a.m;
                this.ya = a.ya;
                this.win = a.K();
                this.ma = a.ma
            }
        },
        ke = class {
            constructor(a, b, c) {
                this.j = a;
                this.l = b;
                this.m = c;
                this.win = window;
                this.ma = "env"
            }
            K() {
                return this.win
            }
        };

    function le(a) {
        M(this, a, me, null)
    }
    z(le, D);
    var me = [2, 3];

    function ne(a) {
        M(this, a, null, null)
    }
    z(ne, D);
    var oe = document,
        S = window;
    const pe = {
        Id: "google_adtest",
        Md: "google_ad_client",
        Nd: "google_ad_format",
        Od: "google_ad_height",
        ae: "google_ad_width",
        Sd: "google_ad_layout",
        Td: "google_ad_layout_key",
        Ud: "google_ad_output",
        Vd: "google_ad_region",
        Yd: "google_ad_slot",
        Zd: "google_ad_type",
        $d: "google_ad_url",
        be: "google_allow_expandable_ads",
        re: "google_analytics_domain_name",
        se: "google_analytics_uacct",
        Ie: "google_container_id",
        Te: "google_gl",
        qf: "google_enable_ose",
        Cf: "google_full_width_responsive",
        xg: "google_rl_filtering",
        wg: "google_rl_mode",
        yg: "google_rt",
        vg: "google_rl_dest_url",
        cg: "google_max_radlink_len",
        hg: "google_num_radlinks",
        ig: "google_num_radlinks_per_unit",
        Ld: "google_ad_channel",
        bg: "google_max_num_ads",
        dg: "google_max_responsive_height",
        De: "google_color_border",
        pf: "google_enable_content_recommendations",
        Qe: "google_content_recommendation_ui_type",
        Pe: "google_source_type",
        Oe: "google_content_recommendation_rows_num",
        Me: "google_content_recommendation_columns_num",
        Le: "google_content_recommendation_ad_positions",
        Re: "google_content_recommendation_use_square_imgs",
        Fe: "google_color_link",
        Ee: "google_color_line",
        He: "google_color_url",
        Jd: "google_ad_block",
        Xd: "google_ad_section",
        Kd: "google_ad_callback",
        ze: "google_captcha_token",
        Ge: "google_color_text",
        pe: "google_alternate_ad_url",
        Rd: "google_ad_host_tier_id",
        Ae: "google_city",
        Pd: "google_ad_host",
        Qd: "google_ad_host_channel",
        qe: "google_alternate_color",
        Ce: "google_color_bg",
        tf: "google_encoding",
        zf: "google_font_face",
        We: "google_cust_ch",
        Ze: "google_cust_job",
        Ye: "google_cust_interests",
        Xe: "google_cust_id",
        $e: "google_cust_u_url",
        Jf: "google_hints",
        Nf: "google_image_size",
        fe: "google_scs",
        rg: "google_core_dbp",
        eg: "google_mtl",
        gh: "google_cpm",
        Ke: "google_contents",
        gg: "google_native_settings_key",
        ph: "google_video_url_to_fetch",
        Se: "google_country",
        Xg: "google_targeting",
        Af: "google_font_size",
        ef: "google_disable_video_autoplay",
        oh: "google_video_product_type",
        mh: "google_video_doc_id",
        jg: "google_only_pyv_ads",
        Zf: "google_lact",
        kh: "google_cust_gender",
        sh: "google_yt_up",
        rh: "google_yt_pt",
        Tg: "google_cust_lh",
        Sg: "google_cust_l",
        fh: "google_tfs",
        fg: "google_native_ad_template",
        Wf: "google_kw",
        Ug: "google_tag_for_child_directed_treatment",
        Vg: "google_tag_for_under_age_of_consent",
        Bg: "google_region",
        Ve: "google_cust_criteria",
        Wd: "google_safe",
        Ue: "google_ctr_threshold",
        Fg: "google_resizing_allowed",
        Hg: "google_resizing_width",
        Gg: "google_resizing_height",
        jh: "google_cust_age",
        LANGUAGE: "google_language",
        Xf: "google_kw_type",
        sg: "google_pucrd",
        qg: "google_page_url",
        Wg: "google_tag_partner",
        rf: "google_enable_single_iframe",
        Lg: "google_restrict_data_processing"
    };

    function qe(a) {
        M(this, a, null, re)
    }
    z(qe, D);

    function se(a) {
        M(this, a, null, null)
    }
    z(se, D);
    var re = [
        [3, 4, 5]
    ];

    function te(a) {
        this.j = a || {
            cookie: ""
        }
    }
    te.prototype.set = function(a, b, c) {
        let d, e;
        let f = !1,
            g;
        if ("object" === typeof c) {
            g = c.xh;
            f = c.zd || !1;
            var h = c.domain || void 0;
            e = c.path || void 0;
            d = c.jd
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (h ? ";domain=" + h : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(+new Date + 1E3 * d)).toUTCString()) + (f ? ";secure" : "") + (null != g ? ";samesite=" +
            g : "")
    };
    te.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = xb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    const ue = a => (a = (new te(a)).get("DATA_USE_CONSENT", "")) ? a : null;
    var ve = a => {
        var b = (b = (new te(a)).get("FCCDCF", "")) ? b : null;
        try {
            var c = b ? Ad(qe, b) : null
        } catch (d) {
            c = null
        }
        if (!c) return ue(a);
        c = O(c, se, 3);
        if (!c || null == N(c, 1)) return ue(a);
        a = N(c, 2);
        b = Date.now();
        if (a) {
            if (b < a || b > a + 33696E6) return null
        } else return null;
        return N(c, 1)
    };

    function we(a) {
        M(this, a, xe, null)
    }
    z(we, D);
    var xe = [1, 2, 3, 4];

    function ye(a) {
        ze();
        return new qb(rb, a)
    }
    var ze = la;

    function Ae() {
        return !(A("iPad") || A("Android") && !A("Mobile") || A("Silk")) && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))
    };
    var Be = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Ce(a) {
        return a.match(Be)
    }

    function De(a) {
        return a ? decodeURI(a) : a
    };

    function Ee(a) {
        try {
            return !!a && null != a.location.href && Sc(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function Fe(a, b, c, d) {
        d = d || q;
        c && (d = Ge(d));
        for (c = 0; d && 40 > c++ && (!b && !Ee(d) || !a(d));) d = Ge(d)
    }

    function He() {
        let a = q;
        Fe(b => {
            a = b;
            return !1
        });
        return a
    }

    function Ge(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch (b) {}
        return null
    }

    function Ie(a, b) {
        const c = a.createElement("script");
        Hc(c, ye(b));
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Je(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Ke(a, b, c = !0) {
        let d = !1;
        c || (d = Le());
        return !d && !Me() && (c = Math.random(), c < b) ? (c = Ne(q), a[Math.floor(c * a.length)]) : null
    }

    function Ne(a) {
        if (!a.crypto) return Math.random();
        try {
            const b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function Oe(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Pe() {
        const a = [];
        Oe(Qe, function(b, c) {
            a.push(c)
        });
        return a
    }

    function Re(a) {
        const b = [];
        Oe(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Se(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Me = Ya(() => Ka(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Te) || 1E-4 > Math.random()),
        Le = Ya(() => -1 != hc.indexOf("MSIE"));
    const Te = a => -1 != hc.indexOf(a);
    var Ue = /^([0-9.]+)px$/,
        Ve = /^(-?[0-9.]{1,30})$/;

    function We(a) {
        return Ve.test(a) && (a = Number(a), !isNaN(a)) ? a : null
    }

    function Xe(a) {
        return /^true$/.test(a)
    }

    function Ye(a) {
        return (a = Ue.exec(a)) ? +a[1] : null
    }

    function Ze() {
        var a = q.document.URL;
        if (!a) return "";
        const b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (c) {}
        return ""
    }
    const $e = {
            ce: "allow-forms",
            de: "allow-modals",
            ee: "allow-orientation-lock",
            ge: "allow-pointer-lock",
            he: "allow-popups",
            ie: "allow-popups-to-escape-sandbox",
            je: "allow-presentation",
            ke: "allow-same-origin",
            le: "allow-scripts",
            me: "allow-top-navigation",
            ne: "allow-top-navigation-by-user-activation"
        },
        nf = Ya(() => Re($e));

    function of () {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation"];
        const b = nf();
        return a.length ? Ha(b, c => !Ma(a, c)) : b
    }

    function pf() {
        const a = Td(document, "IFRAME"),
            b = {};
        Ga(nf(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var qf = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        rf = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (qf(a, b)) return a;
                if (!(a = Ge(a))) break
            }
            return null
        },
        wf = (a, b) => {
            a.style.setProperty ? Oe(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            }) : a.style.cssText = sf(tf(uf(a.style.cssText), vf(b, c => c + " !important")))
        },
        tf = Object.assign || function(a, b) {
            for (let c = 1; c < arguments.length; c++) {
                const d = arguments[c];
                if (d)
                    for (let e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        },
        vf = (a, b) => {
            const c = {};
            for (let d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
            return c
        },
        sf = a => {
            const b = [];
            Oe(a, (c, d) => {
                null != c && "" !== c && b.push(d + ":" + c)
            });
            return b.length ? b.join(";") + ";" : ""
        },
        uf = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                Ga((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        xf = {
            "http://googleads.g.doubleclick.net": !0,
            "http://pagead2.googlesyndication.com": !0,
            "https://googleads.g.doubleclick.net": !0,
            "https://pagead2.googlesyndication.com": !0
        },
        yf = /\.proxy\.googleprod\.com(:\d+)?$/,
        zf = (a, b = !1) => !!xf[a] || b && yf.test(a),
        Af = (a, b) => {
            b = La(a, b);
            if (0 <= b) {
                const c = a[b];
                Array.prototype.splice.call(a, b, 1);
                return c
            }
            return null
        },
        Bf = a => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * 2 ** 52)
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        };

    function Cf(a, b, c, d = []) {
        const e = new a.MutationObserver(f => {
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || Ud(h, b))) {
                        for (const k of d) k.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        Fe(f => {
            if (!f.parent || !Ee(f.parent)) return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let l = 0; l < g.length; l++) try {
                a: {
                    var h = g[l];
                    try {
                        var k = h.contentWindow || (h.contentDocument ? Sd(h.contentDocument) : null);
                        break a
                    } catch (m) {}
                    k =
                    null
                }
                if (k == f) {
                    Cf(f.parent, g[l], c, d);
                    break
                }
            }
            catch (m) {}
            return !1
        }, !1, !1, a)
    }
    var Df = (a, b) => {
        Cf(Sd(Pd(a)), a, b)
    };
    var Qe = {
        Uf: 0,
        Hf: 1,
        Gf: 2,
        Ff: 3,
        tg: 4,
        ug: 5,
        Lf: 6,
        If: 7
    };
    const Ef = a => {
        var b = document;
        try {
            const d = ve(b);
            var c = d ? Ad(we, d) : null
        } catch (d) {
            c = null
        }
        if (!c) return 0;
        if (rd(c, 7)) return 4;
        if (a) {
            if (Ma(N(c, 3), a)) return 2;
            if (Ma(N(c, 4), a)) return 3
        }
        return 1
    };

    function Ff(a, b, c = !1) {
        switch (a) {
            case 2:
            case 4:
                return !1;
            case 3:
                return !0;
            case 1:
                return b;
            default:
                return c && b
        }
    }
    const Gf = Ya(() => {
        const a = /[?&]fc(consent)?=alwaysshow([&#]|$)/;
        try {
            return a.test(q.top.location.href)
        } catch (b) {
            return a.test(q.location.href)
        }
    });
    var Hf = (a, b) => {
            for (var c = Pe().length, d = [], e = 0; e < c; e++) d[e] = 0;
            Gf() && (a = !0);
            d[0] = a ? 1 : 2;
            c = qf(q.top, "GoogleSetNPA") || qf(He(), "GoogleSetNPA");
            d[5] = c ? 1 : 2;
            d[4] = 2;
            e = !!q.googlefc || qf(q.top, "googlefcPresent");
            d[1] = e ? 1 : 2;
            var f = Ef(b);
            0 != f ? b = {
                Rb: f,
                Tb: 3
            } : (f = q.top, b = qf(f, "googlefcInactive") ? 4 : b && qf(f, `googlefcPA-${b}`) ? 2 : qf(f, "googlefcNPA") ? 3 : 0, b = {
                Rb: b,
                Tb: 2
            });
            const {
                Rb: g,
                Tb: h
            } = b;
            d[h] = g;
            return {
                zh: g,
                wd: c || Ff(g, a, e),
                jc: 0 == g && a && e,
                Sb: d.join(".")
            }
        },
        If = (a, b, c) => {
            const d = Hf(a, b);
            d.jc ? q.setTimeout(() => {
                    If(a, b, c)
                }, 1E3) :
                c(d)
        };
    class Jf {
        constructor(a, b, c, d) {
            this.j = a;
            this.pubWin = b;
            this.iframeWin = c;
            this.B = d || c || {};
            this.o = b.document.getElementById(this.B.google_async_iframe_id + "_anchor");
            this.T = b.document.getElementById(this.B.google_async_iframe_id + "_expand");
            this.v = -1;
            this.A = !1;
            this.F = "";
            this.l = 0;
            this.C = this.J = null;
            this.H = 0;
            this.D = null;
            this.N = 0;
            this.m = [];
            this.tcString = this.I = "";
            this.gdprApplies = void 0;
            this.addtlConsent = ""
        }
    };
    var Kf = (a, b) => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? b : a
    };
    const Lf = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/;
    var Mf = (a, b) => a ? (a = a.match(Lf)) ? a[0] : b : b;
    var Nf = () => "r20200428",
        Of = Xe("false"),
        Pf = Xe("false"),
        Qf = Xe("false"),
        Rf = Xe("true"),
        Sf = Xe("false"),
        Tf = Xe("true");
    let Uf = Tf || !Rf;
    var Vf = Kf("0.02", 0),
        Wf = Kf("0.0", 0);
    var Xf = () => Mf("", "googleads.g.doubleclick.net"),
        Yf = () => Mf("", "pagead2.googlesyndication.com");

    function Zf() {
        this.T = this.T;
        this.$ = this.$
    }
    Zf.prototype.T = !1;
    Zf.prototype.Ma = function() {
        this.T || (this.T = !0, this.l())
    };
    Zf.prototype.l = function() {
        if (this.$)
            for (; this.$.length;) this.$.shift()()
    };
    class $f {
        constructor(a) {
            this.methodName = a
        }
    }
    var ag = new $f(15),
        bg = new $f(2),
        cg = new $f(3),
        dg = new $f(5),
        eg = new $f(6),
        fg = (a, b, c) => b[a.methodName] || c || (() => {});

    function gg(a, b) {
        a.j = (c, d) => fg(dg, b)(c, d, 1);
        a.m = (c, d) => fg(eg, b)(c, d, 1);
        a.l = () => {
            fg(ag, b)(1)
        }
    }
    class T {
        constructor() {
            this.j = (a, b = !1) => b;
            this.m = (a, b = 0) => b;
            this.l = () => {}
        }
    }
    na(T);
    const hg = (a, b = 0) => T.G().m(a, b);

    function ig(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    n = ig.prototype;
    n.Pa = function() {
        return this.right - this.left
    };
    n.gb = function() {
        return this.bottom - this.top
    };
    n.clone = function() {
        return new ig(this.top, this.right, this.bottom, this.left)
    };
    n.contains = function(a) {
        return this && a ? a instanceof ig ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    n.expand = function(a, b, c, d) {
        ra(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };

    function jg(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    n.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    n.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    n.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    n.translate = function(a, b) {
        a instanceof Ld ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
        return this
    };
    n.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function kg(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    n = kg.prototype;
    n.clone = function() {
        return new kg(this.left, this.top, this.width, this.height)
    };

    function lg(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new kg(c, e, d - c, a - e)
        }
        return null
    }

    function mg(a, b) {
        var c = lg(a, b);
        if (!c || !c.height || !c.width) return [a.clone()];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new kg(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new kg(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new kg(a.left, d, b.left - a.left, e));
        h < f && c.push(new kg(h, d, f - h, e));
        return c
    }
    n.contains = function(a) {
        return a instanceof Ld ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    n.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    n.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    n.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    n.translate = function(a, b) {
        a instanceof Ld ? (this.left += a.x, this.top += a.y) : (this.left += a, "number" === typeof b && (this.top += b));
        return this
    };
    n.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    const ng = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function og(a = q) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function pg() {
        const a = og();
        return a && a.initialIntersection
    }

    function qg() {
        const a = pg();
        return a && ra(a.rootBounds) ? new Md(a.rootBounds.width, a.rootBounds.height) : null
    }

    function rg(a) {
        return (a = a || og()) ? Ee(a.master) ? a.master : null : null
    }

    function sg(a, b) {
        function c(g) {
            if (a.ampInaboxInitialized) e();
            else {
                var h, k = T.G().j(198, !1) && "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized || g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Ie(a.document, "https://cdn.ampproject.org/" + (g ? `rtv/${g}/` : "") + "amp4ads-host-v0.js"))
            }
        }
        const d = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let e = () => {},
            f = () => {};
        b && (d.push(b), f = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Na(d, b);
            e()
        });
        if (a.ampInaboxInitialized) return f;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        d.google_amp_listener_added || (d.google_amp_listener_added = !0, R(a, "message", c), e = () => {
            ee(a, "message", c)
        });
        return f
    };

    function tg(a, b = null) {
        ug(a, b)
    }

    function ug(a, b) {
        q.google_image_requests || (q.google_image_requests = []);
        const c = q.document.createElement("img");
        if (b) {
            const d = e => {
                b && b(e);
                ee(c, "load", d);
                ee(c, "error", d)
            };
            R(c, "load", d);
            R(c, "error", d)
        }
        c.src = a;
        q.google_image_requests.push(c)
    };

    function vg(a, b, c) {
        if ("string" === typeof b)(b = wg(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = wg(c, d);
                f && (c.style[f] = e)
            }
    }
    var xg = {};

    function wg(a, b) {
        var c = xg[b];
        if (!c) {
            var d = Pc(b);
            c = d;
            void 0 === a.style[d] && (d = ($c ? "Webkit" : Zc ? "Moz" : Wc ? "ms" : Vc ? "O" : null) + Qc(d), void 0 !== a.style[d] && (c = d));
            xg[b] = c
        }
        return c
    }

    function yg(a, b) {
        var c = Pd(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function zg(a) {
        return yg(a, "position") || (a.currentStyle ? a.currentStyle.position : null) || a.style && a.style.position
    }

    function Ag(a) {
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
        Wc && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function Bg(a) {
        var b = Pd(a),
            c = new Ld(0, 0);
        var d = b ? Pd(b) : document;
        d = !Wc || 9 <= Number(jd) || "CSS1Compat" == Nd(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = Ag(a);
        b = Rd(Nd(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Cg(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function Dg(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Cg(a, b) : 0
    }
    var Eg = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Fg(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Eg ? Eg[b] : Cg(a, b)
    };
    var U = (a, b) => {
            if (a)
                for (let c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        Gg = a => !(!a || !a.call) && "function" === typeof a,
        Hg = (a, b) => {
            if (a.filter) return a.filter(b, void 0);
            const c = [];
            for (let d = 0; d < a.length; d++) b.call(void 0, a[d], d, a) && c.push(a[d]);
            return c
        },
        Ig = () => {
            var a = u();
            "google_onload_fired" in a || (a.google_onload_fired = !1, R(a, "load", () => {
                a.google_onload_fired = !0
            }))
        },
        Jg = (a, b) => {
            const c = b.slice(-1);
            let d = "?" === c || "#" === c ? "" : "&";
            const e = [b];
            U(a, (f, g) => {
                if (f || 0 === f || !1 === f) "boolean" ===
                    typeof f && (f = f ? 1 : 0), e.push(d), e.push(g), e.push("="), e.push(encodeURIComponent(String(f))), d = "&"
            });
            return e.join("")
        },
        Kg = () => {
            try {
                return S.history.length
            } catch (a) {
                return 0
            }
        },
        Lg = a => {
            a = rg(og(a)) || a;
            a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
        },
        Mg = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        Ng = a => {
            let b;
            b = 9 !== a.nodeType && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g =
                            d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        Og = a => !!a.google_async_iframe_id,
        Pg = Og(window);
    let Qg = Pg && window.parent || window;
    var u = () => {
            if (Pg && !Ee(Qg)) {
                let a = "." + oe.domain;
                try {
                    for (; 2 < a.split(".").length && !Ee(Qg);) oe.domain = a = a.substr(a.indexOf(".") + 1), Qg = window.parent
                } catch (b) {}
                Ee(Qg) || (Qg = window)
            }
            return Qg
        },
        Rg = /(^| )adsbygoogle($| )/,
        Sg = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        Ug = () => {
            if (!S) return !1;
            try {
                return !(!S.navigator.standalone && !Tg(S).navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        Vg = () => {
            var a;
            let b;
            const c = window.ActiveXObject;
            if (navigator.plugins && navigator.mimeTypes.length) {
                if ((a = navigator.plugins["Shockwave Flash"]) &&
                    a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
            } else {
                if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                    b = 3;
                    for (a = 1; a;) try {
                        a = new c("ShockwaveFlash.ShockwaveFlash." + (b + 1)), b++
                    } catch (d) {
                        a = null
                    }
                    return b.toString()
                }
                if (mc()) {
                    a = null;
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash.7")
                    } catch (d) {
                        b = 0;
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash.6"), b = 6, a.AllowScriptAccess = "always"
                        } catch (e) {
                            if (6 === b) return b.toString()
                        }
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash")
                        } catch (e) {}
                    }
                    if (a) return b =
                        a.GetVariable("$version").split(" ")[1], b.replace(/,/g, ".")
                }
            }
            return "0"
        },
        Wg = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        Xg = () => {
            if (Qf) try {
                const a = S.google_cafe_host || S.top.google_cafe_host;
                if (a) return a
            } catch (a) {}
            return Yf()
        },
        Tg = a => Qf && a.google_top_window || a.top,
        Yg = a => {
            a = Tg(a);
            return Ee(a) ? a : null
        },
        Zg = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1],
                                        10),
                                    h = parseInt(f[2], 10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        },
        $g = (a, b) => a.source !== b.contentWindow && a.source.parent !== b.contentWindow ? !1 : !0;
    var ah = a => {
            a.google_ad_modifications || (a.google_ad_modifications = {});
            return a.google_ad_modifications
        },
        bh = (a, b) => {
            a = ah(a);
            a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
            const c = !a.processed_sra_frame_pingbacks[b];
            a.processed_sra_frame_pingbacks[b] = !0;
            return c
        };
    var ch = {
            ["google_ad_channel"]: "channel",
            ["google_ad_type"]: "ad_type",
            ["google_ad_format"]: "format",
            ["google_color_bg"]: "color_bg",
            ["google_color_border"]: "color_border",
            ["google_color_link"]: "color_link",
            ["google_color_text"]: "color_text",
            ["google_color_url"]: "color_url",
            ["google_page_url"]: "url",
            ["google_allow_expandable_ads"]: "ea",
            ["google_ad_section"]: "region",
            ["google_cpm"]: "cpm",
            ["google_encoding"]: "oe",
            ["google_safe"]: "adsafe",
            ["google_flash_version"]: "flash",
            ["google_font_face"]: "f",
            ["google_font_size"]: "fs",
            ["google_hints"]: "hints",
            ["google_ad_host"]: "host",
            ["google_ad_host_channel"]: "h_ch",
            ["google_ad_host_tier_id"]: "ht_id",
            ["google_kw_type"]: "kw_type",
            ["google_kw"]: "kw",
            ["google_contents"]: "contents",
            ["google_targeting"]: "targeting",
            ["google_adtest"]: "adtest",
            ["google_alternate_color"]: "alt_color",
            ["google_alternate_ad_url"]: "alternate_ad_url",
            ["google_cust_age"]: "cust_age",
            ["google_cust_ch"]: "cust_ch",
            ["google_cust_gender"]: "cust_gender",
            ["google_cust_interests"]: "cust_interests",
            ["google_cust_job"]: "cust_job",
            ["google_cust_l"]: "cust_l",
            ["google_cust_lh"]: "cust_lh",
            ["google_cust_u_url"]: "cust_u_url",
            ["google_cust_id"]: "cust_id",
            ["google_language"]: "hl",
            ["google_city"]: "gcs",
            ["google_country"]: "gl",
            ["google_region"]: "gr",
            ["google_content_recommendation_ad_positions"]: "ad_pos",
            ["google_content_recommendation_columns_num"]: "cr_col",
            ["google_content_recommendation_rows_num"]: "cr_row",
            ["google_content_recommendation_ui_type"]: "crui",
            ["google_content_recommendation_use_square_imgs"]: "cr_sq_img",
            ["google_color_line"]: "color_line",
            ["google_disable_video_autoplay"]: "disable_video_autoplay",
            ["google_full_width_responsive_allowed"]: "fwr",
            ["google_full_width_responsive"]: "fwrattr",
            ["efwr"]: "efwr",
            ["google_pgb_reactive"]: "pra",
            ["google_resizing_allowed"]: "rs",
            ["google_resizing_height"]: "rh",
            ["google_resizing_width"]: "rw",
            ["rpe"]: "rpe",
            ["google_responsive_formats"]: "resp_fmts",
            ["google_safe_for_responsive_override"]: "sfro",
            ["google_video_doc_id"]: "video_doc_id",
            ["google_video_product_type"]: "video_product_type",
            ["google_webgl_support"]: "wgl",
            ["google_refresh_count"]: "rc"
        },
        dh = {
            ["google_ad_block"]: "ad_block",
            ["google_ad_client"]: "client",
            ["google_ad_output"]: "output",
            ["google_ad_callback"]: "callback",
            ["google_ad_height"]: "h",
            ["google_ad_resize"]: "twa",
            ["google_ad_slot"]: "slotname",
            ["google_ad_unit_key"]: "adk",
            ["google_ad_dom_fingerprint"]: "adf",
            ["google_ad_width"]: "w",
            ["google_captcha_token"]: "captok",
            ["google_content_recommendation_columns_num"]: "cr_col",
            ["google_content_recommendation_rows_num"]: "cr_row",
            ["google_ctr_threshold"]: "ctr_t",
            ["google_cust_criteria"]: "cust_params",
            ["gfwrnwer"]: "fwrn",
            ["gfwrnher"]: "fwrnh",
            ["google_bfa"]: "bfa",
            ["ebfa"]: "ebfa",
            ["ebfaca"]: "ebfaca",
            ["google_image_size"]: "image_size",
            ["google_last_modified_time"]: "lmt",
            ["google_loeid"]: "loeid",
            ["google_max_num_ads"]: "num_ads",
            ["google_max_radlink_len"]: "max_radlink_len",
            ["google_mtl"]: "mtl",
            ["google_native_settings_key"]: "nsk",
            ["google_enable_content_recommendations"]: "ecr",
            ["google_num_radlinks"]: "num_radlinks",
            ["google_num_radlinks_per_unit"]: "num_radlinks_per_unit",
            ["google_pucrd"]: "pucrd",
            ["google_reactive_plaf"]: "plaf",
            ["google_reactive_plat"]: "plat",
            ["google_reactive_fba"]: "fba",
            ["google_reactive_sra_channels"]: "plach",
            ["google_responsive_auto_format"]: "rafmt",
            ["armr"]: "armr",
            ["google_rl_dest_url"]: "rl_dest_url",
            ["google_rl_filtering"]: "rl_filtering",
            ["google_rl_mode"]: "rl_mode",
            ["google_rt"]: "rt",
            ["google_source_type"]: "src_type",
            ["google_restrict_data_processing"]: "rdp",
            ["google_tag_for_child_directed_treatment"]: "tfcd",
            ["google_tag_for_under_age_of_consent"]: "tfua",
            ["google_tag_origin"]: "to",
            ["google_ad_semantic_area"]: "sem",
            ["google_tfs"]: "tfs",
            ["google_package"]: "pwprc",
            ["google_tag_partner"]: "tp",
            ["fra"]: "fpla",
            ["google_ml_rank"]: "mlr",
            ["google_apsail"]: "psa"
        },
        eh = {
            ["google_core_dbp"]: "dbp",
            ["google_lact"]: "lact",
            ["google_only_pyv_ads"]: "pyv",
            ["google_scs"]: "scs",
            ["google_video_url_to_fetch"]: "durl",
            ["google_yt_pt"]: "yt_pt",
            ["google_yt_up"]: "yt_up"
        };
    var fh = a => {
            U(ch, (b, c) => {
                a[c] = null
            });
            U(dh, (b, c) => {
                a[c] = null
            });
            U(eh, (b, c) => {
                a[c] = null
            });
            a.google_container_id = null;
            a.google_eids = null;
            a.google_page_location = null;
            a.google_referrer_url = null;
            a.google_enable_single_iframe = null;
            a.google_ad_region = null;
            a.google_gl = null;
            a.google_loader_used = null;
            a.google_loader_features_used = null;
            a.google_debug_params = null
        },
        gh = (a, b, c) => {
            a.l |= 2;
            return b[c % b.length]
        };
    var db = {
        zg: 0,
        vf: 1,
        wf: 2,
        Df: 8,
        Og: 9,
        Kg: 16,
        cf: 17,
        bf: 24,
        Yf: 25,
        ue: 26,
        te: 27,
        rc: 30,
        Qf: 32,
        Tf: 40
    };
    var hh = a => {
        const b = a.iframeWin;
        if (b && Og(b) && b != b.parent && b.google_async_iframe_close) {
            const c = () => {
                b.setTimeout(() => {
                    b.document.close()
                }, 0)
            };
            a.D ? a.D(c) : c()
        }
    };
    class ih {
        constructor(a, b, c = {}) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = c
        }
    };
    const jh = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i, /^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i, /^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i];
    var kh = a => Ka(jh, b => b.test(a));

    function lh(a) {
        if (a = /[-\w]+\.[-\w]+$/.exec(a)) switch (Oc(a[0].toLowerCase())) {
            case 1967261364:
                return 0;
            case 3147493546:
                return 1;
            case 1567346461:
                return 2;
            case 2183041838:
                return 3;
            case 763236279:
                return 4;
            case 1342279801:
                return 5;
            case 526831769:
                return 6;
            case 352806002:
                return 7;
            case 2755048925:
                return 8;
            case 3306848407:
                return 9;
            case 2207000920:
                return 10;
            case 484037040:
                return 11;
            case 3506871055:
                return 12;
            case 672143848:
                return 13;
            case 2528751226:
                return 14;
            case 2744854768:
                return 15;
            case 3703278665:
                return 16;
            case 2014749173:
                return 17;
            case 133063824:
                return 18;
            case 2749334602:
                return 19;
            case 3131239845:
                return 20;
            case 2074086763:
                return 21;
            case 795772493:
                return 22;
            case 290857819:
                return 23;
            case 3035947606:
                return 24;
            case 2983138003:
                return 25;
            case 2197138676:
                return 26;
            case 4216016165:
                return 27;
            case 239803524:
                return 28;
            case 975993579:
                return 29;
            case 1794940339:
                return 30;
            case 1314429186:
                return 31;
            case 1643618937:
                return 32;
            case 497159982:
                return 33;
            case 3882239661:
                return 34
        }
        return -1
    }

    function mh(a) {
        if (!a.length) return 0;
        let b = [];
        for (var c = 0; 34 >= c; c++) b[c] = 0;
        for (c = a.length - 1; 0 <= c; c--) {
            const d = lh(a[c]);
            0 <= d && (b[34 - d] = 1)
        }
        return parseInt(b.join(""), 2)
    };
    const nh = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function oh(a) {
        var b = a || q;
        const c = [];
        let d, e = null,
            f, g;
        do {
            g = b;
            Ee(g) ? (d = g.location.href, e = g.document && g.document.referrer || null, f = !0) : (d = e, e = null, f = !1);
            c.push(new ph(d || "", g, f));
            try {
                b = g.parent
            } catch (h) {
                b = null
            }
        } while (b && g != b);
        for (let h = 0, k = c.length - 1; h <= k; ++h) c[h].depth = k - h;
        g = a || q;
        if (g.location && g.location.ancestorOrigins && g.location.ancestorOrigins.length == c.length - 1)
            for (a = 1; a < c.length; ++a) b = c[a], b.url || (b.url = g.location.ancestorOrigins[a - 1] || "", b.Vb = !0);
        return c
    }

    function qh(a, b) {
        let c = 0;
        const d = (a = a.l[Math.max(a.l.length - 1, 0)].url || null) && De(Ce(a)[3] || null),
            e = Math.min(b.length, 26);
        for (let f = 0; f < e; f++) a = null != b[f] && De(Ce(b[f])[3] || null) || "", c *= 4, a && (d && a == d ? c += 3 : kh(b[f]) ? c += 2 : a && 0 <= lh(a) && (c += 1));
        return c
    }
    class rh {
        constructor(a) {
            a = (this.j = a || q) || q;
            this.m = a = a.top == a ? 1 : Ee(a.top) ? 2 : 3;
            3 != this.m && Date.parse(q.top.document.lastModified);
            this.l = oh(this.j)
        }
    }
    var sh = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        ph = class {
            constructor(a, b, c, d, e) {
                this.url = a;
                this.win = b;
                this.Vb = !!d;
                this.depth = "number" === typeof e ? e : null
            }
        };

    function th(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function uh(a, b, c, d, e) {
        const f = [];
        Oe(a, function(g, h) {
            (g = vh(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function vh(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(vh(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(uh(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function wh(a, b, c, d) {
        a.j.push(b);
        a.l[b] = th(c, d)
    }

    function xh(a) {
        if (!a.o) return a.A;
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return a.A - a.o.length - b - a.m.length - 1
    }

    function yh(a, b, c, d) {
        b = b + "//" + c + d;
        let e = xh(a) - d.length;
        if (0 > e) return "";
        a.j.sort(function(g, h) {
            return g - h
        });
        d = null;
        c = "";
        for (var f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let k = 0; k < h.length; k++) {
                if (!e) {
                    d = null == d ? g : d;
                    break
                }
                let l = uh(h[k], a.m, a.C);
                if (l) {
                    l = c + l;
                    if (e >= l.length) {
                        e -= l.length;
                        b += l;
                        c = a.m;
                        break
                    }
                    a.v && (c = e, l[c - 1] == a.m && --c, b += l.substr(0, c), c = a.m, e = 0);
                    d = null == d ? g : d
                }
            }
        }
        f = "";
        a.o && null != d && (f = c + a.o + "=" + (a.F || d));
        return b + f
    }
    class Oh {
        constructor(a, b, c, d, e) {
            this.A = c || 4E3;
            this.m = a || "&";
            this.C = b || ",$";
            this.o = void 0 !== d ? d : "trn";
            this.F = e || null;
            this.v = !1;
            this.l = {};
            this.D = 0;
            this.j = []
        }
    };

    function Ph(a, b, c, d, e, f) {
        if ((d ? a.j : Math.random()) < (e || a.l)) try {
            let g;
            c instanceof Oh ? g = c : (g = new Oh, Oe(c, (k, l) => {
                var m = g,
                    p = m.D++;
                k = th(l, k);
                m.j.push(p);
                m.l[p] = k
            }));
            const h = yh(g, a.v, a.m, a.o + b + "&");
            h && ("undefined" === typeof f ? tg(h) : tg(h, f))
        } catch (g) {}
    }
    class Qh {
        constructor(a, b, c, d) {
            this.v = a;
            this.m = b;
            this.o = c;
            this.l = d;
            this.j = Math.random()
        }
    };
    let Rh = !1,
        Sh = null;

    function Th() {
        var a = Uh();
        const b = new Vh;
        Oe(a.j, function(c, d) {
            b.j[d] = c
        });
        Oe(a.l, function(c, d) {
            b.l[d] = c
        });
        return b
    }

    function Wh() {
        if (null === Sh) {
            Sh = "";
            try {
                let a = "";
                try {
                    a = q.top.location.hash
                } catch (b) {
                    a = q.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Sh = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Sh
    }

    function Xh(a, b, c) {
        return "" == b ? "" : c ? a.l.hasOwnProperty(c) ? a.l[c] = b : "" : (a.j[b] = !0, b)
    }

    function Yh(a, b, c, d) {
        if (a.m) return "";
        if (d ? a.l.hasOwnProperty(d) && "" == a.l[d] : 1) {
            var e;
            e = (e = Wh()) ? (e = e.match(new RegExp("\\b(" + b.join("|") + ")\\b"))) ? e[0] : null : null;
            if (b = e ? e : Rh ? null : Ke(b, c, !1)) return Xh(a, b, d)
        }
        return ""
    }

    function Zh(a, b) {
        return a.l.hasOwnProperty(b) ? a.l[b] : ""
    }

    function $h(a) {
        const b = [];
        Oe(a.j, function(c, d) {
            b.push(d)
        });
        Oe(a.l, function(c) {
            "" != c && b.push(c)
        });
        return b
    }
    class Vh {
        constructor(a) {
            this.j = {};
            this.l = {};
            this.m = !1;
            a = a || [];
            for (let b = 0, c = a.length; b < c; ++b) this.l[a[b]] = ""
        }
    };
    var ai = () => {
            const a = q.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
        },
        bi = () => {
            const a = q.performance;
            return a && a.now ? a.now() : null
        };
    class ci {
        constructor(a, b, c, d = 0, e) {
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = d;
            this.uniqueId = Math.random();
            this.slotId = e
        }
    };
    const di = q.performance,
        ei = !!(di && di.mark && di.measure && di.clearMarks),
        fi = Ya(() => {
            var a;
            if (a = ei) a = Wh(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function gi(a) {
        a && di && fi() && (di.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), di.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function hi(a) {
        a.j = !1;
        a.l != a.m.google_js_reporting_queue && (fi() && Ga(a.l, gi), a.l.length = 0)
    }

    function ii(a, b) {
        if (a.j && "number" === typeof b.value) {
            var c = bi() || ai();
            b.duration = c - b.value;
            c = `goog_${b.label}_${b.uniqueId}_end`;
            di && fi() && di.mark(c);
            !a.j || 2048 < a.l.length || a.l.push(b)
        }
    }

    function ji(a, b) {
        if (!a.j) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw gi(c), e;
        }
        ii(a, c);
        return d
    }
    class ki {
        constructor(a, b) {
            this.l = [];
            this.m = b || q;
            let c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.l = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.j = fi() || (null != c ? c : Math.random() < a)
        }
        start(a, b) {
            if (!this.j) return null;
            const c = bi() || ai();
            a = new ci(a, b, c);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            di && fi() && di.mark(b);
            return a
        }
    };

    function li(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = mi(a.stack, b));
        return b
    }

    function mi(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (c) {
            return b
        }
    }

    function ni(a, b, c, d) {
        let e, f;
        try {
            a.m && a.m.j ? (f = a.m.start(b.toString(), 3), e = c(), ii(a.m, f)) : e = c()
        } catch (g) {
            c = a.o;
            try {
                gi(f), c = a.C(b, new ih(g, {
                    message: li(g)
                }), void 0, d)
            } catch (h) {
                a.j(217, h)
            }
            if (!c) throw g;
        }
        return e
    }

    function oi(a, b, c, d, e) {
        return (...f) => ni(a, b, () => c.apply(d, f), e)
    }
    class pi {
        constructor(a, b, c, d = null) {
            this.A = a;
            this.D = b;
            this.o = c;
            this.l = null;
            this.C = this.j;
            this.m = d;
            this.v = !1
        }
        j(a, b, c, d, e) {
            e = e || this.D;
            let f;
            try {
                const k = new Oh;
                k.v = !0;
                wh(k, 1, "context", a);
                b.error && b.meta && b.id || (b = new ih(b, {
                    message: li(b)
                }));
                b.msg && wh(k, 2, "msg", b.msg.substring(0, 512));
                var g = b.meta || {};
                b = g;
                if (this.l) try {
                    this.l(b)
                } catch (l) {}
                if (d) try {
                    d(b)
                } catch (l) {}
                d = k;
                g = [g];
                d.j.push(3);
                d.l[3] = g; {
                    const l = oh();
                    let m = new ph(q.location.href, q, !0, !1);
                    g = null;
                    const p = l.length - 1;
                    for (d = p; 0 <= d; --d) {
                        var h = l[d];
                        !g &&
                            nh.test(h.url) && (g = h);
                        if (h.url && !h.Vb) {
                            m = h;
                            break
                        }
                    }
                    h = null;
                    const r = l.length && l[p].url;
                    0 != m.depth && r && (h = l[p]);
                    f = new sh(m, h, g)
                }
                f.l && wh(k, 4, "top", f.l.url || "");
                wh(k, 5, "url", f.j.url || "");
                Ph(this.A, e, k, this.v, c)
            } catch (k) {
                try {
                    Ph(this.A, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: li(k),
                        url: f && f.j.url
                    }, this.v, c)
                } catch (l) {}
            }
            return this.o
        }
    };
    let qi, ri;
    const si = u(),
        ti = new ki(1, si),
        ui = a => {
            var b = S.jerExpIds;
            if (pa(b) && 0 !== b.length) {
                var c = a.eid;
                if (c) {
                    b = [...c.split(","), ...b];
                    c = {};
                    for (var d = 0, e = 0; e < b.length;) {
                        var f = b[e++];
                        var g = f;
                        g = ra(g) ? "o" + sa(g) : (typeof g).charAt(0) + g;
                        Object.prototype.hasOwnProperty.call(c, g) || (c[g] = !0, b[d++] = f)
                    }
                    b.length = d;
                    a.eid = b.join(",")
                } else a.eid = b.join(",")
            }
        },
        vi = a => {
            const b = S.jerUserAgent;
            b && (a.useragent = b)
        };
    qi = new Qh("http:" === S.location.protocol ? "http:" : "https:", "pagead2.googlesyndication.com", "/pagead/gen_204?id=", .01);
    "number" !== typeof si.google_srt && (si.google_srt = Math.random());
    var wi = si.google_srt;
    0 <= wi && 1 >= wi && (qi.j = wi);
    ri = new pi(qi, "jserror", !0, ti);
    ri.l = a => {
        ui(a);
        vi(a)
    };
    ri.v = !0;
    "complete" == si.document.readyState ? si.google_measure_js_timing || hi(ti) : ti.j && R(si, "load", () => {
        si.google_measure_js_timing || hi(ti)
    });
    var xi = () => {},
        yi = (a, b) => ni(ri, a, b, void 0),
        W = (a, b, c) => oi(ri, a, b, c, void 0),
        Y = (a, b, c) => {
            Ph(qi, a, b, !0, c, void 0)
        },
        zi = (a, b) => {
            Y("rmvasft", {
                code: a,
                branch: b ? "exp" : "cntr"
            })
        };
    var Ai = (a, b) => {
        const c = Ze();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(q.document.location.protocol), "//", encodeURIComponent(q.document.location.host)].join("")
    };
    class Bi {
        constructor(a) {
            this.j = this.l = null;
            qa(a) ? this.j = a : this.l = a
        }
        getVerifier(a) {
            return this.l ? this.l[a] : null
        }
        getSchema(a) {
            return this.j ? this.j(a) : null
        }
        doesReturnAnotherSchema() {
            return this.j ? !0 : !1
        }
    }
    var Ci = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            R(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = ee(a, "message", e));
                return g
            }
        },
        Di = (a, b, c, d = null) => {
            const e = Ci(a, b, Wa(c, () => e()), d);
            return e
        },
        Ei = class extends Error {
            constructor() {
                super()
            }
        },
        Fi = (a, b, c, d, e) => {
            if (Array.isArray(a)) {
                var f = a;
                for (var g = 0; g < a.length; g++) a[g] = Fi(a[g], b, c, d, e)
            } else if (ra(a)) {
                if (b.doesReturnAnotherSchema())
                    if (f =
                        b.getSchema(a)) {
                        if (b = f, b.doesReturnAnotherSchema()) return Fi(a, b, c, d, e)
                    } else throw new Ei("in_sc", c ? c : "root", a);
                f = {};
                for (g in a)
                    if (Object.prototype.hasOwnProperty.call(a, g)) {
                        d = b.getVerifier(g);
                        c = a[g];
                        var h = b;
                        if (d) {
                            const k = d.predicate || d;
                            if (qa(k)) {
                                h = k(c);
                                if (!h) {
                                    if (!d || !d.nullOnInvalid) throw new Ei("sm", g, c);
                                    e && (e[g] = !0);
                                    f[g] = null;
                                    continue
                                }
                                if (h instanceof Bi) d = null;
                                else {
                                    f[g] = c;
                                    continue
                                }
                            }
                        } else if (!ra(c)) continue;
                        f[g] = Fi(c, h, g, d, e)
                    }
            } else if (f = a, b = d ? d.predicate || d : void 0, b instanceof RegExp && !b.test("string" ===
                    typeof a || void 0 == a ? a : String(a)) || qa(b) && !b(a)) {
                if (!d || !d.nullOnInvalid) throw new Ei("sm", c, a);
                e && (e[c] = !0);
                f = null
            }
            return f
        },
        Hi = (a, b) => {
            var c = Gi;
            return Ci(a, "ct", (d, e) => {
                try {
                    const f = Fi(d, c, null, null, null);
                    b(f, e)
                } catch (f) {
                    if (!(f instanceof Ei)) throw f;
                }
            })
        },
        Ii = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && Ii(a[f], b, c, d, --e)
        };
    var Gi = new Bi({
        notify: /^expandable-xpc-ready$/
    });

    function Ji(a, b, c, d) {
        zf(d.origin, Qf) && "expandable-xpc-ready" == c.notify && Ki(a, b)
    }

    function Ki(a, b) {
        var c = a.jb;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Jb,
            f: a.sd,
            g: a.Gc,
            h: a.dd,
            i: void 0
        });
        q.setTimeout(W(220, Sg(za(function(d) {
            Ie(c.document, d)
        }, b))), 0)
    };
    var Li = {
            ve: "google_ads_preview",
            ff: "google_mc_lab",
            yf: "google_anchor_debug",
            xf: "google_bottom_anchor_debug",
            qc: "google_ia_debug",
            Of: "google_scr_debug",
            Sf: "google_ia_debug_allow_onclick",
            pg: "googleads",
            rc: "google_pedestal_debug",
            Eg: "google_resize_debug",
            Pg: "google_shoppable_images_debug",
            Qg: "google_shoppable_images_cookie",
            Rg: "google_shoppable_images_forced",
            sc: "google_responsive_slot_debug",
            Jg: "google_responsive_slot_preview",
            Ig: "google_responsive_dummy_ad"
        },
        Mi = {
            ["google_bottom_anchor_debug"]: 1,
            ["google_anchor_debug"]: 2,
            ["google_ia_debug"]: 8,
            ["google_resize_debug"]: 16,
            ["google_scr_debug"]: 9,
            ["googleads"]: 2,
            ["google_pedestal_debug"]: 30
        };
    var Ni = {
        qc: 1,
        ye: 2,
        ih: 3,
        Ng: 4,
        sc: 6
    };
    var Pi = (a, b) => {
            if (!a) return !1;
            a = a.hash;
            if (!a || !a.indexOf) return !1;
            if (-1 != a.indexOf(b)) return !0;
            b = Oi(b);
            return "go" != b && -1 != a.indexOf(b) ? !0 : !1
        },
        Oi = a => {
            let b = "";
            U(a.split("_"), c => {
                b += c.substr(0, 2)
            });
            return b
        },
        Qi = () => {
            var a = q.location;
            let b = !1;
            U(Li, c => {
                Pi(a, c) && (b = !0)
            });
            return b
        },
        Ri = (a, b) => {
            switch (a) {
                case 1:
                    return Pi(b, "google_ia_debug");
                case 2:
                    return Pi(b, "google_bottom_anchor_debug");
                case 3:
                    return Pi(b, "google_anchor_debug") || Pi(b, "googleads");
                case 4:
                    return Pi(b, "google_scr_debug");
                case 6:
                    return Pi(b,
                        "google_responsive_slot_debug")
            }
            return !1
        };
    let Si = null;

    function Ti(a) {
        Si || (Si = new Ui(a.google_t12n_vars || {}));
        return Si
    }

    function Vi(a, b) {
        a = parseFloat(a.j[b]);
        return a = isNaN(a) ? 0 : a
    }
    class Ui {
        constructor(a) {
            this.j = a
        }
    };
    let Wi = null;
    var Xi = (a, b) => {
            let c = 0,
                d = a,
                e = 0;
            for (; a && a != a.parent;)
                if (a = a.parent, e++, Ee(a)) d = a, c = e;
                else if (b) break;
            return {
                win: d,
                level: c
            }
        },
        Yi = () => {
            Wi || (Wi = Xi(q, !0).win);
            return Wi
        };
    class Zi extends Vh {
        constructor(a) {
            super(a);
            this.dfltBktExt = this.j;
            this.lrsExt = this.l
        }
    };

    function $i() {
        var a = u(),
            b = og(a);
        if (b) return (b = b || og()) ? (a = b.pageViewId, b = b.clientId, "string" === typeof b && (a += b.replace(/\D/g, "").substr(0, 6))) : a = null, +a;
        a = Xi(a, !1).win;
        (b = a.google_global_correlator) || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
        return b
    }

    function aj() {
        if (bj) return bj;
        const a = rg() || u(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? bj = b : a.google_persistent_state_async = bj = new cj
    }

    function dj(a) {
        return ej[a] || "google_ps_" + a
    }

    function fj(a, b, c) {
        b = dj(b);
        a = a.S;
        const d = a[b];
        return void 0 === d ? a[b] = c : d
    }

    function gj(a, b) {
        var c = fj(a, b, 0) + 1;
        return a.S[dj(b)] = c
    }

    function hj() {
        var a = aj();
        return fj(a, 20, {})
    }
    class cj {
        constructor() {
            this.S = {}
        }
    }
    var bj = null;
    const ej = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function ij(a, b) {
        a.j = c => fg(bg, b, () => [])(c, 1);
        a.l = () => fg(cg, b, () => [])(1)
    }
    class jj {
        constructor() {
            this.j = () => [];
            this.l = () => []
        }
    }
    na(jj);
    const kj = {
        Kf: 5,
        uf: 7,
        Vf: 17,
        Be: 41,
        Ag: 62,
        kg: 67,
        Cg: 82,
        Dg: 83,
        og: 87,
        Ne: 89,
        df: 103,
        Mf: 106,
        qh: 107,
        Bf: 108,
        Gd: 124,
        lh: 126,
        Hd: 128,
        Pf: 132,
        $f: 138,
        ng: 139
    };
    let lj = null;
    var mj = a => {
            try {
                return !!a && Rc(!0)
            } catch (b) {
                return !1
            }
        },
        nj = () => {
            if (mj(lj)) return !0;
            var a = aj();
            if (a = fj(a, 3, null)) {
                if (a && a.dfltBktExt && a.lrsExt) {
                    var b = new Zi;
                    b.j = a.dfltBktExt;
                    b.dfltBktExt = b.j;
                    b.l = a.lrsExt;
                    b.lrsExt = b.l;
                    b.m = !0;
                    a = b
                } else a = null;
                a || (a = new Zi, b = {
                    context: "ps::gpes::cf",
                    url: u().location.href
                }, Y("jserror", b))
            }
            return mj(a) ? (lj = a, !0) : !1
        },
        oj = a => {
            if (!nj()) {
                var b = Uh();
                a(b);
                b.m = !0
            }
        },
        Uh = () => {
            if (nj()) return lj;
            var a = aj(),
                b = new Zi(Re(kj));
            return lj = a.S[dj(3)] = b
        };
    let pj = null;
    var qj = () => {
            pj || (pj = Th());
            return pj
        },
        rj = a => {
            let b = jj.G().l().join();
            const c = qj();
            c && (b += (b ? "," : "") + $h(c).join());
            b && (a.eid = 50 < b.length ? b.substring(0, 50) + "T" : b)
        },
        sj = {
            na: "618018085",
            pa: "618018086"
        },
        tj = {
            Bb: "21060078",
            na: "21060079"
        },
        uj = {},
        vj = {
            NONE: "480596784",
            Rf: "480596785",
            Ef: "21063355"
        },
        wj = {
            na: "423550200",
            pa: "423550201"
        },
        xj = u();
    Rh = Qf && !!xj.google_disable_experiments;
    var yj = (a = qj()) => Hg($h(a), b => !!uj[b]),
        zj = (a = qj()) => Hg($h(a), b => !uj[b]);
    var Aj = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5
        },
        Bj = {
            [1]: 1,
            [2]: 1,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function Cj(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Dj) : a.google_reactive_ads_global_state = new Ej;
        return a.google_reactive_ads_global_state
    }
    class Ej {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.improveCollisionDetection = 1;
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new Dj
        }
    }
    var Dj = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var Gj = (a, b) => {
            var c = jj.G().j(13).concat(jj.G().j(11)),
                d = a.B;
            const e = ah(d);
            e.eids = [...e.eids || [], ...Ia(c, String)];
            Ga(ah(d).eids || [], f => {
                Xh(b, f)
            });
            c = Ti(a.pubWin);
            Yh(b, ["551"], 0, 108);
            Zh(b, 108) && (Uf = Tf);
            d = ["42631002", "42631003"];
            Yh(b, d, Vi(c, 22), 17);
            d = ["21062174", "21062175"];
            Yh(b, d, Vi(c, 129), 126);
            d = ["26835105", "26835106"];
            Yh(b, d, Vi(c, 24), 41);
            (d = Rc("")) && Xh(b, d);
            d = sj;
            d = [d.na, d.pa];
            Yh(b, d, Vi(c, 28), 67);
            d = tj;
            d = [d.Bb, d.na];
            Yh(b, d, Vi(c, 29), 87);
            d = vj;
            d = eb(d);
            Yh(b, d, Vi(c, 126),
                124);
            d = wj;
            d = [d.pa, d.na];
            Yh(b, d, Vi(c, 177), 139);
            a.j && Fj(b, c, a.j)
        },
        Fj = (a, b, c) => {
            const d = ["410075105", "410075106"];
            if (c = Cj(c)) switch (Yh(a, d, Vi(b, 155), 132)) {
                case "410075105":
                    c.improveCollisionDetection = 1;
                    break;
                case "410075106":
                    c.improveCollisionDetection = -1
            }
        };

    function Hj(a, b = q) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new Ld(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function Ij(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };
    var Jj = (a, b = !1) => {
            try {
                return b ? (new Md(a.innerWidth, a.innerHeight)).round() : Qd(a || window).round()
            } catch (c) {
                return new Md(-12245933, -12245933)
            }
        },
        Kj = (a, b) => {
            var c;
            var d;
            c = (d = (d = og()) && (c = d.initialLayoutRect) && "number" === typeof c.top && "number" === typeof c.left && "number" === typeof c.width && "number" === typeof c.height ? new kg(c.left, c.top, c.width, c.height) : null) ? new Ld(d.left, d.top) : (c = pg()) && ra(c.rootBounds) ? new Ld(c.rootBounds.left + c.boundingClientRect.left, c.rootBounds.top + c.boundingClientRect.top) : null;
            if (c) return c;
            try {
                var e = a.j,
                    f = new Ld(0, 0),
                    g = Sd(Pd(b));
                if (Sc(g, "parent")) {
                    a = b;
                    do {
                        if (g == e) var h = Bg(a);
                        else {
                            var k = Ag(a);
                            h = new Ld(k.left, k.top)
                        }
                        b = h;
                        f.x += b.x;
                        f.y += b.y
                    } while (g && g != e && g != g.parent && (a = g.frameElement) && (g = g.parent))
                }
                return f
            } catch (l) {
                return new Ld(-12245933, -12245933)
            }
        };

    function Lj(a) {
        M(this, a, Mj, null)
    }
    z(Lj, D);
    var Mj = [15];

    function Nj(a) {
        M(this, a, null, null)
    }
    z(Nj, D);

    function Oj(a) {
        M(this, a, null, null)
    }
    z(Oj, D);
    var Pj; {
        const a = parseInt("2019", 10);
        Pj = isNaN(a) ? 2012 : a
    };
    var Qj = (a, b, c) => {
            if ("relative" === a) return b;
            c || (c = Uf ? "https" : "http");
            q.location && "https:" == q.location.protocol && "http" == c && (c = "https");
            return [c, "://", a, b].join("")
        },
        Rj = (a, b, c) => {
            a = Qj(a, b, c);
            2012 < Pj && (b = (b = a.match(/(__[a-z0-9_]+)\.js(?:\?|$)/)) ? b[1] : "", a = a.replace(new RegExp(String(`${b}.js`).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), `_fy${Pj}${b}.js`.replace(/\$/g, "$$$$")));
            T.G().j(202, !1) && (a += (0 < a.indexOf("?") ? "&" : "?") + "cache=bust");
            return a
        };
    let Sj = null,
        Tj = null;
    var Uj = () => {
            if (!Qf) return !1;
            if (null != Sj) return Sj;
            Sj = !1;
            try {
                const a = Yg(q);
                a && -1 != a.location.hash.indexOf("google_logging") && (Sj = !0);
                q.localStorage.getItem("google_logging") && (Sj = !0)
            } catch (a) {}
            return Sj
        },
        Vj = (a, b = []) => {
            let c = !1;
            q.google_logging_queue || (c = !0, q.google_logging_queue = []);
            q.google_logging_queue.push([a, b]);
            c && Uj() && (a = Rj(Yf(), "/pagead/js/logging_library.js"), Ie(q.document, a))
        };

    function Wj(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function Xj(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function Yj(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function Zj() {
        var a = ak,
            b = bk;
        if (!(window && Math.random && navigator)) return -1;
        if (window.__google_ad_urls) {
            var c = window.__google_ad_urls;
            try {
                if (c && c.getOseId()) return c.getOseId()
            } catch (d) {}
        }
        if (!window.__google_ad_urls_id) {
            c = window.google_enable_ose;
            let d;
            !0 === c ? d = 2 : !1 !== c && (d = Ke([0], a), null == d && ((d = Ke([2], b)) || (d = 3)));
            if (!d) return 0;
            window.__google_ad_urls_id = d
        }
        return window.__google_ad_urls_id
    };
    const ck = new ki(1, u());
    var dk = () => {
        const a = u();
        a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || hi(ck))
    };
    (() => {
        const a = u();
        a && a.document && ("complete" == a.document.readyState ? dk() : ck.j && R(a, "load", () => {
            dk()
        }))
    })();
    var ek = (a, b, c) => {
            a && (c ? R(a, "load", b) : ee(a, "load", b))
        },
        fk = () => {
            const a = (u() || q).google_osd_amcb;
            return qa(a) ? a : null
        },
        gk = (a = "/r20100101") => (Uf ? "https:" : "http:") + "//www.googletagservices.com/activeview/js/current/osd.js?cb=" + encodeURIComponent(a);

    function Ba() {
        const a = u(),
            b = a.__google_ad_urls;
        if (!b) return a.__google_ad_urls = new hk(a);
        try {
            if (0 <= b.getOseId()) return b
        } catch (c) {}
        try {
            return a.__google_ad_urls = new hk(a, b)
        } catch (c) {
            return a.__google_ad_urls = new hk(a)
        }
    }

    function ik(a) {
        var b = a.o ? u() : q;
        a = jk;
        b = b || q;
        b.google_osd_loaded ? a = !1 : (Ie(b.document, a), a = b.google_osd_loaded = !0);
        a && Ig()
    }
    class hk {
        constructor(a, b) {
            this.l = b && b.l ? b.l : 0;
            this.m = b ? b.m : "";
            this.j = b && b.j ? b.j : [];
            this.o = !0;
            if (b)
                for (a = 0; a < this.j.length; ++a) this.j[a].o = !0
        }
        getNewBlocks(a, b) {
            let c = this.j.length;
            for (let d = 0; d < c; d++) {
                let e = this.j[d];
                !e.m && e.j && (e.m = !0, a(e.j, e.A, e.H, e.l, void 0, e.o, e.C, e.F, e.D))
            }
            b && ((u() || q).google_osd_amcb = a)
        }
        setupOse(a) {
            if (this.getOseId()) return this.getOseId();
            let b = Zj();
            if (!b) return 0;
            this.l = b;
            this.m = String(a || 0);
            return this.getOseId()
        }
        getOseId() {
            return window && Math.random && navigator ? this.l : -1
        }
        getCorrelator() {
            return this.m
        }
        numBlocks() {
            return this.j.length
        }
        registerAdBlock(a,
            b, c, d, e, f, g = () => null) {
            e = fk();
            f = ai() || -1;
            let h = q.pageYOffset;
            0 <= h || (h = -1);
            e && d ? e(d, a, b, !1, void 0, !1, g, f, h) : (c = new kk(a, b, c, d, g, f, h), this.j.push(c), ek(d, c.v, !0), jk || (tg("//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om" + `&rs=${b}` + `&req=${a}`), jk = gk("/r20190131")), ik(this))
        }
        unloadAdBlock(a, b = !1, c = !1) {
            const d = this.o ? u() : window;
            void 0 !== d.Goog_Osd_UnloadAdBlock && d.Goog_Osd_UnloadAdBlock(a, b);
            c && (b = Af(this.j, e => e.j == a)) && ek(a,
                b.v, !1)
        }
        setLoadOsdJsOnPubWindow(a) {
            this.o = a
        }
    }
    var jk = "",
        bk = 0,
        ak = 0,
        kk = class {
            constructor(a, b, c, d, e = la, f = -1, g = -1) {
                this.A = a;
                this.H = b;
                this.j = d;
                this.o = this.m = this.l = !1;
                this.C = e;
                this.F = f;
                this.D = g;
                this.v = () => this.l = !0
            }
        };
    ca("Goog_AdSense_getAdAdapterInstance", Ba, void 0);
    ca("Goog_AdSense_OsdAdapter", hk, void 0);

    function lk() {
        let a = u();
        const b = a.__google_ad_urls;
        return b ? b : a.__google_ad_urls = new mk
    }
    class mk {
        constructor() {}
        getNewBlocks() {}
        setupOse() {}
        getOseId() {
            return -1
        }
        getCorrelator() {
            return ""
        }
        numBlocks() {
            return 0
        }
        registerAdBlock() {}
        unloadAdBlock() {}
        setLoadOsdJsOnPubWindow() {}
    };
    var nk = (a, b, c, d) => {
            c = c || a.google_ad_width;
            d = d || a.google_ad_height;
            if (a && a.top == a) return !1;
            const e = b.documentElement;
            if (c && d) {
                let f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                if (g > 2 * d || f > 2 * c) return !1
            }
            return !0
        },
        ok = (a, b) => {
            U(a, (c, d) => {
                b[d] = c
            })
        },
        pk = a => {
            let b = a.location.href;
            if (a == a.top) return {
                url: b,
                nb: !0
            };
            let c = !1;
            const d = a.document;
            d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
            (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
            return {
                url: b,
                nb: c
            }
        },
        qk = () => {
            var a = u();
            if (a == a.top) return 0;
            for (; a && a != a.top && Ee(a); a = a.parent) {
                if (a.sf_) return 2;
                if (a.$sf) return 3;
                if (a.inGptIF) return 4;
                if (a.inDapIF) return 5
            }
            return 1
        };
    var rk = {
            google: 1,
            googlegroups: 1,
            gmail: 1,
            googlemail: 1,
            googleimages: 1,
            googleprint: 1
        },
        sk = /(corp|borg)\.google\.com:\d+$/;
    var tk = 728 * 1.38,
        uk = (a, b = 420) => (a = Z(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        vk = a => {
            var b = Z(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        xk = a => Math.max(0, wk(a, !0) - Z(a).clientHeight),
        Z = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        wk = (a, b) => {
            const c = Z(a);
            return b ? c.scrollHeight == Z(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        yk = (a, b) => a.adCount ? 1 == b || 2 == b ? !(!a.adCount[1] && !a.adCount[2]) :
        (a = a.adCount[b]) && 27 != b && 26 != b ? 1 <= a : !1 : !1,
        zk = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        Ak = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        Bk = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        Ck = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        Dk = (a, b, c, d, e) => {
            Ph(c, b, {
                c: e.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        };
    var Ek = a => {
            a = a.google_reactive_ad_format;
            return cb(a) ? "" + a : null
        },
        Fk = a => !!Ek(a) || null != a.google_pgb_reactive,
        Gk = a => {
            a = Ek(a);
            return 26 == a || 27 == a || 30 == a || 16 == a
        };
    const Hk = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        Ik = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };

    function Jk(a) {
        M(this, a, Kk, null)
    }
    z(Jk, D);

    function Lk(a) {
        M(this, a, null, null)
    }
    z(Lk, D);

    function Mk(a) {
        M(this, a, null, null)
    }
    z(Mk, D);
    var Kk = [3];

    function Nk(a) {
        M(this, a, Ok, null)
    }
    z(Nk, D);
    var Ok = [2];

    function Pk(a) {
        M(this, a, null, null)
    }
    z(Pk, D);

    function Qk(a) {
        M(this, a, Rk, null)
    }
    z(Qk, D);
    var Rk = [1];

    function Sk(a) {
        M(this, a, Tk, null)
    }
    z(Sk, D);
    var Tk = [4];

    function Uk(a) {
        M(this, a, null, null)
    }
    z(Uk, D);
    Uk.prototype.O = function() {
        return O(this, Sk, 1)
    };
    Uk.prototype.l = function() {
        return N(this, 2)
    };

    function Vk(a) {
        M(this, a, null, Wk)
    }
    z(Vk, D);

    function Xk(a) {
        M(this, a, null, null)
    }
    z(Xk, D);

    function Yk(a) {
        M(this, a, null, null)
    }
    z(Yk, D);

    function Zk(a) {
        M(this, a, null, null)
    }
    z(Zk, D);
    var Wk = [
        [1, 2, 3]
    ];

    function $k(a) {
        M(this, a, null, null)
    }
    z($k, D);

    function al(a) {
        M(this, a, bl, null)
    }
    z(al, D);

    function cl(a) {
        M(this, a, dl, null)
    }
    z(cl, D);
    var bl = [2],
        dl = [2];

    function el(a) {
        M(this, a, fl, null)
    }
    z(el, D);
    var fl = [4];

    function gl(a) {
        M(this, a, null, hl)
    }
    z(gl, D);
    var hl = [
        [1, 2]
    ];

    function il(a) {
        M(this, a, jl, null)
    }
    z(il, D);
    var jl = [1, 2];

    function kl(a) {
        M(this, a, ll, null)
    }
    z(kl, D);
    var ll = [2];

    function ml(a) {
        M(this, a, null, null)
    }
    z(ml, D);

    function nl(a) {
        M(this, a, null, null)
    }
    z(nl, D);

    function ol(a) {
        M(this, a, pl, null)
    }
    z(ol, D);

    function ql(a) {
        M(this, a, null, null)
    }
    z(ql, D);
    var pl = [1];

    function rl(a) {
        M(this, a, sl, null)
    }
    z(rl, D);
    var sl = [3, 4];

    function tl(a) {
        M(this, a, null, null)
    }
    z(tl, D);

    function ul(a) {
        M(this, a, null, null)
    }
    z(ul, D);

    function vl() {
        var a = new ul;
        return pd(a, 2, 1)
    };

    function wl(a) {
        M(this, a, xl, null)
    }
    z(wl, D);
    var xl = [6, 7, 9, 10, 11];
    wl.prototype.O = function() {
        return O(this, Sk, 1)
    };
    wl.prototype.l = function() {
        return N(this, 2)
    };

    function yl(a) {
        M(this, a, null, null)
    }
    z(yl, D);

    function zl(a) {
        M(this, a, null, null)
    }
    z(zl, D);

    function Al(a) {
        M(this, a, Bl, null)
    }
    z(Al, D);
    var Bl = [2];

    function Cl(a) {
        M(this, a, Dl, null)
    }
    z(Cl, D);

    function El(a) {
        M(this, a, null, null)
    }
    z(El, D);

    function Fl(a) {
        M(this, a, Gl, null)
    }
    z(Fl, D);

    function Hl(a) {
        M(this, a, null, null)
    }
    z(Hl, D);

    function Il(a) {
        M(this, a, null, null)
    }
    z(Il, D);

    function Jl(a) {
        M(this, a, null, null)
    }
    z(Jl, D);

    function Kl(a) {
        M(this, a, null, null)
    }
    z(Kl, D);

    function Ll(a) {
        M(this, a, null, null)
    }
    z(Ll, D);

    function Ml(a) {
        M(this, a, null, null)
    }
    z(Ml, D);
    var Dl = [1, 2, 5, 7],
        Gl = [2, 5, 6, 11];

    function Nl(a) {
        return O(a, Jl, 13)
    }

    function Ol(a) {
        return O(a, Ll, 15)
    };
    var Pl = (a, b) => {
        a = N(a, 2);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    const Rl = (a, b) => {
            a = Ik(Hk(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = Se(a),
                d = Ql(a);
            return b.find(e => {
                const f = null != N(e, 7) ? N(O(e, Hl, 7), 1) : N(e, 1);
                e = null != N(e, 7) ? N(O(e, Hl, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        },
        Ql = a => {
            const b = {};
            for (;;) {
                b[Se(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };

    function Sl(a) {
        const b = [].slice.call(arguments).filter(Xa(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Kb || []);
            d = Object.assign(d, e.qb)
        });
        return new Tl(c, d)
    }

    function Ul(a) {
        switch (a) {
            case 1:
                return new Tl(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Tl(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Tl(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Tl(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }
    class Tl {
        constructor(a, b) {
            this.Kb = a;
            this.qb = b
        }
    };
    const Vl = {
        ["google_ad_channel"]: !0,
        ["google_ad_host"]: !0
    };
    var Wl = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            Y("ama", b, .01)
        },
        Xl = a => {
            const b = {};
            Oe(Vl, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    var Yl = a => {
        try {
            a.localStorage.removeItem("google_ama_config")
        } catch (b) {
            Wl(a, {
                lserr: 1
            })
        }
    };
    var am = (a, b) => {
        const c = new Zl(a, 1E3, b);
        return () => $l(c)
    };

    function $l(a) {
        if (a.j) return !1;
        if (null == a.l) return bm(a), !0;
        const b = a.l + a.o - (new Date).getTime();
        if (1 > b) return bm(a), !0;
        cm(a, b);
        return !0
    }

    function bm(a) {
        a.l = (new Date).getTime();
        a.m()
    }

    function cm(a, b) {
        a.j = !0;
        a.v.setTimeout(() => {
            a.j = !1;
            bm(a)
        }, b)
    }
    class Zl {
        constructor(a, b, c) {
            this.v = a;
            this.o = b;
            this.m = c;
            this.l = null;
            this.j = !1
        }
    };

    function dm(a, b) {
        a.A ? b(a.m) : a.l.push(b)
    }

    function em(a, b) {
        a.A = !0;
        a.m = b;
        a.l.forEach(c => {
            c(a.m)
        });
        a.l = []
    }
    class fm {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.A = !1;
            this.v = this.m = null;
            this.C = am(a, () => {
                if (null != this.v) {
                    var b = wk(this.j, !0) - this.v;
                    1E3 < b && em(this, b)
                }
            });
            this.o = null
        }
        P(a, b) {
            null == a ? (this.v = a = wk(this.j, !0), this.j.addEventListener("scroll", this.C), null != b && b(a)) : this.o = this.j.setTimeout(() => {
                this.P(void 0, b)
            }, a)
        }
        Ma() {
            null != this.o && this.j.clearTimeout(this.o);
            this.j.removeEventListener("scroll", this.C);
            this.l = [];
            this.m = null
        }
    };

    function gm() {
        this.j = {};
        this.l = {}
    }
    gm.prototype.set = function(a, b) {
        this.j[a] = b;
        this.l[a] = a
    };
    gm.prototype.get = function(a, b) {
        return void 0 !== this.j[a] ? this.j[a] : b
    };

    function hm(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function im(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    };

    function jm(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function km(a) {
        a = Ia(a, b => new ig(b.top, b.right, b.bottom, b.left));
        a = lm(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function lm(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Ja(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, a[0].clone())
    };

    function mm(a, b, c) {
        this.m = a;
        this.j = b;
        this.l = c
    }

    function nm(a, b, c) {
        return {
            top: a.j - c,
            right: a.m + a.l + b,
            bottom: a.j + c,
            left: a.m - b
        }
    };
    class om {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.m = c
        }
    };
    class pm {
        constructor(a) {
            this.j = a
        }
        P() {
            const a = this.j.document.createElement("SCRIPT");
            a.src = "//www.google.com/adsense/search/ads.js";
            a.setAttribute("async", "async");
            this.j.document.head.appendChild(a);
            (function(b, c) {
                b[c] = b[c] || function() {
                    (b[c].q = b[c].q || []).push(arguments)
                };
                b[c].t = 1 * new Date
            })(this.j, "_googCsa")
        }
    };
    class qm {
        j() {}
    };

    function rm(a, b) {
        sm(a).forEach(b, void 0)
    }

    function sm(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function tm(a, b, c, d) {
        this.o = a;
        this.l = b;
        this.m = c;
        this.j = d
    }

    function um(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.o)
        } catch (g) {}
        if (!c.length) return [];
        b = Pa(c);
        b = vm(a, b);
        "number" === typeof a.l && (c = a.l, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.m) {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = wm(b[d]),
                    f = a.m;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    tm.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.o,
            occurrenceIndex: this.l,
            paragraphIndex: this.m,
            ignoreMode: this.j
        })
    };

    function vm(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }

    function wm(a) {
        var b = [];
        rm(a.getElementsByTagName("p"), function(c) {
            100 <= xm(c) && b.push(c)
        });
        return b
    }

    function xm(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        rm(a.childNodes, function(c) {
            b += xm(c)
        });
        return b
    }

    function ym(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };
    var zm = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        Am = (a, b) => !!a.google_ad_resizable && !a.google_reactive_ad_format && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && Tg(b) == b,
        Bm = (a, b, c) => {
            a = a.style;
            "rtl" == b ? T.G().j(251, !1) ? a.setProperty("margin-right", c, "important") : a.marginRight = c : T.G().j(251, !1) ? a.setProperty("margin-left", c, "important") : a.marginLeft =
                c
        };
    const Cm = (a, b, c) => {
        a = zm(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var Dm = (a, b) => {
            b = b.parentElement;
            return b ? (a = Je(b, a)) ? a.direction : "" : ""
        },
        Em = (a, b, c) => {
            if (0 === Cm(a, b, c)) return !1;
            Bm(b, c, "0px");
            const d = Cm(a, b, c);
            Bm(b, c, -1 * d + "px");
            a = Cm(a, b, c);
            0 !== a && a !== d && Bm(b, c, d / (a - d) * d + "px");
            return !0
        };

    function Fm(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function Gm(a) {
        return sm(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function Hm(a, b) {
        a = ae(new Od(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Im(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Fm(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Jm(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Fm(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var Lm = (a, b, c, d = 0) => {
            var e = Km(b, c, d);
            if (e.P) {
                for (c = b = e.P; c = e.Oa(c);) b = c;
                e = {
                    anchor: b,
                    position: e.Ua
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Im(a, e.anchor, e.position)
        },
        Mm = (a, b, c, d = 0) => {
            T.G().j(313, !1) ? Lm(a, b, c, d) : Im(a, b, c)
        };

    function Km(a, b, c) {
        const d = f => {
                f = Nm(f);
                return f = null == f ? !1 : c < f
            },
            e = f => {
                f = Nm(f);
                return f = null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    P: Om(a.previousSibling, d),
                    Oa: f => Om(f.previousSibling, d),
                    Ua: 0
                };
            case 2:
                return {
                    P: Om(a.lastChild, d),
                    Oa: f => Om(f.previousSibling, d),
                    Ua: 0
                };
            case 3:
                return {
                    P: Om(a.nextSibling, e),
                    Oa: f => Om(f.nextSibling, e),
                    Ua: 3
                };
            case 1:
                return {
                    P: Om(a.firstChild, e),
                    Oa: f => Om(f.nextSibling, e),
                    Ua: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Nm(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Om(a, b) {
        return a && b(a) ? a : null
    };

    function Pm(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Pc(d.tb);
            a[e] = d.value
        }
    }

    function Qm(a, b, c, d, e, f) {
        a = Rm(a, e);
        a.U.setAttribute("data-ad-format", d ? d : "auto");
        Sm(a, b, c, f);
        return a
    }

    function Tm(a, b, c = null) {
        a = Rm(a, {});
        Sm(a, b, null, c);
        return a
    }

    function Sm(a, b, c, d) {
        var e = [];
        if (d = d && d.Kb) a.la.className = d.join(" ");
        a = a.U;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function Rm(a, b) {
        var c = Hm(a, b.clearBoth || !1),
            d = c.style;
        d.textAlign = "center";
        b.Ta && Pm(d, b.Ta);
        a = ae(new Od(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Ab && (d.marginTop = b.Ab);
        b.$a && (d.marginBottom = b.$a);
        b.qa && Pm(d, b.qa);
        c.appendChild(a);
        return {
            la: c,
            U: a
        }
    }

    function Um(a, b, c) {
        b.setAttribute("data-adsbygoogle-status", "reserved");
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.qb;
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function Vm(a) {
        var b = Gm(a.document);
        Ga(b, function(c) {
            var d = Wm(a, c),
                e;
            if (e = d) e = (e = zm(c, a)) ? e.y : 0, e = !(e < Z(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), Um(a, c))
        })
    }

    function Wm(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in pe) a[pe[c]] && (b[pe[c]] = a[pe[c]]);
        return b
    };

    function Xm(a) {
        if (!a) return null;
        var b = N(a, 7);
        if (N(a, 1) || N(a, 3) || 0 < N(a, 4).length) {
            var c = N(a, 3),
                d = N(a, 1),
                e = N(a, 4);
            b = N(a, 2);
            var f = N(a, 5);
            a = Ym(N(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + ym(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + ym(e[c]);
            b = (e = g) ? new tm(e, b, f, a) : null
        } else b = b ? new tm(b, N(a, 2), N(a, 5), Ym(N(a, 6))) : null;
        return b
    }
    var Zm = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Ym(a) {
        return null == a ? a : Zm[a]
    }

    function $m(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = N(a[c], 1),
                e = N(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.tb = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function an(a, b) {
        var c = {};
        a && (c.Ab = N(a, 1), c.$a = N(a, 2), c.clearBoth = !!rd(a, 3));
        b && (c.Ta = $m(Q(b, $k, 3)), c.qa = $m(Q(b, $k, 4)));
        return c
    }
    var bn = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        cn = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    class dn extends qm {
        constructor(a, b) {
            super();
            this.m = a;
            this.l = b
        }
        j() {
            const a = Xm(this.l);
            return a ? um(a, this.m.document).map(b => b.textContent).filter(b => !!b) : []
        }
    };
    class en extends qm {
        constructor(a, b) {
            super();
            this.m = a;
            this.l = b
        }
        j() {
            return (new URL(this.l)).searchParams.getAll(this.m)
        }
    };

    function fn(a, b) {
        return b.map(c => {
            {
                const d = O(c, Sk, 1);
                if (d) c = new dn(a.l, d);
                else if (c = N(c, 2)) c = new en(c, a.j);
                else throw Error("Unable to get extractor for SearchQueryIdentifier");
            }
            return c
        })
    }
    class gn {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };
    class hn {
        constructor(a, b, c) {
            this.m = a;
            this.l = b;
            this.j = c
        }
        O() {
            return this.m
        }
        Pa() {
            return this.j.l
        }
    };

    function jn(a, b, c) {
        a.l.push(b);
        a.j.push(c)
    }

    function kn(a) {
        if (!a.j.length) return null;
        const b = a.j.reduce((d, e) => Math.min(d, e.left), Number.MAX_VALUE),
            c = a.j.reduce((d, e) => Math.max(d, e.right), Number.MIN_VALUE);
        a = a.j.reduce((d, e) => Math.max(d, e.bottom), Number.MIN_VALUE);
        return new mm(b, a, c - b)
    }
    class ln {
        constructor() {
            this.l = [];
            this.j = []
        }
    }

    function mn(a) {
        return 2 != a.length ? !1 : !!a[0].parentElement && !!a[1].parentElement && a[0].parentElement == a[1].parentElement
    }

    function nn(a, b) {
        return a.length ? b(a) ? a : a.every(c => !!c.parentElement) ? nn(a.map(c => c.parentElement), b) : null : null
    };

    function on(a) {
        const b = Z(a.j).clientHeight || 0;
        return pn(a, c => {
            c = c.j;
            var d;
            if (d = c.j >= b) {
                d = a.o;
                a: {
                    for (e of d.j)
                        if (jm(nm(c, d.l, d.m), e)) {
                            var e = !0;
                            break a
                        }
                    e = !1
                }
                d = !e
            }
            return d
        })
    }

    function qn(a, b) {
        var c = O(a.m, al, 2);
        if (!c) return null;
        var d = N(c, 1);
        if (!d) return null;
        var e = a.j.document.createElement(d);
        Pm(e.style, $m(Q(c, $k, 2)));
        e.style.width = b.Pa() + "px";
        d = a.j.document.createElement("div");
        e.appendChild(d);
        e = [e];
        if (c = O(c, cl, 3)) {
            var f = N(c, 1);
            f ? (a = a.j.document.createElement(f), Pm(a.style, $m(Q(c, $k, 2)))) : a = null
        } else a = null;
        if (a) switch (b.l) {
            case 0:
            case 3:
                e.push(a);
                break;
            case 1:
            case 2:
                e.unshift(a)
        }
        return {
            elements: e,
            container: d
        }
    }

    function rn(a) {
        const b = on(a);
        if (!b) return null;
        a = qn(a, b);
        if (!a) return null;
        a.elements.forEach(c => {
            Im(c, b.O(), b.l)
        });
        return a.container
    }

    function pn(a, b) {
        const c = sn(a);
        for (let f = 0; f < c.length; ++f) {
            a: {
                var d = f;
                var e = c.length;
                const g = N(a.m, 4);
                for (let h = 0; h < g.length; ++h) switch (g[h]) {
                    case 1:
                        if (d < e - 1) {
                            d = !0;
                            break a
                        }
                        break;
                    case 2:
                        if (d == e - 1) {
                            d = !0;
                            break a
                        }
                }
                d = !1
            }
            if (d && (d = c[f + 1] || c[f - 1]) && (e = c[f], e = e.l.length ? e.l[e.l.length - 1] : null, d = d.l[0] || null, d = e && d ? (d = nn([e, d], mn)) ? d[0] : null : null, d && (e = kn(c[f]))) && (d = new hn(d, 3, e), b(d))) return d
        }
        return null
    }

    function sn(a) {
        if (0 == a.l.length) return [];
        const b = a.l.map(d => d.getBoundingClientRect()),
            c = [new ln];
        jn(c[0], a.l[0], b[0]);
        for (let d = 1; d < b.length; ++d) tn(b[d - 1], b[d]) || c.push(new ln), jn(c[c.length - 1], a.l[d], b[d]);
        return c
    }
    class un {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.o = b;
            this.v = c;
            this.m = d;
            this.l = e.slice(0)
        }
    }

    function tn(a, b) {
        return a.top < b.bottom && b.top < a.bottom
    };

    function vn(a, b, c) {
        return jm({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function wn(a) {
        if (!a.length) return null;
        const b = km(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new xn(b, a)
    }
    class xn {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };
    var Dn = (a, b) => {
        const c = Pa(b.document.querySelectorAll(".google-auto-placed")),
            d = yn(b),
            e = zn(b),
            f = An(b),
            g = Bn(b),
            h = Pa(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Pa(b.document.querySelectorAll("div.googlepublisherpluginad"));
        let l = Pa(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")).concat(Pa(b.document.querySelectorAll("ins.adsbygoogle")));
        b = [];
        for (const [p, r] of [
                [a.va, c],
                [a.ea, d],
                [a.bd, e],
                [a.wa, f],
                [a.xa, g],
                [a.$c, h],
                [a.ad, k]
            ]) a = r, !1 === p ? b = b.concat(a) :
            l = l.concat(a);
        var m;
        a = Cn(l);
        b = Cn(b);
        a = a.slice(0);
        for (m of b)
            for (b = 0; b < a.length; b++)(m.contains(a[b]) || a[b].contains(m)) && a.splice(b, 1);
        return m = a
    };
    const En = a => {
            try {
                return Ha(Ia(a.googletag.pubads().getSlots(), b => a.document.getElementById(b.getSlotElementId())), b => null != b)
            } catch (b) {}
            return null
        },
        yn = a => Pa(a.document.querySelectorAll('ins.adsbygoogle[data-anchor-shown="true"]')),
        zn = a => Pa(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        An = a => (En(a) || Pa(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Pa(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        Bn = a => Pa(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var Cn = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var Fn = W(453, Dn),
        Gn = W(454, (a, b) => {
            const c = Pa(b.document.querySelectorAll(".google-auto-placed")),
                d = yn(b),
                e = zn(b),
                f = An(b),
                g = Bn(b),
                h = Pa(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
            b = Pa(b.document.querySelectorAll("div.googlepublisherpluginad"));
            return Cn((!0 === a.va ? c : []).concat(!0 === a.ea ? d : [], !0 === a.bd ? e : [], !0 === a.wa ? f : [], !0 === a.xa ? g : [], !0 === a.$c ? h : [], !0 === a.ad ? b : []))
        });

    function Hn(a, b, c) {
        const d = In(a);
        b = Jn(d, b, c);
        return new Kn(a, d, b)
    }

    function Ln(a) {
        return a.j.map(b => b.ta)
    }

    function Mn(a) {
        return a.j.reduce((b, c) => b + c.ta.bottom - c.ta.top, 0)
    }
    class Kn {
        constructor(a, b, c) {
            this.o = a;
            this.j = b.slice(0);
            this.m = c.slice(0);
            this.l = null
        }
    }

    function In(a) {
        const b = Fn({
                ea: !1
            }, a),
            c = Bk(a),
            d = Ak(a);
        return b.map(e => {
            var f = e.getBoundingClientRect();
            return f = (e = !!e.className && -1 != e.className.indexOf("google-auto-placed")) || 1 < (f.bottom - f.top) * (f.right - f.left) ? {
                ta: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                th: e ? 1 : 0
            } : null
        }).filter(Xa(e => null === e))
    }

    function Jn(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? Nn(a, b) : Ia(a, d => new xn(d.ta, 1))
    }

    function Nn(a, b) {
        a = Ia(a, d => new xn(d.ta, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (vn(d, a[f], b)) {
                        d = wn([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function Un(a) {
        const b = [];
        Q(a.j, il, 2).forEach(c => {
            Qa(b, Ao(a, c))
        });
        return b
    }

    function Ao(a, b) {
        let c = Bo(a, b);
        if (!c) return [];
        const d = N(b, 3);
        d && (c = d.replace("%s", c));
        const e = [];
        Q(b, el, 1).forEach(f => {
            var g;
            g = (g = O(f, Sk, 1)) ? (g = Xm(g)) ? um(g, a.l.document) : [] : [];
            g.length && e.push(new un(a.l, a.o, c, f, g))
        });
        return e
    }

    function Bo(a, b) {
        a = fn(new gn(a.l, a.v), Q(b, gl, 2));
        return [].concat.apply([], a.map(c => c.j())).filter(c => !!c)[0] || null
    }
    class Co {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.v = b;
            this.j = c;
            this.m = d;
            this.o = e
        }
    };

    function Do(a) {
        M(this, a, null, null)
    }
    z(Do, D);

    function Eo(a) {
        M(this, a, null, null)
    }
    z(Eo, D);

    function Fo(a) {
        M(this, a, null, null)
    }
    z(Fo, D);

    function Go(a) {
        M(this, a, Ho, null)
    }
    z(Go, D);
    var Ho = [5];

    function Io(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? Ad(Go, b) : null
        } catch (b) {
            return null
        }
    }

    function Jo(a, b) {
        if (void 0 !== a.ua || void 0 !== a.Na || void 0 !== a.Za || void 0 !== a.Ya) {
            {
                let c = Io(b);
                c || (c = new Go);
                void 0 !== a.ua && pd(c, 2, a.ua);
                void 0 !== a.Na && pd(c, 8, a.Na);
                void 0 !== a.Za && yd(c, a.Za);
                void 0 !== a.Ya && wd(c, 6, a.Ya);
                pd(c, 1, +new Date + 864E5);
                a = c.C();
                try {
                    b.localStorage.setItem("google_ama_settings", a)
                } catch (d) {}
            }
        } else if ((a = Io(b)) && N(a, 1) < +new Date) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };
    const Ko = ["-webkit-text-fill-color"];

    function Lo(a) {
        if (Yc) {
            {
                const c = Je(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = Mo(a)
                } else a = No()
            }
        } else a = No();
        return a
    }
    var No = () => {
        const a = {
            all: "initial"
        };
        Ga(Ko, b => {
            a[b] = "unset"
        });
        return a
    };

    function Mo(a) {
        Ga(Ko, b => {
            delete a[b]
        });
        return a
    };
    var Oo = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0; {
                    const f = Math.min(a.screen.width || 0, a.screen.height || 0);
                    var c = f ? 320 > f ? 8192 : 0 : 2048
                }
                b |= c;
                var d;
                if (d = a.navigator) {
                    var e = a.navigator.userAgent;
                    d = /Firefox/.test(e) || /Android 2/.test(e) || /iPhone OS [34]_/.test(e) || /Windows Phone (?:OS )?[67]/.test(e)
                }
                b |= d ? 1048576 : 0
            } catch (f) {
                b |= 32
            }
            return b
        },
        Ro = (a, b) => {
            let c = 0;
            try {
                c |= a.innerHeight >= a.innerWidth ? 0 : 8, c |= uk(a, tk), c |= vk(a)
            } catch (e) {
                c |= 32
            }
            if (b = 2 == b) {
                var d = a.innerWidth;
                b = Cj(a).improveCollisionDetection;
                d = Po(d, 0, Math.round(a.innerWidth /
                    320 * 50 + 15));
                b = null != Qo(a, d, b)
            }
            b && !T.G().j(269, !1) && (c |= 16777216);
            return c
        },
        So = a => {
            const b = a.innerWidth,
                c = a.innerHeight;
            let d = c;
            for (; 100 < d;) {
                var e = Po(b, d - 100, d);
                e = Qo(a, e, 1);
                if (!e) return c - d;
                d = e.getBoundingClientRect().top - 1
            }
            return null
        },
        Qo = (a, b, c) => {
            for (let k = 0; k < b.length; k++) {
                a: {
                    var d = a;
                    var e = b[k],
                        f = c,
                        g = d.document;g.elementFromPoint(e.x, e.y);
                    var h = e.x;e = e.y;g.hasOwnProperty("_goog_efp_called_") || (g._goog_efp_called_ = g.elementFromPoint(h, e));
                    if (e = g.elementFromPoint(h, e))
                        if ("fixed" == zg(e)) d = e;
                        else {
                            if (1 ==
                                f) {
                                b: {
                                    d = d.document;
                                    for (f = e.offsetParent; f && f != d.body; f = f.offsetParent)
                                        if ("fixed" == zg(f)) {
                                            d = f;
                                            break b
                                        }
                                    d = null
                                }
                                if (d) break a
                            }
                            d = null
                        }
                    else d = null
                }
                if (d) return d
            }
            return null
        },
        Po = (a, b, c) => {
            const d = [];
            for (let e = 0; 3 > e; e++)
                for (let f = 0; 3 > f; f++) d.push({
                    x: f / 2 * a,
                    y: b + e / 2 * (c - b)
                });
            return d
        };

    function To(a) {
        if (a.l && "none" != a.l.style.display) {
            const b = Ak(a.j);
            if (b > a.m + 100 || b < a.m - 100) a.l && wf(a.l, {
                display: "none"
            }), a.m = xk(a.j)
        }
        a.o && a.j.clearTimeout(a.o);
        a.o = a.j.setTimeout(() => Uo(a), 200)
    }

    function Uo(a) {
        var b = xk(a.j);
        a.m && a.m > b && (a.m = b);
        b = Ak(a.j);
        b >= a.m - 100 && (a.m = Math.max(a.m, b), a.l || (a.l = Vo(a)), wf(a.l, {
            display: "block"
        }))
    }

    function Wo(a) {
        a.l && a.l.parentNode && a.l.parentNode.removeChild(a.l);
        a.l = null;
        a.j.removeEventListener("scroll", a.A)
    }

    function Vo(a) {
        const b = a.j.document.createElement("ins");
        Xo(a, b);
        wf(b, {
            display: "inline-flex",
            padding: "8px 16px",
            "background-color": "#FFF",
            "border-radius": "20px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)"
        });
        var c = a.j.document.createElement("img");
        Gc(c, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg");
        Xo(a, c);
        wf(c, {
            margin: "0px 8px 0px 0px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        c.addEventListener("click", f => {
            a.v();
            f.stopPropagation()
        });
        var d = a.j.document.createElement("span");
        Xo(a, d);
        wf(d, {
            "line-height": "24px",
            cursor: "pointer"
        });
        d.appendChild(a.j.document.createTextNode(a.C));
        d.addEventListener("click", f => {
            a.v();
            f.stopPropagation()
        });
        const e = a.j.document.createElement("img");
        Gc(e, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg");
        e.setAttribute("aria-label", a.D);
        Xo(a, e);
        wf(e, {
            margin: "0px 0px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            Wo(a);
            f.stopPropagation()
        });
        b.appendChild(c);
        b.appendChild(d);
        b.appendChild(e);
        c = So(a.j);
        d = a.j.document.createElement("div");
        d.className = "google-revocation-link-placeholder";
        wf(d, {
            position: "fixed",
            left: "0px",
            bottom: (null == c ? 30 : c + 30) + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none"
        });
        d.appendChild(b);
        a.j.document.body.appendChild(d);
        return d
    }

    function Xo(a, b) {
        wf(b, Lo(a.j));
        wf(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    }
    class Yo {
        constructor(a, b, c, d) {
            this.j = a;
            this.C = b;
            this.D = c;
            this.v = d;
            this.l = null;
            this.m = 0;
            this.o = null;
            this.A = () => To(this)
        }
        P() {
            this.j.addEventListener("scroll", this.A);
            this.m = xk(this.j);
            Uo(this)
        }
    };
    var Zo = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= a.getComputedStyle ? 0 : 2097152, b |= uk(a, 1E4)
            } catch (c) {
                b |= 32
            }
            return b
        },
        $o = a => {
            if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
            a = Math.min(a, 600);
            return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
        };

    function ap() {}
    ap.prototype.l = function(a, b, c, d) {
        return Qm(d.document, a, null, null, {}, b)
    };
    ap.prototype.m = function(a) {
        return $o(Math.min(a.screen.width || 0, a.screen.height || 0))
    };

    function bp(a) {
        this.j = a
    }
    bp.prototype.l = function(a, b, c, d) {
        return Qm(d.document, a, null, null, this.j, b)
    };
    bp.prototype.m = function() {
        return null
    };

    function cp(a) {
        this.j = a
    }
    cp.prototype.l = function(a, b, c, d) {
        var e = 0 < Q(this.j, rl, 9).length ? Q(this.j, rl, 9)[0] : null,
            f = an(O(this.j, tl, 3), e);
        if (!e) return null;
        if (e = N(e, 1)) {
            d = d.document;
            var g = c.tagName;
            c = ae(new Od(d), g);
            c.style.clear = f.clearBoth ? "both" : "none";
            "A" == g && (c.style.display = "block");
            c.style.padding = "0px";
            c.style.margin = "0px";
            f.Ta && Pm(c.style, f.Ta);
            d = ae(new Od(d), "INS");
            f.qa && Pm(d.style, f.qa);
            c.appendChild(d);
            f = {
                la: c,
                U: d
            };
            f.U.setAttribute("data-ad-type", "text");
            f.U.setAttribute("data-native-settings-key", e);
            Sm(f, a, null,
                b);
            a = f
        } else a = null;
        return a
    };
    cp.prototype.m = function() {
        var a = 0 < Q(this.j, rl, 9).length ? Q(this.j, rl, 9)[0] : null;
        if (!a) return null;
        a = Q(a, $k, 3);
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if ("height" == N(c, 1) && 0 < parseInt(N(c, 2), 10)) return parseInt(N(c, 2), 10)
        }
        return null
    };
    class dp {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = $o(a);
            return new Tl(["ap_container"], {
                ["google_reactive_ad_format"]: 27,
                ["google_responsive_auto_format"]: 16,
                ["google_max_num_ads"]: 1,
                ["google_ad_type"]: this.l,
                ["google_ad_format"]: a + "x" + b,
                ["google_ad_width"]: a,
                ["google_ad_height"]: b
            })
        }
    };
    class ep {
        constructor(a) {
            this.l = a
        }
        j() {
            return new Tl([], {
                ["google_ad_type"]: this.l,
                ["google_reactive_ad_format"]: 26,
                ["google_ad_format"]: "fluid"
            })
        }
    };

    function fp(a, b) {
        this.m = a;
        this.o = b
    }
    fp.prototype.j = function() {
        return this.m
    };
    fp.prototype.l = function() {
        return this.o
    };

    function gp(a, b) {
        this.o = a;
        this.m = b
    }
    gp.prototype.l = function() {
        return this.m
    };
    gp.prototype.j = function(a) {
        a = um(this.o, a.document);
        return 0 < a.length ? a[0] : null
    };

    function hp(a, b, c, d) {
        var e = a.O();
        if (!e) return null;
        var f = Xm(e);
        if (!f) return null;
        var g = a.l();
        g = bn[g];
        var h = void 0 === g ? null : g;
        if (null === h) return null;
        g = (g = O(a, tl, 3)) ? rd(g, 3) : null;
        f = new gp(f, h);
        h = N(a, 10).slice(0);
        null != N(e, 5) && h.push(1);
        var k = d ? d : {};
        d = N(a, 12);
        e = null != N(a, 4) ? O(a, ul, 4) : null;
        switch (N(a, 8)) {
            case 1:
                return k = k.Nc || null, new ip(f, new bp(an(O(a, tl, 3), null)), k, g, 0, h, e, c, b, d, a);
            case 2:
                return new ip(f, new cp(a), k.cd || new ep("text"), g, 1, h, e, c, b, d, a)
        }
        return null
    }

    function jp(a, b, c) {
        const d = [];
        for (let e = 0; e < a.length; e++) {
            const f = hp(a[e], e, b, c);
            null !== f && d.push(f)
        }
        return d
    }

    function kp(a) {
        return a.m
    }

    function lp(a, b, c) {
        void 0 !== a.C.j[b] || a.C.set(b, []);
        a.C.get(b).push(c)
    }

    function mp(a) {
        return Hm(a.j.document, a.A || !1)
    }

    function np(a) {
        return a.D.m(a.j)
    }

    function op(a, b = null, c = null) {
        return new ip(a.v, b || a.D, c || a.F, a.A, a.Sa, a.ob, a.Ba, a.j, a.I, a.o, a.H, a.J)
    }
    class ip {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, p = null) {
            this.v = a;
            this.D = b;
            this.F = c;
            this.A = d;
            this.Sa = e;
            this.ob = f;
            this.Ba = g ? g : new ul;
            this.j = h;
            this.I = k;
            this.o = l;
            this.H = m;
            this.J = p;
            this.m = !1;
            this.C = new gm
        }
        K() {
            return this.j
        }
        l() {
            return this.v.l()
        }
    };

    function pp(a, b, c) {
        this.R = a;
        this.j = b;
        this.M = c
    }
    pp.prototype.O = function() {
        return this.j
    };

    function qp(a, b) {
        if (a.R.m) throw Error("AMA:AP:AP");
        Mm(b, a.O(), a.R.l());
        a.R.m = !0
    }
    pp.prototype.fill = function(a, b) {
        var c = this.R;
        (a = c.D.l(a, b, this.j, c.j)) && qp(this, a.la);
        return a
    };

    function rp(a, b) {
        var c = [],
            d = [];
        try {
            for (var e = [], f = 0; f < a.length; f++) {
                var g = a[f],
                    h = g.v.j(g.j);
                h && e.push({
                    placement: g,
                    anchorElement: h
                })
            }
            for (f = 0; f < e.length; f++) d.push(sp(e[f]));
            var k = Ak(b),
                l = Bk(b);
            for (f = 0; f < d.length; f++) {
                a = l;
                b = k;
                var m = d[f].getBoundingClientRect(),
                    p = e[f];
                c.push(new pp(p.placement, p.anchorElement, new mm(m.left + a, m.top + b, m.right - m.left)))
            }
        } finally {
            for (f = 0; f < d.length; f++) Jm(d[f])
        }
        return c
    }

    function sp(a) {
        var b = a.anchorElement;
        a = a.placement;
        var c = a.A,
            d = a.j.document.createElement("div");
        d.className = "google-auto-placed";
        var e = d.style;
        e.textAlign = "center";
        e.width = "100%";
        e.height = "0px";
        e.clear = c ? "both" : "none";
        try {
            return Mm(d, b, a.l()), d
        } catch (f) {
            throw Jm(d), f;
        }
    };

    function tp(a) {
        const b = a.l.document.createElement("button");
        up(a, b);
        wf(b, {
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF"
        });
        b.addEventListener("click", e => {
            a.v();
            e.stopPropagation()
        });
        var c = a.l.document.createElement("img");
        Gc(c, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg");
        up(a, c);
        wf(c, {
            margin: "0px 8px 0px 0px",
            width: "24px",
            height: "24px"
        });
        const d = a.l.document.createElement("span");
        up(a, d);
        wf(d, {
            "line-height": "24px"
        });
        d.appendChild(a.l.document.createTextNode(a.o));
        b.appendChild(c);
        b.appendChild(d);
        c = mp(a.m.R);
        c.className = "google-in-page-revocation-link";
        wf(c, {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-top": "2px solid #ECEDED",
            "border-bottom": "2px solid #ECEDED"
        });
        c.appendChild(b);
        return c
    }

    function up(a, b) {
        wf(b, Lo(a.l));
        wf(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class vp {
        constructor(a, b, c, d) {
            this.l = a;
            this.o = b;
            this.v = c;
            this.m = d;
            this.j = null
        }
        P() {
            this.j = tp(this);
            qp(this.m, this.j)
        }
    }

    function wp(a, b) {
        b = b.filter(c => 5 == N(O(c, ul, 4), 1) && 1 == N(c, 8));
        b = jp(b, a);
        a = rp(b, a);
        a.sort((c, d) => d.M.j - c.M.j);
        return a[0] || null
    };

    function xp(a, b, c, d, e) {
        yp(new zp(a, b, c, d, e))
    }

    function yp(a) {
        Ap(a) ? dm(Bp(a), () => {
            if (null != a.j) {
                var b = a.j;
                b.j && b.j.parentNode && b.j.parentNode.removeChild(b.j);
                b.j = null;
                a.j = null
            }
            null != a.l && (Wo(a.l), a.l = null);
            Cp(a)
        }) : Cp(a)
    }

    function Ap(a) {
        {
            var b = a.o;
            var c = a.v,
                d = a.A;
            const e = wp(b, a.D);
            b = e ? new vp(b, c, d, e) : null
        }
        a.j = b;
        return a.j ? (a.j.P(), !0) : !1
    }

    function Bp(a) {
        null == a.m && (a.m = new fm(a.o), a.m.P(2E3));
        return a.m
    }

    function Cp(a) {
        a.l = new Yo(a.o, a.v, a.C, a.A);
        a.l.P()
    }
    class zp {
        constructor(a, b, c, d, e) {
            this.o = a;
            this.v = b;
            this.C = c;
            this.A = d;
            this.D = e;
            this.l = this.j = this.m = null
        }
    };

    function Dp(a) {
        const b = Ep(a);
        Ga(a.j.maxZIndexListeners, c => c(b))
    }

    function Ep(a) {
        a = Re(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class Fp {
        constructor(a) {
            this.j = Cj(a).floatingAdsStacking
        }
    };

    function Gp(a) {
        const b = a.l.googlefc = a.l.googlefc || {};
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push(() => Hp(a))
    }

    function Hp(a) {
        const b = a.l.googlefc = a.l.googlefc || {};
        b && b.getConsentStatus() != b.ConsentStatusEnum.CONSENT_NOT_REQUIRED && xp(a.l, b.getDefaultConsentRevocationText(), b.getDefaultConsentRevocationCloseText(), () => b.showRevocationMessage(), a.A);
        Ip(a)
    }

    function Ip(a) {
        if (null != a.j) {
            var b = a.m;
            delete b.j.maxZIndexRestrictions[a.j];
            Dp(b);
            a.j = null
        }
    }
    class Jp {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.v = b;
            this.o = c;
            this.m = d;
            this.A = e;
            this.j = null
        }
    };

    function Kp(a, b, c) {
        void 0 !== a.j.j[b] || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class Lp {
        constructor() {
            this.j = new gm
        }
    };

    function Mp(a) {
        this.A = {};
        this.A.c = a;
        this.m = [];
        this.l = null;
        this.o = [];
        this.C = 0
    }

    function Np(a, b) {
        a.A.wpc = b;
        return a
    }

    function Op(a, b) {
        for (var c = 0; c < b.length; c++) a.Y(b[c]);
        return a
    }
    Mp.prototype.Y = function(a) {
        for (var b = 0; b < this.m.length; b++)
            if (this.m[b] == a) return this;
        this.m.push(a);
        return this
    };

    function Pp(a, b) {
        a.l = a.l ? a.l : b;
        return a
    }
    Mp.prototype.v = function(a) {
        var b = gb(this.A);
        0 < this.C && (b.t = this.C);
        b.err = this.m.join();
        b.warn = this.o.join();
        this.l && (b.excp_n = this.l.name, b.excp_m = this.l.message && this.l.message.substring(0, 512), b.excp_s = this.l.stack && mi(this.l.stack, ""));
        b.w = 0 < a.innerWidth ? a.innerWidth : null;
        b.h = 0 < a.innerHeight ? a.innerHeight : null;
        return b
    };

    function Qp(a, b) {
        b && (a.j.apv = N(b, 4));
        return a
    }

    function Rp(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    class Sp extends Mp {
        constructor(a) {
            super(a);
            this.j = {}
        }
        v(a) {
            try {
                this.j.su = a.location.hostname
            } catch (b) {
                this.j.su = "_ex"
            }
            a = super.v(a);
            ib(a, this.j);
            return a
        }
    }

    function Tp(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };
    var Up = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);

    function Vp(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = Fa(e, f), 0 > c || b.push(new Wp(a, [f], c, f, 3, Xd(f).trim(), d));
        return b
    }

    function Xp(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let p = 0; p < g; p++) {
            var l = f[p];
            if (1 == l.nodeType || 3 == l.nodeType) {
                a: {
                    var m = l;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName) break a;
                    const r = c.getComputedStyle(m).getPropertyValue("display");m = "inline" == r || "inline-block" == r ? null : m
                }
                m ? (d.length && k && e.push(new Wp(a, d, p - 1, m, 0, k, c)), d = [], h = p + 1, k = "") : (d.push(l), l = Xd(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new Wp(a, d, h, b, 2, k, c));
        return e
    }

    function Yp(a, b) {
        return a.l - b.l
    }
    class Wp {
        constructor(a, b, c, d, e, f, g) {
            this.o = a;
            this.ab = b.slice(0);
            this.l = c;
            this.m = d;
            this.v = e;
            this.A = f;
            this.j = g
        }
        K() {
            return this.j
        }
    };
    class Zp {
        constructor(a, b, c) {
            this.j = a;
            this.l = b.La;
            this.v = b.Pb;
            this.m = b.Fc;
            this.o = c
        }
    };

    function $p(a) {
        this.j = {};
        this.l = {};
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    $p.prototype.add = function(a) {
        this.j[a] = !0;
        this.l[a] = a
    };
    $p.prototype.contains = function(a) {
        return !!this.j[a]
    };
    const aq = new $p("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    const bq = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = -1 != b.indexOf("&") ? Jc(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if (c = "0" == c.opacity || "none" == c.display || "hidden" == c.visibility ? !0 : !1) return !1;
            if (c = (c = b.tagName) && aq.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (bq(a, b[c])) return !0
        }
        return !1
    };
    class cq {
        constructor(a, b) {
            this.o = a;
            this.m = b;
            this.j = [];
            this.l = []
        }
    };
    var eq = (a, b) => {
            a = dq(a, b);
            return Up(a, c => {
                {
                    var d = Oa(c.v ? Xp(c.m, c.j, c.o) : [], c.l ? Vp(c.m, c.l, c.j, c.o) : []).slice(0);
                    d.sort(Yp);
                    c = [];
                    const m = new cq(51, !1);
                    for (l of d) {
                        d = m;
                        var e = {
                            Va: l,
                            Qa: l.A.length >= d.o
                        };
                        if (d.m || e.Qa) {
                            if (d.j.length) {
                                var f = d.j[d.j.length - 1].Va;
                                b: {
                                    var g = f.K();
                                    var h = f.ab[f.ab.length - 1];f = e.Va.ab[0];
                                    if (!h || !f) {
                                        g = !1;
                                        break b
                                    }
                                    var k = h.parentElement;
                                    const p = f.parentElement;
                                    if (k && p && k == p) {
                                        k = 0;
                                        for (h = h.nextSibling; 10 > k && h;) {
                                            if (h == f) {
                                                g = !0;
                                                break b
                                            }
                                            if (bq(g, h)) break;
                                            h = h.nextSibling;
                                            k++
                                        }
                                        g = !1
                                    } else g = !1
                                }
                            } else g = !0;
                            g ? (d.j.push(e), e.Qa && d.l.push(e.Va)) : (d.j = [e], d.l = e.Qa ? [e.Va] : [])
                        }
                        if (3 <= m.l.length) {
                            if (1 >= m.l.length) d = null;
                            else {
                                e = m.l[1];
                                for (d = m; d.j.length && !d.j[0].Qa;) d.j.shift();
                                d.j.shift();
                                d.l.shift();
                                d = e
                            }
                            d && c.push(d)
                        }
                    }
                    var l = c
                }
                return l
            })
        },
        dq = (a, b) => {
            const c = new gm;
            a.forEach(d => {
                var e = Xm(O(d, Sk, 1));
                if (e) {
                    {
                        const f = e.toString();
                        void 0 !== c.j[f] || c.set(f, {
                            Fc: d,
                            Ec: e,
                            La: null,
                            Pb: !1
                        });
                        e = c.get(f);
                        (d = (d = O(d, Sk, 2)) ? N(d, 7) : null) ? e.La = e.La ? e.La + "," + d : d: e.Pb = !0
                    }
                }
            });
            return im(c).map(d => {
                {
                    const e = um(d.Ec, b.document);
                    d = e.length ?
                        new Zp(e[0], d, b) : null
                }
                return d
            }).filter(d => null != d)
        };
    var fq = (a, b, c) => {
        const d = O(a, ol, 6);
        if (!d) return [];
        c = eq(Q(d, ql, 1), c);
        return (a = Ol(a)) && rd(a, 11) ? c.map(e => {
            {
                const f = vl();
                e = new ip(new fp(e.m, e.v), new bp({}), null, !1, 2, [], f, e.j, null, null, null, e.o)
            }
            return e
        }) : c.map(e => {
            {
                const f = vl();
                e = new ip(new fp(e.m, e.v), new ap, new dp(b), !1, 2, [], f, e.j, null, null, null, e.o)
            }
            return e
        })
    };
    var gq = !Wc && !oc();

    function hq(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (gq && a.dataset) {
            if (!(!A("Android") || pc() || nc() || lc() || A("Silk") || "adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var iq = (a, b, c) => {
            if (!b) return null;
            const d = Td(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = Z(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        kq = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0;
                b |= a.getComputedStyle ? 0 : 2097152;
                Ae() || (b |= 1048576); {
                    const d = Math.floor(a.document.body.getBoundingClientRect().width),
                        e = Vi(Ti(a), 79);
                    var c = d <= e
                }
                c || (b |= 32768);
                jq(a) &&
                    (b |= 33554432)
            } catch (d) {
                b |= 32
            }
            return b
        },
        jq = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == hq(a[b])) return !0;
            return !1
        };
    class lq {
        constructor() {
            this.j = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function mq(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return "__storage_test__" == b
        } catch (b) {
            return !1
        }
    }

    function nq(a) {
        try {
            if (null == a || !mq(a)) return null;
            const b = a.getItem("__lsv__");
            if (!b) return [];
            let c;
            try {
                c = JSON.parse(b)
            } catch (d) {}
            return !Array.isArray(c) || Ka(c, d => !Number.isInteger(d)) ? (a.removeItem("__lsv__"), []) : oq(c)
        } catch (b) {
            return null
        }
    }

    function oq(a = []) {
        const b = Date.now();
        return Ha(a, c => 36E5 > b - c)
    };
    var pq = (a, b) => {
        let c = 0;
        try {
            c |= a != a.top ? 512 : 0;
            c |= vk(a);
            c |= uk(a);
            c |= a.innerHeight >= a.innerWidth ? 0 : 8;
            c |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var d;
            if (d = b) {
                b = null;
                try {
                    b = a.localStorage
                } catch (f) {}
                var e = nq(b);
                d = !(e && 1 > e.length)
            }
            d && (c |= 134217728)
        } catch (f) {
            c |= 32
        }
        return c
    };

    function qq(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."];
        Ri(4, a.location) && (a = Cj(a).tagSpecificState[1] || null) && (a = a.debugCard && 4 === a.debugCard.getAdType() ? a.debugCard : null) && a.displayAdLoadedContent(b)
    };
    const rq = {
            1: "0.5vp",
            2: "300px"
        },
        sq = {
            1: 700,
            2: 1200
        },
        tq = {
            [1]: {
                mc: "3vp",
                yb: "1vp",
                lc: "0.3vp"
            },
            [2]: {
                mc: "900px",
                yb: "300px",
                lc: "90px"
            }
        };

    function uq(a, b, c, d) {
        var e = vq(a),
            f = Z(a).clientHeight || sq[e],
            g = void 0;
        d && (g = (d = (d = wq(Q(d, Jk, 2), e)) ? O(d, Mk, 7) : void 0) ? xq(d, f) : void 0); {
            d = g;
            g = vq(a);
            a = Z(a).clientHeight || sq[g];
            const h = yq(tq[g].yb, a);
            a = null === h ? zq(g, a) : new Aq(h, h, Bq(h, h, 8), 8, .3, d)
        }
        d = yq(tq[e].mc, f);
        g = yq(tq[e].yb, f);
        f = yq(tq[e].lc, f);
        e = a.m;
        d && f && g && void 0 !== b && (e = .5 >= b ? g + (1 - 2 * b) * (d - g) : f + (2 - 2 * b) * (g - f));
        c && (e = Math.min(e, a.m));
        b = e;
        return b = new Aq(e, b, Bq(e, b, a.l), a.l, a.o, a.j)
    }

    function Cq(a, b) {
        const c = vq(a);
        a = Z(a).clientHeight || sq[c];
        if (b = wq(Q(b, Jk, 2), c))
            if (b = Dq(b, a)) return b;
        return zq(c, a)
    }

    function Eq(a) {
        const b = vq(a);
        return zq(b, Z(a).clientHeight || sq[b])
    }

    function Fq(a, b) {
        let c = {
            za: a.m,
            ga: a.v
        };
        for (let d of a.A) d.adCount <= b && (c = d.xb);
        return c
    }
    class Aq {
        constructor(a, b, c, d, e, f) {
            this.m = a;
            this.v = b;
            this.A = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.o = e;
            this.j = f
        }
    }

    function wq(a, b) {
        for (let c of a)
            if (N(c, 1) == b) return c;
        return null
    }

    function Dq(a, b) {
        const c = yq(N(a, 2), b),
            d = yq(N(a, 5), b);
        if (null === c) return null;
        const e = N(a, 4);
        if (null == e) return null;
        const f = [];
        var g = Q(a, Lk, 3);
        for (var h of g) {
            g = N(h, 1);
            const k = yq(N(h, 2), b),
                l = yq(N(h, 3), b);
            if ("number" !== typeof g || null === k) return null;
            f.push({
                adCount: g,
                xb: {
                    za: k,
                    ga: l
                }
            })
        }
        b = (h = O(a, Mk, 7)) ? xq(h, b) : void 0;
        return new Aq(c, d, f, e, qd(a, 6), b)
    }

    function zq(a, b) {
        a = yq(rq[a], b);
        return new Aq(null === a ? Infinity : a, null, [], 3, null)
    }

    function yq(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function vq(a) {
        a = 900 <= Z(a).clientWidth;
        return Ae() && !a ? 1 : 2
    }

    function Bq(a, b, c) {
        if (4 > c) return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            xb: {
                za: 2 * a,
                ga: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            xb: {
                za: 3 * a,
                ga: 3 * b
            }
        }]
    }

    function xq(a, b) {
        const c = yq(N(a, 2), b) || 0,
            d = N(a, 3) || 1;
        a = yq(N(a, 1), b) || 0;
        return {
            $b: c,
            Yb: d,
            ja: a
        }
    };

    function Gq(a) {
        return new Tl(["pedestal_container"], {
            ["google_reactive_ad_format"]: 30,
            ["google_phwr"]: 2.189,
            ["google_ad_width"]: Math.floor(a),
            ["google_ad_format"]: "autorelaxed",
            ["google_full_width_responsive"]: !0,
            ["google_enable_content_recommendations"]: !0,
            ["google_content_recommendation_ui_type"]: "pedestal"
        })
    }
    class Hq {
        constructor() {}
        j(a) {
            return Gq(Math.floor(a.l))
        }
    };
    var Iq = {};

    function Jq(a, b, c) {
        let d = Kq(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.A.l;
        for (; d.Aa && d.Aa.length;) {
            const g = d.Aa.shift(),
                h = np(g.R),
                k = g.M.j;
            if ((c.l.Ca || c.l.Da || c.l.Mb || k > e) && (!h || h <= d.Ka) && Lq(c, g, {
                    Xb: d.Ka
                })) {
                e = k;
                if (d.Ia.j.length + 1 >= f) return !0;
                d = Kq(a, c, b);
                if (!d) return !0
            }
        }
        return c.m
    }
    var Kq = (a, b, c) => {
        var d = b.A.l,
            e = b.A.o,
            f = b.A;
        f = Hn(b.K(), f.j ? f.j.ja : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = Z(f.o).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - Mn(f)) : e = void 0;
        a = null == e || 50 <= e ? Mq(b, f, {
            types: a
        }, c) : null;
        return {
            Ia: f,
            Ka: e,
            Aa: a
        }
    };
    Iq[2] = za(function(a, b) {
        a = Mq(b, Hn(b.K()), {
            types: a,
            ia: Eq(b.K())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (Lq(b, a[c])) return !0;
        return b.m ? (b.o.push(11), !0) : !1
    }, [0]);
    Iq[5] = za(Jq, [0], 5);
    Iq[3] = function(a) {
        if (!a.m) return !1;
        var b = Mq(a, Hn(a.K()), {
            types: [0],
            ia: Eq(a.K())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (Lq(a, b[c])) return !0;
        a.o.push(11);
        return !0
    };
    var Nq = a => {
            var b;
            a.l.oc ? b = new Aq(0, null, [], 3, null) : b = Eq(a.K());
            return {
                types: [0],
                ia: b
            }
        },
        Pq = a => {
            var b = a.K().document.body.getBoundingClientRect().width;
            b = Gq(b);
            var c = a.j;
            var d = c.document.body,
                e = iq(c, d, null);
            if (e) c = e;
            else {
                if (c.document.body) {
                    e = Math.floor(c.document.body.getBoundingClientRect().width);
                    for (var f = [{
                            element: c.document.body,
                            depth: 0,
                            height: 0
                        }], g = -1, h = null; 0 < f.length;) {
                        const m = f.pop(),
                            p = m.element;
                        var k = m.height;
                        0 < m.depth && k > g && (g = k, h = p);
                        if (5 > m.depth)
                            for (k = 0; k < p.children.length; k++) {
                                const r =
                                    p.children[k]; {
                                    var l = e;
                                    const B = r.getBoundingClientRect().width;
                                    l = (null == B || null == l ? 0 : B >= .9 * l && B <= 1.01 * l) ? !0 : !1
                                }
                                l && f.push({
                                    element: r,
                                    depth: m.depth + 1,
                                    height: r.getBoundingClientRect().height
                                })
                            }
                    }
                    e = h
                } else e = null;
                c = e ? iq(c, e.parentNode || d, e) : null
            }
            c && (b = Sl(a.F, b), d = Qm(a.j.document, a.D, null, null, {}, b)) && (Mm(d.la, c, 2, 256), Oq(a, d, b))
        },
        Rq = (a, b) => {
            var c = Nq(a);
            c.wb = [5];
            c = Mq(a, Hn(a.K()), c, 8);
            Qq(a, c.reverse(), b)
        },
        Qq = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.M), Lq(a, d, {
                        xc: b
                    })) return !0;
            return !1
        };
    Iq[8] = function(a) {
        var b = a.K().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => Iq[8](a), {
            once: !0
        }), !0;
        if (!a.m) return !1;
        if (!a.Ra()) return !0;
        b = Nq(a);
        b.vb = [2, 4, 5];
        b = Mq(a, Hn(a.K()), b, 8);
        const c = new Hq(a.l.cc || 0);
        if (Qq(a, b, c)) return !0;
        if (a.l.Nb) switch (a.l.ac || 0) {
            case 1:
                Rq(a, c);
                break;
            default:
                Pq(a)
        }
        return !0
    };
    Iq[6] = za(Jq, [2], 6);
    Iq[7] = za(Jq, [1], 7);
    Iq[9] = function(a) {
        const b = Kq([0, 2], a, 9);
        if (!b || !b.Aa) return a.o.push(17), qq(a.K()), a.m;
        for (const e of b.Aa) {
            var c = e;
            var d = a.l.fb || null;
            null == d ? c = null : (d = op(c.R, new Sq, new Tq(d, a.K())), c = new pp(d, c.O(), c.M));
            if (c && !(np(c.R) > b.Ka) && Lq(a, c, {
                    Xb: b.Ka,
                    Sc: !0
                })) return e.R.m = !0
        }
        a.o.push(17);
        qq(a.K());
        return a.m
    };
    class Sq {
        l(a, b, c, d) {
            return Tm(d.document, a, b)
        }
        m(a) {
            return Z(a).clientHeight || 0
        }
    };
    var Uq = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= a.getComputedStyle ? 0 : 2097152, b |= a.document.querySelectorAll && a.document.querySelector ? 0 : 4194304, b |= uk(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var Vq = class {
        constructor() {
            const a = new lq;
            this.promise = a.j;
            this.resolve = a.resolve
        }
    };

    function Wq(a, b, c) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        b[a] || (b[a] = new Vq, c && c());
        return b[a]
    }

    function Xq(a, b, c) {
        return Wq(a, b, function() {
            Ie(b.document, c)
        }).promise
    };
    var Yq = (a, b, c) => {
        var d = 0;
        try {
            d |= a != a.top ? 512 : 0, d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
        } catch (k) {
            d |= 32
        } {
            var e = T.G().j(289, !1);
            let k = 0;
            try {
                k |= uk(a, 0 < hg(43) ? hg(43) : tk);
                if (T.G().j(309, !1)) {
                    {
                        const l = Z(a).clientHeight;
                        var f = l ? 320 > l ? -2147483648 : 0 : 1073741824
                    }
                    k |= f
                }
                k |= vk(a);
                e || (k |= a.innerHeight >= a.innerWidth ? 0 : 8);
                var g;
                if (g = b) {
                    var h = nq(c);
                    g = !(h && 1 > h.length)
                }
                g && (k |= 134217728)
            } catch (l) {
                k |= 32
            }
            a = k
        }
        return d | a
    };

    function Zq(a, b, c) {
        const d = a.createElement("link");
        try {
            d.rel = "preload", d.href = b instanceof qb ? tb(b).toString() : b instanceof Kb ? Pb(b) : Pb(Ub(b))
        } catch (e) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (e) {}
    };
    const $q = {
        [16]: 4,
        [27]: 512,
        [26]: 128
    };
    var ar = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return !(Oo(a) | Ro(a, c));
                case 8:
                    return b = !("on" === b.google_adtest || Pi(a.location, "google_ia_debug")), 0 == Yq(a, b, d);
                case 9:
                    return d = T.G().j(230, !1) && !("on" === b.google_adtest || Pi(a.location, "google_scr_debug")), !pq(a, d);
                case 30:
                    return 0 == kq(a);
                case 26:
                    return 0 == Uq(a) && !0;
                case 27:
                    return !Zo(a) && !0;
                default:
                    return !1
            }
        },
        br = (a, b, c, d) => {
            switch (c) {
                case 0:
                    return 0;
                case 1:
                case 2:
                    return Oo(a) | Ro(a, c);
                case 8:
                    return Yq(a, !("on" === b.google_adtest || Pi(a.location, "google_ia_debug")),
                        d);
                case 9:
                    return pq(a, T.G().j(230, !1) && !("on" === b.google_adtest || Pi(a.location, "google_scr_debug")));
                case 16:
                    return Am(b, a) ? 0 : 8388608;
                case 30:
                    return kq(a);
                case 26:
                    return Uq(a);
                case 27:
                    return Zo(a);
                default:
                    return 32
            }
        },
        cr = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!cb(d)) return !1;
            a = Yg(a);
            if (!a || !ar(a, b, d, c)) return !1;
            b = Cj(a);
            if (yk(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        dr = a => !a.google_reactive_ads_config && Fk(a) && 16 != a.google_reactive_ad_format,
        er = a => {
            if (!a.hash) return null;
            let b = null;
            U(Li, c => {
                !b && Pi(a, c) && (b = Mi[c])
            });
            return b
        },
        gr = (a, b) => {
            if (!a.document.getElementById("goog_info_card")) {
                var c = Cj(a).tagSpecificState[1] || null;
                c && U(Ni, d => {
                    !c.debugCardRequested && Ri(d, a.location) && (c.debugCardRequested = !0, fr(a, e => {
                        c.debugCard = e.createDebugCard(d, a, b)
                    }))
                })
            }
        },
        ir = (a, b, c) => {
            if (!b) return null;
            const d = Cj(b);
            let e = 0;
            U(db, f => {
                const g = $q[f];
                g && 0 === hr(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        jr = (a, b, c) => {
            const d = [];
            U(db, e => {
                const f = hr(b, a, e, c);
                0 !== f && d.push(e + ":" + f)
            });
            return d.join(",") || null
        },
        kr = a => {
            const b = [],
                c = {};
            U(a, (d, e) => {
                if ((e = Aj[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        lr = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        hr = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = Cj(b),
                g = yk(f, c);
            if (a.google_reactive_ad_format == c || 26 != c && 27 != c && g) e |= 64;
            let h = !1;
            U(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) === l && (h = !0)
            });
            h && er(b.location) !== c && (e |= 128);
            return e | br(b, a, c, d)
        },
        mr = (a, b) => {
            if (a) {
                var c = Cj(a),
                    d = {};
                U(b, (e, f) => {
                    (f = Aj[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                U(db, e => {
                    d[Bj[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        nr = () => {
            const a = Xg();
            return Rj(a, "/pagead/js/" + Nf() + "/r20190131/reactive_library.js", Tf ? "https" : "http")
        },
        or = (a, b) => {
            a = W(a, b);
            return Xq(1,
                u(), nr()).then(a)
        },
        fr = (a, b) => {
            b = W(212, b);
            var c = Xg();
            c = Rj(c, "/pagead/js/" + Nf() + "/r20190131/debug_card_library.js", Tf ? "https" : "http");
            Xq(3, a, c).then(b)
        };
    const pr = a => {
        if (!a.adsbygoogle) {
            a.adsbygoogle = [];
            const b = Qj(Xg(), "/pagead/js/adsbygoogle.js");
            Ie(a.document, b)
        }
    };
    var qr = (a, b, c) => {
            a.setAttribute("data-adsbygoogle-status", "reserved");
            a.className += " adsbygoogle-noablate";
            pr(c);
            c.adsbygoogle.push({
                element: a,
                params: b
            })
        },
        rr = (a, b, c) => {
            const d = Bj[a],
                e = {};
            a = b.page_level_pubvars;
            ra(a) && ib(e, a);
            U(b, (f, g) => {
                Aj[g] == d && ra(f) && ib(e, f)
            });
            ra(c) && ib(e, c);
            return e
        },
        sr = (a, b) => {
            R(a, "load", () => {
                pr(a);
                a.adsbygoogle.push(b)
            })
        };
    class Tq {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j() {
            {
                var a = this.l;
                var b = this.m;
                const c = a.B || {};
                c.google_ad_client = a.Fb;
                c.google_ad_height = Z(b).clientHeight || 0;
                c.google_ad_width = Z(b).clientWidth || 0;
                c.google_reactive_ad_format = 9;
                c.google_rasc = a.l().C();
                a.j && (c.google_adtest = "on");
                a = c
            }
            return new Tl(["fsi_container"], a)
        }
    };
    class tr {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function ur(a) {
        this.j = a.slice(0)
    }
    ur.prototype.filter = function(a) {
        return new ur(Ha(this.j, a))
    };

    function vr(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new ur(d)
    }
    ur.prototype.apply = function(a) {
        return new ur(a(this.j.slice(0)))
    };

    function wr(a, b) {
        return new ur(a.j.slice(0).sort(b))
    }

    function xr(a, b) {
        if (0 > b) return a;
        a = a.j.slice(0);
        a.splice(b, 1);
        return new ur(a)
    }

    function yr(a, b = 1) {
        a = a.j.slice(0);
        const c = new tr(b);
        Ta(a, () => c.next());
        return new ur(a)
    };
    class zr {
        constructor(a) {
            this.j = new $p(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };

    function Ar(a, b, c) {
        const d = nm(c, 1, b + 1);
        return !Ka(a, e => jm(e, d))
    }

    function Br(a, b, c, d, e) {
        e = e.M;
        const f = nm(e, 0, b),
            g = nm(e, 0, c),
            h = nm(e, 0, d);
        return !Ka(a, k => jm(k, g) || jm(k, f) && !jm(k, h))
    }

    function Cr(a, b, c, d) {
        const e = Ln(a);
        if (Ar(e, b, d.M)) return !0;
        if (!Br(e, b, c.$b, c.ja, d)) return !1;
        const f = new xn(nm(d.M, 0, 0), 1);
        a = Ha(a.m, g => vn(g, f, c.ja));
        b = Ja(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.Yb ? !1 : !0
    };
    class Dr {
        constructor() {
            this.j = new gm
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new $p, this.j.set(a, c));
            c.add(b)
        }
    };
    var Er = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Fr(a, b) {
        const c = new Dr,
            d = new $p;
        b.forEach(e => {
            if (O(e, Xk, 1)) {
                e = O(e, Xk, 1);
                if (O(e, Uk, 1) && O(e, Uk, 1).O() && O(e, Uk, 2) && O(e, Uk, 2).O()) {
                    const g = Gr(a, O(e, Uk, 1).O()),
                        h = Gr(a, O(e, Uk, 2).O());
                    if (g && h)
                        for (var f of Er({
                                anchor: g,
                                position: O(e, Uk, 1).l()
                            }, {
                                anchor: h,
                                position: O(e, Uk, 2).l()
                            })) c.set(sa(f.anchor), f.position)
                }
                O(e, Uk, 3) && O(e, Uk, 3).O() && (f = Gr(a, O(e, Uk, 3).O())) && c.set(sa(f), O(e, Uk, 3).l())
            } else O(e, Yk, 2) ? Hr(a, O(e, Yk, 2), c) : O(e, Zk, 3) && Ir(a, O(e, Zk, 3), d)
        });
        return new Jr(c, d)
    }
    class Jr {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const Hr = (a, b, c) => {
            O(b, Sk, 1) && (a = Kr(a, O(b, Sk, 1))) && a.forEach(d => {
                d = sa(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Ir = (a, b, c) => {
            O(b, Sk, 1) && (a = Kr(a, O(b, Sk, 1))) && a.forEach(d => {
                c.add(sa(d))
            })
        },
        Gr = (a, b) => (a = Kr(a, b)) && 0 < a.length ? a[0] : null,
        Kr = (a, b) => (b = Xm(b)) ? um(b, a) : null;

    function Lr(a) {
        return function(b) {
            return rp(b, a)
        }
    }

    function Mr(a) {
        const b = Z(a).clientHeight;
        return b ? za(Nr, b + Ak(a)) : Ua
    }

    function Or(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return Ua;
        const d = Ln(c || Hn(b));
        return e => Ar(d, a, e.M)
    }

    function Pr(a, b, c, d) {
        if (0 > a || 0 > b.$b || 0 > b.Yb || 0 > b.ja) throw Error("ama::ead:nd");
        return Infinity === a ? Ua : e => Cr(d || Hn(c, b.ja), a, b, e)
    }

    function Qr(a) {
        if (!a.length) return Ua;
        const b = new zr(a);
        return c => b.contains(c.Sa)
    }

    function Rr(a) {
        return function(b) {
            for (let c of b.ob)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function Sr(a) {
        return a.length ? function(b) {
            const c = b.ob;
            return a.some(d => -1 < c.indexOf(d))
        } : Va
    }

    function Tr(a, b) {
        if (0 >= a) return Va;
        const c = Z(b).scrollHeight - a;
        return function(d) {
            return d.M.j <= c
        }
    }

    function Ur(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[N(c.Ba, 2) || 0]
        }
    }

    function Vr(a) {
        return a.length ? b => a.includes(N(b.Ba, 2) || 0) : Va
    }

    function Wr(a) {
        return a.length ? b => a.includes(N(b.Ba, 1) || 0) : Va
    }

    function Xr(a, b) {
        const c = Fr(a, b);
        return function(d) {
            var e = d.O();
            d = cn[d.R.l()];
            var f = sa(e);
            f = (f = c.l.j.get(f)) ? f.contains(d) : !1;
            if (!f) a: {
                if (c.j.contains(sa(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(sa(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }
    const Nr = (a, b) => b.M.j >= a,
        Yr = (a, b) => b.M.j < a,
        Zr = (a, b, c) => {
            c = c.M.l;
            return a <= c && c <= b
        };
    class $r {
        constructor(a = 0) {
            this.j = a
        }
    };
    class as {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function bs(a) {
        const b = a.O();
        a = a.R.l();
        return 0 == a || 3 == a ? cs(b.parentElement) : cs(b)
    }

    function cs(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function ds(a, b) {
        var c = b.M.j + 200 * Math.min(20, bs(b));
        var d = a.l;
        0 > d.j && (d.j = Z(d.l).scrollHeight || 0);
        d = d.j - b.M.j;
        d = 1E3 < d ? 0 : 2 * (1E3 - d);
        c += d;
        a = a.j;
        b = b.O();
        b = "string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0;
        return c + b
    }
    class es {
        constructor(a, b = 0) {
            this.l = new as(a);
            this.j = new $r(b)
        }
    };

    function fs(a, b) {
        {
            a = a.j;
            const c = Z(a).clientHeight;
            a = c ? za(Yr, c + Ak(a)) : Ua
        }
        b = b.filter(a);
        return b = b.j.slice(0)
    }

    function gs(a, b) {
        if (null != b) {
            var c = [],
                d;
            for (d of b) {
                b = null != d ? d.R.I : null;
                var e = null != d ? d.M : null;
                if (null != b && null != e) {
                    var f = new Eo;
                    f = pd(f, 1, e.m);
                    f = pd(f, 2, e.j);
                    e = pd(f, 3, e.l);
                    f = new Fo;
                    b = pd(f, 1, b);
                    b = wd(b, 2, e);
                    c.push(b)
                }
            }
            a = a.j;
            if (c) {
                (d = Io(a)) || (d = new Go);
                c = c.concat(Q(d, Fo, 5));
                d = new Set;
                b = [];
                for (e = 0; e < c.length; e++) d.has(N(c[e], 1)) || (b.push(c[e]), d.add(N(c[e], 1)));
                c = b;
                Jo({
                    Za: c
                }, a)
            }
        }
    }
    class hs {
        constructor(a, b, c, d = 0) {
            this.l = new ur(a);
            this.m = new es(c, d);
            this.j = c;
            this.o = new Lp
        }
        find(a, b = 0) {
            var c = "number" === typeof a.kc ? a.kc : -1;
            if (c >= this.l.j.length) throw Error("AMA:PF:I");
            const d = a.Wb ? a.Wb : [0];
            var e = "number" === typeof a.Zb ? a.Zb : 0,
                f = "number" === typeof a.minWidth ? a.minWidth : 0;
            const g = "number" === typeof a.maxWidth ? a.maxWidth : Infinity,
                h = "number" === typeof a.ga ? a.ga : 0;
            c = xr(this.l, c);
            c = vr(vr(vr(vr(vr(vr(vr(c, Qr(d), is(1, b)), Rr(a.sa || []), is(2, b)), Ur(a.eb || []), is(3, b)), Vr(a.wh || []), is(4, b)), Wr(a.wb || []), is(5, b)), Sr(a.vb || []), is(6, b)), Xa(kp), is(7, b));
            c = c.apply(Lr(this.j));
            e = a.Ja && a.Lb ? vr(c, Pr(e, a.Lb, this.j, a.Ia), js(16, b)) : vr(c, Or(e, this.j, a.Ia), js(9, b));
            e = vr(e, za(Zr, f, g), js(10, b));
            a.Ha && (e = vr(e, Xr(this.j.document, a.Ha), js(11, b)));
            a.Wa && (f = fs(this, e), gs(this, f));
            e = vr(vr(e, Mr(this.j), js(12, b)), Tr(h, this.j), js(13, b));
            e = a.Da ? wr(e, (k, l) => {
                {
                    var m = k.R.o;
                    const p = l.R.o;
                    null == m || null == p ? null == m && null == p ? (m = this.m, k = ds(m, k) - ds(m, l)) : k = null == m ? 1 : -1 : k = m - p
                }
                return k
            }) : wr(e, (k, l) => {
                var m = this.m;
                return ds(m, k) -
                    ds(m, l)
            });
            a.Ca && (e = yr(e, Oc(this.j.location.href + this.j.localStorage.google_experiment_mod)));
            1 === d.length && Kp(this.o, d[0], {
                Ic: c.j.length,
                Ed: e.j.length
            });
            return e.j.slice(0)
        }
    }
    const is = (a, b) => c => lp(c, b, a),
        js = (a, b) => c => lp(c.R, b, a);

    function ks(a, b) {
        if (!a) return !1;
        a = Je(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function ls(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function ms(a) {
        return !!a.nextSibling || !!a.parentNode && ms(a.parentNode)
    };

    function ns(a) {
        const b = wk(a, !0),
            c = Z(a).scrollWidth,
            d = Z(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = Ak(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            p = [],
            r = [];
        let B = 0,
            y = 0,
            t = Infinity,
            E = Infinity,
            K = null;
        var aa = Dn({
            ea: !1
        }, a);
        for (var V of aa) {
            aa = V.getBoundingClientRect();
            const G = b - (aa.bottom + f);
            var da = void 0,
                ma = void 0;
            if (V.className && -1 != V.className.indexOf("adsbygoogle-ablated-ad-slot")) {
                da = V.getAttribute("google_element_uid");
                ma = a.google_sv_map;
                if (!da || !ma || !ma[da]) continue;
                da = (ma = Zg(ma[da])) ? ma.height : 0;
                ma = ma ? ma.width : 0
            } else if (da = aa.bottom - aa.top, ma = aa.right - aa.left, 1 >= da || 1 >= ma) continue;
            g.push(da);
            k.push(ma);
            l.push(da * ma);
            V.className && -1 != V.className.indexOf("google-auto-placed") ? (y += 1, V.className && -1 != V.className.indexOf("pedestal_container") && (K = da)) : (t = Math.min(t, G), p.push(aa), B += 1, h.push(da), m.push(da * ma));
            E = Math.min(E, G);
            r.push(aa)
        }
        t = Infinity === t ? null : t;
        E = Infinity === E ? null : E;
        f = os(p);
        r = os(r);
        h = ps(b, h);
        p = ps(b, g);
        m = ps(b * c, m);
        V = ps(b *
            c, l);
        return new qs(a, {
            Tc: e,
            rb: b,
            pd: c,
            od: d,
            gd: B,
            Hc: y,
            Kc: rs(g),
            Lc: rs(k),
            Jc: rs(l),
            pb: f,
            md: r,
            ld: t,
            kd: E,
            cb: h,
            bb: p,
            Dc: m,
            Cc: V,
            qd: K
        })
    }

    function ss(a, b, c, d) {
        const e = Ae() && !(900 <= Z(a.l).clientWidth);
        d = Ha(d, f => Ma(a.m, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.Tc,
            pg_h: ts(a.j.rb),
            pg_w: ts(a.j.pd),
            pg_hs: ts(a.j.od),
            c: ts(a.j.gd),
            aa_c: ts(a.j.Hc),
            av_h: ts(a.j.Kc),
            av_w: ts(a.j.Lc),
            av_a: ts(a.j.Jc),
            s: ts(a.j.pb),
            all_s: ts(a.j.md),
            b: ts(a.j.ld),
            all_b: ts(a.j.kd),
            d: ts(a.j.cb),
            all_d: ts(a.j.bb),
            ard: ts(a.j.Dc),
            all_ard: ts(a.j.Cc),
            pd_h: ts(a.j.qd),
            dt: e ? "m" : "d"
        }
    }
    class qs {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.m = "633794002 633794005 44715380 44715381 21065713 21065714 21065715 21065716".split(" ")
        }
    }

    function rs(a) {
        return Kd.apply(null, Ha(a, b => 0 < b)) || null
    }

    function ps(a, b) {
        return 0 >= a ? null : Jd.apply(null, b) / a
    }

    function os(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function ts(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function us(a, b) {
        b = (Z(b).clientHeight || 0) - Ak(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            vs(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function ws(a) {
        const b = {};
        var c = Fn({
            ea: !1,
            va: !1,
            wa: !1,
            xa: !1
        }, a).map(d => d.getBoundingClientRect()).filter(vs);
        b.yc = c.length;
        c = Gn({
            wa: !0
        }, a).map(d => d.getBoundingClientRect()).filter(vs);
        b.Uc = c.length;
        c = Gn({
            xa: !0
        }, a).map(d => d.getBoundingClientRect()).filter(vs);
        b.nd = c.length;
        c = Gn({
            va: !0
        }, a).map(d => d.getBoundingClientRect()).filter(vs);
        b.Bc = c.length;
        c = (Z(a).clientHeight || 0) - Ak(a);
        c = Fn({
            ea: !1
        }, a).map(d => d.getBoundingClientRect()).filter(vs).filter(ya(xs, null, c));
        b.zc = c.length;
        a = ns(a);
        c = null != a.j.cb ? a.j.cb :
            null;
        null != c && (b.hd = c);
        a = null != a.j.bb ? a.j.bb : null;
        null != a && (b.Ac = a);
        return b
    }

    function Lq(a, b, {
        Xb: c,
        xc: d,
        Sc: e
    } = {}) {
        const f = b.R;
        if (f.m) return !1;
        var g = b.O(),
            h = f.l(),
            k = a.m;
        a: {
            var l = a.j;
            switch (h) {
                case 0:
                    l = ks(ls(g), l);
                    break a;
                case 3:
                    l = ks(g, l);
                    break a;
                case 2:
                    var m = g.lastChild;
                    l = ks(m ? 1 == m.nodeType ? m : ls(m) : null, l);
                    break a
            }
            l = !1
        }
        if (k = !l && !(!k && 2 == h && !ms(g))) g = 1 == h || 2 == h ? g : g.parentNode, k = !(g && !Fm(g) && 0 >= g.offsetWidth);
        if (!k) return !1;
        c = null == c ? null : new Tl(null, {
            google_max_responsive_height: c
        });
        g = Ul(N(f.Ba, 2) || 0);
        h = f.o;
        h = null == h ? null : new Tl(null, {
            google_ml_rank: h
        });
        d = Sl(a.F, f.F ? f.F.j(b.M) :
            null, c, d || null, g, h);
        b = b.fill(a.D, d);
        if (e) {
            if (b) {
                e = b.U;
                c = e.style.width;
                e.style.width = "100%";
                g = e.offsetWidth;
                e.style.width = c;
                e = g;
                c = a.j;
                g = b.U;
                h = d && d.qb || {};
                if (Tg(c) != c) k = Yg(c) ? 3 : 16;
                else if (488 > Z(c).clientWidth)
                    if (c.innerHeight >= c.innerWidth)
                        if (k = Z(c).clientWidth, !k || .3 < (k - e) / k) k = 6;
                        else {
                            if (k = "true" != h.google_full_width_responsive) c: {
                                l = g.parentElement;
                                for (k = Z(c).clientWidth; l; l = l.parentElement) {
                                    m = Je(l, c);
                                    if (!m) continue;
                                    const p = Ye(m.width);
                                    if (p && !(p >= k) && "visible" != m.overflow) {
                                        k = !0;
                                        break c
                                    }
                                }
                                k = !1
                            }
                            k = k ? 7 :
                                !0
                        }
                else k = 5;
                else k = 4;
                if (!0 !== k) e = k;
                else {
                    if (!(h = "true" == h.google_full_width_responsive)) b: {
                        do
                            if ((h = Je(g, c)) && "fixed" == h.position) {
                                h = !1;
                                break b
                            }
                        while (g = g.parentElement);
                        h = !0
                    }
                    h ? T.G().j(233, !1) || c.location && "#bffwroe2etoq" == c.location.hash ? e = !0 : (c = Z(c).clientWidth, e = c - e, e = c && 0 <= e ? !0 : c ? -10 > e ? 11 : 0 > e ? 14 : 12 : 10) : e = 9
                }
                if (e) {
                    e = a.j;
                    c = b.U;
                    if (g = Dm(e, c)) c.style.border = c.style.borderStyle = c.style.outline = c.style.outlineStyle = c.style.transition = "none", c.style.borderSpacing = c.style.padding = "0", Bm(c, g, "0px"), c.style.width =
                        Z(e).clientWidth + "px", Em(e, c, g), c.style.zIndex = 30;
                    e = !0
                } else Jm(b.la), e = !1
            } else e = !1;
            e = !e
        }
        if (e || !Oq(a, b, d)) return !1;
        Vj(9, [f.o, f.Sa]);
        return !0
    }

    function Mq(a, b, c, d) {
        const e = c.ia ? c.ia : a.A,
            f = Fq(e, b.j.length);
        return a.v.find({
            kc: ys(a),
            Wb: c.types,
            Zb: f.za,
            Ia: b,
            sa: a.J,
            ga: f.ga || void 0,
            Ca: !!a.l.Ca,
            Da: !!a.l.Da,
            vb: c.vb,
            minWidth: c.minWidth,
            maxWidth: c.maxWidth,
            eb: a.N,
            Ha: a.I,
            wb: c.wb,
            Wa: !!a.l.Wa,
            Ja: !!a.l.Ja,
            Lb: e.j
        }, d)
    }

    function zs(a) {
        return a.C ? a.C : a.C = a.j.google_ama_state
    }

    function ys(a) {
        var b = zs(a);
        if (null == b) return -1;
        b = b.placement;
        return "number" !== typeof b || 0 > b || b > a.v.l.j.length ? -1 : b
    }

    function Oq(a, b, c) {
        if (!b) return !1;
        try {
            Um(a.j, b.U, c)
        } catch (d) {
            return Jm(b.la), a.o.push(6), !1
        }
        return !0
    }
    class As {
        constructor(a, b, c, d, e = {}) {
            this.v = a;
            this.D = b;
            this.j = c;
            this.A = d.ia;
            this.J = d.sa || [];
            this.F = d.Wc || null;
            this.N = d.eb || [];
            this.I = d.Ha || [];
            this.l = e;
            this.m = !1;
            this.H = [];
            this.o = [];
            this.C = void 0
        }
        K() {
            return this.j
        }
        Y(a) {
            this.H.push(a)
        }
        mb() {
            return !!this.l.hc
        }
        Ra() {
            return !jq(this.j)
        }
    }
    const vs = a => 1 < (a.bottom - a.top) * (a.right - a.left),
        xs = (a, b) => b.top <= a;

    function Bs(a, b, c, d, e) {
        this.ra = a;
        this.da = b;
        this.Ea = c;
        this.j = d;
        this.l = e
    };
    var Cs = (a, b, {
        Ra: c = !1,
        mb: d = !1,
        yd: e = !1
    } = {}) => {
        const f = [];
        e && f.push(9); - 1 < b.indexOf(3) && f.push(6); - 1 < b.indexOf(4) && !d && c && f.push(8); - 1 < b.indexOf(1) && (3 === a ? f.push(1, 5) : f.push(1, 2, 3)); - 1 < b.indexOf(2) && f.push(7); - 1 < b.indexOf(4) && d && c && f.push(8);
        return f
    };

    function Ds(a) {
        return new Bs(a.j.v.l.filter(kp).j.length, a.j.H.slice(0), a.j.o.slice(0), a.j.v.l.j.length, a.j.v.o.j)
    }
    class Es {
        constructor(a, b, c) {
            this.o = a.slice(0);
            this.l = a.slice(0);
            this.m = Na(this.l, 1);
            this.j = c
        }
    };

    function Fs() {
        this.l = new Gs(this);
        this.j = 0
    }
    Fs.prototype.resolve = function(a) {
        Hs(this);
        this.j = 1;
        this.o = a;
        Is(this.l)
    };
    Fs.prototype.reject = function(a) {
        Hs(this);
        this.j = 2;
        this.m = a;
        Is(this.l)
    };

    function Hs(a) {
        if (0 != a.j) throw Error("Already resolved/rejected.");
    }

    function Gs(a) {
        this.j = a
    }
    Gs.prototype.then = function(a, b) {
        if (this.l) throw Error("Then functions already set.");
        this.l = a;
        this.m = b;
        Is(this)
    };

    function Is(a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.o);
                break;
            case 2:
                a.m && a.m(a.j.m);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function Js(a) {
        this.j = a;
        this.exception = void 0
    };

    function Ks(a) {
        M(this, a, null, null)
    }
    z(Ks, D);

    function Ls(a) {
        try {
            {
                const f = Ms(a).getItem("adsbygoogle_in_page_survey_freqcap");
                var b = f ? Ad(Ks, f) : null
            }
            if (b) {
                var c = N(b, 1);
                if (null == c) var d = !0;
                else {
                    var e = N(a.j, 1) || 0;
                    d = c + e < (new Date).getTime()
                }
            } else d = !0;
            return d
        } catch (f) {
            return !1
        }
    }

    function Ns(a) {
        try {
            var b = (new Date).getTime(),
                c = new Ks;
            var d = pd(c, 1, b);
            Ms(a).setItem("adsbygoogle_in_page_survey_freqcap", d.C());
            return !0
        } catch (e) {
            return !1
        }
    }

    function Ms(a) {
        a = a.l.localStorage;
        if (!a) throw Error("No localStorage");
        return a
    }
    class Os {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };
    var Ps = new zr("ar_eg ar_jo ar_ma ar_sa ar_xb ar bg bn bs ca cs da de_at de_ch de el en_au en_ca en_gb en_ie en_in en_nz en_sg en_xa en_xc en en_za es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et fil fi fr_ch fr gsw gu he hi hr hu id in it iw ja km kn ko ln lt lv ml mo mr ms nb nl no pa pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv te th tl tr uk ur vi zh_cn zh_hk zh_tw zh".split(" "));

    function Qs(a) {
        if (1 == N(a.o, 1) && Ps.contains(a.m) && Ls(a.l)) {
            var b = Rs(a.j, a.A);
            b && Xq(6, a.j, Ss(a.m)).then(c => {
                const d = {
                    win: a.j,
                    domInterface: {
                        getDocument: () => a.j.document,
                        getContainer: () => mp(b.R),
                        attachToDom: e => qp(b, e)
                    },
                    webPropertyCode: a.v,
                    experimentIds: N(a.o, 2)
                };
                Ns(a.l) && c.handleRequest(d)
            })
        }
    }
    class Ts {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.v = b;
            this.m = c.replace("-", "_").toLowerCase();
            this.o = d;
            this.A = e;
            this.l = new Os(a, O(d, yl, 3) || new yl)
        }
    }

    function Rs(a, b) {
        b = jp(b, a).filter(Sr([5]));
        b = rp(b, a);
        const c = 1.5 * Z(a).clientHeight;
        a = b.filter(d => d.M.j > c);
        a.sort((d, e) => d.M.j - e.M.j);
        return a[0] || null
    }

    function Ss(a) {
        a = "__" + a;
        const b = Xg();
        return Rj(b, "/pagead/js/" + Nf() + "/r20190131/user_satisfaction/in_page_surveys" + a + ".js", Tf ? "https" : "http")
    };
    class Us {
        j() {
            return new Tl([], {
                ["google_tag_origin"]: "qs"
            })
        }
    };
    class Vs {
        j() {
            return new Tl(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function Ws(a) {
        this.j = a
    }
    Ws.prototype.l = function(a, b, c, d) {
        if (!this.j) return null;
        const e = this.j.google_ad_format || null,
            f = this.j.google_ad_slot || null;
        if (c = c.style) {
            var g = [];
            for (let h = 0; h < c.length; h++) {
                const k = c.item(h);
                "width" !== k && "height" !== k && g.push({
                    tb: k,
                    value: c.getPropertyValue(k)
                })
            }
            c = {
                qa: g
            }
        } else c = {};
        a = Qm(d.document, a, f, e, c, b);
        a.U.setAttribute("data-pub-vars", JSON.stringify(this.j));
        return a
    };
    Ws.prototype.m = function() {
        return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
    };

    function Xs(a) {
        return Gm(a.j.document).map(b => {
            const c = new fp(b, 3);
            b = new Ws(Wm(a.j, b));
            return new ip(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class Ys {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };
    const Zs = {
        Ab: "10px",
        $a: "10px"
    };

    function $s(a) {
        return sm(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new ip(new fp(b, 1), new bp(Zs), a.l, !1, 0, [], null, a.j, null))
    }
    class at {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function bt(a) {
        this.j = a
    }

    function ct(a, b) {
        a = b.v(a.j);
        a.r = .1;
        Y("ama_failure", a, .1)
    };
    var dt = (a, b, c, d, e, f) => {
        try {
            const g = a.j,
                h = ae(a, "SCRIPT");
            h.async = !0;
            Hc(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", () => {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", () => {
                0 < c ? dt(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (g) {
            f()
        }
    };

    function et(a) {
        M(this, a, null, null)
    }
    z(et, D);

    function ft(a, b, c, d) {
        b = Ad(et, b);
        b = new qb(rb, N(b, 4) || "");
        dt(a.j, b, 3, !1, c, () => {
            d(!1)
        })
    }
    class gt {
        constructor(a) {
            this.j = new Od(a)
        }
    };
    var ht = (a, b) => {
        Object.defineProperty(q, a, {
            configurable: !1,
            get: function() {
                return b
            },
            set: la
        })
    };
    var jt = (a, b) => {
            it(a, "internal_api_load_with_sb", (c, d, e) => {
                ft(b, c, d, e)
            });
            it(a, "internal_api_sb", () => {})
        },
        it = (a, b, c) => {
            a = q.btoa(a + b);
            ht(a, c)
        },
        kt = (a, ...b) => {
            a = q.btoa(a + "internal_api_load_with_sb");
            a = q[a];
            if (qa(a)) a.apply(null, b);
            else throw Error("API not exported.");
        };

    function lt() {
        const a = () => {
            if (!q.frames.googlefcPresent)
                if (document.body) {
                    const b = document.createElement("iframe");
                    b.style.display = "none";
                    b.style.width = "0px";
                    b.style.height = "0px";
                    b.style.border = "none";
                    b.style.zIndex = "-1000";
                    b.style.left = "-1000px";
                    b.style.top = "-1000px";
                    b.name = "googlefcPresent";
                    document.body.appendChild(b)
                } else q.setTimeout(a, 5)
        };
        a()
    }

    function mt(a) {
        kt(a.j, a.l.C(), () => {
            {
                var b = a.j;
                const c = q[q.btoa(b + "cached_js")];
                c && (q.atob(c), b = q.btoa(b + "cached_js"), ca(b, null, void 0))
            }
        }, () => {})
    }
    class nt {
        constructor(a) {
            this.m = q.document;
            this.o = new gt(this.m);
            this.j = a;
            var b = ub(new mb(nb, "https://fundingchoicesmessages.google.com/uf/%{externalId}"), {
                externalId: this.j
            });
            a = new et;
            b = tb(b).toString();
            pd(a, 4, b);
            this.l = a
        }
        start() {
            try {
                lt(), jt(this.j, this.o), q.googlefc = q.googlefc || {}, "callbackQueue" in q.googlefc || (q.googlefc.callbackQueue = []), mt(this)
            } catch (a) {}
        }
    };
    var pt = (a, b, c, d, e = null) => {
            ot(a, new bt(a), b, c, d, e, new fm(a))
        },
        ot = (a, b, c, d, e, f = null, g = null) => {
            if (c)
                if (d) {
                    var h = [];
                    O(d, ml, 18) && h.push(2);
                    e.L && h.push(0);
                    O(d, kl, 14) && h.push(1);
                    O(d, zl, 21) && O(O(d, zl, 21), Al, 1) && h.push(3);
                    try {
                        qt(new rt(a, b, c, d, e, h, f, null, g, null))
                    } catch (k) {
                        ct(b, Pp(Rp(Qp(Np(new Sp(0), c), d), h).Y(1), k))
                    }
                } else ct(b, Np(new Sp(0), c).Y(8));
            else ct(b, (new Sp(0)).Y(9))
        };

    function qt(a) {
        a.F.forEach(b => {
            switch (b) {
                case 0:
                    st(a) && tt(a, "p");
                    Nl(a.j) && 1 === N(Nl(a.j), 1) && (b = O(Nl(a.j), Kl, 6)) && 2 === N(b, 1) && Vm(a.l);
                    if (Ol(a.j) && td(Ol(a.j), 12)) {
                        b = a.l;
                        var c = O(a.j, Ml, 20),
                            d = Io(b),
                            e;
                        if (e = d) e = (e = O(d, Ml, 7)) || c ? e && c ? N(e, 1) !== N(c, 1) : !0 : !1;
                        if (e) {
                            yd(d, []);
                            wd(d, 6, void 0);
                            wd(d, 7, c);
                            c = d.C();
                            try {
                                b.localStorage.setItem("google_ama_settings", c)
                            } catch (p) {}
                        }
                    }
                    b = a.m.rd;
                    d = Ol(a.j) ? td(Ol(a.j), 7) : !1;
                    c = Cq(a.l, b);
                    a.m.L && null != N(a.m.L, 10) ? (d = qd(O(a.m.L, Il, 10), 1), null !== d && void 0 !== d && (c = uq(a.l, d, !1, b))) : d &&
                        (d = Ol(a.j) && null != N(Ol(a.j), 9) ? qd(Ol(a.j), 9) : null, null !== d && (c = uq(a.l, d, !0)));
                    d = a.m.L ? N(a.m.L, 6) : [];
                    e = a.m.L ? Q(a.m.L, Vk, 5) : [];
                    var f = a.j;
                    var g = Q(f, wl, 1),
                        h = a.m.L && Pl(a.m.L, 1) ? "text_image" : "text",
                        k = new Us,
                        l = new Vs,
                        m = jp(g, a.l, {
                            Nc: k,
                            cd: new ep(h)
                        });
                    g.length != m.length && a.D.push(13);
                    m = m.concat($s(new at(a.l, k)));
                    g = 0;
                    Nl(f) && 1 === N(Nl(f), 1) && (k = O(Nl(f), Kl, 6)) && (g = N(k, 2) || 0, 1 === N(k, 1) && (l = Xs(new Ys(a.l, l)), m = m.concat(l)));
                    m = m.concat(fq(f, h, a.l));
                    f = new hs(m, {}, a.l, g);
                    h = a.v;
                    m = a.l;
                    d = {
                        ia: c,
                        Wc: a.N,
                        sa: a.m.sa,
                        eb: d,
                        Ha: e
                    };
                    Ol(a.j) ? (e = Ol(a.j), c = {
                        Ca: td(e, 14),
                        Da: td(e, 2),
                        Mb: td(e, 3),
                        oc: td(e, 4),
                        Nb: td(e, 5),
                        hc: td(e, 6),
                        cc: ud(e, 8, 0),
                        ac: N(e, 10),
                        Wa: td(e, 12),
                        Ja: ut(a, c, e),
                        fb: vt(a)
                    }) : c = {
                        Ca: !1,
                        Da: !1,
                        Mb: !1,
                        oc: !1,
                        Nb: !1,
                        hc: !1,
                        cc: 0,
                        ac: 0,
                        Wa: !1,
                        Ja: !1,
                        fb: vt(a)
                    };
                    a.o = new As(f, h, m, d, c);
                    e = a.m.L ? N(a.m.L, 2) : [];
                    b = N(b, 1);
                    c = a.o;
                    d = a.l;
                    e = Cs(b, e, {
                        Ra: c.Ra(),
                        mb: c.mb(),
                        yd: !!c.l.fb
                    });
                    b = new Es(e, b, c, d);
                    a.A = b;
                    b = a.A;
                    c = new Fs;
                    for (b.j.m = !0; 0 < b.l.length;) d = b, (e = Iq[b.l[0]]) ? d = e(d.j) : (d.j.Y(12), d = !0), d || b.j.Y(5), b.l.shift();
                    try {
                        c.resolve(new Js(Ds(b)))
                    } catch (p) {
                        c.reject(p)
                    }
                    b =
                        c.l;
                    b.then(ya(a.V, a), ya(a.H, a));
                    break;
                case 1:
                    if (d = O(a.j, kl, 14))
                        if (b = a.l, c = a.l.location.href, e = new om(Ln(Hn(b)), 5, 200), c = new Co(b, c, d, new pm(b), e), d = N(c.j, 1))
                            for (c.m.P(), b = Un(c), h = 0; h < b.length; ++h)
                                if (e = b[h], f = rn(e)) {
                                    b = c.m;
                                    h = e.v;
                                    e = N(e.m, 3) || "";
                                    c = N(c.j, 3) || null;
                                    m = "afs_container_" + sa(f);
                                    f.id = m;
                                    d = {
                                        pubId: d,
                                        styleId: e,
                                        query: h
                                    };
                                    c && (d.fexp = c);
                                    b.j._googCsa("ads", d, {
                                        container: m
                                    });
                                    break
                                }
                    break;
                case 2:
                    if (b = O(a.j, ml, 18)) c = a.T || new nt(a.v), b = new Jp(a.l, c, b, new Fp(a.l), Q(a.j, wl, 1)), 1 == N(b.o, 1) && (null == b.j && (c = b.m,
                        d = c.j.nextRestrictionId++, c.j.maxZIndexRestrictions[d] = 2147483643, Dp(c), c = d, b.j = c), Gp(b), b.v.start());
                    break;
                case 3:
                    (b = O(a.j, zl, 21)) && (b = O(b, Al, 1)) && (c = O(a.j, nl, 22)) && (c = N(c, 1)) && Qs(new Ts(a.l, a.v, c, b, Q(a.j, wl, 1)))
            }
        })
    }

    function vt(a) {
        const b = hg(48, .5);
        return a.m.L && null != N(a.m.L, 10) && null != N(O(a.m.L, Il, 10), 1) ? qd(O(a.m.L, Il, 10), 1) >= b ? a.I : null : a.I
    }

    function ut(a, b, c) {
        switch (N(c, 17)) {
            case 0:
                return !1;
            case 1:
                return !0;
            case 2:
                return a.m.L && null != N(a.m.L, 10) ? .5 <= (qd(O(a.m.L, Il, 10), 1) || 0) : !0;
            case 3:
                return a = ns(a.l), a = null != a.j.pb ? a.j.pb : null, b = (b.j ? b.j.ja : void 0) || 0, null != a && a <= b;
            default:
                return !1
        }
    }

    function wt(a, b) {
        for (var c = Op(Op(new Sp(b.ra), b.da), a.D), d = b.Ea, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.o.length; g++)
                if (c.o[g] == f) break a;c.o.push(f)
        }
        c.j.eatf = b.Xa;
        c.j.reatf = b.ib;
        c.j.a = a.A.o.slice(0).join(",");
        c = Np(Rp(Qp(c, a.j), a.F), a.v);
        if (d = b.Gb) c.j.as_count = d.yc, c.j.d_count = d.Uc, c.j.ng_count = d.nd, c.j.am_count = d.Bc, c.j.atf_count = d.zc, c.j.mdns = Tp(d.hd), c.j.alldns = Tp(d.Ac);
        d = b.sb;
        null != d && (c.j.allp = d);
        if (d = b.Xc) {
            e = [];
            for (var h of hm(d)) 0 < d.get(h).length && (f = d.get(h)[0], e.push("(" + [h, f.Ic, f.Ed].join() +
                ")"));
            c.j.fd = e.join(",")
        }
        h = b.rb;
        null != h && (c.j.pgh = h);
        void 0 !== b.exception && Pp(c, b.exception).Y(1);
        0 < b.da.length || 0 < a.D.length || void 0 !== b.exception ? ct(a.J, c) : (a = c.v(a.J.j), a.r = .1, Y("ama_success", a, .1))
    }

    function xt(a) {
        return Nl(a.j) && 1 === N(Nl(a.j), 1) ? !(O(Nl(a.j), Kl, 6) && 1 <= (N(O(Nl(a.j), Kl, 6), 3) || 0)) : !1
    }

    function yt(a) {
        if (xt(a)) {
            a = a.o;
            var b = Gn({
                wa: !0,
                xa: !0
            }, a.j);
            a = 0 < us(b, a.j)
        } else a = a.o.j, b = Fn({
            ea: !1,
            va: !1
        }, a), a = 0 < us(b, a);
        return a
    }

    function zt(a) {
        if (st(a)) {
            var b = void 0;
            Ol(a.j) && null != N(Ol(a.j), 19) && (b = N(Ol(a.j), 19));
            a.C.P(b, () => {
                tt(a, "s")
            });
            dm(a.C, c => {
                tt(a, "d", c);
                a.C.Ma()
            })
        }
    }

    function tt(a, b, c) {
        a = {
            r: b,
            pg_h: Z(a.l).scrollHeight,
            su: a.l.location.hostname
        };
        void 0 !== c && (a.pg_hd = c);
        Y("ama_inf_scr", a, 1)
    }

    function st(a) {
        return Ol(a.j) && td(Ol(a.j), 18) ? !0 : !1
    }
    class rt {
        constructor(a, b, c, d, e, f, g, h, k, l) {
            this.l = a;
            this.J = b;
            this.v = c;
            this.j = d;
            this.m = e;
            this.F = f;
            this.N = g || null;
            this.D = [];
            this.T = h;
            this.C = k;
            this.I = l
        }
        V(a) {
            try {
                const r = yt(this) || xt(this) ? yt(this) : void 0;
                if (Ol(this.j) && td(Ol(this.j), 12)) {
                    if (xt(this)) {
                        {
                            var b = this.o;
                            const y = Gn({
                                wa: !0,
                                xa: !0
                            }, b.j);
                            var c = us(y, b.j)
                        }
                    } else {
                        {
                            var d = this.o;
                            const y = Fn({
                                ea: !1,
                                va: !1
                            }, d.j);
                            c = us(y, d.j)
                        }
                    }
                    const B = O(this.j, Nk, 19);
                    if (B) {
                        const y = Cq(this.l, B),
                            t = new Do;
                        var e = Fq(y, 0).za;
                        pd(t, 3, e);
                        pd(t, 1, y.l);
                        Jo({
                            ua: r,
                            Na: c,
                            Ya: t
                        }, this.l)
                    } else Jo({
                        ua: r,
                        Na: c
                    }, this.l)
                } else Jo({
                    ua: r
                }, this.l);
                zt(this); {
                    var f = yt(this); {
                        var g = zs(this.o);
                        const y = a.j,
                            t = y.j;
                        let E = y.ra,
                            K = y.da.slice(),
                            aa = y.Ea.slice(),
                            V = a.exception;
                        if (g) {
                            g.numAutoAdsPlaced ? E += g.numAutoAdsPlaced : this.A.m && aa.push(13);
                            void 0 !== g.exception && (V = g.exception);
                            var h = {
                                ra: E,
                                sb: t,
                                da: y.da.slice(),
                                Ea: aa,
                                exception: V,
                                ib: f,
                                Xa: !!g.eatf
                            }
                        } else aa.push(12), this.A.m && aa.push(13), h = {
                            ra: E,
                            sb: t,
                            da: K,
                            Ea: aa,
                            exception: V,
                            ib: f,
                            Xa: !1
                        }
                    }
                    e = h;
                    e.Gb = ws(this.o.j);
                    const B = a.j.l;
                    B && (e.Xc = B);
                    e.rb = Z(this.l).scrollHeight;
                    var k;
                    if (!(k =
                            Qf))
                        if (null != Tj) k = Tj;
                        else {
                            Tj = !1;
                            try {
                                const y = Yg(q);
                                if (y && -1 != y.location.hash.indexOf("auto_ads_logging") || q.localStorage.getItem("auto_ads_logging")) Tj = !0
                            } catch (y) {}
                            k = Tj
                        }
                    if (k) {
                        var l = this.o.v.l.j.slice(0);
                        a = [];
                        for (const y of l) {
                            l = {};
                            const t = y.C;
                            for (const K of hm(t)) l[K] = t.get(K);
                            const E = {
                                anchorElement: y.v.j(y.j),
                                position: y.l(),
                                clearBoth: y.A,
                                locationType: y.Sa,
                                placed: y.m,
                                placementProto: y.H ? xd(y.H) : null,
                                rejectionReasons: l
                            };
                            a.push(E)
                        }
                        var m = {
                            placementIdentifiers: a
                        };
                        Vj(14, [m, this.o.D])
                    }
                    var p = e
                }
                wt(this, p)
            } catch (r) {
                this.H(r)
            }
        }
        H(a) {
            wt(this, {
                ra: 0,
                sb: void 0,
                da: [],
                Ea: [],
                exception: a,
                ib: void 0,
                Xa: void 0,
                Gb: void 0
            })
        }
    };
    var At = a => 5 == a.google_pgb_reactive && !!a.google_reactive_ads_config,
        Bt = a => "number" === typeof a.google_reactive_sra_index,
        Gt = (a, b) => {
            const c = b.j,
                d = b.B;
            var e = null;
            try {
                e = c.localStorage
            } catch (k) {}
            d.google_reactive_plat = jr(c, d, e);
            (e = kr(a)) && (d.google_reactive_plaf = e);
            (e = lr(a)) && (d.google_reactive_fba = e);
            Ct(a, d);
            e = er(c.location);
            Dt(a, e, d);
            e ? (d.fra = e, d.google_pgb_reactive = 6) : d.google_pgb_reactive = 5;
            const f = qg() || Jj(Tg(b.pubWin));
            e = W(429, (k, l) => Et(c, d.google_ad_client, a, f, k, l));
            const g = Cj(c),
                h = W(430, za(Dk,
                    c, 431, qi));
            Di(c, "rsrai", e, h);
            g.wasReactiveTagRequestSent = !0;
            Ft(b, a)
        };
    const Ft = (a, b) => {
        const c = a.j,
            d = a.B,
            e = ra(b.page_level_pubvars) ? b.page_level_pubvars : {};
        a = W(353, (f, g) => {
            var h = d.google_ad_client;
            if (zf(g.origin, Qf)) a: {
                f = f.config;
                if (T.G().j(316, !1)) var k = null;
                else try {
                    k = c.localStorage.getItem("google_ama_config")
                } catch (r) {
                    k = null
                }
                try {
                    var l = k ? Ad(Cl, k) : null
                } catch (r) {
                    l = null
                }
                k = l;b: {
                    if (f) try {
                        var m = Ad(Cl, f);
                        break b
                    } catch (r) {
                        Wl(c, {
                            cfg: 1,
                            inv: 1
                        })
                    }
                    m = null
                }
                if (m) {
                    l = m;
                    k = new El;
                    wd(l, 3, k);
                    f = Ol(l) && N(Ol(l), 13) ? N(Ol(l), 13) : 1;
                    pd(k, 1, Date.now() + 864E5 * f);
                    k = new l.constructor(Bd(xd(l)));
                    Ol(l) &&
                        (f = new Ll, g = td(Ol(l), 12), f = pd(f, 12, g), l = td(Ol(l), 15), l = pd(f, 15, l), wd(k, 15, l));
                    l = Q(k, wl, 1);
                    for (f = 0; f < l.length; f++) pd(l[f], 11, []);
                    wd(k, 22, void 0);
                    if (T.G().j(316, !1)) Yl(c);
                    else try {
                        c.localStorage.setItem("google_ama_config", k.C())
                    } catch (r) {
                        Wl(c, {
                            lserr: 1
                        })
                    }
                    l = m;
                    k = Rl(c, Q(l, Fl, 7));
                    b: {
                        if (k && (f = N(k, 3), g = O(l, Qk, 9), f && g)) {
                            c: {
                                g = Q(g, Pk, 1);
                                for (p of g)
                                    if (N(p, 1) == f) {
                                        var p = O(p, Nk, 2) || null;
                                        break c
                                    }
                                p = null
                            }
                            if (p) break b
                        }
                        p = O(l, Nk, 8) || new Nk
                    }
                    p = {
                        rd: p
                    };
                    k && (p.L = k);
                    k && Pl(k, 3) && (p.sa = [1]);
                    if (7 == e.google_pgb_reactive && (k = p.L, !k || !rd(k, 8))) {
                        h = !1;
                        break a
                    }
                    bh(c, 2) && (Vj(5, [xd(m)]), l = Xl(e), k = (k = p.L) && N(k, 4) || "", l.google_package = k, k = new Tl(["google-auto-placed"], l), pt(c, h, m, p, k));
                    h = !0
                } else k && (Wl(c, {
                    cfg: 1,
                    cl: 1
                }), Yl(c)),
                h = !1
            }
            else h = !1;
            return h
        });
        b = W(353, za(Dk, c, 353, qi));
        Di(c, "apcnf", a, b)
    };
    var Et = (a, b, c, d, e, f) => {
            if (!zf(f.origin, Qf)) return !1;
            e = e.data;
            if (!e || !pa(e)) return !1;
            if (!bh(a, 1)) return !0;
            Vj(6, [e]);
            const g = [];
            f = [];
            const h = Cj(a);
            for (let k = 0; k < e.length; k++) {
                if (!e[k]) continue;
                const l = e[k],
                    m = l.adFormat;
                h && l.enabledInAsfe && (h.reactiveTypeEnabledInAsfe[m] = !0);
                l.noCreative || (l.google_reactive_sra_index = k, g.push(l), f.push(m))
            }
            Y("rasra::pm", {
                rt: f.join(","),
                c: b
            }, .1);
            or(522, k => {
                Ht(g, a, b, k, c, d)
            });
            return !0
        },
        Ht = (a, b, c, d, e, f) => {
            const g = [];
            for (let l = 0; l < a.length; l++) {
                const m = a[l],
                    p = m.adFormat;
                var h = m.adKey,
                    k = m.piggyback;
                const r = d.configProcessorForAdFormat(p);
                if (p && r && (k || h)) {
                    if (k) h = rr(p, e, m.pubVars), h.google_pgb_reactive = h.google_pgb_reactive || 5, m.pubVars = h;
                    else {
                        delete m.adKey;
                        k = {};
                        T.G().j(289, !1) && (k.google_reactive_viewport_size = f);
                        const B = e.page_level_pubvars;
                        ra(B) && ib(k, B);
                        k.google_ad_unit_key = h;
                        k.google_reactive_sra_index = m.google_reactive_sra_index;
                        30 === p && (k.google_reactive_ad_format = 30);
                        k.google_pgb_reactive = k.google_pgb_reactive || 5;
                        m.pubVars = k
                    }
                    delete m.google_reactive_sra_index;
                    g.push(p);
                    yi(466, () => r.verifyAndProcessConfig(b, m))
                } else Y("rasra::ivc", {
                    af: p,
                    ak: h,
                    c
                }, .1)
            }
            Y("rasra::pr", {
                rt: g.join(","),
                c
            }, .1)
        },
        Ct = (a, b) => {
            const c = [];
            let d = !1;
            U(Aj, (e, f) => {
                let g;
                if (a.hasOwnProperty(f)) {
                    const h = a[f];
                    ra(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
                }
                f = Aj[f] - 1;
                c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+", d = d || g)
            });
            d && (b.google_reactive_sra_channels = c.join(","))
        },
        Dt = (a, b, c) => {
            const d = a.page_level_pubvars;
            !c.google_adtest && ("on" == a.google_adtest || d && "on" == d.google_adtest ||
                b) && (c.google_adtest = "on")
        };
    Rc("script");
    /* 
     
     Copyright 2019 The AMP HTML Authors. All Rights Reserved. 
     
     Licensed under the Apache License, Version 2.0 (the "License"); 
     you may not use this file except in compliance with the License. 
     You may obtain a copy of the License at 
     
          http://www.apache.org/licenses/LICENSE-2.0 
     
     Unless required by applicable law or agreed to in writing, software 
     distributed under the License is distributed on an "AS-IS" BASIS, 
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
     See the License for the specific language governing permissions and 
     limitations under the License. 
    */
    var It = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };
    var Jt = "google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_layout google_ad_layout_key google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_semantic_area google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_apsail google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ad_positions google_content_recommendation_columns_num google_content_recommendation_rows_num google_content_recommendation_ui_type google_content_recommendation_use_square_imgs google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_bfa ebfa ebfaca google_eids google_enable_content_recommendations google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_full_width_responsive_allowed efwr google_full_width_responsive gfwroh gfwrow gfwroml gfwromr gfwroz gfwrnh gfwrnwer gfwrnher google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_max_responsive_height google_ml_rank google_mtl google_native_ad_template google_native_settings_key google_num_radlinks google_num_radlinks_per_unit google_only_pyv_ads google_override_format google_page_url google_pgb_reactive google_pucrd google_referrer_url google_region google_resizing_allowed google_resizing_height google_resizing_width rpe google_responsive_formats google_responsive_auto_format armr google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_tag_origin google_tag_partner google_targeting google_tfs google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_yt_pt google_yt_up google_package google_debug_params google_enable_single_iframe dash google_refresh_count google_restrict_data_processing".split(" "),
        Kt = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1]) ? a[1] : null,
        Lt = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1])) return a[1];
            return null
        },
        Ot = a => {
            try {
                a: {
                    var b = a.document.getElementsByTagName("script"),
                        c = a.navigator && a.navigator.userAgent ||
                        "";
                    const f = /appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(c) || /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !Ug() ? Kt : Lt;
                    for (let g = b.length - 1; 0 <= g; g--) {
                        const h = b[g];
                        if (!h.google_parsed_script) {
                            h.google_parsed_script = !0;
                            const k = f(h);
                            if (k) {
                                var d = k;
                                break a
                            }
                        }
                    }
                    d = null
                }
            }
            catch (f) {
                return !1
            }
            if (!d) return !1;
            try {
                {
                    c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                    b = {};
                    let f;
                    for (; f = c.exec(d);) b[f[1]] = Mt(f[2]);
                    var e = b
                }
                Nt(e, a)
            } catch (f) {
                return !1
            }
            return !!a.google_ad_client
        },
        Pt = a => {
            const b = {};
            null == a.google_ad_client && Ot(a) && (b.google_loader_features_used = 2048);
            Nt(a, b);
            return b
        },
        Mt = a => {
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    break;
                default:
                    try {
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        },
        Nt = (a, b) => {
            for (let c =
                    0; c < Jt.length; c++) {
                const d = Jt[c];
                null == b[d] && null != a[d] && (b[d] = a[d])
            }
        };

    function Qt(a) {
        a = Cj(a);
        a.stateForType[16] || (a.stateForType[16] = []);
        return a.stateForType[16]
    }

    function Rt(a, b, c) {
        const d = St(a, b);
        b.google_full_width_responsive_allowed && (a.style.marginLeft = b.gfwroml || "", a.style.marginRight = b.gfwromr || "", a.style.height = b.gfwroh ? b.gfwroh + "px" : "", a.style.width = b.gfwrow ? b.gfwrow + "px" : "", a.style.zIndex = b.gfwroz || "", delete b.google_full_width_responsive_allowed);
        delete b.google_ad_format;
        delete b.google_ad_width;
        delete b.google_ad_height;
        delete b.google_content_recommendation_ui_type;
        delete b.google_content_recommendation_rows_num;
        delete b.google_content_recommendation_columns_num;
        u().google_spfd(a, b, c);
        const e = St(a, b);
        !e && d && 1 == a.childNodes.length ? (Tt(d, !1), b.google_reactive_ad_format = 16, b.google_ad_section = "responsive_resize", qr(a, b, c)) : e && d ? e != d && (Tt(d, !1), Tt(e, !0)) : Y("auto_size_refresh", {
            context: "showOrHideElm",
            url: c.location.href,
            nodes: a.childNodes.length
        })
    }

    function Ut(a, b, c) {
        if (!Am(c, b)) return () => {};
        const d = Vt(c, b);
        if (!d) return () => {};
        const e = Qt(b);
        a = a == c ? Pt(a) : gb(c);
        const f = {
            ub: d,
            B: a,
            offsetWidth: d.offsetWidth
        };
        e.push(f);
        return () => Na(e, f)
    }

    function Vt(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !Rg.test(a.className);) a = a.parentElement;
        return a
    }

    function St(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                k = a.childNodes[g];
            var c = k.style,
                d = h,
                e = ["width", "height"];
            for (let l = 0; l < e.length; l++) {
                const m = "google_ad_" + e[l];
                if (!d.hasOwnProperty(m)) {
                    var f = Ye(c[e[l]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return k
        }
        return null
    }

    function Tt(a, b) {
        a.style.display = b ? "inline-block" : "none"
    }
    class Wt {
        constructor() {
            this.j = null
        }
        P(a) {
            const b = Cj(a);
            b.wasReactiveAdConfigReceived[16] || (b.wasReactiveAdConfigReceived[16] = !0, this.j = a.innerHeight >= a.innerWidth ? 0 : 90, R(a, "resize", () => {
                var c = a.innerHeight >= a.innerWidth ? 0 : 90;
                if (this.j != c) {
                    this.j = c;
                    c = Qt(a);
                    for (let d = 0; d < c.length; d++)
                        if (c[d].ub.offsetWidth != c[d].offsetWidth || c[d].B.google_full_width_responsive_allowed) c[d].offsetWidth = c[d].ub.offsetWidth, yi(467, za(Rt, c[d].ub, c[d].B, a))
                }
            }))
        }
    }
    na(Wt);
    const Xt = {
        ["client"]: "google_ad_client",
        ["format"]: "google_ad_format",
        ["slotname"]: "google_ad_slot",
        ["ad_type"]: "google_ad_type"
    };
    var Yt = a => {
            Oe(Xt, (b, c) => {
                try {
                    null != q[b] && (a[c] = q[b])
                } catch (d) {}
            })
        },
        Zt = a => {
            a.shv = Nf()
        };
    ri.o = !Qf;
    var $t = class {
        constructor(a, b, c) {
            this.o = a;
            this.m = b;
            this.j = c;
            this.l = null;
            this.v = this.A = 0
        }
        C() {
            10 <= ++this.A && q.clearInterval(this.l);
            var a = Dm(this.o, this.m),
                b = Em(this.o, this.m, a);
            a = zm(this.m, this.o);
            null != a && 0 === a.x || q.clearInterval(this.l);
            b && (b = (ah(this.j).eids || []).join(","), this.v++, Y("rspv:al", {
                aligns: this.v,
                attempt: this.A,
                client: this.j.google_ad_client,
                eoffs: null != a ? a.x : null,
                eids: b,
                slot: this.j.google_ad_slot,
                url: this.j.google_page_url
            }, .01))
        }
    };

    function au(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function bu(a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && au(a) && Gg(a.nq) && Gg(a.nqa) && Gg(a.al) && Gg(a.rl)
    }

    function cu(a) {
        const b = W(189, ya(a.N, a));
        a.l.setTimeout(b, 0)
    }
    class du {
        constructor(a) {
            this.o = [];
            this.l = a || window;
            this.j = 0;
            this.m = null;
            this.D = 0
        }
        F(a, b) {
            0 != this.j || 0 != this.o.length || b && b != window ? this.v(a, b) : (this.j = 2, this.C(new eu(a, window)))
        }
        v(a, b) {
            this.o.push(new eu(a, b || this.l));
            cu(this)
        }
        I(a) {
            this.j = 1;
            if (a) {
                const b = W(188, ya(this.A, this, !0));
                this.m = this.l.setTimeout(b, a)
            }
        }
        A(a) {
            a && ++this.D;
            1 == this.j && (null != this.m && (this.l.clearTimeout(this.m), this.m = null), this.j = 0);
            cu(this)
        }
        J() {
            return !(!window || !Array)
        }
        H() {
            return this.D
        }
        N() {
            if (0 == this.j && this.o.length) {
                const a =
                    this.o.shift();
                this.j = 2;
                const b = W(190, ya(this.C, this, a));
                a.win.setTimeout(b, 0);
                cu(this)
            }
        }
        C(a) {
            this.j = 0;
            a.j()
        }
    }
    var fu;
    du.prototype.nq = du.prototype.F;
    du.prototype.nqa = du.prototype.v;
    du.prototype.al = du.prototype.I;
    du.prototype.rl = du.prototype.A;
    du.prototype.sz = du.prototype.J;
    du.prototype.tc = du.prototype.H;
    var eu = class {
        constructor(a, b) {
            this.j = a;
            this.win = b
        }
    };
    class gu extends Zf {
        constructor(a, b, c, d = !1) {
            super();
            this.j = a;
            this.Fa = b;
            this.wc = c;
            this.vc = d;
            this.Ga = {};
            this.Cb = oi(this.Fa, 168, (e, f) => {
                a: {
                    try {
                        if (!zf(f.origin, this.vc)) break a
                    } catch (k) {
                        break a
                    }
                    const g = e.msg_type;
                    let h;
                    "string" === typeof g && (h = this.Ga[g]) && h.call(this, e, f)
                }
            });
            this.Eb = oi(this.Fa, 169, (e, f) => Dk(this.j, "ras::xsf", this.wc, e, f));
            this.V = [];
            this.N(this.Ga);
            this.V.push(Ci(this.j, "sth", this.Cb, this.Eb))
        }
        l() {
            for (const a of this.V) a();
            this.V.length = 0;
            super.l()
        }
    };
    class hu extends gu {
        constructor(a) {
            super(a, ri, qi, Qf);
            this.j = a
        }
    };

    function iu(a) {
        try {
            const b = a.localStorage.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : bb(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && pa(d))
        } catch (b) {
            return {}
        }
    }
    class ju extends hu {
        constructor(a, b) {
            super(a);
            this.m = b;
            this.o = () => {};
            R(this.m, "load", this.o)
        }
        l() {
            this.m && ee(this.m, "load", this.o);
            super.l();
            this.m = null
        }
        N(a) {
            a["adsense-labs"] = this.v
        }
        v(a) {
            if (a = Ck(a).settings) try {
                var b = new le(JSON.parse(a));
                if (null != N(b, 1)) {
                    {
                        var c = this.j,
                            d = N(b, 1) || "";
                        const e = iu(c);
                        null !== b && (e[d] = xd(b));
                        try {
                            c.localStorage.setItem("google_adsense_settings", JSON.stringify(e))
                        } catch (f) {}
                    }
                }
            } catch (e) {}
        }
    };
    let ku = (new Date).getTime();
    var mu = a => {
            const b = {};
            b.dtd = lu((new Date).getTime(), ku);
            return Jg(b, a)
        },
        lu = (a, b, c = 1E5) => {
            a -= b;
            return a >= c ? "M" : 0 <= a ? a : "-M"
        };
    class nu {
        constructor(a) {
            this.j = a;
            a.google_iframe_oncopy || (a.google_iframe_oncopy = {
                handlers: {},
                upd: (b, c) => {
                    {
                        var d = b,
                            e = /\brx=(\d+)/;
                        const f = e.exec(d);
                        f && (d = d.replace(e, "rx=" + (+f[1] + 1 || 1)))
                    }
                    e = Number;
                    a: {
                        if (b && (b = b.match("dt=([^&]+)")) && 2 == b.length) {
                            b = b[1];
                            break a
                        }
                        b = ""
                    }
                    b = e(b);
                    d = d.replace(/&dtd=(\d+|-?M)/, "&dtd=" + lu((new Date).getTime(), b));
                    this.set(c, d);
                    return c = d
                }
            });
            this.l = a.google_iframe_oncopy
        }
        set(a, b) {
            this.l.handlers[a] = b;
            this.j.addEventListener && this.j.addEventListener("load", () => {
                {
                    const c = this.j.document.getElementById(a);
                    try {
                        const d = c.contentWindow.document;
                        if (c.onload && d && (!d.body || !d.body.firstChild)) c.onload()
                    } catch (d) {}
                }
            }, !1)
        }
    }
    Ic("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");

    function ou(a) {
        switch (a) {
            case "":
            case "Test":
            case "Real":
                return !0;
            default:
                return !1
        }
    }
    var pu = class {
        constructor(a, b = !1) {
            this.m = a;
            this.l = b;
            this.j = new te(a.document)
        }
        write(a) {
            let b = a.J();
            if (this.l) {
                if (!ou(this.j.get("__gads", ""))) return;
                ou(b) || (b = "Real")
            }
            this.j.set("__gads", b, {
                jd: a.F() - this.m.Date.now() / 1E3,
                path: a.H(),
                domain: a.l(),
                zd: !1
            })
        }
    };
    const qu = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        ru = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;
    let su = () => q,
        tu = q;
    const vu = a => {
        a = "https://" + `adservice${a}/adsid/integrator.${"js"}`;
        const b = [`domain=${encodeURIComponent(q.location.hostname)}`];
        uu[3] >= +new Date && b.push(`adsid=${encodeURIComponent(uu[1])}`);
        return a + "?" + b.join("&")
    };
    let uu, wu;
    const xu = () => {
            tu = su();
            uu = tu.googleToken = tu.googleToken || {};
            var a = +new Date;
            uu[1] && uu[3] > a && 0 < uu[2] || (uu[1] = "", uu[2] = -1, uu[3] = -1, uu[4] = "", uu[6] = "");
            wu = tu.googleIMState = tu.googleIMState || {};
            a = wu[1];
            qu.test(a) && !ru.test(a) || (wu[1] = ".google.com");
            Array.isArray(wu[5]) || (wu[5] = []);
            "boolean" !== typeof wu[6] && (wu[6] = !1);
            Array.isArray(wu[7]) || (wu[7] = []);
            "number" !== typeof wu[8] && (wu[8] = 0)
        },
        yu = {
            hb: () => 0 < wu[8],
            td: () => {
                wu[8]++
            },
            ud: () => {
                0 < wu[8] && wu[8]--
            },
            vd: () => {
                wu[8] = 0
            },
            yh: () => !1,
            Qb: () => wu[5],
            Ib: a => {
                try {
                    a()
                } catch (b) {
                    q.setTimeout(() => {
                        throw b;
                    }, 0)
                }
            },
            dc: () => {
                if (!yu.hb()) {
                    var a = q.document,
                        b = e => {
                            e = vu(e);
                            a: {
                                try {
                                    var f = ea();
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            Zq(a, e, f);
                            f = a.createElement("script");
                            f.type = "text/javascript";
                            f.onerror = () => q.processGoogleToken({}, 2);
                            e = ye(e);
                            Hc(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), yu.td()
                            } catch (g) {}
                        },
                        c = wu[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    var d = {
                        ["newToken"]: "FBT"
                    };
                    q.setTimeout(() => q.processGoogleToken(d, 1), 1E3)
                }
            }
        },
        zu = a => {
            xu();
            const b = tu.googleToken[5] || 0;
            a && (0 != b || uu[3] >= +new Date ?
                yu.Ib(a) : (yu.Qb().push(a), yu.dc()));
            uu[3] >= +new Date && uu[2] >= +new Date || yu.dc()
        },
        Bu = a => {
            q.processGoogleToken = q.processGoogleToken || ((b, c) => Au(b, c));
            zu(a)
        },
        Au = (a = {}, b = 0) => {
            var c = a.newToken || "",
                d = "NT" == c,
                e = parseInt(a.freshLifetimeSecs || "", 10),
                f = parseInt(a.validLifetimeSecs || "", 10);
            const g = a["1p_jar"] || "";
            a = a.pucrd || "";
            xu();
            1 == b ? yu.vd() : yu.ud();
            var h = tu.googleToken = tu.googleToken || {},
                k = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
            d = d && !yu.hb() &&
                (!(uu[3] >= +new Date) || "NT" == uu[1]);
            var l = !(uu[3] >= +new Date) && 0 != b;
            if (k || d || l) d = +new Date, e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && tg("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" + `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, xu();
            if (k || !yu.hb()) {
                b = yu.Qb();
                for (c = 0; c < b.length; c++) yu.Ib(b[c]);
                b.length = 0
            }
        };
    Rc("script");
    var Cu = W(215, a => {
            const b = a.google_sa_queue,
                c = b.shift();
            a.google_sa_impl || Y("shimpl", {
                t: "no_fn"
            });
            qa(c) && yi(216, c);
            b.length && a.setTimeout(() => Cu(a), 0)
        }),
        Du = a => {
            const b = Td(document, "IFRAME");
            U(a, (c, d) => {
                null != c && b.setAttribute(d, c)
            });
            return b
        },
        Eu = a => {
            const b = ["<iframe"];
            U(a, (c, d) => {
                null != c && b.push(" " + d + '="' + Ic(c) + '"')
            });
            b.push("></iframe>");
            return b.join("")
        },
        Fu = a => Qj(Xf(), ["/pagead/html/", Nf(), "/r20190131/zrt_lookup.html#", encodeURIComponent(a)].join("")),
        Gu = (a, b, c, d) => {
            null != b && (a.width = b && "" + b);
            null != c && (a.height = c && "" + c);
            a.frameborder = "0";
            d && (a.src = d);
            a.marginwidth = "0";
            a.marginheight = "0";
            a.vspace = "0";
            a.hspace = "0";
            a.allowtransparency = "true";
            a.scrolling = "no";
            a.allowfullscreen = "true"
        };
    var Hu = (a, b) => Di(a, "adpnt", (c, d) => {
        zk(d, b.contentWindow) ? (b.dataset.googleQueryId || (c = Ck(c).qid, b.setAttribute("data-google-query-id", c)), c = !0) : c = !1;
        return c
    });

    function Iu(a, b) {
        const c = a.pubWin.document.getElementById(a.B.google_async_iframe_id + "_expand");
        return c ? new Ju(a, b, c) : null
    }

    function Ku(a) {
        a.m = a.A;
        a.F.style.transition = "height 500ms";
        a.o.style.transition = "height 500ms";
        a.C.style.transition = "height 500ms";
        a.D.style.transition = "height 500ms";
        Lu(a)
    }

    function Mu(a, b) {
        (a.v.contentWindow || a.v.contentWindow).postMessage(JSON.stringify({
            ["msg_type"]: "expand-on-scroll-result",
            ["eos_success"]: !0,
            ["eos_amount"]: b,
            googMsgType: "sth"
        }), "*")
    }

    function Lu(a) {
        const b = `rect(0px, ${a.v.width}px, ${a.m}px, 0px)`;
        a.D.style.clip = b;
        a.C.style.clip = b;
        a.D && (a.D.setAttribute("height", a.m), a.D.style.height = a.m + "px");
        a.C.setAttribute("height", a.m);
        a.C.style.height = a.m + "px";
        a.o.style.height = a.m + "px";
        a.F.style.height = a.m + "px"
    }

    function Nu(a, b) {
        b = We(b.r_nh);
        a.A = null == b ? 0 : b;
        if (0 >= a.A) return "1";
        a.J = Bg(a.F).y;
        a.H = Ak(a.j);
        if (a.J + a.m < a.H) return "2";
        if (a.J > wk(a.j) - a.j.innerHeight) return "3";
        b = a.H;
        a.v.setAttribute("height", a.A);
        a.v.style.height = a.A + "px";
        a.C.style.overflow = "hidden";
        a.F.style.position = "relative";
        a.F.style.transition = "height 100ms";
        a.o.style.transition = "height 100ms";
        a.C.style.transition = "height 100ms";
        a.D.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.J, a.m);
        vg(a.o, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.v.width}px, ${b}px, 0px)`;
        vg(a.D, {
            clip: b
        });
        vg(a.C, {
            clip: b
        });
        return "0"
    }

    function Ou(a, b = {}) {
        a.W && (b.eid = a.W);
        b.qid = a.aa;
        Y("eoscrl", b, Kf(String(a.ba), .05))
    }
    class Ju extends hu {
        constructor(a, b, c) {
            super(a.j);
            this.v = b;
            this.D = (b = a.iframeWin && Og(a.B) ? a.iframeWin.frameElement : b) ? b : a.o;
            this.C = c.firstElementChild;
            this.o = c;
            this.F = this.o.parentElement && "adsbygoogle" === this.o.parentElement.className ? this.o.parentElement : this.o;
            this.m = parseInt(this.o.style.height, 10);
            this.W = null;
            this.Db = this.ha = !1;
            this.aa = "";
            this.X = this.H = this.A = 0;
            this.Mc = this.m / 5;
            this.J = Bg(this.F).y;
            this.ba = null;
            this.uc = ab(W(651, () => {
                this.J = Bg(this.F).y;
                var d = this.H;
                this.H = Ak(this.j);
                this.m < this.A ?
                    (d = this.H - d, 0 < d && (this.X += d, this.X >= this.Mc ? (Ku(this), Mu(this, this.A)) : (this.m = Math.min(this.A, this.m + d), Mu(this, d), Lu(this)))) : ee(this.j, "scroll", this.I)
            }), this);
            this.I = () => {
                var d = this.uc;
                S.requestAnimationFrame ? S.requestAnimationFrame(d) : d()
            }
        }
        N(a) {
            a["expand-on-scroll"] = this.pc;
            a["expand-on-scroll-force-expand"] = this.Qc
        }
        pc(a, b) {
            $g(b, this.v) && (a = Ck(a), this.W = a.i_expid, this.aa = a.qid, this.ba = a.gen204_fraction, this.ha || (this.ha = !0, a = Nu(this, a), "0" === a && R(this.j, "scroll", this.I, be), b.source.postMessage(JSON.stringify({
                ["msg_type"]: "expand-on-scroll-result",
                ["eos_success"]: "0" === a,
                googMsgType: "sth"
            }), "*"), Ou(this, {
                err: a
            })))
        }
        Qc(a, b) {
            $g(b, this.v) && !this.Db && (this.Db = !0, Ku(this), ee(this.j, "scroll", this.I))
        }
        l() {
            this.I && ee(this.j, "scroll", this.I, be);
            super.l()
        }
    };

    function Pu(a) {
        const b = a.o.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.m.innerHeight) && !c
    }
    class Qu extends Zf {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.A = b;
            this.o = c;
            this.C = 0;
            this.o && (this.v = Pu(this), this.F = $a(this.D, this), this.j = W(433, () => {
                var d = this.F;
                S.requestAnimationFrame ? S.requestAnimationFrame(d) : d()
            }), R(this.m, "scroll", this.j, be))
        }
        D() {
            const a = Pu(this);
            if (a && !this.v) {
                {
                    var b = {
                        rr: "vis-bcr"
                    };
                    const c = this.A.contentWindow;
                    c && (Ii(c, "ig", b, "*", 2), 10 <= ++this.C && this.j && ee(this.m, "scroll", this.j, be))
                }
            }
            this.v = a
        }
    };
    const Ru = {
        display: "block",
        left: "auto",
        position: "fixed",
        bottom: "0px"
    };

    function Su(a, b) {
        const c = a.pubWin.document.getElementById(a.B.google_async_iframe_id + "_anchor");
        return c ? new Tu(a, b, c) : null
    }

    function Uu(a, b) {
        if (!a.ba) return "1";
        b = We(b.r_nh);
        a.o = null == b ? 0 : b;
        if (0 >= a.o) return "2";
        a.v = Bg(a.A).y;
        b = a.j.innerHeight;
        if (a.v + a.X < b) return "4";
        if (a.v > wk(a.j) - b) return "3";
        a.A && (a.A.setAttribute("height", a.o), a.A.style.height = a.o + "px");
        a.C.setAttribute("height", a.o);
        a.C.style.height = a.o + "px";
        vg(a.m, Ru);
        a.m.style.height = a.o + "px";
        a.D.style.position = "relative";
        a.aa();
        return "0"
    }

    function Vu(a, b = {}) {
        a.H && (b.eid = a.H);
        b.qid = a.I;
        Y("pscrl", b, Kf(String(a.J), .05))
    }
    class Tu extends hu {
        constructor(a, b, c) {
            a.j && super(a.j);
            this.C = b;
            this.A = (this.F = a.iframeWin && Og(a.B) ? a.iframeWin.frameElement : b) ? this.F : a.o;
            this.m = c;
            this.D = this.m.parentElement;
            this.X = parseInt(this.m.style.height, 10);
            this.H = null;
            this.W = !1;
            this.I = "";
            this.o = 0;
            this.v = Bg(this.A).y;
            this.J = null;
            this.ba = q.requestAnimationFrame || q.webkitRequestAnimationFrame || q.mozRequestAnimationFrame || q.oRequestAnimationFrame || q.msRequestAnimationFrame;
            this.aa = W(636, () => {
                this.ba.call(this.j, this.aa);
                var d = this.j.innerHeight,
                    e = Ak(this.j);
                this.v = Bg(this.D).y;
                e + d > this.v ? (e = e + d - this.v, d = Math.min(e, this.X), e = this.o - e, e = Math.max(0, e), 0 >= e ? vg(this.m, {
                    position: "absolute",
                    top: "0px",
                    bottom: "auto"
                }) : vg(this.m, {
                    position: "fixed",
                    top: "auto",
                    bottom: "0px"
                }), vg(this.m, {
                    clip: "rect(" + e + "px, " + this.C.width + "px, " + (e + d) + "px, 0px)"
                })) : vg(this.m, {
                    clip: "rect(3000px, " + this.C.width + "px, 0px, 0px)"
                })
            })
        }
        N(a) {
            a["parallax-scroll"] = this.ha
        }
        ha(a, b) {
            a = Ck(a);
            this.H = a.i_expid;
            this.I = a.qid;
            this.J = a.gen204_fraction;
            !this.W && $g(b, this.C) && (this.W = !0, a =
                Uu(this, a), b.source.postMessage(JSON.stringify({
                    ["msg_type"]: "parallax-scroll-result",
                    ["ps_success"]: "0" === a,
                    googMsgType: "sth"
                }), "*"), Vu(this, {
                    err: a
                }))
        }
        l() {
            this.D = this.m = this.A = this.F = null;
            super.l()
        }
    };

    function Wu(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = Qd(a.j.K() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = Xu(a, b, c, a.j.j.elementsFromPoint(Ed(c.left + c.width / 2, c.left, c.right - 1), Ed(c.bottom - 1 - a.l, c.top, c.bottom - 1)), 1, []),
            f = Xu(a, b, c, a.j.j.elementsFromPoint(Ed(c.left + c.width / 2, c.left, c.right - 1), Ed(c.top + a.l, c.top, c.bottom - 1)), 2, e.ca),
            g = Xu(a, b, c, a.j.j.elementsFromPoint(Ed(c.left + a.l, c.left, c.right - 1), Ed(c.top + c.height /
                2, c.top, c.bottom - 1)), 3, [...e.ca, ...f.ca]);
        const h = Xu(a, b, c, a.j.j.elementsFromPoint(Ed(c.right - 1 - a.l, c.left, c.right - 1), Ed(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.ca, ...f.ca, ...g.ca]);
        var k = Yu(a, b, c),
            l = p => Ma(a.o, p.overlapType) && Ma(a.v, p.overlapDepth) && Ma(a.m, p.overlapDetectionPoint);
        e = Ha([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = Ha(k, l);
        k = [...e, ...l];
        f = c.left < -a.l || c.right > d.width + a.l;
        f = 0 < k.length || f;
        g = Rd(a.j.j);
        const m = new kg(c.left, c.top, c.width, c.height);
        e = [...Ia(e, p => new kg(p.elementRect.left,
            p.elementRect.top, p.elementRect.width, p.elementRect.height)), ...Sa(Ia(l, p => mg(m, p.elementRect))), ...Ha(mg(m, new kg(0, 0, d.width, d.height)), p => 0 <= p.top && p.top + p.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? Zu(m, e) : $u(c, e)
        }
    }

    function av(a, b) {
        const c = a.j.K(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new ki(1),
                                        m = ji(l, () => Wu(a, k));
                                    m && (l.l.length && (m.executionTime = Math.round(Number(l.l[0].duration))), h.disconnect(), e(m))
                                }, bv);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function Xu(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            ca: []
        };
        const g = [],
            h = [];
        for (let p = 0; p < d.length; p++) {
            const r = d[p];
            if (r === b) continue;
            if (Ma(f, r)) continue;
            h.push(r);
            const B = r.getBoundingClientRect();
            if (a.j.contains(r, b)) {
                g.push(cv(a, c, r, B, 1, e));
                continue
            }
            if (a.j.contains(b, r)) {
                g.push(cv(a, c, r, B, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b,
                    m = r;
                const E = k.j.l(l, m);
                if (!E) {
                    k = null;
                    break a
                }
                const {
                    suspectAncestor: K,
                    ka: aa
                } = dv(k, l, E, m) || {},
                {
                    suspectAncestor: V,
                    ka: da
                } = dv(k, m, E, l) || {};k = K && aa && V && da ? aa <=
                da ? {
                    suspectAncestor: K,
                    overlapType: ev[aa]
                } : {
                    suspectAncestor: V,
                    overlapType: fv[da]
                } : K && aa ? {
                    suspectAncestor: K,
                    overlapType: ev[aa]
                } : V && da ? {
                    suspectAncestor: V,
                    overlapType: fv[da]
                } : null
            }
            const {
                suspectAncestor: y,
                overlapType: t
            } = k || {};
            y && t ? g.push(cv(a, c, r, B, t, e, y)) : g.push(cv(a, c, r, B, 9, e))
        }
        return {
            entries: g,
            ca: h
        }
    }

    function Yu(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Je(b, a.j.K());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + a.l ? d.push(cv(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - a.l ? d.push(cv(a, c, b, f, 5, 3)) : !e && c.right > f.right + a.l && d.push(cv(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function Zu(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = lg(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function $u(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function cv(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (Ma(a.o, e) && Ma(a.m, f)) {
            b = new ig(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = gv(a, c)) && jg(b, a)) c = 4;
            else {
                a = hv(c, d);
                if (Wc) {
                    e = Dg(c, "paddingLeft");
                    f = Dg(c, "paddingRight");
                    var k = Dg(c, "paddingTop"),
                        l = Dg(c, "paddingBottom");
                    e = new ig(k, f, l, e)
                } else e = yg(c, "paddingLeft"), f = yg(c, "paddingRight"), k = yg(c, "paddingTop"), l = yg(c, "paddingBottom"), e = new ig(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                a = new ig(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left);
                jg(b, a) ? c = 3 : (c = hv(c, d), c = jg(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function dv(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.K();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = Je(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    ka: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    ka: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    ka: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = iv(a, e.slice(0, f), h);
                    if (g || k) return {
                        suspectAncestor: h,
                        ka: 4
                    }
                }
            }
        }
        return (a = iv(a, e, b)) ? {
                suspectAncestor: a,
                ka: 5
            } :
            null
    }

    function iv(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = Je(f, a.j.K());
            if (h && d.bottom > g.bottom + a.l && "visible" === h.overflowY) return f
        }
        return null
    }

    function gv(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new ig(a.top, a.right, a.bottom, a.left)
    }

    function hv(a, b) {
        if (!Wc || 9 <= Number(jd)) {
            var c = yg(a, "borderLeftWidth");
            d = yg(a, "borderRightWidth");
            e = yg(a, "borderTopWidth");
            a = yg(a, "borderBottomWidth");
            c = new ig(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = Fg(a, "borderLeft");
            var d = Fg(a, "borderRight"),
                e = Fg(a, "borderTop");
            a = Fg(a, "borderBottom");
            c = new ig(e, d, a, c)
        }
        return new ig(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class jv {
        constructor(a, b = kv, c = lv, d = mv, e = 0) {
            this.j = Nd(a);
            this.o = b;
            this.v = c;
            this.m = d;
            this.l = e
        }
    }
    const ev = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        fv = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        },
        kv = Ha(Re({
            mf: 1,
            nf: 2,
            Zg: 3,
            $g: 4,
            bh: 5,
            hf: 6,
            jf: 7,
            lf: 8,
            lg: 9,
            ah: 10,
            kf: 11,
            Yg: 12,
            gf: 13
        }), a => !Ma([1, 2], a)),
        lv = Re({
            we: 1,
            mg: 2,
            Je: 3,
            eh: 4
        }),
        mv = Re({
            xe: 1,
            hh: 2,
            ag: 3,
            Mg: 4
        }),
        bv = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function nv(a, b) {
        Array.isArray(b) || (b = [b]);
        b = Ia(b, function(c) {
            return "string" === typeof c ? c : c.tb + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        vg(a, "transition", b.join(","))
    }
    var ov = Ya(function() {
        if (Wc) return gd("10.0");
        var a = Td(document, "DIV"),
            b = $c ? "-webkit" : Zc ? "-moz" : Wc ? "-ms" : Vc ? "-o" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        if (!xc.test("div")) throw Error("");
        if ("DIV" in zc) throw Error("");
        c = null;
        var d = "";
        if (b)
            for (l in b) {
                if (!xc.test(l)) throw Error("");
                var e = b[l];
                if (null != e) {
                    var f = l;
                    var g = e;
                    if (g instanceof mb) g = pb(g);
                    else if ("style" == f.toLowerCase()) {
                        e = void 0;
                        if (!ra(g)) throw Error("");
                        if (!(g instanceof Vb)) {
                            var h =
                                "";
                            for (e in g) {
                                if (!/^[-_a-zA-Z0-9]+$/.test(e)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + e);
                                var k = g[e];
                                null != k && (k = Array.isArray(k) ? Ia(k, Zb).join(" ") : Zb(k), h += e + ":" + k + ";")
                            }
                            g = h ? Xb(h) : Yb
                        }
                        g instanceof Vb && g.constructor === Vb && g.m === Wb ? e = g.l : (oa(g), e = "type_error:SafeStyle");
                        g = e
                    } else {
                        if (/^on/i.test(f)) throw Error("");
                        if (f.toLowerCase() in yc)
                            if (g instanceof qb) g = tb(g).toString();
                            else if (g instanceof Kb) g = Pb(g);
                        else if ("string" === typeof g) g = Tb(g).j();
                        else throw Error("");
                    }
                    g.Z && (g = g.j());
                    f = f + '="' +
                        yb(String(g)) + '"';
                    d += " " + f
                }
            }
        var l = "<div" + d;
        d = void 0;
        null == d ? d = [] : Array.isArray(d) || (d = [d]);
        !0 === lb.div ? l += ">" : (c = Cc(d), l += ">" + uc(c).toString() + "</div>", c = c.l());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
        b = Dc(l, c);
        Fc(a, b);
        a = a.firstChild;
        b = a.style[Pc("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[wg(a, "transition")] || "")
    });

    function pv(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function qv(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function rv(a, b) {
        0 > a.m.indexOf(b) && (a.m = b + a.m)
    }

    function sv(a, b, c, d) {
        return "" != a.m || b ? null : "" == a.j.replace(tv, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function uv(a) {
        var b = sv(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var vv = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.m = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.m].join("|")
        }
    };

    function wv(a) {
        let b = a.V;
        a.H = function() {};
        xv(a, a.D, b);
        let c = a.D.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Je(c, b)
            } catch (g) {
                rv(a.j, "c")
            }
            const f = yv(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.T = !0);
            if (d && !f && zv(e)) {
                qv(a.j, "l");
                a.I = c;
                break
            }
            d = d && f;
            if (e && Av(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.ba) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Ee(b)) {
                        qv(a.j, "c");
                        break
                    }
                } catch (g) {
                    qv(a.j,
                        "c");
                    break
                }
            }
        }
        a.F && a.o && Bv(a);
        return a.j
    }

    function Cv(a) {
        function b() {
            Dv(c, f, g);
            if (h && !k && !g) {
                const l = function(m) {
                    for (let p = 0; p < m.length; p++) vg(h, m[p], "0px")
                };
                l(Ev);
                l(Fv)
            }
        }
        const c = a.D;
        c.style.overflow = a.aa ? "visible" : "hidden";
        a.F && (a.I ? (nv(c, Gv), nv(a.I, Gv)) : nv(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.N && (c.style.opacity = a.N);
        const d = null != a.C && null != a.m && (a.W || a.m > a.C) ? a.m : null,
            e = null != a.A && null != a.l && (a.W || a.l > a.A) ? a.l : null;
        if (a.J) {
            const l = a.J.length;
            for (let m = 0; m < l; m++) Dv(a.J[m], d, e)
        }
        const f = a.m,
            g = a.l,
            h = a.I,
            k = a.T;
        a.F ? q.setTimeout(b, 1E3) : b()
    }

    function Hv(a) {
        if (a.o && !a.Fa || null == a.m && null == a.l && null == a.N && a.o) return a.j;
        var b = a.o;
        a.o = !1;
        wv(a);
        a.o = b;
        if (!b || null != a.$ && !sv(a.j, a.$, a.m, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.C = null, a.A = null);
        if (null == a.C && null !== a.m || null == a.A && null !== a.l) a.F = !1;
        (0 == a.m || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.m = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.m = "";
        Cv(a);
        return wv(a)
    }

    function Av(a, b) {
        let c = !1;
        "none" == b.display && (qv(a.j, "n"), a.o && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || qv(a.j, "v");
        "hidden" == b.overflow && qv(a.j, "o");
        "absolute" == b.position ? (qv(a.j, "a"), c = !0) : "fixed" == b.position && (qv(a.j, "f"), c = !0);
        return c
    }

    function xv(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = Iv(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && pv(a.j, 0, "o"), d & 4 && pv(a.j, 1, "o"));
        return !(d & 1)
    }

    function yv(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (E) {
            rv(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = We(f),
            h = c.getAttribute("height"),
            k = We(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        const m = xv(a, c, b);
        var p = d && d.width,
            r = d && d.height,
            B = e && e.width,
            y = e && e.height,
            t = Ye(p) == a.C && Ye(r) == a.A;
        p = t ? p : B;
        y = t ? r : y;
        B = Ye(p);
        t = Ye(y);
        g = null !== a.C && (null !== B && a.C >= B || null !== g && a.C >= g);
        t = null !== a.A && (null !== t && a.A >= t || null !== k && a.A >= k);
        k = !m && zv(d);
        t = m || t || k || !(f || p || d && (!Jv(String(d.minWidth)) || !Kv(String(d.maxWidth))));
        l = m || g || k || l || !(h || y || d && (!Jv(String(d.minHeight)) || !Kv(String(d.maxHeight))));
        Lv(a, 0, t, c, "width", f, a.C, a.m);
        Mv(a, 0, "d", t, e, d, "width", p, a.C, a.m);
        Mv(a, 0, "m", t, e, d, "minWidth", e && e.minWidth, a.C, a.m);
        Mv(a, 0, "M", t, e, d, "maxWidth", e && e.maxWidth, a.C, a.m);
        if (a.ha) {
            c = /^html|body$/i.test(c.nodeName);
            r = Ye(r);
            h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1;
            (f = null != a.l && d && r && Math.round(r) !== a.l) && !(f = !h) && (f = r, f = (T.G().j(260, !1) || b.location && "#gffwroe2ettq" == b.location.hash) && Math.round(f) < .8 * Math.round(b.innerHeight));
            f = f && "100%" !== d.minHeight;
            if (c = a.o && !c && f) c = !(a.Ga && d && (T.G().j(265, !1) || b.location && "#gffwroe2etoq" == b.location.hash) && Math.round(Ye(d.minHeight)) === Math.round(b.innerHeight));
            c && (e.setProperty("height", "auto", "important"), d && !Jv(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !Kv(String(d.maxHeight)) && a.l && Math.round(r) < a.l && e.setProperty("max-height", "none", "important"))
        } else Lv(a, 1, l, c, "height", h, a.A, a.l), Mv(a, 1, "d", l, e, d, "height", y, a.A, a.l), Mv(a, 1, "m", l, e, d, "minHeight",
            e && e.minHeight, a.A, a.l), Mv(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.A, a.l);
        return m
    }

    function Bv(a) {
        function b() {
            if (0 < c) {
                var l = Je(e, d) || {};
                const m = Ye(l.width);
                l = Ye(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else q.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.V,
            e = a.D,
            f = a.m,
            g = a.l,
            h = a.H;
        let k;
        q.setTimeout(function() {
            k = q.setInterval(b, 16)
        }, 990)
    }

    function Iv(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Je(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.v.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.v.boundingClientRect.left ? 2 : 0) | (c.bottom > a.v.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function Lv(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = We(f);
                null == f && (rv(a.j, "n"), pv(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.o)
                        if (a.F) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.H;
                            a.H = function(m, p) {
                                m == b && d.setAttribute(e, k - p);
                                l && l(m, p)
                            }
                        } else d.setAttribute(e, h)
                } else pv(a.j, b, "d")
        }
    }

    function Mv(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? Jv(f) : Kv(f)) || (f = Ye(f), null == f ? qv(a.j, "p") : null != k && qv(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? Jv(h) : Kv(h)) return;
                h = Ye(h);
                null == h && (rv(a.j, "p"), pv(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.o)
                        if (a.F) {
                            const m = Math.max(h + l - (k || 0), 0),
                                p = a.H;
                            a.H = function(r, B) {
                                r == b && (e[g] = m - B + "px");
                                p && p(r, B)
                            }
                        } else e[g] = l + "px"
                } else pv(a.j, b, c)
        }
    }
    var Rv = class {
        constructor(a, b, c, d, e, f, g) {
            this.ba = a;
            this.J = c;
            this.D = b;
            this.V = (a = this.D.ownerDocument) && (a.defaultView || a.parentWindow);
            this.v = new Nv(this.D);
            this.o = g;
            this.Fa = Ov(this.v, d.zb, d.height, d.ic);
            this.C = this.o ? this.v.boundingClientRect ? this.v.boundingClientRect.right - this.v.boundingClientRect.left : null : e;
            this.A = this.o ? this.v.boundingClientRect ? this.v.boundingClientRect.bottom - this.v.boundingClientRect.top : null : f;
            this.m = Pv(d.width);
            this.l = Pv(d.height);
            this.N = this.o ? Pv(d.opacity) : null;
            this.$ =
                d.check;
            this.F = "animate" == d.zb && !Qv(this.v, this.l, this.X) && ov();
            this.aa = !!d.Hb;
            this.j = new vv;
            Qv(this.v, this.l, this.X) && qv(this.j, "r");
            e = this.v;
            e.j && e.l >= e.m && qv(this.j, "b");
            this.I = this.H = null;
            this.T = !1;
            this.W = !!d.xd;
            this.ha = !!d.ec;
            this.X = !!d.ic;
            this.Ga = d.Fb
        }
    };

    function Qv(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.o) && (c ? (b = a.l + Math.min(b, Pv(a.gb())), a = a.j && b >= a.m) : a = a.j && a.l >= a.m, d = a);
        return d
    }
    var Nv = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow),
                d;
            if (d = c) d = Ee(c.top) ? c.top : null;
            c = d;
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (f) {}
            var e; {
                d = a;
                let f = 0,
                    g = this.boundingClientRect;
                for (; d;) try {
                    g && (f += g.top);
                    const h = (e = d.ownerDocument) && (e.defaultView || e.parentWindow);
                    (d = h && h.frameElement) && (g = d.getBoundingClientRect())
                } catch (h) {
                    break
                }
                e = f
            }
            this.l = e;
            c = c || q;
            this.m = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement :
                c.document.body).clientHeight;
            b = b && Wj(b);
            this.o = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.o
        }
        Pa() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        gb() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function Ov(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return Qv(a, c, d)
        }
    }

    function zv(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function Sv(a, b, c, d) {
        return Hv(new Rv(a, b, d, c, null, null, !0))
    }
    var Tv = new vv("s", ""),
        tv = /[lonvafrbpEe]/g;

    function Kv(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function Jv(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function Dv(a, b, c) {
        null !== b && null !== We(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== We(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var Ev = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        Fv = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" "),
        Uv; {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
            b = Ev;
        for (let c = 0; c < b.length; c++) a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = Fv;
        for (let c = 0; c < b.length; c++) a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        Uv = a
    }
    var Gv = Uv;

    function Pv(a) {
        return "string" === typeof a ? We(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function Vv(a, b, c, d, e, f, g, h, k, l) {
        const m = u();
        if (!a.m || !m) return l.err = "2", Wv(a, l, null), !1;
        if ("no_rsz" === f) return l.err = "7", Wv(a, l, null), !0;
        const p = new Nv(a.o || a.m);
        if (!p.j) return l.err = "3", Wv(a, l, null), !1;
        var r = p.Pa();
        null != r && (l.w = r);
        r = p.gb();
        null != r && (l.h = r);
        if (Ov(p, f, d, k)) {
            var B = a.o && a.o.ownerDocument.getElementById(a.o.id + "_anchor");
            r = B ? [a.o, a.m] : null;
            B = B || a.m;
            const y = T.G().j(154, !1);
            b = Sv(m, B, {
                width: c,
                height: d,
                opacity: e,
                check: b,
                zb: f,
                Hb: g,
                xd: h,
                ec: y,
                ic: k
            }, r);
            null != c && (l.nw = c);
            null != d && (l.nh = d);
            l.rsz = b.toString();
            l.abl = uv(b);
            l.frsz = ("force" === f).toString();
            l.err = "0";
            Wv(a, l, p);
            Ka(jj.G().l(), t => Ma([248427477, 248427478], t)) && a.j === m && av(new jv(a.j, [5, 8, 9], [3, 4], void 0, 2), B).then(t => {
                Vj(8, [t]);
                return t
            }).then(t => {
                Y("resize-ovlp", {
                    adf: a.v,
                    eid: a.F.join(","),
                    io: Number(t.isOverlappingOrOutsideViewport),
                    oa: t.overlappedArea.toFixed(2),
                    qid: l.qid || "",
                    slot: a.I,
                    url: a.J,
                    vp: t.viewportSize.width + "x" + t.viewportSize.height
                }, 1)
            }).catch(t => {
                Y("resize-ovlp-err", {
                    err: t.message
                }, 1)
            });
            return !0
        }
        l.err = "1";
        Wv(a, l,
            p);
        return !1
    }

    function Xv(a, b, c) {
        const d = {
            scrl: Ak(a.j || u()),
            adk: a.D,
            adf: a.v,
            fmt: a.C
        };
        b && (d.str = Qv(b, We(c.r_nh), Xe(c.r_cab)), d.ad_y = b.l, d.vph = b.m);
        U(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function Wv(a, b, c) {
        const d = Kf(String(b.gen204_fraction), .05);
        b = Xv(a, c, b);
        b.url = a.j.document.URL;
        Y("resize", b, d)
    }
    class Yv extends hu {
        constructor(a, b, c, d) {
            super(a);
            this.m = b;
            this.o = c;
            this.D = String(d.google_ad_unit_key || "");
            this.v = String(d.google_ad_dom_fingerprint || "");
            this.C = String(d.google_ad_format || "");
            this.F = ah(d).eids || [];
            this.I = String(d.google_ad_slot || "");
            this.J = String(d.google_page_url || "")
        }
        N(a) {
            a["ablate-me"] = this.A;
            a["resize-me"] = this.H
        }
        A(a, b) {
            zk(b, this.m.contentWindow) && (a = Ck(a), b = a.clp_btf_only, Vv(this, null, null, 0, 0, "animate" === a["collapse-after-close"] ? "animate" : "1" === b ? "safe" : "force", !1, !1, !1, a))
        }
        H(a,
            b) {
            if (zk(b, this.m.contentWindow)) {
                a = Ck(a);
                var c = a.r_chk;
                if (null == c || "" === c) {
                    var d = We(a.r_nw),
                        e = We(a.r_nh),
                        f = We(a.r_no);
                    null != f || 0 !== d && 0 !== e || (f = 0);
                    var g = a.r_str;
                    g = g ? g : null;
                    d = Vv(this, c, d, e, f, g, Xe(a.r_ao), Xe(a.r_ifr), Xe(a.r_cab), a);
                    c = {
                        msg_type: "resize-result"
                    };
                    c.r_str = g;
                    c.r_status = d;
                    b = b.source;
                    c.googMsgType = "sth";
                    b.postMessage(JSON.stringify(c), "*");
                    this.m.dataset.googleQueryId || this.m.setAttribute("data-google-query-id", a.qid)
                }
            }
        }
        l() {
            super.l();
            this.m = null
        }
    };
    const Zv = (a, b, c) => new a.IntersectionObserver(c, b),
        $v = (a, b, c) => {
            R(a, b, c);
            return () => ee(a, b, c)
        };
    let aw = null;
    const bw = () => {
            aw = ai()
        },
        cw = (a, b) => b ? null === aw ? (R(a, "mousemove", bw, {
            passive: !0
        }), R(a, "scroll", bw, {
            passive: !0
        }), aw = ai(), !1) : ai() - aw >= 1E3 * b : !1;

    function dw({
        win: a,
        element: b,
        Cd: c,
        Bd: d,
        Ad: e = 0,
        Rc: f,
        Vc: g,
        options: h = {},
        vh: k = Zv
    }) {
        let l = null,
            m = !1,
            p = !1;
        const r = [],
            B = k(a, h, (y, t) => {
                try {
                    const E = () => {
                        r.length || (d && (r.push($v(b, "mouseenter", () => {
                            m = !0;
                            E()
                        })), r.push($v(b, "mouseleave", () => {
                            m = !1;
                            E()
                        }))), r.push($v(a.document, "visibilitychange", () => E())));
                        const K = cw(a, e);
                        !p || m || K || Yj(a.document) ? (a.clearTimeout(l), l = null) : l = l || a.setTimeout(() => {
                            cw(a, e) ? E() : (f(), t.disconnect())
                        }, 1E3 * c)
                    };
                    ({
                        isIntersecting: p
                    } = y[y.length - 1]);
                    E()
                } catch (E) {
                    g && g(E)
                }
            });
        B.observe(b);
        return () => {
            B.disconnect();
            for (const y of r) y();
            null != l && a.clearTimeout(l)
        }
    };

    function ew(a, b, c, d, e) {
        return new fw(a, b, c, d, e)
    }

    function gw(a, b, c) {
        const d = a.v,
            e = a.C;
        if (null != e && null != d && zk(c, d.contentWindow) && (b = b.config, "string" === typeof b)) {
            try {
                var f = JSON.parse(b);
                if (!pa(f)) return;
                a.m = new ne(f)
            } catch (g) {
                return
            }
            a.Ma();
            f = sd(a.m, 1, 30);
            0 >= f || (f -= .2, a.o = dw({
                win: a.j,
                element: e,
                Bd: !Ae(),
                Ad: sd(a.m, 3, 90),
                Cd: f,
                Rc: () => void hw(a, e),
                options: {
                    threshold: ud(a.m, 2, 1)
                },
                Vc: g => ri.j(623, g, void 0, void 0)
            }))
        }
    }

    function hw(a, b) {
        a.D(!!rd(a.m, 4));
        setTimeout(W(624, () => {
            a.A.google_refresh_count = (parseInt(a.A.google_refresh_count, 10) || 0) + 1;
            var c;
            a: {
                if (Dd && !(Wc && gd("9") && !gd("10") && q.SVGElement && b instanceof q.SVGElement) && (c = b.parentElement)) break a;c = b.parentNode;c = ra(c) && 1 == c.nodeType ? c : null
            }
            c && Rg.test(c.className) || (c = Td(document, "INS"), c.className = "adsbygoogle", b.parentNode && b.parentNode.insertBefore(c, b.nextSibling));
            b && b.parentNode && b.parentNode.removeChild(b);
            a.v = null;
            qr(c, a.A, a.j)
        }), 200)
    }
    class fw extends hu {
        constructor(a, b, c, d, e) {
            super(a);
            this.v = b;
            this.C = d;
            this.A = c;
            this.D = e;
            this.m = this.o = null;
            (b = (b = b.contentWindow) && b.parent) && a != b && this.V.push(Ci(b, "sth", this.Cb, this.Eb))
        }
        N(a) {
            a.av_ref = (b, c) => gw(this, b, c)
        }
        l() {
            super.l();
            this.C = this.v = null;
            this.o && this.o()
        }
    };
    let iw = navigator;
    var jw = () => {
            try {
                return iw.javaEnabled()
            } catch (a) {
                return !1
            }
        },
        kw = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        lw = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return kw(a.toLowerCase())
        };
    const mw = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        nw = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
        ow = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
    const pw = /^blogger$/,
        qw = /^wordpress(.|\s|$)/i,
        rw = /^joomla!/i,
        sw = /^drupal/i,
        tw = /\/wp-content\//,
        uw = /\/wp-content\/plugins\/advanced-ads/,
        vw = /\/wp-content\/themes\/genesis/,
        ww = /\/wp-content\/plugins\/genesis/;
    var xw = a => {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src");
                if (uw.test(e)) return 5;
                if (ww.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href"), vw.test(e) || ww.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content");
                if (pw.test(f)) return 1;
                if (qw.test(f)) return 2;
                if (rw.test(f)) return 3;
                if (sw.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href"), tw.test(d))) return 2;
        return 0
    };

    function yw(a) {
        -1 == a.j && (a.j = Ja(a.l, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.j
    }
    class zw {
        constructor() {
            this.l = [];
            this.j = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && 0 === a % 1 && this.l[a] != b && (this.l[a] = b, this.j = -1)
        }
        get(a) {
            return !!this.l[a]
        }
    };
    const Aw = /[+, ]/;
    var Gw = (a, b) => {
            const c = a.B; {
                var d = u().document;
                const L = {},
                    w = u(); {
                    const v = {};
                    v.nc = Xi(u(), !1).win;
                    v.Dd = pk(v.nc);
                    v.Ub = nk(u(), d, c.google_ad_width, c.google_ad_height); {
                        var e = v.Ub,
                            f = v.Dd.nb;
                        const F = u(),
                            C = F.top == F ? 0 : Ee(F.top) ? 1 : 2;
                        let P = 4;
                        e || 1 != C ? e || 2 != C ? e && 1 == C ? P = 7 : e && 2 == C && (P = 8) : P = 6 : P = 5;
                        f && (P |= 16);
                        var g = "" + P
                    }
                    v.Zc = g;
                    v.Ob = qk();
                    var h = v
                }
                const H = h.nc,
                    x = h.Ub;
                let J = !!c.google_page_url;
                L.google_iframing = h.Zc;
                0 != h.Ob && (L.google_iframing_environment = h.Ob);
                if (!J && "ad.yieldmanager.com" == d.domain) {
                    let v = d.URL.substring(d.URL.lastIndexOf("http"));
                    for (; - 1 < v.indexOf("%");) try {
                        v = decodeURIComponent(v)
                    } catch (F) {
                        break
                    }
                    c.google_page_url = v;
                    J = !!v
                }
                if (J) {
                    var k = x,
                        l = L;
                    l.google_page_url = c.google_page_url;
                    l.google_page_location = (k ? d.referrer : d.URL) || "EMPTY"
                } else if (x && Ee(w.top) && d.referrer && w.top.document.referrer === d.referrer) L.google_page_url = w.top.document.URL, L.google_page_location = null;
                else {
                    var m = L;
                    m.google_page_url = x ? d.referrer : d.URL;
                    m.google_page_location = null
                }
                a: {
                    if (d.URL == L.google_page_url) try {
                        var p = Date.parse(d.lastModified) / 1E3;
                        break a
                    } catch (v) {}
                    p =
                    null
                }
                L.google_last_modified_time = p;
                if (H == H.top) var r = H.document.referrer;
                else {
                    {
                        const v = og();
                        var B = v && v.referrer
                    }
                    r = B || ""
                }
                L.google_referrer_url = r;
                var y = L
            }
            ok(y, c); {
                let L = c.google_page_location || c.google_page_url;
                "EMPTY" == L && (L = c.google_page_url);
                if (Qf || !L) var t = !1;
                else {
                    var E = L.toString();
                    0 == E.indexOf("http://") ? E = E.substring(7, E.length) : 0 == E.indexOf("https://") && (E = E.substring(8, E.length));
                    var K = E.indexOf("/"); - 1 == K && (K = E.length);
                    var aa = E.substring(0, K);
                    if (sk.test(aa)) t = !1;
                    else {
                        var V = aa.split("."),
                            da = !1;
                        3 <= V.length && (da = V[V.length - 3] in rk);
                        2 <= V.length && (da = da || V[V.length - 2] in rk);
                        t = da
                    }
                }
            }
            const ma = t ? Mf("", "pagead2.googlesyndication.com") : Xf(); {
                const L = {};
                Bw(a, L);
                xu();
                L.adsid = uu[1];
                xu();
                L.pucrd = uu[6]; {
                    var G = L;
                    const w = a.B; {
                        const x = a.B;
                        G.dt = ku;
                        Og(x) && x.google_bpp && (G.bpp = x.google_bpp); {
                            const v = u();
                            a: {
                                const C = u();
                                try {
                                    const P = C.performance;
                                    if (P && P.timing && P.now) {
                                        var On = P.timing.navigationStart + Math.round(P.now()) - P.timing.domLoading;
                                        break a
                                    }
                                } catch (P) {}
                                On = null
                            }
                            const F =
                                On;
                            var Pn = F ? lu(F, v.Date.now() - ku, 1E6) : null
                        }
                        Pn && (G.bdt = Pn); {
                            const v = x.google_iframe_start_time;
                            if ("number" !== typeof v) var Qn = null;
                            else x.google_iframe_start_time = null, Qn = lu(v, ku)
                        }
                        const J = Qn;
                        null != J && (G.fdt = J);
                        G.idt = lu(a.N, ku)
                    } {
                        const x = a.B;
                        G.shv = Nf();
                        G.cbv = "/r20190131".replace("/", "");
                        "sa" == x.google_loader_used ? G.ptt = 5 : "aa" == x.google_loader_used && (G.ptt = 9);
                        /^\w{1,3}$/.test(x.google_loader_used) && (G.saldr = x.google_loader_used);
                        Of && (G.jscb =
                            1);
                        Pf && (G.jscd = 1)
                    } {
                        const x = og(a.pubWin);
                        if (x) {
                            G.is_amp = 1; {
                                const v = x || og();
                                var Xw = v && v.mode ? +v.mode.version || null : null
                            }
                            G.amp_v = Xw; {
                                const v = x || og();
                                if (v && v.container) {
                                    const F = v.container.split(","),
                                        C = [];
                                    for (let P = 0; P < F.length; P++) C.push(ng[F[P]] || "x");
                                    var Rn = C.join()
                                } else Rn = null
                            }
                            const J = Rn;
                            J && (G.act = J)
                        }
                        u() == window.top && (G.abxe = 1)
                    }
                    if ("_gfp_a_" in a.pubWin) {
                        const x = a.pubWin._gfp_a_;
                        if ("boolean" !== typeof x) throw Error(`Illegal value of ${"_gfp_a_"}: ${x}`);
                        if (x && T.G().j(225, !1)) {
                            {
                                var Sn = new pu(a.pubWin,
                                    T.G().j(226, !1));
                                const J = Sn.j.get("__gads", "");
                                var zh = Sn.l && !ou(J) ? "Real" : J
                            }
                            zh && (G.cookie = zh, G.crv = "Test" !== zh)
                        }
                    }
                    const H = aj(); {
                        var Tn = w,
                            af = H;
                        const x = fj(af, 8, {}),
                            J = Tn.google_ad_section;
                        x[J] && (G.prev_fmts = x[J]);
                        const v = fj(af, 9, {});
                        v[J] && (G.prev_slotnames = v[J].toLowerCase());
                        Cw(Tn, af);
                        const F = fj(af, 15, 0);
                        0 < F && (G.nras = String(F))
                    }
                    G.correlator = fj(H, 7, $i());
                    qj().j["21060549"] && (G.rume = 1);
                    var bf = w,
                        Vn = H;
                    if (bf.google_ad_channel) {
                        const x = fj(Vn, 10, {});
                        let J = "";
                        const v = bf.google_ad_channel.split(Aw);
                        for (let F =
                                0; F < v.length; F++) {
                            const C = v[F];
                            x[C] ? J += C + "+" : x[C] = !0
                        }
                        G.pv_ch = J
                    }
                    if (bf.google_ad_host_channel) {
                        {
                            var cf = fj(Vn, 11, []);
                            const x = bf.google_ad_host_channel.split("|");
                            let J = -1;
                            const v = [];
                            for (let C = 0; C < x.length; C++) {
                                const P = x[C].split(Aw);
                                cf[C] || (cf[C] = {});
                                let I = "";
                                for (let X = 0; X < P.length; X++) {
                                    const ua = P[X];
                                    "" !== ua && (cf[C][ua] ? I += "+" + ua : cf[C][ua] = !0)
                                }
                                I = I.slice(1);
                                v[C] = I;
                                "" !== I && (J = C)
                            }
                            let F = "";
                            if (-1 < J) {
                                for (let C = 0; C < J; C++) F += v[C] + "|";
                                F += v[J]
                            }
                            var Yw = F
                        }
                        G.pv_h_ch = Yw
                    }
                    G.frm = w.google_iframing;
                    G.ife = w.google_iframing_environment;
                    var Wn = w.google_ad_client;
                    try {
                        const x = Yi();
                        let J = x.google_prev_clients;
                        J || (J = x.google_prev_clients = {});
                        if (Wn in J) var Ah = 1;
                        else J[Wn] = !0, Ah = 2
                    } catch (x) {
                        Ah = 0
                    }
                    G.pv = Ah; {
                        const x = a.pubWin.document,
                            J = a.B;
                        let v = "";
                        try {
                            v = x.cookie
                        } catch (C) {}
                        var Xn = x.domain,
                            Fd = v,
                            df = a.pubWin.screen,
                            Zw = x.referrer,
                            $w = Kg();
                        if (og()) var Yn = u().gaGlobal || {};
                        else {
                            var Bh = Math.round((new Date).getTime() / 1E3),
                                Ch = J.google_analytics_domain_name,
                                ef = "undefined" == typeof Ch ? lw("auto", Xn) : lw(Ch, Xn),
                                ax = -1 < Fd.indexOf("__utma=" + ef + "."),
                                bx = -1 < Fd.indexOf("__utmb=" +
                                    ef),
                                Dh;
                            if (!(Dh = (rg() || u()).gaGlobal)) {
                                var cx = {};
                                Dh = (rg() || u()).gaGlobal = cx
                            }
                            var ja = Dh,
                                Zn = !1;
                            if (ax) {
                                var Eh = Fd.split("__utma=" + ef + ".")[1].split(";")[0].split(".");
                                bx ? ja.sid = Eh[3] : ja.sid || (ja.sid = Bh + "");
                                ja.vid = Eh[0] + "." + Eh[1];
                                ja.from_cookie = !0
                            } else {
                                ja.sid || (ja.sid = Bh + "");
                                if (!ja.vid) {
                                    Zn = !0;
                                    var dx = Math.round(2147483647 * Math.random()); {
                                        var $n = $w;
                                        let C, P, I = [iw.appName, iw.version, iw.language ? iw.language : iw.browserLanguage, iw.platform, iw.userAgent, jw() ? 1 : 0].join("");
                                        df ? I += df.width + "x" + df.height + df.colorDepth :
                                            q.java && q.java.awt && (P = q.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), I += P.screen.width + "x" + P.screen.height);
                                        I = I + Fd + (Zw || "");
                                        for (C = I.length; 0 < $n;) I += $n-- ^ C++;
                                        var ex = kw(I)
                                    }
                                    ja.vid = (dx ^ ex & 2147483647) + "." + Bh
                                }
                                ja.from_cookie = !1
                            }
                            if (!ja.cid) {
                                b: {
                                    var Mc = Ch;
                                    let P = 999;Mc && (Mc = 0 == Mc.indexOf(".") ? Mc.substr(1) : Mc, P = Mc.split(".").length);
                                    let I, X = 999;
                                    const ua = Fd.split(";");
                                    for (let ha = 0; ha < ua.length; ha++) {
                                        const ka = mw.exec(ua[ha]) || nw.exec(ua[ha]) || ow.exec(ua[ha]);
                                        if (!ka) continue;
                                        const jb = ka[1] || 0;
                                        if (jb == P) {
                                            var ao =
                                                ka[2];
                                            break b
                                        }
                                        jb < X && (X = jb, I = ka[2])
                                    }
                                    ao = I
                                }
                                const C = ao;Zn && C && -1 != C.search(/^\d+\.\d+$/) ? (ja.vid = C, ja.from_cookie = !0) : C != ja.vid && (ja.cid = C)
                            }
                            ja.dh = ef;
                            ja.hid || (ja.hid = Math.round(2147483647 * Math.random()));
                            Yn = ja
                        }
                        const F = Yn;
                        G.ga_vid = F.vid;
                        G.ga_sid = F.sid;
                        G.ga_hid = F.hid;
                        G.ga_fc = F.from_cookie;
                        G.ga_cid = F.cid;
                        G.ga_wpids = J.google_analytics_uacct
                    } {
                        var Gd = a.pubWin;
                        const x = new rh(Gd);
                        if (Gd.location && Gd.location.ancestorOrigins) {
                            {
                                var Hd = x;
                                const v = [],
                                    F = Math.min(Hd.l.length, 27);
                                for (let C = 1; C < F; C++) Hd.l[C] && Hd.l[C].url &&
                                    (v[C - 1] = Hd.l[C].url);
                                var fx = qh(Hd, v.reverse())
                            }
                            G.iag = fx
                        } {
                            var ff = x;
                            const v = ff.j.document && ff.j.document.scripts ? ff.j.document.scripts : [];
                            if (v) {
                                for (var Fh = [], gf = v.length - 1; 0 <= gf && 26 > Fh.length;) v[gf].src && Fh.unshift(v[gf].src), gf--;
                                var bo = qh(ff, Fh)
                            } else bo = 0
                        }
                        G.icsg = bo;
                        const J = x.l[0].depth;
                        J && 0 < J && (G.nhd = J);
                        G.dssz = Gd.document.scripts ? Gd.document.scripts.length : 0; {
                            const v = x.l,
                                F = [];
                            for (let C = v.length - 1; 0 < C; C--) {
                                const P = v[C];
                                P && null != P.url && F.push(De(Ce(P.url)[3] || null))
                            }
                            var gx = mh(F)
                        }
                        G.mdo = gx; {
                            const v = x.j.document &&
                                x.j.document.scripts ? x.j.document.scripts : [];
                            if (v) {
                                var co = [];
                                for (let F = v.length - 1; 0 <= F; F--) {
                                    const C = v[F];
                                    C && null != C.src && co.push(De(Ce(C.src)[3] || null))
                                }
                                var eo = mh(co)
                            } else eo = 0
                        }
                        G.mso = eo
                    } {
                        const x = w.google_ad_layout;
                        x && 0 <= It[x] && (G.rplot = It[x])
                    }
                }
                var kb = L;
                kb.u_tz = -(new Date).getTimezoneOffset();
                kb.u_his = Kg();
                kb.u_java = !!S.navigator && "unknown" !== typeof S.navigator.javaEnabled && !!S.navigator.javaEnabled && S.navigator.javaEnabled();
                S.screen && (kb.u_h = S.screen.height, kb.u_w = S.screen.width, kb.u_ah = S.screen.availHeight,
                    kb.u_aw = S.screen.availWidth, kb.u_cd = S.screen.colorDepth);
                S.navigator && S.navigator.plugins && (kb.u_nplug = S.navigator.plugins.length);
                S.navigator && S.navigator.mimeTypes && (kb.u_nmime = S.navigator.mimeTypes.length);
                if (b) try {
                    {
                        var Nb = L;
                        const w = Kj(a, b);
                        Nb.adx && -12245933 != Nb.adx && Nb.ady && -12245933 != Nb.ady || (Nb.adx = Math.round(w.x), Nb.ady = Math.round(w.y));
                        Ij(b) || (Nb.adx = -12245933, Nb.ady = -12245933)
                    }
                } catch (w) {} {
                    var hf = L;
                    const w = qg() || Jj(Tg(a.pubWin));
                    w && (hf.biw = w.width, hf.bih = w.height);
                    var fo = a.pubWin;
                    if (Tg(fo) !=
                        fo) {
                        const H = Jj(a.pubWin);
                        H && (hf.isw = H.width, hf.ish = H.height)
                    }
                } {
                    var hx = L;
                    var dc = a.pubWin;
                    if (null === dc || dc == dc.top) var go = 0;
                    else {
                        var jf = [dc.document.URL];
                        dc.name && jf.push(dc.name);
                        var ho = Jj(dc, !1);
                        jf.push(ho.width.toString());
                        jf.push(ho.height.toString());
                        go = Se(jf.join(""))
                    }
                    const w = go;
                    0 !== w && (hx.ifk = w)
                } {
                    var io = L;
                    let w;
                    const H = Yg(a.pubWin);
                    w = H && H.document ? Hj(H.document, H) : new Ld(-12245933, -12245933);
                    io.scr_x = Math.round(w.x);
                    io.scr_y = Math.round(w.y)
                } {
                    var jo = L;
                    const w = qj(),
                        H = zj(w),
                        x = a.B.google_eids;
                    if (pa(x)) {
                        a.l |=
                            64;
                        for (let F = 0; F < x.length; F++) "string" === typeof x[F] && H.push(x[F])
                    }
                    jo.eid = H.join();
                    const J = yj(w),
                        v = a.B.google_loeid;
                    "string" === typeof v && (a.l |= 4096, Qa(J, v.split(",")));
                    jo.loeid = J.join()
                }
                a.H && (L.oid = a.H);
                var ix = L;
                if (Zh(qj(), 139) === wj.pa) {
                    const w = Yg(a.pubWin);
                    w && (ix.pg_h = wk(w, !0))
                } {
                    var jx = L;
                    const w = hj()[a.B.google_ad_client];
                    w && (jx.psts = w.join())
                }
                L.pvsid = Bf(a.pubWin);
                var kx = L;
                a: {
                    var ko = a.pubWin;
                    let w = -1;
                    try {
                        ko.localStorage && (w = parseInt(ko.localStorage.getItem("google_pem_mod"), 10))
                    } catch (H) {
                        var lo =
                            null;
                        break a
                    }
                    lo = 0 <= w && 1E3 > w ? w : null
                }
                kx.pem = lo; {
                    var ba = L;
                    const w = a.B,
                        H = a.pubWin,
                        x = a.j,
                        J = Yi();
                    ba.ref = w.google_referrer_url;
                    ba.loc = w.google_page_location; {
                        const I = og(H);
                        if (I && ra(I.data) && "string" === typeof I.data.type) {
                            var Gh = I.data.type.toLowerCase();
                            var mo = "doubleclick" == Gh || "adsense" == Gh ? null : Gh
                        } else mo = null
                    }
                    const v = mo;
                    v && (ba.apn = v.substr(0, 10));
                    const F = pk(J);
                    var Hh = F;
                    ba.url || ba.loc || !Hh.url || (ba.url = Hh.url, Hh.nb || (ba.usrc = 1));
                    F.url != (ba.loc || ba.url) && (ba.top = F.url);
                    w.google_async_rrc && (ba.rr = w.google_async_rrc);
                    ba.rx = 0; {
                        if (fu && au(fu)) var no = fu;
                        else {
                            var Ih = Yi(),
                                oo = Ih.google_jobrunner;
                            no = bu(oo) ? fu = oo : Ih.google_jobrunner = fu = new du(Ih)
                        }
                        const I = no;
                        var po = Gg(I.tc) ? I.tc() : null
                    }
                    po && (ba.jtc = po);
                    0 <= a.v && (ba.eae = a.v);
                    let C = null;
                    try {
                        C = x && x.localStorage
                    } catch (I) {}
                    const P = ir(w, x, C);
                    P && (ba.fc = P);
                    if (!Wg(w)) {
                        var Id = (a.iframeWin || a.pubWin).document,
                            qo = "";
                        if (Id.documentMode) {
                            var ec = ae(new Od(Id), "IFRAME");
                            ec.frameBorder = "0";
                            ec.style.height = 0;
                            ec.style.width = 0;
                            ec.style.position = "absolute";
                            if (Id.body) {
                                Id.body.appendChild(ec);
                                try {
                                    var kf = ec.contentWindow.document;
                                    kf.open();
                                    kf.write("<!DOCTYPE html>");
                                    kf.close();
                                    qo += kf.documentMode
                                } catch (I) {}
                                Id.body.removeChild(ec)
                            }
                        }
                        ba.docm = qo
                    } {
                        let I, X, ua, ha, ka, jb;
                        try {
                            I = H.screenX, X = H.screenY
                        } catch (Ob) {}
                        try {
                            ua = H.outerWidth, ha = H.outerHeight
                        } catch (Ob) {}
                        try {
                            ka = H.innerWidth, jb = H.innerHeight
                        } catch (Ob) {}
                        var lx = [H.screenLeft, H.screenTop, I, X, H.screen ? H.screen.availWidth : void 0, H.screen ? H.screen.availTop : void 0, ua, ha, ka, jb]
                    }
                    ba.brdim = lx.join(); {
                        var ro = H; {
                            const X = sj.pa;
                            var mx = Zh(qj(), 67) === X
                        }
                        let I =
                            0;
                        void 0 === q.postMessage && (I |= 1);
                        if (mx) {
                            {
                                const X = og(ro);
                                var nx = !(!X || !X.observeIntersection)
                            }
                            nx && (I |= 256); {
                                const X = ro.document;
                                var ox = X && qa(X.elementFromPoint)
                            }
                            ox && (I |= 1024)
                        }
                        var so = I
                    }
                    0 < so && (ba.osd = so);
                    ba.vis = Wj(H.document);
                    if (b) {
                        {
                            var px = H,
                                Jh = w;
                            const I = Fk(Jh) ? Tv : Hv(new Rv(px, b, null, {
                                width: 0,
                                height: 0
                            }, Jh.google_ad_width, Jh.google_ad_height, !1));
                            ba.rsz = I.toString();
                            ba.abl = uv(I)
                        }
                    }
                    var Kh = w;
                    if (!Fk(Kh)) {
                        var Lh = Zg(Kh);
                        if (Lh) {
                            let I = 0;
                            a: {
                                try {
                                    {
                                        var to = Kh.google_async_iframe_id;
                                        const ha = u().document;
                                        if (to) var uo =
                                            ha.getElementById(to);
                                        else {
                                            var vo = ha.getElementsByTagName("script"),
                                                wo = vo[vo.length - 1];
                                            uo = wo && wo.parentNode || null
                                        }
                                    }
                                    const ua = uo;
                                    if (ua) {
                                        {
                                            const ha = [];
                                            let ka = ua,
                                                jb = 0;
                                            const Ob = Date.now();
                                            for (; 100 >= ++jb && 50 > Date.now() - Ob && (ka = Dw(ka));) 1 === ka.nodeType && ha.push(ka);
                                            var lf = ha
                                        }
                                        b: {
                                            for (let ha = 0; ha < lf.length; ha++) {
                                                c: {
                                                    var Ab = lf[ha];
                                                    try {
                                                        if (Ab.parentNode && 0 < Ab.offsetWidth && 0 < Ab.offsetHeight && Ab.style && "none" !== Ab.style.display && "hidden" !== Ab.style.visibility && (!Ab.style.opacity || 0 !== Number(Ab.style.opacity))) {
                                                            const ka =
                                                                Ab.getBoundingClientRect();
                                                            var xo = 0 < ka.right && 0 < ka.bottom;
                                                            break c
                                                        }
                                                    } catch (ka) {}
                                                    xo = !1
                                                }
                                                if (!xo) {
                                                    var yo = !1;
                                                    break b
                                                }
                                            }
                                            yo = !0
                                        }
                                        if (yo) {
                                            b: {
                                                const ha = Date.now(),
                                                    ka = /^html|body$/i,
                                                    jb = /^fixed/i;
                                                for (let Ob = 0; Ob < lf.length && 50 > Date.now() - ha; Ob++) {
                                                    const mf = lf[Ob];
                                                    if (!ka.test(mf.tagName) && jb.test(mf.style.position || zg(mf))) {
                                                        var Mh = mf;
                                                        break b
                                                    }
                                                }
                                                Mh = null
                                            }
                                            break a
                                        }
                                    }
                                } catch (ua) {}
                                Mh = null
                            }
                            const X = Mh;
                            X && X.offsetWidth * X.offsetHeight <= 4 * Lh.width * Lh.height && (I = 1);
                            ba.pfx = I
                        }
                    }
                    if ("26835106" === Zh(qj(), 41) && x) {
                        try {
                            const X = x.document.getElementsByTagName("head")[0];
                            var zo = X ? xw(X) : 0
                        } catch (X) {
                            zo = 0
                        }
                        const I = zo;
                        0 !== I && (ba.cms = I)
                    }
                    w.google_lrv !== Nf() && (ba.alvm = w.google_lrv || "none")
                }
                L.fu = a.l; {
                    const w = new zw;
                    q.SVGElement && q.document.createElementNS && w.set(0);
                    const H = pf();
                    H["allow-top-navigation-by-user-activation"] && w.set(1);
                    H["allow-popups-to-escape-sandbox"] && w.set(2);
                    q.crypto && q.crypto.subtle && w.set(3);
                    q.TextDecoder && q.TextEncoder && w.set(4);
                    var rx = yw(w)
                }
                L.bc = rx;
                xu();
                L.jar = uu[4];
                var Bb = L;
                if (Qf) {
                    if (Qf) {
                        const w = Wh();
                        w && (Bb.debug_experiment_id = w)
                    }
                    Bb.creatives = Ew(/\b(?:creatives)=([\d,]+)/);
                    Bb.adgroups = Ew(/\b(?:adgroups)=([\d,]+)/);
                    Bb.adgroups && (Bb.adtest = "on", Bb.disable_budget_throttling = !0, Bb.use_budget_filtering = !1, Bb.retrieve_only = !0, Bb.disable_fcap = !0)
                }
                Uj() && (L.atl = !0);
                var sx = L
            } {
                const L = a.B,
                    w = L.google_ad_channel;
                let H = "/pagead/ads?";
                "ca-pub-6219811747049371" === L.google_ad_client && Fw.test(w) && (H = "/pagead/lopri?");
                var ux = H
            }
            let Nh = Qj(ma, ux);
            3 === Wj(a.pubWin.document) && (a.A = !0, a.F = Nh, Nh = Qj(ma, "/pagead/blank.gif#?"));
            const vx = Jg(sx, Nh + (Qf && c.google_debug_params ? c.google_debug_params :
                ""));
            return c.google_ad_url = vx
        },
        Dw = a => {
            try {
                if (a.parentNode) return a.parentNode
            } catch (c) {
                return null
            }
            if (9 === a.nodeType) a: {
                try {
                    const c = Sd(a);
                    if (c) {
                        const d = c.frameElement;
                        if (d && Ee(c.parent)) {
                            var b = d;
                            break a
                        }
                    }
                } catch (c) {}
                b = null
            }
            else b = null;
            return b
        };
    const Ew = a => {
        try {
            const b = q.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch (b) {}
        return ""
    };
    var Cw = (a, b) => {
        const c = fj(b, 8, {});
        b = fj(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    };
    const Hw = (a, b) => {
        const c = a.C;
        c && (c.wd && (b.npa = 1), c.Sb && (b.guci = c.Sb), c.Fd && (b.gdpr_consent = c.Fd, c.Yc && (b.addtl_consent = c.Yc)));
        a.I && (b.us_privacy = a.I);
        a.tcString && (b.gdpr_consent = a.tcString);
        void 0 != a.gdprApplies && (b.gdpr = a.gdprApplies ? "1" : "0");
        a.addtlConsent && (b.addtl_consent = a.addtlConsent)
    };
    var Bw = (a, b) => {
        const c = a.B;
        U(dh, (d, e) => {
            b[d] = c[e]
        });
        Hw(a, b);
        U(ch, (d, e) => {
            b[d] = c[e]
        });
        U(eh, (d, e) => {
            b[d] = c[e]
        });
        Fk(c) && (a = Ek(c), b.fa = a)
    };
    const Fw = /YtLoPri/;
    var Iw = (a = q) => a.ggeac || (a.ggeac = {});
    class Jw {
        constructor() {}
    }
    na(Jw);
    var Kw = (a = Iw()) => {
        ij(jj.G(), a);
        gg(T.G(), a);
        Jw.G();
        T.G().l()
    };

    function Lw(a) {
        if (a.j) return a.j;
        a.j = rf(a.m, "__uspapiLocator");
        return a.j
    }

    function Mw(a) {
        return qa(a.m.__uspapi) || null != Lw(a)
    }

    function Nw(a, b) {
        if (qa(a.m.__uspapi)) a = a.m.__uspapi, a("getUSPData", 1, b);
        else if (Lw(a)) {
            Ow(a);
            const c = ++a.A;
            a.v[c] = b;
            a.j && a.j.postMessage({
                ["__uspapiCall"]: {
                    command: "getUSPData",
                    version: 1,
                    callId: c
                }
            }, "*")
        }
    }

    function Pw(a, b) {
        let c = {};
        if (Mw(a)) {
            var d = Za(() => b(c));
            Nw(a, (e, f) => {
                f && (c = e);
                d()
            });
            setTimeout(d, a.C)
        } else b(c)
    }

    function Ow(a) {
        a.o || (a.o = b => {
            try {
                {
                    let d;
                    "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                    var c = d.__uspapiReturn
                }
                a.v[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, R(a.m, "message", a.o))
    }
    class Qw extends Zf {
        constructor(a, b = 500) {
            super();
            this.m = a;
            this.j = null;
            this.v = {};
            this.A = 0;
            this.C = b;
            this.o = null
        }
        l() {
            this.v = {};
            this.o && (ee(this.m, "message", this.o), delete this.o);
            delete this.v;
            delete this.m;
            delete this.j;
            super.l()
        }
    };

    function Rw(a) {
        if (a.j) return a.j;
        a.j = rf(a.m, "__tcfapiLocator");
        return a.j
    }

    function Sw(a) {
        return qa(a.m.__tcfapi) || null != Rw(a)
    }

    function Tw(a, b, c, d) {
        if (qa(a.m.__tcfapi)) a = a.m.__tcfapi, a(b, 2, c, d);
        else if (Rw(a)) {
            Uw(a);
            const e = ++a.A;
            a.v[e] = c;
            a.j && a.j.postMessage({
                ["__tcfapiCall"]: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        }
    }

    function Vw(a, b) {
        let c = {};
        const d = Za(() => b(c));
        Tw(a, "addEventListener", (e, f) => {
            f && (c = e);
            e = void 0 !== c.tcString && "string" !== typeof c.tcString || void 0 !== c.gdprApplies && "boolean" !== typeof c.gdprApplies || void 0 !== c.listenerId && "number" !== typeof c.listenerId || void 0 !== c.addtlConsent && "string" !== typeof c.addtlConsent || !c.cmpStatus || "error" === c.cmpStatus ? !1 : !0;
            e && ("loaded" !== c.cmpStatus || "tcloaded" !== c.eventStatus && "useractioncomplete" !== c.eventStatus) || (e || (c.tcString = "tcunavailable"), Tw(a, "removeEventListener",
                () => {}, c.listenerId), d())
        })
    }

    function Uw(a) {
        a.o || (a.o = b => {
            try {
                {
                    let d;
                    "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                    var c = d.__tcfapiReturn
                }
                a.v[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, R(a.m, "message", a.o))
    }
    class Ww extends Zf {
        constructor(a) {
            super();
            this.m = a;
            this.j = null;
            this.v = {};
            this.A = 0;
            this.o = null
        }
        l() {
            this.v = {};
            this.o && (ee(this.m, "message", this.o), delete this.o);
            delete this.v;
            delete this.m;
            delete this.j;
            super.l()
        }
    };

    function qx(a) {
        var b = Nf();
        if (T.G().j(215, !1) && !a.goog_sdr_l) {
            Object.defineProperty(a, "goog_sdr_l", {
                value: !0
            });
            var c = () => {
                const d = hg(37),
                    e = () => {
                        var f = String(Bf(a));
                        try {
                            var g = new ke("gda", b, "pt");
                            g.ya = f;
                            g.win = a;
                            ie(new je(g))
                        } catch (h) {}
                    };
                d ? a.setTimeout(e, d) : e()
            };
            "complete" === a.document.readyState ? c() : R(a, "load", c)
        }
    };
    let tx = void 0;
    class wx extends Zf {
        constructor() {
            super()
        }
        l() {
            super.l()
        }
    };
    var yx = a => {
            const b = a.iframeWin,
                c = a.vars;
            b && (c.google_iframe_start_time = b.google_iframe_start_time);
            const d = new Jf(Yg(a.pubWin), a.pubWin, b, c);
            d.N = Date.now();
            Vj(1, [d.B]);
            a = yi(159, () => xx(d));
            a = a.catch(e => {
                if (!ri.j(159, e, void 0, void 0)) throw e;
            });
            return a.then(() => {
                yi(639, () => {
                    {
                        var e = d.B;
                        const g = d.j;
                        if (g && 1 === e.google_responsive_auto_format && !0 === e.google_full_width_responsive_allowed) {
                            var f;
                            (f = (f = g.document.getElementById(e.google_async_iframe_id)) ? Zd(f) : null) ? (e = new $t(g, f, e), e.l = q.setInterval(ya(e.C,
                                e), 500), e.C(), e = !0) : e = !1
                        } else e = !1
                    }
                    return e
                });
                yi(160, () => {
                    var e = d.iframeWin;
                    !Og(d.B) && e ? fh(e) : (e = Yi().google_jobrunner, bu(e) && e.rl(), hh(d))
                })
            })
        },
        xx = a => {
            if (/_sdo/.test(a.B.google_ad_format)) return Promise.resolve();
            oj(d => Gj(a, d));
            const b = qj();
            Zh(b, 108) && (Uf = Tf);
            const c = !og() && !lc();
            return !c || c && !zx(a, b) ? Ax(a, b) : Promise.resolve()
        };
    const Bx = (a, b, c = !1) => {
        b = Kj(a, b);
        const d = qg() || Jj(Tg(a.pubWin));
        if (!b || -12245933 == b.y || -12245933 == d.width || -12245933 == d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = Tg(a.pubWin);
            e = Hj(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    };

    function Cx(a) {
        try {
            return a.iframeWin.frameElement
        } catch (b) {}
        return null
    }

    function zx(a, b) {
        return Dx(a, b) || Ex(a, b)
    }

    function Dx(a, b) {
        const c = a.B;
        if (!c.google_pause_ad_requests) return !1;
        const d = q.setTimeout(() => {
                Y("abg:cmppar", {
                    client: a.B.google_ad_client,
                    url: a.B.google_page_url
                })
            }, 1E4),
            e = W(450, () => {
                c.google_pause_ad_requests = !1;
                q.clearTimeout(d);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", e);
                zx(a, b) || Ax(a, b)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", e);
        return !0
    }

    function Ex(a, b) {
        const c = a.pubWin.document,
            d = Fx(a);
        if (0 > d.hidden && 0 > d.visible) return !1;
        const e = Cx(a),
            f = e || a.o;
        null == e && null != a.o && Y("ins_no_ifr", {
            sf: a.B.google_enable_single_iframe
        });
        const g = Xj(c);
        if (!f || !g) return !1;
        if (!Yj(c)) return Gx(a, b, d.visible, f);
        if (Bx(a, f) <= d.hidden) return !1;
        let h = W(332, () => {
            !Yj(c) && h && (ee(c, g, h), Gx(a, b, d.visible, f) || Ax(a, b), h = null)
        });
        return R(c, g, h)
    }

    function Fx(a) {
        const b = {
            hidden: 0,
            visible: hg(30) || 4
        };
        a = Ti(a.pubWin);
        var c;
        (c = !q.IntersectionObserver) || (c = Xe(a.j[118]));
        c && (b.visible = -1);
        Ae() && (a = hg(29) || Math.max(Vi(a, 82), 1), b.visible *= a);
        return b
    }

    function Gx(a, b, c, d) {
        if (!d || 0 > c) return !1;
        var e = a.B;
        if (Fk(e) || e.google_reactive_ads_config || !Ij(d) || Bx(a, d) <= c) return !1;
        var f = aj(),
            g = fj(f, 8, {});
        f = fj(f, 9, {});
        e = e.google_ad_section || e.google_ad_region || "";
        g = !g[e] && !f[e];
        e = T.G().j(205, !1) && !!a.pubWin.google_apltlad;
        if (g && !e) return !1;
        a.J = new q.IntersectionObserver((h, k) => {
            Ga(h, l => {
                0 >= l.intersectionRatio || (k.unobserve(l.target), yi(294, () => {
                    Ax(a, b)
                }))
            })
        }, {
            rootMargin: 100 * c + "%"
        });
        a.J.observe(d);
        return !0
    }
    var Ax = (a, b) => {
            yi(326, () => {
                var d = a.B;
                if (Og(d) ? 1 == Mg(d) : !Mg(d)) {
                    var e = (d = !!b.j["1337"]) || b.j["21060549"] || b.j["20040067"] || Zh(b, 87) == tj.Bb,
                        f = u();
                    if (e && f === f.top) {
                        e = xd;
                        var g = b.j["21060549"] && b.j["21060624"],
                            h = b.j["21062272"],
                            k = new Nj;
                        var l = new Oj;
                        var m = Bf(a.pubWin);
                        vd(k, 1, m, 0);
                        m = $h(b).join();
                        vd(k, 5, m, "");
                        vd(k, 2, 1, 0);
                        wd(l, 1, k);
                        k = new Lj;
                        k = vd(k, 10, !0, !1);
                        k = vd(k, 8, g, !1);
                        k = vd(k, 9, g, !1);
                        k = vd(k, 7, g, !1);
                        g = vd(k, 13, g, !1);
                        h = vd(g, 14, h, !1);
                        wd(l, 2, h);
                        f.google_rum_config = e(l);
                        f = f.document;
                        e = Rj(Xg(), "/pagead/js/r20200428/r20190131/rum.js");
                        Qf && d && (e = e.replace("rum", "rum_debug"));
                        d = e;
                        Ie(f, d)
                    } else hi(ti)
                }
            });
            a.B.google_ad_channel = Hx(a, a.B.google_ad_channel);
            a.B.google_tag_partner = Ix(a, a.B.google_tag_partner);
            Jx(a);
            var c = a.B.google_start_time;
            "number" === typeof c && (ku = c, a.B.google_start_time = null);
            yi(161, () => {
                {
                    const f = a.B;
                    null == f.google_ad_output && (f.google_ad_output = "html");
                    if (null != f.google_ad_client) {
                        var d;
                        (d = String(f.google_ad_client)) ? (d = d.toLowerCase()) && "ca-" != d.substring(0, 3) && (d = "ca-" + d): d = "";
                        f.google_ad_client = d
                    }
                    null != f.google_ad_slot &&
                        (f.google_ad_slot = String(f.google_ad_slot));
                    if (null == f.google_flash_version) {
                        try {
                            var e = Vg()
                        } catch (g) {
                            e = "0"
                        }
                        f.google_flash_version = e
                    }
                    f.google_webgl_support = !!S.WebGLRenderingContext;
                    f.google_ad_section = f.google_ad_section || f.google_ad_region || "";
                    f.google_country = f.google_country || f.google_gl || "";
                    e = (new Date).getTime();
                    pa(f.google_color_bg) && (f.google_color_bg = gh(a, f.google_color_bg, e));
                    pa(f.google_color_text) && (f.google_color_text = gh(a, f.google_color_text, e));
                    pa(f.google_color_link) && (f.google_color_link =
                        gh(a, f.google_color_link, e));
                    pa(f.google_color_url) && (f.google_color_url = gh(a, f.google_color_url, e));
                    pa(f.google_color_border) && (f.google_color_border = gh(a, f.google_color_border, e));
                    pa(f.google_color_line) && (f.google_color_line = gh(a, f.google_color_line, e))
                }
            });
            Kx(a);
            if (c = a.B.google_reactive_ads_config)
                if (mr(a.j, c), a.j) Gt(c, a), c = c.page_level_pubvars, ra(c) && ib(a.B, c);
                else return Promise.resolve();
            Fk(a.B) && (Qi() && (a.B.google_adtest = a.B.google_adtest || "on"), a.B.google_pgb_reactive = a.B.google_pgb_reactive ||
                3);
            return Lx(a)
        },
        Kx = a => {
            a.j && (gr(a.j, a.B), er(a.j.location) && sr(a.j, {
                ["enable_page_level_ads"]: {
                    ["pltais"]: !0
                },
                ["google_ad_client"]: a.B.google_ad_client
            }))
        },
        Hx = (a, b) => (b ? [b] : []).concat(ah(a.B).ad_channels || []).join("+"),
        Ix = (a, b) => (b ? [b] : []).concat(ah(a.B).tag_partners || []).join("+"),
        Ox = (a, b, c, d) => {
            const e = d.iframeWin ? d.B.google_container_id : d.o.id;
            c.src = mu(a);
            const f = (d.iframeWin || d.pubWin).document,
                g = f.currentScript || f.scripts && f.scripts[0],
                h = u() == window.top;
            if (lc() || !g && !e) c = Eu(c), h && (sg(d.pubWin),
                q.setTimeout(W(222, () => {
                    const k = f.getElementById(b);
                    k ? d.m.push(sg(d.pubWin, k)) : Y("inabox:no-iframe", {
                        adUrl: a
                    })
                }), 0)), e ? Mx(e, f, c) : f.write(c);
            else {
                const k = ae(new Od(f), "IFRAME");
                U(c, (l, m) => {
                    null != l && k.setAttribute(m, l)
                });
                h && d.m.push(sg(d.pubWin, k));
                e ? Nx(e, f, k) : g.parentNode.insertBefore(k, g.nextSibling)
            }
            T.G().j(236, !1) && !d.B.google_refresh_count && q.setTimeout(W(644, () => {
                Df(f.getElementById(b), () => {
                    q.setTimeout(() => {
                        for (const k of d.m) k();
                        d.m.length = 0
                    }, 200)
                })
            }), 0)
        },
        Px = (a, b, c) => a.j ? or(525, d => {
            (a.iframeWin ?
                a.iframeWin.document.body : a.o).appendChild(b);
            d.createAdSlot(a.j, a.B, c, b);
            return b
        }) : (Y("jserror", {
            context: "ac_crai"
        }), null);

    function Qx(a, b, c, d, e = !1) {
        qx(a.pubWin);
        const f = "string" === typeof b ? (a.iframeWin || a.pubWin).document.getElementById(b) : b;
        if (f) {
            var g = a.j,
                h = a.iframeWin && Og(a.B) ? a.iframeWin.frameElement : f;
            R(f, "load", () => {
                f && f.setAttribute("data-load-complete", !0);
                if ((a.B.ovlp || T.G().j(190, !1)) && g && g === a.pubWin && h) {
                    const l = h.ownerDocument.getElementById(h.id + "_expand");
                    l && Rx(g, a, l, f)
                }
            });
            e = l => {
                l && a.m.push(() => l.Ma())
            };
            var k = Sx(a);
            !g || Fk(a.B) && !Gk(a.B) || (e(new Yv(g, f, h, a.B)), e(Su(a, f)), e(Iu(a, f)), e(g.IntersectionObserver ?
                null : new Qu(g, f, a.o)), e(ew(g, f, a.B, a.T, W(627, l => {
                l || k();
                for (const m of a.m) m();
                a.m.length = 0
            }))));
            g && (e(new ju(g, f, a.B)), a.m.push(Ut(a.iframeWin, g, a.B)), a.m.push(Hu(g, f)), Wt.G().P(g));
            a.A && Tx(a, f, a.pubWin.document);
            Ux(a, c, f);
            f && f.setAttribute("data-google-container-id", d);
            e = a.B.iaaso;
            if (null != e && h) {
                const l = h.ownerDocument.getElementById(h.id + "_expand"),
                    m = l.parentElement;
                (m && Rg.test(m.className) ? m : l).setAttribute("data-auto-ad-size", e)
            }
            Vx(a)
        } else e ? Y("jserror", {
            context: "ac::nfrm",
            url: c
        }) : (e = W(162, () =>
            Qx(a, b, c, d, !0)), q.setTimeout(e, 0))
    }
    var Sx = a => {
        const b = a.iframeWin || a.pubWin;
        if (!b) return () => {};
        const c = a.B.google_ad_client,
            d = hj();
        let e = null;
        const f = Ci(b, "pvt", (g, h) => {
            var k;
            if (k = h.source && "string" === typeof g.token) a: {
                try {
                    let l = h.source;
                    h = b || S;
                    for (let m = 0; 20 > m; m++) {
                        if (l == h) {
                            k = !0;
                            break a
                        }
                        if (l == h.top) break;
                        l = l.parent
                    }
                } catch (l) {}
                k = !1
            }
            k && (e = g.token, f(), d[c] = d[c] || [], d[c].push(e), 100 < d[c].length && d[c].shift())
        });
        return () => {
            e && pa(d[c]) && (Na(d[c], e), d[c].length || delete d[c], e = null)
        }
    };
    const Vx = a => {
            const b = og(a.pubWin);
            if (b)
                if ("AMP-STICKY-AD" === b.container) {
                    const c = a.iframeWin || a.pubWin,
                        d = f => {
                            "fill_sticky" === f.data && (b.renderStart && b.renderStart(), a.iframeWin && ee(c, "message", d))
                        },
                        e = W(616, d, this);
                    R(c, "message", e);
                    a.m.push(() => {
                        ee(c, "message", d)
                    })
                } else b.renderStart && b.renderStart()
        },
        Rx = (a, b, c, d) => {
            av(new jv(a, [5, 8, 9], [3, 4], void 0, 2), c).then(e => {
                Vj(8, [e]);
                return e
            }).then(e => {
                const f = c.parentElement;
                (f && Rg.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
                return e
            }).then(e => {
                const f = b.B.armr || "",
                    g = (ah(b.B).eids || []).join(","),
                    h = e.executionTime || "",
                    k = null == b.B.iaaso ? "" : Number(b.B.iaaso),
                    l = Number(e.isOverlappingOrOutsideViewport),
                    m = Ia(e.entries, r => `${r.overlapType}:${r.overlapDepth}:${r.overlapDetectionPoint}`),
                    p = e.overlappedArea.toFixed(2);
                Y("ovlp", {
                    adf: b.B.google_ad_dom_fingerprint,
                    armr: f,
                    client: b.B.google_ad_client,
                    eid: g,
                    et: h,
                    fwrattr: b.B.google_full_width_responsive,
                    iaaso: k,
                    io: l,
                    saldr: b.B.google_loader_used,
                    oa: p,
                    oe: m.join(","),
                    qid: d.dataset.googleQueryId ||
                        "",
                    rafmt: b.B.google_responsive_auto_format,
                    roa: p * e.targetRect.width * e.targetRect.height,
                    slot: b.B.google_ad_slot,
                    sp: e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                    tgt: Ng(e.target),
                    tr: [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join(),
                    url: b.B.google_page_url,
                    vp: e.viewportSize.width + "x" + e.viewportSize.height
                }, 1)
            }).catch(e => {
                Vj(8, ["Error:", e.message, c]);
                Y("ovlp-err", {
                    err: e.message
                }, 1)
            })
        };
    var Tx = (a, b, c) => {
            if (3 !== Wj(c)) Wx(a.F, b);
            else {
                const d = Xj(c);
                if (d) {
                    let e = () => {
                        ee(c, d, f);
                        e = null
                    };
                    const f = () => {
                        Wx(a.F, b);
                        e && e()
                    };
                    R(c, d, f);
                    a.m.push(() => e && e())
                }
            }
            a.A = !1
        },
        Xx = a => {
            var b = A("Edge") ? 4E3 : 8100;
            var c = a;
            var d = b - 8;
            c.length > b && (c = c.substring(0, d), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
            c !== a && (b -= 8, d = a.lastIndexOf("&", b), -1 === d && (d = a.lastIndexOf("?", b)), b = -1 === d ? "" : a.substring(d + 1), Y("trn", {
                ol: a.length,
                tr: b,
                url: a
            }, .01));
            return c
        },
        Yx = (a, b) => {
            var c = a.B,
                d = Mg(c);
            c = a.iframeWin ?
                "google_ads_frame" + d : c.google_async_iframe_id;
            var e = b,
                f = 0 === a.v;
            b = a.B;
            var g = b.google_async_iframe_id,
                h = a.iframeWin ? "google_ads_frame" + d : g,
                k = b.google_ad_width,
                l = b.google_ad_height,
                m = {
                    id: h,
                    name: h
                };
            a.iframeWin || (m.style = "left:0;position:absolute;top:0;border:0;" + `width:${k}px;` + `height:${l}px;`);
            var p = Bt(b),
                r = !p && !At(b) && dr(b),
                B, y = pf();
            if (B = !(!y["allow-top-navigation-by-user-activation"] || !y["allow-popups-to-escape-sandbox"])) {
                var t = e;
                if (y = "fsb=" + encodeURIComponent("1")) {
                    e = t.indexOf("#");
                    0 > e && (e = t.length);
                    var E = t.indexOf("?");
                    if (0 > E || E > e) {
                        E = e;
                        var K = ""
                    } else K = t.substring(E + 1, e);
                    t = [t.substr(0, E), K, t.substr(e)];
                    e = t[1];
                    t[1] = y ? e ? e + "&" + y : y : e;
                    e = t[0] + (t[1] ? "?" + t[1] : "") + t[2]
                } else e = t;
                y = m;
                t = of ().join(" ");
                y.sandbox = t
            }
            t = e;
            e = Xx(e);
            K = f ? e.replace(/&ea=[^&]*/, "") + "&ea=0" : e;
            Gu(m, k, l, mu(K));
            y = Eu(m);
            E = "";
            if (f) {
                E = 10;
                for (K = ""; 0 < E--;) K += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 * Math.random()));
                E = K;
                e = Ai(e, E);
                Ai(t, E)
            } else e = K;
            b.dash && (m.srcdoc = b.dash);
            T.G().j(312, !1) && void 0 ===
                tx && (document.hasTrustToken ? tx = new wx(a.pubWin) : tx = null);
            t = null;
            p ? (m = e, t = g, K = a.B, p = K.google_ad_width, r = K.google_ad_height, K = K.google_reactive_sra_index, p && r && null != K ? (K = a.iframeWin ? "google_ads_frame_rsra_" + K : a.B.google_async_iframe_id, K = {
                id: K,
                name: K
            }, B && (B = of ().join(" "), K.sandbox = B), Gu(K, p, r, m), B = Du(K), t = Px(a, B, t)) : t = null) : r ? (B = m, t = g, B.src = mu(e), B = Du(B), t = Px(a, B, t)) : Ox(e, h, m, a);
            f && (f = h, h = e, B = E, E = g, e = Qj(Xg(), "/pagead/js/r20200428/r20190131/creativetoolset/xpc_expansion_embed.js"),
                d = {
                    id: f,
                    url: h,
                    width: k,
                    height: l,
                    Jb: B,
                    sd: a.pubWin,
                    Gc: E || void 0,
                    uh: "google_expandable_ad_slot" + d,
                    dd: e,
                    jb: a.iframeWin || a.pubWin
                }, d = !d.id || !d.url || 0 >= d.width || 0 >= d.height || !d.Jb || !d.jb ? void 0 : Hi(d.jb, za(Ji, d, e)), d && a.m.push(d));
            if (a.iframeWin && Og(b)) {
                a = g;
                d = ["<!DOCTYPE html><html><body>", y, "</body></html>"].join("");
                d = String(d);
                b = ['"'];
                for (g = 0; g < d.length; g++) {
                    k = d.charAt(g);
                    f = k.charCodeAt(0);
                    l = g + 1;
                    if (!(h = Lc[k])) {
                        if (!(31 < f && 127 > f))
                            if (f = k, f in Nc) k = Nc[f];
                            else if (f in Lc) k = Nc[f] = Lc[f];
                        else {
                            h = f.charCodeAt(0);
                            if (31 < h && 127 > h) k = f;
                            else {
                                if (256 > h) {
                                    if (k = "\\x", 16 > h || 256 < h) k += "0"
                                } else k = "\\u", 4096 > h && (k += "0");
                                k += h.toString(16).toUpperCase()
                            }
                            k = Nc[f] = k
                        }
                        h = k
                    }
                    b[l] = h
                }
                b.push('"');
                d = "javascript:" + b.join("");
                b = u();
                (new nu(b)).set(a, d)
            }
            return (a = t) || c
        },
        Ux = (a, b, c) => {
            const d = !mc() || 0 <= Ib(qc(), 11) ? Ba() : lk();
            d.getOseId() && (Aa(), d.registerAdBlock(b, 1, "", c), a.m.push(() => {
                d.unloadAdBlock(c, !!a.B.google_refresh_count, !0)
            }))
        };
    const ay = (a, b, c) => {
            var d = a.B;
            const e = a.pubWin;
            let f = null;
            try {
                f = e.localStorage
            } catch (k) {}
            let g = "";
            Bt(d) ? (g = Jg({
                ["adk"]: d.google_ad_unit_key,
                ["client"]: d.google_ad_client,
                ["fa"]: d.google_reactive_ad_format
            }, Fu("RS-" + d.google_reactive_sra_index + "-")), Cw(d, aj()), Zx(d)) : (At(d) || !dr(d) || cr(e, d, f)) && Zx(d) && (g = Gw(a, b));
            Vj(2, [d, g]);
            b && b.id == c && b && b.parentNode && b.parentNode.removeChild(b);
            if (g) {
                Og(d) || Lg(e);
                c = Mg(d);
                var h = q.window === q.window.top ? "a!" + c.toString(36) : `${c.toString(36)}.${Math.floor(2147483648* 
Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^+new Date).toString(36)}`;
                b = b ? 0 < Bx(a, b, !0) : !1;
                c = {
                    ["ifi"]: c,
                    ["uci"]: h
                };
                b && (b = aj(), c.btvi = fj(b, 21, 1), gj(b, 21));
                g = Jg(c, g);
                c = T.G().j(284, !1);
                d = T.G().j(283, !1);
                (c || d) && zi("cr_urlbuilt", c);
                b = Yx(a, g);
                g = Xx(g);
                $x(a, Cx(a) || a.o);
                (c || d) && zi("cr_postwrite", c);
                c = k => {
                    Qx(a, k, g, h)
                };
                "string" === typeof b ? c(b) : b.then(c).then(null, k => {
                    ri.j(223, k, void 0, void 0)
                })
            }
        },
        by = (a, b, c, d) => {
            var e = a.B;
            e = "aa" === e.google_loader_used || "sa" === e.google_loader_used;
            const f = W(449, d);
            e && (oc() ? 0 <= Ib(qc(), 11) : nc() && 0 <= Ib(qc(), 65)) ? (Bu(() => {
                f(a, b, c)
            }), a.D = Bu) : d(a, b, c)
        },
        dy = (a, b, c, d) => {
            T.G().j(259, !1) ? Pw(new Qw(a.pubWin), e => {
                e && "string" === typeof e.uspString && (a.I = e.uspString);
                cy(a, b, c, d)
            }) : cy(a, b, c, d)
        };

    function ey(a, b, c, d) {
        const e = new Ww(a.pubWin);
        T.G().j(279, !1) && Sw(e) ? Vw(e, f => {
            a.tcString = f.tcString;
            a.gdprApplies = f.gdprApplies;
            a.addtlConsent = f.addtlConsent || "";
            dy(a, b, c, d)
        }) : dy(a, b, c, d)
    }
    const cy = (a, b, c, d) => {
        var e = a.B;
        const f = "aa" === e.google_loader_used || "sa" === e.google_loader_used,
            g = e.google_ad_client;
        e = Hf(Sf, g);
        if (f && e.jc) {
            const h = q.setTimeout(() => {
                Y("abg:cmpnc", {
                    client: a.B.google_ad_client,
                    url: a.B.google_page_url,
                    consent: JSON.stringify(Hf(Sf, g))
                })
            }, 1E4);
            If(Sf, g, W(450, k => {
                q.clearTimeout(h);
                a.C = k;
                by(a, b, c, d)
            }))
        } else a.C = e, by(a, b, c, d)
    };
    var fy = (a, b, c) => (new Promise(d => {
            su = u;
            xu();
            qu.test(".google.cn") && !ru.test(".google.cn") && (wu[1] = ".google.cn");
            const e = () => {
                    ey(a, b, c, (g, h, k) => {
                        d([g, h, k])
                    })
                },
                f = g => {
                    qf(q.top, "googlefcLoaded") ? g() : q.setTimeout(() => {
                        f(W(679, g))
                    }, 500)
                };
            (q.googlefc || qf(q.top, "googlefcPresent")) && T.G().j(304, !1) ? f(e) : e()
        })).then(d => {
            let [e, f, g] = d;
            ay(e, f, g)
        }),
        Lx = a => {
            var b = a.B.google_ad_width;
            var c = a.B.google_ad_height,
                d = a.pubWin.document,
                e = a.B,
                f = 0;
            try {
                !1 === e.google_allow_expandable_ads &&
                    (f |= 1);
                if (!d.body || isNaN(e.google_ad_height) || isNaN(e.google_ad_width) || a.iframeWin && d.domain != a.iframeWin.location.hostname || !/^http/.test(d.location.protocol)) f |= 2;
                a: {
                    e = navigator;
                    var g = e.userAgent;
                    const k = e.platform,
                        l = /WebKit\/(\d+)/,
                        m = /rv:(\d+\.\d+)/,
                        p = /rv:1\.8([^.]|\.0)/;
                    if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && !/^Opera/.test(g)) {
                        const r = (l.exec(g) || [0, 0])[1],
                            B = (m.exec(g) || [0, 0])[1];
                        if (/Win/.test(k) && /Trident/.test(g) && 11 <= d.documentMode || !r && "Gecko" === e.product && 27 <= B && !p.test(g) || 536 <= r) {
                            var h = !0;
                            break a
                        }
                    }
                    h = !1
                }
                h || (f |= 4)
            } catch (k) {
                f |= 8
            }
            h = f;
            nk(a.pubWin, a.pubWin.document, b, c) && (h |= 2);
            b = h;
            a.v = b;
            0 === a.v || (a.B.google_allow_expandable_ads = !1);
            Yi() != a.pubWin && (a.l |= 4);
            Uf && (a.l |= 16);
            Rf && (a.l |= 8);
            3 === Wj(a.pubWin.document) && (a.l |= 32);
            if (b = a.j) b = a.j, b = !(Z(b).scrollWidth <= Z(b).clientWidth);
            b && (a.l |= 1024);
            null == a.iframeWin && (a.l |= 8192);
            a.B.google_loader_features_used && (a.l |= a.B.google_loader_features_used);
            jk = gk();
            bk = Vf;
            ak = Wf;
            b = !mc() || 0 <= Ib(qc(), 11) ? Ba() : lk();
            c = aj();
            a.H = b.setupOse(fj(c, 7, $i()));
            b = "";
            (c = a.B.google_async_iframe_id) && null == a.iframeWin ? c = a.o : c ? c = a.pubWin.document.getElementById(c) : (c = b = "google_temp_span", h = a.B.google_container_id, f = a.iframeWin.document, g = h && f.getElementById(h) || f.getElementById(c), g || h || !c || (f.write("<span id=" + c + "></span>"), g = f.getElementById(c)), c = g);
            return fy(a, c, b)
        },
        Nx = (a, b, c) => {
            if (a = b.getElementById(a)) {
                for (a.style.visibility = "visible"; b = a.firstChild;) a.removeChild(b);
                a.appendChild(c)
            }
        },
        Mx = (a, b, c) => {
            a && (a = b.getElementById(a)) && c && (a.style.visibility = "visible",
                a.innerHTML = c)
        },
        Wx = (a, b) => {
            var c = b.src,
                d = c.indexOf("/pagead/blank.gif#?");
            a = -1 === d ? c : a + c.substr(d + 19);
            a !== c && (c = b.nextSibling, d = b.parentNode, d.removeChild(b), b.src = a, d.insertBefore(b, c))
        },
        Zx = a => {
            const b = aj(),
                c = a.google_ad_section;
            Fk(a) && gj(b, 15);
            if (Wg(a)) {
                if (100 < gj(b, 5)) return !1
            } else if (100 < gj(b, 6) - fj(b, 15, 0) && "" == c) return !1;
            return !0
        },
        $x = (a, b) => {
            b && a.B.rpe && Sv(a.pubWin, b, {
                height: a.B.google_ad_height,
                zb: "force",
                Hb: !0,
                ec: !0,
                Fb: a.B.google_ad_client
            })
        },
        Jx = a => {
            const b = a.j;
            if (b && !ah(b).ads_density_stats_processed &&
                !og(b) && (ah(b).ads_density_stats_processed = !0, T.G().j(290, !1) || .01 > Ne(b))) {
                const c = () => {
                    if (b) {
                        var d = ss(ns(b), a.B.google_ad_client, b.location.hostname, ah(a.B).eids || []);
                        Y("ama_stats", d, 1)
                    }
                };
                "complete" === b.document.readyState ? q.setTimeout(c, 1E3) : R(b, "load", () => {
                    q.setTimeout(c, 1E3)
                })
            }
        }; {
        (() => {
            var b = [Zt, Yt, rj, xi];
            ri.l = c => {
                Ga(b, d => {
                    d(c)
                });
                ui(c);
                vi(c)
            }
        })();
        const a = q.google_sl_win || q;
        a.google_sa_impl || (a.google_sa_impl = yx, Kw(Iw(a)), a.google_process_slots && a.google_process_slots())
    };
}).call(this, window, document, location)