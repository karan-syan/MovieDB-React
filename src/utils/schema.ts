import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, "Too short!!")
        .required("Please enter your username"),
    email: Yup.string()
        .email("Invalid email")
        .required("Please enter your email"),
    password: Yup.string()
        .min(8, "Password must be 8 character long")
        .required("Please enter your password"),
    confirm_password: Yup.string()
        .required("Please Confirm your password")
        .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .min(8, "Password must be 8 character long")
        .required("Required"),
});
