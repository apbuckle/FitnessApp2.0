import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
// import styled from 'styled-components'


export default class WorkoutPage extends Component {
    state = {
        workout_exercises: [],
        exercises: [],
    }
    componentDidMount = async () => {
      const id = this.props.match.params.id
      const { data } = await axios.get(`/api/workouts/${id}/workout_exercises`)
      console.log(data)
      const exercises = data.exercises.map( (exercise, i) => {
        return {
          name: exercise.name,
          duration: data.workout_exercises[i].duration,
          sets: data.workout_exercises[i].sets
        }
      })
      const workout = {
        exercises,
        title: data.workout.title
      }
      console.log({workout})
      this.setState({ workout_exercises: exercises})
  }  
  render() {
    const workoutExerciseList = this.state.workout_exercises.map((workout_exercise, i) => {
      return (
        <div key={i}>
        Exercise: {workout_exercise.name} <br/> {workout_exercise.sets} sets of {workout_exercise.duration} reps
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
