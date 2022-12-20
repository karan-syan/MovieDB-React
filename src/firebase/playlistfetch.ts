import { collection, doc, getDoc } from "firebase/firestore";
import { auth, firestore_db } from "./firebaseConfig";

export const fetchPlaylists = async (mail: string) => {
  try {
    const col = collection(firestore_db, "playlistaccess");
    const docRef = doc(col, mail);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    console.log(error);
  }
};

export const FetchPaylistdata = async (id: string) => {
  try {
    const col = collection(firestore_db, "playlist");
    const docRef = doc(col, atob(id || ""));
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    console.log(error);
  }
};
