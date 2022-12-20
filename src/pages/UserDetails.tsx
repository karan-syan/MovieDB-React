import {
  Avatar,
  Button,
  FormControlLabel,
  Input,
  Radio,
  RadioGroup,
} from "@mui/material";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase_services/firebaseConfig";
import {
  uploadImg,
  GetUserdb,
  updateUserDetails,
} from "../firebase_services/firestore/UserFirestore";
import { ApplicationState } from "../redux/root/rootReducer";
import { CallUserDetail } from "../redux/user/action";

export default function UserDetails() {
  const dispatch = useDispatch();
  const userdetails = useSelector(
    (state: ApplicationState) => state.Userdetails
  );

  const [U_age, setage] = useState<string>("");
  const [change, setchange] = useState<boolean>(false);
  const [U_gender, setgender] = useState<string>("");
  const [U_email, setemail] = useState<string>("");
  const [U_username, setusername] = useState<string>("");
  const [U_phoneNo, setphoneNo] = useState<any>("");
  const navigate = useNavigate();
  useEffect(() => {
    GetUserdb().then((res) => {
      if (res) {
        setage(res.age);
        setgender(res.gender);
        setusername(res.username);
        setphoneNo(res.phoneNo);
        setemail(res.email);
      }
    });
  }, [userdetails, change]);

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
          {userdetails?.photoURL ? (
            <Avatar
              src={userdetails?.photoURL || ""}
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
                setchange(!change);
              }
            }}
          />
          <h1 className="text-black">{U_email}</h1>
        </div>
        <div className="flex flex-col">
          <h1 className=" w-full text-center text-red-600"></h1>
          {U_username.length < 2 ? (
            <h1 className="text-red-600 mr-2 text-xs">Invalid Username</h1>
          ) : null}
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
          {!isValidPhoneNumber(U_phoneNo) ? (
            <h1 className="text-red-600 text-xs mr-2">Invalid Phone Number </h1>
          ) : null}
          <div className="flex items-center justify-between">
            <h1 className="text-black mr-2">Phone No: </h1>
            <PhoneInput
              className="text-black border-b-2 border-black"
              type="text"
              country={"IN"}
              value={U_phoneNo}
              onChange={setphoneNo}
              required
            />
          </div>
          <div className="flex justify-between mt-3">
            <Button
              variant="contained"
              className="w-full"
              onClick={() => {
                if (
                  U_username.length < 2 === false &&
                  isValidPhoneNumber(U_phoneNo)
                ) {
                  updateUserDetails({
                    age: U_age,
                    gender: U_gender,
                    phoneNo: U_phoneNo,
                    username: U_username,
                  });
                  alert("Saved Successfully");
                  setchange(!change);
                } else {
                  alert("invalid details");
                }
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
            dispatch(CallUserDetail(null));
            navigate("/");
          }}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}
