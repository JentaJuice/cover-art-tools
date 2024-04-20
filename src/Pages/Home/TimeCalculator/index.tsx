import { useState } from "react";

export const TimeCalculator = () => {
  const [totalTime, setTotalTime] = useState<number>(0);
  const [min, setMin] = useState<number>();
  const [sec, setSec] = useState<number>();

  const addTime = () => {
    let total: number = 0;

    if (min != undefined && min != null && sec != undefined && sec != null) {
      total += min * 60;
      total += sec;
    }

    setTotalTime(totalTime + total);
  };

  const Calc = () => {
    let calc = "0:00";
    let tMin: number = 0;
    let tSec: number = 0;

    if (totalTime > 0) {
      tMin = Math.floor(totalTime / 60);
      tSec = Math.abs(tMin * 60 - totalTime);
    }

    calc = `${String(tMin).length < 2 ? `0${tMin}` : tMin}:${
      String(tSec).length < 2 ? `0${tSec}` : tSec
    }`;

    return <>{calc}</>;
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center text-center items-center">
        <h2 className="text-5xl my-3">Time Calculator</h2>
        <div className="my-3">
          <input
            type="text"
            className="w-[5rem] rounded-[1rem] p-4 mx-2 text-center text-jet"
            placeholder="Min"
            onChange={(e) => setMin(Number(e.target.value))}
          />
          <input
            type="text"
            className="w-[5rem] rounded-[1rem] p-4 mx-2 text-center text-jet"
            placeholder="Sec"
            onChange={(e) => setSec(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col gap-4">
          <button
            className="p-4 bg-living-coral text-lg rounded hover:rounded-lg hover:scale-95 hover:opacity-70"
            onClick={addTime}
          >
            Add
          </button>
        </div>
        <div>
          <div className="text-2xl p-4 my-6 bg-whitesmoke text-jet rounded-[1rem]">
            <h2>Total Time</h2>
            <Calc />
          </div>
        </div>
      </div>
    </>
  );
};
