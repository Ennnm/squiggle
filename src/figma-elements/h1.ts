import { BoundingBox, FrameProperties, classMap } from "../utils";
import { frameElement } from "./frame";
import { centeredTextElement } from './centeredTextElement'

export function h1Element(data: BoundingBox, screenMode: any, fontSet: any): SceneNode {
    const width = data.artBoardWidth * (data.xMax - data.xMin)
    const height = data.artBoardHeight * (data.yMax - data.yMin)

    const frameProperties = {
        stroke: 1,
        clipsContent:false
    }

    const frame: FrameNode = frameElement(data, frameProperties)
    console.log(screenMode)
    const TextProperties = {
        containerWidth: width,
        containerHeight: height,
        textColor: screenMode.textColor,
        fontSize: 48,
        fontName: fontSet.heading,
    }
    const text: TextNode = centeredTextElement('Heading', TextProperties)
    frame.appendChild(text)
    return frame;
}

export { }