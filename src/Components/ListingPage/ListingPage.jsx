import "../Beginner/Beginner.css";
import { usePlaylistAction } from "../../Context/PlaylistContext";
import "./ListingPage.css";
import { ThumbnailImage } from "./ThumbnailImage";
import { useAuth } from './../../Context/AuthContext';
import { useNavigate } from "react-router";
import { useEffect } from 'react';
import { useVideoData } from './../../Context/DataContext';

export default function ListingPage() {
  const { like, watchList, createPlaylist, setLike, setWatchList, setCreatePlaylist } = usePlaylistAction();
  const { userData,isUserLogin } = useAuth();
  const { videoData } = useVideoData();
  const navigate =  useNavigate()

  // console.log(isUserLogin,"this is user login")
  useEffect(()=>{
    if(!isUserLogin){
      return navigate('/userpage')
    }

  })

  return (
    <div class="listing-container">
      <div>
        <h2>Liked videos</h2>
        {like.length !== 0 ? (
          <>
            <div class="beginner_posters">
              {like.map((video) =>{
                // console.log(like,"this is like ")
                return <ThumbnailImage video={video} />
              })}
            </div>
          </>
        ) : (
          <h4>Go & Like some videos Da!</h4>
        )}
      </div>
      <div>
        <h2>Watch Later</h2>
        {watchList.length !== 0 ? (
          <>
            <div class="beginner_posters">
              {watchList.map((video) => (
                <ThumbnailImage video={video} />
              ))}
            </div>
          </>
        ) : (
          <h4>Empty go add some videos to watch later</h4>
        )}
      </div>
      <div>
        {createPlaylist.map(({ name, videoIds }) => {
          return (
            <>
              <h2>{name}</h2>
              <div class="beginner_posters">
                {videoData.map((videoObj) => {
                  if (videoIds.includes(videoObj._id)) {
                    return <ThumbnailImage video={videoObj} />;
                  }
                  return null;
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
