import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import Header from "../components/Header";
import { fetchPlaylists } from "../firebase/playlistfetch";
import { ApplicationState } from "../redux/root/rootReducer";

export default function Playlist() {
  const userdetails = useSelector(
    (state: ApplicationState) => state.Userdetails
  );
  const navigate = useNavigate();
  const [dataexist, setdataexist] = useState<1 | 2 | 3>(1);
  const [ownlist, setownlist] = useState<any[]>([]);
  const [sharedlist, setsharedlist] = useState<any[]>([]);
  useEffect(() => {
    fetchPlaylists()
      .then((res) => {
        if (res) {
          setdataexist(2);
          setownlist(res.own);
          setsharedlist(res.shared);
        }
      })
      .catch((e) => {
        setdataexist(3);
      });
  }, [userdetails]);

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
            height: "100vh",
            maxWidth: "1920px",
            margin: "0px auto",
            float: "none",
          }}
        >
          <div>
            <div className={"sticky top-0 z-10"}>
              <Header />
            </div>
          </div>
          <div className="overflow-auto" style={{ height: "43vh" }}>
            <h1 className="text-xl m-2 font-extrabold">Your Playlists</h1>
            {dataexist === 3 ? (
              <div className="w-full flex justify-center items-center">
                <h1>no data found</h1>
              </div>
            ) : (
              ownlist?.map((item: string) => {
                return (
                  <div
                    className="w-1/6 h-1/6 text-3xl flex justify-center items-center cursor-pointer m-2 rounded-2xl bg-black"
                    onClick={() => {
                      navigate(`/playlist/detail/${btoa(item)}`);
                    }}
                    key={item}
                  >
                    {item.substring(0, item.indexOf("@"))}
                  </div>
                );
              })
            )}
          </div>
          <div className="overflow-auto" style={{ height: "43vh" }}>
            <h1 className="text-xl font-extrabold m-2">Recieved Playlist</h1>
            {dataexist === 3 ? (
              <div className="w-full flex justify-center items-center">
                <h1>no data found</h1>
              </div>
            ) : (
              <div>
                {sharedlist?.map((item: string) => {
                  return (
                    <div
                      className="w-1/6 h-1/6 text-3xl flex justify-center items-center cursor-pointer m-2 rounded-2xl bg-black"
                      onClick={() => {
                        navigate(`/playlist/detail/${btoa(item)}`);
                      }}
                      key={item}
                    >
                      {item.substring(0, item.indexOf("@"))}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
