import React from "react";
import { BarLoader } from "react-spinners";
import Header from "../components/Header";

export default function Recent() {
  return (
    <div className="flex justify-center items-center">
      {false ? (
        <BarLoader color="#36d7b7" />
      ) : (
        <div
          style={{
            width: "100%",
            maxWidth: "1600px",
            margin: "0px auto",
            float: "none",
          }}
        >
          <div className="overflow-auto">
            <div className={"sticky top-0 z-10"}>
              <Header />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
