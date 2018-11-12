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
  background-color: rgba(0,0,0, 0.8);
  border: 1px solid #817144;
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
  font-size: 14vw;
  letter-spacing: 1vw;
  color: #817144;
  text-shadow: 4px 4px 4px #80000A;
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
  min-height: 50vh;
  max-width: 100%;
  /* color: white; */
  `
  
  const StyledH1 = styled.div`
  position: absolute;
  font-size: 8.5vw;
  letter-spacing: .5vw;
  font-weight: bold;
  color: #817144;
  text-shadow: 0px 2px 2px #80000A;
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
/* font-style: italic; */
letter-spacing: .5vw;
/* text-shadow: 1.5px 1.5px 0 #ae4936; */
`

const StyledHeader = styled.div`
  /* position: absolute; */
  color: #817144;
  text-shadow: 0px 4px 3px #80000A;
  font-size: 12vw;
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
    font-size: 6vw;
    letter-spacing: .5vw;
    /* font-weight: bold; */
    color: #817144;
    font-style: italic;
    font-weight: bold;
    /* text-shadow: 1.5px 1.5px 0 #80000A; */
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
                  <h1>IRON TERMINUS </h1>
              </StyledMenu>
          </StyledBg1>
          
          <StyledMiddle>
          
          <StyledH1>YOU CAN DO ANYTHING ONE TIME!</StyledH1>
          </StyledMiddle>
          


          <StyledStatic className="content">
          <StyledNav>
            <li>Terminus</li>
            <StyledLink to='/exercises'>Exercises</StyledLink>

          </StyledNav>
          <StyledList>
          <StyledHeader>Workouts</StyledHeader>
              
              {workoutList}
              </StyledList>
              </StyledStatic>
              

      </main>
  </StyledBody>
    )
  }
}