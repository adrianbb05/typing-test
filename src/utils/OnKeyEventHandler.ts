import {TextChars} from "../Component/TestText.tsx";

export function onKeyEventHandler(textChars: TextChars, pressedKey: string) {

    function setNextCharAsCurrent(charIndex: number) {
        const textChar = textChars.chars[charIndex];
        if (textChar !== undefined) {
            textChar.isCurrentChar = true;
        }
        return charIndex;
    }

    for (let charIndex = 0; charIndex < textChars.chars.length; charIndex++) {
        const textChar = textChars.chars[charIndex]
        if (textChar.isCurrentChar && (textChar.char === pressedKey)) {
            textChar.isCurrentChar = false;
            charIndex = setNextCharAsCurrent(charIndex + 1);
        }
    }
}