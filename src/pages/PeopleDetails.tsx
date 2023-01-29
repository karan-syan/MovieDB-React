import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import Context from "../components/Context";
import DetailsHeader from "../components/DetailsHeader";
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
    <div
      className="flex justify-center items-center"
      style={{
        width: "100%",
        height: "100vh",
        maxWidth: maxWidthScreen,
        margin: "0px auto",
        float: "none",
      }}
    >
      {personDetails.loading ? (
        <BarLoader color="#36d7b7" />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100vh",
            maxWidth: maxWidthScreen,
            margin: "0px auto",
            float: "none",
            backgroundImage: "url(" + MOVIE_DB_IMG_URL + profile_path + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
          }}
        >
          <div
            className=" w-full h-full"
            style={{ backdropFilter: "blur(10px) brightness(60%)" }}
          >
            <DetailsHeader />
            <div
              className="flex flex-col md:flex-row md:justify-between overflow-y-auto md:overflow-y-hidden"
              style={{ height: "92.5vh" }}
            >
              <PosterCard Poster_Path={profile_path} />
              <div className="flex mt-5 pb-3 md:w-2/3 flex-col md:h-full md:overflow-auto md:justify-start md:items-start">
                <h1 className="text-xl md:text-3xl font-extrabold text-center">
                  {name}
                </h1>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
