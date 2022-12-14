import { Avatar } from "@mui/material";
import { BiMenu, BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import HeaderTab from "./HeaderTab";
import Name from "./Name";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div
      className={`flex items-center w-full justify-between px-3 font-bold`}
      style={{
        height: "7.5vh",
        backgroundImage: "linear-gradient(to right, #08101c, #00040a)",
      }}
    >
      <div className="flex items-center ml-2 mr-10 sm:hidden">
        <BiMenu className="text-3xl" />
      </div>
      <Name />
      <div className="items-center flex">
        <div className=" items-center hidden hover:cursor-pointer sm:flex">
          <HeaderTab text="Home" path="/" />
          <HeaderTab text="Movies" path="/movies" />
          <HeaderTab text="Tv Shows" path="/shows" />
        </div>
        <div className="flex items-center justify-between mx-2 px-2 py-2 sm:mx-0 md:mx-1">
          <BiSearch
            className="text-xl sm:text-xl"
            onClick={() => {
              navigate("/search");
            }}
          />
          <div
            className="flex cursor-pointer items-center ml-5"
            onClick={() => {
              if (!auth.currentUser) {
                navigate("/signin");
              } else {
                navigate("/userdetails");
              }
            }}
          >
            <h1 className="mr-2">{auth.currentUser?.displayName}</h1>
            {auth.currentUser?.photoURL ? (
              <Avatar
                src={auth.currentUser?.photoURL || ""}
                sx={{ width: 40, height: 40 }}
              />
            ) : (
              <CgProfile className="hidden ml-3 mr-1 sm:flex sm:text-xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
