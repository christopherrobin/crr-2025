"use client";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";

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
    <div className="min-h-screen flex flex-col">
      <header className="p-6">
        <Navigation />
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8 pb-20 max-w-5xl">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold mb-6">Resume</h1>
            
            <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">
              <div className="mb-2 font-medium">Jump to:</div>
              <div className="flex flex-wrap gap-2">
                <a href="#sportradar" className="hover:underline">Sportradar</a>,
                <a href="#boom" className="hover:underline">Boom</a>,
                <a href="#angi" className="hover:underline">Angi</a>,
                <a href="#hhgregg" className="hover:underline">HH Gregg</a>,
                <a href="#ww" className="hover:underline">Worm&apos;s Way Group</a>,
                <a href="#hope" className="hover:underline">HOPE Foundation</a>,
                <a href="#iufoundation" className="hover:underline">IU Foundation</a>
              </div>
            </div>
            
            <section>
              <h2 className="text-2xl font-bold pb-2 mb-4 border-b border-slate-300 dark:border-slate-700">Summary</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert</h3>
                  <p>
                    ECMAScript (ES6+), Node.js, React, GraphQL, Redux, Next.js, TypeScript, ESLint, Automated Unit Testing (Mocha, Jest, Chai, Sinon, Selenium), HTML/CSS (+Bootstrap, Material-UI, Tailwind, SASS), AWS (EC2, S3, RDS, Lambdas, DynamoDB, CloudFront, IAM, CloudWatch), Google Cloud Platform
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proficient</h3>
                  <p>Scala, Redis, Kubernetes, Ruby, Java EE, C# .NET, PHP, SQL/MySQL/NoSQL</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Summary</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>HTML 5 / CSS 3 ( + Material UI, Bootstrap, Tailwind, SASS, LESS)</li>
                    <li>JavaScript (ECMAScript, Babel, Next.js, NodeJS, React, Redux, Underscore/Lodash, Webpack, Apollo GraphQL)</li>
                    <li>C# / C++ / ASP.NET</li>
                    <li>Java EE, JSTL, Scala, Ruby</li>
                    <li>SQL / MySQL / NoSQL</li>
                    <li>Automated Unit Testing (Mocha, Jest, Chai, Sinon, Selenium)</li>
                    <li>WCAG 2.2 and ADA Compliance</li>
                    <li>UI / UX Development and Testing</li>
                    <li>Agile (Scrum) Software Development</li>
                    <li>Continuous delivery using tools like AWS, GitHub, CircleCI, Docker, and Jenkins</li>
                  </ul>
                  
                  <p className="mt-4">
                    + Github, Optimizely, Akamai, Segment, Google Apps/AdSense/Analytics, Adobe Dynamic Tag Management, Confluence, JIRA, Blockchain technology
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold pb-2 mb-4 border-b border-slate-300 dark:border-slate-700">Professional Experience</h2>
              
              <div className="space-y-8">
                <div id="sportradar" className="scroll-mt-16">
                  <h3 className="text-xl font-semibold">Senior Software Engineer at Sportradar</h3>
                  <p className="text-slate-600 dark:text-slate-400 italic mb-2">September 2022 - Present</p>
                  <p className="mb-3">Node.js, React, TypeScript, Apollo GraphQL, Tailwind, Material-UI, Recharts, D3, AWS Services (EC2, Lambda, DynamoDB, S3, IAM, CloudWatch, and more)</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Leading frontend development as senior engineer for the Delivery team, establishing robust patterns and tooling adopted across the US Media development organization</li>
                    <li>Architected systems handling billions of daily data points through distributed microservice architecture and multiple frontend services</li>
                    <li>Served as Frontend architect for the Sportradar Developer Portal, enabling our client engineers to manage their API usage and access real-time analytics</li>
                    <li>Designed and implemented scalable JavaScript solutions using functional programming principles, immutable data patterns, and unidirectional data flow for applications serving millions of users</li>
                    <li>Maintained code quality through creation, review, and maintenance of distributed applications across the microservice ecosystem</li>
                    <li>Collaborated cross-functionally with product owners, UX designers, customer service representatives, and external stakeholders to translate business requirements into technical solutions</li>
                    <li>Led project management efforts by decomposing complex initiatives into manageable stories and tasks, enabling accurate estimation and on-time delivery</li>
                  </ul>
                </div>
                
                <div id="boom" className="scroll-mt-16">
                  <h3 className="text-xl font-semibold">Software Engineer at Boom Entertainment</h3>
                  <p className="text-slate-600 dark:text-slate-400 italic mb-2">August 2021 - September 2022</p>
                  <p className="mb-3">JavaScript, React, TypeScript, Redux, Material-UI, Node.js, Next.js, Craco, SWC, Jest, ESLint, Husky</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Software engineer leading front and back end development for the internal operations application at Boom, a tech company that works with professional sports leagues and large media companies. (NBC, NFL, YES, Barstool, Chirp Golf)</li>
                    <li>Worked closely with the Sportradar API to create and maintain a robust collection of applications and workflows that are pivotal to Boom&apos;s success</li>
                    <li>Lead and architected initiatives for outside vendors that were used by millions of people and distributed to viewers of NBC, CBS, etc.</li>
                  </ul>
                </div>
                
                <div id="angi" className="scroll-mt-16">
                  <h3 className="text-xl font-semibold">Senior Software Engineer at Angi/Angie&apos;s List</h3>
                  <p className="text-slate-600 dark:text-slate-400 italic mb-2">July 2015 – June 2021</p>
                  <p className="mb-3">JavaScript (ES6+), React, Redux, Next.js, Typescript, Node.js, Scala, Bootstrap, SASS</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Senior software engineer leading front-end initiatives, writing clean and reusable JavaScript, and mentoring junior developers</li>
                    <li>Led a massive front-end rebranding effort from Angie&apos;s List to Angi</li>
                    <li>Responsible for giving constructive feedback through development help, code reviews, and retrospectives to less experienced engineers</li>
                    <li>Participated as part of the transition team after the IAC acquisition and the following Home Advisor/Handy/Angie&apos;s List merger</li>
                    <li>In 2016 I was part of the team that finished a multiple year initiative to drop the pay wall, integrate a lead generation vertical, and migrate our website to a completely new state-of-the-art platform</li>
                  </ul>
                </div>
                
                <div id="hhgregg" className="scroll-mt-16">
                  <h3 className="text-xl font-semibold">Front-End Developer at HH Gregg</h3>
                  <p className="text-slate-600 dark:text-slate-400 italic mb-2">July 2012 – July 2015</p>
                  <p className="mb-3">HTML, CSS, JSTL, Javascript (Dojo / jQuery), UI / UX, Akamai CDN, Adobe Tag Management, SQL, IBM WebSphere Commerce, DB2</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Responsible for on-call support and front-end development for hhgregg.com</li>
                    <li>Working with business, marketing, and outside parties to create and implement business requirements, project plans, and development timelines.</li>
                    <li>Configuration, implementation, development, and maintenance of Akamai CDN.</li>
                    <li>Senior Front-End Developer for the 2015 redesign of hhgregg.com which included a focus on responsive, mobile first design</li>
                    <li>The collection, measurement, analysis, and reporting of web data for the purpose of optimizing web usage (emphasis on UI/UX, web performance, and multi-variant testing)</li>
                    <li>Responsible for the removal of analytical tools such as Omniture, Google Analytics, ClearSaleing, OpinionLab, and more. I then re-implemented them via Adobe&apos;s Dynamic Tag Management system.</li>
                    <li>
                      We won the <a href="https://www.jdpower.com/business/press-releases/2014-appliance-shopper-website-evaluation-study" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">award for &quot;2014 Best Retail Website&quot;</a> from J.D. Power and associates, beating out contenders like Best Buy, Lowe&apos;s, Costco, Sears, and Home Depot
                    </li>
                    <li>Estimated total e-commerce sales were $50 million in 2013, a 39% increase compared to 2012</li>
                    <li>2015 Q3 Quarterly Earnings reports reveal a 60% increase in hh gregg e-commerce sales despite a 5.9% decline in in-store sales</li>
                  </ul>
                </div>
                
                <div id="ww" className="scroll-mt-16">
                  <h3 className="text-xl font-semibold">Full Stack Developer at The Worm&apos;s Way Group</h3>
                  <p className="text-slate-600 dark:text-slate-400 italic mb-2">August 2011 - July 2012</p>
                  <p className="mb-3">HTML, CSS, JavaScript (and jQuery), ASP.NET (Visual Basic/C#/SQL/Razor), Graphic/UI Design (Photoshop, Illustrator), Statistical and Development Analysis</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Worked extensively with database administrators, marketing teams, and our back-end engineer to convert two Visual Basic websites to C# .NET MVC</li>
                    <li>Technical analysis, maintenance, and support for Google Analytics and similar tagging/tracking software.</li>
                    <li>Implemented style and branding guide with marketing for websites, promotions, and physical materials.</li>
                    <li>Responsible for WormsWay.com support and development as well as the Wholesale Garden Supply business, BWGS.com</li>
                  </ul>
                </div>
                
                <div id="hope" className="scroll-mt-16">
                  <h3 className="text-xl font-semibold">Web Developer and Marketing Associate at The HOPE Foundation</h3>
                  <p className="text-slate-600 dark:text-slate-400 italic mb-2">May 2009 - August 2011</p>
                  <p className="mb-3">PHP, MySQL, JavaScript (and jQuery), Graphic Design, mailing/emailing marketing promotions, marketing analysis, server and database administration</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Responsible for all PHP, HTML, CSS, and JS development and support for HOPEFoundation.org</li>
                    <li>Google Analytics and e-commerce statistical analysis with emphasis on UI/UX</li>
                    <li>Created branding guide and website style guide, coordinated applying all the new rules throughout all departments.</li>
                    <li>Creation of a completely custom (from scratch) user-based cloud platform to serve teachers and field professionals all types of media documents.</li>
                    <li>Responsible for creating online systems to handle streaming video conferences, press events, and video workshops.</li>
                  </ul>
                </div>
                
                <div id="iufoundation" className="scroll-mt-16">
                  <h3 className="text-xl font-semibold">Web Developer at The Indiana University Foundation</h3>
                  <p className="text-slate-600 dark:text-slate-400 italic mb-2">October 2008 - May 2009</p>
                  <p className="mb-3">HTML, CSS, JavaScript, Graphic Design</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Spam-proofed all email addresses and contact forms using JavaScript</li>
                    <li>Converted old Visual Basic code to C# and tested/released the changes</li>
                  </ul>
                </div>
                
                <div className="scroll-mt-16">
                  <h3 className="text-xl font-semibold">Web Developer and Graphic Designer at Ivy Tech (Bloomington, IN)</h3>
                  <p className="text-slate-600 dark:text-slate-400 italic mb-2">January 2008 - May 2009</p>
                  <p className="mb-3">HTML, CSS, PHP, Graphic Design</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Chosen from a long list of candidates at Ivy Tech - Bloomington to work as the junior web developer and design artist.</li>
                    <li>Implemented and developed new PHP, HTML, and CSS on a professional level in support of the lead developer</li>
                    <li>Creation and support of the website for the Indianapolis Center for Life Sciences and the Student Government Association</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold pb-2 mb-4 border-b border-slate-300 dark:border-slate-700">Education</h2>
              
              <div>
                <h3 className="text-xl font-semibold">Ivy Tech - Bloomington, IN</h3>
                <p>Associate of Applied Science (A.A.S)</p>
                <p className="text-slate-600 dark:text-slate-400">August 2007 - May 2009</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold pb-2 mb-4 border-b border-slate-300 dark:border-slate-700">Personal Projects</h2>
              
              <div>
                <p>Personal projects available at <a href="https://github.com/christopherrobin/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://github.com/christopherrobin/</a></p>
              </div>
            </section>
            
            {/* Back to top button - only shows when scrolled down */}
            {scrollY > 300 && (
              <div className="fixed bottom-8 right-8">
                <button
                  onClick={scrollToTop}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors flex items-center justify-center"
                  aria-label="Back to top"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </button>
              </div>
            )}
          </div>
      </main>
    </div>
  );
}