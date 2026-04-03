import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 border-b border-gray-700 bg-[#212121]">
      <h1 className="text-3xl font-bold tracking-tight">TO-DO LIST</h1>
      <button className="bg-[#6b7280] hover:bg-[#4b5563] text-white px-4 py-2 rounded-md font-medium transition-colors">
        Creator
      </button>
    </header>
  );
};

export default Header;
