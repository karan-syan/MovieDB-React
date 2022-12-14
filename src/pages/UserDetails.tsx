import {
  Avatar,
  Button,
  FormControlLabel,
  Input,
  Radio,
  RadioGroup,
} from "@mui/material";
import { signOut, updateProfile } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { auth, firestore_db } from "../firebase/firebaseConfig";
import { uploadImg } from "../firebase/firestore";

export default function UserDetails() {
  const user = auth.currentUser;
  const [U_age, setage] = useState<string>("");
  const [change, setchange] = useState<boolean>(false);
  const [U_gender, setgender] = useState<string>("");
  const [U_email, setemail] = useState<string>("");
  const [U_username, setusername] = useState<string>("");
  const [U_phoneNo, setphoneNo] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    calldb();
    console.log(user);
  }, []);

  async function calldb() {
    const docRef = doc(firestore_db, "users", user?.uid || "");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setage(docSnap.data().age);
      setgender(docSnap.data().gender);
      setusername(docSnap.data().username);
      setphoneNo(docSnap.data().phoneNo);
      setemail(docSnap.data().email);
    }
  }
  async function updateUserDetails() {
    if (user) {
      const updRef = doc(firestore_db, "users", user?.uid || "");

      await updateDoc(updRef, {
        age: U_age,
        gender: U_gender,
        username: U_username,
        phoneNo: U_phoneNo,
      });
      updateProfile(user, {
        displayName: U_username,
      });
    }
  }
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ height: "75vh" }}
    >
      <div className=" flex flex-col justify-center h-fit bg-white rounded-xl p-6">
        <div className="flex">
          <BiArrowBack
            className="text-blue-500 text-3xl cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          {auth.currentUser?.photoURL ? (
            <Avatar
              src={auth.currentUser?.photoURL || ""}
              sx={{ width: 56, height: 56 }}
            />
          ) : (
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
          )}
          <input
            type={"file"}
            accept="image/*"
            className="my-3"
            style={{ marginLeft: "57%" }}
            onChange={(e) => {
              if (e.target.files) {
                console.log(e.target.files[0].arrayBuffer);
                uploadImg(e.target.files[0]);
              }
            }}
          />
          <h1 className="text-black">{U_email}</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-black mr-2">Username: </h1>
            <Input
              color="secondary"
              value={U_username}
              onChange={(e) => {
                setchange(false);
                setusername(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-black mr-2">Age: </h1>
            <Input
              color="secondary"
              type="date"
              value={U_age}
              onChange={(e) => {
                setchange(false);
                setage(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-black mr-2">Gender: </h1>
            <RadioGroup
              value={U_gender}
              onChange={(e) => {
                setchange(false);
                setgender(e.target.value);
              }}
              name="gender"
            >
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
            <Input
              color="secondary"
              type="phone"
              value={U_phoneNo}
              onChange={(e) => {
                setchange(false);
                setphoneNo(e.target.value);
              }}
            />
          </div>
          {change ? (
            <div className="flex justify-center">
              <h1 className="text-red-600 mt-2 text-sm">
                Changed Successfully
              </h1>
            </div>
          ) : null}
          <div className="flex justify-between mt-3">
            <Button
              variant="contained"
              className="w-full"
              onClick={() => {
                updateUserDetails();
                setchange(true);
              }}
            >
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
