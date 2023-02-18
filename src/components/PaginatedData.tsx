import { Box, Pagination } from "@mui/material";
import { useEffect, useRef } from "react";
import { IState } from "../utils/InitialState";
import MovieBox from "./MovieBox";

interface Props {
  moviesData: IState;
  fetchData: (newdata: boolean, pg: number) => void;
}

const PaginatedData = (props: Props) => {
  const { moviesData, fetchData } = props;
  const { results, total_pages } = moviesData.Data;
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    fetchData(true, value);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [moviesData]);
  return (
    <Box
      ref={nodeRef}
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {results.map((val, index) => {
        const varient = val.name ? "shows" : "movies";
        if (val.poster_path !== null && val.poster_path !== "") {
          return (
            <MovieBox
              key={index}
              id={val.id}
              posterPath={val.poster_path}
              varient={varient}
            />
          );
        }
        return null;
      })}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBlock: "0.5rem",
        }}
      >
        <Pagination
          count={total_pages > 500 ? 500 : total_pages}
          color="secondary"
          sx={{}}
          onChange={handleChange}
          size="large"
        />
      </Box>
    </Box>
  );
};

export default PaginatedData;
