import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
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
cursor: pointer;
font-size: 3.5vw;
font-style: italic;
letter-spacing: .5vw;
/* text-shadow: 1.5px 1.5px 0 #ae4936; */
`
const StyledBody = styled.div`
  background-color: #A19060;
  background-position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  min-height: 100vh;
  max-width: 100%;
  color: black;
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


export default class SingleExercisePage extends Component {
    state = {
        exercises: []
    }
    render() {
    return (
      <div>
          <StyledNav>
          <StyledLink to='/'>Terminus</StyledLink>
          <StyledLink to='/exercises'>Exercises</StyledLink>
          </StyledNav>
          <StyledBody>
              <StyledHeader>Learn more about each exercise</StyledHeader>
          </StyledBody>
      </div>
    )
    }
}