import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function FullPage(props) {
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [fullPage, setFullPage] = useState(false);
  const [id, setId] = useState("");
  const selctor = useSelector((state) => state);

  const getData = async () => {
    const { data } = await axios.get(`https://yad2-web-site-server.onrender.com/${props.option}`);

    setData3(data.filter((value) => value._id !== props.id));
    setData2(data.filter((value) => value._id === props.id));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="fixed font-extralight md:top-0 top-0 right-0 min-h-screen w-full flex justify-center items-center z-0 ">
      <div className="bg-gray-100 md:w-full md:pt-14 h-screen w-full shadow-lg shadow-black font-bold overflow-scroll">
        {data2?.map((v, i) => (
          <div
            key={i}
            className="p-10 flex flex-col justify-between m-auto md:h-4/5 md:w-3/5 shadow-lg bg-red-50 bg-opacity-50"
          >
            <div className="flex justify-between w-full font-bold capitalize items-center h-14">
              <p>
                category : <span className="font-normal">{props.option}</span>
              </p>
              <AiOutlineClose
                onClick={() => {
                  window.location.reload(true);
                }}
                className="text-4xl p-2 hover:border hover:border-black hover:duration-500"
              />
            </div>
            <div className="flex justify-between w-full md:flex-row flex-col items-center">
              <div className="w-full md:bordr border-r-2 border-none md:order-1 order-2">
                <img className="w-80 h-60 md:m-0 m-auto" src={v.imgUrl} alt="" />
              </div>
              <div className="md:w-3/5 py-2 w-fit flex items-center md:items-start flex-col md:order-2 order-1">
                <BsFillPersonFill className="text-4xl w-fit shadow-md shadow-black p-2 rounded-md bg-white" />
                <span>
                  user:<span className="font-normal">{v.userName}</span>
                </span>
                <span>
                  name:<span className="font-normal">{v.userName2}</span>
                </span>
                <span>
                  email:<span className="font-normal">{v.userEmail}</span>
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center w-full md:h-40 bordr border-t-2 py-2">
              <div className="w-full">
                <p className="capitalize">
                  {v?.model}
                  {v?.type}
                </p>
                <p>{v?.year}</p>
              </div>
              <p className="md:w-3/5 w-fit">{v.price}$</p>
            </div>

            <div className="flex md:flex-row flex-col justify-between items-center w-full border-t-2 md:h-44">
              <div className="md:w-full w-full py-2 md:border-none bordr border-t-2 md:order-1 order-2">
                <p>Details to collect:</p>
                <span>name:</span>
                <span className="font-normal">
                  {v.fName}-{v.lName}
                </span>
                <br />
                <span>address:</span>
                <span className="font-normal">{v.address}</span>
                <p>{v.phoneNumber}</p>
              </div>

              <div className="md:w-3/5 w-full py-2 md:order-2 order-1">
                <p>On the product:</p>
                <span>horseoower:</span>
                <span className="font-normal">{v?.horseoower}</span>
                <br />
                <span>description:</span>
                <span className="font-normal">{v.description}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex items-center flex-col md:w-4/5 m-auto my-12 border-t-2">
          <h1 className="text-2xl font-mono my-6">More similar ads </h1>
          <div className="flex md:flex-row justify-evenly flex-col w-full">
          {data3?.slice(0, 3).map((v, i) => (
            <div
              onClick={() => {
                setFullPage(!fullPage);
                setId(v._id);
              }}
              key={i}
              className="flex bg-red-50 bg-opacity-50 rounded-md shadow-md p-2 w-96 hover:scale-110 hover:duration-500 my-5"
            >
              <img className="w-3/5 h-52 rounded-md" src={v.imgUrl} alt="" />

              <div className="p-2 w-full flex flex-col justify-between">
                <div className="flex items-center">
                  <BsFillPersonFill /> <p>{v.userName}</p>
                </div>
                <div className="flex justify-between">
                  <p>{v?.model || v?.type}</p>
                  <p>{v.price}$</p>
                </div>
                <p className="font-normal">{v.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {fullPage ? (
        <FullPage
          callback={(some) => setFullPage(some)}
          option={props.option}
          id={id}
        />
      ) : (
        ""
      )}
    </div>
    </div>
  );
}
