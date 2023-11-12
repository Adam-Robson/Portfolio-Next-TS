import React from 'react'
import Projects from '@/components/Projects'
import { projects } from '@/components/lib/data'

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-start items-center p-2">
      <h1 className="text-center text-7xl md:text-8xl font-light tracking-tighter subpixel-antialiased">
        projects
      </h1>
      <Projects projects={projects} />
    </div>
  )
}
