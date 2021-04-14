import React from "react";

function Card(props) {
    return(
        <>
        <div>
            <p>Name: {props.name} </p>
        </div>

        <div>
            <p>Price: {props.price}</p>
            <p>Price: {props.Price}</p>
        </div>
        </>
    )
}


export default Card; 
