import EditIcon from "@mui/icons-material/Edit";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogOut } from "../firebase/authentication";
import {
  resendEmailVerificationLink,
  updateUsername,
} from "../firebase/profile";
import { uploadUserImg } from "../firebase/uploadFiles";
import { ApplicationState } from "../redux/root/rootReducer";
import { ProfileUpdateSchema } from "../utils/schema";

export default function Profile() {
  const imgFileNodeRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const user = useSelector((state: ApplicationState) => state.user);
  const [username, setUsername] = useState<string>(user?.displayName || "");
  const [email, setEmail] = useState<string>(user?.email || "");
  const formik = useFormik({
    initialValues: {
      username: username,
    },
    enableReinitialize: true,
    validationSchema: ProfileUpdateSchema,
    onSubmit: (values) => updateUsername(values.username),
  });

  useEffect(() => {
    if (user) {
      setEmail(user.email || "");
      setUsername(user.displayName || "");
    }
  }, [user]);
  return (
    <Container maxWidth="xs">
      <Wrapper>
        <Box position={"relative"}>
          <Avatar sx={{ width: 104, height: 104 }} src={user?.photoURL || ""}>
            <PersonOutlineIcon fontSize="large" />
          </Avatar>
          <EditBtn
            onClick={() => {
              if (imgFileNodeRef.current) {
                imgFileNodeRef.current.click();
              }
            }}
          >
            <EditIcon color="primary" />
          </EditBtn>
        </Box>
        <input
          ref={imgFileNodeRef}
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) {
              uploadUserImg(e.target.files[0]);
            }
          }}
        />
        <Box>
          <Box
            style={{
              borderBottom: "1px solid #ffffff88",
              marginTop: "1rem",
              marginBottom: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <Typography sx={{ opacity: "0.5", ml: 1 }}>
              Email Address *Immutable*
            </Typography>
            <InputField
              required
              type={"email"}
              id="email"
              onChange={() => {}}
              value={email}
              placeholder="Email Address"
              name="email"
              autoComplete="email"
            />
            <form onSubmit={formik.handleSubmit}>
              {formik.touched.username && (
                <Typography color={"red"}>{formik.errors.username}</Typography>
              )}
              <Typography sx={{ opacity: "0.5", ml: 1 }}>Username</Typography>
              <InputField
                required
                type={"text"}
                id="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username || ""}
                placeholder="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <CustomButton type="submit" variant="contained">
                Save Changes
              </CustomButton>
            </form>
          </Box>
          {!user?.emailVerified && (
            <CustomButton
              variant="contained"
              onClick={resendEmailVerificationLink}
            >
              Send Email Verification Link
            </CustomButton>
          )}
          <Box sx={{ display: "flex", width: "100%" }}>
            <CustomButton variant="contained">Reset Password</CustomButton>
            <CustomButton
              variant="contained"
              onClick={() =>
                userLogOut(() => {
                  navigate("/signin");
                })
              }
            >
              Sign Out
            </CustomButton>
          </Box>
        </Box>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled(Box)(() => ({
  marginTop: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
const InputField = styled("input")(() => ({
  color: "white",
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  outlineColor: "transparent",
  width: "100%",
  background: "none",
  outline: "none",
  padding: "0.8rem 0.3rem",
  borderRadius: "5px",
  border: "2px solid #ffffff59",
  ":focus": {
    border: "2px solid #ffffff99",
  },
}));
const CustomButton = styled(Button)(() => ({
  margin: "3px 1px",
  width: "100%",
}));
const EditBtn = styled(Box)(() => ({
  position: "absolute",
  background: "#fff",
  borderRadius: "100px",
  padding: "0.3rem",
  bottom: 0,
  right: 0,
}));
