import { PredictionDataInterface, classMap } from "../utils";

export function checkboxElement(data: PredictionDataInterface, artBoardWidth:number, artBoardHeight:number): SceneNode{

  const { boundingBoxData, classType, originalImageSize } = data;
  const  [yMin, xMin, yMax, xMax] = boundingBoxData
  const black = { r: 0, g: 0, b: 0 }
  const fontSize = 10

  const frame = figma.createFrame()
  const text = figma.createText()
  const width = artBoardWidth * (xMax - xMin)
  const height = artBoardHeight * (yMax - yMin)

  frame.resize(width, height)

  frame.x = xMin * artBoardWidth
  frame.y = yMin * artBoardHeight
  frame.backgrounds = []
  frame.fills = [{ type: 'SOLID', color: classMap[classType].color, opacity: 0.4 }]
  frame.effects = []
  frame.name = classMap[classType].name
  frame.clipsContent = false
  frame.cornerRadius = 10

  text.textAlignHorizontal="CENTER"
  // text.textAlignVertical="CENTER"
  text.fontSize = fontSize
  // text.x = width/2
  // text.y = height/2 - fontSize/2
  text.x = width/2
  text.y = height/2 - fontSize/2
  text.fills = [{ type: 'SOLID', color: black }]
  text.characters = "hello"
  frame.appendChild(text)
  return frame
}
export {}