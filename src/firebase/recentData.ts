import { getAuth } from "firebase/auth";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { app, db } from "../firebaseConfig";

export const getRecentData = async () => {
    const user = getAuth(app).currentUser;
    if (user?.uid) {
        const docRef = doc(db, "recent", user?.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data().list
        } else {
            console.log("No such document!");
        }
    }
}

export const setRecentData = async (id: number, img: string, varient: "movies" | "shows") => {
    const user = getAuth(app).currentUser;
    if (user?.uid) {
        const docRef = doc(db, "recent", user?.uid);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            await setDoc(docRef, {
                list: [
                    {
                        id,
                        img,
                        time: new Date().toLocaleString('en-GB', {
                            hour12: false,
                        }).slice(0, 9),
                        varient
                    }
                ]
            });
        } else {
            await updateDoc(docRef, {
                list: arrayUnion({
                    id,
                    img,
                    time: new Date().toLocaleString('en-GB', {
                        hour12: false,
                    }).slice(0, 10),
                    varient
                })
            })
        }
    }
}