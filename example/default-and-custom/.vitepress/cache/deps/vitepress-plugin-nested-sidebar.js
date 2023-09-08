import {
  require_fs
} from "./chunk-F6HTLDYI.js";
import {
  __commonJS,
  __toESM
} from "./chunk-WNKWOKNR.js";

// browser-external:path
var require_path = __commonJS({
  "browser-external:path"(exports2, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "path" has been externalized for browser compatibility. Cannot access "path.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/.pnpm/vitepress-plugin-nested-sidebar@0.1.1/node_modules/vitepress-plugin-nested-sidebar/dist/vitepress-plugin-nested-sidebar.es.mjs
var import_path = __toESM(require_path(), 1);
var import_fs = __toESM(require_fs(), 1);
function getDefaultExportFromCjs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var toString = Object.prototype.toString;
var kindOf = function(r) {
  if (r === void 0)
    return "undefined";
  if (r === null)
    return "null";
  var n = typeof r;
  if (n === "boolean")
    return "boolean";
  if (n === "string")
    return "string";
  if (n === "number")
    return "number";
  if (n === "symbol")
    return "symbol";
  if (n === "function")
    return isGeneratorFn(r) ? "generatorfunction" : "function";
  if (isArray(r))
    return "array";
  if (isBuffer$1(r))
    return "buffer";
  if (isArguments(r))
    return "arguments";
  if (isDate(r))
    return "date";
  if (isError(r))
    return "error";
  if (isRegexp(r))
    return "regexp";
  switch (ctorName(r)) {
    case "Symbol":
      return "symbol";
    case "Promise":
      return "promise";
    case "WeakMap":
      return "weakmap";
    case "WeakSet":
      return "weakset";
    case "Map":
      return "map";
    case "Set":
      return "set";
    case "Int8Array":
      return "int8array";
    case "Uint8Array":
      return "uint8array";
    case "Uint8ClampedArray":
      return "uint8clampedarray";
    case "Int16Array":
      return "int16array";
    case "Uint16Array":
      return "uint16array";
    case "Int32Array":
      return "int32array";
    case "Uint32Array":
      return "uint32array";
    case "Float32Array":
      return "float32array";
    case "Float64Array":
      return "float64array";
  }
  if (isGeneratorObj(r))
    return "generator";
  switch (n = toString.call(r), n) {
    case "[object Object]":
      return "object";
    case "[object Map Iterator]":
      return "mapiterator";
    case "[object Set Iterator]":
      return "setiterator";
    case "[object String Iterator]":
      return "stringiterator";
    case "[object Array Iterator]":
      return "arrayiterator";
  }
  return n.slice(8, -1).toLowerCase().replace(/\s/g, "");
};
function ctorName(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function isArray(e) {
  return Array.isArray ? Array.isArray(e) : e instanceof Array;
}
function isError(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function isDate(e) {
  return e instanceof Date ? true : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function isRegexp(e) {
  return e instanceof RegExp ? true : typeof e.flags == "string" && typeof e.ignoreCase == "boolean" && typeof e.multiline == "boolean" && typeof e.global == "boolean";
}
function isGeneratorFn(e, r) {
  return ctorName(e) === "GeneratorFunction";
}
function isGeneratorObj(e) {
  return typeof e.throw == "function" && typeof e.return == "function" && typeof e.next == "function";
}
function isArguments(e) {
  try {
    if (typeof e.length == "number" && typeof e.callee == "function")
      return true;
  } catch (r) {
    if (r.message.indexOf("callee") !== -1)
      return true;
  }
  return false;
}
function isBuffer$1(e) {
  return e.constructor && typeof e.constructor.isBuffer == "function" ? e.constructor.isBuffer(e) : false;
}
var isExtendable = function(r) {
  return typeof r < "u" && r !== null && (typeof r == "object" || typeof r == "function");
};
var isObject$1 = isExtendable;
var extendShallow = function(r) {
  isObject$1(r) || (r = {});
  for (var n = arguments.length, o = 1; o < n; o++) {
    var t = arguments[o];
    isObject$1(t) && assign(r, t);
  }
  return r;
};
function assign(e, r) {
  for (var n in r)
    hasOwn(r, n) && (e[n] = r[n]);
}
function hasOwn(e, r) {
  return Object.prototype.hasOwnProperty.call(e, r);
}
var typeOf$2 = kindOf;
var extend$1 = extendShallow;
var sectionMatter = function(e, r) {
  typeof r == "function" && (r = { parse: r });
  var n = toObject(e), o = { section_delimiter: "---", parse: identity }, t = extend$1({}, o, r), l = t.section_delimiter, c = n.content.split(/\r?\n/), a = null, u = createSection(), s = [], p = [];
  function f(A) {
    n.content = A, a = [], s = [];
  }
  function h(A) {
    p.length && (u.key = getKey(p[0], l), u.content = A, t.parse(u, a), a.push(u), u = createSection(), s = [], p = []);
  }
  for (var d = 0; d < c.length; d++) {
    var g = c[d], E = p.length, m = g.trim();
    if (isDelimiter(m, l)) {
      if (m.length === 3 && d !== 0) {
        if (E === 0 || E === 2) {
          s.push(g);
          continue;
        }
        p.push(m), u.data = s.join(`
`), s = [];
        continue;
      }
      a === null && f(s.join(`
`)), E === 2 && h(s.join(`
`)), p.push(m);
      continue;
    }
    s.push(g);
  }
  return a === null ? f(s.join(`
`)) : h(s.join(`
`)), n.sections = a, n;
};
function isDelimiter(e, r) {
  return !(e.slice(0, r.length) !== r || e.charAt(r.length + 1) === r.slice(-1));
}
function toObject(e) {
  if (typeOf$2(e) !== "object" && (e = { content: e }), typeof e.content != "string" && !isBuffer(e.content))
    throw new TypeError("expected a buffer or string");
  return e.content = e.content.toString(), e.sections = [], e;
}
function getKey(e, r) {
  return e ? e.slice(r.length).trim() : "";
}
function createSection() {
  return { key: "", data: "", content: "" };
}
function identity(e) {
  return e;
}
function isBuffer(e) {
  return e && e.constructor && typeof e.constructor.isBuffer == "function" ? e.constructor.isBuffer(e) : false;
}
var engines$2 = { exports: {} };
var jsYaml$1 = {};
var loader$1 = {};
var common$6 = {};
function isNothing(e) {
  return typeof e > "u" || e === null;
}
function isObject(e) {
  return typeof e == "object" && e !== null;
}
function toArray(e) {
  return Array.isArray(e) ? e : isNothing(e) ? [] : [e];
}
function extend(e, r) {
  var n, o, t, l;
  if (r)
    for (l = Object.keys(r), n = 0, o = l.length; n < o; n += 1)
      t = l[n], e[t] = r[t];
  return e;
}
function repeat(e, r) {
  var n = "", o;
  for (o = 0; o < r; o += 1)
    n += e;
  return n;
}
function isNegativeZero(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
common$6.isNothing = isNothing;
common$6.isObject = isObject;
common$6.toArray = toArray;
common$6.repeat = repeat;
common$6.isNegativeZero = isNegativeZero;
common$6.extend = extend;
function YAMLException$4(e, r) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = r, this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : ""), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
YAMLException$4.prototype = Object.create(Error.prototype);
YAMLException$4.prototype.constructor = YAMLException$4;
YAMLException$4.prototype.toString = function(r) {
  var n = this.name + ": ";
  return n += this.reason || "(unknown reason)", !r && this.mark && (n += " " + this.mark.toString()), n;
};
var exception = YAMLException$4;
var common$5 = common$6;
function Mark$1(e, r, n, o, t) {
  this.name = e, this.buffer = r, this.position = n, this.line = o, this.column = t;
}
Mark$1.prototype.getSnippet = function(r, n) {
  var o, t, l, c, a;
  if (!this.buffer)
    return null;
  for (r = r || 4, n = n || 75, o = "", t = this.position; t > 0 && `\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(t - 1)) === -1; )
    if (t -= 1, this.position - t > n / 2 - 1) {
      o = " ... ", t += 5;
      break;
    }
  for (l = "", c = this.position; c < this.buffer.length && `\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(c)) === -1; )
    if (c += 1, c - this.position > n / 2 - 1) {
      l = " ... ", c -= 5;
      break;
    }
  return a = this.buffer.slice(t, c), common$5.repeat(" ", r) + o + a + l + `
` + common$5.repeat(" ", r + this.position - t + o.length) + "^";
};
Mark$1.prototype.toString = function(r) {
  var n, o = "";
  return this.name && (o += 'in "' + this.name + '" '), o += "at line " + (this.line + 1) + ", column " + (this.column + 1), r || (n = this.getSnippet(), n && (o += `:
` + n)), o;
};
var mark = Mark$1;
var YAMLException$3 = exception;
var TYPE_CONSTRUCTOR_OPTIONS = [
  "kind",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "defaultStyle",
  "styleAliases"
];
var YAML_NODE_KINDS = [
  "scalar",
  "sequence",
  "mapping"
];
function compileStyleAliases(e) {
  var r = {};
  return e !== null && Object.keys(e).forEach(function(n) {
    e[n].forEach(function(o) {
      r[String(o)] = n;
    });
  }), r;
}
function Type$h(e, r) {
  if (r = r || {}, Object.keys(r).forEach(function(n) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(n) === -1)
      throw new YAMLException$3('Unknown option "' + n + '" is met in definition of "' + e + '" YAML type.');
  }), this.tag = e, this.kind = r.kind || null, this.resolve = r.resolve || function() {
    return true;
  }, this.construct = r.construct || function(n) {
    return n;
  }, this.instanceOf = r.instanceOf || null, this.predicate = r.predicate || null, this.represent = r.represent || null, this.defaultStyle = r.defaultStyle || null, this.styleAliases = compileStyleAliases(r.styleAliases || null), YAML_NODE_KINDS.indexOf(this.kind) === -1)
    throw new YAMLException$3('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
var type = Type$h;
var common$4 = common$6;
var YAMLException$2 = exception;
var Type$g = type;
function compileList(e, r, n) {
  var o = [];
  return e.include.forEach(function(t) {
    n = compileList(t, r, n);
  }), e[r].forEach(function(t) {
    n.forEach(function(l, c) {
      l.tag === t.tag && l.kind === t.kind && o.push(c);
    }), n.push(t);
  }), n.filter(function(t, l) {
    return o.indexOf(l) === -1;
  });
}
function compileMap() {
  var e = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {}
  }, r, n;
  function o(t) {
    e[t.kind][t.tag] = e.fallback[t.tag] = t;
  }
  for (r = 0, n = arguments.length; r < n; r += 1)
    arguments[r].forEach(o);
  return e;
}
function Schema$5(e) {
  this.include = e.include || [], this.implicit = e.implicit || [], this.explicit = e.explicit || [], this.implicit.forEach(function(r) {
    if (r.loadKind && r.loadKind !== "scalar")
      throw new YAMLException$2("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
  }), this.compiledImplicit = compileList(this, "implicit", []), this.compiledExplicit = compileList(this, "explicit", []), this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
}
Schema$5.DEFAULT = null;
Schema$5.create = function() {
  var r, n;
  switch (arguments.length) {
    case 1:
      r = Schema$5.DEFAULT, n = arguments[0];
      break;
    case 2:
      r = arguments[0], n = arguments[1];
      break;
    default:
      throw new YAMLException$2("Wrong number of arguments for Schema.create function");
  }
  if (r = common$4.toArray(r), n = common$4.toArray(n), !r.every(function(o) {
    return o instanceof Schema$5;
  }))
    throw new YAMLException$2("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
  if (!n.every(function(o) {
    return o instanceof Type$g;
  }))
    throw new YAMLException$2("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  return new Schema$5({
    include: r,
    explicit: n
  });
};
var schema = Schema$5;
var Type$f = type;
var str2 = new Type$f("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(e) {
    return e !== null ? e : "";
  }
});
var Type$e = type;
var seq = new Type$e("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(e) {
    return e !== null ? e : [];
  }
});
var Type$d = type;
var map = new Type$d("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(e) {
    return e !== null ? e : {};
  }
});
var Schema$4 = schema;
var failsafe = new Schema$4({
  explicit: [
    str2,
    seq,
    map
  ]
});
var Type$c = type;
function resolveYamlNull(e) {
  if (e === null)
    return true;
  var r = e.length;
  return r === 1 && e === "~" || r === 4 && (e === "null" || e === "Null" || e === "NULL");
}
function constructYamlNull() {
  return null;
}
function isNull(e) {
  return e === null;
}
var _null = new Type$c("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    }
  },
  defaultStyle: "lowercase"
});
var Type$b = type;
function resolveYamlBoolean(e) {
  if (e === null)
    return false;
  var r = e.length;
  return r === 4 && (e === "true" || e === "True" || e === "TRUE") || r === 5 && (e === "false" || e === "False" || e === "FALSE");
}
function constructYamlBoolean(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
function isBoolean(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
var bool = new Type$b("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function(e) {
      return e ? "true" : "false";
    },
    uppercase: function(e) {
      return e ? "TRUE" : "FALSE";
    },
    camelcase: function(e) {
      return e ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
var common$3 = common$6;
var Type$a = type;
function isHexCode(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
function isOctCode(e) {
  return 48 <= e && e <= 55;
}
function isDecCode(e) {
  return 48 <= e && e <= 57;
}
function resolveYamlInteger(e) {
  if (e === null)
    return false;
  var r = e.length, n = 0, o = false, t;
  if (!r)
    return false;
  if (t = e[n], (t === "-" || t === "+") && (t = e[++n]), t === "0") {
    if (n + 1 === r)
      return true;
    if (t = e[++n], t === "b") {
      for (n++; n < r; n++)
        if (t = e[n], t !== "_") {
          if (t !== "0" && t !== "1")
            return false;
          o = true;
        }
      return o && t !== "_";
    }
    if (t === "x") {
      for (n++; n < r; n++)
        if (t = e[n], t !== "_") {
          if (!isHexCode(e.charCodeAt(n)))
            return false;
          o = true;
        }
      return o && t !== "_";
    }
    for (; n < r; n++)
      if (t = e[n], t !== "_") {
        if (!isOctCode(e.charCodeAt(n)))
          return false;
        o = true;
      }
    return o && t !== "_";
  }
  if (t === "_")
    return false;
  for (; n < r; n++)
    if (t = e[n], t !== "_") {
      if (t === ":")
        break;
      if (!isDecCode(e.charCodeAt(n)))
        return false;
      o = true;
    }
  return !o || t === "_" ? false : t !== ":" ? true : /^(:[0-5]?[0-9])+$/.test(e.slice(n));
}
function constructYamlInteger(e) {
  var r = e, n = 1, o, t, l = [];
  return r.indexOf("_") !== -1 && (r = r.replace(/_/g, "")), o = r[0], (o === "-" || o === "+") && (o === "-" && (n = -1), r = r.slice(1), o = r[0]), r === "0" ? 0 : o === "0" ? r[1] === "b" ? n * parseInt(r.slice(2), 2) : r[1] === "x" ? n * parseInt(r, 16) : n * parseInt(r, 8) : r.indexOf(":") !== -1 ? (r.split(":").forEach(function(c) {
    l.unshift(parseInt(c, 10));
  }), r = 0, t = 1, l.forEach(function(c) {
    r += c * t, t *= 60;
  }), n * r) : n * parseInt(r, 10);
}
function isInteger(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !common$3.isNegativeZero(e);
}
var int = new Type$a("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function(e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    },
    octal: function(e) {
      return e >= 0 ? "0" + e.toString(8) : "-0" + e.toString(8).slice(1);
    },
    decimal: function(e) {
      return e.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(e) {
      return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var common$2 = common$6;
var Type$9 = type;
var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function resolveYamlFloat(e) {
  return !(e === null || !YAML_FLOAT_PATTERN.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
function constructYamlFloat(e) {
  var r, n, o, t;
  return r = e.replace(/_/g, "").toLowerCase(), n = r[0] === "-" ? -1 : 1, t = [], "+-".indexOf(r[0]) >= 0 && (r = r.slice(1)), r === ".inf" ? n === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : r === ".nan" ? NaN : r.indexOf(":") >= 0 ? (r.split(":").forEach(function(l) {
    t.unshift(parseFloat(l, 10));
  }), r = 0, o = 1, t.forEach(function(l) {
    r += l * o, o *= 60;
  }), n * r) : n * parseFloat(r, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(e, r) {
  var n;
  if (isNaN(e))
    switch (r) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (r) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (r) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (common$2.isNegativeZero(e))
    return "-0.0";
  return n = e.toString(10), SCIENTIFIC_WITHOUT_DOT.test(n) ? n.replace("e", ".e") : n;
}
function isFloat(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || common$2.isNegativeZero(e));
}
var float = new Type$9("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: "lowercase"
});
var Schema$3 = schema;
var json = new Schema$3({
  include: [
    failsafe
  ],
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});
var Schema$2 = schema;
var core = new Schema$2({
  include: [
    json
  ]
});
var Type$8 = type;
var YAML_DATE_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
var YAML_TIMESTAMP_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function resolveYamlTimestamp(e) {
  return e === null ? false : YAML_DATE_REGEXP.exec(e) !== null || YAML_TIMESTAMP_REGEXP.exec(e) !== null;
}
function constructYamlTimestamp(e) {
  var r, n, o, t, l, c, a, u = 0, s = null, p, f, h;
  if (r = YAML_DATE_REGEXP.exec(e), r === null && (r = YAML_TIMESTAMP_REGEXP.exec(e)), r === null)
    throw new Error("Date resolve error");
  if (n = +r[1], o = +r[2] - 1, t = +r[3], !r[4])
    return new Date(Date.UTC(n, o, t));
  if (l = +r[4], c = +r[5], a = +r[6], r[7]) {
    for (u = r[7].slice(0, 3); u.length < 3; )
      u += "0";
    u = +u;
  }
  return r[9] && (p = +r[10], f = +(r[11] || 0), s = (p * 60 + f) * 6e4, r[9] === "-" && (s = -s)), h = new Date(Date.UTC(n, o, t, l, c, a, u)), s && h.setTime(h.getTime() - s), h;
}
function representYamlTimestamp(e) {
  return e.toISOString();
}
var timestamp = new Type$8("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});
var Type$7 = type;
function resolveYamlMerge(e) {
  return e === "<<" || e === null;
}
var merge = new Type$7("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: resolveYamlMerge
});
function commonjsRequire(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var NodeBuffer;
try {
  _require$1 = commonjsRequire;
  NodeBuffer = _require$1("buffer").Buffer;
} catch {
}
var _require$1;
var Type$6 = type;
var BASE64_MAP = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function resolveYamlBinary(e) {
  if (e === null)
    return false;
  var r, n, o = 0, t = e.length, l = BASE64_MAP;
  for (n = 0; n < t; n++)
    if (r = l.indexOf(e.charAt(n)), !(r > 64)) {
      if (r < 0)
        return false;
      o += 6;
    }
  return o % 8 === 0;
}
function constructYamlBinary(e) {
  var r, n, o = e.replace(/[\r\n=]/g, ""), t = o.length, l = BASE64_MAP, c = 0, a = [];
  for (r = 0; r < t; r++)
    r % 4 === 0 && r && (a.push(c >> 16 & 255), a.push(c >> 8 & 255), a.push(c & 255)), c = c << 6 | l.indexOf(o.charAt(r));
  return n = t % 4 * 6, n === 0 ? (a.push(c >> 16 & 255), a.push(c >> 8 & 255), a.push(c & 255)) : n === 18 ? (a.push(c >> 10 & 255), a.push(c >> 2 & 255)) : n === 12 && a.push(c >> 4 & 255), NodeBuffer ? NodeBuffer.from ? NodeBuffer.from(a) : new NodeBuffer(a) : a;
}
function representYamlBinary(e) {
  var r = "", n = 0, o, t, l = e.length, c = BASE64_MAP;
  for (o = 0; o < l; o++)
    o % 3 === 0 && o && (r += c[n >> 18 & 63], r += c[n >> 12 & 63], r += c[n >> 6 & 63], r += c[n & 63]), n = (n << 8) + e[o];
  return t = l % 3, t === 0 ? (r += c[n >> 18 & 63], r += c[n >> 12 & 63], r += c[n >> 6 & 63], r += c[n & 63]) : t === 2 ? (r += c[n >> 10 & 63], r += c[n >> 4 & 63], r += c[n << 2 & 63], r += c[64]) : t === 1 && (r += c[n >> 2 & 63], r += c[n << 4 & 63], r += c[64], r += c[64]), r;
}
function isBinary(e) {
  return NodeBuffer && NodeBuffer.isBuffer(e);
}
var binary = new Type$6("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});
var Type$5 = type;
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(e) {
  if (e === null)
    return true;
  var r = [], n, o, t, l, c, a = e;
  for (n = 0, o = a.length; n < o; n += 1) {
    if (t = a[n], c = false, _toString$2.call(t) !== "[object Object]")
      return false;
    for (l in t)
      if (_hasOwnProperty$3.call(t, l))
        if (!c)
          c = true;
        else
          return false;
    if (!c)
      return false;
    if (r.indexOf(l) === -1)
      r.push(l);
    else
      return false;
  }
  return true;
}
function constructYamlOmap(e) {
  return e !== null ? e : [];
}
var omap = new Type$5("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});
var Type$4 = type;
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(e) {
  if (e === null)
    return true;
  var r, n, o, t, l, c = e;
  for (l = new Array(c.length), r = 0, n = c.length; r < n; r += 1) {
    if (o = c[r], _toString$1.call(o) !== "[object Object]" || (t = Object.keys(o), t.length !== 1))
      return false;
    l[r] = [t[0], o[t[0]]];
  }
  return true;
}
function constructYamlPairs(e) {
  if (e === null)
    return [];
  var r, n, o, t, l, c = e;
  for (l = new Array(c.length), r = 0, n = c.length; r < n; r += 1)
    o = c[r], t = Object.keys(o), l[r] = [t[0], o[t[0]]];
  return l;
}
var pairs = new Type$4("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});
var Type$3 = type;
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(e) {
  if (e === null)
    return true;
  var r, n = e;
  for (r in n)
    if (_hasOwnProperty$2.call(n, r) && n[r] !== null)
      return false;
  return true;
}
function constructYamlSet(e) {
  return e !== null ? e : {};
}
var set = new Type$3("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: resolveYamlSet,
  construct: constructYamlSet
});
var Schema$1 = schema;
var default_safe = new Schema$1({
  include: [
    core
  ],
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});
var Type$2 = type;
function resolveJavascriptUndefined() {
  return true;
}
function constructJavascriptUndefined() {
}
function representJavascriptUndefined() {
  return "";
}
function isUndefined(e) {
  return typeof e > "u";
}
var _undefined = new Type$2("tag:yaml.org,2002:js/undefined", {
  kind: "scalar",
  resolve: resolveJavascriptUndefined,
  construct: constructJavascriptUndefined,
  predicate: isUndefined,
  represent: representJavascriptUndefined
});
var Type$1 = type;
function resolveJavascriptRegExp(e) {
  if (e === null || e.length === 0)
    return false;
  var r = e, n = /\/([gim]*)$/.exec(e), o = "";
  return !(r[0] === "/" && (n && (o = n[1]), o.length > 3 || r[r.length - o.length - 1] !== "/"));
}
function constructJavascriptRegExp(e) {
  var r = e, n = /\/([gim]*)$/.exec(e), o = "";
  return r[0] === "/" && (n && (o = n[1]), r = r.slice(1, r.length - o.length - 1)), new RegExp(r, o);
}
function representJavascriptRegExp(e) {
  var r = "/" + e.source + "/";
  return e.global && (r += "g"), e.multiline && (r += "m"), e.ignoreCase && (r += "i"), r;
}
function isRegExp(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
var regexp = new Type$1("tag:yaml.org,2002:js/regexp", {
  kind: "scalar",
  resolve: resolveJavascriptRegExp,
  construct: constructJavascriptRegExp,
  predicate: isRegExp,
  represent: representJavascriptRegExp
});
var esprima;
try {
  _require = commonjsRequire;
  esprima = _require("esprima");
} catch {
  typeof window < "u" && (esprima = window.esprima);
}
var _require;
var Type = type;
function resolveJavascriptFunction(e) {
  if (e === null)
    return false;
  try {
    var r = "(" + e + ")", n = esprima.parse(r, { range: true });
    return !(n.type !== "Program" || n.body.length !== 1 || n.body[0].type !== "ExpressionStatement" || n.body[0].expression.type !== "ArrowFunctionExpression" && n.body[0].expression.type !== "FunctionExpression");
  } catch {
    return false;
  }
}
function constructJavascriptFunction(e) {
  var r = "(" + e + ")", n = esprima.parse(r, { range: true }), o = [], t;
  if (n.type !== "Program" || n.body.length !== 1 || n.body[0].type !== "ExpressionStatement" || n.body[0].expression.type !== "ArrowFunctionExpression" && n.body[0].expression.type !== "FunctionExpression")
    throw new Error("Failed to resolve function");
  return n.body[0].expression.params.forEach(function(l) {
    o.push(l.name);
  }), t = n.body[0].expression.body.range, n.body[0].expression.body.type === "BlockStatement" ? new Function(o, r.slice(t[0] + 1, t[1] - 1)) : new Function(o, "return " + r.slice(t[0], t[1]));
}
function representJavascriptFunction(e) {
  return e.toString();
}
function isFunction(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
var _function = new Type("tag:yaml.org,2002:js/function", {
  kind: "scalar",
  resolve: resolveJavascriptFunction,
  construct: constructJavascriptFunction,
  predicate: isFunction,
  represent: representJavascriptFunction
});
var Schema = schema;
var default_full = Schema.DEFAULT = new Schema({
  include: [
    default_safe
  ],
  explicit: [
    _undefined,
    regexp,
    _function
  ]
});
var common$1 = common$6;
var YAMLException$1 = exception;
var Mark = mark;
var DEFAULT_SAFE_SCHEMA$1 = default_safe;
var DEFAULT_FULL_SCHEMA$1 = default_full;
var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(e) {
  return Object.prototype.toString.call(e);
}
function is_EOL(e) {
  return e === 10 || e === 13;
}
function is_WHITE_SPACE(e) {
  return e === 9 || e === 32;
}
function is_WS_OR_EOL(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
function is_FLOW_INDICATOR(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function fromHexCode(e) {
  var r;
  return 48 <= e && e <= 57 ? e - 48 : (r = e | 32, 97 <= r && r <= 102 ? r - 97 + 10 : -1);
}
function escapedHexLen(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function fromDecimalCode(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
function simpleEscapeSequence(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
function charFromCodepoint(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for (i = 0; i < 256; i++)
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0, simpleEscapeMap[i] = simpleEscapeSequence(i);
var i;
function State$1(e, r) {
  this.input = e, this.filename = r.filename || null, this.schema = r.schema || DEFAULT_FULL_SCHEMA$1, this.onWarning = r.onWarning || null, this.legacy = r.legacy || false, this.json = r.json || false, this.listener = r.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.documents = [];
}
function generateError(e, r) {
  return new YAMLException$1(
    r,
    new Mark(e.filename, e.input, e.position, e.line, e.position - e.lineStart)
  );
}
function throwError(e, r) {
  throw generateError(e, r);
}
function throwWarning(e, r) {
  e.onWarning && e.onWarning.call(null, generateError(e, r));
}
var directiveHandlers = {
  YAML: function(r, n, o) {
    var t, l, c;
    r.version !== null && throwError(r, "duplication of %YAML directive"), o.length !== 1 && throwError(r, "YAML directive accepts exactly one argument"), t = /^([0-9]+)\.([0-9]+)$/.exec(o[0]), t === null && throwError(r, "ill-formed argument of the YAML directive"), l = parseInt(t[1], 10), c = parseInt(t[2], 10), l !== 1 && throwError(r, "unacceptable YAML version of the document"), r.version = o[0], r.checkLineBreaks = c < 2, c !== 1 && c !== 2 && throwWarning(r, "unsupported YAML version of the document");
  },
  TAG: function(r, n, o) {
    var t, l;
    o.length !== 2 && throwError(r, "TAG directive accepts exactly two arguments"), t = o[0], l = o[1], PATTERN_TAG_HANDLE.test(t) || throwError(r, "ill-formed tag handle (first argument) of the TAG directive"), _hasOwnProperty$1.call(r.tagMap, t) && throwError(r, 'there is a previously declared suffix for "' + t + '" tag handle'), PATTERN_TAG_URI.test(l) || throwError(r, "ill-formed tag prefix (second argument) of the TAG directive"), r.tagMap[t] = l;
  }
};
function captureSegment(e, r, n, o) {
  var t, l, c, a;
  if (r < n) {
    if (a = e.input.slice(r, n), o)
      for (t = 0, l = a.length; t < l; t += 1)
        c = a.charCodeAt(t), c === 9 || 32 <= c && c <= 1114111 || throwError(e, "expected valid JSON character");
    else
      PATTERN_NON_PRINTABLE.test(a) && throwError(e, "the stream contains non-printable characters");
    e.result += a;
  }
}
function mergeMappings(e, r, n, o) {
  var t, l, c, a;
  for (common$1.isObject(n) || throwError(e, "cannot merge mappings; the provided source object is unacceptable"), t = Object.keys(n), c = 0, a = t.length; c < a; c += 1)
    l = t[c], _hasOwnProperty$1.call(r, l) || (r[l] = n[l], o[l] = true);
}
function storeMappingPair(e, r, n, o, t, l, c, a) {
  var u, s;
  if (Array.isArray(t))
    for (t = Array.prototype.slice.call(t), u = 0, s = t.length; u < s; u += 1)
      Array.isArray(t[u]) && throwError(e, "nested arrays are not supported inside keys"), typeof t == "object" && _class(t[u]) === "[object Object]" && (t[u] = "[object Object]");
  if (typeof t == "object" && _class(t) === "[object Object]" && (t = "[object Object]"), t = String(t), r === null && (r = {}), o === "tag:yaml.org,2002:merge")
    if (Array.isArray(l))
      for (u = 0, s = l.length; u < s; u += 1)
        mergeMappings(e, r, l[u], n);
    else
      mergeMappings(e, r, l, n);
  else
    !e.json && !_hasOwnProperty$1.call(n, t) && _hasOwnProperty$1.call(r, t) && (e.line = c || e.line, e.position = a || e.position, throwError(e, "duplicated mapping key")), r[t] = l, delete n[t];
  return r;
}
function readLineBreak(e) {
  var r;
  r = e.input.charCodeAt(e.position), r === 10 ? e.position++ : r === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : throwError(e, "a line break is expected"), e.line += 1, e.lineStart = e.position;
}
function skipSeparationSpace(e, r, n) {
  for (var o = 0, t = e.input.charCodeAt(e.position); t !== 0; ) {
    for (; is_WHITE_SPACE(t); )
      t = e.input.charCodeAt(++e.position);
    if (r && t === 35)
      do
        t = e.input.charCodeAt(++e.position);
      while (t !== 10 && t !== 13 && t !== 0);
    if (is_EOL(t))
      for (readLineBreak(e), t = e.input.charCodeAt(e.position), o++, e.lineIndent = 0; t === 32; )
        e.lineIndent++, t = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return n !== -1 && o !== 0 && e.lineIndent < n && throwWarning(e, "deficient indentation"), o;
}
function testDocumentSeparator(e) {
  var r = e.position, n;
  return n = e.input.charCodeAt(r), !!((n === 45 || n === 46) && n === e.input.charCodeAt(r + 1) && n === e.input.charCodeAt(r + 2) && (r += 3, n = e.input.charCodeAt(r), n === 0 || is_WS_OR_EOL(n)));
}
function writeFoldedLines(e, r) {
  r === 1 ? e.result += " " : r > 1 && (e.result += common$1.repeat(`
`, r - 1));
}
function readPlainScalar(e, r, n) {
  var o, t, l, c, a, u, s, p, f = e.kind, h = e.result, d;
  if (d = e.input.charCodeAt(e.position), is_WS_OR_EOL(d) || is_FLOW_INDICATOR(d) || d === 35 || d === 38 || d === 42 || d === 33 || d === 124 || d === 62 || d === 39 || d === 34 || d === 37 || d === 64 || d === 96 || (d === 63 || d === 45) && (t = e.input.charCodeAt(e.position + 1), is_WS_OR_EOL(t) || n && is_FLOW_INDICATOR(t)))
    return false;
  for (e.kind = "scalar", e.result = "", l = c = e.position, a = false; d !== 0; ) {
    if (d === 58) {
      if (t = e.input.charCodeAt(e.position + 1), is_WS_OR_EOL(t) || n && is_FLOW_INDICATOR(t))
        break;
    } else if (d === 35) {
      if (o = e.input.charCodeAt(e.position - 1), is_WS_OR_EOL(o))
        break;
    } else {
      if (e.position === e.lineStart && testDocumentSeparator(e) || n && is_FLOW_INDICATOR(d))
        break;
      if (is_EOL(d))
        if (u = e.line, s = e.lineStart, p = e.lineIndent, skipSeparationSpace(e, false, -1), e.lineIndent >= r) {
          a = true, d = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = c, e.line = u, e.lineStart = s, e.lineIndent = p;
          break;
        }
    }
    a && (captureSegment(e, l, c, false), writeFoldedLines(e, e.line - u), l = c = e.position, a = false), is_WHITE_SPACE(d) || (c = e.position + 1), d = e.input.charCodeAt(++e.position);
  }
  return captureSegment(e, l, c, false), e.result ? true : (e.kind = f, e.result = h, false);
}
function readSingleQuotedScalar(e, r) {
  var n, o, t;
  if (n = e.input.charCodeAt(e.position), n !== 39)
    return false;
  for (e.kind = "scalar", e.result = "", e.position++, o = t = e.position; (n = e.input.charCodeAt(e.position)) !== 0; )
    if (n === 39)
      if (captureSegment(e, o, e.position, true), n = e.input.charCodeAt(++e.position), n === 39)
        o = e.position, e.position++, t = e.position;
      else
        return true;
    else
      is_EOL(n) ? (captureSegment(e, o, t, true), writeFoldedLines(e, skipSeparationSpace(e, false, r)), o = t = e.position) : e.position === e.lineStart && testDocumentSeparator(e) ? throwError(e, "unexpected end of the document within a single quoted scalar") : (e.position++, t = e.position);
  throwError(e, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(e, r) {
  var n, o, t, l, c, a;
  if (a = e.input.charCodeAt(e.position), a !== 34)
    return false;
  for (e.kind = "scalar", e.result = "", e.position++, n = o = e.position; (a = e.input.charCodeAt(e.position)) !== 0; ) {
    if (a === 34)
      return captureSegment(e, n, e.position, true), e.position++, true;
    if (a === 92) {
      if (captureSegment(e, n, e.position, true), a = e.input.charCodeAt(++e.position), is_EOL(a))
        skipSeparationSpace(e, false, r);
      else if (a < 256 && simpleEscapeCheck[a])
        e.result += simpleEscapeMap[a], e.position++;
      else if ((c = escapedHexLen(a)) > 0) {
        for (t = c, l = 0; t > 0; t--)
          a = e.input.charCodeAt(++e.position), (c = fromHexCode(a)) >= 0 ? l = (l << 4) + c : throwError(e, "expected hexadecimal character");
        e.result += charFromCodepoint(l), e.position++;
      } else
        throwError(e, "unknown escape sequence");
      n = o = e.position;
    } else
      is_EOL(a) ? (captureSegment(e, n, o, true), writeFoldedLines(e, skipSeparationSpace(e, false, r)), n = o = e.position) : e.position === e.lineStart && testDocumentSeparator(e) ? throwError(e, "unexpected end of the document within a double quoted scalar") : (e.position++, o = e.position);
  }
  throwError(e, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(e, r) {
  var n = true, o, t = e.tag, l, c = e.anchor, a, u, s, p, f, h = {}, d, g, E, m;
  if (m = e.input.charCodeAt(e.position), m === 91)
    u = 93, f = false, l = [];
  else if (m === 123)
    u = 125, f = true, l = {};
  else
    return false;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = l), m = e.input.charCodeAt(++e.position); m !== 0; ) {
    if (skipSeparationSpace(e, true, r), m = e.input.charCodeAt(e.position), m === u)
      return e.position++, e.tag = t, e.anchor = c, e.kind = f ? "mapping" : "sequence", e.result = l, true;
    n || throwError(e, "missed comma between flow collection entries"), g = d = E = null, s = p = false, m === 63 && (a = e.input.charCodeAt(e.position + 1), is_WS_OR_EOL(a) && (s = p = true, e.position++, skipSeparationSpace(e, true, r))), o = e.line, composeNode(e, r, CONTEXT_FLOW_IN, false, true), g = e.tag, d = e.result, skipSeparationSpace(e, true, r), m = e.input.charCodeAt(e.position), (p || e.line === o) && m === 58 && (s = true, m = e.input.charCodeAt(++e.position), skipSeparationSpace(e, true, r), composeNode(e, r, CONTEXT_FLOW_IN, false, true), E = e.result), f ? storeMappingPair(e, l, h, g, d, E) : s ? l.push(storeMappingPair(e, null, h, g, d, E)) : l.push(d), skipSeparationSpace(e, true, r), m = e.input.charCodeAt(e.position), m === 44 ? (n = true, m = e.input.charCodeAt(++e.position)) : n = false;
  }
  throwError(e, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(e, r) {
  var n, o, t = CHOMPING_CLIP, l = false, c = false, a = r, u = 0, s = false, p, f;
  if (f = e.input.charCodeAt(e.position), f === 124)
    o = false;
  else if (f === 62)
    o = true;
  else
    return false;
  for (e.kind = "scalar", e.result = ""; f !== 0; )
    if (f = e.input.charCodeAt(++e.position), f === 43 || f === 45)
      CHOMPING_CLIP === t ? t = f === 43 ? CHOMPING_KEEP : CHOMPING_STRIP : throwError(e, "repeat of a chomping mode identifier");
    else if ((p = fromDecimalCode(f)) >= 0)
      p === 0 ? throwError(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : c ? throwError(e, "repeat of an indentation width identifier") : (a = r + p - 1, c = true);
    else
      break;
  if (is_WHITE_SPACE(f)) {
    do
      f = e.input.charCodeAt(++e.position);
    while (is_WHITE_SPACE(f));
    if (f === 35)
      do
        f = e.input.charCodeAt(++e.position);
      while (!is_EOL(f) && f !== 0);
  }
  for (; f !== 0; ) {
    for (readLineBreak(e), e.lineIndent = 0, f = e.input.charCodeAt(e.position); (!c || e.lineIndent < a) && f === 32; )
      e.lineIndent++, f = e.input.charCodeAt(++e.position);
    if (!c && e.lineIndent > a && (a = e.lineIndent), is_EOL(f)) {
      u++;
      continue;
    }
    if (e.lineIndent < a) {
      t === CHOMPING_KEEP ? e.result += common$1.repeat(`
`, l ? 1 + u : u) : t === CHOMPING_CLIP && l && (e.result += `
`);
      break;
    }
    for (o ? is_WHITE_SPACE(f) ? (s = true, e.result += common$1.repeat(`
`, l ? 1 + u : u)) : s ? (s = false, e.result += common$1.repeat(`
`, u + 1)) : u === 0 ? l && (e.result += " ") : e.result += common$1.repeat(`
`, u) : e.result += common$1.repeat(`
`, l ? 1 + u : u), l = true, c = true, u = 0, n = e.position; !is_EOL(f) && f !== 0; )
      f = e.input.charCodeAt(++e.position);
    captureSegment(e, n, e.position, false);
  }
  return true;
}
function readBlockSequence(e, r) {
  var n, o = e.tag, t = e.anchor, l = [], c, a = false, u;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = l), u = e.input.charCodeAt(e.position); u !== 0 && !(u !== 45 || (c = e.input.charCodeAt(e.position + 1), !is_WS_OR_EOL(c))); ) {
    if (a = true, e.position++, skipSeparationSpace(e, true, -1) && e.lineIndent <= r) {
      l.push(null), u = e.input.charCodeAt(e.position);
      continue;
    }
    if (n = e.line, composeNode(e, r, CONTEXT_BLOCK_IN, false, true), l.push(e.result), skipSeparationSpace(e, true, -1), u = e.input.charCodeAt(e.position), (e.line === n || e.lineIndent > r) && u !== 0)
      throwError(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < r)
      break;
  }
  return a ? (e.tag = o, e.anchor = t, e.kind = "sequence", e.result = l, true) : false;
}
function readBlockMapping(e, r, n) {
  var o, t, l, c, a = e.tag, u = e.anchor, s = {}, p = {}, f = null, h = null, d = null, g = false, E = false, m;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = s), m = e.input.charCodeAt(e.position); m !== 0; ) {
    if (o = e.input.charCodeAt(e.position + 1), l = e.line, c = e.position, (m === 63 || m === 58) && is_WS_OR_EOL(o))
      m === 63 ? (g && (storeMappingPair(e, s, p, f, h, null), f = h = d = null), E = true, g = true, t = true) : g ? (g = false, t = true) : throwError(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, m = o;
    else if (composeNode(e, n, CONTEXT_FLOW_OUT, false, true))
      if (e.line === l) {
        for (m = e.input.charCodeAt(e.position); is_WHITE_SPACE(m); )
          m = e.input.charCodeAt(++e.position);
        if (m === 58)
          m = e.input.charCodeAt(++e.position), is_WS_OR_EOL(m) || throwError(e, "a whitespace character is expected after the key-value separator within a block mapping"), g && (storeMappingPair(e, s, p, f, h, null), f = h = d = null), E = true, g = false, t = false, f = e.tag, h = e.result;
        else if (E)
          throwError(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = a, e.anchor = u, true;
      } else if (E)
        throwError(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = a, e.anchor = u, true;
    else
      break;
    if ((e.line === l || e.lineIndent > r) && (composeNode(e, r, CONTEXT_BLOCK_OUT, true, t) && (g ? h = e.result : d = e.result), g || (storeMappingPair(e, s, p, f, h, d, l, c), f = h = d = null), skipSeparationSpace(e, true, -1), m = e.input.charCodeAt(e.position)), e.lineIndent > r && m !== 0)
      throwError(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < r)
      break;
  }
  return g && storeMappingPair(e, s, p, f, h, null), E && (e.tag = a, e.anchor = u, e.kind = "mapping", e.result = s), E;
}
function readTagProperty(e) {
  var r, n = false, o = false, t, l, c;
  if (c = e.input.charCodeAt(e.position), c !== 33)
    return false;
  if (e.tag !== null && throwError(e, "duplication of a tag property"), c = e.input.charCodeAt(++e.position), c === 60 ? (n = true, c = e.input.charCodeAt(++e.position)) : c === 33 ? (o = true, t = "!!", c = e.input.charCodeAt(++e.position)) : t = "!", r = e.position, n) {
    do
      c = e.input.charCodeAt(++e.position);
    while (c !== 0 && c !== 62);
    e.position < e.length ? (l = e.input.slice(r, e.position), c = e.input.charCodeAt(++e.position)) : throwError(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; c !== 0 && !is_WS_OR_EOL(c); )
      c === 33 && (o ? throwError(e, "tag suffix cannot contain exclamation marks") : (t = e.input.slice(r - 1, e.position + 1), PATTERN_TAG_HANDLE.test(t) || throwError(e, "named tag handle cannot contain such characters"), o = true, r = e.position + 1)), c = e.input.charCodeAt(++e.position);
    l = e.input.slice(r, e.position), PATTERN_FLOW_INDICATORS.test(l) && throwError(e, "tag suffix cannot contain flow indicator characters");
  }
  return l && !PATTERN_TAG_URI.test(l) && throwError(e, "tag name cannot contain such characters: " + l), n ? e.tag = l : _hasOwnProperty$1.call(e.tagMap, t) ? e.tag = e.tagMap[t] + l : t === "!" ? e.tag = "!" + l : t === "!!" ? e.tag = "tag:yaml.org,2002:" + l : throwError(e, 'undeclared tag handle "' + t + '"'), true;
}
function readAnchorProperty(e) {
  var r, n;
  if (n = e.input.charCodeAt(e.position), n !== 38)
    return false;
  for (e.anchor !== null && throwError(e, "duplication of an anchor property"), n = e.input.charCodeAt(++e.position), r = e.position; n !== 0 && !is_WS_OR_EOL(n) && !is_FLOW_INDICATOR(n); )
    n = e.input.charCodeAt(++e.position);
  return e.position === r && throwError(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(r, e.position), true;
}
function readAlias(e) {
  var r, n, o;
  if (o = e.input.charCodeAt(e.position), o !== 42)
    return false;
  for (o = e.input.charCodeAt(++e.position), r = e.position; o !== 0 && !is_WS_OR_EOL(o) && !is_FLOW_INDICATOR(o); )
    o = e.input.charCodeAt(++e.position);
  return e.position === r && throwError(e, "name of an alias node must contain at least one character"), n = e.input.slice(r, e.position), _hasOwnProperty$1.call(e.anchorMap, n) || throwError(e, 'unidentified alias "' + n + '"'), e.result = e.anchorMap[n], skipSeparationSpace(e, true, -1), true;
}
function composeNode(e, r, n, o, t) {
  var l, c, a, u = 1, s = false, p = false, f, h, d, g, E;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, l = c = a = CONTEXT_BLOCK_OUT === n || CONTEXT_BLOCK_IN === n, o && skipSeparationSpace(e, true, -1) && (s = true, e.lineIndent > r ? u = 1 : e.lineIndent === r ? u = 0 : e.lineIndent < r && (u = -1)), u === 1)
    for (; readTagProperty(e) || readAnchorProperty(e); )
      skipSeparationSpace(e, true, -1) ? (s = true, a = l, e.lineIndent > r ? u = 1 : e.lineIndent === r ? u = 0 : e.lineIndent < r && (u = -1)) : a = false;
  if (a && (a = s || t), (u === 1 || CONTEXT_BLOCK_OUT === n) && (CONTEXT_FLOW_IN === n || CONTEXT_FLOW_OUT === n ? g = r : g = r + 1, E = e.position - e.lineStart, u === 1 ? a && (readBlockSequence(e, E) || readBlockMapping(e, E, g)) || readFlowCollection(e, g) ? p = true : (c && readBlockScalar(e, g) || readSingleQuotedScalar(e, g) || readDoubleQuotedScalar(e, g) ? p = true : readAlias(e) ? (p = true, (e.tag !== null || e.anchor !== null) && throwError(e, "alias node should not have any properties")) : readPlainScalar(e, g, CONTEXT_FLOW_IN === n) && (p = true, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : u === 0 && (p = a && readBlockSequence(e, E))), e.tag !== null && e.tag !== "!")
    if (e.tag === "?") {
      for (e.result !== null && e.kind !== "scalar" && throwError(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), f = 0, h = e.implicitTypes.length; f < h; f += 1)
        if (d = e.implicitTypes[f], d.resolve(e.result)) {
          e.result = d.construct(e.result), e.tag = d.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
          break;
        }
    } else
      _hasOwnProperty$1.call(e.typeMap[e.kind || "fallback"], e.tag) ? (d = e.typeMap[e.kind || "fallback"][e.tag], e.result !== null && d.kind !== e.kind && throwError(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + d.kind + '", not "' + e.kind + '"'), d.resolve(e.result) ? (e.result = d.construct(e.result), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : throwError(e, "cannot resolve a node with !<" + e.tag + "> explicit tag")) : throwError(e, "unknown tag !<" + e.tag + ">");
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || p;
}
function readDocument(e) {
  var r = e.position, n, o, t, l = false, c;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = {}, e.anchorMap = {}; (c = e.input.charCodeAt(e.position)) !== 0 && (skipSeparationSpace(e, true, -1), c = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || c !== 37)); ) {
    for (l = true, c = e.input.charCodeAt(++e.position), n = e.position; c !== 0 && !is_WS_OR_EOL(c); )
      c = e.input.charCodeAt(++e.position);
    for (o = e.input.slice(n, e.position), t = [], o.length < 1 && throwError(e, "directive name must not be less than one character in length"); c !== 0; ) {
      for (; is_WHITE_SPACE(c); )
        c = e.input.charCodeAt(++e.position);
      if (c === 35) {
        do
          c = e.input.charCodeAt(++e.position);
        while (c !== 0 && !is_EOL(c));
        break;
      }
      if (is_EOL(c))
        break;
      for (n = e.position; c !== 0 && !is_WS_OR_EOL(c); )
        c = e.input.charCodeAt(++e.position);
      t.push(e.input.slice(n, e.position));
    }
    c !== 0 && readLineBreak(e), _hasOwnProperty$1.call(directiveHandlers, o) ? directiveHandlers[o](e, o, t) : throwWarning(e, 'unknown document directive "' + o + '"');
  }
  if (skipSeparationSpace(e, true, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, skipSeparationSpace(e, true, -1)) : l && throwError(e, "directives end mark is expected"), composeNode(e, e.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true), skipSeparationSpace(e, true, -1), e.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(e.input.slice(r, e.position)) && throwWarning(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && testDocumentSeparator(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, skipSeparationSpace(e, true, -1));
    return;
  }
  if (e.position < e.length - 1)
    throwError(e, "end of the stream or a document separator is expected");
  else
    return;
}
function loadDocuments(e, r) {
  e = String(e), r = r || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var n = new State$1(e, r), o = e.indexOf("\0");
  for (o !== -1 && (n.position = o, throwError(n, "null byte is not allowed in input")), n.input += "\0"; n.input.charCodeAt(n.position) === 32; )
    n.lineIndent += 1, n.position += 1;
  for (; n.position < n.length - 1; )
    readDocument(n);
  return n.documents;
}
function loadAll(e, r, n) {
  r !== null && typeof r == "object" && typeof n > "u" && (n = r, r = null);
  var o = loadDocuments(e, n);
  if (typeof r != "function")
    return o;
  for (var t = 0, l = o.length; t < l; t += 1)
    r(o[t]);
}
function load(e, r) {
  var n = loadDocuments(e, r);
  if (n.length !== 0) {
    if (n.length === 1)
      return n[0];
    throw new YAMLException$1("expected a single document in the stream, but found more");
  }
}
function safeLoadAll(e, r, n) {
  return typeof r == "object" && r !== null && typeof n > "u" && (n = r, r = null), loadAll(e, r, common$1.extend({ schema: DEFAULT_SAFE_SCHEMA$1 }, n));
}
function safeLoad(e, r) {
  return load(e, common$1.extend({ schema: DEFAULT_SAFE_SCHEMA$1 }, r));
}
loader$1.loadAll = loadAll;
loader$1.load = load;
loader$1.safeLoadAll = safeLoadAll;
loader$1.safeLoad = safeLoad;
var dumper$1 = {};
var common = common$6;
var YAMLException = exception;
var DEFAULT_FULL_SCHEMA = default_full;
var DEFAULT_SAFE_SCHEMA = default_safe;
var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_TAB = 9;
var CHAR_LINE_FEED = 10;
var CHAR_CARRIAGE_RETURN = 13;
var CHAR_SPACE = 32;
var CHAR_EXCLAMATION = 33;
var CHAR_DOUBLE_QUOTE = 34;
var CHAR_SHARP = 35;
var CHAR_PERCENT = 37;
var CHAR_AMPERSAND = 38;
var CHAR_SINGLE_QUOTE = 39;
var CHAR_ASTERISK = 42;
var CHAR_COMMA = 44;
var CHAR_MINUS = 45;
var CHAR_COLON = 58;
var CHAR_EQUALS = 61;
var CHAR_GREATER_THAN = 62;
var CHAR_QUESTION = 63;
var CHAR_COMMERCIAL_AT = 64;
var CHAR_LEFT_SQUARE_BRACKET = 91;
var CHAR_RIGHT_SQUARE_BRACKET = 93;
var CHAR_GRAVE_ACCENT = 96;
var CHAR_LEFT_CURLY_BRACKET = 123;
var CHAR_VERTICAL_LINE = 124;
var CHAR_RIGHT_CURLY_BRACKET = 125;
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0] = "\\0";
ESCAPE_SEQUENCES[7] = "\\a";
ESCAPE_SEQUENCES[8] = "\\b";
ESCAPE_SEQUENCES[9] = "\\t";
ESCAPE_SEQUENCES[10] = "\\n";
ESCAPE_SEQUENCES[11] = "\\v";
ESCAPE_SEQUENCES[12] = "\\f";
ESCAPE_SEQUENCES[13] = "\\r";
ESCAPE_SEQUENCES[27] = "\\e";
ESCAPE_SEQUENCES[34] = '\\"';
ESCAPE_SEQUENCES[92] = "\\\\";
ESCAPE_SEQUENCES[133] = "\\N";
ESCAPE_SEQUENCES[160] = "\\_";
ESCAPE_SEQUENCES[8232] = "\\L";
ESCAPE_SEQUENCES[8233] = "\\P";
var DEPRECATED_BOOLEANS_SYNTAX = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
];
function compileStyleMap(e, r) {
  var n, o, t, l, c, a, u;
  if (r === null)
    return {};
  for (n = {}, o = Object.keys(r), t = 0, l = o.length; t < l; t += 1)
    c = o[t], a = String(r[c]), c.slice(0, 2) === "!!" && (c = "tag:yaml.org,2002:" + c.slice(2)), u = e.compiledTypeMap.fallback[c], u && _hasOwnProperty.call(u.styleAliases, a) && (a = u.styleAliases[a]), n[c] = a;
  return n;
}
function encodeHex(e) {
  var r, n, o;
  if (r = e.toString(16).toUpperCase(), e <= 255)
    n = "x", o = 2;
  else if (e <= 65535)
    n = "u", o = 4;
  else if (e <= 4294967295)
    n = "U", o = 8;
  else
    throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + n + common.repeat("0", o - r.length) + r;
}
function State(e) {
  this.schema = e.schema || DEFAULT_FULL_SCHEMA, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || false, this.skipInvalid = e.skipInvalid || false, this.flowLevel = common.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = compileStyleMap(this.schema, e.styles || null), this.sortKeys = e.sortKeys || false, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || false, this.noCompatMode = e.noCompatMode || false, this.condenseFlow = e.condenseFlow || false, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function indentString(e, r) {
  for (var n = common.repeat(" ", r), o = 0, t = -1, l = "", c, a = e.length; o < a; )
    t = e.indexOf(`
`, o), t === -1 ? (c = e.slice(o), o = a) : (c = e.slice(o, t + 1), o = t + 1), c.length && c !== `
` && (l += n), l += c;
  return l;
}
function generateNextLine(e, r) {
  return `
` + common.repeat(" ", e.indent * r);
}
function testImplicitResolving(e, r) {
  var n, o, t;
  for (n = 0, o = e.implicitTypes.length; n < o; n += 1)
    if (t = e.implicitTypes[n], t.resolve(r))
      return true;
  return false;
}
function isWhitespace(e) {
  return e === CHAR_SPACE || e === CHAR_TAB;
}
function isPrintable(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== 65279 || 65536 <= e && e <= 1114111;
}
function isNsChar(e) {
  return isPrintable(e) && !isWhitespace(e) && e !== 65279 && e !== CHAR_CARRIAGE_RETURN && e !== CHAR_LINE_FEED;
}
function isPlainSafe(e, r) {
  return isPrintable(e) && e !== 65279 && e !== CHAR_COMMA && e !== CHAR_LEFT_SQUARE_BRACKET && e !== CHAR_RIGHT_SQUARE_BRACKET && e !== CHAR_LEFT_CURLY_BRACKET && e !== CHAR_RIGHT_CURLY_BRACKET && e !== CHAR_COLON && (e !== CHAR_SHARP || r && isNsChar(r));
}
function isPlainSafeFirst(e) {
  return isPrintable(e) && e !== 65279 && !isWhitespace(e) && e !== CHAR_MINUS && e !== CHAR_QUESTION && e !== CHAR_COLON && e !== CHAR_COMMA && e !== CHAR_LEFT_SQUARE_BRACKET && e !== CHAR_RIGHT_SQUARE_BRACKET && e !== CHAR_LEFT_CURLY_BRACKET && e !== CHAR_RIGHT_CURLY_BRACKET && e !== CHAR_SHARP && e !== CHAR_AMPERSAND && e !== CHAR_ASTERISK && e !== CHAR_EXCLAMATION && e !== CHAR_VERTICAL_LINE && e !== CHAR_EQUALS && e !== CHAR_GREATER_THAN && e !== CHAR_SINGLE_QUOTE && e !== CHAR_DOUBLE_QUOTE && e !== CHAR_PERCENT && e !== CHAR_COMMERCIAL_AT && e !== CHAR_GRAVE_ACCENT;
}
function needIndentIndicator(e) {
  var r = /^\n* /;
  return r.test(e);
}
var STYLE_PLAIN = 1;
var STYLE_SINGLE = 2;
var STYLE_LITERAL = 3;
var STYLE_FOLDED = 4;
var STYLE_DOUBLE = 5;
function chooseScalarStyle(e, r, n, o, t) {
  var l, c, a, u = false, s = false, p = o !== -1, f = -1, h = isPlainSafeFirst(e.charCodeAt(0)) && !isWhitespace(e.charCodeAt(e.length - 1));
  if (r)
    for (l = 0; l < e.length; l++) {
      if (c = e.charCodeAt(l), !isPrintable(c))
        return STYLE_DOUBLE;
      a = l > 0 ? e.charCodeAt(l - 1) : null, h = h && isPlainSafe(c, a);
    }
  else {
    for (l = 0; l < e.length; l++) {
      if (c = e.charCodeAt(l), c === CHAR_LINE_FEED)
        u = true, p && (s = s || // Foldable line = too long, and not more-indented.
        l - f - 1 > o && e[f + 1] !== " ", f = l);
      else if (!isPrintable(c))
        return STYLE_DOUBLE;
      a = l > 0 ? e.charCodeAt(l - 1) : null, h = h && isPlainSafe(c, a);
    }
    s = s || p && l - f - 1 > o && e[f + 1] !== " ";
  }
  return !u && !s ? h && !t(e) ? STYLE_PLAIN : STYLE_SINGLE : n > 9 && needIndentIndicator(e) ? STYLE_DOUBLE : s ? STYLE_FOLDED : STYLE_LITERAL;
}
function writeScalar(e, r, n, o) {
  e.dump = function() {
    if (r.length === 0)
      return "''";
    if (!e.noCompatMode && DEPRECATED_BOOLEANS_SYNTAX.indexOf(r) !== -1)
      return "'" + r + "'";
    var t = e.indent * Math.max(1, n), l = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - t), c = o || e.flowLevel > -1 && n >= e.flowLevel;
    function a(u) {
      return testImplicitResolving(e, u);
    }
    switch (chooseScalarStyle(r, c, e.indent, l, a)) {
      case STYLE_PLAIN:
        return r;
      case STYLE_SINGLE:
        return "'" + r.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return "|" + blockHeader(r, e.indent) + dropEndingNewline(indentString(r, t));
      case STYLE_FOLDED:
        return ">" + blockHeader(r, e.indent) + dropEndingNewline(indentString(foldString(r, l), t));
      case STYLE_DOUBLE:
        return '"' + escapeString(r) + '"';
      default:
        throw new YAMLException("impossible error: invalid scalar style");
    }
  }();
}
function blockHeader(e, r) {
  var n = needIndentIndicator(e) ? String(r) : "", o = e[e.length - 1] === `
`, t = o && (e[e.length - 2] === `
` || e === `
`), l = t ? "+" : o ? "" : "-";
  return n + l + `
`;
}
function dropEndingNewline(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
function foldString(e, r) {
  for (var n = /(\n+)([^\n]*)/g, o = function() {
    var s = e.indexOf(`
`);
    return s = s !== -1 ? s : e.length, n.lastIndex = s, foldLine(e.slice(0, s), r);
  }(), t = e[0] === `
` || e[0] === " ", l, c; c = n.exec(e); ) {
    var a = c[1], u = c[2];
    l = u[0] === " ", o += a + (!t && !l && u !== "" ? `
` : "") + foldLine(u, r), t = l;
  }
  return o;
}
function foldLine(e, r) {
  if (e === "" || e[0] === " ")
    return e;
  for (var n = / [^ ]/g, o, t = 0, l, c = 0, a = 0, u = ""; o = n.exec(e); )
    a = o.index, a - t > r && (l = c > t ? c : a, u += `
` + e.slice(t, l), t = l + 1), c = a;
  return u += `
`, e.length - t > r && c > t ? u += e.slice(t, c) + `
` + e.slice(c + 1) : u += e.slice(t), u.slice(1);
}
function escapeString(e) {
  for (var r = "", n, o, t, l = 0; l < e.length; l++) {
    if (n = e.charCodeAt(l), n >= 55296 && n <= 56319 && (o = e.charCodeAt(l + 1), o >= 56320 && o <= 57343)) {
      r += encodeHex((n - 55296) * 1024 + o - 56320 + 65536), l++;
      continue;
    }
    t = ESCAPE_SEQUENCES[n], r += !t && isPrintable(n) ? e[l] : t || encodeHex(n);
  }
  return r;
}
function writeFlowSequence(e, r, n) {
  var o = "", t = e.tag, l, c;
  for (l = 0, c = n.length; l < c; l += 1)
    writeNode(e, r, n[l], false, false) && (l !== 0 && (o += "," + (e.condenseFlow ? "" : " ")), o += e.dump);
  e.tag = t, e.dump = "[" + o + "]";
}
function writeBlockSequence(e, r, n, o) {
  var t = "", l = e.tag, c, a;
  for (c = 0, a = n.length; c < a; c += 1)
    writeNode(e, r + 1, n[c], true, true) && ((!o || c !== 0) && (t += generateNextLine(e, r)), e.dump && CHAR_LINE_FEED === e.dump.charCodeAt(0) ? t += "-" : t += "- ", t += e.dump);
  e.tag = l, e.dump = t || "[]";
}
function writeFlowMapping(e, r, n) {
  var o = "", t = e.tag, l = Object.keys(n), c, a, u, s, p;
  for (c = 0, a = l.length; c < a; c += 1)
    p = "", c !== 0 && (p += ", "), e.condenseFlow && (p += '"'), u = l[c], s = n[u], writeNode(e, r, u, false, false) && (e.dump.length > 1024 && (p += "? "), p += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), writeNode(e, r, s, false, false) && (p += e.dump, o += p));
  e.tag = t, e.dump = "{" + o + "}";
}
function writeBlockMapping(e, r, n, o) {
  var t = "", l = e.tag, c = Object.keys(n), a, u, s, p, f, h;
  if (e.sortKeys === true)
    c.sort();
  else if (typeof e.sortKeys == "function")
    c.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new YAMLException("sortKeys must be a boolean or a function");
  for (a = 0, u = c.length; a < u; a += 1)
    h = "", (!o || a !== 0) && (h += generateNextLine(e, r)), s = c[a], p = n[s], writeNode(e, r + 1, s, true, true, true) && (f = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, f && (e.dump && CHAR_LINE_FEED === e.dump.charCodeAt(0) ? h += "?" : h += "? "), h += e.dump, f && (h += generateNextLine(e, r)), writeNode(e, r + 1, p, true, f) && (e.dump && CHAR_LINE_FEED === e.dump.charCodeAt(0) ? h += ":" : h += ": ", h += e.dump, t += h));
  e.tag = l, e.dump = t || "{}";
}
function detectType(e, r, n) {
  var o, t, l, c, a, u;
  for (t = n ? e.explicitTypes : e.implicitTypes, l = 0, c = t.length; l < c; l += 1)
    if (a = t[l], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof r == "object" && r instanceof a.instanceOf) && (!a.predicate || a.predicate(r))) {
      if (e.tag = n ? a.tag : "?", a.represent) {
        if (u = e.styleMap[a.tag] || a.defaultStyle, _toString.call(a.represent) === "[object Function]")
          o = a.represent(r, u);
        else if (_hasOwnProperty.call(a.represent, u))
          o = a.represent[u](r, u);
        else
          throw new YAMLException("!<" + a.tag + '> tag resolver accepts not "' + u + '" style');
        e.dump = o;
      }
      return true;
    }
  return false;
}
function writeNode(e, r, n, o, t, l) {
  e.tag = null, e.dump = n, detectType(e, n, false) || detectType(e, n, true);
  var c = _toString.call(e.dump);
  o && (o = e.flowLevel < 0 || e.flowLevel > r);
  var a = c === "[object Object]" || c === "[object Array]", u, s;
  if (a && (u = e.duplicates.indexOf(n), s = u !== -1), (e.tag !== null && e.tag !== "?" || s || e.indent !== 2 && r > 0) && (t = false), s && e.usedDuplicates[u])
    e.dump = "*ref_" + u;
  else {
    if (a && s && !e.usedDuplicates[u] && (e.usedDuplicates[u] = true), c === "[object Object]")
      o && Object.keys(e.dump).length !== 0 ? (writeBlockMapping(e, r, e.dump, t), s && (e.dump = "&ref_" + u + e.dump)) : (writeFlowMapping(e, r, e.dump), s && (e.dump = "&ref_" + u + " " + e.dump));
    else if (c === "[object Array]") {
      var p = e.noArrayIndent && r > 0 ? r - 1 : r;
      o && e.dump.length !== 0 ? (writeBlockSequence(e, p, e.dump, t), s && (e.dump = "&ref_" + u + e.dump)) : (writeFlowSequence(e, p, e.dump), s && (e.dump = "&ref_" + u + " " + e.dump));
    } else if (c === "[object String]")
      e.tag !== "?" && writeScalar(e, e.dump, r, l);
    else {
      if (e.skipInvalid)
        return false;
      throw new YAMLException("unacceptable kind of an object to dump " + c);
    }
    e.tag !== null && e.tag !== "?" && (e.dump = "!<" + e.tag + "> " + e.dump);
  }
  return true;
}
function getDuplicateReferences(e, r) {
  var n = [], o = [], t, l;
  for (inspectNode(e, n, o), t = 0, l = o.length; t < l; t += 1)
    r.duplicates.push(n[o[t]]);
  r.usedDuplicates = new Array(l);
}
function inspectNode(e, r, n) {
  var o, t, l;
  if (e !== null && typeof e == "object")
    if (t = r.indexOf(e), t !== -1)
      n.indexOf(t) === -1 && n.push(t);
    else if (r.push(e), Array.isArray(e))
      for (t = 0, l = e.length; t < l; t += 1)
        inspectNode(e[t], r, n);
    else
      for (o = Object.keys(e), t = 0, l = o.length; t < l; t += 1)
        inspectNode(e[o[t]], r, n);
}
function dump(e, r) {
  r = r || {};
  var n = new State(r);
  return n.noRefs || getDuplicateReferences(e, n), writeNode(n, 0, e, true, true) ? n.dump + `
` : "";
}
function safeDump(e, r) {
  return dump(e, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, r));
}
dumper$1.dump = dump;
dumper$1.safeDump = safeDump;
var loader = loader$1;
var dumper = dumper$1;
function deprecated(e) {
  return function() {
    throw new Error("Function " + e + " is deprecated and cannot be used.");
  };
}
jsYaml$1.Type = type;
jsYaml$1.Schema = schema;
jsYaml$1.FAILSAFE_SCHEMA = failsafe;
jsYaml$1.JSON_SCHEMA = json;
jsYaml$1.CORE_SCHEMA = core;
jsYaml$1.DEFAULT_SAFE_SCHEMA = default_safe;
jsYaml$1.DEFAULT_FULL_SCHEMA = default_full;
jsYaml$1.load = loader.load;
jsYaml$1.loadAll = loader.loadAll;
jsYaml$1.safeLoad = loader.safeLoad;
jsYaml$1.safeLoadAll = loader.safeLoadAll;
jsYaml$1.dump = dumper.dump;
jsYaml$1.safeDump = dumper.safeDump;
jsYaml$1.YAMLException = exception;
jsYaml$1.MINIMAL_SCHEMA = failsafe;
jsYaml$1.SAFE_SCHEMA = default_safe;
jsYaml$1.DEFAULT_SCHEMA = default_full;
jsYaml$1.scan = deprecated("scan");
jsYaml$1.parse = deprecated("parse");
jsYaml$1.compose = deprecated("compose");
jsYaml$1.addConstructor = deprecated("addConstructor");
var yaml2 = jsYaml$1;
var jsYaml = yaml2;
(function(module, exports) {
  const yaml = jsYaml, engines = module.exports;
  engines.yaml = {
    parse: yaml.safeLoad.bind(yaml),
    stringify: yaml.safeDump.bind(yaml)
  }, engines.json = {
    parse: JSON.parse.bind(JSON),
    stringify: function(e, r) {
      const n = Object.assign({ replacer: null, space: 2 }, r);
      return JSON.stringify(e, n.replacer, n.space);
    }
  }, engines.javascript = {
    parse: function parse(str, options, wrap) {
      try {
        return wrap !== false && (str = `(function() {
return ` + str.trim() + `;
}());`), eval(str) || {};
      } catch (e) {
        if (wrap !== false && /(unexpected|identifier)/i.test(e.message))
          return parse(str, options, false);
        throw new SyntaxError(e);
      }
    },
    stringify: function() {
      throw new Error("stringifying JavaScript is not supported");
    }
  };
})(engines$2);
var enginesExports = engines$2.exports;
var utils$3 = {};
var stripBomString = function(e) {
  return typeof e == "string" && e.charAt(0) === "\uFEFF" ? e.slice(1) : e;
};
(function(e) {
  const r = stripBomString, n = kindOf;
  e.define = function(o, t, l) {
    Reflect.defineProperty(o, t, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: l
    });
  }, e.isBuffer = function(o) {
    return n(o) === "buffer";
  }, e.isObject = function(o) {
    return n(o) === "object";
  }, e.toBuffer = function(o) {
    return typeof o == "string" ? Buffer.from(o) : o;
  }, e.toString = function(o) {
    if (e.isBuffer(o))
      return r(String(o));
    if (typeof o != "string")
      throw new TypeError("expected input to be a string or buffer");
    return r(o);
  }, e.arrayify = function(o) {
    return o ? Array.isArray(o) ? o : [o] : [];
  }, e.startsWith = function(o, t, l) {
    return typeof l != "number" && (l = t.length), o.slice(0, l) === t;
  };
})(utils$3);
var engines$1 = enginesExports;
var utils$2 = utils$3;
var defaults$4 = function(e) {
  const r = Object.assign({}, e);
  return r.delimiters = utils$2.arrayify(r.delims || r.delimiters || "---"), r.delimiters.length === 1 && r.delimiters.push(r.delimiters[0]), r.language = (r.language || r.lang || "yaml").toLowerCase(), r.engines = Object.assign({}, engines$1, r.parsers, r.engines), r;
};
var engine = function(e, r) {
  let n = r.engines[e] || r.engines[aliase(e)];
  if (typeof n > "u")
    throw new Error('gray-matter engine "' + e + '" is not registered');
  return typeof n == "function" && (n = { parse: n }), n;
};
function aliase(e) {
  switch (e.toLowerCase()) {
    case "js":
    case "javascript":
      return "javascript";
    case "coffee":
    case "coffeescript":
    case "cson":
      return "coffee";
    case "yaml":
    case "yml":
      return "yaml";
    default:
      return e;
  }
}
var typeOf$1 = kindOf;
var getEngine$1 = engine;
var defaults$3 = defaults$4;
var stringify$2 = function(e, r, n) {
  if (r == null && n == null)
    switch (typeOf$1(e)) {
      case "object":
        r = e.data, n = {};
        break;
      case "string":
        return e;
      default:
        throw new TypeError("expected file to be a string or object");
    }
  const o = e.content, t = defaults$3(n);
  if (r == null) {
    if (!t.data)
      return e;
    r = t.data;
  }
  const l = e.language || t.language, c = getEngine$1(l, t);
  if (typeof c.stringify != "function")
    throw new TypeError('expected "' + l + '.stringify" to be a function');
  r = Object.assign({}, e.data, r);
  const a = t.delimiters[0], u = t.delimiters[1], s = c.stringify(r, n).trim();
  let p = "";
  return s !== "{}" && (p = newline(a) + newline(s) + newline(u)), typeof e.excerpt == "string" && e.excerpt !== "" && o.indexOf(e.excerpt.trim()) === -1 && (p += newline(e.excerpt) + newline(u)), p + newline(o);
};
function newline(e) {
  return e.slice(-1) !== `
` ? e + `
` : e;
}
var defaults$2 = defaults$4;
var excerpt$1 = function(e, r) {
  const n = defaults$2(r);
  if (e.data == null && (e.data = {}), typeof n.excerpt == "function")
    return n.excerpt(e, n);
  const o = e.data.excerpt_separator || n.excerpt_separator;
  if (o == null && (n.excerpt === false || n.excerpt == null))
    return e;
  const t = typeof n.excerpt == "string" ? n.excerpt : o || n.delimiters[0], l = e.content.indexOf(t);
  return l !== -1 && (e.excerpt = e.content.slice(0, l)), e;
};
var typeOf = kindOf;
var stringify$1 = stringify$2;
var utils$1 = utils$3;
var toFile$1 = function(e) {
  return typeOf(e) !== "object" && (e = { content: e }), typeOf(e.data) !== "object" && (e.data = {}), e.contents && e.content == null && (e.content = e.contents), utils$1.define(e, "orig", utils$1.toBuffer(e.content)), utils$1.define(e, "language", e.language || ""), utils$1.define(e, "matter", e.matter || ""), utils$1.define(e, "stringify", function(r, n) {
    return n && n.language && (e.language = n.language), stringify$1(e, r, n);
  }), e.content = utils$1.toString(e.content), e.isEmpty = false, e.excerpt = "", e;
};
var getEngine = engine;
var defaults$1 = defaults$4;
var parse$1 = function(e, r, n) {
  const o = defaults$1(n), t = getEngine(e, o);
  if (typeof t.parse != "function")
    throw new TypeError('expected "' + e + '.parse" to be a function');
  return t.parse(r, o);
};
var fs = import_fs.default;
var sections = sectionMatter;
var defaults = defaults$4;
var stringify = stringify$2;
var excerpt = excerpt$1;
var engines2 = enginesExports;
var toFile = toFile$1;
var parse2 = parse$1;
var utils = utils$3;
function matter(e, r) {
  if (e === "")
    return { data: {}, content: e, excerpt: "", orig: e };
  let n = toFile(e);
  const o = matter.cache[n.content];
  if (!r) {
    if (o)
      return n = Object.assign({}, o), n.orig = o.orig, n;
    matter.cache[n.content] = n;
  }
  return parseMatter(n, r);
}
function parseMatter(e, r) {
  const n = defaults(r), o = n.delimiters[0], t = `
` + n.delimiters[1];
  let l = e.content;
  n.language && (e.language = n.language);
  const c = o.length;
  if (!utils.startsWith(l, o, c))
    return excerpt(e, n), e;
  if (l.charAt(c) === o.slice(-1))
    return e;
  l = l.slice(c);
  const a = l.length, u = matter.language(l, n);
  u.name && (e.language = u.name, l = l.slice(u.raw.length));
  let s = l.indexOf(t);
  return s === -1 && (s = a), e.matter = l.slice(0, s), e.matter.replace(/^\s*#[^\n]+/gm, "").trim() === "" ? (e.isEmpty = true, e.empty = e.content, e.data = {}) : e.data = parse2(e.language, e.matter, n), s === a ? e.content = "" : (e.content = l.slice(s + t.length), e.content[0] === "\r" && (e.content = e.content.slice(1)), e.content[0] === `
` && (e.content = e.content.slice(1))), excerpt(e, n), (n.sections === true || typeof n.section == "function") && sections(e, n.section), e;
}
matter.engines = engines2;
matter.stringify = function(e, r, n) {
  return typeof e == "string" && (e = matter(e, n)), stringify(e, r, n);
};
matter.read = function(e, r) {
  const n = fs.readFileSync(e, "utf8"), o = matter(n, r);
  return o.path = e, o;
};
matter.test = function(e, r) {
  return utils.startsWith(e, defaults(r).delimiters[0]);
};
matter.language = function(e, r) {
  const o = defaults(r).delimiters[0];
  matter.test(e) && (e = e.slice(o.length));
  const t = e.slice(0, e.search(/\r?\n/));
  return {
    raw: t,
    name: t ? t.trim() : ""
  };
};
matter.cache = {};
matter.clearCache = function() {
  matter.cache = {};
};
var grayMatter = matter;
var matter$1 = getDefaultExportFromCjs(grayMatter);
function getFileByReaddirSync(e) {
  return (0, import_fs.readdirSync)(e);
}
function getFileDataByReadFileSync(e) {
  return (0, import_fs.readFileSync)(e, "utf-8");
}
function checkIsDirectory(e) {
  return (0, import_fs.statSync)(e).isDirectory();
}
var FileHelper = {
  getFileByReaddirSync,
  getFileDataByReadFileSync,
  checkIsDirectory
};
function generateSidebar(e) {
  const r = !Array.isArray(e.sidebars), n = {};
  return r ? (Object.keys(e.sidebars).forEach((o) => {
    const t = "." + o, l = generateSidebarItem(t, e).map(
      setupSidebar(o, e, r)
    );
    Object.assign(n, { [o]: l });
  }), n) : (e.sidebars.forEach((o) => {
    const t = generateSidebarItem("./", e).map(
      setupSidebar("", e, r)
    );
    Object.assign(n, t);
  }), Object.values(n));
}
function setupSidebar(e, r, n) {
  return (o) => {
    let t = {};
    if (n ? t = r.sidebars[e].find((l) => l.link === (o == null ? void 0 : o.link)) : t = r.sidebars.find(
      (l) => l.link === (o == null ? void 0 : o.link)
    ), !!o)
      return t ? (o.text = t.text, {
        ...o,
        collapsed: t.collapsed
      }) : o;
  };
}
function generateSidebarItem(e, r) {
  let n = FileHelper.getFileByReaddirSync(e);
  const o = [".json", ".yaml", ".lock"];
  return n.map((t) => {
    var p;
    const l = (0, import_path.resolve)(e, t), c = /* @__PURE__ */ new Set(), a = /\.vitepress/, u = o.includes((0, import_path.extname)(t)), s = FileHelper.checkIsDirectory(l);
    if ((p = r.excludeFiles) != null && p.includes(t) || a.test(t) || u || t === "index.md" && !r.includeIndexMd || t === "node_modules" || s)
      return null;
    if ((0, import_path.extname)(t) === ".md") {
      let f;
      const h = FileHelper.getFileDataByReadFileSync(l), d = `${e.replace(".", "")}${t}`.replace(/\/{2}/, "/").replace(/\.md$/, "");
      f = getTitleFromFileName(t);
      const { content: g } = matter$1(h);
      g.split(`
`).filter((m) => m.startsWith("## ")).forEach((m) => {
        const A = m.slice(3).trim();
        c.add(A);
      });
      const E = [...c].map((m) => {
        const A = `${d}#${m}`.toLowerCase().replace(" ", "-");
        return {
          text: `${m}`,
          link: A
        };
      });
      return E.length ? {
        text: f,
        link: d,
        items: [{ items: E }]
      } : {
        text: f,
        link: d
      };
    }
    return null;
  }).filter((t) => t !== null);
}
function getTitleFromFileName(e, r = false) {
  let n = e;
  return r ? (n = n.replace(/-/g, " ").replace(/_/g, " "), n) : (n = n.replace(/-/g, " ").replace(/_/g, " ").replace(/\.md$/, ""), n);
}
var timer;
function resetHeader() {
  document.querySelectorAll(".VPSidebarItem.level-2").forEach(
    (r) => r.setAttribute("class", "VPSidebarItem level-2 is-link")
  ), window.scrollTo(0, 0);
}
function setHeadersStyle(e) {
  var n;
  const r = (n = document.querySelector(".VPSidebarItem.level-0.is-active.has-active")) == null ? void 0 : n.querySelectorAll(".VPSidebarItem.level-2");
  r == null || r.forEach((o, t) => {
    var l;
    t === e ? (window.history.pushState(null, "", `${(l = o.querySelector("a")) == null ? void 0 : l.href}`), o.setAttribute("class", "VPSidebarItem level-2 is-link is-active")) : o.setAttribute("class", "VPSidebarItem level-2 is-link");
  });
}
function calculateAndHighlightHeader(e, r) {
  let n, o;
  const t = (r == null ? void 0 : r.adjustOffsetTop) || 0, { scrollY: l, innerHeight: c } = window, a = document.body.offsetHeight;
  n = l, o = c;
  const u = Math.abs(n + o - a) < 0.5;
  if (r != null && r.idName) {
    const s = document.getElementById(`#${r.idName}`);
    n = s == null ? void 0 : s.scrollTop;
  }
  timer && clearTimeout(timer), timer = setTimeout(() => {
    if (!e.items)
      return;
    const s = e.items[0].items, p = [], f = [];
    if (n <= 5) {
      setHeadersStyle(0);
      return;
    }
    if (u) {
      setHeadersStyle(s.length - 1);
      return;
    }
    document.querySelectorAll("h2").forEach((h, d) => {
      !h.id || s.findIndex((E) => {
        var m;
        return E.text == ((m = h.textContent) == null ? void 0 : m.slice(0, h.textContent.length - 2));
      }) === -1 || f.push(h);
    }), f.forEach((h, d) => {
      const g = h.offsetTop - t;
      n >= g && p.push(d);
    }), setHeadersStyle(p[p.length - 1]);
  }, 100);
}
var ScrollUtils = { calculateAndHighlightHeader, resetHeader };
function VitepressPluginNestedSidebar() {
  const { calculateAndHighlightHeader: e, resetHeader: r } = ScrollUtils;
  return {
    generateSidebar,
    utility: {
      calculateAndHighlightHeader: e,
      filterSidebar: (t) => (l) => l.link === t,
      checkMultipleSidebar: (t) => !Array.isArray(t),
      resetHeader: r
    }
  };
}
export {
  VitepressPluginNestedSidebar as default
};
/*! Bundled license information:

vitepress-plugin-nested-sidebar/dist/vitepress-plugin-nested-sidebar.es.mjs:
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)
  (*!
   * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
   *
   * Copyright (c) 2015, 2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=vitepress-plugin-nested-sidebar.js.map
