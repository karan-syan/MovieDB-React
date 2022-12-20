import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, firestore_db } from "../firebaseConfig";

export const uploadplaylist = async (
  playlistname: string,
  id: string,
  img: string,
  varient: string
) => {
  try {
    if (auth.currentUser?.email) {
      const uid = auth.currentUser?.uid;
      const docRef = doc(firestore_db, "playlist", playlistname + "@" + uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        try {
          setDoc(docRef, {
            createdby: uid,
            playlist_name: playlistname,
            data: [{ id, img, varient }],
          });
          playlistaccess(playlistname, auth.currentUser.email);
          alert("created and added");
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(docSnap.exists(), playlistname);
        const list = docSnap.data().data.filter((item: any) => {
          if (item.id !== id) {
            return item;
          }
        });
        await updateDoc(docRef, {
          data: [{ id, img, varient }, ...list],
        });
        alert("added");
      }
    }
  } catch (error) {}
};
export const playlistaccess = async (playlistname: string, mail: string) => {
  if (auth.currentUser) {
    const uid = auth.currentUser?.uid;
    const docRef = doc(firestore_db, "playlistaccess", mail);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      try {
        alert(mail + auth?.currentUser?.email);
        mail === auth.currentUser.email
          ? setDoc(docRef, {
              own: [playlistname + "@" + uid],
              shared: [],
            })
          : setDoc(docRef, {
              own: [],
              shared: [playlistname + "@" + uid],
            });
      } catch (error) {
        console.log(error);
      }
    } else {
      if (mail === auth.currentUser.email) {
        const list = docSnap.data().own.filter((item: any) => {
          if (item !== playlistname + "@" + uid) {
            return item;
          }
        });
        updateDoc(docRef, {
          own: [playlistname + "@" + uid, ...list],
        });
      } else {
        const list = docSnap.data().shared.filter((item: any) => {
          if (item !== playlistname + "@" + uid) {
            return item;
          }
        });
        updateDoc(docRef, {
          shared: [playlistname + "@" + uid, ...list],
        });
      }
    }
  }
};

export const fetchPlaylists = async (mail: string) => {
  try {
    const col = collection(firestore_db, "playlistaccess");
    const docRef = doc(col, mail);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    console.log(error);
  }
};

export const FetchPaylistdata = async (id: string) => {
  try {
    const col = collection(firestore_db, "playlist");
    const docRef = doc(col, atob(id || ""));
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    console.log(error);
  }
};
