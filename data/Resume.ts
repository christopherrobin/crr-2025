// data/resume.ts
export type Skill = {
  category: string;
  skills: string;
};

export type Job = {
  id: string;
  company: string;
  title: string;
  period: string;
  technologies: string;
  responsibilities: string[];
  achievements?: string[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export const skills: Skill[] = [
  {
    category: "Expert",
    skills: "ECMAScript (ES6+), Node.js, React, GraphQL, Redux, Next.js, TypeScript, ESLint, Automated Unit Testing (Mocha, Jest, Chai, Sinon, Selenium), HTML/CSS (+Bootstrap, Material-UI, Tailwind, SASS), AWS (EC2, S3, RDS, Lambdas, DynamoDB, CloudFront, IAM, CloudWatch), Google Cloud Platform"
  },
  {
    category: "Proficient",
    skills: "Scala, Redis, Kubernetes, Ruby, Java EE, C# .NET, PHP, SQL/MySQL/NoSQL"
  }
];

export const skillList = [
  "HTML 5 / CSS 3 ( + Material UI, Bootstrap, Tailwind, SASS, LESS)",
  "JavaScript (ECMAScript, Babel, Next.js, NodeJS, React, Redux, Underscore/Lodash, Webpack, Apollo GraphQL)",
  "C# / C++ / ASP.NET",
  "Java EE, JSTL, Scala, Ruby",
  "SQL / MySQL / NoSQL",
  "Automated Unit Testing (Mocha, Jest, Chai, Sinon, Selenium)",
  "WCAG 2.2 and ADA Compliance",
  "UI / UX Development and Testing",
  "Agile (Scrum) Software Development",
  "Continuous delivery using tools like AWS, GitHub, CircleCI, Docker, and Jenkins"
];

export const additionalSkills = "+ Github, Optimizely, Akamai, Segment, Google Apps/AdSense/Analytics, Adobe Dynamic Tag Management, Confluence, JIRA, Blockchain technology";

export const jobs: Job[] = [
  {
    id: "sportradar",
    company: "Sportradar",
    title: "Senior Software Engineer",
    period: "September 2022 - Present",
    technologies: "Node.js, React, TypeScript, Apollo GraphQL, Tailwind, Material-UI, Recharts, D3, Vite, AWS Services (EC2, Lambda, DynamoDB, S3, IAM, CloudWatch, and more)",
    responsibilities: [
      "Leading frontend development as senior engineer for the Delivery team, establishing robust patterns and tooling adopted across the US Media development organization",
      "Architected systems handling billions of daily data points through distributed microservice architecture and multiple frontend services",
      "Served as Frontend architect for the Sportradar Developer Portal, enabling our client engineers to manage their API usage and access real-time analytics",
      "Designed and implemented scalable JavaScript solutions using functional programming principles, immutable data patterns, and unidirectional data flow for applications serving millions of users",
      "Maintained code quality through creation, review, and maintenance of distributed applications across the microservice ecosystem",
      "Collaborated cross-functionally with product owners, UX designers, customer service representatives, and external stakeholders to translate business requirements into technical solutions",
      "Led project management efforts by decomposing complex initiatives into manageable stories and tasks, enabling accurate estimation and on-time delivery"
    ]
  },
  {
    id: "boom",
    company: "Boom Entertainment",
    title: "Software Engineer",
    period: "August 2021 - September 2022",
    technologies: "JavaScript, React, TypeScript, Redux, Material-UI, Node.js, Next.js, Craco, SWC, Jest, ESLint, Husky",
    responsibilities: [
      "Software engineer leading front and back end development for the internal operations application at Boom, a tech company that works with professional sports leagues and large media companies. (NBC, NFL, YES, Barstool, Chirp Golf)",
      "Worked closely with the Sportradar API to create and maintain a robust collection of applications and workflows that are pivotal to Boom's success",
      "Lead and architected initiatives for outside vendors that were used by millions of people and distributed to viewers of NBC, CBS, etc."
    ]
  },
  {
    id: "angi",
    company: "Angi/Angie's List",
    title: "Senior Software Engineer",
    period: "July 2015 – June 2021",
    technologies: "JavaScript (ES6+), React, Redux, Next.js, Typescript, Node.js, Scala, Bootstrap, SASS",
    responsibilities: [
      "Senior software engineer leading front-end initiatives, writing clean and reusable JavaScript, and mentoring junior developers",
      "Led a massive front-end rebranding effort from Angie's List to Angi",
      "Responsible for giving constructive feedback through development help, code reviews, and retrospectives to less experienced engineers",
      "Participated as part of the transition team after the IAC acquisition and the following Home Advisor/Handy/Angie's List merger",
      "In 2016 I was part of the team that finished a multiple year initiative to drop the pay wall, integrate a lead generation vertical, and migrate our website to a completely new state-of-the-art platform"
    ]
  },
  {
    id: "hhgregg",
    company: "HH Gregg",
    title: "Front-End Developer",
    period: "July 2012 – July 2015",
    technologies: "HTML, CSS, JSTL, Javascript (Dojo / jQuery), UI / UX, Akamai CDN, Adobe Tag Management, SQL, IBM WebSphere Commerce, DB2",
    responsibilities: [
      "Responsible for on-call support and front-end development for hhgregg.com",
      "Working with business, marketing, and outside parties to create and implement business requirements, project plans, and development timelines.",
      "Configuration, implementation, development, and maintenance of Akamai CDN.",
      "Senior Front-End Developer for the 2015 redesign of hhgregg.com which included a focus on responsive, mobile first design",
      "The collection, measurement, analysis, and reporting of web data for the purpose of optimizing web usage (emphasis on UI/UX, web performance, and multi-variant testing)",
      "Responsible for the removal of analytical tools such as Omniture, Google Analytics, ClearSaleing, OpinionLab, and more. I then re-implemented them via Adobe's Dynamic Tag Management system.",
      "We won the award for \"2014 Best Retail Website\" from J.D. Power and associates, beating out contenders like Best Buy, Lowe's, Costco, Sears, and Home Depot",
      "Estimated total e-commerce sales were $50 million in 2013, a 39% increase compared to 2012",
      "2015 Q3 Quarterly Earnings reports reveal a 60% increase in hh gregg e-commerce sales despite a 5.9% decline in in-store sales"
    ]
  },
  {
    id: "ww",
    company: "The Worm's Way Group",
    title: "Full Stack Developer",
    period: "August 2011 - July 2012",
    technologies: "HTML, CSS, JavaScript (and jQuery), ASP.NET (Visual Basic/C#/SQL/Razor), Graphic/UI Design (Photoshop, Illustrator), Statistical and Development Analysis",
    responsibilities: [
      "Worked extensively with database administrators, marketing teams, and our back-end engineer to convert two Visual Basic websites to C# .NET MVC",
      "Technical analysis, maintenance, and support for Google Analytics and similar tagging/tracking software.",
      "Implemented style and branding guide with marketing for websites, promotions, and physical materials.",
      "Responsible for WormsWay.com support and development as well as the Wholesale Garden Supply business, BWGS.com"
    ]
  },
  {
    id: "hope",
    company: "The HOPE Foundation",
    title: "Web Developer and Marketing Associate",
    period: "May 2009 - August 2011",
    technologies: "PHP, MySQL, JavaScript (and jQuery), Graphic Design, mailing/emailing marketing promotions, marketing analysis, server and database administration",
    responsibilities: [
      "Responsible for all PHP, HTML, CSS, and JS development and support for HOPEFoundation.org",
      "Google Analytics and e-commerce statistical analysis with emphasis on UI/UX",
      "Created branding guide and website style guide, coordinated applying all the new rules throughout all departments.",
      "Creation of a completely custom (from scratch) user-based cloud platform to serve teachers and field professionals all types of media documents.",
      "Responsible for creating online systems to handle streaming video conferences, press events, and video workshops."
    ]
  },
  {
    id: "iufoundation",
    company: "The Indiana University Foundation",
    title: "Web Developer",
    period: "October 2008 - May 2009",
    technologies: "HTML, CSS, JavaScript, Graphic Design",
    responsibilities: [
      "Spam-proofed all email addresses and contact forms using JavaScript",
      "Converted old Visual Basic code to C# and tested/released the changes"
    ]
  },
  {
    id: "ivytech-job",
    company: "Ivy Tech (Bloomington, IN)",
    title: "Web Developer and Graphic Designer",
    period: "January 2008 - May 2009",
    technologies: "HTML, CSS, PHP, Graphic Design",
    responsibilities: [
      "Chosen from a long list of candidates at Ivy Tech - Bloomington to work as the junior web developer and design artist.",
      "Implemented and developed new PHP, HTML, and CSS on a professional level in support of the lead developer",
      "Creation and support of the website for the Indianapolis Center for Life Sciences and the Student Government Association"
    ]
  }
];

export const education = [
  {
    school: "Ivy Tech - Bloomington, IN",
    degree: "Associate of Applied Science (A.A.S)",
    period: "August 2007 - May 2009"
  }
];