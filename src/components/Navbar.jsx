import React from "react";
import NavbarIcon from "../assets/content.svg";

export default function Navbar() {
  return (
    <>
      <nav className="fixed h-[72px] top-0 z-10 flex items-center justify-center  w-full border-b border-b-[#EAECF0] bg-white">
        <img src={NavbarIcon} alt="" />
      </nav>
    </>
  );
}
