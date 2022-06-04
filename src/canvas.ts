import { PredictionDataInterface, BoundingBox, classMap, elementType } from "./utils";
import { h1Element } from "./figma-elements/h1";
// import { h2Element } from "./figma-elements/h2";
// import { paragraphElement } from "./figma-elements/paragraph";
// import { textElement } from "./figma-elements/text";
// import { navElement } from "./figma-elements/navbar";
import { buttonElement } from "./figma-elements/button";
// import { imageElement } from "./figma-elements/image";
// import { userProfileElement } from "./figma-elements/userProfile";
// import { checkboxElement } from "./figma-elements/checkbox";

//might input sizes for h1, h2, paragraph

export async function generateFigmaElement(predictionData: PredictionDataInterface, artBoardWidth:number, artBoardHeight:number): Promise<SceneNode|null> {

  // return h1Element(data, artBoardWidth, artBoardHeight)

  const { boundingBoxData, classType } = predictionData;
  const  [yMin, xMin, yMax, xMax] = boundingBoxData
  const data: BoundingBox ={
    yMin,
    xMin,
    yMax,
    xMax,
    artBoardWidth,
    artBoardHeight,
    classType
  }
  const black = { r: 0, g: 0, b: 0 }
  const fontSize = 10
  let element: SceneNode | null = null;
  switch(classType){
    case elementType.button:
      element = buttonElement(data)
      break;
    case elementType.backgroundFrame:
      element = buttonElement(data)
      break;
    // case elementType.image:
    //   element = imageElement(bBox)
    //   break;
    // case elementType.navBar:
    //   element = navElement(bBox)
    //   break;
    // case elementType.text:
    //   element = textElement(bBox)
    //   break;
    case elementType.h1:
      element = h1Element(data)
      break;
    // case elementType.paragraph:
    //   element = paragraphElement(bBox)
    //   break;
    // case elementType.userProfile:
    //   element = userProfileElement(bBox)
    //   break;
    // case elementType.checkbox:
    //   element = checkboxElement(bBox)
    //   break;
    default:
      console.log(`classtype: ${classType}`)
      console.log(`type not created yet: ${elementType[classType]}`)
      // element = buttonElement(bBox)
      break
  }

  return Promise.resolve(element)

  // const frame = figma.createFrame()
  // const text = figma.createText()
  // const width = artBoardWidth * (xMax - xMin)
  // const height = artBoardHeight * (yMax - yMin)

  // frame.resize(width, height)

  // frame.x = xMin * artBoardWidth
  // frame.y = yMin * artBoardHeight
  // frame.backgrounds = []
  // frame.fills = [{ type: 'SOLID', color: classMap[classType].color, opacity: 0.4 }]
  // frame.effects = []
  // frame.name = classMap[classType].name
  // frame.clipsContent = false
  // frame.cornerRadius = 10

  // text.textAlignHorizontal="CENTER"
  // // text.textAlignVertical="CENTER"
  // text.fontSize = fontSize
  // // text.x = width/2
  // // text.y = height/2 - fontSize/2
  // text.x = width/2
  // text.y = height/2 - fontSize/2
  // text.fills = [{ type: 'SOLID', color: black }]
  // text.characters = "hello"
  // frame.appendChild(text)
  // return Promise.resolve(frame)
}
