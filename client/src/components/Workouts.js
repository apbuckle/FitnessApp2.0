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
font-size: 4vw;
letter-spacing: .5vw;
font-weight: bold;
color: #817144;
text-shadow: 0px 2px 2px #80000A;
margin: 10px;
font-style: italic;
`
const StyledMiddle = styled.div`
  background-color: black;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  min-height: 25vh;
  max-width: 100%;
  /* color: white; */
  `

const StyledNav = styled.nav`
position: fixed;
width: 100%;
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
top: 0;
background: rgba(0,0,0, .4);
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
  cursor: pointer;
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
cursor: pointer;
font-size: 3.5vw;
font-style: italic;
letter-spacing: .5vw;
/* text-shadow: 1.5px 1.5px 0 #ae4936; */
`

const StyledHeader = styled.div`
/* position: absolute; */
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;

color: #817144;
text-shadow: 0px 4px 3px #80000A;
font-size: 12vw;
font-weight: bold;
letter-spacing: 1vw;
/* margin-top: 60px; */
margin: 10px;
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

`
const StyledWorkoutLink = styled(Link)`
  display: inline-block;
  padding: 5px;
  text-decoration: none;
  font-size: 6vw;
  letter-spacing: .5vw;
  /* font-weight: bold; */
  color: #817144;
  font-style: italic;
  font-weight: bold;
  /* text-shadow: 1.5px 1.5px 0 #80000A; */
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
      <StyledBody>
      {/* <StyledDiv>        */}
        <StyledMiddle>          
          <StyledH1>YOU CAN DO ANYTHING ONE TIME!</StyledH1>
          </StyledMiddle>
          <StyledNav> 
          <StyledLink to='/'>Terminus</StyledLink>
          <StyledLink to='/exercises'>Exercises</StyledLink>

        </StyledNav>

        <StyledHeader>Workouts</StyledHeader>
          <StyledList>
          {workoutList} 
          </StyledList>      
      {/* </StyledDiv> */}
      </StyledBody>
    )
    }
}
