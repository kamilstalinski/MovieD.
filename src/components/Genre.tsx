import { useParams } from "react-router-dom";
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
  handleTrClick: (movieId: string) => void;
};

function Genre({ movies, lastClickedRow, handleTrClick }: GenreProps) {
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
      <main className='container'>
        <h1 className=''>{id}</h1>
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
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Genre;
