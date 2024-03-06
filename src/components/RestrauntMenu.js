import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntMenuItems from "./RestrauntMenuItems";
import { useState } from "react";

const RestrauntMenu = () => {
  const { id } = useParams();
  const [resInfo, resMenuDetails] = useRestrauntMenu(id);

  const [showItems, setShowItems] = useState(null);
  const [toggleAcc, setToggleAcc] = useState(true);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, avgRating } = resInfo;
  return (
    <div className="mt-4 mx-28 text-center">
      <div className="mb-12">
        <h1 className="text-xl font-bold sm:text-4xl">{name}</h1>
        <span className="text-md font-bold sm:text-2xl">
          {avgRating} - {costForTwoMessage}
        </span>
      </div>
      {resMenuDetails.map((restraunt, index) => (
        <div>
          <RestrauntMenuItems
            Key={restraunt.card.card.title}
            resData={restraunt}
            showItems={showItems === index ? true : false}
            setShowItems={() => setShowItems(index)}
            toggleAcc={toggleAcc}
            setToggleAcc={setToggleAcc}
          />
        </div>
      ))}
    </div>
  );
};

export default RestrauntMenu;
