import React from "react";
import { useState } from "react";
import axios from "axios";
import FileBase64 from "react-file-base64";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {api} from './Api'

export default function AddSome() {
  const selctor = useSelector((state) => state);
  const [option, setOption] = useState("");
  const [obj, setObj] = useState({
    userName:selctor.state?.userName,
    userName2:selctor.state?.firstName,
    userEmail:selctor.state?.email,
    fName: "",
    lName: "",
    address: "",
    phoneNumber: "",
    type: "",
    model: "",
    year: "",
    horseoower: "",
    description: "",
    price: "",
    imgUrl: "",
    idPost: selctor.state?._id,
    links:[""]
  });

  const postData = async () => {
    if (
      obj.fName &&
      obj.lName &&
      obj.address &&
      obj.phoneNumber&&
      obj.description&&
      obj.price&&
      obj.imgUrl
    ) {
      axios.post(`${api}/${option}`, obj);
      console.log(obj);
    } else {
      alert("invlid input");
    }
  };

  return (
    <div className="flex flex-col items-center py-64 justify-center ">
      <h1 className="text-4xl font-bold my-6">Add Post</h1>

      {selctor?.state ? (
        <div className="w-full flex flex-col items-center">
          <h2 className="font-bold my-4">What would you like to post?</h2>
          <select
            className="my-4 p-3 rounded-md font-bold outline-none bg-gray-300"
            onChange={(e) => setOption(e.target.value)}
            name=""
            id=""
          >
            <option value=""></option>
            <option value="cars">cars</option>
            <option value="furnitures">furnitures</option>
            <option value="other">other</option>
          </select>

          {option === "" ? (
            <div>
              <h2 className="text-4xl text-gray-400 mt-20 text-center">
                Choose one of the options...
              </h2>
            </div>
          ) : (
            <form className="flex flex-col md:w-1/3 m-auto justify-center ">
              <h1 className="flex justify-center text-3xl">{option}</h1>
              first name:
              <input
                onChange={(e) => setObj({ ...obj, fName: e.target.value })}
                className="border-2 border-black rounded-md p-1"
                type="text"
              />
              last name:
              <input
                onChange={(e) => setObj({ ...obj, lName: e.target.value })}
                className="border-2 border-black rounded-md p-1"
                type="text"
              />
              address:
              <input
                onChange={(e) => setObj({ ...obj, address: e.target.value })}
                className="border-2 border-black rounded-md p-1"
                type="text"
              />
              phone number:
              <input
                onChange={(e) =>
                  setObj({ ...obj, phoneNumber: e.target.value })
                }
                className="border-2 border-black rounded-md p-1"
                type="number"
              />
              {option === "cars" ? (
                <div className="flex flex-col">
                  model:
                  <input
                    onChange={(e) => setObj({ ...obj, model: e.target.value })}
                    className="border-2 border-black rounded-md p-1"
                    type="text"
                  />
                  year:
                  <input
                    onChange={(e) => setObj({ ...obj, year: e.target.value })}
                    className="border-2 border-black rounded-md p-1"
                    type="number"
                  />
                  horseoower:
                  <input
                    onChange={(e) =>
                      setObj({ ...obj, horseoower: e.target.value })
                    }
                    className="border-2 border-black rounded-md p-1"
                    type="text"
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  {" "}
                  type:
                  <input
                    onChange={(e) => setObj({ ...obj, type: e.target.value })}
                    className="border-2 border-black rounded-md p-1"
                    type="text"
                  />
                </div>
              )}
              description:
              <textarea
                onChange={(e) =>
                  setObj({ ...obj, description: e.target.value })
                }
                className="border-2 border-black rounded-md p-1"
                name=""
                id=""
                cols="30"
                rows="4"
              ></textarea>
              price:
              <input
                onChange={(e) => setObj({ ...obj, price: e.target.value })}
                className="border-2 border-black rounded-md p-1 w-1/2"
                type="number"
              />
              chose img:
              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setObj({ ...obj, imgUrl: base64 })}
              />
              <button
                onClick={postData}
                className="border-2 border-black p-2 my-4 rounded-md"
              >
                add {option}
              </button>
            </form>
          )}
        </div>
      ) : (
        <Link
          className="font-bold cursor-pointer hover:scale-105 duration-150"
          to={"/login"}
        >
          you need to login first
        </Link>
      )}
    </div>
  );
}
