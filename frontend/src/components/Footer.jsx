import { assets } from "../assets/assets";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer bg-black/50" id="footer">
      <div className="w-full grid grid-cols-[2fr,1fr,1fr]">
        <div className="flex flex-col items-start gap-4">
          <span className="text-2xl">Cocktail Shop</span>
          <img
            className="w-[100px] h-[50px] md:w-[200px] md:h-[150px]"
            src={assets.footerLogo}
            alt=""
          />

          <p className="text-lg">
            Μια εφαρμογη για τους λατρεις των cocktail..
          </p>
          <div className="flex gap-3 cursor-pointer">
            <FaGithub size={30} />
            <FaLinkedin size={30} />
            <FaTwitter size={30} />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg md:text-xl">Company</h2>
          <ul className="text-lg cursor-pointer">
            <a href="/">Home</a>
            <li>Categories</li>
            <li>About us</li>
            <a href="#explore-menu">Menu</a>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 cursor-pointer">
          <h2 className="text-lg md:text-xl">Get In Touch</h2>
          <ul className="text-lg">
            <li>2463505050</li>
            <li>argy@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[1px] my-5 mx-0 bg-gray-400 border-none" />
      <p className="text-lg">Copyright 2024 by Argyrios</p>
    </div>
  );
};

export default Footer;
