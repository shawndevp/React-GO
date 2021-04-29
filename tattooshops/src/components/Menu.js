import React from "react";
import { Link } from "react-router-dom";
import logo from "./logos/logo.jpg";

function Menu() {
  return (
    <>
      <div class="bg-light-blue-300 ...">
        <img src={logo} class="object-cover h-full w-full" />
      </div>

      <footer class="bg-gray-800 pt-10 sm:mt-10 pt-10">
    <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">

        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                Rad 1
            </div>


            <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Lorem ipsum
            </a>
        </div>


        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                Rad 2
            </div>

            <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Lorem ipsum
            </a>
        </div>

        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                Rad 3
            </div>

            <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Lorem ipsum
            </a>
        </div>


        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                Rad 4
            </div>

            <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Lorem ipsum
            </a>
        </div>
    </div>


    <div class="pt-2">
        <div class="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
            <div class="mt-2">
                © Copyright 1999-year. All Rights Reserved.
            </div>
        </div>
    </div>
</footer>


    </>
  );
}

export default Menu;
