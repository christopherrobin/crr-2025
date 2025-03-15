"use client";
import React from "react";
import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import ResumeEntries from "@/components/ResumeEntries";
import { skills, skillList, additionalSkills, jobs, education } from "../../../data/Resume";

export default function Resume() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageLayout>
      <div className="grid md:grid-cols1 gap-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold mb-6">Resume</h1>
          
          <div className="flex flex-wrap gap-2">
            <div className="mb-2 font-medium">Jump to:</div>
            {jobs.map((job, index) => (
              <React.Fragment key={job.id}>
                <a href={`#${job.id}`} className="hover:underline">{job.company}</a>
                {index < jobs.length - 1 && ','}
              </React.Fragment>
            ))}
          </div>
          
          <section>
            <h2 className="text-2xl font-bold pb-2 mb-4 border-b border-slate-400 dark:border-slate-400">Summary</h2>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
                  <p>{skill.skills}</p>
                </div>
              ))}
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Summary</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {skillList.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                
                <p className="mt-4">{additionalSkills}</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold pb-2 mb-4 border-b border-slate-400 dark:border-slate-400">Professional Experience</h2>
            
            <ResumeEntries jobs={jobs} />
          </section>
          
          <section>
            <h2 className="text-2xl font-bold pb-2 mb-4 border-b border-slate-400 dark:border-slate-400">Education</h2>
            
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p>{edu.degree}</p>
                <p className="text-geist-600 dark:text-indigo-400">{edu.period}</p>
              </div>
            ))}
          </section>
          
          <section>
            <h2 className="text-2xl font-bold pb-2 mb-4 border-b border-slate-400 dark:border-slate-400">Personal Projects</h2>
            
            <div>
              <p>Archived Personal projects available at <a href="https://github.com/christopherrobin/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:underline">https://github.com/christopherrobin/</a></p>
            </div>
          </section>
          
          {/* Back to top button - only shows when scrolled down */}
          {scrollY > 300 && (
            <div className="fixed bottom-8 right-8">
              <button
                onClick={scrollToTop}
                className="bg-slate-600 hover:bg-slate-600 text-white p-3 rounded-full shadow-lg transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Back to top"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}