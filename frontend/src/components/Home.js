import React from "react";

const Home = () => {
  return (
    <>
      <div class="w-full flex justify-center flex-col h-screen items-center">
        <div className="sm:w-3/4 lg:w-1/4 bg-white rounded p-5">
          <h1 className="text-xl text-gray-800 text-center uppercase font-normal mb-6">All Users</h1>
          <ul>
            <li>
              <p>
                <strong>Name: </strong> <span className="text-gray-700">John</span>
              </p>{" "}
              <p>
                <strong>Email: </strong>
                <span className="text-gray-700">john@email.com</span>
              </p>
            </li>
            <li>
              <div className="py-2">
                <hr />
              </div>
            </li>
            <li>
              <p>
                <strong>Name: </strong> <span className="text-gray-700">John</span>
              </p>{" "}
              <p>
                <strong>Email: </strong>
                <span className="text-gray-700">john@email.com</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
