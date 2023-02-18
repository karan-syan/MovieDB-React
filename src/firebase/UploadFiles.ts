import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../firebaseConfig";
import store from "../redux/store";
import { setUser } from "../redux/User/action";

const storage = getStorage();
export const uploadUserImg = (file: File) => {
  const user = getAuth(app).currentUser;
  if (!user) {
    return;
  }
  const path = `image/${user.uid}.jpg`;
  const storageRef = ref(storage, path);
  uploadBytes(storageRef, file).then(() => {
    getDownloadURL(ref(storage, path)).then((url) => {
      updateProfile(user, {
        photoURL: url,
      }).then(() => {
        store.dispatch(setUser(user));
      });
    });
  });
};
