import React from "react";
import people from "./logos/people.jpeg";

function Artister() {
  return (
    <>
      <div class="flex flex-wrap mx-66">
        <div class="bg-white overflow-hidden border-b-4 border-blue-500 w-1/3">
          <img src={people} alt="People" class="w-full object-contain h-48" />
          <div class="p-4 md:p-6" />
          <p class="text-blue-500 font-semibold text-xs mb-1 leading-none">
            Person Nr1
          </p>
          <h3 class="font-semibold mb-2 text-xl leading-tight sm:leading-normal">
            Good At:
          </h3>
          <div class="text-sm flex items-center" />
          <p class="leading-none">Since 2000</p>
        </div>

        <div class="bg-white overflow-hidden border-b-4 border-blue-500 w-1/3">
          <img src={people} alt="People" class="w-full object-contain h-48" />
          <div class="p-4 md:p-6" />
          <p class="text-blue-500 font-semibold text-xs mb-1 leading-none">
            Person Nr1
          </p>
          <h3 class="font-semibold mb-2 text-xl leading-tight sm:leading-normal">
            Good At:
          </h3>
          <div class="text-sm flex items-center" />
          <p class="leading-none">Since 2000</p>
        </div>

        <div class="bg-white overflow-hidden border-b-4 border-blue-500 w-1/3">
          <img src={people} alt="People" class="w-full object-contain h-48" />
          <div class="p-4 md:p-6" />
          <p class="text-blue-500 font-semibold text-xs mb-1 leading-none">
            Person Nr1
          </p>
          <h3 class="font-semibold mb-2 text-xl leading-tight sm:leading-normal">
            Good At:
          </h3>
          <div class="text-sm flex items-center" />
          <p class="leading-none">Since 2000</p>
        </div>

        <div class="bg-white overflow-hidden border-b-4 border-blue-500 w-1/3">
          <img src={people} alt="People" class="w-full object-contain h-48" />
          <div class="p-4 md:p-6" />
          <p class="text-blue-500 font-semibold text-xs mb-1 leading-none">
            Person Nr1
          </p>
          <h3 class="font-semibold mb-2 text-xl leading-tight sm:leading-normal">
            Good At:
          </h3>
          <div class="text-sm flex items-center" />
          <p class="leading-none">Since 2000</p>
        </div>
      </div>
    </>
  );
}

export default Artister;
