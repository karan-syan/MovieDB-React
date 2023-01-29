import { styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

interface iprops {
  path: string;
  text: string;
}

export default function HeaderTab({ path, text }: iprops) {
  return (
    <NavLinked to={path}>
      <Typography>{text}</Typography>
    </NavLinked>
  );
}
const NavLinked = styled(NavLink)(({ theme }) => ({
  paddingTop: "0.25rem",
  "&.active": {
    borderTop: "4px solid #fff",
  },
  [theme.breakpoints.up("sm")]: {
    paddingInline: "0.5rem",
  },
  [theme.breakpoints.up("md")]: {},
  paddingInline: "1.25rem",
}));
