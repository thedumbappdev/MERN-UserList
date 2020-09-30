import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("/api/users");

    console.log(res.data.users);
    setUsers(res.data.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const allUsers =
    users.length > 0 &&
    users.map((user, index) => {
      return (
        <aside key={index}>
          <p>
            <strong>Name: </strong>
            <span className="text-gray-700">{user.name}</span>
          </p>
          <p>
            <strong>Email: </strong>
            <span className="text-gray-700">{user.email}</span>
          </p>
          <hr className="py-1 mt-1" />
        </aside>
      );
    });

  return (
    <>
      <div className="w-full flex justify-center flex-col h-screen items-center">
        <div className="sm:w-3/4 lg:w-1/4 bg-white rounded p-5">
          <h1 className="text-xl text-gray-800 text-center uppercase font-normal mb-6 border border-l-0 border-r-0 border-t-0 border-gray-400">
            All Users
          </h1>
          <div>
            {users.length > 0 ? (
              allUsers
            ) : (
              <p className="text-center text-gray-600">No user record found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
