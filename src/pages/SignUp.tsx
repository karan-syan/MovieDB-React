import { Radio, RadioGroup } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Copyright from "../components/Copyright";
import { SignUpUser } from "../firebase/Authentication";

const SignUpSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too short!!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  age: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  password: Yup.string()
    .min(8, "Password must be 8 character long")
    .required("Required"),
});
export default function SignUp() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      age: "",
      gender: "male",
      password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      SignUpUser({
        username: values.username,
        email: values.email,
        password: values.password,
        age: values.age,
        gender: values.gender,
        phoneNo: "",
      });
      navigate("/");
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
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
                  autoComplete="name"
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
                  required
                  fullWidth
                  type={"date"}
                  id="age"
                  onChange={formik.handleChange}
                  value={formik.values.age}
                  name="age"
                  autoComplete="date"
                />
                <RadioGroup
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                  name="gender"
                  id="gender"
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
      </div>
    </div>
  );
}
