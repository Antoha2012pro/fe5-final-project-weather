import React, { useEffect, useRef, useState } from "react";
import { CitiesContext } from "../utils/contexts/citiesContext";
import { loadCities } from "../utils/saveCities";
import { fetchCurrentWeather } from "../utils/api/owmApi";
import { formatDate, formatTime, formatWeekday } from "../utils/dateTime";

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState(loadCities);

  const [weatherDetails, setWeatherDetails] = useState({
    type: null,
    cityId: null,
  });

  const citiesRef = useRef(cities);

  useEffect(() => {
    citiesRef.current = cities;
  }, [cities]);

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
          };
        } catch (error) {
          console.error(`Не удалось обновить ${city.city}:`, error);

          return city;
        }
      }),
    );

    setCities(updatedCities);
  };

  useEffect(() => {
    refreshCities();

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

    const timeUntilNextUpdate = nextUpdate.getTime() - now.getTime();

    let intervalId;

    const timeoutId = setTimeout(() => {
      refreshCities();

      intervalId = setInterval(
        () => {
          refreshCities();
        },
        30 * 60 * 1000,
      );
    }, timeUntilNextUpdate);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        setCities,
        weatherDetails,
        setWeatherDetails,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export default CitiesProvider;
