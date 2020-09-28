import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white mb-3 fixed z-50 top-0 justify-between w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="sm:w-full lg:w-auto w-auto relative flex">
            <a
              href="/"
              className="font-semibold text-xl leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-900"
            >
              <h2>MERN Users List</h2>
            </a>
          </div>

          <button
            className="flex items-center cursor-pointer bg-transparent px-3 py-2 text-gray-600 hover:text-gray-900 outline-none focus:outline-none lg:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />

              {/* <path
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              /> */}
            </svg>
          </button>

          <div
            className={
              "sm:w-auto w-full flex lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="w-full flex flex-col lg:flex-row list-none align-items justify-end">
              <li className="nav-item">
                <Link
                  to="/"
                  className="px-3 py-2 flex items-center text-sm uppercase leading-snug block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-gray-600 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 rounded mr-4"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/register"
                  className="px-3 py-2 flex items-center text-sm uppercase leading-snug block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-gray-600 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 rounded mr-4"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-md lg:flex-grow text-right uppercase">
              <Link
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-gray-500 mr-4"
              >
                Home
              </Link>
              <Link
                to="/register"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-gray-500 mr-4"
              >
                Register
              </Link>
            </div>
          </div> */}
        </div>
      </nav>
    </>
  );
}

//export default Nav;
