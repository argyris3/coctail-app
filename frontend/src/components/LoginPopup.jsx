import React, { useContext, useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState('Sign Up');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    isAdmin: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === 'Login') {
      newUrl += '/api/user/login';
    } else {
      newUrl += '/api/user/register';
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="absolute z-10  w-full h-full bg-[#00000090] grid">
      <form
        onSubmit={onLogin}
        className="place-self-center w-[max(23vw,390px)] text-[#808080] bg-white  flex flex-col gap-5 p-[25px_30px] text-sm  "
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="text-green-600 text-lg">{currState}</h2>
          <RxCross2 size={16} onClick={() => setShowLogin(false)} className="cursor-pointer" />
        </div>
        <div>
          {currState === 'Login' ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              placeholder="Your Name"
              className="input input-bordered input-success w-full max-w-xs"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Your Email"
            className="input input-bordered input-primary w-full max-w-xs"
            required
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            placeholder="Your Password"
            className="input input-bordered input-primary w-full max-w-xs"
            required
          />
        </div>
        <button type="submit" className="btn btn-sm btn-glass ">
          {currState === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>
        {currState === 'Login' ? (
          <p>
            Δημιουργησε Λογαριασμο?
            <span className="cursor-pointer hover:text-orange-500" onClick={() => setCurrState('Sign up')}>
              Click Here{' '}
            </span>
          </p>
        ) : (
          <p>
            Εχεις ηδη Λογαριασμο?
            <span className="cursor-pointer hover:text-orange-500" onClick={() => setCurrState('Login')}>
              Συνδεση
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
