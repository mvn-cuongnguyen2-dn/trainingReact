import React, { Component } from 'react';

class CircleBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: this.props.seconds,
      size: this.props.size,
      isButton: true
    }
  }
  handleCountdown() {
    if(this.state.seconds > 0) {
      this.setState(state => ({
        seconds: state.seconds - 1
      }));
    }
  }
  componentWillUpdate() {
    if(this.state.seconds === 0){
      clearInterval(this.interval);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    const size = `${this.props.size}px`;
    const isButton = this.state.isButton;
    const handleClickButton = () => {
      this.setState(state => ({
        isButton: !state.isButton
      }));
      if(this.state.isButton){
        if(this.state.seconds > 0){
          this.interval = setInterval(() => this.handleCountdown(), 1000);
        }
      }else{
        this.setState(state => ({
          seconds: state.seconds
        }));
        clearInterval(this.interval);
      }
    }
    return (
      <div className="wrap-circle" style={{width: size}}>
        <button className="btn btn-danger" onClick={() => handleClickButton()}>{isButton ? 'START' : 'STOP'}</button>
        <div className="circle" style={{width: size, height: size, borderRadius: size }}>
          <span>{this.state.seconds}</span>
        </div>
      </div>
    )
  }
}
export default CircleBox;
