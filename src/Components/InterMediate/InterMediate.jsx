import "./InterMediate.css";
import { useVideoData } from './../../Context/DataContext';
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

export default function InterMediate() {
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
      <div className="InterMediate_heading">
        <h3>Intermediate's</h3>
      </div>
      <div class="InterMediate_posters">
        {videoData.length > 0 && videoData.slice(15, 22).map(({ _id, thumbnail }) => (
          <img
            className="InterMediate_poster"
            onClick={() => navigate(`/videopage/${_id}`)}
            key={_id}
            src={thumbnail}
            alt=""
          ></img>
        ))}
        <StyledLink to="/">View More</StyledLink>
      </div>
    </>
  );
}
