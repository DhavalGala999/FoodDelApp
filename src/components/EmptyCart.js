import React from "react";
import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <div className="font-bold mt-14 mb-[80px]">
      <p className="text-slate-400 text-xl">Your Cart is empty.</p>
      <div className="text-sm mt-2 text-slate-600">
        You can go to home page to view more restaurants
      </div>
      <button className="border text-white bg-orange-500 rounded-md p-2 m-2 mt-6 mb-36">
        <Link to="/">SEE RESTRAUNTS NEAR YOU</Link>
      </button>
    </div>
  );
};

export default EmptyCart;
