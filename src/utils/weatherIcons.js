import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiShowers,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

const icons = {
  "clear sky": WiDaySunny,
  "few clouds": WiDayCloudy,
  "scattered clouds": WiCloud,
  "broken clouds": WiCloudy,
  "overcast clouds": WiCloudy,
  "light rain": WiShowers,
  "moderate rain": WiRain,
  rain: WiRain,
  drizzle: WiShowers,
  thunderstorm: WiThunderstorm,
  snow: WiSnow,
  mist: WiFog,
  fog: WiFog,
  haze: WiFog,
};

export const weatherIcon = (condition) => {
  return icons[condition] || WiDaySunny;
};
