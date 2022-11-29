import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Name from "./Name";

export default function Searchbar() {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center justify-between px-3 font-bold"
      style={{ height: "7.5vh", backgroundColor: "#000814" }}
    >
      <div className="hidden sm:block">
        <Name />
      </div>
      <div className="flex h-full w-full pl-2 sm:w-3/4">
        <input
          className="h-full bg-transparent w-11/12 focus:outline-none"
          placeholder="Search"
        />
        <div className="flex items-center justify-between ml-1 pl-3">
          <BiSearch
            className="text-xl sm:text-xl"
            onClick={() => {
              navigate("/search");
            }}
          />
        </div>
      </div>
    </div>
  );
}
