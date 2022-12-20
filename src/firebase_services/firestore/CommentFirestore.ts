import { format } from "date-fns";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, firestore_db } from "../firebaseConfig";

export const AddComment = async (id: string, commentText: string) => {
  const docRef = doc(firestore_db, "movie-tv", id);
  const docSnap = await getDoc(docRef);
  const uid = auth.currentUser?.uid;
  if (!docSnap.exists()) {
    try {
      setDoc(docRef, {
        comment: [
          {
            text: commentText,
            time: format(new Date(), "dd/mm/yyyy"),
            userId: uid,
          },
        ],
      });
    } catch (error) {
      console.warn(error);
    }
  } else {
    await updateDoc(docRef, {
      comment: [
        {
          text: commentText,
          time: format(new Date(), "dd/mm/yyyy"),
          userId: uid,
        },
        ...docSnap.data().comment,
      ],
    });
  }
};
