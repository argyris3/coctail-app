import { useContext } from 'react';

import { StoreContext } from '../context/StoreContext';
import CocktailItem from './CocktailItem';

const CocktailDisplay = ({ category }) => {
  const { cocktail_list } = useContext(StoreContext);
  return (
    <div className="mt-6 " id="cocktail-display">
      <h2 className="text-xl md:text-2xl lg:text-4xl text-green-400 font-semibold ">Cocktail Menu</h2>

      <div className="display-list cursor-pointer ">
        {cocktail_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            
            return (
              <CocktailItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default CocktailDisplay;
