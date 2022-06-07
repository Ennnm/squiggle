import { BoundingBox, FrameProperties, classMap } from "../utils";
import { frameElement } from "./frame";
import { centeredTextElement } from "./centeredTextElement"
import { topAlignedTextElement } from './topAlignedTextElement'
import { loremParagraph } from "../lib/loremIpsum";

export function paragraphElement(data: BoundingBox, screenMode: any, fontSet: any): SceneNode {
    const width = data.artBoardWidth * (data.xMax - data.xMin)
    const height = data.artBoardHeight * (data.yMax - data.yMin)

    const frameProperties = {
    }

    const frame: FrameNode = frameElement(data, frameProperties)

    const TextProperties = {
        containerWidth: width,
        containerHeight: height,
        textAlignHorizontal:"JUSTIFIED" as  'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED',
        textColor: screenMode.textColor,
        fontSize: 24,
        fontName: fontSet.body,
    }
    const text: TextNode = topAlignedTextElement(loremParagraph(1), TextProperties)
    text.constraints = frame.constraints
    frame.appendChild(text)
    return frame;
}

export { }