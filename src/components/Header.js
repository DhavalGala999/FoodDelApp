import { NAV_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const isOnline = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);
  return (
    <div className="flex justify-between">
      <img className="w-40" src={NAV_LOGO}></img>

      <ul className="flex items-center">
        <li className="p-4">Online Status: {isOnline ? "✅" : "🔴"}</li>
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/about">About Us</Link>
        </li>
        <li className="p-4">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="p-4 font-bold text-lg">
          <Link to="/cart">Cart - ({cartItems.length}) Items</Link>
        </li>
        <li className="p-4">
          <button
            className="middle none center mr-3 rounded-lg border border-gray-500 py-3 px-6 text-xs font-bold uppercase transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
