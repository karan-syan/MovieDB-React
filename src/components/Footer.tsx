import { Box, styled, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Root>
      <Typography sx={{ opacity: 0.5 }}>
        @ 2023 KTV-Movie. All rights reserved.
      </Typography>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  paddingBlock: "1.5rem",
  marginTop: "0.5rem",
  display: "flex",
  justifyContent: "center",
  background: theme.palette.secondary.main,
}));
