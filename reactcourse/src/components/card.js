import React, {useState} from "react";

function Card(props) {
    const [counter, setCounter] = useState(0);

    function changeState() {

        setCounter()
    }

    return(
        <>
        <div>
            <button onClick={()=> setCounter(counter + 1)}>+</button>
        </div>

        <button onClick={()=>setCounter(counter - 1)} >-</button>

        <div>{counter}</div>


        <div>
            <p>price: {props.price}</p>
            <p>Price: {props.Price}</p>
        </div>
        </>
    )
}


export default Card; 
