import Image from "next/image";

export default function BusinessCard() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
      {/* We'll need to add the actual images to your public folder */}
      <div className="relative h-64 w-full">
        <Image 
          src="/images/beach.jpg" 
          alt="Christopher's day at the lake" 
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-3">Christopher Reynolds</h2>
        
        <p className="text-slate-700 dark:text-slate-300 mb-6">
          Senior Software Engineer experienced in application design and development, translating business
          requirements to technical specifications, project management, and microservice architecture seeks
          a position which will leverage current and emerging technologies in order to pursue company goals.
        </p>
        
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/react.svg"
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
                src="/images/node.svg"
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
                src="/images/redux.svg"
                alt="Redux logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-sm mt-2">Redux</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/graphql.png"
                alt="GraphQL logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-sm mt-2">GraphQL</div>
          </div>
        </div>
      </div>
    </div>
  );
}