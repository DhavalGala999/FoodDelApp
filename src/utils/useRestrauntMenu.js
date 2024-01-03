import { useEffect, useState } from "react";

const useRestrauntMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenuDetails, setResMenuDetails] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.125345&lng=72.91805&restaurantId=" +
        id
    );

    const json = await data.json();
    setResInfo(json.data.cards[2].card.card.info);
    let filteredCat =
      json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (resCard) =>
          resCard.card.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setResMenuDetails(filteredCat);
  };

  return [resInfo, resMenuDetails];
};
export default useRestrauntMenu;
