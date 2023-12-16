import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleToggleNav = () => {
    const isNavOpen = !nav; // Capture the updated value of nav
    setNav(isNavOpen); // Update the state

    // Update the document body style based on the updated state value
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-semibold text-2xl z-20"> Health Care</h1>
      <IoMdMenu
        onClick={handleToggleNav}
        className="z-20 text-white cursor-pointer"
        size={25}
      />
      <div
        className={
          nav
            ? " ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-2xl p-5">Home</li>
          <li className="font-bold text-2xl p-5">Reservations</li>
          <li className="font-bold text-2xl p-5">Rooms</li>
          <li className="font-bold text-2xl p-5">Amenities</li>
          <li className="font-bold text-2xl p-5">Staff</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
