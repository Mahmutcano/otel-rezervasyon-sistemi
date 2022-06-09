import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotelsDetails } from "../redux/hotelSlice";
import { useStepperContext } from "../context/StepperContext";
import {BsFillCheckCircleFill} from 'react-icons/bs';

const StepCard = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const hotelData = useSelector((state) => state.hotels.items);
  const { userData, setUserData } = useStepperContext();

  useEffect(() => {
    setData(data);
  }, [data]);

  useEffect(() => {
    dispatch(fetchHotelsDetails());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // console.log(
  //   hotelData.filter((item) => item.id === userData.otelSearch).map((x) => x)
  // );
  const fetchData = hotelData.filter((item) => item.id === data.otelSearch);
  const hotelRoom = fetchData.map((x) => x.room_type);
  const hotelPicture = fetchData.map((y) => y.room_scenic);
  // console.log(hotelRoom[0]?.[0].title);
  return (
    <>
      <div className="grid sm:flex p-5 m-1 bg-hotel-brand-color rounded-3xl">
        <div className="w-full flex-2">
          <div className="mt-2 mb-3 h-6 text-xs text-start font-bold leading-8 text-hotel-color">
            Otel
          </div>
          <div className="shadow-md bg-white p-1 m-1 w-52 h-10 text-center flex justify-center items-center rounded-xl">
            {hotelData
              .filter((item) => item.id === data.otelSearch)
              .map((x) => x.city)}
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
      <div className="grid sm:flex p-5 m-1 mt-5 justify-center bg-hotel-brand-color rounded-3xl">
        <form
          onChange={handleChange}
          value={userData["hotelRoom"]}
          className="w-full max-w-screen-md mx-auto"
        >
          <fieldset className="space-y-6">
            <div className="flex items-center justify-between py-4 border-b border-gray-300">
              <legend className="text-2xl text-gray-700 mr-4">
                Oda Seçimi
              </legend>
              <a
                href="/"
                className="font-medium text-gray-500 hover:text-gray-700"
              >
                Oda Seçimi İptal
              </a>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <label
                htmlFor="plan-hobby"
                className="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer"
              >
                <span className="font-semibold text-gray-500 leading-tight uppercase mb-3">
                  {hotelRoom[0]?.[0].title}
                </span>
                <span className="font-bold text-gray-900">
                  <img
                    src={hotelRoom[0]?.[0].photo}
                    alt='xxx'
                    className="text-2xl uppercase rounded-lg"
                  />
                </span>
                <span className="flex mt-3">
                  <span className="text-lg font-bold text-hotel-color">
                    {hotelRoom[0]?.[0].price}
                  </span>
                  <span className="text-md font-bold text-hotel-color">TL</span>
                  <span className="text-xl font-bold text-hotel-color">/</span>
                  <span className="text-md font-semibold text-gray-500 text-end">
                    {" "}
                    Yetişkin
                  </span>
                  <span className="text-md font-semibold text-gray-500 text-end mx-2">
                    {data.adult}
                  </span>
                </span>
                <input
                  type="radio"
                  name="plan"
                  id="plan-hobby"
                  value={hotelRoom[0]?.[0].price}
                  className="input-select absolute h-0 w-0 appearance-none"
                />
                <span
                  aria-hidden="true"
                  className="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
                >
                  <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                  <BsFillCheckCircleFill />
                  </span>
                </span>
              </label>
              <label
                htmlFor="plan-growth"
                className="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer"
              >
                <span className="font-semibold text-gray-500 leading-tight uppercase mb-3">
                  {hotelRoom[0]?.[1].title}
                </span>
                <span className="font-bold text-gray-900">
                  <img
                    src={hotelRoom[0]?.[1].photo}
                    alt='xxx'
                    className="text-2xl uppercase rounded-lg"
                  />
                </span>
                <span className="flex mt-3">
                  <span className="text-lg font-bold text-hotel-color">
                    {hotelRoom[0]?.[1].price}
                  </span>
                  <span className="text-md font-bold text-hotel-color">TL</span>
                  <span className="text-xl font-bold text-hotel-color">/</span>
                  <span className="text-md font-semibold text-gray-500 text-end">
                    {" "}
                    Yetişkin
                  </span>
                  <span className="text-md font-semibold text-gray-500 text-end mx-2">
                    {data.adult}
                  </span>
                </span>
                <input
                  type="radio"
                  name="plan"
                  id="plan-growth"
                  value={hotelRoom[0]?.[1].price}
                  className="input-select absolute h-0 w-0 appearance-none"
                />
                <span
                  aria-hidden="true"
                  className="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
                >
                  <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                  <BsFillCheckCircleFill />
                  </span>
                </span>
              </label>
              <label
                htmlFor="plan-business"
                className="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer"
              >
                <span className="font-semibold text-gray-500 leading-tight uppercase mb-3">
                  {hotelRoom[0]?.[2].title}
                </span>
                <span className="font-bold text-gray-900">
                  <img
                    src={hotelRoom[0]?.[2].photo}
                    alt='xxx'
                    className="text-2xl uppercase rounded-lg"
                  />
                </span>
                <span className="flex mt-3">
                  <span className="text-lg font-bold text-hotel-color">
                    {hotelRoom[0]?.[2].price}
                  </span>
                  <span className="text-md font-bold text-hotel-color">TL</span>
                  <span className="text-xl font-bold text-hotel-color">/</span>
                  <span className="text-md font-semibold text-gray-500 text-end">
                    {" "}
                    Yetişkin
                  </span>
                  <span className="text-md font-semibold text-gray-500 text-end mx-2">
                    {data.adult}
                  </span>
                </span>
                <input
                  type="radio"
                  name="plan"
                  id="plan-business"
                  value={hotelRoom[0]?.[2].price}
                  className="input-select absolute h-0 w-0 appearance-none"
                />
                <span
                  aria-hidden="true"
                  className="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
                >
                  <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                  <BsFillCheckCircleFill />
                  </span>
                </span>
              </label>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="grid sm:flex p-5 m-1 mt-5 justify-center bg-hotel-brand-color rounded-3xl">
        <form
          onChange={handleChange}
          value={userData["hotelRoom"]}
          className="w-full max-w-screen-md mx-auto"
        >
          <fieldset className="space-y-6">
            <div className="flex items-center justify-between py-4 border-b border-gray-300">
              <legend className="text-2xl text-gray-700 mr-4">
                Manzara Seçimi
              </legend>
              <a
                href="/"
                className="font-medium text-gray-500 hover:text-gray-700"
              >
                Manzara Seçimi İptal
              </a>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <label
                htmlFor="plan-manzara"
                className="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer"
              >
                <span className="font-semibold text-gray-500 leading-tight uppercase mb-3">
                  {hotelPicture[0]?.[0].title}
                </span>
                <span className="font-bold text-gray-900">
                  <img
                    src={hotelPicture[0]?.[0].photo}
                    alt='xxx'
                    className="text-2xl uppercase rounded-lg"
                  />
                </span>
                <span className="flex mt-3 justify-end">
                  <span className="text-lg font-bold text-green-500">
                    +{hotelPicture[0]?.[0].price_rate}
                  </span>
                  <span className="text-md font-bold text-green-500">%</span>
                </span>
                <input
                  type="radio"
                  name="plan2"
                  id="plan-manzara"
                  value={`+${hotelPicture[0]?.[0].price_rate}%`}
                  className="input-select absolute h-0 w-0 appearance-none"
                />
                <span
                  aria-hidden="true"
                  className="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
                >
                  <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                    <BsFillCheckCircleFill />
                  </span>
                </span>
              </label>
              <label
                htmlFor="plan-manzara1"
                className="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer"
              >
                <span className="font-semibold text-gray-500 leading-tight uppercase mb-3">
                  {hotelPicture[0]?.[1].title}
                </span>
                <span className="font-bold text-gray-900">
                  <img
                    src={hotelPicture[0]?.[1].photo}
                    alt='xxx'
                    className="text-2xl uppercase rounded-lg"
                  />
                </span>
                <span className="flex mt-3 justify-end">
                  <span className="text-lg font-bold text-green-500">
                    +{hotelPicture[0]?.[1].price_rate}
                  </span>
                  <span className="text-md font-bold text-green-500">%</span>
                </span>
                <input
                  type="radio"
                  name="plan2"
                  id="plan-manzara1"
                  value={`+${hotelPicture[0]?.[1].price_rate}%`}
                  className="input-select absolute h-0 w-0 appearance-none"
                />
                <span
                  aria-hidden="true"
                  className="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
                >
                  <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                  <BsFillCheckCircleFill />
                  </span>
                </span>
              </label>
              <label
                htmlFor="plan-manzara2"
                className="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer"
              >
                <span className="font-semibold text-gray-500 leading-tight uppercase mb-3">
                  {hotelPicture[0]?.[2].title}
                </span>
                <span className="font-bold text-gray-900">
                  <img
                    src={hotelPicture[0]?.[2].photo}
                    alt='xxx'
                    className="text-2xl uppercase rounded-lg"
                  />
                </span>
                <span className="flex mt-3 justify-end">
                  <span className="text-lg font-bold text-green-500">
                    +{hotelPicture[0]?.[2].price_rate}
                  </span>
                  <span className="text-md font-bold text-green-500">%</span>
                </span>
                <input
                  type="radio"
                  name="plan2"
                  id="plan-manzara2"
                  value={`+${hotelPicture[0]?.[2].price_rate}%`}
                  className="input-select absolute h-0 w-0 appearance-none"
                />
                <span
                  aria-hidden="true"
                  className="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
                >
                  <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                  <BsFillCheckCircleFill />
                  </span>
                </span>
              </label>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default StepCard;
