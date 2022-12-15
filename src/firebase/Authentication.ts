import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import store from "../redux/store";
import { CallUserDetail } from "../redux/user/action";
import { IUserData } from "../utils/type";
import { auth } from "./firebaseConfig";
import { createUserDoc } from "./firestore";

export const SignUpUser = ({
  age,
  email,
  gender,
  password,
  phoneNo,
  username,
}: IUserData) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (res) => {
      updateProfile(res.user, {
        displayName: username,
      });
      createUserDoc(res.user.uid, {
        username,
        age,
        email,
        gender,
        password,
        phoneNo,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const SignInUser = (email: string, password: string) => {
  const auth = getAuth();
  try {
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      auth.updateCurrentUser(res.user);
      store.dispatch(CallUserDetail(res.user));
    });
  } catch (error: any) {
    console.log(error);
    alert("invalid username and password");
  }
};
