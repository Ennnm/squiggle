(()=>{var s=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var a=(o,e)=>()=>(o&&(e=o(o=0)),e);var v=(o,e)=>{for(var r in e)s(o,r,{get:e[r],enumerable:!0})},B=(o,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of _(e))!w.call(o,t)&&t!==r&&s(o,t,{get:()=>e[t],enumerable:!(n=C(e,t))||n.enumerable});return o};var P=o=>B(s({},"__esModule",{value:!0}),o);function g(o,e){let r=`${l}`;return l+=1,i[r]={handler:e,name:o},function(){delete i[r]}}function c(o,e){let r=!1;return g(o,function(...n){r!==!0&&(r=!0,e(...n))})}function u(o,e){for(let r in i)i[r].name===o&&i[r].handler.apply(null,e)}var i,l,x=a(()=>{i={},l=0;typeof window=="undefined"?figma.ui.onmessage=function([o,...e]){u(o,e)}:window.onmessage=function(o){let[e,...r]=o.data.pluginMessage;u(e,r)}});async function d(o){let e={};for(let r of o)switch(r.type){case"CONNECTOR":case"SHAPE_WITH_TEXT":case"STICKY":{h(r.text,e);break}case"TEXT":{h(r,e);break}}await Promise.all(Object.values(e).map(function(r){return figma.loadFontAsync(r)}))}function h(o,e){let r=o.characters.length;if(r===0){let t=o.fontName,m=y(t);if(m in e)return;e[m]=t;return}let n=-1;for(;++n<r;){let t=o.getRangeFontName(n,n+1),m=y(t);m in e||(e[m]=t)}}function y(o){return`${o.family}-${o.style}`}var M=a(()=>{});function f(o,e){if(typeof __html__=="undefined")throw new Error("No UI defined");let r=`<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command=="undefined"?"":figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof e=="undefined"?{}:e)};${__html__}<\/script>`;figma.showUI(r,o)}var b=a(()=>{});var I=a(()=>{x();M();b()});var p,N=a(()=>{p={1:{name:"Button",color:{r:Math.random(),g:Math.random(),b:Math.random()}},2:{name:"Image",color:{r:Math.random(),g:Math.random(),b:Math.random()}},3:{name:"Navbar",color:{r:Math.random(),g:Math.random(),b:Math.random()}},4:{name:"Text",color:{r:Math.random(),g:Math.random(),b:Math.random()}},5:{name:"H1",color:{r:Math.random(),g:Math.random(),b:Math.random()}},6:{name:"Paragraph",color:{r:Math.random(),g:Math.random(),b:Math.random()}},7:{name:"User Profile",color:{r:Math.random(),g:Math.random(),b:Math.random()}},8:{name:"Checkbox",color:{r:Math.random(),g:Math.random(),b:Math.random()}},9:{name:"Video",color:{r:Math.random(),g:Math.random(),b:Math.random()}},10:{name:"Divider",color:{r:Math.random(),g:Math.random(),b:Math.random()}},11:{name:"Input Field",color:{r:Math.random(),g:Math.random(),b:Math.random()}},12:{name:"Ahref",color:{r:Math.random(),g:Math.random(),b:Math.random()}}}});async function D(o){let{boundingBoxData:e,classType:r,originalImageSize:n}=o,t=figma.createFrame();return t.resize(n[1]*(e[3]-e[1]),n[0]*(e[2]-e[0])),t.x=e[1]*n[1],t.y=e[0]*n[0],t.backgrounds=[],t.fills=[{type:"SOLID",color:p[r].color,opacity:.4}],t.effects=[],t.name=p[r].name,t.clipsContent=!1,Promise.resolve(t)}var S=a(()=>{N()});var T={};v(T,{default:()=>E});function E(){c("INSERT_CODE",async function(e){let r=figma.createText();await d([r]),r.characters=e,figma.closePlugin()});async function o(){let e=O.predictionData;return new Promise(r=>{async function n(){e.forEach(async t=>{await D(t)})}return n(),Promise.resolve()})}f({width:320,height:240}),o()}var U,O,A=a(()=>{I();S();U='{"predictionData": [{"boundingBoxData": [0.38072896003723145, 0.6905229091644287, 0.5150967836380005, 0.8514686822891235], "classType": 2, "scores": 0.99987197, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.6248313784599304, 0.2969505488872528, 0.6723523736000061, 0.47123590111732483], "classType": 1, "scores": 0.9997974, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.3608032763004303, 0.1245875209569931, 0.5731380581855774, 0.6217753887176514], "classType": 4, "scores": 0.9319813, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.3536428213119507, 0.16401392221450806, 0.3809615969657898, 0.47538936138153076], "classType": 4, "scores": 0.916432, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.2463640719652176, 0.2961253523826599, 0.2818011939525604, 0.611268937587738], "classType": 5, "scores": 0.8986228, "originalImageSize": [1188, 864]}]}',O=JSON.parse(U)});var F={"src/main.ts--default":(A(),P(T)).default},H="src/main.ts--default";F[H]();})();