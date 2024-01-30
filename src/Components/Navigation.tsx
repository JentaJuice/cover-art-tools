import React from "react";

interface components {
  page: React.Dispatch<React.SetStateAction<string | undefined>>;
  current: string | undefined;
}

export const Navigation = (comp: components) => {
  return (
    <>
      <div
        className="w-full h-screen bg-overlay flex flex-col text-center md:text-left"
        id="nav"
      >
        <div className="w-full p-4 flex flex-row gap-4 items-center">
          <img
            src="/logo.jpg"
            alt="logo"
            className="w-[50px] h-auto rounded-full"
          />
          <p>JentaJuice Services</p>
        </div>
        <button
          className="text-center md:text-left p-4 w-full border-solid border-0 border-b-whitesmoke border-opacity-0 hover:border-b-2 hover:border-opacity-100 hover:opacity-60 disabled:border-b-2 disabled:border-opacity-100 disabled:opacity-60"
          onClick={() => comp.page("calculator")}
          disabled={comp.current == "calculator"}
        >
          Resolution Calculator
        </button>
      </div>
    </>
  );
};
