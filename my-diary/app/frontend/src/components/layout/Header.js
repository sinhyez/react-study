//-------------------------------
// Header Component
//-------------------------------

import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div className="header">
      <h1 className="app-title">
        <Link to='/'>My Diary App</Link>
      </h1>
      <Link to='/create'>Posting!</Link>
    </div>
  );
}

export default Header