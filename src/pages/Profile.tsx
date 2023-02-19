import EditIcon from "@mui/icons-material/Edit";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { updateProfile } from "firebase/auth";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { userLogOut } from "../firebase/authentication";
import { updateUsername } from "../firebase/profile";
import { uploadUserImg } from "../firebase/uploadFiles";
import { ApplicationState } from "../redux/root/rootReducer";
import { SignUpSchema } from "../utils/schema";

export default function Profile() {
  const imgFileNodeRef = useRef<HTMLInputElement | null>(null);
  const user = useSelector((state: ApplicationState) => state.user);
  const [username, setUsername] = useState<string>(user?.displayName || "");
  const [email, setEmail] = useState<string>(user?.email || "");
  const formik = useFormik({
    initialValues: {
      username: username,
      email: email,
    },
    validationSchema: SignUpSchema,
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
          <form
            onSubmit={formik.handleSubmit}
            style={{
              borderBottom: "1px solid #ffffff88",
              marginBlock: "1rem",
              paddingBottom: "1rem",
            }}
          >
            {formik.touched.email && (
              <Typography color={"red"}>{formik.errors.email}</Typography>
            )}
            <Typography sx={{ opacity: "0.5", ml: 1 }}>
              Email Address *Immutable*
            </Typography>
            <InputField
              required
              type={"email"}
              id="email"
              value={formik.values.email || ""}
              placeholder="Email Address"
              name="email"
              autoComplete="email"
            />
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
            <UpdateBtn type="submit" variant="contained">
              Save Changes
            </UpdateBtn>
          </form>
          {user?.emailVerified && (
            <UpdateBtn variant="contained">
              Send Email Verification Link
            </UpdateBtn>
          )}
          <Box sx={{ display: "flex", width: "100%" }}>
            <UpdateBtn variant="contained">Reset Password</UpdateBtn>
            <UpdateBtn variant="contained" onClick={userLogOut}>
              Log Out
            </UpdateBtn>
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
  marginBlock: "0.5rem",
  outlineColor: "transparent",
  width: "100%",
  background: "none",
  outline: "none",
  paddingBlock: "0.8rem",
  paddingInline: "0.3rem",
  borderRadius: "5px",
  border: "2px solid #ffffff59",
  ":focus": {
    border: "2px solid #ffffff99",
  },
}));
const UpdateBtn = styled(Button)(() => ({
  marginBlock: 3,
  width: "100%",
  marginInline: 1,
}));
const EditBtn = styled(Box)(() => ({
  position: "absolute",
  background: "#fff",
  borderRadius: "100px",
  padding: "0.3rem",
  bottom: 0,
  right: 0,
}));
