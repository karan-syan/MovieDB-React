import { Box, Button, styled } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { Now_playing, Popular, Top_rated, Upcoming } from "../utils/constants";

export default function ButtonGroup({ varient }: { varient: "tv" | "movie" }) {
  const [query, setQuery] = useSearchParams();
  const buttonName = [Popular, Top_rated, Now_playing, Upcoming];
  return (
    <Root>
      {buttonName.map((item, index) => {
        if (varient === "tv" && item === Upcoming) {
          return null;
        } else {
          console.log(item);
          return (
            <TabButton
              key={index}
              variant={"contained"}
              buttonType={query.get("type") === item}
              onClick={() =>
                setQuery({
                  type: item,
                })
              }
            >
              {item.charAt(0).toUpperCase() + item.slice(1).replace("_", " ")}
            </TabButton>
          );
        }
      })}
    </Root>
  );
}
const Root = styled(Box)(() => ({
  display: "inline-flex",
  justifyContent: "center",
  width: "100%",
}));
const TabButton = styled(Button)<{ buttonType: boolean }>(
  ({ theme, buttonType }) => ({
    paddingInline: "0.25rem",
    fontWeight: "500",
    borderRadius: "0px",
    border: "1px solid #fff",
    paddingBlock: "0.5rem",
    color: `${buttonType ? "#111827" : "#fff"}`,
    backgroundColor: `${buttonType ? "#fff" : "transparent"}`,
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.875rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
      paddingInline: "1rem",
    },
    ":hover": {
      backgroundColor: "#111827",
      color: "#fff",
    },
  })
);
