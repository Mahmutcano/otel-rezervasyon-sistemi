import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const StepCard = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  useEffect(() => {
    setData(data);
  }, [data]);
  // console.log(data);
  return (
    <div className="grid sm:flex p-5 m-1 bg-hotel-brand-color rounded-3xl">
      <div className="w-full flex-2">
        <div className="mt-2 mb-3 h-6 text-xs text-start font-bold leading-8 text-hotel-color">
          Otel
        </div>
        <div className="shadow-md bg-white p-1 m-1 w-52 h-10 text-center flex justify-center items-center rounded-xl">
          {data.otelSearch}
        </div>
      </div>
      <div className="w-full flex-1 mx-2">
        <div className="mt-2 mb-3 h-6 text-xs text-start font-bold leading-8 text-hotel-color">
          Giriş
        </div>
        <div className="shadow-md bg-white p-2 w-32 text-center flex justify-center rounded-xl">
          {data.startDate}
        </div>
      </div>
      <div className="w-full flex-1 mx-2">
        <div className="mt-2 mb-3 h-6 text-xs text-start font-bold leading-8 text-hotel-color">
          Çıkış
        </div>
        <div className="shadow-md bg-white p-2 w-32 text-center flex justify-center  rounded-xl">
          {data.finalDate}
        </div>
      </div>
      <div className="w-full flex-1 mx-2">
        <div className="mt-2 mb-3 h-6 text-xs text-start font-bold leading-8 text-hotel-color">
          Yetişkin
        </div>
        <div className="shadow-md bg-white p-2 w-20 text-center flex justify-center  rounded-xl">
          {data.adult}
        </div>
      </div>
      <div className="w-full flex-1 mx-2">
        <div className="mt-2 mb-3 h-6 text-xs text-start font-bold leading-8 text-hotel-color">
          Çocuk
        </div>
        <div className="shadow-md bg-white p-2 w-20 text-center flex justify-center  rounded-xl">
          {(data.child = "" ? "0" : data.child)}
        </div>
      </div>
    </div>
  );
};

export default StepCard;
