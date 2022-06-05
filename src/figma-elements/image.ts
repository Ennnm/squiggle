import { BoundingBox } from "../utils";
import { frameElement } from "./frame";

export async function imageElement(data: BoundingBox, placeHolderArray:any): Promise<SceneNode> {
    const frameProperties = {
    }

    const frame: FrameNode = frameElement(data, frameProperties)
    const image = figma.createImage(placeHolderArray);
    const imageHash = image.hash
    const rectangle = frameElement(data, frameProperties)
    rectangle.fills = [{type:'IMAGE', scaleMode:'FILL', imageHash:imageHash}]
    frame.appendChild(rectangle)
    return frame;
}

export { }