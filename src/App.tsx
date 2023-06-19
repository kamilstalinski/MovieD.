import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/_main.scss";
import Navbar from "./components/Navbar";
import Breadcrumbs from "./components/Breadcrumbs";
import Categories from "./pages/Categories";
import Genre from "./pages/Genre";
import Home from "./pages/Home";
import Details from "./pages/Details";

type Movies = Movie[];
type Movie = {
  description: string;
  director: string[];
  genre: string[];
  id: string;
  image: string;
  imdbid: string;
  rank: number;
  rating: string;
  thumbnail: string;
  title: string;
  trailer: string;
  writers: string[];
  year: number;
};

function App() {
  const [movies, setMovies] = useState<Movies | null>(null);
  const [categoryList, setCategoryList] = useState<string[] | null>(null);
  const [lastClickedRow, setLastClickedRow] = useState<string | null>(null);
  const [clickedMovie, setClickedMovie] = useState<Movie | null>(null);

  //fetching data on app initialization
  useEffect(() => {
    fetchData();
  }, []);

  //logic for fetching data using axios
  const fetchData = async (): Promise<void> => {
    const options = {
      method: "GET",
      url: "https://imdb-top-100-movies.p.rapidapi.com/",
      headers: {
        "X-RapidAPI-Key": "a8ae1df93cmsh2dcb6a71acf7786p1c6986jsne2f14121de95",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const data: Movies = response.data;
      setMovies(data);

      const allGenres: string[] = [];
      data.forEach((movie) => {
        movie.genre.forEach((genre) => {
          if (!allGenres.includes(genre)) {
            allGenres.push(genre);
          }
        });
      });

      setCategoryList(allGenres);
    } catch (error) {
      console.error(error);
    }
  };

  //logic which is checking if table row is clicked
  function handleTrClick(movieObj: Movie) {
    if (lastClickedRow === movieObj.id) {
      setLastClickedRow(null);
    } else {
      setLastClickedRow(movieObj.id);
    }

    setClickedMovie(movieObj);
  }

  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
        <Route path='/categories'>
          <Route index element={<Categories categoryList={categoryList} />} />
          <Route
            path=':id'
            element={
              <Genre
                movies={movies}
                handleTrClick={handleTrClick}
                lastClickedRow={lastClickedRow}
                clickedMovie={clickedMovie}
              />
            }>
            <Route path='*' element={<Details />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
