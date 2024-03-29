import React from "react";
function HeaderSingle({ titel, location, reviews, start_price }) {
  return (
    <div className="pt-9 ">
      <div className="flex container gap-1 mx-auto flex-col justify-center items-center md:justify-start md:items-start md:gap-3 ">
        <h1 className="text-3xl capitalize font-bold text-[#17233e] text-center md:text-4xl md:text-left">
          {titel}
        </h1>
        <div className="flex  flex-col justify-center items-center md:flex-row md:w-full gap-2 md:justify-start ">
          <p className="text-bsDark text-lg capitalize flex justify-center items-center gap-1  ">
            {" "}
            <span></span> {location}{" "}
          </p>

          <p className="text-bsDark text-lg font- capitalize text-center  ">
            {reviews}
          </p>
          <h3 className="capitalize block md:hidden text-2xl  text-center  md:text-right text-bsDark  font-medium ">
            From $ {start_price}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HeaderSingle;
