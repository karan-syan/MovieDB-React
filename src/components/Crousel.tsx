import React from "react";
import { MOVIE_DB_IMG_URL } from "../util/constants";
import { MovieApiInteface } from "../util/type";

export default function Crousel({ item }: { item: MovieApiInteface[] }) {
  return (
    <div className="flex justify-center xl:pt-3 mb-4">
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative xl:w-5/6 2xl:w-3/4"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
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
                <div className="carousel-item active relative float-left w-full">
                  <img
                    src={`${MOVIE_DB_IMG_URL}${val.backdrop_path}`}
                    className="block w-full xl:rounded-3xl"
                    alt="..."
                  />
                  <div className="carousel-caption hidden md:block absolute text-center">
                    <p>{val.title}</p>
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
                  <img
                    src={`${MOVIE_DB_IMG_URL}${val.backdrop_path}`}
                    className="block w-full xl:rounded-3xl"
                    alt="..."
                  />
                  <div className="carousel-caption hidden md:block absolute text-center">
                    <p>{val.title}</p>
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
