import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntMenuItems from "./RestrauntMenuItems";
import { useState } from "react";

const RestrauntMenu = () => {
  const { id } = useParams();
  const [resInfo, resMenuDetails] = useRestrauntMenu(id);

  const [showItems, setShowItems] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, avgRating } = resInfo;
  return (
    <div className="mt-4 mx-28 text-center">
      <div className="mb-12">
        <h1 className="font-bold text-4xl">{name}</h1>
        <span className="font-bold text-2xl">
          {avgRating} - {costForTwoMessage}
        </span>
      </div>
      {resMenuDetails.map((restraunt, index) => (
        <div>
          {console.log(restraunt)}
          <RestrauntMenuItems
            Key={restraunt.card.card.title}
            resData={restraunt}
            showItems={showItems === index ? true : false}
            setShowItems={() => setShowItems(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default RestrauntMenu;
