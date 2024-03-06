import { useDispatch } from "react-redux";
import { addItems, removeitem } from "../redux/cartSlice";
import { toast } from "react-toastify";

const ItemList = ({ cardItems, removeBtn }) => {
  const dispatch = useDispatch();
  const handleAddItem = (menuDetail) => {
    dispatch(addItems(menuDetail));
    toast.success("Item added successfully!");
  };
  const handleRemoveItem = (index) => {
    dispatch(removeitem(index));
    toast.success("Item removed successfully!");
  };

  return (
    <div className="p-4 m-4">
      {cardItems.map((menuDetail, index) => (
        <div
          data-testid="foodItems"
          key={index}
          className="flex justify-between shadow-md"
        >
          <li className="list-none text-2xl">
            <h5 className="text-lg text-left mt-4">
              {menuDetail.card.info.name} - ₹
              {menuDetail.card.info.price / 100 ||
                menuDetail.card.info.defaultPrice / 100}
            </h5>
          </li>
          <div className="text-xl ">
            <button
              className="relative font-bold bg-green-500 text-white rounded-lg text-sm px-3 py-2 mx-1 "
              onClick={() => handleAddItem(menuDetail)}
            >
              + Add
            </button>
            {removeBtn && (
              <button
                className="relative font-bold bg-green-500 text-white rounded-lg text-sm py-2 px-1"
                onClick={() => handleRemoveItem(index)}
              >
                - Remove
              </button>
            )}
            <img
              src={
                process.env.REACT_APP_RES_IMG_URL +
                (menuDetail.card.info.imageId || menuDetail.card.info.id)
              }
              className="w-48 my-2"
              alt="Menu Image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
