import Footer from "../components/Footer";
import { TmdbMovie } from "./TmdbMovie";

import Navbar from "../components/Navbar";
export const Movies = () => {
  return (
    <>
      <Navbar />
      <TmdbMovie />
      <Footer />
    </>
  );
};
