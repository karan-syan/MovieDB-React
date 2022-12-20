import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { onAuthStateChanged } from "firebase/auth";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Copyright from "../components/Copyright";
import { SignInUser } from "../firebase_services/Auth/Authentication";
import { auth } from "../firebase_services/firebaseConfig";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be 8 character long")
    .required("Required"),
});

export default function SignIn() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      SignInUser(values.email, values.password);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate("/");
        }
      });
    },
  });

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white w-1/3 rounded-3xl mt-10">
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
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <form onSubmit={formik.handleSubmit}>
                <h1 className="text-red-600">{formik.errors.email}</h1>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <h1 className="text-red-600">{formik.errors.password}</h1>
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
              <Grid container>
                <Grid item>
                  <Link
                    className="cursor-pointer"
                    variant="body2"
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </div>
    </div>
  );
}
