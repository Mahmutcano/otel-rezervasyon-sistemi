import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotelsDetails } from "../redux/hotelSlice";

const PriceCard = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const hotelData = useSelector((state) => state.hotels.items);

  useEffect(() => {
    setData(data);
  }, [data]);

  useEffect(() => {
    dispatch(fetchHotelsDetails());
  }, [dispatch]);

  


  const date1 = new Date(data.startDate);
  const date2 = new Date(data.finalDate);
  const dataTime1 = date1.getDate();
  const dataTime2 = date2.getDate();
  const distance = Math.abs(dataTime2 - dataTime1);

  return (
    <div className="shadow-lg bg-hotel-brand-color text-hotel-color text-lg font-bold text-center p-3 rounded-lg row-span-5">
      <h1 className="flex font-extrabold text-start p-5 uppercase">
        {hotelData
          .filter((item) => item.id === data.otelSearch)
          .map((x) => x.city)}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-2 gap-1 md:gap-4 lg:gap-3 p-3">
        <div className="shadow-lg bg-white text-hotel-color text-lg font-bold text-center p-5 rounded-lg">
          Giriş
          <span className="text-green-500 flex justify-center">
            {data.startDate}
          </span>
        </div>
        <div className="shadow-lg bg-white text-hotel-color text-lg font-bold text-center p-5 rounded-lg">
          Çıkış
          <span className="text-green-500 flex justify-center">
            {data.finalDate}
          </span>
        </div>
        <div className="shadow-lg bg-white text-hotel-color text-lg font-bold text-center p-5 rounded-lg">
          Yetişkin
          <span className="text-green-500 flex justify-center">
            {data.adult}
          </span>
        </div>
        <div className="shadow-lg bg-white text-hotel-color text-lg font-bold text-center p-5 rounded-lg">
          Çocuk
          <span className="text-green-500 flex justify-center">
            {data.child}
          </span>
        </div>
        <div className="shadow-lg bg-white text-hotel-color text-lg font-bold text-center p-5 rounded-lg">
          Oda Tipi
          <span className="text-green-500 flex justify-center">
            {data.plan} TL
          </span>
        </div>
        <div className="shadow-lg bg-white text-hotel-color text-lg font-bold text-center p-5 rounded-lg">
          Manzara
          <span className="text-green-500 flex justify-center">
            {data.plan2}
          </span>
        </div>
      </div>
      <div className="shadow-xl grid gap-2 bg-white text-hotel-color text-lg font-bold text-center p-5 rounded-lg">
        <span className="flex justify-between">
          Oda Fiyatı: <span className="text-green-500"> {data.plan} TL</span>
        </span>
        <span className="flex justify-between">
          Fiyat Etki Endeksi:{" "}
          <span className="text-green-500">{data.plan2}</span>
        </span>
        <span className="flex justify-between">
          Konaklama: <span className="text-green-500">{distance} Gün</span>
        </span>
        <span className="flex justify-between">
          İndirim:{" "}
          <span className="text-green-500">
            {hotelData
              .filter((item) => item.id === data.otelSearch)
              .map((x) => x.city)}
          </span>
        </span>
        <hr className="border-hotel-color" />
        <span className="flex justify-center mx-4">
          <h1 className="text-lg">Toplam Tutar:</h1>
          <span className="mx-3 text-2xl text-green-500">
            {distance * data.plan} TL
          </span>
        </span>
      </div>
    </div>
  );
};

export default PriceCard;
