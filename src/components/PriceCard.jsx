import React from "react";

const PriceCard = () => {
  return (
    <div className="shadow-lg bg-hotel-brand-color text-hotel-color text-lg font-bold text-center p-3 rounded-lg row-span-5">
      <h1 className="flex text-start p-5 uppercase">İstanbul</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-2 gap-1 md:gap-4 lg:gap-3 p-3">
        <div className="shadow-lg bg-white text-hotel-color text-lg font-bold text-center p-14 rounded-lg">
          1
        </div>
        <div className="shadow-lg bg-white text-hotel-color text-lg font-bold text-center p-14 rounded-lg">
          2
        </div>
        <div className="shadow-lg bg-white text-hotel-color text-lg font-bold text-center p-14 rounded-lg">
          3
        </div>
        <div className="shadow-lg bg-white text-hotel-color text-lg font-bold text-center p-14 rounded-lg">
          4
        </div>
        <div className="shadow-lg bg-white text-hotel-color text-lg font-bold text-center p-14 rounded-lg">
          5
        </div>
        <div className="shadow-lg bg-white text-hotel-color text-lg font-bold text-center p-14 rounded-lg">
          6
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
