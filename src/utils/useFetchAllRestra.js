import { useState, useEffect } from "react";

const useFetchAllRestra = () => {
  const [restrauntLists, setRestrauntLists] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=19.125345&lng=72.91805"
      );
      const json = await data.json();
      //console.log("JSON", json);
      setRestrauntLists(
        json.data.success.cards[1].gridWidget.gridElements.infoWithStyle
          .restaurants
      );
      //console.log("API call", restrauntLists);
    } catch (e) {
      console.log(e);
    }
  };

  return restrauntLists;
};

export default useFetchAllRestra;
