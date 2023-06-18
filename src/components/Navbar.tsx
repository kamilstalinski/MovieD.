import { Link } from "react-router-dom";

function Navbar() {
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
            <li>
              <Link to='/'>Categories</Link>
            </li>
            <li>
              <Link to='/Top100'>Top100</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
