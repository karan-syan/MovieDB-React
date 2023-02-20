import { Box, Button, styled } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { Now_playing, Popular, Top_rated, Upcoming } from "../utils/constants";

interface Props {
  varient: "tv" | "movie";
}
export default function ButtonGroup(props: Props) {
  const { varient } = props;
  const [query, setQuery] = useSearchParams();
  const buttonName = [Popular, Top_rated, Now_playing, Upcoming];
  return (
    <Root>
      {buttonName.map((item, index) => {
        if (varient === "tv" && item === Upcoming) {
          return null;
        }
        return (
          <TabButton
            key={index}
            variant={"contained"}
            buttontype={query.get("type") === item}
            onClick={() =>
              setQuery({
                type: item,
              })
            }
          >
            {item.charAt(0).toUpperCase() + item.slice(1).replace("_", " ")}
          </TabButton>
        );
      })}
    </Root>
  );
}
const Root = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  justifyContent: "center",
  width: "100%",
  paddingTop: "3px",
  paddingBottom: "3px",
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "20%",
    paddingRight: "20%",
  },
}));
const TabButton = styled(Button)<{ buttontype: boolean }>(
  ({ theme, buttontype }) => ({
    paddingLeft: "0.25rem",
    paddingRight: "0.25rem",
    fontWeight: "500",
    borderRadius: "0",
    borderBottom: "1px solid #fff",
    flex: "1",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    color: `${buttontype ? "#111827" : "#fff"}`,
    backgroundColor: `${buttontype ? "#fff" : "transparent"}`,
    fontSize: "0.70rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.875rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
    ":hover": {
      backgroundColor: "#111827",
      color: "#fff",
    },
  })
);
