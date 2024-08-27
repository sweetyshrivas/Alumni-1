import React from 'react';
import './JobPortalPage.css';

const JobPortalPage = () => {
  return (
    <div className="job-portal-page">
      <h1>Job Portal</h1>
      <div className="job-listing">
        <div className="job-card">
          <h2>Software Engineer</h2>
          <p><strong>Company:</strong> Tech Corp</p>
          <p><strong>Location:</strong> San Francisco, CA</p>
          <p><strong>Description:</strong> Develop and maintain software applications.</p>
          <a href="#" className="btn-apply">Apply Now</a>
        </div>
        <div className="job-card">
          <h2>Marketing Manager</h2>
          <p><strong>Company:</strong> Market Masters</p>
          <p><strong>Location:</strong> New York, NY</p>
          <p><strong>Description:</strong> Lead marketing strategies and campaigns.</p>
          <a href="#" className="btn-apply">Apply Now</a>
        </div>
      </div>
    </div>
  );
};

export default JobPortalPage;
