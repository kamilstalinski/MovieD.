import MovieTableData from "../components/MovieTableData";

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

type Top100Props = {
  movies: Movie[] | null;
  lastClickedRow: string | null;
  handleTrClick: (movieId: string) => void;
};

function Top100({ movies, lastClickedRow, handleTrClick }: Top100Props) {
  return (
    <>
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

export default Top100;
