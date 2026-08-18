import { formatDate, formatTime, formatWeekday } from "./dateTime.js";

export const mapWeatherToCity = (city, data) => ({
  ...city,
  time: formatTime(data.dt, data.timezone),
  date: {
    date: formatDate(data.dt, data.timezone),
    day: formatWeekday(data.dt, data.timezone),
  },
  img: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  description: data.weather[0].description,
  temperature: {
    celsius: Math.round(data.main.temp),
    fahrenheit: Math.round(data.main.temp * 1.8 + 32),
  },
  info: {
    feelsLike: data.main.feels_like,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    speed: data.wind.speed,
    visibility: data.visibility,
  },
  updatedAt: Date.now(),
});
