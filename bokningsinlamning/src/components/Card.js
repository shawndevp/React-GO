import React from "react";



function Card({productName, price}) {
    return (
        <>
        <div>{productName}</div>
        <div>{price}</div>
        </>
    )
}

export default Card;