import React from 'react';
import './styles.css';

const WorkExperience = (props) => {
	return (
		<div>
			{props.workExperience.map((experience, index) => {
				return (
					<div className="work-experience" key={index}>
						<div className="experience-meta">
							<p className="meta-position">{experience.position}</p>
							<p className="meta-company-name">{experience.companyName}</p>
							<p className="meta-start-date">{experience.startDate}</p>
							<p className="meta-to" style={{ margin: '0' }}>
								to
							</p>
							<p className="meta-end-date">{experience.endDate}</p>
							<p className="meta-location">{experience.location}</p>
						</div>

						<ul>
							<li>TALAL IS AN ASSHOLE</li>
							{experience.descriptions.map((description, index) => {
								return (
									<li key={index} className="experience-description">
										<p>{description}</p>
									</li>
								);
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default WorkExperience;
