import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Workouts from './components/Workouts';
import LandingPage from './components/LandingPage';


class App extends Component {
  render() {
    return (
     <Router>
       <Switch>
         <Route exact path='/' component={LandingPage}/>
         <Route exact path='/workouts' component={Workouts} />
       </Switch>
     </Router>
    )
  }
}

export default App;
