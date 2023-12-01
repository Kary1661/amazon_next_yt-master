import Image from "next/image";
import logo from "../images/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full h-24 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
      <div className="flex justify-center gap-6 mb-3">
        <FaFacebookSquare />
        <IoLogoInstagram />
      </div>
      <Image className="w-20" src={logo} alt="logo" />
      <p className="text-sm -mt-4">
        All rights reserved{" "}
        <a
          className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300"
          href="https://prodevs.com.ar"
          target="_blank"
        >
          @prodevs.com.ar
        </a>
      </p>
    </div>
  );
};

export default Footer;
