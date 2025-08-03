import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="flex h-screen items-center justify-center bg-white text-black dark:bg-slate-900 dark:text-white">
      <div className="border-2 border-pink-500 p-8 rounded-xl shadow-lg w-[300px] relative">
        <Link
          to={"/"}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-pink-500"
        >
          ✕
        </Link>

        <h3 className="font-bold text-center text-2xl text-pink-500 mb-4">
          Contact Us
        </h3>

        <form className="space-y-4">
          <div>
            <label>Your Name</label>
            <input
              className="block w-full h-10 px-2 mt-1 border border-pink-500 rounded-md bg-transparent"
              type="text"
              placeholder="John Duo"
            />
          </div>

          <div>
            <label>Your Email</label>
            <input
              className="block w-full h-10 px-2 mt-1 border border-pink-500 rounded-md bg-transparent"
              type="email"
              placeholder="abc@gmail.com"
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              className="block w-full h-20 px-2 mt-1 border border-pink-500 rounded-md bg-transparent"
              placeholder="Type your message..."
            />
          </div>

          <button
            type="submit"
            className="btn bg-pink-500 text-white w-full rounded-2xl hover:scale-105 duration-300"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
