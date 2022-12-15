import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MainCarousel } from "../components/MainCarousel";
import TopTenMoviesInIndia from "../HomeComponent/Top10Movies";
import TrendingNearYou from "../HomeComponent/TrendingNearYou";
import TopMoviesInPunjabi from "../HomeComponent/TopMoviesInPunjabi";
import FreeLiveNews from "../HomeComponent/News";
export const Home = () => {
  return (
    <>
      <Navbar />
      <MainCarousel />
      <TrendingNearYou />
      <TopTenMoviesInIndia />
      <TopMoviesInPunjabi />
      <FreeLiveNews />
      <Footer />
    </>
  );
};
