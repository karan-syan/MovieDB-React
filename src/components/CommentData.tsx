import { Avatar } from "@mui/material";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore_db, storage } from "../firebase/firebaseConfig";
let namearr: string[] = [];
export default function CommentData() {
  const { id } = useParams();
  const [dataexist, setdataexist] = useState<boolean>(false);
  const [commentdata, setcommentdata] = useState<any>([]);
  const [userName, setuserName] = useState<any[]>([]);
  useEffect(() => {
    getdata();
    console.log("called");
  }, [dataexist]);

  async function getdata() {
    console.log(1);
    onSnapshot(doc(firestore_db, "movie-tv", id || ""), (docSnap) => {
      if (docSnap.exists()) {
        setdataexist(true);
        setcommentdata(docSnap.data().comment);
      }
    });
    Promise.all(
      commentdata.map(async (comment: { userId: string }) => {
        const docRef = doc(firestore_db, "users", comment.userId || "");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          namearr.push(docSnap.data().username);
          setuserName(namearr);
        }
      })
    );
  }
  return (
    <div>
      {dataexist ? (
        <div>
          <div>
            <h1 className="font-extrabold text-xl mb-2">Comments:</h1>
          </div>
          <div>
            {commentdata.map((comment: any, index: number) => {
              return (
                <div className="text-white mb-3 flex" key={index}>
                  <div className="flex mr-2">
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <h1 className="font-bold">{userName[index] || ""}</h1>
                      <h1 className="opacity-50 ml-2 text-sm">
                        {comment.time}
                      </h1>
                    </div>
                    <h1 className="ml-5 font-extralight opacity-80">
                      {comment.text}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
