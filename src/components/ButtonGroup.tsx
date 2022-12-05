import { useSearchParams } from "react-router-dom";
import {
  Now_playing,
  Popular,
  Top_rated,
  Trending,
  Upcoming,
} from "../utils/constants";

function TabButton({ Name }: { Name: string }) {
  const [query, setQuery] = useSearchParams();
  return (
    <button
      type="button"
      className={`px-1 py-2 text-xs sm:px-2 sm:text-sm md:text-base md:px-4 font-medium ${
        query.get("type") === Name
          ? "bg-white text-gray-900"
          : "bg-transparent text-white"
      }  border hover:bg-gray-900 hover:text-white`}
      onClick={() => {
        setQuery({
          type: Name,
        });
      }}
    >
      {Name.charAt(0).toUpperCase() + Name.slice(1).replace("_", " ")}
    </button>
  );
}

export default function ButtonGroup({ varient }: { varient: "tv" | "movie" }) {
  return (
    <div
      className={`inline-flex shadow-sm justify-center w-full"
      role="group`}
    >
      <TabButton Name={Popular} />
      {/* <TabButton Name={Latest} /> */}
      <TabButton Name={Top_rated} />
      <TabButton Name={Now_playing} />
      {varient === "tv" ? null : <TabButton Name={Upcoming} />}
    </div>
  );
}
