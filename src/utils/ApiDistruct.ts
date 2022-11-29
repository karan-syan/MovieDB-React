import { ICast, ITvDetails } from "./type";

export const Movies_Distructing = (item: ICast) => {
  return {
    C_adult: item.adult,
    C_character: item.character,
    C_ID: item.id,
    C_gender: item.gender,
    C_name: item.name,
    C_Profile_Path: item.profile_path,
    C_original_name: item.original_name,
    C_popularity: item.popularity,
    C_known_for_department: item.known_for_department,
  };
};

export const TvDetails_Distructing = (item: ITvDetails) => {
  return {
    adult: item.adult,
    backdrop_path: item.backdrop_path,
    ID: item.id,
    created_by: item.created_by,
    Name: item.name,
    Poster_Path: item.poster_path,
    original_name: item.original_name,
    popularity: item.popularity,
    genres: item.genres,
    in_production: item.in_production,
    languages: item.languages,
    last_air_date: item.last_air_date,
    last_episode_to_air: item.last_episode_to_air,
  };
};
