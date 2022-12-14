import { Avatar, Button, Input } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { AddComment } from "../firebase/firestore";

export default function Comment() {
  const { id } = useParams();
  const [commentText, setcommentText] = useState<string>("");
  return (
    <div className="flex mt-2">
      <Avatar src={auth.currentUser?.photoURL || ""} />
      <div className={"flex items-center flex-col  w-full mx-3  "}>
        <Input
          type={"text"}
          placeholder={"Add a comment..."}
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
