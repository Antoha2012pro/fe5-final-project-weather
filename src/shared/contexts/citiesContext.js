import { createContext, useContext } from "react";

export const CitiesContext = createContext();

export const useCities = () => useContext(CitiesContext);
