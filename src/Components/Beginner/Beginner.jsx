import { useNavigate, Link } from "react-router-dom";
import "./Beginner.css";
import styled from "styled-components";
import { useVideoData } from './../../Context/DataContext';

export default function Beginner() {
  const navigate = useNavigate();
  const { videoData } = useVideoData()

  const StyledLink = styled(Link)`
    color: #608cec;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 1rem 2rem 1rem 1rem;
    padding: 2rem;
    &:hover {
      color: white;
      text-decoration: underline;
    }
  `;

  return (
    <>
      <div className="beginner_heading">
        <h3>Beginner's</h3>{" "}
      </div>
      <div class="beginner_posters">
        {videoData.length > 0 && videoData.slice(12, 17).map((video) => (
          <img
            className="beginner_poster"
            key={video._id}
            src={video.thumbnail}
            alt=""
            onClick={() => navigate(`/videopage/${video._id}`)}
          ></img>
        ))}
        <StyledLink to="/">View More</StyledLink>
      </div>
    </>
  );
}
