import React from 'react';

const Resume = () => (
  <section className="page-section resume-section" id="resume">
    <div className="resume-content">
      <h2>Resume</h2>
      <p>
        Want a detailed look at my experience, skills, and projects?
        <br />
        You can download my resume below:
      </p>
      <a
        href="/assets/CV-engels.docx"
        download
        className="resume-button"
      >
        Download My Resume
      </a>
    </div>
  </section>
);

export default Resume;
