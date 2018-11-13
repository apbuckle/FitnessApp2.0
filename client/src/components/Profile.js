import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import TextInput from './TextInput'
import validate from './Validator'
import Select from './SelectOption'
import Radio from './Radio'


const StyledBody = styled.div`
  /* background-color: black; */
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
    padding: 10px 30px;
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
padding: 10px 30px;
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
  background-color: black;
  text-align: center;
  display: flex;
  position: fixed;
  top: 0;
  color: #A19060;
  text-shadow: 0px 3px 0 #80000A;
  font-size: 3em;
  font-weight: bold;
  letter-spacing: 1vw;
  margin-top: 45px;
  /* margin-left: 10px; */
  padding: 15px;
  width: 100%;
  /* margin: 20px; */

`

export default class Profile extends Component {
    state = {
        formIsValid: false,
        formControls: {
            name: {
                value:'',
                placeholder:'First Name',
                valid: false,
                validationRules: {
                    minLength: 3,
                    isRequired: true
                },
                touched: false
            },
            age: {
                value:'',
                placeholder:'Your age',
                valid: false,
                touched: false,
                validationRules: {
                    minLength: 2,
                    isRequired:true
                }
            },
            level: {
                value: '',
                placeholder: 'Your Gender',
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true,
                },
                options: [
                    {value: 'beginner', displayValue: 'New'},
                    {value: 'some experience', displayValue: 'Some Experience'},
                    {value: 'advanced', displayValue: 'Advanced'}
                ]
            },
            my_radio: {
                value: '',
                placeholder: 'Do you even lift?',
                valid: false,
                touched: false,
                validationRules: {},
                options: [
                    {value: 0, displayValue: 'Yes'},
                    {value: 1, displayValue: 'No'}
                ]
            }
    }
}

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        const updatedControls = {
            ...this.state.formControls
        }
        const updatedFormElement = {
            ...updatedControls[name]
        }
        updatedFormElement.value = value
        updatedFormElement.touched = true
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules)

        updatedControls[name] = updatedFormElement

        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
          formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
                    
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
            
        })
    }

    formSubmitHandler = () => {
        const formData = {};
	for (let formElementId in this.state.formControls) {
	    formData[formElementId] = this.state.formControls[formElementId].value;
    }
}


  render() {
    return (
        
      <StyledBody>
           {/* <StyledNav>
            <li>Terminus</li>
            <StyledLink to='/exercises'>Exercises</StyledLink>
            <StyledLink to='/workouts'>Workouts</StyledLink>
          </StyledNav> 
          <StyledHeader>PROFILE</StyledHeader> */}
          <h3>User Name</h3>
          <TextInput name="name"
                placeholder={this.state.formControls.name.placeholder}
                value={this.state.formControls.name.value}
                onChange={this.handleChange}
                touched={this.state.formControls.name.touched}
                valid={this.state.formControls.name.valid}
                 />
                 <h3>Age</h3>
                 <TextInput name="age"
                                 placeholder={this.state.formControls.age.placeholder}
                                 value={this.state.formControls.age.value}
                                 onChange={this.handleChange}
                                 touched={this.state.formControls.age.touched}
                                 valid={this.state.formControls.age.valid}
                                  />
                 

                 <h3>Workout Level</h3>
                           <Select name="level"
                  value={this.state.formControls.level.value}
                  onChange={this.handleChange}
                  options={this.state.formControls.level.options}
                  touched={this.state.formControls.level.touched}
                  valid={this.state.formControls.level.valid}
                  />
                  
            <h3>Do you lift?</h3>
 <Radio name="my_radio"
            value={this.state.formControls.my_radio.value}
            onChange={this.handleChange}
            options={this.state.formControls.my_radio.options}
            touched={this.state.formControls.my_radio.touched}
            valid={this.state.formControls.my_radio.valid}
          />

                <button onClick={this.formSubmitHandler}
                        disabled={!this.state.formIsValid}> 
                        Submit
                </button>
            


      </StyledBody>
    )
  }
}