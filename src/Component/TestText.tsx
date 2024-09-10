import {TextChar} from "../utils/ParseTextToTextChars.ts";
import {useEffect, useState} from "react";
import {addSplitter} from "../utils/AddSplitter.ts";
import {parseCharsToString} from "../utils/ParseCharsToString.ts";
import {onKeyEventHandler} from "../utils/OnKeyEventHandler.ts";

export interface TextChars {
    chars: TextChar[]
}

export function TestText(textChars: TextChars) {

    const textToReturn: TextChar[] = addSplitter(textChars)

    const [pressedKey, setPressedKey] = useState("")

    useEffect(() => {
        document.addEventListener("keydown", detectedKeyDown, true)
    }, [])

    const detectedKeyDown = (e: KeyboardEvent) => {
        setPressedKey(e.key)
    }

    onKeyEventHandler(textChars, pressedKey)

    const parsedChars = parseCharsToString(textToReturn);

    return <div className={"TestText"}>
        {parsedChars}
    </div>
}

