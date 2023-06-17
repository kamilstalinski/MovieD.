import axios from "axios";
import "./styles/_main.scss";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav className='nav'>
        <div className='nav__wrapper container'>
          <div className='nav__logo'>
            <h2>
              MovieD<span className='nav__logo-dot'>.</span>
            </h2>
          </div>
          <div className='nav__searchbar'>
            <input
              className='nav__searchbar-input'
              placeholder='Search something here...'
              type='text'
            />
          </div>
          <ul className='nav__links'>
            <li>Categories</li>
            <li>Top 100</li>
          </ul>
        </div>
      </nav>
      <main className='container'>
        <div className='table'>
          {movies?.map((movie) => {
            return (
              <table>
                <tr>
                  <td>
                    <img src={movie.image} alt={movie.title} />
                  </td>
                  <td>{movie.title}</td>
                  <td>
                    <h3>IMDb rating:</h3>
                    <div className='circle'>{movie.rating}</div>
                  </td>
                </tr>
              </table>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
