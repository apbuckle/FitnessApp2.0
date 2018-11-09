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
      // const exerciseId = this.state.workout_exercises.exercise_id
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
      // const responseTwo = await axios.get(`/api/exercises/1`)
      // console.log('these are exercises ' + responseTwo.data.name)
      // this.setState({ workout_exercises: response.data , exercises: responseTwo.data})
  }  
  render() {
    const workoutExerciseList = this.state.workout_exercises.map((workout_exercise, i) => {
      return (
        <div key={i}>
        sets: {workout_exercise.sets}, duration: {workout_exercise.duration}, exercise name: {workout_exercise.exercise_id}
        </div>
      )
    })
    // MAP OVER WORKOUT.EXERCISES TO OUTPUT EXCERSIZE INFO
    return (
      <div>
        List of all Exercises for this Workout
        {workoutExerciseList}

      </div>
    )
  }
}
