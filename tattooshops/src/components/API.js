import React, { useEffect, useState } from 'react'
import axios from "axios";

function API() {

    const [data, setData] = useState([]);

    useEffect( ()=> {

        const FetchData = async()=> {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos/")
            console.log(response.data)
            const res = response.data

            setData(res)

        }
        FetchData()
    }, [] )

    return (
        <>

        {data.map( (singleData)=> {return <h1 key={singleData.userId}>{singleData.title}</h1>} )}
        <div>hello</div>

        </>
    )
}

export default API



// export default API

// Varje gång staten uppdateras renderas din component. Fetch triggas av responsen
// Varje gång component renderas körs useEffect

// state -> component-> useEffect

// useEffect kan ha en default value, som kan triggas av att någon data/state ändras.
// Default value kan vara en eller flera state. Om state ändras triggas useEffect.
// useEffect kan ha en return / unmount. 

// I class component går regeln så mycket som nedan
// state-> render/component -> componentDidMount -> componentWillUnmount

// Varingar att komma ihåg: Nr 1. useEffect( ()=> { } ) om man använder denna komma ens component
// inte veta när den ska trigga useEffect :: Oändlig "Loop"

// Nr 2. useEffect ( ()=> { }, [data] ) : [data] är en state som uppdateras av fetchData() :: Oändlig "Loop"

// Lösning -> useEffect( ()=> { }, [] )