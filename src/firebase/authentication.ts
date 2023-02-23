import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebaseConfig";
import store from "../redux/store";
import { setUser } from "../redux/User/action";

export const userLogin = (
  email: string,
  password: string,
  loginFailed: () => void
) => {
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      store.dispatch(setUser(userCredential.user));
    })
    .catch((error) => {
      loginFailed();
    });
};

export const createUser = (
  username: string,
  email: string,
  password: string
) => {
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: username,
      });
      sendEmailVerification(userCredential.user).then(() => {});
    })
    .catch((error: Error) => {});
};
export const userLogOut = (navigate: () => void) => {
  const auth = getAuth(app);
  signOut(auth).then(() => {
    store.dispatch(setUser(null));
    navigate();
  });
};
