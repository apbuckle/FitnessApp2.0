import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-image: url('https://8djjb4xixg-flywheel.netdna-ssl.com/wp-content/uploads/2016/06/gym_1.jpg');
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
background: rgba(255,255,255, .2);
li {
    display: inline-block;
    padding: 20px 50px;
    /* text-decoration: none; */
    font-size: 4vw;
    letter-spacing: .6vw;
    font-style: italic;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 0 #ae4936;
}
`
const StyledLink = styled(Link)`
    display: inline-block;
    padding: 20px 50px;
    text-decoration: none;
    font-size: 4.5vw;
    letter-spacing: .5vw;
    /* font-weight: bold; */
    border-right: 1px solid white;
    color: white;
    font-style: italic;
    text-shadow: 1.5px 1.5px 0 #ae4936;
    cursor: pointer;
`
const StyledHeader = styled.div`
  color: white;
  text-shadow: 0px 3px 0 #ae4936;
  font-size: 10vw;
  font-weight: bold;
  letter-spacing: .5vw;
`
const StyledList = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyledTitle = styled.div`
  margin: 10px;
  font-size: 5vw;
`
const StyledWorkoutLink = styled(Link)`
    display: inline-block;
    padding: 20px;
    text-decoration: none;
    font-size: 4.5vw;
    letter-spacing: .5vw;
    /* font-weight: bold; */
    color: white;
    font-style: italic;
    text-shadow: 1.5px 1.5px 0 #ae4936;
    cursor: pointer;
`

export default class Workouts extends Component {
  state = {
    workouts: [],
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/workouts')
    this.setState({ workouts: response.data })
}  
  
  // handleChange = (event) => {
  //   const newWorkout = { ...this.state.newWorkout }
  //   newWorkout[event.target.name] = event.target.value
  //   this.setState({ newWorkout })
  // }
  
  // handleSubmit = async (event) => {
  //   event.preventDefault()
  //   const response = await axios.post('/api/workouts', this.state.newWorkout)
  //   const workouts = [...this.state.workouts]
  //   workouts.push(response.data)
  //   this.setState({ workouts })
  // }
  
  // handleDelete = async (workoutId) => {
  //   const deleteResponse = await axios.delete(`/api/workouts/${workoutId}`)
  //   const filteredWorkouts = this.state.workouts.filter(workout => workoutId !== workout.id)
  //   this.setState({ workouts: filteredWorkouts })
  // }
  

  render() {
    const workoutList = this.state.workouts.map((workout, i) => {
      return (
        <StyledTitle key={i}>
          <StyledWorkoutLink to={`/workouts/${workout.id}`}> {workout.title}</StyledWorkoutLink>
          </StyledTitle>
      )
    })

    return (
    
      <StyledDiv>       
      <StyledNav> 
          <StyledLink to='/'>Fitness App</StyledLink>
        </StyledNav>
        <StyledHeader>Pick Your Workout</StyledHeader>
          <StyledList>
          {workoutList} 
          </StyledList>      
      </StyledDiv>
    )
    }
}
