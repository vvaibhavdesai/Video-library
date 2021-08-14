import "./Advance.css";
import { useVideoData } from './../../Context/DataContext';
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

export default function Advance() {
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
    <div className="Advance_content">
      <div className="Advance_heading">
        <h3>Advance</h3>
      </div>
      <div class="Advance_posters">
        { videoData.length > 0 && videoData.slice(11, 16).map(({ _id, thumbnail }) => (
          <img
            className="Advance_poster"
            onClick={() => navigate(`/videopage/${_id}`)}
            key={_id}
            src={thumbnail}
            alt=""
          ></img>
        ))}
        <StyledLink to="/">View More</StyledLink>
      </div>
    </div>
  );
}
