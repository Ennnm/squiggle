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
  var classMap;
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
    }
  });

  // src/canvas.ts
  async function generateFigmaElement(data, artBoardWidth, artBoardHeight) {
    const { boundingBoxData, classType, originalImageSize } = data;
    const [yMin, xMin, yMax, xMax] = boundingBoxData;
    const black = { r: 0, g: 0, b: 0 };
    const fontSize = 10;
    const frame = figma.createFrame();
    const text = figma.createText();
    const width = artBoardWidth * (xMax - xMin);
    const height = artBoardHeight * (yMax - yMin);
    frame.resize(width, height);
    frame.x = xMin * artBoardWidth;
    frame.y = yMin * artBoardHeight;
    frame.backgrounds = [];
    frame.fills = [{ type: "SOLID", color: classMap[classType].color, opacity: 0.4 }];
    frame.effects = [];
    frame.name = classMap[classType].name;
    frame.clipsContent = false;
    frame.cornerRadius = 10;
    text.textAlignHorizontal = "CENTER";
    text.fontSize = fontSize;
    text.x = width / 2;
    text.y = height / 2 - fontSize / 2;
    text.fills = [{ type: "SOLID", color: black }];
    text.characters = "hello";
    frame.appendChild(text);
    return Promise.resolve(frame);
  }
  var init_canvas = __esm({
    "src/canvas.ts"() {
      init_utils();
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
