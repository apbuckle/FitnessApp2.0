import React, { Component } from 'react'
import { Link } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledDiv = styled.div`
 border: 1px solid black;
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
        <div key={i}>
        {workout.title}
          {/* <Link to={`/workouts/${workout.id}`}> {workout.title}</Link> */}
          </div>
      )
    })

    return (
      <div>
        <h1>Pick Your Workout</h1>
        <StyledDiv>
          {workoutList}
        </StyledDiv>
        
      </div>
    )
  }
}
