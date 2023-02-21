import { Avatar, Box, Button, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCommentData, AddComment } from "../firebase/comment";
import { CommentData } from "../utils/type";
interface Props {
  id: number;
  varient: "tv" | "movie";
}
const CommentField = (props: Props) => {
  const { id, varient } = props;
  const [commentData, setCommentData] = useState<CommentData[]>([]);
  const [commentText, setCommentText] = useState<string>("");
  useEffect(() => {
    getCommentData(id, varient).then((res) => {
      setCommentData(res);
    });
  }, []);
  return (
    <Root>
      <Typography fontSize={"1.125rem"}>
        {commentData.length} Comments
      </Typography>
      <Wrapper>
        <Avatar
          src={
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }
        />
        <InputField id="standard-basic" placeholder="Comment" />
        <Button
          onClick={() => {
            setCommentText("");
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            if (commentText.length > 0) {
              AddComment(id, varient, commentText);
            }
          }}
        >
          Comment
        </Button>
      </Wrapper>
    </Root>
  );
};

export default CommentField;

const Root = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "90%",
}));
const Wrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));
const InputField = styled("input")(() => ({
  color: "white",
  margin: "0.5rem",
  width: "100%",
  background: "none",
  outline: "none",
  padding: "0.5rem 0",
  borderBottom: "2px solid #ffff",
}));
