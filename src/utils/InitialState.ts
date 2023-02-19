import { ICast, IDetails, IMovie, Iperson } from "./type";

export interface IState {
  loading: boolean;
  Data: IMovie;
}

export interface IStateDetails {
  loading: boolean;
  Data: IDetails;
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
  Data: {
    total_pages: 0,
    results: [],
  },
  loading: true,
};

export const InitialStateDetail: IStateDetails = {
  Data: {
    backdrop_path: "",
    id: 0,
    episode_run_time: undefined,
    first_air_date: "",
    genres: [],
    name: undefined,
    networks: undefined,
    number_of_episodes: undefined,
    original_name: "",
    runtime: undefined,
    seasons: undefined,
    type: undefined,
    budget: undefined,
    original_language: "",
    overview: "",
    poster_path: "",
    production_companies: [],
    release_date: undefined,
    revenue: undefined,
    spoken_languages: [],
    status: undefined,
    tagline: "",
    title: undefined,
    vote_average: 0,
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
