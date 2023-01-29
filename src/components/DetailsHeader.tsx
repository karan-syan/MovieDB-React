import SearchIcon from "@mui/icons-material/Search";
import { Box, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Name from "./Name";

export default function DetailsHeader() {
  const navigate = useNavigate();

  return (
    <Root>
      <Name />
      <Wrapper>
        <SearchIcon
          sx={{
            fontSize: "1.25rem",
          }}
          onClick={() => {
            navigate("/search");
          }}
        />
      </Wrapper>
    </Root>
  );
}

const Root = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  height: "7.5vh",
}));

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "0.5rem",
  marginLeft: "2.5rem",
  padding: "0.5rem 0.5rem",
  [theme.breakpoints.up("sm")]: {
    marginInline: "0px",
  },
  [theme.breakpoints.up("md")]: {
    marginInline: "0.75rem",
  },
}));
