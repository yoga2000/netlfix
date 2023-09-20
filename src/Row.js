import React, { useEffect, useState } from "react";
import axios from "axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
    // async function fetchData() {
    //   const request = await axios.get(fetchUrl);

    //   setMovies(request.data.results);
    //   return request;
    // }
    // fetchData();
  }, [fetchUrl]);
  console.log(movies);

  const optns = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const clickHandler = (movie) => {
    if (trailer) {
      setTrailer("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => clickHandler(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailer && <YouTube videoId={trailer} optns={optns} />}
    </div>
  );
};

export default Row;
