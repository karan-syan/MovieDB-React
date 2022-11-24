import React from "react";
import { useSearchParams } from "react-router-dom";
import {
  Latest,
  Now_playing,
  Popular,
  Top_rated,
  Upcoming,
} from "../util/constants";

function TabButton({ Name }: { Name: string }) {
  const myparams = window.location.search;
  const urlparams = new URLSearchParams(myparams);
  const [query, setQuery] = useSearchParams();
  return (
    <button
      type="button"
      className={`px-2 text-xs sm:text-sm md:text-base md:px-4 md:py-2  font-medium ${
        urlparams.get("type") === Name
          ? "bg-white text-gray-900"
          : "bg-transparent text-white"
      }  border hover:bg-gray-900 hover:text-white`}
      onClick={() => {
        setQuery({
          type: Name,
        });
      }}
    >
      {Name}
    </button>
  );
}

export default function ButtonGroup() {
  return (
    <div
      className={`inline-flex shadow-sm justify-center w-full"
      role="group`}
    >
      <TabButton Name={Popular} />
      {/* <TabButton Name={Latest} /> */}
      <TabButton Name={Top_rated} />
      <TabButton Name={Now_playing} />
      <TabButton Name={Upcoming} />
    </div>
  );
}
