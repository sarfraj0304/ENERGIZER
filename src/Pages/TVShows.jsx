import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AllMoviesData } from "../MoviesComponent/AllMoviesData";
import { MainCarousel } from "../components/MainCarousel";
export const TVShows = () => {
  return (
    <>
      <Navbar />
      <MainCarousel />
      <AllMoviesData cat={"TopNetflixData"} type={"Movies"} />
      <Footer />
    </>
  );
};
