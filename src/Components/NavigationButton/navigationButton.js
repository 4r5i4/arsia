import React, { Component } from 'react';
import './styles.css';
const NavigationButton = (props) => {
	return <button className="navigation-btn">{props.name}</button>;
};

export default NavigationButton;
