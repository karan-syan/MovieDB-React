import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, styled } from "@mui/material";
interface Props {
  visibity: boolean;
  scroll: (e: "left" | "right") => void;
}

export const RightScrollBtn = ({ scroll, visibity }: Props) => {
  return (
    <>
      {visibity ? (
        <RightBtnWrapper>
          <RightBtn variant="contained" onClick={() => scroll("right")}>
            <ArrowForwardIosIcon />
          </RightBtn>
        </RightBtnWrapper>
      ) : null}
    </>
  );
};

const RightBtnWrapper = styled(Box)(() => ({
  height: "100%",
  zIndex: "4",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  right: "0",
}));
const RightBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  backdropFilter: "blur(2px) brightness(60%)",
  transition: "all 200ms",
  borderRadius: "10em",
  display: "flex",
  justifyContent: "Center",
  marginRight: "0.2rem",
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
