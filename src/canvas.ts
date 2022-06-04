import { PredictionDataInterface, classMap } from "./utils";

export async function generateFigmaElement(data: PredictionDataInterface, artBoardWidth:number, artBoardHeight:number): Promise<SceneNode> {

  const { boundingBoxData, classType, originalImageSize } = data;
  const  [yMin, xMin, yMax, xMax] = boundingBoxData

  const frame = figma.createFrame()
  // why is bounding box  data in  array of 4, 2 points in one array? []
  // is the number from 0-1 (normalised)
  // [y1, x1, y2, x2]
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


  // const { dominantColor, palette, suggestedTextColors } = data

  // const swatchSize = 44
  // const labelTopMargin = 24
  // const labelHeight = 12
  // const labelBottomMargin = 8 + labelHeight
  // const swatchGap = 12
  // const maxWidth = 300
  // const maxImagePreviewHeight = 300
  // const leftMargin = 16
  // const black = { r: 0, g: 0, b: 0 }
  // const white = { r: 1, g: 1, b: 1 }
  // const paletteCornerRadius = 6

  // const imagePreviewInset = 16
  // const imageBoundsHeight = node.height > maxImagePreviewHeight
  // ? maxImagePreviewHeight
  // : node.height + (imagePreviewInset * 2) > maxImagePreviewHeight
  // ? maxImagePreviewHeight
  // : node.height + (imagePreviewInset * 2)
  
  // const contentStartY = imageBoundsHeight + labelTopMargin
  // const totalHeight = imageBoundsHeight + ((labelTopMargin + labelBottomMargin + swatchSize) * 3) + leftMargin

  // const sf = { family: 'SF Pro Text', style: 'Bold'}
  // const roboto = { family: 'Roboto', style: 'Bold' }
  // const fonts = await figma.listAvailableFontsAsync()
  // const hasSf = fonts.find(({ fontName}) => fontName.family === sf.family && fontName.style === sf.style)
  // hasSf ? await figma.loadFontAsync(sf) : await figma.loadFontAsync(roboto)

  

  // const background = figma.createRectangle()
  // frame.appendChild(background)
  // background.x = 0
  // background.y = 0
  // background.resize(maxWidth, totalHeight)
  // background.cornerRadius = paletteCornerRadius
  // background.fills = [{ color: white, type: 'SOLID' }]
  // background.effects = [{ type: 'DROP_SHADOW', visible: true, blendMode: "NORMAL", radius: 12, offset: { x: 0, y: 2 }, color: { ...black, a: 0.16 }}]

  // const imageBackground = figma.createRectangle()
  // imageBackground.y = 0
  // imageBackground.topLeftRadius = paletteCornerRadius
  // imageBackground.topRightRadius = paletteCornerRadius
  // imageBackground.resize(maxWidth, imageBoundsHeight)
  // imageBackground.fills = [{ type: 'SOLID', color: dominantColor, opacity: 0.08 }]
  // imageBackground.effects = [{ type: 'INNER_SHADOW', visible: true, blendMode: "NORMAL", radius: 0, offset: { x: 0, y: -1 }, color: { ...black, a: 0.08 }}]

  // const imageBounds = figma.createRectangle()
  // imageBounds.name = "Source image"

  // frame.appendChild(imageBackground)
  // frame.appendChild(imageBounds)

  // const paint = getFirstImagePaintFromNode(node)
  // imageBounds.fills = [ paint]
  // imageBounds.cornerRadius = node.cornerRadius
  // imageBounds.resize(node.width >= maxWidth ? maxWidth : node.width, node.height <= maxImagePrevie       wHeight ? node.height : maxImagePreviewHeight)
  // imageBounds.y = node.height >= maxImagePreviewHeight
  //   ? 0
  //   : node.height + imagePreviewInset >= maxImagePreviewHeight
  //     ? (maxImagePreviewHeight - node.height) / 2
  //     : imagePreviewInset
  // imageBounds.x = node.width >= maxWidth
  //   ? 0
  //   : (maxWidth - node.width) / 2
  

  // const label = figma.createText()
  // label.name = "Label"
  // label.fontName = hasSf ? sf : roboto
  // label.fills = [{ type: 'SOLID', color: black }]
  // label.fontSize = 10
  
  // const dominantLabel = label
  // dominantLabel.characters = "DOMINANT COLOR"
  // dominantLabel.y = contentStartY
  // dominantLabel.x = leftMargin
  
  // const recommendedTextLabel = dominantLabel.clone()
  // recommendedTextLabel.characters = "RECOMMENDED TEXT COLOR"
  // recommendedTextLabel.y = dominantLabel.y + labelBottomMargin + swatchSize + labelTopMargin

  // const paletteLabel = recommendedTextLabel.clone()
  // paletteLabel.characters = "PALETTE"
  // paletteLabel.y = recommendedTextLabel.y + labelBottomMargin + swatchSize + labelTopMargin

  // frame.appendChild(dominantLabel)
  // frame.appendChild(recommendedTextLabel)
  // frame.appendChild(paletteLabel)

  return Promise.resolve(frame)
}