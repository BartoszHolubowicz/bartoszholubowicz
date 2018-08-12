import React from 'react';
import '../css/NavBarCollapse.css';

class NavBarCollapse extends React.Component {
  render() {
    const { collapsed, toggleCollapse } = this.props;
    return (
      <div className='NavBarCollapse'>
        <button onClick={toggleCollapse}>
          <i className={collapsed ? 'fas fa-bars' : 'fas fa-bars expanded'}></i>
        </button>
      </div>
    );
  }
}

export default NavBarCollapse;