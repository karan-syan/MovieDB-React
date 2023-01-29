import { Box, styled, Typography } from "@mui/material";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import { ICast } from "../utils/type";
import { MOVIE_DB_IMG_URL } from "../utils/url";

export default function CastInfo({ item }: { item: ICast }) {
  const navigate = useNavigate();
  const { original_name, character, profile_path } = item;
  return (
    <Root onClick={() => navigate(`/people/${item.id}`)}>
      <Avatar
        size="100"
        round={true}
        src={`${MOVIE_DB_IMG_URL}${profile_path}`}
      />
      <OrignalName>{original_name}</OrignalName>
      <CharacterName>{character}</CharacterName>
    </Root>
  );
}
const Root = styled(Box)(() => ({
  display: "inline-block",
  marginInline: "0.5rem",
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
