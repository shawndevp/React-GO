import React, { useState } from "react";
import people from "./logos/people.jpeg";

function Artists({artistName, price}) {
  console.log(artistName, price)
  return (
    <>

    <div>test: {artistName} </div>
      <div>test: {price} </div>

      <div className="flex flex-wrap mx-66">
        <div className="bg-white overflow-hidden border-b-4 border-blue-500 w-1/3">
          <img src={people} alt="People" className="w-full object-contain h-48" />
          <div className="p-4 md:p-6" />
          <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">
            {artistName}
          </p>
          <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">
            Good At:
          </h3>
          <div className="text-sm flex items-center" />
          <p className="leading-none">Since 2000</p>
        </div>

        <div className="bg-white overflow-hidden border-b-4 border-blue-500 w-1/3">
          <img src={people} alt="People" className="w-full object-contain h-48" />
          <div className="p-4 md:p-6" />
          <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">
            {artistName}
          </p>
          <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">
            Good At:
          </h3>
          <div className="text-sm flex items-center" />
          <p className="leading-none">Since 2000</p>
        </div>

        <div className="bg-white overflow-hidden border-b-4 border-blue-500 w-1/3">
          <img src={people} alt="People" className="w-full object-contain h-48" />
          <div className="p-4 md:p-6" />
          <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">
            Person Nr1
          </p>
          <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">
            Good At:
          </h3>
          <div className="text-sm flex items-center" />
          <p className="leading-none">Since 2000</p>
        </div>

        <div className="bg-white overflow-hidden border-b-4 border-blue-500 w-1/3">
          <img src={people} alt="People" className="w-full object-contain h-48" />
          <div className="p-4 md:p-6" />
          <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">
            Person Nr1
          </p>
          <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">
            Good At:
          </h3>
          <div className="text-sm flex items-center" />
          <p className="leading-none">Since 2000</p>
        </div>
      </div>

      
    </>
  );
}

export default Artists;
