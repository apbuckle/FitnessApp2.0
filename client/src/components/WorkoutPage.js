import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const StyledBackground = styled.div`
  background-color:gray;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 100%;
`


export default class WorkoutPage extends Component {
    state = {
        workout_exercises: [],
        exercises: [],
        workouts: [],
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
    // const workout = this.state.workout
    const workoutExerciseList = this.state.workout_exercises.map((workout_exercise, i) => {
      return (
        <div key={i}>
        Exercise: {workout_exercise.name} <br/> {workout_exercise.sets} sets of {workout_exercise.duration} reps
        </div>
      )
    })
   
    
    return (
      <StyledBackground>
        <h1>Savage</h1>
        {workoutExerciseList}

      </StyledBackground>
    )
  }
}
