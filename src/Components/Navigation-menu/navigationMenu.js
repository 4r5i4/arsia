import React, { Component } from 'react';

import './styles.css';
import NavigationButton from '../NavigationButton/navigationButton';

const NavigationMenu = (props) => {
	return (
		<div className="navigation-menu">
			{props.buttons.map((button) => {
				return <NavigationButton name={button} />;
			})}
		</div>
	);
};

export default NavigationMenu;
