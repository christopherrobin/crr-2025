import Image from "next/image";
import ContactCTA from "./ContactCTA";

export default function BusinessCard() {
  return (
    <div className="bg-slate-200 dark:bg-geist-800 rounded-lg shadow-md overflow-hidden">
      
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-3 text-stone-800">Christopher Reynolds</h2>
        
        <p className="mb-6 text-geist-600 dark:text-stone-900">
          Senior Software Engineer experienced in application design and development, translating business
          requirements to technical specifications, project management, and microservice architecture seeks
          a position which will leverage current and emerging technologies in order to pursue company goals.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 my-10">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 relative">
              <Image
                src="/react.svg"
                alt="React logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-sm mt-2 text-slate-900">React</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 relative">
              <Image
                src="/typescript.svg"
                alt="Typescript logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-sm mt-2 text-slate-900">TypeScript</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 relative">
              <Image
                src="/next.svg"
                alt="Next.js logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-sm mt-2 text-slate-900">Next.js</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 relative">
              <Image
                src="/node.svg"
                alt="Node.js logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-sm mt-2 text-slate-900">Node.js</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 relative">
              <Image
                src="/graphql.png"
                alt="GraphQL logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-sm mt-2 text-slate-900">GraphQL</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 relative bg-white rounded-full">
              <Image
                src="/aws.png"
                alt="AWS logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="text-sm mt-2 text-slate-900">AWS</div>
          </div>
        </div>

        <div>
          <ContactCTA />
        </div>
      </div>
    </div>
  );
}
