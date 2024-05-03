import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import FormatPrice from '../components/FormatPrice';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, cocktail_list, cartItems, url } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    cocktail_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo['quantity'] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    let response = await axios.post(url + '/api/order/place', orderData, { headers: { token } });

    if (response.data.success) {
      const { session_url } = response.data;

      window.location.replace(session_url);
    } else {
      alert('error');
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart');
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart');
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className="grid md:grid-cols-2 mt-7 p-6   gap-4">
      <div className="mb-7">
        <p className="text-3xl">Delivery Information</p>
        <div className="p-3 flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-2 ">
          <input
            required
            name="firstName"
            type="text"
            onChange={onChangeHandler}
            value={data.firstName}
            placeholder=" Ονομα.."
            className="input input-bordered input-info w-full max-w-xs "
          />
          <input
            required
            type="text"
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            placeholder="Επωνυμο.."
            className="input input-bordered input-info w-full max-w-xs"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Email.."
            onChange={onChangeHandler}
            value={data.email}
            className="input input-bordered input-info w-full max-w-xs"
          />
          <input
            required
            type="text"
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            placeholder="Οδος.."
            className="input input-bordered input-info w-full max-w-xs"
          />

          <input
            required
            type="text"
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            placeholder=" Πολη.."
            className="input input-bordered input-info w-full max-w-xs"
          />
          <input
            required
            type="text"
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            placeholder="Νομος.."
            className="input input-bordered input-info w-full max-w-xs"
          />

          <input
            required
            type="text"
            name="zipcode"
            placeholder=" Ταχ.Κωδικας.."
            onChange={onChangeHandler}
            value={data.zipcode}
            className="input input-bordered input-info w-full max-w-xs"
          />
          <input
            required
            type="text"
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            placeholder="Χωρα.."
            className="input input-bordered input-info w-full max-w-xs"
          />

          <input
            required
            type="text"
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            placeholder="Τηλεφωνο.."
            className="input input-bordered input-info w-full max-w-xs"
          />
        </div>
      </div>
      <div>
        <div className=" flex flex-col gap-3">
          <h2 className="text-3xl">Cart Totals</h2>
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
          <button type="submit" className="btn btn-sm btn-success text-lg ">
            CheckOut
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
