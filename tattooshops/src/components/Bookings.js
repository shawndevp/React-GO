import React, {useState, useEffect} from 'react';
import axios from "axios";
import BookingsList from "./BookingsList";

function Bookings() {

    const [bookings, setBookings] = useState([])
    const [userId, setUserId] = useState(localStorage.getItem("userId"))
    const [token, setToken] = useState(localStorage.getItem("jwt"))

    useEffect(()=> {

        const fetchData = async ()=> {
           const res = await axios.get(`http://localhost:1337/bookings?users_permissions_user.id=${userId}`,
           {
           headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
           )
           
           setBookings(res.data)
        }

        fetchData()
    }, [])


    return (
        <div>
            <h1>Mina bokningar</h1>

            {bookings.map( (booking)=>{

return(
<BookingsList key={booking.id} name={booking.name} time={booking.time} />
    )
})
}
        </div>
    )
}

export default Bookings
