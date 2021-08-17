import "./Navigation.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu/Menu";
import { SearchBar } from "./SearchBar";
import { useAuth } from "../../Context/AuthContext";
export default function Navigation() {
  const navigate = useNavigate();
  const [openBurger, setBurger] = useState(false);
  const { isUserLogin,logout } = useAuth()

  console.log("open close", openBurger);

  return (
    <nav>
      <div className="nav-content">
        <div className="nav-group">
          <div id="menuToggle">
            <input
            value={openBurger}
              onChange={() => setBurger((prev) => !prev)}
              type="checkbox"
            ></input>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Menu setBurger={setBurger} openBurger={openBurger} />
          <div className="nav-search-icon">
            <SearchBar />
          </div>
        </div>
        <div className="nav-home-icon">
          <button onClick={() => navigate(`/`)}>
            <i className="fa fa-home nav-icon icon-home"></i>
          </button>
        {isUserLogin && <button onClick={()=>logout()}><i className="fas fa-sign-out-alt nav-icon icon-home"></i></button>}
        </div>{" "}
      </div>
    </nav>
  );
}
