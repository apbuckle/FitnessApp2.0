import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


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
            </div>
        )
    })
  
    return (
      <div>
          EXERCISES
        {exerciseList}
      </div>
    )
  }
}
