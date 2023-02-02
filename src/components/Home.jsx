import React from "react";
import AddSome from "./AddSome";
import { useSelector } from "react-redux";
import { useEffect } from "react";
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
      <Cars/>
      <AddSome />
      <Furnitures/>
      <Other/>
    </div>
  );
}
