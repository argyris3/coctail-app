import React, { useContext } from 'react';
import FormatPrice from './FormatPrice';
import { MdAdd } from 'react-icons/md';
import { MdOutlineRemove } from 'react-icons/md';
import { StoreContext } from '../context/StoreContext';
import { Link } from 'react-router-dom';

const CocktailItem = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeToCart, url } = useContext(StoreContext);
  return (
    <div className="w-full shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 ">
      <div className="relative">
        <img className="w-full md:w-[300px] h-[240px]" src={url+"/images/"+image} alt="" />
        {!cartItems[id] ? (
          <p
            onClick={() => addToCart(id)}
            className="text-white absolute w-[35px] text-center bottom-4 right-4 cursor-pointer rounded-badge bg-red-500 "
          >
            Add
          </p>
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-3 p-2 rounded-badge bg-white text-orange-500 cursor-pointer  ">
            <MdOutlineRemove onClick={() => removeToCart(id)} />
            <p>{cartItems[id]}</p>
            <MdAdd onClick={() => addToCart(id)} />
          </div>
        )}
      </div>
      <div className="p-4 ">
        <Link to={`/cocktail/${id}`} className="text-lg font-medium text-orange-300 ">
          {name}
        </Link>

        <p className="text-gray-300 text-md">{description}</p>
        <p className="text-green-600 font-medium">{FormatPrice(price)}</p>
      </div>
    </div>
  );
};

export default CocktailItem;
