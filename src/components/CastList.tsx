import { Box, styled, Typography } from "@mui/material";
import { ICast } from "../utils/type";
import CastInfo from "./CastInfo";

export default function CastList({ data }: { data: ICast[] }) {
  return (
    <Root>
      <Title>Casts:</Title>
      <Container>
        {data.map((item, index) => {
          return <CastInfo item={item} key={index} />;
        })}
      </Container>
    </Root>
  );
}

const Root = styled(Box)(() => ({
  width: "100%",
  marginTop: "0.5rem",
}));
const Title = styled(Typography)(() => ({
  marginInline: "0.5rem",
  fontSize: "1.125rem",
}));
const Container = styled(Box)(() => ({
  display: "flex",
  overflow: "auto",
  "::-webkit-scrollbar": {
    height: "0.5rem",
  },
}));
