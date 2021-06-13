import { createContext, useContext } from "react";

const AppContext = createContext();

export function GlobalStateProvider({ children }) {
  let sharedState = {
    hostname: "http://localhost:3000",
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
