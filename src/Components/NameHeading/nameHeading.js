import React from 'react';
import './styles.css';

const NameHeading = (props) => {
	return (
		<div style={{ position: 'relative' }}>
			<div className="name-heading">
				<div>{props.name}</div>
				<div>{props.lastName}</div>
			</div>
		</div>
	);
};

export default NameHeading;
