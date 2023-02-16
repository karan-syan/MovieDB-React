import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
// import { useNavigate } from "react-router-dom";
import { createUser } from "../firebase/Authentication";
import { signUpInit } from "../utils/init";
import { SignUpSchema } from "../utils/schema";

export default function SignUp() {
  const formik = useFormik({
    initialValues: signUpInit,
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      const { username, email, password } = values;
      createUser(username, email, password);
    },
  });

  return (
    <Container maxWidth="xs">
      <Wrapper>
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
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
            {formik.touched.password && (
              <Typography color={"red"}>{formik.errors.password}</Typography>
            )}
            <InputField
              onChange={formik.handleChange}
              value={formik.values.password}
              required
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              onBlur={formik.handleBlur}
              autoComplete="current-password"
            />
            {formik.touched.confirm_password && (
              <Typography color={"red"}>
                {formik.errors.confirm_password}
              </Typography>
            )}
            <InputField
              onChange={formik.handleChange}
              value={formik.values.confirm_password}
              required
              onBlur={formik.handleBlur}
              name="confirm_password"
              placeholder="Confirm Password"
              type="password"
              id="confirm_password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="default" />}
              label="Remember me"
            />
            <SignUpBtn type="submit" variant="contained">
              Sign Up
            </SignUpBtn>
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
const SignUpBtn = styled(Button)(() => ({
  marginBlock: 3,
  width: "100%",
}));
