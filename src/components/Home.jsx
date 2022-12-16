import React from "react";
import AddSome from "./AddSome";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import myVideo from "../assets/Steriton and Wallace.mp4";
import myVideo2 from "../assets/Need help registering.mp4";
import Cars from "./Cars";
import Other from "./Other";
import Furnitures from "./Furnitures";

export default function Home() {
  const selctor = useSelector((state) => state);
  useEffect(() => {
    console.log(selctor);
  }, []);

  return (
    <div className=" bg-red-50 pt-32 bg-opacity-50">
      <div className="flex md:flex-row flex-col w-full md:w-5/6 m-auto justify-between items-center font-mono">
        <div className="w-full flex p-10 text-center justify-center items-center text-4xl">
          Share with your friends <br />
          so they can enjoy too
        </div>
        <div>
          <video
            src={myVideo}
            autoPlay={true}
            loop={true}
            muted={true}
            className="md:w-full m-auto pt-16"
          ></video>
        </div>
      </div>
      <Cars/>
      <AddSome />
      <Furnitures/>
      <div className="flex md:flex-row flex-col md:w-5/6 m-auto justify-between items-center">
        <div>
          <video
            src={myVideo2}
            autoPlay={true}
            loop={true}
            muted={true}
            className="md:w-full m-auto pt-16"
          ></video>
        </div>
        <div className="w-full p-10 text-center flex justify-center items-center text-4xl">
          Share with your friends <br />
          so they can enjoy too
        </div>
      </div>
      <Other/>
    </div>
  );
}
