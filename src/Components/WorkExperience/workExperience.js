import React from 'react';
import './styles.css';

const WorkExperience = (props) => {
	return (
		<div>
			{props.workExperience.map((experience, index) => {
				return (
					<div className="work-experience" key={index}>
						<div className="experience-meta">
							<h5>{experience.position}</h5>
							<p>{experience.companyName}</p>
							<p>{experience.startDate}</p>
							<p>{experience.endDate}</p>
							<p>{experience.location}</p>
						</div>
						<ul className="experience-description">
							{experience.description.map((des, index) => {
								return <li key={index}>{des}</li>;
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default WorkExperience;
