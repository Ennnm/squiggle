import { TextProperties } from "../utils";

export function singleLineTextElement(text: string, { containerWidth, containerHeight, textColor = { r: 0, g: 0, b: 0 }, fontSize = 12, textAlignHorizontal = "Center" }: TextProperties): TextNode {

    const textElement = figma.createText()
    textElement.textAlignHorizontal = "CENTER"
    // textElement.textElementAlignVertical="CENTER"
    textElement.resize(containerWidth, containerHeight)
    textElement.fontSize = fontSize
    textElement.x = 0
    textElement.y = 0
    // textElement.x = containerWidth / 2
    textElement.y = containerHeight / 2 - fontSize / 2
    textElement.fills = [{ type: 'SOLID', color: textColor }]
    textElement.characters = text
    textElement.constrainProportions = true
    return textElement
}