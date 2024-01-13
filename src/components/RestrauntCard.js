import { RES_IMG_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating } =
    props.data?.info;
  //console.log(props);
  return (
    <div
      data-testid="resCard"
      className=" border border-gray-500 bg-slate-100 m-4 p-2 rounded-md w-52 flex-1 h-80"
    >
      <div className=" object-cover h-3/6">
        <img
          src={RES_IMG_URL + cloudinaryImageId}
          className="rounded-md h-full w-full object-cover"
        ></img>
      </div>

      <div>
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
        <label className="absolute bg-black text-white m-2 p-1">Promoted</label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
