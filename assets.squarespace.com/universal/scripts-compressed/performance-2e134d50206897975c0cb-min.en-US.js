(function(n) {
    var r = {};

    function i(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: false,
            exports: {}
        };
        n[e].call(t.exports, t, t.exports, i);
        t.l = true;
        return t.exports
    }
    i.m = n;
    i.c = r;
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: true,
            get: n
        })
    };
    i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    };
    i.t = function(t, e) {
        1 & e && (t = i(t));
        if (8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        i.r(n);
        Object.defineProperty(n, "default", {
            enumerable: true,
            value: t
        });
        if (2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    };
    i.n = function(t) {
        var e = t && t.__esModule ? function e() {
            return t["default"]
        } : function e() {
            return t
        };
        i.d(e, "a", e);
        return e
    };
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    i.p = "https://assets.squarespace.com/universal/scripts-compressed/";
    return i(i.s = "./src/main/webapp/universal/src/apps/Performance/bootstrap.js")
})({
    "./node_modules/process/browser.js": function(e, t) {
        var n = e.exports = {};
        var r;
        var i;

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }(function() {
            try {
                r = "function" === typeof setTimeout ? setTimeout : o
            } catch (e) {
                r = o
            }
            try {
                i = "function" === typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                i = a
            }
        })();

        function s(t) {
            if (r === setTimeout) return setTimeout(t, 0);
            if ((r === o || !r) && setTimeout) {
                r = setTimeout;
                return setTimeout(t, 0)
            }
            try {
                return r(t, 0)
            } catch (e) {
                try {
                    return r.call(null, t, 0)
                } catch (e) {
                    return r.call(this, t, 0)
                }
            }
        }

        function u(t) {
            if (i === clearTimeout) return clearTimeout(t);
            if ((i === a || !i) && clearTimeout) {
                i = clearTimeout;
                return clearTimeout(t)
            }
            try {
                return i(t)
            } catch (e) {
                try {
                    return i.call(null, t)
                } catch (e) {
                    return i.call(this, t)
                }
            }
        }
        var c = [];
        var f = false;
        var l;
        var d = -1;

        function p() {
            if (!f || !l) return;
            f = false;
            l.length ? c = l.concat(c) : d = -1;
            c.length && v()
        }

        function v() {
            if (f) return;
            var e = s(p);
            f = true;
            var t = c.length;
            while (t) {
                l = c;
                c = [];
                while (++d < t) l && l[d].run();
                d = -1;
                t = c.length
            }
            l = null;
            f = false;
            u(e)
        }
        n.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            c.push(new h(e, t));
            1 !== c.length || f || s(v)
        };

        function h(e, t) {
            this.fun = e;
            this.array = t
        }
        h.prototype.run = function() {
            this.fun.apply(null, this.array)
        };
        n.title = "browser";
        n.browser = true;
        n.env = {};
        n.argv = [];
        n.version = "";
        n.versions = {};

        function m() {}
        n.on = m;
        n.addListener = m;
        n.once = m;
        n.off = m;
        n.removeListener = m;
        n.removeAllListeners = m;
        n.emit = m;
        n.prependListener = m;
        n.prependOnceListener = m;
        n.listeners = function(e) {
            return []
        };
        n.binding = function(e) {
            throw new Error("process.binding is not supported")
        };
        n.cwd = function() {
            return "/"
        };
        n.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        };
        n.umask = function() {
            return 0
        }
    },
    "./node_modules/webpack/buildin/global.js": function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" === typeof window && (n = window)
        }
        e.exports = n
    },
    "./node_modules/webpack/buildin/harmony-module.js": function(e, t) {
        e.exports = function(e) {
            if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []);
                Object.defineProperty(t, "loaded", {
                    enumerable: true,
                    get: function() {
                        return t.l
                    }
                });
                Object.defineProperty(t, "id", {
                    enumerable: true,
                    get: function() {
                        return t.i
                    }
                });
                Object.defineProperty(t, "exports", {
                    enumerable: true
                });
                t.webpackPolyfill = 1
            }
            return t
        }
    },
    "./src/main/webapp/universal/node_modules/@babel/runtime/helpers/defineProperty.js": function(e, t) {
        function n(e, t, n) {
            t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
            }) : e[t] = n;
            return e
        }
        e.exports = n
    },
    "./src/main/webapp/universal/node_modules/@babel/runtime/helpers/interopRequireDefault.js": function(e, t) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = n
    },
    "./src/main/webapp/universal/node_modules/@babel/runtime/helpers/interopRequireWildcard.js": function(e, t) {
        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                        r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                    }
            t["default"] = e;
            return t
        }
        e.exports = n
    },
    "./src/main/webapp/universal/node_modules/@sentry/browser/esm/index.js": function(e, t, n) {
        "use strict";
        n.r(t);
        n.d(t, "Severity", function() {
            return c["a"]
        });
        n.d(t, "Status", function() {
            return a
        });
        n.d(t, "addGlobalEventProcessor", function() {
            return s["b"]
        });
        n.d(t, "addBreadcrumb", function() {
            return h
        });
        n.d(t, "captureException", function() {
            return l
        });
        n.d(t, "captureEvent", function() {
            return p
        });
        n.d(t, "captureMessage", function() {
            return d
        });
        n.d(t, "configureScope", function() {
            return v
        });
        n.d(t, "getHubFromCarrier", function() {
            return f["c"]
        });
        n.d(t, "getCurrentHub", function() {
            return f["b"]
        });
        n.d(t, "Hub", function() {
            return f["a"]
        });
        n.d(t, "Scope", function() {
            return s["a"]
        });
        n.d(t, "setContext", function() {
            return y
        });
        n.d(t, "setExtra", function() {
            return b
        });
        n.d(t, "setExtras", function() {
            return g
        });
        n.d(t, "setTag", function() {
            return w
        });
        n.d(t, "setTags", function() {
            return _
        });
        n.d(t, "setUser", function() {
            return E
        });
        n.d(t, "withScope", function() {
            return S
        });
        n.d(t, "BrowserClient", function() {
            return he
        });
        n.d(t, "defaultIntegrations", function() {
            return De
        });
        n.d(t, "forceLoad", function() {
            return Ue
        });
        n.d(t, "init", function() {
            return Ne
        });
        n.d(t, "lastEventId", function() {
            return Be
        });
        n.d(t, "onLoad", function() {
            return Fe
        });
        n.d(t, "showReportDialog", function() {
            return Me
        });
        n.d(t, "flush", function() {
            return qe
        });
        n.d(t, "close", function() {
            return He
        });
        n.d(t, "wrap", function() {
            return ze
        });
        n.d(t, "SDK_NAME", function() {
            return pe
        });
        n.d(t, "SDK_VERSION", function() {
            return ve
        });
        n.d(t, "Integrations", function() {
            return Ve
        });
        n.d(t, "Transports", function() {
            return o
        });
        var r = {};
        n.r(r);
        n.d(r, "FunctionToString", function() {
            return ye
        });
        n.d(r, "InboundFilters", function() {
            return _e
        });
        var i = {};
        n.r(i);
        n.d(i, "GlobalHandlers", function() {
            return Ie
        });
        n.d(i, "TryCatch", function() {
            return Te
        });
        n.d(i, "Breadcrumbs", function() {
            return xe
        });
        n.d(i, "LinkedErrors", function() {
            return Ce
        });
        n.d(i, "UserAgent", function() {
            return Le
        });
        var o = {};
        n.r(o);
        n.d(o, "BaseTransport", function() {
            return ue
        });
        n.d(o, "FetchTransport", function() {
            return fe
        });
        n.d(o, "XHRTransport", function() {
            return le
        });
        var m = n("./src/main/webapp/universal/node_modules/tslib/tslib.es6.js");
        var c = n("./src/main/webapp/universal/node_modules/@sentry/types/esm/severity.js");
        var a;
        (function(e) {
            e["Unknown"] = "unknown";
            e["Skipped"] = "skipped";
            e["Success"] = "success";
            e["RateLimit"] = "rate_limit";
            e["Invalid"] = "invalid";
            e["Failed"] = "failed"
        })(a = a || {});
        (function(t) {
            function e(e) {
                if (e >= 200 && e < 300) return t.Success;
                if (429 === e) return t.RateLimit;
                if (e >= 400 && e < 500) return t.Invalid;
                if (e >= 500) return t.Failed;
                return t.Unknown
            }
            t.fromHttpCode = e
        })(a = a || {});
        var s = n("./src/main/webapp/universal/node_modules/@sentry/hub/esm/scope.js");
        var f = n("./src/main/webapp/universal/node_modules/@sentry/hub/esm/hub.js");

        function u(e) {
            var t = [];
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = Object(f["b"])();
            if (r && r[e]) return r[e].apply(r, m["__spread"](t));
            throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
        }

        function l(e) {
            var t;
            try {
                throw new Error("Sentry syntheticException")
            } catch (e) {
                t = e
            }
            return u("captureException", e, {
                originalException: e,
                syntheticException: t
            })
        }

        function d(e, t) {
            var n;
            try {
                throw new Error(e)
            } catch (e) {
                n = e
            }
            return u("captureMessage", e, t, {
                originalException: e,
                syntheticException: n
            })
        }

        function p(e) {
            return u("captureEvent", e)
        }

        function v(e) {
            u("configureScope", e)
        }

        function h(e) {
            u("addBreadcrumb", e)
        }

        function y(e, t) {
            u("setContext", e, t)
        }

        function g(e) {
            u("setExtras", e)
        }

        function _(e) {
            u("setTags", e)
        }

        function b(e, t) {
            u("setExtra", e, t)
        }

        function w(e, t) {
            u("setTag", e, t)
        }

        function E(e) {
            u("setUser", e)
        }

        function S(e) {
            u("withScope", e)
        }

        function O(e) {
            var t = [];
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.apply(void 0, m["__spread"](["_invokeClient", e], t))
        }
        var T = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/dsn.js");
        var j = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/object.js");
        var x = "7";
        var k = function() {
            function e(e) {
                this.dsn = e;
                this._dsnObject = new T["a"](e)
            }
            e.prototype.getDsn = function() {
                return this._dsnObject
            };
            e.prototype.getStoreEndpoint = function() {
                return "" + this._getBaseUrl() + this.getStoreEndpointPath()
            };
            e.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                var e = this._dsnObject;
                var t = {
                    sentry_key: e.user,
                    sentry_version: x
                };
                return this.getStoreEndpoint() + "?" + Object(j["f"])(t)
            };
            e.prototype._getBaseUrl = function() {
                var e = this._dsnObject;
                var t = e.protocol ? e.protocol + ":" : "";
                var n = e.port ? ":" + e.port : "";
                return t + "//" + e.host + n
            };
            e.prototype.getStoreEndpointPath = function() {
                var e = this._dsnObject;
                return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
            };
            e.prototype.getRequestHeaders = function(e, t) {
                var n = this._dsnObject;
                var r = ["Sentry sentry_version=" + x];
                r.push("sentry_client=" + e + "/" + t);
                r.push("sentry_key=" + n.user);
                n.pass && r.push("sentry_secret=" + n.pass);
                return {
                    "Content-Type": "application/json",
                    "X-Sentry-Auth": r.join(", ")
                }
            };
            e.prototype.getReportDialogEndpoint = function(e) {
                void 0 === e && (e = {});
                var t = this._dsnObject;
                var n = this._getBaseUrl() + (t.path ? "/" + t.path : "") + "/api/embed/error-page/";
                var r = [];
                r.push("dsn=" + t.toString());
                for (var i in e)
                    if ("user" === i) {
                        if (!e.user) continue;
                        e.user.name && r.push("name=" + encodeURIComponent(e.user.name));
                        e.user.email && r.push("email=" + encodeURIComponent(e.user.email))
                    } else r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
                if (r.length) return n + "?" + r.join("&");
                return n
            };
            return e
        }();
        var I = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/logger.js");
        var P = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js");
        var R = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/syncpromise.js");
        var C = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/string.js");
        var A = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js");
        var L = [];

        function D(e) {
            var t = e.defaultIntegrations && m["__spread"](e.defaultIntegrations) || [];
            var n = e.integrations;
            var r = [];
            if (Array.isArray(n)) {
                var i = n.map(function(e) {
                    return e.name
                });
                var o = [];
                t.forEach(function(e) {
                    if (-1 === i.indexOf(e.name) && -1 === o.indexOf(e.name)) {
                        r.push(e);
                        o.push(e.name)
                    }
                });
                n.forEach(function(e) {
                    if (-1 === o.indexOf(e.name)) {
                        r.push(e);
                        o.push(e.name)
                    }
                })
            } else if ("function" === typeof n) {
                r = n(t);
                r = Array.isArray(r) ? r : [r]
            } else r = m["__spread"](t);
            var a = r.map(function(e) {
                return e.name
            });
            var s = "Debug"; - 1 !== a.indexOf(s) && r.push.apply(r, m["__spread"](r.splice(a.indexOf(s), 1)));
            return r
        }

        function N(e) {
            if (-1 !== L.indexOf(e.name)) return;
            e.setupOnce(s["b"], f["b"]);
            L.push(e.name);
            I["a"].log("Integration installed: " + e.name)
        }

        function M(e) {
            var t = {};
            D(e).forEach(function(e) {
                t[e.name] = e;
                N(e)
            });
            return t
        }
        var B = function() {
            function e(e, t) {
                this._integrations = {};
                this._processing = false;
                this._backend = new e(t);
                this._options = t;
                t.dsn && (this._dsn = new T["a"](t.dsn))
            }
            e.prototype.captureException = function(e, t, n) {
                var r = this;
                var i = t && t.event_id;
                this._processing = true;
                this._getBackend().eventFromException(e, t).then(function(e) {
                    return r._processEvent(e, t, n)
                }).then(function(e) {
                    i = e && e.event_id;
                    r._processing = false
                }).then(null, function(e) {
                    I["a"].error(e);
                    r._processing = false
                });
                return i
            };
            e.prototype.captureMessage = function(e, t, n, r) {
                var i = this;
                var o = n && n.event_id;
                this._processing = true;
                var a = Object(P["i"])(e) ? this._getBackend().eventFromMessage("" + e, t, n) : this._getBackend().eventFromException(e, n);
                a.then(function(e) {
                    return i._processEvent(e, n, r)
                }).then(function(e) {
                    o = e && e.event_id;
                    i._processing = false
                }).then(null, function(e) {
                    I["a"].error(e);
                    i._processing = false
                });
                return o
            };
            e.prototype.captureEvent = function(e, t, n) {
                var r = this;
                var i = t && t.event_id;
                this._processing = true;
                this._processEvent(e, t, n).then(function(e) {
                    i = e && e.event_id;
                    r._processing = false
                }).then(null, function(e) {
                    I["a"].error(e);
                    r._processing = false
                });
                return i
            };
            e.prototype.getDsn = function() {
                return this._dsn
            };
            e.prototype.getOptions = function() {
                return this._options
            };
            e.prototype.flush = function(e) {
                var n = this;
                return this._isClientProcessing(e).then(function(t) {
                    clearInterval(t.interval);
                    return n._getBackend().getTransport().close(e).then(function(e) {
                        return t.ready && e
                    })
                })
            };
            e.prototype.close = function(e) {
                var t = this;
                return this.flush(e).then(function(e) {
                    t.getOptions().enabled = false;
                    return e
                })
            };
            e.prototype.setupIntegrations = function() {
                this._isEnabled() && (this._integrations = M(this._options))
            };
            e.prototype.getIntegration = function(t) {
                try {
                    return this._integrations[t.id] || null
                } catch (e) {
                    I["a"].warn("Cannot retrieve integration " + t.id + " from the current Client");
                    return null
                }
            };
            e.prototype._isClientProcessing = function(i) {
                var o = this;
                return new R["a"](function(e) {
                    var t = 0;
                    var n = 1;
                    var r = 0;
                    clearInterval(r);
                    r = setInterval(function() {
                        if (o._processing) {
                            t += n;
                            i && t >= i && e({
                                interval: r,
                                ready: false
                            })
                        } else e({
                            interval: r,
                            ready: true
                        })
                    }, n)
                })
            };
            e.prototype._getBackend = function() {
                return this._backend
            };
            e.prototype._isEnabled = function() {
                return false !== this.getOptions().enabled && void 0 !== this._dsn
            };
            e.prototype._prepareEvent = function(e, t, n) {
                var r = this;
                var i = this.getOptions(),
                    o = i.environment,
                    a = i.release,
                    s = i.dist,
                    u = i.maxValueLength,
                    c = void 0 === u ? 250 : u,
                    f = i.normalizeDepth,
                    l = void 0 === f ? 3 : f;
                var d = m["__assign"]({}, e);
                void 0 === d.environment && void 0 !== o && (d.environment = o);
                void 0 === d.release && void 0 !== a && (d.release = a);
                void 0 === d.dist && void 0 !== s && (d.dist = s);
                d.message && (d.message = Object(C["d"])(d.message, c));
                var p = d.exception && d.exception.values && d.exception.values[0];
                p && p.value && (p.value = Object(C["d"])(p.value, c));
                var v = d.request;
                v && v.url && (v.url = Object(C["d"])(v.url, c));
                void 0 === d.event_id && (d.event_id = n && n.event_id ? n.event_id : Object(A["q"])());
                this._addIntegrations(d.sdk);
                var h = R["a"].resolve(d);
                t && (h = t.applyToEvent(d, n));
                return h.then(function(e) {
                    if ("number" === typeof l && l > 0) return r._normalizeEvent(e, l);
                    return e
                })
            };
            e.prototype._normalizeEvent = function(e, t) {
                if (!e) return null;
                return m["__assign"]({}, e, e.breadcrumbs && {
                    breadcrumbs: e.breadcrumbs.map(function(e) {
                        return m["__assign"]({}, e, e.data && {
                            data: Object(j["d"])(e.data, t)
                        })
                    })
                }, e.user && {
                    user: Object(j["d"])(e.user, t)
                }, e.contexts && {
                    contexts: Object(j["d"])(e.contexts, t)
                }, e.extra && {
                    extra: Object(j["d"])(e.extra, t)
                })
            };
            e.prototype._addIntegrations = function(e) {
                var t = Object.keys(this._integrations);
                e && t.length > 0 && (e.integrations = t)
            };
            e.prototype._processEvent = function(e, a, t) {
                var s = this;
                var n = this.getOptions(),
                    u = n.beforeSend,
                    r = n.sampleRate;
                if (!this._isEnabled()) return R["a"].reject("SDK not enabled, will not send event.");
                if ("number" === typeof r && Math.random() > r) return R["a"].reject("This event has been sampled, will not send event.");
                return new R["a"](function(i, o) {
                    s._prepareEvent(e, t, a).then(function(e) {
                        if (null === e) {
                            o("An event processor returned null, will not send event.");
                            return
                        }
                        var t = e;
                        var n = a && a.data && true === a.data.__sentry__;
                        if (n || !u) {
                            s._getBackend().sendEvent(t);
                            i(t);
                            return
                        }
                        var r = u(e, a);
                        if ("undefined" === typeof r) I["a"].error("`beforeSend` method has to return `null` or a valid event.");
                        else if (Object(P["m"])(r)) s._handleAsyncBeforeSend(r, i, o);
                        else {
                            t = r;
                            if (null === t) {
                                I["a"].log("`beforeSend` returned `null`, will not send event.");
                                i(null);
                                return
                            }
                            s._getBackend().sendEvent(t);
                            i(t)
                        }
                    }).then(null, function(e) {
                        s.captureException(e, {
                            data: {
                                __sentry__: true
                            },
                            originalException: e
                        });
                        o("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
                    })
                })
            };
            e.prototype._handleAsyncBeforeSend = function(e, t, n) {
                var r = this;
                e.then(function(e) {
                    if (null === e) {
                        n("`beforeSend` returned `null`, will not send event.");
                        return
                    }
                    r._getBackend().sendEvent(e);
                    t(e)
                }).then(null, function(e) {
                    n("beforeSend rejected with " + e)
                })
            };
            return e
        }();
        var U = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/error.js");
        var F = function() {
            function e() {}
            e.prototype.sendEvent = function(e) {
                return R["a"].resolve({
                    reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                    status: a.Skipped
                })
            };
            e.prototype.close = function(e) {
                return R["a"].resolve(true)
            };
            return e
        }();
        var q = function() {
            function e(e) {
                this._options = e;
                this._options.dsn || I["a"].warn("No DSN provided, backend will not do anything.");
                this._transport = this._setupTransport()
            }
            e.prototype._setupTransport = function() {
                return new F
            };
            e.prototype.eventFromException = function(e, t) {
                throw new U["a"]("Backend has to implement `eventFromException` method")
            };
            e.prototype.eventFromMessage = function(e, t, n) {
                throw new U["a"]("Backend has to implement `eventFromMessage` method")
            };
            e.prototype.sendEvent = function(e) {
                this._transport.sendEvent(e).then(null, function(e) {
                    I["a"].error("Error while sending event: " + e)
                })
            };
            e.prototype.getTransport = function() {
                return this._transport
            };
            return e
        }();
        var H = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/supports.js");
        var z = "?";
        var Y = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
        var W = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i;
        var V = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
        var X = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
        var G = /\((\S*)(?::(\d+))(?::(\d+))\)/;

        function K(e) {
            var t = null;
            var n = e && e.framesToPop;
            try {
                t = $(e);
                if (t) return Z(t, n)
            } catch (e) {}
            try {
                t = J(e);
                if (t) return Z(t, n)
            } catch (e) {}
            return {
                message: Q(e),
                name: e && e.name,
                stack: [],
                failed: true
            }
        }

        function J(e) {
            if (!e || !e.stack) return null;
            var t = [];
            var n = e.stack.split("\n");
            var r;
            var i;
            var o;
            var a;
            for (var s = 0; s < n.length; ++s) {
                if (o = Y.exec(n[s])) {
                    var u = o[2] && 0 === o[2].indexOf("native");
                    r = o[2] && 0 === o[2].indexOf("eval");
                    if (r && (i = G.exec(o[2]))) {
                        o[2] = i[1];
                        o[3] = i[2];
                        o[4] = i[3]
                    }
                    a = {
                        url: o[2] && 0 === o[2].indexOf("address at ") ? o[2].substr("address at ".length) : o[2],
                        func: o[1] || z,
                        args: u ? [o[2]] : [],
                        line: o[3] ? +o[3] : null,
                        column: o[4] ? +o[4] : null
                    }
                } else if (o = V.exec(n[s])) a = {
                    url: o[2],
                    func: o[1] || z,
                    args: [],
                    line: +o[3],
                    column: o[4] ? +o[4] : null
                };
                else {
                    if (!(o = W.exec(n[s]))) continue;
                    r = o[3] && o[3].indexOf(" > eval") > -1;
                    if (r && (i = X.exec(o[3]))) {
                        o[1] = o[1] || "eval";
                        o[3] = i[1];
                        o[4] = i[2];
                        o[5] = ""
                    } else 0 !== s || o[5] || void 0 === e.columnNumber || (t[0].column = e.columnNumber + 1);
                    a = {
                        url: o[3],
                        func: o[1] || z,
                        args: o[2] ? o[2].split(",") : [],
                        line: o[4] ? +o[4] : null,
                        column: o[5] ? +o[5] : null
                    }
                }!a.func && a.line && (a.func = z);
                t.push(a)
            }
            if (!t.length) return null;
            return {
                message: Q(e),
                name: e.name,
                stack: t
            }
        }

        function $(e) {
            if (!e || !e.stacktrace) return null;
            var t = e.stacktrace;
            var n = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
            var r = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i;
            var i = t.split("\n");
            var o = [];
            var a;
            for (var s = 0; s < i.length; s += 2) {
                var u = null;
                (a = n.exec(i[s])) ? u = {
                    url: a[2],
                    func: a[3],
                    args: [],
                    line: +a[1],
                    column: null
                }: (a = r.exec(i[s])) && (u = {
                    url: a[6],
                    func: a[3] || a[4],
                    args: a[5] ? a[5].split(",") : [],
                    line: +a[1],
                    column: +a[2]
                });
                if (u) {
                    !u.func && u.line && (u.func = z);
                    o.push(u)
                }
            }
            if (!o.length) return null;
            return {
                message: Q(e),
                name: e.name,
                stack: o
            }
        }

        function Z(t, e) {
            try {
                return m["__assign"]({}, t, {
                    stack: t.stack.slice(e)
                })
            } catch (e) {
                return t
            }
        }

        function Q(e) {
            var t = e && e.message;
            if (!t) return "No error message";
            if (t.error && "string" === typeof t.error.message) return t.error.message;
            return t
        }
        var ee = 50;

        function te(e) {
            var t = ie(e.stack);
            var n = {
                type: e.name,
                value: e.message
            };
            t && t.length && (n.stacktrace = {
                frames: t
            });
            void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught");
            return n
        }

        function ne(e, t, n) {
            var r = {
                exception: {
                    values: [{
                        type: Object(P["f"])(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Object(j["b"])(e)
                    }]
                },
                extra: {
                    __serialized__: Object(j["e"])(e)
                }
            };
            if (t) {
                var i = K(t);
                var o = ie(i.stack);
                r.stacktrace = {
                    frames: o
                }
            }
            return r
        }

        function re(e) {
            var t = te(e);
            return {
                exception: {
                    values: [t]
                }
            }
        }

        function ie(e) {
            if (!e || !e.length) return [];
            var t = e;
            var n = t[0].func || "";
            var r = t[t.length - 1].func || ""; - 1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (t = t.slice(1)); - 1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1));
            return t.map(function(e) {
                return {
                    colno: null === e.column ? void 0 : e.column,
                    filename: e.url || t[0].url,
                    function: e.func || "?",
                    in_app: true,
                    lineno: null === e.line ? void 0 : e.line
                }
            }).slice(0, ee).reverse()
        }

        function oe(e, t, n) {
            void 0 === n && (n = {});
            var r;
            if (Object(P["e"])(e) && e.error) {
                var i = e;
                e = i.error;
                r = re(K(e));
                return r
            }
            if (Object(P["a"])(e) || Object(P["b"])(e)) {
                var o = e;
                var a = o.name || (Object(P["a"])(o) ? "DOMError" : "DOMException");
                var s = o.message ? a + ": " + o.message : a;
                r = ae(s, t, n);
                Object(A["c"])(r, s);
                return r
            }
            if (Object(P["d"])(e)) {
                r = re(K(e));
                return r
            }
            if (Object(P["h"])(e) || Object(P["f"])(e)) {
                var u = e;
                r = ne(u, t, n.rejection);
                Object(A["b"])(r, {
                    synthetic: true
                });
                return r
            }
            r = ae(e, t, n);
            Object(A["c"])(r, "" + e, void 0);
            Object(A["b"])(r, {
                synthetic: true
            });
            return r
        }

        function ae(e, t, n) {
            void 0 === n && (n = {});
            var r = {
                message: e
            };
            if (n.attachStacktrace && t) {
                var i = K(t);
                var o = ie(i.stack);
                r.stacktrace = {
                    frames: o
                }
            }
            return r
        }
        var se = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/promisebuffer.js");
        var ue = function() {
            function e(e) {
                this.options = e;
                this._buffer = new se["a"](30);
                this.url = new k(this.options.dsn).getStoreEndpointWithUrlEncodedAuth()
            }
            e.prototype.sendEvent = function(e) {
                throw new U["a"]("Transport Class has to implement `sendEvent` method")
            };
            e.prototype.close = function(e) {
                return this._buffer.drain(e)
            };
            return e
        }();
        var ce = Object(A["i"])();
        var fe = function(t) {
            m["__extends"](e, t);

            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                e._disabledUntil = new Date(Date.now());
                return e
            }
            e.prototype.sendEvent = function(e) {
                var o = this;
                if (new Date(Date.now()) < this._disabledUntil) return Promise.reject({
                    event: e,
                    reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                    status: 429
                });
                var t = {
                    body: JSON.stringify(e),
                    method: "POST",
                    referrerPolicy: Object(H["g"])() ? "origin" : ""
                };
                void 0 !== this.options.headers && (t.headers = this.options.headers);
                return this._buffer.add(new R["a"](function(r, i) {
                    ce.fetch(o.url, t).then(function(e) {
                        var t = a.fromHttpCode(e.status);
                        if (t === a.Success) {
                            r({
                                status: t
                            });
                            return
                        }
                        if (t === a.RateLimit) {
                            var n = Date.now();
                            o._disabledUntil = new Date(n + Object(A["m"])(n, e.headers.get("Retry-After")));
                            I["a"].warn("Too many requests, backing off till: " + o._disabledUntil)
                        }
                        i(e)
                    }).catch(i)
                }))
            };
            return e
        }(ue);
        var le = function(t) {
            m["__extends"](e, t);

            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                e._disabledUntil = new Date(Date.now());
                return e
            }
            e.prototype.sendEvent = function(t) {
                var o = this;
                if (new Date(Date.now()) < this._disabledUntil) return Promise.reject({
                    event: t,
                    reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                    status: 429
                });
                return this._buffer.add(new R["a"](function(n, r) {
                    var i = new XMLHttpRequest;
                    i.onreadystatechange = function() {
                        if (4 !== i.readyState) return;
                        var e = a.fromHttpCode(i.status);
                        if (e === a.Success) {
                            n({
                                status: e
                            });
                            return
                        }
                        if (e === a.RateLimit) {
                            var t = Date.now();
                            o._disabledUntil = new Date(t + Object(A["m"])(t, i.getResponseHeader("Retry-After")));
                            I["a"].warn("Too many requests, backing off till: " + o._disabledUntil)
                        }
                        r(i)
                    };
                    i.open("POST", o.url);
                    for (var e in o.options.headers) o.options.headers.hasOwnProperty(e) && i.setRequestHeader(e, o.options.headers[e]);
                    i.send(JSON.stringify(t))
                }))
            };
            return e
        }(ue);
        var de = function(t) {
            m["__extends"](e, t);

            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            e.prototype._setupTransport = function() {
                if (!this._options.dsn) return t.prototype._setupTransport.call(this);
                var e = m["__assign"]({}, this._options.transportOptions, {
                    dsn: this._options.dsn
                });
                if (this._options.transport) return new this._options.transport(e);
                if (Object(H["d"])()) return new fe(e);
                return new le(e)
            };
            e.prototype.eventFromException = function(e, t) {
                var n = t && t.syntheticException || void 0;
                var r = oe(e, n, {
                    attachStacktrace: this._options.attachStacktrace
                });
                Object(A["b"])(r, {
                    handled: true,
                    type: "generic"
                });
                r.level = c["a"].Error;
                t && t.event_id && (r.event_id = t.event_id);
                return R["a"].resolve(r)
            };
            e.prototype.eventFromMessage = function(e, t, n) {
                void 0 === t && (t = c["a"].Info);
                var r = n && n.syntheticException || void 0;
                var i = ae(e, r, {
                    attachStacktrace: this._options.attachStacktrace
                });
                i.level = t;
                n && n.event_id && (i.event_id = n.event_id);
                return R["a"].resolve(i)
            };
            return e
        }(q);
        var pe = "sentry.javascript.browser";
        var ve = "5.15.0";
        var he = function(r) {
            m["__extends"](e, r);

            function e(e) {
                void 0 === e && (e = {});
                return r.call(this, de, e) || this
            }
            e.prototype._prepareEvent = function(e, t, n) {
                e.platform = e.platform || "javascript";
                e.sdk = m["__assign"]({}, e.sdk, {
                    name: pe,
                    packages: m["__spread"](e.sdk && e.sdk.packages || [], [{
                        name: "npm:@sentry/browser",
                        version: ve
                    }]),
                    version: ve
                });
                return r.prototype._prepareEvent.call(this, e, t, n)
            };
            e.prototype.showReportDialog = function(e) {
                void 0 === e && (e = {});
                var t = Object(A["i"])().document;
                if (!t) return;
                if (!this._isEnabled()) {
                    I["a"].error("Trying to call showReportDialog with Sentry Client is disabled");
                    return
                }
                var n = e.dsn || this.getDsn();
                if (!e.eventId) {
                    I["a"].error("Missing `eventId` option in showReportDialog call");
                    return
                }
                if (!n) {
                    I["a"].error("Missing `Dsn` option in showReportDialog call");
                    return
                }
                var r = t.createElement("script");
                r.async = true;
                r.src = new k(n).getReportDialogEndpoint(e);
                e.onLoad && (r.onload = e.onLoad);
                (t.head || t.body).appendChild(r)
            };
            return e
        }(B);
        var me;
        var ye = function() {
            function e() {
                this.name = e.id
            }
            e.prototype.setupOnce = function() {
                me = Function.prototype.toString;
                Function.prototype.toString = function() {
                    var e = [];
                    for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this.__sentry_original__ || this;
                    return me.apply(n, e)
                }
            };
            e.id = "FunctionToString";
            return e
        }();
        var ge = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
        var _e = function() {
            function a(e) {
                void 0 === e && (e = {});
                this._options = e;
                this.name = a.id
            }
            a.prototype.setupOnce = function() {
                Object(s["b"])(function(e) {
                    var t = Object(f["b"])();
                    if (!t) return e;
                    var n = t.getIntegration(a);
                    if (n) {
                        var r = t.getClient();
                        var i = r ? r.getOptions() : {};
                        var o = n._mergeOptions(i);
                        if (n._shouldDropEvent(e, o)) return null
                    }
                    return e
                })
            };
            a.prototype._shouldDropEvent = function(e, t) {
                if (this._isSentryError(e, t)) {
                    I["a"].warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(A["g"])(e));
                    return true
                }
                if (this._isIgnoredError(e, t)) {
                    I["a"].warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(A["g"])(e));
                    return true
                }
                if (this._isBlacklistedUrl(e, t)) {
                    I["a"].warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + Object(A["g"])(e) + ".\nUrl: " + this._getEventFilterUrl(e));
                    return true
                }
                if (!this._isWhitelistedUrl(e, t)) {
                    I["a"].warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + Object(A["g"])(e) + ".\nUrl: " + this._getEventFilterUrl(e));
                    return true
                }
                return false
            };
            a.prototype._isSentryError = function(e, t) {
                void 0 === t && (t = {});
                if (!t.ignoreInternal) return false;
                try {
                    return e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type || false
                } catch (e) {
                    return false
                }
            };
            a.prototype._isIgnoredError = function(e, n) {
                void 0 === n && (n = {});
                if (!n.ignoreErrors || !n.ignoreErrors.length) return false;
                return this._getPossibleEventMessages(e).some(function(t) {
                    return n.ignoreErrors.some(function(e) {
                        return Object(C["a"])(t, e)
                    })
                })
            };
            a.prototype._isBlacklistedUrl = function(e, t) {
                void 0 === t && (t = {});
                if (!t.blacklistUrls || !t.blacklistUrls.length) return false;
                var n = this._getEventFilterUrl(e);
                return !!n && t.blacklistUrls.some(function(e) {
                    return Object(C["a"])(n, e)
                })
            };
            a.prototype._isWhitelistedUrl = function(e, t) {
                void 0 === t && (t = {});
                if (!t.whitelistUrls || !t.whitelistUrls.length) return true;
                var n = this._getEventFilterUrl(e);
                return !n || t.whitelistUrls.some(function(e) {
                    return Object(C["a"])(n, e)
                })
            };
            a.prototype._mergeOptions = function(e) {
                void 0 === e && (e = {});
                return {
                    blacklistUrls: m["__spread"](this._options.blacklistUrls || [], e.blacklistUrls || []),
                    ignoreErrors: m["__spread"](this._options.ignoreErrors || [], e.ignoreErrors || [], ge),
                    ignoreInternal: "undefined" === typeof this._options.ignoreInternal || this._options.ignoreInternal,
                    whitelistUrls: m["__spread"](this._options.whitelistUrls || [], e.whitelistUrls || [])
                }
            };
            a.prototype._getPossibleEventMessages = function(t) {
                if (t.message) return [t.message];
                if (t.exception) try {
                    var e = t.exception.values && t.exception.values[0] || {},
                        n = e.type,
                        r = void 0 === n ? "" : n,
                        i = e.value,
                        o = void 0 === i ? "" : i;
                    return ["" + o, r + ": " + o]
                } catch (e) {
                    I["a"].error("Cannot extract message for event " + Object(A["g"])(t));
                    return []
                }
                return []
            };
            a.prototype._getEventFilterUrl = function(t) {
                try {
                    if (t.stacktrace) {
                        var e = t.stacktrace.frames;
                        return e && e[e.length - 1].filename || null
                    }
                    if (t.exception) {
                        var n = t.exception.values && t.exception.values[0].stacktrace && t.exception.values[0].stacktrace.frames;
                        return n && n[n.length - 1].filename || null
                    }
                    return null
                } catch (e) {
                    I["a"].error("Cannot extract url for event " + Object(A["g"])(t));
                    return null
                }
            };
            a.id = "InboundFilters";
            return a
        }();

        function be(e, t) {
            true === t.debug && I["a"].enable();
            var n = Object(f["b"])();
            var r = new e(t);
            n.bindClient(r)
        }
        var we = 0;

        function Ee() {
            return we > 0
        }

        function Se() {
            we += 1;
            setTimeout(function() {
                we -= 1
            })
        }

        function Oe(t, r, i) {
            void 0 === r && (r = {});
            if ("function" !== typeof t) return t;
            try {
                if (t.__sentry__) return t;
                if (t.__sentry_wrapped__) return t.__sentry_wrapped__
            } catch (e) {
                return t
            }
            var e = function() {
                var n = Array.prototype.slice.call(arguments);
                try {
                    i && "function" === typeof i && i.apply(this, arguments);
                    var e = n.map(function(e) {
                        return Oe(e, r)
                    });
                    if (t.handleEvent) return t.handleEvent.apply(this, e);
                    return t.apply(this, e)
                } catch (t) {
                    Se();
                    S(function(e) {
                        e.addEventProcessor(function(e) {
                            var t = m["__assign"]({}, e);
                            if (r.mechanism) {
                                Object(A["c"])(t, void 0, void 0);
                                Object(A["b"])(t, r.mechanism)
                            }
                            t.extra = m["__assign"]({}, t.extra, {
                                arguments: n
                            });
                            return t
                        });
                        l(t)
                    });
                    throw t
                }
            };
            try {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            } catch (e) {}
            t.prototype = t.prototype || {};
            e.prototype = t.prototype;
            Object.defineProperty(t, "__sentry_wrapped__", {
                enumerable: false,
                value: e
            });
            Object.defineProperties(e, {
                __sentry__: {
                    enumerable: false,
                    value: true
                },
                __sentry_original__: {
                    enumerable: false,
                    value: t
                }
            });
            try {
                var o = Object.getOwnPropertyDescriptor(e, "name");
                o.configurable && Object.defineProperty(e, "name", {
                    get: function() {
                        return t.name
                    }
                })
            } catch (e) {}
            return e
        }
        var Te = function() {
            function e() {
                this._ignoreOnError = 0;
                this.name = e.id
            }
            e.prototype._wrapTimeFunction = function(r) {
                return function() {
                    var e = [];
                    for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = e[0];
                    e[0] = Oe(n, {
                        mechanism: {
                            data: {
                                function: Object(A["h"])(r)
                            },
                            handled: true,
                            type: "instrument"
                        }
                    });
                    return r.apply(this, e)
                }
            };
            e.prototype._wrapRAF = function(t) {
                return function(e) {
                    return t(Oe(e, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: Object(A["h"])(t)
                            },
                            handled: true,
                            type: "instrument"
                        }
                    }))
                }
            };
            e.prototype._wrapEventTarget = function(i) {
                var e = Object(A["i"])();
                var t = e[i] && e[i].prototype;
                if (!t || !t.hasOwnProperty || !t.hasOwnProperty("addEventListener")) return;
                Object(j["c"])(t, "addEventListener", function(r) {
                    return function(e, t, n) {
                        try {
                            "function" === typeof t.handleEvent && (t.handleEvent = Oe(t.handleEvent.bind(t), {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: Object(A["h"])(t),
                                        target: i
                                    },
                                    handled: true,
                                    type: "instrument"
                                }
                            }))
                        } catch (e) {}
                        return r.call(this, e, Oe(t, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: Object(A["h"])(t),
                                    target: i
                                },
                                handled: true,
                                type: "instrument"
                            }
                        }), n)
                    }
                });
                Object(j["c"])(t, "removeEventListener", function(i) {
                    return function(e, t, n) {
                        var r = t;
                        try {
                            r = r && (r.__sentry_wrapped__ || r)
                        } catch (e) {}
                        return i.call(this, e, r, n)
                    }
                })
            };
            e.prototype._wrapXHR = function(i) {
                return function() {
                    var e = [];
                    for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var r = this;
                    var n = ["onload", "onerror", "onprogress", "onreadystatechange"];
                    n.forEach(function(n) {
                        n in r && "function" === typeof r[n] && Object(j["c"])(r, n, function(e) {
                            var t = {
                                mechanism: {
                                    data: {
                                        function: n,
                                        handler: Object(A["h"])(e)
                                    },
                                    handled: true,
                                    type: "instrument"
                                }
                            };
                            e.__sentry_original__ && (t.mechanism.data.handler = Object(A["h"])(e.__sentry_original__));
                            return Oe(e, t)
                        })
                    });
                    return i.apply(this, e)
                }
            };
            e.prototype.setupOnce = function() {
                this._ignoreOnError = this._ignoreOnError;
                var e = Object(A["i"])();
                Object(j["c"])(e, "setTimeout", this._wrapTimeFunction.bind(this));
                Object(j["c"])(e, "setInterval", this._wrapTimeFunction.bind(this));
                Object(j["c"])(e, "requestAnimationFrame", this._wrapRAF.bind(this));
                "XMLHttpRequest" in e && Object(j["c"])(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this));
                ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"].forEach(this._wrapEventTarget.bind(this))
            };
            e.id = "TryCatch";
            return e
        }();
        var je = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/instrument.js");
        var xe = function() {
            function t(e) {
                this.name = t.id;
                this._options = m["__assign"]({
                    console: true,
                    dom: true,
                    fetch: true,
                    history: true,
                    sentry: true,
                    xhr: true
                }, e)
            }
            t.prototype._consoleBreadcrumb = function(e) {
                var t = {
                    category: "console",
                    data: {
                        arguments: e.args,
                        logger: "console"
                    },
                    level: c["a"].fromString(e.level),
                    message: Object(C["b"])(e.args, " ")
                };
                if ("assert" === e.level) {
                    if (false !== e.args[0]) return;
                    t.message = "Assertion failed: " + (Object(C["b"])(e.args.slice(1), " ") || "console.assert");
                    t.data.arguments = e.args.slice(1)
                }
                Object(f["b"])().addBreadcrumb(t, {
                    input: e.args,
                    level: e.level
                })
            };
            t.prototype._domBreadcrumb = function(e) {
                var t;
                try {
                    t = e.event.target ? Object(A["k"])(e.event.target) : Object(A["k"])(e.event)
                } catch (e) {
                    t = "<unknown>"
                }
                if (0 === t.length) return;
                Object(f["b"])().addBreadcrumb({
                    category: "ui." + e.name,
                    message: t
                }, {
                    event: e.event,
                    name: e.name
                })
            };
            t.prototype._xhrBreadcrumb = function(e) {
                if (e.endTimestamp) {
                    if (e.xhr.__sentry_own_request__) return;
                    Object(f["b"])().addBreadcrumb({
                        category: "xhr",
                        data: e.xhr.__sentry_xhr__,
                        type: "http"
                    }, {
                        xhr: e.xhr
                    });
                    return
                }
                this._options.sentry && e.xhr.__sentry_own_request__ && ke(e.args[0])
            };
            t.prototype._fetchBreadcrumb = function(e) {
                if (!e.endTimestamp) return;
                var t = Object(f["b"])().getClient();
                var n = t && t.getDsn();
                if (this._options.sentry && n) {
                    var r = new k(n).getStoreEndpoint();
                    if (r && -1 !== e.fetchData.url.indexOf(r) && "POST" === e.fetchData.method && e.args[1] && e.args[1].body) {
                        ke(e.args[1].body);
                        return
                    }
                }
                e.error ? Object(f["b"])().addBreadcrumb({
                    category: "fetch",
                    data: m["__assign"]({}, e.fetchData, {
                        status_code: e.response.status
                    }),
                    level: c["a"].Error,
                    type: "http"
                }, {
                    data: e.error,
                    input: e.args
                }) : Object(f["b"])().addBreadcrumb({
                    category: "fetch",
                    data: m["__assign"]({}, e.fetchData, {
                        status_code: e.response.status
                    }),
                    type: "http"
                }, {
                    input: e.args,
                    response: e.response
                })
            };
            t.prototype._historyBreadcrumb = function(e) {
                var t = Object(A["i"])();
                var n = e.from;
                var r = e.to;
                var i = Object(A["o"])(t.location.href);
                var o = Object(A["o"])(n);
                var a = Object(A["o"])(r);
                o.path || (o = i);
                i.protocol === a.protocol && i.host === a.host && (r = a.relative);
                i.protocol === o.protocol && i.host === o.host && (n = o.relative);
                Object(f["b"])().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: n,
                        to: r
                    }
                })
            };
            t.prototype.setupOnce = function() {
                var n = this;
                this._options.console && Object(je["a"])({
                    callback: function() {
                        var e = [];
                        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        n._consoleBreadcrumb.apply(n, m["__spread"](e))
                    },
                    type: "console"
                });
                this._options.dom && Object(je["a"])({
                    callback: function() {
                        var e = [];
                        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        n._domBreadcrumb.apply(n, m["__spread"](e))
                    },
                    type: "dom"
                });
                this._options.xhr && Object(je["a"])({
                    callback: function() {
                        var e = [];
                        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        n._xhrBreadcrumb.apply(n, m["__spread"](e))
                    },
                    type: "xhr"
                });
                this._options.fetch && Object(je["a"])({
                    callback: function() {
                        var e = [];
                        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        n._fetchBreadcrumb.apply(n, m["__spread"](e))
                    },
                    type: "fetch"
                });
                this._options.history && Object(je["a"])({
                    callback: function() {
                        var e = [];
                        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        n._historyBreadcrumb.apply(n, m["__spread"](e))
                    },
                    type: "history"
                })
            };
            t.id = "Breadcrumbs";
            return t
        }();

        function ke(e) {
            try {
                var t = JSON.parse(e);
                Object(f["b"])().addBreadcrumb({
                    category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                    event_id: t.event_id,
                    level: t.level || c["a"].fromString("error"),
                    message: Object(A["g"])(t)
                }, {
                    event: t
                })
            } catch (e) {
                I["a"].error("Error while adding sentry type breadcrumb")
            }
        }
        var Ie = function() {
            function u(e) {
                this.name = u.id;
                this._onErrorHandlerInstalled = false;
                this._onUnhandledRejectionHandlerInstalled = false;
                this._options = m["__assign"]({
                    onerror: true,
                    onunhandledrejection: true
                }, e)
            }
            u.prototype.setupOnce = function() {
                Error.stackTraceLimit = 50;
                if (this._options.onerror) {
                    I["a"].log("Global Handler attached: onerror");
                    this._installGlobalOnErrorHandler()
                }
                if (this._options.onunhandledrejection) {
                    I["a"].log("Global Handler attached: onunhandledrejection");
                    this._installGlobalOnUnhandledRejectionHandler()
                }
            };
            u.prototype._installGlobalOnErrorHandler = function() {
                var s = this;
                if (this._onErrorHandlerInstalled) return;
                Object(je["a"])({
                    callback: function(e) {
                        var t = e.error;
                        var n = Object(f["b"])();
                        var r = n.getIntegration(u);
                        var i = t && true === t.__sentry_own_request__;
                        if (!r || Ee() || i) return;
                        var o = n.getClient();
                        var a = Object(P["i"])(t) ? s._eventFromIncompleteOnError(e.msg, e.url, e.line, e.column) : s._enhanceEventWithInitialFrame(oe(t, void 0, {
                            attachStacktrace: o && o.getOptions().attachStacktrace,
                            rejection: false
                        }), e.url, e.line, e.column);
                        Object(A["b"])(a, {
                            handled: false,
                            type: "onerror"
                        });
                        n.captureEvent(a, {
                            originalException: t
                        })
                    },
                    type: "error"
                });
                this._onErrorHandlerInstalled = true
            };
            u.prototype._installGlobalOnUnhandledRejectionHandler = function() {
                var s = this;
                if (this._onUnhandledRejectionHandlerInstalled) return;
                Object(je["a"])({
                    callback: function(e) {
                        var t = e;
                        try {
                            "reason" in e ? t = e.reason : "detail" in e && "reason" in e.detail && (t = e.detail.reason)
                        } catch (e) {}
                        var n = Object(f["b"])();
                        var r = n.getIntegration(u);
                        var i = t && true === t.__sentry_own_request__;
                        if (!r || Ee() || i) return true;
                        var o = n.getClient();
                        var a = Object(P["i"])(t) ? s._eventFromIncompleteRejection(t) : oe(t, void 0, {
                            attachStacktrace: o && o.getOptions().attachStacktrace,
                            rejection: true
                        });
                        a.level = c["a"].Error;
                        Object(A["b"])(a, {
                            handled: false,
                            type: "onunhandledrejection"
                        });
                        n.captureEvent(a, {
                            originalException: t
                        });
                        return
                    },
                    type: "unhandledrejection"
                });
                this._onUnhandledRejectionHandlerInstalled = true
            };
            u.prototype._eventFromIncompleteOnError = function(e, t, n, r) {
                var i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
                var o = Object(P["e"])(e) ? e.message : e;
                var a;
                if (Object(P["k"])(o)) {
                    var s = o.match(i);
                    if (s) {
                        a = s[1];
                        o = s[2]
                    }
                }
                var u = {
                    exception: {
                        values: [{
                            type: a || "Error",
                            value: o
                        }]
                    }
                };
                return this._enhanceEventWithInitialFrame(u, t, n, r)
            };
            u.prototype._eventFromIncompleteRejection = function(e) {
                return {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: "Non-Error promise rejection captured with value: " + e
                        }]
                    }
                }
            };
            u.prototype._enhanceEventWithInitialFrame = function(e, t, n, r) {
                e.exception = e.exception || {};
                e.exception.values = e.exception.values || [];
                e.exception.values[0] = e.exception.values[0] || {};
                e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {};
                e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || [];
                var i = isNaN(parseInt(r, 10)) ? void 0 : r;
                var o = isNaN(parseInt(n, 10)) ? void 0 : n;
                var a = Object(P["k"])(t) && t.length > 0 ? t : Object(A["j"])();
                0 === e.exception.values[0].stacktrace.frames.length && e.exception.values[0].stacktrace.frames.push({
                    colno: i,
                    filename: a,
                    function: "?",
                    in_app: true,
                    lineno: o
                });
                return e
            };
            u.id = "GlobalHandlers";
            return u
        }();
        var Pe = "cause";
        var Re = 5;
        var Ce = function() {
            function r(e) {
                void 0 === e && (e = {});
                this.name = r.id;
                this._key = e.key || Pe;
                this._limit = e.limit || Re
            }
            r.prototype.setupOnce = function() {
                Object(s["b"])(function(e, t) {
                    var n = Object(f["b"])().getIntegration(r);
                    if (n) return n._handler(e, t);
                    return e
                })
            };
            r.prototype._handler = function(e, t) {
                if (!e.exception || !e.exception.values || !t || !Object(P["g"])(t.originalException, Error)) return e;
                var n = this._walkErrorTree(t.originalException, this._key);
                e.exception.values = m["__spread"](n, e.exception.values);
                return e
            };
            r.prototype._walkErrorTree = function(e, t, n) {
                void 0 === n && (n = []);
                if (!Object(P["g"])(e[t], Error) || n.length + 1 >= this._limit) return n;
                var r = K(e[t]);
                var i = te(r);
                return this._walkErrorTree(e[t], t, m["__spread"]([i], n))
            };
            r.id = "LinkedErrors";
            return r
        }();
        var Ae = Object(A["i"])();
        var Le = function() {
            function n() {
                this.name = n.id
            }
            n.prototype.setupOnce = function() {
                Object(s["b"])(function(e) {
                    if (Object(f["b"])().getIntegration(n)) {
                        if (!Ae.navigator || !Ae.location) return e;
                        var t = e.request || {};
                        t.url = t.url || Ae.location.href;
                        t.headers = t.headers || {};
                        t.headers["User-Agent"] = Ae.navigator.userAgent;
                        return m["__assign"]({}, e, {
                            request: t
                        })
                    }
                    return e
                })
            };
            n.id = "UserAgent";
            return n
        }();
        var De = [new r.InboundFilters, new r.FunctionToString, new Te, new xe, new Ie, new Ce, new Le];

        function Ne(e) {
            void 0 === e && (e = {});
            void 0 === e.defaultIntegrations && (e.defaultIntegrations = De);
            if (void 0 === e.release) {
                var t = Object(A["i"])();
                t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id)
            }
            be(he, e)
        }

        function Me(e) {
            void 0 === e && (e = {});
            e.eventId || (e.eventId = Object(f["b"])().lastEventId());
            var t = Object(f["b"])().getClient();
            t && t.showReportDialog(e)
        }

        function Be() {
            return Object(f["b"])().lastEventId()
        }

        function Ue() {}

        function Fe(e) {
            e()
        }

        function qe(e) {
            var t = Object(f["b"])().getClient();
            if (t) return t.flush(e);
            return R["a"].reject(false)
        }

        function He(e) {
            var t = Object(f["b"])().getClient();
            if (t) return t.close(e);
            return R["a"].reject(false)
        }

        function ze(e) {
            return Oe(e)()
        }
        var Ye = {};
        var We = Object(A["i"])();
        We.Sentry && We.Sentry.Integrations && (Ye = We.Sentry.Integrations);
        var Ve = m["__assign"]({}, Ye, r, i)
    },
    "./src/main/webapp/universal/node_modules/@sentry/hub/esm/hub.js": function(e, r, y) {
        "use strict";
        (function(i) {
            y.d(r, "a", function() {
                return u
            });
            y.d(r, "b", function() {
                return e
            });
            y.d(r, "c", function() {
                return h
            });
            var l = y("./src/main/webapp/universal/node_modules/tslib/tslib.es6.js");
            var d = y("./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js");
            var o = y("./src/main/webapp/universal/node_modules/@sentry/utils/esm/logger.js");
            var a = y("./src/main/webapp/universal/node_modules/@sentry/hub/esm/scope.js");
            var s = 3;
            var p = 100;
            var v = 100;
            var u = function() {
                function e(e, t, n) {
                    void 0 === t && (t = new a["a"]);
                    void 0 === n && (n = s);
                    this._version = n;
                    this._stack = [];
                    this._stack.push({
                        client: e,
                        scope: t
                    })
                }
                e.prototype._invokeClient = function(e) {
                    var t;
                    var n = [];
                    for (var r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                    var i = this.getStackTop();
                    i && i.client && i.client[e] && (t = i.client)[e].apply(t, l["__spread"](n, [i.scope]))
                };
                e.prototype.isOlderThan = function(e) {
                    return this._version < e
                };
                e.prototype.bindClient = function(e) {
                    var t = this.getStackTop();
                    t.client = e;
                    e && e.setupIntegrations && e.setupIntegrations()
                };
                e.prototype.pushScope = function() {
                    var e = this.getStack();
                    var t = e.length > 0 ? e[e.length - 1].scope : void 0;
                    var n = a["a"].clone(t);
                    this.getStack().push({
                        client: this.getClient(),
                        scope: n
                    });
                    return n
                };
                e.prototype.popScope = function() {
                    return void 0 !== this.getStack().pop()
                };
                e.prototype.withScope = function(e) {
                    var t = this.pushScope();
                    try {
                        e(t)
                    } finally {
                        this.popScope()
                    }
                };
                e.prototype.getClient = function() {
                    return this.getStackTop().client
                };
                e.prototype.getScope = function() {
                    return this.getStackTop().scope
                };
                e.prototype.getStack = function() {
                    return this._stack
                };
                e.prototype.getStackTop = function() {
                    return this._stack[this._stack.length - 1]
                };
                e.prototype.captureException = function(e, t) {
                    var n = this._lastEventId = Object(d["q"])();
                    var r = t;
                    if (!t) {
                        var i = void 0;
                        try {
                            throw new Error("Sentry syntheticException")
                        } catch (e) {
                            i = e
                        }
                        r = {
                            originalException: e,
                            syntheticException: i
                        }
                    }
                    this._invokeClient("captureException", e, l["__assign"]({}, r, {
                        event_id: n
                    }));
                    return n
                };
                e.prototype.captureMessage = function(e, t, n) {
                    var r = this._lastEventId = Object(d["q"])();
                    var i = n;
                    if (!n) {
                        var o = void 0;
                        try {
                            throw new Error(e)
                        } catch (e) {
                            o = e
                        }
                        i = {
                            originalException: e,
                            syntheticException: o
                        }
                    }
                    this._invokeClient("captureMessage", e, t, l["__assign"]({}, i, {
                        event_id: r
                    }));
                    return r
                };
                e.prototype.captureEvent = function(e, t) {
                    var n = this._lastEventId = Object(d["q"])();
                    this._invokeClient("captureEvent", e, l["__assign"]({}, t, {
                        event_id: n
                    }));
                    return n
                };
                e.prototype.lastEventId = function() {
                    return this._lastEventId
                };
                e.prototype.addBreadcrumb = function(e, t) {
                    var n = this.getStackTop();
                    if (!n.scope || !n.client) return;
                    var r = n.client.getOptions && n.client.getOptions() || {},
                        i = r.beforeBreadcrumb,
                        o = void 0 === i ? null : i,
                        a = r.maxBreadcrumbs,
                        s = void 0 === a ? p : a;
                    if (s <= 0) return;
                    var u = Object(d["p"])();
                    var c = l["__assign"]({
                        timestamp: u
                    }, e);
                    var f = o ? Object(d["d"])(function() {
                        return o(c, t)
                    }) : c;
                    if (null === f) return;
                    n.scope.addBreadcrumb(f, Math.min(s, v))
                };
                e.prototype.setUser = function(e) {
                    var t = this.getStackTop();
                    if (!t.scope) return;
                    t.scope.setUser(e)
                };
                e.prototype.setTags = function(e) {
                    var t = this.getStackTop();
                    if (!t.scope) return;
                    t.scope.setTags(e)
                };
                e.prototype.setExtras = function(e) {
                    var t = this.getStackTop();
                    if (!t.scope) return;
                    t.scope.setExtras(e)
                };
                e.prototype.setTag = function(e, t) {
                    var n = this.getStackTop();
                    if (!n.scope) return;
                    n.scope.setTag(e, t)
                };
                e.prototype.setExtra = function(e, t) {
                    var n = this.getStackTop();
                    if (!n.scope) return;
                    n.scope.setExtra(e, t)
                };
                e.prototype.setContext = function(e, t) {
                    var n = this.getStackTop();
                    if (!n.scope) return;
                    n.scope.setContext(e, t)
                };
                e.prototype.configureScope = function(e) {
                    var t = this.getStackTop();
                    t.scope && t.client && e(t.scope)
                };
                e.prototype.run = function(e) {
                    var t = n(this);
                    try {
                        e(this)
                    } finally {
                        n(t)
                    }
                };
                e.prototype.getIntegration = function(t) {
                    var e = this.getClient();
                    if (!e) return null;
                    try {
                        return e.getIntegration(t)
                    } catch (e) {
                        o["a"].warn("Cannot retrieve integration " + t.id + " from the current Hub");
                        return null
                    }
                };
                e.prototype.startSpan = function(e, t) {
                    void 0 === t && (t = false);
                    return this._callExtensionMethod("startSpan", e, t)
                };
                e.prototype.traceHeaders = function() {
                    return this._callExtensionMethod("traceHeaders")
                };
                e.prototype._callExtensionMethod = function(e) {
                    var t = [];
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    var r = c();
                    var i = r.__SENTRY__;
                    if (i && i.extensions && "function" === typeof i.extensions[e]) return i.extensions[e].apply(this, t);
                    o["a"].warn("Extension method " + e + " couldn't be found, doing nothing.")
                };
                return e
            }();

            function c() {
                var e = Object(d["i"])();
                e.__SENTRY__ = e.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                };
                return e
            }

            function n(e) {
                var t = c();
                var n = h(t);
                m(t, e);
                return n
            }

            function e() {
                var e = c();
                f(e) && !h(e).isOlderThan(s) || m(e, new u);
                if (Object(d["l"])()) return t(e);
                return h(e)
            }

            function t(t) {
                try {
                    var e = Object(d["f"])(i, "domain");
                    var n = e.active;
                    if (!n) return h(t);
                    if (!f(n) || h(n).isOlderThan(s)) {
                        var r = h(t).getStackTop();
                        m(n, new u(r.client, a["a"].clone(r.scope)))
                    }
                    return h(n)
                } catch (e) {
                    return h(t)
                }
            }

            function f(e) {
                if (e && e.__SENTRY__ && e.__SENTRY__.hub) return true;
                return false
            }

            function h(e) {
                if (e && e.__SENTRY__ && e.__SENTRY__.hub) return e.__SENTRY__.hub;
                e.__SENTRY__ = e.__SENTRY__ || {};
                e.__SENTRY__.hub = new u;
                return e.__SENTRY__.hub
            }

            function m(e, t) {
                if (!e) return false;
                e.__SENTRY__ = e.__SENTRY__ || {};
                e.__SENTRY__.hub = t;
                return true
            }
        }).call(this, y("./node_modules/webpack/buildin/harmony-module.js")(e))
    },
    "./src/main/webapp/universal/node_modules/@sentry/hub/esm/scope.js": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        n.d(t, "b", function() {
            return s
        });
        var c = n("./src/main/webapp/universal/node_modules/tslib/tslib.es6.js");
        var r = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/syncpromise.js");
        var f = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js");
        var i = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js");
        var o = function() {
            function n() {
                this._notifyingListeners = false;
                this._scopeListeners = [];
                this._eventProcessors = [];
                this._breadcrumbs = [];
                this._user = {};
                this._tags = {};
                this._extra = {};
                this._context = {}
            }
            n.prototype.addScopeListener = function(e) {
                this._scopeListeners.push(e)
            };
            n.prototype.addEventProcessor = function(e) {
                this._eventProcessors.push(e);
                return this
            };
            n.prototype._notifyScopeListeners = function() {
                var t = this;
                if (!this._notifyingListeners) {
                    this._notifyingListeners = true;
                    setTimeout(function() {
                        t._scopeListeners.forEach(function(e) {
                            e(t)
                        });
                        t._notifyingListeners = false
                    })
                }
            };
            n.prototype._notifyEventProcessors = function(i, o, a, s) {
                var u = this;
                void 0 === s && (s = 0);
                return new r["a"](function(t, e) {
                    var n = i[s];
                    if (null === o || "function" !== typeof n) t(o);
                    else {
                        var r = n(c["__assign"]({}, o), a);
                        Object(f["m"])(r) ? r.then(function(e) {
                            return u._notifyEventProcessors(i, e, a, s + 1).then(t)
                        }).then(null, e) : u._notifyEventProcessors(i, r, a, s + 1).then(t).then(null, e)
                    }
                })
            };
            n.prototype.setUser = function(e) {
                this._user = e || {};
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setTags = function(e) {
                this._tags = c["__assign"]({}, this._tags, e);
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setTag = function(e, t) {
                var n;
                this._tags = c["__assign"]({}, this._tags, (n = {}, n[e] = t, n));
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setExtras = function(e) {
                this._extra = c["__assign"]({}, this._extra, e);
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setExtra = function(e, t) {
                var n;
                this._extra = c["__assign"]({}, this._extra, (n = {}, n[e] = t, n));
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setFingerprint = function(e) {
                this._fingerprint = e;
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setLevel = function(e) {
                this._level = e;
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setTransaction = function(e) {
                this._transaction = e;
                this._span && (this._span.transaction = e);
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setContext = function(e, t) {
                var n;
                this._context = c["__assign"]({}, this._context, (n = {}, n[e] = t, n));
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setSpan = function(e) {
                this._span = e;
                this._notifyScopeListeners();
                return this
            };
            n.prototype.getSpan = function() {
                return this._span
            };
            n.clone = function(e) {
                var t = new n;
                if (e) {
                    t._breadcrumbs = c["__spread"](e._breadcrumbs);
                    t._tags = c["__assign"]({}, e._tags);
                    t._extra = c["__assign"]({}, e._extra);
                    t._context = c["__assign"]({}, e._context);
                    t._user = e._user;
                    t._level = e._level;
                    t._span = e._span;
                    t._transaction = e._transaction;
                    t._fingerprint = e._fingerprint;
                    t._eventProcessors = c["__spread"](e._eventProcessors)
                }
                return t
            };
            n.prototype.clear = function() {
                this._breadcrumbs = [];
                this._tags = {};
                this._extra = {};
                this._user = {};
                this._context = {};
                this._level = void 0;
                this._transaction = void 0;
                this._fingerprint = void 0;
                this._span = void 0;
                this._notifyScopeListeners();
                return this
            };
            n.prototype.addBreadcrumb = function(e, t) {
                var n = c["__assign"]({
                    timestamp: Object(i["p"])()
                }, e);
                this._breadcrumbs = void 0 !== t && t >= 0 ? c["__spread"](this._breadcrumbs, [n]).slice(-t) : c["__spread"](this._breadcrumbs, [n]);
                this._notifyScopeListeners();
                return this
            };
            n.prototype.clearBreadcrumbs = function() {
                this._breadcrumbs = [];
                this._notifyScopeListeners();
                return this
            };
            n.prototype._applyFingerprint = function(e) {
                e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [];
                this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint));
                e.fingerprint && !e.fingerprint.length && delete e.fingerprint
            };
            n.prototype.applyToEvent = function(e, t) {
                this._extra && Object.keys(this._extra).length && (e.extra = c["__assign"]({}, this._extra, e.extra));
                this._tags && Object.keys(this._tags).length && (e.tags = c["__assign"]({}, this._tags, e.tags));
                this._user && Object.keys(this._user).length && (e.user = c["__assign"]({}, this._user, e.user));
                this._context && Object.keys(this._context).length && (e.contexts = c["__assign"]({}, this._context, e.contexts));
                this._level && (e.level = this._level);
                this._transaction && (e.transaction = this._transaction);
                this._span && (e.contexts = c["__assign"]({
                    trace: this._span.getTraceContext()
                }, e.contexts));
                this._applyFingerprint(e);
                e.breadcrumbs = c["__spread"](e.breadcrumbs || [], this._breadcrumbs);
                e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0;
                return this._notifyEventProcessors(c["__spread"](a(), this._eventProcessors), e, t)
            };
            return n
        }();

        function a() {
            var e = Object(i["i"])();
            e.__SENTRY__ = e.__SENTRY__ || {};
            e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || [];
            return e.__SENTRY__.globalEventProcessors
        }

        function s(e) {
            a().push(e)
        }
    },
    "./src/main/webapp/universal/node_modules/@sentry/types/esm/severity.js": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r;
        (function(e) {
            e["Fatal"] = "fatal";
            e["Error"] = "error";
            e["Warning"] = "warning";
            e["Log"] = "log";
            e["Info"] = "info";
            e["Debug"] = "debug";
            e["Critical"] = "critical"
        })(r = r || {});
        (function(t) {
            function e(e) {
                switch (e) {
                    case "debug":
                        return t.Debug;
                    case "info":
                        return t.Info;
                    case "warn":
                    case "warning":
                        return t.Warning;
                    case "error":
                        return t.Error;
                    case "fatal":
                        return t.Fatal;
                    case "critical":
                        return t.Critical;
                    case "log":
                    default:
                        return t.Log
                }
            }
            t.fromString = e
        })(r = r || {})
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/dsn.js": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var v = n("./src/main/webapp/universal/node_modules/tslib/tslib.es6.js");
        var h = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/error.js");
        var m = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/;
        var y = "Invalid Dsn";
        var r = function() {
            function e(e) {
                "string" === typeof e ? this._fromString(e) : this._fromComponents(e);
                this._validate()
            }
            e.prototype.toString = function(e) {
                void 0 === e && (e = false);
                var t = this,
                    n = t.host,
                    r = t.path,
                    i = t.pass,
                    o = t.port,
                    a = t.projectId,
                    s = t.protocol,
                    u = t.user;
                return s + "://" + u + (e && i ? ":" + i : "") + "@" + n + (o ? ":" + o : "") + "/" + (r ? r + "/" : r) + a
            };
            e.prototype._fromString = function(e) {
                var t = m.exec(e);
                if (!t) throw new h["a"](y);
                var n = v["__read"](t.slice(1), 6),
                    r = n[0],
                    i = n[1],
                    o = n[2],
                    a = void 0 === o ? "" : o,
                    s = n[3],
                    u = n[4],
                    c = void 0 === u ? "" : u,
                    f = n[5];
                var l = "";
                var d = f;
                var p = d.split("/");
                if (p.length > 1) {
                    l = p.slice(0, -1).join("/");
                    d = p.pop()
                }
                this._fromComponents({
                    host: s,
                    pass: a,
                    path: l,
                    projectId: d,
                    port: c,
                    protocol: r,
                    user: i
                })
            };
            e.prototype._fromComponents = function(e) {
                this.protocol = e.protocol;
                this.user = e.user;
                this.pass = e.pass || "";
                this.host = e.host;
                this.port = e.port || "";
                this.path = e.path || "";
                this.projectId = e.projectId
            };
            e.prototype._validate = function() {
                var t = this;
                ["protocol", "user", "host", "projectId"].forEach(function(e) {
                    if (!t[e]) throw new h["a"](y)
                });
                if ("http" !== this.protocol && "https" !== this.protocol) throw new h["a"](y);
                if (this.port && isNaN(parseInt(this.port, 10))) throw new h["a"](y)
            };
            return e
        }()
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/error.js": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("./src/main/webapp/universal/node_modules/tslib/tslib.es6.js");
        var o = Object.setPrototypeOf || ({
                __proto__: []
            }
            instanceof Array ? r : a);

        function r(e, t) {
            e.__proto__ = t;
            return e
        }

        function a(e, t) {
            for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
            return e
        }
        var s = function(r) {
            i["__extends"](e, r);

            function e(e) {
                var t = this.constructor;
                var n = r.call(this, e) || this;
                n.message = e;
                n.name = t.prototype.constructor.name;
                o(n, t.prototype);
                return n
            }
            return e
        }(Error)
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/instrument.js": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return p
        });
        var s = n("./src/main/webapp/universal/node_modules/tslib/tslib.es6.js");
        var i = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js");
        var u = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/logger.js");
        var c = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js");
        var o = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/object.js");
        var r = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/supports.js");
        var a = Object(c["i"])();
        var f = {};
        var l = {};

        function d(e) {
            if (l[e]) return;
            l[e] = true;
            switch (e) {
                case "console":
                    h();
                    break;
                case "dom":
                    E();
                    break;
                case "xhr":
                    _();
                    break;
                case "fetch":
                    m();
                    break;
                case "history":
                    w();
                    break;
                case "error":
                    P();
                    break;
                case "unhandledrejection":
                    C();
                    break;
                default:
                    u["a"].warn("unknown instrumentation type:", e)
            }
        }

        function p(e) {
            if (!e || "string" !== typeof e.type || "function" !== typeof e.callback) return;
            f[e.type] = f[e.type] || [];
            f[e.type].push(e.callback);
            d(e.type)
        }

        function v(t, e) {
            var n, r;
            if (!t || !f[t]) return;
            try {
                for (var i = s["__values"](f[t] || []), o = i.next(); !o.done; o = i.next()) {
                    var a = o.value;
                    try {
                        a(e)
                    } catch (e) {
                        u["a"].error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + Object(c["h"])(a) + "\nError: " + e)
                    }
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    o && !o.done && (r = i.return) && r.call(i)
                } finally {
                    if (n) throw n.error
                }
            }
        }

        function h() {
            if (!("console" in a)) return;
            ["debug", "info", "warn", "error", "log", "assert"].forEach(function(r) {
                if (!(r in a.console)) return;
                Object(o["c"])(a.console, r, function(n) {
                    return function() {
                        var e = [];
                        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        v("console", {
                            args: e,
                            level: r
                        });
                        n && Function.prototype.apply.call(n, a.console, e)
                    }
                })
            })
        }

        function m() {
            if (!Object(r["f"])()) return;
            Object(o["c"])(a, "fetch", function(r) {
                return function() {
                    var e = [];
                    for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = {
                        args: e,
                        fetchData: {
                            method: y(e),
                            url: g(e)
                        },
                        startTimestamp: Date.now()
                    };
                    v("fetch", s["__assign"]({}, n));
                    return r.apply(a, e).then(function(e) {
                        v("fetch", s["__assign"]({}, n, {
                            endTimestamp: Date.now(),
                            response: e
                        }));
                        return e
                    }, function(e) {
                        v("fetch", s["__assign"]({}, n, {
                            endTimestamp: Date.now(),
                            error: e
                        }));
                        throw e
                    })
                }
            })
        }

        function y(e) {
            void 0 === e && (e = []);
            if ("Request" in a && Object(i["g"])(e[0], Request) && e[0].method) return String(e[0].method).toUpperCase();
            if (e[1] && e[1].method) return String(e[1].method).toUpperCase();
            return "GET"
        }

        function g(e) {
            void 0 === e && (e = []);
            if ("string" === typeof e[0]) return e[0];
            if ("Request" in a && Object(i["g"])(e[0], Request)) return e[0].url;
            return String(e[0])
        }

        function _() {
            if (!("XMLHttpRequest" in a)) return;
            var e = XMLHttpRequest.prototype;
            Object(o["c"])(e, "open", function(r) {
                return function() {
                    var e = [];
                    for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = e[1];
                    this.__sentry_xhr__ = {
                        method: Object(i["k"])(e[0]) ? e[0].toUpperCase() : e[0],
                        url: e[1]
                    };
                    Object(i["k"])(n) && "POST" === this.__sentry_xhr__.method && n.match(/sentry_key/) && (this.__sentry_own_request__ = true);
                    return r.apply(this, e)
                }
            });
            Object(o["c"])(e, "send", function(i) {
                return function() {
                    var e = [];
                    for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this;
                    var r = {
                        args: e,
                        startTimestamp: Date.now(),
                        xhr: n
                    };
                    v("xhr", s["__assign"]({}, r));
                    n.addEventListener("readystatechange", function() {
                        if (4 === n.readyState) {
                            try {
                                n.__sentry_xhr__ && (n.__sentry_xhr__.status_code = n.status)
                            } catch (e) {}
                            v("xhr", s["__assign"]({}, r, {
                                endTimestamp: Date.now()
                            }))
                        }
                    });
                    return i.apply(this, e)
                }
            })
        }
        var b;

        function w() {
            if (!Object(r["e"])()) return;
            var i = a.onpopstate;
            a.onpopstate = function() {
                var e = [];
                for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = a.location.href;
                var r = b;
                b = n;
                v("history", {
                    from: r,
                    to: n
                });
                if (i) return i.apply(this, e)
            };

            function e(o) {
                return function() {
                    var e = [];
                    for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = e.length > 2 ? e[2] : void 0;
                    if (n) {
                        var r = b;
                        var i = String(n);
                        b = i;
                        v("history", {
                            from: r,
                            to: i
                        })
                    }
                    return o.apply(this, e)
                }
            }
            Object(o["c"])(a.history, "pushState", e);
            Object(o["c"])(a.history, "replaceState", e)
        }

        function E() {
            if (!("document" in a)) return;
            a.document.addEventListener("click", x("click", v.bind(null, "dom")), false);
            a.document.addEventListener("keypress", k(v.bind(null, "dom")), false);
            ["EventTarget", "Node"].forEach(function(e) {
                var t = a[e] && a[e].prototype;
                if (!t || !t.hasOwnProperty || !t.hasOwnProperty("addEventListener")) return;
                Object(o["c"])(t, "addEventListener", function(r) {
                    return function(e, t, n) {
                        if (t && t.handleEvent) {
                            "click" === e && Object(o["c"])(t, "handleEvent", function(t) {
                                return function(e) {
                                    x("click", v.bind(null, "dom"))(e);
                                    return t.call(this, e)
                                }
                            });
                            "keypress" === e && Object(o["c"])(t, "handleEvent", function(t) {
                                return function(e) {
                                    k(v.bind(null, "dom"))(e);
                                    return t.call(this, e)
                                }
                            })
                        } else {
                            "click" === e && x("click", v.bind(null, "dom"), true)(this);
                            "keypress" === e && k(v.bind(null, "dom"))(this)
                        }
                        return r.call(this, e, t, n)
                    }
                });
                Object(o["c"])(t, "removeEventListener", function(i) {
                    return function(e, t, n) {
                        var r = t;
                        try {
                            r = r && (r.__sentry_wrapped__ || r)
                        } catch (e) {}
                        return i.call(this, e, r, n)
                    }
                })
            })
        }
        var S = 1e3;
        var O = 0;
        var T;
        var j;

        function x(t, n, r) {
            void 0 === r && (r = false);
            return function(e) {
                T = void 0;
                if (!e || j === e) return;
                j = e;
                O && clearTimeout(O);
                r ? O = setTimeout(function() {
                    n({
                        event: e,
                        name: t
                    })
                }) : n({
                    event: e,
                    name: t
                })
            }
        }

        function k(r) {
            return function(e) {
                var t;
                try {
                    t = e.target
                } catch (e) {
                    return
                }
                var n = t && t.tagName;
                if (!n || "INPUT" !== n && "TEXTAREA" !== n && !t.isContentEditable) return;
                T || x("input", r)(e);
                clearTimeout(T);
                T = setTimeout(function() {
                    T = void 0
                }, S)
            }
        }
        var I = null;

        function P() {
            I = a.onerror;
            a.onerror = function(e, t, n, r, i) {
                v("error", {
                    column: r,
                    error: i,
                    line: n,
                    msg: e,
                    url: t
                });
                if (I) return I.apply(this, arguments);
                return false
            }
        }
        var R = null;

        function C() {
            R = a.onunhandledrejection;
            a.onunhandledrejection = function(e) {
                v("unhandledrejection", e);
                if (R) return R.apply(this, arguments);
                return true
            }
        }
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js": function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return r
        });
        n.d(t, "e", function() {
            return i
        });
        n.d(t, "a", function() {
            return o
        });
        n.d(t, "b", function() {
            return a
        });
        n.d(t, "k", function() {
            return s
        });
        n.d(t, "i", function() {
            return u
        });
        n.d(t, "h", function() {
            return c
        });
        n.d(t, "f", function() {
            return f
        });
        n.d(t, "c", function() {
            return l
        });
        n.d(t, "j", function() {
            return d
        });
        n.d(t, "m", function() {
            return p
        });
        n.d(t, "l", function() {
            return v
        });
        n.d(t, "g", function() {
            return h
        });

        function r(e) {
            switch (Object.prototype.toString.call(e)) {
                case "[object Error]":
                    return true;
                case "[object Exception]":
                    return true;
                case "[object DOMException]":
                    return true;
                default:
                    return h(e, Error)
            }
        }

        function i(e) {
            return "[object ErrorEvent]" === Object.prototype.toString.call(e)
        }

        function o(e) {
            return "[object DOMError]" === Object.prototype.toString.call(e)
        }

        function a(e) {
            return "[object DOMException]" === Object.prototype.toString.call(e)
        }

        function s(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        }

        function u(e) {
            return null === e || "object" !== typeof e && "function" !== typeof e
        }

        function c(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }

        function f(e) {
            return "undefined" !== typeof Event && h(e, Event)
        }

        function l(e) {
            return "undefined" !== typeof Element && h(e, Element)
        }

        function d(e) {
            return "[object RegExp]" === Object.prototype.toString.call(e)
        }

        function p(e) {
            return Boolean(e && e.then && "function" === typeof e.then)
        }

        function v(e) {
            return c(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
        }

        function h(e, t) {
            try {
                return e instanceof t
            } catch (e) {
                return false
            }
        }
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/logger.js": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var r = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js");
        var i = Object(r["i"])();
        var o = "Sentry Logger ";
        var a = function() {
            function e() {
                this._enabled = false
            }
            e.prototype.disable = function() {
                this._enabled = false
            };
            e.prototype.enable = function() {
                this._enabled = true
            };
            e.prototype.log = function() {
                var e = [];
                for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                if (!this._enabled) return;
                Object(r["d"])(function() {
                    i.console.log(o + "[Log]: " + e.join(" "))
                })
            };
            e.prototype.warn = function() {
                var e = [];
                for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                if (!this._enabled) return;
                Object(r["d"])(function() {
                    i.console.warn(o + "[Warn]: " + e.join(" "))
                })
            };
            e.prototype.error = function() {
                var e = [];
                for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                if (!this._enabled) return;
                Object(r["d"])(function() {
                    i.console.error(o + "[Error]: " + e.join(" "))
                })
            };
            return e
        }();
        i.__SENTRY__ = i.__SENTRY__ || {};
        var s = i.__SENTRY__.logger || (i.__SENTRY__.logger = new a)
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/memo.js": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = function() {
            function e() {
                this._hasWeakSet = "function" === typeof WeakSet;
                this._inner = this._hasWeakSet ? new WeakSet : []
            }
            e.prototype.memoize = function(e) {
                if (this._hasWeakSet) {
                    if (this._inner.has(e)) return true;
                    this._inner.add(e);
                    return false
                }
                for (var t = 0; t < this._inner.length; t++) {
                    var n = this._inner[t];
                    if (n === e) return true
                }
                this._inner.push(e);
                return false
            };
            e.prototype.unmemoize = function(e) {
                if (this._hasWeakSet) this._inner.delete(e);
                else
                    for (var t = 0; t < this._inner.length; t++)
                        if (this._inner[t] === e) {
                            this._inner.splice(t, 1);
                            break
                        }
            };
            return e
        }()
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js": function(e, P, R) {
        "use strict";
        (function(e, t, n) {
            R.d(P, "f", function() {
                return r
            });
            R.d(P, "l", function() {
                return i
            });
            R.d(P, "i", function() {
                return s
            });
            R.d(P, "q", function() {
                return u
            });
            R.d(P, "o", function() {
                return f
            });
            R.d(P, "g", function() {
                return l
            });
            R.d(P, "d", function() {
                return d
            });
            R.d(P, "c", function() {
                return p
            });
            R.d(P, "b", function() {
                return v
            });
            R.d(P, "j", function() {
                return h
            });
            R.d(P, "k", function() {
                return m
            });
            R.d(P, "e", function() {
                return w
            });
            R.d(P, "p", function() {
                return E
            });
            R.d(P, "n", function() {
                return O
            });
            R.d(P, "m", function() {
                return j
            });
            R.d(P, "h", function() {
                return k
            });
            R.d(P, "a", function() {
                return I
            });
            var c = R("./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js");
            var a = R("./src/main/webapp/universal/node_modules/@sentry/utils/esm/string.js");

            function r(e, t) {
                return e.require(t)
            }

            function i() {
                return "[object process]" === Object.prototype.toString.call("undefined" !== typeof e ? e : 0)
            }
            var o = {};

            function s() {
                return i() ? t : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : o
            }

            function u() {
                var e = s();
                var t = e.crypto || e.msCrypto;
                if (!(void 0 === t) && t.getRandomValues) {
                    var n = new Uint16Array(8);
                    t.getRandomValues(n);
                    n[3] = 4095 & n[3] | 16384;
                    n[4] = 16383 & n[4] | 32768;
                    var r = function(e) {
                        var t = e.toString(16);
                        while (t.length < 4) t = "0" + t;
                        return t
                    };
                    return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0;
                    var n = "x" === e ? t : 3 & t | 8;
                    return n.toString(16)
                })
            }

            function f(e) {
                if (!e) return {};
                var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!t) return {};
                var n = t[6] || "";
                var r = t[8] || "";
                return {
                    host: t[4],
                    path: t[5],
                    protocol: t[2],
                    relative: t[5] + n + r
                }
            }

            function l(e) {
                if (e.message) return e.message;
                if (e.exception && e.exception.values && e.exception.values[0]) {
                    var t = e.exception.values[0];
                    if (t.type && t.value) return t.type + ": " + t.value;
                    return t.type || t.value || e.event_id || "<unknown>"
                }
                return e.event_id || "<unknown>"
            }

            function d(e) {
                var t = s();
                var n = ["debug", "info", "warn", "error", "log", "assert"];
                if (!("console" in t)) return e();
                var r = t.console;
                var i = {};
                n.forEach(function(e) {
                    if (e in t.console && r[e].__sentry_original__) {
                        i[e] = r[e];
                        r[e] = r[e].__sentry_original__
                    }
                });
                var o = e();
                Object.keys(i).forEach(function(e) {
                    r[e] = i[e]
                });
                return o
            }

            function p(e, t, n) {
                e.exception = e.exception || {};
                e.exception.values = e.exception.values || [];
                e.exception.values[0] = e.exception.values[0] || {};
                e.exception.values[0].value = e.exception.values[0].value || t || "";
                e.exception.values[0].type = e.exception.values[0].type || n || "Error"
            }

            function v(t, n) {
                void 0 === n && (n = {});
                try {
                    t.exception.values[0].mechanism = t.exception.values[0].mechanism || {};
                    Object.keys(n).forEach(function(e) {
                        t.exception.values[0].mechanism[e] = n[e]
                    })
                } catch (e) {}
            }

            function h() {
                try {
                    return document.location.href
                } catch (e) {
                    return ""
                }
            }

            function m(e) {
                try {
                    var t = e;
                    var n = 5;
                    var r = 80;
                    var i = [];
                    var o = 0;
                    var a = 0;
                    var s = " > ";
                    var u = s.length;
                    var c = void 0;
                    while (t && o++ < n) {
                        c = y(t);
                        if ("html" === c || o > 1 && a + i.length * u + c.length >= r) break;
                        i.push(c);
                        a += c.length;
                        t = t.parentNode
                    }
                    return i.reverse().join(s)
                } catch (e) {
                    return "<unknown>"
                }
            }

            function y(e) {
                var t = e;
                var n = [];
                var r;
                var i;
                var o;
                var a;
                var s;
                if (!t || !t.tagName) return "";
                n.push(t.tagName.toLowerCase());
                t.id && n.push("#" + t.id);
                r = t.className;
                if (r && Object(c["k"])(r)) {
                    i = r.split(/\s+/);
                    for (s = 0; s < i.length; s++) n.push("." + i[s])
                }
                var u = ["type", "name", "title", "alt"];
                for (s = 0; s < u.length; s++) {
                    o = u[s];
                    a = t.getAttribute(o);
                    a && n.push("[" + o + '="' + a + '"]')
                }
                return n.join("")
            }
            var g = Date.now();
            var _ = 0;
            var b = {
                now: function() {
                    var e = Date.now() - g;
                    e < _ && (e = _);
                    _ = e;
                    return e
                },
                timeOrigin: g
            };
            var w = function() {
                if (i()) try {
                    var e = r(n, "perf_hooks");
                    return e.performance
                } catch (e) {
                    return b
                }
                s().performance && void 0 === performance.timeOrigin && (performance.timeOrigin = performance.timing && performance.timing.navigationStart || g);
                return s().performance || b
            }();

            function E() {
                return (w.timeOrigin + w.now()) / 1e3
            }
            var S = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

            function O(e) {
                var t = e.match(S) || [];
                var n = parseInt(t[1], 10);
                var r = parseInt(t[2], 10);
                var i = parseInt(t[3], 10);
                return {
                    buildmetadata: t[5],
                    major: isNaN(n) ? void 0 : n,
                    minor: isNaN(r) ? void 0 : r,
                    patch: isNaN(i) ? void 0 : i,
                    prerelease: t[4]
                }
            }
            var T = 6e4;

            function j(e, t) {
                if (!t) return T;
                var n = parseInt("" + t, 10);
                if (!isNaN(n)) return 1e3 * n;
                var r = Date.parse("" + t);
                if (!isNaN(r)) return r - e;
                return T
            }
            var x = "<anonymous>";

            function k(e) {
                try {
                    if (!e || "function" !== typeof e) return x;
                    return e.name || x
                } catch (e) {
                    return x
                }
            }

            function I(e, t, n) {
                void 0 === n && (n = 5);
                var r = t.lineno || 0;
                var i = e.length;
                var o = Math.max(Math.min(i, r - 1), 0);
                t.pre_context = e.slice(Math.max(0, o - n), o).map(function(e) {
                    return Object(a["c"])(e, 0)
                });
                t.context_line = Object(a["c"])(e[Math.min(i - 1, o)], t.colno || 0);
                t.post_context = e.slice(Math.min(o + 1, i), o + 1 + n).map(function(e) {
                    return Object(a["c"])(e, 0)
                })
            }
        }).call(this, R("./node_modules/process/browser.js"), R("./node_modules/webpack/buildin/global.js"), R("./node_modules/webpack/buildin/harmony-module.js")(e))
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/object.js": function(e, g, _) {
        "use strict";
        (function(n) {
            _.d(g, "c", function() {
                return e
            });
            _.d(g, "f", function() {
                return t
            });
            _.d(g, "e", function() {
                return s
            });
            _.d(g, "g", function() {
                return v
            });
            _.d(g, "d", function() {
                return h
            });
            _.d(g, "b", function() {
                return m
            });
            _.d(g, "a", function() {
                return y
            });
            var u = _("./src/main/webapp/universal/node_modules/tslib/tslib.es6.js");
            var c = _("./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js");
            var f = _("./src/main/webapp/universal/node_modules/@sentry/utils/esm/memo.js");
            var a = _("./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js");
            var o = _("./src/main/webapp/universal/node_modules/@sentry/utils/esm/string.js");

            function e(e, t, n) {
                if (!(t in e)) return;
                var r = e[t];
                var i = n(r);
                if ("function" === typeof i) try {
                    i.prototype = i.prototype || {};
                    Object.defineProperties(i, {
                        __sentry_original__: {
                            enumerable: false,
                            value: r
                        }
                    })
                } catch (e) {}
                e[t] = i
            }

            function t(t) {
                return Object.keys(t).map(function(e) {
                    return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                }).join("&")
            }

            function l(e) {
                if (Object(c["d"])(e)) {
                    var t = e;
                    var n = {
                        message: t.message,
                        name: t.name,
                        stack: t.stack
                    };
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n
                }
                if (Object(c["f"])(e)) {
                    var i = e;
                    var o = {};
                    o.type = i.type;
                    try {
                        o.target = Object(c["c"])(i.target) ? Object(a["k"])(i.target) : Object.prototype.toString.call(i.target)
                    } catch (e) {
                        o.target = "<unknown>"
                    }
                    try {
                        o.currentTarget = Object(c["c"])(i.currentTarget) ? Object(a["k"])(i.currentTarget) : Object.prototype.toString.call(i.currentTarget)
                    } catch (e) {
                        o.currentTarget = "<unknown>"
                    }
                    "undefined" !== typeof CustomEvent && Object(c["g"])(e, CustomEvent) && (o.detail = i.detail);
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (o[r] = i);
                    return o
                }
                return e
            }

            function r(e) {
                return ~-encodeURI(e).split(/%..|./).length
            }

            function i(e) {
                return r(JSON.stringify(e))
            }

            function s(e, t, n) {
                void 0 === t && (t = 3);
                void 0 === n && (n = 102400);
                var r = h(e, t);
                if (i(r) > n) return s(e, t - 1, n);
                return r
            }

            function d(e) {
                var t = Object.prototype.toString.call(e);
                if ("string" === typeof e) return e;
                if ("[object Object]" === t) return "[Object]";
                if ("[object Array]" === t) return "[Array]";
                var n = p(e);
                return Object(c["i"])(n) ? n : t
            }

            function p(e, t) {
                if ("domain" === t && e && "object" === typeof e && e._events) return "[Domain]";
                if ("domainEmitter" === t) return "[DomainEmitter]";
                if ("undefined" !== typeof n && e === n) return "[Global]";
                if ("undefined" !== typeof window && e === window) return "[Window]";
                if ("undefined" !== typeof document && e === document) return "[Document]";
                if (Object(c["l"])(e)) return "[SyntheticEvent]";
                if ("number" === typeof e && e !== e) return "[NaN]";
                if (void 0 === e) return "[undefined]";
                if ("function" === typeof e) return "[Function: " + Object(a["h"])(e) + "]";
                return e
            }

            function v(e, t, n, r) {
                void 0 === n && (n = 1 / 0);
                void 0 === r && (r = new f["a"]);
                if (0 === n) return d(t);
                if (null !== t && void 0 !== t && "function" === typeof t.toJSON) return t.toJSON();
                var i = p(t, e);
                if (Object(c["i"])(i)) return i;
                var o = l(t);
                var a = Array.isArray(t) ? [] : {};
                if (r.memoize(t)) return "[Circular ~]";
                for (var s in o) {
                    if (!Object.prototype.hasOwnProperty.call(o, s)) continue;
                    a[s] = v(s, o[s], n - 1, r)
                }
                r.unmemoize(t);
                return a
            }

            function h(e, n) {
                try {
                    return JSON.parse(JSON.stringify(e, function(e, t) {
                        return v(e, t, n)
                    }))
                } catch (e) {
                    return "**non-serializable**"
                }
            }

            function m(e, t) {
                void 0 === t && (t = 40);
                var n = Object.keys(l(e));
                n.sort();
                if (!n.length) return "[object has no keys]";
                if (n[0].length >= t) return Object(o["d"])(n[0], t);
                for (var r = n.length; r > 0; r--) {
                    var i = n.slice(0, r).join(", ");
                    if (i.length > t) continue;
                    if (r === n.length) return i;
                    return Object(o["d"])(i, t)
                }
                return ""
            }

            function y(e) {
                var t, n;
                if (Object(c["h"])(e)) {
                    var r = e;
                    var i = {};
                    try {
                        for (var o = u["__values"](Object.keys(r)), a = o.next(); !a.done; a = o.next()) {
                            var s = a.value;
                            "undefined" !== typeof r[s] && (i[s] = y(r[s]))
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (n = o.return) && n.call(o)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return i
                }
                if (Array.isArray(e)) return e.map(y);
                return e
            }
        }).call(this, _("./node_modules/webpack/buildin/global.js"))
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/promisebuffer.js": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/error.js");
        var i = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/syncpromise.js");
        var o = function() {
            function e(e) {
                this._limit = e;
                this._buffer = []
            }
            e.prototype.isReady = function() {
                return void 0 === this._limit || this.length() < this._limit
            };
            e.prototype.add = function(e) {
                var t = this;
                if (!this.isReady()) return i["a"].reject(new r["a"]("Not adding Promise due to buffer limit reached.")); - 1 === this._buffer.indexOf(e) && this._buffer.push(e);
                e.then(function() {
                    return t.remove(e)
                }).then(null, function() {
                    return t.remove(e).then(null, function() {})
                });
                return e
            };
            e.prototype.remove = function(e) {
                var t = this._buffer.splice(this._buffer.indexOf(e), 1)[0];
                return t
            };
            e.prototype.length = function() {
                return this._buffer.length
            };
            e.prototype.drain = function(n) {
                var r = this;
                return new i["a"](function(e) {
                    var t = setTimeout(function() {
                        n && n > 0 && e(false)
                    }, n);
                    i["a"].all(r._buffer).then(function() {
                        clearTimeout(t);
                        e(true)
                    }).then(null, function() {
                        e(true)
                    })
                })
            };
            return e
        }()
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/string.js": function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return i
        });
        n.d(t, "c", function() {
            return o
        });
        n.d(t, "b", function() {
            return a
        });
        n.d(t, "a", function() {
            return s
        });
        var r = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js");

        function i(e, t) {
            void 0 === t && (t = 0);
            if ("string" !== typeof e || 0 === t) return e;
            return e.length <= t ? e : e.substr(0, t) + "..."
        }

        function o(e, t) {
            var n = e;
            var r = n.length;
            if (r <= 150) return n;
            t > r && (t = r);
            var i = Math.max(t - 60, 0);
            i < 5 && (i = 0);
            var o = Math.min(i + 140, r);
            o > r - 5 && (o = r);
            o === r && (i = Math.max(o - 140, 0));
            n = n.slice(i, o);
            i > 0 && (n = "'{snip} " + n);
            o < r && (n += " {snip}");
            return n
        }

        function a(e, t) {
            if (!Array.isArray(e)) return "";
            var n = [];
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                try {
                    n.push(String(i))
                } catch (e) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(t)
        }

        function s(e, t) {
            if (Object(r["j"])(t)) return t.test(e);
            if ("string" === typeof t) return -1 !== e.indexOf(t);
            return false
        }
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/supports.js": function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return r
        });
        n.d(t, "a", function() {
            return a
        });
        n.d(t, "b", function() {
            return s
        });
        n.d(t, "d", function() {
            return u
        });
        n.d(t, "f", function() {
            return f
        });
        n.d(t, "h", function() {
            return l
        });
        n.d(t, "g", function() {
            return d
        });
        n.d(t, "e", function() {
            return p
        });
        var i = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/logger.js");
        var o = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js");

        function r() {
            try {
                new ErrorEvent("");
                return true
            } catch (e) {
                return false
            }
        }

        function a() {
            try {
                new DOMError("");
                return true
            } catch (e) {
                return false
            }
        }

        function s() {
            try {
                new DOMException("");
                return true
            } catch (e) {
                return false
            }
        }

        function u() {
            if (!("fetch" in Object(o["i"])())) return false;
            try {
                new Headers;
                new Request("");
                new Response;
                return true
            } catch (e) {
                return false
            }
        }

        function c(e) {
            return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
        }

        function f() {
            if (!u()) return false;
            var e = Object(o["i"])();
            if (c(e.fetch)) return true;
            var t = false;
            var n = e.document;
            if (n) try {
                var r = n.createElement("iframe");
                r.hidden = true;
                n.head.appendChild(r);
                r.contentWindow && r.contentWindow.fetch && (t = c(r.contentWindow.fetch));
                n.head.removeChild(r)
            } catch (e) {
                i["a"].warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
            }
            return t
        }

        function l() {
            return "ReportingObserver" in Object(o["i"])()
        }

        function d() {
            if (!u()) return false;
            try {
                new Request("_", {
                    referrerPolicy: "origin"
                });
                return true
            } catch (e) {
                return false
            }
        }

        function p() {
            var e = Object(o["i"])();
            var t = e.chrome;
            var n = t && t.app && t.app.runtime;
            var r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
            return !n && r
        }
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/syncpromise.js": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js");
        var i;
        (function(e) {
            e["PENDING"] = "PENDING";
            e["RESOLVED"] = "RESOLVED";
            e["REJECTED"] = "REJECTED"
        })(i = i || {});
        var o = function() {
            function a(e) {
                var n = this;
                this._state = i.PENDING;
                this._handlers = [];
                this._resolve = function(e) {
                    n._setResult(i.RESOLVED, e)
                };
                this._reject = function(e) {
                    n._setResult(i.REJECTED, e)
                };
                this._setResult = function(e, t) {
                    if (n._state !== i.PENDING) return;
                    if (Object(r["m"])(t)) {
                        t.then(n._resolve, n._reject);
                        return
                    }
                    n._state = e;
                    n._value = t;
                    n._executeHandlers()
                };
                this._attachHandler = function(e) {
                    n._handlers = n._handlers.concat(e);
                    n._executeHandlers()
                };
                this._executeHandlers = function() {
                    if (n._state === i.PENDING) return;
                    n._state === i.REJECTED ? n._handlers.forEach(function(e) {
                        e.onrejected && e.onrejected(n._value)
                    }) : n._handlers.forEach(function(e) {
                        e.onfulfilled && e.onfulfilled(n._value)
                    });
                    n._handlers = []
                };
                try {
                    e(this._resolve, this._reject)
                } catch (e) {
                    this._reject(e)
                }
            }
            a.prototype.toString = function() {
                return "[object SyncPromise]"
            };
            a.resolve = function(t) {
                return new a(function(e) {
                    e(t)
                })
            };
            a.reject = function(n) {
                return new a(function(e, t) {
                    t(n)
                })
            };
            a.all = function(e) {
                return new a(function(n, r) {
                    if (!Array.isArray(e)) {
                        r(new TypeError("Promise.all requires an array as input."));
                        return
                    }
                    if (0 === e.length) {
                        n([]);
                        return
                    }
                    var i = e.length;
                    var o = [];
                    e.forEach(function(e, t) {
                        a.resolve(e).then(function(e) {
                            o[t] = e;
                            i -= 1;
                            if (0 !== i) return;
                            n(o)
                        }).then(null, r)
                    })
                })
            };
            a.prototype.then = function(r, i) {
                var e = this;
                return new a(function(t, n) {
                    e._attachHandler({
                        onfulfilled: function(e) {
                            if (!r) {
                                t(e);
                                return
                            }
                            try {
                                t(r(e));
                                return
                            } catch (e) {
                                n(e);
                                return
                            }
                        },
                        onrejected: function(e) {
                            if (!i) {
                                n(e);
                                return
                            }
                            try {
                                t(i(e));
                                return
                            } catch (e) {
                                n(e);
                                return
                            }
                        }
                    })
                })
            };
            a.prototype.catch = function(e) {
                return this.then(function(e) {
                    return e
                }, e)
            };
            a.prototype.finally = function(i) {
                var o = this;
                return new a(function(e, t) {
                    var n;
                    var r;
                    return o.then(function(e) {
                        r = false;
                        n = e;
                        i && i()
                    }, function(e) {
                        r = true;
                        n = e;
                        i && i()
                    }).then(function() {
                        if (r) {
                            t(n);
                            return
                        }
                        e(n)
                    })
                })
            };
            return a
        }()
    },
    "./src/main/webapp/universal/node_modules/@sqs/praetor/build/module/index.js": function(e, t, n) {
        "use strict";
        n.r(t);
        n.d(t, "StaticPraetorClient", function() {
            return u
        });
        n.d(t, "Configuration", function() {
            return i
        });
        n.d(t, "ExperimentType", function() {
            return a
        });
        var r = "true";
        var o = "default";
        var a;
        (function(e) {
            e["FEATURE_TOGGLE"] = "FEATURE_TOGGLE";
            e["AB_TEST"] = "AB_TEST"
        })(a = a || {});
        var i = function() {
            function e(e) {
                var t = this;
                this.experiments = {};
                this.isConfigurationLoaded = Boolean(e.isConfigurationLoaded);
                Array.isArray(e.experimentContextList) && e.experimentContextList.forEach(function(e) {
                    null !== e && "object" === typeof e && e.hasOwnProperty("name") && (t.experiments[e.name] = e)
                })
            }
            e.prototype.isValid = function() {
                return this.isConfigurationLoaded
            };
            e.prototype.getContext = function(e) {
                return this.experiments[e]
            };
            return e
        }();
        var s = function() {
            function e(e) {
                this.configuration = new i(e)
            }
            e.prototype.getFeatureToggle = function(e, t) {
                var n = this.getContextValidity(e, a.FEATURE_TOGGLE),
                    r = n.context,
                    i = n.error;
                if (i || null === r) return {
                    enabled: t,
                    error: i
                };
                if (r.containsError) return {
                    enabled: this.isFeatureToggleEnabled(r),
                    error: "The specified feature has an invalid server-side definition"
                };
                return {
                    enabled: this.isFeatureToggleEnabled(r)
                }
            };
            e.prototype.getABTestVariant = function(e, t) {
                var n = this.getContextValidity(e, a.AB_TEST),
                    r = n.context,
                    i = n.error;
                if (i || null === r) return {
                    error: i,
                    segment: o,
                    variant: t
                };
                if (r.containsError) return {
                    error: "The specified feature has an invalid server-side definition",
                    segment: r.segmentName,
                    variant: r.variant
                };
                return {
                    segment: r.segmentName,
                    variant: r.variant
                }
            };
            e.prototype.getAllExperiments = function() {
                return this.configuration
            };
            e.prototype.getContextValidity = function(e, t) {
                if (!this.configuration.isValid()) return {
                    context: null,
                    error: "The underlying Praetor configuration is not loaded"
                };
                var n = this.configuration.getContext(e);
                if (void 0 === n) return {
                    context: null,
                    error: "The specified feature does not exist"
                };
                if (n.experimentType !== t) return {
                    context: null,
                    error: "The specified feature is not a " + t
                };
                return {
                    context: n
                }
            };
            e.prototype.isFeatureToggleEnabled = function(e) {
                return e.variant === r
            };
            return e
        }();
        var u = s
    },
    "./src/main/webapp/universal/node_modules/@sqs/rum-collector/lib/index.js": function(e, t, n) {
        "use strict";
        n.r(t);
        n.d(t, "default", function() {
            return Ut
        });
        n.d(t, "getPerformanceData", function() {
            return Ze
        });
        n.d(t, "getPerformanceMetrics", function() {
            return Zt
        });
        n.d(t, "mark", function() {
            return en
        });
        n.d(t, "measure", function() {
            return tn
        });
        n.d(t, "getDecodedBodySize", function() {
            return Ft
        });
        n.d(t, "getDomContentLoadedEventEnd", function() {
            return qt
        });
        n.d(t, "getDomContentLoadedEventStart", function() {
            return Ht
        });
        n.d(t, "getEncodedBodySize", function() {
            return zt
        });
        n.d(t, "getFirstContentfulPaint", function() {
            return Wt
        });
        n.d(t, "getLargestContentfulPaint", function() {
            return Xt
        });
        n.d(t, "getLoadEventEnd", function() {
            return Gt
        });
        n.d(t, "getLoadEventStart", function() {
            return Kt
        });
        n.d(t, "getResponseStart", function() {
            return Jt
        });
        n.d(t, "getTimeToInteractive", function() {
            return $t
        });
        n.d(t, "trackLoadPerformance", function() {
            return ln
        });
        var i = n("./src/main/webapp/universal/node_modules/@sqs/praetor/build/module/index.js");
        var r = function(e, t) {
            r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return r(e, t)
        };

        function a(e, t) {
            r(e, t);

            function n() {
                this.constructor = e
            }
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }
        var v = function() {
            v = Object.assign || function e(t) {
                for (var n, r = 1, i = arguments.length; r < i; r++) {
                    n = arguments[r];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
                }
                return t
            };
            return v.apply(this, arguments)
        };

        function h(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols)
                for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
            return n
        }

        function o(e, t, n, r) {
            var i = arguments.length,
                o = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r,
                a;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
            return i > 3 && o && Object.defineProperty(t, n, o), o
        }

        function s(n, r) {
            return function(e, t) {
                r(e, t, n)
            }
        }

        function u(e, t) {
            if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
        }

        function c(e, a, n, s) {
            function u(t) {
                return t instanceof n ? t : new n(function(e) {
                    e(t)
                })
            }
            return new(n = n || Promise)(function(t, n) {
                function r(e) {
                    try {
                        o(s.next(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function i(e) {
                    try {
                        o(s["throw"](e))
                    } catch (e) {
                        n(e)
                    }
                }

                function o(e) {
                    e.done ? t(e.value) : u(e.value).then(r, i)
                }
                o((s = s.apply(e, a || [])).next())
            })
        }

        function f(e, n) {
            var r = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                i, o, a, t;
            return t = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" === typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function s(t) {
                return function(e) {
                    return u([t, e])
                }
            }

            function u(t) {
                if (i) throw new TypeError("Generator is already executing.");
                while (r) try {
                    if (i = 1, o && (a = 2 & t[0] ? o["return"] : t[0] ? o["throw"] || ((a = o["return"]) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                    (o = 0, a) && (t = [2 & t[0], a.value]);
                    switch (t[0]) {
                        case 0:
                        case 1:
                            a = t;
                            break;
                        case 4:
                            r.label++;
                            return {
                                value: t[1],
                                done: false
                            };
                        case 5:
                            r.label++;
                            o = t[1];
                            t = [0];
                            continue;
                        case 7:
                            t = r.ops.pop();
                            r.trys.pop();
                            continue;
                        default:
                            if (!(a = r.trys, a = a.length > 0 && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                r = 0;
                                continue
                            }
                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                r.label = t[1];
                                break
                            }
                            if (6 === t[0] && r.label < a[1]) {
                                r.label = a[1];
                                a = t;
                                break
                            }
                            if (a && r.label < a[2]) {
                                r.label = a[2];
                                r.ops.push(t);
                                break
                            }
                            a[2] && r.ops.pop();
                            r.trys.pop();
                            continue
                    }
                    t = n.call(e, r)
                } catch (e) {
                    t = [6, e];
                    o = 0
                } finally {
                    i = a = 0
                }
                if (5 & t[0]) throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: true
                }
            }
        }

        function l(e, t) {
            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
        }

        function d(e) {
            var t = "function" === typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
            if (n) return n.call(e);
            if (e && "number" === typeof e.length) return {
                next: function() {
                    e && r >= e.length && (e = void 0);
                    return {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function p(e, t) {
            var n = "function" === typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r = n.call(e),
                i, o = [],
                a;
            try {
                while ((void 0 === t || t-- > 0) && !(i = r.next()).done) o.push(i.value)
            } catch (e) {
                a = {
                    error: e
                }
            } finally {
                try {
                    i && !i.done && (n = r["return"]) && n.call(r)
                } finally {
                    if (a) throw a.error
                }
            }
            return o
        }

        function m() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(p(arguments[t]));
            return e
        }

        function y() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
            for (var r = Array(e), i = 0, t = 0; t < n; t++)
                for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
            return r
        }

        function g(e) {
            return this instanceof g ? (this.v = e, this) : new g(e)
        }

        function _(e, t, n) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var i = n.apply(e, t || []),
                o, a = [];
            return o = {}, r("next"), r("throw"), r("return"), o[Symbol.asyncIterator] = function() {
                return this
            }, o;

            function r(r) {
                i[r] && (o[r] = function(n) {
                    return new Promise(function(e, t) {
                        a.push([r, n, e, t]) > 1 || s(r, n)
                    })
                })
            }

            function s(e, t) {
                try {
                    u(i[e](t))
                } catch (e) {
                    l(a[0][3], e)
                }
            }

            function u(e) {
                e.value instanceof g ? Promise.resolve(e.value.v).then(c, f) : l(a[0][2], e)
            }

            function c(e) {
                s("next", e)
            }

            function f(e) {
                s("throw", e)
            }

            function l(e, t) {
                (e(t), a.shift(), a.length) && s(a[0][0], a[0][1])
            }
        }

        function b(r) {
            var e, i;
            return e = {}, t("next"), t("throw", function(e) {
                throw e
            }), t("return"), e[Symbol.iterator] = function() {
                return this
            }, e;

            function t(t, n) {
                e[t] = r[t] ? function(e) {
                    return (i = !i) ? {
                        value: g(r[t](e)),
                        done: "return" === t
                    } : n ? n(e) : e
                } : n
            }
        }

        function w(i) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var e = i[Symbol.asyncIterator],
                t;
            return e ? e.call(i) : (i = "function" === typeof d ? d(i) : i[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                return this
            }, t);

            function n(r) {
                t[r] = i[r] && function(n) {
                    return new Promise(function(e, t) {
                        n = i[r](n), o(e, t, n.done, n.value)
                    })
                }
            }

            function o(t, e, n, r) {
                Promise.resolve(r).then(function(e) {
                    t({
                        value: e,
                        done: n
                    })
                }, e)
            }
        }

        function E(e, t) {
            Object.defineProperty ? Object.defineProperty(e, "raw", {
                value: t
            }) : e.raw = t;
            return e
        }

        function S(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            t.default = e;
            return t
        }

        function O(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function T(e, t) {
            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
            return t.get(e)
        }

        function j(e, t, n) {
            if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
            t.set(e, n);
            return n
        }
        var x = n("./src/main/webapp/universal/node_modules/tti-polyfill/tti-polyfill.js");
        var k = "/api/1/performance";
        var I = "/records";
        var P = "/settings";
        var R = "/error";
        var C = "2.3.5";
        var A = function(e) {
            return {
                app: "a",
                data: {
                    __encoding_config__: e,
                    __encoding_key__: "d"
                },
                event: "e",
                pageLoadId: "pl",
                ts: "t"
            }
        };
        var L = {
            downlink: "do",
            effectiveType: "ef",
            rtt: "rtt",
            saveData: "sd"
        };
        var D = {
            devicePixelRatio: "dpr",
            screenHeight: "sh",
            screenWidth: "sw",
            viewportHeight: "vh",
            viewportWidth: "vw"
        };
        var N = {
            deviceMemory: "dm",
            hardwareConcurrency: "hc"
        };
        var M = {
            abTest: "ab",
            analyticsId: "aid",
            connectEnd: "ce",
            connectStart: "c",
            connection: {
                __encoding_config__: L,
                __encoding_key__: "con"
            },
            context: "ctx",
            decodedBodySize: "db",
            deliveryType: "dt",
            display: {
                __encoding_config__: D,
                __encoding_key__: "disp"
            },
            domComplete: "dc",
            domContentLoadedEventEnd: "de",
            domContentLoadedEventStart: "ds",
            domInteractive: "di",
            domLoading: "d",
            domainLookupEnd: "dle",
            domainLookupStart: "dl",
            encodedBodySize: "eb",
            fetchStart: "f",
            firstContentfulPaint: "fcp",
            firstInputDelay: "fid",
            firstInteraction: "fi",
            firstPaint: "fp",
            hardware: {
                __encoding_config__: N,
                __encoding_key__: "hdw"
            },
            hash: "h",
            hostname: "hn",
            loadEventEnd: "le",
            loadEventStart: "l",
            marketingId: "mid",
            memberId: "mem",
            navigationStart: "n",
            navigationType: "nt",
            nextHopProtocol: "nh",
            pathname: "p",
            redirectCount: "rc",
            redirectEnd: "rde",
            redirectStart: "rd",
            requestStart: "r",
            responseEnd: "re",
            responseStart: "rs",
            secureConnectionStart: "s",
            supportLevel: "sl",
            transferSize: "t",
            tti: "tti",
            unloadEventEnd: "ue",
            unloadEventStart: "u",
            version: "v",
            visibilityStateOnDCL: "vs"
        };
        var B = {
            duration: "d",
            endMarkDetail: "e",
            measureDetail: "m",
            name: "n",
            startMarkDetail: "s",
            startTime: "st"
        };
        var U = {
            info: {
                __encoding_config__: {
                    img: {
                        __encoding_config__: {
                            __encoding_config__: {
                                assetUrl: "a",
                                naturalHeight: "nh",
                                naturalWidth: "nw",
                                parentHeight: "ph",
                                parentWidth: "pw",
                                squarespaceSize: "s",
                                visibleInSession: "vs",
                                visibleOnLoad: "vl"
                            },
                            __encoding_skip__: true
                        },
                        __encoding_key__: "img"
                    }
                },
                __encoding_key__: "i"
            },
            timings: "t"
        };
        var F = Object.keys(M);
        var q = Object.keys(B);
        var H = Object.keys(U);
        var z = "userTiming";
        var Y = "mark";
        var W = "measure";
        var V = ["click", "mousedown", "keydown", "touchstart", "pointerdown"];
        var X = "DOMContentLoaded";
        var G = "load";
        var K = "sqsImageLoad";
        var J = [X, G];
        var $ = "beforeunload";
        var Z = "pagehide";
        var Q = "resourcetimingbufferfull";
        var ee = ["first-paint", "first-contentful-paint"];
        var te = [K, $, G, Q, Z];
        var ne = [G, $, Z];
        var re = "rum-";
        var ie = "ss_ab";
        var oe = "SS_MID";
        var ae = "SS_ANALYTICS_ID";
        var se = 3e4;
        var ue = 3e4;
        var ce = 5e4;
        var fe = /(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i;

        function le(e) {
            var t = e.timeStamp;
            var n = t > 1e12 ? +new Date : window.performance.now();
            var r = Math.max(n - t, 0);
            return {
                firstInputDelay: r,
                firstInteraction: n
            }
        }

        function de() {
            return !!(window.performance && window.performance.now && window.addEventListener)
        }

        function pe() {
            return !!(window.PerformanceMeasure && window.PerformanceMark && window.performance && window.performance.mark && window.performance.measure)
        }

        function ve() {
            if (!window.hasOwnProperty("PerformanceObserver")) return false;
            try {
                var e = new window.PerformanceObserver(function() {
                    return null
                });
                e.observe({
                    type: "mark"
                });
                e.disconnect()
            } catch (e) {
                return false
            }
            return true
        }

        function he() {
            return !!(window.performance && window.performance.getEntriesByType && window.PerformanceNavigationTiming)
        }

        function me() {
            return !!(window.performance && window.performance.timing && window.PerformanceTiming)
        }

        function ye() {
            return "function" === typeof window.navigator.sendBeacon && !fe.test(window.navigator.userAgent)
        }

        function ge() {
            return !!window.PerformancePaintTiming
        }

        function _e() {
            return !!window.LargestContentfulPaint
        }

        function be() {
            return !!window.PerformanceLongTaskTiming
        }

        function we(e) {
            var t = {};
            for (var n in e) "function" !== typeof e[n] && (t[n] = e[n]);
            return t
        }
        var Ee = function(e) {
            var n = e.type,
                t = e.buffered,
                r = void 0 === t || t,
                i = e.isReadyFn,
                o = void 0 === i ? function() {
                    return true
                } : i;
            return new Promise(function(t) {
                var e = new PerformanceObserver(function(e) {
                    o(e) && t(e)
                });
                e.observe({
                    type: n,
                    buffered: r
                })
            })
        };

        function Se() {
            var e = {};
            if (window.performance) {
                if (he()) {
                    e.supportLevel = 2;
                    Object.assign(e, we(window.performance.getEntriesByType("navigation")[0]))
                } else if (me()) {
                    e.supportLevel = 1;
                    Object.assign(e, window.performance.timing)
                }
                if (performance.navigation) {
                    e.navigationType = window.performance.navigation.type;
                    e.redirectCount = window.performance.navigation.redirectCount
                }
            }
            return e
        }
        var Oe = null;
        var Te = function() {
            return c(void 0, void 0, void 0, function() {
                return f(this, function(e) {
                    switch (e.label) {
                        case 0:
                            if (!!Oe) return [3, 4];
                            if (!(he() && ve())) return [3, 2];
                            return [4, xe()];
                        case 1:
                            Oe = e.sent();
                            return [3, 4];
                        case 2:
                            if (!me()) return [3, 4];
                            return [4, ke()];
                        case 3:
                            Oe = e.sent();
                            e.label = 4;
                        case 4:
                            return [2, Oe]
                    }
                })
            })
        };
        var je = function(n) {
            return c(void 0, void 0, void 0, function() {
                var t;
                return f(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Te()];
                        case 1:
                            t = e.sent();
                            if (!t || "number" !== typeof t[n]) return [2, null];
                            return [2, Math.round(t[n])]
                    }
                })
            })
        };

        function xe() {
            return c(this, void 0, void 0, function() {
                var t, n, r;
                return f(this, function(e) {
                    switch (e.label) {
                        case 0:
                            e.trys.push([0, 2, , 3]);
                            return [4, Ee({
                                type: "navigation",
                                isReadyFn: function(e) {
                                    var t = e.getEntries()[0];
                                    return !!(t.duration && t.duration > 0)
                                }
                            })];
                        case 1:
                            t = e.sent();
                            n = t.getEntries()[0];
                            return [2, we(n)];
                        case 2:
                            r = e.sent();
                            return [2, null];
                        case 3:
                            return [2]
                    }
                })
            })
        }

        function ke() {
            var t = function() {
                var e = we(window.performance.timing);
                var t = e.navigationStart;
                delete e.navigationStart;
                for (var n in e) e[n] > 0 && (e[n] = e[n] - t);
                return e
            };
            return new Promise(function(e) {
                "complete" !== document.readyState ? window.addEventListener("load", function() {
                    setTimeout(function() {
                        e(t())
                    })
                }) : e(t())
            })
        }

        function Ie(e) {
            var t = new RegExp("(^| )" + e + "=([^;]+)");
            var n = document.cookie.match(t);
            if (n) return n[2];
            return ""
        }

        function Pe(e) {
            if (window.localStorage && window.localStorage.getItem) return window.localStorage.getItem(e);
            return null
        }
        var Re;
        (function(e) {
            e["Beacon"] = "beacon";
            e["XHR"] = "xhr"
        })(Re = Re || {});

        function Ce() {
            var e = Le();
            var t = De();
            var n = Me();
            return {
                abTest: Ae(),
                analyticsId: Ie(ae),
                connection: e,
                deliveryType: ye() ? Re.Beacon : Re.XHR,
                display: t,
                hardware: n,
                hash: window.location.hash || "",
                hostname: window.location.hostname || "",
                marketingId: Ie(oe),
                memberId: Ne(),
                pathname: window.location.pathname || "/",
                version: C
            }
        }

        function Ae() {
            if (!window.atob) return null;
            var e = Pe(ie);
            if (e) try {
                return JSON.parse(window.atob(e))
            } catch (e) {
                return null
            }
            return null
        }

        function Le() {
            var e = {};
            var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (t) {
                var n = (1e3 * t.downlink).toString();
                e = {
                    downlink: parseInt(n, 10),
                    effectiveType: t.effectiveType,
                    rtt: t.rtt,
                    saveData: t.saveData
                }
            }
            return e
        }

        function De() {
            var e = window.devicePixelRatio;
            var t = window.screen,
                n = t.width,
                r = t.height;
            var i = document.documentElement,
                o = i.clientHeight,
                a = i.clientWidth;
            var s = {
                devicePixelRatio: e,
                screenHeight: r,
                screenWidth: n,
                viewportHeight: o,
                viewportWidth: a
            };
            return s
        }

        function Ne() {
            try {
                return window.Static.SQUARESPACE_CONTEXT.authenticatedAccount.id
            } catch (e) {
                return ""
            }
        }

        function Me() {
            return {
                deviceMemory: navigator.deviceMemory,
                hardwareConcurrency: navigator.hardwareConcurrency
            }
        }

        function Be(e) {
            var t;
            var n = e.name,
                r = e.startTime;
            if (ee.indexOf(n) >= 0) return t = {}, t[Ue(n)] = r, t;
            return {}
        }

        function Ue(e) {
            return e.replace(/-([a-zA-Z])/g, function(e, t) {
                var n = t && t.toUpperCase();
                return n || e
            })
        }

        function Fe(l, d) {
            var p = {};
            Object.keys(d).forEach(function(e) {
                var t = d[e];
                var n;
                var r;
                var i = l[e] || l;
                var o = typeof i;
                var a = "string" === o;
                var s = "object" === o || "undefined" === i;
                if (!a && !s) return;
                if (a) {
                    n = i;
                    r = qe(t)
                } else {
                    var u = i.__encoding_skip__;
                    var c = i.__encoding_config__;
                    var f = i.__encoding_fn__;
                    if (!u && !c && !l) throw new Error("Invalid encoding map");
                    n = u ? e : i.__encoding_key__;
                    r = c ? Fe(c, t) : f ? f(t) : t
                }
                n && (p["" + n] = r)
            });
            return p
        }

        function qe(e) {
            if ("boolean" === typeof e) return e ? 1 : 0;
            if (He(e)) return e.toString(36);
            return e
        }

        function He(e) {
            return ("number" === typeof e || e instanceof Number) && isFinite(e)
        }
        var ze;
        var Ye = [];

        function We(e, t) {
            if (ye() && navigator.sendBeacon(e, t)) return;
            var n = new XMLHttpRequest;
            n.open("POST", e, true);
            n.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            n.send(t)
        }

        function Ve(n) {
            ne.forEach(function(t) {
                window.addEventListener(t, function() {
                    try {
                        if (t === G) ze = window.setTimeout(Ge, ue, n);
                        else if ("number" === typeof ze) {
                            window.clearTimeout(ze);
                            ze = void 0
                        }
                        Ge(n)
                    } catch (e) {
                        n(e, t)
                    }
                })
            })
        }

        function Xe(e) {
            Ye.push(e)
        }

        function Ge(t) {
            try {
                if (Ye.length) {
                    var e = [];
                    while (Ye.length) {
                        var n = Ye.pop();
                        var r = JSON.stringify(n);
                        if (!(r.length <= ce && n)) throw new Error("Omitting individual metric because it's over the PER_METRIC_DELIVERY_SIZE (metric is " + r.length + " bytes, delivered from " + window.location.href + ")");
                        e.push(n)
                    }
                    if (e.length) {
                        var i = JSON.stringify(e);
                        We(k + I, i)
                    }
                }
            } catch (e) {
                t(e)
            }
        }

        function Ke(e) {
            We(k + R, e)
        }

        function Je(e, t) {
            var n = Fe(e, t);
            if (!n) throw new Error("Data is empty");
            Xe(n)
        }
        var $e = [];

        function Ze() {
            return $e
        }

        function Qe(e) {
            $e.push(e)
        }

        function et(e, t, n, r) {
            var i = Object.freeze({
                app: e,
                data: r,
                event: t,
                pageLoadId: n,
                ts: Date.now()
            });
            Qe(i);
            return i
        }
        var tt;
        (function(e) {
            e["OBSERVE"] = "observe";
            e["GATHER"] = "gather";
            e["BOTH"] = "both";
            e["NONE"] = ""
        })(tt = tt || {});
        var nt = function() {
            function e() {
                this.requiresContext = false;
                this.context = {};
                this.deliveryBuffer = [];
                this.entryTypes = [e.eventName];
                this.fireOnce = false;
                this.gatherEvents = [];
                this.supportType = tt.NONE;
                this.encodeConfig = A({});
                this.appName = "";
                this.pageLoadId = ""
            }
            e.prototype.getDeliveryBuffer = function() {
                return this.deliveryBuffer
            };
            e.prototype.getEventName = function() {
                return this.constructor.eventName
            };
            e.prototype.getEntryTypes = function() {
                return this.entryTypes
            };
            e.prototype.getGatherEvents = function() {
                return this.gatherEvents
            };
            e.prototype.getSupportType = function() {
                return this.supportType
            };
            e.prototype.shouldFireOnce = function() {
                return this.fireOnce
            };
            e.prototype.observerParse = function(e) {
                this.deliveryBuffer.push(e);
                return true
            };
            e.prototype.gather = function(e) {
                return e
            };
            e.prototype.gatherParse = function(e) {
                this.deliveryBuffer.push(e);
                return true
            };
            e.prototype.deliver = function() {
                while (this.deliveryBuffer.length) {
                    var e = this.deliveryBuffer.shift();
                    if (e) {
                        var t = et(this.appName, this.getEventName(), this.pageLoadId, e);
                        Je(this.getEncodeConfig(), t)
                    }
                }
                this.deliveryBuffer = []
            };
            e.prototype.getEncodeConfig = function() {
                return this.encodeConfig
            };
            e.prototype.setApp = function(e) {
                this.appName = e;
                return this
            };
            e.prototype.setId = function(e) {
                this.pageLoadId = e;
                return this
            };
            e.eventName = "";
            return e
        }();
        var rt = nt;
        var it = function(n) {
            a(e, n);

            function e() {
                var e;
                var t = n.call(this) || this;
                t.requiresContext = true;
                t.fireOnce = true;
                t.gatherEvents = [G, $, Z];
                t.entryTypes = ["paint", "longtask"];
                t.supportType = tt.BOTH;
                t.deliveryBuffer = [{}];
                t.encodeConfig = A(M);
                t.visibilityStateOnDCL = "";
                t.metricsCollected = {
                    load: false
                };
                window.addEventListener("DOMContentLoaded", function() {
                    return t.visibilityStateOnDCL = document.visibilityState || ""
                });
                if (de()) {
                    t.metricsCollected.interaction = false;
                    (e = t.gatherEvents).push.apply(e, V)
                }
                ve() && (t.metricsCollected.paint = false);
                t.setupTTI();
                return t
            }
            e.prototype.gather = function(e) {
                if (e.type === G) {
                    this.metricsCollected.load = true;
                    return v(v({
                        context: this.context,
                        visibilityStateOnDCL: this.visibilityStateOnDCL
                    }, Ce()), Se())
                }
                if (-1 !== V.indexOf(e.type) && false === this.metricsCollected.interaction) {
                    this.metricsCollected.interaction = true;
                    return le(e)
                }
                e.type === $ && (this.metricsCollected = {});
                return {}
            };
            e.prototype.gatherParse = function(e) {
                return this.parse(e)
            };
            e.prototype.observerParse = function(e) {
                if ("paint" === e.entryType) {
                    this.metricsCollected.paint = true;
                    return this.parse(Be(e))
                }
                "longtask" === e.entryType && window.__tti && window.__tti.e.push(e);
                return false
            };
            e.prototype.parse = function(n) {
                var t = this;
                this.deliveryBuffer.length && F.reduce(function(e, t) {
                    t in n && (e[t] = n[t]);
                    return e
                }, this.deliveryBuffer[0]);
                var e = Object.keys(this.metricsCollected).every(function(e) {
                    return t.metricsCollected[e]
                });
                return e
            };
            e.prototype.setupTTI = function() {
                var t = this;
                if (window.PerformanceLongTaskTiming && window.PerformanceObserver) {
                    window.__tti = {
                        e: []
                    };
                    this.metricsCollected.tti = false;
                    Object(x["getFirstConsistentlyInteractive"])().then(function(e) {
                        t.metricsCollected.tti = true;
                        t.parse({
                            tti: e
                        })
                    })
                }
            };
            e.eventName = "page_speed";
            return e
        }(rt);
        var ot = it;
        var at = n("./src/main/webapp/universal/node_modules/resourcetiming-compression/src/resourcetiming-compression.js");
        var st = n.n(at);
        var ut = function(t) {
            a(e, t);

            function e() {
                var e = t.call(this) || this;
                e.entryTypes = ["resource"];
                e.gatherEvents = te;
                e.encodeConfig = A(U);
                e.readyToDeliver = false;
                e.dataBuffer = {
                    info: {},
                    timings: {}
                };
                e.resourceTimingData = [];
                window.performance && window.performance.getEntriesByType && window.performance.clearResourceTimings && window.PerformanceResourceTiming && window.performance.getEntriesByType("resource")[0] instanceof PerformanceResourceTiming ? e.supportType = tt.GATHER : e.supportType = tt.NONE;
                e.initImageLoaderData();
                return e
            }
            e.prototype.gather = function(e) {
                if (e.type === K) {
                    var t = e.detail.imageData,
                        n = void 0 === t ? {} : t;
                    Object.assign(this.dataBuffer.info.img, this.gatherImageInfo(n));
                    return this.dataBuffer
                }
                e.type === $ && (this.readyToDeliver = true);
                this.resourceTimingData = y(this.resourceTimingData, this.gatherImageTimingData());
                return this.dataBuffer
            };
            e.prototype.gatherParse = function() {
                if (this.readyToDeliver) {
                    var e = st.a.compressResourceTiming(window, this.resourceTimingData, [], false).restiming;
                    this.dataBuffer.timings = e;
                    this.deliveryBuffer = [this.dataBuffer]
                }
                return this.readyToDeliver
            };
            e.prototype.initImageLoaderData = function() {
                var t = this;
                this.dataBuffer.info.img = {};
                if (window.ImageLoader && window.ImageLoader.imageInfo && Object.keys(window.ImageLoader.imageInfo).length) {
                    var n = window.ImageLoader.imageInfo;
                    Object.keys(n).forEach(function(e) {
                        Object.assign(t.dataBuffer.info.img, t.gatherImageInfo(n[e], true))
                    })
                }
            };
            e.prototype.isSquarespaceImage = function(e) {
                var t = e.name,
                    n = e.initiatorType;
                var r = document.createElement("a");
                r.href = t;
                var i = r.hostname,
                    o = r.pathname;
                return Boolean("img" === n && (i.indexOf("images.squarespace-cdn.com") > -1 || (i.indexOf("squarespace.com") || i.indexOf("sqsp.net") > -1 || i.indexOf("squarespace.net") > -1) && o.indexOf("static") > -1))
            };
            e.prototype.gatherImageTimingData = function() {
                var e = window.performance.getEntriesByType("resource").filter(this.isSquarespaceImage);
                window.performance.clearResourceTimings();
                return e
            };
            e.prototype.gatherImageInfo = function(e, t) {
                var n;
                void 0 === t && (t = false);
                var r = e.naturalDimensions,
                    i = void 0 === r ? {} : r,
                    o = e.parentElementDimensions,
                    a = void 0 === o ? {} : o,
                    s = e.isVisible,
                    u = void 0 !== s && s,
                    c = e.assetUrl,
                    f = e.squarespaceSize,
                    l = h(e, ["naturalDimensions", "parentElementDimensions", "isVisible", "assetUrl", "squarespaceSize"]);
                if (!c || !f) return {};
                var d = c + "?format=" + e.squarespaceSize;
                var p = v({
                    assetUrl: d,
                    squarespaceSize: f
                }, l);
                if (i.hasOwnProperty("height") && i.hasOwnProperty("width")) {
                    p.naturalHeight = Math.round(i.height);
                    p.naturalWidth = Math.round(i.width)
                }
                if (a.hasOwnProperty("height") && a.hasOwnProperty("width")) {
                    p.parentHeight = Math.round(a.height);
                    p.parentWidth = Math.round(a.width)
                }
                p.visibleInSession = u;
                p.visibleOnLoad = t && u;
                return n = {}, n[d] = p, n
            };
            e.eventName = "resource";
            return e
        }(rt);
        var ct = ut;

        function ft(e) {
            return "string" === typeof e && e.substring && "rum-" === e.substring(0, 4)
        }

        function lt(e) {
            return "number" === typeof e ? Math.round(e) : e
        }
        var dt = function(o) {
            a(e, o);

            function e() {
                var e = o.call(this) || this;
                e.gatherEvents = [z];
                e.encodeConfig = A(B);
                e.supportType = tt.GATHER;
                e.detailCache = {};
                e.measureMarkCache = {};
                if (pe()) {
                    var t = window.performance.getEntriesByType("measure");
                    for (var n = 0, r = t; n < r.length; n++) {
                        var i = r[n];
                        e.parse(we(i))
                    }
                } else e.supportType = tt.NONE;
                return e
            }
            e.prototype.gather = function(e) {
                if (e && ht(e.detail) && ht(e.detail.userTimingEntry)) {
                    var t = e.detail,
                        n = t.userTimingEntry,
                        r = t.startMark,
                        i = t.endMark,
                        o = t.detail;
                    if (n.entryType === Y) this.addDetail(n.name, o);
                    else if (n.entryType === W) {
                        this.addMeasure(n.name, r, i);
                        return v(v(v({}, we(n)), this.getDetails(n.name)), {
                            measureDetail: o
                        })
                    }
                }
                return {}
            };
            e.prototype.gatherParse = function(e) {
                this.parse(e);
                return true
            };
            e.prototype.parse = function(e) {
                if (!ft(e.name)) return false;
                var t = {};
                for (var n = 0, r = q; n < r.length; n++) {
                    var i = r[n];
                    e.hasOwnProperty(i) && (t[i] = lt(e[i]))
                }
                this.deliveryBuffer.push(t);
                return true
            };
            e.prototype.addMeasure = function(e, t, n) {
                this.measureMarkCache[e] = {
                    startMarkName: t,
                    endMarkName: n
                }
            };
            e.prototype.addDetail = function(e, t) {
                this.detailCache[e] = vt(t)
            };
            e.prototype.getDetails = function(e) {
                var t = {};
                var n = this.measureMarkCache[e];
                if (void 0 !== n) {
                    delete this.measureMarkCache[e];
                    var r = n.startMarkName,
                        i = n.endMarkName;
                    if (void 0 !== r && this.detailCache.hasOwnProperty(r)) {
                        t.startMarkDetail = this.detailCache[r];
                        delete this.detailCache[r]
                    }
                    if (void 0 !== i && this.detailCache.hasOwnProperty(i)) {
                        t.endMarkDetail = this.detailCache[i];
                        delete this.detailCache[i]
                    }
                }
                return t
            };
            e.eventName = "user";
            return e
        }(rt);
        var pt = dt;

        function vt(e) {
            if ("object" !== typeof e || null === e) return e;
            var t = {};
            for (var n in e) n in e && (t[n] = e[n]);
            return t
        }

        function ht(e) {
            return null !== e && "object" === typeof e
        }
        var mt = function(t) {
            a(e, t);

            function e() {
                var e = t.call(this) || this;
                e.gatherEvents = [$, Z];
                e.supportType = tt.GATHER;
                e.encodeConfig = A();
                ye() || (e.supportType = tt.NONE);
                return e
            }
            e.prototype.gather = function() {
                if (gt()) return window.YUI.stats.getSerializedDataForReporter();
                return {}
            };
            e.prototype.gatherParse = function(e) {
                this.deliveryBuffer.push(e);
                return true
            };
            e.eventName = "yui_stats";
            return e
        }(rt);
        var yt = mt;

        function gt() {
            return window.YUI && window.YUI.stats && window.YUI.stats.getSerializedDataForReporter && "function" === typeof window.YUI.stats.getSerializedDataForReporter
        }
        var _t = [ot, pt, ct, yt];

        function bt(n, e, r, i) {
            e.forEach(function(e) {
                J.indexOf(e) > -1 && St() ? n({
                    type: e
                }) : window.addEventListener(e, function e(t) {
                    try {
                        r && window.removeEventListener(t.type, e);
                        return n(t)
                    } catch (e) {
                        i(e, {
                            fireOnce: r,
                            event: t
                        })
                    }
                })
            })
        }

        function wt(n, r) {
            if (!("PerformanceObserver" in window)) return;
            var i = function(e) {
                e.forEach(function(e) {
                    var t = new CustomEvent(Et(e.entryType), {
                        detail: e.toJSON()
                    });
                    window.dispatchEvent(t)
                })
            };
            var t = function(e) {
                var t = e.entryType;
                return n.indexOf(t) > -1
            };
            var o = function(e) {
                var t = e.entryType;
                return "navigation" === t
            };
            i(performance.getEntries().filter(function(e) {
                return t(e) && !o(e) || St() && o(e)
            }));
            var e = new window.PerformanceObserver(function(e) {
                var t;
                try {
                    t = e.getEntries();
                    i(t)
                } catch (e) {
                    r(e, t)
                }
            });
            if (n.length > 0) try {
                e.observe({
                    entryTypes: n
                })
            } catch (e) {}
        }

        function Et(e) {
            return e + "-observer"
        }

        function St() {
            return "complete" === document.readyState
        }
        var Ot = [];
        var Tt;
        var jt = 2e3;

        function xt(e, t, n) {
            void 0 === n && (n = false);
            if (window.requestIdleCallback && !n) {
                Ot.push(e);
                Tt = Tt || window.requestIdleCallback(function(e) {
                    return kt(e, t)
                }, {
                    timeout: jt
                })
            } else e.deliver()
        }

        function kt(e, t) {
            try {
                while ((e.timeRemaining() > 0 || e.didTimeout) && Ot.length) {
                    var n = Ot.shift();
                    n && n.deliver()
                }
                Tt = Ot.length ? window.requestIdleCallback(function(e) {
                    return kt(e, t)
                }, {
                    timeout: jt
                }) : void 0
            } catch (e) {
                t(e)
            }
        }
        var It = {
            passive: true,
            capture: true
        };

        function Pt(t, e, n) {
            var r = function() {
                try {
                    e(t);
                    o()
                } catch (e) {
                    n(e, t)
                }
            };
            var i = function() {
                try {
                    o()
                } catch (e) {
                    n(e)
                }
            };

            function o() {
                window.removeEventListener("pointerup", r, It);
                window.removeEventListener("pointercancel", i, It)
            }
            window.addEventListener("pointerup", r, It);
            window.addEventListener("pointercancel", i, It)
        }

        function Rt(i) {
            return function(e, t) {
                void 0 === t && (t = false);
                var n = i.getABTestVariant(e + "-rollout", t.toString()).variant;
                var r = "true" === n;
                return r
            }
        }

        function Ct(i, o, a, s) {
            return function(e, t) {
                var n = i(t.eventName + "-plugin");
                if (n) {
                    var r = (new t).setApp(o).setId(a);
                    r.requiresContext && (r.context = s);
                    e.push(r)
                }
                return e
            }
        }

        function At(n, r, i) {
            return function(e) {
                var t = e.detail;
                try {
                    n.observerParse(t) && xt(n, i)
                } catch (e) {
                    i(e, {
                        observerEventType: r,
                        parsedData: n.getDeliveryBuffer(),
                        observerData: t
                    })
                }
            }
        }

        function Lt(r, i) {
            function e(e) {
                var t;
                try {
                    t = r.gather(e);
                    if ("pointerdown" === t.eventType) Pt(t, function(e) {
                        return Dt(r, e, i)
                    }, i);
                    else {
                        var n = e.type === $ || e.type === Z;
                        Dt(r, t, i, n)
                    }
                } catch (e) {
                    i(e, {
                        eventName: r.getEventName(),
                        parsedData: r.getDeliveryBuffer(),
                        rawData: t
                    })
                }
            }
            return e
        }

        function Dt(e, t, n, r) {
            void 0 === r && (r = false);
            var i = e.gatherParse(t);
            i && xt(e, n, r)
        }
        var Nt = function() {
            return new Promise(function(e, t) {
                var n = new XMLHttpRequest;
                n.onreadystatechange = function() {
                    if (n.readyState === XMLHttpRequest.DONE)
                        if (200 === n.status) try {
                            e(JSON.parse(n.response))
                        } catch (e) {
                            t(e)
                        } else 0 !== n.status && t(new Error("XHR request DONE with unexpected status: " + n.status))
                };
                n.ontimeout = function() {
                    t(new Error("Metric settings request timeout"))
                };
                n.open("GET", k + P, true);
                n.timeout = se;
                n.send()
            })
        };
        var Mt = function(n, r) {
            return function(e, t) {
                Ke("RUMError[" + n + "]: " + e);
                r && r(e, t)
            }
        };
        var Bt = function(e) {
            var t = {
                appName: e.appName || "",
                context: e.context || {},
                enabled: "boolean" !== typeof e.enabled || e.enabled
            };
            t.captureException = Mt(t.appName, e.captureException);
            return t
        };

        function Ut(e) {
            var a = Bt(e);
            var r;
            return Nt().then(function(e) {
                r = e.pageLoadId;
                if (!r) throw new Error("Unable to resolve pageLoadId");
                return new i["StaticPraetorClient"](e)
            }).then(function(e) {
                var t = Rt(e);
                if (["rum", a.appName + "-app"].some(function(e) {
                        return !t(e)
                    })) return;
                var n = _t.reduce(Ct(t, a.appName, r, a.context), []);
                var o = [];
                n.forEach(function(r) {
                    var e = r.getSupportType();
                    if (e === tt.OBSERVE || e === tt.BOTH) {
                        var t = r.getEntryTypes();
                        t.forEach(function(e) {
                            var t = Et(e);
                            o.push(e);
                            var n = At(r, t, a.captureException);
                            window.addEventListener(t, n)
                        })
                    }
                    if (e === tt.GATHER || e === tt.BOTH) {
                        var n = r.getGatherEvents();
                        var i = Lt(r, a.captureException);
                        bt(i, n, r.shouldFireOnce(), a.captureException)
                    }
                });
                wt(o, a.captureException);
                a.enabled && Ve(a.captureException)
            }).catch(function(e) {
                a.captureException(e, {
                    pageLoadId: r,
                    parsedOptions: a
                })
            })
        }
        var Ft = function() {
            return c(void 0, void 0, void 0, function() {
                var t;
                return f(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, je("decodedBodySize")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                decodedBodySize: t
                            } : null]
                    }
                })
            })
        };
        var qt = function() {
            return c(void 0, void 0, void 0, function() {
                var t;
                return f(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, je("domContentLoadedEventEnd")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                domContentLoadedEventEnd: t
                            } : null]
                    }
                })
            })
        };
        var Ht = function() {
            return c(void 0, void 0, void 0, function() {
                var t;
                return f(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, je("domContentLoadedEventStart")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                domContentLoadedEventStart: t
                            } : null]
                    }
                })
            })
        };
        var zt = function() {
            return c(void 0, void 0, void 0, function() {
                var t;
                return f(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, je("encodedBodySize")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                encodedBodySize: t
                            } : null]
                    }
                })
            })
        };
        var Yt = function(e) {
            var t = e.getEntries()[0];
            var n = t ? Math.round(t.startTime) : null;
            return n ? {
                firstContentfulPaint: n
            } : null
        };
        var Wt = function() {
            return c(void 0, void 0, void 0, function() {
                var t, n;
                return f(this, function(e) {
                    switch (e.label) {
                        case 0:
                            if (!(ge() && ve())) return [2, null];
                            e.label = 1;
                        case 1:
                            e.trys.push([1, 3, , 4]);
                            return [4, Ee({
                                type: "paint",
                                isReadyFn: function(e) {
                                    var t = e.getEntriesByName("first-contentful-paint", "paint")[0];
                                    return !!t
                                }
                            })];
                        case 2:
                            t = e.sent();
                            return [2, Yt(t)];
                        case 3:
                            n = e.sent();
                            return [2, null];
                        case 4:
                            return [2]
                    }
                })
            })
        };
        var Vt = function(e) {
            if (!e) return null;
            var t = e.getEntries();
            var n = t && t.length > 0 ? Math.round(t[t.length - 1].startTime) : null;
            return n ? {
                largestContentfulPaint: n
            } : null
        };
        var Xt = function() {
            return c(void 0, void 0, void 0, function() {
                return f(this, function(e) {
                    if (!(_e() && ve())) return [2, null];
                    return [2, new Promise(function(i) {
                        var o = null;
                        Ee({
                            type: "largest-contentful-paint",
                            isReadyFn: function(e) {
                                var t, n;
                                o = e;
                                var r = null === (n = null === (t = window.performance) || void 0 === t ? void 0 : t.timing) || void 0 === n ? void 0 : n.loadEventStart;
                                if (r > 0) {
                                    i(Vt(o));
                                    return true
                                }
                                return false
                            }
                        });
                        window.addEventListener("load", function() {
                            o && i(Vt(o))
                        })
                    })]
                })
            })
        };
        var Gt = function() {
            return c(void 0, void 0, void 0, function() {
                var t;
                return f(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, je("loadEventEnd")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                loadEventEnd: t
                            } : null]
                    }
                })
            })
        };
        var Kt = function() {
            return c(void 0, void 0, void 0, function() {
                var t;
                return f(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, je("loadEventStart")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                loadEventStart: t
                            } : null]
                    }
                })
            })
        };
        var Jt = function() {
            return c(void 0, void 0, void 0, function() {
                var t;
                return f(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, je("responseStart")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                responseStart: t
                            } : null]
                    }
                })
            })
        };
        var $t = function() {
            return c(void 0, void 0, void 0, function() {
                var t;
                return f(this, function(e) {
                    if (!(be() && ve())) return [2, null];
                    t = false;
                    window.__tti = {
                        e: []
                    };
                    Ee({
                        type: "longtask",
                        buffered: false,
                        isReadyFn: function(e) {
                            window.__tti.e = window.__tti.e.concat(e.getEntries());
                            return t
                        }
                    });
                    return [2, Object(x["getFirstConsistentlyInteractive"])().then(function(e) {
                        t = true;
                        return {
                            timeToInteractive: Math.round(e)
                        }
                    })]
                })
            })
        };

        function Zt() {
            return c(this, void 0, void 0, function() {
                var t, n, r, i, o;
                return f(this, function(e) {
                    switch (e.label) {
                        case 0:
                            e.trys.push([0, 2, , 3]);
                            n = (t = Object.assign).apply;
                            r = [Object];
                            i = [
                                [{}]
                            ];
                            return [4, Promise.all([Ft(), qt(), Ht(), zt(), Wt(), Xt(), Gt(), Kt(), Jt(), $t()])];
                        case 1:
                            return [2, n.apply(t, r.concat([y.apply(void 0, i.concat([e.sent()]))]))];
                        case 2:
                            o = e.sent();
                            return [2, {}];
                        case 3:
                            return [2]
                    }
                })
            })
        }

        function Qt(e, t) {
            "function" === typeof window.dispatchEvent && "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent(e, {
                detail: t
            }))
        }

        function en(e, t) {
            try {
                if (!rn()) return;
                var n = re + e;
                window.performance.mark(n);
                var r = {
                    userTimingEntry: on(n)
                };
                "object" === typeof t && null !== t && (r.detail = t.detail);
                Qt(z, r)
            } catch (e) {
                Ke("RUMError[mark]: " + e)
            }
        }

        function tn(e, t) {
            try {
                if (!(rn() && nn())) return;
                var n = "object" === typeof t && null !== t;
                var r = n && "string" === typeof t.end;
                var i = n && "string" === typeof t.start;
                var o = re + e;
                var a = i ? re + t.start : o;
                var s = r ? re + t.end : void 0;
                an(o, a, s);
                var u = on(o);
                var c = {
                    detail: n ? t.detail : void 0,
                    endMark: s,
                    startMark: a,
                    userTimingEntry: u
                };
                Qt(z, c);
                return u
            } catch (e) {
                Ke("RUMError[measure]: " + e)
            }
        }

        function nn() {
            return "performance" in window && "getEntries" in window.performance && "getEntriesByType" in window.performance && "getEntriesByName" in window.performance
        }

        function rn() {
            return "mark" in window.performance && "measure" in window.performance
        }

        function on(e) {
            var t = window.performance.getEntriesByName(e);
            return t[t.length - 1]
        }

        function an(t, e, n) {
            try {
                window.performance.measure(t, e, n)
            } catch (e) {
                if (!(e instanceof DOMException)) throw e;
                try {
                    window.performance.measure(t, "navigationStart")
                } catch (e) {
                    if (!(e instanceof DOMException)) throw e;
                    window.performance.measure(t)
                }
            }
        }
        var sn = n("./src/main/webapp/universal/node_modules/@sqs/track-events/dist/index.js");
        var un = n.n(sn);
        var cn = {
            action: "load",
            actor: "user",
            event_owner_team: "web_performance",
            event_source: "web",
            object_type: "website"
        };
        var fn = new un.a({
            customSchemaName: "performance"
        }, cn);
        var ln = function(n) {
            return c(void 0, void 0, void 0, function() {
                var t;
                return f(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Zt()];
                        case 1:
                            t = e.sent();
                            fn.track(v(v({}, n), {
                                decoded_body_size_bytes: t.decodedBodySize,
                                dom_content_loaded_event_end_ms: t.domContentLoadedEventEnd,
                                dom_content_loaded_event_start_ms: t.domContentLoadedEventStart,
                                encoded_body_size_bytes: t.encodedBodySize,
                                first_contentful_paint_ms: t.firstContentfulPaint,
                                largest_contentful_paint_ms: t.largestContentfulPaint,
                                load_event_end_ms: t.loadEventEnd,
                                load_event_start_ms: t.loadEventStart,
                                response_start_ms: t.responseStart,
                                time_to_interactive_ms: t.timeToInteractive
                            }));
                            return [2]
                    }
                })
            })
        }
    },
    "./src/main/webapp/universal/node_modules/@sqs/track-events/dist/index.js": function(e, t) {
        e.exports = function(n) {
            var r = {};

            function i(e) {
                if (r[e]) return r[e].exports;
                var t = r[e] = {
                    i: e,
                    l: false,
                    exports: {}
                };
                n[e].call(t.exports, t, t.exports, i);
                t.l = true;
                return t.exports
            }
            i.m = n;
            i.c = r;
            i.d = function(e, t, n) {
                i.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: true,
                    get: n
                })
            };
            i.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                });
                Object.defineProperty(e, "__esModule", {
                    value: true
                })
            };
            i.t = function(t, e) {
                1 & e && (t = i(t));
                if (8 & e) return t;
                if (4 & e && "object" === typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                i.r(n);
                Object.defineProperty(n, "default", {
                    enumerable: true,
                    value: t
                });
                if (2 & e && "string" != typeof t)
                    for (var r in t) i.d(n, r, function(e) {
                        return t[e]
                    }.bind(null, r));
                return n
            };
            i.n = function(t) {
                var e = t && t.__esModule ? function e() {
                    return t["default"]
                } : function e() {
                    return t
                };
                i.d(e, "a", e);
                return e
            };
            i.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            };
            i.p = "";
            return i(i.s = 2)
        }([function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (e) {
                "object" === typeof window && (n = window)
            }
            e.exports = n
        }, function(e, t, n) {
            "use strict";

            function r(t) {
                var n = this.constructor;
                return this.then(function(e) {
                    return n.resolve(t()).then(function() {
                        return e
                    })
                }, function(e) {
                    return n.resolve(t()).then(function() {
                        return n.reject(e)
                    })
                })
            }
            t["a"] = r
        }, function(e, t, n) {
            "use strict";
            var _ = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            var b = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            var i = function() {
                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || false;
                        r.configurable = true;
                        "value" in r && (r.writable = true);
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(e, t, n) {
                    t && r(e.prototype, t);
                    n && r(e, n);
                    return e
                }
            }();
            var r = n(3);
            var a = p(r);
            var o = n(7);
            var w = p(o);
            var s = n(8);
            var E = p(s);
            var u = n(9);
            var c = p(u);
            var f = n(12);
            var l = p(f);
            var d = n(15);
            var S = p(d);

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function v(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var h = function() {
                function r() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    v(this, r);
                    this.config = b({
                        customSchemaName: null,
                        logging: false,
                        url: "https://events.squarespace.com/api/v1/events",
                        useBeacon: true,
                        storageKey: "SS_ANALYTICS_ID",
                        expirationKey: "SS_ANALYTICS_EXPIRATION",
                        cookie: {
                            daysToStore: 390,
                            domains: ["squarespace.com", "squarespace.net", "sqsp.net"],
                            path: "/",
                            secure: window.location.protocol.indexOf("https") > -1
                        }
                    }, e);
                    "sendBeacon" in navigator || (this.config.useBeacon = false);
                    this.defaultPayload = t;
                    this._getAnalyticsId()
                }
                i(r, [{
                    key: "spawnTracker",
                    value: function e(t) {
                        var n = b({}, this.defaultPayload, t);
                        return new r(this.config, n)
                    }
                }, {
                    key: "track",
                    value: function e(t) {
                        if (!this.config.url) return;
                        var n = this._generatePayload(t);
                        if (!n) return a.default.reject(new Error("no payload"));
                        return this.config.useBeacon ? this._sendBeacon(n) : this._sendXhr(n)
                    }
                }, {
                    key: "_log",
                    value: function e(t) {
                        if (!this.config.logging) return;
                        console.log(t)
                    }
                }, {
                    key: "_warn",
                    value: function e(t) {
                        if (!this.config.logging) return;
                        console.warn(t)
                    }
                }, {
                    key: "_setAnalyticsId",
                    value: function e(t) {
                        this._analyticsId = t;
                        var n = this.config.cookie,
                            r = n.path,
                            i = n.secure;
                        var o = void 0;
                        this.config.cookie.domains.forEach(function(e) {
                            window.location.hostname.indexOf(e) > -1 && (o = e)
                        });
                        o = o || window.location.hostname;
                        var a = new Date;
                        a.setDate(a.getDate() + this.config.cookie.daysToStore);
                        try {
                            w.default.set(this.config.storageKey, t, {
                                domain: o,
                                expires: a,
                                path: r,
                                secure: i
                            });
                            var s = document.cookie.indexOf(this.config.storageKey) !== document.cookie.lastIndexOf(this.config.storageKey);
                            s && w.default.set(this.config.storageKey, null, {
                                expires: new Date(0)
                            });
                            localStorage.setItem(this.config.storageKey, t);
                            localStorage.setItem(this.config.expirationKey, a.toISOString())
                        } catch (e) {
                            this._warn("Unable to store analyticsId")
                        }
                    }
                }, {
                    key: "_getAnalyticsId",
                    value: function e() {
                        var t = function e(t) {
                            return t && "null" !== t ? t : null
                        };
                        var n = t(w.default.get(this.config.storageKey));
                        var r = t(this._getLocalStorageItem());
                        var i = t(this._analyticsId);
                        var o = n || r || i || (0, l.default)();
                        this._setAnalyticsId(o);
                        return o
                    }
                }, {
                    key: "_getLocalStorageItem",
                    value: function e() {
                        var t = false;
                        var n = localStorage.getItem(this.config.expirationKey);
                        if (n) {
                            var r = new Date;
                            var i = new Date(n);
                            t = r > i
                        }
                        if (t) {
                            localStorage.removeItem(this.config.storageKey);
                            localStorage.removeItem(this.config.expirationKey);
                            return null
                        }
                        return localStorage.getItem(this.config.storageKey)
                    }
                }, {
                    key: "_getNormalizedPathname",
                    value: function e() {
                        var t = window.location.pathname;
                        "/" === t[t.length - 1] && (t = t.substring(0, t.length - 1));
                        return t
                    }
                }, {
                    key: "_sendBeacon",
                    value: function e(t) {
                        var n = {
                            type: "application/x-www-form-urlencoded"
                        };
                        var r = new Blob([c.default.stringify(t)], n);
                        navigator.sendBeacon(this.config.url, r);
                        return a.default.resolve()
                    }
                }, {
                    key: "_sendXhr",
                    value: function e(i) {
                        var o = this;
                        return new a.default(function(e, t) {
                            var n = new XMLHttpRequest;
                            var r = JSON.stringify(i);
                            n.open("POST", o.config.url, true);
                            n.setRequestHeader("Content-Type", "application/json");
                            n.send(r);
                            n.addEventListener("readystatechange", function() {
                                if (4 !== n.readyState) return;
                                if (200 === n.status || 202 === n.status) e();
                                else {
                                    o._warn("Error tracking event: HTTP Status " + n.status);
                                    t(new Error("Error tracking event: HTTP Status " + n.status))
                                }
                            })
                        })
                    }
                }, {
                    key: "_generatePayload",
                    value: function e(t) {
                        var n = b({}, this.defaultPayload, t);
                        var r = new Date;
                        var i = {
                            analyticsId: this._getAnalyticsId(),
                            commonData: {
                                browser_window_height: window.innerHeight,
                                browser_window_width: window.innerWidth,
                                browser_language: navigator.language,
                                page_host: window.location.hostname,
                                page_path: this._getNormalizedPathname(),
                                page_query_params: window.location.search,
                                page_referrer_url: document.referrer,
                                resolved_locale: document.documentElement.lang || "en-US",
                                timestamp_client: r.getTime(),
                                user_marketing_id: w.default.get("SS_MID") || null,
                                user_session_id: E.default.sessionId || null
                            },
                            customData: {},
                            customSchemaName: this.config.customSchemaName
                        };
                        for (var o in n)
                            if (n.hasOwnProperty(o)) {
                                var a = n[o];
                                if (S.default.hasOwnProperty(o)) {
                                    var s = S.default[o];
                                    if (("undefined" === typeof a ? "undefined" : _(a)) === s.type || s.nullable && null === a) {
                                        i.commonData[o] = a;
                                        this._log("common field " + o + " set successfully")
                                    } else this._warn("common field " + o + " was not set or was the incorrect type")
                                } else {
                                    i.customData[o] = a;
                                    this._log("custom field " + o + " set successfully")
                                }
                            }
                        if (this.config.logging)
                            for (var u in S.default) {
                                var c = S.default.hasOwnProperty(u) && !S.default[u].nullable;
                                c && !n[u] && this._warn("required common field " + u + " was not set or was the incorrect type")
                            }
                        var f = window.Static && window.Static.SQUARESPACE_CONTEXT;
                        if (f && f.website) {
                            i.commonData.context_website_id = f.website.id;
                            i.commonData.user_website_id = f.website.id
                        }
                        f && f.templateId && (i.commonData.context_template_website_id = f.templateId);
                        f && f.authenticatedAccount && (i.commonData.user_member_account_id = f.authenticatedAccount.id);
                        if (this.config.logging) {
                            var l = {};
                            var d = {};
                            var p = Object.keys(i.commonData).sort();
                            var v = Object.keys(i.customData).sort();
                            for (var h = 0; h < p.length; h++) {
                                var m = p[h];
                                l[m] = i.commonData[m]
                            }
                            for (var y = 0; y < v.length; y++) {
                                var g = v[y];
                                d[g] = i.customData[g]
                            }
                            this._log("commonData:");
                            this._log(JSON.stringify(l, null, 2));
                            this._log("customData:");
                            this._log(JSON.stringify(d, null, 2))
                        }
                        i.commonData = JSON.stringify(i.commonData);
                        i.customData = JSON.stringify(i.customData);
                        return i
                    }
                }]);
                return r
            }();
            e.exports = h
        }, function(e, d, p) {
            "use strict";
            p.r(d);
            (function(t) {
                var e = p(1);
                var n = setTimeout;

                function r() {}

                function i(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }

                function o(e) {
                    if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
                    if ("function" !== typeof e) throw new TypeError("not a function");
                    this._state = 0;
                    this._handled = false;
                    this._value = void 0;
                    this._deferreds = [];
                    l(e, this)
                }

                function a(n, r) {
                    while (3 === n._state) n = n._value;
                    if (0 === n._state) {
                        n._deferreds.push(r);
                        return
                    }
                    n._handled = true;
                    o._immediateFn(function() {
                        var e = 1 === n._state ? r.onFulfilled : r.onRejected;
                        if (null === e) {
                            (1 === n._state ? s : u)(r.promise, n._value);
                            return
                        }
                        var t;
                        try {
                            t = e(n._value)
                        } catch (e) {
                            u(r.promise, e);
                            return
                        }
                        s(r.promise, t)
                    })
                }

                function s(t, e) {
                    try {
                        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" === typeof e || "function" === typeof e)) {
                            var n = e.then;
                            if (e instanceof o) {
                                t._state = 3;
                                t._value = e;
                                c(t);
                                return
                            }
                            if ("function" === typeof n) {
                                l(i(n, e), t);
                                return
                            }
                        }
                        t._state = 1;
                        t._value = e;
                        c(t)
                    } catch (e) {
                        u(t, e)
                    }
                }

                function u(e, t) {
                    e._state = 2;
                    e._value = t;
                    c(e)
                }

                function c(e) {
                    2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
                        e._handled || o._unhandledRejectionFn(e._value)
                    });
                    for (var t = 0, n = e._deferreds.length; t < n; t++) a(e, e._deferreds[t]);
                    e._deferreds = null
                }

                function f(e, t, n) {
                    this.onFulfilled = "function" === typeof e ? e : null;
                    this.onRejected = "function" === typeof t ? t : null;
                    this.promise = n
                }

                function l(e, t) {
                    var n = false;
                    try {
                        e(function(e) {
                            if (n) return;
                            n = true;
                            s(t, e)
                        }, function(e) {
                            if (n) return;
                            n = true;
                            u(t, e)
                        })
                    } catch (e) {
                        if (n) return;
                        n = true;
                        u(t, e)
                    }
                }
                o.prototype["catch"] = function(e) {
                    return this.then(null, e)
                };
                o.prototype.then = function(e, t) {
                    var n = new this.constructor(r);
                    a(this, new f(e, t, n));
                    return n
                };
                o.prototype["finally"] = e["a"];
                o.all = function(t) {
                    return new o(function(r, i) {
                        if (!t || "undefined" === typeof t.length) throw new TypeError("Promise.all accepts an array");
                        var o = Array.prototype.slice.call(t);
                        if (0 === o.length) return r([]);
                        var a = o.length;

                        function s(t, e) {
                            try {
                                if (e && ("object" === typeof e || "function" === typeof e)) {
                                    var n = e.then;
                                    if ("function" === typeof n) {
                                        n.call(e, function(e) {
                                            s(t, e)
                                        }, i);
                                        return
                                    }
                                }
                                o[t] = e;
                                0 === --a && r(o)
                            } catch (e) {
                                i(e)
                            }
                        }
                        for (var e = 0; e < o.length; e++) s(e, o[e])
                    })
                };
                o.resolve = function(t) {
                    if (t && "object" === typeof t && t.constructor === o) return t;
                    return new o(function(e) {
                        e(t)
                    })
                };
                o.reject = function(n) {
                    return new o(function(e, t) {
                        t(n)
                    })
                };
                o.race = function(i) {
                    return new o(function(e, t) {
                        for (var n = 0, r = i.length; n < r; n++) i[n].then(e, t)
                    })
                };
                o._immediateFn = "function" === typeof t && function(e) {
                    t(e)
                } || function(e) {
                    n(e, 0)
                };
                o._unhandledRejectionFn = function e(t) {
                    "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                };
                d["default"] = o
            }).call(this, p(4).setImmediate)
        }, function(e, i, o) {
            (function(e) {
                var t = "undefined" !== typeof e && e || "undefined" !== typeof self && self || window;
                var n = Function.prototype.apply;
                i.setTimeout = function() {
                    return new r(n.call(setTimeout, t, arguments), clearTimeout)
                };
                i.setInterval = function() {
                    return new r(n.call(setInterval, t, arguments), clearInterval)
                };
                i.clearTimeout = i.clearInterval = function(e) {
                    e && e.close()
                };

                function r(e, t) {
                    this._id = e;
                    this._clearFn = t
                }
                r.prototype.unref = r.prototype.ref = function() {};
                r.prototype.close = function() {
                    this._clearFn.call(t, this._id)
                };
                i.enroll = function(e, t) {
                    clearTimeout(e._idleTimeoutId);
                    e._idleTimeout = t
                };
                i.unenroll = function(e) {
                    clearTimeout(e._idleTimeoutId);
                    e._idleTimeout = -1
                };
                i._unrefActive = i.active = function(t) {
                    clearTimeout(t._idleTimeoutId);
                    var e = t._idleTimeout;
                    e >= 0 && (t._idleTimeoutId = setTimeout(function e() {
                        t._onTimeout && t._onTimeout()
                    }, e))
                };
                o(5);
                i.setImmediate = "undefined" !== typeof self && self.setImmediate || "undefined" !== typeof e && e.setImmediate || this && this.setImmediate;
                i.clearImmediate = "undefined" !== typeof self && self.clearImmediate || "undefined" !== typeof e && e.clearImmediate || this && this.clearImmediate
            }).call(this, o(0))
        }, function(e, t, n) {
            (function(e, g) {
                (function(n, r) {
                    "use strict";
                    if (n.setImmediate) return;
                    var i = 1;
                    var o = {};
                    var a = false;
                    var s = n.document;
                    var u;

                    function e(e) {
                        "function" !== typeof e && (e = new Function("" + e));
                        var t = new Array(arguments.length - 1);
                        for (var n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                        var r = {
                            callback: e,
                            args: t
                        };
                        o[i] = r;
                        u(i);
                        return i++
                    }

                    function c(e) {
                        delete o[e]
                    }

                    function f(e) {
                        var t = e.callback;
                        var n = e.args;
                        switch (n.length) {
                            case 0:
                                t();
                                break;
                            case 1:
                                t(n[0]);
                                break;
                            case 2:
                                t(n[0], n[1]);
                                break;
                            case 3:
                                t(n[0], n[1], n[2]);
                                break;
                            default:
                                t.apply(r, n);
                                break
                        }
                    }

                    function l(e) {
                        if (a) setTimeout(l, 0, e);
                        else {
                            var t = o[e];
                            if (t) {
                                a = true;
                                try {
                                    f(t)
                                } finally {
                                    c(e);
                                    a = false
                                }
                            }
                        }
                    }

                    function t() {
                        u = function(e) {
                            g.nextTick(function() {
                                l(e)
                            })
                        }
                    }

                    function d() {
                        if (n.postMessage && !n.importScripts) {
                            var e = true;
                            var t = n.onmessage;
                            n.onmessage = function() {
                                e = false
                            };
                            n.postMessage("", "*");
                            n.onmessage = t;
                            return e
                        }
                    }

                    function p() {
                        var t = "setImmediate$" + Math.random() + "$";
                        var e = function(e) {
                            e.source === n && "string" === typeof e.data && 0 === e.data.indexOf(t) && l(+e.data.slice(t.length))
                        };
                        n.addEventListener ? n.addEventListener("message", e, false) : n.attachEvent("onmessage", e);
                        u = function(e) {
                            n.postMessage(t + e, "*")
                        }
                    }

                    function v() {
                        var t = new MessageChannel;
                        t.port1.onmessage = function(e) {
                            var t = e.data;
                            l(t)
                        };
                        u = function(e) {
                            t.port2.postMessage(e)
                        }
                    }

                    function h() {
                        var n = s.documentElement;
                        u = function(e) {
                            var t = s.createElement("script");
                            t.onreadystatechange = function() {
                                l(e);
                                t.onreadystatechange = null;
                                n.removeChild(t);
                                t = null
                            };
                            n.appendChild(t)
                        }
                    }

                    function m() {
                        u = function(e) {
                            setTimeout(l, 0, e)
                        }
                    }
                    var y = Object.getPrototypeOf && Object.getPrototypeOf(n);
                    y = y && y.setTimeout ? y : n;
                    "[object process]" === {}.toString.call(n.process) ? t() : d() ? p() : n.MessageChannel ? v() : s && "onreadystatechange" in s.createElement("script") ? h() : m();
                    y.setImmediate = e;
                    y.clearImmediate = c
                })("undefined" === typeof self ? "undefined" === typeof e ? this : e : self)
            }).call(this, n(0), n(6))
        }, function(e, t) {
            var n = e.exports = {};
            var r;
            var i;

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function a() {
                throw new Error("clearTimeout has not been defined")
            }(function() {
                try {
                    r = "function" === typeof setTimeout ? setTimeout : o
                } catch (e) {
                    r = o
                }
                try {
                    i = "function" === typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                    i = a
                }
            })();

            function s(t) {
                if (r === setTimeout) return setTimeout(t, 0);
                if ((r === o || !r) && setTimeout) {
                    r = setTimeout;
                    return setTimeout(t, 0)
                }
                try {
                    return r(t, 0)
                } catch (e) {
                    try {
                        return r.call(null, t, 0)
                    } catch (e) {
                        return r.call(this, t, 0)
                    }
                }
            }

            function u(t) {
                if (i === clearTimeout) return clearTimeout(t);
                if ((i === a || !i) && clearTimeout) {
                    i = clearTimeout;
                    return clearTimeout(t)
                }
                try {
                    return i(t)
                } catch (e) {
                    try {
                        return i.call(null, t)
                    } catch (e) {
                        return i.call(this, t)
                    }
                }
            }
            var c = [];
            var f = false;
            var l;
            var d = -1;

            function p() {
                if (!f || !l) return;
                f = false;
                l.length ? c = l.concat(c) : d = -1;
                c.length && v()
            }

            function v() {
                if (f) return;
                var e = s(p);
                f = true;
                var t = c.length;
                while (t) {
                    l = c;
                    c = [];
                    while (++d < t) l && l[d].run();
                    d = -1;
                    t = c.length
                }
                l = null;
                f = false;
                u(e)
            }
            n.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                c.push(new h(e, t));
                1 !== c.length || f || s(v)
            };

            function h(e, t) {
                this.fun = e;
                this.array = t
            }
            h.prototype.run = function() {
                this.fun.apply(null, this.array)
            };
            n.title = "browser";
            n.browser = true;
            n.env = {};
            n.argv = [];
            n.version = "";
            n.versions = {};

            function m() {}
            n.on = m;
            n.addListener = m;
            n.once = m;
            n.off = m;
            n.removeListener = m;
            n.removeAllListeners = m;
            n.emit = m;
            n.prependListener = m;
            n.prependOnceListener = m;
            n.listeners = function(e) {
                return []
            };
            n.binding = function(e) {
                throw new Error("process.binding is not supported")
            };
            n.cwd = function() {
                return "/"
            };
            n.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            };
            n.umask = function() {
                return 0
            }
        }, function(e, t) {
            var s = /^([^=]+)=([^;]*)$/;
            var t = e.exports = function(o, e) {
                o = o || {};
                "string" === typeof o && (o = {
                    cookie: o
                });
                void 0 === o.cookie && (o.cookie = "");
                false !== e && (e = true);
                var t = function(e) {
                    return e
                };
                var i = e ? escape : t;
                var a = e ? unescape : t;
                var n = {};
                n.get = function(e) {
                    var t = o.cookie.split(/;\s*/);
                    for (var n = 0; n < t.length; n++) {
                        var r = (t[n] || "").match(s) || [];
                        var i = a(r[1] || "");
                        if (i === e) return a(r[2] || "")
                    }
                    return
                };
                n.set = function(e, t, n) {
                    n = n || {};
                    var r = i(e) + "=" + i(t);
                    n.expires && (r += "; expires=" + n.expires);
                    n.path && (r += "; path=" + i(n.path));
                    n.domain && (r += "; domain=" + i(n.domain));
                    n.secure && (r += "; secure");
                    o.cookie = r;
                    return r
                };
                return n
            };
            if ("undefined" !== typeof document) {
                var n = t(document);
                t.get = n.get;
                t.set = n.set
            }
        }, function(e, t) {
            e.exports = function(n) {
                var r = {};

                function i(e) {
                    if (r[e]) return r[e].exports;
                    var t = r[e] = {
                        i: e,
                        l: false,
                        exports: {}
                    };
                    n[e].call(t.exports, t, t.exports, i);
                    t.l = true;
                    return t.exports
                }
                i.m = n;
                i.c = r;
                i.d = function(e, t, n) {
                    i.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: true,
                        get: n
                    })
                };
                i.r = function(e) {
                    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    });
                    Object.defineProperty(e, "__esModule", {
                        value: true
                    })
                };
                i.t = function(t, e) {
                    1 & e && (t = i(t));
                    if (8 & e) return t;
                    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
                    var n = Object.create(null);
                    i.r(n);
                    Object.defineProperty(n, "default", {
                        enumerable: true,
                        value: t
                    });
                    if (2 & e && "string" != typeof t)
                        for (var r in t) i.d(n, r, function(e) {
                            return t[e]
                        }.bind(null, r));
                    return n
                };
                i.n = function(t) {
                    var e = t && t.__esModule ? function e() {
                        return t["default"]
                    } : function e() {
                        return t
                    };
                    i.d(e, "a", e);
                    return e
                };
                i.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                };
                i.p = "";
                return i(i.s = 0)
            }([function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                var r = n(1);
                var a = o(r);
                var i = n(4);
                var s = o(i);

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var u = "SS_IS_FIRST_SESSION";
                var c = "SS_HAS_LANDED";
                var f = "SS_SESSION_ID";
                var l = ["squarespace.com", "squarespace.net", "sqsp.net"];
                var d = function e(t, n) {
                    var r = void 0;
                    l.forEach(function(e) {
                        window.location.hostname.indexOf(e) > -1 && (r = e)
                    });
                    r = r || window.location.hostname;
                    s.default.set(t, n, {
                        domain: r,
                        path: "/",
                        secure: window.location.protocol.indexOf("https") > -1
                    })
                };
                var p = function e() {
                    if ("undefined" === typeof window) return;
                    if (window._sessionInfo) return window._sessionInfo;
                    try {
                        var t = localStorage.getItem(c);
                        var n = sessionStorage.getItem(u);
                        var r = null === n;
                        var i = null === t || "true" === n;
                        var o = s.default.get(f);
                        localStorage.setItem(c, "true");
                        r && (i ? sessionStorage.setItem(u, "true") : sessionStorage.setItem(u, "false"));
                        if (!o) {
                            o = (0, a.default)();
                            d(f, o)
                        }
                        window._sessionInfo = {
                            isFirstLanding: r,
                            isFirstSession: i,
                            sessionId: o
                        };
                        return window._sessionInfo
                    } catch (e) {
                        console.warn("Unable access local/session storage.");
                        return {
                            isFirstLanding: false,
                            isFirstSession: false
                        }
                    }
                };
                t.default = p()
            }, function(e, t, n) {
                var a = n(2);
                var s = n(3);

                function r(e, t, n) {
                    var r = t && n || 0;
                    if ("string" == typeof e) {
                        t = "binary" === e ? new Array(16) : null;
                        e = null
                    }
                    e = e || {};
                    var i = e.random || (e.rng || a)();
                    i[6] = 15 & i[6] | 64;
                    i[8] = 63 & i[8] | 128;
                    if (t)
                        for (var o = 0; o < 16; ++o) t[r + o] = i[o];
                    return t || s(i)
                }
                e.exports = r
            }, function(e, t) {
                var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
                if (n) {
                    var r = new Uint8Array(16);
                    e.exports = function e() {
                        n(r);
                        return r
                    }
                } else {
                    var i = new Array(16);
                    e.exports = function e() {
                        for (var t = 0, n; t < 16; t++) {
                            0 === (3 & t) && (n = 4294967296 * Math.random());
                            i[t] = n >>> ((3 & t) << 3) & 255
                        }
                        return i
                    }
                }
            }, function(e, t) {
                var i = [];
                for (var n = 0; n < 256; ++n) i[n] = (n + 256).toString(16).substr(1);

                function r(e, t) {
                    var n = t || 0;
                    var r = i;
                    return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
                }
                e.exports = r
            }, function(e, t) {
                var s = /^([^=]+)=([^;]*)$/;
                var t = e.exports = function(o, e) {
                    o = o || {};
                    "string" === typeof o && (o = {
                        cookie: o
                    });
                    void 0 === o.cookie && (o.cookie = "");
                    false !== e && (e = true);
                    var t = function(e) {
                        return e
                    };
                    var i = e ? escape : t;
                    var a = e ? unescape : t;
                    var n = {};
                    n.get = function(e) {
                        var t = o.cookie.split(/;\s*/);
                        for (var n = 0; n < t.length; n++) {
                            var r = (t[n] || "").match(s) || [];
                            var i = a(r[1] || "");
                            if (i === e) return a(r[2] || "")
                        }
                        return
                    };
                    n.set = function(e, t, n) {
                        n = n || {};
                        var r = i(e) + "=" + i(t);
                        n.expires && (r += "; expires=" + n.expires);
                        n.path && (r += "; path=" + i(n.path));
                        n.domain && (r += "; domain=" + i(n.domain));
                        n.secure && (r += "; secure");
                        o.cookie = r;
                        return r
                    };
                    return n
                };
                if ("undefined" !== typeof document) {
                    var n = t(document);
                    t.get = n.get;
                    t.set = n.set
                }
            }])
        }, function(e, t, n) {
            "use strict";
            t.decode = t.parse = n(10);
            t.encode = t.stringify = n(11)
        }, function(e, t, n) {
            "use strict";

            function h(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            e.exports = function(e, t, n, r) {
                t = t || "&";
                n = n || "=";
                var i = {};
                if ("string" !== typeof e || 0 === e.length) return i;
                var o = /\+/g;
                e = e.split(t);
                var a = 1e3;
                r && "number" === typeof r.maxKeys && (a = r.maxKeys);
                var s = e.length;
                a > 0 && s > a && (s = a);
                for (var u = 0; u < s; ++u) {
                    var c = e[u].replace(o, "%20"),
                        f = c.indexOf(n),
                        l, d, p, v;
                    if (f >= 0) {
                        l = c.substr(0, f);
                        d = c.substr(f + 1)
                    } else {
                        l = c;
                        d = ""
                    }
                    p = decodeURIComponent(l);
                    v = decodeURIComponent(d);
                    h(i, p) ? m(i[p]) ? i[p].push(v) : i[p] = [i[p], v] : i[p] = v
                }
                return i
            };
            var m = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
        }, function(e, t, n) {
            "use strict";
            var o = function(e) {
                switch (typeof e) {
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return ""
                }
            };
            e.exports = function(n, r, i, e) {
                r = r || "&";
                i = i || "=";
                null === n && (n = void 0);
                if ("object" === typeof n) return s(u(n), function(e) {
                    var t = encodeURIComponent(o(e)) + i;
                    return a(n[e]) ? s(n[e], function(e) {
                        return t + encodeURIComponent(o(e))
                    }).join(r) : t + encodeURIComponent(o(n[e]))
                }).join(r);
                if (!e) return "";
                return encodeURIComponent(o(e)) + i + encodeURIComponent(o(n))
            };
            var a = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };

            function s(e, t) {
                if (e.map) return e.map(t);
                var n = [];
                for (var r = 0; r < e.length; r++) n.push(t(e[r], r));
                return n
            }
            var u = Object.keys || function(e) {
                var t = [];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            }
        }, function(e, t, n) {
            var a = n(13);
            var s = n(14);

            function r(e, t, n) {
                var r = t && n || 0;
                if ("string" == typeof e) {
                    t = "binary" === e ? new Array(16) : null;
                    e = null
                }
                e = e || {};
                var i = e.random || (e.rng || a)();
                i[6] = 15 & i[6] | 64;
                i[8] = 63 & i[8] | 128;
                if (t)
                    for (var o = 0; o < 16; ++o) t[r + o] = i[o];
                return t || s(i)
            }
            e.exports = r
        }, function(e, t) {
            var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (n) {
                var r = new Uint8Array(16);
                e.exports = function e() {
                    n(r);
                    return r
                }
            } else {
                var i = new Array(16);
                e.exports = function e() {
                    for (var t = 0, n; t < 16; t++) {
                        0 === (3 & t) && (n = 4294967296 * Math.random());
                        i[t] = n >>> ((3 & t) << 3) & 255
                    }
                    return i
                }
            }
        }, function(e, t) {
            var i = [];
            for (var n = 0; n < 256; ++n) i[n] = (n + 256).toString(16).substr(1);

            function r(e, t) {
                var n = t || 0;
                var r = i;
                return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
            }
            e.exports = r
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.default = {
                actor: {
                    type: "string",
                    nullable: false
                },
                action: {
                    type: "string",
                    nullable: false
                },
                event_owner_team: {
                    type: "string",
                    nullable: false
                },
                event_source: {
                    type: "string",
                    nullable: false
                },
                object_type: {
                    type: "string",
                    nullable: false
                },
                context_website_identifier: {
                    type: "string",
                    nullable: true
                },
                destination_url: {
                    type: "string",
                    nullable: true
                },
                object_identifier: {
                    type: "string",
                    nullable: true
                },
                object_id: {
                    type: "string",
                    nullable: true
                },
                object_display_name: {
                    type: "string",
                    nullable: true
                },
                object_value: {
                    type: "string",
                    nullable: true
                },
                indirect_object_identifier: {
                    type: "string",
                    nullable: true
                },
                indirect_object_id: {
                    type: "string",
                    nullable: true
                },
                indirect_object_display_name: {
                    type: "string",
                    nullable: true
                },
                indirect_object_value: {
                    type: "string",
                    nullable: true
                },
                indirect_object_type: {
                    type: "string",
                    nullable: true
                },
                product_area: {
                    type: "string",
                    nullable: true
                },
                product_page: {
                    type: "string",
                    nullable: true
                },
                product_section: {
                    type: "string",
                    nullable: true
                },
                product_design_identifier: {
                    type: "string",
                    nullable: true
                },
                user_member_account_id: {
                    type: "string",
                    nullable: true
                },
                user_session_id: {
                    type: "string",
                    nullable: true
                }
            }
        }])
    },
    "./src/main/webapp/universal/node_modules/resourcetiming-compression/src/resourcetiming-compression.js": function(n, r, e) {
        var i, o;
        (function(v) {
            "use strict";
            var e;
            var t;
            if ("undefined" !== typeof v) {
                e = v;
                t = e.ResourceTimingCompression
            }
            var p = {};
            p.HOSTNAMES_REVERSED = true;
            p.INITIATOR_TYPES = {
                other: 0,
                img: 1,
                link: 2,
                script: 3,
                css: 4,
                xmlhttprequest: 5,
                html: 6,
                image: 7,
                beacon: 8,
                fetch: 9,
                iframe: "a",
                subdocument: "a",
                body: "b",
                input: "c",
                frame: "a",
                object: "d",
                video: "e",
                audio: "f",
                source: "g",
                track: "h",
                embed: "i",
                eventsource: "j",
                navigation: 6
            };
            p.DEFAULT_XSS_BREAK_WORDS = [/(h)(ref)/gi, /(s)(rc)/gi, /(a)(ction)/gi];
            p.XSS_BREAK_DELIM = "\n";
            p.DEFAULT_URL_LIMIT = 500;
            p.SPECIAL_DATA_PREFIX = "*";
            p.SPECIAL_DATA_DIMENSION_TYPE = "0";
            p.SPECIAL_DATA_SIZE_TYPE = "1";
            p.SPECIAL_DATA_SCRIPT_TYPE = "2";
            p.SPECIAL_DATA_SCRIPT_ASYNC_ATTR = 1;
            p.SPECIAL_DATA_SCRIPT_DEFER_ATTR = 2;
            p.SPECIAL_DATA_SCRIPT_LOCAT_ATTR = 4;
            p.SPECIAL_DATA_SERVERTIMING_TYPE = "3";
            p.SPECIAL_DATA_LINK_ATTR_TYPE = "4";
            p.REL_TYPES = {
                prefetch: 1,
                preload: 2,
                prerender: 3,
                stylesheet: 4
            };
            p.HOSTNAME_REGEX = /^(https?:\/\/)([^\/]+)(.*)/;
            p.trimUrls = [];
            p.xssBreakWords = p.DEFAULT_XSS_BREAK_WORDS;
            p.noConflict = function() {
                e.ResourceTimingCompression = t;
                return p
            };
            p.convertToTrie = function(e) {
                var t = {},
                    n, r, i, o, a, s, u, c;
                for (n in e) {
                    if (!e.hasOwnProperty(n)) continue;
                    r = n;
                    for (i = 0; i < this.xssBreakWords.length; i++) r = r.replace(this.xssBreakWords[i], "$1" + p.XSS_BREAK_DELIM + "$2");
                    o = e[n];
                    a = r.split("");
                    u = t;
                    for (i = 0; i < a.length; i++) {
                        s = a[i];
                        c = u[s];
                        "undefined" === typeof c ? u = u[s] = i === a.length - 1 ? o : {} : "string" === typeof c ? u = u[s] = {
                            "|": c
                        } : i === a.length - 1 ? u[s]["|"] = o : u = u[s]
                    }
                }
                return t
            };
            p.optimizeTrie = function(e, t) {
                var n = 0,
                    r, i, o;
                var a = [];
                for (r in e) e.hasOwnProperty(r) && a.push(r);
                for (var s = 0; s < a.length; s++) {
                    r = a[s];
                    if ("object" === typeof e[r]) {
                        i = this.optimizeTrie(e[r], false);
                        if (i) {
                            delete e[r];
                            if (r === p.XSS_BREAK_DELIM) {
                                r = i.name;
                                n++
                            } else r += i.name;
                            e[r] = i.value
                        }
                    }
                    n++
                }
                if (1 === n) {
                    if (t) {
                        o = {};
                        o[r] = e[r];
                        return o
                    }
                    return {
                        name: r,
                        value: e[r]
                    }
                }
                if (t) return e;
                return false
            };
            p.trimTiming = function(e, t) {
                "number" !== typeof e && (e = 0);
                "number" !== typeof t && (t = 0);
                var n = Math.round(e || 0),
                    r = Math.round(t || 0);
                return 0 === n ? 0 : n - r
            };
            p.getNavStartTime = function(e) {
                var t = 0,
                    n;
                if (!e) return t;
                try {
                    n = e.location && e.location.href;
                    "performance" in e && e.performance && e.performance.timing && e.performance.timing.navigationStart && (t = e.performance.timing.navigationStart)
                } catch (e) {}
                return t
            };
            p.findPerformanceEntriesForFrame = function(e, t, n, r) {
                var i = [],
                    o, a, s, u, c, f, l, d, p, v = {},
                    h = {},
                    m;
                "undefined" === typeof t && (t = true);
                "undefined" === typeof n && (n = 0);
                "undefined" === typeof r && (r = 0);
                if (r > 10) return i;
                try {
                    s = this.getNavStartTime(e);
                    m = e.document.createElement("a");
                    _(m, h, "script");
                    _(m, v, "link");
                    if (e.frames)
                        for (o = 0; o < e.frames.length; o++) {
                            u = this.getNavStartTime(e.frames[o]);
                            c = 0;
                            u > s && (c = n + (u - s));
                            i = i.concat(this.findPerformanceEntriesForFrame(e.frames[o], false, c, ++r))
                        }
                    try {
                        d = e.location && e.location.href;
                        if (!("performance" in e) || !e.performance || !e.performance.getEntriesByType) return i
                    } catch (e) {
                        return i
                    }
                    if (t) {
                        a = e.performance.getEntriesByType("navigation");
                        if (a && 1 === a.length) {
                            f = a[0];
                            i.push({
                                name: e.location.href,
                                startTime: 0,
                                initiatorType: "html",
                                redirectStart: f.redirectStart,
                                redirectEnd: f.redirectEnd,
                                fetchStart: f.fetchStart,
                                domainLookupStart: f.domainLookupStart,
                                domainLookupEnd: f.domainLookupEnd,
                                connectStart: f.connectStart,
                                secureConnectionStart: f.secureConnectionStart,
                                connectEnd: f.connectEnd,
                                requestStart: f.requestStart,
                                responseStart: f.responseStart,
                                responseEnd: f.responseEnd,
                                serverTiming: f.serverTiming || []
                            })
                        } else if (e.performance.timing) {
                            l = e.performance.timing;
                            0 !== l.navigationStart && l.responseEnd <= l.navigationStart + 36e5 && i.push({
                                name: e.location.href,
                                startTime: 0,
                                initiatorType: "html",
                                redirectStart: l.redirectStart ? l.redirectStart - l.navigationStart : 0,
                                redirectEnd: l.redirectEnd ? l.redirectEnd - l.navigationStart : 0,
                                fetchStart: l.fetchStart ? l.fetchStart - l.navigationStart : 0,
                                domainLookupStart: l.domainLookupStart ? l.domainLookupStart - l.navigationStart : 0,
                                domainLookupEnd: l.domainLookupEnd ? l.domainLookupEnd - l.navigationStart : 0,
                                connectStart: l.connectStart ? l.connectStart - l.navigationStart : 0,
                                secureConnectionStart: l.secureConnectionStart ? l.secureConnectionStart - l.navigationStart : 0,
                                connectEnd: l.connectEnd ? l.connectEnd - l.navigationStart : 0,
                                requestStart: l.requestStart ? l.requestStart - l.navigationStart : 0,
                                responseStart: l.responseStart ? l.responseStart - l.navigationStart : 0,
                                responseEnd: l.responseEnd ? l.responseEnd - l.navigationStart : 0
                            })
                        }
                    }
                    var y = e.performance.getEntriesByType("resource");
                    var g = [];
                    for (o = 0; y && o < y.length; o++) {
                        l = y[o];
                        p = {
                            name: l.name,
                            initiatorType: l.initiatorType,
                            startTime: l.startTime + n,
                            redirectStart: l.redirectStart ? l.redirectStart + n : 0,
                            redirectEnd: l.redirectEnd ? l.redirectEnd + n : 0,
                            fetchStart: l.fetchStart ? l.fetchStart + n : 0,
                            domainLookupStart: l.domainLookupStart ? l.domainLookupStart + n : 0,
                            domainLookupEnd: l.domainLookupEnd ? l.domainLookupEnd + n : 0,
                            connectStart: l.connectStart ? l.connectStart + n : 0,
                            secureConnectionStart: l.secureConnectionStart ? l.secureConnectionStart + n : 0,
                            connectEnd: l.connectEnd ? l.connectEnd + n : 0,
                            requestStart: l.requestStart ? l.requestStart + n : 0,
                            responseStart: l.responseStart ? l.responseStart + n : 0,
                            responseEnd: l.responseEnd ? l.responseEnd + n : 0
                        };
                        if (l.encodedBodySize || l.decodedBodySize || l.transferSize) {
                            p.encodedBodySize = l.encodedBodySize;
                            p.decodedBodySize = l.decodedBodySize;
                            p.transferSize = l.transferSize
                        }
                        l.serverTiming && l.serverTiming.length && (p.serverTiming = l.serverTiming);
                        this.updateScriptFlags(h, l, p);
                        this.updateLinkFlags(v, l, p);
                        g.push(p)
                    }
                    i = i.concat(g)
                } catch (e) {
                    return i
                }
                return i
            };
            p.updateScriptFlags = function(e, t, n) {
                if (("script" === t.initiatorType || "link" === t.initiatorType) && e[t.name]) {
                    var r = e[t.name];
                    n.scriptAttrs = (r.async ? p.SPECIAL_DATA_SCRIPT_ASYNC_ATTR : 0) | (r.defer ? p.SPECIAL_DATA_SCRIPT_DEFER_ATTR : 0);
                    while (1 === r.nodeType && "BODY" !== r.nodeName) r = r.parentNode;
                    n.scriptAttrs |= "BODY" === r.nodeName ? p.SPECIAL_DATA_SCRIPT_LOCAT_ATTR : 0
                }
            };
            p.updateLinkFlags = function(e, t, n) {
                "link" === t.initiatorType && e[t.name] && e[t.name].rel.split(/[\u0009\u000A\u000C\u000D\u0020]+/).find(function(e) {
                    e = e.toLowerCase();
                    if (p.REL_TYPES[e]) {
                        n.linkAttrs = p.REL_TYPES[e];
                        return true
                    }
                    return false
                })
            };
            p.toBase36 = function(e) {
                if ("number" === typeof e && 0 !== e) return e.toString(36);
                return "string" === typeof e ? e : ""
            };

            function _(t, n, e) {
                Array.prototype.forEach.call(t.ownerDocument.getElementsByTagName(e), function(e) {
                    t.href = e.currentSrc || e.src || e.getAttribute("xlink:href") || e.href;
                    t.href.match(/^https?:\/\//) && (n[t.href] = e)
                })
            }
            p.getVisibleEntries = function(e) {
                if (!e) return {};
                var t = ["img", "iframe", "image"],
                    c = {},
                    f, l, d = e.document,
                    p = d.createElement("A");
                f = void 0 !== e.pageXOffset ? e.pageXOffset : (d.documentElement || d.body.parentNode || d.body).scrollLeft;
                l = void 0 !== e.pageYOffset ? e.pageYOffset : (d.documentElement || d.body.parentNode || d.body).scrollTop;
                t.forEach(function(e) {
                    var t = d.getElementsByTagName(e),
                        n, r, i, o;
                    for (r = 0; r < t.length; r++) {
                        n = t[r];
                        if (!n) continue;
                        o = n.currentSrc || n.src || "function" === typeof n.getAttribute && n.getAttribute("src") || n.getAttribute("xlink:href");
                        p.href = o;
                        o = p.href;
                        if (!o || c[o]) continue;
                        i = n.getBoundingClientRect();
                        if ((i.height || n.offsetHeight) && (i.width || n.offsetWidth)) {
                            c[o] = [i.height || n.offsetHeight, i.width || n.offsetWidth, Math.round(i.top + l), Math.round(i.left + f)];
                            if (!n.naturalHeight && !n.naturalWidth) continue;
                            var a, s, u;
                            if (n.currentSrc && (n.srcset || n.parentNode && n.parentNode.nodeName && "PICTURE" === n.parentNode.nodeName.toUpperCase())) {
                                a = n.isConnected ? n.ownerDocument.createElement("IMG") : new v.Image;
                                a.src = o
                            } else a = n;
                            s = a.naturalHeight || n.naturalHeight;
                            u = a.naturalWidth || n.naturalWidth;
                            !s && !u || c[o][0] === s && c[o][1] === u || c[o].push(s, u)
                        }
                    }
                });
                return c
            };
            p.inArray = function(e, t) {
                var n;
                if ("undefined" === typeof e || "undefined" === typeof t || !t.length) return false;
                for (n = 0; n < t.length; n++)
                    if (t[n] === e) return true;
                return false
            };
            p.getFilteredResourceTiming = function(e, t, n, r) {
                var i = this.findPerformanceEntriesForFrame(e, true, 0, 0),
                    o, a, s = this.getNavStartTime(e),
                    u = {};
                if (!i || !i.length) return {
                    entries: []
                };
                var c = [];
                for (o = 0; o < i.length; o++) {
                    a = i[o];
                    if (0 === a.name.indexOf("about:") || 0 === a.name.indexOf("javascript:")) continue;
                    if (t && s + a.startTime < t) continue;
                    if (n && s + a.startTime > n) break;
                    if ("undefined" !== typeof r && "*" !== r && r.length && (!a.initiatorType || !this.inArray(a.initiatorType, r))) continue;
                    p.accumulateServerTimingEntries(u, a.serverTiming);
                    c.push(a)
                }
                var f = p.compressServerTiming(u);
                return {
                    entries: c,
                    serverTiming: {
                        lookup: f,
                        indexed: p.indexServerTiming(f)
                    }
                }
            };
            p.compressSize = function(e) {
                var t, n, r, i;
                if (e.encodedBodySize || e.decodedBodySize || e.transferSize) {
                    t = e.transferSize;
                    n = e.encodedBodySize;
                    r = e.decodedBodySize;
                    i = [n, t ? t - n : "_", r - n];
                    return i.map(this.toBase36).join(",").replace(/,+$/, "")
                }
                return ""
            };
            p.cleanupURL = function(e, t) {
                var n;
                if (!e || "[object Array]" === Object.prototype.toString.call(e)) return "";
                if ("undefined" !== typeof t && e && e.length > t) {
                    n = e.indexOf("?");
                    e = -1 !== n && n < t ? e.substr(0, n) + "?..." : e.substr(0, t - 3) + "..."
                }
                return e
            };
            p.trimUrl = function(e, t) {
                var n, r, i;
                if (e && t)
                    for (n = 0; n < t.length; n++) {
                        i = t[n];
                        if ("string" === typeof i) {
                            r = e.indexOf(i);
                            if (-1 !== r) {
                                e = e.substr(0, r + i.length) + "...";
                                break
                            }
                        } else i instanceof RegExp && i.test(e) && (e = e.replace(i, "$1") + "...")
                    }
                return this.cleanupURL(e, p.DEFAULT_URL_LIMIT)
            };
            p.getResourceTiming = function(e, t, n, r) {
                "undefined" === typeof e && (e = v);
                var i = p.getFilteredResourceTiming(e, t, n);
                var o = i.entries,
                    a = i.serverTiming;
                if (!o || !o.length) return {};
                return p.compressResourceTiming(e, o, a, r)
            };
            p.compressResourceTiming = function(e, t, o, n) {
                var r, i, a = {},
                    s, u, c, f, l = {};
                n || (l = this.getVisibleEntries(e));
                for (r = 0; r < t.length; r++) {
                    i = t[r];
                    s = this.INITIATOR_TYPES[i.initiatorType];
                    "undefined" === typeof s && (s = 0);
                    f = s + [this.trimTiming(i.startTime, 0), this.trimTiming(i.responseEnd, i.startTime), this.trimTiming(i.responseStart, i.startTime), this.trimTiming(i.requestStart, i.startTime), this.trimTiming(i.connectEnd, i.startTime), this.trimTiming(i.secureConnectionStart, i.startTime), this.trimTiming(i.connectStart, i.startTime), this.trimTiming(i.domainLookupEnd, i.startTime), this.trimTiming(i.domainLookupStart, i.startTime), this.trimTiming(i.redirectEnd, i.startTime), this.trimTiming(i.redirectStart, i.startTime)].map(this.toBase36).join(",").replace(/,+$/, "");
                    var d = this.compressSize(i);
                    "" !== d && (f += p.SPECIAL_DATA_PREFIX + p.SPECIAL_DATA_SIZE_TYPE + d);
                    i.hasOwnProperty("scriptAttrs") && (f += p.SPECIAL_DATA_PREFIX + p.SPECIAL_DATA_SCRIPT_TYPE + i.scriptAttrs);
                    i.hasOwnProperty("linkAttrs") && (f += p.SPECIAL_DATA_PREFIX + p.SPECIAL_DATA_LINK_ATTR_TYPE + i.linkAttrs);
                    i.serverTiming && i.serverTiming.length && (f += p.SPECIAL_DATA_PREFIX + p.SPECIAL_DATA_SERVERTIMING_TYPE + i.serverTiming.reduce(function(e, t, n) {
                        var r = String(t.duration);
                        "0." === r.substring(0, 2) && (r = r.substring(1));
                        var i = p.identifyServerTimingEntry(o.indexed[t.name].index, o.indexed[t.name].descriptions[t.description]);
                        e += (n > 0 ? "," : "") + r + i;
                        return e
                    }, ""));
                    c = u = this.trimUrl(i.name, this.trimUrls);
                    p.HOSTNAMES_REVERSED && (c = this.reverseHostname(u));
                    void 0 !== a[c] ? a[c] += "|" + f : void 0 !== l[u] ? a[c] = p.SPECIAL_DATA_PREFIX + p.SPECIAL_DATA_DIMENSION_TYPE + l[u].map(this.toBase36).join(",").replace(/,+$/, "") + "|" + f : a[c] = f
                }
                return {
                    restiming: this.optimizeTrie(this.convertToTrie(a), true),
                    servertiming: o.lookup
                }
            };
            p.reverseHostname = function(e) {
                return e.replace(p.HOSTNAME_REGEX, function(e, t, n, r) {
                    return t + p.reverseString(n) + r
                })
            };
            p.reverseString = function(e) {
                var t = e.length,
                    n = "";
                while (t--) n += e[t];
                return n
            };
            p.accumulateServerTimingEntries = function(n, e) {
                (e || []).forEach(function(e) {
                    "undefined" === typeof n[e.name] && (n[e.name] = {
                        count: 0,
                        counts: {}
                    });
                    var t = n[e.name];
                    t.counts[e.description] = t.counts[e.description] || 0;
                    t.counts[e.description]++;
                    t.count++
                })
            };
            p.compressServerTiming = function(r) {
                return Object.keys(r).sort(function(e, t) {
                    return r[t].count - r[e].count
                }).reduce(function(e, n) {
                    var t = Object.keys(r[n].counts).sort(function(e, t) {
                        return r[n].counts[t] - r[n].counts[e]
                    });
                    e.push(1 === t.length && "" === t[0] ? n : [n].concat(t));
                    return e
                }, [])
            };
            p.indexServerTiming = function(e) {
                return e.reduce(function(e, t, n) {
                    var r, i;
                    if (Array.isArray(t)) {
                        r = t[0];
                        i = t.slice(1).reduce(function(e, t, n) {
                            e[t] = n;
                            return e
                        }, {})
                    } else {
                        r = t;
                        i = {
                            "": 0
                        }
                    }
                    e[r] = {
                        index: n,
                        descriptions: i
                    };
                    return e
                }, {})
            };
            p.identifyServerTimingEntry = function(e, t) {
                var n = "";
                e && (n += e);
                t && (n += "." + t);
                n.length && (n = ":" + n);
                return n
            };
            true;
            !(i = [], o = function() {
                return p
            }.apply(r, i), void 0 !== o && (n.exports = o))
        })("undefined" !== typeof window ? window : void 0)
    },
    "./src/main/webapp/universal/node_modules/tslib/tslib.es6.js": function(e, t, n) {
        "use strict";
        n.r(t);
        n.d(t, "__extends", function() {
            return i
        });
        n.d(t, "__assign", function() {
            return o
        });
        n.d(t, "__rest", function() {
            return a
        });
        n.d(t, "__decorate", function() {
            return s
        });
        n.d(t, "__param", function() {
            return u
        });
        n.d(t, "__metadata", function() {
            return c
        });
        n.d(t, "__awaiter", function() {
            return f
        });
        n.d(t, "__generator", function() {
            return l
        });
        n.d(t, "__exportStar", function() {
            return d
        });
        n.d(t, "__values", function() {
            return p
        });
        n.d(t, "__read", function() {
            return v
        });
        n.d(t, "__spread", function() {
            return h
        });
        n.d(t, "__spreadArrays", function() {
            return m
        });
        n.d(t, "__await", function() {
            return y
        });
        n.d(t, "__asyncGenerator", function() {
            return g
        });
        n.d(t, "__asyncDelegator", function() {
            return _
        });
        n.d(t, "__asyncValues", function() {
            return b
        });
        n.d(t, "__makeTemplateObject", function() {
            return w
        });
        n.d(t, "__importStar", function() {
            return E
        });
        n.d(t, "__importDefault", function() {
            return S
        });
        var r = function(e, t) {
            r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return r(e, t)
        };

        function i(e, t) {
            r(e, t);

            function n() {
                this.constructor = e
            }
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }
        var o = function() {
            o = Object.assign || function e(t) {
                for (var n, r = 1, i = arguments.length; r < i; r++) {
                    n = arguments[r];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
                }
                return t
            };
            return o.apply(this, arguments)
        };

        function a(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols)
                for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
            return n
        }

        function s(e, t, n, r) {
            var i = arguments.length,
                o = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r,
                a;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
            return i > 3 && o && Object.defineProperty(t, n, o), o
        }

        function u(n, r) {
            return function(e, t) {
                r(e, t, n)
            }
        }

        function c(e, t) {
            if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
        }

        function f(o, a, s, u) {
            return new(s = s || Promise)(function(e, t) {
                function n(e) {
                    try {
                        i(u.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    try {
                        i(u["throw"](e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(t) {
                    t.done ? e(t.value) : new s(function(e) {
                        e(t.value)
                    }).then(n, r)
                }
                i((u = u.apply(o, a || [])).next())
            })
        }

        function l(e, n) {
            var r = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                i, o, a, t;
            return t = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" === typeof Symbol && (t[Symbol.iterator] = function() {
                return this
            }), t;

            function s(t) {
                return function(e) {
                    return u([t, e])
                }
            }

            function u(t) {
                if (i) throw new TypeError("Generator is already executing.");
                while (r) try {
                    if (i = 1, o && (a = 2 & t[0] ? o["return"] : t[0] ? o["throw"] || ((a = o["return"]) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                    (o = 0, a) && (t = [2 & t[0], a.value]);
                    switch (t[0]) {
                        case 0:
                        case 1:
                            a = t;
                            break;
                        case 4:
                            r.label++;
                            return {
                                value: t[1],
                                done: false
                            };
                        case 5:
                            r.label++;
                            o = t[1];
                            t = [0];
                            continue;
                        case 7:
                            t = r.ops.pop();
                            r.trys.pop();
                            continue;
                        default:
                            if (!(a = r.trys, a = a.length > 0 && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                r = 0;
                                continue
                            }
                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                r.label = t[1];
                                break
                            }
                            if (6 === t[0] && r.label < a[1]) {
                                r.label = a[1];
                                a = t;
                                break
                            }
                            if (a && r.label < a[2]) {
                                r.label = a[2];
                                r.ops.push(t);
                                break
                            }
                            a[2] && r.ops.pop();
                            r.trys.pop();
                            continue
                    }
                    t = n.call(e, r)
                } catch (e) {
                    t = [6, e];
                    o = 0
                } finally {
                    i = a = 0
                }
                if (5 & t[0]) throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: true
                }
            }
        }

        function d(e, t) {
            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
        }

        function p(e) {
            var t = "function" === typeof Symbol && e[Symbol.iterator],
                n = 0;
            if (t) return t.call(e);
            return {
                next: function() {
                    e && n >= e.length && (e = void 0);
                    return {
                        value: e && e[n++],
                        done: !e
                    }
                }
            }
        }

        function v(e, t) {
            var n = "function" === typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r = n.call(e),
                i, o = [],
                a;
            try {
                while ((void 0 === t || t-- > 0) && !(i = r.next()).done) o.push(i.value)
            } catch (e) {
                a = {
                    error: e
                }
            } finally {
                try {
                    i && !i.done && (n = r["return"]) && n.call(r)
                } finally {
                    if (a) throw a.error
                }
            }
            return o
        }

        function h() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
            return e
        }

        function m() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
            for (var r = Array(e), i = 0, t = 0; t < n; t++)
                for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
            return r
        }

        function y(e) {
            return this instanceof y ? (this.v = e, this) : new y(e)
        }

        function g(e, t, n) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var i = n.apply(e, t || []),
                o, a = [];
            return o = {}, r("next"), r("throw"), r("return"), o[Symbol.asyncIterator] = function() {
                return this
            }, o;

            function r(r) {
                i[r] && (o[r] = function(n) {
                    return new Promise(function(e, t) {
                        a.push([r, n, e, t]) > 1 || s(r, n)
                    })
                })
            }

            function s(e, t) {
                try {
                    u(i[e](t))
                } catch (e) {
                    l(a[0][3], e)
                }
            }

            function u(e) {
                e.value instanceof y ? Promise.resolve(e.value.v).then(c, f) : l(a[0][2], e)
            }

            function c(e) {
                s("next", e)
            }

            function f(e) {
                s("throw", e)
            }

            function l(e, t) {
                (e(t), a.shift(), a.length) && s(a[0][0], a[0][1])
            }
        }

        function _(r) {
            var e, i;
            return e = {}, t("next"), t("throw", function(e) {
                throw e
            }), t("return"), e[Symbol.iterator] = function() {
                return this
            }, e;

            function t(t, n) {
                e[t] = r[t] ? function(e) {
                    return (i = !i) ? {
                        value: y(r[t](e)),
                        done: "return" === t
                    } : n ? n(e) : e
                } : n
            }
        }

        function b(i) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var e = i[Symbol.asyncIterator],
                t;
            return e ? e.call(i) : (i = "function" === typeof p ? p(i) : i[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                return this
            }, t);

            function n(r) {
                t[r] = i[r] && function(n) {
                    return new Promise(function(e, t) {
                        n = i[r](n), o(e, t, n.done, n.value)
                    })
                }
            }

            function o(t, e, n, r) {
                Promise.resolve(r).then(function(e) {
                    t({
                        value: e,
                        done: n
                    })
                }, e)
            }
        }

        function w(e, t) {
            Object.defineProperty ? Object.defineProperty(e, "raw", {
                value: t
            }) : e.raw = t;
            return e
        }

        function E(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            t.default = e;
            return t
        }

        function S(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    "./src/main/webapp/universal/node_modules/tti-polyfill/tti-polyfill.js": function(T, j, e) {
        (function(E) {
            var S, O;
            (function() {
                var t = "undefined" != typeof window && window === this ? this : "undefined" != typeof E && null != E ? E : this,
                    n = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
                        e != Array.prototype && e != Object.prototype && (e[t] = n.value)
                    };

                function r() {
                    r = function() {};
                    t.Symbol || (t.Symbol = e)
                }
                var i = 0;

                function e(e) {
                    return "jscomp_symbol_" + (e || "") + i++
                }

                function o() {
                    r();
                    var e = t.Symbol.iterator;
                    e = e || (t.Symbol.iterator = t.Symbol("iterator"));
                    "function" != typeof Array.prototype[e] && n(Array.prototype, e, {
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            return a(this)
                        }
                    });
                    o = function() {}
                }

                function a(e) {
                    var t = 0;
                    return s(function() {
                        return t < e.length ? {
                            done: !1,
                            value: e[t++]
                        } : {
                            done: !0
                        }
                    })
                }

                function s(e) {
                    o();
                    e = {
                        next: e
                    };
                    e[t.Symbol.iterator] = function() {
                        return this
                    };
                    return e
                }

                function u(e) {
                    o();
                    var t = e[Symbol.iterator];
                    return t ? t.call(e) : a(e)
                }

                function c(e) {
                    if (!(e instanceof Array)) {
                        e = u(e);
                        for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                        e = n
                    }
                    return e
                }
                var f = 0;

                function l(i, o) {
                    var a = XMLHttpRequest.prototype.send,
                        s = f++;
                    XMLHttpRequest.prototype.send = function(e) {
                        for (var t = [], n = 0; n < arguments.length; ++n) t[n - 0] = arguments[n];
                        var r = this;
                        i(s);
                        this.addEventListener("readystatechange", function() {
                            4 === r.readyState && o(s)
                        });
                        return a.apply(this, t)
                    }
                }

                function d(o, a) {
                    var s = fetch;
                    fetch = function(e) {
                        for (var i = [], t = 0; t < arguments.length; ++t) i[t - 0] = arguments[t];
                        return new Promise(function(t, n) {
                            var r = f++;
                            o(r);
                            s.apply(null, [].concat(c(i))).then(function(e) {
                                a(r);
                                t(e)
                            }, function(e) {
                                a(e);
                                n(e)
                            })
                        })
                    }
                }
                var p = "img script iframe link audio video source".split(" ");

                function v(e, t) {
                    e = u(e);
                    for (var n = e.next(); !n.done; n = e.next())
                        if (n = n.value, t.includes(n.nodeName.toLowerCase()) || v(n.children, t)) return !0;
                    return !1
                }

                function h(n) {
                    var e = new MutationObserver(function(e) {
                        e = u(e);
                        for (var t = e.next(); !t.done; t = e.next()) t = t.value, "childList" == t.type && v(t.addedNodes, p) ? n(t) : "attributes" == t.type && p.includes(t.target.tagName.toLowerCase()) && n(t)
                    });
                    e.observe(document, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        attributeFilter: ["href", "src"]
                    });
                    return e
                }

                function m(e, t) {
                    if (2 < e.length) return performance.now();
                    var n = [];
                    t = u(t);
                    for (var r = t.next(); !r.done; r = t.next()) r = r.value, n.push({
                        timestamp: r.start,
                        type: "requestStart"
                    }), n.push({
                        timestamp: r.end,
                        type: "requestEnd"
                    });
                    t = u(e);
                    for (r = t.next(); !r.done; r = t.next()) n.push({
                        timestamp: r.value,
                        type: "requestStart"
                    });
                    n.sort(function(e, t) {
                        return e.timestamp - t.timestamp
                    });
                    e = e.length;
                    for (t = n.length - 1; 0 <= t; t--) switch (r = n[t], r.type) {
                        case "requestStart":
                            e--;
                            break;
                        case "requestEnd":
                            e++;
                            if (2 < e) return r.timestamp;
                            break;
                        default:
                            throw Error("Internal Error: This should never happen")
                    }
                    return 0
                }

                function y(e) {
                    e = e || {};
                    this.w = !!e.useMutationObserver;
                    this.u = e.minValue || null;
                    e = window.__tti && window.__tti.e;
                    var t = window.__tti && window.__tti.o;
                    this.a = e ? e.map(function(e) {
                        return {
                            start: e.startTime,
                            end: e.startTime + e.duration
                        }
                    }) : [];
                    t && t.disconnect();
                    this.b = [];
                    this.f = new Map;
                    this.j = null;
                    this.v = -1 / 0;
                    this.i = !1;
                    this.h = this.c = this.s = null;
                    l(this.m.bind(this), this.l.bind(this));
                    d(this.m.bind(this), this.l.bind(this));
                    b(this);
                    this.w && (this.h = h(this.B.bind(this)))
                }
                y.prototype.getFirstConsistentlyInteractive = function() {
                    var t = this;
                    return new Promise(function(e) {
                        t.s = e;
                        "complete" == document.readyState ? g(t) : window.addEventListener("load", function() {
                            g(t)
                        })
                    })
                };

                function g(e) {
                    e.i = !0;
                    var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
                        n = m(e.g, e.b);
                    _(e, Math.max(n + 5e3, t))
                }

                function _(o, e) {
                    !o.i || o.v > e || (clearTimeout(o.j), o.j = setTimeout(function() {
                        var e = performance.timing.navigationStart,
                            t = m(o.g, o.b),
                            e = (window.a && window.a.A ? 1e3 * window.a.A().C - e : 0) || performance.timing.domContentLoadedEventEnd - e;
                        if (o.u) var n = o.u;
                        else n = performance.timing.domContentLoadedEventEnd ? (n = performance.timing, n.domContentLoadedEventEnd - n.navigationStart) : null;
                        var r = performance.now();
                        null === n && _(o, Math.max(t + 5e3, r + 1e3));
                        var i = o.a;
                        t = 5e3 > r - t ? null : (t = i.length ? i[i.length - 1].end : e, 5e3 > r - t ? null : Math.max(t, n));
                        t && (o.s(t), clearTimeout(o.j), o.i = !1, o.c && o.c.disconnect(), o.h && o.h.disconnect());
                        _(o, performance.now() + 1e3)
                    }, e - performance.now()), o.v = e)
                }

                function b(r) {
                    r.c = new PerformanceObserver(function(e) {
                        e = u(e.getEntries());
                        for (var t = e.next(); !t.done; t = e.next())
                            if (t = t.value, "resource" === t.entryType && (r.b.push({
                                    start: t.fetchStart,
                                    end: t.responseEnd
                                }), _(r, m(r.g, r.b) + 5e3)), "longtask" === t.entryType) {
                                var n = t.startTime + t.duration;
                                r.a.push({
                                    start: t.startTime,
                                    end: n
                                });
                                _(r, n + 5e3)
                            }
                    });
                    r.c.observe({
                        entryTypes: ["longtask", "resource"]
                    })
                }
                y.prototype.m = function(e) {
                    this.f.set(e, performance.now())
                };
                y.prototype.l = function(e) {
                    this.f.delete(e)
                };
                y.prototype.B = function() {
                    _(this, performance.now() + 5e3)
                };
                t.Object.defineProperties(y.prototype, {
                    g: {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return [].concat(c(this.f.values()))
                        }
                    }
                });
                var w = {
                    getFirstConsistentlyInteractive: function(e) {
                        e = e || {};
                        return "PerformanceLongTaskTiming" in window ? new y(e).getFirstConsistentlyInteractive() : Promise.resolve(null)
                    }
                };
                true, T.exports ? T.exports = w : (true, !(S = [], O = function() {
                    return w
                }.apply(j, S), void 0 !== O && (T.exports = O)))
            })()
        }).call(this, e("./node_modules/webpack/buildin/global.js"))
    },
    "./src/main/webapp/universal/packages/enums/PageTypes.js": function(e, t) {
        var n = {
            MAIN_CONTENT: 1,
            CONTENT_COLLECTION: 1,
            PAGE: 2,
            SPLASH_PAGE: 3,
            CONTENT_ITEM: 50,
            NOT_FOUND: 100,
            ERROR: 101,
            SEARCH: 102,
            LOCK_SCREEN: 103,
            POPUP_OVERLAY: 104,
            PROTECTED_CONTENT: 105,
            SHOW_CART: 200,
            CHECKOUT: 201,
            ORDER_CONFIRMED: 202,
            DONATE: 203,
            CONTRIBUTION_CONFIRMED: 204,
            COMMERCE_CART_V2: 205,
            SUBSCRIPTION_CONFIRMED: 206,
            ORDER_RECEIVED: 207,
            MEMBERSHIP_CONFIRMED: 208,
            NEWSLETTER_UNSUBSCRIBE: 300,
            COMMERCE_EMAIL_PREVIEW: 301
        };
        e.exports = n
    },
    "./src/main/webapp/universal/packages/enums/StatusConstants.js": function(e, t) {
        var n = {
            EXPIRED: 1,
            PASTDUE: 2,
            TRIAL: 3,
            BETA: 4,
            REMOVED: 5,
            INTERNAL: 6,
            COMPED: 7,
            PAID: 8,
            V5_LINKED: 11,
            ACTIVE_PARKING_PAGE: 12,
            RESOLD: 13,
            RESOLD_GRACE_PERIOD: 14
        };
        e.exports = n
    },
    "./src/main/webapp/universal/src/apps/Performance/bootstrap.js": function(e, t, n) {
        "use strict";
        var r = n("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        var i = r(n("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/defineProperty.js"));
        var o = r(n("./src/main/webapp/universal/node_modules/@sqs/rum-collector/lib/index.js"));
        var u = r(n("./src/main/webapp/universal/packages/enums/StatusConstants.js"));
        var a = r(n("./src/main/webapp/universal/packages/enums/PageTypes.js"));
        var c = n("./src/main/webapp/universal/src/shared/utils/error-reporter/global-sentry.ts");

        function s(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }));
                n.push.apply(n, r)
            }
            return n
        }

        function f(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(n), true).forEach(function(e) {
                    (0, i.default)(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var l = window.Static && window.Static.SQUARESPACE_CONTEXT;
        var d = window.top !== window;
        var p = Object.freeze((0, i.default)({}, a.default.COMMERCE_CART_V2, "commerce-cart"));

        function v() {
            var e = window.location && window.location.pathname || "";
            return !d && /^\/config(\/.*)?$/.test(e)
        }

        function h() {
            return {
                inFrame: d,
                templateId: l.templateId || "",
                impersonatedSession: !!l.impersonatedSession,
                pageType: "number" === typeof l.pageType ? l.pageType : -1
            }
        }

        function m() {
            var e = l.website,
                t = void 0 === e ? {} : e;
            return {
                authenticUrl: t.authenticUrl || "",
                cloneable: !!t.cloneable,
                developerMode: !!t.developerMode,
                isHstsEnabled: !!t.isHstsEnabled,
                language: t.language || "",
                timeZone: t.timeZone || "",
                websiteId: t.id || "",
                websiteType: t.websiteType || -1
            }
        }

        function y() {
            var e = l.websiteSettings,
                t = void 0 === e ? {} : e;
            return {
                ampEnabled: !!t.ampEnabled
            }
        }

        function g() {
            var e = l.collection,
                t = void 0 === e ? {} : e;
            return {
                collectionType: t.type || -1
            }
        }

        function _() {
            return window.Squarespace && "SECTION_CONTEXT" in window.Squarespace
        }

        function b() {
            if (l.hasOwnProperty("templateVersion")) return l.templateVersion.replace(".", "_");
            if (_()) return "8";
            return null
        }

        function w(e) {
            var t = v();
            var n = p[l.pageType];
            var r = {
                appName: n || "v".concat(e, "-").concat(t ? "config" : "user-sites"),
                context: f({}, h(), {}, m(), {}, y(), {}, g()),
                captureException: function e(t, n) {
                    (0, c.withScope)(function(e) {
                        e.setTag("project", "rum-collector");
                        void 0 !== n && e.setExtra("extras", n);
                        (0, c.captureException)(t)
                    })
                }
            };
            if (t) {
                var i = l.website.siteStatus.value === u.default.INTERNAL;
                var o = l.authenticatedAccount,
                    a = o.createdOn,
                    s = o.id;
                r.context.isInternal = i;
                r.context.createdOn = a;
                r.context.memberId = s
            }
            return r
        }

        function E() {
            if (true, l) {
                var e = b();
                if (null === e) return;
                var t = w(e);
                (0, o.default)(t)
            }
        }
        E()
    },
    "./src/main/webapp/universal/src/shared/utils/error-reporter/global-sentry.ts": function(e, t, n) {
        "use strict";
        var r = n("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.withScope = t.configureScope = t.captureEvent = t.captureException = t.captureMessage = void 0;
        var i = r(n("./src/main/webapp/universal/node_modules/@sentry/browser/esm/index.js"));
        var o, a, s, u, c;
        t.withScope = c;
        t.configureScope = u;
        t.captureEvent = s;
        t.captureException = a;
        t.captureMessage = o;
        var f = function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Severity.Debug;
            console.log("".concat(n, ": ").concat(t));
            return "some-error-identifier"
        };
        if (window.SQUARESPACE_SENTRY) {
            t.captureMessage = o = window.SQUARESPACE_SENTRY.captureMessage;
            t.captureException = a = window.SQUARESPACE_SENTRY.captureException;
            t.captureEvent = s = window.SQUARESPACE_SENTRY.captureEvent;
            t.configureScope = u = window.SQUARESPACE_SENTRY.configureScope;
            t.withScope = c = window.SQUARESPACE_SENTRY.withScope
        } else {
            t.captureMessage = o = f;
            t.captureException = a = f;
            t.captureEvent = s = f;
            t.configureScope = u = function e() {};
            t.withScope = c = function e() {}
        }
    }
});
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/performance-124f1225a7ca80e2edd82-min.en-US.js.map