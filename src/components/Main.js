import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NoMatch from './NoMatch';
import '../css/Main.css';
import '../css/transitions.css';

class Main extends React.Component {
  render() {
    const { location } = this.props;
    const timeout = 300;

    return (
      <main className='Main'>
        <TransitionGroup appear>
          <CSSTransition
          key={location.key}
          classNames='fade'
          timeout={timeout}>
            <div style={{ position: 'absolute', transform: 'translateX(-50%)' }}>
              <Switch location={location}>
                <Route exact path='/' component={Home}/>
                <Route path='/index' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route component={NoMatch}/>
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>
    );
  }
}

Main = withRouter(Main);

export default Main;