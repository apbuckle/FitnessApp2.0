import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'react'
import styled from 'styled-components'

const StyledBg1 = styled.div`
  background-image: url("http://klxpress.com.my/images/rail.jpg");
  filter: blur(1px);
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
  background-color: rgba(0,0,0, 0.6);
  border: 0.5px solid #f1f1f1;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 100%;
  padding: 10px;
  text-align: center;
  margin: 0;
  h1 {
  font-size: 10vw;
  letter-spacing: 1vw;
  color: white;
  text-shadow: 4px 4px 0 black;
  }
  h2 {
  font-size: 4vw;
  color: white;
  letter-spacing: .5vw;
  text-shadow: .25vw .25vw 0 black;
  }
`
const StyledStatic = styled.div`
  background-image: url('http://i0.wp.com/www.cubebreaker.com/wp-content/uploads/2014/04/skyline-01-new-york-city.jpg');
  /* background-image: url('https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1458749140/Tokyo-Skyline-Night-SKYLINES0314.jpg?itok=4BbrBw7R'); */
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 100%;
  h1 {
      color: white;
      font-size: 6vw;
      letter-spacing: .50vw;
      text-shadow: 2px 2px 0 black;
  }
`
const StyledLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
color: white;
cursor: pointer;
font-size: 4.5vw;
font-style: italic;
letter-spacing: .5vw;
`

export default class LandingPage extends Component {
  render() {
     return (
      <div>
        <main className="wrapper">
          <section className="section parallax bg1">
          <StyledBg1>
          </StyledBg1>
              <StyledMenu>
                  <h1>FitnessApp</h1>
                  <StyledLink to='/workouts'>Go To Workouts</StyledLink>

              </StyledMenu>
          </section>
          <section className="section static">
          <StyledStatic>
              <ul className="workoutList">
              </ul>
              </StyledStatic>
              </section>

      </main>
  </div>
    )
  }
}