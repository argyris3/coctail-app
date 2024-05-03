import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import FormatPrice from '../components/FormatPrice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, cocktail_list, removeToCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="mt-[100px]">
      <div>
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-blue-500 text-[max(1vw,16px)] ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {cocktail_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-blue-600 text-[max(1vw,16px)] m-[10px_0px]   ">
                  <img className="w-[75px]" src={url + '/images/' + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{FormatPrice(item.price)}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{FormatPrice(item.price * cartItems[item._id])}</p>
                  <p onClick={() => removeToCart(item._id)} className="cursor-pointer hover:text-red-700">
                    x
                  </p>
                </div>
                <hr className="h-[0.5px] bg-[#e2e2e2] border-none" />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-[80px] flex  gap-[max(12vw,20px)] max-w-[700px] text-red-300 ">
        <div className="flex-1 flex flex-col gap-4">
          <h2>Cart Totals</h2>
          <div>
            <div className="flex justify-between text-red-300">
              <p className="text-lg">SubTotal</p>
              <p className="text-lg">{FormatPrice(getTotalCartAmount())}</p>
            </div>
            <hr className="m-[10px_0px]" />
            <div className="flex justify-between text-red-300">
              <p className="text-lg">Delivery Fee</p>
              <p className="text-lg">{getTotalCartAmount() === 0 ? 0 : FormatPrice(2)}</p>
            </div>
            <hr className="m-[10px_0px]" />
            <div className="flex justify-between text-red-300">
              <b className="text-lg">Total</b>
              <b className="text-lg text-green-700">
                {getTotalCartAmount() === 0 ? 0 : FormatPrice(getTotalCartAmount() + 2)}
              </b>
            </div>
          </div>
          <button onClick={() => navigate('/order')} className="btn btn-sm btn-success text-lg ">
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
