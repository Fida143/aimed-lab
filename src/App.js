import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function App() {
  const intialState = {
    email: "",
    password: "",
    checkbox: false,
  };
  const [view, setView] = useState(false);
  const [logInput, setLogInput] = useState(intialState);
  const handleView = (e) => {
    e.stopPropagation();
    setView(!view);
  };

  const handleChange = (e) => {
    console.log(e);
    setLogInput({ ...logInput, [e.target.name]: e.target.value });
    if (e.target.name === "checkbox") {
      setLogInput({ ...logInput, [e.target.name]: e.target.checked });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send this JSON data into backend
    console.log(logInput);

    setLogInput(intialState);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col md:flex-row    ">
      <div className="w-2/3 h-1/3 flex items-center justify-center mb-6 object-cover md:h-2/4 md:w-full">
        <img
          src="man.png"
          alt="laptop image"
          className="object-center h-full w-fit "
        />
      </div>
      <div className=" bg-red-200 w-full h-full py-12 flex flex-col md:w-2/4 md:justify-center md:items-center ">
        <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
          <h1 className="text-2xl  w-fit mx-auto font-bold">Login</h1>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm  text-gray-900 font-bold"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={logInput.email}
              className="   text-sm rounded-lg  p-2.5 w-full border border-gray-400 focus:ring-blue-900 focus:border-blue-500"
              placeholder="name@gmail.com"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block mb-2 text-sm  text-gray-900 font-bold  "
            >
              Your password
            </label>
            <input
              type={view ? "text" : "password"}
              id="password"
              name="password"
              value={logInput.password}
              placeholder="password"
              className="   text-sm rounded-lg  p-2.5 w-full border border-gray-400  placeholder:text-gray-600"
              required
              onChange={handleChange}
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={handleView}
            >
              {view ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center  h-5">
              <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                checked={logInput.checkbox}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                onClick={handleChange}
              />
              <label
                htmlFor="remember"
                className="block ml-2 text-sm  text-gray-900 font-bold  "
              >
                Remember me
              </label>
            </div>

            <span className="text-orange-500 text-sm ">forgot password ?</span>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
        <h2 className="text-center mt-6">
          Don't have account ? <span className="text-orange-500">Register</span>
        </h2>
      </div>
    </div>
  );
}

export default App;
