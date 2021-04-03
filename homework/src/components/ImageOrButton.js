import React from "react";
import Img from "../../public/images/img.jpg";

export default function ImageOrButton({ isButton }) {
    return (
        (isButton === true) ? (
            <button>Click</button>
        ) : (
            <img src={Img} alt="hedgehog" />
        )
    );
}