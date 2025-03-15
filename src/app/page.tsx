import PageLayout from "@/components/PageLayout";
import BusinessCard from "@/components/BusinessCard";

export default function Home() {
  return (
    <PageLayout>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Hello! 👋🤓☕</h1>

          <p>
            My name is Christopher Reynolds, and I&apos;m a Senior Software Engineer living in Indianapolis. I specialize in architecting scalable, high-performance web applications.
          </p>

          <p>
            I have a strong passion for TypeScript, React, Next.js, and backend development with Node.js.
            My expertise lies in building applications that scale to millions of users while maintaining
            clean, efficient, and maintainable code.
          </p>

          <p>
            I&apos;m deeply interested in functional programming, microservice architecture, blockchain technology, 
            and optimizing developer experience. I love working with GraphQL, AWS cloud services, and cutting-edge frontend frameworks.
          </p>

          <div>
            <p className="font-semibold text-slate-800">Expert:</p>
            <p>TypeScript, JavaScript (ES6+), React, Node.js, Next.js, GraphQL, Redux, Tailwind, Material-UI, Jest, Cypress, AWS (Lambda, DynamoDB, S3, CloudFront, IAM, CloudWatch)</p>
          </div>

          <div>
            <p className="font-semibold text-slate-800">Proficient:</p>
            <p>Scala, Redis, Kubernetes, Ruby, Java EE, C# .NET, PHP, SQL/MySQL/NoSQL</p>
          </div>
        </div>

        <div>
          <BusinessCard />
        </div>
      </div>
    </PageLayout>
  );
}
