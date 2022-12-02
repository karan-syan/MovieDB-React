import { ICast, IMovie, IMovieDetails, Iperson, ITvDetails } from "./type";

export const IMovie_distructing = (item: IMovie) => {
  return {
    backdrop_path: item.backdrop_path,
    title: item.title,
    first_air_date: item.first_air_date,
    id: item.id,
    poster_path: item.poster_path,
    release_date: item.release_date,
    overview: item.overview,
    I_name: item.name,
  };
};

export const Cast_Distructing = (item: ICast) => {
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

export const Person_Distructing = (item: Iperson) => {
  return {
    adult: item.adult,
    P_name: item.also_known_as,
    ID: item.id,
    gender: item.gender,
    name: item.name,
    Profile_Path: item.profile_path,
    biography: item.biography,
    C_popularity: item.popularity,
    C_known_for_department: item.known_for_department,
    birthday: item.birthday,
    deathday: item.deathday,
    place_of_birth: item.place_of_birth,
  };
};

export const TvDetails_Distructing = (item: ITvDetails) => {
  return {
    adult: item.adult,
    backdrop_path: item.backdrop_path,
    ID: item.id,
    created_by: item.created_by,
    TvName: item.name,
    Poster_Path: item.poster_path,
    original_name: item.original_name,
    popularity: item.popularity,
    genres: item.genres,
    in_production: item.in_production,
    languages: item.languages,
    last_air_date: item.last_air_date,
    last_episode_to_air: item.last_episode_to_air,
    networks: item.networks,
    voteCount: item.vote_count,
    voteAvg: item.vote_average,
    number_of_episodes: item.number_of_episodes,
    number_of_seasons: item.number_of_seasons,
    overview: item.overview,
    status: item.status,
    tagline: item.tagline,
    first_air_date: item.first_air_date,
    origin_country: item.origin_country,
    original_language: item.original_language,
    production_companies: item.production_companies,
    type: item.type,
    spoken_languages: item.spoken_languages,
    production_countries: item.production_countries,
    seasons: item.seasons,
    episode_run_time: item.episode_run_time,
  };
};

export const MovieDetails_Distructing = (item: IMovieDetails) => {
  return {
    adult: item.adult,
    belongs_to_collection: item.belongs_to_collection,
    release_date: item.release_date,
    runtime: item.runtime,
    budget: item.budget,
    revenue: item.revenue,
    backdrop_path: item.backdrop_path,
    ID: item.id,
    title: item.title,
    poster_path: item.poster_path,
    original_title: item.original_title,
    popularity: item.popularity,
    genres: item.genres,
    spoken_languages: item.spoken_languages,
    voteCount: item.vote_count,
    voteAvg: item.vote_average,
    overview: item.overview,
    status: item.status,
    tagline: item.tagline,
    original_language: item.original_language,
    production_companies: item.production_companies,
    production_countries: item.production_countries,
  };
};
