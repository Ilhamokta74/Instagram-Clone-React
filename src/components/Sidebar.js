import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-black text-white h-screen p-6">
      <h1 className="text-2xl font-bold mb-8">Instagram</h1>
      <ul className="space-y-6">
        <li className="hover:text-gray-400 cursor-pointer">🏠 Home</li>
        <li className="hover:text-gray-400 cursor-pointer">🔍 Search</li>
        <li className="hover:text-gray-400 cursor-pointer">📷 Explore</li>
        <li className="hover:text-gray-400 cursor-pointer">🎥 Reels</li>
        <li className="hover:text-gray-400 cursor-pointer">💬 Messages</li>
        <li className="hover:text-gray-400 cursor-pointer">❤️ Notifications</li>
        <li className="hover:text-gray-400 cursor-pointer">➕ Create</li>
        <li className="hover:text-gray-400 cursor-pointer">👤 Profile</li>
      </ul>
    </div>
  );
};

export default Sidebar;
