import { Avatar, Button, Input } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddComment } from "../../firebase_services/firestore/CommentFirestore";
import { ApplicationState } from "../../redux/root/rootReducer";

export default function Comment() {
  const { id } = useParams();
  const [commentText, setcommentText] = useState<string>("");
  const userdetails = useSelector(
    (state: ApplicationState) => state.Userdetails
  );
  return (
    <div className="flex mt-2">
      <Avatar src={userdetails?.photoURL || ""} />
      <div className={"flex items-center flex-col  w-full mx-3"}>
        <Input
          type={"text"}
          color={"primary"}
          placeholder={"Add a comment..."}
          inputProps={{ style: { color: "white" } }}
          value={commentText}
          onChange={(e) => {
            setcommentText(e.target.value);
          }}
          className={"outline-none w-full text-white border-b-2"}
        />
        <div className="flex justify-end w-full my-3">
          <Button
            variant="contained"
            onClick={() => {
              AddComment(id || "", commentText);
              setcommentText("");
            }}
          >
            comment
          </Button>
        </div>
      </div>
    </div>
  );
}
