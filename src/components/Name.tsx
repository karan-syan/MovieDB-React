import { useNavigate } from "react-router-dom";

export default function Name() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center cursor-pointer">
      <h1
        className="font-extrabold mx-2 pt-1 sm:text-xl"
        onClick={() => {
          navigate("/");
        }}
      >
        MovieDB
      </h1>
    </div>
  );
}
