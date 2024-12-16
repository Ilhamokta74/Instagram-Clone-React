import React from 'react';

const StoryBar = () => {
  const stories = ['jeane', 'alia', 'jkt48.lulu', 'asheladz'];

  return (
    <div className="flex overflow-x-scroll space-x-4 p-4 bg-black">
      {stories.map((story, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center">
            <span className="text-white font-semibold">{story[0].toUpperCase()}</span>
          </div>
          <p className="text-white text-xs mt-2">{story}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryBar;
