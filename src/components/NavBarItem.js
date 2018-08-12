import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import '../css/NavBarItem.css';

class NavBarItem extends React.Component {
  render() {
    const { className, label, activeOnlyWhenExact, to } = this.props;

    return (
      <li className='NavBarItem'>
        <Route
        exact={activeOnlyWhenExact}
        path={to}/>
        {to[0] === '/' ?
          <NavLink
          className={className ? `NavBarItem-link ${className}` : 'NavBarItem-link'}
          activeClassName='activeLink'
          exact
          to={to}>
            {label}
          </NavLink>
        :
          <a
          className={className ? `NavBarItem-link ${className}` : 'NavBarItem-link'}
          href={to}
          target='_blank'>
            {label}
          </a>
        }
      </li>
    );
  }
}

export default NavBarItem;