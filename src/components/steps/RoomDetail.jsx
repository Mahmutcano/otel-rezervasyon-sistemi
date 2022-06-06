import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const RoomDetail = (props) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  useEffect(() => {
    setData(data);
  }, []);
  console.log(data);

  return (
    <div className="grid sm:flex p-10 m-10 bg-hotel-brand-color rounded-3xl">
      <div className="w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold leading-8 text-hotel-color">
          Otel
        </div>
        <div className="flex rounded">{data.otelSearch}</div>
      </div>

      <div className="lex rounded">
        <AiOutlineArrowRight />
      </div>

      <div className="w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold leading-8 text-hotel-color">
          Giriş
        </div>
        <div className="flex mx-2 rounded">{data.startDate}</div>
      </div>
      <div className="flex rounded">
        <AiOutlineArrowRight />
      </div>
      <div className="w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold leading-8 text-hotel-color">
          Çıkış
        </div>
        <div className="flex mx-2  rounded">{data.finalDate}</div>
      </div>
      <div className="flex rounded">
        <AiOutlineArrowRight />
      </div>
      <div className="w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold leading-8 text-hotel-color">
          Yetişkin
        </div>
        <div className="flex mx-4  rounded">{data.adult}</div>
      </div>
    </div>
  );
};

export default RoomDetail;
