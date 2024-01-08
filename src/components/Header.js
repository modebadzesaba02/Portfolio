
import React from 'react';
import '../Header.css'

const Header = () => {
  return (
    <header className="bg-gray-800 text-gray-400  pl-4 pr-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="black-section  position: relative right-[45px]">
          <div className="bg-black  p-10 rounded w-[450px] ">
            <h1 className="text-2xl font-bold text-white">Saba.M</h1>
          </div>
        </div>
        <nav className="flex space-x-10 font-bold">
          <a href="#" className="hover:text-gray-400">Education</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
          <a href="#" className="hover:text-gray-400">Work</a>
          <a href="#" className="hover:text-gray-400">Photography</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
