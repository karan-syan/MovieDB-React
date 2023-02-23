import { Avatar, Box, Button, styled, Typography } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AddComment } from "../firebase/comment";
import { db } from "../firebaseConfig";
import { ApplicationState } from "../redux/root/rootReducer";
import { CommentData } from "../utils/type";
import Comments from "./Comments";
interface Props {
  id: number;
  varient: "tv" | "movie";
}
const CommentField = (props: Props) => {
  const { id, varient } = props;
  const [commentData, setCommentData] = useState<CommentData[]>([]);
  const [commentText, setCommentText] = useState<string>("");
  const user = useSelector((state: ApplicationState) => state.user);
  useEffect(() => {
    const docRef = doc(db, `${varient}-comment`, id.toString());
    onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setCommentData(docSnap.data().comment || []);
      } else {
        setCommentData([]);
      }
    });
  }, []);
  return (
    <Root>
      <Typography fontSize={"1.125rem"}>
        {commentData.length || 0} Comments
      </Typography>
      <Wrapper>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Avatar src={user?.photoURL || ""} sx={{ width: 60, height: 60 }} />
          <InputField
            id="standard-basic"
            placeholder="Leave a comment"
            value={commentText}
            type="search"
            onChange={(e) => {
              setCommentText(e.currentTarget.value);
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              setCommentText("");
            }}
            sx={{ padding: "5px 28px", borderRadius: 25, m: 1 }}
          >
            cancel
          </Button>
          <Button
            variant="contained"
            sx={{ padding: "5px 28px", borderRadius: 25, m: 1 }}
            onClick={() => {
              if (commentText.length > 0) {
                AddComment(id, varient, commentText);
                setCommentText("");
              }
            }}
          >
            Comment
          </Button>
        </Box>
      </Wrapper>
      <CommentWrapper>
        {commentData
          .map((e) => <Comments commentData={e} key={e.userId} />)
          .reverse()}
      </CommentWrapper>
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
  flexDirection: "column",
  alignItems: "center",
  marginTop: "0.5rem",
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

const CommentWrapper = styled(Box)(() => ({
  height: 340,
  overflowY: "auto",
}));
