import { MdOutlineDoubleArrow } from "react-icons/md";
import { IMovie } from "../utils/type";
import MovieBox from "./MovieBox";

export default function ListRow({
  item,
  title,
}: {
  item: IMovie[];
  title?: string;
}) {
  return (
    <div
      className="flex flex-col my-5 mx-3 mb-8"
      style={{ fontFamily: "Roboto Condensed" }}
    >
      {title ? (
        <div className="flex justify-start items-center">
          <h1 className="font-extrabold ml-4 sm:text-2xl lg:text-3xl mb-3">
            {title}
          </h1>
        </div>
      ) : null}
      <div className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide snap-mandatory snap-x">
        {item.map((val, index) => {
          if (val.poster_path !== null && val.poster_path !== "") {
            return <MovieBox key={index} item={val} />;
          }
        })}
      </div>
    </div>
  );
}
