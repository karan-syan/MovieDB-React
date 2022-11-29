import { useNavigate } from "react-router-dom";
import { ITvDetails } from "../utils/type";
import { MOVIE_DB_IMG_URL } from "../utils/url";

export default function SeasonList({ tvshows }: { tvshows: ITvDetails }) {
  const navigate = useNavigate();
  return (
    <div className="w-full mt-2">
      <h1 className="text-lg mx-2">Seasons:</h1>
      <div className="overflow-auto whitespace-nowrap">
        {tvshows.seasons.map((item, index) => {
          return (
            <div
              className="inline-block mx-3"
              onClick={() => {
                navigate(`/tv/details/${item.id}`);
              }}
            >
              <div className="flex items-center">
                <div className=" w-1/4 md:w-1/5">
                  <img src={`${MOVIE_DB_IMG_URL}${item.poster_path}`} />
                </div>
                <div className="text-xs mx-2">
                  <h1>Name: {item.name}</h1>
                  <h1>Season: {item.season_number}</h1>
                  <h1>Total Episodes: {item.episode_count}</h1>
                  <h1 className="hidden md:flex">
                    {item.name} of {tvshows.name} premiered on {item.air_date}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
