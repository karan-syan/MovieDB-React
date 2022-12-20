import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BarLoader } from "react-spinners";
import Header from "../components/Header";
import MovieBox from "../components/MovieBox";
import { firestore_db } from "../firebase_services/firebaseConfig";
import { ApplicationState } from "../redux/root/rootReducer";

export default function Recent() {
  const userdetails = useSelector(
    (state: ApplicationState) => state.Userdetails
  );
  const [dataexist, setdataexist] = useState<1 | 2 | 3>(1);
  const [Moviedata, setMoviedata] = useState<any>([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      const docRef = doc(firestore_db, "recent", userdetails?.uid || "");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setMoviedata(docSnap.data().movies);
        setdataexist(2);
      }
    } catch (error) {
      setdataexist(3);
    }
  };
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
          <div>
            <div className={"sticky top-0 z-10"}>
              <Header />
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
              Moviedata.map(
                (
                  item: {
                    id: string;
                    img: string;
                    varient: "shows" | "movies";
                    time: string;
                  },
                  index: string
                ) => {
                  return (
                    <MovieBox
                      key={index}
                      id={item.id}
                      img={item.img}
                      time={item.time}
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
