import { SAVE_DATA_FOR_MOVIE, SAVE_DATA_FOR_TV } from "../../util/constants";
import { MovieApiInteface, TvApiInteface } from "../../util/type";

interface parameter {
  type: string;
  payload: MovieApiInteface[];
}
interface parameter2 {
  type: string;
  payload: TvApiInteface[];
}

export const BaseApiReducer = (
  state: MovieApiInteface[] = [],
  action: parameter
) => {
  switch (action.type) {
    case SAVE_DATA_FOR_MOVIE:
      state = action.payload;
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};
export const TvApiReducer = (
  state: TvApiInteface[] = [],
  action: parameter2
) => {
  switch (action.type) {
    case SAVE_DATA_FOR_TV:
      state = action.payload;
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};
