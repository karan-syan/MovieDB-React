import { updateProfile } from "firebase/auth";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, firestore_db } from "./firebaseConfig";

export async function GetUserdb() {
  const col = collection(firestore_db, "users");
  const docRef = doc(col, auth?.currentUser?.uid || "");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
}
export async function updateUserDetails({
  age,
  gender,
  username,
  phoneNo,
}: {
  age: string;
  gender: string;
  username: string;
  phoneNo: string;
}) {
  if (auth?.currentUser) {
    const col = collection(firestore_db, "users");
    const updRef = doc(col, auth?.currentUser?.uid || "");
    await updateDoc(updRef, {
      age,
      gender,
      username,
      phoneNo,
    });
    updateProfile(auth?.currentUser, {
      displayName: username,
    });
  }
}
