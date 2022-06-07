import { BoundingBox, classMap } from "../utils";
import { frameElement } from "./frame";
import { centeredTextElement } from './centeredTextElement'

export function buttonElement(data: BoundingBox, stylePreference:any): SceneNode {
    const width = data.artBoardWidth * (data.xMax - data.xMin)
    const height = data.artBoardHeight * (data.yMax - data.yMin)

    const frameProperties = {
        color: stylePreference.color,
        opacity:1.0,
        cornerRadius: height/2
    }

    const frame: FrameNode = frameElement(data, frameProperties)
    const TextProperties ={
        containerWidth: width,
        containerHeight: height,
        fontName: stylePreference.fontSet.body,
        textColor: stylePreference.screenMode.textColor,
    }
    const text: TextNode = centeredTextElement('Button', TextProperties)
    frame.appendChild(text)
    return frame;
}

export { }