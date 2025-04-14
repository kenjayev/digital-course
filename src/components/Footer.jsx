import React from "react";

const Footer = () => {
  return (
    <div className="h-[80px] flex justify-center items-center bg-gradient-to-r from-[#242633] to-[#2c2d2d] border-t-2 border-white">
      <p className="text-white font-semibold text-base sm:text-lg md:text-xl">
        © {new Date().getFullYear()} All rights reserved Limsa
      </p>
    </div>
  );
};

export default Footer;
