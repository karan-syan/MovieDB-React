import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import TvIcon from "@mui/icons-material/Tv";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Name from "./Name";

export default function Header() {
  const [state, setState] = useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };
  const navigate = useNavigate();
  const Links = [
    {
      title: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      title: "Tv Series",
      icon: <TvIcon />,
      link: "/shows",
    },
    {
      title: "Movie",
      icon: <MovieIcon />,
      link: "/movies",
    },
    {
      title: "WatchList",
      icon: <AddToQueueIcon />,
      link: "/",
    },
    {
      title: "Recent",
      icon: <HistoryToggleOffIcon />,
      link: "/",
    },
    {
      title: "Setting",
      icon: <SettingsIcon />,
      link: "/",
    },
    {
      title: "About",
      icon: <HelpOutlineIcon />,
      link: "/",
    },
  ];
  return (
    <Root>
      <MenuContainer onClick={toggleDrawer(true)}>
        <MenuIcon />
      </MenuContainer>
      <Name />
      <SearchContainer
        onClick={() => {
          navigate("/search");
        }}
      >
        <SearchIcon />
      </SearchContainer>
      <Drawer
        anchor={"left"}
        open={state}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { backgroundColor: "#00040a" } }}
      >
        <Box></Box>
        <List>
          {Links.map((e, index) => {
            return (
              <ListItem
                key={index}
                sx={{ ":hover": { backgroundColor: "#08101c" } }}
              >
                <ListItemButton
                  divider
                  sx={{
                    paddingRight: "6em",
                  }}
                  onClick={() => {
                    navigate(e.link);
                  }}
                >
                  <ListItemIcon sx={{ color: "#fff" }}>{e.icon}</ListItemIcon>
                  <ListItemText
                    primary={e.title}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "1em",
                        opacity: "0.7",
                        color: "#fff",
                        transition: "opacity 450ms",
                        ":hover": {
                          opacity: "1",
                        },
                      },
                    }}
                  />
                </ListItemButton>
                <Divider />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Root>
  );
}

const Root = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  paddingInline: "0.75rem",
  fontWeight: "800",
  justifyContent: "space-between",
  height: "7.5vh",
  backgroundImage: "linear-gradient(to right, #08101c, #00040a)",
}));

const MenuContainer = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  marginLeft: "0.5rem",
  fontSize: "1.875rem",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
}));
const SearchContainer = styled(Box)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  cursor: "pointer",
  padding: "0,5rem",
  fontSize: "1.875rem",
}));
