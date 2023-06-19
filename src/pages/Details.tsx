import { useOutletContext } from "react-router-dom";

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

type ContextType = { clickedMovie?: Movie };

function Details() {
  const { clickedMovie } = useOutletContext<ContextType>();
  const movie = clickedMovie;

  return (
    <div className='details'>
      <div className='details__upper'>
        <iframe className='details__upper-iframe' src={movie?.trailer}></iframe>
      </div>
      <div className='details__lower'>
        <div className='details__lower-poster'>
          <div className='rating'>{movie?.rating}</div>
          <img src={movie?.image} alt={movie?.title} />
        </div>
        {clickedMovie && (
          <div className='details__lower-spec'>
            <h2>
              Director: <span>{movie?.director}</span>
            </h2>
            <h3>
              Year: <span>{movie?.year}</span>
            </h3>
            <p>{movie?.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
