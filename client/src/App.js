import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Workouts from './components/Workouts';
import WorkoutPage from './components/WorkoutPage';
import ExercisePage from './components/ExercisePage';
import LandingPage from './components/LandingPage';
import SingleExercisePage from './components/SingleExercisePage';


class App extends Component {
  render() {
    return (
     <Router>
       <Switch>
         <Route exact path='/' component={LandingPage} />
         <Route exact path='/workouts' component={Workouts} />
         <Route exact path='/workouts/:id' component={WorkoutPage} />
         <Route exact path='/exercises' component={ExercisePage} />
         <Route exact path='/exercises/:id' component={SingleExercisePage} />
       </Switch>
     </Router>
    )
  }
}

export default App;
