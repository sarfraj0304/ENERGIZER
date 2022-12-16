import axios from "axios";

export const GetApiData = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=5eefa44e4d8e90b08488c82018c7ea3c`
    )
    .then((res) => console.log(res.data.results))
    .catch(console.error());
  // return axios({
  // method: "GET",
  // url: "https://netflix54.p.rapidapi.com/search/",
  // params: {
  //   query: "punjabi",
  //   offset: "0",
  //   limit_titles: "50",
  //   limit_suggestions: "20",
  //   lang: "hi",
  // },
  // headers: {
  //   "X-RapidAPI-Key": "9454a53b12msh7d2f6255a0c720dp1f1455jsn5dbcbc11f2d7",
  //   "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
  // },
  //   method: "GET",
  //   url: "https://ott-details.p.rapidapi.com/advancedsearch",
  //   params: {
  //     start_year: "2010",
  //     end_year: "2020",
  //     min_imdb: "6",
  //     max_imdb: "7.8",
  //     genre: "action",
  //     language: "hindi",
  //     type: "movie",
  //     sort: "latest",
  //     page: "3",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "9454a53b12msh7d2f6255a0c720dp1f1455jsn5dbcbc11f2d7",
  //     "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
  //   },
  //   method: "GET",
  //   url: "https://newsapi.org/v2/top-headlines?country=in&pageSize=40&apiKey=ef21743592be46ea9c2941b45420e43a",
  // });
};
