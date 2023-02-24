import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
interface Props {
  visibity: boolean;
  scroll: (num: number) => void;
}
export const LeftScrollBtn = ({ scroll, visibity }: Props) => {
  const BtnStyle = ButtonStyles();
  const BtnWrapperStyle = ButtonWrapperStyles();
  return (
    <>
      {visibity ? (
        <Box className={BtnWrapperStyle.LeftBtnWrapper}>
          <Button
            className={BtnStyle.LeftBtn}
            variant="contained"
            onClick={() => scroll(-window.screen.width)}
          >
            <ArrowBackIosIcon color="primary" />
          </Button>
        </Box>
      ) : null}
    </>
  );
};

export const ButtonStyles = makeStyles({
  LeftBtn: {
    "&.MuiButton-contained": {
      background: "#fff",
      borderRadius: "10em",
      display: "flex",
      justifyContent: "Center",
      margin: "3em",
      minWidth: "0px",
      padding: "0.8em",
      size: "small",
      border: "none",
      "&:hover": {
        background: "#fff",
      },
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
  },
});

export const ButtonWrapperStyles = makeStyles({
  LeftBtnWrapper: {
    height: "100%",
    zIndex: "4",
    display: "flex",
    paddingLeft: "1em",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "0em",
  },
});
