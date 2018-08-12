import React from 'react';
import NavBarLogo from './NavBarLogo';
import NavBarItems from './NavBarItems';
import NavBarItemsExpanded from './NavBarItemsExpanded';
import NavBarCollapse from './NavBarCollapse';
import { SM } from '../constants';
import '../css/NavBar.css';


class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { collapsed: true };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= SM && !this.state.collapsed)
        this.toggleCollapse();
    });
  }
  componentWillUnmount() {
    window.removeEventListener('resize');
  }
  toggleCollapse() {
    this.setState({ collapsed: !this.state.collapsed });
  }
  render() {
    const { collapsed } = this.state;
    const { toggleCollapse } = this;

    return (
      <nav className='NavBar'>
        <div className='NavBar-wrapper'>
          <NavBarLogo/>
          <NavBarItems/>
          <NavBarCollapse collapsed={collapsed} toggleCollapse={toggleCollapse}/>
        </div>
        {!collapsed ? <NavBarItemsExpanded collapsed={collapsed} toggleCollapse={toggleCollapse}/> : ""}
      </nav>
    );
  }
}

export default NavBar;