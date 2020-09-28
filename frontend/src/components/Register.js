import React from "react";

const Register = () => {
  return (
    <>
      <div class="w-full flex justify-center flex-col h-screen items-center">
        <div className="sm:w-3/4 lg:w-1/4 bg-white rounded p-5">
          <h1 className="text-xl text-gray-800 text-center uppercase font-normal mb-6">
            Register User
          </h1>
          <form class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/4">
                <label
                  class="block text-gray-700 font-normal md:text-right mb-1 md:mb-0 pr-4"
                  for="userName"
                >
                  Name
                </label>
              </div>
              <div class="md:w-3/4">
                <input
                  type="text"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="userName"
                  name="userName"
                  required
                />
              </div>
            </div>

            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/4">
                <label
                  class="block text-gray-700 font-normal md:text-right mb-1 md:mb-0 pr-4"
                  for="userEmail"
                >
                  Email
                </label>
              </div>
              <div class="md:w-3/4">
                <input
                  type="email"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="userEmail"
                  name="userEmail"
                  required
                />
              </div>
            </div>

            <div class="md:flex md:items-center">
              <div class="md:w-1/4"></div>
              <div class="md:w-3/4">
                <button
                  class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
