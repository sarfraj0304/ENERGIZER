import axios from "axios";
import { useState, useEffect } from "react";
import { GetApiData } from "./api";

export const JsonServerData = () => {
  const [popularMovie, setPopularMovie] = useState([]);
  GetApiData().then((res) => {
    setPopularMovie(res.data.articles);
    console.log(res.data.articles);
  });
  console.log(popularMovie);

  // const FetchMovieData = (data) => {
  //   axios.post(`https://energizer.onrender.com/News`, data).catch(console.error());
  // };
  // popularMovie.map((el) => {
  //   let dataToSave = {
  // image: el.imageurl[0],
  // imdbid: el.imdbid,
  // rating: el.imdbrating,
  // released: el.released,
  // description: el.synopsis,
  // title: el.title,
  // type: el.type,
  // genre: el.genre[0],
  //     image: el.urlToImage,
  //     title: el.title,
  //     description: el.description,
  //     source: el.source.name,
  //   };
  //   console.log(dataToSave);
  //   FetchMovieData(dataToSave);
  // });

  return <h1></h1>;
};
