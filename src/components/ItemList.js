import { RES_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/cartSlice";

const ItemList = ({ cardItems }) => {
  const dispatch = useDispatch();
  const handleAddItem = (menuDetail) => {
    dispatch(addItems(menuDetail));
  };
  return (
    <div className="p-4 m-4">
      {cardItems.map((menuDetail) => (
        <div
          data-testid="foodItems"
          key={menuDetail.card.info.id}
          className="flex justify-between shadow-md"
        >
          <li className="list-none text-2xl">
            <h5 className="text-lg text-left mt-4">
              {menuDetail.card.info.name} - ₹
              {menuDetail.card.info.price / 100 ||
                menuDetail.card.info.defaultPrice / 100}
            </h5>

            <p className="text-xs text-left mt-2 mb-2">
              {menuDetail.card.info.description}
            </p>
          </li>
          <div className="text-xl ">
            <button
              className="absolute font-bold bg-black text-white rounded-lg text-sm p-1 mx-1"
              onClick={() => handleAddItem(menuDetail)}
            >
              + Add
            </button>
            <img
              src={
                RES_IMG_URL + menuDetail.card.info.imageId ||
                menuDetail.card.info.id
              }
              className="w-28"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
