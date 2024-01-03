import { RES_IMG_URL } from "../utils/constants";

const RestrauntMenuItems = ({ resData, showItems, setShowItems }) => {
  console.log("resMenuDetails", resData);
  const { itemCards, title } = resData.card.card;
  return (
    <div>
      <div
        className="flex justify-between p-4 m-4 shadow-lg"
        onClick={() => {
          setShowItems();
        }}
      >
        <div className="text-3xl font-bold">{title}</div>
        <div className="self-center">🔻</div>
      </div>
      {showItems && (
        <div className="p-4 m-4">
          {itemCards.map((menuDetail) => (
            <div
              key={menuDetail.card.info.id}
              className="flex justify-between shadow-md"
            >
              <li className="list-none text-2xl">
                {menuDetail.card.info.name}
                <h5 className="text-lg text-left">
                  ₹
                  {menuDetail.card.info.price / 100 ||
                    menuDetail.card.info.defaultPrice / 100}
                </h5>
                <p className="text-lg text-left">
                  {menuDetail.card.info.ratings.aggregatedRating.rating} (
                  {menuDetail.card.info.ratings.aggregatedRating.ratingCountV2})
                </p>
              </li>
              <div className="text-xl">
                <img
                  src={RES_IMG_URL + menuDetail.card.info.imageId}
                  className="w-28"
                ></img>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestrauntMenuItems;
