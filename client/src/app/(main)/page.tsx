"use client"
import { useMediaQuery } from "usehooks-ts"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to your Notion Clone</h1>
      <p className="text-lg text-gray-600">
        This is the main content area. The sidebar is on the left.
      </p>
    </div>
  )
}

export default Home
