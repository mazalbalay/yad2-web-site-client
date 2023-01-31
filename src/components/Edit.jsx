import { React, useState } from "react";
import FileBase64 from "react-file-base64";
import axios from "axios";
import { useEffect } from "react";
import {api} from './Api'
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Edit(props) {
  const [option, setOption] = useState(props.option);
  const [obj, setObj] = useState();

  const getData = async () => {
    const { data } = await axios.get(`${api}/${option}`);
    setObj(data.filter((v) => v._id === props.id));

  };

  const editData = async () => {
    await axios.put(`${api}/${option}/${props.id}`, obj);
  };

  useEffect(() => {
    getData();
  },[]);

  return (
    <>
    {obj ?(

    <div
      id="top"
      className="fixed top-0 right-0 bg-opacity-90 bg-white flex flex-col h-screen w-full items-center overflow-scroll p-10"
    >
      <h1 className="text-2xl font-bold my-6 capitalize pl-6">
        Edit {option}: <span className="font-medium text-xl">{props.id}</span>
      </h1>
      <div className="flex flex-col md:w-1/3 w-5/6 m-auto justify-center ">
        first name:
        <input
          onChange={(e) => setObj({ ...obj, fName: e.target.value })}
          className="border-2 border-black rounded-md p-1"
          type="text"
          defaultValue={obj[0]?.fName}
        />
        last name:
        <input
          onChange={(e) => setObj({ ...obj, lName: e.target.value })}
          className="border-2 border-black rounded-md p-1"
          type="text"
          defaultValue={obj[0]?.lName}
        />
        address:
        <input
          onChange={(e) => setObj({ ...obj, address: e.target.value })}
          className="border-2 border-black rounded-md p-1"
          type="text"
          defaultValue={obj[0]?.address}
        />
        phone number:
        <input
          onChange={(e) => setObj({ ...obj, phoneNumber: e.target.value })}
          className="border-2 border-black rounded-md p-1"
          type="number"
          defaultValue={obj[0]?.phoneNumber}
        />
        {option === "cars" ? (
          <div className="flex flex-col p-0">
            model:
            <input
              onChange={(e) => setObj({ ...obj, model: e.target.value })}
              className="border-2 border-black rounded-md p-1"
              type="text"
              defaultValue={obj[0]?.model}
            />
            year:
            <input
              onChange={(e) => setObj({ ...obj, year: e.target.value })}
              className="border-2 border-black rounded-md p-1"
              type="number"
              defaultValue={obj[0]?.year}
            />
            horseoower:
            <input
              onChange={(e) => setObj({ ...obj, horseoower: e.target.value })}
              className="border-2 border-black rounded-md p-1"
              type="text"
              defaultValue={obj[0]?.horseoower}
            />
          </div>
        ) : (
          <div className="flex flex-col">
            type:
            <input
              onChange={(e) => setObj({ ...obj, type: e.target.value })}
              className="border-2 border-black rounded-md p-1"
              type="text"
              defaultValue={obj[0]?.type}
            />{" "}
          </div>
        )}
        description:
        <textarea
          defaultValue={obj[0]?.description}
          onChange={(e) => setObj({ ...obj, description: e.target.value })}
          className="border-2 border-black rounded-md p-1"
          name=""
          id=""
          cols="30"
          rows="3"
        ></textarea>
        price:
        <input
          onChange={(e) => setObj({ ...obj, price: e.target.value })}
          className="border-2 border-black rounded-md p-1 w-1/2"
          type="number"
          defaultValue={obj[0]?.price}
        />
        chose img:
        <FileBase64
          defaultValue={obj[0]?.imgUrl}
          type="file"
          multiple={false}
          onDone={({ base64 }) => setObj({ ...obj, imgUrl: base64 })}
        />
        <div className="flex w-full">
          <button
            onClick={() => {
              editData();
              window.location.reload();
            }}
            className="border-2 border-black p-2 my-4 rounded-md w-full mr-2"
          >
            edit {option}
          </button>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="border-2 border-black p-2 my-4 rounded-md w-1/2 ml-2"
          >
            x
          </button>
        </div>
      </div>
    </div>
     ) : (
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    )}
  </>
  );
}
