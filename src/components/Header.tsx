import { Avatar } from "@mui/material";
import { BiMenu, BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApplicationState } from "../redux/root/rootReducer";
import HeaderTab from "./HeaderTab";
import Name from "./Name";

export default function Header() {
  const navigate = useNavigate();
  const userdetails = useSelector(
    (state: ApplicationState) => state.Userdetails
  );

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
          {userdetails ? <HeaderTab text="Recent" path="/recent" /> : null}
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
              if (userdetails) {
                navigate("/userdetails");
              } else {
                navigate("/signin");
              }
            }}
          >
            {userdetails?.photoURL ? (
              <Avatar
                src={userdetails?.photoURL || ""}
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
