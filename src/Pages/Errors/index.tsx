import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const turnBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center text-center gap-4">
        <div className="bg-whitesmoke text-pastel-black p-6 rounded-[1rem]">
          <h1 className="text-6xl mb-4">404</h1>
          <hr />
          <h3 className="text-4xl mt-4">Page not found</h3>
        </div>
        <button
          onClick={turnBack}
          className="p-4 rounded-[1rem] bg-living-coral text-whitesmoke block hover:scale-90 hover:opacity-60"
        >
          Back to dashboard
        </button>
      </div>
    </>
  );
};
