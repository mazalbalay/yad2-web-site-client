import React from "react";
import {ImFacebook2} from "react-icons/im"
import {ImInstagram} from "react-icons/im"
import logo from "../assets/logoP.png";

export default function Footer() {
  return (
    <div className="px-6 py-4 md:py-0 flex justify-between items-center md:flex-row flex-col bg-red-50 bg-opacity-50 border ">
      <img className="w-40" src={logo} alt="" />
      <ul className="flex flex-col items-center font-bold my-4">
        <li className="cursor-pointer">08-6666660</li>
        <li className="cursor-pointer">yad2@gmail.com</li>
      </ul>
      <ul className="flex">
        <li className="cursor-pointer m-1 text-2xl"><ImFacebook2/></li>
        <li className="cursor-pointer m-1 text-2xl"><ImInstagram/></li>
      </ul>
    </div>
  );
}
