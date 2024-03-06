import ItemList from "./ItemList";

const RestrauntMenuItems = ({
  resData,
  showItems,
  setShowItems,
  setToggleAcc,
  toggleAcc,
}) => {
  const { itemCards, title } = resData.card.card;

  return (
    <div>
      <div
        data-testid="accordionHeading"
        className="flex justify-between p-4 m-4 shadow-lg cursor-pointer border border-slate-200"
        onClick={() => {
          setShowItems();
          setToggleAcc(!toggleAcc);
        }}
      >
        <div className=" text-sm sm:text-3xl font-bold">{title}</div>
        <div className="self-center">🔻</div>
      </div>
      {showItems && toggleAcc && (
        <ItemList cardItems={itemCards} removeBtn={false} />
      )}
    </div>
  );
};

export default RestrauntMenuItems;
