import { MOVIE_DB_IMG_URL } from "../util/url";

export default function MovieBox({ img, id }: { img: string; id: number }) {
  return (
    <div className="text-bg_clr p-1 w-1/3 rounded-sm sm:rounded-xl inline-block overflow-hidden md:w-1/5 cursor-pointer h-auto text-xl lg:w-1/6">
      <img
        className="rounded-lg sm:rounded-2xl hover:scale-110 transition-all duration-500 "
        src={`${MOVIE_DB_IMG_URL}${img}`}
        alt="..."
      />
    </div>
  );
}
