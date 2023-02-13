import { getAuth } from "firebase/auth";
import { arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { app, db } from "../firebaseConfig";
import { WatchListDataType } from "../utils/type";

export const getWatchListData = async () => {
    const user = getAuth(app).currentUser;
    if (user?.uid) {
        const docRef = doc(db, "watchlist", user?.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data().list.reverse();
        } else {
            console.log("No such document!");
        }
    }
}
export const checkWatchListData = async (id: number) => {
    const user = getAuth(app).currentUser;
    if (user?.uid) {
        const docRef = doc(db, "watchlist", user?.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data().list.find((e:WatchListDataType)=> e.id === id);
        } else {
            console.log("No such document!");
        }
    }
}

export const addWatchListData = async (id: number, img: string, varient: "movies" | "shows") => {
    const user = getAuth(app).currentUser;
    if (user?.uid) {
        const docRef = doc(db, "watchlist", user?.uid);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            await setDoc(docRef, {
                list: [
                    {
                        id,
                        img,
                        varient
                    }
                ]
            });
        } else {
            await updateDoc(docRef, {
                list: arrayUnion({
                    id,
                    img,
                    varient
                })
            })
        }
    }
}
export const removeWatchListData = async (id: number, img: string, varient: "movies" | "shows") => {
    const user = getAuth(app).currentUser;
    if (user?.uid) {
        const docRef = doc(db, "watchlist", user?.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            await updateDoc(docRef, {
                list: arrayRemove({
                    id,
                    img,
                    varient
                })
            })
        } 
    }
}