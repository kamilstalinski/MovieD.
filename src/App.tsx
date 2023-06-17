import axios from "axios";
import "./styles/_main.scss";
import { useEffect, useState } from "react";
import MovieTableData from "./components/MovieTableData";
import Navbar from "./components/Navbar";

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
  const [lastClickedRow, setLastClickedRow] = useState<string | null>(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const response = await axios.get("/data.json");
      const data: Movies = response.data;
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

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
      <main className='container'>
        <div className='table'>
          <table>
            <tbody>
              {movies?.map((movie) => {
                return (
                  <MovieTableData
                    key={movie.id}
                    movie={movie}
                    handleTrClick={handleTrClick}
                    isClicked={lastClickedRow === movie.id}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default App;
