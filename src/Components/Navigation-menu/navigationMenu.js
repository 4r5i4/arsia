import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from '../About/about';
import Resume from '../Resume/resume';
import Contact from '../Contact/contact';

import './styles.css';
import NavigationButton from '../NavigationButton/navigationButton';

const NavigationMenu = (props) => {
	return (
		<Router>
			<div className="navigation-menu">
				{props.buttons.map((button, index) => {
					if (button !== 'resume') {
						return (
							<Link to={`/${button}`} key={index}>
								<NavigationButton name={button} />
							</Link>
						);
					} else {
						return (
							<Link to="/" key={index}>
								<NavigationButton name={button} />
							</Link>
						);
					}
				})}
			</div>

			<Switch>
				<Route exact path="/" component={Resume} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
			</Switch>
		</Router>
	);
};

export default NavigationMenu;
