'use client';

import { type KeyboardEvent, useState } from 'react';

import { jobs } from '@/app/data/site';

export function ExperienceSection() {
  const [activeJob, setActiveJob] = useState(0);
  const selectedJob = jobs[activeJob];

  const handleJobKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(event.key)) {
      return;
    }

    event.preventDefault();
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (index + direction + jobs.length) % jobs.length;
    setActiveJob(nextIndex);
    document.getElementById(`job-tab-${nextIndex}`)?.focus();
  };

  return (
    <section id="experience" className="experience">
      <h2 className="numbered-heading">Where I&apos;ve Worked</h2>
      <div className="jobs-tabs">
        <div className="jobs-tablist" role="tablist" aria-label="Work history">
          {jobs.map((job, index) => (
            <button
              className={index === activeJob ? 'job-tab active' : 'job-tab'}
              id={`job-tab-${index}`}
              key={job.company}
              role="tab"
              type="button"
              aria-selected={index === activeJob}
              aria-controls={`job-panel-${index}`}
              tabIndex={index === activeJob ? 0 : -1}
              onClick={() => setActiveJob(index)}
              onKeyDown={event => handleJobKeyDown(event, index)}
            >
              {job.company}
            </button>
          ))}
        </div>

        <article
          className="job-panel"
          id={`job-panel-${activeJob}`}
          role="tabpanel"
          aria-labelledby={`job-tab-${activeJob}`}
        >
          <h3>
            {selectedJob.title} <span>@ {selectedJob.company}</span>
          </h3>
          <p className="job-range">{selectedJob.range}</p>
          <ul className="fancy-list">
            {selectedJob.bullets.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
