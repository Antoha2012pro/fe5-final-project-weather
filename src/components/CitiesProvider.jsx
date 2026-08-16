import React, { useEffect, useRef, useState } from "react";
import { CitiesContext } from "../utils/contexts/citiesContext";
import { loadCities } from "../utils/saveCities";
import { fetchCurrentWeather } from "../utils/api/owmApi";
import { formatDate, formatTime, formatWeekday } from "../utils/dateTime";

const MAX_CITIES = 6;

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState(loadCities);

  const [weatherDetails, setWeatherDetails] = useState({
    type: null,
    cityId: null,
  });

  const citiesRef = useRef(cities);

  const refreshCities = async () => {
    const currentCities = citiesRef.current;

    if (currentCities.length === 0) return;

    const updatedCities = await Promise.all(
      currentCities.map(async (city) => {
        try {
          const weatherData = await fetchCurrentWeather({
            lat: city.lat,
            lon: city.lon,
          });

          return {
            ...city,

            time: formatTime(weatherData.dt, weatherData.timezone),

            date: {
              date: formatDate(weatherData.dt, weatherData.timezone),
              day: formatWeekday(weatherData.dt, weatherData.timezone),
            },

            img: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,

            description: weatherData.weather[0].description,

            temperature: {
              celsius: Math.round(weatherData.main.temp),

              fahrenheit: Math.round(weatherData.main.temp * 1.8 + 32),
            },

            info: {
              feelsLike: weatherData.main.feels_like,
              tempMin: weatherData.main.temp_min,
              tempMax: weatherData.main.temp_max,
              humidity: weatherData.main.humidity,
              pressure: weatherData.main.pressure,
              speed: weatherData.wind.speed,
              visibility: weatherData.visibility,
            },

            updatedAt: Date.now(),
          };
        } catch (error) {
          console.error(`Не удалось обновить ${city.city}:`, error);

          return city;
        }
      }),
    );

    setCities(updatedCities);

    console.log("Weather updated:", new Date().toLocaleTimeString());
  };

  useEffect(() => {
    let timeoutId;

    const getTimeUntilNextUpdate = () => {
      const now = new Date();
      const nextUpdate = new Date(now);

      nextUpdate.setSeconds(0);
      nextUpdate.setMilliseconds(0);

      if (now.getMinutes() < 30) {
        nextUpdate.setMinutes(30);
      } else {
        nextUpdate.setHours(now.getHours() + 1);
        nextUpdate.setMinutes(0);
      }

      return nextUpdate.getTime() - now.getTime();
    };

    const scheduleNextUpdate = () => {
      const delay = getTimeUntilNextUpdate();

      timeoutId = setTimeout(async () => {
        await refreshCities();

        scheduleNextUpdate();
      }, delay);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible") return;

      const cities = citiesRef.current;

      if (cities.length === 0) return;

      const oldestUpdate = Math.min(
        ...cities.map((city) => city.updatedAt || 0),
      );

      const thirtyMinutes = 30 * 60 * 1000;

      const isStale = Date.now() - oldestUpdate >= thirtyMinutes;

      if (isStale) {
        refreshCities();
      }
    };

    refreshCities();
    scheduleNextUpdate();

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(timeoutId);

      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    citiesRef.current = cities;
  }, [cities]);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        setCities,
        weatherDetails,
        setWeatherDetails,
        maxCities: MAX_CITIES,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export default CitiesProvider;
