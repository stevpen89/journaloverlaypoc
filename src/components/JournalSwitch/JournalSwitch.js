import React, { Component } from 'react'
import Journal from './IMG_08751_2.jpg'

export default class JournalSwitch extends Component {
	constructor(){
		super()
		this.state={
			selectedJournal:{
				template:"1",
			}
		}
	}

	handleChange(val){
		this.setState({
			selectedJournal:{
				template:val
			}
		})
	}

	masterSwitch(template){
		switch (template) {
			case "1": return 	<div className="switch">
												<div className="triple">
													<div className="glue" style={{bottom:'35px', right:"15px"}}>
														<input className="name" placeholder="this is 1"/>
														<input className="mission"/>
														<input className="dates"/>
													</div>
												</div>
												<div className="single">
													<input className="scripture"/>
												</div>
											</div>
			case "2": return 	<div className="switch">
												<div className="triple">
													<div className="glue" style={{bottom:'135px', right:"125px"}}>
														<input className="name" placeholder="this is 2"/>
														<input className="mission"/>
														<input className="dates"/>
													</div>
												</div>
												<div className="single">
													<input className="scripture"/>
												</div>
											</div>
			case "3": return 	<div className="switch">
												<div className="triple">
													<div className="glue" style={{bottom:'45px', right:"115px"}}>
														<input className="name" placeholder="this is 3"/>
														<input className="mission"/>
														<input className="dates"/>
													</div>
												</div>
												<div className="single">
													<input className="scripture"/>
												</div>
											</div>
			case "4": return 	<div className="switch">
												<div className="triple">
													<div className="glue" style={{bottom:'95px', right:"75px"}}>
														<input className="name" placeholder="this is 4"/>
														<input className="mission"/>
														<input className="dates"/>
													</div>
												</div>
												<div className="single">
													<input className="scripture"/>
												</div>
											</div>
			case "5": return 	<div className="switch">
												<div className="triple">
													<div className="glue" style={{bottom:'0px', right:"0px"}}>
														<input className="name" placeholder="this is 5"/>
														<input className="mission"/>
														<input className="dates"/>
													</div>
												</div>
												<div className="single">
													<input className="scripture"/>
												</div>
											</div>
			default: return <div className="switch">Default</div>
		}
	}

	render() {
		return (
			<div>
				<div className="selector"><input className="selector-input" placeholder="increment me" type='number' onChange={(e)=>this.handleChange(e.target.value)}/></div>
				{this.masterSwitch(this.state.selectedJournal.template)}
			</div>
		)
	}
}
