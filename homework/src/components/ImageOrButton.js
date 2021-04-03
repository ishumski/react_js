import React from "react";
// import Img from "../../public/images/img.jpg";
//<img src={Img} alt="hedgehog" /> - когда писал вот так, то webpack ругался, что есть какие-то недопустимык символы

export default function ImageOrButton({ isButton }) {
    return (
        (isButton === true) ? (
            <button>Click</button>
        ) : (
            <img src="../../public/images/img.jpg" alt="hedgehog" />
        )
    );
}