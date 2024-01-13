import RestrauntCard, { withPromotedLabel } from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchAllRestra from "../utils/useFetchAllRestra";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  let restrauntLists = useFetchAllRestra();

  useEffect(() => {
    setFilteredRestrauntLists(restrauntLists);
  }, [restrauntLists]);

  let [filteredRestrauntLists, setFilteredRestrauntLists] = useState([]);
  const [searchText, setSearchText] = useState("");

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
          data-testid="searchInput"
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
