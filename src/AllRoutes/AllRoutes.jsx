import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Movies } from "../Pages/Movies";
import { WebSeries } from "../Pages/WebSeries";
import { News } from "../Pages/News";
import { TVShows } from "../Pages/TVShows";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Movies" element={<Movies />}></Route>
      <Route path="/WebSeries" element={<WebSeries />}></Route>
      <Route path="/News" element={<News />}></Route>
      <Route path="/TVShows" element={<TVShows />}></Route>
    </Routes>
  );
}
export default AllRoutes;
