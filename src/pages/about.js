import React, { Component } from 'react'
import Form from '../component/form';

class About extends Component {
  render() {
    return (
      <div>
        <h2>About page</h2>
        <h3>Register</h3>
        <div className="mb-80">
          <Form/>
          <div className="list-users">
          </div>
        </div>
      </div>
    )
  }
}
export default About;