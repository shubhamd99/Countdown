import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import Footer from './Footer';


// Initial State
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2019',
			newDeadline: ''   //Empty string where we store user input data
		}
	}

// Updated State
changeDeadline(){
	
	this.setState({ deadline: this.state.newDeadline });
}


	render() {
		return (
			<div className="App">

			    <div className="App-title">Countdown to {this.state.deadline} </div>
			    
			   <Clock deadline={this.state.deadline} />

			    <Form inline className="Form-css">
			    	<FormControl className="Deadline-input" placeholder='new date' onChange = {event => this.setState({newDeadline: event.target.value})} />
			    	<Button variant="danger" onClick={() => this.changeDeadline()} > Submit</Button>
			    </Form>

			    <Footer />

			</div>
		)
		
	}
}

export default App;