import React, {useState, useEffect} from 'react'
import axios from "axios";

function Profile() {

    const [username, setUsername] = useState();

    useEffect(() => {
        const fetchUsername = async () => {
            const response = await axios.get(
                `http://localhost:1337/users?username=${username}`
            );
            console.log(response)
        };
        fetchUsername();
    })

    return (
        <div>
           <p>ttetetetest</p>
           <div>this is {username}</div>
        </div>
    )
}

export default Profile