import { Link } from "react-router-dom";

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

type MovieProps = {
  movie: Movie;
  handleTrClick: (movieObj: Movie) => void;
  isClicked: boolean;
  clickedMovie: Movie | null;
};

function Movie({ movie, handleTrClick, isClicked }: MovieProps) {
  return (
    <>
      <Link to={movie.title}>
        <tr
          onClick={() => handleTrClick(movie)}
          className={`tablerow ${isClicked ? "active" : ""}`}>
          <td>
            <img src={movie.image} alt={movie.title} />
          </td>
          <td>{movie.title}</td>
          <td>
            <h3>IMDb rating:</h3>
            <div className='circle'>{movie.rating}</div>
          </td>
        </tr>
      </Link>
    </>
  );
}

export default Movie;
