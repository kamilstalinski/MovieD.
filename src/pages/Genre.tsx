import { Outlet, useParams } from "react-router-dom";
import MovieTableData from "../components/MovieTableData";
import { useState, useEffect } from "react";

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

type GenreProps = {
  movies: Movie[] | null;
  lastClickedRow: string | null;
  handleTrClick: (movieObj: Movie) => void;
  clickedMovie: Movie | null;
};

function Genre({
  movies,
  lastClickedRow,
  handleTrClick,
  clickedMovie,
}: GenreProps) {
  const { id } = useParams<{ id: string }>();
  const [filteredMovies, setFilteredMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    if (movies) {
      const filtered = movies.filter((movie) =>
        movie.genre.includes(id as string),
      );
      setFilteredMovies(filtered);
    }
  }, [id, movies]);

  return (
    <div className='genre-movies'>
      <h1 className=''>{id}</h1>
      <main className='container'>
        <div className='table'>
          <table>
            <tbody>
              {filteredMovies?.map((movie) => {
                return (
                  <MovieTableData
                    key={movie.id}
                    movie={movie}
                    handleTrClick={handleTrClick}
                    isClicked={lastClickedRow === movie.id}
                    clickedMovie={clickedMovie}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <Outlet />
      </main>
    </div>
  );
}

export default Genre;
