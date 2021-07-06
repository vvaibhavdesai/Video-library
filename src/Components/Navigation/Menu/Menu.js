import React from "react";
import { StyledMenu, StyledLinks } from "./Menu.styled";

const animation = {
  height: ` 64vh`,
  maxWidth: `100vw`,
  transition: `1s height`,
};
const menu = {
  height: `0vh`,
  transition: `1s height`,
  overflow: "hidden",
};

const Menu = ({ openBurger }) => {
  return (
    <StyledMenu style={openBurger ? animation : menu}>
      <li>
        <StyledLinks to="/listingpage">All Playlist</StyledLinks>
      </li>
      <li>
        <StyledLinks to="/userpage">Account</StyledLinks>
      </li>
      <li></li>
      <li></li>
    </StyledMenu>
  );
};

export default Menu;
