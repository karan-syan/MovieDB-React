import { Button, Input } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import MovieBox from "../components/MovieBox";
import Name from "../components/Name";
import { playlistaccess } from "../firebase/firestore";
import { FetchPaylistdata } from "../firebase/playlistfetch";

export default function PlaylistDetails() {
  const { id } = useParams();
  const [email, setemail] = useState<string>("");
  const [dataexist, setdataexist] = useState<1 | 2 | 3>(1);
  const [Moviedata, setMoviedata] = useState<any>([]);
  useEffect(() => {
    FetchPaylistdata(id || "")
      .then((res) => {
        setMoviedata(res);
        setdataexist(2);
      })
      .catch(() => {
        setdataexist(3);
      });
  }, []);
  return (
    <div className="flex justify-center items-center">
      {dataexist === 1 ? (
        <div
          className="flex justify-center items-center"
          style={{
            width: "100%",
            height: "100vh",
            maxWidth: "1920px",
            margin: "0px auto",
            float: "none",
          }}
        >
          <BarLoader color="#36d7b7" />
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            maxWidth: "1920px",
            margin: "0px auto",
            float: "none",
          }}
        >
          <div className="flex sticky top-0 z-10 justify-between">
            <Name />
            <h1 className={"text-xl mt-2"}>
              Playlist: {Moviedata.playlist_name}
            </h1>
            <div className="flex ">
              <Input
                className="ml-2"
                inputProps={{
                  style: { color: "white" },
                }}
                type={"text"}
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                  console.log(email);
                }}
              />
              <Button
                variant="contained"
                onClick={() => {
                  if (email !== "")
                    playlistaccess(Moviedata.playlist_name, email);
                }}
              >
                Share
              </Button>
            </div>
          </div>
          <div className="overflow-auto">
            {dataexist === 3 ? (
              <div
                className="w-full flex justify-center items-center"
                style={{ height: "90vh" }}
              >
                <h1>no data found</h1>
              </div>
            ) : (
              Moviedata.data.map(
                (
                  item: {
                    id: string;
                    img: string;
                    varient: "shows" | "movies";
                  },
                  index: string
                ) => {
                  return (
                    <MovieBox
                      key={index}
                      id={item.id}
                      img={item.img}
                      varient={item.varient}
                    />
                  );
                }
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
