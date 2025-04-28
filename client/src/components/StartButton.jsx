import React from "react";

const StartButton = ({ onClick }) => {
  return (
    <button
      className="bg-cyloDarker text-gray-400 py-6 px-12 rounded-2xl mx-auto block mt-20 hover:bg-neutral-700 font-semibold text-xm tracking-widest"
      onClick={onClick}
    >
      START
    </button>
  );
};

export default StartButton;
