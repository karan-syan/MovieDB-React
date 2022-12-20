import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore_db } from "../../firebase_services/firebaseConfig";

export default function Username({ id }: { id: string }) {
  const [userName, setuserName] = useState<string>("");
  useEffect(() => {
    getusername();
  }, []);
  async function getusername() {
    const docRef = doc(firestore_db, "users", id || "");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setuserName(docSnap.data().username);
    }
  }
  return (
    <div>
      <h1 className="font-bold">{userName !== "" ? userName : ""}</h1>
    </div>
  );
}
