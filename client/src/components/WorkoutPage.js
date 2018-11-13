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
background: rgba(0,0,0);
`
const StyledLink = styled(Link)`
display: inline-block;
padding: 10px 15px;
justify-content: center;
text-decoration: none;
border-right: 1.5px solid #80000A;
color: #A19060;
font-style: italic;
cursor: pointer;
font-size: 2.75vh;
font-style: italic;
letter-spacing: .5vw;
`
const StyledHeader = styled.div`
  background-color: black;
  text-align: center;
  display: flex;
  position: fixed;
  top: 0;
  color: #A19060;
  text-shadow: 0px 3px 0 #80000A;
  font-size: 3.2em;
  font-weight: bold;
  letter-spacing: 1vw;
  margin-top: 40px;
  padding: 15px;
  width: 100%;
`
const StyledExName = styled.div`
  font-size: 2em;
  font-weight: bold;
  padding: 2px;
`
const StyledExRep = styled.div`
  font-size: 1.5em;
`
const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
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
        <StyledList key={i}>
        <StyledExName>{workout_exercise.name}</StyledExName> 
        <StyledExRep>{workout_exercise.sets} sets x {workout_exercise.duration} reps</StyledExRep> <br/>
        </StyledList>
      )
    })   
    
    return (
      <StyledBackground>
                  <StyledNav>
            <StyledLink to='/'>Terminus</StyledLink>
            <StyledLink to='/exercises'>Exercises</StyledLink>
            <StyledLink to='/workouts'>Workouts</StyledLink>
            <StyledLink to='/profile'>Profile</StyledLink>

          </StyledNav>
        <StyledList>
        {workoutExerciseList}
        </StyledList>

      </StyledBackground>
    )
  }
}
