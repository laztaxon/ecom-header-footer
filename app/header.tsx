import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="bg-black p-4">
      <div className="flex justify-between items-center">
        <div className="text-white">MY ACCT</div>

        <div className="flex space-x-4">
          <div className="text-white">📖</div>
          <div className="text-white">💲</div>
          <div className="text-white">🌱</div>
          <div className="text-white">🛒</div>
          <div className="text-white">🔍</div>
        </div>
      </div>

      <div className="bg-teal-600 p-4 mt-4">
        <div className="space-y-2">
          <div className="text-white">SHOP</div>
          <div className="text-white">HELP</div>
          <div className="text-white">FAQ</div>
          <div className="text-white">CONTACT</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
