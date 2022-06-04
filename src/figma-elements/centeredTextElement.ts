import { TextProperties } from "../utils";
import { black } from "../lib/colors";

export function centeredTextElement(text: string, { containerWidth, containerHeight, textColor = black, fontSize = 12, textAlignHorizontal = "CENTER" }: TextProperties): TextNode {

    const textElement = figma.createText()
    textElement.textAlignHorizontal = textAlignHorizontal
    textElement.textAlignVertical="CENTER"
    textElement.resize(containerWidth, containerHeight)
    textElement.fontSize = fontSize
    textElement.x = 0
    textElement.y = 0
    textElement.fills = [{ type: 'SOLID', color: textColor }]
    textElement.characters = text
    textElement.constrainProportions = true

    return textElement
}