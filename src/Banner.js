import axios from "axios";
import React, { useEffect, useState } from "react";
import "./banner.css";
import request from "./request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(request.fetchTrending).then((response) => {
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    });
  }, []);
  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        {/* title */}
        <h1 className="banner__title">
          {" "}
          {movie?.title || movie?.original_title}
        </h1>
        {/* div 2btn */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* descrptin */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
