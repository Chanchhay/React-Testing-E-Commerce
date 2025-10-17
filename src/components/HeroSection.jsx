import { useState } from "react";
import { Menu, X, Search, User, Heart, ShoppingBag } from "lucide-react";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "Shop", "Products", "Pages", "Blog", "Elements"];

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="px-4 sm:px-6 lg:px-[180px] py-4 sm:py-6 flex justify-between items-center">
          {/* Logo */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Jewelry <span className="text-[#C8815F]">.</span>
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <div className="hidden md:flex">
            <ul className="flex gap-6 lg:gap-8 text-sm lg:text-base">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-[#C8815F] transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Icons - Desktop */}
          <div className="hidden md:flex gap-4 lg:gap-6">
            <Search
              size={20}
              className="lg:w-6 lg:h-6 cursor-pointer hover:text-[#C8815F] transition"
            />
            <User
              size={20}
              className="lg:w-6 lg:h-6 cursor-pointer hover:text-[#C8815F] transition"
            />
            <Heart
              size={20}
              className="lg:w-6 lg:h-6 cursor-pointer hover:text-[#C8815F] transition"
            />
            <ShoppingBag
              size={20}
              className="lg:w-6 lg:h-6 cursor-pointer hover:text-[#C8815F] transition"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t">
            <ul className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer py-2 hover:text-[#C8815F] transition"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-6 p-4 border-t">
              <Search size={20} className="cursor-pointer" />
              <User size={20} className="cursor-pointer" />
              <Heart size={20} className="cursor-pointer" />
              <ShoppingBag size={20} className="cursor-pointer" />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="flex-1">
        <div
          className="h-full bg-cover bg-center bg-no-repeat flex items-center justify-center md:justify-start px-6 sm:px-8 lg:pl-[137px] py-12 md:py-0"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dkt1t22qc/image/upload/v1742496031/Prestataires_Documents/dygqcsf4puzswq30yssx.png')",
          }}
        >
          <div className="flex flex-col text-white max-w-md md:max-w-lg">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight mb-2">
              Every piece of
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 lg:mb-6">
              Jewelry tells a story
            </div>
            <p className="text-sm sm:text-base mb-6 lg:mb-8 leading-relaxed opacity-95">
              "A gentleman knows his appearance is very important that shows his
              characteristic." - Unknown
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://youtu.be/9tdewlwamFw?si=hSfImLajCynDL-2r"
                className="flex-1 sm:flex-none"
              >
                <button className="w-full sm:w-auto rounded px-4 sm:px-6 py-2.5 sm:py-3 bg-white font-medium text-black hover:bg-gray-100 transition text-sm sm:text-base">
                  Shop Now
                </button>
              </a>
              <button className="rounded px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition text-sm sm:text-base">
                New Items
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
