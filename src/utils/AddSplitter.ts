import {TextChar} from "./ParseTextToTextChars.ts";
import {TextChars} from "../Component/TestText.tsx";

export function addSplitter(textChars: TextChars) {

    const splitText: TextChar[] = []

    for (let charIndex = 0; charIndex < textChars.chars.length; charIndex++) {
        const currentChar: TextChar = textChars.chars[charIndex];
        if (currentChar.isCurrentChar) {
            splitText.push({
                char: "|",
                isCurrentChar: false
            })
            splitText.push(currentChar)
        } else {
            splitText.push(currentChar)
        }
    }

    return splitText
}