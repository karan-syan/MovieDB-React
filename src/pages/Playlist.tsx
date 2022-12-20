import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import Header from "../components/Header";
import { fetchPlaylists } from "../firebase_services/firestore/PlaylistFirestore";
import { ApplicationState } from "../redux/root/rootReducer";

export default function Playlist() {
  const userdetails = useSelector(
    (state: ApplicationState) => state.Userdetails
  );
  const navigate = useNavigate();
  const [dataexist, setdataexist] = useState<"load" | "avail" | "unavail">(
    "load"
  );
  const [ownlist, setownlist] = useState<any[]>([]);
  const [sharedlist, setsharedlist] = useState<any[]>([]);
  useEffect(() => {
    fetchPlaylists(userdetails?.email || "")
      .then((res) => {
        if (res) {
          setdataexist("avail");
          setownlist(res.own);
          setsharedlist(res.shared);
          console.log(res.shared.length);
        }
      })
      .catch((e) => {
        setdataexist("unavail");
      });
  }, [userdetails]);

  return (
    <div className="flex justify-center items-center">
      {dataexist === "load" ? (
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
          <div style={{ height: "43vh" }}>
            <h1 className="text-xl m-2 font-extrabold">Your Playlists</h1>
            <div className="overflow-auto">
              {dataexist === "unavail" || ownlist.length < 1 ? (
                <div className="w-full flex justify-center items-center">
                  <h1>no data found</h1>
                </div>
              ) : (
                ownlist?.map((item: string) => {
                  return (
                    <div
                      className="w-1/6 h-1/6 text-3xl inline-block cursor-pointer m-2 py-3 rounded-2xl bg-black"
                      onClick={() => {
                        navigate(`/playlist/detail/${btoa(item)}`);
                      }}
                      key={item}
                    >
                      <h1 style={{ marginLeft: "38%" }}>
                        {item.substring(0, item.indexOf("@"))}
                      </h1>
                    </div>
                  );
                })
              )}
            </div>
          </div>
          <div style={{ height: "43vh" }}>
            <h1 className="text-xl font-extrabold m-2">Recieved Playlist</h1>
            <div className="overflow-auto">
              {dataexist === "unavail" || sharedlist.length < 1 ? (
                <div className="w-full flex justify-center items-center">
                  <h1>no data found</h1>
                </div>
              ) : (
                <div>
                  {sharedlist?.map((item: string) => {
                    return (
                      <div
                        className="w-1/6 h-1/6 text-3xl inline-block cursor-pointer m-2 py-3 rounded-2xl bg-black"
                        onClick={() => {
                          navigate(`/playlist/detail/${btoa(item)}`);
                        }}
                        key={item}
                      >
                        <h1 style={{ marginLeft: "38%" }}>
                          {item.substring(0, item.indexOf("@"))}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
