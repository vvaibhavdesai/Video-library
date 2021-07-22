import { useContext, createContext, useEffect,useState } from "react";
import axios from "axios";

export const FetchDataContext = createContext();

export function FetchDataProvider({ children }) {
  const [ videoData, setVideoData ]  = useState([])

  useEffect(() => {
    (async function () {
      try {
        if (videoData.length === 0) {
          const { data }= await axios.get(
            "https://mongoDBInventorySetup.vaibhavdesai888.repl.co/videos"
          );
          console.log(data.videos,"this is videodata");
          setVideoData(data.videos)
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  },[]);

  return <FetchDataContext.Provider value={{ videoData }}>{children}</FetchDataContext.Provider>;
}

export function useVideoData() {
  return useContext(FetchDataContext);
}
