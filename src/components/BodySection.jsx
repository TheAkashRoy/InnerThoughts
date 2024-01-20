import React from "react";
import Button1 from "./Button";
import Button2 from "./Button2";

function BodySection() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between py-7 gap-20 lg:gap-0 relative">
      <section className="sm:w-[700px] lg:w-[450px] flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold leading-relaxed dark:text-white my-5">
          Welcome to Inner Thoughts
        </h1>
        <div className="flex gap-7 items-center mt-5">
          <Button1 />
        </div>
        <div className="flex gap-7 items-center">
          <Button2 />
        </div>
      </section>

      {/* "Seek Professional Help" button */}
      <div className="flex justify-end fixed bottom-5 left-10">
        <a
          href="http://www.aasra.info/helpline.html"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white px-4 py-2 rounded-full text-xl flex items-center"
        >
          Seek Professional Help?⚠️
        </a>
      </div>
    </div>
  );
}

export default BodySection;
