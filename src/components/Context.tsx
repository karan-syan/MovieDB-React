import { Box, styled, Typography } from "@mui/material";

export default function Context({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <Root>
      <Typography fontSize={"1.125rem"}>{title}:</Typography>
      <Typography sx={{ opacity: "0.7" }} fontSize={"0.875rem"}>
        {subtitle}
      </Typography>
    </Root>
  );
}
const Root = styled(Box)(() => ({
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
  marginTop: "0.5rem",
}));
