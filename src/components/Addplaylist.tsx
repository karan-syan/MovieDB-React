import { MouseEvent, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { fetchPlaylists } from "../firebase/playlistfetch";
import { uploadplaylist } from "../firebase/firestore";
import { Input } from "@mui/material";
import { ApplicationState } from "../redux/root/rootReducer";
import { useSelector } from "react-redux";

export default function Addplaylist({
  posterpath,
  id,
  varient,
}: {
  posterpath: string;
  id: string;
  varient: "movies" | "shows";
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [playlistname, setplaylistname] = useState<string>("");
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [playlist, setplaylist] = useState<string[]>();

  const userdetails = useSelector(
    (state: ApplicationState) => state.Userdetails
  );
  useEffect(() => {
    fetchPlaylists(userdetails?.email || "").then((res) => {
      if (res) {
        setplaylist(res.own);
        console.log(res);
      }
    });
  }, [userdetails]);

  return (
    <div>
      <Button
        id="basic-button"
        variant="contained"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Save +
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {playlist
          ? playlist.map((val) => {
              return (
                <MenuItem
                  key={val}
                  onClick={(e) => {
                    uploadplaylist(
                      val.substring(0, val.indexOf("@")),
                      id || "",
                      posterpath,
                      varient
                    );
                    handleClose();
                  }}
                >
                  {val.substring(0, val.indexOf("@"))}
                </MenuItem>
              );
            })
          : null}
        <MenuItem>
          <Input
            className="ml-2"
            type={"text"}
            value={playlistname}
            onChange={(e) => {
              setplaylistname(e.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              if (playlistname !== "") {
                uploadplaylist(playlistname, id || "", posterpath, varient);
                handleClose();
              }
            }}
          >
            +
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}
