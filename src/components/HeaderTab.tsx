import React from "react";
import { NavLink } from "react-router-dom";

interface iprops {
  path: string;
  text: string;
}

export default function HeaderTab({ path, text }: iprops) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "border-t-4 md:px-5 sm:px-2 pt-1 mt-0 "
          : "md:px-5 sm:px-2 pt-1 mt-0"
      }
    >
      <h1>{text}</h1>
    </NavLink>
  );
}
