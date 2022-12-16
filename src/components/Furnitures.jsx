import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Edit from "./Edit";
import { AiTwotoneLike } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import FullPage from "./FullPage";
import { useLocation, useNavigate } from "react-router-dom";

export default function Furnitures() {
  const [id, setID] = useState("");
  const [input, setInput] = useState("");
  const [like, setLike] = useState(false);
  const location = useLocation().pathname;
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [fullPage, setFullPage] = useState(false);
  const selctor = useSelector((state) => state);
  const navigate = useNavigate();

  const getData = async () => {
    if (location == "/login") {
      const { data } = await axios.get(
        `http://localhost:8000/furnitures/${selctor.state._id}`,
      );
      setData(data);
    } else {
      const { data } = await axios.get(`http://localhost:8000/furnitures`);
      setData(data);
    }
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8000/furnitures/${id}`);
    console.log("deleted");
  };

  const editData = (id) => {
    setID(id);
    setEdit(!edit);
  };

  const likeFun = async (id) => {
    if (selctor?.state) {
      const post = data.filter((v) => v._id === id)[0];
      post.likes = [selctor.state?._id];
      await axios.put(`http://localhost:8000/furnitures/${id}`, post);
      if (location == `/furnitures`) {
        setLike(!like);
      }
    } else {
      alert("you need to login first");
    }
  };
  const unLike = async (id) => {
    const post = data.filter((v) => v._id === id)[0];
    const index = post.likes?.findIndex((v) => v === selctor.state._id);
    if (location == `/furnitures`) {
      setLike(!like);
    }
    post.likes.splice(index, 1);
    await axios.put(`http://localhost:8000/furnitures/${id}`, post);
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="flex flex-col justify-start items-center pb-10">
      {location === "/login" ? (
        ""
      ) : (
        <h1 className="text-4xl mt-32 font-mono">furnitures</h1>
      )}
      {location === `/furnitures` ? (
        <div className="pb-32 flex items-center flex-col w-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="search"
            className="md:w-1/3 p-4 placeholder:text-center border-4 rounded-md my-4"
          />
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-wrap">
        {data
          .filter((val) => {
            if (input === "") {
              return val;
            } else if (val.model?.toLowerCase().includes(input.toLowerCase())) {
              return val;
            } else if (val.type?.toLowerCase().includes(input.toLowerCase())) {
              return val;
            }
          })
          .map((v, i) => {
            return (
              <div
                key={i}
                className="m-6 md:h-56 flex md:flex-row flex-col justify-between shadow-lg rounded-b-lg bg-white bg-opacity-25 "
              >
                <div className="md:h-56 md:w-60 h-64 ">
                  <img
                    onClick={() => {
                      setFullPage(!fullPage);
                      setID(v._id);
                    }}
                    src={v.imgUrl}
                    className="md:h-56 md:w-80 h-64 w-96 md:rounded-l-lg"
                    alt=""
                  />
                </div>
                <div className="px-4 md:w-52 flex flex-col justify-evenly font-bold h-56">
                  <div className="flex justify-between w-full">
                    <h3 className="flex justify-start items-center text-gray-700 rounded-sm">
                      <BsFillPersonFill className="text-2xl pr-1" />
                      {v?.userName}
                    </h3>
                    {v.likes?.find((v) => v === selctor.state?._id) ? (
                      <AiTwotoneLike
                        onClick={() => unLike(v._id)}
                        className="text-2xl text-red-200"
                      />
                    ) : (
                      <AiTwotoneLike
                        onClick={() => likeFun(v._id)}
                        className="text-2xl text-gray-500"
                      />
                    )}
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <h1 className=" capitalize text-2xl">
                      {v?.model || v?.type}
                    </h1>
                    <p className=" text-2xl">{v.price}$</p>
                  </div>
                  <div>
                    <div>
                      address: <span className="font-normal">{v.address}</span>
                    </div>
                    <div>
                      description:{" "}
                      <span className="font-normal">{v.description}</span>
                    </div>
                  </div>
                  {selctor.state?.admin === "true" ||
                  v.idPost === selctor.state?._id ? (
                    <div className="flex w-full">
                      <button
                        onClick={() => editData(v._id)}
                        className="border-2 border-black mr-1 p-2 rounded-md w-full"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteData(v._id)}
                        className="border-2 border-black ml-1 p-2 rounded-md"
                      >
                        delete
                      </button>
                    </div>
                  ) : (
                    <div className="flex w-full">
                      <button
                        onClick={() => {
                          setFullPage(!fullPage);
                          setID(v._id);
                        }}
                        className="border-2 border-black p-0 mr-1 rounded-md w-full capitalize"
                      >
                        to see more
                      </button>

                      <button
                        onClick={() => {
                          {
                            selctor.state
                              ? navigate("/addSome")
                              : navigate("/login");
                          }
                        }}
                        className="border-2 border-black ml-1 p-0 rounded-md capitalize"
                      >
                        add post
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        {fullPage ? (
          <FullPage
            callback={(some) => setFullPage(some)}
            option="furnitures"
            id={id}
          />
        ) : (
          ""
        )}
        {edit ? <Edit id={id} option="furnitures" /> : ""}
      </div>
    </div>
  );
}
