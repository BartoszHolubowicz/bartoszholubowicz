import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import '../css/NavBarItemExpanded.css';

class NavBarItemExpanded extends React.Component {
  render() {
    const { className, label, activeOnlyWhenExact, to } = this.props;

    return (
      <li className='NavBarItemExpanded'>
        <Route
        exact={activeOnlyWhenExact}
        path={to}/>
        {to[0] === '/' ?
          <NavLink
          className={className ? `NavBarItemExpanded-link ${className}` : 'NavBarItemExpanded-link'}
          activeClassName='activeLink'
          exact
          to={to}>
            <div onClick={}>{label}</div>
          </NavLink>
        :
          <a
          className={className ? `NavBarItemExpanded-link ${className}` : 'NavBarItemExpanded-link'}
          href={to}
          target='_blank'>
            {label}
          </a>
        }
      </li>
    );
  }
}

export default NavBarItemExpanded;