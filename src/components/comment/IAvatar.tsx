import { Avatar } from "@mui/material";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../firebase/firebaseConfig";

export default function IAvatar({ id }: { id: string }) {
  const [url, seturl] = useState<string>("");
  useEffect(() => {
    getimg();
  }, []);
  async function getimg() {
    const fileRef = ref(storage, "image/" + id + ".jpg");
    seturl(await getDownloadURL(fileRef));
    console.log(url, id);
  }
  return (
    <div>
      {url !== "" ? (
        <img src={url} className={"w-11 h-11 rounded-full object-cover"} />
      ) : (
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
      )}
    </div>
  );
}
