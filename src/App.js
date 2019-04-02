import React, { Component } from 'react';
import NavigationMenu from './Components/Navigation-menu/navigationMenu';
import NavigationButton from './Components/NavigationButton/navigationButton';
import NameHeading from './Components/NameHeading/nameHeading';

const navButtons = [ 'resume', 'about', 'contact' ];

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
		} else {
			document.body.style.backgroundColor = 'white';
			document.body.style.color = 'black';
		}
	};
	render() {
		return (
			<div style={{ padding: '80px', letterSpacing: '5px' }}>
				<NavigationMenu buttons={navButtons} />

				<NameHeading name="ARSIA" lastName="ARDALAN" />
			</div>
		);
	}
}

export default App;
