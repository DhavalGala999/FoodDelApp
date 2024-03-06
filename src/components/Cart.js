import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";
import EmptyCart from "./EmptyCart";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleClick = () => {
    toast.success("🦄 Order placed successfully");
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="mt-4 mx-48 text-center h-full">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <button
            className="border text-white bg-black rounded-md p-2 m-2"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <ItemList cardItems={cartItems} removeBtn={true} />
          <div>
            <p className="font-bold text-2xl">
              <span>Total Amount: &#8377;</span>
              {cartItems.reduce((acc, curr) => {
                return (
                  acc +
                  (curr.card.info.price / 100 ||
                    curr.card.info.defaultPrice / 100)
                );
              }, 0)}
            </p>
          </div>
          <button
            className="bg-green-300 border border-black rounded-lg p-2 font-bold mt-4 mb-10"
            onClick={handleClick}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
