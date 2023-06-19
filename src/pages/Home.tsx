import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <h1>Check Top 100 rated movies!</h1>
      <Link to='/categories'>Categories</Link>
    </div>
  );
}

export default Home;
