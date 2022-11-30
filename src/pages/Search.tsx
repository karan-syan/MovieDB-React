import InfiniteScroll from "react-infinite-scroll-component";
import MovieBox from "../components/MovieBox";
import Searchbar from "../components/Searchbar";
let pg = 0;
export default function Search() {
  function FetchData() {}
  return (
    <div>
      <Searchbar />
      {/* <div className="flex flex-wrap justify-evenly"> */}
      {/* <InfiniteScroll
        dataLength={MoviesData.Data.length}
        next={() => {
          pg = pg + 1;
          FetchData(false, pg);
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {MoviesData.Data.map((item, index) => {
          return <MovieBox item={item} key={index} />;
        })}
      </InfiniteScroll> */}
      {/* </div> */}
    </div>
  );
}
