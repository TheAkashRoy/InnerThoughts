
// Comfort.jsx

import React from "react";
import { Link } from "react-router-dom";

function Comfort() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-10 mx-12">
      <div className="bg-[rgba(255, 255, 255, 0.8)] dark:bg-[rgba(17, 23, 41, 0.8)] p-8 rounded-lg shadow-lg">
        {/* Add your five options here */}
        <Link to="/timer/Think of a relaxing place and in your mind run through all the comforting things you do when you are there.">
        <button className="bg-[#59b02e] text-white rounded-lg py-3 px-8 hover:bg-[#95d177]/80 transition duration-200 w-full mb-4">
          Think of a relaxing place and in your mind run through all the comforting things you do when you are there.
        </button>
        </Link>
        <Link to="/timer/Record yourself saying as many positive things as you can about something that matters and listen to it multiple times.">
        <button className="bg-[#59b02e] text-white rounded-lg py-3 px-8 hover:bg-[#95d177]/80 transition duration-200 w-full mb-4">
        Record yourself saying as many positive things as you can about something that matters and listen to it multiple times.
        </button>
        </Link>
        <Link to="/timer/Eat something you enjoy. Make it slow and notice everything about it. Enjoy.">
        <button className="bg-[#59b02e] text-white rounded-lg py-3 px-8 hover:bg-[#95d177]/80 transition duration-200 w-full mb-4">
        Eat something you enjoy. Make it slow and notice everything about it. Enjoy.
        </button>
        </Link>
        <Link to="/timer/Sing or hum your favourite songs which comfort you.">
        <button className="bg-[#59b02e] text-white rounded-lg py-3 px-8 hover:bg-[#95d177]/80 transition duration-200 w-full mb-4">
        Sing or hum your favourite songs which comfort you.
        </button>
        </Link>
        <Link to="/timer/Select some of your most comforting photographs and look at them.">
        <button className="bg-[#59b02e] text-white rounded-lg py-3 px-8 hover:bg-[#95d177]/80 transition duration-200 w-full">
        Select some of your most comforting photographs and look at them.
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Comfort;





