import { useNavigate } from "react-router-dom";

export const ThumbnailImage = ({ video }) => {
  const navigate = useNavigate();
  return (
    <>
      <img
        className="beginner_poster"
        key={video._id}
        src={video.thumbnail}
        alt=""
        onClick={() => navigate(`/videopage/${video._id}`)}
      ></img>
    </>
  );
};
