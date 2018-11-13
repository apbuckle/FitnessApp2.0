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
  background-color: #A19060;
  background-position: absolute;
  background-size: cover;
  overflow: scroll;
  margin-top: 126px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
const StyledHeader = styled.div`
  background-color: black;
  text-align: center;
  display: flex;
  position: fixed;
  top: 0;
  color: #A19060;
  text-shadow: 0px 3px 0 #80000A;
  font-size: 3.2em;
  font-weight: bold;
  letter-spacing: 1vw;
  margin-top: 40px;
  padding: 15px;
  width: 100%;
`
const StyledForm = styled.div`
display:flex;
overflow: scroll;
flex-direction: column;
justify-content: center;
align-content: center;
text-align: center;
width: 80%;
border: 1px solid black;
padding: 10px;
margin-bottom: 10px;

.form-contorl {
    width: 75%;
  border: 1px solid black;
  padding: 10px; 
}
.control-error {
  border: 2px solid red;
}
.input {
    width: 50%;
    height: 20px;
    font-size: 16px;
    padding: 3px;
}
`
const StyledTextInput = styled.div`
    width: 50%;
`

export default class Profile extends Component {
    state = {
        profile: [],
        formIsValid: false,
        formControls: {
            name: {
                value:'',
                placeholder:'First Name',
                valid: false,
                validationRules: {
                    minLength: 2,
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
                    isRequired:true
                },
                options: [
                {value: '18', displayValue: '18'},{value: '19', displayValue: '19'},{value: '20', displayValue: '20'},{value: '21', displayValue: '21'},{value: '22', displayValue: '22'},{value: '23', displayValue: '23'},{value: '24', displayValue: '24'},{value: '25', displayValue: '25'},{value: '26', displayValue: '26'},{value: '27', displayValue: '27'},{value: '28', displayValue: '28'},{value: '29', displayValue: '29'},{value: '30', displayValue: '30'},{value: '31', displayValue: '31'},{value: '32', displayValue: '32'},{value: '33', displayValue: '33'},{value: '34', displayValue: '34'},{value: '35', displayValue: '35'},{value: '36', displayValue: '36'},{value: '37', displayValue: '37'},{value: '38', displayValue: '38'},{value: '39', displayValue: '39'},{value: '40', displayValue: '40'},
                ]

            },
            level: {
                value: '',
                placeholder: 'Your fitness level',
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
            activities: {
                value: '',
                placeholder: 'Do you carido?',
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true,
                },
                options: [
                    {value: 'Cycle', displayValue: 'Cycle'},
                    {value: 'Run', displayValue: 'Run'},
                    {value: 'Swim', displayValue: 'Swim'},
                    {value: 'Walk', displayValue: 'Walk'},
                    {value: 'Kayak', displayValue: 'Kayak'},
                    {value: 'Hike', displayValue: 'Hike'},
                    {value: 'Aerobic Class', displayValue: 'AerobicClass'},
                    {value: 'Yoga', displayValue: 'Yog'}
                ]
            },
            bench: {
                value:'',
                placeholder:'Bench PR',
                valid: false,
                validationRules: {
                },
                touched: false
            },
            squat: {
                value:'',
                placeholder:'Sqaut PR',
                valid: false,
                validationRules: {
                },
                touched: false
            },
            deadlift: {
                value:'',
                placeholder:'Deadlift PR',
                valid: false,
                validationRules: {
                },
                touched: false
            },
            five_mile: {
                value:'',
                placeholder:'5K Time',
                valid: false,
                validationRules: {
                },
                touched: false
            },
            ten_mile: {
                value:'',
                placeholder:'10K Time',
                valid: false,
                validationRules: {
                },
                touched: false
            },
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

    formSubmitHandler = async() => {
        const formData = {};
	for (let formElementId in this.state.formControls) {
	    formData[formElementId] = this.state.formControls[formElementId].value;
        const profileId = this.props.match.params.id
        const response = await axios.post(`/api/profile/${profileId}/`, this.state.newP)
        const profile = [...this.state.profiles]
        profile.push(response.data)
       this.setState({profile})
    }
}


  render() {
    const profileInfo = this.state.profile.map((profile, i) => {
        return (
            <div key={i}>
            {profile.name} {profile.age} {profile.level} {profile.activities} 
            {profile.bench} {profile.squat} {profile.deadlift} {profile.five_mile} {profile.ten_mile}
            </div>
        )
    })

    return (
        <StyledBody>
           <StyledNav>
           <StyledLink to='/'>Terminus</StyledLink>
          </StyledNav> 
          {/* <StyledBody> */}
          <StyledHeader>PROFILE</StyledHeader>
          <StyledForm>
          <h3>User Name</h3>
          <TextInput name="name" class="input"
                placeholder={this.state.formControls.name.placeholder}
                value={this.state.formControls.name.value}
                onChange={this.handleChange}
                touched={this.state.formControls.name.touched}
                valid={this.state.formControls.name.valid}
                 />
                 <h3>Age</h3>
                 <Select name="age"
                  value={this.state.formControls.age.value}
                  onChange={this.handleChange}
                  options={this.state.formControls.age.options}
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
                  
            <h3>Do you do any cardio?</h3>
             <Radio name="activities"
            value={this.state.formControls.activities.value}
            onChange={this.handleChange}
            options={this.state.formControls.activities.options}
            touched={this.state.formControls.activities.touched}
            valid={this.state.formControls.activities.valid}
          />

                <button onClick={this.formSubmitHandler}
                        disabled={!this.state.formIsValid}> 
                        Submit
                </button>
</StyledForm>

<StyledForm>
     <h3>Bench PR</h3>
     <TextInput name="bench" class="input"
                placeholder={this.state.formControls.bench.placeholder}
                value={this.state.formControls.bench.value}
                onChange={this.handleChange}
                touched={this.state.formControls.bench.touched}
                valid={this.state.formControls.bench.valid}
                 />

     <h3>Sqaut PR</h3>
     <TextInput name="squat" class="input"
                placeholder={this.state.formControls.squat.placeholder}
                value={this.state.formControls.squat.value}
                onChange={this.handleChange}
                touched={this.state.formControls.squat.touched}
                valid={this.state.formControls.squat.valid}
                 />

     <h3>Deadlift PR</h3>
     <TextInput name="deadlift" class="input"
                placeholder={this.state.formControls.deadlift.placeholder}
                value={this.state.formControls.deadlift.value}
                onChange={this.handleChange}
                touched={this.state.formControls.deadlift.touched}
                valid={this.state.formControls.deadlift.valid}
                 />

    <h3>5k PR</h3>
    <TextInput name="five_mile" class="input"
                placeholder={this.state.formControls.five_mile.placeholder}
                value={this.state.formControls.five_mile.value}
                onChange={this.handleChange}
                touched={this.state.formControls.five_mile.touched}
                valid={this.state.formControls.five_mile.valid}
                 />

     <h3>10k PR</h3>
     <TextInput name="ten_mile" class="input"
                placeholder={this.state.formControls.ten_mile.placeholder}
                value={this.state.formControls.ten_mile.value}
                onChange={this.handleChange}
                touched={this.state.formControls.ten_mile.touched}
                valid={this.state.formControls.ten_mile.valid}
                 />

 </StyledForm> 
 <br/>
 <div>
     {profileInfo}
 </div>
      </StyledBody>
    )
  }
}