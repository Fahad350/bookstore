import React, { useEffect, useState } from "react";

import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const getData = await axios.get("http://localhost:5000/book");
        console.log(getData.data);
        setBook(getData.data.filter((data) => data.catogery === "paid"));
        // setBook(getData.data);
      } catch (error) {
        console.log("error :", error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="items-center justify-center text-center">
          <br />
          <br />
          <h1 className=" text-2xl md:3xl  md:mt-13 mt-10">
            We're Delighted To Have You{" "}
            <span className="text-pink-500"> Here):</span>
          </h1>
          <br />
          <br />
          <p className="text-justify">
            Books are our true best friends. They are full of information we
            need for our education and daily life. There are different types of
            books for a variety of knowledge that we seek, including science,
            history, mathematics, biology, fantasy, and anything else we need.
            My favourites are story books about adventure and books on history.
            I can spend my entire day reading these books and immerse myself in
            a world of imagination and thrill. Books help us to share
            information and will continue to be significant, although electronic
            media have gained popularity. Books will always be my best friends
            and source of imagination and inspiration.
          </p>
          <Link to={"/"}>
            <button className="bg-pink-500 text-white  py-3 px-16 rounded cursor-pointer hover:scale-105 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1  ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
