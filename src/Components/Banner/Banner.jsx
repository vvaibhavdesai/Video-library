import "./Banner.css";
import React, { useState, useEffect } from "react";

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [animation, setAnimation] = useState(false);

  const BannerImgs = [
    "https://wallpaper.dog/large/5561229.jpg",
    "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/4164770/pexels-photo-4164770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  ];

  useEffect(() => {
    setAnimation(true);
    const id = setTimeout(() => {
      setAnimation(false);
    }, 900);

    return () => clearTimeout(id);
  }, [current]);

  useEffect(() => {
    if (!animation) {
      const id = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % BannerImgs.length);
      }, 9000);
      return () => clearTimeout(id);
    }
  }, [animation]);
  return (
    <div>
      <div className="banner_posters">
        <button
          disabled={current === 0}
          onClick={() => setCurrent(current - 1)}
          className="banner_btn banner_plus "
        >
          <i className="fas fa-backward"></i>
        </button>
        <img
          className={`banner_poster ${animation ? "animation" : ""}`}
          alt=""
          src={BannerImgs[current]}
        ></img>
        <button
          disabled={current === 2}
          onClick={() => setCurrent(current + 1)}
          className="banner_btn banner_minus "
        >
          <i className="fas fa-forward"></i>
        </button>
      </div>
    </div>
  );
}
