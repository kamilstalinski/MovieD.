type MovieProps = {
  movie: {
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
  handleTrClick: (
    movieId: string,
    url?: string,
    event?: React.MouseEvent<Element>,
  ) => void;
  isClicked: boolean;
};

function Movie({ movie, handleTrClick, isClicked }: MovieProps) {
  const url = encodeURIComponent(movie.title.toLowerCase().replace(/\s/g, "-"));
  return (
    <>
      <tr
        onClick={(e) => handleTrClick(movie.id, url, e)}
        className={`tablerow ${isClicked ? "active" : ""}`}>
        <td>
          <img src={movie.image} alt={movie.title} />
        </td>
        <td>{movie.title}</td>
        <td>
          <h3>IMDb rating:</h3>
          <div className='circle'>{movie.rating}</div>
        </td>
        <td>
          Director: <span className='green'>{movie.director}</span>
        </td>
        <td>
          Year: <span className='green'>{movie.year}</span>
        </td>
        <td>
          Genre:{" "}
          <span className='green'>
            {movie.genre.map((genre) => {
              return (
                <p key={Math.random()} className='inline'>
                  {`${genre}`}
                </p>
              );
            })}
          </span>
        </td>
        <td>{movie.description}</td>
      </tr>
    </>
  );
}

export default Movie;
