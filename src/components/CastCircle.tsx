import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import { Movies_Distructing } from "../utils/ApiDistruct";
import { ICast } from "../utils/type";
import { MOVIE_DB_IMG_URL } from "../utils/url";

export default function CastCircle({ item }: { item: ICast }) {
  const navigate = useNavigate();
  const { C_original_name, C_character, C_Profile_Path } =
    Movies_Distructing(item);
  return (
    <div
      className="inline-block mx-2 text-center "
      onClick={() => {
        navigate(`/people/${item.id}`);
      }}
    >
      <Avatar
        size="100"
        round={true}
        src={`${MOVIE_DB_IMG_URL}${C_Profile_Path}`}
      />
      <h1 className="font-extrabold line-clamp-1">{C_original_name}</h1>
      <h1 className="opacity-60 text-xs line-clamp-1 ">{C_character}</h1>
    </div>
  );
}
