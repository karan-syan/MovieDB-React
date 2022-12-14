import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore_db } from "../../firebase/firebaseConfig";
import Avatar from "./Avatar";
import Username from "./Username";
export default function CommentData() {
  const { id } = useParams();
  const [dataexist, setdataexist] = useState<boolean>(false);
  const [commentdata, setcommentdata] = useState<any>([]);
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
                    <Avatar id={comment.userId} />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <Username id={comment.userId} />
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
