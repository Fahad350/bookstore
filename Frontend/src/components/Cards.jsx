import React from "react";
// import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  const handleBuyNow = (item) => {
    console.log("Buy Now clicked for:", item);

    window.location.href = `/checkout/${item._id}`;
  };

  return (
    <>
      <div className="hover:scale-105 duration-300">
        <br />
        <br />
        <div className="card bg-base-100 md:w-65 w-80  shadow-sm  dark:bg-slate-900 dark:text-white ">
          <figure>
            <img src={item.image} alt="books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary hover:scale-110 duration-300">
                {item.catogery}
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline hover:bg-pink-500 cursor-pointer  hover:text-white">
                {`$${item.price}`}
              </div>
              <div
                onClick={() => handleBuyNow(item)}
                className="badge badge-outline hover:bg-pink-500 cursor-pointer hover:text-white"
              >
                Buy Now
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default Cards;
