import React, { Component } from 'react';
import NavigationMenu from './Components/Navigation-menu/navigationMenu';
import NavigationButton from './Components/NavigationButton/navigationButton';
import NameHeading from './Components/NameHeading/nameHeading';

const navButtons = [ 'resume', 'about', 'contact' ];
const name = 'ARSIA';
const lastName = 'ARDALAN';

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
				<button onClick={this.invertColors}>CLICK HERE</button>
			</div>
		);
	}
}

export default App;
