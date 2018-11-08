import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const StyledBg1 = styled.div`
  /* background-image: url('https://8djjb4xixg-flywheel.netdna-ssl.com/wp-content/uploads/2016/06/gym_1.jpg'); */
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
  padding: 10px;
  text-align: center;
  margin: 0;
  h1 {
  font-size: 10vw;
  letter-spacing: 1vw;
  color: white;
  text-shadow: 0px 4px 0 #ae4936;
  }
  h2 {
  font-size: 4vw;
  color: white;
  letter-spacing: .5vw;
  text-shadow: 1.5px 1.5px 0 #ae4936;
  }
  .sticky {
    position: fixed;
    top: 0;
    width: 100;
  }
  .sticky + .content {
    padding-top: 100px;
  }
`
const StyledStatic = styled.div`
  /* background-image: url("https://wallpapercave.com/wp/wp2639534.jpg"); */
  background-image: url('https://8djjb4xixg-flywheel.netdna-ssl.com/wp-content/uploads/2016/06/gym_1.jpg');
  /* background-image: url('https://wallpapercave.com/wp/wp2483045.jpg'); */
  /* background-image: url('https://wallpapercave.com/wp/wp2639533.jpg'); */
  /* background-image: url('https://wallpapercave.com/wp/wp2639554.jpg'); */
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 100%;
`
// const StyledNav = styled.nav`
// position: fixed;
// width: 100%;
// list-style-type: none;
// margin: 0;
// padding: 0;
// overflow: hidden;
// top: 0;
// background: rgba(255,255,255, .2);
// li {
//     display: inline-block;
//     padding: 20px 50px;
//     /* text-decoration: none; */
//     font-size: 4vw;
//     letter-spacing: .6vw;
//     font-style: italic;
//     font-weight: bold;
//     color: white;
//     text-shadow: 2px 2px 0 #ae4936;
// }
// `

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
  margin: 20px;
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



export default class LandingPage extends Component {
  state = {
    workouts: [],
  }
  
  componentDidMount = async () => {
    const response = await axios.get('/api/workouts')
    this.setState({ workouts: response.data })
  }

  // windowOnscroll = function() {myFunction()}
  
  // menu = document.getElementById("myHeader")
  // sticky = menu.offsetTop
  
  // myFunction() {
  //   if (window.pageYOffset > sticky) {
  //     menu.classList.add("sticky")
  //   } 
  //   else {
  //     menu.classList.remove("sticky")
  //   }
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
      <div>
        <main className="wrapper">
          <StyledBg1 className="section parallax bg1">
          <div class="top-container">
          </div>   
              <StyledMenu id="myHeader">
                  <h1>FitnessApp</h1>
                  <h2>Get Your Swole On</h2>
              </StyledMenu>
          </StyledBg1>

          <StyledStatic className="content">
          {/* <StyledNav>
          <StyledLink to='/'>Fitness App</StyledLink>
          </StyledNav> */}
          <StyledHeader>Workouts</StyledHeader>
              <StyledList className="workoutList">
              {workoutList}
              </StyledList>
              </StyledStatic>
              

      </main>
  </div>
//   <script>
//   window.onscroll = function() {myFunction()}
  
//   var menu = document.getElementById("myHeader")
//   var sticky = menu.offsetTop
  
//   function myFunction() {
//     if (window.pageYOffset > sticky) {
//       menu.classList.add("sticky")
//     } 
//     else {
//       menu.classList.remove("sticky")
//     }
//   }
//   </script>
// </div>
    )
  }
}