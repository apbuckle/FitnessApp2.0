import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
// import { slide as Menu } from 'react-burger-menu'

const StyledBody = styled.div`
  background-color: black;
`
const StyledBg1 = styled.div`
  background-image: url("https://wallpapercave.com/wp/wp2639534.jpg");
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
  font-size: 10vw;
  letter-spacing: 1vw;
  color: #817144;
  text-shadow: 4px 4px 4px #80000A;
  }
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


export default class LandingPage extends Component {
  state = {
    workouts: [],
  }

  showSettings (event) {
    event.preventDefault()
  }
  
  componentDidMount = async () => {
    const response = await axios.get('/api/workouts')
    this.setState({ workouts: response.data })
  }

  render() {

     return (
      <StyledBody>
      {/* <Menu>
        <a id="home" className="menu-item" href="/">Terminus</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
          </Menu> */}

          <StyledBg1>
              <StyledMenu>
                  <h1>IRON TERMINUS </h1>
              </StyledMenu>
          </StyledBg1>



          <StyledNav>
            <StyledLink to='/exercises'>Exercises</StyledLink>
            <StyledLink to='/workouts'>Workouts</StyledLink>
            <StyledLink to='/profile'>Profile</StyledLink>
          </StyledNav> 
              

  </StyledBody>
     )   
     }
    }  
