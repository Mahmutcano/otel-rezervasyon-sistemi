import React from "react";

const StepperControl = ({ handleClick, currenStep, steps }) => {
  return (
    <div className="bg-hotel-brand-color rounded-3xl flex justify-around pb-5 mb-5 mx-10">
      {/* Back Button */}
      <button
        onClick={() => handleClick()}
        className={`shadow-lg bg-white text-hotel-color py-2 px-10 mt-5 rounded-xl font-normal cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
          currenStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Geri
      </button>
      {/* Next Button */}
      <button
        onClick={() => handleClick("next")}
        className="shadow-lg bg-hotel-color text-white py-2 px-10 mt-5  rounded-xl font-normal cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
      >
        {currenStep === steps.length
          ? "Ödeme Yap ve Bitir"
          : "Kaydet ve Devam Et"}
      </button>
    </div>
  );
};

export default StepperControl;
