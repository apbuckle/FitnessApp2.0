import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Workouts from './components/Workouts';
import LandingPage from './components/LandingPage';
import WorkoutPage from './components/WorkoutPage';
import ExercisePage from './components/ExercisePage';


class App extends Component {
  render() {
    return (
     <Router>
       <Switch>
         <Route exact path='/' component={LandingPage}/>
         <Route exact path='/workouts' component={Workouts} />
         <Route exact path='/exercises' component={ExercisePage} />
         <Route exact path='/workouts/:id' component={WorkoutPage} />
       </Switch>
     </Router>
    )
  }
}

export default App;
