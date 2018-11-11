import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

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
    padding: 20px 50px;
    /* text-decoration: none; */
    font-size: 4vw;
    letter-spacing: .6vw;
    font-style: italic;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 0 black;
}
`
const StyledLink = styled(Link)`
display: inline-block;
padding: 10px 40px;
/* align-items: center; */
justify-content: center;
text-decoration: none;
border-right: 1px solid white;
color: white;
cursor: pointer;
font-size: 4.5vw;
font-style: italic;
letter-spacing: .5vw;
text-shadow: 1.5px 1.5px 0 #ae4936;
`
const StyledBody = styled.div`
  background-image: url("https://millionairesdigest.files.wordpress.com/2016/07/original.jpg");
  background-position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 100%;
  color: white;
`

export default class ExercisePage extends Component {
    state = {
        exercises: [],
    }

    componentDidMount = async () => {
        const response = await axios.get('/api/exercises')
        this.setState({ exercises: response.data })
    }  
  render() {
    const exerciseList = this.state.exercises.map((exercise, i) => {
        return (
          <div key={i}>         
          {exercise.name} 
          {/* <br/> Primary Muscles: {exercise.muscles} */}
            </div>
        )
    })

  
    return (
      <div>
        <StyledNav>
          <StyledLink to='/'>Workouts</StyledLink>
        </StyledNav>
        <StyledBody>
        </StyledBody>
          <h1>EXERCISES</h1>
        {exerciseList}
      </div>
    )
  }
}
