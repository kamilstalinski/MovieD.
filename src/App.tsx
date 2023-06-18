import axios from "axios";
import "./styles/_main.scss";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
// import Breadcrumbs from "./components/Breadcrumbs";
import Categories from "./pages/Categories";
import { Route, Routes } from "react-router-dom";
import Top100 from "./pages/Top100";
import Genre from "./components/Genre";

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

  //fetching data on app initialization
  useEffect(() => {
    fetchData();
  }, []);

  //logic for fetching data using axios
  const fetchData = async (): Promise<void> => {
    try {
      const response = await axios.get("/data.json");
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
  function handleTrClick(movieId: string) {
    if (lastClickedRow === movieId) {
      setLastClickedRow(null);
    } else {
      setLastClickedRow(movieId);
    }
  }

  return (
    <>
      <Navbar />
      {/* <Breadcrumbs /> */}
      <Routes>
        <Route path='/' element={<Categories categoryList={categoryList} />} />
        <Route
          path='/top100'
          element={
            <Top100
              movies={movies}
              handleTrClick={handleTrClick}
              lastClickedRow={lastClickedRow}
            />
          }
        />
        <Route
          path='/:id'
          element={
            <Genre
              movies={movies}
              handleTrClick={handleTrClick}
              lastClickedRow={lastClickedRow}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
