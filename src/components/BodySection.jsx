import React from "react";
import Button1 from "./Button";
import Button2 from "./Button2";
//import TextInfo from "./TextInfo";

function BodySection() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between py-7 gap-20 lg:gap-0">
      <section className="sm:w-[700px] lg:w-[450px] flex flex-col ">
        <h1 className="text-5xl md:text-6xl font-bold leading-relaxed dark:text-white my-5">
          Welcome to Inner Thoughts
        </h1>
        <div className="flex gap-7 items-center mt-5">
          <Button1 />
          {/* <Button2 /> */}
        </div>
        <div className="flex gap-7 items-center">
          <Button2 />
        </div>
      </section>
      {/* <section className="w-[360px] sm:w-[640px] md:w-[600px]">
        <img
          src="./med.jpg"
          alt="hero homepage"
          className="md:w-full md:h-full rounded-lg"
        />
      </section> */}
    </div>
  );
}

export default BodySection;