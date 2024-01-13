import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    console.log("dis");
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="mt-4 mx-48 text-center">
      <h1 className="font-bold text-lg">Cart Items</h1>

      {cartItems.length === 0 ? (
        <div className="font-bold mt-6">
          <p>Your Cart is empty.</p>
          <button className="border text-white bg-blue-400 rounded-md p-2 m-2">
            <Link to="/">Shop Now</Link>
          </button>
        </div>
      ) : (
        <>
          <button
            className="border text-white bg-black rounded-md p-2 m-2"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <ItemList cardItems={cartItems} />
        </>
      )}
    </div>
  );
};

export default Cart;
