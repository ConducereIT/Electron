import { useState, useEffect } from "react";

export const Countdow= () => {
  const [countdownDate] = useState<number>(
    new Date("4/26/2025 10:30:00 AM").getTime()
  );

  const [state, setState] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => setNewTime(), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      const days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      if (!numbersToAddZeroTo.includes(hours)) {
        hours = parseInt(`0${hours}`, 10);
      }
      if (!numbersToAddZeroTo.includes(minutes)) {
        minutes = parseInt(`0${minutes}`, 10);
      }
      if (!numbersToAddZeroTo.includes(seconds)) {
        seconds = parseInt(`0${seconds}`, 10);
      }

      setState({ days, hours, minutes, seconds });
    }
  };

  return (
    <>
      <div className="w-full flex justify-center text-[#FFFFFF] lg:scale-[100%] scale-[40%] mb-24 z-10 text-frumos space-x-4">
        <div className="time-section ">
          <div className="time text-8xl font-extrabold text-frumos">
            {state.days >= 0 ? state.days : "0"}
          </div>
          <small className="time-text text-white">Zile</small>
        </div>
        <div className="time-section">
          <div className="time text-8xl font-extrabold text-white">:</div>
        </div>
        <div className="time-section">
          <div className="time text-8xl font-extrabold">
            {state.hours >= 0 ? state.hours : "00"}
          </div>
          <small className="time-text text-white">Ore</small>
        </div>
        <div className="time-section">
          <div className="time text-8xl font-extrabold text-white">:</div>
        </div>
        <div className="time-section">
          <div className="time text-8xl font-extrabold">
            {state.minutes >= 0 ? state.minutes : "00"}
          </div>
          <small className="time-text text-white">Minute</small>
        </div>
      </div>
    </>
  );
};
