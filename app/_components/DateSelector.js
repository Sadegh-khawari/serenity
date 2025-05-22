"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
  addMonths,
  subMonths,
  format,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 1024, // Default to desktop size
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures effect is only run on mount

  return windowSize;
}

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  const [month, setMonth] = useState(new Date());
  const { width } = useWindowSize();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  const handlePrevMonth = () => {
    setMonth(subMonths(month, 1));
  };

  const handleNextMonth = () => {
    setMonth(addMonths(month, 1));
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="relative">
        <div className="bg-primary-800 text-primary-200 py-3 px-4 lg:px-8 flex items-center">
          <button
            onClick={handlePrevMonth}
            className="p-1 hover:bg-primary-700 rounded-full transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <div className="flex-1 text-center">
            <h2 className="text-lg font-semibold">
              {format(month, "MMMM yyyy")}
            </h2>
          </div>
          <button
            onClick={handleNextMonth}
            className="p-1 hover:bg-primary-700 rounded-full transition-colors"
            aria-label="Next month"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
        <DayPicker
          className="pt-6 lg:pt-8 place-self-center"
          mode="range"
          onSelect={setRange}
          selected={displayRange}
          min={minBookingLength + 1}
          max={maxBookingLength}
          fromMonth={new Date()}
          fromDate={new Date()}
          toYear={new Date().getFullYear() + 5}
          captionLayout="dropdown"
          numberOfMonths={width < 1024 ? 1 : 2}
          month={month}
          onMonthChange={setMonth}
          disabled={(curDate) =>
            isPast(curDate) ||
            bookedDates.some((date) => isSameDay(date, curDate))
          }
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 bg-accent-500 text-primary-800 min-h-[72px] py-4 sm:py-0">
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-4 sm:gap-6 mb-4 sm:mb-0 w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-4 sm:gap-6">
            <p className="flex gap-2 items-baseline">
              {discount > 0 ? (
                <>
                  <span className="text-xl sm:text-2xl">
                    ${regularPrice - discount}
                  </span>
                  <span className="line-through font-semibold text-primary-700">
                    ${regularPrice}
                  </span>
                </>
              ) : (
                <span className="text-xl sm:text-2xl">${regularPrice}</span>
              )}
              <span className="">/night</span>
            </p>
            {numNights ? (
              <>
                <p className="bg-accent-600 px-3 py-2 text-xl sm:text-2xl">
                  <span>&times;</span> <span>{numNights}</span>
                </p>
                <p>
                  <span className="text-base sm:text-lg font-bold uppercase">
                    Total
                  </span>{" "}
                  <span className="text-xl sm:text-2xl font-semibold">
                    ${cabinPrice}
                  </span>
                </p>
              </>
            ) : null}
          </div>
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold w-full sm:w-auto"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
