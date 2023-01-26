import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {api} from './Api'

export default function Registration() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    ReEntetPassword: "",
  });

  const registration = () => {
    if (
      user.userName &&
      user.firstName &&
      user.lastName &&
      user.email &&
      user.password === user.ReEntetPassword
    ) {
      axios.post(`${api}/registration`, user).then((res) => {
        console.log(res);
        navigate("/login");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center py-10">
      <div className="flex flex-col md:w-2/5 w-5/6 py-10 border justify-evenly mt-24 shadow-lg bg-opacity-50 shadow-gray-900 items-center bg-red-50 rounded-md">
        <h1 className="text-3xl font-bold capitalize">sign up</h1>

        <div className="flex flex-col md:w-2/3 w-4/5 h-1/3 justify-between ">
          <span className="font-bold capitalize">user name</span>
          <input
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
            type="text"
            placeholder="user name"
            className="border p-4 rounded-md outline-none my-2"
          />
              <span className="font-bold capitalize">first name</span>
          <input
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            type="text"
            placeholder="First name"
            className="border p-4 rounded-md outline-none my-2"
          />
          <span className="font-bold capitalize">last name</span>
          <input
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            type="text"
            placeholder="Last name"
            className="border p-4 rounded-md outline-none my-2"
          />

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
            placeholder="Enter password"
            className="border p-4 rounded-md outline-none my-2"
          />

          <span className="font-bold capitalize">Re-enter password</span>
          <input
            onChange={(e) =>
              setUser({ ...user, ReEntetPassword: e.target.value })
            }
            type="password"
            defaultValue={""}
            placeholder="Re-enter password"
            className="border p-4 rounded-md outline-none my-2"
          />

          <button
            onClick={() => registration()}
            className="w-full my-2 capitalize bg-gray-900 p-3 rounded-md text-white text-2xl hover:bg-red-100 hover:shadow-lg hover:text-black hover:font-bold hover:duration-500"
          >
            sign up
          </button>
        </div>
        <p className="font-bold ">
          <Link to={"/login"}>To login</Link>{" "}
        </p>
      </div>
    </div>
  );
}
