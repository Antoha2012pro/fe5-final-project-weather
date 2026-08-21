import React, { useMemo, useState } from "react";

import { CitiesContext } from "../shared/contexts/citiesContext.js";
import { useCitiesWeather } from "../shared/hooks/useCitiesWeather.js";

const MAX_CITIES = 6;

const CitiesProvider = ({ children }) => {
  const { cities, setCities, refreshCities, refreshCity } = useCitiesWeather();

  const [weatherDetails, setWeatherDetails] = useState({
    type: null,
    visibleTypes: [],
    cityId: null,
  });

  const value = useMemo(
    () => ({
      cities,
      setCities,

      refreshCities,
      refreshCity,

      weatherDetails,
      setWeatherDetails,

      maxCities: MAX_CITIES,
    }),
    [cities, refreshCities, refreshCity, weatherDetails],
  );

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
};

export default CitiesProvider;
