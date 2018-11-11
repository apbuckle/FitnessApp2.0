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
background: rgba(0,0,0);
li {
    display: inline-block;
    padding: 10px 40px;
    /* text-decoration: none; */
    font-size: 3vw;
    letter-spacing: .5vw;
    font-style: italic;
    /* font-weight: bold; */
    color: white;
    border-right: 1px solid white;
    text-shadow: 1.5px 1.5px 0 #ae4936;
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
font-size: 3vw;
font-style: italic;
letter-spacing: .5vw;
text-shadow: 1.5px 1.5px 0 #ae4936;
`

const StyledBody = styled.div`
  background-color: black;
  background-position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  min-height: 100vh;
  max-width: 100%;
  color: white;
`
const StyledHeader = styled.div`
  background-color: black;
  text-align: center;
  display: flex;
  position: fixed;
  top: 0;
  color: white;
  text-shadow: 0px 3px 0 #ae4936;
  font-size: 8vw;
  font-weight: bold;
  letter-spacing: 1vw;
  margin-top: 45px;
  margin-left: 10px;
  padding: 9px;
  /* margin: 20px; */
`
const StyledItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  padding: 5px;
  font-size: 3vw;
`
const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 140px;
  /* position: fixed; */
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
          <StyledItems key={i}>         
          {exercise.name} 
          {/* <br/> Primary Muscles: {exercise.muscles} */}
            </StyledItems>
        )
    })

  
    return (
      <div>
        <StyledNav>
          <StyledLink to='/'>Savage</StyledLink>
        </StyledNav>
        <StyledBody>
          <StyledHeader>EXERCISES</StyledHeader>
          <StyledList>
        {exerciseList}
        </StyledList>
        </StyledBody>
      </div>
    )
  }
}
