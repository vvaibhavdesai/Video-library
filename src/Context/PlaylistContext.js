import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [like, setLike] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [createPlaylist, setCreatePlaylist] = useState([]);

  return (
    <DataContext.Provider
      value={{
        like,
        setLike,
        watchList,
        setWatchList,
        createPlaylist,
        setCreatePlaylist,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function usePlaylistAction() {
  return useContext(DataContext);
}
