import { getAuth, updateProfile } from "firebase/auth";
import { app } from "../firebaseConfig";

const user = getAuth(app).currentUser;

export const updateUsername = (username: string) => {
  if (user && username.length > 2)
    updateProfile(user, {
      displayName: username,
    });
};
