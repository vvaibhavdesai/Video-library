export function checkHandler(name, id, createPlaylist, setCreatePlaylist) {
  if (createPlaylist.find((playlistObj) => playlistObj.name === name)) {
    if (
      createPlaylist
        .find((playlistObj) => playlistObj.name === name) //here the object if returned from the array than only it will find the object over it .
        .videoIds.find((ids) => ids === id)
    ) {
      return setCreatePlaylist((prev) =>
        prev.map((playlistObj) =>
          playlistObj.name === name
            ? {
                ...playlistObj,
                videoIds: playlistObj.videoIds.filter((ids) => ids !== id),
              }
            : { ...playlistObj }
        )
      );
    } else {
      return setCreatePlaylist((prev) =>
        prev.map((playlistObj) =>
          playlistObj.name === name
            ? { ...playlistObj, videoIds: [...playlistObj.videoIds, id] }
            : { ...playlistObj }
        )
      );
    }
  }
}
