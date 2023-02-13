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
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Name from "./Name";

export default function Header() {
  const [state, setState] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
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
  const toggleSearch = () => {
    setSearchShow((prevState) => !prevState);
  };
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
      link: "/watchlist",
    },
    {
      title: "Recent",
      icon: <HistoryToggleOffIcon />,
      link: "/recent",
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
      <MenuContainer>
        <MenuIcon onClick={toggleDrawer(true)} />
        <Name />
      </MenuContainer>
      <Box sx={{ display: "flex" }}>
        <SearchField
          placeholder="Search"
          visibility={searchShow}
          value={searchValue}
          onKeyUp={(e) => {
            if (searchValue && searchValue !== "" && e.keyCode === 13) {
              navigate(`/search/${searchValue}`);
              toggleSearch();
            }
          }}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          type="search"
        />
        <SearchContainer
          onClick={() => {
            if (searchShow && searchValue.length !== 0) {
              navigate(`/search/${searchValue}`);
              toggleSearch();
            } else {
              toggleSearch();
            }
          }}
        >
          <SearchIcon />
        </SearchContainer>
      </Box>
      <Drawer
        anchor={"left"}
        transitionDuration={{
          enter: 400,
          exit: 400,
        }}
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
                sx={{
                  ":hover": { backgroundColor: "#08101c" },
                  paddingRight: "6em",
                  paddingBlock: "0.875rem",
                }}
                onClick={() => {
                  navigate(e.link);
                  setState(false);
                }}
                divider
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
const SearchField = styled(InputBase)<{ visibility: boolean }>(
  ({ theme, visibility }) => ({
    display: visibility ? "inline-block" : "none",
    height: "100%",
    outline: "2px solid transparent",
    outlineOffset: "2px",
    backgroundColor: "transparent",
    color: theme.palette.text.secondary,
  })
);
