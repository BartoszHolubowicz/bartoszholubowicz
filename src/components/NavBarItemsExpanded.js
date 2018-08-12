import React from 'react';
import NavBarItemExpanded from './NavBarItemExpanded';
import '../css/NavBarItemsExpanded.css';

class NavBarItemsExpanded extends React.Component {
  render() {
    const { collapsed, toggleCollapse } = this.props;
    const HOME = <span>Home</span>,
          ABOUT = <span>About</span>,
          CONTACT = <span>Contact</span>,
          FACEBOOK = <span>My Facebook Page</span>,
          LINKEDIN = <span>My LinkedIn</span>,
          GITHUB = <span>My GitHub</span>;
    return (
      <ul className='NavBarItemsExpanded' onClick={toggleCollapse}>
        <NavBarItemExpanded label={HOME} activeOnlyWhenExact={true} to='/'/>
        <NavBarItemExpanded label={ABOUT} to='/about'/>
        <NavBarItemExpanded label={CONTACT} to='/contact'/>
        <NavBarItemExpanded label={FACEBOOK} to='http://www.facebook.com'/>
        <NavBarItemExpanded label={LINKEDIN} to='https://www.linkedin.com/in/bartosz-ho%C5%82ubowicz-89b7a415b/'/>
        <NavBarItemExpanded label={GITHUB} to='https://github.com/BartoszHolubowicz'/>
      </ul>
    );
  }
}

export default NavBarItemsExpanded;