import { ToastContainer, toast } from "react-toastify";

export const notify = () =>
  toast("Added", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const keyDownHandler = (
  e,
  change,
  id,
  setCreatePlaylist,
  setChange,
  createPlaylist,
  setShowModal
) => {
  if (e.key === "Enter" && change) {
    setCreatePlaylist((playlists) => [
      ...playlists,
      { name: change, videoIds: [id] },
    ]);
    setChange("");
    setShowModal((prev) => !prev);

    notify();
    console.log("inside the function ", createPlaylist);
  }
};
