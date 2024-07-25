import React from "react";
import dayjs from "dayjs";
import "./index.scss";

function JobCard(props) {
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postedOn, "day");

  return (
    <div className="job-card-container">
      <div className="job-card">
        <div className="job-info">
          <h1 className="job-title">
            {props.title} - {props.company}
          </h1>
          <p className="job-details">
            {props.type} &#x2022; {props.experience} &#x2022; {props.location}
          </p>
          <div className="job-skills">
            {props.skills.map((skill, i) => (
              <p key={i} className="skill">
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="job-actions">
          <p className="posted-date">
            Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago
          </p>
          <a href={props.job_link} target="_blank" rel="noopener noreferrer">
            <button className="apply-button">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
