import axios from "axios";
import {
  FetchCastPayload,
  FetchDetailsPayload,
  FetchMoviePayload,
  FetchSearchPayload,
} from "./type";
import { MOVIE_DB_BASE_URL } from "./url";

export const FetchApi = async (params: FetchMoviePayload) => {
  const url = `${MOVIE_DB_BASE_URL}${params.url}?api_key=${process.env.REACT_APP_API_KEY}&page=${params.page}`;
  let data = await axios.get(url);
  return data.data.results;
};
export const FetchSearchApi = async (params: FetchSearchPayload) => {
  const url = `${MOVIE_DB_BASE_URL}search/${
    params.url ? params.url : "multi"
  }?api_key=${process.env.REACT_APP_API_KEY}&query=${params.query}&page=${
    params.page
  }`;
  let data = await axios.get(url);
  return data.data.results;
};

export const FetchApiDetails = async (params: FetchDetailsPayload) => {
  const url = `${MOVIE_DB_BASE_URL}${params.url}?api_key=${process.env.REACT_APP_API_KEY}`;
  let data = await axios.get(url);
  return data.data;
};
export const FetchApiRecommend = async (params: FetchMoviePayload) => {
  const url = `${MOVIE_DB_BASE_URL}${params.url}?api_key=${process.env.REACT_APP_API_KEY}`;
  let data = await axios.get(url);
  return data.data.results;
};

export const FetchApiCast = async (params: FetchCastPayload) => {
  const url = `${MOVIE_DB_BASE_URL}${params.url}?api_key=${process.env.REACT_APP_API_KEY}`;
  let data = await axios.get(url);
  return data.data.cast;
};
