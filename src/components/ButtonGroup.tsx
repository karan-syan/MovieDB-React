import { Box, Button, styled } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { Now_playing, Popular, Top_rated, Upcoming } from "../utils/constants";

export default function ButtonGroup({ varient }: { varient: "tv" | "movie" }) {
  const [query, setQuery] = useSearchParams();
  const buttonName = [Popular, Top_rated, Now_playing, Upcoming];

  return (
    <Root>
      {buttonName.filter((item, index) => {
        if (varient === "tv") {
          return null;
        }
        return (
          <TabButton
            key={index}
            buttonType={query.get("type") === item}
            onClick={() => {
              setQuery({
                type: item,
              });
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1).replace("_", " ")}
          </TabButton>
        );
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
    borderWidth: "1px",
    paddingBlock: "0.5rem",
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
