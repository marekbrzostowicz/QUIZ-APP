import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="flex space-x-2 justify-center items-center">
        <span className="sr-only">Ładowanie...</span>
        <div
          className="h-3 w-3 bg-fuchsia-500 rounded-full animate-bounce"
          style={{ animationDelay: "0ms" }}
        ></div>
        <div
          className="h-3 w-3 bg-amber-500 rounded-full animate-bounce"
          style={{ animationDelay: "150ms" }} //
        ></div>
        <div
          className="h-3 w-3 bg-teal-500 rounded-full animate-bounce"
          style={{ animationDelay: "300ms" }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
