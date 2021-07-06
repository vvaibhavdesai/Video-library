import "./NewRelease.css";

import { videoData } from "./../VideoData/VideoData";

export default function NewRelease() {
  // const data = videoData.slice(0, 5);

  // console.log(data.thumbnailsome.replace(/[""]+/g));
  return (
    <>
      <h3>New Every Week</h3>
      <div class="videoCard">
        <div>
          {videoData.slice(0, 5).map((video) => (
            <img src={video.thumbnail} alt=""></img>
          ))}
        </div>
      </div>
    </>
  );
}
