import React from "react";
import { FaBook, FaQuestionCircle, FaPlayCircle } from "react-icons/fa";

const QuizOptions = () => {
  return (
    <div className="m-6 text-gray-400 flex gap-12 text-center justify-between px-24 mt-24 text-xl">
      <div className="border-l-2 border-fuchsia-900 rounded-3xl bg-cyloDarker shadow-2xl shadow-fuchsia-950 px-12 py-24 flex items-center flex-col gap-4 w-64">
        <p>WYBIERZ TEMATYKE</p>
        <FaBook size={30} className="text-gray-400" />
      </div>
      <div className="border-l-2 border-teal-600 rounded-3xl bg-cyloDarker shadow-2xl shadow-teal-950 px-12 py-24 flex items-center flex-col gap-4 w-64">
        <p>USTAL LICZBE PYTAŃ</p>
        <FaQuestionCircle size={30} className="text-gray-400" />
      </div>
      <div className="border-l-2 border-amber-500 rounded-3xl bg-cyloDarker shadow-2xl shadow-amber-900 px-12 py-24 flex items-center flex-col gap-4 w-64">
        <p>ROZWIĄŻ QUIZ</p>
        <FaPlayCircle size={30} className="text-gray-400" />
      </div>
    </div>
  );
};

export default QuizOptions;
