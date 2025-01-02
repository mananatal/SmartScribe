import React from 'react'
import { BackgroundLines } from '../ui/background-lines'
import { Button } from '../ui/button'
import Link from 'next/link'


function HeroSection() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            SmartScribe: Your AI-Powered <br/> Study Partner
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Turn your PDFs into living documents. Ask questions, summarize chapters, and explore concepts instantly. Learning has never been this intelligent.
      </p>
      <Link href={'/sign-up'} className='mt-4 relative z-10'>
        <Button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
          Start Learning Smarter Today!
        </Button>
      </Link>
      
    </BackgroundLines>
  )
}

export default HeroSection

