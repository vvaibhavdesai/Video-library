import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const routeToPage = (e) => {
    if (e.key === "Enter") {
      navigate(`/searchvideo?search=${encodeURI(search)}`);
    }
  };
  return (
    <>
      <input
        onKeyDown={(e) => routeToPage(e)}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
      ></input>
    </>
  );
};
