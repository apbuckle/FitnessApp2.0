import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const StyledBody = styled.div`
  background-color: black;
`
const StyledBg1 = styled.div`
  background-image: url("https://wallpapercave.com/wp/wp2639534.jpg");
  /* filter: blur(1px); */
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
const StyledMenu = styled.div`
  background-color: rgba(0,0,0, 0.7);
  border: 0.5px solid #f1f1f1;
  position: center;
  /* transform: translate(-50%, -50%);
  z-index: 2;
  top: 50%;
  left: 50%; */
  overflow: hidden;
  width: 100%;
  /* padding: 10px; */
  text-align: center;
  margin: 0;
  h1 {
  font-size: 15vw;
  letter-spacing: 1vw;
  color: white;
  text-shadow: 0px 3px 0 #ae4936;
  }
`
const StyledMiddle = styled.div`
  background-color: black;
  background-position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 35vh;
  max-width: 100%;
  /* color: white; */
  `
  
  const StyledH1 = styled.div`
  position: absolute;
  font-size: 8vw;
  letter-spacing: .5vw;
  font-weight: bold;
  color: white;
  text-shadow: 0px 2px 0 #ae4936;
  margin: 10px;
  
`
const StyledStatic = styled.div`
  background-image: url('https://8djjb4xixg-flywheel.netdna-ssl.com/wp-content/uploads/2016/06/gym_1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
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

const StyledHeader = styled.div`
  color: white;
  text-shadow: 0px 3px 0 #ae4936;
  font-size: 10vw;
  font-weight: bold;
  letter-spacing: 1vw;
  margin-top: 60px;
  /* margin: 20px; */
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
    font-size: 4.5vw;
    letter-spacing: .5vw;
    /* font-weight: bold; */
    color: white;
    font-style: italic;
    text-shadow: 1.5px 1.5px 0 #ae4936;
    cursor: pointer;
`



export default class LandingPage extends Component {
  state = {
    workouts: [],
  }
  
  componentDidMount = async () => {
    const response = await axios.get('/api/workouts')
    this.setState({ workouts: response.data })
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
        <main className="wrapper">
          <StyledBg1 className="section parallax bg1">
          <div className="top-container">
          </div>   
              <StyledMenu id="myHeader">
                  <h1>IRON SAVAGE </h1>
              </StyledMenu>
          </StyledBg1>
          
          <StyledMiddle>
          
          <StyledH1>YOU CAN DO ANYTHING ONE TIME!</StyledH1>
          </StyledMiddle>
          


          <StyledStatic className="content">
          <StyledNav>
          <StyledLink to='/exercises'>Exercises</StyledLink>
          </StyledNav>
          <StyledHeader>Workouts</StyledHeader>
              <StyledList className="workoutList">
              {workoutList}
              </StyledList>
              </StyledStatic>
              

      </main>
  </StyledBody>
    )
  }
}