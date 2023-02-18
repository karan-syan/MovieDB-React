import { getAuth } from "firebase/auth";
import { arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { app, db } from "../firebaseConfig";

export const getRecentData = async () => {
    const user = getAuth(app).currentUser;
    if (user?.uid) {
        const docRef = doc(db, "recent", user?.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data().list.reverse();
        } else {
            console.log("No such document!");
        }
    }
}

export const setRecentData = async (id: number, img: string, varient: "movies" | "shows") => {
    const user = getAuth(app).currentUser;
    if(!user?.emailVerified){
        return null;
    }
    if (user?.uid) {
        const docRef = doc(db, "recent", user?.uid);
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
            removeRecentData(id,img,varient).then(async ()=>{
                await updateDoc(docRef, {
                    list: arrayUnion({
                        id,
                        img,
                        varient
                    })
                })
            })
        }
    }
}
export const removeRecentData = async (id: number, img: string, varient: "movies" | "shows") => {
    const user = getAuth(app).currentUser;
    if (user?.uid) {
        const docRef = doc(db, "recent", user?.uid);
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