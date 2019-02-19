import React, { Component } from 'react';
import './App.css';

class Clock extends Component {

constructor(props) {
	super(props);
	this.state = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	}

}

componentWillMount() {
	this.getTimeUntil(this.props.deadline);
}

componentDidMount() {
	setInterval( () => this.getTimeUntil(this.props.deadline), 1000);  // Starts the count Down
}

leading0(num) {
	return num < 10 ? '0' + num : num;      // Add the zero in front of number who is smaller than 10
		
}	

getTimeUntil(deadline) {
	const time = Date.parse(deadline) - Date.parse(new Date());  // Divide the current time with the time give bye the user

	const seconds = Math.floor((time/1000) % 60);        // Convert numbers into seconds
	const minutes = Math.floor((time/1000/60) % 60);     // Convert numbers into minutes
	const hours =  Math.floor(time/(1000*60*60) % 24);   // Convert numbers into hours
	const days = Math.floor(time/(1000*60*60*24));       // Convert numbers into days

	this.setState({days, hours, minutes, seconds});   // Assigns the converted values to the Updated State

}


  render() {
  	return (
  	<div>
		<div className="Clock-days">{ this.leading0(this.state.days) } days</div>
		<div className="Clock-hours">{ this.leading0(this.state.hours) } hours</div>
		<div className="Clock-minutes">{ this.leading0(this.state.minutes) } minutes</div>
		<div className="Clock-seconds">{ this.leading0(this.state.seconds) } seconds</div>
	</div>
	)
  }

}

export default Clock;