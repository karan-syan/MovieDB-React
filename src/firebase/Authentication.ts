import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

export const SignUpUser = (
  username: string,
  email: string,
  password: string
) => {
  try {
    createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
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
    signInWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    if (user) {
      console.log(user);
    }
  } catch (error: any) {
    console.log(error);
  }
};
