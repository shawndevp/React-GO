import React from 'react'
import axios from "axios";

function API() {

    async function FetchData(){
        //async await behövs för det tar dit för data att komma in


      const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")

      console.log(response)


    }

    return (
        <div>
            {/*Bad practice, just testing*/}
            <button onClick={FetchData}>Click here to see data</button><br></br><br></br>
            Detta är API
        </div>
    )
}

export default API
