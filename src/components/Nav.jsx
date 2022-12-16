import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link as LinkRoute } from "react-router-dom";
import logo from "../assets/logoP.png";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const selctor = useSelector((state) => state);
  return (
    <div className="bg-white fixed w-full flex justify-between items-center px-4 z-5 shadow-md ">
      <ul className="md:flex w-1/2 justify-around font-bold capitalize items-center hidden">
        <img className="w-40" src={logo} alt="" />
        <li className="cursor-pointer">
          <LinkRoute to={"/"}>home</LinkRoute>
        </li>
        <li className="cursor-pointer">
          <LinkRoute  to={"/cars"}>cars</LinkRoute>
        </li>
        <li className="cursor-pointer">
          <LinkRoute to={"/furnitures"}>furnitures</LinkRoute>
        </li>
        <li className="cursor-pointer">
          {" "}
          <LinkRoute to={"/other"}>other</LinkRoute>{" "}
        </li>
        <li className="cursor-pointer">
          <LinkRoute to={"/addsome"}>add post</LinkRoute>
        </li>
      </ul>

      <div className=" w-1/2 md:flex hidden justify-end items-center font-bold cursor-default">
        <div>
          {selctor.state ? (
            <div
              onClick={() => {
                window.localStorage.setItem("login", JSON.stringify(null));
                window.location.reload(true);
              }}
              className="font-normal cursor-pointer capitalize"
            >
              to logout
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="cursor-pointer px-6">
          <LinkRoute to={"/login"}>
            <BsFillPersonFill />
          </LinkRoute>
        </div>
      </div>

      <img className="w-40 md:hidden flex" src={logo} alt="" />

      <div className="flex flex-col">
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden z-10 cursor-pointer text-2xl"
        >
          {nav ? <MdOutlineClose /> : <GiHamburgerMenu />}
        </div>
        {nav && (
          <ul className="fixed top-20 w-full p-10 right-0 text-right bg-white font-bold capitalize h-80 flex flex-col justify-between items-end">
            <LinkRoute onClick={() => setNav(!nav)} to={"/"}>
              <li>home</li>
            </LinkRoute>
            <LinkRoute onClick={() => setNav(!nav)} to={"/cars"}>
              <li>cars</li>
            </LinkRoute>
            <LinkRoute onClick={() => setNav(!nav)} to={"/furnitures"}>
              <li>furnitures</li>
            </LinkRoute>
            <LinkRoute onClick={() => setNav(!nav)} to={"/other"}>
              <li>other</li>
            </LinkRoute>
            <LinkRoute onClick={() => setNav(!nav)} to={"/addSome"}>
              <li>add some</li>
            </LinkRoute>
            <div className="flex items-center justify-between w-full">
              <LinkRoute
                onClick={() => {
                  setNav(!nav);
                  window.localStorage.setItem("login", JSON.stringify(null));
                  window.location.reload(true);
                }}
                to={"/login"}
              >
                {selctor.state ? (
                  <div className="font-normal cursor-pointer">to logout</div>
                ) : (
                  ""
                )}
              </LinkRoute>

              <LinkRoute onClick={() => setNav(!nav)} to={"/login"}>
                <BsFillPersonFill />
              </LinkRoute>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}
