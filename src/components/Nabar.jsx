import { Link, NavLink } from "react-router-dom";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaTimes, FaBars } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

// List of navigation items
const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" }
];

// NavItem Component
const NavItem = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navItems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "hover:text-primary"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollad, setIsScrollad] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  //when scroll apply bg color to nabbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrollad(true)
      } else {
        setIsScrollad(false)
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  }, [])

  // cart items from context

  const {cartCount} = useContext(CartContext)
  return (
    <header className={`w-full fixed top-0 right-0 z-50 transition duration-300 ease-in-out  ${isScrollad ? "bg-white shadow-md text-black" : "bg-transparent"}`}>
      <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">
        {/* Logo with right margin to add space */}
        <Link to="/" className="font-bold text-2xl mr-8">Logo</Link>

        {/* Hamburger Menu for Mobile */}
        <div onClick={toggleMenu} className="md:hidden text-xl cursor-pointer hover:text-primary">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu Section */}
        <div className="hidden md:flex md:ml-auto">
          <NavItem />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-85 flex flex-col items-center justify-center space-y-8 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        >
          {isMenuOpen && (
            <div className="absolute top-3 right-4 text-xl cursor-pointer" onClick={toggleMenu}>
              <FaTimes />
            </div>
          )}
          <NavItem toggleMenu={toggleMenu} />
        </div>

        {/* Cart Icon */}
        <div className="hidden md:block relative ml-8"> {/* Added ml-8 for spacing */}
          <RiShoppingBag4Line />
          <sup className="absolute top-0 -right-3 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-sm">{ cartCount}</sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
