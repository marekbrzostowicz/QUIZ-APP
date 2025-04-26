import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 bg-emerald-500 rounded-full animate-pulse"
        ></div>
        <p className="text-gray-300 text-lg font-bold">Ładowanie...</p>
      </div>
    </div>
  );
};

export default Loading;