import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Bongoshree Cultural Association</h1>
        <nav>
          <Link to="/" className="px-2">
            Home
          </Link>
          <Link to="/about-us" className="px-2">
            About Us
          </Link>
          <Link to="/contact-us" className="px-2">
            Contact Us
          </Link>
          <Link to="/blog" className="px-2">
            Blog
          </Link>
          <Link to="/membership" className="px-2">
            Membership
          </Link>
          <Link to="/event-calendar" className="px-2">
            Event Calendar
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
