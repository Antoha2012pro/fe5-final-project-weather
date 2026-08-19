import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useCities } from "../../shared/contexts/citiesContext";
import { fetchCurrentWeather, searchCities } from "../../shared/api/owmApi.js";
import { mapWeatherToCity } from "../../shared/utils/mapWeatherToCity.js";

const HeroSearchBar = ({ onAddCity }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { cities, maxCities } = useCities();

  const handleSelectCity = async (city) => {
    try {
      setIsLoading(true);

      const weatherData = await fetchCurrentWeather({
        lat: city.lat,
        lon: city.lon,
      });

      const newCity = mapWeatherToCity(
        {
          id: weatherData.id,
          city: city.name,
          country: city.country,

          isLiked: false,

          lat: city.lat,
          lon: city.lon,
        },
        weatherData,
      );

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

    const timeoutId = setTimeout(async () => {
      try {
        const data = await searchCities(query);

        setSearchResults(data);
      } catch (error) {
        console.error(error);
      }
    }, 400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  const isLimitReached = cities.length >= maxCities;

  return (
    <div className="relative w-full site-xl:max-w-156.25 site-md:max-w-[402px] max-w-[174px]">
      <form
        onSubmit={handleSubmit}
        className="flex h-6 site-md:h-8 w-full overflow-hidden rounded-[10px] bg-box site-xl:h-10.5"
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          disabled={isLimitReached}
          placeholder={
            isLimitReached ? "Maximum 6 cities" : "Search location..."
          }
          className="min-w-0 flex-1 bg-transparent px-4 site-md:px-7.25 text-[10px] site-xl:text-[14px] font-medium text-black placeholder:text-placeholder focus:outline-none"
        />

        <button
          type="submit"
          disabled={isLoading || isLimitReached}
          className="flex w-7 site-md:w-9 site-xl:w-11.25 shrink-0 cursor-pointer items-center justify-center border-l-4 border-black bg-brand text-black hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50 site-md:border-l-2"
        >
          <Search className="size-3 site-md:size-4 site-xl:size-6.25 stroke-3 site-md:h-5 site-md:w-5" />
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
