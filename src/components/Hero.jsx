import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="absolute top-0  w-full h-screen bg-black/30" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute">
          <p>Care is our middle name</p>
          <h1 className="font-bold text-5xl md:text-6xl drop-shadow-2xl">
            The Best Home care services
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-4 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, consequatur.
          </p>
          <button className="bg-white text-black" type="">
            Make enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
