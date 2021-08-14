import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledLink = styled(Link)`
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
