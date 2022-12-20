import { updateProfile } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { IUserData } from "../../utils/type";
import { auth, firestore_db, storage } from "../firebaseConfig";

export const createUserDoc = (
  uid: string,
  { username, email, password, age, gender, phoneNo }: IUserData
) => {
  const docRef = doc(firestore_db, "users", uid);

  try {
    setDoc(docRef, {
      username,
      email,
      age,
      gender,
      phoneNo,
      password,
    });
  } catch (error) {
    console.warn(error);
  }
};

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

export const uploadImg = async (file: any) => {
  const fileRef = ref(storage, "image/" + auth.currentUser?.uid + ".jpg");
  const metadata = {
    contentType: "image/png",
  };
  await uploadBytes(fileRef, file, metadata);
  const photoUrl = await getDownloadURL(fileRef);
  if (auth.currentUser) {
    updateProfile(auth.currentUser, { photoURL: photoUrl });
    console.log(photoUrl);
    console.log(auth.currentUser.photoURL);
  }
  alert("file uploaded");
};
export const checkUserMail = (email: string) => {
  let title: any[] = [];
  const colRef = collection(firestore_db, "users");
  const q = query(colRef, where("email", "==", email));
  console.log("q==", q);
  onSnapshot(q, (snapshot) => {
    snapshot.docs.map((doc) => {
      title.push({ ...doc.data() });
    });

    console.log(title);
  });

  return title;
};
