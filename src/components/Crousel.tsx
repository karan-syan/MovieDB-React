import React from "react";
import { MOVIE_DB_IMG_URL } from "../util/url";
import { IMovie } from "../util/type";

export default function Crousel({ item }: { item: IMovie[] }) {
  return (
    <div className="flex justify-center xl:mt-3 mb-8 drop-shadow-2xl">
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 z-20">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          {item.map((val, index) => {
            if (index > 0 && index <= 10) {
              return (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={`${index}`}
                  aria-label={`Slide ${index + 1}`}
                />
              );
            }
          })}
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          {item.map((val, index) => {
            if (index === 1) {
              return (
                <div
                  className="carousel-item active relative float-left w-full"
                  key={index}
                >
                  <div className="flex w-full">
                    <div className="flex-col z-0 justify-center w-1/2 text-sm relative font-extralight bg-bg_clr hidden md:flex md:px-2 xl:text-lg">
                      <h1 className="mb-1 text-base xl:text-xl font-extrabold">
                        {val.title ? val.title : val.name}
                      </h1>
                      <h1 className="mb-2 opacity-50 text-xm xl:text-base">
                        {val.release_date}
                      </h1>
                      <h1 className="mb-1 line-clamp-3 w-11/12">
                        {val.overview}
                      </h1>
                    </div>
                    <div
                      className="w-1/5 bg-gradient-to-r from-bg_clr z-10 absolute hidden h-full md:inline-block"
                      style={{ left: "39.85%" }}
                    ></div>
                    <img
                      src={`${MOVIE_DB_IMG_URL}${val.backdrop_path}`}
                      className="block w-full md:w-3/5 z-0"
                      alt="..."
                    />
                  </div>
                </div>
              );
            }
            if (index > 1 && index <= 11) {
              return (
                <div
                  className="carousel-item relative float-left w-full"
                  key={index}
                >
                  <div className="flex w-full">
                    <div className="flex-col z-0 justify-center w-1/2 text-sm relative font-extralight bg-bg_clr hidden md:flex md:px-2 xl:text-lg">
                      <h1 className="mb-1 text-base xl:text-xl font-extrabold">
                        {val.title ? val.title : val.name}
                      </h1>
                      <h1 className="mb-2 opacity-50 text-xm xl:text-base">
                        {val.release_date}
                      </h1>
                      <h1 className="mb-1 line-clamp-3 w-11/12">
                        {val.overview}
                      </h1>
                    </div>
                    <div
                      className="w-1/5 bg-gradient-to-r from-bg_clr z-10 absolute hidden h-full md:inline-block"
                      style={{ left: "39.85%" }}
                    ></div>
                    <img
                      src={`${MOVIE_DB_IMG_URL}${val.backdrop_path}`}
                      className="block w-full md:w-3/5 z-0"
                      alt="..."
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}