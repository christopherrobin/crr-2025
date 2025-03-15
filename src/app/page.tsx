import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import BusinessCard from "@/components/BusinessCard";

export default function Home() {
  return (
    <PageLayout>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Hello! 👋</h1>
          
          <p>
            My name is Christopher Reynolds, and I'm a Senior Software Engineer at Sportradar,
            living in Indianapolis. I specialize in architecting scalable, high-performance web applications.
          </p>
          
          <p>
            I have a strong passion for TypeScript, React, Next.js, and backend development with Node.js.
            My expertise lies in building applications that scale to millions of users while maintaining
            clean, efficient, and maintainable code.
          </p>
          
          <p>
            I'm deeply interested in functional programming, microservice architecture, blockchain technology, 
            and optimizing developer experience. I love working with GraphQL, AWS cloud services, and cutting-edge frontend frameworks.
          </p>

          <div>
            <p className="font-semibold">Expert:</p>
            <p>JavaScript (ES6+), Node.js, React, Next.js, TypeScript, GraphQL, Redux, Tailwind, Material-UI, Jest, Cypress, AWS (Lambda, DynamoDB, S3, CloudFront, IAM, CloudWatch)</p>
          </div>

          <div>
            <p className="font-semibold">Proficient:</p>
            <p>Scala, Redis, Kubernetes, Ruby, Java EE, C# .NET, PHP, SQL/MySQL/NoSQL</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <a
              href="https://github.com/christopherrobin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/christopherrr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full transition-colors"
            >
              LinkedIn
            </a>

            <Link
              href="/resume"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full transition-colors"
            >
              Resume
            </Link>
          </div>
        </div>
        <BusinessCard />
      </div>
    </PageLayout>
  );
}
