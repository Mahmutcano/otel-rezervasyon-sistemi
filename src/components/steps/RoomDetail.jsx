import React from "react";
import HotelsType from "../HotelsType";
import StepCard from "../StepCard";

const RoomDetail = () => {
  return (
    <div className="grid grid-cols-1 gap-1 p-10 border-1">
      <div className="shadow-lg text-green-500 text-lg font-bold text-end rounded-lg col-span-3">
        <StepCard />
      </div>
      <div className="shadow-lg text-hotel-color text-lg font-bold text-center rounded-lg col-span-3">
        <HotelsType />
      </div>
      <div className="shadow-lg text-hotel-color text-lg font-bold text-center rounded-lg col-span-3">
        <HotelsType />
      </div>
    </div>
  );
};

export default RoomDetail;
