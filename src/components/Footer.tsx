import { Box, styled, Typography } from "@mui/material";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <Root>
      <Copyright />
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  paddingTop: "1rem",
  paddingBottom: "1rem",
  marginTop: "0.5rem",
  display: "flex",
  justifyContent: "center",
  background: theme.palette.secondary.main,
}));
