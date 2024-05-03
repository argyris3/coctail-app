import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");
  const [nav, setNav] = useState(false);
  const { getTotalCartAmount, token, setToken, logout } =
    useContext(StoreContext);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <article>
      <section className="flex items-center  justify-between">
        <div className="flex gap-2 items-center cursor-pointer  p-2">
          <img className="w-12 h-7 md:w-16 md:h-9 " src={assets.logo} alt="" />
          <Link to="/" className="hidden sm:block hover:text-red-500 text-xl ">
            Cocktails Shop{" "}
          </Link>
        </div>
        <ul className="md:flex hidden gap-3 cursor-pointer">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            menu
          </a>
          <a
            href="#explore-menu"
            onClick={() => setMenu("categories")}
            className={menu === "categories" ? "active" : ""}
          >
            categories
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("about us")}
            className={menu === "about us" ? "active" : ""}
          >
            about us{" "}
          </a>
        </ul>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="input input-sm w-[100px] md:w-[120px] input-bordered input-success     "
          />
          <Link to="/cart">
            <img className="w-16 h-10 relative" src={assets.basket} alt="" />
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "absolute min-w-[10px] min-h-[10px] bg-orange-600 rounded-[5px] top-[2px] right-[95px]"
            }
          ></div>
          {!token ? (
            <button
              onClick={() => setShowLogin(true)}
              className="btn btn-sm  md:btn-md btn-success hover:btn-primary"
            >
              Συνδεση
            </button>
          ) : (
            <div className="navbar-profile">
              <img src={assets.profile} alt="" />
              <ul className=" navbar-profile-dropdown ">
                <li onClick={() => navigate("/myorders")}>
                  <img src={assets.bag} alt="" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout} alt="" />
                  <p>Logout</p>
                </li>
                <hr />
                {/* {admin && <Link to="/admin">Admin Panel</Link>} */}
              </ul>
            </div>
          )}
        </div>
      </section>
      <div className="block md:hidden z-40" onClick={handleNav}>
        {nav ? (
          <RxCross2 size={25} className="text-white] cursor-pointer" />
        ) : (
          <TiThMenu className="text-red-500 cursor-pointer" size={25} />
        )}
      </div>
      <div
        className={`md:hidden absolute w-1/3 sm:2/5 max-h-[400px] z-40 px-4 py-2 text-xl font-medium ease-in shadow-sm backdrop-blur-md  bg-transparent top-24 duration-500 ${
          nav ? "left-0" : "left-[-100%]"
        } pt-34`}
      >
        <ul className="flex flex-col gap-3 items-center">
          <a
            href="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            home
          </a>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            menu
          </a>
          <a
            href="#explore-menu"
            onClick={() => setMenu("categories")}
            className={menu === "categories" ? "active" : ""}
          >
            categories
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("about us")}
            className={menu === "about us" ? "active" : ""}
          >
            about us{" "}
          </a>
        </ul>
      </div>
    </article>
  );
};

export default Navbar;
