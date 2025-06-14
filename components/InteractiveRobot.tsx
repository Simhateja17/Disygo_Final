'use client'

import { SplineScene } from "./ui/spline";
import { useEffect, useState } from "react"

export function InteractiveRobot() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full h-[420px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-black relative overflow-hidden rounded-xl border border-white/5">
      <div className="w-full h-full relative overflow-visible pt-6 sm:pt-4 md:pt-0 bg-black">
        <div className="w-full h-full scale-[1.25] sm:scale-[1.2] md:scale-100 origin-center transform-gpu translate-y-2 sm:translate-y-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full bg-black"
          />
        </div>
      </div>
    </div>
  )
} 