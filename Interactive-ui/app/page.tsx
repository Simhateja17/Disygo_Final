'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { useEffect, useState } from "react"
 
function SplineSceneBasic() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Card className="w-full h-[420px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-black/[0.96] relative overflow-hidden rounded-xl">
      {isMounted && (
        <Spotlight
          className="hidden md:block md:left-60"
          size={700}
        />
      )}
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 relative z-10 flex flex-col justify-center order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Interactive 3D
          </h1>
          <p className="mt-2 md:mt-4 text-sm sm:text-base text-neutral-300 max-w-lg">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your design.
          </p>
        </div>

        {/* Right content - Robot container with scaling for small screens */}
        <div className="flex-1 relative order-1 md:order-2 min-h-[250px] flex items-center justify-center overflow-visible pt-6 sm:pt-4 md:pt-0">
          <div className="w-full h-full scale-[1.25] sm:scale-[1.2] md:scale-100 origin-center transform-gpu translate-y-2 sm:translate-y-0">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

// Add default export for the page
export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center py-6 md:py-10 bg-[#080809]">
      <div className="container max-w-6xl mx-auto px-4">
        <SplineSceneBasic />
      </div>
    </div>
  );
}
