import {TextChar} from "../utils/ParseTextToTextChars.ts";
import {onKeyEventHandler} from "../utils/OnKeyEventHandler.ts";
import {useState} from "react";

export interface TextChars {
    chars: TextChar[]
}

export function TestText(textChars: TextChars) {
    const [pressedKey, setPressedKey] = useState("");

    const onPressedKey = (e) => {
        setPressedKey(e.key);
    };

    const charTsx = []

    for (let charIndex = 0; charIndex < textChars.chars.length; charIndex++) {
        const actualChar = textChars.chars[charIndex];
        charTsx.push(
            <div className={"Character"} key={"C" + charIndex}>
                {actualChar.char}
            </div>
        )
    }

    onKeyEventHandler(textChars, pressedKey)

    return <div className={"TestText"}>
        <div>
            {charTsx}
        </div>

        <div className={"InputField"}>
            <input onKeyDown={onPressedKey}/>
        </div>
    </div>
}


