// Header.jsx
import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="w-full text-white" style={{ backgroundImage: `url('./images/sun.jpg')` }}>
      <section className="py-12 container mx-auto flex flex-col " >
        <div>
        <Navbar/>
        </div>
        <div>
        </div>
        <div className="bg-cover bg-center h-64 flex items-center justify-center w-full">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Country API App</h1>
            <p className="text-lg py-5">This is a simple app that allows you to search for countries and continents using the API.</p>
            <input type="text" placeholder="Search country by name" className="mt-4 p-2  lg:w-2/3" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;

