import { Box, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Name() {
  const navigate = useNavigate();

  return (
    <Root>
      <Title onClick={() => navigate("/")}>KTV</Title>
    </Root>
  );
}
const Root = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));
const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "800",
  marginInline: "0.5rem",
  paddingTop: "0.25rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.25rem",
  },
}));
