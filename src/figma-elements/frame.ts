import { BoundingBox, FrameProperties, classMap } from "../utils";
import { black, getRGBFromHex, white } from "../lib/colors";
import hexRgb from "hex-rgb";

export function frameElement(data: BoundingBox, { color = white, opacity = 0, cornerRadius = 0, stroke = 0, strokeColor = black }: FrameProperties): FrameNode {
    const frame = figma.createFrame()
    const width = data.artBoardWidth * (data.xMax - data.xMin)
    const height = data.artBoardHeight * (data.yMax - data.yMin)

    const rgbColor= getRGBFromHex(color);
    const rgbStrokeColor= getRGBFromHex(strokeColor);
    interface RGB {
        readonly r: number
        readonly g: number
        readonly b: number
      }
    frame.resize(width, height)
    frame.x = data.xMin * data.artBoardWidth
    frame.y = data.yMin * data.artBoardHeight
    frame.backgrounds = []
    frame.fills = [{ type: 'SOLID', color:rgbColor, opacity }]
    frame.strokeWeight = stroke
    frame.strokes = [{ type: 'SOLID', color: rgbStrokeColor, opacity }]
    frame.effects = []
    frame.name = classMap[data.classType].name
    frame.clipsContent = true
    frame.cornerRadius = cornerRadius
    frame.layoutMode="HORIZONTAL"

    return frame
}