import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Name from "./Name";

export default function DetailsHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between" style={{ height: "7.5vh" }}>
      <Name />
      <div className="flex items-center justify-between mx-2 ml-10 px-2 py-2 sm:mx-0 md:mx-3">
        <BiSearch
          className="text-xl sm:text-xl"
          onClick={() => {
            navigate("/search");
          }}
        />
      </div>
    </div>
  );
}
