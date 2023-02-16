import { Box, Button, Container, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Root>
      <Container maxWidth="md">
        <Wrapper>
          <TextWrapper>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              The page you're looking for doesn't exist.
            </Typography>
          </TextWrapper>
          <Box>
            <img
              src="https://cdn.pixabay.com/photo/2016/02/11/22/01/mistake-1194670_960_720.png"
              alt="404 img"
              width={500}
              style={{ filter: "invert(100)" }}
              height={250}
            />
          </Box>
        </Wrapper>
        <Button variant="contained" onClick={() => navigate("/")} fullWidth>
          Back Home
        </Button>
      </Container>
    </Root>
  );
}

const Root = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "92.5vh",
}));
const TextWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));
const Wrapper = styled(Box)(() => ({
  display: "flex",
}));
