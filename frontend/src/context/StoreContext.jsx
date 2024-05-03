import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = 'http://localhost:4001';
  const [token, setToken] = useState('');
  const [cocktail_list, setCocktailList] = useState([]);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(url + '/api/cart/add', { itemId }, { headers: { token } });
    }
  };

  const removeToCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(url + '/api/cart/remove', { itemId }, { headers: { token } });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = cocktail_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchCocktailList = async () => {
    const response = await axios.get(url + '/api/cocktail/list');
    setCocktailList(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(url + '/api/cart/get', {}, { headers: { token } });
    setCartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchCocktailList();
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'));
        await loadCartData(localStorage.getItem('token'));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    cocktail_list,
    cartItems,
    setCartItems,
    addToCart,
    removeToCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    logout,
  };
  return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
};

export default StoreContextProvider;
