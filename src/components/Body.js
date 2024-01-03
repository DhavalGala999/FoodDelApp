import RestrauntCard, { withPromotedLabel } from "./RestrauntCard";
import { useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchAllRestra from "../utils/useFetchAllRestra";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  let [filteredRestrauntLists, setFilteredRestrauntLists] = useState([]);
  const [searchText, setSearchText] = useState("");
  // let restraList = [
  //   {
  //     info: {
  //       id: "792768",
  //       name: "abCoffee",
  //       cloudinaryImageId: "aa0cd92469594730d59a9c77b4506510",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["Cafe", "Beverages", "Desserts", "Bakery"],
  //       avgRating: 4.8,
  //       avgRatingString: "4.8",
  //     },
  //   },
  //   {
  //     info: {
  //       id: "792769",
  //       name: "MCD",
  //       cloudinaryImageId: "aa0cd92469594730d59a9c77b4506510",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["Cafe", "Beverages", "Desserts", "Bakery"],
  //       avgRating: 3,
  //       avgRatingString: "4.8",
  //     },
  //   },
  // ];

  let restrauntLists = useFetchAllRestra();
  filteredRestrauntLists = restrauntLists;

  const isOnline = useOnlineStatus();
  const RestrauntCardPromoted = withPromotedLabel(RestrauntCard);

  if (isOnline === false) {
    return <h1>You are offline. Check your Internet connection</h1>;
  }

  if (restrauntLists.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="container">
      <div className="flex">
        <button
          className="m-4 p-4 border border-green-400 font-bold rounded-lg font-sans "
          onClick={() => {
            let filteredRestra = restrauntLists.filter(
              (restra) => restra.info.avgRating > 4.5
            );

            setFilteredRestrauntLists(filteredRestra);
          }}
        >
          Top Rated Restraunts
        </button>
        <input
          className="border border-gray-400 mx-4 p-1 h-min self-center"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="border border-gray-400 rounded-md px-10 h-12 self-center text-black"
          onClick={() => {
            let filteredrestraunt = restrauntLists.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestrauntLists(filteredrestraunt);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestrauntLists.map((restraunt) => {
          return (
            <Link
              to={"/restraunts/" + restraunt.info.id}
              key={restraunt.info.id}
            >
              {restraunt.info.promoted ? (
                <RestrauntCardPromoted data={restraunt} />
              ) : (
                <RestrauntCard data={restraunt} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
