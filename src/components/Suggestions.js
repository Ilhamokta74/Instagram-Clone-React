import React from 'react';

const Suggestions = () => {
  const suggestions = [
    { name: 'instagram', follow: 'Followed by zaranrl' },
    { name: '_rya.z.s.s', follow: 'Followed by zaranrl' },
  ];

  return (
    <div className="w-1/4 p-6 text-white">
      <h4 className="text-lg font-semibold mb-6">Suggested for you</h4>
      {suggestions.map((user, index) => (
        <div
          key={index}
          className="flex justify-between items-center mb-4 text-sm"
        >
          <div>
            <p className="font-bold">{user.name}</p>
            <span className="text-gray-400">{user.follow}</span>
          </div>
          <button className="text-blue-500 font-semibold">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
