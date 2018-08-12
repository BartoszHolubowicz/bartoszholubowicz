import React from 'react';
import NavBarItem from './NavBarItem';
import '../css/NavBarItems.css';

class NavBarItems extends React.Component {
  render() {
    const HOME = <span><i className="fas fa-home"></i>HOME</span>,
          ABOUT = <span><i className="fas fa-info"></i>ABOUT</span>,
          CONTACT = <span><i className="fas fa-envelope"></i>CONTACT</span>,
          FACEBOOK = <i className="fab fa-facebook-f"></i>,
          LINKEDIN = <i className="fab fa-linkedin-in"></i>,
          GITHUB = <i className="fab fa-github"></i>;
    return (
      <ul className='NavBarItems'>
        <NavBarItem className='NavBarItem-github' label={GITHUB} to='https://github.com/BartoszHolubowicz'/>
        <NavBarItem className='NavBarItem-linkedin' label={LINKEDIN} to='https://www.linkedin.com/in/bartosz-ho%C5%82ubowicz-89b7a415b/'/>
        <NavBarItem className='NavBarItem-facebook' label={FACEBOOK} to='http://www.facebook.com'/>
        <NavBarItem label={HOME} activeOnlyWhenExact={true} to='/'/>
        <NavBarItem label={ABOUT} to='/about'/>
        <NavBarItem label={CONTACT} to='/contact'/>
      </ul>
    );
  }
}

export default NavBarItems;