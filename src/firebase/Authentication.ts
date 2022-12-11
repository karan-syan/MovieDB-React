import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "./firebaseConfig";

export const SignUpUser = (
  username: string,
  email: string,
  password: string
) => {
  try {
    createUserWithEmailAndPassword(getAuth(app), email, password);
    const user = getAuth(app).currentUser;
    if (user) {
      console.log(user);
      updateProfile(user, {
        displayName: username,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const SignInUser = (email: string, password: string) => {
  try {
    signInWithEmailAndPassword(getAuth(app), email, password);
    const user = getAuth(app).currentUser;
    if (user) {
      console.log(user);
    }
  } catch (error: any) {
    console.log(error);
  }
};
