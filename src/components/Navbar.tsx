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
            <li>Categories</li>
            <li>Top 100</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
