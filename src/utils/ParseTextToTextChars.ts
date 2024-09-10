export interface TextChar {
    char: string,
    isCurrentChar: boolean
}

export function parseTextToTextChars(text: string) {
    const splitText = text.split("")
    const chars: TextChar[] = []

    function isFirstCharacter(char: string) {
        return splitText[0] === char;
    }

    for (const char of splitText) {
        if (isFirstCharacter(char)) {
            chars.push({
                char: char,
                isCurrentChar: true
            })
        } else {
            chars.push({
                char: char,
                isCurrentChar: false
            })
        }
    }

    return chars

}