import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  height: 64vh;
  max-width: 100vw;
  text-align: left;
  position: absolute;
  top: 3.5rem;
  left: 0;
  z-index: 10;
  background: rgba(21, 21, 24, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 0 0 10px 0;
  border: 1px solid rgba(255, 255, 255, 0.18);

  li {
    list-style: none;
    margin: 1rem 0 0rem 1rem;
    padding: 1rem 0 0 1rem;
    font-size: 1rem;
  }
`;

export const StyledLinks = styled(Link)`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
