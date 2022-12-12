import {
  Avatar,
  Button,
  FormControlLabel,
  Input,
  Radio,
  RadioGroup,
} from "@mui/material";
import { signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, firestore_db } from "../firebase/firebaseConfig";

export default function UserDetails() {
  const [Uname, setname] = useState<string>(
    auth.currentUser?.displayName?.toString() || ""
  );
  const navigate = useNavigate();
  useEffect(() => {
    calldb();
  }, []);

  function calldb() {
    const usercollection = collection(firestore_db, "users");
    getDocs(usercollection)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ height: "75vh" }}
    >
      <div className=" flex flex-col justify-center h-fit bg-white rounded-xl p-6">
        <div className="flex flex-col justify-center items-center">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
          <h1 className="text-black">{auth.currentUser?.displayName}</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-black mr-2">Username: </h1>
            <Input
              color="secondary"
              value={Uname}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-black mr-2">Age: </h1>
            <Input color="secondary" type="number" />
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-black mr-2">Gender: </h1>
            <RadioGroup defaultValue="female" name="radio-buttons-group">
              <div className="flex text-xm text-black">
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-black mr-2">Phone No: </h1>
            <Input color="secondary" type="phone" />
          </div>
          <div className="flex justify-between mt-3">
            <Button variant="contained" className="w-full">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <Button
          variant="contained"
          className="w-full"
          onClick={() => {
            signOut(auth);
            navigate("/");
          }}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}
