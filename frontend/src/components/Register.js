import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });

  const formValues = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  const register = async (event) => {
    event.preventDefault();

    const body = JSON.stringify({
      userName: userDetails.userName,
      userEmail: userDetails.userEmail,
    });

    const response = await axios.post("/api/register", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    setUserDetails({
      ...userDetails,
      message: response.data.message,
    });

    console.log(response);
  };

  return (
    <>
      <div className="w-full flex justify-center flex-col h-screen items-center">
        <div className="sm:w-3/4 lg:w-1/4 bg-white rounded p-5">
          <h1 className="text-xl text-gray-800 text-center uppercase font-normal mb-6">
            Register User
          </h1>
          <form className="w-full" onSubmit={register}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/4">
                <label
                  className="block text-gray-700 font-normal md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="userName"
                >
                  Name
                </label>
              </div>
              <div className="md:w-3/4">
                <input
                  type="text"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="userName"
                  name="userName"
                  required
                  onChange={formValues}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/4">
                <label
                  className="block text-gray-700 font-normal md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="userEmail"
                >
                  Email
                </label>
              </div>
              <div className="md:w-3/4">
                <input
                  type="email"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="userEmail"
                  name="userEmail"
                  required
                  onChange={formValues}
                />
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/4"></div>
              <div className="md:w-3/4">
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>

            {userDetails.message ? (
              <div
                className="flex items-center bg-purple-800 justify-center text-white text-sm px-4 py-3 mt-3 rounded"
                role="alert"
              >
                <p>{userDetails.message}</p>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
