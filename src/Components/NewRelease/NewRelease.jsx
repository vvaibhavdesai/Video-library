import "./NewRelease.css";
import { useVideoData } from './../../Context/DataContext';


export default function NewRelease() {
  // const data = videoData.slice(0, 5);
  const { videoData } = useVideoData()

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
