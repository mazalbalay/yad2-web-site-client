import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ComponentPage from "./ComponentPage";

export default function LikeePage() {
  const selctor = useSelector((state) => state);
  const [cars, setCars] = useState([]);
  const [furnitures, setFurnitures] = useState([]);
  const [other, setOther] = useState([]);

  const getData = async (option, set) => {
    const { data } = await axios.get(`https://yad2-web-site-server.onrender.com/${option}`);
    const filtered = data.filter((v) => v.likes == selctor.state._id);
    set(filtered);
  };

  useEffect(() => {
    getData("cars", setCars);
    getData("furnitures", setFurnitures);
    getData("other", setOther);
  }, [cars]);
  return (
    <div className="w-full flex flex-wrap">
      <ComponentPage data={cars} option="cars" />
      <ComponentPage data={furnitures} option="furnitures" />
      <ComponentPage data={other} option="other" />
    </div>
  );
}
