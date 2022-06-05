import { PredictionDataInterface, BoundingBox, classMap, elementType } from "./utils";
import { h1Element } from "./figma-elements/h1";
// import { h2Element } from "./figma-elements/h2";
import { paragraphElement } from "./figma-elements/paragraph";
import { textElement } from "./figma-elements/text";
// import { navElement } from "./figma-elements/navbar";
import { buttonElement } from "./figma-elements/button";
import { imageElement } from "./figma-elements/image";
import { frameElement } from "./figma-elements/frame";
// import { userProfileElement } from "./figma-elements/userProfile";
// import { checkboxElement } from "./figma-elements/checkbox";

//might input sizes for h1, h2, paragraph
export async function generateFigmaElement(predictionData: PredictionDataInterface, artBoardWidth:number, artBoardHeight:number, placeHolderArray:any): Promise<SceneNode|null> {

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
  let element: SceneNode | null = null;
  switch(classType){
    case elementType.button:
      element = buttonElement(data)
      break;
    case elementType.backgroundFrame:
      element = frameElement(data,{})
      break;
    case elementType.image:
      element = await imageElement(data, placeHolderArray)
      break;
    // case elementType.navBar:
    //   element = navElement(bBox)
    //   break;
    case elementType.text:
      element = textElement(data)
      break;
    case elementType.h1:
      element = h1Element(data)
      break;
    case elementType.paragraph:
      element = paragraphElement(data)
      break;
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
}
