import { Box, styled, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import Context from "../components/Context";
import PosterCard from "../components/PosterCard";
import { CallCastDetails } from "../redux/People/action";
import { ApplicationState } from "../redux/root/rootReducer";
import { maxWidthScreen } from "../utils/constants";
import { MOVIE_DB_IMG_URL } from "../utils/url";

export default function PeopleDetails() {
  const dispatch = useDispatch();
  const personDetails = useSelector(
    (state: ApplicationState) => state.details.PersonDetails
  );
  const { id } = useParams();
  useEffect(() => {
    dispatch(
      CallCastDetails.request({
        url: `/person/${id}`,
      })
    );
  }, [id]);

  const {
    also_known_as,
    biography,
    birthday,
    deathday,
    gender,
    known_for_department,
    name,
    place_of_birth,
    popularity,
    profile_path,
  } = personDetails.Data;
  return (
    <>
      {personDetails.loading ? (
        <BarLoader color="#36d7b7" />
      ) : (
        <Root backdropPath={profile_path}>
          <Container>
            <PosterCard Poster_Path={profile_path} />
            <ContentWrapper>
              <Title>{name}</Title>
              <Context subtitle={birthday} title="Birth Date" />
              <Context
                subtitle={gender === 2 ? "Male" : "Female"}
                title="Gender"
              />
              <Context subtitle={deathday} title="Death Date" />
              <Context subtitle={place_of_birth} title="Place of birth" />
              <Context subtitle={popularity.toString()} title="Popularity" />
              <Context subtitle={known_for_department} title="Department" />
              <Context
                subtitle={also_known_as.toString()}
                title="Also known as"
              />
              <Context subtitle={biography} title="Biography" />
            </ContentWrapper>
          </Container>
        </Root>
      )}
    </>
  );
}
const Root = styled(Box)<{ backdropPath: string }>(({ backdropPath }) => ({
  maxWidth: maxWidthScreen,
  margin: "0px auto",
  float: "none",
  backgroundImage: `url(${MOVIE_DB_IMG_URL + backdropPath})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backdropFilter: "blur(10px) brightness(60%)",
  backgroundRepeat: "repeat",
}));
const Title = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: 800,
  textAlign: "center",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
    textAlign: "start",
  },
}));
const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  minHeight: "92.5vh",
  height: "100%",
  backdropFilter: "blur(10px) brightness(60%)",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "1.25rem",
  justifyContent: "center",
  paddingBottom: "0.75rem",
  flexDirection: "column",
  alignItems: "start",
  [theme.breakpoints.up("md")]: {
    width: "66.6%",
    justifyContent: "start",
    alignItems: "start",
  },
}));
