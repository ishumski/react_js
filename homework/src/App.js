import React from "react";
import HelloMessage from "./components/HelloMessage.js";
import Multiply from "./components/Multiply.js";
import ImageOrButton from "./components/ImageOrButton.js";

export default function App() {
    return (
        <div>
            <HelloMessage name={"Dovakin"} />
            <Multiply a={2} b={3} />
            <ImageOrButton isButton={true} />
        </div>
    )
}