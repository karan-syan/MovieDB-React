import { Box, styled, Typography } from "@mui/material";
import { MOVIE_DB_IMG_URL } from "../utils/url";
import HorizontalScrollBtnWrapper from "./HorizontalScrollBtnWrapper";
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
      <HorizontalScrollBtnWrapper alignItem="end" item={
        <>
          {item.map((item, index) => {
            return (
              <Wrapper key={index}>
                <img src={MOVIE_DB_IMG_URL + item.logo_path} alt="NetworkIcon" />
                <Typography textAlign={"center"}>{item.name}</Typography>
              </Wrapper>
            );
          })}
        </>
      } />
    </Root>
  );
}

const Root = styled(Box)(() => ({
  width: "100%",
  marginTop: "0.5rem",
  position: "relative",
  display: "flex",
  flexDirection: "column"
}));
const Title = styled(Typography)(() => ({
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
  fontSize: "1.125rem",
}));
const Wrapper = styled(Box)(() => ({
  borderRadius: "9999px",
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
  width: "20%",
  flexShrink: "0",
  height: "20%",
}));

