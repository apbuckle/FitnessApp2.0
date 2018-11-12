import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const StyledBackground = styled.div`
  background-color: #80000A;
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
const StyledNav = styled.nav`
position: fixed;
width: 100%;
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
top: 0;
background: rgba(0,0,0, 1);
li {
    display: inline-block;
    padding: 10px 40px;
    /* text-decoration: none; */
    font-size: 3.5vw;
    letter-spacing: .5vw;
    font-style: italic;
    /* font-weight: bold; */
    color: #A19060;
    border-right: 1px solid #80000A;
    /* text-shadow: 1.5px 1.5px 0 #ae4936; */
}
`
const StyledLink = styled(Link)`
display: inline-block;
padding: 10px 40px;
/* align-items: center; */
justify-content: center;
text-decoration: none;
border-right: 1px solid #80000A;
color: #A19060;
font-style: italic;
cursor: pointer;
font-size: 3.5vw;
/* font-style: italic; */
letter-spacing: .5vw;
/* text-shadow: 1.5px 1.5px 0 #ae4936; */
`
const StyledHeader = styled.div`
  background-color: black;
  text-align: center;
  display: flex;
  position: fixed;
  top: 0;
  color: #A19060;
  text-shadow: 0px 3px 0 #80000A;
  font-size: 8vw;
  font-weight: bold;
  letter-spacing: 1vw;
  margin-top: 45px;
  /* margin-left: 10px; */
  padding: 15px;
  width: 100%;
  /* margin: 20px; */
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
      this.setState({ workout_exercises: exercises,  title: data.workout.title })
  }  
  render() {
    // const workout = this.state.workout
    const workoutExerciseList = this.state.workout_exercises.map((workout_exercise, i) => {
      return (
        <div key={i}>
        
        {workout_exercise.name} <br/> {workout_exercise.sets} sets of {workout_exercise.duration} reps
        </div>
      )
    })   
    
    return (
      <StyledBackground>
                  <StyledNav>
            <StyledLink to='/'>Terminus</StyledLink>
            <StyledLink to='/exercises'>Exercises</StyledLink>
            <StyledLink to='/workouts'>Workouts</StyledLink>

          </StyledNav>

        <StyledHeader>WORKOUT</StyledHeader>
        {workoutExerciseList}

      </StyledBackground>
    )
  }
}
