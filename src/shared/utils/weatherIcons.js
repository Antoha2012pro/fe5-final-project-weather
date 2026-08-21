const icons = {
  "clear sky":
    "https://maps.gstatic.com/weather/v1/sunny.svg",

  "few clouds":
    "https://maps.gstatic.com/weather/v1/mostly_sunny.svg",

  "scattered clouds":
    "https://maps.gstatic.com/weather/v1/partly_cloudy.svg",

  "broken clouds":
    "https://maps.gstatic.com/weather/v1/mostly_cloudy.svg",

  "overcast clouds":
    "https://maps.gstatic.com/weather/v1/cloudy.svg",

  "light rain":
    "https://maps.gstatic.com/weather/v1/drizzle.svg",

  "moderate rain":
    "https://maps.gstatic.com/weather/v1/showers.svg",

  "heavy intensity rain":
    "https://maps.gstatic.com/weather/v1/showers.svg",

  rain:
    "https://maps.gstatic.com/weather/v1/showers.svg",

  drizzle:
    "https://maps.gstatic.com/weather/v1/drizzle.svg",

  thunderstorm:
    "https://maps.gstatic.com/weather/v1/strong_tstorms.svg",

  snow:
    "https://maps.gstatic.com/weather/v1/snow_showers.svg",

  mist:
    "https://maps.gstatic.com/weather/v1/cloudy.svg",

  fog:
    "https://maps.gstatic.com/weather/v1/cloudy.svg",

  haze:
    "https://maps.gstatic.com/weather/v1/cloudy.svg",
};

export const weatherIcon = (condition) => {
  const key = condition?.toLowerCase();

  return icons[key] ?? null;
};