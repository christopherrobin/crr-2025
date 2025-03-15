import Image from "next/image";

export default function BusinessCard() {
  return (
    <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64 w-full">
        <Image 
          src="/beach.jpg" 
          alt="Christopher's day at the lake" 
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-3 dark:text-white">Christopher Reynolds</h2>
        
        <p className="text-blue-200 dark:text-white mb-6">
          Senior Software Engineer experienced in application design and development, translating business
          requirements to technical specifications, project management, and microservice architecture seeks
          a position which will leverage current and emerging technologies in order to pursue company goals.
        </p>
        
        {/* Changed to grid-cols-3 for mobile, grid-cols-5 for medium screens */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 relative">
              <Image
                src="/react.svg"
                alt="React logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-sm mt-2">React</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 relative">
              <Image
                src="/typescript.svg"
                alt="Typescript logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-sm mt-2">TypeScript</div>
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
            <div className="text-sm mt-2">Node.js</div>
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
            <div className="text-sm mt-2">GraphQL</div>
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
            <div className="text-sm mt-2">AWS</div>
          </div>
        </div>
      </div>
    </div>
  );
}