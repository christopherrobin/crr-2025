// components/ResumeEntries.tsx
import React from 'react';
import { Job } from '../../data/Resume';
import { parseHtmlLinks } from '../../utils/htmlStringParser';

interface ResumeEntryProps {
  job: Job;
}

const ResumeEntry: React.FC<ResumeEntryProps> = ({ job }) => {
  const { id, company, title, period, technologies, responsibilities } = job;
  
  return (
    <div id={id} className="scroll-mt-16">
      <h3 className="text-xl font-semibold">{title} at {company}</h3>
      <p className="text-geist-600 dark:text-indigo-400 italic mb-2">{period}</p>
      <p className="mb-3">{technologies}</p>
      <ul className="list-disc pl-5 space-y-1">
        {responsibilities.map((responsibility: string, index: number) => (
          <li key={index}>
            {parseHtmlLinks(responsibility, "text-indigo-600 hover:underline")}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ResumeEntriesProps {
  jobs: Job[];
}

const ResumeEntries: React.FC<ResumeEntriesProps> = ({ jobs }) => {
  return (
    <div className="space-y-8">
      {jobs.map((job: Job) => (
        <ResumeEntry key={job.id} job={job} />
      ))}
    </div>
  );
};

export default ResumeEntries;