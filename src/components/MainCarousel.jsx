import { Box, Container } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../Styles/CarouselMain.module.css";
import { MainCarouselImage } from "./MainCarouselImage";
export const MainCarousel = () => {
  const MovieData = [
    {
      image:
        "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcCA3TFYvkS7c6pRQp0rE-mm4k5UVQJrU8Qw8wKsygX9z4cxuTHRTR26qqV128cxMGgnBlxngPidwlM_o8PARXdIwTm0WbnTdV9W.webp?r=f17",
      imdbid: "81290872",
      rating: 2,
      released: 2022,
      description:
        "As a righteous cop pursues a merciless criminal in Bihar, he finds himself navigating a deadly chase and a moral battle mired in corruption.",
      title: "Khakee: The Bihar Chapter",
      type: "show",
      genre: "show",
      id: 35,
    },
    {
      image:
        "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABe9s6GFFhqvpbUb0bmbYDXBUzB2bwFNoqL9O-8eHAKhBNaUd4JOz11Imxmo0xgvb3PbxFoDPRRmN_iEbHULZROcdNgPVcM8Wt2cg.webp?r=fb8",
      imdbid: "81309354",
      rating: 7,
      released: 2022,
      description:
        "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self on a mission to save the future.",
      title: "The Adam Project",
      type: "movie",
      genre: "movie",
      id: 36,
    },
    {
      image:
        "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABe4At59ILVsRnz65jkPwparFcwYMRaDL_dj3BlmWrAe_oV5jcOzWU9ZRGi7jjJaPnBylkZI2Sno8m11U--Qcn29iHHdAM7lyzv_t.webp?r=61f",
      imdbid: "81319137",
      rating: 3,
      released: 2022,
      description:
        "Click through this interactive special, helping superstar Ranveer Singh and adventurer Bear Grylls brave the Serbian wilderness to find a rare flower.",
      title: "Ranveer vs Wild with Bear Grylls",
      type: "movie",
      genre: "movie",
      id: 37,
    },
    {
      image:
        "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABU3A00n2W5-kNRcyV7zeRyhgfAo0pk5xH5RVszCweLCePG052XQ1vK1TywSy8qqobyHuMG3bfmyRqqzynWKiXDUGWFjVAR-LzpA0.webp?r=a52",
      imdbid: "81365134",
      rating: 3,
      released: 2022,
      description:
        "From war-torn Syria to the 2016 Rio Olympics, two young sisters embark on a risky voyage, putting their hearts and their swimming skills to heroic use.",
      title: "The Swimmers",
      type: "movie",
      genre: "movie",
      id: 38,
    },
    {
      image:
        "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfLiRH4pjrz3D6shZ09SRqHs_uzdKAiBAS7pEhhSunoIKMAWBLTXAWyfpbBrrMcD8Q-4p4Wm_NTpLzKx3aw1xu67Ge2SyO-oJcFv.webp?r=dca",
      imdbid: "81450071",
      rating: 5,
      released: 2021,
      description:
        "In 16th-century Zazzau, now Zaria, Nigeria, Amina must utilize her military skills and tactics to defend her family's kingdom. Based on a true story.",
      title: "Amina",
      type: "movie",
      genre: "movie",
      id: 39,
    },
    {
      image:
        "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdWpTJeod3tgeSv8I9yya2LXX38njvUFehiNBwS5XY-_s9wGF8F41ZujnWdnbvlJoyKflP5M1gGSuWvQy2Af_gsHLw4-DqhwvMsf.webp?r=b8e",
      imdbid: "81465093",
      rating: 8,
      released: 2022,
      description:
        "Stunned when his longtime boyfriend moves out, a New York City real estate broker faces the prospect of starting over — and dating again — in his 40s.",
      title: "Uncoupled",
      type: "show",
      genre: "show",
      id: 40,
    },
    {
      image:
        "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRNao_wHF1sqYrnExQGGEj4_YrodG41_J_z8K0JaIh65_FAs2BJEEwLssfHuipjhO_7CmnYXKcO2TMrUnqI-ZSznwkQibqRokJnQ.webp?r=3fd",
      imdbid: "81521086",
      rating: 10,
      released: 2022,
      description:
        "Bound by a dangerous secret, best friends Sarah and Kemi are forced to go on the run after a wealthy groom disappears during his engagement party.",
      title: "Blood Sisters",
      type: "show",
      genre: "show",
      id: 41,
    },
    {
      image:
        "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABWltCxM4BM7BrOdnkdlbHfTVQ4cyK1acuEobgEcnvz57DP880XF_DuDCPqDriEVnON3IgOTjG8SFfsvb5XS5--uSJLO8x0Ud5ljo.webp?r=ed8",
      imdbid: "81610333",
      rating: 9,
      released: 2022,
      description:
        "When a suspect is found in a journalist's murder, the case is considered closed until a secret diary suggests 13 more victims — and possible cannibalism.",
      title: "Indian Predator: The Diary of a Serial Killer",
      type: "show",
      genre: "show",
      id: 42,
    },
    {
      image:
        "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfEB97QF8xW3hsfKZ4728-UwmYGSCjr5wcCtfOZ9_DoBtSojCP0B9KwzjwINIAvcX3UYWK-w8WFpUNBjX760hDJCKQjBhlVUBn6S.webp?r=112",
      imdbid: "81610577",
      rating: 10,
      released: 2022,
      description:
        "In 2004, a brutal predator was lynched in a courtroom. This is the story of the community he terrorized — and the vengeance they unleashed.",
      title: "Indian Predator: Murder in a Courtroom",
      type: "show",
      genre: "show",
      id: 43,
    },
    {
      image:
        "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfcFiLrTnh4TGLv831IarC8QwtHWElKz3MUlnL6AFo91oE-OUNZw23IeqPhQfC-8yicEP0JUzZV3miq5envIeWzKo06ZAQEJlWP0.webp?r=96d",
      imdbid: "81610578",
      rating: 2,
      released: 2022,
      description:
        "A vicious predator’s brutal — and murderous — pursuit of women sends a faltering police force on a wild hunt, while a state reels in terror.",
      title: "Beast of Bangalore: Indian Predator",
      type: "show",
      genre: "show",
      id: 44,
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      customTransition="all 2s"
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={4000}
      infinite={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {MovieData.map((el, i) => (
        <Box key={i} className={styles.main_slider}>
          <MainCarouselImage {...el} />
        </Box>
      ))}
    </Carousel>
  );
};
