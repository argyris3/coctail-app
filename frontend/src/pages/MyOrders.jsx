import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import bag from '../assets/bag.jpg';

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(url + '/api/order/userorders', {}, { headers: { token } });
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="m-[50px_0px]">
      <h2>My Orders</h2>
      <div className="flex flex-col gap-5 mt-6">
        {data.map((order, index) => {
          return (
            <div
              className="grid grid-cols-[2fr_1fr_1fr_2fr_1fr] place-items-center gap-5 text-sm p-[10px_20px] text-[#454545] border-[1px] border-solid border-red-500  "
              key={index}
            >
              <p className="text-sm text-blue-100">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + 'x' + item.quantity;
                  } else {
                    return item.name + 'x' + item.quantity + ',';
                  }
                })}
              </p>
              <p className="text-blue-100">${order.amount}.00</p>
              <p className="text-blue-100">Items:{order.items.length}</p>
              <p className="text-blue-100">
                <span className="text-red-200">&#x34f</span>
                <b>{order.status}</b>
              </p>
              <button onClick={fetchOrders} className="btn btn-primary">
                {' '}
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MyOrders;
