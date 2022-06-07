(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function on(name, handler) {
    const id = `${currentId}`;
    currentId += 1;
    eventHandlers[id] = { handler, name };
    return function() {
      delete eventHandlers[id];
    };
  }
  function once(name, handler) {
    let done = false;
    return on(name, function(...args) {
      if (done === true) {
        return;
      }
      done = true;
      handler(...args);
    });
  }
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, currentId;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      currentId = 0;
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name, ...args]) {
          invokeEventHandler(name, args);
        };
      } else {
        window.onmessage = function(event) {
          const [name, ...args] = event.data.pluginMessage;
          invokeEventHandler(name, args);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/ui.js
  function showUI(options, data) {
    if (typeof __html__ === "undefined") {
      throw new Error("No UI defined");
    }
    const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}<\/script>`;
    figma.showUI(html, options);
  }
  var init_ui = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
      init_ui();
    }
  });

  // src/utils.ts
  var classMap, elementType;
  var init_utils = __esm({
    "src/utils.ts"() {
      classMap = {
        1: { name: "Button", color: { r: Math.random(), g: Math.random(), b: Math.random() } },
        2: { name: "Image", color: { r: Math.random(), g: Math.random(), b: Math.random() } },
        3: { name: "Navbar", color: { r: Math.random(), g: Math.random(), b: Math.random() } },
        4: { name: "Text", color: { r: Math.random(), g: Math.random(), b: Math.random() } },
        5: { name: "H1", color: { r: Math.random(), g: Math.random(), b: Math.random() } },
        6: { name: "Paragraph", color: { r: Math.random(), g: Math.random(), b: Math.random() } },
        7: { name: "User Profile", color: { r: Math.random(), g: Math.random(), b: Math.random() } },
        8: { name: "Checkbox", color: { r: Math.random(), g: Math.random(), b: Math.random() } },
        9: { name: "Video", color: { r: Math.random(), g: Math.random(), b: Math.random() } },
        10: { name: "Divider", color: { r: Math.random(), g: Math.random(), b: Math.random() } },
        11: { name: "Input Field", color: { r: Math.random(), g: Math.random(), b: Math.random() } },
        12: { name: "Ahref", color: { r: Math.random(), g: Math.random(), b: Math.random() } },
        13: { name: "Background Frame", color: { r: 1, g: 1, b: 1 } }
      };
      elementType = /* @__PURE__ */ ((elementType2) => {
        elementType2[elementType2["undefined"] = 0] = "undefined";
        elementType2[elementType2["button"] = 1] = "button";
        elementType2[elementType2["image"] = 2] = "image";
        elementType2[elementType2["navBar"] = 3] = "navBar";
        elementType2[elementType2["text"] = 4] = "text";
        elementType2[elementType2["h1"] = 5] = "h1";
        elementType2[elementType2["paragraph"] = 6] = "paragraph";
        elementType2[elementType2["userProfile"] = 7] = "userProfile";
        elementType2[elementType2["checkbox"] = 8] = "checkbox";
        elementType2[elementType2["video"] = 9] = "video";
        elementType2[elementType2["divider"] = 10] = "divider";
        elementType2[elementType2["inputField"] = 11] = "inputField";
        elementType2[elementType2["ahref"] = 12] = "ahref";
        elementType2[elementType2["backgroundFrame"] = 13] = "backgroundFrame";
        return elementType2;
      })(elementType || {});
    }
  });

  // src/lib/colors.ts
  var black, white;
  var init_colors = __esm({
    "src/lib/colors.ts"() {
      black = { r: 0, b: 0, g: 0 };
      white = { r: 1, b: 1, g: 1 };
    }
  });

  // src/figma-elements/frame.ts
  function frameElement(data, { color = white, opacity = 0.4, cornerRadius = 0, stroke = 0, strokeColor = black }) {
    const frame = figma.createFrame();
    const width = data.artBoardWidth * (data.xMax - data.xMin);
    const height = data.artBoardHeight * (data.yMax - data.yMin);
    frame.resize(width, height);
    frame.x = data.xMin * data.artBoardWidth;
    frame.y = data.yMin * data.artBoardHeight;
    frame.backgrounds = [];
    frame.fills = [{ type: "SOLID", color, opacity }];
    frame.strokeWeight = stroke;
    frame.strokes = [{ type: "SOLID", color: strokeColor, opacity }];
    frame.effects = [];
    frame.name = classMap[data.classType].name;
    frame.clipsContent = true;
    frame.cornerRadius = cornerRadius;
    frame.layoutMode = "HORIZONTAL";
    return frame;
  }
  var init_frame = __esm({
    "src/figma-elements/frame.ts"() {
      init_utils();
      init_colors();
    }
  });

  // src/figma-elements/centeredTextElement.ts
  function centeredTextElement(text, { containerWidth, containerHeight, textColor = black, fontSize = 12, textAlignHorizontal = "CENTER" }) {
    const textElement2 = figma.createText();
    textElement2.textAlignHorizontal = textAlignHorizontal;
    textElement2.textAlignVertical = "CENTER";
    textElement2.resize(containerWidth, containerHeight);
    textElement2.fontSize = fontSize;
    textElement2.x = 0;
    textElement2.y = 0;
    textElement2.fills = [{ type: "SOLID", color: textColor }];
    textElement2.characters = text;
    textElement2.constrainProportions = true;
    return textElement2;
  }
  var init_centeredTextElement = __esm({
    "src/figma-elements/centeredTextElement.ts"() {
      init_colors();
    }
  });

  // src/figma-elements/h1.ts
  function h1Element(data) {
    const width = data.artBoardWidth * (data.xMax - data.xMin);
    const height = data.artBoardHeight * (data.yMax - data.yMin);
    const frameProperties = {
      stroke: 1
    };
    const frame = frameElement(data, frameProperties);
    const TextProperties = {
      containerWidth: width,
      containerHeight: height
    };
    const text = centeredTextElement("Heading1", TextProperties);
    frame.appendChild(text);
    return frame;
  }
  var init_h1 = __esm({
    "src/figma-elements/h1.ts"() {
      init_frame();
      init_centeredTextElement();
    }
  });

  // src/figma-elements/topAlignedTextElement.ts
  function topAlignedTextElement(text, { containerWidth, containerHeight, textColor = { r: 0, g: 0, b: 0 }, fontSize = 12, textAlignHorizontal = "CENTER" }) {
    const textElement2 = figma.createText();
    textElement2.textAlignHorizontal = "CENTER";
    textElement2.resize(containerWidth, containerHeight);
    textElement2.fontSize = fontSize;
    textElement2.x = 0;
    textElement2.y = containerHeight / 2 - fontSize / 2;
    textElement2.fills = [{ type: "SOLID", color: textColor }];
    textElement2.characters = text;
    textElement2.constrainProportions = true;
    return textElement2;
  }
  var init_topAlignedTextElement = __esm({
    "src/figma-elements/topAlignedTextElement.ts"() {
    }
  });

  // node_modules/lorem-ipsum/dist/constants/formats.js
  var require_formats = __commonJS({
    "node_modules/lorem-ipsum/dist/constants/formats.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.FORMATS = exports.FORMAT_PLAIN = exports.FORMAT_HTML = void 0;
      var FORMAT_HTML = "html";
      exports.FORMAT_HTML = FORMAT_HTML;
      var FORMAT_PLAIN = "plain";
      exports.FORMAT_PLAIN = FORMAT_PLAIN;
      var FORMATS = [FORMAT_HTML, FORMAT_PLAIN];
      exports.FORMATS = FORMATS;
    }
  });

  // node_modules/lorem-ipsum/dist/constants/units.js
  var require_units = __commonJS({
    "node_modules/lorem-ipsum/dist/constants/units.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UNITS = exports.UNIT_PARAGRAPH = exports.UNIT_PARAGRAPHS = exports.UNIT_SENTENCE = exports.UNIT_SENTENCES = exports.UNIT_WORD = exports.UNIT_WORDS = void 0;
      var UNIT_WORDS = "words";
      exports.UNIT_WORDS = UNIT_WORDS;
      var UNIT_WORD = "word";
      exports.UNIT_WORD = UNIT_WORD;
      var UNIT_SENTENCES = "sentences";
      exports.UNIT_SENTENCES = UNIT_SENTENCES;
      var UNIT_SENTENCE = "sentence";
      exports.UNIT_SENTENCE = UNIT_SENTENCE;
      var UNIT_PARAGRAPHS = "paragraphs";
      exports.UNIT_PARAGRAPHS = UNIT_PARAGRAPHS;
      var UNIT_PARAGRAPH = "paragraph";
      exports.UNIT_PARAGRAPH = UNIT_PARAGRAPH;
      var UNITS = [UNIT_WORDS, UNIT_WORD, UNIT_SENTENCES, UNIT_SENTENCE, UNIT_PARAGRAPHS, UNIT_PARAGRAPH];
      exports.UNITS = UNITS;
    }
  });

  // node_modules/lorem-ipsum/dist/constants/words.js
  var require_words = __commonJS({
    "node_modules/lorem-ipsum/dist/constants/words.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WORDS = void 0;
      var WORDS = ["ad", "adipisicing", "aliqua", "aliquip", "amet", "anim", "aute", "cillum", "commodo", "consectetur", "consequat", "culpa", "cupidatat", "deserunt", "do", "dolor", "dolore", "duis", "ea", "eiusmod", "elit", "enim", "esse", "est", "et", "eu", "ex", "excepteur", "exercitation", "fugiat", "id", "in", "incididunt", "ipsum", "irure", "labore", "laboris", "laborum", "Lorem", "magna", "minim", "mollit", "nisi", "non", "nostrud", "nulla", "occaecat", "officia", "pariatur", "proident", "qui", "quis", "reprehenderit", "sint", "sit", "sunt", "tempor", "ullamco", "ut", "velit", "veniam", "voluptate"];
      exports.WORDS = WORDS;
    }
  });

  // node_modules/lorem-ipsum/dist/constants/lineEndings.js
  var require_lineEndings = __commonJS({
    "node_modules/lorem-ipsum/dist/constants/lineEndings.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LINE_ENDINGS = void 0;
      var LINE_ENDINGS = {
        POSIX: "\n",
        WIN32: "\r\n"
      };
      exports.LINE_ENDINGS = LINE_ENDINGS;
    }
  });

  // node_modules/lorem-ipsum/dist/util/capitalize.js
  var require_capitalize = __commonJS({
    "node_modules/lorem-ipsum/dist/util/capitalize.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var capitalize = function capitalize2(str) {
        var trimmed = str.trim();
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
      };
      var _default = capitalize;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/util/isNode.js
  var require_isNode = __commonJS({
    "node_modules/lorem-ipsum/dist/util/isNode.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var isNode = function isNode2() {
        return typeof module !== "undefined" && !!module.exports;
      };
      var _default = isNode;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/util/isReactNative.js
  var require_isReactNative = __commonJS({
    "node_modules/lorem-ipsum/dist/util/isReactNative.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var isReactNative = function isReactNative2() {
        var isReactNativeResult = false;
        try {
          isReactNativeResult = navigator.product === "ReactNative";
        } catch (e) {
          isReactNativeResult = false;
        }
        return isReactNativeResult;
      };
      var _default = isReactNative;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/constants/platforms.js
  var require_platforms = __commonJS({
    "node_modules/lorem-ipsum/dist/constants/platforms.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SUPPORTED_PLATFORMS = void 0;
      var SUPPORTED_PLATFORMS = {
        DARWIN: "darwin",
        LINUX: "linux",
        WIN32: "win32"
      };
      exports.SUPPORTED_PLATFORMS = SUPPORTED_PLATFORMS;
    }
  });

  // node_modules/lorem-ipsum/dist/util/isWindows.js
  var require_isWindows = __commonJS({
    "node_modules/lorem-ipsum/dist/util/isWindows.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _platforms = require_platforms();
      var isWindows = function isWindows2() {
        var isWindowsResult = false;
        try {
          isWindowsResult = process.platform === _platforms.SUPPORTED_PLATFORMS.WIN32;
        } catch (e) {
          isWindowsResult = false;
        }
        return isWindowsResult;
      };
      var _default = isWindows;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js
  var require_makeArrayOfLength = __commonJS({
    "node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var makeArrayOfLength = function makeArrayOfLength2() {
        var length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        return Array.apply(null, Array(length)).map(function(item, index) {
          return index;
        });
      };
      var _default = makeArrayOfLength;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js
  var require_makeArrayOfStrings = __commonJS({
    "node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _ = require_util();
      var makeArrayOfStrings = function makeArrayOfStrings2(length, makeString) {
        var arr = (0, _.makeArrayOfLength)(length);
        return arr.map(function() {
          return makeString();
        });
      };
      var _default = makeArrayOfStrings;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/util/index.js
  var require_util = __commonJS({
    "node_modules/lorem-ipsum/dist/util/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "capitalize", {
        enumerable: true,
        get: function get() {
          return _capitalize["default"];
        }
      });
      Object.defineProperty(exports, "isNode", {
        enumerable: true,
        get: function get() {
          return _isNode["default"];
        }
      });
      Object.defineProperty(exports, "isReactNative", {
        enumerable: true,
        get: function get() {
          return _isReactNative["default"];
        }
      });
      Object.defineProperty(exports, "isWindows", {
        enumerable: true,
        get: function get() {
          return _isWindows["default"];
        }
      });
      Object.defineProperty(exports, "makeArrayOfLength", {
        enumerable: true,
        get: function get() {
          return _makeArrayOfLength["default"];
        }
      });
      Object.defineProperty(exports, "makeArrayOfStrings", {
        enumerable: true,
        get: function get() {
          return _makeArrayOfStrings["default"];
        }
      });
      var _capitalize = _interopRequireDefault(require_capitalize());
      var _isNode = _interopRequireDefault(require_isNode());
      var _isReactNative = _interopRequireDefault(require_isReactNative());
      var _isWindows = _interopRequireDefault(require_isWindows());
      var _makeArrayOfLength = _interopRequireDefault(require_makeArrayOfLength());
      var _makeArrayOfStrings = _interopRequireDefault(require_makeArrayOfStrings());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
    }
  });

  // node_modules/lorem-ipsum/dist/lib/generator.js
  var require_generator = __commonJS({
    "node_modules/lorem-ipsum/dist/lib/generator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _words = require_words();
      var _util = require_util();
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
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var Generator = /* @__PURE__ */ function() {
        function Generator2() {
          var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$sentencesPerPara = _ref.sentencesPerParagraph, sentencesPerParagraph = _ref$sentencesPerPara === void 0 ? {
            max: 7,
            min: 3
          } : _ref$sentencesPerPara, _ref$wordsPerSentence = _ref.wordsPerSentence, wordsPerSentence = _ref$wordsPerSentence === void 0 ? {
            max: 15,
            min: 5
          } : _ref$wordsPerSentence, random = _ref.random, seed = _ref.seed, _ref$words = _ref.words, words = _ref$words === void 0 ? _words.WORDS : _ref$words;
          _classCallCheck(this, Generator2);
          _defineProperty(this, "sentencesPerParagraph", void 0);
          _defineProperty(this, "wordsPerSentence", void 0);
          _defineProperty(this, "random", void 0);
          _defineProperty(this, "words", void 0);
          if (sentencesPerParagraph.min > sentencesPerParagraph.max) {
            throw new Error("Minimum number of sentences per paragraph (".concat(sentencesPerParagraph.min, ") cannot exceed maximum (").concat(sentencesPerParagraph.max, ")."));
          }
          if (wordsPerSentence.min > wordsPerSentence.max) {
            throw new Error("Minimum number of words per sentence (".concat(wordsPerSentence.min, ") cannot exceed maximum (").concat(wordsPerSentence.max, ")."));
          }
          this.sentencesPerParagraph = sentencesPerParagraph;
          this.words = words;
          this.wordsPerSentence = wordsPerSentence;
          this.random = random || Math.random;
        }
        _createClass(Generator2, [{
          key: "generateRandomInteger",
          value: function generateRandomInteger(min, max) {
            return Math.floor(this.random() * (max - min + 1) + min);
          }
        }, {
          key: "generateRandomWords",
          value: function generateRandomWords(num) {
            var _this = this;
            var _this$wordsPerSentenc = this.wordsPerSentence, min = _this$wordsPerSentenc.min, max = _this$wordsPerSentenc.max;
            var length = num || this.generateRandomInteger(min, max);
            return (0, _util.makeArrayOfLength)(length).reduce(function(accumulator, index) {
              return "".concat(_this.pluckRandomWord(), " ").concat(accumulator);
            }, "").trim();
          }
        }, {
          key: "generateRandomSentence",
          value: function generateRandomSentence(num) {
            return "".concat((0, _util.capitalize)(this.generateRandomWords(num)), ".");
          }
        }, {
          key: "generateRandomParagraph",
          value: function generateRandomParagraph(num) {
            var _this2 = this;
            var _this$sentencesPerPar = this.sentencesPerParagraph, min = _this$sentencesPerPar.min, max = _this$sentencesPerPar.max;
            var length = num || this.generateRandomInteger(min, max);
            return (0, _util.makeArrayOfLength)(length).reduce(function(accumulator, index) {
              return "".concat(_this2.generateRandomSentence(), " ").concat(accumulator);
            }, "").trim();
          }
        }, {
          key: "pluckRandomWord",
          value: function pluckRandomWord() {
            var min = 0;
            var max = this.words.length - 1;
            var index = this.generateRandomInteger(min, max);
            return this.words[index];
          }
        }]);
        return Generator2;
      }();
      var _default = Generator;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/lib/LoremIpsum.js
  var require_LoremIpsum = __commonJS({
    "node_modules/lorem-ipsum/dist/lib/LoremIpsum.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _formats = require_formats();
      var _lineEndings = require_lineEndings();
      var _generator = _interopRequireDefault(require_generator());
      var _util = require_util();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
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
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var LoremIpsum2 = /* @__PURE__ */ function() {
        function LoremIpsum3() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var format = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _formats.FORMAT_PLAIN;
          var suffix = arguments.length > 2 ? arguments[2] : void 0;
          _classCallCheck(this, LoremIpsum3);
          this.format = format;
          this.suffix = suffix;
          _defineProperty(this, "generator", void 0);
          if (_formats.FORMATS.indexOf(format.toLowerCase()) === -1) {
            throw new Error("".concat(format, " is an invalid format. Please use ").concat(_formats.FORMATS.join(" or "), "."));
          }
          this.generator = new _generator["default"](options);
        }
        _createClass(LoremIpsum3, [{
          key: "getLineEnding",
          value: function getLineEnding() {
            if (this.suffix) {
              return this.suffix;
            }
            if (!(0, _util.isReactNative)() && (0, _util.isNode)() && (0, _util.isWindows)()) {
              return _lineEndings.LINE_ENDINGS.WIN32;
            }
            return _lineEndings.LINE_ENDINGS.POSIX;
          }
        }, {
          key: "formatString",
          value: function formatString(str) {
            if (this.format === _formats.FORMAT_HTML) {
              return "<p>".concat(str, "</p>");
            }
            return str;
          }
        }, {
          key: "formatStrings",
          value: function formatStrings(strings) {
            var _this = this;
            return strings.map(function(str) {
              return _this.formatString(str);
            });
          }
        }, {
          key: "generateWords",
          value: function generateWords(num) {
            return this.formatString(this.generator.generateRandomWords(num));
          }
        }, {
          key: "generateSentences",
          value: function generateSentences(num) {
            return this.formatString(this.generator.generateRandomParagraph(num));
          }
        }, {
          key: "generateParagraphs",
          value: function generateParagraphs(num) {
            var makeString = this.generator.generateRandomParagraph.bind(this.generator);
            return this.formatStrings((0, _util.makeArrayOfStrings)(num, makeString)).join(this.getLineEnding());
          }
        }]);
        return LoremIpsum3;
      }();
      var _default = LoremIpsum2;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/index.js
  var require_dist = __commonJS({
    "node_modules/lorem-ipsum/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "LoremIpsum", {
        enumerable: true,
        get: function get() {
          return _LoremIpsum["default"];
        }
      });
      exports.loremIpsum = void 0;
      var _formats = require_formats();
      var _units = require_units();
      var _words = require_words();
      var _LoremIpsum = _interopRequireDefault(require_LoremIpsum());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var loremIpsum = function loremIpsum2() {
        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$count = _ref.count, count = _ref$count === void 0 ? 1 : _ref$count, _ref$format = _ref.format, format = _ref$format === void 0 ? _formats.FORMAT_PLAIN : _ref$format, _ref$paragraphLowerBo = _ref.paragraphLowerBound, paragraphLowerBound = _ref$paragraphLowerBo === void 0 ? 3 : _ref$paragraphLowerBo, _ref$paragraphUpperBo = _ref.paragraphUpperBound, paragraphUpperBound = _ref$paragraphUpperBo === void 0 ? 7 : _ref$paragraphUpperBo, random = _ref.random, _ref$sentenceLowerBou = _ref.sentenceLowerBound, sentenceLowerBound = _ref$sentenceLowerBou === void 0 ? 5 : _ref$sentenceLowerBou, _ref$sentenceUpperBou = _ref.sentenceUpperBound, sentenceUpperBound = _ref$sentenceUpperBou === void 0 ? 15 : _ref$sentenceUpperBou, _ref$units = _ref.units, units = _ref$units === void 0 ? _units.UNIT_SENTENCES : _ref$units, _ref$words = _ref.words, words = _ref$words === void 0 ? _words.WORDS : _ref$words, _ref$suffix = _ref.suffix, suffix = _ref$suffix === void 0 ? "" : _ref$suffix;
        var options = {
          random,
          sentencesPerParagraph: {
            max: paragraphUpperBound,
            min: paragraphLowerBound
          },
          words,
          wordsPerSentence: {
            max: sentenceUpperBound,
            min: sentenceLowerBound
          }
        };
        var lorem2 = new _LoremIpsum["default"](options, format, suffix);
        switch (units) {
          case _units.UNIT_PARAGRAPHS:
          case _units.UNIT_PARAGRAPH:
            return lorem2.generateParagraphs(count);
          case _units.UNIT_SENTENCES:
          case _units.UNIT_SENTENCE:
            return lorem2.generateSentences(count);
          case _units.UNIT_WORDS:
          case _units.UNIT_WORD:
            return lorem2.generateWords(count);
          default:
            return "";
        }
      };
      exports.loremIpsum = loremIpsum;
    }
  });

  // src/lib/loremIpsum.ts
  function loremSentence(number) {
    return lorem.generateSentences(number);
  }
  function loremParagraph(number) {
    return lorem.generateParagraphs(number);
  }
  var import_lorem_ipsum, lorem;
  var init_loremIpsum = __esm({
    "src/lib/loremIpsum.ts"() {
      import_lorem_ipsum = __toESM(require_dist());
      lorem = new import_lorem_ipsum.LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4
        },
        wordsPerSentence: {
          max: 16,
          min: 4
        }
      });
    }
  });

  // src/figma-elements/paragraph.ts
  function paragraphElement(data) {
    const width = data.artBoardWidth * (data.xMax - data.xMin);
    const height = data.artBoardHeight * (data.yMax - data.yMin);
    const frameProperties = {};
    const frame = frameElement(data, frameProperties);
    const TextProperties = {
      containerWidth: width,
      containerHeight: height,
      textAlignHorizontal: "JUSTIFIED"
    };
    const text = topAlignedTextElement(loremParagraph(1), TextProperties);
    text.constraints = frame.constraints;
    frame.appendChild(text);
    return frame;
  }
  var init_paragraph = __esm({
    "src/figma-elements/paragraph.ts"() {
      init_frame();
      init_topAlignedTextElement();
      init_loremIpsum();
    }
  });

  // src/figma-elements/text.ts
  function textElement(data) {
    const width = data.artBoardWidth * (data.xMax - data.xMin);
    const height = data.artBoardHeight * (data.yMax - data.yMin);
    const frameProperties = {
      stroke: 1
    };
    const frame = frameElement(data, frameProperties);
    const TextProperties = {
      containerWidth: width,
      containerHeight: height
    };
    const text = topAlignedTextElement(loremSentence(1), TextProperties);
    text.constraints = frame.constraints;
    frame.appendChild(text);
    return frame;
  }
  var init_text = __esm({
    "src/figma-elements/text.ts"() {
      init_frame();
      init_topAlignedTextElement();
      init_loremIpsum();
    }
  });

  // src/figma-elements/button.ts
  function buttonElement(data) {
    const width = data.artBoardWidth * (data.xMax - data.xMin);
    const height = data.artBoardHeight * (data.yMax - data.yMin);
    const frameProperties = {
      color: classMap[data.classType].color,
      cornerRadius: height / 2
    };
    const frame = frameElement(data, frameProperties);
    const TextProperties = {
      containerWidth: width,
      containerHeight: height
    };
    const text = centeredTextElement("Button", TextProperties);
    frame.appendChild(text);
    return frame;
  }
  var init_button = __esm({
    "src/figma-elements/button.ts"() {
      init_utils();
      init_frame();
      init_centeredTextElement();
    }
  });

  // src/figma-elements/image.ts
  async function imageElement(data, placeHolderArray) {
    const frameProperties = {};
    const frame = frameElement(data, frameProperties);
    const image = figma.createImage(placeHolderArray);
    const imageHash = image.hash;
    const rectangle = frameElement(data, frameProperties);
    rectangle.fills = [{ type: "IMAGE", scaleMode: "FILL", imageHash }];
    frame.appendChild(rectangle);
    return frame;
  }
  var init_image = __esm({
    "src/figma-elements/image.ts"() {
      init_frame();
    }
  });

  // src/figma-elements/squareFrame.ts
  function squareFrameElement(data, { color = white, opacity = 0.4, cornerRadius = 0, stroke = 0, strokeColor = black }) {
    const frame = figma.createFrame();
    const width = data.artBoardWidth * (data.xMax - data.xMin);
    const height = data.artBoardHeight * (data.yMax - data.yMin);
    const length = (width + height) / 2;
    frame.resize(length, length);
    frame.x = data.xMin * data.artBoardWidth + width / 2 - length / 2;
    frame.y = data.yMin * data.artBoardHeight + height / 2 - length / 2;
    frame.backgrounds = [];
    frame.fills = [{ type: "SOLID", color, opacity }];
    frame.strokeWeight = stroke;
    frame.strokes = [{ type: "SOLID", color: strokeColor, opacity }];
    frame.effects = [];
    frame.name = classMap[data.classType].name;
    frame.clipsContent = true;
    frame.cornerRadius = cornerRadius;
    frame.layoutMode = "HORIZONTAL";
    return frame;
  }
  var init_squareFrame = __esm({
    "src/figma-elements/squareFrame.ts"() {
      init_utils();
      init_colors();
    }
  });

  // src/figma-elements/userProfile.ts
  async function userProfileElement(data, placeHolderArray) {
    const frameProperties = {};
    const frame = squareFrameElement(data, frameProperties);
    frame.cornerRadius = frame.width;
    const image = figma.createImage(placeHolderArray);
    const imageHash = image.hash;
    const rectangle = squareFrameElement(data, frameProperties);
    rectangle.fills = [{ type: "IMAGE", scaleMode: "FILL", imageHash }];
    frame.appendChild(rectangle);
    return frame;
  }
  var init_userProfile = __esm({
    "src/figma-elements/userProfile.ts"() {
      init_squareFrame();
    }
  });

  // src/canvas.ts
  async function generateFigmaElement(predictionData, artBoardWidth, artBoardHeight, imgAssets) {
    const { boundingBoxData, classType } = predictionData;
    const [yMin, xMin, yMax, xMax] = boundingBoxData;
    const data = {
      yMin,
      xMin,
      yMax,
      xMax,
      artBoardWidth,
      artBoardHeight,
      classType
    };
    let element = null;
    switch (classType) {
      case 1 /* button */:
        element = buttonElement(data);
        break;
      case 13 /* backgroundFrame */:
        element = frameElement(data, {});
        break;
      case 2 /* image */:
        element = await imageElement(data, imgAssets.placeholderImage);
        break;
      case 4 /* text */:
        element = textElement(data);
        break;
      case 5 /* h1 */:
        element = h1Element(data);
        break;
      case 6 /* paragraph */:
        element = paragraphElement(data);
        break;
      case 7 /* userProfile */:
        const profileImages = imgAssets.profileImages;
        const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];
        element = await userProfileElement(data, randomImage);
        break;
      default:
        console.log(`classtype: ${classType}`);
        console.log(`type not created yet: ${elementType[classType]}`);
        break;
    }
    return Promise.resolve(element);
  }
  var init_canvas = __esm({
    "src/canvas.ts"() {
      init_utils();
      init_h1();
      init_paragraph();
      init_text();
      init_button();
      init_image();
      init_frame();
      init_userProfile();
    }
  });

  // src/lib/fonts.ts
  function fontsList() {
    return Object.values(fonts);
  }
  var fonts;
  var init_fonts = __esm({
    "src/lib/fonts.ts"() {
      fonts = {
        "inter": { family: "Inter", style: "Regular" },
        "interBold": { family: "Inter", style: "Bold" },
        "notoSerif": { family: "Noto Serif", style: "Regular" },
        "ibmPlexMono": { family: "IBM Plex Mono", style: "Regular" }
      };
    }
  });

  // src/main.ts
  var main_exports = {};
  __export(main_exports, {
    default: () => main_default
  });
  async function generateFigmaElements(data, artBoardWidth, artBoardHeight, imgAssets) {
    data.forEach(async (oneFrameData) => {
      await generateFigmaElement(oneFrameData, artBoardWidth, artBoardHeight, imgAssets);
    });
  }
  function artBoardData(artBoard) {
    const xMin = 0, yMin = 0, xMax = 1, yMax = 1;
    const whiteBackgroundFrameData = {
      "boundingBoxData": [yMin, xMin, yMax, xMax],
      "classType": 13,
      "scores": 1,
      "originalImageSize": artBoard.originalImageSize
    };
    return whiteBackgroundFrameData;
  }
  async function renderElementsOnScreen(predictionData, imgAssets) {
    const data = predictionData.predictionData;
    const artBoard = data[0];
    const artBoardWidth = artBoard.originalImageSize[1];
    const artBoardHeight = artBoard.originalImageSize[0];
    data.unshift(artBoardData(artBoard));
    return await generateFigmaElements(data, artBoardWidth, artBoardHeight, imgAssets);
  }
  function main_default() {
    Promise.all(fontsList().map((_) => figma.loadFontAsync(_)));
    once("SUBMIT", async function(predictionData, imgAssets) {
      renderElementsOnScreen(predictionData, imgAssets);
      figma.closePlugin();
    });
    showUI({ width: 320, height: 400 });
  }
  var init_main = __esm({
    "src/main.ts"() {
      init_lib();
      init_canvas();
      init_fonts();
    }
  });

  // <stdin>
  var modules = { "src/main.ts--default": (init_main(), __toCommonJS(main_exports))["default"] };
  var commandId = true ? "src/main.ts--default" : figma.command;
  modules[commandId]();
})();
