import axios from "axios";

const API_KEY = import.meta.env.VITE_OWM_KEY;

export const searchCities = async (query) => {
  const { data } = await axios.get(
    "https://api.openweathermap.org/geo/1.0/direct",
    {
      params: {
        q: query,
        limit: 5,
        appid: API_KEY,
      },
    },
  );

  return data;
};

export const fetchCurrentWeather = async ({ lat, lon }) => {
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        lat,
        lon,
        units: "metric",
        appid: API_KEY,
      },
    },
  );

  return data;
};
