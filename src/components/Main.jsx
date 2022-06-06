import React, { useState } from "react";
import { UseContextProvider } from "../context/StepperContext";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { HotelDateSelect, RoomDetail, Payment, Final } from "./steps/export";

const Main = () => {
  const [currenStep, setCurrentStep] = useState(1);

  // Steps
  const steps = [
    "Otel ve Tarih Seçimi",
    "Oda Tipi ve Manzara Seçimi",
    "Önizleme ve Ödeme İşlemleri",
    "Ödeme Tamamlandı",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <HotelDateSelect />;
      case 2:
        return <RoomDetail />;
      case 3:
        return <Payment />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currenStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-hotel-color">
      {/* Stepper */}
      <div className="container horizontal mt-10">
        <Stepper steps={steps} currenStep={currenStep} />

        {/* Display Components */}
        <div className="my-10 py-10">
          <UseContextProvider>{displayStep(currenStep)}</UseContextProvider>
        </div>
      </div>

      {/* Navigation Control */}
      <StepperControl
        handleClick={handleClick}
        currenStep={currenStep}
        steps={steps}
      />
    </div>
  );
};

export default Main;
