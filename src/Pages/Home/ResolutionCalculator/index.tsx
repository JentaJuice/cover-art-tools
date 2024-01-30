import { useState } from "react";

export const Resolution = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [resolution, setResolution] = useState<string>("");

  const Calc = () => {
    let calc = "";

    if (resolution != "") {
      let res: number;
      const input: number = width != 0 ? width : height;

      if (width != 0) {
        if (resolution == "219") {
          res = (input / 21) * 9;
        } else if (resolution == "169") {
          res = (input / 16) * 9;
        } else {
          res = (input / 4) * 3;
        }

        calc = `${input} x ${res}`;
      } else {
        if (resolution == "219") {
          res = (input / 9) * 21;
        } else if (resolution == "169") {
          res = (input / 9) * 16;
        } else {
          res = (input / 3) * 4;
        }
        calc = `${res} x ${input}`;
      }
    }

    return <>{calc}</>;
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center text-center items-center">
        <h2 className="text-5xl my-3">Resolution Calculator</h2>
        <div className="my-3">
          <input
            type="text"
            className="w-[5rem] rounded-[1rem] p-4 mx-4 text-center text-jet"
            placeholder="Width"
            onChange={(e) => setWidth(Number(e.target.value))}
            disabled={height != 0}
          />
          x
          <input
            type="text"
            className="w-[5rem] rounded-[1rem] p-4 mx-4 text-center text-jet"
            placeholder="Height"
            onChange={(e) => setHeight(Number(e.target.value))}
            disabled={width != 0}
          />
        </div>
        <div className="my-3 w-[14rem]">
          <select
            name="ratio"
            id="ratio"
            className="w-full text-jet text-center p-2 rounded-[1rem]"
            onChange={(e) => setResolution(e.target.value)}
          >
            <option value="219">21:9</option>
            <option value="169">16:9</option>
            <option value="43">4:3</option>
          </select>
        </div>
        <div>
          <div className="text-2xl p-4 my-6 bg-whitesmoke text-jet rounded-[1rem]">
            <h2>Working Resolution</h2>
            <Calc />
          </div>
        </div>
      </div>
    </>
  );
};
