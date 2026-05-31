import React, { createContext, useContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Provider component
export function AppProvider({ children }) {
  // state for image slide
  const [current, setCurrent] = useState(0);

  // You can add more states and functions to share here

  return (
    <AppContext.Provider value={{ current, setCurrent }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook for using the context
export function useAppContext() {
  return useContext(AppContext);
}
