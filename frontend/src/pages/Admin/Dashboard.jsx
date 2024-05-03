import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";

import { GrAdd } from "react-icons/gr";
import { FcList } from "react-icons/fc";
import { FaFirstOrder } from "react-icons/fa";
import Pagination from "../../components/Pagination";

const Dashboard = ({ url }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [addItem, setAddItem] = useState(false);
  const [list, setList] = useState(false);
  const [list1, setList1] = useState([]);
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    recipe: [],
    price: "",
    category: "Vodka",
  });

  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = list1.slice(firstPostIndex, lastPostIndex);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const showAddItem = () => {
    if (addItem === true) {
      setAddItem(false);
      setList(false);
      setShowOrders(false);
    } else {
      setAddItem(true);
      setList(false);
      setShowOrders(false);
    }
  };

  const showListItem = () => {
    if (list === true) {
      setList(false);
      setAddItem(false);
      setShowOrders(false);
    } else {
      setList(true);
      setAddItem(false);
      setShowOrders(false);
    }
  };
  const showOrderItem = () => {
    if (showOrders === true) {
      setShowOrders(false);
      setList(false);
      setAddItem(false);
    } else {
      setShowOrders(true);
      setList(false);
      setAddItem(false);
    }
  };

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/cocktail/list`);
    console.log(response.data);
    if (response.data.success) {
      setList1(response.data.data);
    } else {
    }
  };

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const statusHandler = async (e, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: e.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("recipe", data.recipe);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("method", data.method);
    formData.append("servedAt", data.servedAt);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/cocktail/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        recipe: [],
        price: "",
        method: "",
        servedAt: "",
        category: "Vodka",
      });
      setImage(false);
    } else {
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeCocktail = async (cocktailId) => {
    const response = await axios.post(`${url}/api/cocktail/delete`, {
      id: cocktailId,
    });
    await fetchList();
  };

  return (
    <section className="mt-9 flex">
      <hr />
      <div className="w-[18%] min-h-screen  border-[1.5px] border-solid border-[#a9a9a9] border-t-0 text-[max(1vh_10px)]">
        <div className="pt-10 pl-[20%] flex flex-col gap-5">
          <button
            onClick={showAddItem}
            className="flex items-center gap-3 border-[1px] border-solid border-[#a9a9a9] border-r-0 p-2 cursor-pointer  rounded-[3px_0px_0px_3px] hover:bg-red-600"
          >
            <GrAdd />
            <p className="hidden md:block">Add Items</p>
          </button>
          <button
            onClick={showListItem}
            className="flex items-center gap-3 border-[1px] border-solid border-[#a9a9a9] border-r-0 p-2 cursor-pointer  rounded-[3px_0px_0px_3px] hover:bg-red-600"
          >
            <FcList />
            <p className="hidden md:block">List items</p>
          </button>
          <button
            onClick={showOrderItem}
            className="flex items-center gap-3 border-[1px] border-solid border-[#a9a9a9] border-r-0 p-2 cursor-pointer  rounded-[3px_0px_0px_3px] hover:bg-red-600"
          >
            <FaFirstOrder />
            <p className="hidden md:block">Orders</p>
          </button>
        </div>
      </div>
      <div>
        {addItem && (
          <div className="flex flex-col  ml-8 mt-12 text-xl text-blue-200">
            <form onSubmit={onSubmitHandler} className="flex flex-col gap-3">
              <div className="flex flex-col gap-5">
                <p className="">Upload Image</p>
                <label htmlFor="">
                  <img
                    className="w-[120px] cursor-pointer "
                    src={image ? URL.createObjectURL(image) : assets.upload}
                    width={120}
                    alt=""
                  />
                </label>
                <input
                  className="input input-primary"
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="">Product name</p>
                <input
                  onChange={onChangeHandler}
                  value={data.name}
                  type="text"
                  name="name"
                  placeholder="Type here.."
                  className="input w-full input-primary"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="">Product Glass</p>
                <input
                  onChange={onChangeHandler}
                  value={data.servedAt}
                  type="text"
                  name="servedAt"
                  placeholder="Type here.."
                  className="input w-full input-primary"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p>Product Method</p>
                <textarea
                  onChange={onChangeHandler}
                  value={data.method}
                  className="textarea textarea-primary"
                  name="method"
                  id="method"
                  cols={30}
                  rows="6"
                  placeholder="Write your method"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p>Product recipe</p>
                <textarea
                  onChange={onChangeHandler}
                  value={data.recipe}
                  className="textarea textarea-primary"
                  name="recipe"
                  id="recipe"
                  cols={30}
                  rows="6"
                  placeholder="Write your recipe"
                />
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col gap-3 mb-4">
                  <p>Product Category</p>
                  <select
                    onChange={onChangeHandler}
                    className="select select-primary w-full"
                    name="category"
                  >
                    <option value="Jean">Jean</option>
                    <option value="Vodka">Vodka</option>
                    <option value="Rum">Rum</option>
                    <option value="Tequila">Tequila</option>
                    <option value="Whiskey">Whiskey</option>
                    <option value="Wine">Wine</option>
                    <option value="Champagne">Champange</option>
                    <option value="Beer">Beer</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <p>Product Price</p>
                  <input
                    onChange={onChangeHandler}
                    value={data.price}
                    className="input input-primary"
                    type="number"
                    name="price"
                    // placeholder="$20.."
                  />
                </div>
              </div>
              <button className="btn btn-primary text-xl" type="submit">
                ADD
              </button>
            </form>
          </div>
        )}
      </div>
      <div>
        {list && (
          <div>
            <p className="text-2xl text-center mt-4 mb-4 text-blue-400 ">
              Cocktail List
            </p>
            <div>
              <div className="grid grid-cols-[1.5fr_1fr_1fr_0.5fr_0.5fr] items-center  px-3 py-3 border-[1px] border-solid border-[#cacaca] text-lg">
                <b className="text-blue-300">Image</b>
                <b className="text-blue-300">Name</b>
                <b className="text-blue-300">Category</b>
                <b className="text-blue-300">Price</b>
                <b className="text-blue-300">Action</b>
              </div>
              {currentPosts.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-[1.5fr_1fr_1fr_0.5fr_0.5fr] items-center gap-4 px-3 py-5 border-[1px] border-solid border-[#cacaca] text-lg ml-5 mb-3   "
                  >
                    <img
                      src={`${url}/images/` + item.image}
                      width={150}
                      alt=""
                    />
                    <p className="text-orange-500">{item.name}</p>
                    <p className="text-orange-500">{item.category}</p>
                    <p className="text-orange-500">{item.price}</p>
                    <p
                      onClick={() => removeCocktail(item._id)}
                      className="hover:text-red-600 cursor-pointer"
                    >
                      X
                    </p>
                  </div>
                );
              })}
              <Pagination
                totalPosts={list1.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        )}
      </div>
      <div>
        {showOrders && (
          <div>
            <h3 className="text-4xl mb-5 text-center text-red-500">
              Order Page
            </h3>
            <div>
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[2fr_1fr_1fr_1fr] place-content-start gap-7 border-[1px] border-solid border-red-400"
                >
                  <p className="text-indigo-200">
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return item.name + "x" + item.quantity;
                      } else {
                        return item.name + "x" + item.quantity + ",";
                      }
                    })}
                  </p>
                  <p className="text-indigo-200">
                    {order.address.firstName + "   " + order.address.lastName}
                  </p>
                  <p className="text-indigo-200">Items:{order.items.length}</p>
                  <p className="text-red-400">${order.amount}</p>
                  <select
                    onChange={(e) => statusHandler(e, order._id)}
                    value={order.status}
                    className="select"
                  >
                    <option value="Cocktail Processing">
                      Cocktail Proccessing
                    </option>
                    <option value="Out Of Delivery">Out Of Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Dashboard;
