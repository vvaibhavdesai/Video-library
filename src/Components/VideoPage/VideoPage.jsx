import "./VideoPage.css";
import { useParams } from "react-router-dom";
import { useVideoData } from './../../Context/DataContext';
import { usePlaylistAction } from "../../Context/PlaylistContext";
import { useState } from "react";
import { keyDownHandler } from "./keyDownHandler";
import { checkHandler } from "./checkHandler";
import { likeHandler, watchListHandler } from "./likeHandler";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function VideoPage() {
  const { videoId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const { videoData } = useVideoData();

  let video = {}
  if(videoData.length > 0){
     video = videoData.find(({ _id }) => _id === videoId);
  }
  console.log(videoData,video,"this is video")
  const {
    like,
    setLike,
    watchList,
    setWatchList,
    createPlaylist,
    setCreatePlaylist,
  } = usePlaylistAction();

  // const notify = () =>
  //   toast("Wow so easy!", {
  //     position: "bottom-left",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });

  const Modal = ({ setShowModal, checkHandler, keyDownHandler, video }) => {
    const { createPlaylist, setCreatePlaylist } = usePlaylistAction();
    const [change, setChange] = useState("");
    return (
      <div className="VideoPage-modal">
        <div className="playlistmodal-listing">
          {createPlaylist &&
            createPlaylist.length !== 0 &&
            createPlaylist.map((playlists) => (
              <li className="PlaylistNames">
                {playlists.name}
                <input
                  className="PlaylistNames-checkBx"
                  checked={playlists.videoIds.some((ids) => ids === video._id)}
                  onChange={() =>
                    checkHandler(
                      playlists.name,
                      video._id,
                      createPlaylist,
                      setCreatePlaylist
                    )
                  }
                  type="checkbox"
                ></input>
              </li>
            ))}
        </div>
        <input
          className="playlist-input"
          value={change}
          onKeyDown={(e) =>
            keyDownHandler(
              e,
              change,
              video._id,
              setCreatePlaylist,
              setChange,
              createPlaylist,
              setShowModal
            )
          }
          placeholder="Enter name here..."
          onChange={(e) => setChange(e.target.value)}
          type="text"
        ></input>
        <button
          className="modal-btn"
          onClick={() => setShowModal((prev) => !prev)}
        >
          Close
        </button>
      </div>
    );
  };

  return (
    <div className="VideoPage-Contentbox ">
      <div class="VideoPage-iframe">
        <iframe
          src={`https://www.youtube.com/embed/${video._id}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
      </div>
      <div class="VideoPage-content">
        <div class="VideoPage-details">
          <h3>{video.title}</h3>
          {showModal && (
            <Modal
              setShowModal={setShowModal}
              checkHandler={checkHandler}
              keyDownHandler={keyDownHandler}
              video={video}
            />
          )}

          <div class="video-btn-div">
            {" "}
            <div className="btn_group">
              <ToastContainer />
              <button
                className="newplaylist_btn block-btn "
                onClick={() => likeHandler(video, like, setLike)}
              >
                {like.find((videos) => videos._id === video._id) ? (
                  <>
                    <i className={`fas fa-thumbs-up ${`like`}`}></i>Liked
                  </>
                ) : (
                  <>
                    <i className={`fas fa-thumbs-up ${`like`}`}></i>Like
                  </>
                )}
              </button>
              <button
                class="newplaylist_btn block-btn "
                onClick={() => setShowModal((prev) => !prev)}
              >
                <i class="fa fa-plus newplaylist"></i>
                New Playlist
              </button>
              <button
                onClick={() => watchListHandler(video, watchList, setWatchList)}
                class="WatchLater_btn block-btn"
              >
                <i class="fas fa-clock WatchLater"></i>
                {watchList.find((videos) => videos._id === video._id)
                  ? "Added"
                  : "WatchList"}
              </button>
              <button class=" Share_btn block-btn">
                <i class="fas fa-share Share"></i>
                Share
              </button>
            </div>
          </div>
          <p class="VideoPage-description">
            {videoData.length> 0 && video.desc.split("\n").map(function (item, idx) {
              return (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
