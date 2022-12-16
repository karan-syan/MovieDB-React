import { format } from "date-fns";
import { updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { IUserData } from "../utils/type";
import { auth, firestore_db, storage } from "./firebaseConfig";

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