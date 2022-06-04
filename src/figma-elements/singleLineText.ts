import { TextProperties } from "../utils";

export function singleLineTextElement (text: string, {containerWidth, containerHeight, textColor ={r:0, g:0, b:0}, fontSize = 12, textAlignHorizontal = "Center"}:TextProperties): TextNode {

    const textElement = figma.createText()
    textElement.textAlignHorizontal="CENTER"
    // textElement.textElementAlignVertical="CENTER"
    textElement.fontSize = fontSize
    textElement.x = containerWidth/2
    textElement.y = containerHeight/2 - fontSize/2
    textElement.fills = [{ type: 'SOLID', color: textColor }]
    textElement.characters = text
    return textElement
}