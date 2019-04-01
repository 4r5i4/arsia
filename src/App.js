import React, { Component } from 'react';

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
			<div style={{ padding: '80px', letterSpacing: "5px" }}>
				<h1 style={{ fontWeight: 'bolder', fontSize: '100px', lineHeight: '50%', textShadow: "10px 10px 1px lightgrey, 0 17px 50px rgba(0,0,0,0.19)" }}>ARSIA</h1>
				<h1 style={{ fontWeight: 'bolder', fontSize: '100px', lineHeight: '50%', textShadow: "10px 10px 1px lightgrey, 0 17px 50px rgba(0,0,0,0.19)" }}>ARDALAN</h1>
				<br></br>
				<div className="buttongroup" style={{ display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: "black", boxShadow: '20px 22px 16px 0 rgba(0,0,0,0.19), 0 17px 50px 0 rgba(0,0,0,0.19)',}}>
					<button
						ref={this.buttongroup}
						style={{
							backgroundColor: 'black',
							border: 'none',
							
							color: 'white',
							fontSize: '15px',
							padding: '20px',
							lineHeight: '60%',
							
						}}
					>
						CONTACT
					</button>
					<button
						style={{
							backgroundColor: 'black',
							border: 'none',
							color: 'white',
							fontSize: '15px',
							padding: '20px',
							lineHeight: '60%',
							
						}}
					>
						RESUME
					</button>
					<button
						style={{
							backgroundColor: 'black',
							border: 'none',
							color: 'white',
							fontSize: '15px',
							padding: '20px',
							lineHeight: '60%',
							
						}}
					>
						GALLERY
					</button>
					<button onClick={this.invertColors} style={{display: "none"}}>TOGGLE BLACK</button>
				</div>
				{/* <button
					style={{
						backgroundColor: 'black',
						border: 'none',
						color: 'white',
						fontSize: '50px',
						padding: '20px',
						lineHeight: '60%',
						boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
						marginRight: '5px'
					}}
				>
					CONTACT
				</button>
				<button
					style={{
						backgroundColor: 'black',
						border: 'none',
						color: 'white',
						fontSize: '50px',
						padding: '20px',
						lineHeight: '60%',
						boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
						marginRight: '5px'
					}}
				>
					RESUME
				</button>
				<button
					style={{
						backgroundColor: 'black',
						border: 'none',
						color: 'white',
						fontSize: '50px',
						padding: '20px',
						lineHeight: '60%',
						boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
						marginRight: '5px'
					}}
				>
					GALLERY OF ARSIA
				</button> */}
			</div>
		);
	}
}

export default App;
