import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between border border-black shadow-2xl">
      <div className="flex items-center pl-9">
        <img className="w-40" src={process.env.REACT_APP_NAV_LOGO}></img>
      </div>

      <ul className="flex items-center">
        <li className="font-bold p-4 sm:text-2xl">
          <Link to="/">
            <div className="flex items-center">
              <div className="text-sm sm:text-2xl">
                <IoMdHome />
              </div>
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li className="p-4 font-bold sm:text-2xl">
          <Link to="/cart">
            <div className="flex items-center mr-12">
              <FaShoppingCart />
              <span data-testid="cart"> ({cartItems.length})</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
