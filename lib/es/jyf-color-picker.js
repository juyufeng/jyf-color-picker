function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// w3c 颜色名称库
var w3cColorNames = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function JyfColorCrafter(color, opts) {
  color = color ? color : "";
  opts = opts || {};

  // If input is already a JyfColorCrafter, return itself
  if (color instanceof JyfColorCrafter) {
    return color;
  }
  // If we are called as a function, call using new instead
  if (!(this instanceof JyfColorCrafter)) {
    return new JyfColorCrafter(color, opts);
  }
  var rgb = inputToRGB(color);
  this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
  this._gradientType = opts.gradientType;

  // Don't let the range of [0,255] come back in [0,1].
  // Potentially lose a little bit of precision here, but will fix issues where
  // .5 gets interpreted as half of the total, instead of half of 1
  // If it was supposed to be 128, this was already taken care of by `inputToRgb`
  if (this._r < 1) this._r = Math.round(this._r);
  if (this._g < 1) this._g = Math.round(this._g);
  if (this._b < 1) this._b = Math.round(this._b);
  this._ok = rgb.ok;
}
var names = JyfColorCrafter.names = w3cColorNames;
JyfColorCrafter.prototype = {
  isDark: function isDark() {
    return this.getBrightness() < 128;
  },
  isLight: function isLight() {
    return !this.isDark();
  },
  isValid: function isValid() {
    return this._ok;
  },
  getOriginalInput: function getOriginalInput() {
    return this._originalInput;
  },
  getFormat: function getFormat() {
    return this._format;
  },
  getAlpha: function getAlpha() {
    return this._a;
  },
  getBrightness: function getBrightness() {
    //http://www.w3.org/TR/AERT#color-contrast
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  },
  getLuminance: function getLuminance() {
    //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    var rgb = this.toRgb();
    var RsRGB, GsRGB, BsRGB, R, G, B;
    RsRGB = rgb.r / 255;
    GsRGB = rgb.g / 255;
    BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) R = RsRGB / 12.92;else R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    if (GsRGB <= 0.03928) G = GsRGB / 12.92;else G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    if (BsRGB <= 0.03928) B = BsRGB / 12.92;else B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  },
  setAlpha: function setAlpha(value) {
    this._a = boundAlpha(value);
    this._roundA = Math.round(100 * this._a) / 100;
    return this;
  },
  toHsv: function toHsv() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this._a
    };
  },
  toHsvString: function toHsvString() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    var h = Math.round(hsv.h * 360),
      s = Math.round(hsv.s * 100),
      v = Math.round(hsv.v * 100);
    return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
  },
  toHsl: function toHsl() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    return {
      h: hsl.h * 360,
      s: hsl.s,
      l: hsl.l,
      a: this._a
    };
  },
  toHslString: function toHslString() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    var h = Math.round(hsl.h * 360),
      s = Math.round(hsl.s * 100),
      l = Math.round(hsl.l * 100);
    return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
  },
  toHex: function toHex(allow3Char) {
    return rgbToHex(this._r, this._g, this._b, allow3Char);
  },
  toHexString: function toHexString(allow3Char) {
    return "#" + this.toHex(allow3Char);
  },
  toHex8: function toHex8(allow4Char) {
    return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
  },
  toHex8String: function toHex8String(allow4Char) {
    return "#" + this.toHex8(allow4Char);
  },
  toRgb: function toRgb() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function toRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function toPercentageRgb() {
    return {
      r: Math.round(bound01(this._r, 255) * 100) + "%",
      g: Math.round(bound01(this._g, 255) * 100) + "%",
      b: Math.round(bound01(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function toPercentageRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function toName() {
    if (this._a === 0) {
      return "transparent";
    }
    if (this._a < 1) {
      return false;
    }
    return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
  },
  toFilter: function toFilter(secondColor) {
    var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
    var secondHex8String = hex8String;
    var gradientType = this._gradientType ? "GradientType = 1, " : "";
    if (secondColor) {
      var s = JyfColorCrafter(secondColor);
      secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
  },
  toString: function toString(format) {
    var formatSet = !!format;
    format = format || this._format;
    var formattedString = false;
    var hasAlpha = this._a < 1 && this._a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
    if (needsAlphaFormat) {
      // Special case for "transparent", all other non-alpha formats
      // will return rgba when there is transparency.
      if (format === "name" && this._a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  },
  clone: function clone() {
    return JyfColorCrafter(this.toString());
  },
  _applyModification: function _applyModification(fn, args) {
    var color = fn.apply(null, [this].concat([].slice.call(args)));
    this._r = color._r;
    this._g = color._g;
    this._b = color._b;
    this.setAlpha(color._a);
    return this;
  },
  lighten: function lighten() {
    return this._applyModification(_lighten, arguments);
  },
  brighten: function brighten() {
    return this._applyModification(_brighten, arguments);
  },
  darken: function darken() {
    return this._applyModification(_darken, arguments);
  },
  desaturate: function desaturate() {
    return this._applyModification(_desaturate, arguments);
  },
  saturate: function saturate() {
    return this._applyModification(_saturate, arguments);
  },
  greyscale: function greyscale() {
    return this._applyModification(_greyscale, arguments);
  },
  spin: function spin() {
    return this._applyModification(_spin, arguments);
  },
  _applyCombination: function _applyCombination(fn, args) {
    return fn.apply(null, [this].concat([].slice.call(args)));
  },
  analogous: function analogous() {
    return this._applyCombination(_analogous, arguments);
  },
  complement: function complement() {
    return this._applyCombination(_complement, arguments);
  },
  monochromatic: function monochromatic() {
    return this._applyCombination(_monochromatic, arguments);
  },
  splitcomplement: function splitcomplement() {
    return this._applyCombination(_splitcomplement, arguments);
  },
  // Disabled until https://github.com/bgrins/JyfColorCrafter/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function triad() {
    return this._applyCombination(polyad, [3]);
  },
  tetrad: function tetrad() {
    return this._applyCombination(polyad, [4]);
  }
};

// 如果输入是对象，将1强制为"1.0"以正确处理比率
// String input requires "1.0" as input, so 1 will be treated as 1
// 字符串输入需要"1.0"作为输入，所以1将被视为1
JyfColorCrafter.fromRatio = function (color, opts) {
  if (_typeof(color) == "object") {
    var newColor = {};
    for (var i in color) {
      if (color.hasOwnProperty(i)) {
        if (i === "a") {
          newColor[i] = color[i];
        } else {
          newColor[i] = convertToPercentage(color[i]);
        }
      }
    }
    color = newColor;
  }
  return JyfColorCrafter(color, opts);
};

// 给定一个字符串或对象，将该输入转换为RGB
// 可能的字符串输入：
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;
  if (typeof color == "string") {
    color = parseStringToObject(color);
  }
  if (_typeof(color) == "object") {
    if (isCSSUnitValid(color.r) && isCSSUnitValid(color.g) && isCSSUnitValid(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isCSSUnitValid(color.h) && isCSSUnitValid(color.s) && isCSSUnitValid(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format = "hsv";
    } else if (isCSSUnitValid(color.h) && isCSSUnitValid(color.s) && isCSSUnitValid(color.l)) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format = "hsl";
    }
    if (color.hasOwnProperty("a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok: ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a
  };
}

// Conversion Functions
// 转换函数
// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb`
// --------------------

// `rgbToRgb`
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;
  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: h,
    s: s,
    l: l
  };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
  var r, g, b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    v = max;
  var d = max - min;
  s = max === 0 ? 0 : d / max;
  if (max == min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: h,
    s: s,
    v: v
  };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h),
    f = h - i,
    p = v * (1 - s),
    q = v * (1 - f * s),
    t = v * (1 - (1 - f) * s),
    mod = i % 6,
    r = [v, q, p, p, t, v][mod],
    g = [t, v, v, q, p, p][mod],
    b = [p, p, t, v, v, q][mod];
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {
  var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];

  // Return a 3 character hex if possible
  if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {
  var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];

  // Return a 4 character hex if possible
  if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {
  var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
  return hex.join("");
}

// `equals`
JyfColorCrafter.equals = function (color1, color2) {
  if (!color1 || !color2) return false;
  return JyfColorCrafter(color1).toRgbString() == JyfColorCrafter(color2).toRgbString();
};
JyfColorCrafter.random = function () {
  return JyfColorCrafter.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};

// Modification Functions
function _desaturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = JyfColorCrafter(color).toHsl();
  hsl.s -= amount / 100;
  hsl.s = clamp01(hsl.s);
  return JyfColorCrafter(hsl);
}
function _saturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = JyfColorCrafter(color).toHsl();
  hsl.s += amount / 100;
  hsl.s = clamp01(hsl.s);
  return JyfColorCrafter(hsl);
}
function _greyscale(color) {
  return JyfColorCrafter(color).desaturate(100);
}
function _lighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = JyfColorCrafter(color).toHsl();
  hsl.l += amount / 100;
  hsl.l = clamp01(hsl.l);
  return JyfColorCrafter(hsl);
}
function _brighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var rgb = JyfColorCrafter(color).toRgb();
  rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
  rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
  rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
  return JyfColorCrafter(rgb);
}
function _darken(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = JyfColorCrafter(color).toHsl();
  hsl.l -= amount / 100;
  hsl.l = clamp01(hsl.l);
  return JyfColorCrafter(hsl);
}
function _spin(color, amount) {
  var hsl = JyfColorCrafter(color).toHsl();
  var hue = (hsl.h + amount) % 360;
  hsl.h = hue < 0 ? 360 + hue : hue;
  return JyfColorCrafter(hsl);
}

// Combination Functions
// 组合函数
// ---------------------
function _complement(color) {
  var hsl = JyfColorCrafter(color).toHsl();
  hsl.h = (hsl.h + 180) % 360;
  return JyfColorCrafter(hsl);
}
function polyad(color, number) {
  if (isNaN(number) || number <= 0) {
    throw new Error("Argument to polyad must be a positive number");
  }
  var hsl = JyfColorCrafter(color).toHsl();
  var result = [JyfColorCrafter(color)];
  var step = 360 / number;
  for (var i = 1; i < number; i++) {
    result.push(JyfColorCrafter({
      h: (hsl.h + i * step) % 360,
      s: hsl.s,
      l: hsl.l
    }));
  }
  return result;
}
function _splitcomplement(color) {
  var hsl = JyfColorCrafter(color).toHsl();
  var h = hsl.h;
  return [JyfColorCrafter(color), JyfColorCrafter({
    h: (h + 72) % 360,
    s: hsl.s,
    l: hsl.l
  }), JyfColorCrafter({
    h: (h + 216) % 360,
    s: hsl.s,
    l: hsl.l
  })];
}
function _analogous(color, results, slices) {
  results = results || 6;
  slices = slices || 30;
  var hsl = JyfColorCrafter(color).toHsl();
  var part = 360 / slices;
  var ret = [JyfColorCrafter(color)];
  for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
    hsl.h = (hsl.h + part) % 360;
    ret.push(JyfColorCrafter(hsl));
  }
  return ret;
}
function _monochromatic(color, results) {
  results = results || 6;
  var hsv = JyfColorCrafter(color).toHsv();
  var h = hsv.h,
    s = hsv.s,
    v = hsv.v;
  var ret = [];
  var modification = 1 / results;
  while (results--) {
    ret.push(JyfColorCrafter({
      h: h,
      s: s,
      v: v
    }));
    v = (v + modification) % 1;
  }
  return ret;
}

// Utility Functions
// ---------------------

JyfColorCrafter.mix = function (color1, color2, amount) {
  amount = amount === 0 ? 0 : amount || 50;
  var rgb1 = JyfColorCrafter(color1).toRgb();
  var rgb2 = JyfColorCrafter(color2).toRgb();
  var p = amount / 100;
  var rgba = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b,
    a: (rgb2.a - rgb1.a) * p + rgb1.a
  };
  return JyfColorCrafter(rgba);
};

// Readability Functions
// 对比度函数
JyfColorCrafter.readability = function (color1, color2) {
  var c1 = JyfColorCrafter(color1);
  var c2 = JyfColorCrafter(color2);
  return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
};

// `isReadable`
// 第三个参数是一个可选对象。 
// *Example*
//    JyfColorCrafter.isReadable("#000", "#111") => false
//    JyfColorCrafter.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
JyfColorCrafter.isReadable = function (color1, color2, wcag2) {
  var readability = JyfColorCrafter.readability(color1, color2);
  var wcag2Parms, out;
  out = false;
  wcag2Parms = validateWCAG2Parameters(wcag2);
  switch (wcag2Parms.level + wcag2Parms.size) {
    case "AAsmall":
    case "AAAlarge":
      out = readability >= 4.5;
      break;
    case "AAlarge":
      out = readability >= 3;
      break;
    case "AAAsmall":
      out = readability >= 7;
      break;
  }
  return out;
};

// `mostReadable`
// 给定一个基本颜色和一个可能的前景色或背景色列表，返回最易读的颜色。
// 可选地返回黑色或白色，如果最易读的颜色不可读。 
// 第三个参数是一个可选对象。
// *Example*
// *Example*
//    JyfColorCrafter.mostReadable(JyfColorCrafter.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    JyfColorCrafter.mostReadable(JyfColorCrafter.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    JyfColorCrafter.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    JyfColorCrafter.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
JyfColorCrafter.mostReadable = function (baseColor, colorList, args) {
  var bestColor = null;
  var bestScore = 0;
  var readability;
  var includeFallbackColors, level, size;
  args = args || {};
  includeFallbackColors = args.includeFallbackColors;
  level = args.level;
  size = args.size;
  for (var i = 0; i < colorList.length; i++) {
    readability = JyfColorCrafter.readability(baseColor, colorList[i]);
    if (readability > bestScore) {
      bestScore = readability;
      bestColor = JyfColorCrafter(colorList[i]);
    }
  }
  if (JyfColorCrafter.isReadable(baseColor, bestColor, {
    level: level,
    size: size
  }) || !includeFallbackColors) {
    return bestColor;
  } else {
    args.includeFallbackColors = false;
    return JyfColorCrafter.mostReadable(baseColor, ["#fff", "#000"], args);
  }
};

// 通过`hexNames[hex]`轻松访问颜色
var hexNames = JyfColorCrafter.hexNames = flip(names);

// Utilities
// ---------
// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
  var flipped = {};
  for (var i in o) {
    if (o.hasOwnProperty(i)) {
      flipped[o[i]] = i;
    }
  }
  return flipped;
}

// 返回一个有效的alpha值[0,1]，所有无效的值都被设置为1
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}

// 将输入从[0, n]转换为[0, 1]
function bound01(n, max) {
  if (isOnePointZero(n)) n = "100%";
  var processPercent = isPercentage(n);
  n = Math.min(max, Math.max(0, parseFloat(n)));

  // 自动将百分比转换为数字
  if (processPercent) {
    n = parseInt(n * max, 10) / 100;
  }

  // 处理浮点数舍入误差
  if (Math.abs(n - max) < 0.000001) {
    return 1;
  }

  // 将n转换为[0, 1]范围，如果它不是已经
  return n % max / parseFloat(max);
}

// 将数字限制在0和1之间
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}

// 将16进制值解析为10进制整数
function parseIntFromHex(val) {
  return parseInt(val, 16);
}

// 需要将1.0处理为100%，因为一旦它是一个数字，就没有区别了。
function isOnePointZero(n) {
  return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
}

// 检查字符串是否为百分比
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") != -1;
}

// 将16进制值强制为2个字符
function pad2(c) {
  return c.length == 1 ? "0" + c : "" + c;
}

// 将小数替换为百分比值
function convertToPercentage(n) {
  if (n <= 1) {
    n = n * 100 + "%";
  }
  return n;
}

// 将十进制转换为十六进制值
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}

// 将16进制值转换为十进制
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
var matchers = function () {
  // 匹配CSS整数
  var CSS_INTEGER = "[-\\+]?\\d+%?";

  // 匹配CSS小数
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

  // 允许正整数/负整数/小数。不要捕获正/负整数/小数，只需捕获整个结果。
  var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

  // 实际匹配。
  // 空格可以代替逗号或开括号
  // 括号和逗号是可选的，但不是必需的。 
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();

// 检查字符串是否为有效的CSS单位
function isCSSUnitValid(color) {
  return !!matchers.CSS_UNIT.exec(color);
}

// 将字符串输入转换为对象。
// 基于检测到的格式返回`{ r, g, b }`或`{ h, s, l }`或`{ h, s, v}`
function parseStringToObject(color) {
  var trimLeft = /^\s+/;
  var trimRight = /\s+$/;
  color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color == "transparent") {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  }

  // 使用正则表达式匹配字符串输入。
  // 不要担心 [0,1] 或 [0,100] 或 [0,360] 的数字边界。
  // 只需返回一个对象，并让转换函数处理。
  var match;
  if (match = matchers.rgb.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }
  if (match = matchers.rgba.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsl.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }
  if (match = matchers.hsla.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsv.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }
  if (match = matchers.hsva.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hex8.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex6.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  if (match = matchers.hex4.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      a: convertHexToDecimal(match[4] + "" + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex3.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}

/*
WCAG2，即Web内容无障碍指南（Web Content Accessibility Guidelines）的第2版，是由万维网联盟（W3C）发布的国际公认的Web无障碍标准。
该指南旨在确保Web内容对所有用户，包括残疾人士（如盲人和低视患者、聋人和重听人、学习障碍者、认知障碍者、行动不便者、言语残疾者、光过敏患者等）以及普通用户，都能更容易地访问和使用。
*/
// 返回isReadable的WCAG2参数。
// 如果输入参数无效，则返回{level: "AA", size: "small"}
function validateWCAG2Parameters(parms) {
  var level, size;
  parms = parms || {
    level: "AA",
    size: "small"
  };
  level = (parms.level || "AA").toUpperCase();
  size = (parms.size || "small").toLowerCase();
  if (level !== "AA" && level !== "AAA") {
    level = "AA";
  }
  if (size !== "small" && size !== "large") {
    size = "small";
  }
  return {
    level: level,
    size: size
  };
}

var TinyPicker = (function (_ref) {
  var prefix = _ref.prefix;
  return "\n<div class=\"".concat(prefix, "\">\n  <div class=\"").concat(prefix, "__jyfpad\" widget=\"jyfpad\">\n    <div class=\"").concat(prefix, "__jyfpad\u2014saturation\"></div>\n    <div class=\"").concat(prefix, "__jyfpad\u2014value\"></div>\n    <div class=\"").concat(prefix, "__circle-handler\" handler></div>\n  </div>\n\n  <div class=\"").concat(prefix, "__flexbox\">\n\n    <div style=\"padding: 4px 0px; flex: 1 1 0%;\">\n\n      <div class=\"").concat(prefix, "__hue\" widget=\"hue-slider\">\n        <div class=\"").concat(prefix, "__hue-bg\" background>\n          <div class=\"").concat(prefix, "__handler\" handler></div>\n        </div>\n      </div>\n\n      <div class=\"").concat(prefix, "__transparency\" widget=\"alpha-slider\">\n        <div class=\"").concat(prefix, "__transparency-bg\" background>\n          <div class=\"").concat(prefix, "__handler\" handler></div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"").concat(prefix, "__color\" widget=\"preview\">\n      <div class=\"").concat(prefix, "__color-bg\" background></div>\n    </div>\n\n  </div>\n\n  <div class=\"").concat(prefix, "__gridbox\" style=\"padding-top: 4px;\" widget=\"editable-input\">\n    <div class=\"").concat(prefix, "__color-Hex ").concat(prefix, "_input\">\n        <input type=\"text\"/>\n        <label>hex</label>\n    </div>\n    <div class=\"").concat(prefix, "__color-R ").concat(prefix, "_input\">\n      <input type=\"text\"/>\n      <label>r</label>\n    </div>\n    <div class=\"").concat(prefix, "__color-G ").concat(prefix, "_input\">\n      <input type=\"text\"/>\n      <label>g</label>\n    </div>\n    <div class=\"").concat(prefix, "__color-B ").concat(prefix, "_input\">\n      <input type=\"text\"/>\n      <label>b</label>\n    </div>\n    <div class=\"").concat(prefix, "__color-A ").concat(prefix, "_input\">\n      <input type=\"text\"/>\n      <label>a</label>\n    </div>\n  </div>\n\n<div class=\"").concat(prefix, "__flexbox ").concat(prefix, "__preset\" widget=\"preset-buttons\"></div>\n</div>\n");
});

var LightPicker = (function (_ref) {
  var prefix = _ref.prefix;
  return "\n<div class=\"".concat(prefix, "\">\n  <div class=\"").concat(prefix, "__jyfpad\" widget=\"jyfpad\">\n    <div class=\"").concat(prefix, "__jyfpad\u2014saturation\"></div>\n    <div class=\"").concat(prefix, "__jyfpad\u2014value\"></div>\n    <div class=\"").concat(prefix, "__circle-handler\" handler></div>\n  </div>\n\n  <div class=\"").concat(prefix, "__flexbox\">\n\n    <div style=\"padding: 4px 0px; flex: 1 1 0%;\">\n\n      <div class=\"").concat(prefix, "__hue\" widget=\"hue-slider\">\n        <div class=\"").concat(prefix, "__hue-bg\" background>\n          <div class=\"").concat(prefix, "__handler\" handler></div>\n        </div>\n      </div>\n\n      <div class=\"").concat(prefix, "__transparency\" widget=\"alpha-slider\">\n        <div class=\"").concat(prefix, "__transparency-bg\" background>\n          <div class=\"").concat(prefix, "__handler\" handler></div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"").concat(prefix, "__color\" widget=\"preview\">\n      <div class=\"").concat(prefix, "__color-bg\" background></div>\n    </div>\n\n  </div>\n\n  <div class=\"").concat(prefix, "__gridbox\" style=\"padding-top: 4px;\" widget=\"editable-input\">\n    <div class=\"").concat(prefix, "__color-Hex ").concat(prefix, "_input\">\n        <input type=\"text\"/>\n        <label>hex</label>\n    </div>\n    <div class=\"").concat(prefix, "__color-R ").concat(prefix, "_input\">\n      <input type=\"text\"/>\n      <label>r</label>\n    </div>\n    <div class=\"").concat(prefix, "__color-G ").concat(prefix, "_input\">\n      <input type=\"text\"/>\n      <label>g</label>\n    </div>\n    <div class=\"").concat(prefix, "__color-B ").concat(prefix, "_input\">\n      <input type=\"text\"/>\n      <label>b</label>\n    </div>\n    <div class=\"").concat(prefix, "__color-A ").concat(prefix, "_input\">\n      <input type=\"text\"/>\n      <label>a</label>\n    </div>\n  </div>\n\n<div class=\"").concat(prefix, "__flexbox ").concat(prefix, "__preset\" widget=\"preset-buttons\"></div>\n</div>\n");
});

var DarkPicker = (function (_ref) {
  var prefix = _ref.prefix;
  return "\n<div class=\"".concat(prefix, "\">\n  <div class=\"").concat(prefix, "__jyfpad\" widget=\"jyfpad\">\n    <div class=\"").concat(prefix, "__jyfpad\u2014saturation\"></div>\n    <div class=\"").concat(prefix, "__jyfpad\u2014value\"></div>\n    <div class=\"").concat(prefix, "__circle-handler\" handler></div>\n  </div>\n\n  <div class=\"").concat(prefix, "__flexbox\">\n\n    <div style=\"padding: 4px 0px; flex: 1 1 0%;\">\n\n      <div class=\"").concat(prefix, "__hue\" widget=\"hue-slider\">\n        <div class=\"").concat(prefix, "__hue-bg\" background>\n          <div class=\"").concat(prefix, "__handler\" handler></div>\n        </div>\n      </div>\n\n      <div class=\"").concat(prefix, "__transparency\" widget=\"alpha-slider\">\n        <div class=\"").concat(prefix, "__transparency-bg\" background>\n          <div class=\"").concat(prefix, "__handler\" handler></div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"").concat(prefix, "__color\" widget=\"preview\">\n      <div class=\"").concat(prefix, "__color-bg\" background></div>\n    </div>\n\n  </div>\n\n  <div class=\"").concat(prefix, "__gridbox\" style=\"padding-top: 4px;\" widget=\"editable-input\">\n    <div class=\"").concat(prefix, "__color-Hex ").concat(prefix, "_input\">\n        <input type=\"text\"/>\n        <label>hex</label>\n    </div>\n    <div class=\"").concat(prefix, "__color-R ").concat(prefix, "_input\">\n      <input type=\"text\"/>\n      <label>r</label>\n    </div>\n    <div class=\"").concat(prefix, "__color-G ").concat(prefix, "_input\">\n      <input type=\"text\"/>\n      <label>g</label>\n    </div>\n    <div class=\"").concat(prefix, "__color-B ").concat(prefix, "_input\">\n      <input type=\"text\"/>\n      <label>b</label>\n    </div>\n    <div class=\"").concat(prefix, "__color-A ").concat(prefix, "_input\">\n      <input type=\"text\"/>\n      <label>a</label>\n    </div>\n  </div>\n\n<div class=\"").concat(prefix, "__flexbox ").concat(prefix, "__preset\" widget=\"preset-buttons\"></div>\n</div>\n");
});

var Widget = /*#__PURE__*/function () {
  function Widget(ui, selector) {
    _classCallCheck(this, Widget);
    this._ui = ui;
    this._element = ui._selector(selector);
    this._events = null;
    this._makeUiElement();
  }
  _createClass(Widget, [{
    key: "handleChange",
    value: function handleChange(hsv) {
      hsv && this._ui._handleHsvChange(hsv);
    }
  }, {
    key: "_getTinyColor",
    value: function _getTinyColor(color) {
      return JyfColorCrafter(color);
    }
  }, {
    key: "_selector",
    value: function _selector(selector) {
      var _element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._element;
      if (!_element) throw Error('请先声明_element！');
      return _element.querySelector(selector);
    }
  }, {
    key: "_selectorAll",
    value: function _selectorAll(selector) {
      return this._element.querySelectorAll(selector);
    }
  }, {
    key: "_makeUiElement",
    value: function _makeUiElement() {}
  }, {
    key: "_addEvent",
    value: function _addEvent() {}
  }, {
    key: "_removeEvent",
    value: function _removeEvent() {}
  }, {
    key: "render",
    value: function render() {}
  }, {
    key: "destroy",
    value: function destroy() {
      this._removeEvent();
      this._handler = null;
      this._events = null;
      this._element = null;
      this._ui = null;
    }
  }]);
  return Widget;
}();

function calculateChange$3(e, hsv, container) {
  var rect = container.getBoundingClientRect();
  var containerWidth = rect.width,
    containerHeight = rect.height;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (rect.left + window.pageXOffset);
  var top = y - (rect.top + window.pageYOffset);
  if (left < 0) {
    left = 0;
  } else if (left > containerWidth) {
    left = containerWidth;
  }
  if (top < 0) {
    top = 0;
  } else if (top > containerHeight) {
    top = containerHeight;
  }
  var Saturation = left / containerWidth;
  var Value = 1 - top / containerHeight;
  return {
    h: hsv.h,
    s: Saturation,
    v: Value,
    a: hsv.a,
    source: 'hsv'
  };
}

function throttle(func, delay) {
  var prev = Date.now();
  return function () {
    var context = this;
    var now = Date.now();
    var args = arguments;
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = now;
    }
  };
}

var Jyfpad = /*#__PURE__*/function (_Widget) {
  _inherits(Jyfpad, _Widget);
  var _super = _createSuper(Jyfpad);
  function Jyfpad(ui) {
    var _this;
    _classCallCheck(this, Jyfpad);
    _this = _super.call(this, ui, '[widget="jyfpad"]');
    _this._handler = _this._selector('[handler]');
    _this._addEvent();
    _this.render();
    return _this;
  }
  _createClass(Jyfpad, [{
    key: "render",
    value: function render() {
      var _this$_ui$hsv = this._ui.hsv,
        h = _this$_ui$hsv.h,
        s = _this$_ui$hsv.s,
        v = _this$_ui$hsv.v;
      this._element.style = "background: hsl(".concat(h, "deg, 100%, 50%)");
      this._handler.style = "\n      left: ".concat(s * 100, "%;\n      top: ").concat((1 - v) * 100, "%;\n    ");
    }

    // 绑定事件
  }, {
    key: "_addEvent",
    value: function _addEvent() {
      var _this2 = this;
      this._events = {
        handleMouseDown: function handleMouseDown(e) {
          _this2._events.handleChange(e);
          document.addEventListener('mousemove', _this2._events.handleChange);
          document.addEventListener('mouseup', _this2._events.handleMouseUp);
        },
        handleChange: throttle(function (e) {
          var hsv = calculateChange$3(e, _this2._ui.hsv, _this2._element);
          _this2.handleChange(hsv);
        }, 50),
        handleMouseUp: function handleMouseUp() {
          document.removeEventListener('mousemove', _this2._events.handleChange);
          document.removeEventListener('mouseup', _this2._events.handleMouseUp);
        }
      };
      this._element.addEventListener('mousedown', this._events.handleMouseDown);
    }

    // 移除事件
  }, {
    key: "_removeEvent",
    value: function _removeEvent() {
      this._element.removeEventListener('mousedown', this._events.handleMouseDown);
    }
  }]);
  return Jyfpad;
}(Widget);

var PresetColorButtons = /*#__PURE__*/function (_Widget) {
  _inherits(PresetColorButtons, _Widget);
  var _super = _createSuper(PresetColorButtons);
  function PresetColorButtons(ui) {
    var _this;
    _classCallCheck(this, PresetColorButtons);
    _this = _super.call(this, ui, '[widget="preset-buttons"]');
    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var _e$target;
      if (e !== null && e !== void 0 && (_e$target = e.target) !== null && _e$target !== void 0 && _e$target.title) {
        _this.handleChange({
          hex: e.target.title,
          source: 'hex'
        });
      }
    });
    _this._addEvent();
    return _this;
  }
  _createClass(PresetColorButtons, [{
    key: "_makeUiElement",
    value: function _makeUiElement() {
      var domList = this._ui._option.presetColors.map(function (c) {
        var hexColor = JyfColorCrafter(c).toHexString();
        return "<div title=\"".concat(hexColor, "\" style=\"background: ").concat(hexColor, ";\"></div>");
      });
      this._element.innerHTML = domList.join('\n');
    }
  }, {
    key: "_addEvent",
    value: function _addEvent() {
      this._events = {
        onClick: this.handleClick
      };
      this._element.addEventListener('click', this._events.onClick);
    }
  }, {
    key: "_removeEvent",
    value: function _removeEvent() {
      this._element.removeEventListener('click', this._events.onClick);
    }
  }]);
  return PresetColorButtons;
}(Widget);

var calculateChange$2 = function calculateChange(e, hsv, container) {
  var rect = container.getBoundingClientRect();
  var containerWidth = rect.width;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  // const y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY
  var left = x - (rect.left + window.pageXOffset);
  var hex;
  if (left < 0) {
    hex = 0;
  } else if (left > containerWidth) {
    hex = 359;
  } else {
    var percent = left / containerWidth * 100;
    hex = 360 * percent / 100;
  }
  if (hsv.h !== hex) {
    return {
      h: hex,
      s: hsv.s,
      v: hsv.v,
      a: hsv.a,
      source: 'hsv'
    };
  } else {
    return hsv;
  }
};

var HueSlider = /*#__PURE__*/function (_Widget) {
  _inherits(HueSlider, _Widget);
  var _super = _createSuper(HueSlider);
  function HueSlider(ui) {
    var _this;
    _classCallCheck(this, HueSlider);
    _this = _super.call(this, ui, '[widget="hue-slider"]');
    _this._handler = _this._selector('[handler]');
    _this._addEvent();
    _this.render();
    return _this;
  }
  _createClass(HueSlider, [{
    key: "render",
    value: function render() {
      var h = this._ui.hsv.h;
      this._handler.style = "\n      left: ".concat(h / 360 * 100, "%;\n    ");
    }

    // 绑定事件
  }, {
    key: "_addEvent",
    value: function _addEvent() {
      var _this2 = this;
      this._events = {
        handleMouseDown: function handleMouseDown(e) {
          _this2._events.handleChange(e);
          document.addEventListener('mousemove', _this2._events.handleChange);
          document.addEventListener('mouseup', _this2._events.handleMouseUp);
        },
        handleChange: throttle(function (e) {
          var hsv = calculateChange$2(e, _this2._ui.hsv, _this2._element);
          _this2.handleChange(hsv);
        }, 50),
        handleMouseUp: function handleMouseUp() {
          document.removeEventListener('mousemove', _this2._events.handleChange);
          document.removeEventListener('mouseup', _this2._events.handleMouseUp);
        }
      };
      this._element.addEventListener('mousedown', this._events.handleMouseDown);
    }

    // 移除事件
  }, {
    key: "_removeEvent",
    value: function _removeEvent() {
      this._element.removeEventListener('mousedown', this._events.handleMouseDown);
    }
  }]);
  return HueSlider;
}(Widget);

var calculateChange$1 = function calculateChange(e, hsv, container) {
  var rect = container.getBoundingClientRect();
  var containerWidth = rect.width;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  // const y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY
  var left = x - (rect.left + window.pageXOffset);
  var alpha;
  if (left < 0) {
    alpha = 0;
  } else if (left >= containerWidth) {
    alpha = 100;
  } else {
    alpha = left / containerWidth * 100 >> 0;
  }
  if (hsv.a !== alpha) {
    return {
      h: hsv.h,
      s: hsv.s,
      v: hsv.v,
      a: alpha / 100,
      source: 'hsv'
    };
  } else {
    return hsv;
  }
};

var AlphaSlider = /*#__PURE__*/function (_Widget) {
  _inherits(AlphaSlider, _Widget);
  var _super = _createSuper(AlphaSlider);
  function AlphaSlider(ui) {
    var _this;
    _classCallCheck(this, AlphaSlider);
    _this = _super.call(this, ui, '[widget="alpha-slider"]');
    _this._handler = _this._selector('[handler]');
    _this._addEvent();
    _this.render();
    return _this;
  }
  _createClass(AlphaSlider, [{
    key: "render",
    value: function render() {
      var _this$_ui$hsv = this._ui.hsv,
        h = _this$_ui$hsv.h,
        a = _this$_ui$hsv.a;
      this._selector('[background]').style = "background: linear-gradient(to right, hsl(0deg,100%,50%,0), hsl(".concat(h, "deg,100%,50%,1))");
      this._handler.style = "\n      left: ".concat(a * 100, "%;\n    ");
    }

    // 绑定事件
  }, {
    key: "_addEvent",
    value: function _addEvent() {
      var _this2 = this;
      this._events = {
        handleMouseDown: function handleMouseDown(e) {
          _this2._events.handleChange(e);
          document.addEventListener('mousemove', _this2._events.handleChange);
          document.addEventListener('mouseup', _this2._events.handleMouseUp);
        },
        handleChange: throttle(function (e) {
          var hsv = calculateChange$1(e, _this2._ui.hsv, _this2._element);
          _this2.handleChange(hsv);
        }, 50),
        handleMouseUp: function handleMouseUp() {
          document.removeEventListener('mousemove', _this2._events.handleChange);
          document.removeEventListener('mouseup', _this2._events.handleMouseUp);
        }
      };
      this._element.addEventListener('mousedown', this._events.handleMouseDown);
    }

    // 移除事件
  }, {
    key: "_removeEvent",
    value: function _removeEvent() {
      this._element.removeEventListener('mousedown', this._events.handleMouseDown);
    }
  }]);
  return AlphaSlider;
}(Widget);

var Preview = /*#__PURE__*/function (_Widget) {
  _inherits(Preview, _Widget);
  var _super = _createSuper(Preview);
  function Preview(ui) {
    var _this;
    _classCallCheck(this, Preview);
    _this = _super.call(this, ui, '[widget="preview"]');
    _this.render();
    return _this;
  }
  _createClass(Preview, [{
    key: "render",
    value: function render() {
      var color = this._getTinyColor(this._ui.hsv);
      this._selector('[background]').style = "background: ".concat(color.toRgbString());
    }
  }]);
  return Preview;
}(Widget);

var calculateChange = function calculateChange(e, rgb) {
  var data = e.target.value;
  var label = e.target.nextElementSibling.innerText.toLowerCase();
  if (label === 'hex' && JyfColorCrafter(data).isValid()) {
    return {
      hex: data,
      source: 'hex'
    };
  } else if ('rgb'.includes(label)) {
    if (data < 0) {
      data = 0;
    }
    if (data > 255) {
      data = 255;
    }
    return Object.assign({
      r: rgb.r,
      g: rgb.g,
      b: rgb.b,
      a: rgb.a,
      source: 'rgb'
    }, _defineProperty({}, label, data));
  } else {
    if (data < 0) {
      data = 0;
    }
    if (data > 100) {
      data = 100;
    }
    return {
      r: rgb.r,
      g: rgb.g,
      b: rgb.b,
      a: data / 100,
      source: 'rgb'
    };
  }
};

var EditableInput = /*#__PURE__*/function (_Widget) {
  _inherits(EditableInput, _Widget);
  var _super = _createSuper(EditableInput);
  function EditableInput(ui) {
    var _this;
    _classCallCheck(this, EditableInput);
    _this = _super.call(this, ui, '[widget="editable-input"]');
    _defineProperty(_assertThisInitialized(_this), "_onInputChange", function (e) {
      _this.handleChange(calculateChange(e, _this._originalValue));
    });
    _this.handler = _this._selectorAll('input');
    _this._addEvent();
    _this.render();
    return _this;
  }
  _createClass(EditableInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var color = this._getTinyColor(this._ui.hsv);
      this._originalValue = Object.assign({
        hex: this._getTinyColor(this._ui.hsv).toHexString()
      }, color.toRgb());
      this._originalValue.a *= 100;
      this.handler.forEach(function (input) {
        var label = input.nextElementSibling.innerText.toLowerCase().trim();
        input.value = _this2._originalValue[label];
      });
    }
  }, {
    key: "_addEvent",
    value: function _addEvent() {
      var _this3 = this;
      this.handler.forEach(function (input) {
        input.addEventListener('change', _this3._onInputChange);
      });
    }
  }]);
  return EditableInput;
}(Widget);

var PREFIX = '';
var UI = /*#__PURE__*/function () {
  function UI(element, option) {
    _classCallCheck(this, UI);
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (element.nodeType !== 1) {
      throw Error('必须传入一个 HTMLElement 或者一个有效的 selectors');
    }
    this._mountElement = document.body;
    this._parentElement = element;
    this._option = option;
    this.hsv = option.hsv;
    this.type = option.type;
    this._makeUiElement();
    this._registerUI();
  }

  // register ui
  _createClass(UI, [{
    key: "_registerUI",
    value: function _registerUI() {
      this.widgets = [new Jyfpad(this), new PresetColorButtons(this), new HueSlider(this), new AlphaSlider(this), new Preview(this), new EditableInput(this)];
    }

    // generate template
  }, {
    key: "_makeUiElement",
    value: function _makeUiElement() {
      if (this.type === 'lightpicker') {
        PREFIX = 'jyf-color-lightpicker';
      } else if (this.type === 'darkpicker') {
        PREFIX = 'jyf-color-darkpicker';
      } else {
        PREFIX = 'jyf-color-picker';
      }
      var element = document.createElement('div');
      element.classList.add(PREFIX + '__wrapper');
      element.style = 'display: none;';
      if (this.type === 'lightpicker') {
        element.innerHTML = LightPicker({
          prefix: PREFIX
        });
      } else if (this.type === 'darkpicker') {
        element.innerHTML = DarkPicker({
          prefix: PREFIX
        });
      } else {
        element.innerHTML = TinyPicker({
          prefix: PREFIX
        });
      }
      this._mountElement.appendChild(element);
      this._element = element;
    }

    // HsvChange
  }, {
    key: "_handleHsvChange",
    value: function _handleHsvChange(colorInput) {
      var color;
      switch (colorInput.source) {
        case 'hsv':
          this.hsv = colorInput;
          color = JyfColorCrafter(colorInput);
          break;
        case 'hex':
          color = JyfColorCrafter(colorInput.hex);
          this.hsv = color.toHsv();
          break;
        case 'rgb':
          color = JyfColorCrafter(colorInput);
          this.hsv = color.toHsv();
          break;
      }
      // const color = JyfColorCrafter(colorInput)
      // this.hsv = color.toHsv();
      this._option.onChange(color);
      this.widgets.forEach(function (widget) {
        return widget.render();
      });
    }

    // selector
  }, {
    key: "_selector",
    value: function _selector(selector) {
      return this._element.querySelector(selector);
    }
  }, {
    key: "show",
    value: function show() {
      this._element.style = 'display: block;';
      var offset = 10;
      var maxHeight = document.documentElement.clientHeight;
      var scrollTop = document.documentElement.scrollTop;
      var height = this._element.clientHeight;
      var rect = this._parentElement.getBoundingClientRect();
      if (rect.bottom + height + 2 * offset > maxHeight) {
        this._element.style = "display: block;left:".concat(rect.left, "px;top:").concat(rect.top + scrollTop - height - offset, "px;");
      } else {
        this._element.style = "display: block;left:".concat(rect.left, "px;top:").concat(rect.top + rect.height + scrollTop + offset, "px;");
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this._element.style = 'display: none;';
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.widgets.forEach(function (widget) {
        return widget.destroy();
      });
      this._mountElement.removeChild(this._element);
      this._parentElement = null;
      this._option = null;
      this._element = null;
    }
  }]);
  return UI;
}();

var PRESET_COLORS = ['#d0021b', '#f5a623', '#f8e71c', '#8b572a', '#7ed321', '#417505', '#bd10e0', '#9013fe', '#4a90e2', '#50e3c2', '#b8e986', '#000000', '#4a4a4a', '#9b9b9b', '#ffffff'];
var defaultOption = {
  color: 'rgb(0,0,255)',
  type: 'tinypicker'
};
var JyfColorPicker = /*#__PURE__*/function () {
  function JyfColorPicker(wrapper) {
    var _this = this;
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOption;
    _classCallCheck(this, JyfColorPicker);
    // 对外暴露的option 只读
    _defineProperty(this, "publicOption", defaultOption);
    _defineProperty(this, "_isVisible", false);
    _defineProperty(this, "handleHsvChange", function (color) {
      var _this$_option;
      _this.color = JyfColorCrafter(color);
      _this.hsv = _this.color.toHsv();
      if ((_this$_option = _this._option) !== null && _this$_option !== void 0 && _this$_option.onChange) {
        _this._option.onChange(color);
      }
    });
    this._option = option;
    this._initColor(option.color);
    this.ui = new UI(wrapper, {
      presetColors: PRESET_COLORS,
      hsv: this.hsv,
      type: option.type,
      onChange: this.handleHsvChange
    });
  }

  // 
  _createClass(JyfColorPicker, [{
    key: "_initColor",
    value: function _initColor(originalColor) {
      var color = JyfColorCrafter(originalColor);
      if (!color.isValid()) {
        throw Error('option.color 不是一个有效的颜色值, 你可以传入 #ff0000 rgba(255,255,255,0.5) ...');
      }
      this.hsv = color.toHsv();
    }
  }, {
    key: "publicOption",
    get: function get() {
      return this._option;
    },
    set: function set(val) {
      this._option = val;
    }
  }, {
    key: "visible",
    get: function get() {
      return this._isVisible;
    },
    set: function set(val) {
      this._isVisible = val;
      if (val) {
        this.ui.show();
      } else {
        this.ui.hide();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.ui.destroy();
      this.ui = null;
      this._option = null;
    }
  }]);
  return JyfColorPicker;
}();

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".jyf-color-lightpicker__wrapper {\n  position: absolute;\n  z-index: 1000;\n}\n.jyf-color-lightpicker {\n  width: 220px;\n  padding: 10px 10px 0px;\n  box-sizing: border-box;\n  background: lightblue;\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 8px 16px;\n  user-select: none;\n}\n\n.jyf-color-lightpicker__jyfpad {\n  width: 100%;\n  padding-bottom: 75%;\n  position: relative;\n  overflow: hidden;\n}\n.jyf-color-lightpicker__jyfpad—saturation {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));\n}\n.jyf-color-lightpicker__jyfpad—value {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));\n}\n\n.jyf-color-lightpicker__flexbox {\n  display: flex;\n}\n.jyf-color-lightpicker__gridbox {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;\n  grid-column-gap: 6px;\n  text-align: center;\n}\n.jyf-color-lightpicker__gridbox input {\n  width: 80%;\n  padding: 4px 10% 3px;\n  border: none;\n  box-shadow: rgb(204, 204, 204) 0px 0px 0px 1px inset;\n  font-size: 11px;\n  text-align: inherit;\n}\n.jyf-color-lightpicker__gridbox label {\n  display: block;\n  font-size: 11px;\n  color: rgb(34, 34, 34);\n  padding-top: 3px;\n  padding-bottom: 4px;\n  text-transform: capitalize;\n}\n.jyf-color-lightpicker__hue {\n  position: relative;\n  height: 10px;\n  \n}\n.jyf-color-lightpicker__hue-bg {\n  position: absolute;\n  inset: 0px;\n  background: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%);\n}\n.jyf-color-lightpicker__transparency {\n  position: relative;\n  height: 10px;\n  margin-top: 4px;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII=\") left center;\n  \n}\n.jyf-color-lightpicker__transparency-bg {\n  position: absolute;\n  inset: 0px;\n}\n.jyf-color-lightpicker__handler {\n  position: absolute;\n}\n.jyf-color-lightpicker__handler::after{\n  content: '';\n  display: block;\n  width: 4px;\n  height: 10px;\n  border-radius: 1px;\n  box-shadow: rgba(0, 0, 0, 0.9) 0px 0px 3px;\n  background: rgb(255, 255, 255);\n  transform: translateX(-2px);\n}\n.jyf-color-lightpicker__circle-handler {\n  width: 4px;\n  height: 4px;\n  box-shadow: rgb(255, 255, 255) 0px 0px 0px 1.5px, rgba(0, 0, 0, 0.3) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.4) 0px 0px 1px 2px;\n  border-radius: 50%;\n  transform: translate(-2px, -2px);\n  position: absolute;\n}\n.jyf-color-lightpicker__color {\n  position: relative;\n  width: 24px;\n  height: 24px;\n  margin-top: 4px;\n  margin-left: 4px;\n  border-radius: 3px;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII=\") left center;\n}\n.jyf-color-lightpicker__color-bg{\n  position: absolute;\n  inset: 0px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.25) 0px 0px;\n}\n\n.jyf-color-lightpicker__color-Hex {\n  flex: 2 1 0%;\n}\n.jyf-color-lightpicker__color-R,\n.jyf-color-lightpicker__color-G,\n.jyf-color-lightpicker__color-B,\n.jyf-color-lightpicker__color-A {\n  flex: 1 1 0%;\n}\n\n.jyf-color-lightpicker__preset {\n  flex-wrap: wrap;\n  margin: 0px -10px;\n  padding: 10px 0px 0px 10px;\n  border-top: 1px solid rgb(238, 238, 238);\n}\n\n.jyf-color-lightpicker__preset div {\n  width: 16px;\n  height: 16px;\n  margin: 0px 10px 10px 0px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  border-radius: 3px;\n  cursor: pointer;\n}";
styleInject(css_248z$2);

var css_248z$1 = ".jyf-color-picker__wrapper {\n  position: absolute;\n  z-index: 1000;\n}\n.jyf-color-picker {\n  width: 220px;\n  padding: 10px 10px 0px;\n  box-sizing: border-box;\n  background: rgb(255, 255, 255);\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 8px 16px;\n  user-select: none;\n}\n\n.jyf-color-picker__jyfpad {\n  width: 100%;\n  padding-bottom: 75%;\n  position: relative;\n  overflow: hidden;\n}\n.jyf-color-picker__jyfpad—saturation {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));\n}\n.jyf-color-picker__jyfpad—value {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));\n}\n\n.jyf-color-picker__flexbox {\n  display: flex;\n}\n.jyf-color-picker__gridbox {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;\n  grid-column-gap: 6px;\n  text-align: center;\n}\n.jyf-color-picker__gridbox input {\n  width: 80%;\n  padding: 4px 10% 3px;\n  border: none;\n  box-shadow: rgb(204, 204, 204) 0px 0px 0px 1px inset;\n  font-size: 11px;\n  text-align: inherit;\n}\n.jyf-color-picker__gridbox label {\n  display: block;\n  font-size: 11px;\n  color: rgb(34, 34, 34);\n  padding-top: 3px;\n  padding-bottom: 4px;\n  text-transform: capitalize;\n}\n.jyf-color-picker__hue {\n  position: relative;\n  height: 10px;\n  \n}\n.jyf-color-picker__hue-bg {\n  position: absolute;\n  inset: 0px;\n  background: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%);\n}\n.jyf-color-picker__transparency {\n  position: relative;\n  height: 10px;\n  margin-top: 4px;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII=\") left center;\n  \n}\n.jyf-color-picker__transparency-bg {\n  position: absolute;\n  inset: 0px;\n}\n.jyf-color-picker__handler {\n  position: absolute;\n}\n.jyf-color-picker__handler::after{\n  content: '';\n  display: block;\n  width: 4px;\n  height: 10px;\n  border-radius: 1px;\n  box-shadow: rgba(0, 0, 0, 0.9) 0px 0px 3px;\n  background: rgb(255, 255, 255);\n  transform: translateX(-2px);\n}\n.jyf-color-picker__circle-handler {\n  width: 4px;\n  height: 4px;\n  box-shadow: rgb(255, 255, 255) 0px 0px 0px 1.5px, rgba(0, 0, 0, 0.3) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.4) 0px 0px 1px 2px;\n  border-radius: 50%;\n  transform: translate(-2px, -2px);\n  position: absolute;\n}\n.jyf-color-picker__color {\n  position: relative;\n  width: 24px;\n  height: 24px;\n  margin-top: 4px;\n  margin-left: 4px;\n  border-radius: 3px;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII=\") left center;\n}\n.jyf-color-picker__color-bg{\n  position: absolute;\n  inset: 0px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.25) 0px 0px;\n}\n\n.jyf-color-picker__color-Hex {\n  flex: 2 1 0%;\n}\n.jyf-color-picker__color-R,\n.jyf-color-picker__color-G,\n.jyf-color-picker__color-B,\n.jyf-color-picker__color-A {\n  flex: 1 1 0%;\n}\n\n.jyf-color-picker__preset {\n  flex-wrap: wrap;\n  margin: 0px -10px;\n  padding: 10px 0px 0px 10px;\n  border-top: 1px solid rgb(238, 238, 238);\n}\n\n.jyf-color-picker__preset div {\n  width: 16px;\n  height: 16px;\n  margin: 0px 10px 10px 0px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  border-radius: 3px;\n  cursor: pointer;\n}";
styleInject(css_248z$1);

var css_248z = ".jyf-color-darkpicker__wrapper {\n  position: absolute;\n  z-index: 1000;\n}\n.jyf-color-darkpicker {\n  width: 220px;\n  padding: 10px 10px 0px;\n  box-sizing: border-box;\n  background: black;\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 8px 16px;\n  user-select: none;\n}\n\n.jyf-color-darkpicker__jyfpad {\n  width: 100%;\n  padding-bottom: 75%;\n  position: relative;\n  overflow: hidden;\n}\n.jyf-color-darkpicker__jyfpad—saturation {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));\n}\n.jyf-color-darkpicker__jyfpad—value {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));\n}\n\n.jyf-color-darkpicker__flexbox {\n  display: flex;\n}\n.jyf-color-darkpicker__gridbox {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;\n  grid-column-gap: 6px;\n  text-align: center;\n}\n.jyf-color-darkpicker__gridbox input {\n  width: 80%;\n  padding: 4px 10% 3px;\n  border: none;\n  box-shadow: rgb(204, 204, 204) 0px 0px 0px 1px inset;\n  font-size: 11px;\n  text-align: inherit;\n}\n.jyf-color-darkpicker__gridbox label {\n  display: block;\n  font-size: 11px;\n  color: rgb(34, 34, 34);\n  padding-top: 3px;\n  padding-bottom: 4px;\n  text-transform: capitalize;\n}\n.jyf-color-darkpicker__hue {\n  position: relative;\n  height: 10px;\n  \n}\n.jyf-color-darkpicker__hue-bg {\n  position: absolute;\n  inset: 0px;\n  background: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%);\n}\n.jyf-color-darkpicker__transparency {\n  position: relative;\n  height: 10px;\n  margin-top: 4px;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII=\") left center;\n  \n}\n.jyf-color-darkpicker__transparency-bg {\n  position: absolute;\n  inset: 0px;\n}\n.jyf-color-darkpicker__handler {\n  position: absolute;\n}\n.jyf-color-darkpicker__handler::after{\n  content: '';\n  display: block;\n  width: 4px;\n  height: 10px;\n  border-radius: 1px;\n  box-shadow: rgba(0, 0, 0, 0.9) 0px 0px 3px;\n  background: rgb(255, 255, 255);\n  transform: translateX(-2px);\n}\n.jyf-color-darkpicker__circle-handler {\n  width: 4px;\n  height: 4px;\n  box-shadow: rgb(255, 255, 255) 0px 0px 0px 1.5px, rgba(0, 0, 0, 0.3) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.4) 0px 0px 1px 2px;\n  border-radius: 50%;\n  transform: translate(-2px, -2px);\n  position: absolute;\n}\n.jyf-color-darkpicker__color {\n  position: relative;\n  width: 24px;\n  height: 24px;\n  margin-top: 4px;\n  margin-left: 4px;\n  border-radius: 3px;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII=\") left center;\n}\n.jyf-color-darkpicker__color-bg{\n  position: absolute;\n  inset: 0px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.25) 0px 0px;\n}\n\n.jyf-color-darkpicker__color-Hex {\n  flex: 2 1 0%;\n}\n.jyf-color-darkpicker__color-R,\n.jyf-color-darkpicker__color-G,\n.jyf-color-darkpicker__color-B,\n.jyf-color-darkpicker__color-A {\n  flex: 1 1 0%;\n}\n\n.jyf-color-darkpicker__preset {\n  flex-wrap: wrap;\n  margin: 0px -10px;\n  padding: 10px 0px 0px 10px;\n  border-top: 1px solid rgb(238, 238, 238);\n}\n\n.jyf-color-darkpicker__preset div {\n  width: 16px;\n  height: 16px;\n  margin: 0px 10px 10px 0px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  border-radius: 3px;\n  cursor: pointer;\n}";
styleInject(css_248z);

export { JyfColorPicker as default };
