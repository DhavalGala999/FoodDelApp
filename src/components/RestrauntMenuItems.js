import ItemList from "./ItemList";

const RestrauntMenuItems = ({ resData, showItems, setShowItems }) => {
  // console.log("resMenuDetails", resData);
  const { itemCards, title } = resData.card.card;

  return (
    <div>
      <div
        data-testid="accordionHeading"
        className="flex justify-between p-4 m-4 shadow-lg cursor-pointer"
        onClick={() => {
          setShowItems();
        }}
      >
        <div className="text-3xl font-bold">{title}</div>
        <div className="self-center">🔻</div>
      </div>
      {showItems && <ItemList cardItems={itemCards} />}
    </div>
  );
};

export default RestrauntMenuItems;
