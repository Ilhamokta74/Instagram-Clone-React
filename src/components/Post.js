import React from 'react';

const Post = () => {
  return (
    <div className="bg-gray-900 text-white rounded-lg my-6 p-4 max-w-3xl mx-auto shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-500"></div>
          <p className="font-bold">alia • 14h</p>
        </div>
        <span className="text-gray-400 text-xl cursor-pointer">...</span>
      </div>

      {/* Image */}
      <div>
        <img
          src="/images/photos.jpg"
          alt="post"
          className="rounded-lg w-full"
        />
      </div>

      {/* Actions */}
      <div className="flex space-x-4 mt-4">
        <span>❤️</span>
        <span>💬</span>
        <span>📤</span>
      </div>

      {/* Caption */}
      <p className="text-gray-300 mt-2">
        <span className="font-bold">alia</span> This is an example post caption.
      </p>
    </div>
  );
};

export default Post;
