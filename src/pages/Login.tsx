import React from "react";
import Name from "../components/Name";

export default function Login() {
  return (
    <div>
      <div
        className="flex w-full"
        style={{
          height: "7.5vh",
        }}
      >
        <Name />
      </div>
      <div className="flex justify-center w-full">
        <div className="flex w-2/3 bg-slate-800 h-28 justify-center">
          <h1>Login</h1>
        </div>
      </div>
    </div>
  );
}
