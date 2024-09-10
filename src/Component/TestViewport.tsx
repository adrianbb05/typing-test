import {TestText} from "./TestText.tsx";
import {selectRandomText} from "../utils/SelectRandomText.ts";
import {parseTextToTextChars, TextChar} from "../utils/ParseTextToTextChars.ts";

export function TestViewport() {
    const test1 = "public static void main";
    const test2 = "static void main";

    const existantTests: string[] = [test1, test2]

    const textToShow = selectRandomText(existantTests)

    const parsedTextToShow: TextChar[] = parseTextToTextChars(textToShow);

    return <div className={"TestViewPort"}>
        <TestText chars={parsedTextToShow}/>
    </div>
}