import { Box, styled, Typography } from "@mui/material";
import { MOVIE_DB_IMG_URL } from "../../utils/url";
interface network {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

export default function NetworkList({ item }: { item: network[] }) {
  return (
    <Root>
      <Title>Networks:</Title>
      <Container>
        {item.map((item, index) => {
          return (
            <Wrapper key={index}>
              <img src={MOVIE_DB_IMG_URL + item.logo_path} alt="NetworkIcon" />
              <Typography textAlign={"center"}>{item.name}</Typography>
            </Wrapper>
          );
        })}
      </Container>
    </Root>
  );
}

const Root = styled(Box)(() => ({
  marginTop: "0.5rem",
  width: "100%",
}));
const Title = styled(Typography)(() => ({
  marginInline: "0.5rem",
  fontSize: "1.125rem",
}));
const Wrapper = styled(Box)(() => ({
  borderRadius: "9999px",
  marginInline: "0.5rem",
  width: "20%",
  flexShrink: "0",
  height: "20%",
}));
const Container = styled(Box)(() => ({
  marginInline: "0.5rem",
  opacity: "0.7",
  fontSize: "0.875rem",
  display: "flex",
  overflow: "auto",
  alignItems: "flex-end",
}));
