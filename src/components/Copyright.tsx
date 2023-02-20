import { Link, styled, Typography } from "@mui/material";

export default function Copyright() {
  return (
    <CopyrightText>
      Copyright © &nbsp;
      <Link color="inherit" href="https://ktv-movie.web.com/">
        KTV-Movie
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </CopyrightText>
  );
}

const CopyrightText = styled(Typography)(({ theme }) => ({
  opacity: "0.5",
  textAlign: "center",
  fontSize: "0.7rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}));
