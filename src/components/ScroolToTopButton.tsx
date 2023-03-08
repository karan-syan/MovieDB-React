import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useTheme } from "@mui/material";
import ScrollToTop from "react-scroll-to-top";

const ScroolToTopButton = () => {
  const theme = useTheme();
  const styles = {
    display: "flex",
    justifyContent: "center",
    width: "4rem",
    height: "4rem",
    padding: "10px",
    color: "#fff",
    borderRadius: "100px",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0 0 0.75rem #000",
    right: "10px",
    bottom: "15px",
  };
  return <ScrollToTop smooth style={styles} component={<ArrowUpwardIcon />} />;
};

export default ScroolToTopButton;
