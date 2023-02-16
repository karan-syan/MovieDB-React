import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import TvIcon from "@mui/icons-material/Tv";
import {
  Avatar,
  Box,
  Button,
  Divider,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  SwipeableDrawer,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApplicationState } from "../redux/root/rootReducer";
import Name from "./Name";

export default function Header() {
  const [state, setState] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const theme = useTheme();
  const user = useSelector((state: ApplicationState) => state.user);
  const navigate = useNavigate();
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
      title: "About",
      icon: <HelpOutlineIcon />,
      link: "/",
    },
  ];
  return (
    <Root>
      <MenuContainer>
        <MenuIcon onClick={() => setState((prev) => !prev)} />
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
      <SwipeableDrawer
        onOpen={() => setState(true)}
        anchor={"left"}
        transitionDuration={{
          enter: 400,
          exit: 400,
        }}
        open={state}
        onClose={() => setState(false)}
        PaperProps={{ sx: { backgroundColor: theme.palette.primary.main } }}
      >
        <List sx={{ mt: "6.4vh" }}>
          <UserProfile>
            <Avatar src={user?.photoURL || ""} sx={{ width: 64, height: 64 }} />
            <UserBtn variant="contained">
              {user ? "My Profile" : "Sign In"}
            </UserBtn>
          </UserProfile>
          {Links.map((e, index) => {
            return (
              <ListItem
                key={index}
                sx={{
                  ":hover": { backgroundColor: theme.palette.secondary.main },
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
      </SwipeableDrawer>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  paddingInline: "0.75rem",
  fontWeight: "800",
  justifyContent: "space-between",
  boxShadow: "0 0 10px #000",
  height: "7.5vh",
  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
}));

const MenuContainer = styled(Box)(() => ({
  cursor: "pointer",
  marginLeft: "0.5rem",
  fontSize: "1.875rem",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
}));
const SearchContainer = styled(Box)(() => ({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  cursor: "pointer",
  padding: "0,5rem",
  fontSize: "1.875rem",
}));
const UserProfile = styled(Box)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  color: "white",
  paddingBlock: "1rem",
  background: theme.palette.primary.main,
}));
const UserBtn = styled(Button)(() => ({
  marginTop: "1rem",
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
