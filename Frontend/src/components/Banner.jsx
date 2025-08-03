import React from "react";
import book from "../../public/book.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row space-x-2">
        <div className="md:w-1/2 w-full order-2 md:order-1">
          <h1 className="text-4xl font-bold md:mt-28 mt-10">
            Hello, Welcome Here To Learn Something{" "}
            <span className="text-pink-500"> New Everyday!!!</span>
          </h1>
          <br />

          <p className=" text-justify text-lg">
            A key conclusion about life is that it is a continuous journey of
            learning and growth, filled with both challenges and opportunities.
            Life lessons are inevitable and shape who we become. Embracing these
            lessons, even through difficult times, leads to personal development
            and a deeper understanding of ourselves and the world.
          </p>
          <br />
          {/* mail box */}

          <label className="input validator  hover:text-pink-500  border-pink-500 border-2  dark:bg-slate-900 dark:text-white">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="25" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              className=" hover:text-pink-500 "
              type="email"
              placeholder="mail@site.com"
              required
            />
          </label>
          <br />
          <br />
          <div>
            <a className="bg-pink-500 text-white  px-8 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">
              Email
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full order-1 ">
          <img
            src={book}
            alt="book"
            className="mt-6 md:mt-24 md:ml-24 w-115 h-100 "
          />
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default Banner;
