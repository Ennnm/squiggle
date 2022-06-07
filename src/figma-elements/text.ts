import { BoundingBox } from "../utils";
import { frameElement } from "./frame";
import { topAlignedTextElement } from './topAlignedTextElement'
import { loremSentence } from "../lib/loremIpsum";

export function textElement(data: BoundingBox, screenMode:any, fontSet:any): SceneNode {
    const width = data.artBoardWidth * (data.xMax - data.xMin)
    const height = data.artBoardHeight * (data.yMax - data.yMin)

    const frameProperties = {
        stroke:1

    }

    const frame: FrameNode = frameElement(data, frameProperties)

    const TextProperties ={
        containerWidth: width,
        containerHeight: height,
        textColor: screenMode.textColor,
        fontSize: 24,
        fontName: fontSet.body,
    }
    const text: TextNode = topAlignedTextElement(loremSentence(1), TextProperties)
    text.constraints=frame.constraints
    frame.appendChild(text)
    return frame;
}

export { }