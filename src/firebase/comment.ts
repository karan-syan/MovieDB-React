import { getAuth } from "firebase/auth";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { app, db } from "../firebaseConfig";

export const getCommentData = async (id: number, varient: "tv" | "movie") => {
  const docRef = doc(db, `${varient}-comment`, id.toString());
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().comment || [];
  } else {
    return [];
  }
};
export const AddComment = async (
  id: number,
  varient: "tv" | "movie",
  commentText: string
) => {
  const userId = getAuth(app).currentUser?.uid;
  const docRef = doc(db, `${varient}-comment`, id.toString());
  const docSnap = await getDoc(docRef);
  if (userId) {
    const date = new Date().toJSON().slice(0, 10);
    const nDate =
      date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
    if (docSnap.exists()) {
      await setDoc(docRef, {
        comment: [
          {
            text: commentText,
            time: nDate,
            userId,
          },
        ],
      });
    } else {
      await updateDoc(docRef, {
        comment: arrayUnion({
          text: commentText,
          time: nDate,
          userId,
        }),
      });
    }
  }
};
