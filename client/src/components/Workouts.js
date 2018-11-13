import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const StyledBody = styled.div`
  background-color: black;
  min-height: 100vh;
  max-width: 100%;
`

// const StyledDiv = styled.div`
//   background-color: black; 
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   max-width: 100%;
// `
const StyledH1 = styled.div`
position: fixed;
text-align: center;
font-size: 1.5em;
letter-spacing: .5vw;
font-weight: bold;
flex-wrap: wrap;
color: #817144;
text-shadow: 0px 2px 2px #80000A;
margin-top: 70px;
font-style: italic;
`
const StyledMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  min-height: 30vh;
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
const StyledList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const StyledTitle = styled.div`
margin: 10px;

`
const StyledWorkoutLink = styled(Link)`
  padding: 5px;
  text-decoration: none;
  font-size: 2.5em;
  letter-spacing: .5vw;
  color: #817144;
  font-style: italic;
  font-weight: bold;
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
  
  handleChange = (event) => {
    const newWorkout = { ...this.state.newWorkout }
    newWorkout[event.target.name] = event.target.value
    this.setState({ newWorkout })
  }
  
  handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post('/api/workouts', this.state.newWorkout)
    const workouts = [...this.state.workouts]
    workouts.push(response.data)
    this.setState({ workouts })
  }
  
  handleDelete = async (workoutId) => {
    const deleteResponse = await axios.delete(`/api/workouts/${workoutId}`)
    const filteredWorkouts = this.state.workouts.filter(workout => workoutId !== workout.id)
    this.setState({ workouts: filteredWorkouts })
  }
  

  render() {
    const workoutList = this.state.workouts.map((workout, i) => {
      return (
        <StyledTitle key={i}>
          <StyledWorkoutLink to={`/workouts/${workout.id}`}> {workout.title}</StyledWorkoutLink>
          </StyledTitle>
      )
    })

    return (
      <StyledBody>
        <StyledMiddle>          
          <StyledH1>"YOU CAN DO ANYTHING ONE TIME!"</StyledH1>
          </StyledMiddle>
          <StyledNav> 
          <StyledLink to='/'>Terminus</StyledLink>
          <StyledLink to='/exercises'>Exercises</StyledLink>
          <StyledLink to='/profile'>Profile</StyledLink>

        </StyledNav>

        <StyledHeader>WORKOUT</StyledHeader>
          <StyledList>
          {workoutList} 
          </StyledList>      
      </StyledBody>
    )
    }
}
