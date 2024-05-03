import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { assets } from '../assets/assets';
import { useParams } from 'react-router-dom';

const SingleCocktail = () => {
  const { cocktail_list, url } = useContext(StoreContext);
  let { id: itemId } = useParams();
  console.log(itemId);

  // console.log(coctail_list);
  // console.log(coctail_list[0].name);

  // console.log(single);
  // console.log(cockId);
  const singleCocktail = cocktail_list.find((item) => itemId === item._id);

  return (
    <div className="mt-6">
      <div>
        <img className="min-w-full max-h-[300px] bg-cover" src={assets.single} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col p-3 gap-10">
          <img className="w-[500px] rounded-full" src={url + '/images/' + singleCocktail?.image} alt="" />
          <h1 className="text-5xl font-semi-bold  ml-9 md:ml-5 text-orange-500">{singleCocktail?.name}</h1>
        </div>
        <div className="flex flex-col p-4 items-center gap-6">
          <h2 className="text-5xl  text-orange-500">Ingredients</h2>
          <p className="text-lg text-slate-300 ">{singleCocktail?.recipe}</p>
          <h2 className="text-5xl text-orange-500">Method</h2>
          <p className="text-slate-300">{singleCocktail?.method}</p>
          <h2 className="text-5xl text-orange-500">Served At</h2>
          <p className="text-lg text-slate-300 ">{singleCocktail?.servedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
