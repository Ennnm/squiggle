import { TextProperties } from "../utils";
import { black, getRGBFromHex } from "../lib/colors";

export function centeredTextElement(text: string, { containerWidth, containerHeight, fontName, textColor = black, fontSize = 12, textAlignHorizontal = "CENTER" }: TextProperties): TextNode {

    const rgbColor = getRGBFromHex(textColor);

    const textElement = figma.createText()
    textElement.fontName = fontName
    textElement.textAlignHorizontal = textAlignHorizontal
    textElement.textAlignVertical = "CENTER"
    textElement.resize(containerWidth, containerHeight)
    textElement.fontSize = fontSize
    textElement.x = 0
    textElement.y = 0
    textElement.fills = [{ type: 'SOLID', color: rgbColor }]
    textElement.characters = text
    textElement.constrainProportions = true

    return textElement
}