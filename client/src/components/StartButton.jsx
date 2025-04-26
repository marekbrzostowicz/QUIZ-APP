import React from "react";

const StartButton = ({ onClick }) => {
  return (
    <button
      className="bg-neutral-900 text-gray-400 py-6 px-12 rounded-2xl mx-auto block mt-20 hover:bg-neutral-600 border border-gray-400 font-semibold text-xm"
      onClick={onClick}
    >
      START
    </button>
  );
};

export default StartButton;
