import React, { Component } from 'react';
import NavigationMenu from './Components/Navigation-menu/navigationMenu';
import NavigationButton from './Components/NavigationButton/navigationButton';
import NameHeading from './Components/NameHeading/nameHeading';
import WorkExperience from './Components/WorkExperience/workExperience';

const navButtons = [ 'resume', 'about', 'contact' ];
const name = 'ARSIA';
const lastName = 'ARDALAN';
const workExperience = [
	{
		position: 'Full-Stack Web Developer',
		companyName: 'BroadSign International',
		startDate: 'Nov 2018',
		endDate: 'Feb 2018',
		location: 'Montreal, QC',
		description: [
			'Created front-end components using Backbone.js and React.js',
			'Refactored Backbone.js code into React.js',
			'Debugged back-end API written in Python',
			'Implemented TDD development using Cypress, Jenkins, and Python Unittest',
			'Provided QA assistance with regression and smoke tests',
			'Used Bitbucket and Git for version control and organization of features and bug fixes',
			'Added to and enhanced existing documentation via Confluence for new hires and on-boarding processes involving environment setting',
			'Used Jira and Bitbucket for feature/bug ownership, continuous integration pipelines, tracking of development time, and releases',
			'Collaborated in sprint planning, design sessions with PO, and spike sessions to discuss new features enhancements, time estimations, and feasibility of new features',
			'Consulted UX designers with grooming of UI features and provided insights for design elements',
			'Consistently initiated and contributed to team building activities to further develop interpersonal skills and enhance connections at the workplace'
		]
	}
];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			backgroundColorWhite: true
		};
	}
	invertColors = () => {
		this.setState({
			backgroundColorWhite: !this.state.backgroundColorWhite
		});
		if (this.state.backgroundColorWhite) {
			document.body.style.backgroundColor = 'black';
			document.body.style.color = 'white';
			document.getElementsByClassName('name-heading')[0].style.textShadow = 'none';
		} else {
			document.body.style.backgroundColor = 'white';
			document.body.style.color = 'black';
		}
	};
	render() {
		return (
			<div>
				<NameHeading name={name} lastName={lastName} />
				<NavigationMenu buttons={navButtons} />

				<WorkExperience workExperience={workExperience} />

				<button onClick={this.invertColors}>CLICK HERE</button>
			</div>
		);
	}
}

export default App;
