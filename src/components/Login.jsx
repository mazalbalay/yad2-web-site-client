import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UserPage from "./UserPage";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selctor = useSelector((state) => state);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    axios.post(`http://localhost:8000/login`, user).then((res) => {
      if (res.data[0] === "login") {
        window.localStorage.setItem("login",JSON.stringify(res.data[1]))
        const action = { type: "setLogin", payload: res.data[1] };
        dispatch(action);
        alert(res.data[0]);
        navigate("/");
      } else {
        alert(res.data);
      }
    });
  };

  return (
    <div className="w-full flex justify-center items-center">
      {selctor.state ? (
        <div className="w-full">
          <UserPage/>
        </div>
      ) : (
        <div className="flex my-32 flex-col md:w-1/3 w-5/6 py-10 shadow-gray-900 shadow-lg justify-evenly items-center bg-opacity-50  bg-red-50 rounded-md">
          <h1 className="text-3xl font-bold capitalize">sign in</h1>

          <div className="flex flex-col md:w-2/3 w-4/5 h-1/3 justify-between ">
            <span className="font-bold capitalize">email address</span>
            <input
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="text"
              placeholder="Enter email"
              className="border p-4 rounded-md outline-none my-2"
            />

            <span className="font-bold capitalize">password</span>
            <input
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              defaultValue={""}
              placeholder="Enter password"
              className="border p-4 rounded-md outline-none my-2"
            />

            <button
              onClick={() => login()}
              className="w-full my-2 capitalize bg-gray-900 p-3 rounded-md text-white text-2xl hover:bg-red-100 hover:shadow-lg hover:text-black hover:font-bold hover:duration-500"
              >
              submit
            </button>
          </div>
          <p className="font-bold ">
            <Link to={"/registration"}>To Registration</Link>{" "}
          </p>
        </div>
      )}
    </div>
  );
}
