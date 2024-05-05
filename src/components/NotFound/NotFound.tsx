// import React from "react";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center">
      <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-700 ">
        <div className="rounded-lg bg-[rgba(255,255,255,0.9)] p-8 text-center shadow-xl w-[70vw]">
          <div className="animate-bounce my-[20px]">
            <h1 className="mb-4 text-3xl font-bold">404</h1>
            <svg
              className="mx-auto h-16 w-16 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </div>
          <p className="text-gray-800">Oops! The page you are looking for could not be found.</p>
          <Link
            to="/"
            className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          >
            {" "}
            Go back to Home{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
