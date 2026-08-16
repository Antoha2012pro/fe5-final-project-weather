import { Heart, RotateCw, Trash2 } from "lucide-react";
import React from "react";
import ButtonBrand from "../ui/ButtonBrand";
import { cn } from "../../utils/cn";
import { weatherIcon } from "../../utils/weatherIcons";
import { useCities } from "../../utils/contexts/citiesContext";

const DaysItem = ({
  city,
  className,
  onLike,
  onVisibleCurrent,
  onVisibleHourly,
  onVisibleEightDays,
  onDeleteCity
}) => {
  const { refreshCities } = useCities();
  
  return (
    <div
      className={cn(
        "w-full max-w-full site-md:max-w-[262px] site-xl:max-w-[320px] bg-panel rounded-[20px] pt-3.75 px-3.75 pb-5 site-md:pt-3 site-md:px-4.25 site-md:pb-4.25 site-xl:pt-3.75 site-xl:pb-5 site-xl:px-5 shrink-0",
        className,
      )}
    >
      <div className="space-y-6.25 site-md:space-y-2.75 site-xl:space-y-3.75 px-0 site-md:px-2.25 site-xl:px-2.5 font-medium mb-2.75 site-md:mb-2 site-xl:mb-2.5">
        <p className="flex justify-between text-[12px] site-xl:text-[14px]">
          <span>{city?.city || ""}</span>
          <span>{city?.country || ""}</span>
        </p>
        <p className="text-center text-[20px] site-xl:text-[24px] leading-none">
          {city?.time || ""}
        </p>
      </div>
      <div className="px-6.75 site-md:px-2.25 site-xl:px-3 flex justify-center site-md:justify-between flex-wrap items-center gap-2 site-md:gap-0 text-[10px] font-medium mb-3 site-xl:mb-3.75">
        <ButtonBrand
          className="py-1.5 px-2.75 site-xl:py-2 site-xl:px-4.5"
          onClick={() => {}}
        >
          Hourly forecast
        </ButtonBrand>
        <ButtonBrand
          className="py-1.5 px-2.75 site-xl:py-2 site-xl:px-4.5"
          onClick={() => {}}
        >
          Weekly forecast
        </ButtonBrand>
      </div>
      <div className="grid w-full grid-cols-[1fr_1px_1fr] grid-rows-1 items-start gap-3 site-xl:gap-3.25 mb-6 site-md:mb-6.75 site-xl:mb-5.5 text-[12px] site-xl:text-[14px] font-medium leading-[1.1]">
        <p className="text-right">{city?.date?.date || ""}</p>
        <div className="inline-block w-full h-full bg-black" />
        <p className="text-left">{city?.date?.day || ""}</p>
      </div>
      <div className="flex flex-col gap-6.25 site-xl:gap-3.75 items-center mb-11 site-md:mb-8.5 site-xl:mb-9.5">
        <img
          src={weatherIcon(city.description)}
          alt={city.description}
          className="w-full max-w-20.75 max-h-20.75 site-md:max-w-19 site-md:max-h-19 site-xl:max-w-30 site-xl:max-h-30 h-full object-cover"
        />
        <h2 className="text-[24px] site-xl:text-[32px] font-medium">
          {city?.temperature?.celsius ?? ""}℃
        </h2>
      </div>
      <div className="flex justify-between items-center flex-wrap px-4.25 site-md:px-0">
        <div className="flex gap-3.5 site-xl:gap-4 items-center">
          <button className="size-6 site-xl:size-7.5" onClick={refreshCities}>
            <RotateCw className="w-full h-full" />
          </button>
          <button
            className="size-6 site-xl:size-7.5"
            onClick={() => onLike(city.id)}
          >
            <Heart
              className={cn(
                "text-red-400 w-full h-full cursor-pointer select-none active:scale-75 transition-all duration-200",
                city.isLiked && "fill-red-400 animate-like",
              )}
            />
          </button>
        </div>
        <ButtonBrand
          className="py-2 px-5 site-md:py-1.5 site-md:px-4.75 site-xl:py-2 site-xl:px-6.25"
          onClick={() => onVisibleCurrent(city.id)}
        >
          See more
        </ButtonBrand>
        <button className="size-6 site-xl:size-7.5" onClick={() => onDeleteCity(city.id)}>
          <Trash2 className="w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default DaysItem;
