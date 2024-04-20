import { useState } from "react";
import { Navigation } from "../../Components/Navigation";

import { Resolution } from "./ResolutionCalculator";
import { TimeCalculator } from "./TimeCalculator";

export function HomePage() {
  const [page, setPage] = useState<string>();

  const PageLoad = () => {
    let returnVar;

    if (page == "calculator") {
      returnVar = <Resolution />;
    } else if (page == "timeCal") {
      returnVar = <TimeCalculator />;
    } else {
      returnVar = <></>;
    }

    return returnVar;
  };

  return (
    <>
      <div className="w-full h-screen flex md:flex-row flex-col">
        <div className="w-full md:w-[30%]">
          <Navigation page={setPage} current={page} />
        </div>
        <div className="w-full md:w-full">
          <PageLoad />
        </div>
      </div>
    </>
  );
}
