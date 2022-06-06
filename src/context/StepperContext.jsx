import { createContext, useContext, useState, useEffect } from "react";

export const StepperContext = createContext({
  userData: "",
  setUserData: null,
});

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const userDataItem = JSON.parse(localStorage.getItem("userData"));

    if (userDataItem) {
      setUserData(userDataItem);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);



  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}
