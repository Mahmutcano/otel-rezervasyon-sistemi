import React from "react";
import CreditForm from "../CreditForm";
import PriceCard from "../PriceCard";

const Payment = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5">
      <div className="shadow-lg bg-hotel-brand-color text-hotel-color text-lg font-bold rounded-2xl h-56">
        <div className="items-center h-screen">
          <div className="p-10 bg-gradient-to-r from-hotel-color to-hotel-brand-color rounded-xl">
            <h1 className="text-3xl font-semibold text-hotel-brand-color pb-4">
              Cradit<i className="text-sm">Card</i>
            </h1>
            <span className="text-xs  text-hotel-brand-color shadow-2xl">
              Kart Sahibinin İsmi
            </span>
            <div className="flex justify-between items-center pt-4">
              <div className="flex flex-col">
                <span className="text-xs text-hotel-brand-color font-bold">
                  1234 4567 8901 2345
                </span>
                <span className="text-xs text-hotel-brand-color font-bold">
                  09/10
                </span>
              </div>
              <img
                src="https://img.icons8.com/offices/80/000000/sim-card-chip.png"
                alt="res"
                width="48"
              />
            </div>
          </div>
        </div>
      </div>
      <PriceCard />
      <div className="shadow-lg  bg-hotel-color text-hotel-brand-color text-lg font-bold p-10 rounded-lg">
        <CreditForm />
      </div>
    </div>
  );
};

export default Payment;
