import { PredictionDataInterface, BoundingBox, classMap, elementType, ImageAssets } from "./utils";
import { h1Element } from "./figma-elements/h1";
// import { h2Element } from "./figma-elements/h2";
import { paragraphElement } from "./figma-elements/paragraph";
import { textElement } from "./figma-elements/text";
// import { navElement } from "./figma-elements/navbar";
import { buttonElement } from "./figma-elements/button";
import { imageElement } from "./figma-elements/image";
import { frameElement } from "./figma-elements/frame";
import { userProfileElement } from "./figma-elements/userProfile";
// import { userProfileElement } from "./figma-elements/userProfile";
// import { checkboxElement } from "./figma-elements/checkbox";

//might input sizes for h1, h2, paragraph
export async function generateFigmaElement(predictionData: PredictionDataInterface, artBoardWidth: number, artBoardHeight: number, imgAssets: ImageAssets, stylePreference: any): Promise<SceneNode | null> {

  const { boundingBoxData, classType } = predictionData;
  const [yMin, xMin, yMax, xMax] = boundingBoxData;
  const { screenMode, color, fontSet } = stylePreference;

  const data: BoundingBox = {
    yMin,
    xMin,
    yMax,
    xMax,
    artBoardWidth,
    artBoardHeight,
    classType
  }
  let element: SceneNode | null = null;
  switch (classType) {
    case elementType.button:
      element = buttonElement(data, stylePreference)
      break;
    case elementType.backgroundFrame:
      element = frameElement(data, { color: screenMode.backgroundColor, opacity:1.0 })
      break;
    case elementType.image:
      element = await imageElement(data, imgAssets.placeholderImage)
      break;
    // case elementType.navBar:
    //   element = navElement(bBox)
    //   break;
    case elementType.text:
      element = textElement(data, screenMode, fontSet)
      break;
    case elementType.h1:
      element = h1Element(data, screenMode, fontSet)
      break;
    case elementType.paragraph:
      element = paragraphElement(data, screenMode, fontSet)
      break;
    case elementType.userProfile:
      const profileImages = imgAssets.profileImages
      const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)]
      element = await userProfileElement(data, randomImage)
      break;
    // case elementType.checkbox:
    //   element = checkboxElement(bBox)
    //   break;
    default:
      console.log(`classtype: ${classType}`)
      console.log(`type not created yet: ${elementType[classType]}`)
      break
  }

  return Promise.resolve(element)
}
