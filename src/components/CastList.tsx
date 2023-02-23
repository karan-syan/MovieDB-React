import { Avatar, Box, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ICast } from "../utils/type";
import { MOVIE_DB_IMG_URL } from "../utils/url";

export default function CastList({ data }: { data: ICast[] }) {
  const navigate = useNavigate();
  return (
    <Root>
      <Title>Casts:</Title>
      <Container>
        {data.map((item, index) => {
          const { original_name, character, profile_path } = item;
          return (
            <Wrapper
              onClick={() => navigate(`/people/${item.id}`)}
              key={item.id}
            >
              <Avatar
                sx={{ width: 100, height: 100 }}
                draggable="false"
                src={`${MOVIE_DB_IMG_URL}${profile_path}`}
              />
              <OrignalName>{original_name}</OrignalName>
              <CharacterName>{character}</CharacterName>
            </Wrapper>
          );
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
const Wrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 0.5rem",
  cursor: "pointer",
  textAlign: "center",
  flexShrink: "0",
}));
const OrignalName = styled(Typography)(() => ({
  fontWeight: "800",
  overflow: "hidden",
  display: "-webkit-box",
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": 1,
}));
const CharacterName = styled(Typography)(() => ({
  fontSize: "0.75rem",
  opacity: "0.6",
  overflow: "hidden",
  display: "-webkit-box",
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": 1,
}));
