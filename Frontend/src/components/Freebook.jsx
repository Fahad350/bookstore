import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cards from "../components/Cards";

import axios from "axios";

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const getData = await axios.get("http://localhost:5000/book");
        console.log(getData.data);
        setBook(getData.data.filter((data) => data.catogery === "Free"));
      } catch (error) {
        console.log("error", error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  space-x-2">
        <div>
          <h1 className="text-2xl font-bold text-pink-500">
            Free Offered Books
          </h1>
          <br />
          <p className="text-justify">
            Books offer a world of knowledge, entertainment, and personal
            growth. They are a timeless source of information, allowing us to
            explore diverse perspectives and expand our understanding of the
            world. Reading fosters imagination, improves vocabulary, and
            enhances critical thinking skills, making books valuable companions
            for both children and adults.
          </p>
        </div>

        {/* react slick slider */}
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
