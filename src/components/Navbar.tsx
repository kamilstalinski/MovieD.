import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className='nav'>
        <div className='nav__wrapper container'>
          <Link to={"/"} className='nav__logo'>
            <h2>
              MovieData<span className='nav__logo-dot'>.</span>
            </h2>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
