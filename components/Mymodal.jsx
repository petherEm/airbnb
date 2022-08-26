import React, { useState } from "react";

const Mymodal = () => {
    const [modal, setModal] = useState(true)


  return (
    <div className="">
      <div className={modal ? "absolute top-[100px] right-[50px] left-[50px] text-sm md:top-[200px] md:right-[100px] md:left-[100px] bg-slate-800 opacity-75 md:h-[270px] md:w-[400px] md:p-8 p-4 shadow-lg rounded-md" : "hidden"}>
        <div className="absolute top-2 right-2 text-white font-bold cursor-pointer animate-pulse" onClick={() => setModal(false)}>
          X
        </div>
        <p className="text-white text-[16px] font-semibold tracking-wide leading-relaxed">
          Hi there, this is one of my training projects mastering ReactJS and TailwindCSS that I built and modified following the amazing tutorial of  <a href="https://www.papareact.com/" target="_blank" className="font-bold text-green-400">PapaReact.</a>
          <br />
          I genuinely recommend it as one of the top courses on the Web.
          <br />
          <br />
          Check out my other projects <a href="https://www.piotrmaciejewski.com" className="animate-pulse text-red-400">here!</a>
        </p>
      </div>
    </div>
  );
};

export default Mymodal;
