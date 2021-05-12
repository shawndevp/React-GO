import React from 'react'
import people from "./logos/people.jpeg"

function Cart() {
    return (
        <>
<div className="w-screen h-screen flex justify-center items-center">
  <div className="container mx-auto max-w-sm w-full p-4 sm:w-1/2">
    <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
      <div className="prod-title">
        <p className="text-2xl uppercase text-gray-900 font-bold">Sven</p>
        <p className="uppercase text-sm text-gray-400">Oriental specialist
        </p>
      </div>
      <div className="prod-img">
        <img src={people}
             className="w-full object-cover object-center" />
      </div>
      <div className="prod-info grid gap-10">
        </div><br></br>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
          <p className="font-bold text-xl">1000kr</p>
          <button
            className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Boka</button>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}

export default Cart
