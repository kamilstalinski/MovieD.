import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <h1>Check most popular movies!</h1>
      <Link to='/categories'>Categories</Link>
    </div>
  );
}

export default Home;
