import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSearchParams } from "react-router-dom";

export default function Filter() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [query, setQuery] = useSearchParams();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        Filter
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
        <MenuItem
          onClick={() => {
            query.set("filter", "multi");
            setQuery(query);
            handleClose();
          }}
        >
          All
        </MenuItem>
        <MenuItem
          onClick={() => {
            query.set("filter", "movie");
            setQuery(query);
            handleClose();
          }}
        >
          Movies
        </MenuItem>
        <MenuItem
          onClick={() => {
            query.set("filter", "tv");
            setQuery(query);
            handleClose();
          }}
        >
          Tv Shows
        </MenuItem>
      </Menu>
    </div>
  );
}
