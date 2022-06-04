(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __export = (target, all) => {
    for (var name4 in all)
      __defProp(target, name4, { get: all[name4], enumerable: true });
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  function a(n2, l4) {
    for (var u3 in l4)
      n2[u3] = l4[u3];
    return n2;
  }
  function h(n2) {
    var l4 = n2.parentNode;
    l4 && l4.removeChild(n2);
  }
  function v(l4, u3, i3) {
    var t4, o3, r3, f3 = {};
    for (r3 in u3)
      r3 == "key" ? t4 = u3[r3] : r3 == "ref" ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), typeof l4 == "function" && l4.defaultProps != null)
      for (r3 in l4.defaultProps)
        f3[r3] === void 0 && (f3[r3] = l4.defaultProps[r3]);
    return y(l4, f3, t4, o3, null);
  }
  function y(n2, i3, t4, o3, r3) {
    var f3 = { type: n2, props: i3, key: t4, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r3 == null ? ++u : r3 };
    return r3 == null && l.vnode != null && l.vnode(f3), f3;
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l4) {
    this.props = n2, this.context = l4;
  }
  function k(n2, l4) {
    if (l4 == null)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l4 < n2.__k.length; l4++)
      if ((u3 = n2.__k[l4]) != null && u3.__e != null)
        return u3.__e;
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l4, u3;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l4 = 0; l4 < n2.__k.length; l4++)
        if ((u3 = n2.__k[l4]) != null && u3.__e != null) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return b(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l4) {
        return n3.__v.__b - l4.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l4, u3, i3, t4, o3, r3;
        n3.__d && (o3 = (t4 = (l4 = n3).__v).__e, (r3 = l4.__P) && (u3 = [], (i3 = a({}, t4)).__v = t4.__v + 1, j(r3, t4, i3, l4.__n, r3.ownerSVGElement !== void 0, t4.__h != null ? [o3] : null, u3, o3 == null ? k(t4) : o3, t4.__h), z(u3, t4), t4.__e != o3 && b(t4)));
      });
  }
  function w(n2, l4, u3, i3, t4, o3, r3, f3, s2, a3) {
    var h2, v5, p3, _3, b3, m3, g3, w4 = i3 && i3.__k || c, A3 = w4.length;
    for (u3.__k = [], h2 = 0; h2 < l4.length; h2++)
      if ((_3 = u3.__k[h2] = (_3 = l4[h2]) == null || typeof _3 == "boolean" ? null : typeof _3 == "string" || typeof _3 == "number" || typeof _3 == "bigint" ? y(null, _3, null, null, _3) : Array.isArray(_3) ? y(d, { children: _3 }, null, null, null) : _3.__b > 0 ? y(_3.type, _3.props, _3.key, null, _3.__v) : _3) != null) {
        if (_3.__ = u3, _3.__b = u3.__b + 1, (p3 = w4[h2]) === null || p3 && _3.key == p3.key && _3.type === p3.type)
          w4[h2] = void 0;
        else
          for (v5 = 0; v5 < A3; v5++) {
            if ((p3 = w4[v5]) && _3.key == p3.key && _3.type === p3.type) {
              w4[v5] = void 0;
              break;
            }
            p3 = null;
          }
        j(n2, _3, p3 = p3 || e, t4, o3, r3, f3, s2, a3), b3 = _3.__e, (v5 = _3.ref) && p3.ref != v5 && (g3 || (g3 = []), p3.ref && g3.push(p3.ref, null, _3), g3.push(v5, _3.__c || b3, _3)), b3 != null ? (m3 == null && (m3 = b3), typeof _3.type == "function" && _3.__k === p3.__k ? _3.__d = s2 = x(_3, s2, n2) : s2 = P(n2, _3, p3, w4, b3, s2), typeof u3.type == "function" && (u3.__d = s2)) : s2 && p3.__e == s2 && s2.parentNode != n2 && (s2 = k(p3));
      }
    for (u3.__e = m3, h2 = A3; h2--; )
      w4[h2] != null && (typeof u3.type == "function" && w4[h2].__e != null && w4[h2].__e == u3.__d && (u3.__d = k(i3, h2 + 1)), N(w4[h2], w4[h2]));
    if (g3)
      for (h2 = 0; h2 < g3.length; h2++)
        M(g3[h2], g3[++h2], g3[++h2]);
  }
  function x(n2, l4, u3) {
    for (var i3, t4 = n2.__k, o3 = 0; t4 && o3 < t4.length; o3++)
      (i3 = t4[o3]) && (i3.__ = n2, l4 = typeof i3.type == "function" ? x(i3, l4, u3) : P(u3, i3, i3, t4, i3.__e, l4));
    return l4;
  }
  function P(n2, l4, u3, i3, t4, o3) {
    var r3, f3, e3;
    if (l4.__d !== void 0)
      r3 = l4.__d, l4.__d = void 0;
    else if (u3 == null || t4 != o3 || t4.parentNode == null)
      n:
        if (o3 == null || o3.parentNode !== n2)
          n2.appendChild(t4), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
            if (f3 == t4)
              break n;
          n2.insertBefore(t4, o3), r3 = o3;
        }
    return r3 !== void 0 ? r3 : t4.nextSibling;
  }
  function C(n2, l4, u3, i3, t4) {
    var o3;
    for (o3 in u3)
      o3 === "children" || o3 === "key" || o3 in l4 || H(n2, o3, null, u3[o3], i3);
    for (o3 in l4)
      t4 && typeof l4[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || u3[o3] === l4[o3] || H(n2, o3, l4[o3], u3[o3], i3);
  }
  function $(n2, l4, u3) {
    l4[0] === "-" ? n2.setProperty(l4, u3) : n2[l4] = u3 == null ? "" : typeof u3 != "number" || s.test(l4) ? u3 : u3 + "px";
  }
  function H(n2, l4, u3, i3, t4) {
    var o3;
    n:
      if (l4 === "style")
        if (typeof u3 == "string")
          n2.style.cssText = u3;
        else {
          if (typeof i3 == "string" && (n2.style.cssText = i3 = ""), i3)
            for (l4 in i3)
              u3 && l4 in u3 || $(n2.style, l4, "");
          if (u3)
            for (l4 in u3)
              i3 && u3[l4] === i3[l4] || $(n2.style, l4, u3[l4]);
        }
      else if (l4[0] === "o" && l4[1] === "n")
        o3 = l4 !== (l4 = l4.replace(/Capture$/, "")), l4 = l4.toLowerCase() in n2 ? l4.toLowerCase().slice(2) : l4.slice(2), n2.l || (n2.l = {}), n2.l[l4 + o3] = u3, u3 ? i3 || n2.addEventListener(l4, o3 ? T : I, o3) : n2.removeEventListener(l4, o3 ? T : I, o3);
      else if (l4 !== "dangerouslySetInnerHTML") {
        if (t4)
          l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (l4 !== "href" && l4 !== "list" && l4 !== "form" && l4 !== "tabIndex" && l4 !== "download" && l4 in n2)
          try {
            n2[l4] = u3 == null ? "" : u3;
            break n;
          } catch (n3) {
          }
        typeof u3 == "function" || (u3 != null && (u3 !== false || l4[0] === "a" && l4[1] === "r") ? n2.setAttribute(l4, u3) : n2.removeAttribute(l4));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t4, o3, r3, f3, e3, c3) {
    var s2, h2, v5, y4, p3, k5, b3, m3, g3, x5, A3, P3 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i3.__h != null && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (s2 = l.__b) && s2(u3);
    try {
      n:
        if (typeof P3 == "function") {
          if (m3 = u3.props, g3 = (s2 = P3.contextType) && t4[s2.__c], x5 = s2 ? g3 ? g3.props.value : s2.__ : t4, i3.__c ? b3 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in P3 && P3.prototype.render ? u3.__c = h2 = new P3(m3, x5) : (u3.__c = h2 = new _(m3, x5), h2.constructor = P3, h2.render = O), g3 && g3.sub(h2), h2.props = m3, h2.state || (h2.state = {}), h2.context = x5, h2.__n = t4, v5 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P3.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P3.getDerivedStateFromProps(m3, h2.__s))), y4 = h2.props, p3 = h2.state, v5)
            P3.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
          else {
            if (P3.getDerivedStateFromProps == null && m3 !== y4 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m3, x5), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m3, h2.__s, x5) === false || u3.__v === i3.__v) {
              h2.props = m3, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h2.__h.length && f3.push(h2);
              break n;
            }
            h2.componentWillUpdate != null && h2.componentWillUpdate(m3, h2.__s, x5), h2.componentDidUpdate != null && h2.__h.push(function() {
              h2.componentDidUpdate(y4, p3, k5);
            });
          }
          h2.context = x5, h2.props = m3, h2.state = h2.__s, (s2 = l.__r) && s2(u3), h2.__d = false, h2.__v = u3, h2.__P = n2, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t4 = a(a({}, t4), h2.getChildContext())), v5 || h2.getSnapshotBeforeUpdate == null || (k5 = h2.getSnapshotBeforeUpdate(y4, p3)), A3 = s2 != null && s2.type === d && s2.key == null ? s2.props.children : s2, w(n2, Array.isArray(A3) ? A3 : [A3], u3, i3, t4, o3, r3, f3, e3, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          r3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t4, o3, r3, f3, c3);
      (s2 = l.diffed) && s2(u3);
    } catch (n3) {
      u3.__v = null, (c3 || r3 != null) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l4, u3, i3, t4, o3, r3, f3, c3) {
    var s2, a3, v5, y4 = i3.props, p3 = u3.props, d2 = u3.type, _3 = 0;
    if (d2 === "svg" && (o3 = true), r3 != null) {
      for (; _3 < r3.length; _3++)
        if ((s2 = r3[_3]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : s2.nodeType === 3)) {
          l4 = s2, r3[_3] = null;
          break;
        }
    }
    if (l4 == null) {
      if (d2 === null)
        return document.createTextNode(p3);
      l4 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p3.is && p3), r3 = null, c3 = false;
    }
    if (d2 === null)
      y4 === p3 || c3 && l4.data === p3 || (l4.data = p3);
    else {
      if (r3 = r3 && n.call(l4.childNodes), a3 = (y4 = i3.props || e).dangerouslySetInnerHTML, v5 = p3.dangerouslySetInnerHTML, !c3) {
        if (r3 != null)
          for (y4 = {}, _3 = 0; _3 < l4.attributes.length; _3++)
            y4[l4.attributes[_3].name] = l4.attributes[_3].value;
        (v5 || a3) && (v5 && (a3 && v5.__html == a3.__html || v5.__html === l4.innerHTML) || (l4.innerHTML = v5 && v5.__html || ""));
      }
      if (C(l4, p3, y4, o3, c3), v5)
        u3.__k = [];
      else if (_3 = u3.props.children, w(l4, Array.isArray(_3) ? _3 : [_3], u3, i3, t4, o3 && d2 !== "foreignObject", r3, f3, r3 ? r3[0] : i3.__k && k(i3, 0), c3), r3 != null)
        for (_3 = r3.length; _3--; )
          r3[_3] != null && h(r3[_3]);
      c3 || ("value" in p3 && (_3 = p3.value) !== void 0 && (_3 !== l4.value || d2 === "progress" && !_3 || d2 === "option" && _3 !== y4.value) && H(l4, "value", _3, y4.value, false), "checked" in p3 && (_3 = p3.checked) !== void 0 && _3 !== l4.checked && H(l4, "checked", _3, y4.checked, false));
    }
    return l4;
  }
  function M(n2, u3, i3) {
    try {
      typeof n2 == "function" ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t4, o3;
    if (l.unmount && l.unmount(n2), (t4 = n2.ref) && (t4.current && t4.current !== n2.__e || M(t4, null, u3)), (t4 = n2.__c) != null) {
      if (t4.componentWillUnmount)
        try {
          t4.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t4.base = t4.__P = null;
    }
    if (t4 = n2.__k)
      for (o3 = 0; o3 < t4.length; o3++)
        t4[o3] && N(t4[o3], u3, typeof n2.type != "function");
    i3 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l4, u3) {
    return this.constructor(n2, u3);
  }
  function S(u3, i3, t4) {
    var o3, r3, f3;
    l.__ && l.__(u3, i3), r3 = (o3 = typeof t4 == "function") ? null : t4 && t4.__k || i3.__k, f3 = [], j(i3, u3 = (!o3 && t4 || i3).__k = v(d, null, [u3]), r3 || e, e, i3.ownerSVGElement !== void 0, !o3 && t4 ? [t4] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !o3 && t4 ? t4 : r3 ? r3.__e : i3.firstChild, o3), z(f3, u3);
  }
  var n, l, u, i, t, o, r, f, e, c, s;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      e = {};
      c = [];
      s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = c.slice, l = { __e: function(n2, l4, u3, i3) {
        for (var t4, o3, r3; l4 = l4.__; )
          if ((t4 = l4.__c) && !t4.__)
            try {
              if ((o3 = t4.constructor) && o3.getDerivedStateFromError != null && (t4.setState(o3.getDerivedStateFromError(n2)), r3 = t4.__d), t4.componentDidCatch != null && (t4.componentDidCatch(n2, i3 || {}), r3 = t4.__d), r3)
                return t4.__E = t4;
            } catch (l5) {
              n2 = l5;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return n2 != null && n2.constructor === void 0;
      }, _.prototype.setState = function(n2, l4) {
        var u3;
        u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u3), this.props)), n2 && a(u3, n2), n2 != null && this.__v && (l4 && this.__h.push(l4), m(this));
      }, _.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
      }, _.prototype.render = d, t = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function l2(t4, r3) {
    l.__h && l.__h(u2, t4, o2 || r3), o2 = 0;
    var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
    return t4 >= i3.__.length && i3.__.push({}), i3.__[t4];
  }
  function m2(n2) {
    return o2 = 1, p(w2, n2);
  }
  function p(n2, r3, o3) {
    var i3 = l2(t2++, 2);
    return i3.t = n2, i3.__c || (i3.__ = [o3 ? o3(r3) : w2(void 0, r3), function(n3) {
      var t4 = i3.t(i3.__[0], n3);
      i3.__[0] !== t4 && (i3.__ = [t4, i3.__[1]], i3.__c.setState({}));
    }], i3.__c = u2), i3.__;
  }
  function y2(r3, o3) {
    var i3 = l2(t2++, 3);
    !l.__s && k2(i3.__H, o3) && (i3.__ = r3, i3.__H = o3, u2.__H.__h.push(i3));
  }
  function _2(n2, u3) {
    var r3 = l2(t2++, 7);
    return k2(r3.__H, u3) && (r3.__ = n2(), r3.__H = u3, r3.__h = n2), r3.__;
  }
  function A(n2, t4) {
    return o2 = 8, _2(function() {
      return n2;
    }, t4);
  }
  function x2() {
    for (var t4; t4 = i2.shift(); )
      if (t4.__P)
        try {
          t4.__H.__h.forEach(g2), t4.__H.__h.forEach(j2), t4.__H.__h = [];
        } catch (u3) {
          t4.__H.__h = [], l.__e(u3, t4.__v);
        }
  }
  function g2(n2) {
    var t4 = u2, r3 = n2.__c;
    typeof r3 == "function" && (n2.__c = void 0, r3()), u2 = t4;
  }
  function j2(n2) {
    var t4 = u2;
    n2.__c = n2.__(), u2 = t4;
  }
  function k2(n2, t4) {
    return !n2 || n2.length !== t4.length || t4.some(function(t5, u3) {
      return t5 !== n2[u3];
    });
  }
  function w2(n2, t4) {
    return typeof t4 == "function" ? t4(n2) : t4;
  }
  var t2, u2, r2, o2, i2, c2, f2, e2, a2, v2, b2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      i2 = [];
      c2 = l.__b;
      f2 = l.__r;
      e2 = l.diffed;
      a2 = l.__c;
      v2 = l.unmount;
      l.__b = function(n2) {
        u2 = null, c2 && c2(n2);
      }, l.__r = function(n2) {
        f2 && f2(n2), t2 = 0;
        var r3 = (u2 = n2.__c).__H;
        r3 && (r3.__h.forEach(g2), r3.__h.forEach(j2), r3.__h = []);
      }, l.diffed = function(t4) {
        e2 && e2(t4);
        var o3 = t4.__c;
        o3 && o3.__H && o3.__H.__h.length && (i2.push(o3) !== 1 && r2 === l.requestAnimationFrame || ((r2 = l.requestAnimationFrame) || function(n2) {
          var t5, u3 = function() {
            clearTimeout(r3), b2 && cancelAnimationFrame(t5), setTimeout(n2);
          }, r3 = setTimeout(u3, 100);
          b2 && (t5 = requestAnimationFrame(u3));
        })(x2)), u2 = null;
      }, l.__c = function(t4, u3) {
        u3.some(function(t5) {
          try {
            t5.__h.forEach(g2), t5.__h = t5.__h.filter(function(n2) {
              return !n2.__ || j2(n2);
            });
          } catch (r3) {
            u3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), u3 = [], l.__e(r3, t5.__v);
          }
        }), a2 && a2(t4, u3);
      }, l.unmount = function(t4) {
        v2 && v2(t4);
        var u3, r3 = t4.__c;
        r3 && r3.__H && (r3.__H.__.forEach(function(n2) {
          try {
            g2(n2);
          } catch (n3) {
            u3 = n3;
          }
        }), u3 && l.__e(u3, r3.__v));
      };
      b2 = typeof requestAnimationFrame == "function";
    }
  });

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/256ca2c6-cbd0-4b71-a613-371255efb9e6/loading-indicator.js
  var loading_indicator_default;
  var init_loading_indicator = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/256ca2c6-cbd0-4b71-a613-371255efb9e6/loading-indicator.js"() {
      if (document.getElementById("060089a544") === null) {
        const element = document.createElement("style");
        element.id = "060089a544";
        element.textContent = `._loadingIndicator_12ibq_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_12ibq_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_12ibq_1 0.5s linear infinite;
  fill: currentColor;
}
._accent_12ibq_17 {
  fill: var(--color-accent);
}
._black-30_12ibq_20 {
  fill: var(--color-black-30);
}
._black-80_12ibq_23 {
  fill: var(--color-black-80);
}
._blue_12ibq_26 {
  fill: var(--color-blue);
}
._white_12ibq_29 {
  fill: var(--color-white);
}
._white-20_12ibq_32 {
  fill: var(--color-white-20-translucent);
}
._white-40_12ibq_35 {
  fill: var(--color-white-40-translucent);
}

@keyframes _rotating_12ibq_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixpREFBd0M7RUFDeEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2xvYWRpbmctaW5kaWNhdG9yL2xvYWRpbmctaW5kaWNhdG9yLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBhbmltYXRpb246IHJvdGF0aW5nIDAuNXMgbGluZWFyIGluZmluaXRlO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4uYWNjZW50IHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYWNjZW50KTtcbn1cbi5ibGFjay0zMCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrLTMwKTtcbn1cbi5ibGFjay04MCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrLTgwKTtcbn1cbi5ibHVlIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYmx1ZSk7XG59XG4ud2hpdGUge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG4ud2hpdGUtMjAge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZS0yMC10cmFuc2x1Y2VudCk7XG59XG4ud2hpdGUtNDAge1xuICBmaWxsOiB2YXIoLS1jb2xvci13aGl0ZS00MC10cmFuc2x1Y2VudCk7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */`;
        document.head.append(element);
      }
      loading_indicator_default = { "loadingIndicator": "_loadingIndicator_12ibq_1", "svg": "_svg_12ibq_8", "rotating": "_rotating_12ibq_1", "accent": "_accent_12ibq_17", "black-30": "_black-30_12ibq_20", "black-80": "_black-80_12ibq_23", "blue": "_blue_12ibq_26", "white": "_white_12ibq_29", "white-20": "_white-20_12ibq_32", "white-40": "_white-40_12ibq_35" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  function LoadingIndicator(_a2) {
    var _b = _a2, { color } = _b, rest = __objRest(_b, ["color"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: loading_indicator_default.loadingIndicator }), v("svg", { class: createClassName([
      loading_indicator_default.svg,
      typeof color === "undefined" ? null : loading_indicator_default[color]
    ]) }, v("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })));
  }
  var init_loading_indicator2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_preact_module();
      init_create_class_name();
      init_loading_indicator();
    }
  });

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/8d2b56a7-bc48-4d45-b4cb-0de2851f29cc/button.js
  var button_default;
  var init_button = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/8d2b56a7-bc48-4d45-b4cb-0de2851f29cc/button.js"() {
      if (document.getElementById("cad4ebc620") === null) {
        const element = document.createElement("style");
        element.id = "cad4ebc620";
        element.textContent = `._button_1j1gr_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}
._button_1j1gr_1 button {
  display: inline-block;
  height: 32px;
  border-radius: var(--border-radius-6);
  color: currentColor;
}

._disabled_1j1gr_13 {
  opacity: var(--opacity-30);
}
._disabled_1j1gr_13 button {
  cursor: not-allowed;
}

._primary_1j1gr_20 {
  color: var(
    --color-white
  ); /* Set the color of the \`button\` element and \`LoadingIndicator\` */
}
._primary_1j1gr_20 button {
  padding: 0 14px;
  border: 2px solid transparent;
  background-color: var(--color-accent);
  line-height: 28px;
}
._primary_1j1gr_20:not(._disabled_1j1gr_13) button:focus {
  border-color: var(--color-black-30-translucent);
}
._primary_1j1gr_20._destructive_1j1gr_34 {
  color: var(--color-white);
}
._primary_1j1gr_20._destructive_1j1gr_34 button {
  background-color: var(--color-red);
}
._primary_1j1gr_20._disabled_1j1gr_13 button {
  background-color: var(--color-black);
}

._secondary_1j1gr_44 {
  color: var(--color-black-80);
}
._secondary_1j1gr_44 button {
  padding: 0 15px;
  border: 1px solid var(--color-black-80);
  background-color: transparent;
  line-height: 30px;
}
._secondary_1j1gr_44:not(._disabled_1j1gr_13) button:focus {
  padding: 0 14px;
  border-width: 2px;
  border-color: var(--color-accent);
  line-height: 28px;
}
._secondary_1j1gr_44._destructive_1j1gr_34 {
  color: var(--color-red);
}
._secondary_1j1gr_44._destructive_1j1gr_34 button {
  border-color: var(--color-red);
}
._secondary_1j1gr_44._destructive_1j1gr_34:not(._disabled_1j1gr_13) button:focus {
  border-color: var(--color-red);
}

._fullWidth_1j1gr_69 {
  display: block;
}
._fullWidth_1j1gr_69 button {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._loading_1j1gr_80 button {
  color: rgba(0, 0, 0, 0); /* Hide the button text */
}
._loadingIndicator_1j1gr_83 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOztHQUVDLEVBQUUsaUVBQWlFO0FBQ3RFO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLHFDQUFxQztFQUNyQyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHVDQUF1QztFQUN2Qyw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCLEVBQUUseUJBQXlCO0FBQ3BEO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5idXR0b24gYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtNik7XG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XG59XG5cbi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzApO1xufVxuLmRpc2FibGVkIGJ1dHRvbiB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5wcmltYXJ5IHtcbiAgY29sb3I6IHZhcihcbiAgICAtLWNvbG9yLXdoaXRlXG4gICk7IC8qIFNldCB0aGUgY29sb3Igb2YgdGhlIGBidXR0b25gIGVsZW1lbnQgYW5kIGBMb2FkaW5nSW5kaWNhdG9yYCAqL1xufVxuLnByaW1hcnkgYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG4ucHJpbWFyeTpub3QoLmRpc2FibGVkKSBidXR0b246Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrLTMwLXRyYW5zbHVjZW50KTtcbn1cbi5wcmltYXJ5LmRlc3RydWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cbi5wcmltYXJ5LmRlc3RydWN0aXZlIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XG59XG4ucHJpbWFyeS5kaXNhYmxlZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XG59XG5cbi5zZWNvbmRhcnkge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2stODApO1xufVxuLnNlY29uZGFyeSBidXR0b24ge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJsYWNrLTgwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLnNlY29uZGFyeTpub3QoLmRpc2FibGVkKSBidXR0b246Zm9jdXMge1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLnNlY29uZGFyeS5kZXN0cnVjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xufVxuLnNlY29uZGFyeS5kZXN0cnVjdGl2ZSBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XG59XG4uc2Vjb25kYXJ5LmRlc3RydWN0aXZlOm5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcbn1cblxuLmZ1bGxXaWR0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZ1bGxXaWR0aCBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubG9hZGluZyBidXR0b24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTsgLyogSGlkZSB0aGUgYnV0dG9uIHRleHQgKi9cbn1cbi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      button_default = { "button": "_button_1j1gr_1", "disabled": "_disabled_1j1gr_13", "primary": "_primary_1j1gr_20", "destructive": "_destructive_1j1gr_34", "secondary": "_secondary_1j1gr_44", "fullWidth": "_fullWidth_1j1gr_69", "loading": "_loading_1j1gr_80", "loadingIndicator": "_loadingIndicator_1j1gr_83" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  function Button(_a2) {
    var _b = _a2, { children, destructive = false, disabled = false, fullWidth = false, loading = false, onClick, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "destructive", "disabled", "fullWidth", "loading", "onClick", "propagateEscapeKeyDown", "secondary"]);
    const handleKeyDown = A(function(event) {
      if (event.key === "Escape") {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation();
        }
        event.currentTarget.blur();
        return;
      }
      if (event.key === "Enter") {
        event.stopPropagation();
      }
    }, [propagateEscapeKeyDown]);
    return v("div", { class: createClassName([
      button_default.button,
      secondary === true ? button_default.secondary : button_default.primary,
      destructive === true ? button_default.destructive : null,
      fullWidth === true ? button_default.fullWidth : null,
      disabled === true ? button_default.disabled : null,
      loading === true ? button_default.loading : null
    ]) }, loading === true ? v("div", { class: button_default.loadingIndicator }, v(LoadingIndicator, null)) : null, v("button", __spreadProps(__spreadValues({}, rest), { disabled: disabled === true, onClick: disabled === true || loading === true ? void 0 : onClick, onKeyDown: disabled === true || loading === true ? void 0 : handleKeyDown, tabIndex: disabled === true ? -1 : 0 }), children));
  }
  var init_button2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_loading_indicator2();
      init_button();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/file-upload/private/file-comparator.js
  function fileComparator(a3, b3) {
    const aName = a3.name.toLowerCase();
    const bName = b3.name.toLowerCase();
    if (aName !== bName) {
      return aName.localeCompare(bName);
    }
    return a3.lastModified - b3.lastModified;
  }
  var init_file_comparator = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/file-upload/private/file-comparator.js"() {
    }
  });

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/e9be261a-e7df-4b1f-9ada-56a7107248f4/file-upload-dropzone.js
  var file_upload_dropzone_default;
  var init_file_upload_dropzone = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/e9be261a-e7df-4b1f-9ada-56a7107248f4/file-upload-dropzone.js"() {
      if (document.getElementById("2221292a2e") === null) {
        const element = document.createElement("style");
        element.id = "2221292a2e";
        element.textContent = `._fileUploadDropzone_6qiut_1 {
  position: relative;
  z-index: var(--z-index-1);
  width: 100%;
  padding: 32px 0;
}

._isDropActive_6qiut_8 {
  background-color: var(--color-selection-b);
}

._input_6qiut_12,
._dashedLine_6qiut_13 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

._input_6qiut_12 {
  z-index: var(
    --z-index-1
  ); /* stack \`.input\` over all other elements within \`.fileUploadDropzone\` */
  width: 100%;
  opacity: 0;
}

._dashedLine_6qiut_13 {
  border: 1px dashed var(--color-black-30);
}
._input_6qiut_12:active ~ ._dashedLine_6qiut_13,
._input_6qiut_12:focus ~ ._dashedLine_6qiut_13,
._isDropActive_6qiut_8 ._dashedLine_6qiut_13 {
  border-color: var(--color-accent);
}

._children_6qiut_38 {
  text-align: center;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC1kcm9wem9uZS9maWxlLXVwbG9hZC1kcm9wem9uZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRTs7R0FFQyxFQUFFLHdFQUF3RTtFQUMzRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBQ0E7OztFQUdFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQtZHJvcHpvbmUvZmlsZS11cGxvYWQtZHJvcHpvbmUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGVVcGxvYWREcm9wem9uZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0xKTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMycHggMDtcbn1cblxuLmlzRHJvcEFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlbGVjdGlvbi1iKTtcbn1cblxuLmlucHV0LFxuLmRhc2hlZExpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cblxuLmlucHV0IHtcbiAgei1pbmRleDogdmFyKFxuICAgIC0tei1pbmRleC0xXG4gICk7IC8qIHN0YWNrIGAuaW5wdXRgIG92ZXIgYWxsIG90aGVyIGVsZW1lbnRzIHdpdGhpbiBgLmZpbGVVcGxvYWREcm9wem9uZWAgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5kYXNoZWRMaW5lIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWNvbG9yLWJsYWNrLTMwKTtcbn1cbi5pbnB1dDphY3RpdmUgfiAuZGFzaGVkTGluZSxcbi5pbnB1dDpmb2N1cyB+IC5kYXNoZWRMaW5lLFxuLmlzRHJvcEFjdGl2ZSAuZGFzaGVkTGluZSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbn1cblxuLmNoaWxkcmVuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */`;
        document.head.append(element);
      }
      file_upload_dropzone_default = { "fileUploadDropzone": "_fileUploadDropzone_6qiut_1", "isDropActive": "_isDropActive_6qiut_8", "input": "_input_6qiut_12", "dashedLine": "_dashedLine_6qiut_13", "children": "_children_6qiut_38" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/file-upload/file-upload-dropzone/file-upload-dropzone.js
  function FileUploadDropzone(_a2) {
    var _b = _a2, { acceptedFileTypes, children, multiple = false, onSelectedFiles, propagateEscapeKeyDown = true } = _b, rest = __objRest(_b, ["acceptedFileTypes", "children", "multiple", "onSelectedFiles", "propagateEscapeKeyDown"]);
    const [isDropActive, setIsDropActive] = m2(false);
    const filterFiles = A(function(files) {
      const result = Array.prototype.slice.call(files).sort(fileComparator);
      if (typeof acceptedFileTypes === "undefined") {
        return result;
      }
      return result.filter(function(file) {
        return acceptedFileTypes.indexOf(file.type) !== -1;
      });
    }, [acceptedFileTypes]);
    const handleBlur = A(function() {
      setIsDropActive(false);
    }, []);
    const handleChange = A(function(event) {
      if (typeof onSelectedFiles === "undefined") {
        return;
      }
      const files = event.currentTarget.files;
      onSelectedFiles(filterFiles(files));
    }, [filterFiles, onSelectedFiles]);
    const handleDragEnter = A(function(event) {
      event.preventDefault();
    }, []);
    const handleDragOver = A(function(event) {
      event.preventDefault();
      setIsDropActive(true);
    }, []);
    const handleDragEnd = A(function(event) {
      event.preventDefault();
      setIsDropActive(false);
    }, []);
    const handleDrop = A(function(event) {
      if (typeof onSelectedFiles === "undefined") {
        return;
      }
      event.preventDefault();
      if (event.dataTransfer === null) {
        throw new Error("`event.dataTransfer` is `null`");
      }
      const files = filterFiles(event.dataTransfer.files);
      onSelectedFiles(files);
      setIsDropActive(false);
    }, [filterFiles, onSelectedFiles]);
    const handleKeyDown = A(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return v("div", { class: createClassName([
      file_upload_dropzone_default.fileUploadDropzone,
      isDropActive === true ? file_upload_dropzone_default.isDropActive : null
    ]) }, v("input", __spreadProps(__spreadValues({}, rest), { accept: typeof acceptedFileTypes === "undefined" ? void 0 : acceptedFileTypes.join(","), class: file_upload_dropzone_default.input, multiple, onBlur: handleBlur, onChange: handleChange, onDragEnd: handleDragEnd, onDragEnter: handleDragEnter, onDragOver: handleDragOver, onDrop: handleDrop, onKeyDown: handleKeyDown, tabIndex: 0, title: "", type: "file" })), v("div", { class: file_upload_dropzone_default.dashedLine }), v("div", { class: file_upload_dropzone_default.children }, children));
  }
  var init_file_upload_dropzone2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/file-upload/file-upload-dropzone/file-upload-dropzone.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_file_comparator();
      init_file_upload_dropzone();
    }
  });

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/af6cf802-ed31-4caa-913a-7084e67ba1d1/container.js
  var container_default;
  var init_container = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/af6cf802-ed31-4caa-913a-7084e67ba1d1/container.js"() {
      if (document.getElementById("2130edf028") === null) {
        const element = document.createElement("style");
        element.id = "2130edf028";
        element.textContent = `._extraSmall_kslv9_1 {
  padding: 0 var(--space-extra-small);
}

._small_kslv9_5 {
  padding: 0 var(--space-small);
}

._medium_kslv9_9 {
  padding: 0 var(--space-medium);
}

._large_kslv9_13 {
  padding: 0 var(--space-large);
}

._extraLarge_kslv9_17 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sYXlvdXQvY29udGFpbmVyL2NvbnRhaW5lci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2xheW91dC9jb250YWluZXIvY29udGFpbmVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYVNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG5cbi5zbWFsbCB7XG4gIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuXG4ubWVkaXVtIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1tZWRpdW0pO1xufVxuXG4ubGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cblxuLmV4dHJhTGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      container_default = { "extraSmall": "_extraSmall_kslv9_1", "small": "_small_kslv9_5", "medium": "_medium_kslv9_9", "large": "_large_kslv9_13", "extraLarge": "_extraLarge_kslv9_17" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/layout/container/container.js
  function Container(_a2) {
    var _b = _a2, { space = "small" } = _b, rest = __objRest(_b, ["space"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: container_default[space] }));
  }
  var init_container2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/layout/container/container.js"() {
      init_preact_module();
      init_container();
    }
  });

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/898d849e-042f-4986-8654-eca305b3a01e/vertical-space.js
  var vertical_space_default;
  var init_vertical_space = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/898d849e-042f-4986-8654-eca305b3a01e/vertical-space.js"() {
      if (document.getElementById("4a51e5b19a") === null) {
        const element = document.createElement("style");
        element.id = "4a51e5b19a";
        element.textContent = `._extraSmall_1f9m3_1 {
  height: var(--space-extra-small);
}

._small_1f9m3_5 {
  height: var(--space-small);
}

._medium_1f9m3_9 {
  height: var(--space-medium);
}

._large_1f9m3_13 {
  height: var(--space-large);
}

._extraLarge_1f9m3_17 {
  height: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sYXlvdXQvdmVydGljYWwtc3BhY2UvdmVydGljYWwtc3BhY2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sYXlvdXQvdmVydGljYWwtc3BhY2UvdmVydGljYWwtc3BhY2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cblxuLnNtYWxsIHtcbiAgaGVpZ2h0OiB2YXIoLS1zcGFjZS1zbWFsbCk7XG59XG5cbi5tZWRpdW0ge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG5cbi5sYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuXG4uZXh0cmFMYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtZXh0cmEtbGFyZ2UpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      vertical_space_default = { "extraSmall": "_extraSmall_1f9m3_1", "small": "_small_1f9m3_5", "medium": "_medium_1f9m3_9", "large": "_large_1f9m3_13", "extraLarge": "_extraLarge_1f9m3_17" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/layout/vertical-space/vertical-space.js
  function VerticalSpace(_a2) {
    var _b = _a2, { space = "small" } = _b, rest = __objRest(_b, ["space"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: vertical_space_default[space] }));
  }
  var init_vertical_space2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/layout/vertical-space/vertical-space.js"() {
      init_preact_module();
      init_vertical_space();
    }
  });

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/3e7c1448-0f00-4bb5-8d69-9427dcf20900/text.js
  var text_default;
  var init_text = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/3e7c1448-0f00-4bb5-8d69-9427dcf20900/text.js"() {
      if (document.getElementById("2d89b2a498") === null) {
        const element = document.createElement("style");
        element.id = "2d89b2a498";
        element.textContent = `._text_wg7jj_1 {
  padding-top: 1px;
  color: var(--color-black-80);
  pointer-events: none;
  transform: translateY(4px);
}
._text_wg7jj_1:before {
  display: block;
  height: 0;
  margin-top: -9px;
  content: '';
  pointer-events: none;
}
._text_wg7jj_1 strong {
  font-weight: var(--font-weight-bold);
}
._text_wg7jj_1 a {
  color: var(--color-accent);
  pointer-events: all;
  text-decoration: none;
}
._text_wg7jj_1 a:hover {
  text-decoration: underline;
}
._text_wg7jj_1 a:focus {
  background-color: var(--color-blue-30-translucent);
  border-radius: var(--border-radius-2);
  outline: 0;
}
._text_wg7jj_1 code {
  font-family: var(--font-family-code);
}

._bold_wg7jj_34 {
  font-weight: var(--font-weight-bold);
}

._muted_wg7jj_38 {
  color: var(--color-black-30);
}

._numeric_wg7jj_42 {
  font-variant-numeric: tabular-nums;
}

._left_wg7jj_46 {
  text-align: left;
}

._center_wg7jj_50 {
  text-align: center;
}

._right_wg7jj_54 {
  text-align: right;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0L3RleHQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGtEQUFrRDtFQUNsRCxxQ0FBcUM7RUFDckMsVUFBVTtBQUNaO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHQvdGV4dC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjay04MCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi50ZXh0OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi50ZXh0IHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbn1cbi50ZXh0IGEge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnRleHQgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnRleHQgYTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUtMzAtdHJhbnNsdWNlbnQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xuICBvdXRsaW5lOiAwO1xufVxuLnRleHQgY29kZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1jb2RlKTtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG59XG5cbi5tdXRlZCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjay0zMCk7XG59XG5cbi5udW1lcmljIHtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbn1cblxuLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      text_default = { "text": "_text_wg7jj_1", "bold": "_bold_wg7jj_34", "muted": "_muted_wg7jj_38", "numeric": "_numeric_wg7jj_42", "left": "_left_wg7jj_46", "center": "_center_wg7jj_50", "right": "_right_wg7jj_54" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/text/text.js
  function Text(_a2) {
    var _b = _a2, { align = "left", bold = false, children, muted = false, numeric = false } = _b, rest = __objRest(_b, ["align", "bold", "children", "muted", "numeric"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
      text_default.text,
      text_default[align],
      bold === true ? text_default.bold : null,
      muted === true ? text_default.muted : null,
      numeric === true ? text_default.numeric : null
    ]) }), children);
  }
  var init_text2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/text/text.js"() {
      init_preact_module();
      init_create_class_name();
      init_text();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function invokeEventHandler(name4, args) {
    for (const id2 in eventHandlers) {
      if (eventHandlers[id2].name === name4) {
        eventHandlers[id2].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      emit = typeof window === "undefined" ? function(name4, ...args) {
        figma.ui.postMessage([name4, ...args]);
      } : function(name4, ...args) {
        window.parent.postMessage({
          pluginMessage: [name4, ...args]
        }, "*");
      };
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name4, ...args]) {
          invokeEventHandler(name4, args);
        };
      } else {
        window.onmessage = function(event) {
          const [name4, ...args] = event.data.pluginMessage;
          invokeEventHandler(name4, args);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
    }
  });

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/1dee1e5f-78c7-44fa-ab6e-6c325b99fb9a/base.js
  var init_base = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/1dee1e5f-78c7-44fa-ab6e-6c325b99fb9a/base.js"() {
      if (document.getElementById("9323e01daf") === null) {
        const element = document.createElement("style");
        element.id = "9323e01daf";
        element.textContent = `@import url('https://fonts.googleapis.com/css?family=Inter:400,600&display=swap');

:root {
  /* border-radius */
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  /* box-shadow */
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  /* color */
  --color-black: #000000;
  --color-black-3-translucent: rgba(0, 0, 0, 0.03);
  --color-black-6-translucent: rgba(0, 0, 0, 0.06);
  --color-black-30: #b3b3b3;
  --color-black-30-translucent: rgba(0, 0, 0, 0.3);
  --color-black-80: #333333;
  --color-black-80-translucent: rgba(0, 0, 0, 0.8);
  --color-blue: #18a0fb;
  --color-blue-30-translucent: rgba(24, 160, 251, 0.3);
  --color-figjam-purple: #974bff;
  --color-figjam-purple-20-translucent: rgba(151, 71, 255, 0.2);
  --color-green: #1bc47d;
  --color-hud: #222222;
  --color-purple: #7b61ff;
  --color-red: #f24822;
  --color-selection-a: #daebf7;
  --color-selection-b: #edf5fa;
  --color-silver: #e5e5e5;
  --color-white: #ffffff;
  --color-white-20-translucent: rgba(255, 255, 255, 0.2);
  --color-white-40-translucent: rgba(255, 255, 255, 0.4);
  --color-yellow: #ffeb00;
  /* font */
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  /* opacity */
  --opacity-30: 0.3;
  /* space */
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  /* z-index */
  --z-index-1: 1;
  --z-index-2: 2;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

.theme-figjam {
  --color-accent: var(--color-figjam-purple);
}
.theme-figjam ::selection {
  background-color: var(--color-figjam-purple-20-translucent);
}

.theme-figma {
  --color-accent: var(--color-blue);
}
.theme-figma ::selection {
  background-color: var(--color-blue-30-translucent);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      S(v(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_button2();
      init_file_upload_dropzone2();
      init_container2();
      init_vertical_space2();
      init_text2();
      init_render();
    }
  });

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/a0e567ec-873e-43f9-ad19-da45012c631c/styles.js
  var styles_default;
  var init_styles = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/a0e567ec-873e-43f9-ad19-da45012c631c/styles.js"() {
      if (document.getElementById("b0ed145564") === null) {
        const element = document.createElement("style");
        element.id = "b0ed145564";
        element.textContent = `._container_w9gis_1 {
  height: 164px;
  overflow: auto;
}

._dropzone_w9gis_6 {
  min-height: 100%;
  font-size: var(--font-size-12);
  font-family: var(--font-family-code);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0QyIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDE2NHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmRyb3B6b25lIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMTIpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktY29kZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      styles_default = { "container": "_container_w9gis_1", "dropzone": "_dropzone_w9gis_6" };
    }
  });

  // node_modules/uuid/dist/esm-browser/rng.js
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }
  var getRandomValues, rnds8;
  var init_rng = __esm({
    "node_modules/uuid/dist/esm-browser/rng.js"() {
      rnds8 = new Uint8Array(16);
    }
  });

  // node_modules/uuid/dist/esm-browser/regex.js
  var regex_default;
  var init_regex = __esm({
    "node_modules/uuid/dist/esm-browser/regex.js"() {
      regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    }
  });

  // node_modules/uuid/dist/esm-browser/validate.js
  function validate(uuid) {
    return typeof uuid === "string" && regex_default.test(uuid);
  }
  var validate_default;
  var init_validate = __esm({
    "node_modules/uuid/dist/esm-browser/validate.js"() {
      init_regex();
      validate_default = validate;
    }
  });

  // node_modules/uuid/dist/esm-browser/stringify.js
  function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
    if (!validate_default(uuid)) {
      throw TypeError("Stringified UUID is invalid");
    }
    return uuid;
  }
  var byteToHex, i3, stringify_default;
  var init_stringify = __esm({
    "node_modules/uuid/dist/esm-browser/stringify.js"() {
      init_validate();
      byteToHex = [];
      for (i3 = 0; i3 < 256; ++i3) {
        byteToHex.push((i3 + 256).toString(16).substr(1));
      }
      stringify_default = stringify;
    }
  });

  // node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (var i3 = 0; i3 < 16; ++i3) {
        buf[offset + i3] = rnds[i3];
      }
      return buf;
    }
    return stringify_default(rnds);
  }
  var v4_default;
  var init_v4 = __esm({
    "node_modules/uuid/dist/esm-browser/v4.js"() {
      init_rng();
      init_stringify();
      v4_default = v4;
    }
  });

  // node_modules/uuid/dist/esm-browser/index.js
  var init_esm_browser = __esm({
    "node_modules/uuid/dist/esm-browser/index.js"() {
      init_v4();
    }
  });

  // node_modules/@firebase/util/dist/index.esm2017.js
  function getUA() {
    if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
      return navigator["userAgent"];
    } else {
      return "";
    }
  }
  function isMobileCordova() {
    return typeof window !== "undefined" && !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
  }
  function isBrowserExtension() {
    const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
    return typeof runtime === "object" && runtime.id !== void 0;
  }
  function isReactNative() {
    return typeof navigator === "object" && navigator["product"] === "ReactNative";
  }
  function isElectron() {
    return getUA().indexOf("Electron/") >= 0;
  }
  function isIE() {
    const ua2 = getUA();
    return ua2.indexOf("MSIE ") >= 0 || ua2.indexOf("Trident/") >= 0;
  }
  function isUWP() {
    return getUA().indexOf("MSAppHost/") >= 0;
  }
  function isIndexedDBAvailable() {
    return typeof indexedDB === "object";
  }
  function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
      try {
        let preExist = true;
        const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
        const request = self.indexedDB.open(DB_CHECK_NAME);
        request.onsuccess = () => {
          request.result.close();
          if (!preExist) {
            self.indexedDB.deleteDatabase(DB_CHECK_NAME);
          }
          resolve(true);
        };
        request.onupgradeneeded = () => {
          preExist = false;
        };
        request.onerror = () => {
          var _a2;
          reject(((_a2 = request.error) === null || _a2 === void 0 ? void 0 : _a2.message) || "");
        };
      } catch (error) {
        reject(error);
      }
    });
  }
  function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_3, key) => {
      const value = data[key];
      return value != null ? String(value) : `<${key}?>`;
    });
  }
  function deepEqual(a3, b3) {
    if (a3 === b3) {
      return true;
    }
    const aKeys = Object.keys(a3);
    const bKeys = Object.keys(b3);
    for (const k5 of aKeys) {
      if (!bKeys.includes(k5)) {
        return false;
      }
      const aProp = a3[k5];
      const bProp = b3[k5];
      if (isObject(aProp) && isObject(bProp)) {
        if (!deepEqual(aProp, bProp)) {
          return false;
        }
      } else if (aProp !== bProp) {
        return false;
      }
    }
    for (const k5 of bKeys) {
      if (!aKeys.includes(k5)) {
        return false;
      }
    }
    return true;
  }
  function isObject(thing) {
    return thing !== null && typeof thing === "object";
  }
  function getModularInstance(service) {
    if (service && service._delegate) {
      return service._delegate;
    } else {
      return service;
    }
  }
  var stringToByteArray$1, byteArrayToString, base64, base64Encode, base64urlEncodeWithoutPadding, Deferred, ERROR_NAME, FirebaseError, ErrorFactory, PATTERN, MAX_VALUE_MILLIS;
  var init_index_esm2017 = __esm({
    "node_modules/@firebase/util/dist/index.esm2017.js"() {
      stringToByteArray$1 = function(str) {
        const out = [];
        let p3 = 0;
        for (let i3 = 0; i3 < str.length; i3++) {
          let c3 = str.charCodeAt(i3);
          if (c3 < 128) {
            out[p3++] = c3;
          } else if (c3 < 2048) {
            out[p3++] = c3 >> 6 | 192;
            out[p3++] = c3 & 63 | 128;
          } else if ((c3 & 64512) === 55296 && i3 + 1 < str.length && (str.charCodeAt(i3 + 1) & 64512) === 56320) {
            c3 = 65536 + ((c3 & 1023) << 10) + (str.charCodeAt(++i3) & 1023);
            out[p3++] = c3 >> 18 | 240;
            out[p3++] = c3 >> 12 & 63 | 128;
            out[p3++] = c3 >> 6 & 63 | 128;
            out[p3++] = c3 & 63 | 128;
          } else {
            out[p3++] = c3 >> 12 | 224;
            out[p3++] = c3 >> 6 & 63 | 128;
            out[p3++] = c3 & 63 | 128;
          }
        }
        return out;
      };
      byteArrayToString = function(bytes) {
        const out = [];
        let pos = 0, c3 = 0;
        while (pos < bytes.length) {
          const c1 = bytes[pos++];
          if (c1 < 128) {
            out[c3++] = String.fromCharCode(c1);
          } else if (c1 > 191 && c1 < 224) {
            const c22 = bytes[pos++];
            out[c3++] = String.fromCharCode((c1 & 31) << 6 | c22 & 63);
          } else if (c1 > 239 && c1 < 365) {
            const c22 = bytes[pos++];
            const c32 = bytes[pos++];
            const c4 = bytes[pos++];
            const u3 = ((c1 & 7) << 18 | (c22 & 63) << 12 | (c32 & 63) << 6 | c4 & 63) - 65536;
            out[c3++] = String.fromCharCode(55296 + (u3 >> 10));
            out[c3++] = String.fromCharCode(56320 + (u3 & 1023));
          } else {
            const c22 = bytes[pos++];
            const c32 = bytes[pos++];
            out[c3++] = String.fromCharCode((c1 & 15) << 12 | (c22 & 63) << 6 | c32 & 63);
          }
        }
        return out.join("");
      };
      base64 = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/=";
        },
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_.";
        },
        HAS_NATIVE_SUPPORT: typeof atob === "function",
        encodeByteArray(input, webSafe) {
          if (!Array.isArray(input)) {
            throw Error("encodeByteArray takes an array as a parameter");
          }
          this.init_();
          const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
          const output = [];
          for (let i3 = 0; i3 < input.length; i3 += 3) {
            const byte1 = input[i3];
            const haveByte2 = i3 + 1 < input.length;
            const byte2 = haveByte2 ? input[i3 + 1] : 0;
            const haveByte3 = i3 + 2 < input.length;
            const byte3 = haveByte3 ? input[i3 + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
            let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
            let outByte4 = byte3 & 63;
            if (!haveByte3) {
              outByte4 = 64;
              if (!haveByte2) {
                outByte3 = 64;
              }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
          }
          return output.join("");
        },
        encodeString(input, webSafe) {
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
          }
          return this.encodeByteArray(stringToByteArray$1(input), webSafe);
        },
        decodeString(input, webSafe) {
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
          }
          return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
        },
        decodeStringToByteArray(input, webSafe) {
          this.init_();
          const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
          const output = [];
          for (let i3 = 0; i3 < input.length; ) {
            const byte1 = charToByteMap[input.charAt(i3++)];
            const haveByte2 = i3 < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i3)] : 0;
            ++i3;
            const haveByte3 = i3 < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i3)] : 64;
            ++i3;
            const haveByte4 = i3 < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i3)] : 64;
            ++i3;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
              throw Error();
            }
            const outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 !== 64) {
              const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
              output.push(outByte2);
              if (byte4 !== 64) {
                const outByte3 = byte3 << 6 & 192 | byte4;
                output.push(outByte3);
              }
            }
          }
          return output;
        },
        init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            for (let i3 = 0; i3 < this.ENCODED_VALS.length; i3++) {
              this.byteToCharMap_[i3] = this.ENCODED_VALS.charAt(i3);
              this.charToByteMap_[this.byteToCharMap_[i3]] = i3;
              this.byteToCharMapWebSafe_[i3] = this.ENCODED_VALS_WEBSAFE.charAt(i3);
              this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i3]] = i3;
              if (i3 >= this.ENCODED_VALS_BASE.length) {
                this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i3)] = i3;
                this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i3)] = i3;
              }
            }
          }
        }
      };
      base64Encode = function(str) {
        const utf8Bytes = stringToByteArray$1(str);
        return base64.encodeByteArray(utf8Bytes, true);
      };
      base64urlEncodeWithoutPadding = function(str) {
        return base64Encode(str).replace(/\./g, "");
      };
      Deferred = class {
        constructor() {
          this.reject = () => {
          };
          this.resolve = () => {
          };
          this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
          });
        }
        wrapCallback(callback) {
          return (error, value) => {
            if (error) {
              this.reject(error);
            } else {
              this.resolve(value);
            }
            if (typeof callback === "function") {
              this.promise.catch(() => {
              });
              if (callback.length === 1) {
                callback(error);
              } else {
                callback(error, value);
              }
            }
          };
        }
      };
      ERROR_NAME = "FirebaseError";
      FirebaseError = class extends Error {
        constructor(code, message, customData) {
          super(message);
          this.code = code;
          this.customData = customData;
          this.name = ERROR_NAME;
          Object.setPrototypeOf(this, FirebaseError.prototype);
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
          }
        }
      };
      ErrorFactory = class {
        constructor(service, serviceName, errors) {
          this.service = service;
          this.serviceName = serviceName;
          this.errors = errors;
        }
        create(code, ...data) {
          const customData = data[0] || {};
          const fullCode = `${this.service}/${code}`;
          const template = this.errors[code];
          const message = template ? replaceTemplate(template, customData) : "Error";
          const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
          const error = new FirebaseError(fullCode, fullMessage, customData);
          return error;
        }
      };
      PATTERN = /\{\$([^}]+)}/g;
      MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
    }
  });

  // node_modules/@firebase/component/dist/esm/index.esm2017.js
  function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
  }
  function isComponentEager(component) {
    return component.instantiationMode === "EAGER";
  }
  var Component, DEFAULT_ENTRY_NAME, Provider, ComponentContainer;
  var init_index_esm20172 = __esm({
    "node_modules/@firebase/component/dist/esm/index.esm2017.js"() {
      init_index_esm2017();
      Component = class {
        constructor(name4, instanceFactory, type) {
          this.name = name4;
          this.instanceFactory = instanceFactory;
          this.type = type;
          this.multipleInstances = false;
          this.serviceProps = {};
          this.instantiationMode = "LAZY";
          this.onInstanceCreated = null;
        }
        setInstantiationMode(mode) {
          this.instantiationMode = mode;
          return this;
        }
        setMultipleInstances(multipleInstances) {
          this.multipleInstances = multipleInstances;
          return this;
        }
        setServiceProps(props) {
          this.serviceProps = props;
          return this;
        }
        setInstanceCreatedCallback(callback) {
          this.onInstanceCreated = callback;
          return this;
        }
      };
      DEFAULT_ENTRY_NAME = "[DEFAULT]";
      Provider = class {
        constructor(name4, container) {
          this.name = name4;
          this.container = container;
          this.component = null;
          this.instances = /* @__PURE__ */ new Map();
          this.instancesDeferred = /* @__PURE__ */ new Map();
          this.instancesOptions = /* @__PURE__ */ new Map();
          this.onInitCallbacks = /* @__PURE__ */ new Map();
        }
        get(identifier) {
          const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
          if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
              try {
                const instance = this.getOrInitializeService({
                  instanceIdentifier: normalizedIdentifier
                });
                if (instance) {
                  deferred.resolve(instance);
                }
              } catch (e3) {
              }
            }
          }
          return this.instancesDeferred.get(normalizedIdentifier).promise;
        }
        getImmediate(options) {
          var _a2;
          const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
          const optional = (_a2 = options === null || options === void 0 ? void 0 : options.optional) !== null && _a2 !== void 0 ? _a2 : false;
          if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
            try {
              return this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier
              });
            } catch (e3) {
              if (optional) {
                return null;
              } else {
                throw e3;
              }
            }
          } else {
            if (optional) {
              return null;
            } else {
              throw Error(`Service ${this.name} is not available`);
            }
          }
        }
        getComponent() {
          return this.component;
        }
        setComponent(component) {
          if (component.name !== this.name) {
            throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
          }
          if (this.component) {
            throw Error(`Component for ${this.name} has already been provided`);
          }
          this.component = component;
          if (!this.shouldAutoInitialize()) {
            return;
          }
          if (isComponentEager(component)) {
            try {
              this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
            } catch (e3) {
            }
          }
          for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
              const instance = this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier
              });
              instanceDeferred.resolve(instance);
            } catch (e3) {
            }
          }
        }
        clearInstance(identifier = DEFAULT_ENTRY_NAME) {
          this.instancesDeferred.delete(identifier);
          this.instancesOptions.delete(identifier);
          this.instances.delete(identifier);
        }
        async delete() {
          const services = Array.from(this.instances.values());
          await Promise.all([
            ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
            ...services.filter((service) => "_delete" in service).map((service) => service._delete())
          ]);
        }
        isComponentSet() {
          return this.component != null;
        }
        isInitialized(identifier = DEFAULT_ENTRY_NAME) {
          return this.instances.has(identifier);
        }
        getOptions(identifier = DEFAULT_ENTRY_NAME) {
          return this.instancesOptions.get(identifier) || {};
        }
        initialize(opts = {}) {
          const { options = {} } = opts;
          const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
          if (this.isInitialized(normalizedIdentifier)) {
            throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
          }
          if (!this.isComponentSet()) {
            throw Error(`Component ${this.name} has not been registered yet`);
          }
          const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
          });
          for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) {
              instanceDeferred.resolve(instance);
            }
          }
          return instance;
        }
        onInit(callback, identifier) {
          var _a2;
          const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
          const existingCallbacks = (_a2 = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a2 !== void 0 ? _a2 : /* @__PURE__ */ new Set();
          existingCallbacks.add(callback);
          this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
          const existingInstance = this.instances.get(normalizedIdentifier);
          if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
          }
          return () => {
            existingCallbacks.delete(callback);
          };
        }
        invokeOnInitCallbacks(instance, identifier) {
          const callbacks = this.onInitCallbacks.get(identifier);
          if (!callbacks) {
            return;
          }
          for (const callback of callbacks) {
            try {
              callback(instance, identifier);
            } catch (_a2) {
            }
          }
        }
        getOrInitializeService({ instanceIdentifier, options = {} }) {
          let instance = this.instances.get(instanceIdentifier);
          if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
              instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
              options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            this.invokeOnInitCallbacks(instance, instanceIdentifier);
            if (this.component.onInstanceCreated) {
              try {
                this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
              } catch (_a2) {
              }
            }
          }
          return instance || null;
        }
        normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
          if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
          } else {
            return identifier;
          }
        }
        shouldAutoInitialize() {
          return !!this.component && this.component.instantiationMode !== "EXPLICIT";
        }
      };
      ComponentContainer = class {
        constructor(name4) {
          this.name = name4;
          this.providers = /* @__PURE__ */ new Map();
        }
        addComponent(component) {
          const provider = this.getProvider(component.name);
          if (provider.isComponentSet()) {
            throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
          }
          provider.setComponent(component);
        }
        addOrOverwriteComponent(component) {
          const provider = this.getProvider(component.name);
          if (provider.isComponentSet()) {
            this.providers.delete(component.name);
          }
          this.addComponent(component);
        }
        getProvider(name4) {
          if (this.providers.has(name4)) {
            return this.providers.get(name4);
          }
          const provider = new Provider(name4, this);
          this.providers.set(name4, provider);
          return provider;
        }
        getProviders() {
          return Array.from(this.providers.values());
        }
      };
    }
  });

  // node_modules/@firebase/logger/dist/esm/index.esm2017.js
  var instances, LogLevel, levelStringToEnum, defaultLogLevel, ConsoleMethod, defaultLogHandler, Logger;
  var init_index_esm20173 = __esm({
    "node_modules/@firebase/logger/dist/esm/index.esm2017.js"() {
      instances = [];
      (function(LogLevel2) {
        LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
        LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
        LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
        LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
        LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
        LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
      })(LogLevel || (LogLevel = {}));
      levelStringToEnum = {
        "debug": LogLevel.DEBUG,
        "verbose": LogLevel.VERBOSE,
        "info": LogLevel.INFO,
        "warn": LogLevel.WARN,
        "error": LogLevel.ERROR,
        "silent": LogLevel.SILENT
      };
      defaultLogLevel = LogLevel.INFO;
      ConsoleMethod = {
        [LogLevel.DEBUG]: "log",
        [LogLevel.VERBOSE]: "log",
        [LogLevel.INFO]: "info",
        [LogLevel.WARN]: "warn",
        [LogLevel.ERROR]: "error"
      };
      defaultLogHandler = (instance, logType, ...args) => {
        if (logType < instance.logLevel) {
          return;
        }
        const now = new Date().toISOString();
        const method = ConsoleMethod[logType];
        if (method) {
          console[method](`[${now}]  ${instance.name}:`, ...args);
        } else {
          throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
        }
      };
      Logger = class {
        constructor(name4) {
          this.name = name4;
          this._logLevel = defaultLogLevel;
          this._logHandler = defaultLogHandler;
          this._userLogHandler = null;
          instances.push(this);
        }
        get logLevel() {
          return this._logLevel;
        }
        set logLevel(val) {
          if (!(val in LogLevel)) {
            throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
          }
          this._logLevel = val;
        }
        setLogLevel(val) {
          this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
        }
        get logHandler() {
          return this._logHandler;
        }
        set logHandler(val) {
          if (typeof val !== "function") {
            throw new TypeError("Value assigned to `logHandler` must be a function");
          }
          this._logHandler = val;
        }
        get userLogHandler() {
          return this._userLogHandler;
        }
        set userLogHandler(val) {
          this._userLogHandler = val;
        }
        debug(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
          this._logHandler(this, LogLevel.DEBUG, ...args);
        }
        log(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
          this._logHandler(this, LogLevel.VERBOSE, ...args);
        }
        info(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
          this._logHandler(this, LogLevel.INFO, ...args);
        }
        warn(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
          this._logHandler(this, LogLevel.WARN, ...args);
        }
        error(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
          this._logHandler(this, LogLevel.ERROR, ...args);
        }
      };
    }
  });

  // node_modules/idb/build/wrap-idb-value.js
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    promise.then((value) => {
      if (value instanceof IDBCursor) {
        cursorRequestMap.set(value, request);
      }
    }).catch(() => {
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
      return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
        return wrap(tx);
      };
    }
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var instanceOfAny, idbProxyableTypes, cursorAdvanceMethods, cursorRequestMap, transactionDoneMap, transactionStoreNamesMap, transformCache, reverseTransformCache, idbProxyTraps, unwrap;
  var init_wrap_idb_value = __esm({
    "node_modules/idb/build/wrap-idb-value.js"() {
      instanceOfAny = (object, constructors) => constructors.some((c3) => object instanceof c3);
      cursorRequestMap = /* @__PURE__ */ new WeakMap();
      transactionDoneMap = /* @__PURE__ */ new WeakMap();
      transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
      transformCache = /* @__PURE__ */ new WeakMap();
      reverseTransformCache = /* @__PURE__ */ new WeakMap();
      idbProxyTraps = {
        get(target, prop, receiver) {
          if (target instanceof IDBTransaction) {
            if (prop === "done")
              return transactionDoneMap.get(target);
            if (prop === "objectStoreNames") {
              return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            if (prop === "store") {
              return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
            }
          }
          return wrap(target[prop]);
        },
        set(target, prop, value) {
          target[prop] = value;
          return true;
        },
        has(target, prop) {
          if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
            return true;
          }
          return prop in target;
        }
      };
      unwrap = (value) => reverseTransformCache.get(value);
    }
  });

  // node_modules/idb/build/index.js
  function openDB(name4, version4, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name4, version4);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction));
      });
    }
    if (blocked)
      request.addEventListener("blocked", () => blocked());
    openPromise.then((db4) => {
      if (terminated)
        db4.addEventListener("close", () => terminated());
      if (blocking)
        db4.addEventListener("versionchange", () => blocking());
    }).catch(() => {
    });
    return openPromise;
  }
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  var readMethods, writeMethods, cachedMethods;
  var init_build = __esm({
    "node_modules/idb/build/index.js"() {
      init_wrap_idb_value();
      init_wrap_idb_value();
      readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
      writeMethods = ["put", "add", "delete", "clear"];
      cachedMethods = /* @__PURE__ */ new Map();
      replaceTraps((oldTraps) => __spreadProps(__spreadValues({}, oldTraps), {
        get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
      }));
    }
  });

  // node_modules/@firebase/app/dist/esm/index.esm2017.js
  function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
  }
  function _addComponent(app, component) {
    try {
      app.container.addComponent(component);
    } catch (e3) {
      logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e3);
    }
  }
  function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
      logger.debug(`There were multiple attempts to register component ${componentName}.`);
      return false;
    }
    _components.set(componentName, component);
    for (const app of _apps.values()) {
      _addComponent(app, component);
    }
    return true;
  }
  function _getProvider(app, name4) {
    const heartbeatController = app.container.getProvider("heartbeat").getImmediate({ optional: true });
    if (heartbeatController) {
      void heartbeatController.triggerHeartbeat();
    }
    return app.container.getProvider(name4);
  }
  function initializeApp(options, rawConfig = {}) {
    if (typeof rawConfig !== "object") {
      const name5 = rawConfig;
      rawConfig = { name: name5 };
    }
    const config = Object.assign({ name: DEFAULT_ENTRY_NAME2, automaticDataCollectionEnabled: false }, rawConfig);
    const name4 = config.name;
    if (typeof name4 !== "string" || !name4) {
      throw ERROR_FACTORY.create("bad-app-name", {
        appName: String(name4)
      });
    }
    const existingApp = _apps.get(name4);
    if (existingApp) {
      if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
        return existingApp;
      } else {
        throw ERROR_FACTORY.create("duplicate-app", { appName: name4 });
      }
    }
    const container = new ComponentContainer(name4);
    for (const component of _components.values()) {
      container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name4, newApp);
    return newApp;
  }
  function getApp(name4 = DEFAULT_ENTRY_NAME2) {
    const app = _apps.get(name4);
    if (!app) {
      throw ERROR_FACTORY.create("no-app", { appName: name4 });
    }
    return app;
  }
  function registerVersion(libraryKeyOrName, version4, variant) {
    var _a2;
    let library = (_a2 = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a2 !== void 0 ? _a2 : libraryKeyOrName;
    if (variant) {
      library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version4.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
      const warning = [
        `Unable to register library "${library}" with version "${version4}":`
      ];
      if (libraryMismatch) {
        warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
      }
      if (libraryMismatch && versionMismatch) {
        warning.push("and");
      }
      if (versionMismatch) {
        warning.push(`version name "${version4}" contains illegal characters (whitespace or "/")`);
      }
      logger.warn(warning.join(" "));
      return;
    }
    _registerComponent(new Component(`${library}-version`, () => ({ library, version: version4 }), "VERSION"));
  }
  function getDbPromise() {
    if (!dbPromise) {
      dbPromise = openDB(DB_NAME, DB_VERSION, {
        upgrade: (db4, oldVersion) => {
          switch (oldVersion) {
            case 0:
              db4.createObjectStore(STORE_NAME);
          }
        }
      }).catch((e3) => {
        throw ERROR_FACTORY.create("storage-open", {
          originalErrorMessage: e3.message
        });
      });
    }
    return dbPromise;
  }
  async function readHeartbeatsFromIndexedDB(app) {
    try {
      const db4 = await getDbPromise();
      return db4.transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(app));
    } catch (e3) {
      throw ERROR_FACTORY.create("storage-get", {
        originalErrorMessage: e3.message
      });
    }
  }
  async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    try {
      const db4 = await getDbPromise();
      const tx = db4.transaction(STORE_NAME, "readwrite");
      const objectStore = tx.objectStore(STORE_NAME);
      await objectStore.put(heartbeatObject, computeKey(app));
      return tx.done;
    } catch (e3) {
      throw ERROR_FACTORY.create("storage-set", {
        originalErrorMessage: e3.message
      });
    }
  }
  function computeKey(app) {
    return `${app.name}!${app.options.appId}`;
  }
  function getUTCDateString() {
    const today = new Date();
    return today.toISOString().substring(0, 10);
  }
  function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
    const heartbeatsToSend = [];
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache) {
      const heartbeatEntry = heartbeatsToSend.find((hb2) => hb2.agent === singleDateHeartbeat.agent);
      if (!heartbeatEntry) {
        heartbeatsToSend.push({
          agent: singleDateHeartbeat.agent,
          dates: [singleDateHeartbeat.date]
        });
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatsToSend.pop();
          break;
        }
      } else {
        heartbeatEntry.dates.push(singleDateHeartbeat.date);
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatEntry.dates.pop();
          break;
        }
      }
      unsentEntries = unsentEntries.slice(1);
    }
    return {
      heartbeatsToSend,
      unsentEntries
    };
  }
  function countBytes(heartbeatsCache) {
    return base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsCache })).length;
  }
  function registerCoreComponents(variant) {
    _registerComponent(new Component("platform-logger", (container) => new PlatformLoggerServiceImpl(container), "PRIVATE"));
    _registerComponent(new Component("heartbeat", (container) => new HeartbeatServiceImpl(container), "PRIVATE"));
    registerVersion(name$o, version$1, variant);
    registerVersion(name$o, version$1, "esm2017");
    registerVersion("fire-js", "");
  }
  var PlatformLoggerServiceImpl, name$o, version$1, logger, name$n, name$m, name$l, name$k, name$j, name$i, name$h, name$g, name$f, name$e, name$d, name$c, name$b, name$a, name$9, name$8, name$7, name$6, name$5, name$4, name$3, name$2, name$1, name, version, DEFAULT_ENTRY_NAME2, PLATFORM_LOG_STRING, _apps, _components, ERRORS, ERROR_FACTORY, FirebaseAppImpl, SDK_VERSION, DB_NAME, DB_VERSION, STORE_NAME, dbPromise, MAX_HEADER_BYTES, STORED_HEARTBEAT_RETENTION_MAX_MILLIS, HeartbeatServiceImpl, HeartbeatStorageImpl;
  var init_index_esm20174 = __esm({
    "node_modules/@firebase/app/dist/esm/index.esm2017.js"() {
      init_index_esm20172();
      init_index_esm20173();
      init_index_esm2017();
      init_index_esm2017();
      init_build();
      PlatformLoggerServiceImpl = class {
        constructor(container) {
          this.container = container;
        }
        getPlatformInfoString() {
          const providers = this.container.getProviders();
          return providers.map((provider) => {
            if (isVersionServiceProvider(provider)) {
              const service = provider.getImmediate();
              return `${service.library}/${service.version}`;
            } else {
              return null;
            }
          }).filter((logString) => logString).join(" ");
        }
      };
      name$o = "@firebase/app";
      version$1 = "0.7.24";
      logger = new Logger("@firebase/app");
      name$n = "@firebase/app-compat";
      name$m = "@firebase/analytics-compat";
      name$l = "@firebase/analytics";
      name$k = "@firebase/app-check-compat";
      name$j = "@firebase/app-check";
      name$i = "@firebase/auth";
      name$h = "@firebase/auth-compat";
      name$g = "@firebase/database";
      name$f = "@firebase/database-compat";
      name$e = "@firebase/functions";
      name$d = "@firebase/functions-compat";
      name$c = "@firebase/installations";
      name$b = "@firebase/installations-compat";
      name$a = "@firebase/messaging";
      name$9 = "@firebase/messaging-compat";
      name$8 = "@firebase/performance";
      name$7 = "@firebase/performance-compat";
      name$6 = "@firebase/remote-config";
      name$5 = "@firebase/remote-config-compat";
      name$4 = "@firebase/storage";
      name$3 = "@firebase/storage-compat";
      name$2 = "@firebase/firestore";
      name$1 = "@firebase/firestore-compat";
      name = "firebase";
      version = "9.8.1";
      DEFAULT_ENTRY_NAME2 = "[DEFAULT]";
      PLATFORM_LOG_STRING = {
        [name$o]: "fire-core",
        [name$n]: "fire-core-compat",
        [name$l]: "fire-analytics",
        [name$m]: "fire-analytics-compat",
        [name$j]: "fire-app-check",
        [name$k]: "fire-app-check-compat",
        [name$i]: "fire-auth",
        [name$h]: "fire-auth-compat",
        [name$g]: "fire-rtdb",
        [name$f]: "fire-rtdb-compat",
        [name$e]: "fire-fn",
        [name$d]: "fire-fn-compat",
        [name$c]: "fire-iid",
        [name$b]: "fire-iid-compat",
        [name$a]: "fire-fcm",
        [name$9]: "fire-fcm-compat",
        [name$8]: "fire-perf",
        [name$7]: "fire-perf-compat",
        [name$6]: "fire-rc",
        [name$5]: "fire-rc-compat",
        [name$4]: "fire-gcs",
        [name$3]: "fire-gcs-compat",
        [name$2]: "fire-fst",
        [name$1]: "fire-fst-compat",
        "fire-js": "fire-js",
        [name]: "fire-js-all"
      };
      _apps = /* @__PURE__ */ new Map();
      _components = /* @__PURE__ */ new Map();
      ERRORS = {
        ["no-app"]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
        ["bad-app-name"]: "Illegal App name: '{$appName}",
        ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
        ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
        ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        ["invalid-log-argument"]: "First argument to `onLog` must be null or a function.",
        ["storage-open"]: "Error thrown when opening storage. Original error: {$originalErrorMessage}.",
        ["storage-get"]: "Error thrown when reading from storage. Original error: {$originalErrorMessage}.",
        ["storage-set"]: "Error thrown when writing to storage. Original error: {$originalErrorMessage}.",
        ["storage-delete"]: "Error thrown when deleting from storage. Original error: {$originalErrorMessage}."
      };
      ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
      FirebaseAppImpl = class {
        constructor(options, config, container) {
          this._isDeleted = false;
          this._options = Object.assign({}, options);
          this._config = Object.assign({}, config);
          this._name = config.name;
          this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
          this._container = container;
          this.container.addComponent(new Component("app", () => this, "PUBLIC"));
        }
        get automaticDataCollectionEnabled() {
          this.checkDestroyed();
          return this._automaticDataCollectionEnabled;
        }
        set automaticDataCollectionEnabled(val) {
          this.checkDestroyed();
          this._automaticDataCollectionEnabled = val;
        }
        get name() {
          this.checkDestroyed();
          return this._name;
        }
        get options() {
          this.checkDestroyed();
          return this._options;
        }
        get config() {
          this.checkDestroyed();
          return this._config;
        }
        get container() {
          return this._container;
        }
        get isDeleted() {
          return this._isDeleted;
        }
        set isDeleted(val) {
          this._isDeleted = val;
        }
        checkDestroyed() {
          if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
          }
        }
      };
      SDK_VERSION = version;
      DB_NAME = "firebase-heartbeat-database";
      DB_VERSION = 1;
      STORE_NAME = "firebase-heartbeat-store";
      dbPromise = null;
      MAX_HEADER_BYTES = 1024;
      STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
      HeartbeatServiceImpl = class {
        constructor(container) {
          this.container = container;
          this._heartbeatsCache = null;
          const app = this.container.getProvider("app").getImmediate();
          this._storage = new HeartbeatStorageImpl(app);
          this._heartbeatsCachePromise = this._storage.read().then((result) => {
            this._heartbeatsCache = result;
            return result;
          });
        }
        async triggerHeartbeat() {
          const platformLogger = this.container.getProvider("platform-logger").getImmediate();
          const agent = platformLogger.getPlatformInfoString();
          const date = getUTCDateString();
          if (this._heartbeatsCache === null) {
            this._heartbeatsCache = await this._heartbeatsCachePromise;
          }
          if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) {
            return;
          } else {
            this._heartbeatsCache.heartbeats.push({ date, agent });
          }
          this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat) => {
            const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
            const now = Date.now();
            return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
          });
          return this._storage.overwrite(this._heartbeatsCache);
        }
        async getHeartbeatsHeader() {
          if (this._heartbeatsCache === null) {
            await this._heartbeatsCachePromise;
          }
          if (this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0) {
            return "";
          }
          const date = getUTCDateString();
          const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
          const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
          this._heartbeatsCache.lastSentHeartbeatDate = date;
          if (unsentEntries.length > 0) {
            this._heartbeatsCache.heartbeats = unsentEntries;
            await this._storage.overwrite(this._heartbeatsCache);
          } else {
            this._heartbeatsCache.heartbeats = [];
            void this._storage.overwrite(this._heartbeatsCache);
          }
          return headerString;
        }
      };
      HeartbeatStorageImpl = class {
        constructor(app) {
          this.app = app;
          this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
        }
        async runIndexedDBEnvironmentCheck() {
          if (!isIndexedDBAvailable()) {
            return false;
          } else {
            return validateIndexedDBOpenable().then(() => true).catch(() => false);
          }
        }
        async read() {
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
            return { heartbeats: [] };
          } else {
            const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
            return idbHeartbeatObject || { heartbeats: [] };
          }
        }
        async overwrite(heartbeatsObject) {
          var _a2;
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
            return;
          } else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
              lastSentHeartbeatDate: (_a2 = heartbeatsObject.lastSentHeartbeatDate) !== null && _a2 !== void 0 ? _a2 : existingHeartbeatsObject.lastSentHeartbeatDate,
              heartbeats: heartbeatsObject.heartbeats
            });
          }
        }
        async add(heartbeatsObject) {
          var _a2;
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
            return;
          } else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
              lastSentHeartbeatDate: (_a2 = heartbeatsObject.lastSentHeartbeatDate) !== null && _a2 !== void 0 ? _a2 : existingHeartbeatsObject.lastSentHeartbeatDate,
              heartbeats: [
                ...existingHeartbeatsObject.heartbeats,
                ...heartbeatsObject.heartbeats
              ]
            });
          }
        }
      };
      registerCoreComponents("");
    }
  });

  // node_modules/@firebase/storage/dist/index.esm2017.js
  function prependCode(code) {
    return "storage/" + code;
  }
  function unknown() {
    const message = "An unknown error occurred, please check the error payload for server response.";
    return new StorageError("unknown", message);
  }
  function quotaExceeded(bucket) {
    return new StorageError("quota-exceeded", "Quota for bucket '" + bucket + "' exceeded, please view quota on https://firebase.google.com/pricing/.");
  }
  function unauthenticated() {
    const message = "User is not authenticated, please authenticate using Firebase Authentication and try again.";
    return new StorageError("unauthenticated", message);
  }
  function unauthorizedApp() {
    return new StorageError("unauthorized-app", "This app does not have permission to access Firebase Storage on this project.");
  }
  function unauthorized(path) {
    return new StorageError("unauthorized", "User does not have permission to access '" + path + "'.");
  }
  function retryLimitExceeded() {
    return new StorageError("retry-limit-exceeded", "Max retry time for operation exceeded, please try again.");
  }
  function canceled() {
    return new StorageError("canceled", "User canceled the upload/download.");
  }
  function invalidUrl(url) {
    return new StorageError("invalid-url", "Invalid URL '" + url + "'.");
  }
  function invalidDefaultBucket(bucket) {
    return new StorageError("invalid-default-bucket", "Invalid default bucket '" + bucket + "'.");
  }
  function noDefaultBucket() {
    return new StorageError("no-default-bucket", "No default bucket found. Did you set the '" + CONFIG_STORAGE_BUCKET_KEY + "' property when initializing the app?");
  }
  function cannotSliceBlob() {
    return new StorageError("cannot-slice-blob", "Cannot slice blob for upload. Please retry the upload.");
  }
  function invalidArgument(message) {
    return new StorageError("invalid-argument", message);
  }
  function appDeleted() {
    return new StorageError("app-deleted", "The Firebase app was deleted.");
  }
  function invalidRootOperation(name4) {
    return new StorageError("invalid-root-operation", "The operation '" + name4 + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
  }
  function invalidFormat(format, message) {
    return new StorageError("invalid-format", "String does not match format '" + format + "': " + message);
  }
  function internalError(message) {
    throw new StorageError("internal-error", "Internal error: " + message);
  }
  function start(f3, callback, timeout) {
    let waitSeconds = 1;
    let retryTimeoutId = null;
    let globalTimeoutId = null;
    let hitTimeout = false;
    let cancelState = 0;
    function canceled2() {
      return cancelState === 2;
    }
    let triggeredCallback = false;
    function triggerCallback(...args) {
      if (!triggeredCallback) {
        triggeredCallback = true;
        callback.apply(null, args);
      }
    }
    function callWithDelay(millis) {
      retryTimeoutId = setTimeout(() => {
        retryTimeoutId = null;
        f3(handler, canceled2());
      }, millis);
    }
    function clearGlobalTimeout() {
      if (globalTimeoutId) {
        clearTimeout(globalTimeoutId);
      }
    }
    function handler(success, ...args) {
      if (triggeredCallback) {
        clearGlobalTimeout();
        return;
      }
      if (success) {
        clearGlobalTimeout();
        triggerCallback.call(null, success, ...args);
        return;
      }
      const mustStop = canceled2() || hitTimeout;
      if (mustStop) {
        clearGlobalTimeout();
        triggerCallback.call(null, success, ...args);
        return;
      }
      if (waitSeconds < 64) {
        waitSeconds *= 2;
      }
      let waitMillis;
      if (cancelState === 1) {
        cancelState = 2;
        waitMillis = 0;
      } else {
        waitMillis = (waitSeconds + Math.random()) * 1e3;
      }
      callWithDelay(waitMillis);
    }
    let stopped = false;
    function stop2(wasTimeout) {
      if (stopped) {
        return;
      }
      stopped = true;
      clearGlobalTimeout();
      if (triggeredCallback) {
        return;
      }
      if (retryTimeoutId !== null) {
        if (!wasTimeout) {
          cancelState = 2;
        }
        clearTimeout(retryTimeoutId);
        callWithDelay(0);
      } else {
        if (!wasTimeout) {
          cancelState = 1;
        }
      }
    }
    callWithDelay(0);
    globalTimeoutId = setTimeout(() => {
      hitTimeout = true;
      stop2(true);
    }, timeout);
    return stop2;
  }
  function stop(id2) {
    id2(false);
  }
  function isJustDef(p3) {
    return p3 !== void 0;
  }
  function isNonArrayObject(p3) {
    return typeof p3 === "object" && !Array.isArray(p3);
  }
  function isString(p3) {
    return typeof p3 === "string" || p3 instanceof String;
  }
  function isNativeBlob(p3) {
    return isNativeBlobDefined() && p3 instanceof Blob;
  }
  function isNativeBlobDefined() {
    return typeof Blob !== "undefined";
  }
  function validateNumber(argument, minValue, maxValue, value) {
    if (value < minValue) {
      throw invalidArgument(`Invalid value for '${argument}'. Expected ${minValue} or greater.`);
    }
    if (value > maxValue) {
      throw invalidArgument(`Invalid value for '${argument}'. Expected ${maxValue} or less.`);
    }
  }
  function makeUrl(urlPart, host, protocol) {
    let origin = host;
    if (protocol == null) {
      origin = `https://${host}`;
    }
    return `${protocol}://${origin}/v0${urlPart}`;
  }
  function makeQueryString(params) {
    const encode = encodeURIComponent;
    let queryPart = "?";
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const nextPart = encode(key) + "=" + encode(params[key]);
        queryPart = queryPart + nextPart + "&";
      }
    }
    queryPart = queryPart.slice(0, -1);
    return queryPart;
  }
  function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) {
      headers["Authorization"] = "Firebase " + authToken;
    }
  }
  function addVersionHeader_(headers, firebaseVersion) {
    headers["X-Firebase-Storage-Version"] = "webjs/" + (firebaseVersion !== null && firebaseVersion !== void 0 ? firebaseVersion : "AppManager");
  }
  function addGmpidHeader_(headers, appId) {
    if (appId) {
      headers["X-Firebase-GMPID"] = appId;
    }
  }
  function addAppCheckHeader_(headers, appCheckToken) {
    if (appCheckToken !== null) {
      headers["X-Firebase-AppCheck"] = appCheckToken;
    }
  }
  function makeRequest(requestInfo, appId, authToken, appCheckToken, requestFactory, firebaseVersion) {
    const queryPart = makeQueryString(requestInfo.urlParams);
    const url = requestInfo.url + queryPart;
    const headers = Object.assign({}, requestInfo.headers);
    addGmpidHeader_(headers, appId);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers, firebaseVersion);
    addAppCheckHeader_(headers, appCheckToken);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, requestFactory);
  }
  function getBlobBuilder() {
    if (typeof BlobBuilder !== "undefined") {
      return BlobBuilder;
    } else if (typeof WebKitBlobBuilder !== "undefined") {
      return WebKitBlobBuilder;
    } else {
      return void 0;
    }
  }
  function getBlob$1(...args) {
    const BlobBuilder2 = getBlobBuilder();
    if (BlobBuilder2 !== void 0) {
      const bb2 = new BlobBuilder2();
      for (let i3 = 0; i3 < args.length; i3++) {
        bb2.append(args[i3]);
      }
      return bb2.getBlob();
    } else {
      if (isNativeBlobDefined()) {
        return new Blob(args);
      } else {
        throw new StorageError("unsupported-environment", "This browser doesn't seem to support creating Blobs");
      }
    }
  }
  function sliceBlob(blob, start2, end) {
    if (blob.webkitSlice) {
      return blob.webkitSlice(start2, end);
    } else if (blob.mozSlice) {
      return blob.mozSlice(start2, end);
    } else if (blob.slice) {
      return blob.slice(start2, end);
    }
    return null;
  }
  function decodeBase64(encoded) {
    return atob(encoded);
  }
  function dataFromString(format, stringData) {
    switch (format) {
      case StringFormat.RAW:
        return new StringData(utf8Bytes_(stringData));
      case StringFormat.BASE64:
      case StringFormat.BASE64URL:
        return new StringData(base64Bytes_(format, stringData));
      case StringFormat.DATA_URL:
        return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
    }
    throw unknown();
  }
  function utf8Bytes_(value) {
    const b3 = [];
    for (let i3 = 0; i3 < value.length; i3++) {
      let c3 = value.charCodeAt(i3);
      if (c3 <= 127) {
        b3.push(c3);
      } else {
        if (c3 <= 2047) {
          b3.push(192 | c3 >> 6, 128 | c3 & 63);
        } else {
          if ((c3 & 64512) === 55296) {
            const valid = i3 < value.length - 1 && (value.charCodeAt(i3 + 1) & 64512) === 56320;
            if (!valid) {
              b3.push(239, 191, 189);
            } else {
              const hi = c3;
              const lo2 = value.charCodeAt(++i3);
              c3 = 65536 | (hi & 1023) << 10 | lo2 & 1023;
              b3.push(240 | c3 >> 18, 128 | c3 >> 12 & 63, 128 | c3 >> 6 & 63, 128 | c3 & 63);
            }
          } else {
            if ((c3 & 64512) === 56320) {
              b3.push(239, 191, 189);
            } else {
              b3.push(224 | c3 >> 12, 128 | c3 >> 6 & 63, 128 | c3 & 63);
            }
          }
        }
      }
    }
    return new Uint8Array(b3);
  }
  function percentEncodedBytes_(value) {
    let decoded;
    try {
      decoded = decodeURIComponent(value);
    } catch (e3) {
      throw invalidFormat(StringFormat.DATA_URL, "Malformed data URL.");
    }
    return utf8Bytes_(decoded);
  }
  function base64Bytes_(format, value) {
    switch (format) {
      case StringFormat.BASE64: {
        const hasMinus = value.indexOf("-") !== -1;
        const hasUnder = value.indexOf("_") !== -1;
        if (hasMinus || hasUnder) {
          const invalidChar = hasMinus ? "-" : "_";
          throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
        }
        break;
      }
      case StringFormat.BASE64URL: {
        const hasPlus = value.indexOf("+") !== -1;
        const hasSlash = value.indexOf("/") !== -1;
        if (hasPlus || hasSlash) {
          const invalidChar = hasPlus ? "+" : "/";
          throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
        }
        value = value.replace(/-/g, "+").replace(/_/g, "/");
        break;
      }
    }
    let bytes;
    try {
      bytes = decodeBase64(value);
    } catch (e3) {
      throw invalidFormat(format, "Invalid character found");
    }
    const array = new Uint8Array(bytes.length);
    for (let i3 = 0; i3 < bytes.length; i3++) {
      array[i3] = bytes.charCodeAt(i3);
    }
    return array;
  }
  function dataURLBytes_(dataUrl) {
    const parts = new DataURLParts(dataUrl);
    if (parts.base64) {
      return base64Bytes_(StringFormat.BASE64, parts.rest);
    } else {
      return percentEncodedBytes_(parts.rest);
    }
  }
  function dataURLContentType_(dataUrl) {
    const parts = new DataURLParts(dataUrl);
    return parts.contentType;
  }
  function endsWith(s2, end) {
    const longEnough = s2.length >= end.length;
    if (!longEnough) {
      return false;
    }
    return s2.substring(s2.length - end.length) === end;
  }
  function jsonObjectOrNull(s2) {
    let obj;
    try {
      obj = JSON.parse(s2);
    } catch (e3) {
      return null;
    }
    if (isNonArrayObject(obj)) {
      return obj;
    } else {
      return null;
    }
  }
  function parent(path) {
    if (path.length === 0) {
      return null;
    }
    const index = path.lastIndexOf("/");
    if (index === -1) {
      return "";
    }
    const newPath = path.slice(0, index);
    return newPath;
  }
  function child(path, childPath) {
    const canonicalChildPath = childPath.split("/").filter((component) => component.length > 0).join("/");
    if (path.length === 0) {
      return canonicalChildPath;
    } else {
      return path + "/" + canonicalChildPath;
    }
  }
  function lastComponent(path) {
    const index = path.lastIndexOf("/", path.length - 2);
    if (index === -1) {
      return path;
    } else {
      return path.slice(index + 1);
    }
  }
  function noXform_(metadata, value) {
    return value;
  }
  function xformPath(fullPath) {
    if (!isString(fullPath) || fullPath.length < 2) {
      return fullPath;
    } else {
      return lastComponent(fullPath);
    }
  }
  function getMappings() {
    if (mappings_) {
      return mappings_;
    }
    const mappings = [];
    mappings.push(new Mapping("bucket"));
    mappings.push(new Mapping("generation"));
    mappings.push(new Mapping("metageneration"));
    mappings.push(new Mapping("name", "fullPath", true));
    function mappingsXformPath(_metadata, fullPath) {
      return xformPath(fullPath);
    }
    const nameMapping = new Mapping("name");
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    function xformSize(_metadata, size) {
      if (size !== void 0) {
        return Number(size);
      } else {
        return size;
      }
    }
    const sizeMapping = new Mapping("size");
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping("timeCreated"));
    mappings.push(new Mapping("updated"));
    mappings.push(new Mapping("md5Hash", null, true));
    mappings.push(new Mapping("cacheControl", null, true));
    mappings.push(new Mapping("contentDisposition", null, true));
    mappings.push(new Mapping("contentEncoding", null, true));
    mappings.push(new Mapping("contentLanguage", null, true));
    mappings.push(new Mapping("contentType", null, true));
    mappings.push(new Mapping("metadata", "customMetadata", true));
    mappings_ = mappings;
    return mappings_;
  }
  function addRef(metadata, service) {
    function generateRef() {
      const bucket = metadata["bucket"];
      const path = metadata["fullPath"];
      const loc = new Location(bucket, path);
      return service._makeStorageReference(loc);
    }
    Object.defineProperty(metadata, "ref", { get: generateRef });
  }
  function fromResource(service, resource, mappings) {
    const metadata = {};
    metadata["type"] = "file";
    const len = mappings.length;
    for (let i3 = 0; i3 < len; i3++) {
      const mapping = mappings[i3];
      metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, service);
    return metadata;
  }
  function fromResourceString(service, resourceString, mappings) {
    const obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
      return null;
    }
    const resource = obj;
    return fromResource(service, resource, mappings);
  }
  function toResourceString(metadata, mappings) {
    const resource = {};
    const len = mappings.length;
    for (let i3 = 0; i3 < len; i3++) {
      const mapping = mappings[i3];
      if (mapping.writable) {
        resource[mapping.server] = metadata[mapping.local];
      }
    }
    return JSON.stringify(resource);
  }
  function handlerCheck(cndn) {
    if (!cndn) {
      throw unknown();
    }
  }
  function metadataHandler(service, mappings) {
    function handler(xhr, text) {
      const metadata = fromResourceString(service, text, mappings);
      handlerCheck(metadata !== null);
      return metadata;
    }
    return handler;
  }
  function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
      let newErr;
      if (xhr.getStatus() === 401) {
        if (xhr.getErrorText().includes("Firebase App Check token is invalid")) {
          newErr = unauthorizedApp();
        } else {
          newErr = unauthenticated();
        }
      } else {
        if (xhr.getStatus() === 402) {
          newErr = quotaExceeded(location.bucket);
        } else {
          if (xhr.getStatus() === 403) {
            newErr = unauthorized(location.path);
          } else {
            newErr = err;
          }
        }
      }
      newErr.serverResponse = err.serverResponse;
      return newErr;
    }
    return errorHandler;
  }
  function determineContentType_(metadata, blob) {
    return metadata && metadata["contentType"] || blob && blob.type() || "application/octet-stream";
  }
  function metadataForUpload_(location, blob, metadata) {
    const metadataClone = Object.assign({}, metadata);
    metadataClone["fullPath"] = location.path;
    metadataClone["size"] = blob.size();
    if (!metadataClone["contentType"]) {
      metadataClone["contentType"] = determineContentType_(null, blob);
    }
    return metadataClone;
  }
  function multipartUpload(service, location, mappings, blob, metadata) {
    const urlPart = location.bucketOnlyServerUrl();
    const headers = {
      "X-Goog-Upload-Protocol": "multipart"
    };
    function genBoundary() {
      let str = "";
      for (let i3 = 0; i3 < 2; i3++) {
        str = str + Math.random().toString().slice(2);
      }
      return str;
    }
    const boundary = genBoundary();
    headers["Content-Type"] = "multipart/related; boundary=" + boundary;
    const metadata_ = metadataForUpload_(location, blob, metadata);
    const metadataString = toResourceString(metadata_, mappings);
    const preBlobPart = "--" + boundary + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + metadataString + "\r\n--" + boundary + "\r\nContent-Type: " + metadata_["contentType"] + "\r\n\r\n";
    const postBlobPart = "\r\n--" + boundary + "--";
    const body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) {
      throw cannotSliceBlob();
    }
    const urlParams = { name: metadata_["fullPath"] };
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = "POST";
    const timeout = service.maxUploadRetryTime;
    const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
  }
  function newTextConnection() {
    return textFactoryOverride ? textFactoryOverride() : new XhrTextConnection();
  }
  function uploadBytes$1(ref2, data, metadata) {
    ref2._throwIfRoot("uploadBytes");
    const requestInfo = multipartUpload(ref2.storage, ref2._location, getMappings(), new FbsBlob(data, true), metadata);
    return ref2.storage.makeRequestWithTokens(requestInfo, newTextConnection).then((finalMetadata) => {
      return {
        metadata: finalMetadata,
        ref: ref2
      };
    });
  }
  function _getChild$1(ref2, childPath) {
    const newPath = child(ref2._location.path, childPath);
    const location = new Location(ref2._location.bucket, newPath);
    return new Reference(ref2.storage, location);
  }
  function isUrl(path) {
    return /^[A-Za-z]+:\/\//.test(path);
  }
  function refFromURL(service, url) {
    return new Reference(service, url);
  }
  function refFromPath(ref2, path) {
    if (ref2 instanceof FirebaseStorageImpl) {
      const service = ref2;
      if (service._bucket == null) {
        throw noDefaultBucket();
      }
      const reference = new Reference(service, service._bucket);
      if (path != null) {
        return refFromPath(reference, path);
      } else {
        return reference;
      }
    } else {
      if (path !== void 0) {
        return _getChild$1(ref2, path);
      } else {
        return ref2;
      }
    }
  }
  function ref$1(serviceOrRef, pathOrUrl) {
    if (pathOrUrl && isUrl(pathOrUrl)) {
      if (serviceOrRef instanceof FirebaseStorageImpl) {
        return refFromURL(serviceOrRef, pathOrUrl);
      } else {
        throw invalidArgument("To use ref(service, url), the first argument must be a Storage instance.");
      }
    } else {
      return refFromPath(serviceOrRef, pathOrUrl);
    }
  }
  function extractBucket(host, config) {
    const bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];
    if (bucketString == null) {
      return null;
    }
    return Location.makeFromBucketSpec(bucketString, host);
  }
  function uploadBytes(ref2, data, metadata) {
    ref2 = getModularInstance(ref2);
    return uploadBytes$1(ref2, data, metadata);
  }
  function ref(serviceOrRef, pathOrUrl) {
    serviceOrRef = getModularInstance(serviceOrRef);
    return ref$1(serviceOrRef, pathOrUrl);
  }
  function getStorage(app = getApp(), bucketUrl) {
    app = getModularInstance(app);
    const storageProvider = _getProvider(app, STORAGE_TYPE);
    const storageInstance = storageProvider.getImmediate({
      identifier: bucketUrl
    });
    return storageInstance;
  }
  function factory(container, { instanceIdentifier: url }) {
    const app = container.getProvider("app").getImmediate();
    const authProvider = container.getProvider("auth-internal");
    const appCheckProvider = container.getProvider("app-check-internal");
    return new FirebaseStorageImpl(app, authProvider, appCheckProvider, url, SDK_VERSION);
  }
  function registerStorage() {
    _registerComponent(new Component(STORAGE_TYPE, factory, "PUBLIC").setMultipleInstances(true));
    registerVersion(name2, version2, "");
    registerVersion(name2, version2, "esm2017");
  }
  var DEFAULT_HOST, CONFIG_STORAGE_BUCKET_KEY, DEFAULT_MAX_OPERATION_RETRY_TIME, DEFAULT_MAX_UPLOAD_RETRY_TIME, StorageError, Location, FailRequest, ErrorCode, NetworkRequest, RequestEndStatus, StringFormat, StringData, DataURLParts, FbsBlob, Mapping, mappings_, RequestInfo, RESUMABLE_UPLOAD_CHUNK_SIZE, textFactoryOverride, XhrConnection, XhrTextConnection, Reference, FirebaseStorageImpl, name2, version2, STORAGE_TYPE;
  var init_index_esm20175 = __esm({
    "node_modules/@firebase/storage/dist/index.esm2017.js"() {
      init_index_esm20174();
      init_index_esm2017();
      init_index_esm20172();
      DEFAULT_HOST = "firebasestorage.googleapis.com";
      CONFIG_STORAGE_BUCKET_KEY = "storageBucket";
      DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1e3;
      DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1e3;
      StorageError = class extends FirebaseError {
        constructor(code, message) {
          super(prependCode(code), `Firebase Storage: ${message} (${prependCode(code)})`);
          this.customData = { serverResponse: null };
          this._baseMessage = this.message;
          Object.setPrototypeOf(this, StorageError.prototype);
        }
        _codeEquals(code) {
          return prependCode(code) === this.code;
        }
        get serverResponse() {
          return this.customData.serverResponse;
        }
        set serverResponse(serverResponse) {
          this.customData.serverResponse = serverResponse;
          if (this.customData.serverResponse) {
            this.message = `${this._baseMessage}
${this.customData.serverResponse}`;
          } else {
            this.message = this._baseMessage;
          }
        }
      };
      Location = class {
        constructor(bucket, path) {
          this.bucket = bucket;
          this.path_ = path;
        }
        get path() {
          return this.path_;
        }
        get isRoot() {
          return this.path.length === 0;
        }
        fullServerUrl() {
          const encode = encodeURIComponent;
          return "/b/" + encode(this.bucket) + "/o/" + encode(this.path);
        }
        bucketOnlyServerUrl() {
          const encode = encodeURIComponent;
          return "/b/" + encode(this.bucket) + "/o";
        }
        static makeFromBucketSpec(bucketString, host) {
          let bucketLocation;
          try {
            bucketLocation = Location.makeFromUrl(bucketString, host);
          } catch (e3) {
            return new Location(bucketString, "");
          }
          if (bucketLocation.path === "") {
            return bucketLocation;
          } else {
            throw invalidDefaultBucket(bucketString);
          }
        }
        static makeFromUrl(url, host) {
          let location = null;
          const bucketDomain = "([A-Za-z0-9.\\-_]+)";
          function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === "/") {
              loc.path_ = loc.path_.slice(0, -1);
            }
          }
          const gsPath = "(/(.*))?$";
          const gsRegex = new RegExp("^gs://" + bucketDomain + gsPath, "i");
          const gsIndices = { bucket: 1, path: 3 };
          function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
          }
          const version4 = "v[A-Za-z0-9_]+";
          const firebaseStorageHost = host.replace(/[.]/g, "\\.");
          const firebaseStoragePath = "(/([^?#]*).*)?$";
          const firebaseStorageRegExp = new RegExp(`^https?://${firebaseStorageHost}/${version4}/b/${bucketDomain}/o${firebaseStoragePath}`, "i");
          const firebaseStorageIndices = { bucket: 1, path: 3 };
          const cloudStorageHost = host === DEFAULT_HOST ? "(?:storage.googleapis.com|storage.cloud.google.com)" : host;
          const cloudStoragePath = "([^?#]*)";
          const cloudStorageRegExp = new RegExp(`^https?://${cloudStorageHost}/${bucketDomain}/${cloudStoragePath}`, "i");
          const cloudStorageIndices = { bucket: 1, path: 2 };
          const groups = [
            { regex: gsRegex, indices: gsIndices, postModify: gsModify },
            {
              regex: firebaseStorageRegExp,
              indices: firebaseStorageIndices,
              postModify: httpModify
            },
            {
              regex: cloudStorageRegExp,
              indices: cloudStorageIndices,
              postModify: httpModify
            }
          ];
          for (let i3 = 0; i3 < groups.length; i3++) {
            const group = groups[i3];
            const captures = group.regex.exec(url);
            if (captures) {
              const bucketValue = captures[group.indices.bucket];
              let pathValue = captures[group.indices.path];
              if (!pathValue) {
                pathValue = "";
              }
              location = new Location(bucketValue, pathValue);
              group.postModify(location);
              break;
            }
          }
          if (location == null) {
            throw invalidUrl(url);
          }
          return location;
        }
      };
      FailRequest = class {
        constructor(error) {
          this.promise_ = Promise.reject(error);
        }
        getPromise() {
          return this.promise_;
        }
        cancel(_appDelete = false) {
        }
      };
      (function(ErrorCode3) {
        ErrorCode3[ErrorCode3["NO_ERROR"] = 0] = "NO_ERROR";
        ErrorCode3[ErrorCode3["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
        ErrorCode3[ErrorCode3["ABORT"] = 2] = "ABORT";
      })(ErrorCode || (ErrorCode = {}));
      NetworkRequest = class {
        constructor(url_, method_, headers_, body_, successCodes_, additionalRetryCodes_, callback_, errorCallback_, timeout_, progressCallback_, connectionFactory_) {
          this.url_ = url_;
          this.method_ = method_;
          this.headers_ = headers_;
          this.body_ = body_;
          this.successCodes_ = successCodes_;
          this.additionalRetryCodes_ = additionalRetryCodes_;
          this.callback_ = callback_;
          this.errorCallback_ = errorCallback_;
          this.timeout_ = timeout_;
          this.progressCallback_ = progressCallback_;
          this.connectionFactory_ = connectionFactory_;
          this.pendingConnection_ = null;
          this.backoffId_ = null;
          this.canceled_ = false;
          this.appDelete_ = false;
          this.promise_ = new Promise((resolve, reject) => {
            this.resolve_ = resolve;
            this.reject_ = reject;
            this.start_();
          });
        }
        start_() {
          const doTheRequest = (backoffCallback, canceled2) => {
            if (canceled2) {
              backoffCallback(false, new RequestEndStatus(false, null, true));
              return;
            }
            const connection = this.connectionFactory_();
            this.pendingConnection_ = connection;
            const progressListener = (progressEvent) => {
              const loaded = progressEvent.loaded;
              const total = progressEvent.lengthComputable ? progressEvent.total : -1;
              if (this.progressCallback_ !== null) {
                this.progressCallback_(loaded, total);
              }
            };
            if (this.progressCallback_ !== null) {
              connection.addUploadProgressListener(progressListener);
            }
            connection.send(this.url_, this.method_, this.body_, this.headers_).then(() => {
              if (this.progressCallback_ !== null) {
                connection.removeUploadProgressListener(progressListener);
              }
              this.pendingConnection_ = null;
              const hitServer = connection.getErrorCode() === ErrorCode.NO_ERROR;
              const status = connection.getStatus();
              if (!hitServer || this.isRetryStatusCode_(status)) {
                const wasCanceled = connection.getErrorCode() === ErrorCode.ABORT;
                backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                return;
              }
              const successCode = this.successCodes_.indexOf(status) !== -1;
              backoffCallback(true, new RequestEndStatus(successCode, connection));
            });
          };
          const backoffDone = (requestWentThrough, status) => {
            const resolve = this.resolve_;
            const reject = this.reject_;
            const connection = status.connection;
            if (status.wasSuccessCode) {
              try {
                const result = this.callback_(connection, connection.getResponse());
                if (isJustDef(result)) {
                  resolve(result);
                } else {
                  resolve();
                }
              } catch (e3) {
                reject(e3);
              }
            } else {
              if (connection !== null) {
                const err = unknown();
                err.serverResponse = connection.getErrorText();
                if (this.errorCallback_) {
                  reject(this.errorCallback_(connection, err));
                } else {
                  reject(err);
                }
              } else {
                if (status.canceled) {
                  const err = this.appDelete_ ? appDeleted() : canceled();
                  reject(err);
                } else {
                  const err = retryLimitExceeded();
                  reject(err);
                }
              }
            }
          };
          if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
          } else {
            this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
          }
        }
        getPromise() {
          return this.promise_;
        }
        cancel(appDelete) {
          this.canceled_ = true;
          this.appDelete_ = appDelete || false;
          if (this.backoffId_ !== null) {
            stop(this.backoffId_);
          }
          if (this.pendingConnection_ !== null) {
            this.pendingConnection_.abort();
          }
        }
        isRetryStatusCode_(status) {
          const isFiveHundredCode = status >= 500 && status < 600;
          const extraRetryCodes = [
            408,
            429
          ];
          const isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
          const isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
          return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
        }
      };
      RequestEndStatus = class {
        constructor(wasSuccessCode, connection, canceled2) {
          this.wasSuccessCode = wasSuccessCode;
          this.connection = connection;
          this.canceled = !!canceled2;
        }
      };
      StringFormat = {
        RAW: "raw",
        BASE64: "base64",
        BASE64URL: "base64url",
        DATA_URL: "data_url"
      };
      StringData = class {
        constructor(data, contentType) {
          this.data = data;
          this.contentType = contentType || null;
        }
      };
      DataURLParts = class {
        constructor(dataURL) {
          this.base64 = false;
          this.contentType = null;
          const matches = dataURL.match(/^data:([^,]+)?,/);
          if (matches === null) {
            throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
          }
          const middle = matches[1] || null;
          if (middle != null) {
            this.base64 = endsWith(middle, ";base64");
            this.contentType = this.base64 ? middle.substring(0, middle.length - ";base64".length) : middle;
          }
          this.rest = dataURL.substring(dataURL.indexOf(",") + 1);
        }
      };
      FbsBlob = class {
        constructor(data, elideCopy) {
          let size = 0;
          let blobType = "";
          if (isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
          } else if (data instanceof ArrayBuffer) {
            if (elideCopy) {
              this.data_ = new Uint8Array(data);
            } else {
              this.data_ = new Uint8Array(data.byteLength);
              this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
          } else if (data instanceof Uint8Array) {
            if (elideCopy) {
              this.data_ = data;
            } else {
              this.data_ = new Uint8Array(data.length);
              this.data_.set(data);
            }
            size = data.length;
          }
          this.size_ = size;
          this.type_ = blobType;
        }
        size() {
          return this.size_;
        }
        type() {
          return this.type_;
        }
        slice(startByte, endByte) {
          if (isNativeBlob(this.data_)) {
            const realBlob = this.data_;
            const sliced = sliceBlob(realBlob, startByte, endByte);
            if (sliced === null) {
              return null;
            }
            return new FbsBlob(sliced);
          } else {
            const slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
          }
        }
        static getBlob(...args) {
          if (isNativeBlobDefined()) {
            const blobby = args.map((val) => {
              if (val instanceof FbsBlob) {
                return val.data_;
              } else {
                return val;
              }
            });
            return new FbsBlob(getBlob$1.apply(null, blobby));
          } else {
            const uint8Arrays = args.map((val) => {
              if (isString(val)) {
                return dataFromString(StringFormat.RAW, val).data;
              } else {
                return val.data_;
              }
            });
            let finalLength = 0;
            uint8Arrays.forEach((array) => {
              finalLength += array.byteLength;
            });
            const merged = new Uint8Array(finalLength);
            let index = 0;
            uint8Arrays.forEach((array) => {
              for (let i3 = 0; i3 < array.length; i3++) {
                merged[index++] = array[i3];
              }
            });
            return new FbsBlob(merged, true);
          }
        }
        uploadData() {
          return this.data_;
        }
      };
      Mapping = class {
        constructor(server, local, writable, xform) {
          this.server = server;
          this.local = local || server;
          this.writable = !!writable;
          this.xform = xform || noXform_;
        }
      };
      mappings_ = null;
      RequestInfo = class {
        constructor(url, method, handler, timeout) {
          this.url = url;
          this.method = method;
          this.handler = handler;
          this.timeout = timeout;
          this.urlParams = {};
          this.headers = {};
          this.body = null;
          this.errorHandler = null;
          this.progressCallback = null;
          this.successCodes = [200];
          this.additionalRetryCodes = [];
        }
      };
      RESUMABLE_UPLOAD_CHUNK_SIZE = 256 * 1024;
      textFactoryOverride = null;
      XhrConnection = class {
        constructor() {
          this.sent_ = false;
          this.xhr_ = new XMLHttpRequest();
          this.initXhr();
          this.errorCode_ = ErrorCode.NO_ERROR;
          this.sendPromise_ = new Promise((resolve) => {
            this.xhr_.addEventListener("abort", () => {
              this.errorCode_ = ErrorCode.ABORT;
              resolve();
            });
            this.xhr_.addEventListener("error", () => {
              this.errorCode_ = ErrorCode.NETWORK_ERROR;
              resolve();
            });
            this.xhr_.addEventListener("load", () => {
              resolve();
            });
          });
        }
        send(url, method, body, headers) {
          if (this.sent_) {
            throw internalError("cannot .send() more than once");
          }
          this.sent_ = true;
          this.xhr_.open(method, url, true);
          if (headers !== void 0) {
            for (const key in headers) {
              if (headers.hasOwnProperty(key)) {
                this.xhr_.setRequestHeader(key, headers[key].toString());
              }
            }
          }
          if (body !== void 0) {
            this.xhr_.send(body);
          } else {
            this.xhr_.send();
          }
          return this.sendPromise_;
        }
        getErrorCode() {
          if (!this.sent_) {
            throw internalError("cannot .getErrorCode() before sending");
          }
          return this.errorCode_;
        }
        getStatus() {
          if (!this.sent_) {
            throw internalError("cannot .getStatus() before sending");
          }
          try {
            return this.xhr_.status;
          } catch (e3) {
            return -1;
          }
        }
        getResponse() {
          if (!this.sent_) {
            throw internalError("cannot .getResponse() before sending");
          }
          return this.xhr_.response;
        }
        getErrorText() {
          if (!this.sent_) {
            throw internalError("cannot .getErrorText() before sending");
          }
          return this.xhr_.statusText;
        }
        abort() {
          this.xhr_.abort();
        }
        getResponseHeader(header) {
          return this.xhr_.getResponseHeader(header);
        }
        addUploadProgressListener(listener) {
          if (this.xhr_.upload != null) {
            this.xhr_.upload.addEventListener("progress", listener);
          }
        }
        removeUploadProgressListener(listener) {
          if (this.xhr_.upload != null) {
            this.xhr_.upload.removeEventListener("progress", listener);
          }
        }
      };
      XhrTextConnection = class extends XhrConnection {
        initXhr() {
          this.xhr_.responseType = "text";
        }
      };
      Reference = class {
        constructor(_service, location) {
          this._service = _service;
          if (location instanceof Location) {
            this._location = location;
          } else {
            this._location = Location.makeFromUrl(location, _service.host);
          }
        }
        toString() {
          return "gs://" + this._location.bucket + "/" + this._location.path;
        }
        _newRef(service, location) {
          return new Reference(service, location);
        }
        get root() {
          const location = new Location(this._location.bucket, "");
          return this._newRef(this._service, location);
        }
        get bucket() {
          return this._location.bucket;
        }
        get fullPath() {
          return this._location.path;
        }
        get name() {
          return lastComponent(this._location.path);
        }
        get storage() {
          return this._service;
        }
        get parent() {
          const newPath = parent(this._location.path);
          if (newPath === null) {
            return null;
          }
          const location = new Location(this._location.bucket, newPath);
          return new Reference(this._service, location);
        }
        _throwIfRoot(name4) {
          if (this._location.path === "") {
            throw invalidRootOperation(name4);
          }
        }
      };
      FirebaseStorageImpl = class {
        constructor(app, _authProvider, _appCheckProvider, _url, _firebaseVersion) {
          this.app = app;
          this._authProvider = _authProvider;
          this._appCheckProvider = _appCheckProvider;
          this._url = _url;
          this._firebaseVersion = _firebaseVersion;
          this._bucket = null;
          this._host = DEFAULT_HOST;
          this._protocol = "https";
          this._appId = null;
          this._deleted = false;
          this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
          this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
          this._requests = /* @__PURE__ */ new Set();
          if (_url != null) {
            this._bucket = Location.makeFromBucketSpec(_url, this._host);
          } else {
            this._bucket = extractBucket(this._host, this.app.options);
          }
        }
        get host() {
          return this._host;
        }
        set host(host) {
          this._host = host;
          if (this._url != null) {
            this._bucket = Location.makeFromBucketSpec(this._url, host);
          } else {
            this._bucket = extractBucket(host, this.app.options);
          }
        }
        get maxUploadRetryTime() {
          return this._maxUploadRetryTime;
        }
        set maxUploadRetryTime(time) {
          validateNumber("time", 0, Number.POSITIVE_INFINITY, time);
          this._maxUploadRetryTime = time;
        }
        get maxOperationRetryTime() {
          return this._maxOperationRetryTime;
        }
        set maxOperationRetryTime(time) {
          validateNumber("time", 0, Number.POSITIVE_INFINITY, time);
          this._maxOperationRetryTime = time;
        }
        async _getAuthToken() {
          if (this._overrideAuthToken) {
            return this._overrideAuthToken;
          }
          const auth = this._authProvider.getImmediate({ optional: true });
          if (auth) {
            const tokenData = await auth.getToken();
            if (tokenData !== null) {
              return tokenData.accessToken;
            }
          }
          return null;
        }
        async _getAppCheckToken() {
          const appCheck = this._appCheckProvider.getImmediate({ optional: true });
          if (appCheck) {
            const result = await appCheck.getToken();
            return result.token;
          }
          return null;
        }
        _delete() {
          if (!this._deleted) {
            this._deleted = true;
            this._requests.forEach((request) => request.cancel());
            this._requests.clear();
          }
          return Promise.resolve();
        }
        _makeStorageReference(loc) {
          return new Reference(this, loc);
        }
        _makeRequest(requestInfo, requestFactory, authToken, appCheckToken) {
          if (!this._deleted) {
            const request = makeRequest(requestInfo, this._appId, authToken, appCheckToken, requestFactory, this._firebaseVersion);
            this._requests.add(request);
            request.getPromise().then(() => this._requests.delete(request), () => this._requests.delete(request));
            return request;
          } else {
            return new FailRequest(appDeleted());
          }
        }
        async makeRequestWithTokens(requestInfo, requestFactory) {
          const [authToken, appCheckToken] = await Promise.all([
            this._getAuthToken(),
            this._getAppCheckToken()
          ]);
          return this._makeRequest(requestInfo, requestFactory, authToken, appCheckToken).getPromise();
        }
      };
      name2 = "@firebase/storage";
      version2 = "0.9.6";
      STORAGE_TYPE = "storage";
      registerStorage();
    }
  });

  // node_modules/firebase/storage/dist/index.esm.js
  var init_index_esm = __esm({
    "node_modules/firebase/storage/dist/index.esm.js"() {
      init_index_esm20175();
    }
  });

  // node_modules/firebase/app/dist/index.esm.js
  var name3, version3;
  var init_index_esm2 = __esm({
    "node_modules/firebase/app/dist/index.esm.js"() {
      init_index_esm20174();
      init_index_esm20174();
      name3 = "firebase";
      version3 = "9.8.1";
      registerVersion(name3, version3, "app");
    }
  });

  // node_modules/@firebase/webchannel-wrapper/dist/index.esm2017.js
  function aa() {
  }
  function ba(a3) {
    var b3 = typeof a3;
    b3 = b3 != "object" ? b3 : a3 ? Array.isArray(a3) ? "array" : b3 : "null";
    return b3 == "array" || b3 == "object" && typeof a3.length == "number";
  }
  function p2(a3) {
    var b3 = typeof a3;
    return b3 == "object" && a3 != null || b3 == "function";
  }
  function da(a3) {
    return Object.prototype.hasOwnProperty.call(a3, ea) && a3[ea] || (a3[ea] = ++fa);
  }
  function ha(a3, b3, c3) {
    return a3.call.apply(a3.bind, arguments);
  }
  function ia(a3, b3, c3) {
    if (!a3)
      throw Error();
    if (2 < arguments.length) {
      var d2 = Array.prototype.slice.call(arguments, 2);
      return function() {
        var e3 = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e3, d2);
        return a3.apply(b3, e3);
      };
    }
    return function() {
      return a3.apply(b3, arguments);
    };
  }
  function q(a3, b3, c3) {
    Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? q = ha : q = ia;
    return q.apply(null, arguments);
  }
  function ja(a3, b3) {
    var c3 = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d2 = c3.slice();
      d2.push.apply(d2, arguments);
      return a3.apply(this, d2);
    };
  }
  function t3(a3, b3) {
    function c3() {
    }
    c3.prototype = b3.prototype;
    a3.Z = b3.prototype;
    a3.prototype = new c3();
    a3.prototype.constructor = a3;
    a3.Vb = function(d2, e3, f3) {
      for (var h2 = Array(arguments.length - 2), n2 = 2; n2 < arguments.length; n2++)
        h2[n2 - 2] = arguments[n2];
      return b3.prototype[e3].apply(d2, h2);
    };
  }
  function v3() {
    this.s = this.s;
    this.o = this.o;
  }
  function oa(a3) {
    a: {
      var b3 = pa;
      const c3 = a3.length, d2 = typeof a3 === "string" ? a3.split("") : a3;
      for (let e3 = 0; e3 < c3; e3++)
        if (e3 in d2 && b3.call(void 0, d2[e3], e3, a3)) {
          b3 = e3;
          break a;
        }
      b3 = -1;
    }
    return 0 > b3 ? null : typeof a3 === "string" ? a3.charAt(b3) : a3[b3];
  }
  function qa(a3) {
    return Array.prototype.concat.apply([], arguments);
  }
  function ra(a3) {
    const b3 = a3.length;
    if (0 < b3) {
      const c3 = Array(b3);
      for (let d2 = 0; d2 < b3; d2++)
        c3[d2] = a3[d2];
      return c3;
    }
    return [];
  }
  function sa(a3) {
    return /^[\s\xa0]*$/.test(a3);
  }
  function w3(a3, b3) {
    return a3.indexOf(b3) != -1;
  }
  function ua(a3, b3) {
    return a3 < b3 ? -1 : a3 > b3 ? 1 : 0;
  }
  function xa(a3, b3, c3) {
    for (const d2 in a3)
      b3.call(c3, a3[d2], d2, a3);
  }
  function ya(a3) {
    const b3 = {};
    for (const c3 in a3)
      b3[c3] = a3[c3];
    return b3;
  }
  function Aa(a3, b3) {
    let c3, d2;
    for (let e3 = 1; e3 < arguments.length; e3++) {
      d2 = arguments[e3];
      for (c3 in d2)
        a3[c3] = d2[c3];
      for (let f3 = 0; f3 < za.length; f3++)
        c3 = za[f3], Object.prototype.hasOwnProperty.call(d2, c3) && (a3[c3] = d2[c3]);
    }
  }
  function Ca(a3) {
    Ca[" "](a3);
    return a3;
  }
  function Fa(a3) {
    var b3 = Ga;
    return Object.prototype.hasOwnProperty.call(b3, 9) ? b3[9] : b3[9] = a3(9);
  }
  function Ma() {
    var a3 = l3.document;
    return a3 ? a3.documentMode : void 0;
  }
  function Ra() {
    return Fa(function() {
      let a3 = 0;
      const b3 = ta(String(Na)).split("."), c3 = ta("9").split("."), d2 = Math.max(b3.length, c3.length);
      for (let h2 = 0; a3 == 0 && h2 < d2; h2++) {
        var e3 = b3[h2] || "", f3 = c3[h2] || "";
        do {
          e3 = /(\d*)(\D*)(.*)/.exec(e3) || ["", "", "", ""];
          f3 = /(\d*)(\D*)(.*)/.exec(f3) || ["", "", "", ""];
          if (e3[0].length == 0 && f3[0].length == 0)
            break;
          a3 = ua(e3[1].length == 0 ? 0 : parseInt(e3[1], 10), f3[1].length == 0 ? 0 : parseInt(f3[1], 10)) || ua(e3[2].length == 0, f3[2].length == 0) || ua(e3[2], f3[2]);
          e3 = e3[3];
          f3 = f3[3];
        } while (a3 == 0);
      }
      return 0 <= a3;
    });
  }
  function z2(a3, b3) {
    this.type = a3;
    this.g = this.target = b3;
    this.defaultPrevented = false;
  }
  function A2(a3, b3) {
    z2.call(this, a3 ? a3.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.i = null;
    if (a3) {
      var c3 = this.type = a3.type, d2 = a3.changedTouches && a3.changedTouches.length ? a3.changedTouches[0] : null;
      this.target = a3.target || a3.srcElement;
      this.g = b3;
      if (b3 = a3.relatedTarget) {
        if (Ka) {
          a: {
            try {
              Ca(b3.nodeName);
              var e3 = true;
              break a;
            } catch (f3) {
            }
            e3 = false;
          }
          e3 || (b3 = null);
        }
      } else
        c3 == "mouseover" ? b3 = a3.fromElement : c3 == "mouseout" && (b3 = a3.toElement);
      this.relatedTarget = b3;
      d2 ? (this.clientX = d2.clientX !== void 0 ? d2.clientX : d2.pageX, this.clientY = d2.clientY !== void 0 ? d2.clientY : d2.pageY, this.screenX = d2.screenX || 0, this.screenY = d2.screenY || 0) : (this.clientX = a3.clientX !== void 0 ? a3.clientX : a3.pageX, this.clientY = a3.clientY !== void 0 ? a3.clientY : a3.pageY, this.screenX = a3.screenX || 0, this.screenY = a3.screenY || 0);
      this.button = a3.button;
      this.key = a3.key || "";
      this.ctrlKey = a3.ctrlKey;
      this.altKey = a3.altKey;
      this.shiftKey = a3.shiftKey;
      this.metaKey = a3.metaKey;
      this.pointerId = a3.pointerId || 0;
      this.pointerType = typeof a3.pointerType === "string" ? a3.pointerType : Wa[a3.pointerType] || "";
      this.state = a3.state;
      this.i = a3;
      a3.defaultPrevented && A2.Z.h.call(this);
    }
  }
  function Ya(a3, b3, c3, d2, e3) {
    this.listener = a3;
    this.proxy = null;
    this.src = b3;
    this.type = c3;
    this.capture = !!d2;
    this.ia = e3;
    this.key = ++Xa;
    this.ca = this.fa = false;
  }
  function Za(a3) {
    a3.ca = true;
    a3.listener = null;
    a3.proxy = null;
    a3.src = null;
    a3.ia = null;
  }
  function $a(a3) {
    this.src = a3;
    this.g = {};
    this.h = 0;
  }
  function bb(a3, b3) {
    var c3 = b3.type;
    if (c3 in a3.g) {
      var d2 = a3.g[c3], e3 = ma(d2, b3), f3;
      (f3 = 0 <= e3) && Array.prototype.splice.call(d2, e3, 1);
      f3 && (Za(b3), a3.g[c3].length == 0 && (delete a3.g[c3], a3.h--));
    }
  }
  function ab(a3, b3, c3, d2) {
    for (var e3 = 0; e3 < a3.length; ++e3) {
      var f3 = a3[e3];
      if (!f3.ca && f3.listener == b3 && f3.capture == !!c3 && f3.ia == d2)
        return e3;
    }
    return -1;
  }
  function fb(a3, b3, c3, d2, e3) {
    if (d2 && d2.once)
      return gb(a3, b3, c3, d2, e3);
    if (Array.isArray(b3)) {
      for (var f3 = 0; f3 < b3.length; f3++)
        fb(a3, b3[f3], c3, d2, e3);
      return null;
    }
    c3 = hb(c3);
    return a3 && a3[B] ? a3.N(b3, c3, p2(d2) ? !!d2.capture : !!d2, e3) : ib(a3, b3, c3, false, d2, e3);
  }
  function ib(a3, b3, c3, d2, e3, f3) {
    if (!b3)
      throw Error("Invalid event type");
    var h2 = p2(e3) ? !!e3.capture : !!e3, n2 = jb(a3);
    n2 || (a3[cb] = n2 = new $a(a3));
    c3 = n2.add(b3, c3, d2, h2, f3);
    if (c3.proxy)
      return c3;
    d2 = kb();
    c3.proxy = d2;
    d2.src = a3;
    d2.listener = c3;
    if (a3.addEventListener)
      Va || (e3 = h2), e3 === void 0 && (e3 = false), a3.addEventListener(b3.toString(), d2, e3);
    else if (a3.attachEvent)
      a3.attachEvent(lb(b3.toString()), d2);
    else if (a3.addListener && a3.removeListener)
      a3.addListener(d2);
    else
      throw Error("addEventListener and attachEvent are unavailable.");
    return c3;
  }
  function kb() {
    function a3(c3) {
      return b3.call(a3.src, a3.listener, c3);
    }
    var b3 = mb;
    return a3;
  }
  function gb(a3, b3, c3, d2, e3) {
    if (Array.isArray(b3)) {
      for (var f3 = 0; f3 < b3.length; f3++)
        gb(a3, b3[f3], c3, d2, e3);
      return null;
    }
    c3 = hb(c3);
    return a3 && a3[B] ? a3.O(b3, c3, p2(d2) ? !!d2.capture : !!d2, e3) : ib(a3, b3, c3, true, d2, e3);
  }
  function nb(a3, b3, c3, d2, e3) {
    if (Array.isArray(b3))
      for (var f3 = 0; f3 < b3.length; f3++)
        nb(a3, b3[f3], c3, d2, e3);
    else
      (d2 = p2(d2) ? !!d2.capture : !!d2, c3 = hb(c3), a3 && a3[B]) ? (a3 = a3.i, b3 = String(b3).toString(), b3 in a3.g && (f3 = a3.g[b3], c3 = ab(f3, c3, d2, e3), -1 < c3 && (Za(f3[c3]), Array.prototype.splice.call(f3, c3, 1), f3.length == 0 && (delete a3.g[b3], a3.h--)))) : a3 && (a3 = jb(a3)) && (b3 = a3.g[b3.toString()], a3 = -1, b3 && (a3 = ab(b3, c3, d2, e3)), (c3 = -1 < a3 ? b3[a3] : null) && ob(c3));
  }
  function ob(a3) {
    if (typeof a3 !== "number" && a3 && !a3.ca) {
      var b3 = a3.src;
      if (b3 && b3[B])
        bb(b3.i, a3);
      else {
        var c3 = a3.type, d2 = a3.proxy;
        b3.removeEventListener ? b3.removeEventListener(c3, d2, a3.capture) : b3.detachEvent ? b3.detachEvent(lb(c3), d2) : b3.addListener && b3.removeListener && b3.removeListener(d2);
        (c3 = jb(b3)) ? (bb(c3, a3), c3.h == 0 && (c3.src = null, b3[cb] = null)) : Za(a3);
      }
    }
  }
  function lb(a3) {
    return a3 in db ? db[a3] : db[a3] = "on" + a3;
  }
  function mb(a3, b3) {
    if (a3.ca)
      a3 = true;
    else {
      b3 = new A2(b3, this);
      var c3 = a3.listener, d2 = a3.ia || a3.src;
      a3.fa && ob(a3);
      a3 = c3.call(d2, b3);
    }
    return a3;
  }
  function jb(a3) {
    a3 = a3[cb];
    return a3 instanceof $a ? a3 : null;
  }
  function hb(a3) {
    if (typeof a3 === "function")
      return a3;
    a3[pb] || (a3[pb] = function(b3) {
      return a3.handleEvent(b3);
    });
    return a3[pb];
  }
  function C2() {
    v3.call(this);
    this.i = new $a(this);
    this.P = this;
    this.I = null;
  }
  function D(a3, b3) {
    var c3, d2 = a3.I;
    if (d2)
      for (c3 = []; d2; d2 = d2.I)
        c3.push(d2);
    a3 = a3.P;
    d2 = b3.type || b3;
    if (typeof b3 === "string")
      b3 = new z2(b3, a3);
    else if (b3 instanceof z2)
      b3.target = b3.target || a3;
    else {
      var e3 = b3;
      b3 = new z2(d2, a3);
      Aa(b3, e3);
    }
    e3 = true;
    if (c3)
      for (var f3 = c3.length - 1; 0 <= f3; f3--) {
        var h2 = b3.g = c3[f3];
        e3 = qb(h2, d2, true, b3) && e3;
      }
    h2 = b3.g = a3;
    e3 = qb(h2, d2, true, b3) && e3;
    e3 = qb(h2, d2, false, b3) && e3;
    if (c3)
      for (f3 = 0; f3 < c3.length; f3++)
        h2 = b3.g = c3[f3], e3 = qb(h2, d2, false, b3) && e3;
  }
  function qb(a3, b3, c3, d2) {
    b3 = a3.i.g[String(b3)];
    if (!b3)
      return true;
    b3 = b3.concat();
    for (var e3 = true, f3 = 0; f3 < b3.length; ++f3) {
      var h2 = b3[f3];
      if (h2 && !h2.ca && h2.capture == c3) {
        var n2 = h2.listener, u3 = h2.ia || h2.src;
        h2.fa && bb(a3.i, h2);
        e3 = n2.call(u3, d2) !== false && e3;
      }
    }
    return e3 && !d2.defaultPrevented;
  }
  function sb() {
    var a3 = tb;
    let b3 = null;
    a3.g && (b3 = a3.g, a3.g = a3.g.next, a3.g || (a3.h = null), b3.next = null);
    return b3;
  }
  function yb(a3) {
    l3.setTimeout(() => {
      throw a3;
    }, 0);
  }
  function zb(a3, b3) {
    Ab || Bb();
    Cb || (Ab(), Cb = true);
    tb.add(a3, b3);
  }
  function Bb() {
    var a3 = l3.Promise.resolve(void 0);
    Ab = function() {
      a3.then(Db);
    };
  }
  function Db() {
    for (var a3; a3 = sb(); ) {
      try {
        a3.h.call(a3.g);
      } catch (c3) {
        yb(c3);
      }
      var b3 = vb;
      b3.j(a3);
      100 > b3.h && (b3.h++, a3.next = b3.g, b3.g = a3);
    }
    Cb = false;
  }
  function Eb(a3, b3) {
    C2.call(this);
    this.h = a3 || 1;
    this.g = b3 || l3;
    this.j = q(this.kb, this);
    this.l = Date.now();
  }
  function Fb(a3) {
    a3.da = false;
    a3.S && (a3.g.clearTimeout(a3.S), a3.S = null);
  }
  function Gb(a3, b3, c3) {
    if (typeof a3 === "function")
      c3 && (a3 = q(a3, c3));
    else if (a3 && typeof a3.handleEvent == "function")
      a3 = q(a3.handleEvent, a3);
    else
      throw Error("Invalid listener argument");
    return 2147483647 < Number(b3) ? -1 : l3.setTimeout(a3, b3 || 0);
  }
  function Hb(a3) {
    a3.g = Gb(() => {
      a3.g = null;
      a3.i && (a3.i = false, Hb(a3));
    }, a3.j);
    const b3 = a3.h;
    a3.h = null;
    a3.m.apply(null, b3);
  }
  function E(a3) {
    v3.call(this);
    this.h = a3;
    this.g = {};
  }
  function Kb(a3, b3, c3, d2) {
    Array.isArray(c3) || (c3 && (Jb[0] = c3.toString()), c3 = Jb);
    for (var e3 = 0; e3 < c3.length; e3++) {
      var f3 = fb(b3, c3[e3], d2 || a3.handleEvent, false, a3.h || a3);
      if (!f3)
        break;
      a3.g[f3.key] = f3;
    }
  }
  function Lb(a3) {
    xa(a3.g, function(b3, c3) {
      this.g.hasOwnProperty(c3) && ob(b3);
    }, a3);
    a3.g = {};
  }
  function Mb() {
    this.g = true;
  }
  function Nb(a3, b3, c3, d2, e3, f3) {
    a3.info(function() {
      if (a3.g)
        if (f3) {
          var h2 = "";
          for (var n2 = f3.split("&"), u3 = 0; u3 < n2.length; u3++) {
            var m3 = n2[u3].split("=");
            if (1 < m3.length) {
              var r3 = m3[0];
              m3 = m3[1];
              var G2 = r3.split("_");
              h2 = 2 <= G2.length && G2[1] == "type" ? h2 + (r3 + "=" + m3 + "&") : h2 + (r3 + "=redacted&");
            }
          }
        } else
          h2 = null;
      else
        h2 = f3;
      return "XMLHTTP REQ (" + d2 + ") [attempt " + e3 + "]: " + b3 + "\n" + c3 + "\n" + h2;
    });
  }
  function Ob(a3, b3, c3, d2, e3, f3, h2) {
    a3.info(function() {
      return "XMLHTTP RESP (" + d2 + ") [ attempt " + e3 + "]: " + b3 + "\n" + c3 + "\n" + f3 + " " + h2;
    });
  }
  function F(a3, b3, c3, d2) {
    a3.info(function() {
      return "XMLHTTP TEXT (" + b3 + "): " + Pb(a3, c3) + (d2 ? " " + d2 : "");
    });
  }
  function Qb(a3, b3) {
    a3.info(function() {
      return "TIMEOUT: " + b3;
    });
  }
  function Pb(a3, b3) {
    if (!a3.g)
      return b3;
    if (!b3)
      return null;
    try {
      var c3 = JSON.parse(b3);
      if (c3) {
        for (a3 = 0; a3 < c3.length; a3++)
          if (Array.isArray(c3[a3])) {
            var d2 = c3[a3];
            if (!(2 > d2.length)) {
              var e3 = d2[1];
              if (Array.isArray(e3) && !(1 > e3.length)) {
                var f3 = e3[0];
                if (f3 != "noop" && f3 != "stop" && f3 != "close")
                  for (var h2 = 1; h2 < e3.length; h2++)
                    e3[h2] = "";
              }
            }
          }
      }
      return rb(c3);
    } catch (n2) {
      return b3;
    }
  }
  function Sb() {
    return Rb = Rb || new C2();
  }
  function Tb(a3) {
    z2.call(this, H2.Ma, a3);
  }
  function I2(a3) {
    const b3 = Sb();
    D(b3, new Tb(b3, a3));
  }
  function Ub(a3, b3) {
    z2.call(this, H2.STAT_EVENT, a3);
    this.stat = b3;
  }
  function J(a3) {
    const b3 = Sb();
    D(b3, new Ub(b3, a3));
  }
  function Vb(a3, b3) {
    z2.call(this, H2.Na, a3);
    this.size = b3;
  }
  function K(a3, b3) {
    if (typeof a3 !== "function")
      throw Error("Fn must not be null and must be a function");
    return l3.setTimeout(function() {
      a3();
    }, b3);
  }
  function Yb() {
  }
  function Zb(a3) {
    return a3.h || (a3.h = a3.i());
  }
  function $b() {
  }
  function ac() {
    z2.call(this, "d");
  }
  function bc() {
    z2.call(this, "c");
  }
  function dc() {
  }
  function M2(a3, b3, c3, d2) {
    this.l = a3;
    this.j = b3;
    this.m = c3;
    this.X = d2 || 1;
    this.V = new E(this);
    this.P = ec;
    a3 = Ja ? 125 : void 0;
    this.W = new Eb(a3);
    this.H = null;
    this.i = false;
    this.s = this.A = this.v = this.K = this.F = this.Y = this.B = null;
    this.D = [];
    this.g = null;
    this.C = 0;
    this.o = this.u = null;
    this.N = -1;
    this.I = false;
    this.O = 0;
    this.L = null;
    this.aa = this.J = this.$ = this.U = false;
    this.h = new fc();
  }
  function fc() {
    this.i = null;
    this.g = "";
    this.h = false;
  }
  function ic(a3, b3, c3) {
    a3.K = 1;
    a3.v = jc(N2(b3));
    a3.s = c3;
    a3.U = true;
    kc(a3, null);
  }
  function kc(a3, b3) {
    a3.F = Date.now();
    lc(a3);
    a3.A = N2(a3.v);
    var c3 = a3.A, d2 = a3.X;
    Array.isArray(d2) || (d2 = [String(d2)]);
    mc(c3.h, "t", d2);
    a3.C = 0;
    c3 = a3.l.H;
    a3.h = new fc();
    a3.g = nc(a3.l, c3 ? b3 : null, !a3.s);
    0 < a3.O && (a3.L = new Ib(q(a3.Ia, a3, a3.g), a3.O));
    Kb(a3.V, a3.g, "readystatechange", a3.gb);
    b3 = a3.H ? ya(a3.H) : {};
    a3.s ? (a3.u || (a3.u = "POST"), b3["Content-Type"] = "application/x-www-form-urlencoded", a3.g.ea(a3.A, a3.u, a3.s, b3)) : (a3.u = "GET", a3.g.ea(a3.A, a3.u, null, b3));
    I2(1);
    Nb(a3.j, a3.u, a3.A, a3.m, a3.X, a3.s);
  }
  function qc(a3) {
    return a3.g ? a3.u == "GET" && a3.K != 2 && a3.l.Ba : false;
  }
  function tc(a3, b3, c3) {
    let d2 = true, e3;
    for (; !a3.I && a3.C < c3.length; )
      if (e3 = vc(a3, c3), e3 == hc) {
        b3 == 4 && (a3.o = 4, J(14), d2 = false);
        F(a3.j, a3.m, null, "[Incomplete Response]");
        break;
      } else if (e3 == gc) {
        a3.o = 4;
        J(15);
        F(a3.j, a3.m, c3, "[Invalid Chunk]");
        d2 = false;
        break;
      } else
        F(a3.j, a3.m, e3, null), sc(a3, e3);
    qc(a3) && e3 != hc && e3 != gc && (a3.h.g = "", a3.C = 0);
    b3 != 4 || c3.length != 0 || a3.h.h || (a3.o = 1, J(16), d2 = false);
    a3.i = a3.i && d2;
    d2 ? 0 < c3.length && !a3.aa && (a3.aa = true, b3 = a3.l, b3.g == a3 && b3.$ && !b3.L && (b3.h.info("Great, no buffering proxy detected. Bytes received: " + c3.length), wc(b3), b3.L = true, J(11))) : (F(a3.j, a3.m, c3, "[Invalid Chunked Response]"), P2(a3), rc(a3));
  }
  function vc(a3, b3) {
    var c3 = a3.C, d2 = b3.indexOf("\n", c3);
    if (d2 == -1)
      return hc;
    c3 = Number(b3.substring(c3, d2));
    if (isNaN(c3))
      return gc;
    d2 += 1;
    if (d2 + c3 > b3.length)
      return hc;
    b3 = b3.substr(d2, c3);
    a3.C = d2 + c3;
    return b3;
  }
  function lc(a3) {
    a3.Y = Date.now() + a3.P;
    xc(a3, a3.P);
  }
  function xc(a3, b3) {
    if (a3.B != null)
      throw Error("WatchDog timer not null");
    a3.B = K(q(a3.eb, a3), b3);
  }
  function pc(a3) {
    a3.B && (l3.clearTimeout(a3.B), a3.B = null);
  }
  function rc(a3) {
    a3.l.G == 0 || a3.I || uc(a3.l, a3);
  }
  function P2(a3) {
    pc(a3);
    var b3 = a3.L;
    b3 && typeof b3.na == "function" && b3.na();
    a3.L = null;
    Fb(a3.W);
    Lb(a3.V);
    a3.g && (b3 = a3.g, a3.g = null, b3.abort(), b3.na());
  }
  function sc(a3, b3) {
    try {
      var c3 = a3.l;
      if (c3.G != 0 && (c3.g == a3 || yc(c3.i, a3))) {
        if (c3.I = a3.N, !a3.J && yc(c3.i, a3) && c3.G == 3) {
          try {
            var d2 = c3.Ca.g.parse(b3);
          } catch (m3) {
            d2 = null;
          }
          if (Array.isArray(d2) && d2.length == 3) {
            var e3 = d2;
            if (e3[0] == 0)
              a: {
                if (!c3.u) {
                  if (c3.g)
                    if (c3.g.F + 3e3 < a3.F)
                      zc(c3), Ac(c3);
                    else
                      break a;
                  Bc(c3);
                  J(18);
                }
              }
            else
              c3.ta = e3[1], 0 < c3.ta - c3.U && 37500 > e3[2] && c3.N && c3.A == 0 && !c3.v && (c3.v = K(q(c3.ab, c3), 6e3));
            if (1 >= Cc(c3.i) && c3.ka) {
              try {
                c3.ka();
              } catch (m3) {
              }
              c3.ka = void 0;
            }
          } else
            Q(c3, 11);
        } else if ((a3.J || c3.g == a3) && zc(c3), !sa(b3))
          for (e3 = c3.Ca.g.parse(b3), b3 = 0; b3 < e3.length; b3++) {
            let m3 = e3[b3];
            c3.U = m3[0];
            m3 = m3[1];
            if (c3.G == 2)
              if (m3[0] == "c") {
                c3.J = m3[1];
                c3.la = m3[2];
                const r3 = m3[3];
                r3 != null && (c3.ma = r3, c3.h.info("VER=" + c3.ma));
                const G2 = m3[4];
                G2 != null && (c3.za = G2, c3.h.info("SVER=" + c3.za));
                const Da = m3[5];
                Da != null && typeof Da === "number" && 0 < Da && (d2 = 1.5 * Da, c3.K = d2, c3.h.info("backChannelRequestTimeoutMs_=" + d2));
                d2 = c3;
                const ca2 = a3.g;
                if (ca2) {
                  const Ea = ca2.g ? ca2.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                  if (Ea) {
                    var f3 = d2.i;
                    !f3.g && (w3(Ea, "spdy") || w3(Ea, "quic") || w3(Ea, "h2")) && (f3.j = f3.l, f3.g = /* @__PURE__ */ new Set(), f3.h && (Dc(f3, f3.h), f3.h = null));
                  }
                  if (d2.D) {
                    const xb = ca2.g ? ca2.g.getResponseHeader("X-HTTP-Session-Id") : null;
                    xb && (d2.sa = xb, R(d2.F, d2.D, xb));
                  }
                }
                c3.G = 3;
                c3.j && c3.j.xa();
                c3.$ && (c3.O = Date.now() - a3.F, c3.h.info("Handshake RTT: " + c3.O + "ms"));
                d2 = c3;
                var h2 = a3;
                d2.oa = Ec(d2, d2.H ? d2.la : null, d2.W);
                if (h2.J) {
                  Fc(d2.i, h2);
                  var n2 = h2, u3 = d2.K;
                  u3 && n2.setTimeout(u3);
                  n2.B && (pc(n2), lc(n2));
                  d2.g = h2;
                } else
                  Gc(d2);
                0 < c3.l.length && Hc(c3);
              } else
                m3[0] != "stop" && m3[0] != "close" || Q(c3, 7);
            else
              c3.G == 3 && (m3[0] == "stop" || m3[0] == "close" ? m3[0] == "stop" ? Q(c3, 7) : Ic(c3) : m3[0] != "noop" && c3.j && c3.j.wa(m3), c3.A = 0);
          }
      }
      I2(4);
    } catch (m3) {
    }
  }
  function Jc(a3) {
    if (a3.R && typeof a3.R == "function")
      return a3.R();
    if (typeof a3 === "string")
      return a3.split("");
    if (ba(a3)) {
      for (var b3 = [], c3 = a3.length, d2 = 0; d2 < c3; d2++)
        b3.push(a3[d2]);
      return b3;
    }
    b3 = [];
    c3 = 0;
    for (d2 in a3)
      b3[c3++] = a3[d2];
    return b3;
  }
  function Kc(a3, b3) {
    if (a3.forEach && typeof a3.forEach == "function")
      a3.forEach(b3, void 0);
    else if (ba(a3) || typeof a3 === "string")
      na(a3, b3, void 0);
    else {
      if (a3.T && typeof a3.T == "function")
        var c3 = a3.T();
      else if (a3.R && typeof a3.R == "function")
        c3 = void 0;
      else if (ba(a3) || typeof a3 === "string") {
        c3 = [];
        for (var d2 = a3.length, e3 = 0; e3 < d2; e3++)
          c3.push(e3);
      } else
        for (e3 in c3 = [], d2 = 0, a3)
          c3[d2++] = e3;
      d2 = Jc(a3);
      e3 = d2.length;
      for (var f3 = 0; f3 < e3; f3++)
        b3.call(void 0, d2[f3], c3 && c3[f3], a3);
    }
  }
  function S2(a3, b3) {
    this.h = {};
    this.g = [];
    this.i = 0;
    var c3 = arguments.length;
    if (1 < c3) {
      if (c3 % 2)
        throw Error("Uneven number of arguments");
      for (var d2 = 0; d2 < c3; d2 += 2)
        this.set(arguments[d2], arguments[d2 + 1]);
    } else if (a3)
      if (a3 instanceof S2)
        for (c3 = a3.T(), d2 = 0; d2 < c3.length; d2++)
          this.set(c3[d2], a3.get(c3[d2]));
      else
        for (d2 in a3)
          this.set(d2, a3[d2]);
  }
  function Lc(a3) {
    if (a3.i != a3.g.length) {
      for (var b3 = 0, c3 = 0; b3 < a3.g.length; ) {
        var d2 = a3.g[b3];
        T2(a3.h, d2) && (a3.g[c3++] = d2);
        b3++;
      }
      a3.g.length = c3;
    }
    if (a3.i != a3.g.length) {
      var e3 = {};
      for (c3 = b3 = 0; b3 < a3.g.length; )
        d2 = a3.g[b3], T2(e3, d2) || (a3.g[c3++] = d2, e3[d2] = 1), b3++;
      a3.g.length = c3;
    }
  }
  function T2(a3, b3) {
    return Object.prototype.hasOwnProperty.call(a3, b3);
  }
  function Nc(a3, b3) {
    if (a3) {
      a3 = a3.split("&");
      for (var c3 = 0; c3 < a3.length; c3++) {
        var d2 = a3[c3].indexOf("="), e3 = null;
        if (0 <= d2) {
          var f3 = a3[c3].substring(0, d2);
          e3 = a3[c3].substring(d2 + 1);
        } else
          f3 = a3[c3];
        b3(f3, e3 ? decodeURIComponent(e3.replace(/\+/g, " ")) : "");
      }
    }
  }
  function U(a3, b3) {
    this.i = this.s = this.j = "";
    this.m = null;
    this.o = this.l = "";
    this.g = false;
    if (a3 instanceof U) {
      this.g = b3 !== void 0 ? b3 : a3.g;
      Oc(this, a3.j);
      this.s = a3.s;
      Pc(this, a3.i);
      Qc(this, a3.m);
      this.l = a3.l;
      b3 = a3.h;
      var c3 = new Rc();
      c3.i = b3.i;
      b3.g && (c3.g = new S2(b3.g), c3.h = b3.h);
      Sc(this, c3);
      this.o = a3.o;
    } else
      a3 && (c3 = String(a3).match(Mc)) ? (this.g = !!b3, Oc(this, c3[1] || "", true), this.s = Tc(c3[2] || ""), Pc(this, c3[3] || "", true), Qc(this, c3[4]), this.l = Tc(c3[5] || "", true), Sc(this, c3[6] || "", true), this.o = Tc(c3[7] || "")) : (this.g = !!b3, this.h = new Rc(null, this.g));
  }
  function N2(a3) {
    return new U(a3);
  }
  function Oc(a3, b3, c3) {
    a3.j = c3 ? Tc(b3, true) : b3;
    a3.j && (a3.j = a3.j.replace(/:$/, ""));
  }
  function Pc(a3, b3, c3) {
    a3.i = c3 ? Tc(b3, true) : b3;
  }
  function Qc(a3, b3) {
    if (b3) {
      b3 = Number(b3);
      if (isNaN(b3) || 0 > b3)
        throw Error("Bad port number " + b3);
      a3.m = b3;
    } else
      a3.m = null;
  }
  function Sc(a3, b3, c3) {
    b3 instanceof Rc ? (a3.h = b3, Zc(a3.h, a3.g)) : (c3 || (b3 = Uc(b3, $c)), a3.h = new Rc(b3, a3.g));
  }
  function R(a3, b3, c3) {
    a3.h.set(b3, c3);
  }
  function jc(a3) {
    R(a3, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
    return a3;
  }
  function ad(a3) {
    return a3 instanceof U ? N2(a3) : new U(a3, void 0);
  }
  function bd(a3, b3, c3, d2) {
    var e3 = new U(null, void 0);
    a3 && Oc(e3, a3);
    b3 && Pc(e3, b3);
    c3 && Qc(e3, c3);
    d2 && (e3.l = d2);
    return e3;
  }
  function Tc(a3, b3) {
    return a3 ? b3 ? decodeURI(a3.replace(/%25/g, "%2525")) : decodeURIComponent(a3) : "";
  }
  function Uc(a3, b3, c3) {
    return typeof a3 === "string" ? (a3 = encodeURI(a3).replace(b3, cd), c3 && (a3 = a3.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a3) : null;
  }
  function cd(a3) {
    a3 = a3.charCodeAt(0);
    return "%" + (a3 >> 4 & 15).toString(16) + (a3 & 15).toString(16);
  }
  function Rc(a3, b3) {
    this.h = this.g = null;
    this.i = a3 || null;
    this.j = !!b3;
  }
  function V(a3) {
    a3.g || (a3.g = new S2(), a3.h = 0, a3.i && Nc(a3.i, function(b3, c3) {
      a3.add(decodeURIComponent(b3.replace(/\+/g, " ")), c3);
    }));
  }
  function dd(a3, b3) {
    V(a3);
    b3 = W(a3, b3);
    T2(a3.g.h, b3) && (a3.i = null, a3.h -= a3.g.get(b3).length, a3 = a3.g, T2(a3.h, b3) && (delete a3.h[b3], a3.i--, a3.g.length > 2 * a3.i && Lc(a3)));
  }
  function ed(a3, b3) {
    V(a3);
    b3 = W(a3, b3);
    return T2(a3.g.h, b3);
  }
  function mc(a3, b3, c3) {
    dd(a3, b3);
    0 < c3.length && (a3.i = null, a3.g.set(W(a3, b3), ra(c3)), a3.h += c3.length);
  }
  function W(a3, b3) {
    b3 = String(b3);
    a3.j && (b3 = b3.toLowerCase());
    return b3;
  }
  function Zc(a3, b3) {
    b3 && !a3.j && (V(a3), a3.i = null, a3.g.forEach(function(c3, d2) {
      var e3 = d2.toLowerCase();
      d2 != e3 && (dd(this, d2), mc(this, e3, c3));
    }, a3));
    a3.j = b3;
  }
  function gd(a3) {
    this.l = a3 || hd;
    l3.PerformanceNavigationTiming ? (a3 = l3.performance.getEntriesByType("navigation"), a3 = 0 < a3.length && (a3[0].nextHopProtocol == "hq" || a3[0].nextHopProtocol == "h2")) : a3 = !!(l3.g && l3.g.Ea && l3.g.Ea() && l3.g.Ea().Zb);
    this.j = a3 ? this.l : 1;
    this.g = null;
    1 < this.j && (this.g = /* @__PURE__ */ new Set());
    this.h = null;
    this.i = [];
  }
  function id(a3) {
    return a3.h ? true : a3.g ? a3.g.size >= a3.j : false;
  }
  function Cc(a3) {
    return a3.h ? 1 : a3.g ? a3.g.size : 0;
  }
  function yc(a3, b3) {
    return a3.h ? a3.h == b3 : a3.g ? a3.g.has(b3) : false;
  }
  function Dc(a3, b3) {
    a3.g ? a3.g.add(b3) : a3.h = b3;
  }
  function Fc(a3, b3) {
    a3.h && a3.h == b3 ? a3.h = null : a3.g && a3.g.has(b3) && a3.g.delete(b3);
  }
  function jd(a3) {
    if (a3.h != null)
      return a3.i.concat(a3.h.D);
    if (a3.g != null && a3.g.size !== 0) {
      let b3 = a3.i;
      for (const c3 of a3.g.values())
        b3 = b3.concat(c3.D);
      return b3;
    }
    return ra(a3.i);
  }
  function kd() {
  }
  function ld() {
    this.g = new kd();
  }
  function md(a3, b3, c3) {
    const d2 = c3 || "";
    try {
      Kc(a3, function(e3, f3) {
        let h2 = e3;
        p2(e3) && (h2 = rb(e3));
        b3.push(d2 + f3 + "=" + encodeURIComponent(h2));
      });
    } catch (e3) {
      throw b3.push(d2 + "type=" + encodeURIComponent("_badmap")), e3;
    }
  }
  function nd(a3, b3) {
    const c3 = new Mb();
    if (l3.Image) {
      const d2 = new Image();
      d2.onload = ja(od, c3, d2, "TestLoadImage: loaded", true, b3);
      d2.onerror = ja(od, c3, d2, "TestLoadImage: error", false, b3);
      d2.onabort = ja(od, c3, d2, "TestLoadImage: abort", false, b3);
      d2.ontimeout = ja(od, c3, d2, "TestLoadImage: timeout", false, b3);
      l3.setTimeout(function() {
        if (d2.ontimeout)
          d2.ontimeout();
      }, 1e4);
      d2.src = a3;
    } else
      b3(false);
  }
  function od(a3, b3, c3, d2, e3) {
    try {
      b3.onload = null, b3.onerror = null, b3.onabort = null, b3.ontimeout = null, e3(d2);
    } catch (f3) {
    }
  }
  function pd(a3) {
    this.l = a3.$b || null;
    this.j = a3.ib || false;
  }
  function qd(a3, b3) {
    C2.call(this);
    this.D = a3;
    this.u = b3;
    this.m = void 0;
    this.readyState = rd;
    this.status = 0;
    this.responseType = this.responseText = this.response = this.statusText = "";
    this.onreadystatechange = null;
    this.v = new Headers();
    this.h = null;
    this.C = "GET";
    this.B = "";
    this.g = false;
    this.A = this.j = this.l = null;
  }
  function ud(a3) {
    a3.j.read().then(a3.Sa.bind(a3)).catch(a3.ha.bind(a3));
  }
  function td(a3) {
    a3.readyState = 4;
    a3.l = null;
    a3.j = null;
    a3.A = null;
    sd(a3);
  }
  function sd(a3) {
    a3.onreadystatechange && a3.onreadystatechange.call(a3);
  }
  function X(a3) {
    C2.call(this);
    this.headers = new S2();
    this.u = a3 || null;
    this.h = false;
    this.C = this.g = null;
    this.H = "";
    this.m = 0;
    this.j = "";
    this.l = this.F = this.v = this.D = false;
    this.B = 0;
    this.A = null;
    this.J = wd;
    this.K = this.L = false;
  }
  function Bd(a3) {
    return y3 && Ra() && typeof a3.timeout === "number" && a3.ontimeout !== void 0;
  }
  function pa(a3) {
    return a3.toLowerCase() == "content-type";
  }
  function zd(a3, b3) {
    a3.h = false;
    a3.g && (a3.l = true, a3.g.abort(), a3.l = false);
    a3.j = b3;
    a3.m = 5;
    Cd(a3);
    Dd(a3);
  }
  function Cd(a3) {
    a3.D || (a3.D = true, D(a3, "complete"), D(a3, "error"));
  }
  function Ed(a3) {
    if (a3.h && typeof goog != "undefined" && (!a3.C[1] || O2(a3) != 4 || a3.ba() != 2)) {
      if (a3.v && O2(a3) == 4)
        Gb(a3.Fa, 0, a3);
      else if (D(a3, "readystatechange"), O2(a3) == 4) {
        a3.h = false;
        try {
          const n2 = a3.ba();
          a:
            switch (n2) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var b3 = true;
                break a;
              default:
                b3 = false;
            }
          var c3;
          if (!(c3 = b3)) {
            var d2;
            if (d2 = n2 === 0) {
              var e3 = String(a3.H).match(Mc)[1] || null;
              if (!e3 && l3.self && l3.self.location) {
                var f3 = l3.self.location.protocol;
                e3 = f3.substr(0, f3.length - 1);
              }
              d2 = !xd.test(e3 ? e3.toLowerCase() : "");
            }
            c3 = d2;
          }
          if (c3)
            D(a3, "complete"), D(a3, "success");
          else {
            a3.m = 6;
            try {
              var h2 = 2 < O2(a3) ? a3.g.statusText : "";
            } catch (u3) {
              h2 = "";
            }
            a3.j = h2 + " [" + a3.ba() + "]";
            Cd(a3);
          }
        } finally {
          Dd(a3);
        }
      }
    }
  }
  function Dd(a3, b3) {
    if (a3.g) {
      Ad(a3);
      const c3 = a3.g, d2 = a3.C[0] ? aa : null;
      a3.g = null;
      a3.C = null;
      b3 || D(a3, "ready");
      try {
        c3.onreadystatechange = d2;
      } catch (e3) {
      }
    }
  }
  function Ad(a3) {
    a3.g && a3.K && (a3.g.ontimeout = null);
    a3.A && (l3.clearTimeout(a3.A), a3.A = null);
  }
  function O2(a3) {
    return a3.g ? a3.g.readyState : 0;
  }
  function oc(a3) {
    try {
      if (!a3.g)
        return null;
      if ("response" in a3.g)
        return a3.g.response;
      switch (a3.J) {
        case wd:
        case "text":
          return a3.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in a3.g)
            return a3.g.mozResponseArrayBuffer;
      }
      return null;
    } catch (b3) {
      return null;
    }
  }
  function Fd(a3) {
    let b3 = "";
    xa(a3, function(c3, d2) {
      b3 += d2;
      b3 += ":";
      b3 += c3;
      b3 += "\r\n";
    });
    return b3;
  }
  function Gd(a3, b3, c3) {
    a: {
      for (d2 in c3) {
        var d2 = false;
        break a;
      }
      d2 = true;
    }
    d2 || (c3 = Fd(c3), typeof a3 === "string" ? c3 != null && encodeURIComponent(String(c3)) : R(a3, b3, c3));
  }
  function Hd(a3, b3, c3) {
    return c3 && c3.internalChannelParams ? c3.internalChannelParams[a3] || b3 : b3;
  }
  function Id(a3) {
    this.za = 0;
    this.l = [];
    this.h = new Mb();
    this.la = this.oa = this.F = this.W = this.g = this.sa = this.D = this.aa = this.o = this.P = this.s = null;
    this.Za = this.V = 0;
    this.Xa = Hd("failFast", false, a3);
    this.N = this.v = this.u = this.m = this.j = null;
    this.X = true;
    this.I = this.ta = this.U = -1;
    this.Y = this.A = this.C = 0;
    this.Pa = Hd("baseRetryDelayMs", 5e3, a3);
    this.$a = Hd("retryDelaySeedMs", 1e4, a3);
    this.Ya = Hd("forwardChannelMaxRetries", 2, a3);
    this.ra = Hd("forwardChannelRequestTimeoutMs", 2e4, a3);
    this.qa = a3 && a3.xmlHttpFactory || void 0;
    this.Ba = a3 && a3.Yb || false;
    this.K = void 0;
    this.H = a3 && a3.supportsCrossDomainXhr || false;
    this.J = "";
    this.i = new gd(a3 && a3.concurrentRequestLimit);
    this.Ca = new ld();
    this.ja = a3 && a3.fastHandshake || false;
    this.Ra = a3 && a3.Wb || false;
    a3 && a3.Aa && this.h.Aa();
    a3 && a3.forceLongPolling && (this.X = false);
    this.$ = !this.ja && this.X && a3 && a3.detectBufferingProxy || false;
    this.ka = void 0;
    this.O = 0;
    this.L = false;
    this.B = null;
    this.Wa = !a3 || a3.Xb !== false;
  }
  function Ic(a3) {
    Jd(a3);
    if (a3.G == 3) {
      var b3 = a3.V++, c3 = N2(a3.F);
      R(c3, "SID", a3.J);
      R(c3, "RID", b3);
      R(c3, "TYPE", "terminate");
      Kd(a3, c3);
      b3 = new M2(a3, a3.h, b3, void 0);
      b3.K = 2;
      b3.v = jc(N2(c3));
      c3 = false;
      l3.navigator && l3.navigator.sendBeacon && (c3 = l3.navigator.sendBeacon(b3.v.toString(), ""));
      !c3 && l3.Image && (new Image().src = b3.v, c3 = true);
      c3 || (b3.g = nc(b3.l, null), b3.g.ea(b3.v));
      b3.F = Date.now();
      lc(b3);
    }
    Ld(a3);
  }
  function Ac(a3) {
    a3.g && (wc(a3), a3.g.cancel(), a3.g = null);
  }
  function Jd(a3) {
    Ac(a3);
    a3.u && (l3.clearTimeout(a3.u), a3.u = null);
    zc(a3);
    a3.i.cancel();
    a3.m && (typeof a3.m === "number" && l3.clearTimeout(a3.m), a3.m = null);
  }
  function Md(a3, b3) {
    a3.l.push(new fd(a3.Za++, b3));
    a3.G == 3 && Hc(a3);
  }
  function Hc(a3) {
    id(a3.i) || a3.m || (a3.m = true, zb(a3.Ha, a3), a3.C = 0);
  }
  function Nd(a3, b3) {
    if (Cc(a3.i) >= a3.i.j - (a3.m ? 1 : 0))
      return false;
    if (a3.m)
      return a3.l = b3.D.concat(a3.l), true;
    if (a3.G == 1 || a3.G == 2 || a3.C >= (a3.Xa ? 0 : a3.Ya))
      return false;
    a3.m = K(q(a3.Ha, a3, b3), Od(a3, a3.C));
    a3.C++;
    return true;
  }
  function Qd(a3, b3) {
    var c3;
    b3 ? c3 = b3.m : c3 = a3.V++;
    const d2 = N2(a3.F);
    R(d2, "SID", a3.J);
    R(d2, "RID", c3);
    R(d2, "AID", a3.U);
    Kd(a3, d2);
    a3.o && a3.s && Gd(d2, a3.o, a3.s);
    c3 = new M2(a3, a3.h, c3, a3.C + 1);
    a3.o === null && (c3.H = a3.s);
    b3 && (a3.l = b3.D.concat(a3.l));
    b3 = Pd(a3, c3, 1e3);
    c3.setTimeout(Math.round(0.5 * a3.ra) + Math.round(0.5 * a3.ra * Math.random()));
    Dc(a3.i, c3);
    ic(c3, d2, b3);
  }
  function Kd(a3, b3) {
    a3.j && Kc({}, function(c3, d2) {
      R(b3, d2, c3);
    });
  }
  function Pd(a3, b3, c3) {
    c3 = Math.min(a3.l.length, c3);
    var d2 = a3.j ? q(a3.j.Oa, a3.j, a3) : null;
    a: {
      var e3 = a3.l;
      let f3 = -1;
      for (; ; ) {
        const h2 = ["count=" + c3];
        f3 == -1 ? 0 < c3 ? (f3 = e3[0].h, h2.push("ofs=" + f3)) : f3 = 0 : h2.push("ofs=" + f3);
        let n2 = true;
        for (let u3 = 0; u3 < c3; u3++) {
          let m3 = e3[u3].h;
          const r3 = e3[u3].g;
          m3 -= f3;
          if (0 > m3)
            f3 = Math.max(0, e3[u3].h - 100), n2 = false;
          else
            try {
              md(r3, h2, "req" + m3 + "_");
            } catch (G2) {
              d2 && d2(r3);
            }
        }
        if (n2) {
          d2 = h2.join("&");
          break a;
        }
      }
    }
    a3 = a3.l.splice(0, c3);
    b3.D = a3;
    return d2;
  }
  function Gc(a3) {
    a3.g || a3.u || (a3.Y = 1, zb(a3.Ga, a3), a3.A = 0);
  }
  function Bc(a3) {
    if (a3.g || a3.u || 3 <= a3.A)
      return false;
    a3.Y++;
    a3.u = K(q(a3.Ga, a3), Od(a3, a3.A));
    a3.A++;
    return true;
  }
  function wc(a3) {
    a3.B != null && (l3.clearTimeout(a3.B), a3.B = null);
  }
  function Rd(a3) {
    a3.g = new M2(a3, a3.h, "rpc", a3.Y);
    a3.o === null && (a3.g.H = a3.s);
    a3.g.O = 0;
    var b3 = N2(a3.oa);
    R(b3, "RID", "rpc");
    R(b3, "SID", a3.J);
    R(b3, "CI", a3.N ? "0" : "1");
    R(b3, "AID", a3.U);
    Kd(a3, b3);
    R(b3, "TYPE", "xmlhttp");
    a3.o && a3.s && Gd(b3, a3.o, a3.s);
    a3.K && a3.g.setTimeout(a3.K);
    var c3 = a3.g;
    a3 = a3.la;
    c3.K = 1;
    c3.v = jc(N2(b3));
    c3.s = null;
    c3.U = true;
    kc(c3, a3);
  }
  function zc(a3) {
    a3.v != null && (l3.clearTimeout(a3.v), a3.v = null);
  }
  function uc(a3, b3) {
    var c3 = null;
    if (a3.g == b3) {
      zc(a3);
      wc(a3);
      a3.g = null;
      var d2 = 2;
    } else if (yc(a3.i, b3))
      c3 = b3.D, Fc(a3.i, b3), d2 = 1;
    else
      return;
    a3.I = b3.N;
    if (a3.G != 0) {
      if (b3.i)
        if (d2 == 1) {
          c3 = b3.s ? b3.s.length : 0;
          b3 = Date.now() - b3.F;
          var e3 = a3.C;
          d2 = Sb();
          D(d2, new Vb(d2, c3, b3, e3));
          Hc(a3);
        } else
          Gc(a3);
      else if (e3 = b3.o, e3 == 3 || e3 == 0 && 0 < a3.I || !(d2 == 1 && Nd(a3, b3) || d2 == 2 && Bc(a3)))
        switch (c3 && 0 < c3.length && (b3 = a3.i, b3.i = b3.i.concat(c3)), e3) {
          case 1:
            Q(a3, 5);
            break;
          case 4:
            Q(a3, 10);
            break;
          case 3:
            Q(a3, 6);
            break;
          default:
            Q(a3, 2);
        }
    }
  }
  function Od(a3, b3) {
    let c3 = a3.Pa + Math.floor(Math.random() * a3.$a);
    a3.j || (c3 *= 2);
    return c3 * b3;
  }
  function Q(a3, b3) {
    a3.h.info("Error code " + b3);
    if (b3 == 2) {
      var c3 = null;
      a3.j && (c3 = null);
      var d2 = q(a3.jb, a3);
      c3 || (c3 = new U("//www.google.com/images/cleardot.gif"), l3.location && l3.location.protocol == "http" || Oc(c3, "https"), jc(c3));
      nd(c3.toString(), d2);
    } else
      J(2);
    a3.G = 0;
    a3.j && a3.j.va(b3);
    Ld(a3);
    Jd(a3);
  }
  function Ld(a3) {
    a3.G = 0;
    a3.I = -1;
    if (a3.j) {
      if (jd(a3.i).length != 0 || a3.l.length != 0)
        a3.i.i.length = 0, ra(a3.l), a3.l.length = 0;
      a3.j.ua();
    }
  }
  function Ec(a3, b3, c3) {
    let d2 = ad(c3);
    if (d2.i != "")
      b3 && Pc(d2, b3 + "." + d2.i), Qc(d2, d2.m);
    else {
      const e3 = l3.location;
      d2 = bd(e3.protocol, b3 ? b3 + "." + e3.hostname : e3.hostname, +e3.port, c3);
    }
    a3.aa && xa(a3.aa, function(e3, f3) {
      R(d2, f3, e3);
    });
    b3 = a3.D;
    c3 = a3.sa;
    b3 && c3 && R(d2, b3, c3);
    R(d2, "VER", a3.ma);
    Kd(a3, d2);
    return d2;
  }
  function nc(a3, b3, c3) {
    if (b3 && !a3.H)
      throw Error("Can't create secondary domain capable XhrIo object.");
    b3 = c3 && a3.Ba && !a3.qa ? new X(new pd({ ib: true })) : new X(a3.qa);
    b3.L = a3.H;
    return b3;
  }
  function Sd() {
  }
  function Td() {
    if (y3 && !(10 <= Number(Ua)))
      throw Error("Environmental error: no available transport.");
  }
  function Y(a3, b3) {
    C2.call(this);
    this.g = new Id(b3);
    this.l = a3;
    this.h = b3 && b3.messageUrlParams || null;
    a3 = b3 && b3.messageHeaders || null;
    b3 && b3.clientProtocolHeaderRequired && (a3 ? a3["X-Client-Protocol"] = "webchannel" : a3 = { "X-Client-Protocol": "webchannel" });
    this.g.s = a3;
    a3 = b3 && b3.initMessageHeaders || null;
    b3 && b3.messageContentType && (a3 ? a3["X-WebChannel-Content-Type"] = b3.messageContentType : a3 = { "X-WebChannel-Content-Type": b3.messageContentType });
    b3 && b3.ya && (a3 ? a3["X-WebChannel-Client-Profile"] = b3.ya : a3 = { "X-WebChannel-Client-Profile": b3.ya });
    this.g.P = a3;
    (a3 = b3 && b3.httpHeadersOverwriteParam) && !sa(a3) && (this.g.o = a3);
    this.A = b3 && b3.supportsCrossDomainXhr || false;
    this.v = b3 && b3.sendRawJson || false;
    (b3 = b3 && b3.httpSessionIdParam) && !sa(b3) && (this.g.D = b3, a3 = this.h, a3 !== null && b3 in a3 && (a3 = this.h, b3 in a3 && delete a3[b3]));
    this.j = new Z(this);
  }
  function Ud(a3) {
    ac.call(this);
    var b3 = a3.__sm__;
    if (b3) {
      a: {
        for (const c3 in b3) {
          a3 = c3;
          break a;
        }
        a3 = void 0;
      }
      if (this.i = a3)
        a3 = this.i, b3 = b3 !== null && a3 in b3 ? b3[a3] : void 0;
      this.data = b3;
    } else
      this.data = a3;
  }
  function Vd() {
    bc.call(this);
    this.status = 1;
  }
  function Z(a3) {
    this.g = a3;
  }
  var commonjsGlobal, esm, k3, goog, l3, ea, fa, ka, la, ma, na, ta, x3, va, wa2, za, Ha, y3, Ia, Ja, Ka, La, Na, Oa, Pa2, Qa, Ga, Sa, Ta, Ua, Va, Wa, B, Xa, cb, db, pb, rb, ub, vb, wb, Ab, Cb, tb, Ib, Jb, H2, Rb, Wb, Xb, L2, cc, ec, gc, hc, Mc, Vc, Xc, Wc, $c, Yc, fd, hd, rd, vd, wd, xd, yd, createWebChannelTransport, getStatEventTarget, ErrorCode2, EventType, Event, Stat, FetchXmlHttpFactory, WebChannel, XhrIo;
  var init_index_esm20176 = __esm({
    "node_modules/@firebase/webchannel-wrapper/dist/index.esm2017.js"() {
      commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
      esm = {};
      goog = goog || {};
      l3 = commonjsGlobal || self;
      ea = "closure_uid_" + (1e9 * Math.random() >>> 0);
      fa = 0;
      ka = 0;
      la = {};
      v3.prototype.s = false;
      v3.prototype.na = function() {
        if (!this.s && (this.s = true, this.M(), ka != 0)) {
          var a3 = da(this);
          delete la[a3];
        }
      };
      v3.prototype.M = function() {
        if (this.o)
          for (; this.o.length; )
            this.o.shift()();
      };
      ma = Array.prototype.indexOf ? function(a3, b3) {
        return Array.prototype.indexOf.call(a3, b3, void 0);
      } : function(a3, b3) {
        if (typeof a3 === "string")
          return typeof b3 !== "string" || b3.length != 1 ? -1 : a3.indexOf(b3, 0);
        for (let c3 = 0; c3 < a3.length; c3++)
          if (c3 in a3 && a3[c3] === b3)
            return c3;
        return -1;
      };
      na = Array.prototype.forEach ? function(a3, b3, c3) {
        Array.prototype.forEach.call(a3, b3, c3);
      } : function(a3, b3, c3) {
        const d2 = a3.length, e3 = typeof a3 === "string" ? a3.split("") : a3;
        for (let f3 = 0; f3 < d2; f3++)
          f3 in e3 && b3.call(c3, e3[f3], f3, a3);
      };
      ta = String.prototype.trim ? function(a3) {
        return a3.trim();
      } : function(a3) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a3)[1];
      };
      a: {
        va = l3.navigator;
        if (va) {
          wa2 = va.userAgent;
          if (wa2) {
            x3 = wa2;
            break a;
          }
        }
        x3 = "";
      }
      za = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
      Ca[" "] = aa;
      Ha = w3(x3, "Opera");
      y3 = w3(x3, "Trident") || w3(x3, "MSIE");
      Ia = w3(x3, "Edge");
      Ja = Ia || y3;
      Ka = w3(x3, "Gecko") && !(w3(x3.toLowerCase(), "webkit") && !w3(x3, "Edge")) && !(w3(x3, "Trident") || w3(x3, "MSIE")) && !w3(x3, "Edge");
      La = w3(x3.toLowerCase(), "webkit") && !w3(x3, "Edge");
      a: {
        Oa = "", Pa2 = function() {
          var a3 = x3;
          if (Ka)
            return /rv:([^\);]+)(\)|;)/.exec(a3);
          if (Ia)
            return /Edge\/([\d\.]+)/.exec(a3);
          if (y3)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a3);
          if (La)
            return /WebKit\/(\S+)/.exec(a3);
          if (Ha)
            return /(?:Version)[ \/]?(\S+)/.exec(a3);
        }();
        Pa2 && (Oa = Pa2 ? Pa2[1] : "");
        if (y3) {
          Qa = Ma();
          if (Qa != null && Qa > parseFloat(Oa)) {
            Na = String(Qa);
            break a;
          }
        }
        Na = Oa;
      }
      Ga = {};
      if (l3.document && y3) {
        Ta = Ma();
        Sa = Ta ? Ta : parseInt(Na, 10) || void 0;
      } else
        Sa = void 0;
      Ua = Sa;
      Va = function() {
        if (!l3.addEventListener || !Object.defineProperty)
          return false;
        var a3 = false, b3 = Object.defineProperty({}, "passive", { get: function() {
          a3 = true;
        } });
        try {
          l3.addEventListener("test", aa, b3), l3.removeEventListener("test", aa, b3);
        } catch (c3) {
        }
        return a3;
      }();
      z2.prototype.h = function() {
        this.defaultPrevented = true;
      };
      t3(A2, z2);
      Wa = { 2: "touch", 3: "pen", 4: "mouse" };
      A2.prototype.h = function() {
        A2.Z.h.call(this);
        var a3 = this.i;
        a3.preventDefault ? a3.preventDefault() : a3.returnValue = false;
      };
      B = "closure_listenable_" + (1e6 * Math.random() | 0);
      Xa = 0;
      $a.prototype.add = function(a3, b3, c3, d2, e3) {
        var f3 = a3.toString();
        a3 = this.g[f3];
        a3 || (a3 = this.g[f3] = [], this.h++);
        var h2 = ab(a3, b3, d2, e3);
        -1 < h2 ? (b3 = a3[h2], c3 || (b3.fa = false)) : (b3 = new Ya(b3, this.src, f3, !!d2, e3), b3.fa = c3, a3.push(b3));
        return b3;
      };
      cb = "closure_lm_" + (1e6 * Math.random() | 0);
      db = {};
      pb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
      t3(C2, v3);
      C2.prototype[B] = true;
      C2.prototype.removeEventListener = function(a3, b3, c3, d2) {
        nb(this, a3, b3, c3, d2);
      };
      C2.prototype.M = function() {
        C2.Z.M.call(this);
        if (this.i) {
          var a3 = this.i, c3;
          for (c3 in a3.g) {
            for (var d2 = a3.g[c3], e3 = 0; e3 < d2.length; e3++)
              Za(d2[e3]);
            delete a3.g[c3];
            a3.h--;
          }
        }
        this.I = null;
      };
      C2.prototype.N = function(a3, b3, c3, d2) {
        return this.i.add(String(a3), b3, false, c3, d2);
      };
      C2.prototype.O = function(a3, b3, c3, d2) {
        return this.i.add(String(a3), b3, true, c3, d2);
      };
      rb = l3.JSON.stringify;
      ub = class {
        constructor() {
          this.h = this.g = null;
        }
        add(a3, b3) {
          const c3 = vb.get();
          c3.set(a3, b3);
          this.h ? this.h.next = c3 : this.g = c3;
          this.h = c3;
        }
      };
      vb = new class {
        constructor(a3, b3) {
          this.i = a3;
          this.j = b3;
          this.h = 0;
          this.g = null;
        }
        get() {
          let a3;
          0 < this.h ? (this.h--, a3 = this.g, this.g = a3.next, a3.next = null) : a3 = this.i();
          return a3;
        }
      }(() => new wb(), (a3) => a3.reset());
      wb = class {
        constructor() {
          this.next = this.g = this.h = null;
        }
        set(a3, b3) {
          this.h = a3;
          this.g = b3;
          this.next = null;
        }
        reset() {
          this.next = this.g = this.h = null;
        }
      };
      Cb = false;
      tb = new ub();
      t3(Eb, C2);
      k3 = Eb.prototype;
      k3.da = false;
      k3.S = null;
      k3.kb = function() {
        if (this.da) {
          var a3 = Date.now() - this.l;
          0 < a3 && a3 < 0.8 * this.h ? this.S = this.g.setTimeout(this.j, this.h - a3) : (this.S && (this.g.clearTimeout(this.S), this.S = null), D(this, "tick"), this.da && (Fb(this), this.start()));
        }
      };
      k3.start = function() {
        this.da = true;
        this.S || (this.S = this.g.setTimeout(this.j, this.h), this.l = Date.now());
      };
      k3.M = function() {
        Eb.Z.M.call(this);
        Fb(this);
        delete this.g;
      };
      Ib = class extends v3 {
        constructor(a3, b3) {
          super();
          this.m = a3;
          this.j = b3;
          this.h = null;
          this.i = false;
          this.g = null;
        }
        l(a3) {
          this.h = arguments;
          this.g ? this.i = true : Hb(this);
        }
        M() {
          super.M();
          this.g && (l3.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
        }
      };
      t3(E, v3);
      Jb = [];
      E.prototype.M = function() {
        E.Z.M.call(this);
        Lb(this);
      };
      E.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
      };
      Mb.prototype.Aa = function() {
        this.g = false;
      };
      Mb.prototype.info = function() {
      };
      H2 = {};
      Rb = null;
      H2.Ma = "serverreachability";
      t3(Tb, z2);
      H2.STAT_EVENT = "statevent";
      t3(Ub, z2);
      H2.Na = "timingevent";
      t3(Vb, z2);
      Wb = { NO_ERROR: 0, lb: 1, yb: 2, xb: 3, sb: 4, wb: 5, zb: 6, Ja: 7, TIMEOUT: 8, Cb: 9 };
      Xb = { qb: "complete", Mb: "success", Ka: "error", Ja: "abort", Eb: "ready", Fb: "readystatechange", TIMEOUT: "timeout", Ab: "incrementaldata", Db: "progress", tb: "downloadprogress", Ub: "uploadprogress" };
      Yb.prototype.h = null;
      L2 = { OPEN: "a", pb: "b", Ka: "c", Bb: "d" };
      t3(ac, z2);
      t3(bc, z2);
      t3(dc, Yb);
      dc.prototype.g = function() {
        return new XMLHttpRequest();
      };
      dc.prototype.i = function() {
        return {};
      };
      cc = new dc();
      ec = 45e3;
      gc = {};
      hc = {};
      k3 = M2.prototype;
      k3.setTimeout = function(a3) {
        this.P = a3;
      };
      k3.gb = function(a3) {
        a3 = a3.target;
        const b3 = this.L;
        b3 && O2(a3) == 3 ? b3.l() : this.Ia(a3);
      };
      k3.Ia = function(a3) {
        try {
          if (a3 == this.g)
            a: {
              const r3 = O2(this.g);
              var b3 = this.g.Da();
              const G2 = this.g.ba();
              if (!(3 > r3) && (r3 != 3 || Ja || this.g && (this.h.h || this.g.ga() || oc(this.g)))) {
                this.I || r3 != 4 || b3 == 7 || (b3 == 8 || 0 >= G2 ? I2(3) : I2(2));
                pc(this);
                var c3 = this.g.ba();
                this.N = c3;
                b:
                  if (qc(this)) {
                    var d2 = oc(this.g);
                    a3 = "";
                    var e3 = d2.length, f3 = O2(this.g) == 4;
                    if (!this.h.i) {
                      if (typeof TextDecoder === "undefined") {
                        P2(this);
                        rc(this);
                        var h2 = "";
                        break b;
                      }
                      this.h.i = new l3.TextDecoder();
                    }
                    for (b3 = 0; b3 < e3; b3++)
                      this.h.h = true, a3 += this.h.i.decode(d2[b3], { stream: f3 && b3 == e3 - 1 });
                    d2.splice(0, e3);
                    this.h.g += a3;
                    this.C = 0;
                    h2 = this.h.g;
                  } else
                    h2 = this.g.ga();
                this.i = c3 == 200;
                Ob(this.j, this.u, this.A, this.m, this.X, r3, c3);
                if (this.i) {
                  if (this.$ && !this.J) {
                    b: {
                      if (this.g) {
                        var n2, u3 = this.g;
                        if ((n2 = u3.g ? u3.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !sa(n2)) {
                          var m3 = n2;
                          break b;
                        }
                      }
                      m3 = null;
                    }
                    if (c3 = m3)
                      F(this.j, this.m, c3, "Initial handshake response via X-HTTP-Initial-Response"), this.J = true, sc(this, c3);
                    else {
                      this.i = false;
                      this.o = 3;
                      J(12);
                      P2(this);
                      rc(this);
                      break a;
                    }
                  }
                  this.U ? (tc(this, r3, h2), Ja && this.i && r3 == 3 && (Kb(this.V, this.W, "tick", this.fb), this.W.start())) : (F(this.j, this.m, h2, null), sc(this, h2));
                  r3 == 4 && P2(this);
                  this.i && !this.I && (r3 == 4 ? uc(this.l, this) : (this.i = false, lc(this)));
                } else
                  c3 == 400 && 0 < h2.indexOf("Unknown SID") ? (this.o = 3, J(12)) : (this.o = 0, J(13)), P2(this), rc(this);
              }
            }
        } catch (r3) {
        } finally {
        }
      };
      k3.fb = function() {
        if (this.g) {
          var a3 = O2(this.g), b3 = this.g.ga();
          this.C < b3.length && (pc(this), tc(this, a3, b3), this.i && a3 != 4 && lc(this));
        }
      };
      k3.cancel = function() {
        this.I = true;
        P2(this);
      };
      k3.eb = function() {
        this.B = null;
        const a3 = Date.now();
        0 <= a3 - this.Y ? (Qb(this.j, this.A), this.K != 2 && (I2(3), J(17)), P2(this), this.o = 2, rc(this)) : xc(this, this.Y - a3);
      };
      k3 = S2.prototype;
      k3.R = function() {
        Lc(this);
        for (var a3 = [], b3 = 0; b3 < this.g.length; b3++)
          a3.push(this.h[this.g[b3]]);
        return a3;
      };
      k3.T = function() {
        Lc(this);
        return this.g.concat();
      };
      k3.get = function(a3, b3) {
        return T2(this.h, a3) ? this.h[a3] : b3;
      };
      k3.set = function(a3, b3) {
        T2(this.h, a3) || (this.i++, this.g.push(a3));
        this.h[a3] = b3;
      };
      k3.forEach = function(a3, b3) {
        for (var c3 = this.T(), d2 = 0; d2 < c3.length; d2++) {
          var e3 = c3[d2], f3 = this.get(e3);
          a3.call(b3, f3, e3, this);
        }
      };
      Mc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
      U.prototype.toString = function() {
        var a3 = [], b3 = this.j;
        b3 && a3.push(Uc(b3, Vc, true), ":");
        var c3 = this.i;
        if (c3 || b3 == "file")
          a3.push("//"), (b3 = this.s) && a3.push(Uc(b3, Vc, true), "@"), a3.push(encodeURIComponent(String(c3)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c3 = this.m, c3 != null && a3.push(":", String(c3));
        if (c3 = this.l)
          this.i && c3.charAt(0) != "/" && a3.push("/"), a3.push(Uc(c3, c3.charAt(0) == "/" ? Wc : Xc, true));
        (c3 = this.h.toString()) && a3.push("?", c3);
        (c3 = this.o) && a3.push("#", Uc(c3, Yc));
        return a3.join("");
      };
      Vc = /[#\/\?@]/g;
      Xc = /[#\?:]/g;
      Wc = /[#\?]/g;
      $c = /[#\?@]/g;
      Yc = /#/g;
      k3 = Rc.prototype;
      k3.add = function(a3, b3) {
        V(this);
        this.i = null;
        a3 = W(this, a3);
        var c3 = this.g.get(a3);
        c3 || this.g.set(a3, c3 = []);
        c3.push(b3);
        this.h += 1;
        return this;
      };
      k3.forEach = function(a3, b3) {
        V(this);
        this.g.forEach(function(c3, d2) {
          na(c3, function(e3) {
            a3.call(b3, e3, d2, this);
          }, this);
        }, this);
      };
      k3.T = function() {
        V(this);
        for (var a3 = this.g.R(), b3 = this.g.T(), c3 = [], d2 = 0; d2 < b3.length; d2++)
          for (var e3 = a3[d2], f3 = 0; f3 < e3.length; f3++)
            c3.push(b3[d2]);
        return c3;
      };
      k3.R = function(a3) {
        V(this);
        var b3 = [];
        if (typeof a3 === "string")
          ed(this, a3) && (b3 = qa(b3, this.g.get(W(this, a3))));
        else {
          a3 = this.g.R();
          for (var c3 = 0; c3 < a3.length; c3++)
            b3 = qa(b3, a3[c3]);
        }
        return b3;
      };
      k3.set = function(a3, b3) {
        V(this);
        this.i = null;
        a3 = W(this, a3);
        ed(this, a3) && (this.h -= this.g.get(a3).length);
        this.g.set(a3, [b3]);
        this.h += 1;
        return this;
      };
      k3.get = function(a3, b3) {
        if (!a3)
          return b3;
        a3 = this.R(a3);
        return 0 < a3.length ? String(a3[0]) : b3;
      };
      k3.toString = function() {
        if (this.i)
          return this.i;
        if (!this.g)
          return "";
        for (var a3 = [], b3 = this.g.T(), c3 = 0; c3 < b3.length; c3++) {
          var d2 = b3[c3], e3 = encodeURIComponent(String(d2));
          d2 = this.R(d2);
          for (var f3 = 0; f3 < d2.length; f3++) {
            var h2 = e3;
            d2[f3] !== "" && (h2 += "=" + encodeURIComponent(String(d2[f3])));
            a3.push(h2);
          }
        }
        return this.i = a3.join("&");
      };
      fd = class {
        constructor(a3, b3) {
          this.h = a3;
          this.g = b3;
        }
      };
      hd = 10;
      gd.prototype.cancel = function() {
        this.i = jd(this);
        if (this.h)
          this.h.cancel(), this.h = null;
        else if (this.g && this.g.size !== 0) {
          for (const a3 of this.g.values())
            a3.cancel();
          this.g.clear();
        }
      };
      kd.prototype.stringify = function(a3) {
        return l3.JSON.stringify(a3, void 0);
      };
      kd.prototype.parse = function(a3) {
        return l3.JSON.parse(a3, void 0);
      };
      t3(pd, Yb);
      pd.prototype.g = function() {
        return new qd(this.l, this.j);
      };
      pd.prototype.i = function(a3) {
        return function() {
          return a3;
        };
      }({});
      t3(qd, C2);
      rd = 0;
      k3 = qd.prototype;
      k3.open = function(a3, b3) {
        if (this.readyState != rd)
          throw this.abort(), Error("Error reopening a connection");
        this.C = a3;
        this.B = b3;
        this.readyState = 1;
        sd(this);
      };
      k3.send = function(a3) {
        if (this.readyState != 1)
          throw this.abort(), Error("need to call open() first. ");
        this.g = true;
        const b3 = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
        a3 && (b3.body = a3);
        (this.D || l3).fetch(new Request(this.B, b3)).then(this.Va.bind(this), this.ha.bind(this));
      };
      k3.abort = function() {
        this.response = this.responseText = "";
        this.v = new Headers();
        this.status = 0;
        this.j && this.j.cancel("Request was aborted.");
        1 <= this.readyState && this.g && this.readyState != 4 && (this.g = false, td(this));
        this.readyState = rd;
      };
      k3.Va = function(a3) {
        if (this.g && (this.l = a3, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a3.headers, this.readyState = 2, sd(this)), this.g && (this.readyState = 3, sd(this), this.g)))
          if (this.responseType === "arraybuffer")
            a3.arrayBuffer().then(this.Ta.bind(this), this.ha.bind(this));
          else if (typeof l3.ReadableStream !== "undefined" && "body" in a3) {
            this.j = a3.body.getReader();
            if (this.u) {
              if (this.responseType)
                throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
              this.response = [];
            } else
              this.response = this.responseText = "", this.A = new TextDecoder();
            ud(this);
          } else
            a3.text().then(this.Ua.bind(this), this.ha.bind(this));
      };
      k3.Sa = function(a3) {
        if (this.g) {
          if (this.u && a3.value)
            this.response.push(a3.value);
          else if (!this.u) {
            var b3 = a3.value ? a3.value : new Uint8Array(0);
            if (b3 = this.A.decode(b3, { stream: !a3.done }))
              this.response = this.responseText += b3;
          }
          a3.done ? td(this) : sd(this);
          this.readyState == 3 && ud(this);
        }
      };
      k3.Ua = function(a3) {
        this.g && (this.response = this.responseText = a3, td(this));
      };
      k3.Ta = function(a3) {
        this.g && (this.response = a3, td(this));
      };
      k3.ha = function() {
        this.g && td(this);
      };
      k3.setRequestHeader = function(a3, b3) {
        this.v.append(a3, b3);
      };
      k3.getResponseHeader = function(a3) {
        return this.h ? this.h.get(a3.toLowerCase()) || "" : "";
      };
      k3.getAllResponseHeaders = function() {
        if (!this.h)
          return "";
        const a3 = [], b3 = this.h.entries();
        for (var c3 = b3.next(); !c3.done; )
          c3 = c3.value, a3.push(c3[0] + ": " + c3[1]), c3 = b3.next();
        return a3.join("\r\n");
      };
      Object.defineProperty(qd.prototype, "withCredentials", { get: function() {
        return this.m === "include";
      }, set: function(a3) {
        this.m = a3 ? "include" : "same-origin";
      } });
      vd = l3.JSON.parse;
      t3(X, C2);
      wd = "";
      xd = /^https?$/i;
      yd = ["POST", "PUT"];
      k3 = X.prototype;
      k3.ea = function(a3, b3, c3, d2) {
        if (this.g)
          throw Error("[goog.net.XhrIo] Object is active with another request=" + this.H + "; newUri=" + a3);
        b3 = b3 ? b3.toUpperCase() : "GET";
        this.H = a3;
        this.j = "";
        this.m = 0;
        this.D = false;
        this.h = true;
        this.g = this.u ? this.u.g() : cc.g();
        this.C = this.u ? Zb(this.u) : Zb(cc);
        this.g.onreadystatechange = q(this.Fa, this);
        try {
          this.F = true, this.g.open(b3, String(a3), true), this.F = false;
        } catch (f3) {
          zd(this, f3);
          return;
        }
        a3 = c3 || "";
        const e3 = new S2(this.headers);
        d2 && Kc(d2, function(f3, h2) {
          e3.set(h2, f3);
        });
        d2 = oa(e3.T());
        c3 = l3.FormData && a3 instanceof l3.FormData;
        !(0 <= ma(yd, b3)) || d2 || c3 || e3.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e3.forEach(function(f3, h2) {
          this.g.setRequestHeader(h2, f3);
        }, this);
        this.J && (this.g.responseType = this.J);
        "withCredentials" in this.g && this.g.withCredentials !== this.L && (this.g.withCredentials = this.L);
        try {
          Ad(this), 0 < this.B && ((this.K = Bd(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = q(this.pa, this)) : this.A = Gb(this.pa, this.B, this)), this.v = true, this.g.send(a3), this.v = false;
        } catch (f3) {
          zd(this, f3);
        }
      };
      k3.pa = function() {
        typeof goog != "undefined" && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, D(this, "timeout"), this.abort(8));
      };
      k3.abort = function(a3) {
        this.g && this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false, this.m = a3 || 7, D(this, "complete"), D(this, "abort"), Dd(this));
      };
      k3.M = function() {
        this.g && (this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false), Dd(this, true));
        X.Z.M.call(this);
      };
      k3.Fa = function() {
        this.s || (this.F || this.v || this.l ? Ed(this) : this.cb());
      };
      k3.cb = function() {
        Ed(this);
      };
      k3.ba = function() {
        try {
          return 2 < O2(this) ? this.g.status : -1;
        } catch (a3) {
          return -1;
        }
      };
      k3.ga = function() {
        try {
          return this.g ? this.g.responseText : "";
        } catch (a3) {
          return "";
        }
      };
      k3.Qa = function(a3) {
        if (this.g) {
          var b3 = this.g.responseText;
          a3 && b3.indexOf(a3) == 0 && (b3 = b3.substring(a3.length));
          return vd(b3);
        }
      };
      k3.Da = function() {
        return this.m;
      };
      k3.La = function() {
        return typeof this.j === "string" ? this.j : String(this.j);
      };
      k3 = Id.prototype;
      k3.ma = 8;
      k3.G = 1;
      k3.hb = function(a3) {
        try {
          this.h.info("Origin Trials invoked: " + a3);
        } catch (b3) {
        }
      };
      k3.Ha = function(a3) {
        if (this.m)
          if (this.m = null, this.G == 1) {
            if (!a3) {
              this.V = Math.floor(1e5 * Math.random());
              a3 = this.V++;
              const e3 = new M2(this, this.h, a3, void 0);
              let f3 = this.s;
              this.P && (f3 ? (f3 = ya(f3), Aa(f3, this.P)) : f3 = this.P);
              this.o === null && (e3.H = f3);
              if (this.ja)
                a: {
                  var b3 = 0;
                  for (var c3 = 0; c3 < this.l.length; c3++) {
                    b: {
                      var d2 = this.l[c3];
                      if ("__data__" in d2.g && (d2 = d2.g.__data__, typeof d2 === "string")) {
                        d2 = d2.length;
                        break b;
                      }
                      d2 = void 0;
                    }
                    if (d2 === void 0)
                      break;
                    b3 += d2;
                    if (4096 < b3) {
                      b3 = c3;
                      break a;
                    }
                    if (b3 === 4096 || c3 === this.l.length - 1) {
                      b3 = c3 + 1;
                      break a;
                    }
                  }
                  b3 = 1e3;
                }
              else
                b3 = 1e3;
              b3 = Pd(this, e3, b3);
              c3 = N2(this.F);
              R(c3, "RID", a3);
              R(c3, "CVER", 22);
              this.D && R(c3, "X-HTTP-Session-Id", this.D);
              Kd(this, c3);
              this.o && f3 && Gd(c3, this.o, f3);
              Dc(this.i, e3);
              this.Ra && R(c3, "TYPE", "init");
              this.ja ? (R(c3, "$req", b3), R(c3, "SID", "null"), e3.$ = true, ic(e3, c3, null)) : ic(e3, c3, b3);
              this.G = 2;
            }
          } else
            this.G == 3 && (a3 ? Qd(this, a3) : this.l.length == 0 || id(this.i) || Qd(this));
      };
      k3.Ga = function() {
        this.u = null;
        Rd(this);
        if (this.$ && !(this.L || this.g == null || 0 >= this.O)) {
          var a3 = 2 * this.O;
          this.h.info("BP detection timer enabled: " + a3);
          this.B = K(q(this.bb, this), a3);
        }
      };
      k3.bb = function() {
        this.B && (this.B = null, this.h.info("BP detection timeout reached."), this.h.info("Buffering proxy detected and switch to long-polling!"), this.N = false, this.L = true, J(10), Ac(this), Rd(this));
      };
      k3.ab = function() {
        this.v != null && (this.v = null, Ac(this), Bc(this), J(19));
      };
      k3.jb = function(a3) {
        a3 ? (this.h.info("Successfully pinged google.com"), J(2)) : (this.h.info("Failed to ping google.com"), J(1));
      };
      k3 = Sd.prototype;
      k3.xa = function() {
      };
      k3.wa = function() {
      };
      k3.va = function() {
      };
      k3.ua = function() {
      };
      k3.Oa = function() {
      };
      Td.prototype.g = function(a3, b3) {
        return new Y(a3, b3);
      };
      t3(Y, C2);
      Y.prototype.m = function() {
        this.g.j = this.j;
        this.A && (this.g.H = true);
        var a3 = this.g, b3 = this.l, c3 = this.h || void 0;
        a3.Wa && (a3.h.info("Origin Trials enabled."), zb(q(a3.hb, a3, b3)));
        J(0);
        a3.W = b3;
        a3.aa = c3 || {};
        a3.N = a3.X;
        a3.F = Ec(a3, null, a3.W);
        Hc(a3);
      };
      Y.prototype.close = function() {
        Ic(this.g);
      };
      Y.prototype.u = function(a3) {
        if (typeof a3 === "string") {
          var b3 = {};
          b3.__data__ = a3;
          Md(this.g, b3);
        } else
          this.v ? (b3 = {}, b3.__data__ = rb(a3), Md(this.g, b3)) : Md(this.g, a3);
      };
      Y.prototype.M = function() {
        this.g.j = null;
        delete this.j;
        Ic(this.g);
        delete this.g;
        Y.Z.M.call(this);
      };
      t3(Ud, ac);
      t3(Vd, bc);
      t3(Z, Sd);
      Z.prototype.xa = function() {
        D(this.g, "a");
      };
      Z.prototype.wa = function(a3) {
        D(this.g, new Ud(a3));
      };
      Z.prototype.va = function(a3) {
        D(this.g, new Vd(a3));
      };
      Z.prototype.ua = function() {
        D(this.g, "b");
      };
      Td.prototype.createWebChannel = Td.prototype.g;
      Y.prototype.send = Y.prototype.u;
      Y.prototype.open = Y.prototype.m;
      Y.prototype.close = Y.prototype.close;
      Wb.NO_ERROR = 0;
      Wb.TIMEOUT = 8;
      Wb.HTTP_ERROR = 6;
      Xb.COMPLETE = "complete";
      $b.EventType = L2;
      L2.OPEN = "a";
      L2.CLOSE = "b";
      L2.ERROR = "c";
      L2.MESSAGE = "d";
      C2.prototype.listen = C2.prototype.N;
      X.prototype.listenOnce = X.prototype.O;
      X.prototype.getLastError = X.prototype.La;
      X.prototype.getLastErrorCode = X.prototype.Da;
      X.prototype.getStatus = X.prototype.ba;
      X.prototype.getResponseJson = X.prototype.Qa;
      X.prototype.getResponseText = X.prototype.ga;
      X.prototype.send = X.prototype.ea;
      createWebChannelTransport = esm.createWebChannelTransport = function() {
        return new Td();
      };
      getStatEventTarget = esm.getStatEventTarget = function() {
        return Sb();
      };
      ErrorCode2 = esm.ErrorCode = Wb;
      EventType = esm.EventType = Xb;
      Event = esm.Event = H2;
      Stat = esm.Stat = { rb: 0, ub: 1, vb: 2, Ob: 3, Tb: 4, Qb: 5, Rb: 6, Pb: 7, Nb: 8, Sb: 9, PROXY: 10, NOPROXY: 11, Lb: 12, Hb: 13, Ib: 14, Gb: 15, Jb: 16, Kb: 17, nb: 18, mb: 19, ob: 20 };
      FetchXmlHttpFactory = esm.FetchXmlHttpFactory = pd;
      WebChannel = esm.WebChannel = $b;
      XhrIo = esm.XhrIo = X;
    }
  });

  // node_modules/@firebase/firestore/dist/index.esm2017.js
  function k4() {
    return N3.logLevel;
  }
  function O3(t4, ...e3) {
    if (N3.logLevel <= LogLevel.DEBUG) {
      const n2 = e3.map(B2);
      N3.debug(`Firestore (${x4}): ${t4}`, ...n2);
    }
  }
  function F2(t4, ...e3) {
    if (N3.logLevel <= LogLevel.ERROR) {
      const n2 = e3.map(B2);
      N3.error(`Firestore (${x4}): ${t4}`, ...n2);
    }
  }
  function $2(t4, ...e3) {
    if (N3.logLevel <= LogLevel.WARN) {
      const n2 = e3.map(B2);
      N3.warn(`Firestore (${x4}): ${t4}`, ...n2);
    }
  }
  function B2(t4) {
    if (typeof t4 == "string")
      return t4;
    try {
      return e3 = t4, JSON.stringify(e3);
    } catch (e4) {
      return t4;
    }
    var e3;
  }
  function L3(t4 = "Unexpected state") {
    const e3 = `FIRESTORE (${x4}) INTERNAL ASSERTION FAILED: ` + t4;
    throw F2(e3), new Error(e3);
  }
  function U2(t4, e3) {
    t4 || L3();
  }
  function K2(t4, e3) {
    return t4;
  }
  function st(t4) {
    const e3 = typeof self != "undefined" && (self.crypto || self.msCrypto), n2 = new Uint8Array(t4);
    if (e3 && typeof e3.getRandomValues == "function")
      e3.getRandomValues(n2);
    else
      for (let e4 = 0; e4 < t4; e4++)
        n2[e4] = Math.floor(256 * Math.random());
    return n2;
  }
  function rt(t4, e3) {
    return t4 < e3 ? -1 : t4 > e3 ? 1 : 0;
  }
  function ot(t4, e3, n2) {
    return t4.length === e3.length && t4.every((t5, s2) => n2(t5, e3[s2]));
  }
  function ht(t4) {
    let e3 = 0;
    for (const n2 in t4)
      Object.prototype.hasOwnProperty.call(t4, n2) && e3++;
    return e3;
  }
  function lt(t4, e3) {
    for (const n2 in t4)
      Object.prototype.hasOwnProperty.call(t4, n2) && e3(n2, t4[n2]);
  }
  function ft(t4) {
    for (const e3 in t4)
      if (Object.prototype.hasOwnProperty.call(t4, e3))
        return false;
    return true;
  }
  function Tt(t4) {
    if (U2(!!t4), typeof t4 == "string") {
      let e3 = 0;
      const n2 = It.exec(t4);
      if (U2(!!n2), n2[1]) {
        let t5 = n2[1];
        t5 = (t5 + "000000000").substr(0, 9), e3 = Number(t5);
      }
      const s2 = new Date(t4);
      return {
        seconds: Math.floor(s2.getTime() / 1e3),
        nanos: e3
      };
    }
    return {
      seconds: Et(t4.seconds),
      nanos: Et(t4.nanos)
    };
  }
  function Et(t4) {
    return typeof t4 == "number" ? t4 : typeof t4 == "string" ? Number(t4) : 0;
  }
  function At(t4) {
    return typeof t4 == "string" ? pt.fromBase64String(t4) : pt.fromUint8Array(t4);
  }
  function Rt(t4) {
    var e3, n2;
    return ((n2 = (((e3 = t4 == null ? void 0 : t4.mapValue) === null || e3 === void 0 ? void 0 : e3.fields) || {}).__type__) === null || n2 === void 0 ? void 0 : n2.stringValue) === "server_timestamp";
  }
  function bt(t4) {
    const e3 = t4.mapValue.fields.__previous_value__;
    return Rt(e3) ? bt(e3) : e3;
  }
  function Pt(t4) {
    const e3 = Tt(t4.mapValue.fields.__local_write_time__.timestampValue);
    return new at(e3.seconds, e3.nanos);
  }
  function St(t4) {
    return t4 == null;
  }
  function Dt(t4) {
    return t4 === 0 && 1 / t4 == -1 / 0;
  }
  function Mt(t4) {
    return "nullValue" in t4 ? 0 : "booleanValue" in t4 ? 1 : "integerValue" in t4 || "doubleValue" in t4 ? 2 : "timestampValue" in t4 ? 3 : "stringValue" in t4 ? 5 : "bytesValue" in t4 ? 6 : "referenceValue" in t4 ? 7 : "geoPointValue" in t4 ? 8 : "arrayValue" in t4 ? 9 : "mapValue" in t4 ? Rt(t4) ? 4 : Ht(t4) ? 9007199254740991 : 10 : L3();
  }
  function Ot(t4, e3) {
    if (t4 === e3)
      return true;
    const n2 = Mt(t4);
    if (n2 !== Mt(e3))
      return false;
    switch (n2) {
      case 0:
      case 9007199254740991:
        return true;
      case 1:
        return t4.booleanValue === e3.booleanValue;
      case 4:
        return Pt(t4).isEqual(Pt(e3));
      case 3:
        return function(t5, e4) {
          if (typeof t5.timestampValue == "string" && typeof e4.timestampValue == "string" && t5.timestampValue.length === e4.timestampValue.length)
            return t5.timestampValue === e4.timestampValue;
          const n3 = Tt(t5.timestampValue), s2 = Tt(e4.timestampValue);
          return n3.seconds === s2.seconds && n3.nanos === s2.nanos;
        }(t4, e3);
      case 5:
        return t4.stringValue === e3.stringValue;
      case 6:
        return function(t5, e4) {
          return At(t5.bytesValue).isEqual(At(e4.bytesValue));
        }(t4, e3);
      case 7:
        return t4.referenceValue === e3.referenceValue;
      case 8:
        return function(t5, e4) {
          return Et(t5.geoPointValue.latitude) === Et(e4.geoPointValue.latitude) && Et(t5.geoPointValue.longitude) === Et(e4.geoPointValue.longitude);
        }(t4, e3);
      case 2:
        return function(t5, e4) {
          if ("integerValue" in t5 && "integerValue" in e4)
            return Et(t5.integerValue) === Et(e4.integerValue);
          if ("doubleValue" in t5 && "doubleValue" in e4) {
            const n3 = Et(t5.doubleValue), s2 = Et(e4.doubleValue);
            return n3 === s2 ? Dt(n3) === Dt(s2) : isNaN(n3) && isNaN(s2);
          }
          return false;
        }(t4, e3);
      case 9:
        return ot(t4.arrayValue.values || [], e3.arrayValue.values || [], Ot);
      case 10:
        return function(t5, e4) {
          const n3 = t5.mapValue.fields || {}, s2 = e4.mapValue.fields || {};
          if (ht(n3) !== ht(s2))
            return false;
          for (const t6 in n3)
            if (n3.hasOwnProperty(t6) && (s2[t6] === void 0 || !Ot(n3[t6], s2[t6])))
              return false;
          return true;
        }(t4, e3);
      default:
        return L3();
    }
  }
  function Ft(t4, e3) {
    return (t4.values || []).find((t5) => Ot(t5, e3)) !== void 0;
  }
  function $t(t4, e3) {
    if (t4 === e3)
      return 0;
    const n2 = Mt(t4), s2 = Mt(e3);
    if (n2 !== s2)
      return rt(n2, s2);
    switch (n2) {
      case 0:
      case 9007199254740991:
        return 0;
      case 1:
        return rt(t4.booleanValue, e3.booleanValue);
      case 2:
        return function(t5, e4) {
          const n3 = Et(t5.integerValue || t5.doubleValue), s3 = Et(e4.integerValue || e4.doubleValue);
          return n3 < s3 ? -1 : n3 > s3 ? 1 : n3 === s3 ? 0 : isNaN(n3) ? isNaN(s3) ? 0 : -1 : 1;
        }(t4, e3);
      case 3:
        return Bt(t4.timestampValue, e3.timestampValue);
      case 4:
        return Bt(Pt(t4), Pt(e3));
      case 5:
        return rt(t4.stringValue, e3.stringValue);
      case 6:
        return function(t5, e4) {
          const n3 = At(t5), s3 = At(e4);
          return n3.compareTo(s3);
        }(t4.bytesValue, e3.bytesValue);
      case 7:
        return function(t5, e4) {
          const n3 = t5.split("/"), s3 = e4.split("/");
          for (let t6 = 0; t6 < n3.length && t6 < s3.length; t6++) {
            const e5 = rt(n3[t6], s3[t6]);
            if (e5 !== 0)
              return e5;
          }
          return rt(n3.length, s3.length);
        }(t4.referenceValue, e3.referenceValue);
      case 8:
        return function(t5, e4) {
          const n3 = rt(Et(t5.latitude), Et(e4.latitude));
          if (n3 !== 0)
            return n3;
          return rt(Et(t5.longitude), Et(e4.longitude));
        }(t4.geoPointValue, e3.geoPointValue);
      case 9:
        return function(t5, e4) {
          const n3 = t5.values || [], s3 = e4.values || [];
          for (let t6 = 0; t6 < n3.length && t6 < s3.length; ++t6) {
            const e5 = $t(n3[t6], s3[t6]);
            if (e5)
              return e5;
          }
          return rt(n3.length, s3.length);
        }(t4.arrayValue, e3.arrayValue);
      case 10:
        return function(t5, e4) {
          if (t5 === Nt.mapValue && e4 === Nt.mapValue)
            return 0;
          if (t5 === Nt.mapValue)
            return 1;
          if (e4 === Nt.mapValue)
            return -1;
          const n3 = t5.fields || {}, s3 = Object.keys(n3), i3 = e4.fields || {}, r3 = Object.keys(i3);
          s3.sort(), r3.sort();
          for (let t6 = 0; t6 < s3.length && t6 < r3.length; ++t6) {
            const e5 = rt(s3[t6], r3[t6]);
            if (e5 !== 0)
              return e5;
            const o3 = $t(n3[s3[t6]], i3[r3[t6]]);
            if (o3 !== 0)
              return o3;
          }
          return rt(s3.length, r3.length);
        }(t4.mapValue, e3.mapValue);
      default:
        throw L3();
    }
  }
  function Bt(t4, e3) {
    if (typeof t4 == "string" && typeof e3 == "string" && t4.length === e3.length)
      return rt(t4, e3);
    const n2 = Tt(t4), s2 = Tt(e3), i3 = rt(n2.seconds, s2.seconds);
    return i3 !== 0 ? i3 : rt(n2.nanos, s2.nanos);
  }
  function Lt(t4) {
    return Ut(t4);
  }
  function Ut(t4) {
    return "nullValue" in t4 ? "null" : "booleanValue" in t4 ? "" + t4.booleanValue : "integerValue" in t4 ? "" + t4.integerValue : "doubleValue" in t4 ? "" + t4.doubleValue : "timestampValue" in t4 ? function(t5) {
      const e4 = Tt(t5);
      return `time(${e4.seconds},${e4.nanos})`;
    }(t4.timestampValue) : "stringValue" in t4 ? t4.stringValue : "bytesValue" in t4 ? At(t4.bytesValue).toBase64() : "referenceValue" in t4 ? (n2 = t4.referenceValue, xt.fromName(n2).toString()) : "geoPointValue" in t4 ? `geo(${(e3 = t4.geoPointValue).latitude},${e3.longitude})` : "arrayValue" in t4 ? function(t5) {
      let e4 = "[", n3 = true;
      for (const s2 of t5.values || [])
        n3 ? n3 = false : e4 += ",", e4 += Ut(s2);
      return e4 + "]";
    }(t4.arrayValue) : "mapValue" in t4 ? function(t5) {
      const e4 = Object.keys(t5.fields || {}).sort();
      let n3 = "{", s2 = true;
      for (const i3 of e4)
        s2 ? s2 = false : n3 += ",", n3 += `${i3}:${Ut(t5.fields[i3])}`;
      return n3 + "}";
    }(t4.mapValue) : L3();
    var e3, n2;
  }
  function Kt(t4) {
    return !!t4 && "integerValue" in t4;
  }
  function Gt(t4) {
    return !!t4 && "arrayValue" in t4;
  }
  function Qt(t4) {
    return !!t4 && "nullValue" in t4;
  }
  function jt(t4) {
    return !!t4 && "doubleValue" in t4 && isNaN(Number(t4.doubleValue));
  }
  function Wt(t4) {
    return !!t4 && "mapValue" in t4;
  }
  function zt(t4) {
    if (t4.geoPointValue)
      return {
        geoPointValue: Object.assign({}, t4.geoPointValue)
      };
    if (t4.timestampValue && typeof t4.timestampValue == "object")
      return {
        timestampValue: Object.assign({}, t4.timestampValue)
      };
    if (t4.mapValue) {
      const e3 = {
        mapValue: {
          fields: {}
        }
      };
      return lt(t4.mapValue.fields, (t5, n2) => e3.mapValue.fields[t5] = zt(n2)), e3;
    }
    if (t4.arrayValue) {
      const e3 = {
        arrayValue: {
          values: []
        }
      };
      for (let n2 = 0; n2 < (t4.arrayValue.values || []).length; ++n2)
        e3.arrayValue.values[n2] = zt(t4.arrayValue.values[n2]);
      return e3;
    }
    return Object.assign({}, t4);
  }
  function Ht(t4) {
    return (((t4.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__";
  }
  function ae(t4, e3) {
    const n2 = t4.toTimestamp().seconds, s2 = t4.toTimestamp().nanoseconds + 1, i3 = ct.fromTimestamp(s2 === 1e9 ? new at(n2 + 1, 0) : new at(n2, s2));
    return new he(i3, xt.empty(), e3);
  }
  function ce(t4) {
    return new he(t4.readTime, t4.key, -1);
  }
  function le(t4, e3) {
    let n2 = t4.readTime.compareTo(e3.readTime);
    return n2 !== 0 ? n2 : (n2 = xt.comparator(t4.documentKey, e3.documentKey), n2 !== 0 ? n2 : rt(t4.largestBatchId, e3.largestBatchId));
  }
  function pe(t4, e3 = null, n2 = [], s2 = [], i3 = null, r3 = null, o3 = null) {
    return new ye(t4, e3, n2, s2, i3, r3, o3);
  }
  function Ie(t4) {
    const e3 = K2(t4);
    if (e3.P === null) {
      let t5 = e3.path.canonicalString();
      e3.collectionGroup !== null && (t5 += "|cg:" + e3.collectionGroup), t5 += "|f:", t5 += e3.filters.map((t6) => {
        return (e4 = t6).field.canonicalString() + e4.op.toString() + Lt(e4.value);
        var e4;
      }).join(","), t5 += "|ob:", t5 += e3.orderBy.map((t6) => function(t7) {
        return t7.field.canonicalString() + t7.dir;
      }(t6)).join(","), St(e3.limit) || (t5 += "|l:", t5 += e3.limit), e3.startAt && (t5 += "|lb:", t5 += e3.startAt.inclusive ? "b:" : "a:", t5 += e3.startAt.position.map((t6) => Lt(t6)).join(",")), e3.endAt && (t5 += "|ub:", t5 += e3.endAt.inclusive ? "a:" : "b:", t5 += e3.endAt.position.map((t6) => Lt(t6)).join(",")), e3.P = t5;
    }
    return e3.P;
  }
  function Te(t4) {
    let e3 = t4.path.canonicalString();
    return t4.collectionGroup !== null && (e3 += " collectionGroup=" + t4.collectionGroup), t4.filters.length > 0 && (e3 += `, filters: [${t4.filters.map((t5) => {
      return `${(e4 = t5).field.canonicalString()} ${e4.op} ${Lt(e4.value)}`;
      var e4;
    }).join(", ")}]`), St(t4.limit) || (e3 += ", limit: " + t4.limit), t4.orderBy.length > 0 && (e3 += `, orderBy: [${t4.orderBy.map((t5) => function(t6) {
      return `${t6.field.canonicalString()} (${t6.dir})`;
    }(t5)).join(", ")}]`), t4.startAt && (e3 += ", startAt: ", e3 += t4.startAt.inclusive ? "b:" : "a:", e3 += t4.startAt.position.map((t5) => Lt(t5)).join(",")), t4.endAt && (e3 += ", endAt: ", e3 += t4.endAt.inclusive ? "a:" : "b:", e3 += t4.endAt.position.map((t5) => Lt(t5)).join(",")), `Target(${e3})`;
  }
  function Ee(t4, e3) {
    if (t4.limit !== e3.limit)
      return false;
    if (t4.orderBy.length !== e3.orderBy.length)
      return false;
    for (let n3 = 0; n3 < t4.orderBy.length; n3++)
      if (!$e(t4.orderBy[n3], e3.orderBy[n3]))
        return false;
    if (t4.filters.length !== e3.filters.length)
      return false;
    for (let i3 = 0; i3 < t4.filters.length; i3++)
      if (n2 = t4.filters[i3], s2 = e3.filters[i3], n2.op !== s2.op || !n2.field.isEqual(s2.field) || !Ot(n2.value, s2.value))
        return false;
    var n2, s2;
    return t4.collectionGroup === e3.collectionGroup && (!!t4.path.isEqual(e3.path) && (!!Le(t4.startAt, e3.startAt) && Le(t4.endAt, e3.endAt)));
  }
  function Ae(t4) {
    return xt.isDocumentKey(t4.path) && t4.collectionGroup === null && t4.filters.length === 0;
  }
  function Ce(t4, e3) {
    var n2;
    return (((n2 = e3.arrayValue) === null || n2 === void 0 ? void 0 : n2.values) || []).map((t5) => xt.fromName(t5.referenceValue));
  }
  function $e(t4, e3) {
    return t4.dir === e3.dir && t4.field.isEqual(e3.field);
  }
  function Be(t4, e3, n2) {
    let s2 = 0;
    for (let i3 = 0; i3 < t4.position.length; i3++) {
      const r3 = e3[i3], o3 = t4.position[i3];
      if (r3.field.isKeyField())
        s2 = xt.comparator(xt.fromName(o3.referenceValue), n2.key);
      else {
        s2 = $t(o3, n2.data.field(r3.field));
      }
      if (r3.dir === "desc" && (s2 *= -1), s2 !== 0)
        break;
    }
    return s2;
  }
  function Le(t4, e3) {
    if (t4 === null)
      return e3 === null;
    if (e3 === null)
      return false;
    if (t4.inclusive !== e3.inclusive || t4.position.length !== e3.position.length)
      return false;
    for (let n2 = 0; n2 < t4.position.length; n2++) {
      if (!Ot(t4.position[n2], e3.position[n2]))
        return false;
    }
    return true;
  }
  function qe(t4, e3, n2, s2, i3, r3, o3, u3) {
    return new Ue(t4, e3, n2, s2, i3, r3, o3, u3);
  }
  function Ke(t4) {
    return new Ue(t4);
  }
  function Ge(t4) {
    return t4.filters.length === 0 && t4.limit === null && t4.startAt == null && t4.endAt == null && (t4.explicitOrderBy.length === 0 || t4.explicitOrderBy.length === 1 && t4.explicitOrderBy[0].field.isKeyField());
  }
  function Qe(t4) {
    return t4.explicitOrderBy.length > 0 ? t4.explicitOrderBy[0].field : null;
  }
  function je(t4) {
    for (const e3 of t4.filters)
      if (e3.S())
        return e3.field;
    return null;
  }
  function We(t4) {
    return t4.collectionGroup !== null;
  }
  function ze(t4) {
    const e3 = K2(t4);
    if (e3.D === null) {
      e3.D = [];
      const t5 = je(e3), n2 = Qe(e3);
      if (t5 !== null && n2 === null)
        t5.isKeyField() || e3.D.push(new Fe(t5)), e3.D.push(new Fe(mt.keyField(), "asc"));
      else {
        let t6 = false;
        for (const n3 of e3.explicitOrderBy)
          e3.D.push(n3), n3.field.isKeyField() && (t6 = true);
        if (!t6) {
          const t7 = e3.explicitOrderBy.length > 0 ? e3.explicitOrderBy[e3.explicitOrderBy.length - 1].dir : "asc";
          e3.D.push(new Fe(mt.keyField(), t7));
        }
      }
    }
    return e3.D;
  }
  function He(t4) {
    const e3 = K2(t4);
    if (!e3.C)
      if (e3.limitType === "F")
        e3.C = pe(e3.path, e3.collectionGroup, ze(e3), e3.filters, e3.limit, e3.startAt, e3.endAt);
      else {
        const t5 = [];
        for (const n3 of ze(e3)) {
          const e4 = n3.dir === "desc" ? "asc" : "desc";
          t5.push(new Fe(n3.field, e4));
        }
        const n2 = e3.endAt ? new Oe(e3.endAt.position, e3.endAt.inclusive) : null, s2 = e3.startAt ? new Oe(e3.startAt.position, e3.startAt.inclusive) : null;
        e3.C = pe(e3.path, e3.collectionGroup, t5, e3.filters, e3.limit, n2, s2);
      }
    return e3.C;
  }
  function Je(t4, e3, n2) {
    return new Ue(t4.path, t4.collectionGroup, t4.explicitOrderBy.slice(), t4.filters.slice(), e3, n2, t4.startAt, t4.endAt);
  }
  function Ye(t4, e3) {
    return Ee(He(t4), He(e3)) && t4.limitType === e3.limitType;
  }
  function Xe(t4) {
    return `${Ie(He(t4))}|lt:${t4.limitType}`;
  }
  function Ze(t4) {
    return `Query(target=${Te(He(t4))}; limitType=${t4.limitType})`;
  }
  function tn(t4, e3) {
    return e3.isFoundDocument() && function(t5, e4) {
      const n2 = e4.key.path;
      return t5.collectionGroup !== null ? e4.key.hasCollectionId(t5.collectionGroup) && t5.path.isPrefixOf(n2) : xt.isDocumentKey(t5.path) ? t5.path.isEqual(n2) : t5.path.isImmediateParentOf(n2);
    }(t4, e3) && function(t5, e4) {
      for (const n2 of t5.explicitOrderBy)
        if (!n2.field.isKeyField() && e4.data.field(n2.field) === null)
          return false;
      return true;
    }(t4, e3) && function(t5, e4) {
      for (const n2 of t5.filters)
        if (!n2.matches(e4))
          return false;
      return true;
    }(t4, e3) && function(t5, e4) {
      if (t5.startAt && !function(t6, e5, n2) {
        const s2 = Be(t6, e5, n2);
        return t6.inclusive ? s2 <= 0 : s2 < 0;
      }(t5.startAt, ze(t5), e4))
        return false;
      if (t5.endAt && !function(t6, e5, n2) {
        const s2 = Be(t6, e5, n2);
        return t6.inclusive ? s2 >= 0 : s2 > 0;
      }(t5.endAt, ze(t5), e4))
        return false;
      return true;
    }(t4, e3);
  }
  function en(t4) {
    return t4.collectionGroup || (t4.path.length % 2 == 1 ? t4.path.lastSegment() : t4.path.get(t4.path.length - 2));
  }
  function nn(t4) {
    return (e3, n2) => {
      let s2 = false;
      for (const i3 of ze(t4)) {
        const t5 = sn(i3, e3, n2);
        if (t5 !== 0)
          return t5;
        s2 = s2 || i3.field.isKeyField();
      }
      return 0;
    };
  }
  function sn(t4, e3, n2) {
    const s2 = t4.field.isKeyField() ? xt.comparator(e3.key, n2.key) : function(t5, e4, n3) {
      const s3 = e4.data.field(t5), i3 = n3.data.field(t5);
      return s3 !== null && i3 !== null ? $t(s3, i3) : L3();
    }(t4.field, e3, n2);
    switch (t4.dir) {
      case "asc":
        return s2;
      case "desc":
        return -1 * s2;
      default:
        return L3();
    }
  }
  function rn(t4, e3) {
    if (t4.N) {
      if (isNaN(e3))
        return {
          doubleValue: "NaN"
        };
      if (e3 === 1 / 0)
        return {
          doubleValue: "Infinity"
        };
      if (e3 === -1 / 0)
        return {
          doubleValue: "-Infinity"
        };
    }
    return {
      doubleValue: Dt(e3) ? "-0" : e3
    };
  }
  function on2(t4) {
    return {
      integerValue: "" + t4
    };
  }
  function cn(t4, e3, n2) {
    return t4 instanceof fn ? function(t5, e4) {
      const n3 = {
        fields: {
          __type__: {
            stringValue: "server_timestamp"
          },
          __local_write_time__: {
            timestampValue: {
              seconds: t5.seconds,
              nanos: t5.nanoseconds
            }
          }
        }
      };
      return e4 && (n3.fields.__previous_value__ = e4), {
        mapValue: n3
      };
    }(n2, e3) : t4 instanceof dn ? _n(t4, e3) : t4 instanceof wn ? mn(t4, e3) : function(t5, e4) {
      const n3 = ln(t5, e4), s2 = yn(n3) + yn(t5.k);
      return Kt(n3) && Kt(t5.k) ? on2(s2) : rn(t5.M, s2);
    }(t4, e3);
  }
  function hn(t4, e3, n2) {
    return t4 instanceof dn ? _n(t4, e3) : t4 instanceof wn ? mn(t4, e3) : n2;
  }
  function ln(t4, e3) {
    return t4 instanceof gn ? Kt(n2 = e3) || function(t5) {
      return !!t5 && "doubleValue" in t5;
    }(n2) ? e3 : {
      integerValue: 0
    } : null;
    var n2;
  }
  function _n(t4, e3) {
    const n2 = pn(e3);
    for (const e4 of t4.elements)
      n2.some((t5) => Ot(t5, e4)) || n2.push(e4);
    return {
      arrayValue: {
        values: n2
      }
    };
  }
  function mn(t4, e3) {
    let n2 = pn(e3);
    for (const e4 of t4.elements)
      n2 = n2.filter((t5) => !Ot(t5, e4));
    return {
      arrayValue: {
        values: n2
      }
    };
  }
  function yn(t4) {
    return Et(t4.integerValue || t4.doubleValue);
  }
  function pn(t4) {
    return Gt(t4) && t4.arrayValue.values ? t4.arrayValue.values.slice() : [];
  }
  function Tn(t4, e3) {
    return t4.field.isEqual(e3.field) && function(t5, e4) {
      return t5 instanceof dn && e4 instanceof dn || t5 instanceof wn && e4 instanceof wn ? ot(t5.elements, e4.elements, Ot) : t5 instanceof gn && e4 instanceof gn ? Ot(t5.k, e4.k) : t5 instanceof fn && e4 instanceof fn;
    }(t4.transform, e3.transform);
  }
  function Rn(t4, e3) {
    return t4.updateTime !== void 0 ? e3.isFoundDocument() && e3.version.isEqual(t4.updateTime) : t4.exists === void 0 || t4.exists === e3.isFoundDocument();
  }
  function Pn(t4, e3, n2) {
    t4 instanceof Cn ? function(t5, e4, n3) {
      const s2 = t5.value.clone(), i3 = kn(t5.fieldTransforms, e4, n3.transformResults);
      s2.setAll(i3), e4.convertToFoundDocument(n3.version, s2).setHasCommittedMutations();
    }(t4, e3, n2) : t4 instanceof xn ? function(t5, e4, n3) {
      if (!Rn(t5.precondition, e4))
        return void e4.convertToUnknownDocument(n3.version);
      const s2 = kn(t5.fieldTransforms, e4, n3.transformResults), i3 = e4.data;
      i3.setAll(Nn(t5)), i3.setAll(s2), e4.convertToFoundDocument(n3.version, i3).setHasCommittedMutations();
    }(t4, e3, n2) : function(t5, e4, n3) {
      e4.convertToNoDocument(n3.version).setHasCommittedMutations();
    }(0, e3, n2);
  }
  function Vn(t4, e3, n2) {
    t4 instanceof Cn ? function(t5, e4, n3) {
      if (!Rn(t5.precondition, e4))
        return;
      const s2 = t5.value.clone(), i3 = Mn(t5.fieldTransforms, n3, e4);
      s2.setAll(i3), e4.convertToFoundDocument(Dn(e4), s2).setHasLocalMutations();
    }(t4, e3, n2) : t4 instanceof xn ? function(t5, e4, n3) {
      if (!Rn(t5.precondition, e4))
        return;
      const s2 = Mn(t5.fieldTransforms, n3, e4), i3 = e4.data;
      i3.setAll(Nn(t5)), i3.setAll(s2), e4.convertToFoundDocument(Dn(e4), i3).setHasLocalMutations();
    }(t4, e3, n2) : function(t5, e4) {
      Rn(t5.precondition, e4) && e4.convertToNoDocument(ct.min());
    }(t4, e3);
  }
  function Sn(t4, e3) {
    return t4.type === e3.type && (!!t4.key.isEqual(e3.key) && (!!t4.precondition.isEqual(e3.precondition) && (!!function(t5, e4) {
      return t5 === void 0 && e4 === void 0 || !(!t5 || !e4) && ot(t5, e4, (t6, e5) => Tn(t6, e5));
    }(t4.fieldTransforms, e3.fieldTransforms) && (t4.type === 0 ? t4.value.isEqual(e3.value) : t4.type !== 1 || t4.data.isEqual(e3.data) && t4.fieldMask.isEqual(e3.fieldMask)))));
  }
  function Dn(t4) {
    return t4.isFoundDocument() ? t4.version : ct.min();
  }
  function Nn(t4) {
    const e3 = /* @__PURE__ */ new Map();
    return t4.fieldMask.fields.forEach((n2) => {
      if (!n2.isEmpty()) {
        const s2 = t4.data.field(n2);
        e3.set(n2, s2);
      }
    }), e3;
  }
  function kn(t4, e3, n2) {
    const s2 = /* @__PURE__ */ new Map();
    U2(t4.length === n2.length);
    for (let i3 = 0; i3 < n2.length; i3++) {
      const r3 = t4[i3], o3 = r3.transform, u3 = e3.data.field(r3.field);
      s2.set(r3.field, hn(o3, u3, n2[i3]));
    }
    return s2;
  }
  function Mn(t4, e3, n2) {
    const s2 = /* @__PURE__ */ new Map();
    for (const i3 of t4) {
      const t5 = i3.transform, r3 = n2.data.field(i3.field);
      s2.set(i3.field, cn(t5, r3, e3));
    }
    return s2;
  }
  function qn(t4) {
    if (t4 === void 0)
      return F2("GRPC error has no .code"), G.UNKNOWN;
    switch (t4) {
      case Bn.OK:
        return G.OK;
      case Bn.CANCELLED:
        return G.CANCELLED;
      case Bn.UNKNOWN:
        return G.UNKNOWN;
      case Bn.DEADLINE_EXCEEDED:
        return G.DEADLINE_EXCEEDED;
      case Bn.RESOURCE_EXHAUSTED:
        return G.RESOURCE_EXHAUSTED;
      case Bn.INTERNAL:
        return G.INTERNAL;
      case Bn.UNAVAILABLE:
        return G.UNAVAILABLE;
      case Bn.UNAUTHENTICATED:
        return G.UNAUTHENTICATED;
      case Bn.INVALID_ARGUMENT:
        return G.INVALID_ARGUMENT;
      case Bn.NOT_FOUND:
        return G.NOT_FOUND;
      case Bn.ALREADY_EXISTS:
        return G.ALREADY_EXISTS;
      case Bn.PERMISSION_DENIED:
        return G.PERMISSION_DENIED;
      case Bn.FAILED_PRECONDITION:
        return G.FAILED_PRECONDITION;
      case Bn.ABORTED:
        return G.ABORTED;
      case Bn.OUT_OF_RANGE:
        return G.OUT_OF_RANGE;
      case Bn.UNIMPLEMENTED:
        return G.UNIMPLEMENTED;
      case Bn.DATA_LOSS:
        return G.DATA_LOSS;
      default:
        return L3();
    }
  }
  function Qn() {
    return Gn;
  }
  function Wn(...t4) {
    let e3 = jn;
    for (const n2 of t4)
      e3 = e3.insert(n2.key, n2);
    return e3;
  }
  function zn() {
    return new Kn((t4) => t4.toString(), (t4, e3) => t4.isEqual(e3));
  }
  function Yn(...t4) {
    let e3 = Jn;
    for (const n2 of t4)
      e3 = e3.add(n2);
    return e3;
  }
  function Zn() {
    return Xn;
  }
  function us() {
    return new fe(xt.comparator);
  }
  function as() {
    return new fe(xt.comparator);
  }
  function fs(t4, e3) {
    if (t4.N) {
      return `${new Date(1e3 * e3.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e3.nanoseconds).slice(-9)}Z`;
    }
    return {
      seconds: "" + e3.seconds,
      nanos: e3.nanoseconds
    };
  }
  function ds(t4, e3) {
    return t4.N ? e3.toBase64() : e3.toUint8Array();
  }
  function ws(t4) {
    return U2(!!t4), ct.fromTimestamp(function(t5) {
      const e3 = Tt(t5);
      return new at(e3.seconds, e3.nanos);
    }(t4));
  }
  function ms(t4, e3) {
    return function(t5) {
      return new _t(["projects", t5.projectId, "databases", t5.database]);
    }(t4).child("documents").child(e3).canonicalString();
  }
  function gs(t4) {
    const e3 = _t.fromString(t4);
    return U2(Ks(e3)), e3;
  }
  function ps(t4, e3) {
    const n2 = gs(e3);
    if (n2.get(1) !== t4.databaseId.projectId)
      throw new Q2(G.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n2.get(1) + " vs " + t4.databaseId.projectId);
    if (n2.get(3) !== t4.databaseId.database)
      throw new Q2(G.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n2.get(3) + " vs " + t4.databaseId.database);
    return new xt(As(n2));
  }
  function Is(t4, e3) {
    return ms(t4.databaseId, e3);
  }
  function Ts(t4) {
    const e3 = gs(t4);
    return e3.length === 4 ? _t.emptyPath() : As(e3);
  }
  function Es(t4) {
    return new _t(["projects", t4.databaseId.projectId, "databases", t4.databaseId.database]).canonicalString();
  }
  function As(t4) {
    return U2(t4.length > 4 && t4.get(4) === "documents"), t4.popFirst(5);
  }
  function Vs(t4, e3) {
    let n2;
    if ("targetChange" in e3) {
      e3.targetChange;
      const s2 = function(t5) {
        return t5 === "NO_CHANGE" ? 0 : t5 === "ADD" ? 1 : t5 === "REMOVE" ? 2 : t5 === "CURRENT" ? 3 : t5 === "RESET" ? 4 : L3();
      }(e3.targetChange.targetChangeType || "NO_CHANGE"), i3 = e3.targetChange.targetIds || [], r3 = function(t5, e4) {
        return t5.N ? (U2(e4 === void 0 || typeof e4 == "string"), pt.fromBase64String(e4 || "")) : (U2(e4 === void 0 || e4 instanceof Uint8Array), pt.fromUint8Array(e4 || new Uint8Array()));
      }(t4, e3.targetChange.resumeToken), o3 = e3.targetChange.cause, u3 = o3 && function(t5) {
        const e4 = t5.code === void 0 ? G.UNKNOWN : qn(t5.code);
        return new Q2(e4, t5.message || "");
      }(o3);
      n2 = new is(s2, i3, r3, u3 || null);
    } else if ("documentChange" in e3) {
      e3.documentChange;
      const s2 = e3.documentChange;
      s2.document, s2.document.name, s2.document.updateTime;
      const i3 = ps(t4, s2.document.name), r3 = ws(s2.document.updateTime), o3 = new te({
        mapValue: {
          fields: s2.document.fields
        }
      }), u3 = ne.newFoundDocument(i3, r3, o3), a3 = s2.targetIds || [], c3 = s2.removedTargetIds || [];
      n2 = new ns(a3, c3, u3.key, u3);
    } else if ("documentDelete" in e3) {
      e3.documentDelete;
      const s2 = e3.documentDelete;
      s2.document;
      const i3 = ps(t4, s2.document), r3 = s2.readTime ? ws(s2.readTime) : ct.min(), o3 = ne.newNoDocument(i3, r3), u3 = s2.removedTargetIds || [];
      n2 = new ns([], u3, o3.key, o3);
    } else if ("documentRemove" in e3) {
      e3.documentRemove;
      const s2 = e3.documentRemove;
      s2.document;
      const i3 = ps(t4, s2.document), r3 = s2.removedTargetIds || [];
      n2 = new ns([], r3, i3, null);
    } else {
      if (!("filter" in e3))
        return L3();
      {
        e3.filter;
        const t5 = e3.filter;
        t5.targetId;
        const s2 = t5.count || 0, i3 = new $n(s2), r3 = t5.targetId;
        n2 = new ss(r3, i3);
      }
    }
    return n2;
  }
  function Cs(t4, e3) {
    return {
      documents: [Is(t4, e3.path)]
    };
  }
  function xs(t4, e3) {
    const n2 = {
      structuredQuery: {}
    }, s2 = e3.path;
    e3.collectionGroup !== null ? (n2.parent = Is(t4, s2), n2.structuredQuery.from = [{
      collectionId: e3.collectionGroup,
      allDescendants: true
    }]) : (n2.parent = Is(t4, s2.popLast()), n2.structuredQuery.from = [{
      collectionId: s2.lastSegment()
    }]);
    const i3 = function(t5) {
      if (t5.length === 0)
        return;
      const e4 = t5.map((t6) => function(t7) {
        if (t7.op === "==") {
          if (jt(t7.value))
            return {
              unaryFilter: {
                field: $s(t7.field),
                op: "IS_NAN"
              }
            };
          if (Qt(t7.value))
            return {
              unaryFilter: {
                field: $s(t7.field),
                op: "IS_NULL"
              }
            };
        } else if (t7.op === "!=") {
          if (jt(t7.value))
            return {
              unaryFilter: {
                field: $s(t7.field),
                op: "IS_NOT_NAN"
              }
            };
          if (Qt(t7.value))
            return {
              unaryFilter: {
                field: $s(t7.field),
                op: "IS_NOT_NULL"
              }
            };
        }
        return {
          fieldFilter: {
            field: $s(t7.field),
            op: Fs(t7.op),
            value: t7.value
          }
        };
      }(t6));
      if (e4.length === 1)
        return e4[0];
      return {
        compositeFilter: {
          op: "AND",
          filters: e4
        }
      };
    }(e3.filters);
    i3 && (n2.structuredQuery.where = i3);
    const r3 = function(t5) {
      if (t5.length === 0)
        return;
      return t5.map((t6) => function(t7) {
        return {
          field: $s(t7.field),
          direction: Os(t7.dir)
        };
      }(t6));
    }(e3.orderBy);
    r3 && (n2.structuredQuery.orderBy = r3);
    const o3 = function(t5, e4) {
      return t5.N || St(e4) ? e4 : {
        value: e4
      };
    }(t4, e3.limit);
    var u3;
    return o3 !== null && (n2.structuredQuery.limit = o3), e3.startAt && (n2.structuredQuery.startAt = {
      before: (u3 = e3.startAt).inclusive,
      values: u3.position
    }), e3.endAt && (n2.structuredQuery.endAt = function(t5) {
      return {
        before: !t5.inclusive,
        values: t5.position
      };
    }(e3.endAt)), n2;
  }
  function Ns(t4) {
    let e3 = Ts(t4.parent);
    const n2 = t4.structuredQuery, s2 = n2.from ? n2.from.length : 0;
    let i3 = null;
    if (s2 > 0) {
      U2(s2 === 1);
      const t5 = n2.from[0];
      t5.allDescendants ? i3 = t5.collectionId : e3 = e3.child(t5.collectionId);
    }
    let r3 = [];
    n2.where && (r3 = Ms(n2.where));
    let o3 = [];
    n2.orderBy && (o3 = n2.orderBy.map((t5) => function(t6) {
      return new Fe(Bs(t6.field), function(t7) {
        switch (t7) {
          case "ASCENDING":
            return "asc";
          case "DESCENDING":
            return "desc";
          default:
            return;
        }
      }(t6.direction));
    }(t5)));
    let u3 = null;
    n2.limit && (u3 = function(t5) {
      let e4;
      return e4 = typeof t5 == "object" ? t5.value : t5, St(e4) ? null : e4;
    }(n2.limit));
    let a3 = null;
    n2.startAt && (a3 = function(t5) {
      const e4 = !!t5.before, n3 = t5.values || [];
      return new Oe(n3, e4);
    }(n2.startAt));
    let c3 = null;
    return n2.endAt && (c3 = function(t5) {
      const e4 = !t5.before, n3 = t5.values || [];
      return new Oe(n3, e4);
    }(n2.endAt)), qe(e3, i3, o3, r3, u3, "F", a3, c3);
  }
  function ks(t4, e3) {
    const n2 = function(t5, e4) {
      switch (e4) {
        case 0:
          return null;
        case 1:
          return "existence-filter-mismatch";
        case 2:
          return "limbo-document";
        default:
          return L3();
      }
    }(0, e3.purpose);
    return n2 == null ? null : {
      "goog-listen-tags": n2
    };
  }
  function Ms(t4) {
    return t4 ? t4.unaryFilter !== void 0 ? [Us(t4)] : t4.fieldFilter !== void 0 ? [Ls(t4)] : t4.compositeFilter !== void 0 ? t4.compositeFilter.filters.map((t5) => Ms(t5)).reduce((t5, e3) => t5.concat(e3)) : L3() : [];
  }
  function Os(t4) {
    return cs[t4];
  }
  function Fs(t4) {
    return hs[t4];
  }
  function $s(t4) {
    return {
      fieldPath: t4.canonicalString()
    };
  }
  function Bs(t4) {
    return mt.fromServerFormat(t4.fieldPath);
  }
  function Ls(t4) {
    return Ve.create(Bs(t4.fieldFilter.field), function(t5) {
      switch (t5) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        default:
          return L3();
      }
    }(t4.fieldFilter.op), t4.fieldFilter.value);
  }
  function Us(t4) {
    switch (t4.unaryFilter.op) {
      case "IS_NAN":
        const e3 = Bs(t4.unaryFilter.field);
        return Ve.create(e3, "==", {
          doubleValue: NaN
        });
      case "IS_NULL":
        const n2 = Bs(t4.unaryFilter.field);
        return Ve.create(n2, "==", {
          nullValue: "NULL_VALUE"
        });
      case "IS_NOT_NAN":
        const s2 = Bs(t4.unaryFilter.field);
        return Ve.create(s2, "!=", {
          doubleValue: NaN
        });
      case "IS_NOT_NULL":
        const i3 = Bs(t4.unaryFilter.field);
        return Ve.create(i3, "!=", {
          nullValue: "NULL_VALUE"
        });
      default:
        return L3();
    }
  }
  function Ks(t4) {
    return t4.length >= 4 && t4.get(0) === "projects" && t4.get(2) === "databases";
  }
  function Ai(t4) {
    return t4.name === "IndexedDbTransactionError";
  }
  function Ki(t4) {
    const e3 = Ns({
      parent: t4.parent,
      structuredQuery: t4.structuredQuery
    });
    return t4.limitType === "LAST" ? Je(e3, e3.limit, "L") : e3;
  }
  async function Dr(t4) {
    if (t4.code !== G.FAILED_PRECONDITION || t4.message !== mi)
      throw t4;
    O3("LocalStore", "Unexpectedly lost primary lease");
  }
  function no(t4, e3, n2, s2) {
    return new eo(t4, e3, n2, s2);
  }
  async function so(t4, e3) {
    const n2 = K2(t4);
    return await n2.persistence.runTransaction("Handle user change", "readonly", (t5) => {
      let s2;
      return n2.Bs.getAllMutationBatches(t5).next((i3) => (s2 = i3, n2.li(e3), n2.Bs.getAllMutationBatches(t5))).next((e4) => {
        const i3 = [], r3 = [];
        let o3 = Yn();
        for (const t6 of s2) {
          i3.push(t6.batchId);
          for (const e5 of t6.mutations)
            o3 = o3.add(e5.key);
        }
        for (const t6 of e4) {
          r3.push(t6.batchId);
          for (const e5 of t6.mutations)
            o3 = o3.add(e5.key);
        }
        return n2.fi.Ks(t5, o3).next((t6) => ({
          di: t6,
          removedBatchIds: i3,
          addedBatchIds: r3
        }));
      });
    });
  }
  function ro(t4) {
    const e3 = K2(t4);
    return e3.persistence.runTransaction("Get last remote snapshot version", "readonly", (t5) => e3.fs.getLastRemoteSnapshotVersion(t5));
  }
  function oo(t4, e3) {
    const n2 = K2(t4), s2 = e3.snapshotVersion;
    let i3 = n2.ui;
    return n2.persistence.runTransaction("Apply remote event", "readwrite-primary", (t5) => {
      const r3 = n2.hi.newChangeBuffer({
        trackRemovals: true
      });
      i3 = n2.ui;
      const o3 = [];
      e3.targetChanges.forEach((r4, u4) => {
        const a3 = i3.get(u4);
        if (!a3)
          return;
        o3.push(n2.fs.removeMatchingKeys(t5, r4.removedDocuments, u4).next(() => n2.fs.addMatchingKeys(t5, r4.addedDocuments, u4)));
        let c3 = a3.withSequenceNumber(t5.currentSequenceNumber);
        e3.targetMismatches.has(u4) ? c3 = c3.withResumeToken(pt.EMPTY_BYTE_STRING, ct.min()).withLastLimboFreeSnapshotVersion(ct.min()) : r4.resumeToken.approximateByteSize() > 0 && (c3 = c3.withResumeToken(r4.resumeToken, s2)), i3 = i3.insert(u4, c3), function(t6, e4, n3) {
          if (t6.resumeToken.approximateByteSize() === 0)
            return true;
          if (e4.snapshotVersion.toMicroseconds() - t6.snapshotVersion.toMicroseconds() >= 3e8)
            return true;
          return n3.addedDocuments.size + n3.modifiedDocuments.size + n3.removedDocuments.size > 0;
        }(a3, c3, r4) && o3.push(n2.fs.updateTargetData(t5, c3));
      });
      let u3 = Qn();
      if (e3.documentUpdates.forEach((s3) => {
        e3.resolvedLimboDocuments.has(s3) && o3.push(n2.persistence.referenceDelegate.updateLimboDocument(t5, s3));
      }), o3.push(uo(t5, r3, e3.documentUpdates).next((t6) => {
        u3 = t6;
      })), !s2.isEqual(ct.min())) {
        const e4 = n2.fs.getLastRemoteSnapshotVersion(t5).next((e5) => n2.fs.setTargetsMetadata(t5, t5.currentSequenceNumber, s2));
        o3.push(e4);
      }
      return yi.waitFor(o3).next(() => r3.apply(t5)).next(() => n2.fi.Gs(t5, u3)).next(() => u3);
    }).then((t5) => (n2.ui = i3, t5));
  }
  function uo(t4, e3, n2) {
    let s2 = Yn();
    return n2.forEach((t5) => s2 = s2.add(t5)), e3.getEntries(t4, s2).next((t5) => {
      let s3 = Qn();
      return n2.forEach((n3, i3) => {
        const r3 = t5.get(n3);
        i3.isNoDocument() && i3.version.isEqual(ct.min()) ? (e3.removeEntry(n3, i3.readTime), s3 = s3.insert(n3, i3)) : !r3.isValidDocument() || i3.version.compareTo(r3.version) > 0 || i3.version.compareTo(r3.version) === 0 && r3.hasPendingWrites ? (e3.addEntry(i3), s3 = s3.insert(n3, i3)) : O3("LocalStore", "Ignoring outdated watch update for ", n3, ". Current version:", r3.version, " Watch version:", i3.version);
      }), s3;
    });
  }
  function co(t4, e3) {
    const n2 = K2(t4);
    return n2.persistence.runTransaction("Allocate target", "readwrite", (t5) => {
      let s2;
      return n2.fs.getTargetData(t5, e3).next((i3) => i3 ? (s2 = i3, yi.resolve(s2)) : n2.fs.allocateTargetId(t5).next((i4) => (s2 = new Ni(e3, i4, 0, t5.currentSequenceNumber), n2.fs.addTargetData(t5, s2).next(() => s2))));
    }).then((t5) => {
      const s2 = n2.ui.get(t5.targetId);
      return (s2 === null || t5.snapshotVersion.compareTo(s2.snapshotVersion) > 0) && (n2.ui = n2.ui.insert(t5.targetId, t5), n2.ai.set(e3, t5.targetId)), t5;
    });
  }
  async function ho(t4, e3, n2) {
    const s2 = K2(t4), i3 = s2.ui.get(e3), r3 = n2 ? "readwrite" : "readwrite-primary";
    try {
      n2 || await s2.persistence.runTransaction("Release target", r3, (t5) => s2.persistence.referenceDelegate.removeTarget(t5, i3));
    } catch (t5) {
      if (!Ai(t5))
        throw t5;
      O3("LocalStore", `Failed to update sequence numbers for target ${e3}: ${t5}`);
    }
    s2.ui = s2.ui.remove(e3), s2.ai.delete(i3.target);
  }
  function lo(t4, e3, n2) {
    const s2 = K2(t4);
    let i3 = ct.min(), r3 = Yn();
    return s2.persistence.runTransaction("Execute query", "readonly", (t5) => function(t6, e4, n3) {
      const s3 = K2(t6), i4 = s3.ai.get(n3);
      return i4 !== void 0 ? yi.resolve(s3.ui.get(i4)) : s3.fs.getTargetData(e4, n3);
    }(s2, t5, He(e3)).next((e4) => {
      if (e4)
        return i3 = e4.lastLimboFreeSnapshotVersion, s2.fs.getMatchingKeysForTargetId(t5, e4.targetId).next((t6) => {
          r3 = t6;
        });
    }).next(() => s2.oi.Qs(t5, e3, n2 ? i3 : ct.min(), n2 ? r3 : Yn())).next((t6) => (wo(s2, en(e3), t6), {
      documents: t6,
      _i: r3
    })));
  }
  function wo(t4, e3, n2) {
    let s2 = ct.min();
    n2.forEach((t5, e4) => {
      e4.readTime.compareTo(s2) > 0 && (s2 = e4.readTime);
    }), t4.ci.set(e3, s2);
  }
  function Qo() {
    return typeof document != "undefined" ? document : null;
  }
  function jo(t4) {
    return new ls(t4, true);
  }
  async function tu(t4) {
    if (au(t4))
      for (const e3 of t4.mu)
        await e3(true);
  }
  async function eu(t4) {
    for (const e3 of t4.mu)
      await e3(false);
  }
  function nu(t4, e3) {
    const n2 = K2(t4);
    n2._u.has(e3.targetId) || (n2._u.set(e3.targetId, e3), uu(n2) ? ou(n2) : Pu(n2).Mo() && iu(n2, e3));
  }
  function su(t4, e3) {
    const n2 = K2(t4), s2 = Pu(n2);
    n2._u.delete(e3), s2.Mo() && ru(n2, e3), n2._u.size === 0 && (s2.Mo() ? s2.$o() : au(n2) && n2.yu.set("Unknown"));
  }
  function iu(t4, e3) {
    t4.pu.Z(e3.targetId), Pu(t4).Ho(e3);
  }
  function ru(t4, e3) {
    t4.pu.Z(e3), Pu(t4).Jo(e3);
  }
  function ou(t4) {
    t4.pu = new os({
      getRemoteKeysForTarget: (e3) => t4.remoteSyncer.getRemoteKeysForTarget(e3),
      Et: (e3) => t4._u.get(e3) || null
    }), Pu(t4).start(), t4.yu.au();
  }
  function uu(t4) {
    return au(t4) && !Pu(t4).ko() && t4._u.size > 0;
  }
  function au(t4) {
    return K2(t4).wu.size === 0;
  }
  function cu(t4) {
    t4.pu = void 0;
  }
  async function hu(t4) {
    t4._u.forEach((e3, n2) => {
      iu(t4, e3);
    });
  }
  async function lu(t4, e3) {
    cu(t4), uu(t4) ? (t4.yu.lu(e3), ou(t4)) : t4.yu.set("Unknown");
  }
  async function fu(t4, e3, n2) {
    if (t4.yu.set("Online"), e3 instanceof is && e3.state === 2 && e3.cause)
      try {
        await async function(t5, e4) {
          const n3 = e4.cause;
          for (const s2 of e4.targetIds)
            t5._u.has(s2) && (await t5.remoteSyncer.rejectListen(s2, n3), t5._u.delete(s2), t5.pu.removeTarget(s2));
        }(t4, e3);
      } catch (n3) {
        O3("RemoteStore", "Failed to remove targets %s: %s ", e3.targetIds.join(","), n3), await du(t4, n3);
      }
    else if (e3 instanceof ns ? t4.pu.ut(e3) : e3 instanceof ss ? t4.pu._t(e3) : t4.pu.ht(e3), !n2.isEqual(ct.min()))
      try {
        const e4 = await ro(t4.localStore);
        n2.compareTo(e4) >= 0 && await function(t5, e5) {
          const n3 = t5.pu.yt(e5);
          return n3.targetChanges.forEach((n4, s2) => {
            if (n4.resumeToken.approximateByteSize() > 0) {
              const i3 = t5._u.get(s2);
              i3 && t5._u.set(s2, i3.withResumeToken(n4.resumeToken, e5));
            }
          }), n3.targetMismatches.forEach((e6) => {
            const n4 = t5._u.get(e6);
            if (!n4)
              return;
            t5._u.set(e6, n4.withResumeToken(pt.EMPTY_BYTE_STRING, n4.snapshotVersion)), ru(t5, e6);
            const s2 = new Ni(n4.target, e6, 1, n4.sequenceNumber);
            iu(t5, s2);
          }), t5.remoteSyncer.applyRemoteEvent(n3);
        }(t4, n2);
      } catch (e4) {
        O3("RemoteStore", "Failed to raise snapshot:", e4), await du(t4, e4);
      }
  }
  async function du(t4, e3, n2) {
    if (!Ai(e3))
      throw e3;
    t4.wu.add(1), await eu(t4), t4.yu.set("Offline"), n2 || (n2 = () => ro(t4.localStore)), t4.asyncQueue.enqueueRetryable(async () => {
      O3("RemoteStore", "Retrying IndexedDB access"), await n2(), t4.wu.delete(1), await tu(t4);
    });
  }
  async function Ru(t4, e3) {
    const n2 = K2(t4);
    n2.asyncQueue.verifyOperationInProgress(), O3("RemoteStore", "RemoteStore received new credentials");
    const s2 = au(n2);
    n2.wu.add(3), await eu(n2), s2 && n2.yu.set("Unknown"), await n2.remoteSyncer.handleCredentialChange(e3), n2.wu.delete(3), await tu(n2);
  }
  async function bu(t4, e3) {
    const n2 = K2(t4);
    e3 ? (n2.wu.delete(2), await tu(n2)) : e3 || (n2.wu.add(2), await eu(n2), n2.yu.set("Unknown"));
  }
  function Pu(t4) {
    return t4.Iu || (t4.Iu = function(t5, e3, n2) {
      const s2 = K2(t5);
      return s2.iu(), new Ho(e3, s2.So, s2.authCredentials, s2.appCheckCredentials, s2.M, n2);
    }(t4.datastore, t4.asyncQueue, {
      Xr: hu.bind(null, t4),
      eo: lu.bind(null, t4),
      zo: fu.bind(null, t4)
    }), t4.mu.push(async (e3) => {
      e3 ? (t4.Iu.Fo(), uu(t4) ? ou(t4) : t4.yu.set("Unknown")) : (await t4.Iu.stop(), cu(t4));
    })), t4.Iu;
  }
  function Su(t4, e3) {
    if (F2("AsyncQueue", `${e3}: ${t4}`), Ai(t4))
      return new Q2(G.UNAVAILABLE, `${e3}: ${t4}`);
    throw t4;
  }
  async function Mu(t4, e3) {
    const n2 = K2(t4), s2 = e3.query;
    let i3 = false, r3 = n2.queries.get(s2);
    if (r3 || (i3 = true, r3 = new Nu()), i3)
      try {
        r3.Ru = await n2.onListen(s2);
      } catch (t5) {
        const n3 = Su(t5, `Initialization of query '${Ze(e3.query)}' failed`);
        return void e3.onError(n3);
      }
    if (n2.queries.set(s2, r3), r3.listeners.push(e3), e3.Pu(n2.onlineState), r3.Ru) {
      e3.Vu(r3.Ru) && Bu(n2);
    }
  }
  async function Ou(t4, e3) {
    const n2 = K2(t4), s2 = e3.query;
    let i3 = false;
    const r3 = n2.queries.get(s2);
    if (r3) {
      const t5 = r3.listeners.indexOf(e3);
      t5 >= 0 && (r3.listeners.splice(t5, 1), i3 = r3.listeners.length === 0);
    }
    if (i3)
      return n2.queries.delete(s2), n2.onUnlisten(s2);
  }
  function Fu(t4, e3) {
    const n2 = K2(t4);
    let s2 = false;
    for (const t5 of e3) {
      const e4 = t5.query, i3 = n2.queries.get(e4);
      if (i3) {
        for (const e5 of i3.listeners)
          e5.Vu(t5) && (s2 = true);
        i3.Ru = t5;
      }
    }
    s2 && Bu(n2);
  }
  function $u(t4, e3, n2) {
    const s2 = K2(t4), i3 = s2.queries.get(e3);
    if (i3)
      for (const t5 of i3.listeners)
        t5.onError(n2);
    s2.queries.delete(e3);
  }
  function Bu(t4) {
    t4.bu.forEach((t5) => {
      t5.next();
    });
  }
  async function Yu(t4, e3) {
    const n2 = Pa(t4);
    let s2, i3;
    const r3 = n2.ia.get(e3);
    if (r3)
      s2 = r3.targetId, n2.sharedClientState.addLocalQueryTarget(s2), i3 = r3.view.ea();
    else {
      const t5 = await co(n2.localStore, He(e3));
      n2.isPrimaryClient && nu(n2.remoteStore, t5);
      const r4 = n2.sharedClientState.addLocalQueryTarget(t5.targetId);
      s2 = t5.targetId, i3 = await Xu(n2, e3, s2, r4 === "current");
    }
    return i3;
  }
  async function Xu(t4, e3, n2, s2) {
    t4._a = (e4, n3, s3) => async function(t5, e5, n4, s4) {
      let i4 = e5.view.Wu(n4);
      i4.ii && (i4 = await lo(t5.localStore, e5.query, false).then(({ documents: t6 }) => e5.view.Wu(t6, i4)));
      const r4 = s4 && s4.targetChanges.get(e5.targetId), o4 = e5.view.applyChanges(i4, t5.isPrimaryClient, r4);
      return la2(t5, e5.targetId, o4.Xu), o4.snapshot;
    }(t4, e4, n3, s3);
    const i3 = await lo(t4.localStore, e3, true), r3 = new Wu(e3, i3._i), o3 = r3.Wu(i3.documents), u3 = es.createSynthesizedTargetChangeForCurrentChange(n2, s2 && t4.onlineState !== "Offline"), a3 = r3.applyChanges(o3, t4.isPrimaryClient, u3);
    la2(t4, n2, a3.Xu);
    const c3 = new zu(e3, n2, r3);
    return t4.ia.set(e3, c3), t4.ra.has(n2) ? t4.ra.get(n2).push(e3) : t4.ra.set(n2, [e3]), a3.snapshot;
  }
  async function Zu(t4, e3) {
    const n2 = K2(t4), s2 = n2.ia.get(e3), i3 = n2.ra.get(s2.targetId);
    if (i3.length > 1)
      return n2.ra.set(s2.targetId, i3.filter((t5) => !Ye(t5, e3))), void n2.ia.delete(e3);
    if (n2.isPrimaryClient) {
      n2.sharedClientState.removeLocalQueryTarget(s2.targetId);
      n2.sharedClientState.isActiveQueryTarget(s2.targetId) || await ho(n2.localStore, s2.targetId, false).then(() => {
        n2.sharedClientState.clearQueryState(s2.targetId), su(n2.remoteStore, s2.targetId), ca(n2, s2.targetId);
      }).catch(Dr);
    } else
      ca(n2, s2.targetId), await ho(n2.localStore, s2.targetId, true);
  }
  async function ea2(t4, e3) {
    const n2 = K2(t4);
    try {
      const t5 = await oo(n2.localStore, e3);
      e3.targetChanges.forEach((t6, e4) => {
        const s2 = n2.aa.get(e4);
        s2 && (U2(t6.addedDocuments.size + t6.modifiedDocuments.size + t6.removedDocuments.size <= 1), t6.addedDocuments.size > 0 ? s2.na = true : t6.modifiedDocuments.size > 0 ? U2(s2.na) : t6.removedDocuments.size > 0 && (U2(s2.na), s2.na = false));
      }), await _a(n2, t5, e3);
    } catch (t5) {
      await Dr(t5);
    }
  }
  function na2(t4, e3, n2) {
    const s2 = K2(t4);
    if (s2.isPrimaryClient && n2 === 0 || !s2.isPrimaryClient && n2 === 1) {
      const t5 = [];
      s2.ia.forEach((n3, s3) => {
        const i3 = s3.view.Pu(e3);
        i3.snapshot && t5.push(i3.snapshot);
      }), function(t6, e4) {
        const n3 = K2(t6);
        n3.onlineState = e4;
        let s3 = false;
        n3.queries.forEach((t7, n4) => {
          for (const t8 of n4.listeners)
            t8.Pu(e4) && (s3 = true);
        }), s3 && Bu(n3);
      }(s2.eventManager, e3), t5.length && s2.sa.zo(t5), s2.onlineState = e3, s2.isPrimaryClient && s2.sharedClientState.setOnlineState(e3);
    }
  }
  async function sa2(t4, e3, n2) {
    const s2 = K2(t4);
    s2.sharedClientState.updateQueryState(e3, "rejected", n2);
    const i3 = s2.aa.get(e3), r3 = i3 && i3.key;
    if (r3) {
      let t5 = new fe(xt.comparator);
      t5 = t5.insert(r3, ne.newNoDocument(r3, ct.min()));
      const n3 = Yn().add(r3), i4 = new ts(ct.min(), /* @__PURE__ */ new Map(), new we(rt), t5, n3);
      await ea2(s2, i4), s2.ua = s2.ua.remove(r3), s2.aa.delete(e3), da2(s2);
    } else
      await ho(s2.localStore, e3, false).then(() => ca(s2, e3, n2)).catch(Dr);
  }
  function ca(t4, e3, n2 = null) {
    t4.sharedClientState.removeLocalQueryTarget(e3);
    for (const s2 of t4.ra.get(e3))
      t4.ia.delete(s2), n2 && t4.sa.wa(s2, n2);
    if (t4.ra.delete(e3), t4.isPrimaryClient) {
      t4.ca.vi(e3).forEach((e4) => {
        t4.ca.containsKey(e4) || ha2(t4, e4);
      });
    }
  }
  function ha2(t4, e3) {
    t4.oa.delete(e3.path.canonicalString());
    const n2 = t4.ua.get(e3);
    n2 !== null && (su(t4.remoteStore, n2), t4.ua = t4.ua.remove(e3), t4.aa.delete(n2), da2(t4));
  }
  function la2(t4, e3, n2) {
    for (const s2 of n2)
      if (s2 instanceof Qu)
        t4.ca.addReference(s2.key, e3), fa2(t4, s2);
      else if (s2 instanceof ju) {
        O3("SyncEngine", "Document no longer in limbo: " + s2.key), t4.ca.removeReference(s2.key, e3);
        t4.ca.containsKey(s2.key) || ha2(t4, s2.key);
      } else
        L3();
  }
  function fa2(t4, e3) {
    const n2 = e3.key, s2 = n2.path.canonicalString();
    t4.ua.get(n2) || t4.oa.has(s2) || (O3("SyncEngine", "New document in limbo: " + n2), t4.oa.add(s2), da2(t4));
  }
  function da2(t4) {
    for (; t4.oa.size > 0 && t4.ua.size < t4.maxConcurrentLimboResolutions; ) {
      const e3 = t4.oa.values().next().value;
      t4.oa.delete(e3);
      const n2 = new xt(_t.fromString(e3)), s2 = t4.fa.next();
      t4.aa.set(s2, new Hu(n2)), t4.ua = t4.ua.insert(n2, s2), nu(t4.remoteStore, new Ni(He(Ke(n2.path)), s2, 2, nt.A));
    }
  }
  async function _a(t4, e3, n2) {
    const s2 = K2(t4), i3 = [], r3 = [], o3 = [];
    s2.ia.isEmpty() || (s2.ia.forEach((t5, u3) => {
      o3.push(s2._a(u3, e3, n2).then((t6) => {
        if (t6) {
          s2.isPrimaryClient && s2.sharedClientState.updateQueryState(u3.targetId, t6.fromCache ? "not-current" : "current"), i3.push(t6);
          const e4 = Zr.Ys(u3.targetId, t6);
          r3.push(e4);
        }
      }));
    }), await Promise.all(o3), s2.sa.zo(i3), await async function(t5, e4) {
      const n3 = K2(t5);
      try {
        await n3.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (t6) => yi.forEach(e4, (e5) => yi.forEach(e5.Hs, (s3) => n3.persistence.referenceDelegate.addReference(t6, e5.targetId, s3)).next(() => yi.forEach(e5.Js, (s3) => n3.persistence.referenceDelegate.removeReference(t6, e5.targetId, s3)))));
      } catch (t6) {
        if (!Ai(t6))
          throw t6;
        O3("LocalStore", "Failed to update sequence numbers: " + t6);
      }
      for (const t6 of e4) {
        const e5 = t6.targetId;
        if (!t6.fromCache) {
          const t7 = n3.ui.get(e5), s3 = t7.snapshotVersion, i4 = t7.withLastLimboFreeSnapshotVersion(s3);
          n3.ui = n3.ui.insert(e5, i4);
        }
      }
    }(s2.localStore, r3));
  }
  async function wa(t4, e3) {
    const n2 = K2(t4);
    if (!n2.currentUser.isEqual(e3)) {
      O3("SyncEngine", "User change. New user:", e3.toKey());
      const t5 = await so(n2.localStore, e3);
      n2.currentUser = e3, function(t6, e4) {
        t6.la.forEach((t7) => {
          t7.forEach((t8) => {
            t8.reject(new Q2(G.CANCELLED, e4));
          });
        }), t6.la.clear();
      }(n2, "'waitForPendingWrites' promise is rejected due to a user change."), n2.sharedClientState.handleUserChange(e3, t5.removedBatchIds, t5.addedBatchIds), await _a(n2, t5.di);
    }
  }
  function ma2(t4, e3) {
    const n2 = K2(t4), s2 = n2.aa.get(e3);
    if (s2 && s2.na)
      return Yn().add(s2.key);
    {
      let t5 = Yn();
      const s3 = n2.ra.get(e3);
      if (!s3)
        return t5;
      for (const e4 of s3) {
        const s4 = n2.ia.get(e4);
        t5 = t5.unionWith(s4.view.ju);
      }
      return t5;
    }
  }
  function Pa(t4) {
    const e3 = K2(t4);
    return e3.remoteStore.remoteSyncer.applyRemoteEvent = ea2.bind(null, e3), e3.remoteStore.remoteSyncer.getRemoteKeysForTarget = ma2.bind(null, e3), e3.remoteStore.remoteSyncer.rejectListen = sa2.bind(null, e3), e3.sa.zo = Fu.bind(null, e3.eventManager), e3.sa.wa = $u.bind(null, e3.eventManager), e3;
  }
  async function Ba(t4, e3) {
    t4.asyncQueue.verifyOperationInProgress(), O3("FirestoreClient", "Initializing OfflineComponentProvider");
    const n2 = await t4.getConfiguration();
    await e3.initialize(n2);
    let s2 = n2.initialUser;
    t4.setCredentialChangeListener(async (t5) => {
      s2.isEqual(t5) || (await so(e3.localStore, t5), s2 = t5);
    }), e3.persistence.setDatabaseDeletedListener(() => t4.terminate()), t4.offlineComponents = e3;
  }
  async function La2(t4, e3) {
    t4.asyncQueue.verifyOperationInProgress();
    const n2 = await Ua2(t4);
    O3("FirestoreClient", "Initializing OnlineComponentProvider");
    const s2 = await t4.getConfiguration();
    await e3.initialize(n2, s2), t4.setCredentialChangeListener((t5) => Ru(e3.remoteStore, t5)), t4.setAppCheckTokenChangeListener((t5, n3) => Ru(e3.remoteStore, n3)), t4.onlineComponents = e3;
  }
  async function Ua2(t4) {
    return t4.offlineComponents || (O3("FirestoreClient", "Using default OfflineComponentProvider"), await Ba(t4, new Sa2())), t4.offlineComponents;
  }
  async function qa2(t4) {
    return t4.onlineComponents || (O3("FirestoreClient", "Using default OnlineComponentProvider"), await La2(t4, new xa2())), t4.onlineComponents;
  }
  async function Wa2(t4) {
    const e3 = await qa2(t4), n2 = e3.eventManager;
    return n2.onListen = Yu.bind(null, e3.syncEngine), n2.onUnlisten = Zu.bind(null, e3.syncEngine), n2;
  }
  function rc2(t4, e3, n2) {
    if (!n2)
      throw new Q2(G.INVALID_ARGUMENT, `Function ${t4}() cannot be called with an empty ${e3}.`);
  }
  function oc2(t4, e3, n2, s2) {
    if (e3 === true && s2 === true)
      throw new Q2(G.INVALID_ARGUMENT, `${t4} and ${n2} cannot be used together.`);
  }
  function ac2(t4) {
    if (xt.isDocumentKey(t4))
      throw new Q2(G.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t4} has ${t4.length}.`);
  }
  function cc2(t4) {
    if (t4 === void 0)
      return "undefined";
    if (t4 === null)
      return "null";
    if (typeof t4 == "string")
      return t4.length > 20 && (t4 = `${t4.substring(0, 20)}...`), JSON.stringify(t4);
    if (typeof t4 == "number" || typeof t4 == "boolean")
      return "" + t4;
    if (typeof t4 == "object") {
      if (t4 instanceof Array)
        return "an array";
      {
        const e3 = function(t5) {
          if (t5.constructor)
            return t5.constructor.name;
          return null;
        }(t4);
        return e3 ? `a custom ${e3} object` : "an object";
      }
    }
    return typeof t4 == "function" ? "a function" : L3();
  }
  function hc2(t4, e3) {
    if ("_delegate" in t4 && (t4 = t4._delegate), !(t4 instanceof e3)) {
      if (e3.name === t4.constructor.name)
        throw new Q2(G.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
      {
        const n2 = cc2(t4);
        throw new Q2(G.INVALID_ARGUMENT, `Expected type '${e3.name}', but it was: ${n2}`);
      }
    }
    return t4;
  }
  function yc2(t4, e3, ...n2) {
    if (t4 = getModularInstance(t4), rc2("collection", "path", e3), t4 instanceof dc2) {
      const s2 = _t.fromString(e3, ...n2);
      return ac2(s2), new gc2(t4, null, s2);
    }
    {
      if (!(t4 instanceof wc2 || t4 instanceof gc2))
        throw new Q2(G.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
      const s2 = t4._path.child(_t.fromString(e3, ...n2));
      return ac2(s2), new gc2(t4.firestore, null, s2);
    }
  }
  function Rc2(t4) {
    return function(t5, e3) {
      if (typeof t5 != "object" || t5 === null)
        return false;
      const n2 = t5;
      for (const t6 of e3)
        if (t6 in n2 && typeof n2[t6] == "function")
          return true;
      return false;
    }(t4, ["next", "error", "complete"]);
  }
  function Sc2(e3 = getApp()) {
    return _getProvider(e3, "firestore").getImmediate();
  }
  function Dc2(t4) {
    return t4._firestoreClient || Cc2(t4), t4._firestoreClient.verifyNotTerminated(), t4._firestoreClient;
  }
  function Cc2(t4) {
    var e3;
    const n2 = t4._freezeSettings(), s2 = function(t5, e4, n3, s3) {
      return new Vt(t5, e4, n3, s3.host, s3.ssl, s3.experimentalForceLongPolling, s3.experimentalAutoDetectLongPolling, s3.useFetchStreams);
    }(t4._databaseId, ((e3 = t4._app) === null || e3 === void 0 ? void 0 : e3.options.appId) || "", t4._persistenceKey, n2);
    t4._firestoreClient = new $a2(t4._authCredentials, t4._appCheckCredentials, t4._queue, s2);
  }
  function gh(t4, e3, n2) {
    if (e3.search(mh) >= 0)
      throw yh(`Invalid field path (${e3}). Paths must not contain '~', '*', '/', '[', or ']'`, t4, false, void 0, n2);
    try {
      return new Kc2(...e3.split("."))._internalPath;
    } catch (s2) {
      throw yh(`Invalid field path (${e3}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, t4, false, void 0, n2);
    }
  }
  function yh(t4, e3, n2, s2, i3) {
    const r3 = s2 && !s2.isEmpty(), o3 = i3 !== void 0;
    let u3 = `Function ${e3}() called with invalid data`;
    n2 && (u3 += " (via `toFirestore()`)"), u3 += ". ";
    let a3 = "";
    return (r3 || o3) && (a3 += " (found", r3 && (a3 += ` in field ${s2}`), o3 && (a3 += ` in document ${i3}`), a3 += ")"), new Q2(G.INVALID_ARGUMENT, u3 + t4 + a3);
  }
  function Eh(t4, e3) {
    return typeof e3 == "string" ? gh(t4, e3) : e3 instanceof Kc2 ? e3._internalPath : e3._delegate._internalPath;
  }
  function Vh(t4) {
    switch (t4) {
      case 0:
        return "added";
      case 2:
      case 3:
        return "modified";
      case 1:
        return "removed";
      default:
        return L3();
    }
  }
  function Sh(t4) {
    if (t4.limitType === "L" && t4.explicitOrderBy.length === 0)
      throw new Q2(G.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
  }
  function fl(t4, ...e3) {
    var n2, s2, i3;
    t4 = getModularInstance(t4);
    let r3 = {
      includeMetadataChanges: false
    }, o3 = 0;
    typeof e3[o3] != "object" || Rc2(e3[o3]) || (r3 = e3[o3], o3++);
    const u3 = {
      includeMetadataChanges: r3.includeMetadataChanges
    };
    if (Rc2(e3[o3])) {
      const t5 = e3[o3];
      e3[o3] = (n2 = t5.next) === null || n2 === void 0 ? void 0 : n2.bind(t5), e3[o3 + 1] = (s2 = t5.error) === null || s2 === void 0 ? void 0 : s2.bind(t5), e3[o3 + 2] = (i3 = t5.complete) === null || i3 === void 0 ? void 0 : i3.bind(t5);
    }
    let a3, c3, h2;
    if (t4 instanceof wc2)
      c3 = hc2(t4.firestore, Vc2), h2 = Ke(t4._key.path), a3 = {
        next: (n3) => {
          e3[o3] && e3[o3](wl(c3, t4, n3));
        },
        error: e3[o3 + 1],
        complete: e3[o3 + 2]
      };
    else {
      const n3 = hc2(t4, mc2);
      c3 = hc2(n3.firestore, Vc2), h2 = n3._query;
      const s3 = new nl(c3);
      a3 = {
        next: (t5) => {
          e3[o3] && e3[o3](new Ph(c3, s3, n3, t5));
        },
        error: e3[o3 + 1],
        complete: e3[o3 + 2]
      }, Sh(t4._query);
    }
    return function(t5, e4, n3, s3) {
      const i4 = new ka2(s3), r4 = new Lu(e4, i4, n3);
      return t5.asyncQueue.enqueueAndForget(async () => Mu(await Wa2(t5), r4)), () => {
        i4.Aa(), t5.asyncQueue.enqueueAndForget(async () => Ou(await Wa2(t5), r4));
      };
    }(Dc2(c3), h2, u3, a3);
  }
  function wl(t4, e3, n2) {
    const s2 = n2.docs.get(e3._key), i3 = new nl(t4);
    return new Rh(t4, i3, e3._key, s2, new Ah(n2.hasPendingWrites, n2.fromCache), e3.converter);
  }
  var D2, C3, x4, N3, G, Q2, j3, W2, z3, J2, Y2, X2, Z2, tt, nt, it, at, ct, dt, _t, wt, mt, pt, It, Vt, vt, xt, Nt, te, ne, se, he, fe, de, _e, we, me, ye, Ve, ve, Se, De, xe, Ne, ke, Me, Oe, Fe, Ue, an, fn, dn, wn, gn, bn, Cn, xn, $n, Bn, Ln, Kn, Gn, jn, Hn, Jn, Xn, ts, es, ns, ss, is, rs, os, cs, hs, ls, fi, di, _i, wi, mi, gi, yi, Di, xi, Ni, ki, Yi, ar, cr, hr, gr, br, Fr, Xr, Zr, to, eo, yo, po, Io, To, Eo, Ao, Ro, bo, Po, Vo, vo, Oo, $o, Bo, Lo, Uo, qo, Ko, Wo, zo, Ho, Yo, Xo, Zo, vu, Du, Cu, xu, Nu, ku, Lu, Qu, ju, Wu, zu, Hu, Ju, Sa2, xa2, ka2, $a2, ic2, fc2, dc2, wc2, mc2, gc2, Ac2, Vc2, Kc2, Qc2, Wc2, mh, Ih, Th, Ah, Rh, bh, Ph, Jh, nl;
  var init_index_esm20177 = __esm({
    "node_modules/@firebase/firestore/dist/index.esm2017.js"() {
      init_index_esm20174();
      init_index_esm20172();
      init_index_esm20173();
      init_index_esm2017();
      init_index_esm20176();
      D2 = "@firebase/firestore";
      C3 = class {
        constructor(t4) {
          this.uid = t4;
        }
        isAuthenticated() {
          return this.uid != null;
        }
        toKey() {
          return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
        }
        isEqual(t4) {
          return t4.uid === this.uid;
        }
      };
      C3.UNAUTHENTICATED = new C3(null), C3.GOOGLE_CREDENTIALS = new C3("google-credentials-uid"), C3.FIRST_PARTY = new C3("first-party-uid"), C3.MOCK_USER = new C3("mock-user");
      x4 = "9.8.0";
      N3 = new Logger("@firebase/firestore");
      G = {
        OK: "ok",
        CANCELLED: "cancelled",
        UNKNOWN: "unknown",
        INVALID_ARGUMENT: "invalid-argument",
        DEADLINE_EXCEEDED: "deadline-exceeded",
        NOT_FOUND: "not-found",
        ALREADY_EXISTS: "already-exists",
        PERMISSION_DENIED: "permission-denied",
        UNAUTHENTICATED: "unauthenticated",
        RESOURCE_EXHAUSTED: "resource-exhausted",
        FAILED_PRECONDITION: "failed-precondition",
        ABORTED: "aborted",
        OUT_OF_RANGE: "out-of-range",
        UNIMPLEMENTED: "unimplemented",
        INTERNAL: "internal",
        UNAVAILABLE: "unavailable",
        DATA_LOSS: "data-loss"
      };
      Q2 = class extends FirebaseError {
        constructor(t4, e3) {
          super(t4, e3), this.code = t4, this.message = e3, this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
        }
      };
      j3 = class {
        constructor() {
          this.promise = new Promise((t4, e3) => {
            this.resolve = t4, this.reject = e3;
          });
        }
      };
      W2 = class {
        constructor(t4, e3) {
          this.user = e3, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${t4}`);
        }
      };
      z3 = class {
        getToken() {
          return Promise.resolve(null);
        }
        invalidateToken() {
        }
        start(t4, e3) {
          t4.enqueueRetryable(() => e3(C3.UNAUTHENTICATED));
        }
        shutdown() {
        }
      };
      J2 = class {
        constructor(t4) {
          this.t = t4, this.currentUser = C3.UNAUTHENTICATED, this.i = 0, this.forceRefresh = false, this.auth = null;
        }
        start(t4, e3) {
          let n2 = this.i;
          const s2 = (t5) => this.i !== n2 ? (n2 = this.i, e3(t5)) : Promise.resolve();
          let i3 = new j3();
          this.o = () => {
            this.i++, this.currentUser = this.u(), i3.resolve(), i3 = new j3(), t4.enqueueRetryable(() => s2(this.currentUser));
          };
          const r3 = () => {
            const e4 = i3;
            t4.enqueueRetryable(async () => {
              await e4.promise, await s2(this.currentUser);
            });
          }, o3 = (t5) => {
            O3("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = t5, this.auth.addAuthTokenListener(this.o), r3();
          };
          this.t.onInit((t5) => o3(t5)), setTimeout(() => {
            if (!this.auth) {
              const t5 = this.t.getImmediate({
                optional: true
              });
              t5 ? o3(t5) : (O3("FirebaseAuthCredentialsProvider", "Auth not yet detected"), i3.resolve(), i3 = new j3());
            }
          }, 0), r3();
        }
        getToken() {
          const t4 = this.i, e3 = this.forceRefresh;
          return this.forceRefresh = false, this.auth ? this.auth.getToken(e3).then((e4) => this.i !== t4 ? (O3("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : e4 ? (U2(typeof e4.accessToken == "string"), new W2(e4.accessToken, this.currentUser)) : null) : Promise.resolve(null);
        }
        invalidateToken() {
          this.forceRefresh = true;
        }
        shutdown() {
          this.auth && this.auth.removeAuthTokenListener(this.o);
        }
        u() {
          const t4 = this.auth && this.auth.getUid();
          return U2(t4 === null || typeof t4 == "string"), new C3(t4);
        }
      };
      Y2 = class {
        constructor(t4, e3, n2) {
          this.type = "FirstParty", this.user = C3.FIRST_PARTY, this.headers = /* @__PURE__ */ new Map(), this.headers.set("X-Goog-AuthUser", e3);
          const s2 = t4.auth.getAuthHeaderValueForFirstParty([]);
          s2 && this.headers.set("Authorization", s2), n2 && this.headers.set("X-Goog-Iam-Authorization-Token", n2);
        }
      };
      X2 = class {
        constructor(t4, e3, n2) {
          this.h = t4, this.l = e3, this.m = n2;
        }
        getToken() {
          return Promise.resolve(new Y2(this.h, this.l, this.m));
        }
        start(t4, e3) {
          t4.enqueueRetryable(() => e3(C3.FIRST_PARTY));
        }
        shutdown() {
        }
        invalidateToken() {
        }
      };
      Z2 = class {
        constructor(t4) {
          this.value = t4, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), t4 && t4.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
        }
      };
      tt = class {
        constructor(t4) {
          this.g = t4, this.forceRefresh = false, this.appCheck = null, this.p = null;
        }
        start(t4, e3) {
          const n2 = (t5) => {
            t5.error != null && O3("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${t5.error.message}`);
            const n3 = t5.token !== this.p;
            return this.p = t5.token, O3("FirebaseAppCheckTokenProvider", `Received ${n3 ? "new" : "existing"} token.`), n3 ? e3(t5.token) : Promise.resolve();
          };
          this.o = (e4) => {
            t4.enqueueRetryable(() => n2(e4));
          };
          const s2 = (t5) => {
            O3("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = t5, this.appCheck.addTokenListener(this.o);
          };
          this.g.onInit((t5) => s2(t5)), setTimeout(() => {
            if (!this.appCheck) {
              const t5 = this.g.getImmediate({
                optional: true
              });
              t5 ? s2(t5) : O3("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
            }
          }, 0);
        }
        getToken() {
          const t4 = this.forceRefresh;
          return this.forceRefresh = false, this.appCheck ? this.appCheck.getToken(t4).then((t5) => t5 ? (U2(typeof t5.token == "string"), this.p = t5.token, new Z2(t5.token)) : null) : Promise.resolve(null);
        }
        invalidateToken() {
          this.forceRefresh = true;
        }
        shutdown() {
          this.appCheck && this.appCheck.removeTokenListener(this.o);
        }
      };
      nt = class {
        constructor(t4, e3) {
          this.previousValue = t4, e3 && (e3.sequenceNumberHandler = (t5) => this.I(t5), this.T = (t5) => e3.writeSequenceNumber(t5));
        }
        I(t4) {
          return this.previousValue = Math.max(t4, this.previousValue), this.previousValue;
        }
        next() {
          const t4 = ++this.previousValue;
          return this.T && this.T(t4), t4;
        }
      };
      nt.A = -1;
      it = class {
        static R() {
          const t4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e3 = Math.floor(256 / t4.length) * t4.length;
          let n2 = "";
          for (; n2.length < 20; ) {
            const s2 = st(40);
            for (let i3 = 0; i3 < s2.length; ++i3)
              n2.length < 20 && s2[i3] < e3 && (n2 += t4.charAt(s2[i3] % t4.length));
          }
          return n2;
        }
      };
      at = class {
        constructor(t4, e3) {
          if (this.seconds = t4, this.nanoseconds = e3, e3 < 0)
            throw new Q2(G.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e3);
          if (e3 >= 1e9)
            throw new Q2(G.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e3);
          if (t4 < -62135596800)
            throw new Q2(G.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t4);
          if (t4 >= 253402300800)
            throw new Q2(G.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t4);
        }
        static now() {
          return at.fromMillis(Date.now());
        }
        static fromDate(t4) {
          return at.fromMillis(t4.getTime());
        }
        static fromMillis(t4) {
          const e3 = Math.floor(t4 / 1e3), n2 = Math.floor(1e6 * (t4 - 1e3 * e3));
          return new at(e3, n2);
        }
        toDate() {
          return new Date(this.toMillis());
        }
        toMillis() {
          return 1e3 * this.seconds + this.nanoseconds / 1e6;
        }
        _compareTo(t4) {
          return this.seconds === t4.seconds ? rt(this.nanoseconds, t4.nanoseconds) : rt(this.seconds, t4.seconds);
        }
        isEqual(t4) {
          return t4.seconds === this.seconds && t4.nanoseconds === this.nanoseconds;
        }
        toString() {
          return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
        }
        toJSON() {
          return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
          };
        }
        valueOf() {
          const t4 = this.seconds - -62135596800;
          return String(t4).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
        }
      };
      ct = class {
        constructor(t4) {
          this.timestamp = t4;
        }
        static fromTimestamp(t4) {
          return new ct(t4);
        }
        static min() {
          return new ct(new at(0, 0));
        }
        static max() {
          return new ct(new at(253402300799, 999999999));
        }
        compareTo(t4) {
          return this.timestamp._compareTo(t4.timestamp);
        }
        isEqual(t4) {
          return this.timestamp.isEqual(t4.timestamp);
        }
        toMicroseconds() {
          return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
        }
        toString() {
          return "SnapshotVersion(" + this.timestamp.toString() + ")";
        }
        toTimestamp() {
          return this.timestamp;
        }
      };
      dt = class {
        constructor(t4, e3, n2) {
          e3 === void 0 ? e3 = 0 : e3 > t4.length && L3(), n2 === void 0 ? n2 = t4.length - e3 : n2 > t4.length - e3 && L3(), this.segments = t4, this.offset = e3, this.len = n2;
        }
        get length() {
          return this.len;
        }
        isEqual(t4) {
          return dt.comparator(this, t4) === 0;
        }
        child(t4) {
          const e3 = this.segments.slice(this.offset, this.limit());
          return t4 instanceof dt ? t4.forEach((t5) => {
            e3.push(t5);
          }) : e3.push(t4), this.construct(e3);
        }
        limit() {
          return this.offset + this.length;
        }
        popFirst(t4) {
          return t4 = t4 === void 0 ? 1 : t4, this.construct(this.segments, this.offset + t4, this.length - t4);
        }
        popLast() {
          return this.construct(this.segments, this.offset, this.length - 1);
        }
        firstSegment() {
          return this.segments[this.offset];
        }
        lastSegment() {
          return this.get(this.length - 1);
        }
        get(t4) {
          return this.segments[this.offset + t4];
        }
        isEmpty() {
          return this.length === 0;
        }
        isPrefixOf(t4) {
          if (t4.length < this.length)
            return false;
          for (let e3 = 0; e3 < this.length; e3++)
            if (this.get(e3) !== t4.get(e3))
              return false;
          return true;
        }
        isImmediateParentOf(t4) {
          if (this.length + 1 !== t4.length)
            return false;
          for (let e3 = 0; e3 < this.length; e3++)
            if (this.get(e3) !== t4.get(e3))
              return false;
          return true;
        }
        forEach(t4) {
          for (let e3 = this.offset, n2 = this.limit(); e3 < n2; e3++)
            t4(this.segments[e3]);
        }
        toArray() {
          return this.segments.slice(this.offset, this.limit());
        }
        static comparator(t4, e3) {
          const n2 = Math.min(t4.length, e3.length);
          for (let s2 = 0; s2 < n2; s2++) {
            const n3 = t4.get(s2), i3 = e3.get(s2);
            if (n3 < i3)
              return -1;
            if (n3 > i3)
              return 1;
          }
          return t4.length < e3.length ? -1 : t4.length > e3.length ? 1 : 0;
        }
      };
      _t = class extends dt {
        construct(t4, e3, n2) {
          return new _t(t4, e3, n2);
        }
        canonicalString() {
          return this.toArray().join("/");
        }
        toString() {
          return this.canonicalString();
        }
        static fromString(...t4) {
          const e3 = [];
          for (const n2 of t4) {
            if (n2.indexOf("//") >= 0)
              throw new Q2(G.INVALID_ARGUMENT, `Invalid segment (${n2}). Paths must not contain // in them.`);
            e3.push(...n2.split("/").filter((t5) => t5.length > 0));
          }
          return new _t(e3);
        }
        static emptyPath() {
          return new _t([]);
        }
      };
      wt = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
      mt = class extends dt {
        construct(t4, e3, n2) {
          return new mt(t4, e3, n2);
        }
        static isValidIdentifier(t4) {
          return wt.test(t4);
        }
        canonicalString() {
          return this.toArray().map((t4) => (t4 = t4.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), mt.isValidIdentifier(t4) || (t4 = "`" + t4 + "`"), t4)).join(".");
        }
        toString() {
          return this.canonicalString();
        }
        isKeyField() {
          return this.length === 1 && this.get(0) === "__name__";
        }
        static keyField() {
          return new mt(["__name__"]);
        }
        static fromServerFormat(t4) {
          const e3 = [];
          let n2 = "", s2 = 0;
          const i3 = () => {
            if (n2.length === 0)
              throw new Q2(G.INVALID_ARGUMENT, `Invalid field path (${t4}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
            e3.push(n2), n2 = "";
          };
          let r3 = false;
          for (; s2 < t4.length; ) {
            const e4 = t4[s2];
            if (e4 === "\\") {
              if (s2 + 1 === t4.length)
                throw new Q2(G.INVALID_ARGUMENT, "Path has trailing escape character: " + t4);
              const e5 = t4[s2 + 1];
              if (e5 !== "\\" && e5 !== "." && e5 !== "`")
                throw new Q2(G.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t4);
              n2 += e5, s2 += 2;
            } else
              e4 === "`" ? (r3 = !r3, s2++) : e4 !== "." || r3 ? (n2 += e4, s2++) : (i3(), s2++);
          }
          if (i3(), r3)
            throw new Q2(G.INVALID_ARGUMENT, "Unterminated ` in path: " + t4);
          return new mt(e3);
        }
        static emptyPath() {
          return new mt([]);
        }
      };
      pt = class {
        constructor(t4) {
          this.binaryString = t4;
        }
        static fromBase64String(t4) {
          const e3 = atob(t4);
          return new pt(e3);
        }
        static fromUint8Array(t4) {
          const e3 = function(t5) {
            let e4 = "";
            for (let n2 = 0; n2 < t5.length; ++n2)
              e4 += String.fromCharCode(t5[n2]);
            return e4;
          }(t4);
          return new pt(e3);
        }
        [Symbol.iterator]() {
          let t4 = 0;
          return {
            next: () => t4 < this.binaryString.length ? {
              value: this.binaryString.charCodeAt(t4++),
              done: false
            } : {
              value: void 0,
              done: true
            }
          };
        }
        toBase64() {
          return t4 = this.binaryString, btoa(t4);
          var t4;
        }
        toUint8Array() {
          return function(t4) {
            const e3 = new Uint8Array(t4.length);
            for (let n2 = 0; n2 < t4.length; n2++)
              e3[n2] = t4.charCodeAt(n2);
            return e3;
          }(this.binaryString);
        }
        approximateByteSize() {
          return 2 * this.binaryString.length;
        }
        compareTo(t4) {
          return rt(this.binaryString, t4.binaryString);
        }
        isEqual(t4) {
          return this.binaryString === t4.binaryString;
        }
      };
      pt.EMPTY_BYTE_STRING = new pt("");
      It = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
      Vt = class {
        constructor(t4, e3, n2, s2, i3, r3, o3, u3) {
          this.databaseId = t4, this.appId = e3, this.persistenceKey = n2, this.host = s2, this.ssl = i3, this.forceLongPolling = r3, this.autoDetectLongPolling = o3, this.useFetchStreams = u3;
        }
      };
      vt = class {
        constructor(t4, e3) {
          this.projectId = t4, this.database = e3 || "(default)";
        }
        static empty() {
          return new vt("", "");
        }
        get isDefaultDatabase() {
          return this.database === "(default)";
        }
        isEqual(t4) {
          return t4 instanceof vt && t4.projectId === this.projectId && t4.database === this.database;
        }
      };
      xt = class {
        constructor(t4) {
          this.path = t4;
        }
        static fromPath(t4) {
          return new xt(_t.fromString(t4));
        }
        static fromName(t4) {
          return new xt(_t.fromString(t4).popFirst(5));
        }
        static empty() {
          return new xt(_t.emptyPath());
        }
        get collectionGroup() {
          return this.path.popLast().lastSegment();
        }
        hasCollectionId(t4) {
          return this.path.length >= 2 && this.path.get(this.path.length - 2) === t4;
        }
        getCollectionGroup() {
          return this.path.get(this.path.length - 2);
        }
        getCollectionPath() {
          return this.path.popLast();
        }
        isEqual(t4) {
          return t4 !== null && _t.comparator(this.path, t4.path) === 0;
        }
        toString() {
          return this.path.toString();
        }
        static comparator(t4, e3) {
          return _t.comparator(t4.path, e3.path);
        }
        static isDocumentKey(t4) {
          return t4.length % 2 == 0;
        }
        static fromSegments(t4) {
          return new xt(new _t(t4.slice()));
        }
      };
      Nt = {
        mapValue: {
          fields: {
            __type__: {
              stringValue: "__max__"
            }
          }
        }
      };
      te = class {
        constructor(t4) {
          this.value = t4;
        }
        static empty() {
          return new te({
            mapValue: {}
          });
        }
        field(t4) {
          if (t4.isEmpty())
            return this.value;
          {
            let e3 = this.value;
            for (let n2 = 0; n2 < t4.length - 1; ++n2)
              if (e3 = (e3.mapValue.fields || {})[t4.get(n2)], !Wt(e3))
                return null;
            return e3 = (e3.mapValue.fields || {})[t4.lastSegment()], e3 || null;
          }
        }
        set(t4, e3) {
          this.getFieldsMap(t4.popLast())[t4.lastSegment()] = zt(e3);
        }
        setAll(t4) {
          let e3 = mt.emptyPath(), n2 = {}, s2 = [];
          t4.forEach((t5, i4) => {
            if (!e3.isImmediateParentOf(i4)) {
              const t6 = this.getFieldsMap(e3);
              this.applyChanges(t6, n2, s2), n2 = {}, s2 = [], e3 = i4.popLast();
            }
            t5 ? n2[i4.lastSegment()] = zt(t5) : s2.push(i4.lastSegment());
          });
          const i3 = this.getFieldsMap(e3);
          this.applyChanges(i3, n2, s2);
        }
        delete(t4) {
          const e3 = this.field(t4.popLast());
          Wt(e3) && e3.mapValue.fields && delete e3.mapValue.fields[t4.lastSegment()];
        }
        isEqual(t4) {
          return Ot(this.value, t4.value);
        }
        getFieldsMap(t4) {
          let e3 = this.value;
          e3.mapValue.fields || (e3.mapValue = {
            fields: {}
          });
          for (let n2 = 0; n2 < t4.length; ++n2) {
            let s2 = e3.mapValue.fields[t4.get(n2)];
            Wt(s2) && s2.mapValue.fields || (s2 = {
              mapValue: {
                fields: {}
              }
            }, e3.mapValue.fields[t4.get(n2)] = s2), e3 = s2;
          }
          return e3.mapValue.fields;
        }
        applyChanges(t4, e3, n2) {
          lt(e3, (e4, n3) => t4[e4] = n3);
          for (const e4 of n2)
            delete t4[e4];
        }
        clone() {
          return new te(zt(this.value));
        }
      };
      ne = class {
        constructor(t4, e3, n2, s2, i3, r3) {
          this.key = t4, this.documentType = e3, this.version = n2, this.readTime = s2, this.data = i3, this.documentState = r3;
        }
        static newInvalidDocument(t4) {
          return new ne(t4, 0, ct.min(), ct.min(), te.empty(), 0);
        }
        static newFoundDocument(t4, e3, n2) {
          return new ne(t4, 1, e3, ct.min(), n2, 0);
        }
        static newNoDocument(t4, e3) {
          return new ne(t4, 2, e3, ct.min(), te.empty(), 0);
        }
        static newUnknownDocument(t4, e3) {
          return new ne(t4, 3, e3, ct.min(), te.empty(), 2);
        }
        convertToFoundDocument(t4, e3) {
          return this.version = t4, this.documentType = 1, this.data = e3, this.documentState = 0, this;
        }
        convertToNoDocument(t4) {
          return this.version = t4, this.documentType = 2, this.data = te.empty(), this.documentState = 0, this;
        }
        convertToUnknownDocument(t4) {
          return this.version = t4, this.documentType = 3, this.data = te.empty(), this.documentState = 2, this;
        }
        setHasCommittedMutations() {
          return this.documentState = 2, this;
        }
        setHasLocalMutations() {
          return this.documentState = 1, this;
        }
        setReadTime(t4) {
          return this.readTime = t4, this;
        }
        get hasLocalMutations() {
          return this.documentState === 1;
        }
        get hasCommittedMutations() {
          return this.documentState === 2;
        }
        get hasPendingWrites() {
          return this.hasLocalMutations || this.hasCommittedMutations;
        }
        isValidDocument() {
          return this.documentType !== 0;
        }
        isFoundDocument() {
          return this.documentType === 1;
        }
        isNoDocument() {
          return this.documentType === 2;
        }
        isUnknownDocument() {
          return this.documentType === 3;
        }
        isEqual(t4) {
          return t4 instanceof ne && this.key.isEqual(t4.key) && this.version.isEqual(t4.version) && this.documentType === t4.documentType && this.documentState === t4.documentState && this.data.isEqual(t4.data);
        }
        mutableCopy() {
          return new ne(this.key, this.documentType, this.version, this.readTime, this.data.clone(), this.documentState);
        }
        toString() {
          return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
        }
      };
      se = class {
        constructor(t4, e3, n2, s2) {
          this.indexId = t4, this.collectionGroup = e3, this.fields = n2, this.indexState = s2;
        }
      };
      se.UNKNOWN_ID = -1;
      he = class {
        constructor(t4, e3, n2) {
          this.readTime = t4, this.documentKey = e3, this.largestBatchId = n2;
        }
        static min() {
          return new he(ct.min(), xt.empty(), -1);
        }
        static max() {
          return new he(ct.max(), xt.empty(), -1);
        }
      };
      fe = class {
        constructor(t4, e3) {
          this.comparator = t4, this.root = e3 || _e.EMPTY;
        }
        insert(t4, e3) {
          return new fe(this.comparator, this.root.insert(t4, e3, this.comparator).copy(null, null, _e.BLACK, null, null));
        }
        remove(t4) {
          return new fe(this.comparator, this.root.remove(t4, this.comparator).copy(null, null, _e.BLACK, null, null));
        }
        get(t4) {
          let e3 = this.root;
          for (; !e3.isEmpty(); ) {
            const n2 = this.comparator(t4, e3.key);
            if (n2 === 0)
              return e3.value;
            n2 < 0 ? e3 = e3.left : n2 > 0 && (e3 = e3.right);
          }
          return null;
        }
        indexOf(t4) {
          let e3 = 0, n2 = this.root;
          for (; !n2.isEmpty(); ) {
            const s2 = this.comparator(t4, n2.key);
            if (s2 === 0)
              return e3 + n2.left.size;
            s2 < 0 ? n2 = n2.left : (e3 += n2.left.size + 1, n2 = n2.right);
          }
          return -1;
        }
        isEmpty() {
          return this.root.isEmpty();
        }
        get size() {
          return this.root.size;
        }
        minKey() {
          return this.root.minKey();
        }
        maxKey() {
          return this.root.maxKey();
        }
        inorderTraversal(t4) {
          return this.root.inorderTraversal(t4);
        }
        forEach(t4) {
          this.inorderTraversal((e3, n2) => (t4(e3, n2), false));
        }
        toString() {
          const t4 = [];
          return this.inorderTraversal((e3, n2) => (t4.push(`${e3}:${n2}`), false)), `{${t4.join(", ")}}`;
        }
        reverseTraversal(t4) {
          return this.root.reverseTraversal(t4);
        }
        getIterator() {
          return new de(this.root, null, this.comparator, false);
        }
        getIteratorFrom(t4) {
          return new de(this.root, t4, this.comparator, false);
        }
        getReverseIterator() {
          return new de(this.root, null, this.comparator, true);
        }
        getReverseIteratorFrom(t4) {
          return new de(this.root, t4, this.comparator, true);
        }
      };
      de = class {
        constructor(t4, e3, n2, s2) {
          this.isReverse = s2, this.nodeStack = [];
          let i3 = 1;
          for (; !t4.isEmpty(); )
            if (i3 = e3 ? n2(t4.key, e3) : 1, e3 && s2 && (i3 *= -1), i3 < 0)
              t4 = this.isReverse ? t4.left : t4.right;
            else {
              if (i3 === 0) {
                this.nodeStack.push(t4);
                break;
              }
              this.nodeStack.push(t4), t4 = this.isReverse ? t4.right : t4.left;
            }
        }
        getNext() {
          let t4 = this.nodeStack.pop();
          const e3 = {
            key: t4.key,
            value: t4.value
          };
          if (this.isReverse)
            for (t4 = t4.left; !t4.isEmpty(); )
              this.nodeStack.push(t4), t4 = t4.right;
          else
            for (t4 = t4.right; !t4.isEmpty(); )
              this.nodeStack.push(t4), t4 = t4.left;
          return e3;
        }
        hasNext() {
          return this.nodeStack.length > 0;
        }
        peek() {
          if (this.nodeStack.length === 0)
            return null;
          const t4 = this.nodeStack[this.nodeStack.length - 1];
          return {
            key: t4.key,
            value: t4.value
          };
        }
      };
      _e = class {
        constructor(t4, e3, n2, s2, i3) {
          this.key = t4, this.value = e3, this.color = n2 != null ? n2 : _e.RED, this.left = s2 != null ? s2 : _e.EMPTY, this.right = i3 != null ? i3 : _e.EMPTY, this.size = this.left.size + 1 + this.right.size;
        }
        copy(t4, e3, n2, s2, i3) {
          return new _e(t4 != null ? t4 : this.key, e3 != null ? e3 : this.value, n2 != null ? n2 : this.color, s2 != null ? s2 : this.left, i3 != null ? i3 : this.right);
        }
        isEmpty() {
          return false;
        }
        inorderTraversal(t4) {
          return this.left.inorderTraversal(t4) || t4(this.key, this.value) || this.right.inorderTraversal(t4);
        }
        reverseTraversal(t4) {
          return this.right.reverseTraversal(t4) || t4(this.key, this.value) || this.left.reverseTraversal(t4);
        }
        min() {
          return this.left.isEmpty() ? this : this.left.min();
        }
        minKey() {
          return this.min().key;
        }
        maxKey() {
          return this.right.isEmpty() ? this.key : this.right.maxKey();
        }
        insert(t4, e3, n2) {
          let s2 = this;
          const i3 = n2(t4, s2.key);
          return s2 = i3 < 0 ? s2.copy(null, null, null, s2.left.insert(t4, e3, n2), null) : i3 === 0 ? s2.copy(null, e3, null, null, null) : s2.copy(null, null, null, null, s2.right.insert(t4, e3, n2)), s2.fixUp();
        }
        removeMin() {
          if (this.left.isEmpty())
            return _e.EMPTY;
          let t4 = this;
          return t4.left.isRed() || t4.left.left.isRed() || (t4 = t4.moveRedLeft()), t4 = t4.copy(null, null, null, t4.left.removeMin(), null), t4.fixUp();
        }
        remove(t4, e3) {
          let n2, s2 = this;
          if (e3(t4, s2.key) < 0)
            s2.left.isEmpty() || s2.left.isRed() || s2.left.left.isRed() || (s2 = s2.moveRedLeft()), s2 = s2.copy(null, null, null, s2.left.remove(t4, e3), null);
          else {
            if (s2.left.isRed() && (s2 = s2.rotateRight()), s2.right.isEmpty() || s2.right.isRed() || s2.right.left.isRed() || (s2 = s2.moveRedRight()), e3(t4, s2.key) === 0) {
              if (s2.right.isEmpty())
                return _e.EMPTY;
              n2 = s2.right.min(), s2 = s2.copy(n2.key, n2.value, null, null, s2.right.removeMin());
            }
            s2 = s2.copy(null, null, null, null, s2.right.remove(t4, e3));
          }
          return s2.fixUp();
        }
        isRed() {
          return this.color;
        }
        fixUp() {
          let t4 = this;
          return t4.right.isRed() && !t4.left.isRed() && (t4 = t4.rotateLeft()), t4.left.isRed() && t4.left.left.isRed() && (t4 = t4.rotateRight()), t4.left.isRed() && t4.right.isRed() && (t4 = t4.colorFlip()), t4;
        }
        moveRedLeft() {
          let t4 = this.colorFlip();
          return t4.right.left.isRed() && (t4 = t4.copy(null, null, null, null, t4.right.rotateRight()), t4 = t4.rotateLeft(), t4 = t4.colorFlip()), t4;
        }
        moveRedRight() {
          let t4 = this.colorFlip();
          return t4.left.left.isRed() && (t4 = t4.rotateRight(), t4 = t4.colorFlip()), t4;
        }
        rotateLeft() {
          const t4 = this.copy(null, null, _e.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, t4, null);
        }
        rotateRight() {
          const t4 = this.copy(null, null, _e.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, t4);
        }
        colorFlip() {
          const t4 = this.left.copy(null, null, !this.left.color, null, null), e3 = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, t4, e3);
        }
        checkMaxDepth() {
          const t4 = this.check();
          return Math.pow(2, t4) <= this.size + 1;
        }
        check() {
          if (this.isRed() && this.left.isRed())
            throw L3();
          if (this.right.isRed())
            throw L3();
          const t4 = this.left.check();
          if (t4 !== this.right.check())
            throw L3();
          return t4 + (this.isRed() ? 0 : 1);
        }
      };
      _e.EMPTY = null, _e.RED = true, _e.BLACK = false;
      _e.EMPTY = new class {
        constructor() {
          this.size = 0;
        }
        get key() {
          throw L3();
        }
        get value() {
          throw L3();
        }
        get color() {
          throw L3();
        }
        get left() {
          throw L3();
        }
        get right() {
          throw L3();
        }
        copy(t4, e3, n2, s2, i3) {
          return this;
        }
        insert(t4, e3, n2) {
          return new _e(t4, e3);
        }
        remove(t4, e3) {
          return this;
        }
        isEmpty() {
          return true;
        }
        inorderTraversal(t4) {
          return false;
        }
        reverseTraversal(t4) {
          return false;
        }
        minKey() {
          return null;
        }
        maxKey() {
          return null;
        }
        isRed() {
          return false;
        }
        checkMaxDepth() {
          return true;
        }
        check() {
          return 0;
        }
      }();
      we = class {
        constructor(t4) {
          this.comparator = t4, this.data = new fe(this.comparator);
        }
        has(t4) {
          return this.data.get(t4) !== null;
        }
        first() {
          return this.data.minKey();
        }
        last() {
          return this.data.maxKey();
        }
        get size() {
          return this.data.size;
        }
        indexOf(t4) {
          return this.data.indexOf(t4);
        }
        forEach(t4) {
          this.data.inorderTraversal((e3, n2) => (t4(e3), false));
        }
        forEachInRange(t4, e3) {
          const n2 = this.data.getIteratorFrom(t4[0]);
          for (; n2.hasNext(); ) {
            const s2 = n2.getNext();
            if (this.comparator(s2.key, t4[1]) >= 0)
              return;
            e3(s2.key);
          }
        }
        forEachWhile(t4, e3) {
          let n2;
          for (n2 = e3 !== void 0 ? this.data.getIteratorFrom(e3) : this.data.getIterator(); n2.hasNext(); ) {
            if (!t4(n2.getNext().key))
              return;
          }
        }
        firstAfterOrEqual(t4) {
          const e3 = this.data.getIteratorFrom(t4);
          return e3.hasNext() ? e3.getNext().key : null;
        }
        getIterator() {
          return new me(this.data.getIterator());
        }
        getIteratorFrom(t4) {
          return new me(this.data.getIteratorFrom(t4));
        }
        add(t4) {
          return this.copy(this.data.remove(t4).insert(t4, true));
        }
        delete(t4) {
          return this.has(t4) ? this.copy(this.data.remove(t4)) : this;
        }
        isEmpty() {
          return this.data.isEmpty();
        }
        unionWith(t4) {
          let e3 = this;
          return e3.size < t4.size && (e3 = t4, t4 = this), t4.forEach((t5) => {
            e3 = e3.add(t5);
          }), e3;
        }
        isEqual(t4) {
          if (!(t4 instanceof we))
            return false;
          if (this.size !== t4.size)
            return false;
          const e3 = this.data.getIterator(), n2 = t4.data.getIterator();
          for (; e3.hasNext(); ) {
            const t5 = e3.getNext().key, s2 = n2.getNext().key;
            if (this.comparator(t5, s2) !== 0)
              return false;
          }
          return true;
        }
        toArray() {
          const t4 = [];
          return this.forEach((e3) => {
            t4.push(e3);
          }), t4;
        }
        toString() {
          const t4 = [];
          return this.forEach((e3) => t4.push(e3)), "SortedSet(" + t4.toString() + ")";
        }
        copy(t4) {
          const e3 = new we(this.comparator);
          return e3.data = t4, e3;
        }
      };
      me = class {
        constructor(t4) {
          this.iter = t4;
        }
        getNext() {
          return this.iter.getNext().key;
        }
        hasNext() {
          return this.iter.hasNext();
        }
      };
      ye = class {
        constructor(t4, e3 = null, n2 = [], s2 = [], i3 = null, r3 = null, o3 = null) {
          this.path = t4, this.collectionGroup = e3, this.orderBy = n2, this.filters = s2, this.limit = i3, this.startAt = r3, this.endAt = o3, this.P = null;
        }
      };
      Ve = class extends class {
      } {
        constructor(t4, e3, n2) {
          super(), this.field = t4, this.op = e3, this.value = n2;
        }
        static create(t4, e3, n2) {
          return t4.isKeyField() ? e3 === "in" || e3 === "not-in" ? this.V(t4, e3, n2) : new ve(t4, e3, n2) : e3 === "array-contains" ? new xe(t4, n2) : e3 === "in" ? new Ne(t4, n2) : e3 === "not-in" ? new ke(t4, n2) : e3 === "array-contains-any" ? new Me(t4, n2) : new Ve(t4, e3, n2);
        }
        static V(t4, e3, n2) {
          return e3 === "in" ? new Se(t4, n2) : new De(t4, n2);
        }
        matches(t4) {
          const e3 = t4.data.field(this.field);
          return this.op === "!=" ? e3 !== null && this.v($t(e3, this.value)) : e3 !== null && Mt(this.value) === Mt(e3) && this.v($t(e3, this.value));
        }
        v(t4) {
          switch (this.op) {
            case "<":
              return t4 < 0;
            case "<=":
              return t4 <= 0;
            case "==":
              return t4 === 0;
            case "!=":
              return t4 !== 0;
            case ">":
              return t4 > 0;
            case ">=":
              return t4 >= 0;
            default:
              return L3();
          }
        }
        S() {
          return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
        }
      };
      ve = class extends Ve {
        constructor(t4, e3, n2) {
          super(t4, e3, n2), this.key = xt.fromName(n2.referenceValue);
        }
        matches(t4) {
          const e3 = xt.comparator(t4.key, this.key);
          return this.v(e3);
        }
      };
      Se = class extends Ve {
        constructor(t4, e3) {
          super(t4, "in", e3), this.keys = Ce("in", e3);
        }
        matches(t4) {
          return this.keys.some((e3) => e3.isEqual(t4.key));
        }
      };
      De = class extends Ve {
        constructor(t4, e3) {
          super(t4, "not-in", e3), this.keys = Ce("not-in", e3);
        }
        matches(t4) {
          return !this.keys.some((e3) => e3.isEqual(t4.key));
        }
      };
      xe = class extends Ve {
        constructor(t4, e3) {
          super(t4, "array-contains", e3);
        }
        matches(t4) {
          const e3 = t4.data.field(this.field);
          return Gt(e3) && Ft(e3.arrayValue, this.value);
        }
      };
      Ne = class extends Ve {
        constructor(t4, e3) {
          super(t4, "in", e3);
        }
        matches(t4) {
          const e3 = t4.data.field(this.field);
          return e3 !== null && Ft(this.value.arrayValue, e3);
        }
      };
      ke = class extends Ve {
        constructor(t4, e3) {
          super(t4, "not-in", e3);
        }
        matches(t4) {
          if (Ft(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
          }))
            return false;
          const e3 = t4.data.field(this.field);
          return e3 !== null && !Ft(this.value.arrayValue, e3);
        }
      };
      Me = class extends Ve {
        constructor(t4, e3) {
          super(t4, "array-contains-any", e3);
        }
        matches(t4) {
          const e3 = t4.data.field(this.field);
          return !(!Gt(e3) || !e3.arrayValue.values) && e3.arrayValue.values.some((t5) => Ft(this.value.arrayValue, t5));
        }
      };
      Oe = class {
        constructor(t4, e3) {
          this.position = t4, this.inclusive = e3;
        }
      };
      Fe = class {
        constructor(t4, e3 = "asc") {
          this.field = t4, this.dir = e3;
        }
      };
      Ue = class {
        constructor(t4, e3 = null, n2 = [], s2 = [], i3 = null, r3 = "F", o3 = null, u3 = null) {
          this.path = t4, this.collectionGroup = e3, this.explicitOrderBy = n2, this.filters = s2, this.limit = i3, this.limitType = r3, this.startAt = o3, this.endAt = u3, this.D = null, this.C = null, this.startAt, this.endAt;
        }
      };
      an = class {
        constructor() {
          this._ = void 0;
        }
      };
      fn = class extends an {
      };
      dn = class extends an {
        constructor(t4) {
          super(), this.elements = t4;
        }
      };
      wn = class extends an {
        constructor(t4) {
          super(), this.elements = t4;
        }
      };
      gn = class extends an {
        constructor(t4, e3) {
          super(), this.M = t4, this.k = e3;
        }
      };
      bn = class {
      };
      Cn = class extends bn {
        constructor(t4, e3, n2, s2 = []) {
          super(), this.key = t4, this.value = e3, this.precondition = n2, this.fieldTransforms = s2, this.type = 0;
        }
      };
      xn = class extends bn {
        constructor(t4, e3, n2, s2, i3 = []) {
          super(), this.key = t4, this.data = e3, this.fieldMask = n2, this.precondition = s2, this.fieldTransforms = i3, this.type = 1;
        }
      };
      $n = class {
        constructor(t4) {
          this.count = t4;
        }
      };
      (Ln = Bn || (Bn = {}))[Ln.OK = 0] = "OK", Ln[Ln.CANCELLED = 1] = "CANCELLED", Ln[Ln.UNKNOWN = 2] = "UNKNOWN", Ln[Ln.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Ln[Ln.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Ln[Ln.NOT_FOUND = 5] = "NOT_FOUND", Ln[Ln.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Ln[Ln.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Ln[Ln.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Ln[Ln.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Ln[Ln.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Ln[Ln.ABORTED = 10] = "ABORTED", Ln[Ln.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Ln[Ln.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Ln[Ln.INTERNAL = 13] = "INTERNAL", Ln[Ln.UNAVAILABLE = 14] = "UNAVAILABLE", Ln[Ln.DATA_LOSS = 15] = "DATA_LOSS";
      Kn = class {
        constructor(t4, e3) {
          this.mapKeyFn = t4, this.equalsFn = e3, this.inner = {}, this.innerSize = 0;
        }
        get(t4) {
          const e3 = this.mapKeyFn(t4), n2 = this.inner[e3];
          if (n2 !== void 0) {
            for (const [e4, s2] of n2)
              if (this.equalsFn(e4, t4))
                return s2;
          }
        }
        has(t4) {
          return this.get(t4) !== void 0;
        }
        set(t4, e3) {
          const n2 = this.mapKeyFn(t4), s2 = this.inner[n2];
          if (s2 === void 0)
            return this.inner[n2] = [[t4, e3]], void this.innerSize++;
          for (let n3 = 0; n3 < s2.length; n3++)
            if (this.equalsFn(s2[n3][0], t4))
              return void (s2[n3] = [t4, e3]);
          s2.push([t4, e3]), this.innerSize++;
        }
        delete(t4) {
          const e3 = this.mapKeyFn(t4), n2 = this.inner[e3];
          if (n2 === void 0)
            return false;
          for (let s2 = 0; s2 < n2.length; s2++)
            if (this.equalsFn(n2[s2][0], t4))
              return n2.length === 1 ? delete this.inner[e3] : n2.splice(s2, 1), this.innerSize--, true;
          return false;
        }
        forEach(t4) {
          lt(this.inner, (e3, n2) => {
            for (const [e4, s2] of n2)
              t4(e4, s2);
          });
        }
        isEmpty() {
          return ft(this.inner);
        }
        size() {
          return this.innerSize;
        }
      };
      Gn = new fe(xt.comparator);
      jn = new fe(xt.comparator);
      Hn = new fe(xt.comparator);
      Jn = new we(xt.comparator);
      Xn = new we(rt);
      ts = class {
        constructor(t4, e3, n2, s2, i3) {
          this.snapshotVersion = t4, this.targetChanges = e3, this.targetMismatches = n2, this.documentUpdates = s2, this.resolvedLimboDocuments = i3;
        }
        static createSynthesizedRemoteEventForCurrentChange(t4, e3) {
          const n2 = /* @__PURE__ */ new Map();
          return n2.set(t4, es.createSynthesizedTargetChangeForCurrentChange(t4, e3)), new ts(ct.min(), n2, Zn(), Qn(), Yn());
        }
      };
      es = class {
        constructor(t4, e3, n2, s2, i3) {
          this.resumeToken = t4, this.current = e3, this.addedDocuments = n2, this.modifiedDocuments = s2, this.removedDocuments = i3;
        }
        static createSynthesizedTargetChangeForCurrentChange(t4, e3) {
          return new es(pt.EMPTY_BYTE_STRING, e3, Yn(), Yn(), Yn());
        }
      };
      ns = class {
        constructor(t4, e3, n2, s2) {
          this.O = t4, this.removedTargetIds = e3, this.key = n2, this.F = s2;
        }
      };
      ss = class {
        constructor(t4, e3) {
          this.targetId = t4, this.$ = e3;
        }
      };
      is = class {
        constructor(t4, e3, n2 = pt.EMPTY_BYTE_STRING, s2 = null) {
          this.state = t4, this.targetIds = e3, this.resumeToken = n2, this.cause = s2;
        }
      };
      rs = class {
        constructor() {
          this.B = 0, this.L = as(), this.U = pt.EMPTY_BYTE_STRING, this.q = false, this.K = true;
        }
        get current() {
          return this.q;
        }
        get resumeToken() {
          return this.U;
        }
        get G() {
          return this.B !== 0;
        }
        get j() {
          return this.K;
        }
        W(t4) {
          t4.approximateByteSize() > 0 && (this.K = true, this.U = t4);
        }
        H() {
          let t4 = Yn(), e3 = Yn(), n2 = Yn();
          return this.L.forEach((s2, i3) => {
            switch (i3) {
              case 0:
                t4 = t4.add(s2);
                break;
              case 2:
                e3 = e3.add(s2);
                break;
              case 1:
                n2 = n2.add(s2);
                break;
              default:
                L3();
            }
          }), new es(this.U, this.q, t4, e3, n2);
        }
        J() {
          this.K = false, this.L = as();
        }
        Y(t4, e3) {
          this.K = true, this.L = this.L.insert(t4, e3);
        }
        X(t4) {
          this.K = true, this.L = this.L.remove(t4);
        }
        Z() {
          this.B += 1;
        }
        tt() {
          this.B -= 1;
        }
        et() {
          this.K = true, this.q = true;
        }
      };
      os = class {
        constructor(t4) {
          this.nt = t4, this.st = /* @__PURE__ */ new Map(), this.it = Qn(), this.rt = us(), this.ot = new we(rt);
        }
        ut(t4) {
          for (const e3 of t4.O)
            t4.F && t4.F.isFoundDocument() ? this.at(e3, t4.F) : this.ct(e3, t4.key, t4.F);
          for (const e3 of t4.removedTargetIds)
            this.ct(e3, t4.key, t4.F);
        }
        ht(t4) {
          this.forEachTarget(t4, (e3) => {
            const n2 = this.lt(e3);
            switch (t4.state) {
              case 0:
                this.ft(e3) && n2.W(t4.resumeToken);
                break;
              case 1:
                n2.tt(), n2.G || n2.J(), n2.W(t4.resumeToken);
                break;
              case 2:
                n2.tt(), n2.G || this.removeTarget(e3);
                break;
              case 3:
                this.ft(e3) && (n2.et(), n2.W(t4.resumeToken));
                break;
              case 4:
                this.ft(e3) && (this.dt(e3), n2.W(t4.resumeToken));
                break;
              default:
                L3();
            }
          });
        }
        forEachTarget(t4, e3) {
          t4.targetIds.length > 0 ? t4.targetIds.forEach(e3) : this.st.forEach((t5, n2) => {
            this.ft(n2) && e3(n2);
          });
        }
        _t(t4) {
          const e3 = t4.targetId, n2 = t4.$.count, s2 = this.wt(e3);
          if (s2) {
            const t5 = s2.target;
            if (Ae(t5))
              if (n2 === 0) {
                const n3 = new xt(t5.path);
                this.ct(e3, n3, ne.newNoDocument(n3, ct.min()));
              } else
                U2(n2 === 1);
            else {
              this.gt(e3) !== n2 && (this.dt(e3), this.ot = this.ot.add(e3));
            }
          }
        }
        yt(t4) {
          const e3 = /* @__PURE__ */ new Map();
          this.st.forEach((n3, s3) => {
            const i3 = this.wt(s3);
            if (i3) {
              if (n3.current && Ae(i3.target)) {
                const e4 = new xt(i3.target.path);
                this.it.get(e4) !== null || this.It(s3, e4) || this.ct(s3, e4, ne.newNoDocument(e4, t4));
              }
              n3.j && (e3.set(s3, n3.H()), n3.J());
            }
          });
          let n2 = Yn();
          this.rt.forEach((t5, e4) => {
            let s3 = true;
            e4.forEachWhile((t6) => {
              const e5 = this.wt(t6);
              return !e5 || e5.purpose === 2 || (s3 = false, false);
            }), s3 && (n2 = n2.add(t5));
          }), this.it.forEach((e4, n3) => n3.setReadTime(t4));
          const s2 = new ts(t4, e3, this.ot, this.it, n2);
          return this.it = Qn(), this.rt = us(), this.ot = new we(rt), s2;
        }
        at(t4, e3) {
          if (!this.ft(t4))
            return;
          const n2 = this.It(t4, e3.key) ? 2 : 0;
          this.lt(t4).Y(e3.key, n2), this.it = this.it.insert(e3.key, e3), this.rt = this.rt.insert(e3.key, this.Tt(e3.key).add(t4));
        }
        ct(t4, e3, n2) {
          if (!this.ft(t4))
            return;
          const s2 = this.lt(t4);
          this.It(t4, e3) ? s2.Y(e3, 1) : s2.X(e3), this.rt = this.rt.insert(e3, this.Tt(e3).delete(t4)), n2 && (this.it = this.it.insert(e3, n2));
        }
        removeTarget(t4) {
          this.st.delete(t4);
        }
        gt(t4) {
          const e3 = this.lt(t4).H();
          return this.nt.getRemoteKeysForTarget(t4).size + e3.addedDocuments.size - e3.removedDocuments.size;
        }
        Z(t4) {
          this.lt(t4).Z();
        }
        lt(t4) {
          let e3 = this.st.get(t4);
          return e3 || (e3 = new rs(), this.st.set(t4, e3)), e3;
        }
        Tt(t4) {
          let e3 = this.rt.get(t4);
          return e3 || (e3 = new we(rt), this.rt = this.rt.insert(t4, e3)), e3;
        }
        ft(t4) {
          const e3 = this.wt(t4) !== null;
          return e3 || O3("WatchChangeAggregator", "Detected inactive target", t4), e3;
        }
        wt(t4) {
          const e3 = this.st.get(t4);
          return e3 && e3.G ? null : this.nt.Et(t4);
        }
        dt(t4) {
          this.st.set(t4, new rs());
          this.nt.getRemoteKeysForTarget(t4).forEach((e3) => {
            this.ct(t4, e3, null);
          });
        }
        It(t4, e3) {
          return this.nt.getRemoteKeysForTarget(t4).has(e3);
        }
      };
      cs = (() => {
        const t4 = {
          asc: "ASCENDING",
          desc: "DESCENDING"
        };
        return t4;
      })();
      hs = (() => {
        const t4 = {
          "<": "LESS_THAN",
          "<=": "LESS_THAN_OR_EQUAL",
          ">": "GREATER_THAN",
          ">=": "GREATER_THAN_OR_EQUAL",
          "==": "EQUAL",
          "!=": "NOT_EQUAL",
          "array-contains": "ARRAY_CONTAINS",
          in: "IN",
          "not-in": "NOT_IN",
          "array-contains-any": "ARRAY_CONTAINS_ANY"
        };
        return t4;
      })();
      ls = class {
        constructor(t4, e3) {
          this.databaseId = t4, this.N = e3;
        }
      };
      fi = [...[...[...[...["mutationQueues", "mutations", "documentMutations", "remoteDocuments", "targets", "owner", "targetGlobal", "targetDocuments"], "clientMetadata"], "remoteDocumentGlobal"], "collectionParents"], "bundles", "namedQueries"];
      di = [...fi, "documentOverlays"];
      _i = ["mutationQueues", "mutations", "documentMutations", "remoteDocumentsV14", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries", "documentOverlays"];
      wi = [..._i, "indexConfiguration", "indexState", "indexEntries"];
      mi = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
      gi = class {
        constructor() {
          this.onCommittedListeners = [];
        }
        addOnCommittedListener(t4) {
          this.onCommittedListeners.push(t4);
        }
        raiseOnCommittedEvent() {
          this.onCommittedListeners.forEach((t4) => t4());
        }
      };
      yi = class {
        constructor(t4) {
          this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = false, this.callbackAttached = false, t4((t5) => {
            this.isDone = true, this.result = t5, this.nextCallback && this.nextCallback(t5);
          }, (t5) => {
            this.isDone = true, this.error = t5, this.catchCallback && this.catchCallback(t5);
          });
        }
        catch(t4) {
          return this.next(void 0, t4);
        }
        next(t4, e3) {
          return this.callbackAttached && L3(), this.callbackAttached = true, this.isDone ? this.error ? this.wrapFailure(e3, this.error) : this.wrapSuccess(t4, this.result) : new yi((n2, s2) => {
            this.nextCallback = (e4) => {
              this.wrapSuccess(t4, e4).next(n2, s2);
            }, this.catchCallback = (t5) => {
              this.wrapFailure(e3, t5).next(n2, s2);
            };
          });
        }
        toPromise() {
          return new Promise((t4, e3) => {
            this.next(t4, e3);
          });
        }
        wrapUserFunction(t4) {
          try {
            const e3 = t4();
            return e3 instanceof yi ? e3 : yi.resolve(e3);
          } catch (t5) {
            return yi.reject(t5);
          }
        }
        wrapSuccess(t4, e3) {
          return t4 ? this.wrapUserFunction(() => t4(e3)) : yi.resolve(e3);
        }
        wrapFailure(t4, e3) {
          return t4 ? this.wrapUserFunction(() => t4(e3)) : yi.reject(e3);
        }
        static resolve(t4) {
          return new yi((e3, n2) => {
            e3(t4);
          });
        }
        static reject(t4) {
          return new yi((e3, n2) => {
            n2(t4);
          });
        }
        static waitFor(t4) {
          return new yi((e3, n2) => {
            let s2 = 0, i3 = 0, r3 = false;
            t4.forEach((t5) => {
              ++s2, t5.next(() => {
                ++i3, r3 && i3 === s2 && e3();
              }, (t6) => n2(t6));
            }), r3 = true, i3 === s2 && e3();
          });
        }
        static or(t4) {
          let e3 = yi.resolve(false);
          for (const n2 of t4)
            e3 = e3.next((t5) => t5 ? yi.resolve(t5) : n2());
          return e3;
        }
        static forEach(t4, e3) {
          const n2 = [];
          return t4.forEach((t5, s2) => {
            n2.push(e3.call(this, t5, s2));
          }), this.waitFor(n2);
        }
      };
      Di = class {
        constructor(t4, e3, n2, s2) {
          this.batchId = t4, this.localWriteTime = e3, this.baseMutations = n2, this.mutations = s2;
        }
        applyToRemoteDocument(t4, e3) {
          const n2 = e3.mutationResults;
          for (let e4 = 0; e4 < this.mutations.length; e4++) {
            const s2 = this.mutations[e4];
            if (s2.key.isEqual(t4.key)) {
              Pn(s2, t4, n2[e4]);
            }
          }
        }
        applyToLocalView(t4) {
          for (const e3 of this.baseMutations)
            e3.key.isEqual(t4.key) && Vn(e3, t4, this.localWriteTime);
          for (const e3 of this.mutations)
            e3.key.isEqual(t4.key) && Vn(e3, t4, this.localWriteTime);
        }
        applyToLocalDocumentSet(t4) {
          this.mutations.forEach((e3) => {
            const n2 = t4.get(e3.key), s2 = n2;
            this.applyToLocalView(s2), n2.isValidDocument() || s2.convertToNoDocument(ct.min());
          });
        }
        keys() {
          return this.mutations.reduce((t4, e3) => t4.add(e3.key), Yn());
        }
        isEqual(t4) {
          return this.batchId === t4.batchId && ot(this.mutations, t4.mutations, (t5, e3) => Sn(t5, e3)) && ot(this.baseMutations, t4.baseMutations, (t5, e3) => Sn(t5, e3));
        }
      };
      xi = class {
        constructor(t4, e3) {
          this.largestBatchId = t4, this.mutation = e3;
        }
        getKey() {
          return this.mutation.key;
        }
        isEqual(t4) {
          return t4 !== null && this.mutation === t4.mutation;
        }
        toString() {
          return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
        }
      };
      Ni = class {
        constructor(t4, e3, n2, s2, i3 = ct.min(), r3 = ct.min(), o3 = pt.EMPTY_BYTE_STRING) {
          this.target = t4, this.targetId = e3, this.purpose = n2, this.sequenceNumber = s2, this.snapshotVersion = i3, this.lastLimboFreeSnapshotVersion = r3, this.resumeToken = o3;
        }
        withSequenceNumber(t4) {
          return new Ni(this.target, this.targetId, this.purpose, t4, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken);
        }
        withResumeToken(t4, e3) {
          return new Ni(this.target, this.targetId, this.purpose, this.sequenceNumber, e3, this.lastLimboFreeSnapshotVersion, t4);
        }
        withLastLimboFreeSnapshotVersion(t4) {
          return new Ni(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t4, this.resumeToken);
        }
      };
      ki = class {
        constructor(t4) {
          this.Jt = t4;
        }
      };
      Yi = class {
        constructor() {
        }
        Zt(t4, e3) {
          this.te(t4, e3), e3.ee();
        }
        te(t4, e3) {
          if ("nullValue" in t4)
            this.ne(e3, 5);
          else if ("booleanValue" in t4)
            this.ne(e3, 10), e3.se(t4.booleanValue ? 1 : 0);
          else if ("integerValue" in t4)
            this.ne(e3, 15), e3.se(Et(t4.integerValue));
          else if ("doubleValue" in t4) {
            const n2 = Et(t4.doubleValue);
            isNaN(n2) ? this.ne(e3, 13) : (this.ne(e3, 15), Dt(n2) ? e3.se(0) : e3.se(n2));
          } else if ("timestampValue" in t4) {
            const n2 = t4.timestampValue;
            this.ne(e3, 20), typeof n2 == "string" ? e3.ie(n2) : (e3.ie(`${n2.seconds || ""}`), e3.se(n2.nanos || 0));
          } else if ("stringValue" in t4)
            this.re(t4.stringValue, e3), this.oe(e3);
          else if ("bytesValue" in t4)
            this.ne(e3, 30), e3.ue(At(t4.bytesValue)), this.oe(e3);
          else if ("referenceValue" in t4)
            this.ae(t4.referenceValue, e3);
          else if ("geoPointValue" in t4) {
            const n2 = t4.geoPointValue;
            this.ne(e3, 45), e3.se(n2.latitude || 0), e3.se(n2.longitude || 0);
          } else
            "mapValue" in t4 ? Ht(t4) ? this.ne(e3, Number.MAX_SAFE_INTEGER) : (this.ce(t4.mapValue, e3), this.oe(e3)) : "arrayValue" in t4 ? (this.he(t4.arrayValue, e3), this.oe(e3)) : L3();
        }
        re(t4, e3) {
          this.ne(e3, 25), this.le(t4, e3);
        }
        le(t4, e3) {
          e3.ie(t4);
        }
        ce(t4, e3) {
          const n2 = t4.fields || {};
          this.ne(e3, 55);
          for (const t5 of Object.keys(n2))
            this.re(t5, e3), this.te(n2[t5], e3);
        }
        he(t4, e3) {
          const n2 = t4.values || [];
          this.ne(e3, 50);
          for (const t5 of n2)
            this.te(t5, e3);
        }
        ae(t4, e3) {
          this.ne(e3, 37);
          xt.fromName(t4).path.forEach((t5) => {
            this.ne(e3, 60), this.le(t5, e3);
          });
        }
        ne(t4, e3) {
          t4.se(e3);
        }
        oe(t4) {
          t4.se(2);
        }
      };
      Yi.fe = new Yi();
      ar = class {
        constructor() {
          this.qe = new cr();
        }
        addToCollectionParentIndex(t4, e3) {
          return this.qe.add(e3), yi.resolve();
        }
        getCollectionParents(t4, e3) {
          return yi.resolve(this.qe.getEntries(e3));
        }
        addFieldIndex(t4, e3) {
          return yi.resolve();
        }
        deleteFieldIndex(t4, e3) {
          return yi.resolve();
        }
        getDocumentsMatchingTarget(t4, e3) {
          return yi.resolve(null);
        }
        getIndexType(t4, e3) {
          return yi.resolve(0);
        }
        getFieldIndexes(t4, e3) {
          return yi.resolve([]);
        }
        getNextCollectionGroupToUpdate(t4) {
          return yi.resolve(null);
        }
        getMinOffset(t4, e3) {
          return yi.resolve(he.min());
        }
        updateCollectionGroup(t4, e3, n2) {
          return yi.resolve();
        }
        updateIndexEntries(t4, e3) {
          return yi.resolve();
        }
      };
      cr = class {
        constructor() {
          this.index = {};
        }
        add(t4) {
          const e3 = t4.lastSegment(), n2 = t4.popLast(), s2 = this.index[e3] || new we(_t.comparator), i3 = !s2.has(n2);
          return this.index[e3] = s2.add(n2), i3;
        }
        has(t4) {
          const e3 = t4.lastSegment(), n2 = t4.popLast(), s2 = this.index[e3];
          return s2 && s2.has(n2);
        }
        getEntries(t4) {
          return (this.index[t4] || new we(_t.comparator)).toArray();
        }
      };
      hr = new Uint8Array(0);
      gr = class {
        constructor(t4, e3, n2) {
          this.cacheSizeCollectionThreshold = t4, this.percentileToCollect = e3, this.maximumSequenceNumbersToCollect = n2;
        }
        static withCacheSize(t4) {
          return new gr(t4, gr.DEFAULT_COLLECTION_PERCENTILE, gr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
        }
      };
      gr.DEFAULT_COLLECTION_PERCENTILE = 10, gr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, gr.DEFAULT = new gr(41943040, gr.DEFAULT_COLLECTION_PERCENTILE, gr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), gr.DISABLED = new gr(-1, 0, 0);
      br = class {
        constructor(t4) {
          this.mn = t4;
        }
        next() {
          return this.mn += 2, this.mn;
        }
        static gn() {
          return new br(0);
        }
        static yn() {
          return new br(-1);
        }
      };
      Fr = class {
        constructor() {
          this.changes = new Kn((t4) => t4.toString(), (t4, e3) => t4.isEqual(e3)), this.changesApplied = false;
        }
        addEntry(t4) {
          this.assertNotApplied(), this.changes.set(t4.key, t4);
        }
        removeEntry(t4, e3) {
          this.assertNotApplied(), this.changes.set(t4, ne.newInvalidDocument(t4).setReadTime(e3));
        }
        getEntry(t4, e3) {
          this.assertNotApplied();
          const n2 = this.changes.get(e3);
          return n2 !== void 0 ? yi.resolve(n2) : this.getFromCache(t4, e3);
        }
        getEntries(t4, e3) {
          return this.getAllFromCache(t4, e3);
        }
        apply(t4) {
          return this.assertNotApplied(), this.changesApplied = true, this.applyChanges(t4);
        }
        assertNotApplied() {
        }
      };
      Xr = class {
        constructor(t4, e3, n2) {
          this.ds = t4, this.Bs = e3, this.indexManager = n2;
        }
        Ls(t4, e3) {
          return this.Bs.getAllMutationBatchesAffectingDocumentKey(t4, e3).next((n2) => this.Us(t4, e3, n2));
        }
        Us(t4, e3, n2) {
          return this.ds.getEntry(t4, e3).next((t5) => {
            for (const e4 of n2)
              e4.applyToLocalView(t5);
            return t5;
          });
        }
        qs(t4, e3) {
          t4.forEach((t5, n2) => {
            for (const t6 of e3)
              t6.applyToLocalView(n2);
          });
        }
        Ks(t4, e3) {
          return this.ds.getEntries(t4, e3).next((e4) => this.Gs(t4, e4).next(() => e4));
        }
        Gs(t4, e3) {
          return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t4, e3).next((t5) => this.qs(e3, t5));
        }
        Qs(t4, e3, n2) {
          return function(t5) {
            return xt.isDocumentKey(t5.path) && t5.collectionGroup === null && t5.filters.length === 0;
          }(e3) ? this.js(t4, e3.path) : We(e3) ? this.Ws(t4, e3, n2) : this.zs(t4, e3, n2);
        }
        js(t4, e3) {
          return this.Ls(t4, new xt(e3)).next((t5) => {
            let e4 = Wn();
            return t5.isFoundDocument() && (e4 = e4.insert(t5.key, t5)), e4;
          });
        }
        Ws(t4, e3, n2) {
          const s2 = e3.collectionGroup;
          let i3 = Wn();
          return this.indexManager.getCollectionParents(t4, s2).next((r3) => yi.forEach(r3, (r4) => {
            const o3 = function(t5, e4) {
              return new Ue(e4, null, t5.explicitOrderBy.slice(), t5.filters.slice(), t5.limit, t5.limitType, t5.startAt, t5.endAt);
            }(e3, r4.child(s2));
            return this.zs(t4, o3, n2).next((t5) => {
              t5.forEach((t6, e4) => {
                i3 = i3.insert(t6, e4);
              });
            });
          }).next(() => i3));
        }
        zs(t4, e3, n2) {
          let s2;
          return this.ds.getAllFromCollection(t4, e3.path, n2).next((n3) => (s2 = n3, this.Bs.getAllMutationBatchesAffectingQuery(t4, e3))).next((t5) => {
            for (const e4 of t5)
              for (const t6 of e4.mutations) {
                const n3 = t6.key;
                let i3 = s2.get(n3);
                i3 == null && (i3 = ne.newInvalidDocument(n3), s2 = s2.insert(n3, i3)), Vn(t6, i3, e4.localWriteTime), i3.isFoundDocument() || (s2 = s2.remove(n3));
              }
          }).next(() => (s2.forEach((t5, n3) => {
            tn(e3, n3) || (s2 = s2.remove(t5));
          }), s2));
        }
      };
      Zr = class {
        constructor(t4, e3, n2, s2) {
          this.targetId = t4, this.fromCache = e3, this.Hs = n2, this.Js = s2;
        }
        static Ys(t4, e3) {
          let n2 = Yn(), s2 = Yn();
          for (const t5 of e3.docChanges)
            switch (t5.type) {
              case 0:
                n2 = n2.add(t5.doc.key);
                break;
              case 1:
                s2 = s2.add(t5.doc.key);
            }
          return new Zr(t4, e3.fromCache, n2, s2);
        }
      };
      to = class {
        constructor() {
          this.Xs = false;
        }
        initialize(t4, e3) {
          this.Zs = t4, this.indexManager = e3, this.Xs = true;
        }
        Qs(t4, e3, n2, s2) {
          return this.ti(t4, e3).next((i3) => i3 || this.ei(t4, e3, s2, n2)).next((n3) => n3 || this.ni(t4, e3));
        }
        ti(t4, e3) {
          return yi.resolve(null);
        }
        ei(t4, e3, n2, s2) {
          return Ge(e3) || s2.isEqual(ct.min()) ? this.ni(t4, e3) : this.Zs.Ks(t4, n2).next((i3) => {
            const r3 = this.si(e3, i3);
            return this.ii(e3, r3, n2, s2) ? this.ni(t4, e3) : (k4() <= LogLevel.DEBUG && O3("QueryEngine", "Re-using previous result from %s to execute query: %s", s2.toString(), Ze(e3)), this.ri(t4, r3, e3, ae(s2, -1)));
          });
        }
        si(t4, e3) {
          let n2 = new we(nn(t4));
          return e3.forEach((e4, s2) => {
            tn(t4, s2) && (n2 = n2.add(s2));
          }), n2;
        }
        ii(t4, e3, n2, s2) {
          if (t4.limit === null)
            return false;
          if (n2.size !== e3.size)
            return true;
          const i3 = t4.limitType === "F" ? e3.last() : e3.first();
          return !!i3 && (i3.hasPendingWrites || i3.version.compareTo(s2) > 0);
        }
        ni(t4, e3) {
          return k4() <= LogLevel.DEBUG && O3("QueryEngine", "Using full collection scan to execute query:", Ze(e3)), this.Zs.Qs(t4, e3, he.min());
        }
        ri(t4, e3, n2, s2) {
          return this.Zs.Qs(t4, n2, s2).next((t5) => (e3.forEach((e4) => {
            t5 = t5.insert(e4.key, e4);
          }), t5));
        }
      };
      eo = class {
        constructor(t4, e3, n2, s2) {
          this.persistence = t4, this.oi = e3, this.M = s2, this.ui = new fe(rt), this.ai = new Kn((t5) => Ie(t5), Ee), this.ci = /* @__PURE__ */ new Map(), this.hi = t4.getRemoteDocumentCache(), this.fs = t4.getTargetCache(), this._s = t4.getBundleCache(), this.li(n2);
        }
        li(t4) {
          this.indexManager = this.persistence.getIndexManager(t4), this.Bs = this.persistence.getMutationQueue(t4, this.indexManager), this.fi = new Xr(this.hi, this.Bs, this.indexManager), this.hi.setIndexManager(this.indexManager), this.oi.initialize(this.fi, this.indexManager);
        }
        collectGarbage(t4) {
          return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (e3) => t4.collect(e3, this.ui));
        }
      };
      yo = class {
        constructor(t4) {
          this.M = t4, this.yi = /* @__PURE__ */ new Map(), this.pi = /* @__PURE__ */ new Map();
        }
        getBundleMetadata(t4, e3) {
          return yi.resolve(this.yi.get(e3));
        }
        saveBundleMetadata(t4, e3) {
          var n2;
          return this.yi.set(e3.id, {
            id: (n2 = e3).id,
            version: n2.version,
            createTime: ws(n2.createTime)
          }), yi.resolve();
        }
        getNamedQuery(t4, e3) {
          return yi.resolve(this.pi.get(e3));
        }
        saveNamedQuery(t4, e3) {
          return this.pi.set(e3.name, function(t5) {
            return {
              name: t5.name,
              query: Ki(t5.bundledQuery),
              readTime: ws(t5.readTime)
            };
          }(e3)), yi.resolve();
        }
      };
      po = class {
        constructor() {
          this.overlays = new fe(xt.comparator), this.Ii = /* @__PURE__ */ new Map();
        }
        getOverlay(t4, e3) {
          return yi.resolve(this.overlays.get(e3));
        }
        saveOverlays(t4, e3, n2) {
          return n2.forEach((n3, s2) => {
            this.Xt(t4, e3, s2);
          }), yi.resolve();
        }
        removeOverlaysForBatchId(t4, e3, n2) {
          const s2 = this.Ii.get(n2);
          return s2 !== void 0 && (s2.forEach((t5) => this.overlays = this.overlays.remove(t5)), this.Ii.delete(n2)), yi.resolve();
        }
        getOverlaysForCollection(t4, e3, n2) {
          const s2 = zn(), i3 = e3.length + 1, r3 = new xt(e3.child("")), o3 = this.overlays.getIteratorFrom(r3);
          for (; o3.hasNext(); ) {
            const t5 = o3.getNext().value, r4 = t5.getKey();
            if (!e3.isPrefixOf(r4.path))
              break;
            r4.path.length === i3 && (t5.largestBatchId > n2 && s2.set(t5.getKey(), t5));
          }
          return yi.resolve(s2);
        }
        getOverlaysForCollectionGroup(t4, e3, n2, s2) {
          let i3 = new fe((t5, e4) => t5 - e4);
          const r3 = this.overlays.getIterator();
          for (; r3.hasNext(); ) {
            const t5 = r3.getNext().value;
            if (t5.getKey().getCollectionGroup() === e3 && t5.largestBatchId > n2) {
              let e4 = i3.get(t5.largestBatchId);
              e4 === null && (e4 = zn(), i3 = i3.insert(t5.largestBatchId, e4)), e4.set(t5.getKey(), t5);
            }
          }
          const o3 = zn(), u3 = i3.getIterator();
          for (; u3.hasNext(); ) {
            if (u3.getNext().value.forEach((t5, e4) => o3.set(t5, e4)), o3.size() >= s2)
              break;
          }
          return yi.resolve(o3);
        }
        Xt(t4, e3, n2) {
          if (n2 === null)
            return;
          const s2 = this.overlays.get(n2.key);
          if (s2 !== null) {
            const t5 = this.Ii.get(s2.largestBatchId).delete(n2.key);
            this.Ii.set(s2.largestBatchId, t5);
          }
          this.overlays = this.overlays.insert(n2.key, new xi(e3, n2));
          let i3 = this.Ii.get(e3);
          i3 === void 0 && (i3 = Yn(), this.Ii.set(e3, i3)), this.Ii.set(e3, i3.add(n2.key));
        }
      };
      Io = class {
        constructor() {
          this.Ti = new we(To.Ei), this.Ai = new we(To.Ri);
        }
        isEmpty() {
          return this.Ti.isEmpty();
        }
        addReference(t4, e3) {
          const n2 = new To(t4, e3);
          this.Ti = this.Ti.add(n2), this.Ai = this.Ai.add(n2);
        }
        bi(t4, e3) {
          t4.forEach((t5) => this.addReference(t5, e3));
        }
        removeReference(t4, e3) {
          this.Pi(new To(t4, e3));
        }
        Vi(t4, e3) {
          t4.forEach((t5) => this.removeReference(t5, e3));
        }
        vi(t4) {
          const e3 = new xt(new _t([])), n2 = new To(e3, t4), s2 = new To(e3, t4 + 1), i3 = [];
          return this.Ai.forEachInRange([n2, s2], (t5) => {
            this.Pi(t5), i3.push(t5.key);
          }), i3;
        }
        Si() {
          this.Ti.forEach((t4) => this.Pi(t4));
        }
        Pi(t4) {
          this.Ti = this.Ti.delete(t4), this.Ai = this.Ai.delete(t4);
        }
        Di(t4) {
          const e3 = new xt(new _t([])), n2 = new To(e3, t4), s2 = new To(e3, t4 + 1);
          let i3 = Yn();
          return this.Ai.forEachInRange([n2, s2], (t5) => {
            i3 = i3.add(t5.key);
          }), i3;
        }
        containsKey(t4) {
          const e3 = new To(t4, 0), n2 = this.Ti.firstAfterOrEqual(e3);
          return n2 !== null && t4.isEqual(n2.key);
        }
      };
      To = class {
        constructor(t4, e3) {
          this.key = t4, this.Ci = e3;
        }
        static Ei(t4, e3) {
          return xt.comparator(t4.key, e3.key) || rt(t4.Ci, e3.Ci);
        }
        static Ri(t4, e3) {
          return rt(t4.Ci, e3.Ci) || xt.comparator(t4.key, e3.key);
        }
      };
      Eo = class {
        constructor(t4, e3) {
          this.indexManager = t4, this.referenceDelegate = e3, this.Bs = [], this.xi = 1, this.Ni = new we(To.Ei);
        }
        checkEmpty(t4) {
          return yi.resolve(this.Bs.length === 0);
        }
        addMutationBatch(t4, e3, n2, s2) {
          const i3 = this.xi;
          this.xi++, this.Bs.length > 0 && this.Bs[this.Bs.length - 1];
          const r3 = new Di(i3, e3, n2, s2);
          this.Bs.push(r3);
          for (const e4 of s2)
            this.Ni = this.Ni.add(new To(e4.key, i3)), this.indexManager.addToCollectionParentIndex(t4, e4.key.path.popLast());
          return yi.resolve(r3);
        }
        lookupMutationBatch(t4, e3) {
          return yi.resolve(this.ki(e3));
        }
        getNextMutationBatchAfterBatchId(t4, e3) {
          const n2 = e3 + 1, s2 = this.Mi(n2), i3 = s2 < 0 ? 0 : s2;
          return yi.resolve(this.Bs.length > i3 ? this.Bs[i3] : null);
        }
        getHighestUnacknowledgedBatchId() {
          return yi.resolve(this.Bs.length === 0 ? -1 : this.xi - 1);
        }
        getAllMutationBatches(t4) {
          return yi.resolve(this.Bs.slice());
        }
        getAllMutationBatchesAffectingDocumentKey(t4, e3) {
          const n2 = new To(e3, 0), s2 = new To(e3, Number.POSITIVE_INFINITY), i3 = [];
          return this.Ni.forEachInRange([n2, s2], (t5) => {
            const e4 = this.ki(t5.Ci);
            i3.push(e4);
          }), yi.resolve(i3);
        }
        getAllMutationBatchesAffectingDocumentKeys(t4, e3) {
          let n2 = new we(rt);
          return e3.forEach((t5) => {
            const e4 = new To(t5, 0), s2 = new To(t5, Number.POSITIVE_INFINITY);
            this.Ni.forEachInRange([e4, s2], (t6) => {
              n2 = n2.add(t6.Ci);
            });
          }), yi.resolve(this.Oi(n2));
        }
        getAllMutationBatchesAffectingQuery(t4, e3) {
          const n2 = e3.path, s2 = n2.length + 1;
          let i3 = n2;
          xt.isDocumentKey(i3) || (i3 = i3.child(""));
          const r3 = new To(new xt(i3), 0);
          let o3 = new we(rt);
          return this.Ni.forEachWhile((t5) => {
            const e4 = t5.key.path;
            return !!n2.isPrefixOf(e4) && (e4.length === s2 && (o3 = o3.add(t5.Ci)), true);
          }, r3), yi.resolve(this.Oi(o3));
        }
        Oi(t4) {
          const e3 = [];
          return t4.forEach((t5) => {
            const n2 = this.ki(t5);
            n2 !== null && e3.push(n2);
          }), e3;
        }
        removeMutationBatch(t4, e3) {
          U2(this.Fi(e3.batchId, "removed") === 0), this.Bs.shift();
          let n2 = this.Ni;
          return yi.forEach(e3.mutations, (s2) => {
            const i3 = new To(s2.key, e3.batchId);
            return n2 = n2.delete(i3), this.referenceDelegate.markPotentiallyOrphaned(t4, s2.key);
          }).next(() => {
            this.Ni = n2;
          });
        }
        _n(t4) {
        }
        containsKey(t4, e3) {
          const n2 = new To(e3, 0), s2 = this.Ni.firstAfterOrEqual(n2);
          return yi.resolve(e3.isEqual(s2 && s2.key));
        }
        performConsistencyCheck(t4) {
          return this.Bs.length, yi.resolve();
        }
        Fi(t4, e3) {
          return this.Mi(t4);
        }
        Mi(t4) {
          if (this.Bs.length === 0)
            return 0;
          return t4 - this.Bs[0].batchId;
        }
        ki(t4) {
          const e3 = this.Mi(t4);
          if (e3 < 0 || e3 >= this.Bs.length)
            return null;
          return this.Bs[e3];
        }
      };
      Ao = class {
        constructor(t4) {
          this.$i = t4, this.docs = new fe(xt.comparator), this.size = 0;
        }
        setIndexManager(t4) {
          this.indexManager = t4;
        }
        addEntry(t4, e3) {
          const n2 = e3.key, s2 = this.docs.get(n2), i3 = s2 ? s2.size : 0, r3 = this.$i(e3);
          return this.docs = this.docs.insert(n2, {
            document: e3.mutableCopy(),
            size: r3
          }), this.size += r3 - i3, this.indexManager.addToCollectionParentIndex(t4, n2.path.popLast());
        }
        removeEntry(t4) {
          const e3 = this.docs.get(t4);
          e3 && (this.docs = this.docs.remove(t4), this.size -= e3.size);
        }
        getEntry(t4, e3) {
          const n2 = this.docs.get(e3);
          return yi.resolve(n2 ? n2.document.mutableCopy() : ne.newInvalidDocument(e3));
        }
        getEntries(t4, e3) {
          let n2 = Qn();
          return e3.forEach((t5) => {
            const e4 = this.docs.get(t5);
            n2 = n2.insert(t5, e4 ? e4.document.mutableCopy() : ne.newInvalidDocument(t5));
          }), yi.resolve(n2);
        }
        getAllFromCollection(t4, e3, n2) {
          let s2 = Qn();
          const i3 = new xt(e3.child("")), r3 = this.docs.getIteratorFrom(i3);
          for (; r3.hasNext(); ) {
            const { key: t5, value: { document: i4 } } = r3.getNext();
            if (!e3.isPrefixOf(t5.path))
              break;
            t5.path.length > e3.length + 1 || (le(ce(i4), n2) <= 0 || (s2 = s2.insert(i4.key, i4.mutableCopy())));
          }
          return yi.resolve(s2);
        }
        getAllFromCollectionGroup(t4, e3, n2, s2) {
          L3();
        }
        Bi(t4, e3) {
          return yi.forEach(this.docs, (t5) => e3(t5));
        }
        newChangeBuffer(t4) {
          return new Ro(this);
        }
        getSize(t4) {
          return yi.resolve(this.size);
        }
      };
      Ro = class extends Fr {
        constructor(t4) {
          super(), this.Kn = t4;
        }
        applyChanges(t4) {
          const e3 = [];
          return this.changes.forEach((n2, s2) => {
            s2.isValidDocument() ? e3.push(this.Kn.addEntry(t4, s2)) : this.Kn.removeEntry(n2);
          }), yi.waitFor(e3);
        }
        getFromCache(t4, e3) {
          return this.Kn.getEntry(t4, e3);
        }
        getAllFromCache(t4, e3) {
          return this.Kn.getEntries(t4, e3);
        }
      };
      bo = class {
        constructor(t4) {
          this.persistence = t4, this.Li = new Kn((t5) => Ie(t5), Ee), this.lastRemoteSnapshotVersion = ct.min(), this.highestTargetId = 0, this.Ui = 0, this.qi = new Io(), this.targetCount = 0, this.Ki = br.gn();
        }
        forEachTarget(t4, e3) {
          return this.Li.forEach((t5, n2) => e3(n2)), yi.resolve();
        }
        getLastRemoteSnapshotVersion(t4) {
          return yi.resolve(this.lastRemoteSnapshotVersion);
        }
        getHighestSequenceNumber(t4) {
          return yi.resolve(this.Ui);
        }
        allocateTargetId(t4) {
          return this.highestTargetId = this.Ki.next(), yi.resolve(this.highestTargetId);
        }
        setTargetsMetadata(t4, e3, n2) {
          return n2 && (this.lastRemoteSnapshotVersion = n2), e3 > this.Ui && (this.Ui = e3), yi.resolve();
        }
        Tn(t4) {
          this.Li.set(t4.target, t4);
          const e3 = t4.targetId;
          e3 > this.highestTargetId && (this.Ki = new br(e3), this.highestTargetId = e3), t4.sequenceNumber > this.Ui && (this.Ui = t4.sequenceNumber);
        }
        addTargetData(t4, e3) {
          return this.Tn(e3), this.targetCount += 1, yi.resolve();
        }
        updateTargetData(t4, e3) {
          return this.Tn(e3), yi.resolve();
        }
        removeTargetData(t4, e3) {
          return this.Li.delete(e3.target), this.qi.vi(e3.targetId), this.targetCount -= 1, yi.resolve();
        }
        removeTargets(t4, e3, n2) {
          let s2 = 0;
          const i3 = [];
          return this.Li.forEach((r3, o3) => {
            o3.sequenceNumber <= e3 && n2.get(o3.targetId) === null && (this.Li.delete(r3), i3.push(this.removeMatchingKeysForTargetId(t4, o3.targetId)), s2++);
          }), yi.waitFor(i3).next(() => s2);
        }
        getTargetCount(t4) {
          return yi.resolve(this.targetCount);
        }
        getTargetData(t4, e3) {
          const n2 = this.Li.get(e3) || null;
          return yi.resolve(n2);
        }
        addMatchingKeys(t4, e3, n2) {
          return this.qi.bi(e3, n2), yi.resolve();
        }
        removeMatchingKeys(t4, e3, n2) {
          this.qi.Vi(e3, n2);
          const s2 = this.persistence.referenceDelegate, i3 = [];
          return s2 && e3.forEach((e4) => {
            i3.push(s2.markPotentiallyOrphaned(t4, e4));
          }), yi.waitFor(i3);
        }
        removeMatchingKeysForTargetId(t4, e3) {
          return this.qi.vi(e3), yi.resolve();
        }
        getMatchingKeysForTargetId(t4, e3) {
          const n2 = this.qi.Di(e3);
          return yi.resolve(n2);
        }
        containsKey(t4, e3) {
          return yi.resolve(this.qi.containsKey(e3));
        }
      };
      Po = class {
        constructor(t4, e3) {
          this.Gi = {}, this.overlays = {}, this.es = new nt(0), this.ns = false, this.ns = true, this.referenceDelegate = t4(this), this.fs = new bo(this);
          this.indexManager = new ar(), this.ds = function(t5) {
            return new Ao(t5);
          }((t5) => this.referenceDelegate.Qi(t5)), this.M = new ki(e3), this._s = new yo(this.M);
        }
        start() {
          return Promise.resolve();
        }
        shutdown() {
          return this.ns = false, Promise.resolve();
        }
        get started() {
          return this.ns;
        }
        setDatabaseDeletedListener() {
        }
        setNetworkEnabled() {
        }
        getIndexManager(t4) {
          return this.indexManager;
        }
        getDocumentOverlayCache(t4) {
          let e3 = this.overlays[t4.toKey()];
          return e3 || (e3 = new po(), this.overlays[t4.toKey()] = e3), e3;
        }
        getMutationQueue(t4, e3) {
          let n2 = this.Gi[t4.toKey()];
          return n2 || (n2 = new Eo(e3, this.referenceDelegate), this.Gi[t4.toKey()] = n2), n2;
        }
        getTargetCache() {
          return this.fs;
        }
        getRemoteDocumentCache() {
          return this.ds;
        }
        getBundleCache() {
          return this._s;
        }
        runTransaction(t4, e3, n2) {
          O3("MemoryPersistence", "Starting transaction:", t4);
          const s2 = new Vo(this.es.next());
          return this.referenceDelegate.ji(), n2(s2).next((t5) => this.referenceDelegate.Wi(s2).next(() => t5)).toPromise().then((t5) => (s2.raiseOnCommittedEvent(), t5));
        }
        zi(t4, e3) {
          return yi.or(Object.values(this.Gi).map((n2) => () => n2.containsKey(t4, e3)));
        }
      };
      Vo = class extends gi {
        constructor(t4) {
          super(), this.currentSequenceNumber = t4;
        }
      };
      vo = class {
        constructor(t4) {
          this.persistence = t4, this.Hi = new Io(), this.Ji = null;
        }
        static Yi(t4) {
          return new vo(t4);
        }
        get Xi() {
          if (this.Ji)
            return this.Ji;
          throw L3();
        }
        addReference(t4, e3, n2) {
          return this.Hi.addReference(n2, e3), this.Xi.delete(n2.toString()), yi.resolve();
        }
        removeReference(t4, e3, n2) {
          return this.Hi.removeReference(n2, e3), this.Xi.add(n2.toString()), yi.resolve();
        }
        markPotentiallyOrphaned(t4, e3) {
          return this.Xi.add(e3.toString()), yi.resolve();
        }
        removeTarget(t4, e3) {
          this.Hi.vi(e3.targetId).forEach((t5) => this.Xi.add(t5.toString()));
          const n2 = this.persistence.getTargetCache();
          return n2.getMatchingKeysForTargetId(t4, e3.targetId).next((t5) => {
            t5.forEach((t6) => this.Xi.add(t6.toString()));
          }).next(() => n2.removeTargetData(t4, e3));
        }
        ji() {
          this.Ji = /* @__PURE__ */ new Set();
        }
        Wi(t4) {
          const e3 = this.persistence.getRemoteDocumentCache().newChangeBuffer();
          return yi.forEach(this.Xi, (n2) => {
            const s2 = xt.fromPath(n2);
            return this.Zi(t4, s2).next((t5) => {
              t5 || e3.removeEntry(s2, ct.min());
            });
          }).next(() => (this.Ji = null, e3.apply(t4)));
        }
        updateLimboDocument(t4, e3) {
          return this.Zi(t4, e3).next((t5) => {
            t5 ? this.Xi.delete(e3.toString()) : this.Xi.add(e3.toString());
          });
        }
        Qi(t4) {
          return 0;
        }
        Zi(t4, e3) {
          return yi.or([() => yi.resolve(this.Hi.containsKey(e3)), () => this.persistence.getTargetCache().containsKey(t4, e3), () => this.persistence.zi(t4, e3)]);
        }
      };
      Oo = class {
        constructor() {
          this.activeTargetIds = Zn();
        }
        nr(t4) {
          this.activeTargetIds = this.activeTargetIds.add(t4);
        }
        sr(t4) {
          this.activeTargetIds = this.activeTargetIds.delete(t4);
        }
        er() {
          const t4 = {
            activeTargetIds: this.activeTargetIds.toArray(),
            updateTimeMs: Date.now()
          };
          return JSON.stringify(t4);
        }
      };
      $o = class {
        constructor() {
          this.Ur = new Oo(), this.qr = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
        }
        addPendingMutation(t4) {
        }
        updateMutationState(t4, e3, n2) {
        }
        addLocalQueryTarget(t4) {
          return this.Ur.nr(t4), this.qr[t4] || "not-current";
        }
        updateQueryState(t4, e3, n2) {
          this.qr[t4] = e3;
        }
        removeLocalQueryTarget(t4) {
          this.Ur.sr(t4);
        }
        isLocalQueryTarget(t4) {
          return this.Ur.activeTargetIds.has(t4);
        }
        clearQueryState(t4) {
          delete this.qr[t4];
        }
        getAllActiveQueryTargets() {
          return this.Ur.activeTargetIds;
        }
        isActiveQueryTarget(t4) {
          return this.Ur.activeTargetIds.has(t4);
        }
        start() {
          return this.Ur = new Oo(), Promise.resolve();
        }
        handleUserChange(t4, e3, n2) {
        }
        setOnlineState(t4) {
        }
        shutdown() {
        }
        writeSequenceNumber(t4) {
        }
        notifyBundleLoaded(t4) {
        }
      };
      Bo = class {
        Kr(t4) {
        }
        shutdown() {
        }
      };
      Lo = class {
        constructor() {
          this.Gr = () => this.Qr(), this.jr = () => this.Wr(), this.zr = [], this.Hr();
        }
        Kr(t4) {
          this.zr.push(t4);
        }
        shutdown() {
          window.removeEventListener("online", this.Gr), window.removeEventListener("offline", this.jr);
        }
        Hr() {
          window.addEventListener("online", this.Gr), window.addEventListener("offline", this.jr);
        }
        Qr() {
          O3("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
          for (const t4 of this.zr)
            t4(0);
        }
        Wr() {
          O3("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
          for (const t4 of this.zr)
            t4(1);
        }
        static vt() {
          return typeof window != "undefined" && window.addEventListener !== void 0 && window.removeEventListener !== void 0;
        }
      };
      Uo = {
        BatchGetDocuments: "batchGet",
        Commit: "commit",
        RunQuery: "runQuery"
      };
      qo = class {
        constructor(t4) {
          this.Jr = t4.Jr, this.Yr = t4.Yr;
        }
        Xr(t4) {
          this.Zr = t4;
        }
        eo(t4) {
          this.no = t4;
        }
        onMessage(t4) {
          this.so = t4;
        }
        close() {
          this.Yr();
        }
        send(t4) {
          this.Jr(t4);
        }
        io() {
          this.Zr();
        }
        ro(t4) {
          this.no(t4);
        }
        oo(t4) {
          this.so(t4);
        }
      };
      Ko = class extends class {
        constructor(t4) {
          this.databaseInfo = t4, this.databaseId = t4.databaseId;
          const e3 = t4.ssl ? "https" : "http";
          this.uo = e3 + "://" + t4.host, this.ao = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
        }
        co(t4, e3, n2, s2, i3) {
          const r3 = this.ho(t4, e3);
          O3("RestConnection", "Sending: ", r3, n2);
          const o3 = {};
          return this.lo(o3, s2, i3), this.fo(t4, r3, o3, n2).then((t5) => (O3("RestConnection", "Received: ", t5), t5), (e4) => {
            throw $2("RestConnection", `${t4} failed with error: `, e4, "url: ", r3, "request:", n2), e4;
          });
        }
        _o(t4, e3, n2, s2, i3) {
          return this.co(t4, e3, n2, s2, i3);
        }
        lo(t4, e3, n2) {
          t4["X-Goog-Api-Client"] = "gl-js/ fire/" + x4, t4["Content-Type"] = "text/plain", this.databaseInfo.appId && (t4["X-Firebase-GMPID"] = this.databaseInfo.appId), e3 && e3.headers.forEach((e4, n3) => t4[n3] = e4), n2 && n2.headers.forEach((e4, n3) => t4[n3] = e4);
        }
        ho(t4, e3) {
          const n2 = Uo[t4];
          return `${this.uo}/v1/${e3}:${n2}`;
        }
      } {
        constructor(t4) {
          super(t4), this.forceLongPolling = t4.forceLongPolling, this.autoDetectLongPolling = t4.autoDetectLongPolling, this.useFetchStreams = t4.useFetchStreams;
        }
        fo(t4, e3, n2, s2) {
          return new Promise((i3, r3) => {
            const o3 = new XhrIo();
            o3.listenOnce(EventType.COMPLETE, () => {
              try {
                switch (o3.getLastErrorCode()) {
                  case ErrorCode2.NO_ERROR:
                    const e4 = o3.getResponseJson();
                    O3("Connection", "XHR received:", JSON.stringify(e4)), i3(e4);
                    break;
                  case ErrorCode2.TIMEOUT:
                    O3("Connection", 'RPC "' + t4 + '" timed out'), r3(new Q2(G.DEADLINE_EXCEEDED, "Request time out"));
                    break;
                  case ErrorCode2.HTTP_ERROR:
                    const n3 = o3.getStatus();
                    if (O3("Connection", 'RPC "' + t4 + '" failed with status:', n3, "response text:", o3.getResponseText()), n3 > 0) {
                      const t5 = o3.getResponseJson().error;
                      if (t5 && t5.status && t5.message) {
                        const e5 = function(t6) {
                          const e6 = t6.toLowerCase().replace(/_/g, "-");
                          return Object.values(G).indexOf(e6) >= 0 ? e6 : G.UNKNOWN;
                        }(t5.status);
                        r3(new Q2(e5, t5.message));
                      } else
                        r3(new Q2(G.UNKNOWN, "Server responded with status " + o3.getStatus()));
                    } else
                      r3(new Q2(G.UNAVAILABLE, "Connection failed."));
                    break;
                  default:
                    L3();
                }
              } finally {
                O3("Connection", 'RPC "' + t4 + '" completed.');
              }
            });
            const u3 = JSON.stringify(s2);
            o3.send(e3, "POST", u3, n2, 15);
          });
        }
        wo(t4, e3, n2) {
          const s2 = [this.uo, "/", "google.firestore.v1.Firestore", "/", t4, "/channel"], i3 = createWebChannelTransport(), r3 = getStatEventTarget(), o3 = {
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
              database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
            },
            sendRawJson: true,
            supportsCrossDomainXhr: true,
            internalChannelParams: {
              forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling,
            detectBufferingProxy: this.autoDetectLongPolling
          };
          this.useFetchStreams && (o3.xmlHttpFactory = new FetchXmlHttpFactory({})), this.lo(o3.initMessageHeaders, e3, n2), isMobileCordova() || isReactNative() || isElectron() || isIE() || isUWP() || isBrowserExtension() || (o3.httpHeadersOverwriteParam = "$httpHeaders");
          const u3 = s2.join("");
          O3("Connection", "Creating WebChannel: " + u3, o3);
          const a3 = i3.createWebChannel(u3, o3);
          let c3 = false, h2 = false;
          const l4 = new qo({
            Jr: (t5) => {
              h2 ? O3("Connection", "Not sending because WebChannel is closed:", t5) : (c3 || (O3("Connection", "Opening WebChannel transport."), a3.open(), c3 = true), O3("Connection", "WebChannel sending:", t5), a3.send(t5));
            },
            Yr: () => a3.close()
          }), y4 = (t5, e4, n3) => {
            t5.listen(e4, (t6) => {
              try {
                n3(t6);
              } catch (t7) {
                setTimeout(() => {
                  throw t7;
                }, 0);
              }
            });
          };
          return y4(a3, WebChannel.EventType.OPEN, () => {
            h2 || O3("Connection", "WebChannel transport opened.");
          }), y4(a3, WebChannel.EventType.CLOSE, () => {
            h2 || (h2 = true, O3("Connection", "WebChannel transport closed"), l4.ro());
          }), y4(a3, WebChannel.EventType.ERROR, (t5) => {
            h2 || (h2 = true, $2("Connection", "WebChannel transport errored:", t5), l4.ro(new Q2(G.UNAVAILABLE, "The operation could not be completed")));
          }), y4(a3, WebChannel.EventType.MESSAGE, (t5) => {
            var e4;
            if (!h2) {
              const n3 = t5.data[0];
              U2(!!n3);
              const s3 = n3, i4 = s3.error || ((e4 = s3[0]) === null || e4 === void 0 ? void 0 : e4.error);
              if (i4) {
                O3("Connection", "WebChannel received error:", i4);
                const t6 = i4.status;
                let e5 = function(t7) {
                  const e6 = Bn[t7];
                  if (e6 !== void 0)
                    return qn(e6);
                }(t6), n4 = i4.message;
                e5 === void 0 && (e5 = G.INTERNAL, n4 = "Unknown error status: " + t6 + " with message " + i4.message), h2 = true, l4.ro(new Q2(e5, n4)), a3.close();
              } else
                O3("Connection", "WebChannel received:", n3), l4.oo(n3);
            }
          }), y4(r3, Event.STAT_EVENT, (t5) => {
            t5.stat === Stat.PROXY ? O3("Connection", "Detected buffering proxy") : t5.stat === Stat.NOPROXY && O3("Connection", "Detected no buffering proxy");
          }), setTimeout(() => {
            l4.io();
          }, 0), l4;
        }
      };
      Wo = class {
        constructor(t4, e3, n2 = 1e3, s2 = 1.5, i3 = 6e4) {
          this.Yn = t4, this.timerId = e3, this.mo = n2, this.yo = s2, this.po = i3, this.Io = 0, this.To = null, this.Eo = Date.now(), this.reset();
        }
        reset() {
          this.Io = 0;
        }
        Ao() {
          this.Io = this.po;
        }
        Ro(t4) {
          this.cancel();
          const e3 = Math.floor(this.Io + this.bo()), n2 = Math.max(0, Date.now() - this.Eo), s2 = Math.max(0, e3 - n2);
          s2 > 0 && O3("ExponentialBackoff", `Backing off for ${s2} ms (base delay: ${this.Io} ms, delay with jitter: ${e3} ms, last attempt: ${n2} ms ago)`), this.To = this.Yn.enqueueAfterDelay(this.timerId, s2, () => (this.Eo = Date.now(), t4())), this.Io *= this.yo, this.Io < this.mo && (this.Io = this.mo), this.Io > this.po && (this.Io = this.po);
        }
        Po() {
          this.To !== null && (this.To.skipDelay(), this.To = null);
        }
        cancel() {
          this.To !== null && (this.To.cancel(), this.To = null);
        }
        bo() {
          return (Math.random() - 0.5) * this.Io;
        }
      };
      zo = class {
        constructor(t4, e3, n2, s2, i3, r3, o3, u3) {
          this.Yn = t4, this.Vo = n2, this.vo = s2, this.So = i3, this.authCredentialsProvider = r3, this.appCheckCredentialsProvider = o3, this.listener = u3, this.state = 0, this.Do = 0, this.Co = null, this.xo = null, this.stream = null, this.No = new Wo(t4, e3);
        }
        ko() {
          return this.state === 1 || this.state === 5 || this.Mo();
        }
        Mo() {
          return this.state === 2 || this.state === 3;
        }
        start() {
          this.state !== 4 ? this.auth() : this.Oo();
        }
        async stop() {
          this.ko() && await this.close(0);
        }
        Fo() {
          this.state = 0, this.No.reset();
        }
        $o() {
          this.Mo() && this.Co === null && (this.Co = this.Yn.enqueueAfterDelay(this.Vo, 6e4, () => this.Bo()));
        }
        Lo(t4) {
          this.Uo(), this.stream.send(t4);
        }
        async Bo() {
          if (this.Mo())
            return this.close(0);
        }
        Uo() {
          this.Co && (this.Co.cancel(), this.Co = null);
        }
        qo() {
          this.xo && (this.xo.cancel(), this.xo = null);
        }
        async close(t4, e3) {
          this.Uo(), this.qo(), this.No.cancel(), this.Do++, t4 !== 4 ? this.No.reset() : e3 && e3.code === G.RESOURCE_EXHAUSTED ? (F2(e3.toString()), F2("Using maximum backoff delay to prevent overloading the backend."), this.No.Ao()) : e3 && e3.code === G.UNAUTHENTICATED && this.state !== 3 && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), this.stream !== null && (this.Ko(), this.stream.close(), this.stream = null), this.state = t4, await this.listener.eo(e3);
        }
        Ko() {
        }
        auth() {
          this.state = 1;
          const t4 = this.Go(this.Do), e3 = this.Do;
          Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([t5, n2]) => {
            this.Do === e3 && this.Qo(t5, n2);
          }, (e4) => {
            t4(() => {
              const t5 = new Q2(G.UNKNOWN, "Fetching auth token failed: " + e4.message);
              return this.jo(t5);
            });
          });
        }
        Qo(t4, e3) {
          const n2 = this.Go(this.Do);
          this.stream = this.Wo(t4, e3), this.stream.Xr(() => {
            n2(() => (this.state = 2, this.xo = this.Yn.enqueueAfterDelay(this.vo, 1e4, () => (this.Mo() && (this.state = 3), Promise.resolve())), this.listener.Xr()));
          }), this.stream.eo((t5) => {
            n2(() => this.jo(t5));
          }), this.stream.onMessage((t5) => {
            n2(() => this.onMessage(t5));
          });
        }
        Oo() {
          this.state = 5, this.No.Ro(async () => {
            this.state = 0, this.start();
          });
        }
        jo(t4) {
          return O3("PersistentStream", `close with error: ${t4}`), this.stream = null, this.close(4, t4);
        }
        Go(t4) {
          return (e3) => {
            this.Yn.enqueueAndForget(() => this.Do === t4 ? e3() : (O3("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
          };
        }
      };
      Ho = class extends zo {
        constructor(t4, e3, n2, s2, i3, r3) {
          super(t4, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", e3, n2, s2, r3), this.M = i3;
        }
        Wo(t4, e3) {
          return this.So.wo("Listen", t4, e3);
        }
        onMessage(t4) {
          this.No.reset();
          const e3 = Vs(this.M, t4), n2 = function(t5) {
            if (!("targetChange" in t5))
              return ct.min();
            const e4 = t5.targetChange;
            return e4.targetIds && e4.targetIds.length ? ct.min() : e4.readTime ? ws(e4.readTime) : ct.min();
          }(t4);
          return this.listener.zo(e3, n2);
        }
        Ho(t4) {
          const e3 = {};
          e3.database = Es(this.M), e3.addTarget = function(t5, e4) {
            let n3;
            const s2 = e4.target;
            return n3 = Ae(s2) ? {
              documents: Cs(t5, s2)
            } : {
              query: xs(t5, s2)
            }, n3.targetId = e4.targetId, e4.resumeToken.approximateByteSize() > 0 ? n3.resumeToken = ds(t5, e4.resumeToken) : e4.snapshotVersion.compareTo(ct.min()) > 0 && (n3.readTime = fs(t5, e4.snapshotVersion.toTimestamp())), n3;
          }(this.M, t4);
          const n2 = ks(this.M, t4);
          n2 && (e3.labels = n2), this.Lo(e3);
        }
        Jo(t4) {
          const e3 = {};
          e3.database = Es(this.M), e3.removeTarget = t4, this.Lo(e3);
        }
      };
      Yo = class extends class {
      } {
        constructor(t4, e3, n2, s2) {
          super(), this.authCredentials = t4, this.appCheckCredentials = e3, this.So = n2, this.M = s2, this.su = false;
        }
        iu() {
          if (this.su)
            throw new Q2(G.FAILED_PRECONDITION, "The client has already been terminated.");
        }
        co(t4, e3, n2) {
          return this.iu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s2, i3]) => this.So.co(t4, e3, n2, s2, i3)).catch((t5) => {
            throw t5.name === "FirebaseError" ? (t5.code === G.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t5) : new Q2(G.UNKNOWN, t5.toString());
          });
        }
        _o(t4, e3, n2) {
          return this.iu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s2, i3]) => this.So._o(t4, e3, n2, s2, i3)).catch((t5) => {
            throw t5.name === "FirebaseError" ? (t5.code === G.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), t5) : new Q2(G.UNKNOWN, t5.toString());
          });
        }
        terminate() {
          this.su = true;
        }
      };
      Xo = class {
        constructor(t4, e3) {
          this.asyncQueue = t4, this.onlineStateHandler = e3, this.state = "Unknown", this.ru = 0, this.ou = null, this.uu = true;
        }
        au() {
          this.ru === 0 && (this.cu("Unknown"), this.ou = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.ou = null, this.hu("Backend didn't respond within 10 seconds."), this.cu("Offline"), Promise.resolve())));
        }
        lu(t4) {
          this.state === "Online" ? this.cu("Unknown") : (this.ru++, this.ru >= 1 && (this.fu(), this.hu(`Connection failed 1 times. Most recent error: ${t4.toString()}`), this.cu("Offline")));
        }
        set(t4) {
          this.fu(), this.ru = 0, t4 === "Online" && (this.uu = false), this.cu(t4);
        }
        cu(t4) {
          t4 !== this.state && (this.state = t4, this.onlineStateHandler(t4));
        }
        hu(t4) {
          const e3 = `Could not reach Cloud Firestore backend. ${t4}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
          this.uu ? (F2(e3), this.uu = false) : O3("OnlineStateTracker", e3);
        }
        fu() {
          this.ou !== null && (this.ou.cancel(), this.ou = null);
        }
      };
      Zo = class {
        constructor(t4, e3, n2, s2, i3) {
          this.localStore = t4, this.datastore = e3, this.asyncQueue = n2, this.remoteSyncer = {}, this.du = [], this._u = /* @__PURE__ */ new Map(), this.wu = /* @__PURE__ */ new Set(), this.mu = [], this.gu = i3, this.gu.Kr((t5) => {
            n2.enqueueAndForget(async () => {
              au(this) && (O3("RemoteStore", "Restarting streams for network reachability change."), await async function(t6) {
                const e4 = K2(t6);
                e4.wu.add(4), await eu(e4), e4.yu.set("Unknown"), e4.wu.delete(4), await tu(e4);
              }(this));
            });
          }), this.yu = new Xo(n2, s2);
        }
      };
      vu = class {
        constructor(t4, e3, n2, s2, i3) {
          this.asyncQueue = t4, this.timerId = e3, this.targetTimeMs = n2, this.op = s2, this.removalCallback = i3, this.deferred = new j3(), this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch((t5) => {
          });
        }
        static createAndSchedule(t4, e3, n2, s2, i3) {
          const r3 = Date.now() + n2, o3 = new vu(t4, e3, r3, s2, i3);
          return o3.start(n2), o3;
        }
        start(t4) {
          this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t4);
        }
        skipDelay() {
          return this.handleDelayElapsed();
        }
        cancel(t4) {
          this.timerHandle !== null && (this.clearTimeout(), this.deferred.reject(new Q2(G.CANCELLED, "Operation cancelled" + (t4 ? ": " + t4 : ""))));
        }
        handleDelayElapsed() {
          this.asyncQueue.enqueueAndForget(() => this.timerHandle !== null ? (this.clearTimeout(), this.op().then((t4) => this.deferred.resolve(t4))) : Promise.resolve());
        }
        clearTimeout() {
          this.timerHandle !== null && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
        }
      };
      Du = class {
        constructor(t4) {
          this.comparator = t4 ? (e3, n2) => t4(e3, n2) || xt.comparator(e3.key, n2.key) : (t5, e3) => xt.comparator(t5.key, e3.key), this.keyedMap = Wn(), this.sortedSet = new fe(this.comparator);
        }
        static emptySet(t4) {
          return new Du(t4.comparator);
        }
        has(t4) {
          return this.keyedMap.get(t4) != null;
        }
        get(t4) {
          return this.keyedMap.get(t4);
        }
        first() {
          return this.sortedSet.minKey();
        }
        last() {
          return this.sortedSet.maxKey();
        }
        isEmpty() {
          return this.sortedSet.isEmpty();
        }
        indexOf(t4) {
          const e3 = this.keyedMap.get(t4);
          return e3 ? this.sortedSet.indexOf(e3) : -1;
        }
        get size() {
          return this.sortedSet.size;
        }
        forEach(t4) {
          this.sortedSet.inorderTraversal((e3, n2) => (t4(e3), false));
        }
        add(t4) {
          const e3 = this.delete(t4.key);
          return e3.copy(e3.keyedMap.insert(t4.key, t4), e3.sortedSet.insert(t4, null));
        }
        delete(t4) {
          const e3 = this.get(t4);
          return e3 ? this.copy(this.keyedMap.remove(t4), this.sortedSet.remove(e3)) : this;
        }
        isEqual(t4) {
          if (!(t4 instanceof Du))
            return false;
          if (this.size !== t4.size)
            return false;
          const e3 = this.sortedSet.getIterator(), n2 = t4.sortedSet.getIterator();
          for (; e3.hasNext(); ) {
            const t5 = e3.getNext().key, s2 = n2.getNext().key;
            if (!t5.isEqual(s2))
              return false;
          }
          return true;
        }
        toString() {
          const t4 = [];
          return this.forEach((e3) => {
            t4.push(e3.toString());
          }), t4.length === 0 ? "DocumentSet ()" : "DocumentSet (\n  " + t4.join("  \n") + "\n)";
        }
        copy(t4, e3) {
          const n2 = new Du();
          return n2.comparator = this.comparator, n2.keyedMap = t4, n2.sortedSet = e3, n2;
        }
      };
      Cu = class {
        constructor() {
          this.Eu = new fe(xt.comparator);
        }
        track(t4) {
          const e3 = t4.doc.key, n2 = this.Eu.get(e3);
          n2 ? t4.type !== 0 && n2.type === 3 ? this.Eu = this.Eu.insert(e3, t4) : t4.type === 3 && n2.type !== 1 ? this.Eu = this.Eu.insert(e3, {
            type: n2.type,
            doc: t4.doc
          }) : t4.type === 2 && n2.type === 2 ? this.Eu = this.Eu.insert(e3, {
            type: 2,
            doc: t4.doc
          }) : t4.type === 2 && n2.type === 0 ? this.Eu = this.Eu.insert(e3, {
            type: 0,
            doc: t4.doc
          }) : t4.type === 1 && n2.type === 0 ? this.Eu = this.Eu.remove(e3) : t4.type === 1 && n2.type === 2 ? this.Eu = this.Eu.insert(e3, {
            type: 1,
            doc: n2.doc
          }) : t4.type === 0 && n2.type === 1 ? this.Eu = this.Eu.insert(e3, {
            type: 2,
            doc: t4.doc
          }) : L3() : this.Eu = this.Eu.insert(e3, t4);
        }
        Au() {
          const t4 = [];
          return this.Eu.inorderTraversal((e3, n2) => {
            t4.push(n2);
          }), t4;
        }
      };
      xu = class {
        constructor(t4, e3, n2, s2, i3, r3, o3, u3) {
          this.query = t4, this.docs = e3, this.oldDocs = n2, this.docChanges = s2, this.mutatedKeys = i3, this.fromCache = r3, this.syncStateChanged = o3, this.excludesMetadataChanges = u3;
        }
        static fromInitialDocuments(t4, e3, n2, s2) {
          const i3 = [];
          return e3.forEach((t5) => {
            i3.push({
              type: 0,
              doc: t5
            });
          }), new xu(t4, e3, Du.emptySet(e3), i3, n2, s2, true, false);
        }
        get hasPendingWrites() {
          return !this.mutatedKeys.isEmpty();
        }
        isEqual(t4) {
          if (!(this.fromCache === t4.fromCache && this.syncStateChanged === t4.syncStateChanged && this.mutatedKeys.isEqual(t4.mutatedKeys) && Ye(this.query, t4.query) && this.docs.isEqual(t4.docs) && this.oldDocs.isEqual(t4.oldDocs)))
            return false;
          const e3 = this.docChanges, n2 = t4.docChanges;
          if (e3.length !== n2.length)
            return false;
          for (let t5 = 0; t5 < e3.length; t5++)
            if (e3[t5].type !== n2[t5].type || !e3[t5].doc.isEqual(n2[t5].doc))
              return false;
          return true;
        }
      };
      Nu = class {
        constructor() {
          this.Ru = void 0, this.listeners = [];
        }
      };
      ku = class {
        constructor() {
          this.queries = new Kn((t4) => Xe(t4), Ye), this.onlineState = "Unknown", this.bu = /* @__PURE__ */ new Set();
        }
      };
      Lu = class {
        constructor(t4, e3, n2) {
          this.query = t4, this.vu = e3, this.Su = false, this.Du = null, this.onlineState = "Unknown", this.options = n2 || {};
        }
        Vu(t4) {
          if (!this.options.includeMetadataChanges) {
            const e4 = [];
            for (const n2 of t4.docChanges)
              n2.type !== 3 && e4.push(n2);
            t4 = new xu(t4.query, t4.docs, t4.oldDocs, e4, t4.mutatedKeys, t4.fromCache, t4.syncStateChanged, true);
          }
          let e3 = false;
          return this.Su ? this.Cu(t4) && (this.vu.next(t4), e3 = true) : this.xu(t4, this.onlineState) && (this.Nu(t4), e3 = true), this.Du = t4, e3;
        }
        onError(t4) {
          this.vu.error(t4);
        }
        Pu(t4) {
          this.onlineState = t4;
          let e3 = false;
          return this.Du && !this.Su && this.xu(this.Du, t4) && (this.Nu(this.Du), e3 = true), e3;
        }
        xu(t4, e3) {
          if (!t4.fromCache)
            return true;
          const n2 = e3 !== "Offline";
          return (!this.options.ku || !n2) && (!t4.docs.isEmpty() || e3 === "Offline");
        }
        Cu(t4) {
          if (t4.docChanges.length > 0)
            return true;
          const e3 = this.Du && this.Du.hasPendingWrites !== t4.hasPendingWrites;
          return !(!t4.syncStateChanged && !e3) && this.options.includeMetadataChanges === true;
        }
        Nu(t4) {
          t4 = xu.fromInitialDocuments(t4.query, t4.docs, t4.mutatedKeys, t4.fromCache), this.Su = true, this.vu.next(t4);
        }
      };
      Qu = class {
        constructor(t4) {
          this.key = t4;
        }
      };
      ju = class {
        constructor(t4) {
          this.key = t4;
        }
      };
      Wu = class {
        constructor(t4, e3) {
          this.query = t4, this.Uu = e3, this.qu = null, this.current = false, this.Ku = Yn(), this.mutatedKeys = Yn(), this.Gu = nn(t4), this.Qu = new Du(this.Gu);
        }
        get ju() {
          return this.Uu;
        }
        Wu(t4, e3) {
          const n2 = e3 ? e3.zu : new Cu(), s2 = e3 ? e3.Qu : this.Qu;
          let i3 = e3 ? e3.mutatedKeys : this.mutatedKeys, r3 = s2, o3 = false;
          const u3 = this.query.limitType === "F" && s2.size === this.query.limit ? s2.last() : null, a3 = this.query.limitType === "L" && s2.size === this.query.limit ? s2.first() : null;
          if (t4.inorderTraversal((t5, e4) => {
            const c3 = s2.get(t5), h2 = tn(this.query, e4) ? e4 : null, l4 = !!c3 && this.mutatedKeys.has(c3.key), f3 = !!h2 && (h2.hasLocalMutations || this.mutatedKeys.has(h2.key) && h2.hasCommittedMutations);
            let d2 = false;
            if (c3 && h2) {
              c3.data.isEqual(h2.data) ? l4 !== f3 && (n2.track({
                type: 3,
                doc: h2
              }), d2 = true) : this.Hu(c3, h2) || (n2.track({
                type: 2,
                doc: h2
              }), d2 = true, (u3 && this.Gu(h2, u3) > 0 || a3 && this.Gu(h2, a3) < 0) && (o3 = true));
            } else
              !c3 && h2 ? (n2.track({
                type: 0,
                doc: h2
              }), d2 = true) : c3 && !h2 && (n2.track({
                type: 1,
                doc: c3
              }), d2 = true, (u3 || a3) && (o3 = true));
            d2 && (h2 ? (r3 = r3.add(h2), i3 = f3 ? i3.add(t5) : i3.delete(t5)) : (r3 = r3.delete(t5), i3 = i3.delete(t5)));
          }), this.query.limit !== null)
            for (; r3.size > this.query.limit; ) {
              const t5 = this.query.limitType === "F" ? r3.last() : r3.first();
              r3 = r3.delete(t5.key), i3 = i3.delete(t5.key), n2.track({
                type: 1,
                doc: t5
              });
            }
          return {
            Qu: r3,
            zu: n2,
            ii: o3,
            mutatedKeys: i3
          };
        }
        Hu(t4, e3) {
          return t4.hasLocalMutations && e3.hasCommittedMutations && !e3.hasLocalMutations;
        }
        applyChanges(t4, e3, n2) {
          const s2 = this.Qu;
          this.Qu = t4.Qu, this.mutatedKeys = t4.mutatedKeys;
          const i3 = t4.zu.Au();
          i3.sort((t5, e4) => function(t6, e5) {
            const n3 = (t7) => {
              switch (t7) {
                case 0:
                  return 1;
                case 2:
                case 3:
                  return 2;
                case 1:
                  return 0;
                default:
                  return L3();
              }
            };
            return n3(t6) - n3(e5);
          }(t5.type, e4.type) || this.Gu(t5.doc, e4.doc)), this.Ju(n2);
          const r3 = e3 ? this.Yu() : [], o3 = this.Ku.size === 0 && this.current ? 1 : 0, u3 = o3 !== this.qu;
          if (this.qu = o3, i3.length !== 0 || u3) {
            return {
              snapshot: new xu(this.query, t4.Qu, s2, i3, t4.mutatedKeys, o3 === 0, u3, false),
              Xu: r3
            };
          }
          return {
            Xu: r3
          };
        }
        Pu(t4) {
          return this.current && t4 === "Offline" ? (this.current = false, this.applyChanges({
            Qu: this.Qu,
            zu: new Cu(),
            mutatedKeys: this.mutatedKeys,
            ii: false
          }, false)) : {
            Xu: []
          };
        }
        Zu(t4) {
          return !this.Uu.has(t4) && (!!this.Qu.has(t4) && !this.Qu.get(t4).hasLocalMutations);
        }
        Ju(t4) {
          t4 && (t4.addedDocuments.forEach((t5) => this.Uu = this.Uu.add(t5)), t4.modifiedDocuments.forEach((t5) => {
          }), t4.removedDocuments.forEach((t5) => this.Uu = this.Uu.delete(t5)), this.current = t4.current);
        }
        Yu() {
          if (!this.current)
            return [];
          const t4 = this.Ku;
          this.Ku = Yn(), this.Qu.forEach((t5) => {
            this.Zu(t5.key) && (this.Ku = this.Ku.add(t5.key));
          });
          const e3 = [];
          return t4.forEach((t5) => {
            this.Ku.has(t5) || e3.push(new ju(t5));
          }), this.Ku.forEach((n2) => {
            t4.has(n2) || e3.push(new Qu(n2));
          }), e3;
        }
        ta(t4) {
          this.Uu = t4._i, this.Ku = Yn();
          const e3 = this.Wu(t4.documents);
          return this.applyChanges(e3, true);
        }
        ea() {
          return xu.fromInitialDocuments(this.query, this.Qu, this.mutatedKeys, this.qu === 0);
        }
      };
      zu = class {
        constructor(t4, e3, n2) {
          this.query = t4, this.targetId = e3, this.view = n2;
        }
      };
      Hu = class {
        constructor(t4) {
          this.key = t4, this.na = false;
        }
      };
      Ju = class {
        constructor(t4, e3, n2, s2, i3, r3) {
          this.localStore = t4, this.remoteStore = e3, this.eventManager = n2, this.sharedClientState = s2, this.currentUser = i3, this.maxConcurrentLimboResolutions = r3, this.sa = {}, this.ia = new Kn((t5) => Xe(t5), Ye), this.ra = /* @__PURE__ */ new Map(), this.oa = /* @__PURE__ */ new Set(), this.ua = new fe(xt.comparator), this.aa = /* @__PURE__ */ new Map(), this.ca = new Io(), this.ha = {}, this.la = /* @__PURE__ */ new Map(), this.fa = br.yn(), this.onlineState = "Unknown", this.da = void 0;
        }
        get isPrimaryClient() {
          return this.da === true;
        }
      };
      Sa2 = class {
        constructor() {
          this.synchronizeTabs = false;
        }
        async initialize(t4) {
          this.M = jo(t4.databaseInfo.databaseId), this.sharedClientState = this.ga(t4), this.persistence = this.ya(t4), await this.persistence.start(), this.gcScheduler = this.pa(t4), this.localStore = this.Ia(t4);
        }
        pa(t4) {
          return null;
        }
        Ia(t4) {
          return no(this.persistence, new to(), t4.initialUser, this.M);
        }
        ya(t4) {
          return new Po(vo.Yi, this.M);
        }
        ga(t4) {
          return new $o();
        }
        async terminate() {
          this.gcScheduler && this.gcScheduler.stop(), await this.sharedClientState.shutdown(), await this.persistence.shutdown();
        }
      };
      xa2 = class {
        async initialize(t4, e3) {
          this.localStore || (this.localStore = t4.localStore, this.sharedClientState = t4.sharedClientState, this.datastore = this.createDatastore(e3), this.remoteStore = this.createRemoteStore(e3), this.eventManager = this.createEventManager(e3), this.syncEngine = this.createSyncEngine(e3, !t4.synchronizeTabs), this.sharedClientState.onlineStateHandler = (t5) => na2(this.syncEngine, t5, 1), this.remoteStore.remoteSyncer.handleCredentialChange = wa.bind(null, this.syncEngine), await bu(this.remoteStore, this.syncEngine.isPrimaryClient));
        }
        createEventManager(t4) {
          return new ku();
        }
        createDatastore(t4) {
          const e3 = jo(t4.databaseInfo.databaseId), n2 = (s2 = t4.databaseInfo, new Ko(s2));
          var s2;
          return function(t5, e4, n3, s3) {
            return new Yo(t5, e4, n3, s3);
          }(t4.authCredentials, t4.appCheckCredentials, n2, e3);
        }
        createRemoteStore(t4) {
          return e3 = this.localStore, n2 = this.datastore, s2 = t4.asyncQueue, i3 = (t5) => na2(this.syncEngine, t5, 0), r3 = Lo.vt() ? new Lo() : new Bo(), new Zo(e3, n2, s2, i3, r3);
          var e3, n2, s2, i3, r3;
        }
        createSyncEngine(t4, e3) {
          return function(t5, e4, n2, s2, i3, r3, o3) {
            const u3 = new Ju(t5, e4, n2, s2, i3, r3);
            return o3 && (u3.da = true), u3;
          }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t4.initialUser, t4.maxConcurrentLimboResolutions, e3);
        }
        terminate() {
          return async function(t4) {
            const e3 = K2(t4);
            O3("RemoteStore", "RemoteStore shutting down."), e3.wu.add(5), await eu(e3), e3.gu.shutdown(), e3.yu.set("Unknown");
          }(this.remoteStore);
        }
      };
      ka2 = class {
        constructor(t4) {
          this.observer = t4, this.muted = false;
        }
        next(t4) {
          this.observer.next && this.Ea(this.observer.next, t4);
        }
        error(t4) {
          this.observer.error ? this.Ea(this.observer.error, t4) : console.error("Uncaught Error in snapshot listener:", t4);
        }
        Aa() {
          this.muted = true;
        }
        Ea(t4, e3) {
          this.muted || setTimeout(() => {
            this.muted || t4(e3);
          }, 0);
        }
      };
      $a2 = class {
        constructor(t4, e3, n2, s2) {
          this.authCredentials = t4, this.appCheckCredentials = e3, this.asyncQueue = n2, this.databaseInfo = s2, this.user = C3.UNAUTHENTICATED, this.clientId = it.R(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(n2, async (t5) => {
            O3("FirestoreClient", "Received user=", t5.uid), await this.authCredentialListener(t5), this.user = t5;
          }), this.appCheckCredentials.start(n2, (t5) => (O3("FirestoreClient", "Received new app check token=", t5), this.appCheckCredentialListener(t5, this.user)));
        }
        async getConfiguration() {
          return {
            asyncQueue: this.asyncQueue,
            databaseInfo: this.databaseInfo,
            clientId: this.clientId,
            authCredentials: this.authCredentials,
            appCheckCredentials: this.appCheckCredentials,
            initialUser: this.user,
            maxConcurrentLimboResolutions: 100
          };
        }
        setCredentialChangeListener(t4) {
          this.authCredentialListener = t4;
        }
        setAppCheckTokenChangeListener(t4) {
          this.appCheckCredentialListener = t4;
        }
        verifyNotTerminated() {
          if (this.asyncQueue.isShuttingDown)
            throw new Q2(G.FAILED_PRECONDITION, "The client has already been terminated.");
        }
        terminate() {
          this.asyncQueue.enterRestrictedMode();
          const t4 = new j3();
          return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
            try {
              this.onlineComponents && await this.onlineComponents.terminate(), this.offlineComponents && await this.offlineComponents.terminate(), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), t4.resolve();
            } catch (e3) {
              const n2 = Su(e3, "Failed to shutdown persistence");
              t4.reject(n2);
            }
          }), t4.promise;
        }
      };
      ic2 = /* @__PURE__ */ new Map();
      fc2 = class {
        constructor(t4) {
          var e3;
          if (t4.host === void 0) {
            if (t4.ssl !== void 0)
              throw new Q2(G.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = true;
          } else
            this.host = t4.host, this.ssl = (e3 = t4.ssl) === null || e3 === void 0 || e3;
          if (this.credentials = t4.credentials, this.ignoreUndefinedProperties = !!t4.ignoreUndefinedProperties, t4.cacheSizeBytes === void 0)
            this.cacheSizeBytes = 41943040;
          else {
            if (t4.cacheSizeBytes !== -1 && t4.cacheSizeBytes < 1048576)
              throw new Q2(G.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t4.cacheSizeBytes;
          }
          this.experimentalForceLongPolling = !!t4.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t4.experimentalAutoDetectLongPolling, this.useFetchStreams = !!t4.useFetchStreams, oc2("experimentalForceLongPolling", t4.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t4.experimentalAutoDetectLongPolling);
        }
        isEqual(t4) {
          return this.host === t4.host && this.ssl === t4.ssl && this.credentials === t4.credentials && this.cacheSizeBytes === t4.cacheSizeBytes && this.experimentalForceLongPolling === t4.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t4.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t4.ignoreUndefinedProperties && this.useFetchStreams === t4.useFetchStreams;
        }
      };
      dc2 = class {
        constructor(t4, e3, n2) {
          this._authCredentials = e3, this._appCheckCredentials = n2, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new fc2({}), this._settingsFrozen = false, t4 instanceof vt ? this._databaseId = t4 : (this._app = t4, this._databaseId = function(t5) {
            if (!Object.prototype.hasOwnProperty.apply(t5.options, ["projectId"]))
              throw new Q2(G.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
            return new vt(t5.options.projectId);
          }(t4));
        }
        get app() {
          if (!this._app)
            throw new Q2(G.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
          return this._app;
        }
        get _initialized() {
          return this._settingsFrozen;
        }
        get _terminated() {
          return this._terminateTask !== void 0;
        }
        _setSettings(t4) {
          if (this._settingsFrozen)
            throw new Q2(G.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
          this._settings = new fc2(t4), t4.credentials !== void 0 && (this._authCredentials = function(t5) {
            if (!t5)
              return new z3();
            switch (t5.type) {
              case "gapi":
                const e3 = t5.client;
                return U2(!(typeof e3 != "object" || e3 === null || !e3.auth || !e3.auth.getAuthHeaderValueForFirstParty)), new X2(e3, t5.sessionIndex || "0", t5.iamToken || null);
              case "provider":
                return t5.client;
              default:
                throw new Q2(G.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
            }
          }(t4.credentials));
        }
        _getSettings() {
          return this._settings;
        }
        _freezeSettings() {
          return this._settingsFrozen = true, this._settings;
        }
        _delete() {
          return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
        }
        toJSON() {
          return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings
          };
        }
        _terminate() {
          return function(t4) {
            const e3 = ic2.get(t4);
            e3 && (O3("ComponentProvider", "Removing Datastore"), ic2.delete(t4), e3.terminate());
          }(this), Promise.resolve();
        }
      };
      wc2 = class {
        constructor(t4, e3, n2) {
          this.converter = e3, this._key = n2, this.type = "document", this.firestore = t4;
        }
        get _path() {
          return this._key.path;
        }
        get id() {
          return this._key.path.lastSegment();
        }
        get path() {
          return this._key.path.canonicalString();
        }
        get parent() {
          return new gc2(this.firestore, this.converter, this._key.path.popLast());
        }
        withConverter(t4) {
          return new wc2(this.firestore, t4, this._key);
        }
      };
      mc2 = class {
        constructor(t4, e3, n2) {
          this.converter = e3, this._query = n2, this.type = "query", this.firestore = t4;
        }
        withConverter(t4) {
          return new mc2(this.firestore, t4, this._query);
        }
      };
      gc2 = class extends mc2 {
        constructor(t4, e3, n2) {
          super(t4, e3, Ke(n2)), this._path = n2, this.type = "collection";
        }
        get id() {
          return this._query.path.lastSegment();
        }
        get path() {
          return this._query.path.canonicalString();
        }
        get parent() {
          const t4 = this._path.popLast();
          return t4.isEmpty() ? null : new wc2(this.firestore, null, new xt(t4));
        }
        withConverter(t4) {
          return new gc2(this.firestore, t4, this._path);
        }
      };
      Ac2 = class {
        constructor() {
          this.Fa = Promise.resolve(), this.$a = [], this.Ba = false, this.La = [], this.Ua = null, this.qa = false, this.Ka = false, this.Ga = [], this.No = new Wo(this, "async_queue_retry"), this.Qa = () => {
            const t5 = Qo();
            t5 && O3("AsyncQueue", "Visibility state changed to " + t5.visibilityState), this.No.Po();
          };
          const t4 = Qo();
          t4 && typeof t4.addEventListener == "function" && t4.addEventListener("visibilitychange", this.Qa);
        }
        get isShuttingDown() {
          return this.Ba;
        }
        enqueueAndForget(t4) {
          this.enqueue(t4);
        }
        enqueueAndForgetEvenWhileRestricted(t4) {
          this.ja(), this.Wa(t4);
        }
        enterRestrictedMode(t4) {
          if (!this.Ba) {
            this.Ba = true, this.Ka = t4 || false;
            const e3 = Qo();
            e3 && typeof e3.removeEventListener == "function" && e3.removeEventListener("visibilitychange", this.Qa);
          }
        }
        enqueue(t4) {
          if (this.ja(), this.Ba)
            return new Promise(() => {
            });
          const e3 = new j3();
          return this.Wa(() => this.Ba && this.Ka ? Promise.resolve() : (t4().then(e3.resolve, e3.reject), e3.promise)).then(() => e3.promise);
        }
        enqueueRetryable(t4) {
          this.enqueueAndForget(() => (this.$a.push(t4), this.za()));
        }
        async za() {
          if (this.$a.length !== 0) {
            try {
              await this.$a[0](), this.$a.shift(), this.No.reset();
            } catch (t4) {
              if (!Ai(t4))
                throw t4;
              O3("AsyncQueue", "Operation failed with retryable error: " + t4);
            }
            this.$a.length > 0 && this.No.Ro(() => this.za());
          }
        }
        Wa(t4) {
          const e3 = this.Fa.then(() => (this.qa = true, t4().catch((t5) => {
            this.Ua = t5, this.qa = false;
            const e4 = function(t6) {
              let e5 = t6.message || "";
              t6.stack && (e5 = t6.stack.includes(t6.message) ? t6.stack : t6.message + "\n" + t6.stack);
              return e5;
            }(t5);
            throw F2("INTERNAL UNHANDLED ERROR: ", e4), t5;
          }).then((t5) => (this.qa = false, t5))));
          return this.Fa = e3, e3;
        }
        enqueueAfterDelay(t4, e3, n2) {
          this.ja(), this.Ga.indexOf(t4) > -1 && (e3 = 0);
          const s2 = vu.createAndSchedule(this, t4, e3, n2, (t5) => this.Ha(t5));
          return this.La.push(s2), s2;
        }
        ja() {
          this.Ua && L3();
        }
        verifyOperationInProgress() {
        }
        async Ja() {
          let t4;
          do {
            t4 = this.Fa, await t4;
          } while (t4 !== this.Fa);
        }
        Ya(t4) {
          for (const e3 of this.La)
            if (e3.timerId === t4)
              return true;
          return false;
        }
        Xa(t4) {
          return this.Ja().then(() => {
            this.La.sort((t5, e3) => t5.targetTimeMs - e3.targetTimeMs);
            for (const e3 of this.La)
              if (e3.skipDelay(), t4 !== "all" && e3.timerId === t4)
                break;
            return this.Ja();
          });
        }
        Za(t4) {
          this.Ga.push(t4);
        }
        Ha(t4) {
          const e3 = this.La.indexOf(t4);
          this.La.splice(e3, 1);
        }
      };
      Vc2 = class extends dc2 {
        constructor(t4, e3, n2) {
          super(t4, e3, n2), this.type = "firestore", this._queue = new Ac2(), this._persistenceKey = "name" in t4 ? t4.name : "[DEFAULT]";
        }
        _terminate() {
          return this._firestoreClient || Cc2(this), this._firestoreClient.terminate();
        }
      };
      Kc2 = class {
        constructor(...t4) {
          for (let e3 = 0; e3 < t4.length; ++e3)
            if (t4[e3].length === 0)
              throw new Q2(G.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
          this._internalPath = new mt(t4);
        }
        isEqual(t4) {
          return this._internalPath.isEqual(t4._internalPath);
        }
      };
      Qc2 = class {
        constructor(t4) {
          this._byteString = t4;
        }
        static fromBase64String(t4) {
          try {
            return new Qc2(pt.fromBase64String(t4));
          } catch (t5) {
            throw new Q2(G.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t5);
          }
        }
        static fromUint8Array(t4) {
          return new Qc2(pt.fromUint8Array(t4));
        }
        toBase64() {
          return this._byteString.toBase64();
        }
        toUint8Array() {
          return this._byteString.toUint8Array();
        }
        toString() {
          return "Bytes(base64: " + this.toBase64() + ")";
        }
        isEqual(t4) {
          return this._byteString.isEqual(t4._byteString);
        }
      };
      Wc2 = class {
        constructor(t4, e3) {
          if (!isFinite(t4) || t4 < -90 || t4 > 90)
            throw new Q2(G.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t4);
          if (!isFinite(e3) || e3 < -180 || e3 > 180)
            throw new Q2(G.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e3);
          this._lat = t4, this._long = e3;
        }
        get latitude() {
          return this._lat;
        }
        get longitude() {
          return this._long;
        }
        isEqual(t4) {
          return this._lat === t4._lat && this._long === t4._long;
        }
        toJSON() {
          return {
            latitude: this._lat,
            longitude: this._long
          };
        }
        _compareTo(t4) {
          return rt(this._lat, t4._lat) || rt(this._long, t4._long);
        }
      };
      mh = new RegExp("[~\\*/\\[\\]]");
      Ih = class {
        constructor(t4, e3, n2, s2, i3) {
          this._firestore = t4, this._userDataWriter = e3, this._key = n2, this._document = s2, this._converter = i3;
        }
        get id() {
          return this._key.path.lastSegment();
        }
        get ref() {
          return new wc2(this._firestore, this._converter, this._key);
        }
        exists() {
          return this._document !== null;
        }
        data() {
          if (this._document) {
            if (this._converter) {
              const t4 = new Th(this._firestore, this._userDataWriter, this._key, this._document, null);
              return this._converter.fromFirestore(t4);
            }
            return this._userDataWriter.convertValue(this._document.data.value);
          }
        }
        get(t4) {
          if (this._document) {
            const e3 = this._document.data.field(Eh("DocumentSnapshot.get", t4));
            if (e3 !== null)
              return this._userDataWriter.convertValue(e3);
          }
        }
      };
      Th = class extends Ih {
        data() {
          return super.data();
        }
      };
      Ah = class {
        constructor(t4, e3) {
          this.hasPendingWrites = t4, this.fromCache = e3;
        }
        isEqual(t4) {
          return this.hasPendingWrites === t4.hasPendingWrites && this.fromCache === t4.fromCache;
        }
      };
      Rh = class extends Ih {
        constructor(t4, e3, n2, s2, i3, r3) {
          super(t4, e3, n2, s2, r3), this._firestore = t4, this._firestoreImpl = t4, this.metadata = i3;
        }
        exists() {
          return super.exists();
        }
        data(t4 = {}) {
          if (this._document) {
            if (this._converter) {
              const e3 = new bh(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
              return this._converter.fromFirestore(e3, t4);
            }
            return this._userDataWriter.convertValue(this._document.data.value, t4.serverTimestamps);
          }
        }
        get(t4, e3 = {}) {
          if (this._document) {
            const n2 = this._document.data.field(Eh("DocumentSnapshot.get", t4));
            if (n2 !== null)
              return this._userDataWriter.convertValue(n2, e3.serverTimestamps);
          }
        }
      };
      bh = class extends Rh {
        data(t4 = {}) {
          return super.data(t4);
        }
      };
      Ph = class {
        constructor(t4, e3, n2, s2) {
          this._firestore = t4, this._userDataWriter = e3, this._snapshot = s2, this.metadata = new Ah(s2.hasPendingWrites, s2.fromCache), this.query = n2;
        }
        get docs() {
          const t4 = [];
          return this.forEach((e3) => t4.push(e3)), t4;
        }
        get size() {
          return this._snapshot.docs.size;
        }
        get empty() {
          return this.size === 0;
        }
        forEach(t4, e3) {
          this._snapshot.docs.forEach((n2) => {
            t4.call(e3, new bh(this._firestore, this._userDataWriter, n2.key, n2, new Ah(this._snapshot.mutatedKeys.has(n2.key), this._snapshot.fromCache), this.query.converter));
          });
        }
        docChanges(t4 = {}) {
          const e3 = !!t4.includeMetadataChanges;
          if (e3 && this._snapshot.excludesMetadataChanges)
            throw new Q2(G.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
          return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e3 || (this._cachedChanges = function(t5, e4) {
            if (t5._snapshot.oldDocs.isEmpty()) {
              let e5 = 0;
              return t5._snapshot.docChanges.map((n2) => ({
                type: "added",
                doc: new bh(t5._firestore, t5._userDataWriter, n2.doc.key, n2.doc, new Ah(t5._snapshot.mutatedKeys.has(n2.doc.key), t5._snapshot.fromCache), t5.query.converter),
                oldIndex: -1,
                newIndex: e5++
              }));
            }
            {
              let n2 = t5._snapshot.oldDocs;
              return t5._snapshot.docChanges.filter((t6) => e4 || t6.type !== 3).map((e5) => {
                const s2 = new bh(t5._firestore, t5._userDataWriter, e5.doc.key, e5.doc, new Ah(t5._snapshot.mutatedKeys.has(e5.doc.key), t5._snapshot.fromCache), t5.query.converter);
                let i3 = -1, r3 = -1;
                return e5.type !== 0 && (i3 = n2.indexOf(e5.doc.key), n2 = n2.delete(e5.doc.key)), e5.type !== 1 && (n2 = n2.add(e5.doc), r3 = n2.indexOf(e5.doc.key)), {
                  type: Vh(e5.type),
                  doc: s2,
                  oldIndex: i3,
                  newIndex: r3
                };
              });
            }
          }(this, e3), this._cachedChangesIncludeMetadataChanges = e3), this._cachedChanges;
        }
      };
      Jh = class {
        convertValue(t4, e3 = "none") {
          switch (Mt(t4)) {
            case 0:
              return null;
            case 1:
              return t4.booleanValue;
            case 2:
              return Et(t4.integerValue || t4.doubleValue);
            case 3:
              return this.convertTimestamp(t4.timestampValue);
            case 4:
              return this.convertServerTimestamp(t4, e3);
            case 5:
              return t4.stringValue;
            case 6:
              return this.convertBytes(At(t4.bytesValue));
            case 7:
              return this.convertReference(t4.referenceValue);
            case 8:
              return this.convertGeoPoint(t4.geoPointValue);
            case 9:
              return this.convertArray(t4.arrayValue, e3);
            case 10:
              return this.convertObject(t4.mapValue, e3);
            default:
              throw L3();
          }
        }
        convertObject(t4, e3) {
          const n2 = {};
          return lt(t4.fields, (t5, s2) => {
            n2[t5] = this.convertValue(s2, e3);
          }), n2;
        }
        convertGeoPoint(t4) {
          return new Wc2(Et(t4.latitude), Et(t4.longitude));
        }
        convertArray(t4, e3) {
          return (t4.values || []).map((t5) => this.convertValue(t5, e3));
        }
        convertServerTimestamp(t4, e3) {
          switch (e3) {
            case "previous":
              const n2 = bt(t4);
              return n2 == null ? null : this.convertValue(n2, e3);
            case "estimate":
              return this.convertTimestamp(Pt(t4));
            default:
              return null;
          }
        }
        convertTimestamp(t4) {
          const e3 = Tt(t4);
          return new at(e3.seconds, e3.nanos);
        }
        convertDocumentKey(t4, e3) {
          const n2 = _t.fromString(t4);
          U2(Ks(n2));
          const s2 = new vt(n2.get(1), n2.get(3)), i3 = new xt(n2.popFirst(5));
          return s2.isEqual(e3) || F2(`Document ${i3} contains a document reference within a different database (${s2.projectId}/${s2.database}) which is not supported. It will be treated as a reference in the current database (${e3.projectId}/${e3.database}) instead.`), i3;
        }
      };
      nl = class extends Jh {
        constructor(t4) {
          super(), this.firestore = t4;
        }
        convertBytes(t4) {
          return new Qc2(t4);
        }
        convertReference(t4) {
          const e3 = this.convertDocumentKey(t4, this.firestore._databaseId);
          return new wc2(this.firestore, null, e3);
        }
      };
      !function(t4, e3 = true) {
        !function(t5) {
          x4 = t5;
        }(SDK_VERSION), _registerComponent(new Component("firestore", (t5, { options: n2 }) => {
          const s2 = t5.getProvider("app").getImmediate(), i3 = new Vc2(s2, new J2(t5.getProvider("auth-internal")), new tt(t5.getProvider("app-check-internal")));
          return n2 = Object.assign({
            useFetchStreams: e3
          }, n2), i3._setSettings(n2), i3;
        }, "PUBLIC")), registerVersion(D2, "3.4.9", t4), registerVersion(D2, "3.4.9", "esm2017");
      }();
    }
  });

  // node_modules/firebase/firestore/dist/index.esm.js
  var init_index_esm3 = __esm({
    "node_modules/firebase/firestore/dist/index.esm.js"() {
      init_index_esm20177();
    }
  });

  // config/storage_initialize.ts
  var firebaseConfig, firebaseApp, storage, db2;
  var init_storage_initialize = __esm({
    "config/storage_initialize.ts"() {
      init_index_esm2();
      init_index_esm();
      init_index_esm3();
      firebaseConfig = {
        apiKey: "AIzaSyDStTo0z523d1exU3vXLEjtKPDmcMWRzk8",
        authDomain: "crested-display-351313.firebaseapp.com",
        projectId: "crested-display-351313",
        storageBucket: "crested-display-351313.appspot.com",
        messagingSenderId: "642785080436",
        appId: "1:642785080436:web:faf3eba032f2d9eea7cd21",
        measurementId: "G-GNE9NNLP78"
      };
      firebaseApp = initializeApp(firebaseConfig);
      storage = getStorage(firebaseApp);
      db2 = Sc2(firebaseApp);
    }
  });

  // src/components/dropzone.tsx
  var AcceptedFileTypes;
  var init_dropzone = __esm({
    "src/components/dropzone.tsx"() {
      init_preact_module();
      init_lib2();
      init_esm_browser();
      init_index_esm();
      init_storage_initialize();
      AcceptedFileTypes = function() {
        const acceptedFileTypes = ["image/x-png", "image/png", "image/jpeg"];
        function handleSelectedFiles(files) {
          const file = files[0];
          const imageUuid = v4_default();
          const imageRef = ref(storage, `images/${imageUuid}.jpg`);
          uploadBytes(imageRef, file).then((snapshot) => {
            console.log("uploaded a blob or file!");
          });
        }
        return /* @__PURE__ */ v(FileUploadDropzone, {
          acceptedFileTypes,
          onSelectedFiles: handleSelectedFiles
        }, /* @__PURE__ */ v(Text, {
          align: "center",
          muted: true
        }, "Max size: 30mb"));
      };
    }
  });

  // config/firestore_initialize.ts
  var firebaseConfig2, firebaseApp2, db3;
  var init_firestore_initialize = __esm({
    "config/firestore_initialize.ts"() {
      init_index_esm2();
      init_index_esm3();
      firebaseConfig2 = {
        apiKey: "AIzaSyDStTo0z523d1exU3vXLEjtKPDmcMWRzk8",
        authDomain: "crested-display-351313.firebaseapp.com",
        projectId: "crested-display-351313",
        storageBucket: "crested-display-351313.appspot.com",
        messagingSenderId: "642785080436",
        appId: "1:642785080436:web:faf3eba032f2d9eea7cd21",
        measurementId: "G-GNE9NNLP78"
      };
      firebaseApp2 = initializeApp(firebaseConfig2);
      db3 = Sc2(firebaseApp2);
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin() {
    const [predictionData, setPredictionData] = m2({});
    const [imageFile, setImageFile] = m2();
    y2(() => {
      fl(yc2(db3, "predictionData"), (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            setPredictionData(change.doc.data());
            console.log("Received new prediction data: ", change.doc.data());
          }
        });
      }, (err) => {
        console.log(err);
      });
    }, []);
    const handleClick = A(async function() {
      emit("SUBMIT", predictionData);
    }, [predictionData]);
    return /* @__PURE__ */ v(Container, null, /* @__PURE__ */ v(VerticalSpace, {
      space: "small"
    }), /* @__PURE__ */ v("div", {
      class: styles_default.container
    }, /* @__PURE__ */ v(AcceptedFileTypes, null)), /* @__PURE__ */ v(VerticalSpace, {
      space: "large"
    }), /* @__PURE__ */ v(Button, {
      fullWidth: true,
      onClick: handleClick
    }, "Upload"), /* @__PURE__ */ v(VerticalSpace, {
      space: "small"
    }));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      init_lib2();
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_styles();
      init_dropzone();
      init_index_esm3();
      init_firestore_initialize();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.ts--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.ts--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error("No UI defined for command `" + commandId + "`");
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
