import React, { useEffect, useRef, useState } from "react";

const Stepper = ({ steps, currenStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    // console.log(newSteps);
    let count = 0;

    while (count < newSteps.length) {
      // Current Step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: true,
        };
        count++;
      }
      // Step Completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      // Step Pedding
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepState;
    const current = updateStep(currenStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currenStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="shadow-lg relative flex flex-col items-center text-gray-100 p-2">
          <div
            className={`shadow-lg rounded-full transition duration-500 ease-in-out border-2 border-gray h-12 w-12 flex items-center justify-center py-3 ${
              step.selected
                ? "bg-hotel-color text-white font-bold border border-gray-700"
                : ""
            }`}
          >
            {/* Display Progess */}
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0 text-center mt-16 w-22 text-xs font-normal ${
              step.highlighted ? "text-gray-500" : "text-gray-100"
            }`}
          >
            {" "}
            {/* Display Description */}
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? "border-gray-600" : "border-gray-100"
          }`}
        >
          {/* Display Line */}
        </div>
      </div>
    );
  });
  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;
