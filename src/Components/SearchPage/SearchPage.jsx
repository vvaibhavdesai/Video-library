import { useLocation, useNavigate } from "react-router-dom";
import { videoData } from "./../VideoData/VideoData";
import "./SearchPage.css";

const getSearchResults = (videoData, search) => {
  if (search) {
    return videoData.filter((video) =>
      video.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  return [];
};

export function SearchPage() {
  const search = new URLSearchParams(useLocation().search).get("search");
  const navigate = useNavigate();

  return (
    <div className="search-container">
      <div class="video-404">
        <h1>Search Results</h1>
        <button onClick={() => navigate(`/`)}>back to home</button>
      </div>
      <div className="video-flex">
        {getSearchResults(videoData, search).map((video) => (
          <img
            alt=""
            onClick={() => navigate(`/videopage/${video._id}`)}
            src={video.thumbnail}
          ></img>
        ))}
        {getSearchResults(videoData, search).length === 0 && (
          <div>No matching videos with that name found</div>
        )}
      </div>
    </div>
  );
}
