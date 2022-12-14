import { ICast, IMovie, IMovieDetails, Iperson, ITvDetails } from "./type";

export interface IState {
  loading: boolean;
  Data: IMovie[];
}

export interface IStateDetails {
  loading: boolean;
  Data: ITvDetails;
}
export interface IMovieStateDetails {
  loading: boolean;
  Data: IMovieDetails;
}
export interface IStateCast {
  loading: boolean;
  Data: ICast[];
}
export interface IStateperson {
  loading: boolean;
  Data: Iperson;
}
export const InitialStateCast: IStateCast = {
  Data: [],
  loading: true,
};

export const InitialState: IState = {
  Data: [],
  loading: true,
};

export const InitialStateTvDetail: IStateDetails = {
  Data: {
    adult: false,
    backdrop_path: "",
    created_by: [],
    episode_run_time: [],
    first_air_date: "",
    genres: [],
    homepage: "",
    id: 0,
    in_production: false,
    languages: [],
    last_air_date: "",
    last_episode_to_air: {
      air_date: "",
      episode_number: 0,
      id: 0,
      name: "",
      overview: "",
      production_code: "",
      runtime: 0,
      season_number: 0,
      show_id: 0,
      still_path: "",
      vote_average: 0,
      vote_count: 0,
    },
    name: "",
    next_episode_to_air: {
      air_date: "",
      episode_number: 0,
      id: 0,
      name: "",
      overview: "",
      production_code: "",
      runtime: 0,
      season_number: 0,
      show_id: 0,
      still_path: "",
      vote_average: 0,
      vote_count: 0,
    },
    networks: [],
    number_of_episodes: 0,
    number_of_seasons: 0,
    origin_country: [],
    original_language: "",
    original_name: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    seasons: [],
    spoken_languages: [],
    status: "",
    tagline: "",
    type: "",
    vote_average: 0,
    vote_count: 0,
  },
  loading: true,
};
export const InitialStateMovieDetail: IMovieStateDetails = {
  Data: {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: {
      id: 0,
      name: "",
      poster_path: "",
      backdrop_path: "",
    },
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  loading: true,
};
export const InitialStatePerson: IStateperson = {
  Data: {
    adult: false,
    also_known_as: [],
    biography: "",
    birthday: "",
    deathday: "",
    gender: 0,
    homepage: "",
    id: 0,
    imdb_id: "",
    known_for_department: "",
    name: "",
    place_of_birth: "",
    popularity: 0,
    profile_path: "",
  },
  loading: true,
};
