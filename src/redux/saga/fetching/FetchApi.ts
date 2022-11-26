import axios from "axios";
import {
  FetchDetailsPayload,
  FetchMoviePayload,
} from "../../action/ActionCallApi";
import { ActionType } from "typesafe-actions";
import { MOVIE_DB_BASE_URL } from "../../../utils/url";

export const FetchApi = async (
  params: FetchMoviePayload
  // | ActionType<typeof CallMoviePopular.request>
) => {
  const url = `${MOVIE_DB_BASE_URL}${params.url}?api_key=${process.env.REACT_APP_API_KEY}&page=${params.page}`;
  console.log(url);
  let data = await axios.get(url);
  console.log(data.data);
  return data.data.results;
};

export const FetchApiDetails = async (
  params: FetchDetailsPayload
  // | ActionType<typeof CallMoviePopular.request>
) => {
  if (params.id) {
    const url = `${MOVIE_DB_BASE_URL}${params.url}/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`;
    console.log(url);
    let data = await axios.get(url);
    console.log(data.data);
    return data.data;
  }
};
