import React from "react";

interface components {
  page: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const Navigation = (comp: components) => {
  return (
    <>
      <div
        className="w-full h-screen bg-overlay flex flex-col text-center md:text-left"
        id="nav"
      >
        <div className="w-full p-4">
          <img
            src="/logo.jpg"
            alt="logo"
            className="w-[50px] h-auto rounded-full"
          />
        </div>
        <button
          className="text-center md:text-left p-4 w-full border-solid border-0 hover:border-b-2 border-b-whitesmoke border-opacity-0 hover:border-opacity-100 hover:opacity-60"
          onClick={() => comp.page("cover")}
        >
          Cover Cropping
        </button>
        <button
          className="text-center md:text-left p-4 w-full border-solid border-0 hover:border-b-2 border-b-whitesmoke border-opacity-0 hover:border-opacity-100 hover:opacity-60"
          onClick={() => comp.page("calculator")}
        >
          Resolution Calculator
        </button>
      </div>
    </>
  );
};
