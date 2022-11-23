import { MOVIE_DB_IMG_URL } from "../util/url";

export default function MovieBox({ img, id }: { img: string; id: number }) {
  return (
    <div className="text-bg_clr m-1 w-2/6 rounded-2xl sm:rounded-3xl inline-block overflow-hidden md:w-1/4 cursor-pointer h-auto text-xl lg:w-1/6">
      <img
        className="rounded-2xl sm:rounded-3xl hover:scale-110 transition-all duration-500 "
        src={`${MOVIE_DB_IMG_URL}${img}`}
        alt="..."
      />
    </div>
  );
}
