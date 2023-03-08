import { Button, styled } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
interface Props {
  visibity: boolean;
  scroll: (e: "left" | "right") => void;
}
export const LeftScrollBtn = ({ scroll, visibity }: Props) => {
  return (
    <>
      {visibity ? (
        <LeftBtnWrapper>
          <LeftBtn variant="contained" onClick={() => scroll("left")}>
            <ArrowBackIosNewIcon />
          </LeftBtn>
        </LeftBtnWrapper>
      ) : null}
    </>
  );
};

const LeftBtnWrapper = styled(Box)(() => ({
  height: "100%",
  zIndex: "2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  left: "0em",
}));
const LeftBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  backdropFilter: "blur(2px) brightness(60%)",
  transition: "all 200ms",
  borderRadius: "10em",
  display: "flex",
  justifyContent: "Center",
  marginLeft: "0.2rem",
  minWidth: "0px",
  padding: "0.8em",
  size: "small",
  border: "none",
  "&:hover": {
    backgroundColor: "transparent",
    backdropFilter: "blur(2px) brightness(50%)",
  },
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
}));
