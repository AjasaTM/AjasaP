import React from "react";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-200 px-4 py-8">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-sm mb-2">123 Main Street</p>
            <p className="text-sm">(1x3) 4x6-xxxx</p>
          </div>
          <nav className="md:ml-8">
            <h2 className="text-lg font-bold mb-2">Links</h2>
            <ul className="flex flex-col md:flex-row">
              <li className="mb-2 md:mb-0 md:mr-4">
                <a href="#" className="hover:text-gray-400">Home</a>
              </li>
              <li className="mb-2 md:mb-0 md:mr-4">
                <a href="#" className="hover:text-gray-400">Transactions</a>
              </li>
              <li className="mb-2 md:mb-0 md:mr-4">
                <a href="#" className="hover:text-gray-400">Services</a>
              </li>
              <li className="mb-2 md:mb-0">
                <a href="#" className="hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="border-t border-gray-600 pt-8 mt-4 text-sm text-center">
          <p>&copy; 2023 GrandidaFX. All Rights Reserved.</p>
        </div>
      </footer>
    );
};
  
  export default Footer;
  