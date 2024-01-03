import { RES_IMG_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating } =
    props.data?.info;
  return (
    <div className=" border border-gray-500 bg-slate-100 m-4 p-2 rounded-md w-52">
      <div className="w-full h-full object-cover">
        <img src={RES_IMG_URL + cloudinaryImageId} className="rounded-md"></img>
      </div>

      <div className="">
        <h3 className="font-bold">{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating}⭐</h5>
        <h5>{costForTwo}</h5>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2">Promoted</label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
