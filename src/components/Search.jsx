import React, { useEffect } from "react";
import { useStepperContext } from "../context/StepperContext";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotels } from "../redux/hotelSlice";

const Search = () => {
  const hotelData = useSelector((state) => state.hotels.items);
  const dispatch = useDispatch();
  const { userData, setUserData } = useStepperContext();

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex p-10 m-10 rounded-3xl">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold leading-8 text-white">
          Otel Ara
        </div>
        <div className="my-2  rounded border border-gray-200 bg-white p-1">
          <select
            onChange={handleChange}
            value={userData["otelSearch"]}
            name="otelSearch"
            placeholder="Otel Ara"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            type="text"
            required
          >
            {hotelData.map((item) => (
              <option
                key={item.id}
                required
                className="w-full p-5 px-2 text-gray-800 outline-none"
                value={item.hotel_name && item.id }
              >
                 {item.hotel_name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
