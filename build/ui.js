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
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name4 in all)
      __defProp(target, name4, { get: all[name4], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  function a(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function h(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function v(l3, u3, i3) {
    var t3, o3, r3, f3 = {};
    for (r3 in u3)
      r3 == "key" ? t3 = u3[r3] : r3 == "ref" ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), typeof l3 == "function" && l3.defaultProps != null)
      for (r3 in l3.defaultProps)
        f3[r3] === void 0 && (f3[r3] = l3.defaultProps[r3]);
    return y(l3, f3, t3, o3, null);
  }
  function y(n2, i3, t3, o3, r3) {
    var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r3 == null ? ++u : r3 };
    return r3 == null && l.vnode != null && l.vnode(f3), f3;
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function k(n2, l3) {
    if (l3 == null)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if ((u3 = n2.__k[l3]) != null && u3.__e != null)
        return u3.__e;
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l3, u3;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if ((u3 = n2.__k[l3]) != null && u3.__e != null) {
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
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t3, o3, r3;
        n3.__d && (o3 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, r3.ownerSVGElement !== void 0, t3.__h != null ? [o3] : null, u3, o3 == null ? k(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && b(t3)));
      });
  }
  function w(n2, l3, u3, i3, t3, o3, r3, f3, s2, a3) {
    var h2, v3, p2, _3, b3, m3, g3, w3 = i3 && i3.__k || c, A2 = w3.length;
    for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
      if ((_3 = u3.__k[h2] = (_3 = l3[h2]) == null || typeof _3 == "boolean" ? null : typeof _3 == "string" || typeof _3 == "number" || typeof _3 == "bigint" ? y(null, _3, null, null, _3) : Array.isArray(_3) ? y(d, { children: _3 }, null, null, null) : _3.__b > 0 ? y(_3.type, _3.props, _3.key, null, _3.__v) : _3) != null) {
        if (_3.__ = u3, _3.__b = u3.__b + 1, (p2 = w3[h2]) === null || p2 && _3.key == p2.key && _3.type === p2.type)
          w3[h2] = void 0;
        else
          for (v3 = 0; v3 < A2; v3++) {
            if ((p2 = w3[v3]) && _3.key == p2.key && _3.type === p2.type) {
              w3[v3] = void 0;
              break;
            }
            p2 = null;
          }
        j(n2, _3, p2 = p2 || e, t3, o3, r3, f3, s2, a3), b3 = _3.__e, (v3 = _3.ref) && p2.ref != v3 && (g3 || (g3 = []), p2.ref && g3.push(p2.ref, null, _3), g3.push(v3, _3.__c || b3, _3)), b3 != null ? (m3 == null && (m3 = b3), typeof _3.type == "function" && _3.__k === p2.__k ? _3.__d = s2 = x(_3, s2, n2) : s2 = P(n2, _3, p2, w3, b3, s2), typeof u3.type == "function" && (u3.__d = s2)) : s2 && p2.__e == s2 && s2.parentNode != n2 && (s2 = k(p2));
      }
    for (u3.__e = m3, h2 = A2; h2--; )
      w3[h2] != null && (typeof u3.type == "function" && w3[h2].__e != null && w3[h2].__e == u3.__d && (u3.__d = k(i3, h2 + 1)), N(w3[h2], w3[h2]));
    if (g3)
      for (h2 = 0; h2 < g3.length; h2++)
        M(g3[h2], g3[++h2], g3[++h2]);
  }
  function x(n2, l3, u3) {
    for (var i3, t3 = n2.__k, o3 = 0; t3 && o3 < t3.length; o3++)
      (i3 = t3[o3]) && (i3.__ = n2, l3 = typeof i3.type == "function" ? x(i3, l3, u3) : P(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function P(n2, l3, u3, i3, t3, o3) {
    var r3, f3, e3;
    if (l3.__d !== void 0)
      r3 = l3.__d, l3.__d = void 0;
    else if (u3 == null || t3 != o3 || t3.parentNode == null)
      n:
        if (o3 == null || o3.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o3), r3 = o3;
        }
    return r3 !== void 0 ? r3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var o3;
    for (o3 in u3)
      o3 === "children" || o3 === "key" || o3 in l3 || H(n2, o3, null, u3[o3], i3);
    for (o3 in l3)
      t3 && typeof l3[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || u3[o3] === l3[o3] || H(n2, o3, l3[o3], u3[o3], i3);
  }
  function $(n2, l3, u3) {
    l3[0] === "-" ? n2.setProperty(l3, u3) : n2[l3] = u3 == null ? "" : typeof u3 != "number" || s.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t3) {
    var o3;
    n:
      if (l3 === "style")
        if (typeof u3 == "string")
          n2.style.cssText = u3;
        else {
          if (typeof i3 == "string" && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if (l3[0] === "o" && l3[1] === "n")
        o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? T : I, o3) : n2.removeEventListener(l3, o3 ? T : I, o3);
      else if (l3 !== "dangerouslySetInnerHTML") {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (l3 !== "href" && l3 !== "list" && l3 !== "form" && l3 !== "tabIndex" && l3 !== "download" && l3 in n2)
          try {
            n2[l3] = u3 == null ? "" : u3;
            break n;
          } catch (n3) {
          }
        typeof u3 == "function" || (u3 != null && (u3 !== false || l3[0] === "a" && l3[1] === "r") ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
    var s2, h2, v3, y2, p2, k3, b3, m3, g3, x3, A2, P2 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i3.__h != null && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (s2 = l.__b) && s2(u3);
    try {
      n:
        if (typeof P2 == "function") {
          if (m3 = u3.props, g3 = (s2 = P2.contextType) && t3[s2.__c], x3 = s2 ? g3 ? g3.props.value : s2.__ : t3, i3.__c ? b3 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u3.__c = h2 = new P2(m3, x3) : (u3.__c = h2 = new _(m3, x3), h2.constructor = P2, h2.render = O), g3 && g3.sub(h2), h2.props = m3, h2.state || (h2.state = {}), h2.context = x3, h2.__n = t3, v3 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P2.getDerivedStateFromProps(m3, h2.__s))), y2 = h2.props, p2 = h2.state, v3)
            P2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && m3 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m3, x3), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m3, h2.__s, x3) === false || u3.__v === i3.__v) {
              h2.props = m3, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h2.__h.length && f3.push(h2);
              break n;
            }
            h2.componentWillUpdate != null && h2.componentWillUpdate(m3, h2.__s, x3), h2.componentDidUpdate != null && h2.__h.push(function() {
              h2.componentDidUpdate(y2, p2, k3);
            });
          }
          h2.context = x3, h2.props = m3, h2.state = h2.__s, (s2 = l.__r) && s2(u3), h2.__d = false, h2.__v = u3, h2.__P = n2, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t3 = a(a({}, t3), h2.getChildContext())), v3 || h2.getSnapshotBeforeUpdate == null || (k3 = h2.getSnapshotBeforeUpdate(y2, p2)), A2 = s2 != null && s2.type === d && s2.key == null ? s2.props.children : s2, w(n2, Array.isArray(A2) ? A2 : [A2], u3, i3, t3, o3, r3, f3, e3, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          r3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
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
  function L(l3, u3, i3, t3, o3, r3, f3, c3) {
    var s2, a3, v3, y2 = i3.props, p2 = u3.props, d2 = u3.type, _3 = 0;
    if (d2 === "svg" && (o3 = true), r3 != null) {
      for (; _3 < r3.length; _3++)
        if ((s2 = r3[_3]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : s2.nodeType === 3)) {
          l3 = s2, r3[_3] = null;
          break;
        }
    }
    if (l3 == null) {
      if (d2 === null)
        return document.createTextNode(p2);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r3 = null, c3 = false;
    }
    if (d2 === null)
      y2 === p2 || c3 && l3.data === p2 || (l3.data = p2);
    else {
      if (r3 = r3 && n.call(l3.childNodes), a3 = (y2 = i3.props || e).dangerouslySetInnerHTML, v3 = p2.dangerouslySetInnerHTML, !c3) {
        if (r3 != null)
          for (y2 = {}, _3 = 0; _3 < l3.attributes.length; _3++)
            y2[l3.attributes[_3].name] = l3.attributes[_3].value;
        (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p2, y2, o3, c3), v3)
        u3.__k = [];
      else if (_3 = u3.props.children, w(l3, Array.isArray(_3) ? _3 : [_3], u3, i3, t3, o3 && d2 !== "foreignObject", r3, f3, r3 ? r3[0] : i3.__k && k(i3, 0), c3), r3 != null)
        for (_3 = r3.length; _3--; )
          r3[_3] != null && h(r3[_3]);
      c3 || ("value" in p2 && (_3 = p2.value) !== void 0 && (_3 !== l3.value || d2 === "progress" && !_3 || d2 === "option" && _3 !== y2.value) && H(l3, "value", _3, y2.value, false), "checked" in p2 && (_3 = p2.checked) !== void 0 && _3 !== l3.checked && H(l3, "checked", _3, y2.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      typeof n2 == "function" ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, o3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), (t3 = n2.__c) != null) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = n2.__k)
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && N(t3[o3], u3, typeof n2.type != "function");
    i3 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function S(u3, i3, t3) {
    var o3, r3, f3;
    l.__ && l.__(u3, i3), r3 = (o3 = typeof t3 == "function") ? null : t3 && t3.__k || i3.__k, f3 = [], j(i3, u3 = (!o3 && t3 || i3).__k = v(d, null, [u3]), r3 || e, e, i3.ownerSVGElement !== void 0, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z(f3, u3);
  }
  var n, l, u, i, t, o, r, f, e, c, s;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      e = {};
      c = [];
      s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = c.slice, l = { __e: function(n2, l3, u3, i3) {
        for (var t3, o3, r3; l3 = l3.__; )
          if ((t3 = l3.__c) && !t3.__)
            try {
              if ((o3 = t3.constructor) && o3.getDerivedStateFromError != null && (t3.setState(o3.getDerivedStateFromError(n2)), r3 = t3.__d), t3.componentDidCatch != null && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
                return t3.__E = t3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return n2 != null && n2.constructor === void 0;
      }, _.prototype.setState = function(n2, l3) {
        var u3;
        u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u3), this.props)), n2 && a(u3, n2), n2 != null && this.__v && (l3 && this.__h.push(l3), m(this));
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
  function l2(t3, r3) {
    l.__h && l.__h(u2, t3, o2 || r3), o2 = 0;
    var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({}), i3.__[t3];
  }
  function m2(n2) {
    return o2 = 1, p(w2, n2);
  }
  function p(n2, r3, o3) {
    var i3 = l2(t2++, 2);
    return i3.t = n2, i3.__c || (i3.__ = [o3 ? o3(r3) : w2(void 0, r3), function(n3) {
      var t3 = i3.t(i3.__[0], n3);
      i3.__[0] !== t3 && (i3.__ = [t3, i3.__[1]], i3.__c.setState({}));
    }], i3.__c = u2), i3.__;
  }
  function _2(n2, u3) {
    var r3 = l2(t2++, 7);
    return k2(r3.__H, u3) && (r3.__ = n2(), r3.__H = u3, r3.__h = n2), r3.__;
  }
  function A(n2, t3) {
    return o2 = 8, _2(function() {
      return n2;
    }, t3);
  }
  function x2() {
    for (var t3; t3 = i2.shift(); )
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u3) {
          t3.__H.__h = [], l.__e(u3, t3.__v);
        }
  }
  function g2(n2) {
    var t3 = u2, r3 = n2.__c;
    typeof r3 == "function" && (n2.__c = void 0, r3()), u2 = t3;
  }
  function j2(n2) {
    var t3 = u2;
    n2.__c = n2.__(), u2 = t3;
  }
  function k2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
      return t4 !== n2[u3];
    });
  }
  function w2(n2, t3) {
    return typeof t3 == "function" ? t3(n2) : t3;
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
      }, l.diffed = function(t3) {
        e2 && e2(t3);
        var o3 = t3.__c;
        o3 && o3.__H && o3.__H.__h.length && (i2.push(o3) !== 1 && r2 === l.requestAnimationFrame || ((r2 = l.requestAnimationFrame) || function(n2) {
          var t4, u3 = function() {
            clearTimeout(r3), b2 && cancelAnimationFrame(t4), setTimeout(n2);
          }, r3 = setTimeout(u3, 100);
          b2 && (t4 = requestAnimationFrame(u3));
        })(x2)), u2 = null;
      }, l.__c = function(t3, u3) {
        u3.some(function(t4) {
          try {
            t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || j2(n2);
            });
          } catch (r3) {
            u3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), u3 = [], l.__e(r3, t4.__v);
          }
        }), a2 && a2(t3, u3);
      }, l.unmount = function(t3) {
        v2 && v2(t3);
        var u3, r3 = t3.__c;
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

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/3f5b7ba6-9341-428b-a8f4-d6ca902a022e/loading-indicator.js
  var loading_indicator_default;
  var init_loading_indicator = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/3f5b7ba6-9341-428b-a8f4-d6ca902a022e/loading-indicator.js"() {
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
  function LoadingIndicator(_a) {
    var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
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

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/6c913bd1-4589-4c3e-bd12-d519e1cf021f/button.js
  var button_default;
  var init_button = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/6c913bd1-4589-4c3e-bd12-d519e1cf021f/button.js"() {
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
  function Button(_a) {
    var _b = _a, { children, destructive = false, disabled = false, fullWidth = false, loading = false, onClick, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "destructive", "disabled", "fullWidth", "loading", "onClick", "propagateEscapeKeyDown", "secondary"]);
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

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/ad869b09-4d30-434c-8e5f-06ff914919b6/file-upload-dropzone.js
  var file_upload_dropzone_default;
  var init_file_upload_dropzone = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/ad869b09-4d30-434c-8e5f-06ff914919b6/file-upload-dropzone.js"() {
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
  function FileUploadDropzone(_a) {
    var _b = _a, { acceptedFileTypes, children, multiple = false, onSelectedFiles, propagateEscapeKeyDown = true } = _b, rest = __objRest(_b, ["acceptedFileTypes", "children", "multiple", "onSelectedFiles", "propagateEscapeKeyDown"]);
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

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/189907f7-eda7-41bb-bbed-5ce710f3cc34/container.js
  var container_default;
  var init_container = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/189907f7-eda7-41bb-bbed-5ce710f3cc34/container.js"() {
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
  function Container(_a) {
    var _b = _a, { space = "small" } = _b, rest = __objRest(_b, ["space"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: container_default[space] }));
  }
  var init_container2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/layout/container/container.js"() {
      init_preact_module();
      init_container();
    }
  });

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/46274e55-e6f5-4514-8a3f-c7714d3535db/vertical-space.js
  var vertical_space_default;
  var init_vertical_space = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/46274e55-e6f5-4514-8a3f-c7714d3535db/vertical-space.js"() {
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
  function VerticalSpace(_a) {
    var _b = _a, { space = "small" } = _b, rest = __objRest(_b, ["space"]);
    return v("div", __spreadProps(__spreadValues({}, rest), { class: vertical_space_default[space] }));
  }
  var init_vertical_space2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/layout/vertical-space/vertical-space.js"() {
      init_preact_module();
      init_vertical_space();
    }
  });

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/6128b258-1ec0-4659-b382-ebe94c649065/text.js
  var text_default;
  var init_text = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/6128b258-1ec0-4659-b382-ebe94c649065/text.js"() {
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
  function Text(_a) {
    var _b = _a, { align = "left", bold = false, children, muted = false, numeric = false } = _b, rest = __objRest(_b, ["align", "bold", "children", "muted", "numeric"]);
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
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name4) {
        eventHandlers[id].handler.apply(null, args);
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

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/7d9c19ff-2fda-42df-a522-1826241fe255/base.js
  var init_base = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/7d9c19ff-2fda-42df-a522-1826241fe255/base.js"() {
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

  // ../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/bf5c1a35-4cbc-49cb-bc5c-66cacbacb404/styles.js
  var styles_default;
  var init_styles = __esm({
    "../../../../../../../private/var/folders/18/6mm9lhvs20q5qjp5h37fpdc00000gn/T/bf5c1a35-4cbc-49cb-bc5c-66cacbacb404/styles.js"() {
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
          var _a;
          reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
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
    for (const k3 of aKeys) {
      if (!bKeys.includes(k3)) {
        return false;
      }
      const aProp = a3[k3];
      const bProp = b3[k3];
      if (isObject(aProp) && isObject(bProp)) {
        if (!deepEqual(aProp, bProp)) {
          return false;
        }
      } else if (aProp !== bProp) {
        return false;
      }
    }
    for (const k3 of bKeys) {
      if (!aKeys.includes(k3)) {
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
        let p2 = 0;
        for (let i3 = 0; i3 < str.length; i3++) {
          let c3 = str.charCodeAt(i3);
          if (c3 < 128) {
            out[p2++] = c3;
          } else if (c3 < 2048) {
            out[p2++] = c3 >> 6 | 192;
            out[p2++] = c3 & 63 | 128;
          } else if ((c3 & 64512) === 55296 && i3 + 1 < str.length && (str.charCodeAt(i3 + 1) & 64512) === 56320) {
            c3 = 65536 + ((c3 & 1023) << 10) + (str.charCodeAt(++i3) & 1023);
            out[p2++] = c3 >> 18 | 240;
            out[p2++] = c3 >> 12 & 63 | 128;
            out[p2++] = c3 >> 6 & 63 | 128;
            out[p2++] = c3 & 63 | 128;
          } else {
            out[p2++] = c3 >> 12 | 224;
            out[p2++] = c3 >> 6 & 63 | 128;
            out[p2++] = c3 & 63 | 128;
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
          var _a;
          const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
          const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
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
          var _a;
          const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
          const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
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
            } catch (_a) {
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
              } catch (_a) {
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
    openPromise.then((db) => {
      if (terminated)
        db.addEventListener("close", () => terminated());
      if (blocking)
        db.addEventListener("versionchange", () => blocking());
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
    var _a;
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
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
        upgrade: (db, oldVersion) => {
          switch (oldVersion) {
            case 0:
              db.createObjectStore(STORE_NAME);
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
      const db = await getDbPromise();
      return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(app));
    } catch (e3) {
      throw ERROR_FACTORY.create("storage-get", {
        originalErrorMessage: e3.message
      });
    }
  }
  async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    try {
      const db = await getDbPromise();
      const tx = db.transaction(STORE_NAME, "readwrite");
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
      const heartbeatEntry = heartbeatsToSend.find((hb) => hb.agent === singleDateHeartbeat.agent);
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
          var _a;
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
            return;
          } else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
              lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
              heartbeats: heartbeatsObject.heartbeats
            });
          }
        }
        async add(heartbeatsObject) {
          var _a;
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
            return;
          } else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
              lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
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
  function stop(id) {
    id(false);
  }
  function isJustDef(p2) {
    return p2 !== void 0;
  }
  function isNonArrayObject(p2) {
    return typeof p2 === "object" && !Array.isArray(p2);
  }
  function isString(p2) {
    return typeof p2 === "string" || p2 instanceof String;
  }
  function isNativeBlob(p2) {
    return isNativeBlobDefined() && p2 instanceof Blob;
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
      const bb = new BlobBuilder2();
      for (let i3 = 0; i3 < args.length; i3++) {
        bb.append(args[i3]);
      }
      return bb.getBlob();
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
              const lo = value.charCodeAt(++i3);
              c3 = 65536 | (hi & 1023) << 10 | lo & 1023;
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
      (function(ErrorCode2) {
        ErrorCode2[ErrorCode2["NO_ERROR"] = 0] = "NO_ERROR";
        ErrorCode2[ErrorCode2["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
        ErrorCode2[ErrorCode2["ABORT"] = 2] = "ABORT";
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

  // config/storage_initialize.ts
  var firebaseConfig, firebaseApp, storage;
  var init_storage_initialize = __esm({
    "config/storage_initialize.ts"() {
      init_index_esm2();
      init_index_esm();
      firebaseConfig = {
        apiKey: "AIzaSyDStTo0z523d1exU3vXLEjtKPDmcMWRzk8",
        authDomain: "<your-auth-domain>",
        databaseURL: "<your-database-url>",
        storageBucket: "gs://crested-display-351313.appspot.com/"
      };
      firebaseApp = initializeApp(firebaseConfig);
      storage = getStorage(firebaseApp);
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

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin() {
    const [code, setCode] = m2(``);
    const [imageFile, setImageFile] = m2();
    const handleInsertCodeButtonClick = A(function() {
      emit("INSERT_CODE", code);
    }, [code]);
    return /* @__PURE__ */ v(Container, null, /* @__PURE__ */ v(VerticalSpace, {
      space: "small"
    }), /* @__PURE__ */ v("div", {
      class: styles_default.container
    }, /* @__PURE__ */ v(AcceptedFileTypes, null)), /* @__PURE__ */ v(VerticalSpace, {
      space: "large"
    }), /* @__PURE__ */ v(Button, {
      fullWidth: true,
      onClick: handleInsertCodeButtonClick
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
