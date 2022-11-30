import axios from "axios";
import { MOVIE_DB_BASE_URL } from "../../../utils/url";
import {
  FetchCastPayload,
  FetchDetailsPayload,
  FetchMoviePayload,
  FetchSearchPayload,
} from "../../action/ActionCallApi";

export const FetchApi = async (params: FetchMoviePayload) => {
  console.log(params.id);
  const url = `${MOVIE_DB_BASE_URL}${params.url}${
    params.id !== undefined ? "/" + params.id + "/recommendations" : ""
  }?api_key=${process.env.REACT_APP_API_KEY}&page=${params.page}`;
  console.log(url);
  let data = await axios.get(url);
  console.log(data.data);
  return data.data.results;
};
export const FetchSearchApi = async (params: FetchSearchPayload) => {
  const url = `${MOVIE_DB_BASE_URL}search/${params.url}?api_key=${process.env.REACT_APP_API_KEY}&query=${params.query}&page=${params.page}`;
  console.log(url);
  let data = await axios.get(url);
  console.log(data.data);
  return data.data.results;
};

export const FetchApiDetails = async (params: FetchDetailsPayload) => {
  if (params.id) {
    const url = `${MOVIE_DB_BASE_URL}${params.url}/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`;
    console.log(url);
    let data = await axios.get(url);
    console.log(data.data);
    return data.data;
  }
};
export const FetchApiRecommend = async (params: FetchMoviePayload) => {
  if (params.id) {
    const url = `${MOVIE_DB_BASE_URL}${params.url}/${params.id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`;
    console.log(url);
    let data = await axios.get(url);
    console.log(data.data);
    return data.data.results;
  }
};
export const FetchApiCast = async (params: FetchCastPayload) => {
  if (params.id) {
    const url = `${MOVIE_DB_BASE_URL}${params.url}/${params.id}/${params.afterIdurl}?api_key=${process.env.REACT_APP_API_KEY}`;
    console.log(url);
    let data = await axios.get(url);
    console.log(data.data.cast);
    return data.data.cast;
  }
};
