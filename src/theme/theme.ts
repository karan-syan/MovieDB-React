import { createTheme } from "@mui/material/styles";
export const Colors = {
  primary: "#08101c",
  secondary: "#00040a",
  background: "#000",
  uploadButton: "#448a7e",
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  light_gray: "rgb(230,230,230)",
};

export const Theme = createTheme({
  palette: {
      primary: {
          main: Colors.primary,
    },
    secondary: {
        main: Colors.secondary,
    },
    background:{
        default:Colors.background
    },
    text:{
        primary:"#fff",
    }
    
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {},
});