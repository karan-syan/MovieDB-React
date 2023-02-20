import { getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import { app } from "../firebaseConfig";

export const updateUsername = (username: string) => {
  const user = getAuth(app).currentUser;
  if (user) {
    updateProfile(user, {
      displayName: username,
    });
  }
};
export const resendEmailVerificationLink = () => {
  const user = getAuth(app).currentUser;
  if (user) {
    sendEmailVerification(user);
  }
};
