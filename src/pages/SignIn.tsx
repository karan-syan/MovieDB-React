import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Alert, Snackbar } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be 8 character long")
    .required("Required"),
});

export default function SignIn() {
  const [loginSnakbar, setLoginSnakbar] = useState<boolean>(false);
  const auth = getAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          setLoginSnakbar(true);
          formik.setValues({ email: "", password: "" });
        });
    },
  });

  return (
    <Container maxWidth={"xs"}>
      <Wrapper>
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Sign in</Typography>
        <Box sx={{ mt: 3 }}>
          <form onSubmit={formik.handleSubmit}>
            {formik.touched.email && (
              <Typography color={"red"}>{formik.errors.email}</Typography>
            )}
            <InputField
              required
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {formik.touched.password && (
              <Typography color={"red"}>{formik.errors.password}</Typography>
            )}
            <InputField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="default" />}
              label="Remember me"
            />
            <SignInBtn type="submit" variant="contained">
              Sign In
            </SignInBtn>
          </form>
          <Grid container>
            <Grid item>
              <NoAccount onClick={() => navigate("/signup")}>
                {"Don't have an account? Sign Up"}
              </NoAccount>
            </Grid>
          </Grid>
        </Box>
      </Wrapper>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={loginSnakbar}
      >
        <Alert
          severity="error"
          onClose={() => {
            setLoginSnakbar(false);
          }}
        >
          Login Failed - Please Retry!
        </Alert>
      </Snackbar>
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
  marginBlock: "1rem",
  outlineColor: "transparent",
  width: "100%",
  background: "none",
  outline: "none",
  paddingBlock: "1rem",
  paddingInline: "0.3rem",
  borderRadius: "5px",
  border: "2px solid #ffffff59",
  ":focus": {
    border: "2px solid #ffffff99",
  },
}));
const NoAccount = styled(Typography)(() => ({
  color: "white",
  cursor: "pointer",
  mt: 10,
}));
const SignInBtn = styled(Button)(() => ({
  marginBlock: 3,
  width: "100%",
}));
