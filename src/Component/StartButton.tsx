import {useState} from "react";
import {TestViewport} from "./TestViewport.tsx";


export function StartButton() {

    const [startTest, setStartTest] = useState(false)

    if (!startTest) {
        return <>
            <button onClick={() => setStartTest(true)}>START</button>
        </>
    } else {
        return <>
            <TestViewport/>
        </>
    }
}