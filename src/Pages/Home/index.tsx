import { useState } from "react";
import { Navigation } from "../../Components/Navigation";
import { Cover } from "./CoverCrop";
import { Resolution } from "./ResolutionCalculator";

export function HomePage() {
  const [page, setPage] = useState<string>();

  const PageLoad = () => {
    let returnVar;

    if (page == "cover") {
      returnVar = <Cover />;
    } else {
      returnVar = <Resolution />;
    }

    return returnVar;
  };

  return (
    <>
      <div className="w-full h-screen flex md:flex-row flex-col">
        <div className="w-full md:w-[30%]">
          <Navigation page={setPage} />
        </div>
        <div className="w-full md:w-full">
          <PageLoad />
        </div>
      </div>
    </>
  );
}
