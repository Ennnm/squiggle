import { BoundingBox, FrameProperties, classMap } from "../utils";
import { frameElement } from "./frame";
import { singleLineTextElement } from './singleLineText'

export function h1Element(data: BoundingBox): SceneNode {
    const width = data.artBoardWidth * (data.xMax - data.xMin)
    const height = data.artBoardHeight * (data.yMax - data.yMin)

    const frameProperties = {
        stroke:1
    }

    const frame: FrameNode = frameElement(data, frameProperties)

    const TextProperties ={
        containerWidth: width,
        containerHeight: height,
    }
    const text: TextNode = singleLineTextElement('Heading1', TextProperties)
    frame.appendChild(text)
    return frame;
}

export { }