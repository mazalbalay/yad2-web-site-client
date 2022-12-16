import React from "react";
import { useSelector } from "react-redux";
import LikeePage from "./LikeePage";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Cars from "./Cars";
import Furnitures from "./Furnitures";
import Other from "./Other";

export default function () {
  const selctor = useSelector((state) => state);

  return (
    <div className="w-full flex flex-col justify-center items-center pt-20 ">
      <div className="w-full flex flex-col items-center py-14 bg-slate-100">
        <h1 className="text-2xl  font-bold capitalize">{`hey ${selctor.state.firstName}`}</h1>
        <h1 className="text-4xl font-bold capitalize my-5">ads you save</h1>
        <LikeePage />
      </div>
      <div className="w-full flex flex-col items-center py-14 bg-red-50 bg-opacity-50">
        <h1 className="text-4xl font-bold capitalize my-5">ads you post</h1>
        <div className="w-full flex flex-wrap">
          <Cars />
          <Furnitures />
          <Other />
        </div>
      </div>
    </div>
  );
}
