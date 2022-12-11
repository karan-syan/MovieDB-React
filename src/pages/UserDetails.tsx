import {
  Avatar,
  FormControlLabel,
  Input,
  Radio,
  RadioGroup,
} from "@mui/material";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";

export default function UserDetails() {
  return (
    <div className="flex justify-center m-6">
      <div className="flex flex-col justify-center bg-white rounded-xl p-6">
        <div className="flex flex-col justify-center items-center">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
          <h1 className="text-black">
            {getAuth(app).currentUser?.displayName}
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-black mr-2">Username: </h1>
            <Input color="secondary" />
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
        </div>
      </div>
    </div>
  );
}
