import { getAuth } from "firebase/auth";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { app, db } from "../firebaseConfig";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export const getCommentData = (id: number, varient: "tv" | "movie") => {
  const docRef = doc(db, `${varient}-comment`, id.toString());
  onSnapshot(docRef, (docSnap) => {
    if (docSnap.exists()) {
      return docSnap.data().comment || [];
    } else {
      return [];
    }
  });
};
export const getUserProfileImg = async (userId: string) => {
  const storage = getStorage();
  const pathReference = ref(storage, `image/${userId}.jpg`);
  return await getDownloadURL(pathReference);
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
    console.log("call2");
    const date = new Date().toJSON().slice(0, 10);
    const nDate =
      date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
    if (!docSnap.exists()) {
      console.log("call3");

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
      console.log("call4");
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
