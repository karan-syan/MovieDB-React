import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import store from "../redux/store";
import { setUser } from "../redux/User/action";

const auth = getAuth();
export const userLogin = (email: string, password: string, loginFailed:()=>void) =>{
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            store.dispatch(setUser(userCredential.user));
        })
        .catch((error) => {
            loginFailed();
        });
}
export const createUser = (username:string, email: string, password: string) =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log(user);
      await updateProfile(user, {
        displayName: username,
      });
      sendEmailVerification(userCredential.user).then(() => {});
    })
    .catch((error: Error) => {
      console.log(error);
    });
}