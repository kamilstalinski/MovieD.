import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className='nav'>
        <div className='nav__wrapper container'>
          <Link to={"/"} className='nav__logo'>
            <h2>
              MovieD<span className='nav__logo-dot'>.</span>
            </h2>
          </Link>
          <div className='nav__searchbar'>
            <input
              className='nav__searchbar-input'
              placeholder='Search something here...'
              type='text'
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
