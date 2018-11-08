import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


export default class WorkoutPage extends Component {
    state = {
        workout_exercises: []
    }
    componentDidMount = async () => {
      const response = await axios.get(`/api/workouts/1/workout_exercises`)
      this.setState({ workout_exercises: response.data })
  }  
  render() {
    const workoutExerciseList = this.state.workout_exercises.map((workout_exercise, i) => {
      return (
        <div key={i}>
        {workout_exercise}
        </div>
      )
    })

    return (
      <div>
        List of all Exercises for this Workout
        {workoutExerciseList}

      </div>
    )
  }
}
