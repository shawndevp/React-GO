import React from 'react'

function BookingsList({name, time, mobile, artists}) {
    return (
        <div><br/>
            Name : {name}<br/>
            Time : {time}<br/>
            Phone Number : {mobile}<br/>
            Artist : {artists}
        </div>
    )
}

export default BookingsList
