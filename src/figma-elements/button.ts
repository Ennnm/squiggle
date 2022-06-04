import { BoundingBox, FrameProperties, classMap } from "../utils";
import { frameElement } from "./frame";
import { centeredTextElement } from './centeredTextElement'


export function buttonElement(data: BoundingBox): SceneNode {
    const width = data.artBoardWidth * (data.xMax - data.xMin)
    const height = data.artBoardHeight * (data.yMax - data.yMin)

    const frameProperties = {
        color: classMap[data.classType].color,
        cornerRadius: height/2
    }

    const frame: FrameNode = frameElement(data, frameProperties)
    const TextProperties ={
        containerWidth: width,
        containerHeight: height,
    }
    const text: TextNode = centeredTextElement('Button', TextProperties)
    frame.appendChild(text)
    return frame;
}

export { }