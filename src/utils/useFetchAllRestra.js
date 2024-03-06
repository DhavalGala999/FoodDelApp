import { useState, useEffect } from "react";

const useFetchAllRestra = () => {
  const [restrauntLists, setRestrauntLists] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(process.env.REACT_APP_FETCH_RESTRA_LIST);
      const jsonData = await data.json();
      setRestrauntLists(
        jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
          ? jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          : jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
      );
    } catch (e) {
      console.log(e);
    }
  };

  return restrauntLists;
};

export default useFetchAllRestra;
