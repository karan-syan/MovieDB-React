import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Copyright from "../components/Copyright";
import { firebaseConfig } from "../firebaseConfig";

const theme = createTheme();
const SignUpSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too short!!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be 8 character long")
    .required("Required"),
});

export default function SignUp() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      console.log("hello");
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async (userCredential: any) => {
          const user = userCredential.user;
          console.log(user);
          await updateProfile(user, {
            displayName: values.username,
          });
          navigate("/");
        })
        .catch((error: Error) => {
          console.log(error);
        });
    },
  });

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white w-1/3 rounded-3xl mt-10">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                {/* <LockOutlinedIcon /> */}
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <Box sx={{ mt: 1 }}>
                <form onSubmit={formik.handleSubmit}>
                  {formik.isValid ? null : (
                    <h1 className="text-red-600">
                      Please Enter all field Correctly
                    </h1>
                  )}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    type={"text"}
                    id="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    label="username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    type={"email"}
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                  <TextField
                    margin="normal"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </form>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
