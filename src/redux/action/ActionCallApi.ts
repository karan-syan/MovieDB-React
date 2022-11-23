import { CALL_MOVIE_API, CALL_TV_API } from "../../util/constants";

export const CallMovieApi = (data: string) => {
  console.log("action", data);
  return {
    type: CALL_MOVIE_API,
    payload: data,
  };
};
export const CallTvApi = (data: string) => {
  console.log("action", data);
  return {
    type: CALL_TV_API,
    payload: data,
  };
};
