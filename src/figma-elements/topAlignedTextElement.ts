import { getRGBFromHex } from "../lib/colors";
import { TextProperties } from "../utils";

export function topAlignedTextElement(text: string, { containerWidth, containerHeight, fontName, textColor ="#FFFFFF", fontSize = 12, textAlignHorizontal = "CENTER",  }: TextProperties): TextNode {

    const rgbColor= getRGBFromHex(textColor);


    const textElement = figma.createText()
    textElement.fontName=fontName,
    textElement.textAlignHorizontal = "CENTER"
    textElement.resize(containerWidth, containerHeight)
    textElement.fontSize = fontSize
    textElement.x = 0
    textElement.y = containerHeight / 2 - fontSize / 2
    textElement.fills = [{ type: 'SOLID', color: rgbColor }]
    textElement.characters = text
    textElement.constrainProportions = true

    return textElement
}