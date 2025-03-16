import Image from "next/image";
import ContactCTA from "./ContactCTA";

export default function BusinessCard() {
  return (
    <div className="bg-slate-300 rounded-lg shadow-md overflow-hidden p-6">
      
      
        <div className="flex justify-center">
          <Image
            src="/crr.png"
            alt="Christopher Reynolds"
            width={150}
            height={150}
            className="rounded-full"
          />
            <div className="ml-6 mt-6 text-4xl font-bold text-slate-600">Christopher Reynolds</div>
        </div>
        
        <div className="my-4 dark:text-slate-600 font-semibold-lg">
          Senior Software Engineer experienced in application design and development, translating business
          requirements to technical specifications, project management, and microservice architecture seeks
          a position which will leverage current and emerging technologies in order to pursue company goals.
        </div>

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
            <div className="text-sm mt-2 dark:text-slate-600 font-semibold">React</div>
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
            <div className="text-sm mt-2 dark:text-slate-600 font-semibold">TypeScript</div>
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
            <div className="text-sm mt-2 dark:text-slate-600 font-semibold">Next.js</div>
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
            <div className="text-sm mt-2 dark:text-slate-600 font-semibold">Node.js</div>
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
            <div className="text-sm mt-2 dark:text-slate-600 font-semibold">GraphQL</div>
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
            <div className="text-sm mt-2 dark:text-slate-600 font-semibolddark:text-slate-600 font-semibold">AWS</div>
          </div>
        </div>

        <div>
          <ContactCTA />
        </div>
      
    </div>
  );
}
