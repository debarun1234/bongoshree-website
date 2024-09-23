import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto text-center">
        <p>Follow us on:</p>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="px-2">
          Facebook
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="px-2">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
