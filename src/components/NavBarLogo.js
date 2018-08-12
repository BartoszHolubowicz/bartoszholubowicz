import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../css/NavBarLogo.css';

class NavBarLogo extends React.Component {
  render() {
    return (
      <div className="NavBarLogo">
        <Route exact path='/'>
          <Link to='/'>
            <span className="NavBarLogo-label">
              <span className="NavBarLogo-letter">B</span>
              Holubowicz
            </span>
          </Link>
        </Route>
      </div>
    );
  }
}

export default NavBarLogo;