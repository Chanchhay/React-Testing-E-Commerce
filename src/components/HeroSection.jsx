import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col h-screen">
        {/* Navbar */}
        <div className="text-[17px] px-[180px] py-[24px] bg-white flex justify-between items-center">
          {/* Logo */}
          <div>
            <h1 className="text-[36px] font-semibold">
              Jewelry <span className="text-[#C8815F]">.</span>
            </h1>
          </div>
          {/* Navigation */}
          <div>
            <ul className="flex gap-[32px]">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Shop</li>
              <li className="cursor-pointer">Products</li>
              <li className="cursor-pointer">Pages</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Elements</li>
            </ul>
          </div>
          {/* Icons */}
          <div className="flex gap-[24px]">
            <i className="fas fa-search text-[24px] cursor-pointer" />
            <i className="fas fa-user text-[24px] cursor-pointer" />
            <i className="far fa-heart text-[24px] cursor-pointer" />
            <i className="fas fa-shopping-bag text-[24px] cursor-pointer" />
          </div>
        </div>
        {/* Hero Section */}
        <div className=" flex-1">
          <div className=" h-full bg-[url('https://res.cloudinary.com/dkt1t22qc/image/upload/v1742496031/Prestataires_Documents/dygqcsf4puzswq30yssx.png')] bg-cover bg-center bg-no-repeat flex items-center text-white pl-[137px]">
            <div className="flex flex-col">
              <div className="text-[34px] leading-8">Every piece of</div>
              <div className="text-[56px] font-medium mb-4">
                Jewelry tells a story
              </div>
              <p className="w-[397px] mb-[40px]">
                “A gentleman knows his appearance is very important that shows
                his characteristic.” - Unknown
              </p>
              <div className="flex gap-[16px]">
                <a href="https://youtu.be/9tdewlwamFw?si=hSfImLajCynDL-2r">
                  {" "}
                  <button className="rounded-[4px] p-[12px] bg-white font-medium text-black">
                    Shop Now
                  </button>
                </a>
                <button className="rounded-[4px] p-[12px] border-2 border-white text-white font-medium">
                  New Items
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
