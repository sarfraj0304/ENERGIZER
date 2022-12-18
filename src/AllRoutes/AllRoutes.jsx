import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Movies } from "../Pages/Movies";
import { WebSeries } from "../Pages/WebSeries";
import { News } from "../Pages/News";
import { TVShows } from "../Pages/TVShows";
import MovieDetails from "../Pages/MovieDetails";
import { BuyplanPage } from "../Pages/BuyPlan";
import { NewsDetails } from "../Pages/NewsDetails";
import TmdbMovieDetails from "../Pages/TmdbMovieDetails";
import { SearchDataFromTmdb } from "../Pages/SearchDataFromTmdb";
import { AccountInfo } from "../Pages/AccountInfo";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Movies" element={<Movies />}></Route>
      <Route path="/WebSeries" element={<WebSeries />}></Route>
      <Route path="/News" element={<News />}></Route>
      <Route path="/TVShows" element={<TVShows />}></Route>
      <Route
        path="/MovieDetails/:cat/:title/:id"
        element={<MovieDetails />}
      ></Route>
      <Route path="/buyPlan" element={<BuyplanPage />}></Route>
      <Route path="/newsDetails/:id" element={<NewsDetails />}></Route>
      <Route
        path="/TmdbMovieDetails/:id"
        element={<TmdbMovieDetails />}
      ></Route>
      <Route
        path="/searchTmdbData/:inputText"
        element={<SearchDataFromTmdb />}
      ></Route>
      <Route path="/AccountInfo/:FirstName" element={<AccountInfo />}></Route>
    </Routes>
  );
}
export default AllRoutes;
