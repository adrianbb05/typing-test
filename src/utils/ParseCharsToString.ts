import {TextChar} from "./ParseTextToTextChars.ts";

export function parseCharsToString(textChars: TextChar[]) {
    let newString = ""

    for (const char of textChars) {
        newString += char.char
    }

    return newString
}