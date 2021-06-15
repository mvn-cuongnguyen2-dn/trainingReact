import React, { Component } from 'react';
import Circle from '../component/circle';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>HOME</h1>
        <div className="wrap-content">
          <Circle seconds={20} size="100"/>
          <Circle seconds={30} size="150"/>
          <Circle seconds={40} size="200"/> 
        </div>
      </div>
    )
  }
}
export default Home;