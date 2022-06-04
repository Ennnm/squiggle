import { BoundingBox, FrameProperties, classMap } from "../utils";
import { black, white } from "../lib/colors";
export function frameElement(data: BoundingBox, { color = white, opacity = 0.4, cornerRadius = 0, stroke = 0, strokeColor = black }: FrameProperties): FrameNode {


    const frame = figma.createFrame()
    const width = data.artBoardWidth * (data.xMax - data.xMin)
    const height = data.artBoardHeight * (data.yMax - data.yMin)

    frame.resize(width, height)
    frame.x = data.xMin * data.artBoardWidth
    frame.y = data.yMin * data.artBoardHeight
    frame.backgrounds = []
    frame.fills = [{ type: 'SOLID', color, opacity }]
    frame.strokeWeight = stroke
    frame.strokes = [{ type: 'SOLID', color: strokeColor, opacity }]
    frame.effects = []
    frame.name = classMap[data.classType].name
    frame.clipsContent = true
    frame.cornerRadius = cornerRadius
    frame.layoutMode="HORIZONTAL"

    return frame
}