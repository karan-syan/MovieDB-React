import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { createUser } from "../firebase/Authentication";
import { uploadUserImg } from "../firebase/UploadFiles";
import { ApplicationState } from "../redux/root/rootReducer";
import { signUpInit } from "../utils/init";
import { SignUpSchema } from "../utils/schema";

export default function Profile() {
  const imgFileNodeRef = useRef<HTMLInputElement | null>(null);
  const user = useSelector((state: ApplicationState) => state.user);
  const formik = useFormik({
    initialValues: signUpInit,
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      const { username, email, password } = values;
      createUser(username, email, password);
    },
  });
  useEffect(() => {}, [user]);

  return (
    <Container maxWidth="xs">
      <Wrapper>
        <Box position={"relative"}>
          <Avatar sx={{ width: 104, height: 104 }} src={user?.photoURL || ""}>
            <PersonOutlineIcon />
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
        <Typography component="h1" variant="h6">
          {user?.email || ""}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <form onSubmit={formik.handleSubmit}>
            {formik.touched.username && (
              <Typography color={"red"}>{formik.errors.username}</Typography>
            )}
            <InputField
              required
              type={"text"}
              id="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              placeholder="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            {formik.touched.email && (
              <Typography color={"red"}>{formik.errors.email}</Typography>
            )}
            <InputField
              required
              type={"email"}
              onBlur={formik.handleBlur}
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Email Address"
              name="email"
              autoComplete="email"
            />
            <UpdateBtn type="submit" variant="contained">
              Update
            </UpdateBtn>
          </form>
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
}));
const EditBtn = styled(Box)(() => ({
  position: "absolute",
  background: "#fff",
  borderRadius: "100px",
  padding: "0.3rem",
  bottom: 0,
  right: 0,
}));
