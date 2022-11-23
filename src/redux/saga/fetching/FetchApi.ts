import axios from "axios";
import {
  CallMoviePopular,
  CallMovieSLider,
  FetchMoviePayload,
} from "../../action/ActionCallApi";
import { ActionType } from "typesafe-actions";
import { MOVIE_DB_BASE_URL } from "../../../util/url";

export const FetchApi = async (
  params: FetchMoviePayload
  // | ActionType<typeof CallMoviePopular.request>
) => {
  const url = `${MOVIE_DB_BASE_URL}${params.url}?api_key=${process.env.REACT_APP_API_KEY}`;
  console.log(url);
  let data = await axios.get(url);
  console.log(data.data);
  return data.data.results;
};
