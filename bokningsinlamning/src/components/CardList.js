import React from 'react'
import Card from "./Card"


// const arrayObject = [

//     {productName="Korv", price="20kr"},
//     {productName="Korv2", price="30kr"},
//     {productName="Korv3", price="40kr"},
// ]

{/* {arrayObject.map(()=>{})} */}

function CardList() {
    return (
        <div>
            
            

            <Card productName="Glass" price="10kr"/>
            <Card productName="Mjukglass" price="15kr"/>
        </div>
    )
}

export default CardList
