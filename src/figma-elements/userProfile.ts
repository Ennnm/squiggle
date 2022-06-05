import { BoundingBox } from "../utils";
import { frameElement } from "./frame";
import { squareFrameElement } from "./squareFrame";

export async function userProfileElement(data: BoundingBox, placeHolderArray:any): Promise<SceneNode> {
    const frameProperties = {
    }

    const frame: FrameNode = squareFrameElement(data, frameProperties)
    frame.cornerRadius=frame.width
    const image = figma.createImage(placeHolderArray);
    const imageHash = image.hash
    const rectangle = squareFrameElement(data, frameProperties)
    rectangle.fills = [{type:'IMAGE', scaleMode:'FILL', imageHash:imageHash}]
    frame.appendChild(rectangle)
    return frame;
}

export { }