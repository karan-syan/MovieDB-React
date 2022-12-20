import { format } from "date-fns";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, firestore_db } from "../firebaseConfig";

export const AddRecent = async (
  id: string,
  img: string,
  varient: "movies" | "shows"
) => {
  if (auth.currentUser) {
    const uid = auth.currentUser?.uid;
    const docRef = doc(firestore_db, "recent", uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      try {
        setDoc(docRef, {
          movies: [
            { id, img, varient, time: format(new Date(), "dd/mm/yyyy") },
          ],
        });
      } catch (error) {
        console.warn(error);
      }
    } else {
      const recent = docSnap.data().movies.filter((item: any) => {
        if (item.id !== id) {
          return {
            id: item.id,
            img: item.img,
            varient: item.varient,
            time: item.time,
          };
        }
      });
      updateDoc(docRef, {
        movies: [
          { id, img, varient, time: format(new Date(), "dd/mm/yyyy") },
          ...recent,
        ],
      });
    }
  }
};
