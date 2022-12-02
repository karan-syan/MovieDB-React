import React from "react";
import { ICast } from "../utils/type";
import CastInfo from "./CastInfo";

export default function CastList({ data }: { data: ICast[] }) {
  return (
    <div className="w-full mt-2">
      <h1 className="text-lg mx-2">Casts:</h1>
      <div className="overflow-auto whitespace-nowrap">
        {data.map((item, index) => {
          return <CastInfo item={item} key={index} />;
        })}
      </div>
    </div>
  );
}
