import axios from "axios";
import { MOVIE_DB_BASE_URL } from "../../../util/constants";
import { CallBaseParameter } from "../../../util/type";

export const fetchApiSlider = async (payload: string) => {
  let data = await axios.get(payload);
  console.log(data.data);
  return data.data.results;
};
