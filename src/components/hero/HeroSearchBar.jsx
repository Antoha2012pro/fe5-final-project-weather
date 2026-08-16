import axios from "axios";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { formatDate, formatTime, formatWeekday } from "../../utils/dateTime";

const API_KEY = import.meta.env.VITE_OWM_KEY;

const HeroSearchBar = ({ onAddCity }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectCity = async (city) => {
    try {
      setIsLoading(true);

      const { data: weatherData } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat: city.lat,
            lon: city.lon,
            units: "metric",
            appid: API_KEY,
          },
        },
      );

      // const newCity = {
      //   id: weatherData?.id || `${city.lat || ""}-${city.lon || ""}`,
      //   city: city?.name || "",
      //   country: city?.country || "",
      //   time: city?.time || "",
      //   date: {
      //     date: city?.dt || "",
      //     day: city?.dt || "",
      //   },
      //   img: `https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon || ""}@2x.png`,
      //   temperature: {
      //     celsius: Math.round(weatherData?.main?.temp || ""),
      //     fahrenheit: "",
      //   },
      //   isLiked: false,

      //   lat: city?.lat || "",
      //   lon: city?.lon || "",

      //   info: {
      //     feelsLike: weatherData?.main?.feels_like || "",
      //     tempMin: weatherData?.main?.temp_min || "",
      //     tempMax: weatherData?.main?.temp_max || "",
      //     humidity: weatherData?.main?.humidity || "",
      //     pressure: weatherData?.main?.pressure || "",
      //     speed: weatherData?.wind?.speed || "",
      //     visibility: weatherData?.visibility || "",
      //   }
      // };

      const newCity = {
        id: weatherData.id,

        city: city.name,
        country: city.country,

        time: formatTime(weatherData.dt, weatherData.timezone),

        date: {
          date: formatDate(weatherData.dt, weatherData.timezone),
          day: formatWeekday(weatherData.dt, weatherData.timezone),
        },

        img: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,

        description: weatherData?.weather[0]?.description || "",

        temperature: {
          celsius: Math.round(weatherData.main.temp),
          fahrenheit: Math.round(weatherData.main.temp * 1.8 + 32),
        },

        isLiked: false,

        lat: city.lat,
        lon: city.lon,

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

      onAddCity(newCity);

      setQuery("");
      setSearchResults([]);
    } catch (error) {
      console.error("Error retrieving weather:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchResults.length === 0) return;

    handleSelectCity(searchResults[0]);
  };

  useEffect(() => {
    if (query.trim().length < 3) {
      setSearchResults([]);
      return;
    }

    const controller = new AbortController();

    const timeoutId = setTimeout(async () => {
      try {
        const { data } = await axios.get(
          "https://api.openweathermap.org/geo/1.0/direct",
          {
            params: {
              q: query,
              limit: 5,
              appid: API_KEY,
            },

            signal: controller.signal,
          },
        );

        setSearchResults(data);
      } catch (error) {
        if (error.name !== "CanceledError") {
          console.error(error);
        }
      }
    }, 400);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [query]);

  return (
    <div className="relative w-full max-w-156.25">
      <form
        onSubmit={handleSubmit}
        className="flex h-8 w-full overflow-hidden rounded-[10px] bg-box site-md:h-10.5"
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search location..."
          className="min-w-0 flex-1 bg-transparent px-7.25 text-[14px] font-medium text-black placeholder:text-placeholder focus:outline-none"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="flex w-11.25 shrink-0 cursor-pointer items-center justify-center border-l-4 border-black bg-brand text-black hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50 site-md:border-l-2"
        >
          <Search className="h-4 w-4 stroke-3 site-md:h-5 site-md:w-5" />
        </button>
      </form>

      {searchResults.length > 0 && (
        <ul className="absolute left-0 top-full z-20 mt-2 w-full overflow-hidden rounded-[10px] bg-white shadow-lg">
          {searchResults.map((city) => (
            <li key={`${city.lat}-${city.lon}`}>
              <button
                type="button"
                onClick={() => handleSelectCity(city)}
                className="w-full cursor-pointer px-5 py-3 text-left text-black transition hover:bg-gray-100"
              >
                {city.name}
                {city.state && `, ${city.state}`}, {city.country}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeroSearchBar;
