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
const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));
const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "800",
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
  paddingTop: "0.08rem",
  [theme.breakpoints.up("sm")]: {
    marginLeft: "1rem",
    fontSize: "1.25rem",
  },
}));
