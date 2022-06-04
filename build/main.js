(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
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

  // src/colors.ts
  var black, white;
  var init_colors = __esm({
    "src/colors.ts"() {
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
    console.log(`color: ${color.r}`);
    console.log(`stroke: ${stroke}`);
    frame.x = data.xMin * data.artBoardWidth;
    frame.y = data.yMin * data.artBoardHeight;
    frame.backgrounds = [];
    frame.fills = [{ type: "SOLID", color, opacity }];
    frame.strokeWeight = stroke;
    frame.strokes = [{ type: "SOLID", color: strokeColor, opacity }];
    frame.effects = [];
    frame.name = classMap[data.classType].name;
    frame.clipsContent = false;
    frame.cornerRadius = cornerRadius;
    return frame;
  }
  var init_frame = __esm({
    "src/figma-elements/frame.ts"() {
      init_utils();
      init_colors();
    }
  });

  // src/figma-elements/singleLineText.ts
  function singleLineTextElement(text, { containerWidth, containerHeight, textColor = { r: 0, g: 0, b: 0 }, fontSize = 12, textAlignHorizontal = "Center" }) {
    const textElement = figma.createText();
    textElement.textAlignHorizontal = "CENTER";
    textElement.fontSize = fontSize;
    textElement.x = containerWidth / 2;
    textElement.y = containerHeight / 2 - fontSize / 2;
    textElement.fills = [{ type: "SOLID", color: textColor }];
    textElement.characters = text;
    return textElement;
  }
  var init_singleLineText = __esm({
    "src/figma-elements/singleLineText.ts"() {
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
    const text = singleLineTextElement("Heading1", TextProperties);
    frame.appendChild(text);
    return frame;
  }
  var init_h1 = __esm({
    "src/figma-elements/h1.ts"() {
      init_frame();
      init_singleLineText();
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
    const text = singleLineTextElement("Button", TextProperties);
    frame.appendChild(text);
    return frame;
  }
  var init_button = __esm({
    "src/figma-elements/button.ts"() {
      init_utils();
      init_frame();
      init_singleLineText();
    }
  });

  // src/canvas.ts
  async function generateFigmaElement(predictionData, artBoardWidth, artBoardHeight) {
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
    const black2 = { r: 0, g: 0, b: 0 };
    const fontSize = 10;
    let element = null;
    switch (classType) {
      case 1 /* button */:
        element = buttonElement(data);
        break;
      case 13 /* backgroundFrame */:
        element = buttonElement(data);
        break;
      case 5 /* h1 */:
        element = h1Element(data);
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
      init_button();
    }
  });

  // src/main.ts
  var main_exports = {};
  __export(main_exports, {
    default: () => main_default
  });
  async function generateFigmaElements(data, artBoardWidth, artBoardHeight) {
    data.forEach(async (oneFrameData) => {
      await generateFigmaElement(oneFrameData, artBoardWidth, artBoardHeight);
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
  async function renderElementsOnScreen(predictionData) {
    const data = predictionData.predictionData;
    const artBoard = data[0];
    const artBoardWidth = artBoard.originalImageSize[1];
    const artBoardHeight = artBoard.originalImageSize[0];
    data.unshift(artBoardData(artBoard));
    return await generateFigmaElements(data, artBoardWidth, artBoardHeight);
  }
  function main_default() {
    once("SUBMIT", async function(predictionData) {
      const roboto = { family: "Roboto", style: "Bold" };
      const inter = { family: "Inter", style: "Regular" };
      const fonts = [roboto, inter];
      await Promise.all(fonts.map((_) => figma.loadFontAsync(_)));
      renderElementsOnScreen(predictionData);
      figma.closePlugin();
    });
    showUI({ width: 320, height: 240 });
  }
  var init_main = __esm({
    "src/main.ts"() {
      init_lib();
      init_canvas();
    }
  });

  // <stdin>
  var modules = { "src/main.ts--default": (init_main(), __toCommonJS(main_exports))["default"] };
  var commandId = true ? "src/main.ts--default" : figma.command;
  modules[commandId]();
})();
