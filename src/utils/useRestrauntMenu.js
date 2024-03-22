import { useEffect, useState } from "react";

const useRestrauntMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenuDetails, setResMenuDetails] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(process.env.REACT_APP_FETCH_RESTRA_MENU + id);

    const json = await data.json();
    setResInfo(json.data.cards[0].card.card.info);
    let filteredCat =
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (resCard) =>
          resCard.card.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setResMenuDetails(filteredCat);
  };

  return [resInfo, resMenuDetails];
};
export default useRestrauntMenu;
