const RestrauntCard = (props) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating } =
    props.data?.info;
  return (
    <div
      data-testid="resCard"
      className=" border border-gray-500 bg-slate-100 m-4 p-2 rounded-md w-[320px] h-96 mx-auto"
    >
      <div className=" object-cover h-2/3">
        <img
          src={process.env.REACT_APP_RES_IMG_URL + cloudinaryImageId}
          className="rounded-md h-full w-full object-cover"
        ></img>
      </div>

      <div>
        <h3 className="font-bold text-xl mt-2">{name}</h3>
        <h5 className="text-sm">{cuisines.slice(0, 4).join(", ")}</h5>
        <h5>{avgRating}⭐</h5>
        <h5>{costForTwo}</h5>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <div className="">
        <label className=" bg-black text-white relative top-9 px-2 rounded ">
          Promoted
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
