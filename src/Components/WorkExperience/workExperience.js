import React from 'react';
import './styles.css';

const WorkExperience = (props) => {
	return (
		<div>
			{props.workExperience.map((experience, index) => {
				return (
					<div className="work-experience" key={index}>
						<div className="experience-meta">
							<p className="position">{experience.position}</p>
							<p className="company-name">{experience.companyName}</p>
							<p className="start-date">{experience.startDate}</p>
							<p className="end-date">{experience.endDate}</p>
							<p className="location">{experience.location}</p>
						</div>
						<ul className="experience-description">
							{experience.description.map((des, index) => {
								return <li key={index}>-{des}</li>;
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default WorkExperience;
