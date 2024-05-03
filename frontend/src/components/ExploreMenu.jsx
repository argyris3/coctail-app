import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-2 " id="explore-menu">
      <h1 className="font-medium text-2xl text-gray-200">
        Ανακαλυψε τα Cocktails μας..
      </h1>
      <p className="text-lg text-slate-200 max-w-[60%]">
        Διαλεξε και απολαυσε ενα απο τα καταπληκτικα μας Cocktail...
      </p>
      <div className="flex justify-between items-center gap-4 text-center m-3 overflow-x-auto ">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.drink_name ? "All" : item.drink_name
                )
              }
              key={index}
              className=""
            >
              <img
                className={
                  category === item.drink_name
                    ? "activeCat w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-full cursor-pointer transition-all "
                    : "w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-full cursor-pointer transition-all "
                }
                src={item.drink_image}
                alt={item.drink_name}
              />
              <p className="mt-2 text-[#FDA403] text-md md:text-lg cursor-pointer">
                {item.drink_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="m-2 h-[1px] bg-slate-200 border-none" />
    </div>
  );
};

export default ExploreMenu;
