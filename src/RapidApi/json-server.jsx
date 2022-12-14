import axios from "axios";
import { useState, useEffect } from "react";
import { GetApiData } from "./api";

export const JsonServerData = () => {
  // const [popularMovie, setPopularMovie] = useState([]);
  // GetApiData().then((res) => {
  //   setPopularMovie(res.data.results);
  // console.log(res.data.results);
  // });
  //   console.log(popularMovie);

  // const FetchMovieData = (data) => {
  //   axios
  //     .post(`http://localhost:3000/PunjabiMovies`, data)
  //     .catch(console.error());
  // };
  // popularMovie.map((el) => {
  //   let dataToSave = {
  //     image: el.imageurl[0],
  //     imdbid: el.imdbid,
  //     rating: el.imdbrating,
  //     released: el.released,
  //     description: el.synopsis,
  //     title: el.title,
  //     type: el.type,
  //     genre: el.genre[0],
  //   };
  //   console.log(dataToSave);
  //   FetchMovieData(dataToSave);
  // });

  return <h1></h1>;
};
