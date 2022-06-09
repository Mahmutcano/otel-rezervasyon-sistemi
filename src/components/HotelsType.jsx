import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchHotelsDetails } from "../redux/hotelSlice";

const HotelsType = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  useEffect(() => {
    setData(data);
  }, [data]);

  useEffect(() => {
    dispatch(fetchHotelsDetails());
  }, [dispatch]);

  // console.log(
  //   hotelData.filter((item) => item.id === userData.otelSearch).map((x) => x.city)
  // );

  // const fetchData = hotelData.filter((item) => item.id === data.otelSearch);
  // console.log(fetchData.map(x => x.room_type.map(y => y.title)));
  return (
      <></>
  );
};

export default HotelsType;
