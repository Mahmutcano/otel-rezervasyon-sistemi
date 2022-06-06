import React from "react";
import { useStepperContext } from "../../context/StepperContext";
import Search from "../Search";

const HotelDateSelect = () => {
  const { userData, setUserData } = useStepperContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <>
      <Search />
      <div className="grid sm:flex p-10 m-10 bg-hotel-brand-color rounded-3xl">
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold leading-8 text-hotel-color">
            Giriş Tarihi
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["startDate"] || ""}
              name="startDate"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              placeholder="Gün/Ay/Yıl"
              min="01-01-2022"
              max="31-12-2023"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>
        </div>
        <div className="mx-2 w-full  flex-1">
          <div className="mt-3 h-6 text-xs font-bold leading-8 text-hotel-color">
            Çıkış Tarihi
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={
                userData["finalDate"] > userData["startDate"]
                  ? userData["finalDate"]
                  : "" || ""
              }
              name="finalDate"
              // type="date"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              placeholder="Gün/Ay/Yıl"
              min="01-01-2022"
              max="31-12-2023"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold leading-8 text-hotel-color">
            Yetişkin
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["adult"] >= 0 ? userData["adult"] : ""}
              name="adult"
              type="number"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              placeholder="Yetişkin Sayısı"
            />
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold leading-8 text-hotel-color">
            Çocuk
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={
                userData["child"] >= 0 && userData["child"] <= 5
                  ? userData["child"]
                  : ''
              }
              name="child"
              type="number"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              placeholder="Çocuk Sayısı"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelDateSelect;
