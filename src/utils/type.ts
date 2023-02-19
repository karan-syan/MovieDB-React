export interface IMovie {
  total_pages: number;
  results: {
    backdrop_path: string;
    id: number;
    title?: string;
    name?: string;
    overview: string;
    poster_path: string;
    release_date?: string;
    first_air_date?: string;
  }[];
}

export interface IDetails {
  backdrop_path: string;
  id: number;
  episode_run_time?: number[];
  first_air_date?: string;
  genres: {
    id: number;
    name: string;
  }[];
  name?: string;
  networks?: {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
  }[];
  number_of_episodes?: number;
  original_name: string;
  runtime?: string;
  seasons?: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
  }[];
  type?: string;
  budget?: number;
  original_language: string;
  overview: string;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  release_date?: string;
  revenue?: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status?: string;
  tagline: string;
  title?: string;
  vote_average: number;
}
export interface ICast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;
  credit_id: string;
  order: 0;
}

export interface Iperson {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

export interface FetchMoviePayload {
  page?: number;
  url: string;
  NewData: boolean;
}

export interface FetchDetailsPayload {
  url: string;
}

export interface FetchSearchPayload {
  url: string | null;
  page: number;
  query: string | null;
  NewData: boolean;
}

export interface FetchCastPayload {
  url: string;
}

export interface FetchCastDetailsPayload {
  url: string;
}
export interface RecentDataType {
  id: number;
  img: string;
  date: string;
  varient: "movies" | "shows";
}
export interface WatchListDataType {
  id: number;
  img: string;
  varient: "movies" | "shows";
}
