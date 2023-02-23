import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUserProfileImg } from "../firebase/comment";

import { CommentData } from "../utils/type";
interface Props {
  commentData: CommentData;
}
const Comments = (props: Props) => {
  const { commentData } = props;
  const { text, time, userId } = commentData;
  const [userImg, setUserImg] = useState<string>("");
  useEffect(() => {
    getUserProfileImg(userId).then((res) => {
      setUserImg(res);
    });
    console.log(userImg);
  }, []);
  return (
    <Box sx={{ display: "flex", marginTop: "1rem", alignItems: "center" }}>
      <Avatar src={userImg} sx={{ width: 50, height: 50 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginLeft: "1rem",
        }}
      >
        <Typography fontSize={"0.9rem"} sx={{ opacity: "0.5" }}>
          {time}
        </Typography>
        <Typography fontSize={"1.125rem"}>{text}</Typography>
      </Box>
    </Box>
  );
};

export default Comments;
